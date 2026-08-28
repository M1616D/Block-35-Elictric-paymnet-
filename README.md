# ⚡ CondoBill - Condominium Electrical Bill Collection System

A professional, responsive web application for managing electrical bill collection in a condominium building. Works offline with local storage and syncs to Google Sheets for cloud backup.

## 🏗️ Building Structure

- **7 Floors**: Ground Floor + Floors 1-6
- **Ground Floor**: 10 houses (G01 - G10)
- **Floors 1-6**: 8 houses each (101-108, 201-208, etc.)
- **Total**: 58 houses (customizable in settings)

## 🚀 Quick Start

### Option 1: Open Directly
1. Open `index.html` in any modern browser
2. Start adding residents and entering watts!

### Option 2: Host Locally
```bash
# Using Python
python -m http server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📱 Features

### Dashboard
- Real-time collection progress with visual ring chart
- Floor-by-floor payment status overview
- Quick stats: Total houses, Paid, Pending, Total ETB
- Recent activity feed

### Residents Management
- Add, edit, delete residents
- Filter by floor or search by name/house/phone
- Full resident details: name, phone, email, members, notes

### ⚡ Watt Entry
- Individual entry: Enter watts for each house with live ETB calculation
- Quick Entry (Batch Mode): Go through houses one by one like a form
- Auto-calculate ETB based on configurable rate
- Filter by floor

### 💰 Payments
- Record payments with method, date, receipt number
- Filter by status: Paid, Pending, Overdue
- Reverse payments if needed
- Monthly summary bar

### 📊 Reports
- **Overview Report**: Summary with floor breakdown table
- **Unpaid Report**: List of all unpaid houses with quick pay button
- **Floor Report**: Detailed per-floor breakdown
- **History Report**: Monthly collection history

### ☁️ Cloud Sync (Google Sheets)
- Push all data to Google Sheets for backup
- Pull data from cloud to restore
- Export/Import local JSON backup
- Works offline, sync when connected

### ⚙️ Settings
- Edit ETB per watt rate
- Configure building structure (floors, houses per floor)
- Clear all data / Reset settings

## ☁️ Google Sheets Sync Setup

### Step 1: Create Google Apps Script
1. Go to [Google Apps Script](https://script.google.com)
2. Click **New Project**
3. Paste the contents of `google-apps-script.js`
4. Update these values:
   ```javascript
   const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';
   const SECRET_TOKEN = 'your-secure-token-here';
   ```

### Step 2: Get Google Sheet ID
1. Create a new Google Sheet (or use existing)
2. Copy the ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit
   ```

### Step 3: Deploy the Script
1. In Apps Script, click **Deploy** > **New Deployment**
2. Select **Web App**
3. Execute as: **Me**
4. Who has access: **Anyone**
5. Click **Deploy**
6. Copy the Web App URL

### Step 4: Configure CondoBill
1. In CondoBill, go to **Settings** > **Cloud Sync** (or click Sync in sidebar)
2. Paste the Web App URL
3. Enter your secret token
4. Click **Test Connection**
5. Click **Save Configuration**

### Step 5: Use Sync
- **Pull on Open**: Click "Pull Data from Cloud" to download latest data
- **Push When Done**: Click "Push Data to Cloud" to upload changes

## 📋 Usage Workflow

### Daily Routine
1. **Open CondoBill** → Pull from cloud (first time)
2. **Enter Watts** → Go to "Enter Watts" page, enter each house's meter reading
3. **Record Payments** → As residents pay, go to "Payments" and record
4. **Push to Cloud** → When done, push data back to Google Sheets

### Monthly Routine
1. Set the correct month/year in the month selector
2. Enter all watt readings
3. Track payments throughout the month
4. Run reports to see collection status
5. Follow up with unpaid houses

## 📱 Device Compatibility

- **Phones**: Optimized for mobile with bottom navigation
- **Tablets**: Adaptive layout
- **PCs/Laptops**: Full sidebar navigation, desktop-optimized
- **Works offline**: All data stored locally in browser (IndexedDB)

## 💾 Data Storage

- **Local**: IndexedDB (browser storage) - fast, works offline
- **Cloud**: Google Sheets (backup) - accessible from anywhere
- **Export**: JSON file backup - portable, importable

## ⚡ ETB Calculation

```
ETB Cost = Watts Used × ETB per Watt Rate
```

Default rate: **0.15 ETB per watt** (configurable in Settings)

## 🐛 Troubleshooting

### Data not saving?
- Ensure your browser supports IndexedDB (all modern browsers do)
- Check if browser storage is full

### Google Sheets sync not working?
- Verify the Apps Script is deployed as Web App
- Check that SHEET_ID and SECRET_TOKEN match
- Ensure the Sheet exists and is accessible

### Performance issues?
- Clear browser cache
- Export data, clear all, then import backup
- Reduce activity log if very large

## 📁 Project Structure

```
condobill/
├── index.html          # Main HTML (complete UI)
├── style.css           # All styling (mobile-first)
├── app.js              # Application logic (IndexedDB, UI, sync)
├── google-apps-script.js  # Server-side sync script
└── README.md           # This file
```

## 🔧 Customization

### Change Building Structure
1. Go to Settings
2. Update "Total Floors", "Houses per Floor", "Ground Floor Houses"
3. Click "Apply Building Structure"

### Change Electricity Rate
1. Go to Settings > Billing Configuration
2. Update "ETB per Watt"
3. Or click "Change" next to the rate display on the Watts page

## 📄 License

Free to use and modify. Built for condominium management.

---

**CondoBill** - Making electrical bill collection simple and accurate ⚡
