/**
 * CondoBill - Google Apps Script for Cloud Sync
 * 
 * Setup Instructions:
 * 1. Go to https://script.google.com
 * 2. Create a new project
 * 3. Paste this code
 * 4. Create a new Google Sheet (or use existing)
 * 5. Copy the Sheet ID from the URL
 * 6. Update SHEET_ID below
 * 7. Update SECRET_TOKEN below (change this to your own secret!)
 * 8. Deploy > New Deployment > Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 9. Copy the Web App URL
 * 10. Enter the URL and token in CondoBill Settings > Cloud Sync
 */

// ==================== CONFIGURATION ====================
const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';  // Replace with your Google Sheet ID
const SECRET_TOKEN = 'your-secret-token-here';  // Change this to a secure token!

// ==================== MAIN FUNCTIONS ====================

/**
 * Handle POST requests from the CondoBill app
 */
function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    const { action, token } = body;

    // Verify token
    if (token !== SECRET_TOKEN) {
      return jsonResponse({ success: false, error: 'Invalid token' });
    }

    switch (action) {
      case 'push':
        return handlePush(body.data);
      case 'pull':
        return handlePull();
      case 'test':
        return jsonResponse({ success: true, message: 'Connection successful' });
      default:
        return jsonResponse({ success: false, error: 'Unknown action' });
    }
  } catch (err) {
    return jsonResponse({ success: false, error: err.message });
  }
}

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
  return jsonResponse({ 
    success: true, 
    message: 'CondoBill Sync API is running',
    timestamp: new Date().toISOString()
  });
}

// ==================== PUSH DATA ====================

function handlePush(data) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  
  // Push each data store to a separate sheet
  const stores = ['residents', 'bills', 'payments', 'settings', 'activity', 'syncLog'];
  
  for (const store of stores) {
    const records = data[store] || [];
    pushSheetData(ss, store, records);
  }
  
  // Add sync metadata
  pushSyncMetadata(ss, {
    timestamp: new Date().toISOString(),
    action: 'push'
  });
  
  return jsonResponse({ success: true, message: 'Data pushed successfully' });
}

function pushSheetData(ss, sheetName, records) {
  let sheet = ss.getSheetByName(sheetName);
  
  // Create sheet if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }
  
  // Clear existing data
  sheet.clear();
  
  if (records.length === 0) return;
  
  // Get headers from all records
  const allKeys = new Set();
  for (const record of records) {
    Object.keys(record).forEach(key => allKeys.add(key));
  }
  const headers = Array.from(allKeys);
  
  // Write headers
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Write data rows
  if (records.length > 0) {
    const rows = records.map(record => {
      return headers.map(header => {
        const value = record[header];
        // Convert objects to strings for storage
        if (typeof value === 'object' && value !== null) {
          return JSON.stringify(value);
        }
        return value;
      });
    });
    
    sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
  }
  
  // Auto-resize columns
  for (let i = 1; i <= headers.length; i++) {
    sheet.autoResizeColumn(i);
  }
}

function pushSyncMetadata(ss, metadata) {
  let sheet = ss.getSheetByName('_sync');
  if (!sheet) {
    sheet = ss.insertSheet('_sync');
    sheet.getRange(1, 1, 1, 3).setValues([['timestamp', 'action', 'id']]);
  }
  
  sheet.appendRow([
    metadata.timestamp,
    metadata.action,
    Utilities.getUuid()
  ]);
}

// ==================== PULL DATA ====================

function handlePull() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const data = {};
  
  const stores = ['residents', 'bills', 'payments', 'settings', 'activity', 'syncLog'];
  
  for (const store of stores) {
    data[store] = pullSheetData(ss, store);
  }
  
  return jsonResponse({ success: true, data });
}

function pullSheetData(ss, sheetName) {
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) return [];
  
  const data = sheet.getDataRange().getValues();
  if (data.length <= 1) return []; // Only headers or empty
  
  const headers = data[0];
  const records = [];
  
  for (let i = 1; i < data.length; i++) {
    const record = {};
    for (let j = 0; j < headers.length; j++) {
      let value = data[i][j];
      
      // Try to parse JSON strings back to objects
      if (typeof value === 'string' && (value.startsWith('{') || value.startsWith('['))) {
        try {
          value = JSON.parse(value);
        } catch (e) {
          // Keep as string
        }
      }
      
      // Convert empty strings to null
      if (value === '') value = null;
      
      record[headers[j]] = value;
    }
    records.push(record);
  }
  
  return records;
}

// ==================== UTILITY ====================

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
