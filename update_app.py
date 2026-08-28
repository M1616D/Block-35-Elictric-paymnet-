#!/usr/bin/env python3
"""Update app.js with login, lock screen, and credential management."""
import re

with open('app.js', 'r', encoding='utf-8') as f:
    js = f.read()

# ===== 1. ADD TRANSLATION for nav_settings_short =====
if 'nav_settings_short' not in js:
    js = js.replace(
        "nav_dashboard_short: 'Home',",
        "nav_dashboard_short: 'Home', nav_settings_short: 'Settings',",
        1
    )
    js = js.replace(
        "nav_dashboard_short: 'መነሻ',",
        "nav_dashboard_short: 'መነሻ', nav_settings_short: 'ማስተካከያ',",
        1
    )
    print("1. Settings short translation added")
else:
    print("1. Settings short translation already exists")

# ===== 2. ADD CREDENTIALS SYSTEM =====
if 'AUTH_KEY' not in js:
    auth_code = """
// ==================== AUTHENTICATION (Credentials) ====================
const AUTH_KEY = 'condobill-auth';
const DEFAULT_CREDENTIALS = { username: 'admin', password: 'admin123' };

function getCredentials() {
    const stored = localStorage.getItem(AUTH_KEY);
    if (stored) { try { return JSON.parse(stored); } catch(e) { /* ignore */ } }
    localStorage.setItem(AUTH_KEY, JSON.stringify(DEFAULT_CREDENTIALS));
    return { ...DEFAULT_CREDENTIALS };
}

function saveCredentials(creds) { localStorage.setItem(AUTH_KEY, JSON.stringify(creds)); }

function verifyCredentials(username, password) {
    const creds = getCredentials();
    return creds.username === username && creds.password === password;
}

function updateCredentials(currentPassword, newUsername, newPassword) {
    const creds = getCredentials();
    if (creds.password !== currentPassword) return false;
    saveCredentials({ username: newUsername || creds.username, password: newPassword || creds.password });
    return true;
}

// ==================== LOCK SCREEN ====================
let lockTimer = null;
let lockTimeoutMin = parseInt(localStorage.getItem('condobill-lock-timeout') || '5');

function showLogin() {
    const ls = document.getElementById('loginScreen');
    if (ls) ls.style.display = 'flex';
}
function hideLogin() {
    const ls = document.getElementById('loginScreen');
    if (ls) ls.style.display = 'none';
}
function showLock() {
    const ls = document.getElementById('lockScreen');
    if (ls) { ls.style.display = 'flex'; ls.style.zIndex = '10001'; }
    const lp = document.getElementById('lockPassword');
    if (lp) { lp.value = ''; setTimeout(() => lp.focus(), 100); }
    const le = document.getElementById('lockError');
    if (le) le.style.display = 'none';
}
function hideLock() {
    const ls = document.getElementById('lockScreen');
    if (ls) ls.style.display = 'none';
    resetLockTimer();
}
function resetLockTimer() {
    if (lockTimer) clearTimeout(lockTimer);
    if (lockTimeoutMin > 0) lockTimer = setTimeout(showLock, lockTimeoutMin * 60 * 1000);
}

function setupLoginUI() {
    const loginBtn = document.getElementById('loginBtn');
    const loginError = document.getElementById('loginError');
    const loginPassword = document.getElementById('loginPassword');
    const loginUsername = document.getElementById('loginUsername');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            var username = loginUsername ? loginUsername.value.trim() : '';
            var password = loginPassword ? loginPassword.value : '';
            if (!username || !password) {
                if (loginError) { loginError.textContent = 'Please enter username and password'; loginError.style.display = 'block'; }
                return;
            }
            if (verifyCredentials(username, password)) {
                if (loginError) loginError.style.display = 'none';
                hideLogin();
                setTimeout(function() {
                    var splash = document.getElementById('splash');
                    var app = document.getElementById('appContainer');
                    app.style.display = '';
                    splash.classList.add('fade-out');
                    setTimeout(function() { splash.style.display = 'none'; }, 500);
                    navigateTo('dashboard');
                }, 800);
            } else {
                if (loginError) { loginError.textContent = 'Invalid username or password'; loginError.style.display = 'block'; }
                loginPassword.value = '';
                loginPassword.focus();
            }
        });
        if (loginPassword) loginPassword.addEventListener('keydown', function(e) { if (e.key === 'Enter') { e.preventDefault(); loginBtn.click(); } });
        if (loginUsername) loginUsername.addEventListener('keydown', function(e) { if (e.key === 'Enter') { e.preventDefault(); loginPassword.focus(); } });
    }
    
    var unlockBtn = document.getElementById('unlockBtn');
    if (unlockBtn) {
        unlockBtn.addEventListener('click', function() {
            var password = document.getElementById('lockPassword').value;
            var lockError = document.getElementById('lockError');
            if (!password) { if (lockError) { lockError.textContent = 'Enter your password'; lockError.style.display = 'block'; } return; }
            var creds = getCredentials();
            if (password === creds.password) { hideLock(); }
            else { if (lockError) { lockError.textContent = 'Wrong password'; lockError.style.display = 'block'; } document.getElementById('lockPassword').value = ''; }
        });
        document.getElementById('lockPassword').addEventListener('keydown', function(e) { if (e.key === 'Enter') { e.preventDefault(); unlockBtn.click(); } });
    }
}
"""
    js = js.replace('\n// ==================== INIT ====================', auth_code + '\n// ==================== INIT ====================')
    print("2. Auth + Lock screen system added")
else:
    print("2. Auth system already exists")

# ===== 3. UPDATE INIT to use login flow =====
# Find the init function's setTimeout and replace it
idx = js.find('setTimeout(() => {')
if idx > 0 and 'showLogin()' not in js:
    # Find the closing of this setTimeout
    close = js.find('}, 1200);', idx)
    if close > 0:
        js = js[:idx] + 'showLogin();\n        resetLockTimer();' + js[close + len('}, 1200);'):]
        print("3. Init updated to use login flow")
    else:
        print("3. Could not find setTimeout closing")
else:
    print("3. Already updated")

# ===== 4. ADD setupLoginUI to init =====
if 'setupLoginUI()' not in js:
    js = js.replace(
        'setupNav(); setupDashboardNav()',
        'setupLoginUI(); setupNav(); setupDashboardNav()'
    )
    print("4. setupLoginUI added to init")
else:
    print("4. setupLoginUI already in init")

# ===== 5. ADD CREDENTIAL CHANGE HANDLER in setupSettingsUI =====
if 'changeCredentialsBtn' not in js:
    security_code = """
    // Account Security
    var settingCurrentUsername = document.getElementById('settingCurrentUsername');
    if (settingCurrentUsername) settingCurrentUsername.value = getCredentials().username;
    
    var changeCredentialsBtn = document.getElementById('changeCredentialsBtn');
    if (changeCredentialsBtn) {
        changeCredentialsBtn.addEventListener('click', function() {
            var currentPwd = document.getElementById('settingCurrentPassword').value;
            var newUsername = document.getElementById('settingNewUsername').value.trim();
            var newPwd = document.getElementById('settingNewPassword').value;
            var confirmPwd = document.getElementById('settingConfirmPassword').value;
            var errEl = document.getElementById('settingsSecurityError');
            
            if (!currentPwd) { errEl.textContent = 'Enter current password'; errEl.style.display = 'block'; return; }
            if (newPwd && newPwd !== confirmPwd) { errEl.textContent = 'Passwords do not match'; errEl.style.display = 'block'; return; }
            if (newPwd && newPwd.length < 4) { errEl.textContent = 'Password must be at least 4 characters'; errEl.style.display = 'block'; return; }
            
            if (updateCredentials(currentPwd, newUsername, newPwd)) {
                errEl.style.display = 'none';
                showToast('Credentials updated!', 'success');
                document.getElementById('settingCurrentPassword').value = '';
                document.getElementById('settingNewPassword').value = '';
                document.getElementById('settingConfirmPassword').value = '';
                document.getElementById('settingNewUsername').value = '';
                settingCurrentUsername.value = getCredentials().username;
            } else {
                errEl.textContent = 'Current password is incorrect';
                errEl.style.display = 'block';
            }
        });
    }
    
    var lockNowBtn = document.getElementById('lockNowBtn');
    if (lockNowBtn) lockNowBtn.addEventListener('click', showLock);
    
    var lockTimeout = document.getElementById('settingLockTimeout');
    if (lockTimeout) {
        lockTimeout.value = lockTimeoutMin;
        lockTimeout.addEventListener('change', function() {
            lockTimeoutMin = parseInt(this.value);
            localStorage.setItem('condobill-lock-timeout', lockTimeoutMin);
            resetLockTimer();
        });
    }
    """
    # Insert before the clearAllDataBtn handler
    js = js.replace(
        "document.getElementById('clearAllDataBtn').addEventListener('click'",
        security_code + "\n    document.getElementById('clearAllDataBtn').addEventListener('click'"
    )
    print("5. Credential change handler added")
else:
    print("5. Credential change handler already exists")

# ===== 6. Add activity tracking for auto-lock =====
if "document.addEventListener('click', resetLockTimer)" not in js:
    tracking = """
// Track user activity for auto-lock
document.addEventListener('click', resetLockTimer);
document.addEventListener('keydown', resetLockTimer);
document.addEventListener('touchstart', resetLockTimer);
"""
    js = js.replace("document.addEventListener('DOMContentLoaded', init);", tracking + "\ndocument.addEventListener('DOMContentLoaded', init);")
    print("6. Activity tracking for auto-lock added")
else:
    print("6. Activity tracking already exists")

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(js)

print(f"\nDone! File size: {len(js)} chars")
