/**
 * CondoBill - Condominium Electrical Bill Collection System
 * Complete Application Logic with i18n, Theme, Login, Lock Screen, Charts
 */

// ==================== TRANSLATIONS (i18n) ====================
const TRANSLATIONS = {
    en: {
        nav_dashboard: 'Dashboard', nav_residents: 'Residents', nav_watts: 'Enter Watts',
        nav_payments: 'Payments', nav_reports: 'Reports', nav_sync: 'Cloud Sync', nav_settings: 'Settings', nav_cover: 'Cover Payment', nav_receipts: 'Receipts',
        nav_dashboard_short: 'Home', nav_settings_short: 'Settings', nav_residents_short: 'Residents', nav_watts_short: 'Watts',
        nav_payments_short: 'Pay', nav_reports_short: 'Reports',
        stat_total_houses: 'Total Houses', stat_paid: 'Paid', stat_pending: 'Pending', stat_total_etb: 'Total ETB',
        monthly_overview: 'Monthly Overview', collected_label: 'Collected',
        expected: 'Expected', collected: 'Collected', outstanding: 'Outstanding',
        floor_status: 'Floor Status', recent_activity: 'Recent Activity',
        no_activity: 'No recent activity', no_residents: 'No residents yet',
        no_results: 'No results found', no_houses: 'No houses to bill',
        no_records: 'No records', no_history: 'No history yet',
        all_paid: 'All Paid!', all_done: 'All done!', batch_complete: 'Batch entry complete!',
        btn_add: 'Add', btn_save: 'Save', btn_cancel: 'Cancel', btn_confirm: 'Confirm',
        btn_change: 'Change', btn_test: 'Test', btn_record: 'Record',
        btn_quick_entry: 'Quick Entry', btn_save_all_watts: 'Save All Watt Entries',
        btn_record_payment: 'Record Payment', btn_apply_structure: 'Apply Building Structure',
        btn_clear_data: 'Clear All Data', btn_back: 'Back', btn_skip: 'Skip', btn_save_next: 'Save',
        btn_pull: 'Pull Data from Cloud', btn_push: 'Push Data to Cloud',
        btn_export: 'Export Backup (JSON)', btn_import: 'Import from Backup',
        filter_all: 'All', filter_paid: 'Paid', filter_pending: 'Pending',
        floor_ground: 'Ground',
        report_overview: 'Overview', report_unpaid: 'Unpaid', report_by_floor: 'By Floor', report_history: 'History',
        modal_add_resident: 'Add Resident', modal_edit_resident: 'Edit Resident',
        modal_record_payment: 'Record Payment', modal_quick_entry: 'Quick Watt Entry',
        label_floor: 'Floor', label_house_number: 'House Number',
        label_first_name: 'First Name', label_last_name: 'Last Name',
        label_phone: 'Phone', label_email: 'Email', label_members: 'Members', label_notes: 'Notes',
        label_month: 'Month', label_year: 'Year', label_amount_due: 'Amount Due',
        label_amount_paid: 'Amount Paid', label_method: 'Method', label_date: 'Date',
        label_receipt: 'Receipt #', label_watts_used: 'Watts Used',
        method_cash: 'Cash', method_bank: 'Bank Transfer', method_mobile: 'Mobile Money',
        method_check: 'Check', method_other: 'Other',
        rate_label: 'Rate:',
        sync_connection: 'Connection Status', sync_last: 'Last Sync',
        sync_pending: 'Pending Changes', sync_setup: 'Setup', sync_token: 'Secret Token',
        sync_actions: 'Actions', sync_history: 'Sync History',
        settings_building: 'Building Information', settings_building_name: 'Building Name',
        settings_address: 'Address', settings_phone: 'Contact Phone',
        settings_billing: 'Billing Configuration', settings_etb_per_watt: 'ETB per Watt',
        settings_total_floors: 'Total Floors', settings_houses_per_floor: 'Houses/Floor',
        settings_ground_houses: 'Ground Floor Houses', settings_danger: 'Danger Zone',
        placeholder_search_residents: 'Search by name, house, phone...',
        splash_subtitle: 'Electrical Bill Collection System',
        toast_saved: 'Saved!', toast_nothing: 'Nothing to save',
        toast_added: 'Resident added!', toast_updated: 'Resident updated!', toast_deleted: 'Deleted',
        toast_payment: 'Payment recorded!', toast_pushed: 'Pushed to cloud!',
        toast_pulled: 'Pulled from cloud!', toast_imported: 'Imported!', toast_exported: 'Backup exported',
        toast_config_saved: 'Config saved', toast_updated_settings: 'Updated!', toast_cleared: 'Cleared',
        toast_init_failed: 'Init failed: ',
        confirm_delete_title: 'Delete Resident',
        confirm_delete_msg: (name, house) => `Delete ${name} (${house})? This removes all bills and payments.`,
        confirm_apply_title: 'Apply', confirm_apply_msg: 'Update building configuration?',
        confirm_clear_title: 'Clear All Data', confirm_clear_msg: 'Delete ALL residents, bills, and payments?',
        confirm_clear_final: 'Final Warning', confirm_clear_final_msg: 'This cannot be undone. Proceed?',
        confirm_import_title: 'Import', confirm_import_msg: 'Merge imported data with existing?',
        confirm_title_default: 'Confirm',
        filter_expiring: 'Expiring', filter_expired: 'Expired', filter_no_bill: 'Not Billed',
        filter_expiring: 'Expiring', filter_expired: 'Expired', filter_no_bill: 'Not Billed',
    },
    am: {
        nav_dashboard: 'ዳሽቦርድ', nav_residents: 'ነጋዴዎች', nav_watts: 'ዋት መዝገብ',
        nav_payments: 'ክፍያ', nav_reports: 'ሪፖርት', nav_sync: 'የደመና ማስማያ', nav_settings: 'ማስተካከያ', nav_cover: 'ኮቨር ክፍያ', nav_receipts: 'ደብዳቤ',
        nav_dashboard_short: 'መነሻ', nav_settings_short: 'ማስተካከያ', nav_residents_short: 'ነጋዴዎች', nav_watts_short: 'ዋት',
        nav_payments_short: 'ክፍያ', nav_reports_short: 'ሪፖርት',
        stat_total_houses: 'ጠቅላላ ቤት', stat_paid: 'የተከፈለ', stat_pending: 'በመጠባበቅ ላይ', stat_total_etb: 'ጠቅላላ ብር',
        monthly_overview: 'የወር አጠቃላይ', collected_label: 'የተሰበሰበ',
        expected: 'የሚጠበቅ', collected: 'የተሰበሰበ', outstanding: 'ያልተከፈለ',
        floor_status: 'የ쫓 ሁኔታ', recent_activity: 'የቅርብ ተግባር',
        no_activity: 'ምንም የቅርብ ተግባር የለም', no_residents: 'ምንም ነጋዴ የለም',
        no_results: 'ምንም ውጤት የለም', no_houses: 'የዋት ቤት የለም',
        no_records: 'ምንም መዝገብ የለም', no_history: 'ምንም ታሪክ የለም',
        all_paid: 'ሁሉም ተከፍሏል!', all_done: 'ሁሉም ተከፍሏል!', batch_complete: 'ተከፍሏል!',
        btn_add: 'ጨምር', btn_save: 'አስቀምጥ', btn_cancel: 'ሰርዝ', btn_confirm: 'አረጋግጥ',
        btn_change: 'ቀይር', btn_test: 'አቅም', btn_record: 'መዝግብ',
        btn_quick_entry: 'ፈጣን መዝገብ', btn_save_all_watts: 'ሁሉንም ዋት አስቀምጥ',
        btn_record_payment: 'ክፍያ መዝግብ', btn_apply_structure: '🔄 ማስተካከያ ይተግብር',
        btn_clear_data: '🗑️ ሁሉንም መረጃ ደምድ', btn_back: 'ተመለስ', btn_skip: 'Skip', btn_save_next: 'አስቀምጥ',
        btn_pull: '⬇️ ከደመና መረጃ አውርድ', btn_push: '⬆️ መረጃ ወደ ደመና ይላክ',
        btn_export: '📥 ተጠቃሚ ቅርጽ አውጣ', btn_import: '📤 ከተጠቃሚ ቅርጽ ጋር ግባ',
        filter_all: 'ሁሉም', filter_paid: 'የተከፈለ', filter_pending: 'በመጠባበቅ ላይ',
        floor_ground: 'የመሬት',
        report_overview: 'አጠቃላይ', report_unpaid: 'ያልተከፈለ', report_by_floor: 'በ쫓 መሰረት', report_history: 'ታሪክ',
        modal_add_resident: 'ነጋዴ ጨምር', modal_edit_resident: 'ነጋዴ አስተካክል',
        modal_record_payment: 'ክፍያ መዝግብ', modal_quick_entry: '⚡ ፈጣን ዋት መዝገብ',
        label_floor: '쫓', label_house_number: 'የቤት ቁጥር',
        label_first_name: 'የመጀመሪያ ስም', label_last_name: 'የመጨረሻ ስም',
        label_phone: 'ስልክ', label_email: 'ኢሜይል', label_members: 'አባላት', label_notes: 'ማስታወሻ',
        label_month: 'ወር', label_year: 'ዓመት', label_amount_due: 'የሚጠበቅ መጠን',
        label_amount_paid: 'የተከፈለ መጠን', label_method: 'መንገድ', label_date: 'ቀን',
        label_receipt: 'ደብዳቤ #', label_watts_used: 'የዋት መጠን',
        method_cash: 'ገንዘብ', method_bank: 'የባንክ ዝውውር', method_mobile: 'ሞባይል ገንዘብ',
        method_check: 'ቼክ', method_other: 'ሌላ',
        rate_label: 'ዋጋ:',
        sync_connection: 'የግንኙነት ሁኔታ', sync_last: 'የመጨረሻ ማስማያ',
        sync_pending: 'በመጠባበቅ ላይ', sync_setup: 'ማብቂያ', sync_token: 'Secret Token',
        sync_actions: 'ተግባራት', sync_history: 'የማስማያ ታሪክ',
        settings_building: 'የግንባታ መረጃ', settings_building_name: 'የግንባታ ስም',
        settings_address: 'አድራሻ', settings_phone: 'የስልክ ቁጥር',
        settings_billing: 'የክፍያ ማብቂያ', settings_etb_per_watt: 'በዋት ብር',
        settings_total_floors: 'ጠቅላላ ቦታ', settings_houses_per_floor: 'ቤት/ቦታ',
        settings_ground_houses: 'የመሬት ቦታ', settings_danger: 'አደጋ ቦታ',
        placeholder_search_residents: 'በስም ፈልግ...',
        splash_subtitle: 'የኤሌክትሪክ ቢል ማከማቻ ስርዓት',
        toast_saved: 'ተከፍሏል!', toast_nothing: 'ምንም የለም',
        toast_added: 'ነጋዴ ተጨምሯል!', toast_updated: 'ነጋዴ ተስተካክሏል!', toast_deleted: 'ተሰርጧል!',
        toast_payment: 'ክፍያ ተመዝግቧል!', toast_pushed: 'ደመና ላይ ተላክቷል!',
        toast_pulled: 'ከደመና ተውርድቷል!', toast_imported: 'ተገብቷል!', toast_exported: 'ተጠቃሚ ተሰርጧል!',
        toast_config_saved: 'ማብቂያ ተቀምጧል!', toast_updated_settings: 'ተስተካክሏል!', toast_cleared: 'ተሰርጧል!',
        toast_init_failed: 'መነሻ ስኩን: ',
        confirm_delete_title: 'ነጋዴ ደምድ',
        confirm_delete_msg: (name, house) => `${name} (${house}) ደምድ?`,
        confirm_apply_title: 'ይተግብር', confirm_apply_msg: 'የግንባታ ማብቂያ ያስተካክሉ?',
        confirm_clear_title: 'ሁሉንም ደምድ', confirm_clear_msg: 'ሁሉንም ነጋዴዎች ደምድ?',
        confirm_clear_final: 'የመጨረሻ ማስጠበቅ', confirm_clear_final_msg: 'ይህ የሚመለስ አይደለም። ይቀጥሉ?',
        confirm_import_title: 'ግባ', confirm_import_msg: 'የተቀበለ መረጃ ያስረካ?',
        filter_expiring: 'በመጠባበቅ ላይ', filter_expired: 'ጊዜው ያለፈ', filter_no_bill: 'ቢል የለም',
        filter_expiring: 'በመጠባበቅ ላይ', filter_expired: 'ጊዜው ያለፈ', filter_no_bill: 'ቢል የለም',
        confirm_title_default: 'አረጋግጥ',
    }
};

let currentLang = localStorage.getItem('condobill-lang') || 'en';
let currentTheme = localStorage.getItem('condobill-theme') || 'dark';

function t(key, ...args) {
    const val = TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS.en[key] || key;
    return typeof val === 'function' ? val(...args) : val;
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key) el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (key) el.placeholder = t(key);
    });
    document.querySelectorAll('select').forEach(sel => {
        sel.querySelectorAll('option[data-i18n]').forEach(opt => {
            opt.textContent = t(opt.getAttribute('data-i18n'));
        });
    });
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('condobill-lang', lang);
    document.documentElement.lang = lang === 'am' ? 'am' : 'en';
    applyTranslations();
    refreshPage(AppState.currentPage);
}

function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('condobill-theme', theme);
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-theme-btn') === theme);
    });
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#1a1b20' : '#f0f2f5';
}

function toggleTheme() { setTheme(currentTheme === 'dark' ? 'light' : 'dark'); }

// ==================== DATABASE (IndexedDB) ====================
const DB_NAME = 'CondoBillDB';
const DB_VERSION = 4;

class Database {
    constructor() { this.db = null; }
    async init() {
        return new Promise((resolve, reject) => {
            if (this.db && this.db.objectStoreNames.length > 0) { resolve(this.db); return; }
            const request = indexedDB.open(DB_NAME, DB_VERSION);
            request.onupgradeneeded = (e) => {
                const db = e.target.result;
                if (!db.objectStoreNames.contains('residents')) {
                    const s = db.createObjectStore('residents', { keyPath: 'id' });
                    s.createIndex('floor', 'floor', { unique: false });
                    s.createIndex('houseNumber', 'houseNumber', { unique: true });
                    s.createIndex('fullName', 'fullName', { unique: false });
                }
                if (!db.objectStoreNames.contains('bills')) {
                    const s = db.createObjectStore('bills', { keyPath: 'id' });
                    s.createIndex('residentId', 'residentId', { unique: false });
                    s.createIndex('monthKey', 'monthKey', { unique: false });
                    s.createIndex('residentMonth', ['residentId', 'monthKey'], { unique: true });
                }
                if (!db.objectStoreNames.contains('receipts')) {
                    const s = db.createObjectStore('receipts', { keyPath: 'id' });
                    s.createIndex('paymentId', 'paymentId', { unique: false });
                    s.createIndex('residentId', 'residentId', { unique: false });
                    s.createIndex('monthKey', 'monthKey', { unique: false });
                }
                if (!db.objectStoreNames.contains('payments')) {
                    const s = db.createObjectStore('payments', { keyPath: 'id' });
                    s.createIndex('billId', 'billId', { unique: false });
                    s.createIndex('residentId', 'residentId', { unique: false });
                    s.createIndex('monthKey', 'monthKey', { unique: false });
                }
                if (!db.objectStoreNames.contains('settings')) db.createObjectStore('settings', { keyPath: 'key' });
                if (!db.objectStoreNames.contains('activity')) {
                    const s = db.createObjectStore('activity', { keyPath: 'id' });
                    s.createIndex('timestamp', 'timestamp', { unique: false });
                }
                if (!db.objectStoreNames.contains('punishments')) {
                    const s = db.createObjectStore('punishments', { keyPath: 'id' });
                    s.createIndex('residentId', 'residentId', { unique: false });
                    s.createIndex('monthKey', 'monthKey', { unique: false });
                }
                if (!db.objectStoreNames.contains('punishments')) {
                    const s = db.createObjectStore('punishments', { keyPath: 'id' });
                    s.createIndex('residentId', 'residentId', { unique: false });
                    s.createIndex('monthKey', 'monthKey', { unique: false });
                }
                if (!db.objectStoreNames.contains('syncLog')) {
                    const s = db.createObjectStore('syncLog', { keyPath: 'id' });
                    s.createIndex('timestamp', 'timestamp', { unique: false });
                }
            };
            request.onsuccess = (e) => {
                this.db = e.target.result;
                this.db.onversionchange = () => { this.db.close(); this.db = null; };
                resolve(this.db);
            };
            request.onerror = (e) => reject(e.target.error);
        });
    }
    async ensureDb() { if (!this.db || this.db.closed) await this.init(); }
    async add(store, data) {
        await this.ensureDb();
        return new Promise((r, j) => { const req = this.db.transaction(store, 'readwrite').objectStore(store).add(data); req.onsuccess = () => r(data); req.onerror = (e) => j(e.target.error); });
    }
    async put(store, data) {
        await this.ensureDb();
        return new Promise((r, j) => { const req = this.db.transaction(store, 'readwrite').objectStore(store).put(data); req.onsuccess = () => r(data); req.onerror = (e) => j(e.target.error); });
    }
    async get(store, key) {
        await this.ensureDb();
        return new Promise((r, j) => { const req = this.db.transaction(store, 'readonly').objectStore(store).get(key); req.onsuccess = () => r(req.result); req.onerror = (e) => j(e.target.error); });
    }
    async getAll(store) {
        await this.ensureDb();
        return new Promise((r, j) => { const req = this.db.transaction(store, 'readonly').objectStore(store).getAll(); req.onsuccess = () => r(req.result || []); req.onerror = (e) => j(e.target.error); });
    }
    async getAllByIndex(store, index, val) {
        await this.ensureDb();
        return new Promise((r, j) => { const req = this.db.transaction(store, 'readonly').objectStore(store).index(index).getAll(val); req.onsuccess = () => r(req.result || []); req.onerror = (e) => j(e.target.error); });
    }
    async delete(store, key) {
        await this.ensureDb();
        return new Promise((r, j) => { const req = this.db.transaction(store, 'readwrite').objectStore(store).delete(key); req.onsuccess = () => r(); req.onerror = (e) => j(e.target.error); });
    }
    async clear(store) {
        await this.ensureDb();
        return new Promise((r, j) => { const req = this.db.transaction(store, 'readwrite').objectStore(store).clear(); req.onsuccess = () => r(); req.onerror = (e) => j(e.target.error); });
    }
    async clearAll() {
        for (const n of ['residents', 'bills', 'payments', 'activity', 'syncLog', 'receipts', 'punishments']) await this.clear(n);
    }
    async exportAll() {
        const data = {};
        for (const n of ['residents', 'bills', 'payments', 'settings', 'activity', 'syncLog', 'receipts', 'punishments']) data[n] = await this.getAll(n);
        return data;
    }
    async importAll(data) {
        for (const [store, records] of Object.entries(data)) {
            if (Array.isArray(records)) for (const rec of records) await this.put(store, rec);
        }
    }
}

const db = new Database();

// ==================== UTILITIES ====================
const Utils = {
    generateId: () => Date.now().toString(36) + Math.random().toString(36).substr(2, 9),
    getMonthKey: (y, m) => `${y}-${String(m).padStart(2, '0')}`,
    getMonthName: (m) => ['January','February','March','April','May','June','July','August','September','October','November','December'][m - 1],
    formatDate: (d) => d ? new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '-',
    formatDateTime: (d) => d ? new Date(d).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : '-',
    formatCurrency: (a) => new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(a || 0),
    generateHouseNumber: (floor, i) => floor === 0 ? `G${String(i + 1).padStart(2, '0')}` : `${floor}${String(i + 1).padStart(2, '0')}`,
    getFloorName: (f) => f === 0 ? 'Ground Floor' : f === 1 ? '1st Floor' : f === 2 ? '2nd Floor' : f === 3 ? '3rd Floor' : `${f}th Floor`,
    getInitials: (f, l) => ((f || '')[0] || '') + ((l || '')[0] || ''),
    debounce: (fn, w) => { let timer; return (...a) => { clearTimeout(timer); timer = setTimeout(() => fn(...a), w); }; },
    populateMonthSelect: (el) => { ['January','February','March','April','May','June','July','August','September','October','November','December'].forEach((n, i) => { const o = document.createElement('option'); o.value = i + 1; o.textContent = n; el.appendChild(o); }); },
    populateYearSelect: (el, range = 5) => { const cy = new Date().getFullYear(); for (let y = cy - range; y <= cy + 1; y++) { const o = document.createElement('option'); o.value = y; o.textContent = y; el.appendChild(o); } },
    setCurrentMonthYear: (ms, ys) => { ms.value = new Date().getMonth() + 1; ys.value = new Date().getFullYear(); }
};

// ==================== STATE ====================
const AppState = {
    currentPage: 'dashboard',
    currentMonth: new Date().getMonth() + 1, currentYear: new Date().getFullYear(),
    residents: [], bills: [], payments: [], settings: {}, activity: [], syncLog: [], receipts: [],
    batchIndex: 0, batchHouses: [], punishments: [], punishments: [],
    currentFilter: { floor: 'all', search: '', billFloor: 'all', payStatus: 'all', reportTab: 'overview' },
    lockTimeout: 5, lockTimer: null, lastActivity: Date.now(),
    credentials: { username: 'admin', password: 'admin123' },
    // Security: rate limiting + session management
    loginAttempts: parseInt(localStorage.getItem('condobill-loginAttempts') || '0'),
    lockUntil: parseInt(localStorage.getItem('condobill-lockUntil') || '0'),
    sessionToken: localStorage.getItem('condobill-session') || null,
    sessionExpiry: parseInt(localStorage.getItem('condobill-sessionExpiry') || '0')
};

// ==================== SECURITY MODULE ====================
const Security = {
    MAX_ATTEMPTS: 5,
    LOCKOUT_MS: 5 * 60 * 1000, // 5 minutes
    SESSION_MS: 30 * 60 * 1000, // 30 minutes
    MIN_PASSWORD_LENGTH: 8,

    /** Validate password strength */
    validatePassword(pw) {
        if (!pw || pw.length < this.MIN_PASSWORD_LENGTH) return { ok: false, msg: `Password must be at least ${this.MIN_PASSWORD_LENGTH} characters` };
        if (!/[A-Z]/.test(pw)) return { ok: false, msg: 'Password must contain an uppercase letter' };
        if (!/[a-z]/.test(pw)) return { ok: false, msg: 'Password must contain a lowercase letter' };
        if (!/[0-9]/.test(pw)) return { ok: false, msg: 'Password must contain a number' };
        return { ok: true, msg: '' };
    },

    /** Check if account is locked out */
    isLocked() {
        if (AppState.lockUntil > Date.now()) return true;
        // Lockout expired, reset
        if (AppState.lockUntil > 0 && AppState.lockUntil <= Date.now()) {
            AppState.loginAttempts = 0;
            AppState.lockUntil = 0;
            localStorage.setItem('condobill-loginAttempts', '0');
            localStorage.setItem('condobill-lockUntil', '0');
        }
        return false;
    },

    /** Record a failed login */
    recordFailedAttempt() {
        AppState.loginAttempts++;
        localStorage.setItem('condobill-loginAttempts', String(AppState.loginAttempts));
        if (AppState.loginAttempts >= this.MAX_ATTEMPTS) {
            AppState.lockUntil = Date.now() + this.LOCKOUT_MS;
            localStorage.setItem('condobill-lockUntil', String(AppState.lockUntil));
        }
    },

    /** Reset attempts on success */
    resetAttempts() {
        AppState.loginAttempts = 0;
        AppState.lockUntil = 0;
        localStorage.setItem('condobill-loginAttempts', '0');
        localStorage.setItem('condobill-lockUntil', '0');
    },

    /** Generate session token */
    createSession() {
        const token = Array.from(crypto.getRandomValues(new Uint8Array(32)))
            .map(b => b.toString(16).padStart(2, '0')).join('');
        AppState.sessionToken = token;
        AppState.sessionExpiry = Date.now() + this.SESSION_MS;
        localStorage.setItem('condobill-session', token);
        localStorage.setItem('condobill-sessionExpiry', String(AppState.sessionExpiry));
        return token;
    },

    /** Validate session */
    isSessionValid() {
        if (!AppState.sessionToken) return false;
        if (Date.now() > AppState.sessionExpiry) {
            this.destroySession();
            return false;
        }
        return true;
    },

    /** Destroy session */
    destroySession() {
        AppState.sessionToken = null;
        AppState.sessionExpiry = 0;
        localStorage.removeItem('condobill-session');
        localStorage.removeItem('condobill-sessionExpiry');
    },

    /** Hash password (simple SHA-256) */
    async hashPassword(pw) {
        const encoder = new TextEncoder();
        const data = encoder.encode(pw + 'condobill-salt-2024');
        const hash = await crypto.subtle.digest('SHA-256', data);
        return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
    }
};

// ==================== TOAST ====================
function showToast(msg, type = 'info') {
    const toastEl = document.getElementById('toast');
    const msgEl = document.getElementById('toast-msg');
    msgEl.textContent = msg;
    toastEl.className = 'show';
    toastEl.style.borderColor = type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : type === 'warning' ? '#F97316' : '#B5F654';
    clearTimeout(toastEl._timer);
    toastEl._timer = setTimeout(() => { toastEl.className = ''; }, 3000);
}

// ==================== CONFIRM DIALOG ====================
let _confirmResolve = null;
function showConfirm(title, msg, isDanger = true) {
    return new Promise(resolve => {
        _confirmResolve = resolve;
        document.getElementById('confirmTitle').textContent = title;
        document.getElementById('confirmMessage').textContent = msg;
        document.getElementById('confirmOk').className = isDanger ? 'btn-danger flex-1 text-xs' : 'btn-brand flex-1 text-xs';
        document.getElementById('confirmDialog').classList.remove('hidden');
    });
}

// ==================== ACTIVITY LOG ====================
async function logActivity(action, details = '') {
    const entry = { id: Utils.generateId(), action, details, timestamp: Date.now() };
    await db.add('activity', entry);
}

// ==================== GET REPORT DATA ====================
function getReportData(month, year) {
    const monthKey = Utils.getMonthKey(year, month);
    const totalFloors = parseInt(AppState.settings.totalFloors || 8);
    const housesPerFloor = parseInt(AppState.settings.housesPerFloor || 4);
    const groundHouses = parseInt(AppState.settings.groundHouses || 4);
    const rate = parseFloat(AppState.settings.etbPerWatt) || 6.4592;

    const totalHouses = groundHouses + (totalFloors - 1) * housesPerFloor;
    const floorData = {};

    for (let f = 0; f < totalFloors; f++) {
        const count = f === 0 ? groundHouses : housesPerFloor;
        floorData[f] = { total: count, paid: 0, pending: 0, overdue: 0, expected: 0, collected: 0 };
    }

    const paid = [], pending = [], overdue = [];

    AppState.residents.forEach(r => {
        const f = parseInt(r.floor) || 0;
        if (!floorData[f]) floorData[f] = { total: 0, paid: 0, pending: 0, overdue: 0, expected: 0, collected: 0 };

        const bill = AppState.bills.find(b => b.residentId === r.id && b.monthKey === monthKey);
        const payment = AppState.payments.find(p => p.billId === (bill ? bill.id : null) && p.monthKey === monthKey);

        if (bill) {
            floorData[f].expected += bill.etbAmount || 0;
        }

        if (payment) {
            floorData[f].collected += payment.amountPaid || 0;
            floorData[f].paid++;
            paid.push({ ...r, bill, payment });
        } else if (bill) {
            floorData[f].pending++;
            pending.push({ ...r, bill, payment: null });
        } else {
            overdue.push({ ...r, bill: null, payment: null });
        }
    });

    const totalExpected = Object.values(floorData).reduce((s, f) => s + f.expected, 0);
    const totalCollected = Object.values(floorData).reduce((s, f) => s + f.collected, 0);

    return { totalHouses, paid, pending, overdue, floorData, totalExpected, totalCollected, month, year };
}


// ==================== EEP TARIFF CALCULATION (Ethiopian Electric Power) ====================
// Based on real EEP Commercial tariff: Energy + Service + Regulatory + Tax
function calculateEEPBill(kWh, options = {}) {
    const rate = options.rate || parseFloat(AppState.settings.etbPerWatt) || 6.4592;
    const SERVICE_CHARGE_FIXED = 64.70; // Fixed service charge (ETB)
    const regulatoryRate = 0.005; // 0.5% of subtotal
    const taxRate = 0.15; // 15% VAT of subtotal
    const billingDays = options.billingDays || 30;
    const interestPaid = options.interestPaid || 0;

    const energyCharge = Math.round(kWh * rate * 100) / 100;
    const serviceCharge = SERVICE_CHARGE_FIXED;
    const subtotal = Math.round((energyCharge + serviceCharge) * 100) / 100;
    const regulatoryFee = Math.round(subtotal * regulatoryRate * 100) / 100;
    const tax = Math.round(subtotal * taxRate * 100) / 100;
    const totalAmount = Math.round((subtotal + regulatoryFee + tax - interestPaid) * 100) / 100;

    return {
        tariffType: 'Commercial',
        ratePerKWh: rate,
        kWh,
        billingDays,
        energyCharge,
        serviceCharge,
        serviceChargeDisplay: 'Fixed',
        subtotal,
        regulatoryFee,
        regulatoryRate: regulatoryRate * 100,
        tax,
        taxRate: taxRate * 100,
        interestPaid,
        totalAmount
    };
}

// ==================== RECEIPT GENERATOR ====================
function generateReceiptHTML(payment, bill, resident, eepCalc, settings) {
    const buildingName = settings.buildingName || 'Block 35';
    const address = settings.buildingAddress || '';
    const phone = settings.contactPhone || '';
    const invoiceNo = `INV-${(payment.id || '').substring(0, 8).toUpperCase()}`;
    const payDate = payment.date ? new Date(payment.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const monthName = Utils.getMonthName(payment.month || 1);
    const receiptNum = payment.receipt || `RCT-${(payment.id || '').substring(0, 8).toUpperCase()}`;
    const residentName = resident ? `${resident.firstName} ${resident.lastName}` : 'Unknown';
    const houseNumber = resident?.houseNumber || '—';
    const phoneNum = resident?.phone || '—';

    // Build EEP breakdown rows
    const kwh = eepCalc ? eepCalc.kWh : (bill?.wattsUsed || 0);
    const energyCharge = eepCalc ? eepCalc.energyCharge : (bill?.etbAmount || 0);
    const serviceCharge = eepCalc ? eepCalc.serviceCharge : 0;
    const regulatoryFee = eepCalc ? eepCalc.regulatoryFee : 0;
    const tax = eepCalc ? eepCalc.tax : 0;
    const interest = eepCalc ? eepCalc.interestPaid : 0;
    const totalAmount = eepCalc ? eepCalc.totalAmount : (payment.amountPaid || 0);
    const ratePerKWh = eepCalc ? eepCalc.ratePerKWh : (parseFloat(settings.etbPerWatt) || 6.4592);
    const billingDays = eepCalc ? eepCalc.billingDays : 30;

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Receipt - ${residentName}</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/@phosphor-icons/web"><\/script>
    <script>
    tailwind.config = {
        theme: { extend: {
            fontFamily: { sans: ['Montserrat', 'sans-serif'] },
            colors: {
                invoice: { bg: '#e5e5e5', paper: '#2a2c31', paperDark: '#1e1f23', red: '#e91e32', redDark: '#b81223', textMain: '#ffffff', textMuted: '#a0a0a0', border: '#3d4047' }
            }
        }}
    }
    <\/script>
    <style>
        body { background-color: #e5e5e5; padding: 1.5rem 0.5rem; display: flex; justify-content: center; align-items: flex-start; min-height: 100vh; }
        .invoice-container { width: 100%; max-width: 800px; background-color: #2a2c31; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); position: relative; overflow: hidden; color: #ffffff; }
        .watermark { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0.03; pointer-events: none; width: 60%; z-index: 0; }
        .top-shape { position: absolute; top: 0; right: 0; width: 65%; height: 200px; background-color: #e91e32; clip-path: polygon(100% 0, 100% 100%, 80% 50%, 0 0); z-index: 10; }
        .top-shape-shadow { position: absolute; top: 0; right: 0; width: 75%; height: 160px; background-color: #1a1a1d; clip-path: polygon(100% 0, 100% 100%, 75% 60%, 0 0); z-index: 5; opacity: 0.5; }
        .bottom-shape { position: absolute; bottom: 0; left: 0; width: 40%; height: 100px; background-color: #e91e32; clip-path: polygon(0 0, 20% 100%, 0 100%); z-index: 10; }
        .bottom-shape-shadow { position: absolute; bottom: 0; left: 0; width: 50%; height: 120px; background-color: #1a1a1d; clip-path: polygon(0 0, 40% 100%, 0 100%); z-index: 5; opacity: 0.3; }
        .table-row-dark { background-color: #212328; border-radius: 8px; margin-bottom: 4px; }
        @media print { body { padding: 0; background: #fff; } .no-print { display: none !important; } .invoice-container { box-shadow: none; } }
    </style>
</head>
<body class="antialiased">
    <main class="invoice-container flex flex-col pt-12 pb-16 px-6 sm:px-12 z-20">
        <div class="top-shape-shadow"></div>
        <div class="top-shape flex justify-end items-start pr-8 sm:pr-12 pt-10 sm:pt-12">
            <h1 class="text-2xl sm:text-4xl font-bold text-white tracking-wider z-20 relative mr-4 sm:mr-8 mt-2">Receipt</h1>
        </div>
        <div class="bottom-shape-shadow"></div>
        <div class="bottom-shape"></div>
        <svg class="watermark" viewBox="0 0 100 100" fill="white"><polygon points="50,10 90,50 50,90 10,50"/><polygon points="50,25 75,50 50,75 25,50" fill="#2a2c31"/></svg>

        <div class="relative z-20 w-full mb-8">
            <div class="flex items-center mb-8">
                <div class="w-10 h-10 mr-3">
                    <svg viewBox="0 0 100 100" class="w-full h-full"><polygon points="50,0 100,50 50,100 0,50" fill="#ffffff"/><polygon points="50,25 75,50 50,75 25,50" fill="#2a2c31"/><polygon points="50,10 90,50 50,90 10,50" fill="#e91e32" transform="scale(0.8) translate(12,12)"/></svg>
                </div>
                <div><h2 class="text-lg sm:text-xl font-bold tracking-wide leading-none">${buildingName}</h2>
                <p class="text-[10px] text-invoice-textMuted">Electrical Payment System</p></div>
            </div>

            <div class="flex items-center justify-between w-full border-t border-b border-invoice-border py-3 sm:py-4 mb-6">
                <div class="text-center w-1/3 border-r border-invoice-border">
                    <p class="text-[10px] text-invoice-textMuted mb-1">Date :</p>
                    <p class="text-xs sm:text-sm font-semibold">${payDate}</p>
                </div>
                <div class="text-center w-1/3 border-r border-invoice-border">
                    <p class="text-[10px] text-invoice-textMuted mb-1">Invoice No :</p>
                    <p class="text-xs sm:text-sm font-semibold">${invoiceNo}</p>
                </div>
                <div class="text-center w-1/3">
                    <p class="text-[10px] text-invoice-textMuted mb-1">Receipt # :</p>
                    <p class="text-xs sm:text-sm font-semibold">${receiptNum}</p>
                </div>
            </div>

            <div class="flex justify-between items-start w-full">
                <div class="w-1/2 pr-4 sm:pr-8">
                    <h3 class="text-sm sm:text-lg font-semibold mb-2">${buildingName}</h3>
                    <div class="text-[9px] sm:text-xs text-invoice-textMuted leading-relaxed space-y-0.5">
                        ${address ? `<p>${address}</p>` : ''}
                        ${phone ? `<p>Contact: ${phone}</p>` : ''}
                        <p>${monthName} ${payment.year || new Date().getFullYear()} Bill</p>
                    </div>
                </div>
                <div class="w-1/2 pl-4 sm:pl-8">
                    <p class="text-xs sm:text-sm mb-1">Invoice To :</p>
                    <h3 class="text-sm sm:text-lg font-semibold mb-2">${residentName}<br><span class="text-xs sm:text-base font-normal">House ${houseNumber}</span></h3>
                    <div class="text-[9px] sm:text-xs text-invoice-textMuted leading-relaxed space-y-0.5">
                        <p>Phone: ${phoneNum}</p>
                        ${resident?.roomType ? `<p>Room: ${resident.roomType.toUpperCase()}</p>` : ''}
                    </div>
                </div>
            </div>
        </div>

        <div class="relative z-20 w-full mb-6">
            <div class="bg-invoice-red rounded-full flex px-4 sm:px-6 py-2 sm:py-3 mb-3 text-[10px] sm:text-sm font-semibold">
                <div class="w-[8%] text-center">SL</div>
                <div class="w-[42%] sm:w-[45%] pl-2 sm:pl-4">Description</div>
                <div class="w-[17%] text-center">Rate</div>
                <div class="w-[15%] text-center">Unit</div>
                <div class="w-[18%] text-right pr-1 sm:pr-2">Amount (ETB)</div>
            </div>
            <div class="space-y-1">
                <div class="table-row-dark flex items-center px-4 sm:px-6 py-2.5 sm:py-3 text-[10px] sm:text-xs">
                    <div class="w-[8%] text-center text-invoice-textMuted">01</div>
                    <div class="w-[42%] sm:w-[45%] pl-2 sm:pl-4 font-medium text-gray-200">Energy Charge (${kwh.toFixed(2)} kWh × ${ratePerKWh})</div>
                    <div class="w-[17%] text-center text-invoice-textMuted">${ratePerKWh}</div>
                    <div class="w-[15%] text-center text-invoice-textMuted">${kwh.toFixed(1)} kWh</div>
                    <div class="w-[18%] text-right font-medium pr-1 sm:pr-2">${energyCharge.toFixed(2)}</div>
                </div>
                <div class="table-row-dark flex items-center px-4 sm:px-6 py-2.5 sm:py-3 text-[10px] sm:text-xs">
                    <div class="w-[8%] text-center text-invoice-textMuted">02</div>
                    <div class="w-[42%] sm:w-[45%] pl-2 sm:pl-4 font-medium text-gray-200">Service Charge (Fixed)</div>
                    <div class="w-[17%] text-center text-invoice-textMuted">Fixed</div>
                    <div class="w-[15%] text-center text-invoice-textMuted">—</div>
                    <div class="w-[18%] text-right font-medium pr-1 sm:pr-2">${serviceCharge.toFixed(2)}</div>
                </div>
                <div class="table-row-dark flex items-center px-4 sm:px-6 py-2.5 sm:py-3 text-[10px] sm:text-xs">
                    <div class="w-[8%] text-center text-invoice-textMuted">03</div>
                    <div class="w-[42%] sm:w-[45%] pl-2 sm:pl-4 font-medium text-gray-200">Regulatory Fee (0.5%)</div>
                    <div class="w-[17%] text-center text-invoice-textMuted">0.5%</div>
                    <div class="w-[15%] text-center text-invoice-textMuted">—</div>
                    <div class="w-[18%] text-right font-medium pr-1 sm:pr-2">${regulatoryFee.toFixed(2)}</div>
                </div>
                <div class="table-row-dark flex items-center px-4 sm:px-6 py-2.5 sm:py-3 text-[10px] sm:text-xs">
                    <div class="w-[8%] text-center text-invoice-textMuted">04</div>
                    <div class="w-[42%] sm:w-[45%] pl-2 sm:pl-4 font-medium text-gray-200">VAT Tax (15%)</div>
                    <div class="w-[17%] text-center text-invoice-textMuted">15%</div>
                    <div class="w-[15%] text-center text-invoice-textMuted">—</div>
                    <div class="w-[18%] text-right font-medium pr-1 sm:pr-2">${tax.toFixed(2)}</div>
                </div>
                ${interest > 0 ? `<div class="table-row-dark flex items-center px-4 sm:px-6 py-2.5 sm:py-3 text-[10px] sm:text-xs">
                    <div class="w-[8%] text-center text-invoice-textMuted">05</div>
                    <div class="w-[42%] sm:w-[45%] pl-2 sm:pl-4 font-medium text-gray-200">Interest Paid (Previous)</div>
                    <div class="w-[17%] text-center text-invoice-textMuted">—</div>
                    <div class="w-[15%] text-center text-invoice-textMuted">—</div>
                    <div class="w-[18%] text-right font-medium text-red-400 pr-1 sm:pr-2">-${interest.toFixed(2)}</div>
                </div>` : ''}
            </div>
        </div>

        <div class="relative z-20 flex justify-between items-start w-full mb-12">
            <div class="w-1/2 sm:w-[55%] pr-4 sm:pr-12 pt-4">
                <h4 class="text-xs sm:text-sm font-semibold mb-1">Payment Confirmed</h4>
                <p class="text-[8px] sm:text-[9px] text-invoice-textMuted leading-relaxed">
                    This receipt confirms payment for electricity charges at ${buildingName}, House ${houseNumber} for ${monthName} ${payment.year || new Date().getFullYear()}. Tariff: Commercial @ ${ratePerKWh} ETB/kWh. Billing Period: ${billingDays} days.
                </p>
            </div>
            <div class="w-[40%] sm:w-[42%] bg-[#212328] rounded-xl overflow-hidden text-[10px] sm:text-xs">
                <div class="p-3 sm:p-4 space-y-2">
                    <div class="flex justify-between"><span class="text-invoice-textMuted">Energy Charge</span><span>:</span><span class="font-medium">${energyCharge.toFixed(2)}</span></div>
                    <div class="flex justify-between"><span class="text-invoice-textMuted">Service Charge</span><span>:</span><span class="font-medium">${serviceCharge.toFixed(2)}</span></div>
                    <div class="flex justify-between"><span class="text-invoice-textMuted">Regulatory Fee</span><span>:</span><span class="font-medium">${regulatoryFee.toFixed(2)}</span></div>
                    <div class="flex justify-between pb-2 border-b border-invoice-border"><span class="text-invoice-textMuted">VAT (15%)</span><span>:</span><span class="font-medium">${tax.toFixed(2)}</span></div>
                </div>
                <div class="bg-invoice-red px-3 sm:px-4 py-2.5 sm:py-3 flex justify-between font-bold text-xs sm:text-sm">
                    <span>Total Paid</span><span>:</span><span>ETB ${totalAmount.toFixed(2)}</span>
                </div>
            </div>
        </div>

        <div class="relative z-20 border-t border-invoice-border pt-4 flex justify-between items-end w-full">
            <div class="flex gap-4 sm:gap-6">
                <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded bg-[#212328] flex items-center justify-center border border-[#3d4047]">
                        <i class="ph-fill ph-envelope text-white text-sm"></i>
                    </div>
                    <div class="text-[8px] sm:text-[9px] text-invoice-textMuted leading-tight"><p>${buildingName}</p><p>Electrical Payment System</p></div>
                </div>
                <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded bg-[#212328] flex items-center justify-center border border-[#3d4047]">
                        <i class="ph-fill ph-phone text-white text-sm"></i>
                    </div>
                    <div class="text-[8px] sm:text-[9px] text-invoice-textMuted leading-tight"><p>${phone || '+251-XX-XXX-XXXX'}</p><p>Block 35</p></div>
                </div>
            </div>
            <div class="text-center w-32 sm:w-40">
                <div class="h-8 flex items-end justify-center mb-1 overflow-hidden relative opacity-70">
                    <svg width="80" height="32" viewBox="0 0 100 40" fill="none" stroke="white" stroke-width="1.5" class="absolute bottom-0">
                        <path d="M10 35 Q 20 10, 30 30 T 50 15 T 70 32 T 90 20" stroke-linecap="round"/>
                    </svg>
                </div>
                <div class="w-full h-[1px] bg-white mb-1"></div>
                <p class="text-[8px] sm:text-[10px] text-invoice-textMuted">Authorised Sign</p>
            </div>
        </div>
    </main>
    <script>
        function downloadReceipt() { window.print(); }
    <\/script>
</body>
</html>`;
}

// ==================== OPEN RECEIPT VIEWER ====================
function openReceiptViewer(paymentId) {
    const payment = AppState.payments.find(p => p.id === paymentId);
    if (!payment) return;
    const bill = AppState.bills.find(b => b.id === payment.billId);
    const resident = AppState.residents.find(r => r.id === payment.residentId);
    
    // Calculate EEP breakdown
    let eepCalc = null;
    if (bill && bill.wattsUsed > 0) {
        eepCalc = calculateEEPBill(bill.wattsUsed);
    }

    const receiptHTML = generateReceiptHTML(payment, bill, resident, eepCalc, AppState.settings);
    
    // Open in new window for viewing/downloading
    const win = window.open('', '_blank');
    if (win) {
        win.document.write(receiptHTML);
        win.document.close();
    } else {
        // Fallback: show in modal
        showToast('Please allow popups to view receipt', 'warning');
    }
}

// ==================== SAVE RECEIPT TO DB ====================
async function saveReceipt(payment, bill, resident) {
    let eepCalc = null;
    if (bill && bill.wattsUsed > 0) {
        eepCalc = calculateEEPBill(bill.wattsUsed);
    }
    const receipt = {
        id: Utils.generateId(),
        paymentId: payment.id,
        billId: bill?.id,
        residentId: payment.residentId,
        monthKey: payment.monthKey,
        month: payment.month,
        year: payment.year,
        residentName: resident ? `${resident.firstName} ${resident.lastName}` : 'Unknown',
        houseNumber: resident?.houseNumber || '—',
        amount: eepCalc ? eepCalc.totalAmount : payment.amountPaid,
        eepBreakdown: eepCalc,
        payment: { amountPaid: payment.amountPaid, method: payment.method, date: payment.date, receipt: payment.receipt },
        createdAt: Date.now()
    };
    await db.put('receipts', receipt);
    return receipt;
}

// ==================== SHOW DRILL DOWN ====================
function showDrillDown(type) {
    const report = getReportData(AppState.currentMonth, AppState.currentYear);
    let title = '', items = [];

    switch (type) {
        case 'total':
            title = `All Houses (${report.totalHouses})`;
            items = AppState.residents.map(r => ({
                name: `${r.firstName} ${r.lastName}`,
                house: r.houseNumber,
                photo: r.photo,
                status: report.paid.find(p => p.id === r.id) ? 'paid' : report.pending.find(p => p.id === r.id) ? 'pending' : 'no_bill',
                amount: report.paid.find(p => p.id === r.id)?.bill?.etbAmount || report.pending.find(p => p.id === r.id)?.bill?.etbAmount || 0
            }));
            break;
        case 'paid':
            title = `Paid Houses (${report.paid.length})`;
            items = report.paid.map(r => ({
                name: `${r.firstName} ${r.lastName}`, house: r.houseNumber, photo: r.photo, status: 'paid',
                amount: r.bill?.etbAmount || 0
            }));
            break;
        case 'pending':
            title = `Pending Houses (${report.pending.length})`;
            items = report.pending.map(r => ({
                name: `${r.firstName} ${r.lastName}`, house: r.houseNumber, photo: r.photo, status: 'pending',
                amount: r.bill?.etbAmount || 0
            }));
            break;
        case 'revenue':
            title = `Revenue Breakdown`;
            items = report.paid.map(r => ({
                name: `${r.firstName} ${r.lastName}`, house: r.houseNumber, photo: r.photo, status: 'paid',
                amount: r.payment?.amountPaid || 0
            }));
            break;
        default: return;
    }

    const content = document.getElementById('quickPayContent');
    let html = `<h4 class="text-sm font-bold text-app-textBase mb-3">${title}</h4>`;
    if (items.length === 0) {
        html += `<p class="text-xs text-app-textMuted text-center py-4">No items</p>`;
    } else {
        items.forEach(item => {
            const avatar = item.photo
                ? `<img src="${item.photo}" class="w-8 h-8 rounded-full object-cover" alt="">`
                : `<div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style="background:var(--dark-700);color:var(--app-brand);">${Utils.getInitials(item.name.split(' ')[0], item.name.split(' ')[1])}</div>`;
            const badge = item.status === 'paid' ? '<span class="badge badge-paid">Paid</span>' :
                          item.status === 'pending' ? '<span class="badge badge-pending">Pending</span>' :
                          '<span class="badge badge-none">No Bill</span>';
            html += `<div class="flex items-center gap-3 py-2 border-b" style="border-color:var(--app-border);">
                ${avatar}
                <div class="flex-1 min-w-0"><p class="text-xs font-semibold text-app-textBase truncate">${item.name}</p><p class="text-[10px] text-app-textMuted">${item.house}</p></div>
                <div class="text-right">${badge}<p class="text-[10px] text-app-textMuted mt-0.5">${Utils.formatCurrency(item.amount)} ETB</p></div>
            </div>`;
        });
    }
    content.innerHTML = html;
    document.getElementById('quickPayModal').classList.remove('hidden');
}


// ==================== NAVIGATION ====================
function navigateTo(page) {
    AppState.currentPage = page;
    // Update sidebar
    document.querySelectorAll('.sidebar-link').forEach(l => l.classList.toggle('active', l.getAttribute('data-page') === page));
    // Update mobile nav
    document.querySelectorAll('.mobile-nav-item').forEach(l => l.classList.toggle('active', l.getAttribute('data-page') === page));
    // Update page sections
    document.querySelectorAll('.page-section').forEach(s => s.classList.toggle('active', s.id === `page-${page}`));
    // Update title
    const titles = {
        dashboard: t('nav_dashboard'), residents: t('nav_residents'), bills: t('nav_watts'),
        payments: t('nav_payments'), reports: t('nav_reports'), sync: t('nav_sync'),
        settings: t('nav_settings'), cover: t('nav_cover'), punish: t('nav_punish')
    };
    document.getElementById('pageTitle').textContent = titles[page] || page;
    // Close mobile sidebar
    document.getElementById('desktopSidebar').classList.remove('mobile-open');
    document.getElementById('sidebarOverlay').classList.remove('visible');
    // Render page
    refreshPage(page);
}

function refreshPage(page) {
    switch (page) {
        case 'dashboard': renderDashboard(); break;
        case 'residents': renderResidents(); break;
        case 'bills': renderBills(); break;
        case 'payments': renderPayments(); break;
        case 'reports': renderReports(); break;
        case 'sync': renderSync(); break;
        case 'settings': renderSettings(); break;
        case 'cover': renderCover(); break;
        case 'punish': renderPunish(); break;
    }
    updateRightPanelStats();
}

// ==================== RENDER DASHBOARD ====================
async function renderDashboard() {
    // Reload data
    AppState.residents = await db.getAll('residents');
    AppState.bills = await db.getAll('bills');
    AppState.payments = await db.getAll('payments');

    const report = getReportData(AppState.currentMonth, AppState.currentYear);

    // Header
    const dashName = document.getElementById('dashBuildingName');
    if (dashName) dashName.textContent = AppState.settings.buildingName || 'Dashboard';
    const dashDate = document.getElementById('dashDate');
    if (dashDate) dashDate.textContent = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    // Month label
    const mLabel = document.getElementById('currentMonthLabel');
    if (mLabel) mLabel.textContent = `${Utils.getMonthName(AppState.currentMonth)} ${AppState.currentYear}`;

    // Collection Summary
    const el = (id) => document.getElementById(id);
    if (el('statTotalETB')) el('statTotalETB').textContent = `${Utils.formatCurrency(report.totalExpected)} ETB`;
    if (el('dashCollectionBadge')) {
        const pct = report.totalExpected > 0 ? Math.round((report.totalCollected / report.totalExpected) * 100) : 0;
        el('dashCollectionBadge').textContent = `${pct}% Collected`;
    }

    // Stat cards
    if (el('statTotalHouses')) el('statTotalHouses').textContent = report.totalHouses;
    if (el('statPaid')) el('statPaid').textContent = report.paid.length;
    if (el('statPending')) el('statPending').textContent = report.pending.length;

    // Progress circle
    const pct = report.totalExpected > 0 ? Math.round((report.totalCollected / report.totalExpected) * 100) : 0;
    if (el('progressPercent')) el('progressPercent').textContent = `${pct}%`;
    if (el('progressCircle')) el('progressCircle').style.strokeDashoffset = 263.89 - (263.89 * pct / 100);
    if (el('collectedAmount')) el('collectedAmount').textContent = `${Utils.formatCurrency(report.totalCollected)} ETB`;
    if (el('outstandingAmount')) el('outstandingAmount').textContent = Utils.formatCurrency(report.totalExpected - report.totalCollected);

    // Gauge: Paid
    drawGauge('gaugePaid', report.totalHouses > 0 ? (report.paid.length / report.totalHouses * 100) : 0, '#10B981');
    if (el('gaugePaidVal')) el('gaugePaidVal').textContent = `${report.totalHouses > 0 ? Math.round(report.paid.length / report.totalHouses * 100) : 0}%`;

    // Gauge: Outstanding
    drawGauge('gaugeOutstanding', report.totalHouses > 0 ? ((report.pending.length) / report.totalHouses * 100) : 0, '#EF4444');
    if (el('gaugeOutstandingVal')) el('gaugeOutstandingVal').textContent = `${report.totalHouses > 0 ? Math.round(report.pending.length / report.totalHouses * 100) : 0}%`;

    // Performance gauge
    drawGauge('gaugePerformance', pct, '#B5F654');
    if (el('gaugePerfVal')) el('gaugePerfVal').textContent = `${pct}%`;

    // Avg ETB
    if (el('dashAvgEtb')) el('dashAvgEtb').textContent = report.totalHouses > 0 ? Utils.formatCurrency(report.totalExpected / report.totalHouses) : '0';

    // Floor Overview
    const floorEl = el('floorOverview');
    if (floorEl) {
        let fhtml = '';
        const totalFloors = parseInt(AppState.settings.totalFloors || 8);
        let activeFloors = 0;
        for (let f = 0; f < totalFloors; f++) {
            const fd = report.floorData[f];
            if (!fd) continue;
            activeFloors++;
            const cls = fd.paid === fd.total && fd.total > 0 ? 'all-paid' : fd.paid > 0 ? 'some-paid' : 'none-paid';
            fhtml += `<div class="floor-card ${cls}" onclick="AppState.currentFilter.floor='${f}';navigateTo('residents')">
                <div class="text-xs font-bold text-app-textBase">${f === 0 ? 'G' : f}</div>
                <div class="text-[9px] text-app-textMuted">${fd.paid}/${fd.total}</div>
            </div>`;
        }
        floorEl.innerHTML = fhtml;
        if (el('dashActiveFloors')) el('dashActiveFloors').textContent = activeFloors;
    }

    // Recent Payments
    const rpEl = el('dashRecentPayments');
    if (rpEl) {
        const recent = report.paid.slice(-5).reverse();
        if (recent.length === 0) {
            rpEl.innerHTML = `<p class="text-xs text-app-textMuted text-center py-4">${t('no_activity')}</p>`;
        } else {
            rpEl.innerHTML = recent.map(r => {
                const avatar = r.photo
                    ? `<img src="${r.photo}" class="w-7 h-7 rounded-full object-cover" alt="">`
                    : `<div class="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold" style="background:var(--dark-700);color:var(--app-brand);">${Utils.getInitials(r.firstName, r.lastName)}</div>`;
                return `<div class="flex items-center gap-2 py-1.5 px-2 rounded-lg" style="background:var(--dark-700);">
                    ${avatar}
                    <div class="flex-1 min-w-0"><p class="text-[11px] font-semibold text-app-textBase truncate">${r.firstName} ${r.lastName}</p><p class="text-[9px] text-app-textMuted">${r.houseNumber}</p></div>
                    <span class="text-[10px] font-bold text-emerald-400">${Utils.formatCurrency(r.bill?.etbAmount || 0)} ETB</span>
                </div>`;
            }).join('');
        }
    }

    // Monthly History
    const mhEl = el('dashMonthlyHistory');
    if (mhEl) {
        let mhtml = '<table class="dark-table"><thead><tr><th>Month</th><th>Expected</th><th>Collected</th><th>Rate</th></tr></thead><tbody>';
        for (let m = 1; m <= 12; m++) {
            const mk = Utils.getMonthKey(AppState.currentYear, m);
            const bills = AppState.bills.filter(b => b.monthKey === mk);
            const pays = AppState.payments.filter(p => p.monthKey === mk);
            const exp = bills.reduce((s, b) => s + (b.etbAmount || 0), 0);
            const col = pays.reduce((s, p) => s + (p.amountPaid || 0), 0);
            const rate = exp > 0 ? Math.round(col / exp * 100) : 0;
            mhtml += `<tr><td>${Utils.getMonthName(m).substring(0, 3)}</td><td>${Utils.formatCurrency(exp)}</td><td class="text-emerald-400">${Utils.formatCurrency(col)}</td><td>${rate}%</td></tr>`;
        }
        mhtml += '</tbody></table>';
        mhEl.innerHTML = mhtml;
    }

    // Draw mini trend
    drawMiniTrend('dashMiniTrend', report);

    // Draw floor bar chart
    drawFloorBarChart('dashFloorBar', report);
}

// ==================== GAUGE DRAWING ====================
function drawGauge(canvasId, pct, color) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;
    const cx = w / 2, cy = h / 2, r = Math.min(w, h) / 2 - 6;
    ctx.clearRect(0, 0, w, h);

    // Background ring
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 6;
    ctx.stroke();

    // Progress arc
    const startAngle = -Math.PI / 2;
    const endAngle = startAngle + (2 * Math.PI * pct / 100);
    ctx.beginPath();
    ctx.arc(cx, cy, r, startAngle, endAngle);
    ctx.strokeStyle = color;
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.stroke();
}

// ==================== MINI TREND LINE ====================
function drawMiniTrend(canvasId, report) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width = canvas.parentElement.clientWidth;
    const h = canvas.height = canvas.parentElement.clientHeight;
    ctx.clearRect(0, 0, w, h);

    // Generate data for last 6 months
    const data = [];
    for (let i = 5; i >= 0; i--) {
        let m = AppState.currentMonth - i;
        let y = AppState.currentYear;
        if (m < 1) { m += 12; y--; }
        const mk = Utils.getMonthKey(y, m);
        const col = AppState.payments.filter(p => p.monthKey === mk).reduce((s, p) => s + (p.amountPaid || 0), 0);
        data.push(col);
    }

    const maxVal = Math.max(...data, 1);
    const padding = 4;
    const drawW = w - padding * 2;
    const drawH = h - padding * 2;

    // Gradient fill
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, 'rgba(181,246,84,0.3)');
    gradient.addColorStop(1, 'rgba(181,246,84,0)');

    ctx.beginPath();
    data.forEach((val, i) => {
        const x = padding + (drawW * i / (data.length - 1));
        const y = padding + drawH - (val / maxVal * drawH);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });

    // Fill
    ctx.lineTo(padding + drawW, padding + drawH);
    ctx.lineTo(padding, padding + drawH);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Line
    ctx.beginPath();
    data.forEach((val, i) => {
        const x = padding + (drawW * i / (data.length - 1));
        const y = padding + drawH - (val / maxVal * drawH);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = '#B5F654';
    ctx.lineWidth = 2;
    ctx.stroke();
}

// ==================== FLOOR BAR CHART ====================
function drawFloorBarChart(canvasId, report) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width = canvas.parentElement.clientWidth;
    const h = canvas.height = canvas.parentElement.clientHeight;
    ctx.clearRect(0, 0, w, h);

    const floors = Object.keys(report.floorData).sort((a, b) => a - b).slice(0, 8);
    const maxVal = Math.max(...floors.map(f => report.floorData[f].expected), 1);
    const padding = 8;
    const barWidth = (w - padding * 2) / (floors.length * 2 + 1);

    floors.forEach((f, i) => {
        const fd = report.floorData[f];
        const x = padding + barWidth * (i * 2 + 1);

        // Expected bar (dimmer)
        const expH = (fd.expected / maxVal) * (h - padding * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.06)';
        ctx.beginPath();
        ctx.roundRect(x, h - padding - expH, barWidth, expH, 3);
        ctx.fill();

        // Collected bar (bright)
        const colH = (fd.collected / maxVal) * (h - padding * 2);
        ctx.fillStyle = '#B5F654';
        ctx.beginPath();
        ctx.roundRect(x, h - padding - colH, barWidth, colH, 3);
        ctx.fill();

        // Label
        ctx.fillStyle = '#6b7280';
        ctx.font = '9px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(f === '0' ? 'G' : f, x + barWidth / 2, h - 1);
    });
}

// ==================== RENDER RESIDENTS ====================
async function renderResidents() {
    AppState.residents = await db.getAll('residents');
    const list = document.getElementById('residentsList');
    if (!list) return;

    let filtered = [...AppState.residents];
    const floor = AppState.currentFilter.floor;
    const search = AppState.currentFilter.search.toLowerCase();

    if (floor !== 'all') filtered = filtered.filter(r => String(r.floor) === String(floor));
    if (search) filtered = filtered.filter(r => `${r.firstName} ${r.lastName} ${r.houseNumber} ${r.phone}`.toLowerCase().includes(search));

    filtered.sort((a, b) => (a.floor - b.floor) || (a.houseNumber || '').localeCompare(b.houseNumber || ''));

    if (filtered.length === 0) {
        list.innerHTML = `<div class="text-center py-8"><p class="text-app-textMuted text-sm">${t('no_residents')}</p></div>`;
        return;
    }

    list.innerHTML = filtered.map(r => {
        const monthKey = Utils.getMonthKey(AppState.currentYear, AppState.currentMonth);
        const bill = AppState.bills.find(b => b.residentId === r.id && b.monthKey === monthKey);
        const payment = bill ? AppState.payments.find(p => p.billId === bill.id && p.monthKey === monthKey) : null;
        const statusBadge = payment ? '<span class="badge badge-paid">Paid</span>' :
                            bill ? '<span class="badge badge-pending">Pending</span>' :
                            '<span class="badge badge-none">No Bill</span>';

        const avatar = r.photo
            ? `<img src="${r.photo}" class="w-12 h-12 rounded-xl object-cover" alt="">`
            : `<div class="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold" style="background:var(--dark-700);color:var(--app-brand);">${Utils.getInitials(r.firstName, r.lastName)}</div>`;

        const roomLabel = r.roomType ? r.roomType.toUpperCase() : '';
        const typeLabel = r.houseType === 'shared' ? '⚡Watt' : r.houseType === 'reader' ? '📟Reader' : '';
        const floorName = r.floor === 0 ? 'Ground' : `${r.floor}${r.floor===1?'st':r.floor===2?'nd':r.floor===3?'rd':'th'}`;

        return `<div class="resident-card-new">
            <div class="rcn-left">
                ${avatar}
            </div>
            <div class="rcn-body">
                <div class="rcn-top">
                    <p class="rcn-name">${r.firstName} ${r.lastName}</p>
                    ${statusBadge}
                </div>
                <div class="rcn-details">
                    <span class="rcn-tag">🏠 ${r.houseNumber}</span>
                    <span class="rcn-tag">📍 ${floorName}</span>
                    ${roomLabel ? `<span class="rcn-tag">🛏 ${roomLabel}</span>` : ''}
                    ${typeLabel ? `<span class="rcn-tag">${typeLabel}</span>` : ''}
                </div>
                ${r.phone ? `<p class="rcn-phone">📱 ${r.phone}</p>` : ''}
                ${r.members > 1 ? `<p class="rcn-members">👥 ${r.members} members</p>` : ''}
            </div>
            <div class="rcn-actions">
                <button onclick="openEditResidentModal('${r.id}')" class="rcn-btn edit-btn" title="Edit"><i class="ph ph-pencil-simple"></i></button>
                <button onclick="deleteResident('${r.id}')" class="rcn-btn delete-btn" title="Delete"><i class="ph ph-trash"></i></button>
            </div>
        </div>`;
    }).join('');
}

// ==================== RENDER BILLS (Enter Watts) ====================
async function renderBills() {
    AppState.residents = await db.getAll('residents');
    AppState.bills = await db.getAll('bills');
    AppState.payments = await db.getAll('payments');
    const list = document.getElementById('wattsEntryList');
    if (!list) return;

    const month = parseInt(document.getElementById('billMonth')?.value || AppState.currentMonth);
    const year = parseInt(document.getElementById('billYear')?.value || AppState.currentYear);
    const monthKey = Utils.getMonthKey(year, month);
    const rate = parseFloat(AppState.settings.etbPerWatt) || 6.4592;

    const el = (id) => document.getElementById(id);
    if (el('displayRate')) el('displayRate').textContent = rate;

    let filtered = [...AppState.residents];
    const floor = AppState.currentFilter.billFloor;
    if (floor !== 'all') filtered = filtered.filter(r => String(r.floor) === String(floor));
    filtered.sort((a, b) => (a.floor - b.floor) || (a.houseNumber || '').localeCompare(b.houseNumber || ''));

    if (filtered.length === 0) {
        list.innerHTML = `<div class="text-center py-8"><p class="text-app-textMuted text-sm">${t('no_houses')}</p></div>`;
        return;
    }

    list.innerHTML = filtered.map(r => {
        const bill = AppState.bills.find(b => b.residentId === r.id && b.monthKey === monthKey);
        const payment = bill ? AppState.payments.find(p => p.billId === bill.id && p.monthKey === monthKey) : null;
        const watts = bill ? bill.wattsUsed : '';
        const fixedAmt = parseFloat(AppState.settings.fixedAmount) || 0;

        // Calculate the correct ETB for display
        let etb = 0;
        let eepCalc = null;
        if (r.houseType === 'reader') {
            etb = fixedAmt;
        } else if (watts > 0) {
            eepCalc = calculateEEPBill(watts);
            etb = eepCalc.totalAmount;
        } else if (bill) {
            // Recalculate from stored watts (may be from old calculation without fees)
            if (bill.wattsUsed > 0 && r.houseType !== 'reader') {
                eepCalc = calculateEEPBill(bill.wattsUsed);
                etb = eepCalc.totalAmount;
            } else {
                etb = bill.etbAmount || 0;
            }
        }

        const avatar = r.photo
            ? `<img src="${r.photo}" class="w-10 h-10 rounded-full object-cover" alt="">`
            : `<div class="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold" style="background:var(--dark-700);color:var(--app-brand);">${Utils.getInitials(r.firstName, r.lastName)}</div>`;

        const roomLabel = r.roomType ? `· ${r.roomType.toUpperCase()}` : '';
        const typeIcon = r.houseType === 'reader' ? '📟' : '⚡';

        // Status badge
        const isPaid = !!payment;
        const statusBadge = isPaid
            ? '<span class="watts-status-badge paid">✓ Paid</span>'
            : (bill ? '<span class="watts-status-badge pending">⏳ Pending</span>' : '<span class="watts-status-badge none">—</span>');

        // EEP breakdown dropdown (for watt counter only, when watts > 0)
        let breakdownHTML = '';
        if (eepCalc && watts > 0) {
            breakdownHTML = `
            <div class="watts-breakdown hidden" id="breakdown-${r.id}">
                <div class="watts-breakdown-row"><span>Energy Charge</span><span>${eepCalc.kWh.toFixed(2)} kWh × ${rate}</span><span>${Utils.formatCurrency(eepCalc.energyCharge)} ETB</span></div>
                <div class="watts-breakdown-row"><span>Service Charge</span><span>Fixed</span><span>${Utils.formatCurrency(eepCalc.serviceCharge)} ETB</span></div>
                <div class="watts-breakdown-row"><span>Regulatory Fee (0.5%)</span><span>—</span><span>${Utils.formatCurrency(eepCalc.regulatoryFee)} ETB</span></div>
                <div class="watts-breakdown-row"><span>VAT (15%)</span><span>—</span><span>${Utils.formatCurrency(eepCalc.tax)} ETB</span></div>
                <div class="watts-breakdown-row total"><span>Total</span><span></span><span>${Utils.formatCurrency(eepCalc.totalAmount)} ETB</span></div>
            </div>`;
        } else if (r.houseType === 'reader' && fixedAmt > 0) {
            breakdownHTML = `
            <div class="watts-breakdown hidden" id="breakdown-${r.id}">
                <div class="watts-breakdown-row total"><span>Own Reader Fixed Amount</span><span></span><span>${Utils.formatCurrency(fixedAmt)} ETB</span></div>
            </div>`;
        }

        // Action button
        let actionHTML = '';
        if (isPaid) {
            actionHTML = `<button onclick="openReceiptViewer('${payment.id}')" class="watts-action-btn paid-btn" title="View Receipt">📄</button>`;
        } else if (bill) {
            actionHTML = `<button onclick="quickPayResident('${r.id}', '${bill.id}')" class="watts-action-btn pay-btn" title="Mark Paid">💰</button>`;
        }

        return `<div class="watts-card ${isPaid ? 'watts-card-paid' : ''}">
            <div class="watts-card-top">
                <div class="flex items-center gap-3 flex-1 min-w-0">
                    ${avatar}
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-semibold text-app-textBase truncate">${r.firstName} ${r.lastName}</p>
                        <p class="text-[11px] text-app-textMuted">${typeIcon} ${r.houseNumber} ${roomLabel}</p>
                    </div>
                    ${statusBadge}
                </div>
                <div class="flex items-center gap-2">
                    ${r.houseType !== 'reader' ? `<input type="number" class="dark-input text-xs w-20 text-center watts-input" data-resident-id="${r.id}" min="0" step="0.01" value="${watts}" placeholder="kWh">` : `<span class="text-[11px] text-app-textMuted px-2">Fixed</span>`}
                    <span class="watts-etb-display" data-resident-id="${r.id}">${Utils.formatCurrency(etb)} ETB</span>
                    ${eepCalc && watts > 0 ? `<button class="watts-toggle-btn" onclick="toggleBreakdown('${r.id}')" title="Show breakdown">▾</button>` : ''}
                    ${actionHTML}
                </div>
            </div>
            ${breakdownHTML}
        </div>`;
    }).join('');

    // Wire up live ETB calculation
    list.querySelectorAll('.watts-input').forEach(input => {
        input.addEventListener('input', () => {
            const val = parseFloat(input.value) || 0;
            const etbEl = list.querySelector(`.watts-etb-display[data-resident-id="${input.dataset.residentId}"]`);
            const breakdownEl = document.getElementById('breakdown-' + input.dataset.residentId);
            if (!etbEl) return;
            const rid = input.dataset.residentId;
            const rr = AppState.residents.find(r => r.id === rid);
            if (rr && rr.houseType === 'reader') {
                const fixed = parseFloat(AppState.settings.fixedAmount) || 0;
                etbEl.textContent = `${Utils.formatCurrency(fixed)} ETB`;
            } else if (val > 0) {
                const calc = calculateEEPBill(val);
                etbEl.textContent = `${Utils.formatCurrency(calc.totalAmount)} ETB`;
                // Update breakdown
                if (breakdownEl) {
                    const rows = breakdownEl.querySelectorAll('.watts-breakdown-row');
                    if (rows.length >= 5) {
                        rows[0].querySelector('span:last-child').textContent = `${Utils.formatCurrency(calc.energyCharge)} ETB`;
                        rows[1].querySelector('span:last-child').textContent = `${Utils.formatCurrency(calc.serviceCharge)} ETB`;
                        rows[2].querySelector('span:last-child').textContent = `${Utils.formatCurrency(calc.regulatoryFee)} ETB`;
                        rows[3].querySelector('span:last-child').textContent = `${Utils.formatCurrency(calc.tax)} ETB`;
                        rows[4].querySelector('span:last-child').textContent = `${Utils.formatCurrency(calc.totalAmount)} ETB`;
                    }
                    breakdownEl.classList.remove('hidden');
                }
            } else {
                etbEl.textContent = `${Utils.formatCurrency(0)} ETB`;
                if (breakdownEl) breakdownEl.classList.add('hidden');
            }
        });
    });
}

// Toggle EEP breakdown dropdown
function toggleBreakdown(residentId) {
    const el = document.getElementById('breakdown-' + residentId);
    if (el) el.classList.toggle('hidden');
}

// ==================== RENDER PAYMENTS ====================
async function renderPayments() {
    AppState.residents = await db.getAll('residents');
    AppState.bills = await db.getAll('bills');
    AppState.payments = await db.getAll('payments');

    const list = document.getElementById('paymentsList');
    if (!list) return;

    const month = parseInt(document.getElementById('paymentMonth')?.value || AppState.currentMonth);
    const year = parseInt(document.getElementById('paymentYear')?.value || AppState.currentYear);
    const monthKey = Utils.getMonthKey(year, month);
    const statusFilter = AppState.currentFilter.payStatus;

    let items = AppState.residents.map(r => {
        const bill = AppState.bills.find(b => b.residentId === r.id && b.monthKey === monthKey);
        const payment = bill ? AppState.payments.find(p => p.billId === bill.id && p.monthKey === monthKey) : null;
        let status = 'no_bill';
        if (payment) status = 'paid';
        else if (bill) status = 'pending';
        return { resident: r, bill, payment, status };
    });

    if (statusFilter !== 'all') items = items.filter(i => i.status === statusFilter);
    items.sort((a, b) => (a.resident.floor - b.resident.floor) || (a.resident.houseNumber || '').localeCompare(b.resident.houseNumber || ''));

    // Summary
    const totalExpected = items.reduce((s, i) => s + (i.bill?.etbAmount || 0), 0);
    const totalCollected = items.reduce((s, i) => s + (i.payment?.amountPaid || 0), 0);
    const el = (id) => document.getElementById(id);
    if (el('paymentExpected')) el('paymentExpected').textContent = Utils.formatCurrency(totalExpected);
    if (el('paymentCollected')) el('paymentCollected').textContent = Utils.formatCurrency(totalCollected);

    if (items.length === 0) {
        list.innerHTML = `<div class="text-center py-8"><p class="text-app-textMuted text-sm">${t('no_records')}</p></div>`;
        return;
    }

    list.innerHTML = items.map(item => {
        const r = item.resident;
        const statusBadge = item.status === 'paid' ? '<span class="badge badge-paid">✓ Paid</span>' :
                            item.status === 'pending' ? '<span class="badge badge-pending">⏳ Pending</span>' :
                            '<span class="badge badge-none">No Bill</span>';

        const avatar = r.photo
            ? `<img src="${r.photo}" class="w-11 h-11 rounded-xl object-cover" alt="">`
            : `<div class="w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold" style="background:var(--dark-700);color:var(--app-brand);">${Utils.getInitials(r.firstName, r.lastName)}</div>`;

        // Calculate actual EEP total
        let displayETB = item.bill?.etbAmount || 0;
        if (item.bill && item.bill.wattsUsed > 0 && r.houseType !== 'reader') {
            displayETB = calculateEEPBill(item.bill.wattsUsed).totalAmount;
        }

        let actionBtn = '';
        if (item.status === 'pending' && item.bill) {
            actionBtn = `<button onclick="quickPayResident('${r.id}', '${item.bill.id}')" class="pay-action-btn">
                <i class="ph ph-currency-dollar"></i>
                <span>Pay Now</span>
            </button>`;
        } else if (item.status === 'paid') {
            actionBtn = `<div class="flex items-center gap-2">
                <span class="text-xs font-bold text-emerald-400">${Utils.formatCurrency(item.payment.amountPaid)} ETB</span>
                <button onclick="openReceiptViewer('${item.payment.id}')" class="receipt-action-btn" title="View Receipt"><i class="ph ph-receipt"></i></button>
            </div>`;
        } else {
            actionBtn = `<span class="text-[10px] text-app-textDarker">—</span>`;
        }

        const floorName = r.floor === 0 ? 'G' : r.floor;
        const roomLabel = r.roomType ? r.roomType.toUpperCase() : '';
        const typeLabel = r.houseType === 'shared' ? '⚡Watt' : '📟Reader';

        return `<div class="payment-card-new">
            <div class="pcn-left">
                ${avatar}
            </div>
            <div class="pcn-body">
                <div class="pcn-top">
                    <p class="pcn-name">${r.firstName} ${r.lastName}</p>
                    ${statusBadge}
                </div>
                <div class="pcn-info">
                    <span>🏠 ${r.houseNumber}</span>
                    <span>📍 ${floorName}</span>
                    <span>${typeLabel}</span>
                    ${roomLabel ? `<span>🛏 ${roomLabel}</span>` : ''}
                </div>
                <p class="pcn-amount">${item.bill ? `${Utils.formatCurrency(displayETB)} ETB` : 'No bill'}</p>
            </div>
            <div class="pcn-action">
                ${actionBtn}
            </div>
        </div>`;
    }).join('');
}

// ==================== RENDER REPORTS ====================
async function renderReports() {
    AppState.residents = await db.getAll('residents');
    AppState.bills = await db.getAll('bills');
    AppState.payments = await db.getAll('payments');

    const month = parseInt(document.getElementById('reportMonth')?.value || AppState.currentMonth);
    const year = parseInt(document.getElementById('reportYear')?.value || AppState.currentYear);
    const report = getReportData(month, year);
    const content = document.getElementById('reportContent');
    if (!content) return;

    const tab = AppState.currentFilter.reportTab;

    if (tab === 'overview') {
        const pct = report.totalExpected > 0 ? Math.round(report.totalCollected / report.totalExpected * 100) : 0;
        content.innerHTML = `
            <div class="glass-card"><h3 class="text-sm font-bold text-app-textBase mb-3">Summary</h3>
                <div class="grid grid-cols-2 gap-3">
                    <div class="p-3 rounded-xl" style="background:var(--dark-700);"><p class="text-[10px] text-app-textMuted">Total Expected</p><p class="text-lg font-bold text-app-textBase">${Utils.formatCurrency(report.totalExpected)} ETB</p></div>
                    <div class="p-3 rounded-xl" style="background:var(--dark-700);"><p class="text-[10px] text-app-textMuted">Total Collected</p><p class="text-lg font-bold text-emerald-400">${Utils.formatCurrency(report.totalCollected)} ETB</p></div>
                    <div class="p-3 rounded-xl" style="background:var(--dark-700);"><p class="text-[10px] text-app-textMuted">Paid</p><p class="text-lg font-bold text-emerald-400">${report.paid.length}</p></div>
                    <div class="p-3 rounded-xl" style="background:var(--dark-700);"><p class="text-[10px] text-app-textMuted">Pending</p><p class="text-lg font-bold text-orange-400">${report.pending.length}</p></div>
                </div>
                <div class="mt-3"><div class="progress-bar-track"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
                <p class="text-[10px] text-app-textMuted mt-1">${pct}% collection rate</p></div>
            </div>`;
    } else if (tab === 'unpaid') {
        if (report.pending.length === 0) {
            content.innerHTML = `<div class="glass-card text-center py-8"><p class="text-app-textMuted">${t('all_paid')}</p></div>`;
        } else {
            content.innerHTML = `<div class="glass-card"><h3 class="text-sm font-bold text-app-textBase mb-3">Unpaid (${report.pending.length})</h3><div class="space-y-2">${report.pending.map(r => `
                <div class="flex items-center gap-3 p-2 rounded-lg" style="background:var(--dark-700);">
                    <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style="background:var(--dark-900);color:var(--app-brand);">${Utils.getInitials(r.firstName, r.lastName)}</div>
                    <div class="flex-1"><p class="text-xs font-semibold text-app-textBase">${r.firstName} ${r.lastName}</p><p class="text-[10px] text-app-textMuted">${r.houseNumber}</p></div>
                    <span class="text-xs font-bold text-orange-400">${Utils.formatCurrency(r.bill?.etbAmount || 0)} ETB</span>
                </div>`).join('')}</div></div>`;
        }
    } else if (tab === 'floor') {
        const totalFloors = parseInt(AppState.settings.totalFloors || 8);
        content.innerHTML = `<div class="glass-card"><h3 class="text-sm font-bold text-app-textBase mb-3">By Floor</h3><div class="space-y-2">${Object.keys(report.floorData).sort((a,b)=>a-b).map(f => {
            const fd = report.floorData[f];
            const rate = fd.total > 0 ? Math.round(fd.paid / fd.total * 100) : 0;
            return `<div class="flex items-center gap-3 p-3 rounded-xl" style="background:var(--dark-700);">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold" style="background:var(--dark-900);color:var(--app-brand);">${f === '0' ? 'G' : f}</div>
                <div class="flex-1">
                    <div class="flex justify-between mb-1"><span class="text-xs text-app-textBase">${fd.total} houses</span><span class="text-[10px] text-app-textMuted">${fd.paid} paid / ${fd.pending + fd.overdue} pending</span></div>
                    <div class="progress-bar-track"><div class="progress-bar-fill" style="width:${rate}%"></div></div>
                </div>
                <span class="text-xs font-bold text-app-brand">${rate}%</span>
            </div>`;
        }).join('')}</div></div>`;
    } else if (tab === 'history') {
        let hhtml = '<div class="glass-card overflow-x-auto"><h3 class="text-sm font-bold text-app-textBase mb-3">History</h3><table class="dark-table"><thead><tr><th>Date</th><th>House</th><th>Resident</th><th>Amount</th><th>Method</th></tr></thead><tbody>';
        AppState.payments.filter(p => p.monthKey === Utils.getMonthKey(year, month)).sort((a, b) => b.date - a.date).forEach(p => {
            const r = AppState.residents.find(r => r.id === p.residentId);
            hhtml += `<tr><td>${Utils.formatDate(p.date)}</td><td>${r?.houseNumber || '—'}</td><td>${r ? r.firstName + ' ' + r.lastName : '—'}</td><td class="text-emerald-400">${Utils.formatCurrency(p.amountPaid)}</td><td>${p.method || '—'}</td></tr>`;
        });
        hhtml += '</tbody></table></div>';
        content.innerHTML = hhtml;
    }
}

// ==================== RENDER SYNC ====================
function renderSync() {
    const el = (id) => document.getElementById(id);
    if (el('lastSyncTime')) el('lastSyncTime').textContent = AppState.settings.lastSyncTime ? Utils.formatDateTime(AppState.settings.lastSyncTime) : 'Never';

    const syncLogEl = el('syncLog');
    if (syncLogEl) {
        if (AppState.syncLog.length === 0) {
            syncLogEl.innerHTML = `<p class="text-xs text-app-textMuted text-center py-4">${t('no_history')}</p>`;
        } else {
            syncLogEl.innerHTML = AppState.syncLog.slice(-10).reverse().map(l => `
                <div class="p-2 rounded-lg text-xs" style="background:var(--dark-700);">
                    <p class="text-app-textBase">${l.action}</p>
                    <p class="text-[10px] text-app-textMuted">${Utils.formatDateTime(l.timestamp)}</p>
                </div>`).join('');
        }
    }
}

// ==================== RENDER SETTINGS ====================
function renderSettings() {
    const s = AppState.settings;
    const el = (id) => document.getElementById(id);
    if (el('settingBuildingName')) el('settingBuildingName').value = s.buildingName || '';
    if (el('settingBuildingAddress')) el('settingBuildingAddress').value = s.buildingAddress || '';
    if (el('settingContactPhone')) el('settingContactPhone').value = s.contactPhone || '';
    if (el('settingEtbPerWatt')) el('settingEtbPerWatt').value = s.etbPerWatt || 6.4592;
    if (el('settingFixedAmount')) el('settingFixedAmount').value = s.fixedAmount || 0;
    if (el('settingTotalFloors')) el('settingTotalFloors').value = s.totalFloors || 8;
    if (el('settingHousesPerFloor')) el('settingHousesPerFloor').value = s.housesPerFloor || 4;
    if (el('settingGroundHouses')) el('settingGroundHouses').value = s.groundHouses || 4;
    if (el('settingCurrentUsername')) el('settingCurrentUsername').value = AppState.credentials.username || 'admin';
    if (el('settingLockTimeout')) el('settingLockTimeout').value = AppState.lockTimeout || 5;
}

// ==================== RENDER COVER PAYMENT ====================
async function renderCover() {
    const el = (id) => document.getElementById(id);
    // Populate month/year selects
    const coverMonth = el('coverMonth');
    const coverYear = el('coverYear');
    if (coverMonth && coverMonth.options.length <= 1) { Utils.populateMonthSelect(coverMonth); coverMonth.value = AppState.currentMonth; }
    if (coverYear && coverYear.options.length <= 1) { Utils.populateYearSelect(coverYear); coverYear.value = AppState.currentYear; }

    // Show existing cover charges
    const coverListEl = el('coverList');
    if (coverListEl) {
        const coverCharges = AppState.bills.filter(b => b.isCoverCharge);
        if (coverCharges.length === 0) {
            coverListEl.innerHTML = `<p class="text-xs text-app-textMuted text-center py-4">No cover charges applied</p>`;
        } else {
            coverListEl.innerHTML = coverCharges.map(c => {
                const r = AppState.residents.find(r => r.id === c.residentId);
                return `<div class="flex items-center gap-3 p-2 rounded-lg" style="background:var(--dark-700);">
                    <div class="flex-1"><p class="text-xs font-semibold text-app-textBase">${r ? r.firstName + ' ' + r.lastName : '—'}</p><p class="text-[10px] text-app-textMuted">${r?.houseNumber || '—'} · ${c.monthKey}</p></div>
                    <span class="text-xs font-bold text-orange-400">${Utils.formatCurrency(c.etbAmount)} ETB</span>
                </div>`;
            }).join('');
        }
    }
}

// ==================== POPULATE FLOOR SELECT ====================
function populateFloorSelect(selectId) {
    const sel = document.getElementById(selectId);
    if (!sel) return;
    sel.innerHTML = '';
    const totalFloors = parseInt(AppState.settings.totalFloors || 8);
    for (let f = 0; f < totalFloors; f++) {
        const o = document.createElement('option');
        o.value = f;
        o.textContent = f === 0 ? t('floor_ground') : `${f}${f === 1 ? 'st' : f === 2 ? 'nd' : f === 3 ? 'rd' : 'th'}`;
        sel.appendChild(o);
    }
}

// ==================== MODAL: ADD/EDIT RESIDENT ====================
function openAddResidentModal() {
    document.getElementById('residentModalTitle').textContent = t('modal_add_resident');
    document.getElementById('residentId').value = '';
    document.getElementById('residentForm').reset();
    document.getElementById('resPhoto').value = '';
    document.getElementById('photoImg').classList.add('hidden');
    document.getElementById('photoPlaceholder').classList.remove('hidden');
    populateFloorSelect('resFloor');
    document.getElementById('residentModal').classList.remove('hidden');
}

async function openEditResidentModal(id) {
    const r = await db.get('residents', id);
    if (!r) return;
    document.getElementById('residentModalTitle').textContent = t('modal_edit_resident');
    document.getElementById('residentId').value = id;
    populateFloorSelect('resFloor');
    document.getElementById('resFloor').value = r.floor;
    document.getElementById('resHouse').value = r.houseNumber;
    document.getElementById('resHouseType').value = r.houseType || 'reader';
    document.getElementById('resFirstName').value = r.firstName;
    document.getElementById('resLastName').value = r.lastName;
    document.getElementById('resRoomType').value = r.roomType || '2br';
    document.getElementById('resPhone').value = r.phone || '';
    document.getElementById('resMembers').value = r.members || 1;
    document.getElementById('resNotes').value = r.notes || '';
    document.getElementById('resPhoto').value = r.photo || '';
    if (r.photo) {
        document.getElementById('photoImg').src = r.photo;
        document.getElementById('photoImg').classList.remove('hidden');
        document.getElementById('photoPlaceholder').classList.add('hidden');
    } else {
        document.getElementById('photoImg').classList.add('hidden');
        document.getElementById('photoPlaceholder').classList.remove('hidden');
    }
    document.getElementById('residentModal').classList.remove('hidden');
}

async function deleteResident(id) {
    const r = await db.get('residents', id);
    if (!r) return;
    const confirmed = await showConfirm(t('confirm_delete_title'), t('confirm_delete_msg', `${r.firstName} ${r.lastName}`, r.houseNumber));
    if (!confirmed) return;
    // Delete related bills and payments
    const bills = await db.getAllByIndex('bills', 'residentId', id);
    for (const b of bills) { await db.delete('bills', b.id); }
    const payments = await db.getAllByIndex('payments', 'residentId', id);
    for (const p of payments) { await db.delete('payments', p.id); }
    await db.delete('residents', id);
    await logActivity('Deleted resident', `${r.firstName} ${r.lastName} (${r.houseNumber})`);
    showToast(t('toast_deleted'), 'success');
    renderResidents();
}

// ==================== MODAL: RECORD PAYMENT ====================
async function quickPayResident(residentId, billId) {
    const r = AppState.residents.find(r => r.id === residentId);
    const bill = AppState.bills.find(b => b.id === billId);
    if (!r || !bill) return;

    // Calculate full EEP amount
    let amountDue = bill.etbAmount;
    if (bill.wattsUsed > 0) {
        amountDue = calculateEEPBill(bill.wattsUsed).totalAmount;
    }

    const monthKeyParts = bill.monthKey.split('-');
    const month = parseInt(monthKeyParts[1]);
    const year = parseInt(monthKeyParts[0]);
    const today = new Date().toISOString().split('T')[0];

    const paymentData = {
        id: Utils.generateId(),
        billId, residentId: r.id, monthKey: bill.monthKey, month, year,
        amountPaid: amountDue,
        amountDue: amountDue,
        method: 'cash',
        date: today,
        receipt: '',
        notes: 'Quick payment - marked paid',
        createdAt: Date.now()
    };

    // Check if payment already exists for this bill
    const existing = AppState.payments.find(p => p.billId === billId && p.monthKey === bill.monthKey);
    if (existing) {
        paymentData.id = existing.id;
    }

    await db.put('payments', paymentData);
    AppState.payments = await db.getAll('payments');

    // Save receipt
    try { await saveReceipt(paymentData, bill, r); } catch(e) { console.error('Receipt error:', e); }

    showToast(`${r.firstName} ${r.lastName} paid ${Utils.formatCurrency(amountDue)} ETB ✓`, 'success');
    await logActivity('Quick Payment', `${r.firstName} ${r.lastName} - ${Utils.formatCurrency(amountDue)} ETB`);
    refreshPage(AppState.currentPage);
}

// ==================== MODAL: BATCH WATTS ====================
function openBatchWattsModal() {
    AppState.residents = [...AppState.residents].sort((a, b) => (a.floor - b.floor) || (a.houseNumber || '').localeCompare(b.houseNumber || ''));
    if (AppState.residents.length === 0) { showToast(t('no_houses'), 'error'); return; }
    AppState.batchIndex = 0;
    document.getElementById('batchMonth').value = AppState.currentMonth;
    document.getElementById('batchYear').value = AppState.currentYear;
    updateBatchDisplay();
    document.getElementById('batchWattsModal').classList.remove('hidden');
}

function updateBatchDisplay() {
    const r = AppState.residents[AppState.batchIndex];
    if (!r) return;
    const month = parseInt(document.getElementById('batchMonth').value);
    const year = parseInt(document.getElementById('batchYear').value);
    const rate = parseFloat(AppState.settings.etbPerWatt) || 6.4592;
    const bill = AppState.bills.find(b => b.residentId === r.id && b.monthKey === Utils.getMonthKey(year, month));

    document.getElementById('batchHouseNum').textContent = r.houseNumber;
    document.getElementById('batchResidentName').textContent = `${r.firstName} ${r.lastName}`;
    document.getElementById('batchWattsInput').value = bill ? bill.wattsUsed : '';
    document.getElementById('batchEtbCalc').textContent = Utils.formatCurrency(bill ? bill.etbAmount : 0);
    document.getElementById('batchProgress').textContent = `House ${AppState.batchIndex + 1} of ${AppState.residents.length}`;
    const pct = ((AppState.batchIndex + 1) / AppState.residents.length * 100).toFixed(0);
    document.getElementById('batchProgressBar').style.width = `${pct}%`;
}

// ==================== DATA OPERATIONS ====================
async function saveAllWatts() {
    const month = parseInt(document.getElementById('billMonth')?.value || AppState.currentMonth);
    const year = parseInt(document.getElementById('billYear')?.value || AppState.currentYear);
    const monthKey = Utils.getMonthKey(year, month);
    const rate = parseFloat(AppState.settings.etbPerWatt) || 6.4592;

    const inputs = document.querySelectorAll('.watts-input');
    let saved = 0;
    for (const input of inputs) {
        const residentId = input.dataset.residentId;
        const watts = parseFloat(input.value) || 0;
        if (watts <= 0) continue;

        const existing = AppState.bills.find(b => b.residentId === residentId && b.monthKey === monthKey);
        const billData = {
            id: existing ? existing.id : Utils.generateId(),
            residentId, monthKey, wattsUsed: watts, etbAmount: calculateEEPBill(watts).totalAmount,
            month, year, createdAt: existing ? existing.createdAt : Date.now(), updatedAt: Date.now()
        };

        await db.put('bills', billData);
        saved++;
    }

    if (saved > 0) {
        AppState.bills = await db.getAll('bills');
        showToast(t('toast_saved'), 'success');
        await logActivity('Saved watt entries', `${saved} entries for ${Utils.getMonthName(month)} ${year}`);
    } else {
        showToast(t('toast_nothing'), 'warning');
    }
}

async function saveResident(e) {
    e.preventDefault();
    const id = document.getElementById('residentId').value;
    const data = {
        floor: parseInt(document.getElementById('resFloor').value),
        houseNumber: document.getElementById('resHouse').value.trim(),
        houseType: document.getElementById('resHouseType').value,
        firstName: document.getElementById('resFirstName').value.trim(),
        lastName: document.getElementById('resLastName').value.trim(),
        phone: document.getElementById('resPhone').value.trim(),
        members: parseInt(document.getElementById('resMembers').value) || 1,
        roomType: document.getElementById('resRoomType').value,
        photo: document.getElementById('resPhoto').value,
        notes: document.getElementById('resNotes').value.trim(),
        fullName: `${document.getElementById('resFirstName').value.trim()} ${document.getElementById('resLastName').value.trim()}`.toLowerCase()
    };

    try {
        if (id) {
            const existing = await db.get('residents', id);
            await db.put('residents', { ...existing, ...data, updatedAt: Date.now() });
            showToast(t('toast_updated'), 'success');
            await logActivity('Updated resident', `${data.firstName} ${data.lastName}`);
        } else {
            data.id = Utils.generateId();
            data.createdAt = Date.now();
            await db.add('residents', data);
            showToast(t('toast_added'), 'success');
            await logActivity('Added resident', `${data.firstName} ${data.lastName}`);
        }
        document.getElementById('residentModal').classList.add('hidden');
        AppState.residents = await db.getAll('residents');
        refreshPage(AppState.currentPage);
    } catch (err) {
        showToast(err.message || 'Error saving', 'error');
    }
}

async function savePayment(e) {
    e.preventDefault();
    const billId = document.getElementById('payBillId').value;
    const bill = AppState.bills.find(b => b.id === billId);
    if (!bill) return;

    const month = parseInt(document.getElementById('payMonth').value);
    const year = parseInt(document.getElementById('payYear').value);
    const monthKey = Utils.getMonthKey(year, month);

    const paymentData = {
        id: Utils.generateId(),
        billId, residentId: bill.residentId, monthKey, month, year,
        amountPaid: parseFloat(document.getElementById('payAmountPaid').value) || 0,
        amountDue: parseFloat(document.getElementById('payAmountDue').value) || 0,
        method: document.getElementById('payMethod').value,
        date: document.getElementById('payDate').value,
        receipt: document.getElementById('payReceipt').value.trim(),
        notes: document.getElementById('payNotes').value.trim(),
        createdAt: Date.now()
    };

    // Check if payment already exists for this bill
    const existing = AppState.payments.find(p => p.billId === billId && p.monthKey === monthKey);
    if (existing) {
        paymentData.id = existing.id;
    }

    await db.put('payments', paymentData);
    AppState.payments = await db.getAll('payments');
    
    // Calculate EEP breakdown and save receipt
    const payResident = AppState.residents.find(r => r.id === bill.residentId);
    try { await saveReceipt(paymentData, bill, payResident); } catch(e) { console.error('Receipt save error:', e); }
    
    showToast(t('toast_payment'), 'success');
    await logActivity('Recorded payment', `${payResident?.firstName || ''} ${payResident?.lastName || ''} - ${Utils.formatCurrency(paymentData.amountPaid)} ETB`);
    document.getElementById('paymentModal').classList.add('hidden');
    refreshPage(AppState.currentPage);
}


// ==================== DETAIL MODAL ====================
function openDetailModal(residentId, context) {
    const r = AppState.residents.find(r => r.id === residentId);
    if (!r) return;
    
    const month = AppState.currentMonth;
    const year = AppState.currentYear;
    const monthKey = Utils.getMonthKey(year, month);
    const bill = AppState.bills.find(b => b.residentId === r.id && b.monthKey === monthKey);
    const payment = bill ? AppState.payments.find(p => p.billId === bill.id && p.monthKey === monthKey) : null;
    const punishment = AppState.punishments.find(p => p.residentId === r.id && p.monthKey === monthKey);
    
    const avatar = r.photo
        ? `<img src="${r.photo}" class="w-16 h-16 rounded-2xl object-cover" alt="">`
        : `<div class="w-16 h-16 rounded-2xl flex items-center justify-xl text-xl font-bold" style="background:var(--dark-700);color:var(--app-brand);">${Utils.getInitials(r.firstName, r.lastName)}</div>`;
    
    let etb = bill?.etbAmount || 0;
    let eepCalc = null;
    if (bill && bill.wattsUsed > 0 && r.houseType !== 'reader') {
        eepCalc = calculateEEPBill(bill.wattsUsed);
        etb = eepCalc.totalAmount;
    } else if (r.houseType === 'reader') {
        etb = parseFloat(AppState.settings.fixedAmount) || 0;
    }
    
    const floorName = r.floor === 0 ? 'Ground' : `Floor ${r.floor}`;
    const typeLabel = r.houseType === 'shared' ? 'Watt Counter' : 'Own Reader';
    const statusColor = payment ? '#10B981' : (bill ? '#F97316' : '#6b7280');
    const statusText = payment ? 'Paid' : (bill ? 'Pending' : 'No Bill');
    const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const monthName = monthNames[month - 1] || month;
    
    let billSection = '';
    if (bill) {
        billSection = `
            <div class="detail-section">
                <h4 class="detail-section-title">Bill - ${monthName} ${year}</h4>
                <div class="detail-grid">
                    <div class="detail-item"><span class="detail-label">Watts Used</span><span class="detail-value">${bill.wattsUsed} kWh</span></div>
                    ${eepCalc ? `
                    <div class="detail-item"><span class="detail-label">Energy Charge</span><span class="detail-value">${Utils.formatCurrency(eepCalc.energyCharge)} ETB</span></div>
                    <div class="detail-item"><span class="detail-label">Service Charge</span><span class="detail-value">${Utils.formatCurrency(eepCalc.serviceCharge)} ETB</span></div>
                    <div class="detail-item"><span class="detail-label">Regulatory Fee</span><span class="detail-value">${Utils.formatCurrency(eepCalc.regulatoryFee)} ETB</span></div>
                    <div class="detail-item"><span class="detail-label">VAT (15%)</span><span class="detail-value">${Utils.formatCurrency(eepCalc.tax)} ETB</span></div>
                    ` : ''}
                    <div class="detail-item total"><span class="detail-label">Total Amount</span><span class="detail-value">${Utils.formatCurrency(etb)} ETB</span></div>
                </div>
            </div>`;
    }
    
    let paymentSection = '';
    if (payment) {
        paymentSection = `
            <div class="detail-section">
                <h4 class="detail-section-title">Payment</h4>
                <div class="detail-grid">
                    <div class="detail-item"><span class="detail-label">Amount Paid</span><span class="detail-value" style="color:#10B981">${Utils.formatCurrency(payment.amountPaid)} ETB</span></div>
                    <div class="detail-item"><span class="detail-label">Method</span><span class="detail-value">${payment.method || 'Cash'}</span></div>
                    <div class="detail-item"><span class="detail-label">Date</span><span class="detail-value">${payment.date || '-'}</span></div>
                </div>
            </div>`;
    }
    
    let punishSection = '';
    if (punishment) {
        punishSection = `
            <div class="detail-section">
                <h4 class="detail-section-title" style="color:#EF4444">Disconnection</h4>
                <div class="detail-grid">
                    <div class="detail-item"><span class="detail-label">Status</span><span class="detail-value" style="color:#EF4444">DISCONNECTED</span></div>
                    <div class="detail-item"><span class="detail-label">Fine</span><span class="detail-value">${Utils.formatCurrency(punishment.reconnectionFee)} ETB</span></div>
                    <div class="detail-item"><span class="detail-label">Reason</span><span class="detail-value">${punishment.reason || '-'}</span></div>
                </div>
            </div>`;
    }
    
    const html = `
        <div class="detail-header">
            ${avatar}
            <div>
                <h3 class="detail-name">${r.firstName} ${r.lastName}</h3>
                <span class="detail-status" style="background:${statusColor}20;color:${statusColor}">${statusText}</span>
            </div>
        </div>
        <div class="detail-grid">
            <div class="detail-item"><span class="detail-label">House</span><span class="detail-value">🏠 ${r.houseNumber}</span></div>
            <div class="detail-item"><span class="detail-label">Floor</span><span class="detail-value">📍 ${floorName}</span></div>
            <div class="detail-item"><span class="detail-label">Type</span><span class="detail-value">${r.houseType === 'reader' ? '📟' : '⚡'} ${typeLabel}</span></div>
            ${r.roomType ? `<div class="detail-item"><span class="detail-label">Room</span><span class="detail-value">🛏 ${r.roomType.toUpperCase()}</span></div>` : ''}
            ${r.phone ? `<div class="detail-item"><span class="detail-label">Phone</span><span class="detail-value">📱 ${r.phone}</span></div>` : ''}
            ${r.members ? `<div class="detail-item"><span class="detail-label">Members</span><span class="detail-value">👥 ${r.members}</span></div>` : ''}
            ${r.notes ? `<div class="detail-item full"><span class="detail-label">Notes</span><span class="detail-value">${r.notes}</span></div>` : ''}
        </div>
        ${billSection}
        ${paymentSection}
        ${punishSection}`;
    
    document.getElementById('detailContent').innerHTML = html;
    document.getElementById('detailModal').classList.remove('hidden');
}

function closeDetailModal() {
    document.getElementById('detailModal').classList.add('hidden');
}


// ==================== LOGIN & LOCK SCREEN ====================
function showLogin() {
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('lockScreen').style.display = 'none';
    const app = document.getElementById('appContainer');
    if (app) app.style.display = 'none';
    // Hide splash - login screen is now the frontmost layer
    const splash = document.getElementById('splash');
    if (splash) { splash.style.opacity = '0'; setTimeout(() => { splash.style.display = 'none'; }, 300); }
}

function showApp() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('lockScreen').style.display = 'none';
    const app = document.getElementById('appContainer');
    if (app) { app.style.display = ''; app.style.opacity = '1'; }
    // Fade out and remove splash screen
    const splash = document.getElementById('splash');
    if (splash) {
        splash.style.opacity = '0';
        splash.style.transform = 'scale(1.1)';
        setTimeout(() => { splash.style.display = 'none'; }, 700);
    }
}

function showLockScreen() {
    const lockScreen = document.getElementById('lockScreen');
    if (lockScreen) {
        lockScreen.style.display = 'flex';
        document.getElementById('lockPassword').value = '';
        document.getElementById('lockError').style.display = 'none';
    }
}

function hideLockScreen() {
    const lockScreen = document.getElementById('lockScreen');
    if (lockScreen) lockScreen.style.display = 'none';
    resetLockTimer();
}

function resetLockTimer() {
    AppState.lastActivity = Date.now();
    clearTimeout(AppState.lockTimer);
    const timeout = AppState.lockTimeout;
    if (timeout > 0 && document.getElementById('loginScreen').style.display === 'none') {
        AppState.lockTimer = setTimeout(() => {
            if (document.getElementById('appContainer')?.style.display !== 'none') showLockScreen();
        }, timeout * 60 * 1000);
    }
}

function setupLoginUI() {
    const loginBtn = document.getElementById('loginBtn');
    const loginUsername = document.getElementById('loginUsername');
    const loginPassword = document.getElementById('loginPassword');

    if (loginBtn) {
        loginBtn.addEventListener('click', async () => {
            // Rate limiting check
            if (Security.isLocked()) {
                const remaining = Math.ceil((AppState.lockUntil - Date.now()) / 60000);
                const errEl = document.getElementById('loginError');
                errEl.textContent = `Account locked. Try again in ${remaining} minute(s)`;
                errEl.style.display = 'block';
                return;
            }
            const u = loginUsername.value.trim();
            const p = loginPassword.value;
            if (u === AppState.credentials.username && p === AppState.credentials.password) {
                Security.resetAttempts();
                Security.createSession();
                document.getElementById('loginError').style.display = 'none';
                showApp();
                await init();
                resetLockTimer();
            } else {
                Security.recordFailedAttempt();
                const remaining = Security.MAX_ATTEMPTS - AppState.loginAttempts;
                const errEl = document.getElementById('loginError');
                errEl.textContent = remaining > 0
                    ? `Invalid credentials (${remaining} attempts left)`
                    : 'Account locked for 5 minutes';
                errEl.style.display = 'block';
            }
        });
    }

    if (loginPassword) {
        loginPassword.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') loginBtn.click();
        });
    }

    // Lock screen
    const unlockBtn = document.getElementById('unlockBtn');
    if (unlockBtn) {
        unlockBtn.addEventListener('click', () => {
            if (Security.isLocked()) {
                const errEl = document.getElementById('lockError');
                errEl.textContent = 'Account temporarily locked';
                errEl.style.display = 'block';
                return;
            }
            const pw = document.getElementById('lockPassword').value;
            if (pw === AppState.credentials.password) {
                Security.resetAttempts();
                Security.createSession();
                hideLockScreen();
            } else {
                Security.recordFailedAttempt();
                const errEl = document.getElementById('lockError');
                const remaining = Security.MAX_ATTEMPTS - AppState.loginAttempts;
                errEl.textContent = remaining > 0
                    ? `Wrong password (${remaining} attempts left)`
                    : 'Account locked for 5 minutes';
                errEl.style.display = 'block';
            }
        });
    }

    const lockPw = document.getElementById('lockPassword');
    if (lockPw) {
        lockPw.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') unlockBtn.click();
        });
    }
}

// ==================== CREDENTIALS MANAGEMENT ====================
function setupCredentialsUI() {
    const changeBtn = document.getElementById('changeCredentialsBtn');
    if (changeBtn) {
        changeBtn.addEventListener('click', async () => {
            const currentPw = document.getElementById('settingCurrentPassword').value;
            const newUsername = document.getElementById('settingNewUsername').value.trim();
            const newPw = document.getElementById('settingNewPassword').value;
            const confirmPw = document.getElementById('settingConfirmPassword').value;
            const errEl = document.getElementById('settingsSecurityError');

            if (currentPw !== AppState.credentials.password) {
                errEl.textContent = 'Current password is incorrect';
                errEl.style.display = 'block';
                return;
            }
            if (newPw && newPw !== confirmPw) {
                errEl.textContent = 'New passwords do not match';
                errEl.style.display = 'block';
                return;
            }
            if (newPw) {
                const pwCheck = Security.validatePassword(newPw);
                if (!pwCheck.ok) {
                    errEl.textContent = pwCheck.msg;
                    errEl.style.display = 'block';
                    return;
                }
            }

            errEl.style.display = 'none';
            if (newUsername) AppState.credentials.username = newUsername;
            if (newPw) AppState.credentials.password = newPw;

            await db.put('settings', { key: 'credentials', value: AppState.credentials });
            document.getElementById('settingCurrentUsername').value = AppState.credentials.username;
            document.getElementById('settingCurrentPassword').value = '';
            document.getElementById('settingNewUsername').value = '';
            document.getElementById('settingNewPassword').value = '';
            document.getElementById('settingConfirmPassword').value = '';
            showToast('Credentials updated!', 'success');
        });
    }

    // Lock now
    const lockNowBtn = document.getElementById('lockNowBtn');
    if (lockNowBtn) {
        lockNowBtn.addEventListener('click', () => showLockScreen());
    }

    // Lock timeout change
    const lockTimeout = document.getElementById('settingLockTimeout');
    if (lockTimeout) {
        lockTimeout.addEventListener('change', () => {
            AppState.lockTimeout = parseInt(lockTimeout.value);
            db.put('settings', { key: 'lockTimeout', value: AppState.lockTimeout });
            resetLockTimer();
        });
    }
}

// ==================== SYNC ====================
function setupSyncUI() {
    const saveConfig = document.getElementById('saveSyncConfig');
    if (saveConfig) {
        saveConfig.addEventListener('click', async () => {
            AppState.settings.syncWebAppUrl = document.getElementById('syncWebAppUrl').value.trim();
            AppState.settings.syncSecretToken = document.getElementById('syncSecretToken').value.trim();
            await db.put('settings', { key: 'config', value: AppState.settings });
            showToast(t('toast_config_saved'), 'success');
        });
    }

    const exportBtn = document.getElementById('exportLocalBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', async () => {
            const data = await db.exportAll();
            data.credentials = AppState.credentials;
            data.config = AppState.settings;
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `condobill-backup-${new Date().toISOString().split('T')[0]}.json`;
            a.click();
            URL.revokeObjectURL(url);
            showToast(t('toast_exported'), 'success');
        });
    }

    const importBtn = document.getElementById('importLocalBtn');
    if (importBtn) {
        importBtn.addEventListener('click', () => document.getElementById('importFileInput').click());
    }

    const importInput = document.getElementById('importFileInput');
    if (importInput) {
        importInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (!file) return;
            try {
                const text = await file.text();
                const data = JSON.parse(text);
                if (data.credentials) {
                    AppState.credentials = data.credentials;
                    await db.put('settings', { key: 'credentials', value: data.credentials });
                }
                if (data.config) {
                    Object.assign(AppState.settings, data.config);
                    await db.put('settings', { key: 'config', value: data.config });
                }
                await db.importAll(data);
                AppState.residents = await db.getAll('residents');
                AppState.bills = await db.getAll('bills');
                AppState.payments = await db.getAll('payments');
                showToast(t('toast_imported'), 'success');
                refreshPage(AppState.currentPage);
            } catch (err) {
                showToast('Import failed: ' + err.message, 'error');
            }
            importInput.value = '';
        });
    }
}

// ==================== COVER PAYMENT ====================
function setupCoverPayment() {
    const applyBtn = document.getElementById('coverApplyBtn');
    if (applyBtn) {
        applyBtn.addEventListener('click', async () => {
            const amount = parseFloat(document.getElementById('coverAmount').value);
            const month = parseInt(document.getElementById('coverMonth').value);
            const year = parseInt(document.getElementById('coverYear').value);
            const target = document.getElementById('coverTarget').value;
            const monthKey = Utils.getMonthKey(year, month);

            if (!amount || amount <= 0) { showToast('Enter an amount', 'error'); return; }

            let residents = [...AppState.residents];
            if (target === 'shared') residents = residents.filter(r => r.houseType === 'shared');
            else if (target === 'reader') residents = residents.filter(r => r.houseType === 'reader');

            let count = 0;
            for (const r of residents) {
                const coverBill = {
                    id: Utils.generateId(),
                    residentId: r.id, monthKey, month, year,
                    wattsUsed: 0, etbAmount: amount, isCoverCharge: true,
                    createdAt: Date.now(), updatedAt: Date.now()
                };
                await db.put('bills', coverBill);
                count++;
            }
            AppState.bills = await db.getAll('bills');
            showToast(`Applied to ${count} houses`, 'success');
            renderCover();
        });
    }

    const clearBtn = document.getElementById('coverClearBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', async () => {
            const month = parseInt(document.getElementById('coverMonth').value);
            const year = parseInt(document.getElementById('coverYear').value);
            const monthKey = Utils.getMonthKey(year, month);
            const coverBills = AppState.bills.filter(b => b.monthKey === monthKey && b.isCoverCharge);
            for (const b of coverBills) await db.delete('bills', b.id);
            AppState.bills = await db.getAll('bills');
            showToast('Cover charges cleared', 'success');
            renderCover();
        });
    }
}

// ==================== SETTINGS ====================
function setupSettingsUI() {
    const applyBtn = document.getElementById('applyBuildingStructure');
    if (applyBtn) {
        applyBtn.addEventListener('click', async () => {
            const confirmed = await showConfirm(t('confirm_apply_title'), t('confirm_apply_msg'));
            if (!confirmed) return;

            AppState.settings.buildingName = document.getElementById('settingBuildingName').value.trim();
            AppState.settings.buildingAddress = document.getElementById('settingBuildingAddress').value.trim();
            AppState.settings.contactPhone = document.getElementById('settingContactPhone').value.trim();
            AppState.settings.etbPerWatt = document.getElementById('settingEtbPerWatt').value;
            AppState.settings.fixedAmount = parseFloat(document.getElementById('settingFixedAmount').value) || 0;
            AppState.settings.totalFloors = document.getElementById('settingTotalFloors').value;
            AppState.settings.housesPerFloor = document.getElementById('settingHousesPerFloor').value;
            AppState.settings.groundHouses = document.getElementById('settingGroundHouses').value;

            await db.put('settings', { key: 'config', value: AppState.settings });
            showToast(t('toast_config_saved'), 'success');
            refreshPage(AppState.currentPage);
        });
    }

    const clearBtn = document.getElementById('clearAllDataBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', async () => {
            let confirmed = await showConfirm(t('confirm_clear_title'), t('confirm_clear_msg'));
            if (!confirmed) return;
            confirmed = await showConfirm(t('confirm_clear_final'), t('confirm_clear_final_msg'));
            if (!confirmed) return;
            await db.clearAll();
            AppState.residents = [];
            AppState.bills = [];
            AppState.payments = [];
            showToast(t('toast_cleared'), 'success');
            refreshPage(AppState.currentPage);
        });
    }
}

// ==================== PHOTO UPLOAD ====================
function setupPhotoUpload() {
    const input = document.getElementById('resPhotoInput');
    if (input) {
        input.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
                document.getElementById('resPhoto').value = ev.target.result;
                document.getElementById('photoImg').src = ev.target.result;
                document.getElementById('photoImg').classList.remove('hidden');
                document.getElementById('photoPlaceholder').classList.add('hidden');
            };
            reader.readAsDataURL(file);
        });
    }
}

// ==================== RATE MODAL ====================
function setupRateModal() {
    const editRateBtn = document.getElementById('editRateBtn');
    if (editRateBtn) {
        editRateBtn.addEventListener('click', () => {
            document.getElementById('currentRateDisplay').textContent = AppState.settings.etbPerWatt || 6.4592;
            document.getElementById('rateInput').value = AppState.settings.etbPerWatt || 6.4592;
            document.getElementById('rateModal').classList.remove('hidden');
        });
    }

    const saveRateBtn = document.getElementById('saveRateBtn');
    if (saveRateBtn) {
        saveRateBtn.addEventListener('click', async () => {
            const newRate = parseFloat(document.getElementById('rateInput').value);
            if (isNaN(newRate) || newRate <= 0) { showToast('Invalid rate', 'error'); return; }
            AppState.settings.etbPerWatt = newRate;
            await db.put('settings', { key: 'config', value: AppState.settings });
            document.getElementById('rateModal').classList.add('hidden');
            showToast('Rate updated!', 'success');
            refreshPage(AppState.currentPage);
        });
    }
}

// ==================== NAVIGATION SETUP ====================
function setupNav() {
    // Sidebar
    document.querySelectorAll('.sidebar-link[data-page]').forEach(link => {
        link.addEventListener('click', (e) => { e.preventDefault(); navigateTo(link.dataset.page); });
    });
    // Mobile nav
    document.querySelectorAll('.mobile-nav-item[data-page]').forEach(link => {
        link.addEventListener('click', (e) => { e.preventDefault(); navigateTo(link.dataset.page); });
    });
    // Menu button
    const menuBtn = document.getElementById('menuBtn');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            document.getElementById('desktopSidebar').classList.toggle('mobile-open');
            document.getElementById('sidebarOverlay').classList.toggle('visible');
        });
    }
    // Sidebar overlay
    const overlay = document.getElementById('sidebarOverlay');
    if (overlay) {
        overlay.addEventListener('click', () => {
            document.getElementById('desktopSidebar').classList.remove('mobile-open');
            overlay.classList.remove('visible');
        });
    }
    // Month navigation
    const prevMonth = document.getElementById('prevMonth');
    const nextMonth = document.getElementById('nextMonth');
    if (prevMonth) prevMonth.addEventListener('click', () => {
        AppState.currentMonth--;
        if (AppState.currentMonth < 1) { AppState.currentMonth = 12; AppState.currentYear--; }
        refreshPage(AppState.currentPage);
    });
    if (nextMonth) nextMonth.addEventListener('click', () => {
        AppState.currentMonth++;
        if (AppState.currentMonth > 12) { AppState.currentMonth = 1; AppState.currentYear++; }
        refreshPage(AppState.currentPage);
    });
}

// ==================== FILTER SETUP ====================
function setupFilters() {
    // Resident floor filter
    document.querySelectorAll('#floorFilter .chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('#floorFilter .chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            AppState.currentFilter.floor = chip.dataset.floor;
            renderResidents();
        });
    });

    // Bill floor filter
    document.querySelectorAll('#billFloorFilter .chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('#billFloorFilter .chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            AppState.currentFilter.billFloor = chip.dataset.floor;
            renderBills();
        });
    });

    // Payment status filter
    document.querySelectorAll('#paymentFilter .chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('#paymentFilter .chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            AppState.currentFilter.payStatus = chip.dataset.status;
            renderPayments();
        });
    });

    // Report tabs
    document.querySelectorAll('.report-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.report-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            AppState.currentFilter.reportTab = btn.dataset.report;
            renderReports();
        });
    });

    // Search
    const searchInput = document.getElementById('residentSearch');
    if (searchInput) {
        searchInput.addEventListener('input', Utils.debounce((e) => {
            AppState.currentFilter.search = e.target.value;
            renderResidents();
        }, 200));
    }
}

// ==================== MODAL CLOSE SETUP ====================
function setupModals() {
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal-overlay').classList.add('hidden');
        });
    });

    // Click outside to close modals
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.add('hidden');
                // Resolve pending confirm if clicking outside confirm dialog
                if (overlay.id === 'confirmDialog' && _confirmResolve) {
                    _confirmResolve(false);
                    _confirmResolve = null;
                }
            }
        });
    });

    // Forms
    document.getElementById('residentForm')?.addEventListener('submit', saveResident);
    // Payment form no longer needed - quickPay handles everything

    // Buttons
    document.getElementById('addResidentBtn')?.addEventListener('click', openAddResidentModal);
    document.getElementById('recordPaymentBtn')?.addEventListener('click', () => {
        // Show all pending residents to pick from
        navigateTo('payments');
    });
    document.getElementById('batchWattsBtn')?.addEventListener('click', openBatchWattsModal);
    document.getElementById('saveAllWatts')?.addEventListener('click', saveAllWatts);

    // Batch nav
    document.getElementById('batchPrev')?.addEventListener('click', () => {
        if (AppState.batchIndex > 0) { AppState.batchIndex--; updateBatchDisplay(); }
    });
    document.getElementById('batchNext')?.addEventListener('click', async () => {
        const r = AppState.residents[AppState.batchIndex];
        if (!r) return;
        const month = parseInt(document.getElementById('batchMonth').value);
        const year = parseInt(document.getElementById('batchYear').value);
        const monthKey = Utils.getMonthKey(year, month);
        const rate = parseFloat(AppState.settings.etbPerWatt) || 6.4592;
        const watts = parseFloat(document.getElementById('batchWattsInput').value) || 0;

        if (watts > 0) {
            const existing = AppState.bills.find(b => b.residentId === r.id && b.monthKey === monthKey);
            await db.put('bills', {
                id: existing ? existing.id : Utils.generateId(),
                residentId: r.id, monthKey, wattsUsed: watts, etbAmount: calculateEEPBill(watts).totalAmount,
                month, year, createdAt: existing ? existing.createdAt : Date.now(), updatedAt: Date.now()
            });
        }

        if (AppState.batchIndex < AppState.residents.length - 1) {
            AppState.batchIndex++;
            updateBatchDisplay();
        } else {
            AppState.bills = await db.getAll('bills');
            document.getElementById('batchWattsModal').classList.add('hidden');
            showToast(t('batch_complete'), 'success');
            refreshPage(AppState.currentPage);
        }
    });
    document.getElementById('batchSkip')?.addEventListener('click', () => {
        if (AppState.batchIndex < AppState.residents.length - 1) {
            AppState.batchIndex++;
            updateBatchDisplay();
        } else {
            document.getElementById('batchWattsModal').classList.add('hidden');
            showToast(t('all_done'), 'success');
        }
    });

    // Batch ETB calculation
    document.getElementById('batchWattsInput')?.addEventListener('input', () => {
        const rate = parseFloat(AppState.settings.etbPerWatt) || 6.4592;
        const watts = parseFloat(document.getElementById('batchWattsInput').value) || 0;
        document.getElementById('batchEtbCalc').textContent = Utils.formatCurrency(calculateEEPBill(watts).totalAmount);
    });

    // Confirm dialog
    document.getElementById('confirmOk')?.addEventListener('click', () => { document.getElementById('confirmDialog').classList.add('hidden'); if (_confirmResolve) _confirmResolve(true); });
    document.getElementById('confirmCancel')?.addEventListener('click', () => { document.getElementById('confirmDialog').classList.add('hidden'); if (_confirmResolve) _confirmResolve(false); });
}

// ==================== RIGHT PANEL ====================
function setupRightPanel() {
    const rpSettingsBtn = document.getElementById('rpSettingsBtn');
    if (rpSettingsBtn) rpSettingsBtn.addEventListener('click', () => navigateTo('settings'));

    const statsCanvas = document.getElementById('statsChart');
    if (statsCanvas) {
        const ctx = statsCanvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 150);
        gradient.addColorStop(0, '#B5F654');
        gradient.addColorStop(1, '#2dd4bf');
        window._statsChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['', '', '', '', ''],
                datasets: [{
                    label: 'Stats', data: [0, 0, 0, 0, 0],
                    backgroundColor: gradient, borderRadius: 10, borderSkipped: false, barThickness: 14
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false }, tooltip: { enabled: false } },
                scales: {
                    x: { display: false, grid: { display: false } },
                    y: {
                        display: true, position: 'left', beginAtZero: true,
                        ticks: { stepSize: 20, color: '#6b7280', font: { size: 10, family: 'Inter' }, callback: v => v > 0 ? v : '' },
                        grid: { display: false }, border: { display: false }
                    }
                },
                animation: { duration: 1500, easing: 'easeOutQuart' }
            },
            plugins: [{
                id: 'topLabels',
                afterDatasetsDraw(chart) {
                    const { ctx } = chart;
                    chart.data.datasets.forEach((dataset, i) => {
                        chart.getDatasetMeta(i).data.forEach((bar, idx) => {
                            ctx.fillStyle = '#9ca3af';
                            ctx.font = "10px 'Inter'";
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'bottom';
                            ctx.fillText(dataset.data[idx] + '%', bar.x, bar.y - 5);
                        });
                    });
                }
            }]
        });
    }
}

function updateRightPanelStats() {
    const report = getReportData(AppState.currentMonth, AppState.currentYear);
    const el = (id) => document.getElementById(id);
    if (el('rpTotalHouses')) el('rpTotalHouses').textContent = report.totalHouses;
    if (el('rpPaid')) el('rpPaid').textContent = report.paid.length;
    if (el('rpPending')) el('rpPending').textContent = report.pending.length + report.overdue.length;
    if (el('rpRevenue')) el('rpRevenue').textContent = `${Utils.formatCurrency(report.totalExpected)} ETB`;

    if (window._statsChart) {
        const floorKeys = Object.keys(report.floorData).sort((a, b) => a - b).slice(0, 5);
        const paidData = floorKeys.map(k => {
            const fd = report.floorData[k];
            return fd.total > 0 ? Math.round((fd.paid / fd.total) * 100) : 0;
        });
        window._statsChart.data.datasets[0].data = paidData.length ? paidData : [0, 0, 0, 0, 0];
        window._statsChart.update('none');
    }
}

// ==================== THEME & LANGUAGE ====================
function setupThemeAndLang() {
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => setTheme(btn.getAttribute('data-theme-btn')));
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            setLanguage(btn.getAttribute('data-lang'));
        });
    });
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-theme-btn') === currentTheme);
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });
}

// ==================== DATE SELECTS SETUP ====================
function setupDateSelects() {
    const sets = [
        ['billMonth', 'billYear'],
        ['paymentMonth', 'paymentYear'],
        ['reportMonth', 'reportYear']
    ];
    sets.forEach(([mid, yid]) => {
        const ms = document.getElementById(mid);
        const ys = document.getElementById(yid);
        if (ms && ms.options.length <= 1) { Utils.populateMonthSelect(ms); Utils.populateYearSelect(ys); Utils.setCurrentMonthYear(ms, ys); }
    });
}


// ==================== RENDER PUNISHMENT / DISCONNECTION ====================
async function renderPunish() {
    AppState.residents = await db.getAll('residents');
    AppState.bills = await db.getAll('bills');
    AppState.payments = await db.getAll('payments');
    AppState.punishments = await db.getAll('punishments');

    const month = AppState.currentMonth;
    const year = AppState.currentYear;
    const monthKey = Utils.getMonthKey(year, month);
    const day = new Date().getDate();

    // Find unpaid residents (bills exist but no payment)
    const unpaid = AppState.residents.filter(r => {
        const bill = AppState.bills.find(b => b.residentId === r.id && b.monthKey === monthKey);
        if (!bill) return false;
        const payment = AppState.payments.find(p => p.billId === bill.id && p.monthKey === monthKey);
        return !payment;
    });

    // Determine urgency
    let urgency = 'normal'; // days 25-30: collection period
    let urgencyMsg = 'Payment collection period (25th-30th)';
    if (day >= 1 && day <= 3) {
        urgency = 'warning'; // grace period
        urgencyMsg = '⚠️ Grace period! Payment deadline passed. Electric can be cut after day 3.';
    } else if (day > 3) {
        urgency = 'danger'; // past deadline
        urgencyMsg = '🔴 DISCONNECTION REQUIRED! Grace period over.';
    }

    // Existing punishments for this month
    const monthPunishments = AppState.punishments.filter(p => p.monthKey === monthKey);

    const content = document.getElementById('punishContent');
    if (!content) return;

    let html = `
        <div class="glass-card mb-4" style="border-left: 4px solid ${urgency === 'danger' ? '#EF4444' : urgency === 'warning' ? '#F97316' : '#10B981'}">
            <div class="flex items-center gap-3">
                <div class="text-2xl">${urgency === 'danger' ? '🔴' : urgency === 'warning' ? '⚠️' : '🟢'}</div>
                <div>
                    <p class="text-sm font-bold text-app-textBase">${urgencyMsg}</p>
                    <p class="text-xs text-app-textMuted">Ethiopian Calendar: Collection 25-30, Grace until 3rd, Cut after 3rd</p>
                    <p class="text-xs text-app-textMuted">Current Day: ${day} | Month: ${Utils.getMonthName(month)} ${year}</p>
                </div>
            </div>
        </div>

        <div class="glass-card mb-4">
            <h3 class="text-sm font-bold text-app-textBase mb-3">⚡ Disconnection Controls</h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div class="p-3 rounded-xl text-center" style="background:var(--dark-700);">
                    <p class="text-2xl font-bold text-red-400">${unpaid.length}</p>
                    <p class="text-[10px] text-app-textMuted">Unpaid Houses</p>
                </div>
                <div class="p-3 rounded-xl text-center" style="background:var(--dark-700);">
                    <p class="text-2xl font-bold text-orange-400">${monthPunishments.length}</p>
                    <p class="text-[10px] text-app-textMuted">Disconnected</p>
                </div>
                <div class="p-3 rounded-xl text-center" style="background:var(--dark-700);">
                    <p class="text-2xl font-bold text-emerald-400">${AppState.residents.length - unpaid.length}</p>
                    <p class="text-[10px] text-app-textMuted">Active</p>
                </div>
            </div>
        </div>

        <div class="glass-card">
            <h3 class="text-sm font-bold text-app-textBase mb-3">Unpaid Residents</h3>`;

    if (unpaid.length === 0) {
        html += `<p class="text-xs text-app-textMuted text-center py-4">All houses paid! 🎉</p>`;
    } else {
        unpaid.forEach(r => {
            const bill = AppState.bills.find(b => b.residentId === r.id && b.monthKey === monthKey);
            const isDisconnected = monthPunishments.find(p => p.residentId === r.id);
            const reconnectionFee = isDisconnected ? (isDisconnected.reconnectionFee || 0) : 0;
            const avatar = r.photo
                ? `<img src="${r.photo}" class="w-10 h-10 rounded-xl object-cover" alt="">`
                : `<div class="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold" style="background:var(--dark-700);color:var(--app-brand);">${Utils.getInitials(r.firstName, r.lastName)}</div>`;

            // Calculate actual bill
            let billAmount = bill?.etbAmount || 0;
            if (bill && bill.wattsUsed > 0 && r.houseType !== 'reader') {
                billAmount = calculateEEPBill(bill.wattsUsed).totalAmount;
            }

            html += `<div class="flex items-center gap-3 p-3 rounded-xl mb-2" style="background:var(--dark-700); ${isDisconnected ? 'border:1px solid #EF4444;' : ''}">
                ${avatar}
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-semibold text-app-textBase">${r.firstName} ${r.lastName}</p>
                    <p class="text-[10px] text-app-textMuted">🏠 ${r.houseNumber} · ${Utils.formatCurrency(billAmount)} ETB</p>
                    ${isDisconnected ? `<p class="text-[10px] text-red-400">⚡ DISCONNECTED · Fine: ${Utils.formatCurrency(reconnectionFee)} ETB</p>` : ''}
                </div>
                <div class="flex gap-2">
                    ${!isDisconnected ? `<button onclick="punishResident('${r.id}', '${monthKey}', ${month}, ${year}, ${billAmount})" class="punish-btn disconnect">
                        <i class="ph ph-lightning-slash"></i> Cut
                    </button>` : `
                    <button onclick="removePunishment('${r.id}', '${monthKey}')" class="punish-btn reconnect">
                        <i class="ph ph-lightning"></i> Reconnect (${Utils.formatCurrency(reconnectionFee)} ETB)
                    </button>`}
                </div>
            </div>`;
        });
    }

    html += '</div>';
    content.innerHTML = html;
}

function punishResident(residentId, monthKey, month, year, billAmount) {
    const r = AppState.residents.find(r => r.id === residentId);
    const name = r ? `${r.firstName} ${r.lastName}` : 'Unknown';
    const suggestedFine = Math.round(billAmount * 0.5);

    document.getElementById('punishResidentId').value = residentId;
    document.getElementById('punishMonthKey').value = monthKey;
    document.getElementById('punishMonth').value = month;
    document.getElementById('punishYear').value = year;
    document.getElementById('punishName').textContent = name;
    document.getElementById('punishHouse').textContent = r ? `🏠 ${r.houseNumber} · 📍 Floor ${r.floor}` : '';
    document.getElementById('punishBillAmount').textContent = `${Utils.formatCurrency(billAmount)} ETB`;
    document.getElementById('punishFeeInput').value = suggestedFine;
    document.getElementById('punishModal').classList.remove('hidden');
}

async function confirmPunish() {
    const residentId = document.getElementById('punishResidentId').value;
    const monthKey = document.getElementById('punishMonthKey').value;
    const month = parseInt(document.getElementById('punishMonth').value);
    const year = parseInt(document.getElementById('punishYear').value);
    const fee = parseFloat(document.getElementById('punishFeeInput').value) || 0;
    const reason = document.getElementById('punishReasonInput').value.trim() || 'Unpaid bill - electricity disconnected';

    const punishment = {
        id: Utils.generateId(),
        residentId, monthKey, month, year,
        reconnectionFee: fee,
        disconnectedAt: Date.now(),
        reason,
        createdAt: Date.now()
    };

    await db.put('punishments', punishment);
    AppState.punishments = await db.getAll('punishments');
    showToast('Electricity disconnected ✓', 'warning');
    await logActivity('Disconnected', `${residentId} - Fine: ${Utils.formatCurrency(fee)} ETB`);
    document.getElementById('punishModal').classList.add('hidden');
    renderPunish();
}

async function removePunishment(residentId, monthKey) {
    const punishments = AppState.punishments.filter(p => p.residentId === residentId && p.monthKey === monthKey);
    for (const p of punishments) {
        await db.delete('punishments', p.id);
    }
    AppState.punishments = await db.getAll('punishments');
    showToast('Electricity reconnected!', 'success');
    await logActivity('Reconnected', `Resident ${residentId}`);
    renderPunish();
}

// ==================== INIT ====================
let _setupDone = false;
async function init() {
    try {
        await db.init();

        // Load settings
        const configEntry = await db.get('settings', 'config');
        if (configEntry?.value) Object.assign(AppState.settings, configEntry.value);

        // Load credentials
        const credEntry = await db.get('settings', 'credentials');
        if (credEntry?.value) AppState.credentials = credEntry.value;

        // Load lock timeout
        const lockEntry = await db.get('settings', 'lockTimeout');
        if (lockEntry?.value) AppState.lockTimeout = lockEntry.value;

        // Load data
        AppState.residents = await db.getAll('residents');
        AppState.bills = await db.getAll('bills');
        AppState.payments = await db.getAll('payments');
        AppState.syncLog = await db.getAll('syncLog');
        AppState.receipts = await db.getAll('receipts');
        AppState.punishments = await db.getAll('punishments');
        AppState.punishments = await db.getAll('punishments');

        // Setup (login/theme already done in DOMContentLoaded)
        // Only run event listener setup once to avoid duplicates
        if (!_setupDone) {
            setupNav();
            setupFilters();
            setupModals();
            setupRightPanel();
            setupCredentialsUI();
            setupSyncUI();
            setupCoverPayment();
            setupSettingsUI();
            setupPhotoUpload();
            setupRateModal();
            setupDateSelects();
        }
        applyTranslations();

        // Navigate to dashboard
        navigateTo('dashboard');
        resetLockTimer();
        _setupDone = true;
    } catch (err) {
        console.error('Init error:', err);
        showToast(t('toast_init_failed') + err.message, 'error');
    }
}

// Track user activity for auto-lock
document.addEventListener('click', resetLockTimer);
document.addEventListener('keydown', resetLockTimer);
document.addEventListener('touchstart', resetLockTimer);

document.addEventListener('DOMContentLoaded', function() {
    // Setup login UI and theme BEFORE login (init() runs after login)
    setupLoginUI();
    setupThemeAndLang();
    applyTranslations();
});
