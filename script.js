/*********************************
 * DATA
 *********************************/
const GRATITUDE_LIST = [
  "خدایا شکرت برای نفس کشیدن در این لحظه.",
  "خدایا شکرت برای سلامتی بدنم.",
  "خدایا شکرت برای ذهنی که می‌اندیشد.",
  "خدایا شکرت برای فرصت امروز.",
  "خدایا شکرت برای خانواده‌ام.",
  "خدایا شکرت برای دوستانم.",
  "خدایا شکرت برای درس‌های زندگی.",
  "خدایا شکرت برای توان تغییر.",
  "خدایا شکرت برای آرامش.",
  "خدایا شکرت برای همین لحظه."
];

/*********************************
 * STATE
 *********************************/
let gratitudeIndex = 0;

/*********************************
 * DOM
 *********************************/
const cardArea = document.getElementById("card-area");

/*********************************
 * PROGRAM MENU (✅ FULL – UNCHANGED)
 *********************************/
function startProgram() {
  cardArea.innerHTML = `
    <div class="question-card">
      ${programCard("🔥","عادت‌ساز","openHabits")}
      ${programCard("⚡","انگیزه","openMotivation")}
      ${programCard("🌿","آرامش","openCalm")}
      ${programCard("🎯","هدف","openGoal")}
      ${programCard("💪","اراده","openWill")}
      ${programCard("🙏","شکرگزاری","openGratitude")}
      ${programCard("🧠","باورها","openBeliefs")}
    </div>
  `;
}

function programCard(icon,title,fn) {
  return `
    <div onclick="${fn}()" style="
      margin-top:14px;
      padding:16px;
      border-radius:18px;
      cursor:pointer;
      color:white;
      font-weight:bold;
      background:linear-gradient(135deg,#ff8c1a,#ffb703);
      display:flex;
      gap:12px;
      align-items:center;
    ">
      <div style="font-size:26px">${icon}</div>
      <div>${title}</div>
    </div>
  `;
}

/*********************************
 * OTHER PROGRAM SECTIONS (STUBS)
 *********************************/
function openHabits(){ simpleCard("🔥 تمرین عادت‌ساز"); }
function openMotivation(){ simpleCard("⚡ تمرین انگیزه"); }
function openCalm(){ simpleCard("🌿 تمرین آرامش"); }
function openGoal(){ simpleCard("🎯 تمرین هدف"); }
function openWill(){ simpleCard("💪 تمرین اراده"); }
function openBeliefs(){ simpleCard("🧠 تمرین باورها"); }

function simpleCard(title){
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text">${title}</div>
      <button onclick="startProgram()" style="${backBtnStyle()}">
        🏠 منوی اصلی
      </button>
    </div>
  `;
}

/*********************************
 * ✅ GRATITUDE – CARD BASED
 *********************************/
function openGratitude() {
  gratitudeIndex = 0;
  renderGratitudeCard();
}

function renderGratitudeCard() {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text" style="line-height:2">
        ${GRATITUDE_LIST[gratitudeIndex]}
      </div>

      <button onclick="nextGratitude()" style="${mainBtnStyle()}">
        🤍 خدایا شکرت
      </button>

      <button onclick="prevGratitude()" style="${backBtnStyle()}">
        ⬅ قبلی
      </button>

      <button onclick="startProgram()" style="${backBtnStyle()}">
        🏠 منوی اصلی
      </button>
    </div>
  `;
}

function nextGratitude() {
  if (gratitudeIndex < GRATITUDE_LIST.length - 1) {
    gratitudeIndex++;
    renderGratitudeCard();
  }
}

function prevGratitude() {
  if (gratitudeIndex > 0) {
    gratitudeIndex--;
    renderGratitudeCard();
  }
}

/*********************************
 * STYLES (AS BEFORE)
 *********************************/
function mainBtnStyle() {
  return `
    margin-top:16px;
    width:100%;
    padding:14px;
    border:none;
    border-radius:16px;
    font-weight:bold;
    cursor:pointer;
    color:white;
    background:linear-gradient(135deg,#ff8c1a,#ffb703);
  `;
}

function backBtnStyle() {
  return `
    margin-top:10px;
    width:100%;
    padding:14px;
    border:none;
    border-radius:16px;
    font-weight:bold;
    cursor:pointer;
    background:#eee;
  `;
}
