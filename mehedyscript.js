(function () {
  "use strict";

 
 
 
 
  if (typeof window.MEHEDY_BOOKMARK_LOAD === "undefined") {
    console.log(
      "%cAccess Denied - Bookmark Required",
      "color:#ff0000;font-size:15px;font-weight:bold"
    );
    return;
  }
 
 
 
 
  const CONFIG = {
    k: "https://raw.githubusercontent.com/freefireob49v2/my-key-system/main/key.txt",
    r: "https://raw.githubusercontent.com/freefireob49v2/my-key-system/main/mehedy.txt",
    t: "https://raw.githubusercontent.com/freefireob49v2/my-key-system/main/button.txt",
    m: "https://raw.githubusercontent.com/freefireob49v2/my-key-system/main/music.mp3",
    l: "https://raw.githubusercontent.com/freefireob49v2/my-key-system/main/logo.png",
    s: `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:rgba(6,10,23,0.95);backdrop-filter:blur(12px);
        -webkit-backdrop-filter:blur(12px);color:#fff;padding:30px 25px;
        border-radius:16px;z-index:2147483647;
        font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
        text-align:center;box-shadow:0 20px 50px rgba(0,0,0,0.6);
        border:2px solid #00ffcc;width:300px;box-sizing:border-box;
        animation: mehedy-lightning-glow 3s linear infinite;`,
  };

  let audioPlayer = null;
 
 
 
 
  (async function () {
    const existingBox = document.getElementById("mehedy-auth-box");
    if (existingBox) existingBox.remove();
 
 
 
 
    const styleEl = document.createElement("style");
    styleEl.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
      @keyframes mehedy-lightning-glow {
        0%   { box-shadow: 0 0 5px #00ffcc, 0 0 10px #00ffcc, inset 0 0 5px rgba(0,255,204,0.2);  border-color: #00ffcc; }
        25%  { box-shadow: 0 0 15px #00e6b8, 0 0 25px #00ffcc, inset 0 0 10px rgba(0,255,204,0.4); border-color: #00e6b8; }
        30%  { box-shadow: 0 0 8px #00ffcc,  0 0 12px #00ffcc, inset 0 0 6px rgba(0,255,204,0.3);  border-color: #00ffcc; }
        35%  { box-shadow: 0 0 25px #00ffff, 0 0 40px #00ffcc, inset 0 0 15px rgba(0,255,204,0.5); border-color: #00ffff; }
        70%  { box-shadow: 0 0 15px #00e6b8, 0 0 25px #00ffcc, inset 0 0 10px rgba(0,255,204,0.4); border-color: #00e6b8; }
        73%  { box-shadow: 0 0 5px #00ffcc,  0 0 10px #00ffcc, inset 0 0 5px rgba(0,255,204,0.2);  border-color: #00ffcc; }
        100% { box-shadow: 0 0 5px #00ffcc,  0 0 10px #00ffcc, inset 0 0 5px rgba(0,255,204,0.2);  border-color: #00ffcc; }
      }
      @keyframes mehedy-spin {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes mehedy-fire-spin {
        0%   { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
      }
      
      #mehedy-logo-card{

width:120px;

height:120px;

margin:0 auto 18px;

border-radius:16px;

overflow:hidden;

border:2px solid #00ffcc;

animation:mehedy-lightning-glow 3s linear infinite;

box-sizing:border-box;

}

#mehedy-logo{

width:100%;

height:100%;

display:block;

object-fit:cover;

}
      
    `;
    document.head.appendChild(styleEl);
 
 
 
 
    const authBox = document.createElement("div");
    authBox.id = "mehedy-auth-box";
    authBox.style.cssText = CONFIG.s;
    authBox.innerHTML = `
      <button id="mehedy-music-btn" style="
        position:absolute;top:15px;right:15px;
        background:rgba(255,255,255,0.05);border:1px solid rgba(0,255,204,0.3);
        color:#ff4444;border-radius:50%;width:32px;height:32px;
        cursor:pointer;font-size:14px;display:flex;align-items:center;
        justify-content:center;box-shadow:0 0 8px rgba(0,0,0,0.3);
        transition:all 0.3s ease;z-index:10;">🔇</button>
        
        <div id="mehedy-logo-card">

<img src="${CONFIG.l}" id="mehedy-logo">

</div>

      <h3 style="margin:0 0 6px 0;color:#00ffcc;font-size:20px;letter-spacing:1.5px;
                 font-weight:800;text-shadow:0 0 12px rgba(0,255,204,0.5);">
        Ꮇᴇͥʜͣᴇͫᴅƴ
      </h3>
      <p style="margin:0 0 20px 0;color:#64748b;font-size:11px;letter-spacing:2px;font-weight:600;">
        AINCRAD BYPASS
      </p>

      <input type="text" id="mehedy-key-input" placeholder="ENTER KEY HERE" style="display:none;width:100%;padding:12px;margin-bottom:16px;
        border:1px solid rgba(0,255,204,0.4);border-radius:8px;
        background:rgba(7,11,25,0.6);color:#fff;text-align:center;
        box-sizing:border-box;font-size:13px;font-weight:600;
        letter-spacing:1px;outline:none;transition:all 0.3s ease;
        box-shadow:inset 0 2px 4px rgba(0,0,0,0.5);">

      <button id="mehedy-login-btn" style="
        width:100%;background:#00ffcc;color:#030712;border:none;
        padding:12px;border-radius:8px;font-weight:700;cursor:pointer;
        font-size:14px;letter-spacing:0.5px;margin-bottom:12px;
        box-shadow:0 4px 12px rgba(0,255,204,0.3);transition:all 0.2s ease;">GET KEY</button>

      <button id="mehedy-telegram-btn" style="
    display:none;
        width:100%;background:#229ED9;color:#fff;border:none;
        padding:12px;border-radius:8px;font-weight:700;cursor:pointer;
        font-size:14px;letter-spacing:0.5px;
        box-shadow:0 4px 12px rgba(34,158,217,0.25);">TELEGRAM</button>

      <div id="mehedy-status" style="margin-top:16px;font-size:11px;font-weight:700;
                                   color:#64748b;letter-spacing:1.5px;">telegram : @mehedy4644</div>
    `;
    document.body.appendChild(authBox);

 
 
 
 
    const musicBtn    = document.getElementById("mehedy-music-btn");
    musicBtn.style.display = "none";
    const keyInput    = document.getElementById("mehedy-key-input");
    const loginBtn    = document.getElementById("mehedy-login-btn");
    const telegramBtn = document.getElementById("mehedy-telegram-btn");
    const statusEl   = document.getElementById("mehedy-status");
 
 
    setTimeout(() => {
      authBox.style.zIndex = "2147483647";
      if (window.innerWidth < 600) {
        authBox.style.width    = "90%";
        authBox.style.maxWidth = "300px";
      }
    }, 10);

 
 
 
 
    const FALLBACK_MUSIC_URL = "https://raw.githubusercontent.com/freefireob49v2/my-key-system/main/music.mp3";
    let musicLoading = false;
    musicBtn.addEventListener("click", async () => {
      if (musicLoading) return;
      if (!audioPlayer) {
        musicLoading = true;
        musicBtn.textContent = "⏳";
        let resolvedUrl = FALLBACK_MUSIC_URL;
        try {
          const res      = await fetch(CONFIG.m + "&t=" + Date.now());
          const audioUrl = (await res.text()).trim();
          if (audioUrl && audioUrl.startsWith("http")) {
            resolvedUrl = audioUrl;
          } else {
            console.log("Invalid audio URL in music, using fallback.");
          }
        } catch (err) {
          console.log("Failed to fetch music URL, using fallback:", err);
        }
        audioPlayer      = new Audio(resolvedUrl);
        audioPlayer.loop = true;
        musicLoading = false;
      }

 
 
 
 
      if (audioPlayer.paused) {
        audioPlayer.play()
          .then(() => {
            musicBtn.textContent       = "🔊";
            musicBtn.style.color       = "#00ffcc";
            musicBtn.style.borderColor = "#00ffcc";
            musicBtn.style.boxShadow   = "0 0 10px rgba(0,255,204,0.4)";
          })
          .catch(err => {
            console.log("Playback failed:", err);
            musicBtn.textContent = "🔇";
          });
      } else {
        audioPlayer.pause();
        musicBtn.textContent       = "🔇";
        musicBtn.style.color       = "#ff4444";
        musicBtn.style.borderColor = "rgba(0,255,204,0.3)";
        musicBtn.style.boxShadow   = "0 0 8px rgba(0,0,0,0.3)";
      }
    });

 
 
 
 
    keyInput.addEventListener("focus", () => {
      keyInput.style.border    = "1px solid #00ffcc";
      keyInput.style.boxShadow = "0 0 10px rgba(0,255,204,0.25), inset 0 2px 4px rgba(0,0,0,0.5)";
    });
    keyInput.addEventListener("blur", () => {
      keyInput.style.border    = "1px solid rgba(0,255,204,0.4)";
      keyInput.style.boxShadow = "inset 0 2px 4px rgba(0,0,0,0.5)";
    });

 
 
 
 
    telegramBtn.addEventListener("click", async () => {
      try {
        const res = await fetch(CONFIG.t + "?t=" + Date.now());
        const url = (await res.text()).trim();
        if (url.startsWith("http")) window.open(url, "_blank");
      } catch { /* silent */ }
    });

 
 
 
 
    loginBtn.addEventListener("click", async () => {
      const inputKey = keyInput.value.trim();

      statusEl.innerHTML = "<span style='color:#00ffcc; text-shadow:0 0 8px rgba(0,255,204,0.3);'>CONNECTING SERVER...</span>";
      loginBtn.disabled = telegramBtn.disabled = true;
      try {
        const keyRes  = await fetch(CONFIG.k + "?t=" + Date.now());
        const keyText = await keyRes.text();
const validKeys = keyText
  .split("\n")
  .map(k => k.trim())
  .filter(k => true);

if (validKeys.includes(inputKey) ||
  (keyText.trim() === "" && inputKey === "")) {

 
 
 
          statusEl.innerHTML = "<span style='color:#00ffcc;'>SUCCESS! ✓</span>";

          setTimeout(async () => {
            authBox.remove();

            // Overlay: Checking Update
            const loadingOverlay = document.createElement("div");
            loadingOverlay.style.cssText = `
              position:fixed; top:0; left:0; width:100%; height:100%;
              background:rgba(3,7,18,0.85); backdrop-filter:blur(8px);
              -webkit-backdrop-filter:blur(8px); z-index:2147483647;
              display:flex; align-items:center; justify-content:center;
              font-family:system-ui,-apple-system,sans-serif;
            `;
            loadingOverlay.innerHTML = `
              <div style="text-align:center; background:rgba(6,10,23,0.95);
                          padding:35px 30px; border-radius:16px;
                          border:1px solid #00ffcc; width:290px;
                          animation: mehedy-lightning-glow 3s linear infinite;">
                <div style="width:45px; height:45px;
                            border:4px solid rgba(0,255,204,0.1);
                            border-top:4px solid #00ffcc; border-radius:50%;
                            margin:0 auto 20px auto;
                            animation:mehedy-spin 0.8s linear infinite;
                            box-shadow:0 0 15px rgba(0,255,204,0.2);"></div>
                <p id="mehedy-check-text" style="color:#00ffcc; font-size:15px;
                   font-weight:700; margin:0; letter-spacing:1.5px;
                   text-shadow:0 0 8px rgba(0,255,204,0.3);">CHECKING UPDATE...</p>
              </div>
            `;
            document.body.appendChild(loadingOverlay);
            let hasUpdate = false;
            try {
              const updateRes  = await fetch("https://raw.githubusercontent.com/freefireob49v2/my-key-system/main/key.txt");
              const updateText = await updateRes.text();
              if (updateText.includes("GitHub Updated")) hasUpdate = true;
            } catch { }

            await new Promise(res => setTimeout(res, 0));

            const checkText = document.getElementById("mehedy-check-text");
            checkText.innerHTML = hasUpdate
              ? "<span style='color:#00ffcc;'>Link Updated Successfully! ✓</span>"
              : "<span style='color:#ff4444; text-shadow:0 0 8px rgba(255,68,68,0.3);'>No Update Available!</span>";

            await new Promise(res => setTimeout(res, 0));
            loadingOverlay.remove();

            // Ambil URL redirect
            const redirectRes = await fetch(CONFIG.r + "?t=" + Date.now());
            const redirectUrl = (await redirectRes.text()).trim();

            if (redirectUrl.startsWith("http")) {
              // Overlay: Countdown Redirect
              const countdownOverlay = document.createElement("div");
              countdownOverlay.style.cssText = `
                position:fixed; top:0; left:0; width:100%; height:100%;
                background:rgba(3,7,18,0.05); backdrop-filter:blur(1px);
                -webkit-backdrop-filter:blur(1px); z-index:2147483647;
                display:flex; align-items:center; justify-content:center;
                font-family:system-ui,-apple-system,sans-serif;
              `;

              const totalSeconds  = Math.floor(Math.random() * 0) + 30;
              const DASH_TOTAL    = 597;

              countdownOverlay.innerHTML = `
                <div style="text-align:center;">
 <div style="
position:relative;
width:260px;
height:260px;
margin:0 auto;
display:flex;
align-items:center;
justify-content:center;
border:2px solid #00ffcc;
border-radius:16px;
box-sizing:border-box;
animation:mehedy-lightning-glow 3s linear infinite;
overflow:hidden;
">

<svg width="240" height="240"
     style="position:relative; z-index:3;">

  <!-- Background Border -->
  <rect
      x="20"
      y="20"
      width="200"
      height="200"
      rx="16"
      ry="16"
      fill="none"
      stroke="rgba(0,255,204,0.1)"
      stroke-width="14">
  </rect>

  <!-- Progress Border -->
  <rect
      id="progress"
      x="20"
      y="20"
      width="200"
      height="200"
      rx="16"
      ry="16"
      fill="none"
      stroke="#00ffcc"
      stroke-width="14"
      stroke-linecap="round">
  </rect>

</svg>

<div id="countdown-text" style="
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
font-family:'Share Tech Mono', monospace;
font-size:70px;
font-weight:400;
letter-spacing:3px;
color:#00ffcc;
text-shadow:0 0 8px #00ffcc,0 0 18px #00ffcc;
z-index:4;">${totalSeconds}</div>
                  </div>

                  <p style="margin-top:30px; color:#00ffcc; font-size:16px;
                             font-weight:700; letter-spacing:3px;
                             text-shadow:0 0 12px rgba(0,255,204,0.4);
                             position:relative; z-index:4;">REDIRECTING...</p>
                </div>
              `;
              document.body.appendChild(countdownOverlay);

              let remaining       = totalSeconds;
              
              const countdownText  = countdownOverlay.querySelector("#countdown-text");

              const timer = setInterval(() => {
                remaining--;
                countdownText.textContent              = remaining;
                if (remaining <= 0) {
                  clearInterval(timer);
                  if (audioPlayer) {
                    audioPlayer.pause();
                    audioPlayer = null;
                  }
                  countdownOverlay.remove();
                  window.location.replace(redirectUrl);
                }
              }, 1000);
            }

          }, 800);

        } else {
 
 
 
 
          statusEl.innerHTML = "<span style='color:#ff4444;'>INVALID LICENSE KEY!</span>";
          loginBtn.disabled = telegramBtn.disabled = false;
        }

      } catch {
        statusEl.innerHTML = "<span style='color:#ff4444;'>SERVER ERROR!</span>";
        loginBtn.disabled = telegramBtn.disabled = false;
      }
    });

  })();
})();
