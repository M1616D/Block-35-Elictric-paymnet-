#!/usr/bin/env python3
"""Update index.html with all the requested features."""
import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# ===== 1. FIX SPLASH SCREEN =====
old_splash = r'''    <!-- ==================== SPLASH SCREEN ==================== -->
    <div id="splash" class="splash-screen">
        <div class="text-center">
            <div class="text-6xl mb-4">&#9889;</div>
            <h1 class="text-2xl font-bold text-app-textBase tracking-tight mb-1">CondoBill</h1>
            <p class="text-xs text-app-textMuted" data-i18n="splash_subtitle">Electrical Bill Collection System</p>
            <div class="w-8 h-8 border-2 border-app-textDarker border-t-app-brand rounded-full animate-spin mx-auto mt-6"></div>
        </div>
    </div>'''

if old_splash in html:
    new_splash = r'''    <!-- ==================== SPLASH SCREEN ==================== -->
    <div id="splash" class="splash-screen" style="background:linear-gradient(135deg,#1c1f26 0%,#252934 50%,#171a21 100%);">
        <div class="text-center">
            <div style="width:80px;height:80px;margin:0 auto 20px;border-radius:24px;display:flex;align-items:center;justify-content:center;font-size:36px;background:linear-gradient(135deg,#00e5ff,#0070f3);box-shadow:0 0 40px rgba(0,229,255,0.3);animation:pulseGlow 2s ease-in-out infinite;">
                &#9889;
            </div>
            <h1 style="font-size:28px;font-weight:800;letter-spacing:-0.5px;margin-bottom:4px;background:linear-gradient(135deg,#fff,#00e5ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">CondoBill</h1>
            <p style="font-size:11px;color:#6b7280;letter-spacing:2px;text-transform:uppercase;">Electrical Bill Collection</p>
            <div style="width:200px;height:3px;background:#2a2e39;border-radius:10px;margin:30px auto 0;overflow:hidden;">
                <div style="width:40%;height:100%;background:linear-gradient(90deg,#00e5ff,#0070f3);border-radius:10px;animation:loadBar 1.2s ease-in-out infinite;"></div>
            </div>
        </div>
        <style>
            @keyframes pulseGlow { 0%,100%{box-shadow:0 0 40px rgba(0,229,255,0.3)} 50%{box-shadow:0 0 60px rgba(0,229,255,0.5)} }
            @keyframes loadBar { 0%{transform:translateX(-100%)} 100%{transform:translateX(350%)} }
        </style>
    </div>'''
    html = html.replace(old_splash, new_splash)
    print("1. Splash screen updated")
else:
    print("1. Splash screen not found (may already be updated)")

# ===== 2. ADD LOGIN SCREEN =====
if 'loginScreen' not in html:
    login_screen = r'''    <!-- ==================== LOGIN SCREEN ==================== -->
    <div id="loginScreen" style="position:fixed;inset:0;z-index:10000;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#1c1f26;overflow:hidden;">
        <div style="position:absolute;inset:0;background-image:radial-gradient(#2a2e39 1px,transparent 1px);background-size:30px 30px;opacity:0.2;"></div>
        <svg style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 150 L 200 150 L 250 200 L 350 200" fill="none" stroke="#2a2e39" stroke-width="2"/>
            <path d="M 50 300 L 150 300 L 150 250 L 300 250" fill="none" stroke="#00e5ff" stroke-width="2" opacity="0.6"/>
            <path d="M 0 700 L 100 700 L 150 650 L 350 650" fill="none" stroke="#2a2e39" stroke-width="2"/>
            <circle cx="200" cy="150" r="4" fill="#1c1f26" stroke="#2a2e39" stroke-width="2"/>
            <circle cx="150" cy="250" r="3" fill="#00e5ff" stroke="#00e5ff" stroke-width="2"/>
        </svg>
        <div class="hidden md:flex" style="position:absolute;top:25%;left:20%;width:56px;height:56px;border-radius:50%;background:#21252f;box-shadow:inset 4px 4px 10px rgba(0,0,0,0.4),inset -4px -4px 10px rgba(255,255,255,0.03);align-items:center;justify-content:center;z-index:10;">
            <i class="ph-fill ph-video-camera text-xl" style="color:#0070f3;filter:drop-shadow(0 0 5px rgba(0,112,243,0.5));"></i>
        </div>
        <div class="hidden md:flex" style="position:absolute;top:30%;right:20%;width:56px;height:56px;border-radius:50%;background:#21252f;box-shadow:inset 4px 4px 10px rgba(0,0,0,0.4),inset -4px -4px 10px rgba(255,255,255,0.03);align-items:center;justify-content:center;z-index:10;">
            <i class="ph-fill ph-share-network text-xl" style="color:#00e5ff;filter:drop-shadow(0 0 5px rgba(0,229,255,0.5));"></i>
        </div>
        <div style="position:relative;z-index:20;width:100%;max-width:420px;margin:0 16px;background:linear-gradient(145deg,#282c38,#21252f);box-shadow:0 25px 50px -12px rgba(0,0,0,0.7),0 0 40px rgba(0,229,255,0.08);border:1px solid rgba(255,255,255,0.02);border-radius:16px;padding:40px;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:32px;">
                <div style="position:relative;width:32px;height:32px;display:flex;align-items:center;justify-content:center;">
                    <i class="ph-fill ph-hexagon text-3xl" style="position:absolute;color:#00e5ff;"></i>
                    <i class="ph-fill ph-lightning text-sm" style="position:relative;color:white;z-index:10;left:2px;"></i>
                </div>
                <div style="display:flex;flex-direction:column;">
                    <span style="color:white;font-weight:700;font-size:18px;line-height:1.2;letter-spacing:0.5px;">ELECTRA</span>
                    <span style="font-size:8px;color:#6b7280;text-transform:uppercase;letter-spacing:2px;">Payment Systems</span>
                </div>
            </div>
            <h1 style="font-size:20px;font-weight:500;color:white;margin-bottom:32px;">Collector System Login</h1>
            <div style="margin-bottom:20px;">
                <label style="font-size:12px;color:#6b7280;margin-bottom:4px;display:block;padding-left:4px;">Login / Agent ID</label>
                <input type="text" id="loginUsername" placeholder="admin" style="width:100%;background:#171a21;border:none;border-bottom:2px solid #2e3440;border-radius:8px;padding:12px 16px;color:white;font-size:14px;outline:none;box-shadow:inset 0 2px 4px rgba(0,0,0,0.3);transition:border-color 0.3s,box-shadow 0.3s;" onfocus="this.style.borderBottomColor='#0070f3'" onblur="this.style.borderBottomColor='#2e3440'">
            </div>
            <div style="margin-bottom:28px;">
                <label style="font-size:12px;color:#6b7280;margin-bottom:4px;display:block;padding-left:4px;">Password</label>
                <input type="password" id="loginPassword" placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;" style="width:100%;background:#171a21;border:none;border-bottom:2px solid #2e3440;border-radius:8px;padding:12px 16px;color:white;font-size:14px;outline:none;box-shadow:inset 0 2px 4px rgba(0,0,0,0.3);transition:border-color 0.3s,box-shadow 0.3s;" onfocus="this.style.borderBottomColor='#0070f3'" onblur="this.style.borderBottomColor='#2e3440'">
            </div>
            <div id="loginError" style="color:#ef4444;font-size:12px;margin-bottom:12px;display:none;text-align:center;"></div>
            <button id="loginBtn" style="width:100%;background:linear-gradient(90deg,#00e5ff,#0070f3);color:white;font-weight:600;padding:14px;border-radius:8px;border:none;cursor:pointer;font-size:14px;box-shadow:0 0 15px rgba(0,229,255,0.4);transition:box-shadow 0.3s,transform 0.2s;">
                Login to System
            </button>
        </div>
        <a href="https://better-homeowners-128161-7d892baba.framer.app/" target="_blank" rel="noopener noreferrer" style="position:absolute;bottom:24px;z-index:30;color:#6b7280;font-size:13px;text-decoration:none;display:flex;align-items:center;gap:6px;transition:color 0.3s;" onmouseover="this.style.color='#00e5ff'" onmouseout="this.style.color='#6b7280'">
            Developed by Trivers Studio <i class="ph ph-arrow-up-right" style="font-size:11px;"></i>
        </a>
    </div>'''
    html = html.replace('<!-- ==================== SPLASH SCREEN ==================== -->', login_screen + '\n\n    <!-- ==================== SPLASH SCREEN ==================== -->')
    print("2. Login screen added")
else:
    print("2. Login screen already exists")

# ===== 3. FIX LOGO =====
if 'w-12 h-12 rounded-2xl' in html:
    html = re.sub(
        r'<div class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto"[^>]*>\s*&#9889;\s*</div>',
        '''<div class="flex items-center gap-3 px-4 mb-6" style="padding-top:4px;">
                        <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0" style="background:linear-gradient(135deg,#00e5ff,#0070f3);color:white;box-shadow:0 0 20px rgba(0,229,255,0.3);">
                            &#9889;
                        </div>
                        <div class="flex flex-col">
                            <span style="color:white;font-weight:700;font-size:15px;letter-spacing:0.3px;">CondoBill</span>
                            <span style="font-size:9px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;">Bill Collector</span>
                        </div>
                    </div>''',
        html
    )
    print("3. Logo fixed")
else:
    print("3. Logo already fixed")

# ===== 4. ADD SETTINGS to mobile bottom nav =====
if 'mobile-nav-item' in html and 'data-page="settings"' not in html.split('mobile-bottom-nav')[1] if 'mobile-bottom-nav' in html else True:
    html = re.sub(
        r'(data-page="reports".*?</a>)\s*(</nav>\s*</div>\s*</div>\s*</div>\s*<!-- ===== MAIN CONTENT ===== -->)',
        r'\1\n            <a class="mobile-nav-item" data-page="settings">\n                <i class="ph-fill ph-gear-six text-xl"></i>\n                <span data-i18n="nav_settings_short">Settings</span>\n            </a>\n        </nav>',
        html, count=1, flags=re.DOTALL
    )
    print("4. Settings added to mobile nav")
else:
    print("4. Settings already in mobile nav (or nav not found)")

# ===== 5. ADD "Developed by Trivers Studio" to right panel =====
if 'rightPanel' in html and 'Trivers Studio' not in html.split('rightPanel')[1].split('</aside>')[0]:
    # Find the right panel's mt-auto section and add the link before Statistics
    html = re.sub(
        r'(<aside class="right-panel" id="rightPanel">.*?<div class="mt-auto">)\s*(<h2 class="text-base font-semibold text-app-textBase mb-4">Statistics</h2>)',
        r'\1\n                    <a href="https://better-homeowners-128161-7d892baba.framer.app/" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;justify-content:center;gap:6px;padding:10px;border-radius:12px;background:var(--dark-900);color:var(--app-text-dim);font-size:11px;text-decoration:none;margin-bottom:12px;transition:all 0.2s;">\n                        Developed by Trivers Studio <i class="ph ph-arrow-up-right" style="font-size:10px;"></i>\n                    </a>\n                    \2',
        html, count=1, flags=re.DOTALL
    )
    print("5. Trivers Studio link added to right panel")
else:
    print("5. Trivers Studio link already in right panel (or panel not found)")

# ===== 6. ADD ACCOUNT SECURITY to Settings =====
if 'settingCurrentUsername' not in html:
    html = re.sub(
        r'(<div class="glass-card danger-zone mb-4">\s*<h3 class="text-sm font-bold text-red-400 mb-3"[^>]*>.*?</h3>\s*<button id="clearAllDataBtn"[^>]*>.*?</button>\s*</div>\s*</section>)',
        r'''                        <!-- Account Security -->
                        <div class="glass-card mb-4">
                            <h3 class="text-sm font-bold text-app-textBase mb-3">&#128274; Account Security</h3>
                            <div class="space-y-3">
                                <div><label class="block text-[11px] text-app-textMuted mb-1.5 font-medium">Current Username</label><input type="text" id="settingCurrentUsername" class="dark-input text-xs" readonly style="opacity:0.6"></div>
                                <div><label class="block text-[11px] text-app-textMuted mb-1.5 font-medium">New Username</label><input type="text" id="settingNewUsername" class="dark-input text-xs" placeholder="Leave empty to keep current"></div>
                                <div><label class="block text-[11px] text-app-textMuted mb-1.5 font-medium">Current Password</label><input type="password" id="settingCurrentPassword" class="dark-input text-xs" placeholder="Required to change credentials"></div>
                                <div><label class="block text-[11px] text-app-textMuted mb-1.5 font-medium">New Password</label><input type="password" id="settingNewPassword" class="dark-input text-xs" placeholder="Leave empty to keep current"></div>
                                <div><label class="block text-[11px] text-app-textMuted mb-1.5 font-medium">Confirm New Password</label><input type="password" id="settingConfirmPassword" class="dark-input text-xs" placeholder="Confirm new password"></div>
                                <div id="settingsSecurityError" style="color:#ef4444;font-size:11px;display:none;"></div>
                                <button id="changeCredentialsBtn" class="btn-brand w-full text-xs">Update Credentials</button>
                            </div>
                        </div>
                        <div class="glass-card mb-4">
                            <h3 class="text-sm font-bold text-app-textBase mb-3">&#9201; Auto-Lock</h3>
                            <div class="space-y-3">
                                <div>
                                    <label class="block text-[11px] text-app-textMuted mb-1.5 font-medium">Lock after inactivity</label>
                                    <select id="settingLockTimeout" class="dark-select text-xs">
                                        <option value="0">Never</option>
                                        <option value="1">1 minute</option>
                                        <option value="5" selected>5 minutes</option>
                                        <option value="15">15 minutes</option>
                                        <option value="30">30 minutes</option>
                                    </select>
                                </div>
                                <button id="lockNowBtn" class="btn-ghost w-full text-xs">&#128274; Lock Now</button>
                            </div>
                        </div>
                        \1''',
        html, count=1, flags=re.DOTALL
    )
    print("6. Account Security settings added")
else:
    print("6. Account Security already in settings")

# ===== 7. ADD LOCK SCREEN =====
if 'lockScreen' not in html:
    lock_screen = r'''    <!-- ==================== LOCK SCREEN ==================== -->
    <div id="lockScreen" style="position:fixed;inset:0;z-index:10001;display:none;align-items:center;justify-content:center;background:linear-gradient(135deg,#1c1f26 0%,#252934 50%,#171a21 100%);flex-direction:column;">
        <div style="position:absolute;inset:0;background-image:radial-gradient(#2a2e39 1px,transparent 1px);background-size:30px 30px;opacity:0.15;"></div>
        <div style="position:relative;z-index:20;text-align:center;width:100%;max-width:360px;padding:0 20px;">
            <div style="width:70px;height:70px;margin:0 auto 24px;border-radius:20px;display:flex;align-items:center;justify-content:center;font-size:30px;background:linear-gradient(135deg,#00e5ff,#0070f3);box-shadow:0 0 30px rgba(0,229,255,0.3);">
                &#128274;
            </div>
            <h1 style="color:white;font-size:22px;font-weight:700;margin-bottom:6px;">System Locked</h1>
            <p style="color:#6b7280;font-size:12px;margin-bottom:30px;">Enter your password to unlock</p>
            <div style="margin-bottom:20px;">
                <input type="password" id="lockPassword" placeholder="Enter password" style="width:100%;background:#171a21;border:none;border-bottom:2px solid #2e3440;border-radius:8px;padding:14px 16px;color:white;font-size:15px;text-align:center;letter-spacing:4px;outline:none;box-shadow:inset 0 2px 4px rgba(0,0,0,0.3);" onfocus="this.style.borderBottomColor='#0070f3'" onblur="this.style.borderBottomColor='#2e3440'">
            </div>
            <div id="lockError" style="color:#ef4444;font-size:12px;margin-bottom:12px;display:none;"></div>
            <button id="unlockBtn" style="width:100%;background:linear-gradient(90deg,#00e5ff,#0070f3);color:white;font-weight:600;padding:14px;border-radius:8px;border:none;cursor:pointer;font-size:14px;box-shadow:0 0 15px rgba(0,229,255,0.4);transition:all 0.3s;">
                Unlock
            </button>
        </div>
    </div>'''
    html = html.replace('<!-- ==================== MAIN APP ==================== -->', lock_screen + '\n\n    <!-- ==================== MAIN APP ==================== -->')
    print("7. Lock screen added")
else:
    print("7. Lock screen already exists")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print(f"\nDone! File size: {len(html)} chars")
