/*************************
 * GRATITUDE DATA
 *************************/
const GRATITUDE_LIST = [
  "خدایا شکرت برای نفس کشیدن در این لحظه.",
  "خدایا شکرت برای سلامتی بدنم.",
  "خدایا شکرت برای قلبی که بی‌وقفه برایم می‌تپد.",
  "خدایا شکرت برای ذهنی که می‌تواند فکر کند و یاد بگیرد.",
  "خدایا شکرت برای فرصت یک روز تازه.",
  "خدایا شکرت برای خانواده‌ام.",
  "خدایا شکرت برای دوستان واقعی زندگی‌ام.",
  "خدایا شکرت برای تجربه‌هایی که مرا قوی‌تر کردند.",
  "خدایا شکرت برای اشتباهاتی که به من درس دادند.",
  "خدایا شکرت برای توانایی تغییر در خودم.",
  "خدایا شکرت برای سقفی که بالای سرم دارم.",
  "خدایا شکرت برای غذایی که روی سفره‌ام قرار می‌گیرد.",
  "خدایا شکرت برای آبی که می‌نوشم.",
  "خدایا شکرت برای خوابی که شب‌ها تجربه می‌کنم.",
  "خدایا شکرت برای آرامشی که در درونم شکل می‌گیرد.",
  "خدایا شکرت برای طبیعت زیبا.",
  "خدایا شکرت برای نور خورشید.",
  "خدایا شکرت برای باران آرام‌بخش.",
  "خدایا شکرت برای هوای تازه.",
  "خدایا شکرت برای توانایی حرکت کردن.",
  "خدایا شکرت برای فرصت یادگیری.",
  "خدایا شکرت برای کتاب‌هایی که مسیرم را روشن می‌کنند.",
  "خدایا شکرت برای استادانی که راهنمایم بودند.",
  "خدایا شکرت برای مهارت‌هایی که کسب کرده‌ام.",
  "خدایا شکرت برای امیدی که در دلم زنده است.",
  "خدایا شکرت برای ایمان درونی‌ام.",
  "خدایا شکرت برای این لحظه، همین حالا، همین‌جا."
];

/*************************
 * ✅ BELIEF BUILDER DATA
 *************************/
const BELIEF_LIST = [
  "تا حالا فکر می‌کردم نمی‌تونم تغییر کنم؛ حالا می‌فهمم چقدر اشتباه می‌کردم، چون آدم می‌تونه از همون لحظه‌ای که بخواد، کم‌کم عوض بشه.",
  "تا حالا باورم این بود که برای شروع دیر شده؛ حالا می‌بینم این فکر فقط منو نگه داشته بود و همیشه میشه از امروز شروع کرد.",
  "تا حالا فکر می‌کردم من آدم قوی‌ای نیستم؛ اما حالا می‌فهمم همین که دوام آوردم یعنی خیلی هم قوی‌تر از چیزی‌ام که فکر می‌کردم.",
  "تا حالا خیال می‌کردم گذشته‌م همه‌چیزو خراب کرده؛ حالا می‌بینم گذشته فقط یه بخش از داستان بوده، نه پایانش.",
  "تا حالا فکر می‌کردم از پس مشکلات برنمیام؛ اما حالا می‌فهمم خیلی وقت‌ها بیشتر از چیزی که فکر می‌کردم توان داشتم.",
  "تا حالا باور داشتم اعتمادبه‌نفس ندارم؛ حالا می‌فهمم اعتمادبه‌نفس ساختنیه، نه ذاتی.",
  "تا حالا فکر می‌کردم هیچ استعدادی ندارم؛ حالا می‌بینم با تمرین، خیلی چیزها تو من رشد کرده.",
  "تا حالا خیال می‌کردم همیشه بدشانسم؛ حالا می‌فهمم خیلی از نتیجه‌ها به انتخاب‌های خودم ربط داشته.",
  "تا حالا فکر می‌کردم همیشه شکست می‌خورم؛ اما حالا می‌بینم هر بار فقط داشتم یاد می‌گرفتم.",
  "تا حالا باورم این بود که من به اندازه کافی خوب نیستم؛ حالا می‌فهمم این فقط یه فکر اشتباه بوده که جلوی رشدمو گرفته."
];

/*************************
 * CONFIG
 *************************/
const QUESTIONS = [
  { text: "معمولاً ذهنت آرام است؟", dimension: "mind" },
  { text: "می‌توانی افکارت را مدیریت کنی؟", dimension: "mind" },
  { text: "استرس را خوب کنترل می‌کنی؟", dimension: "mind" },
  { text: "در لحظه حال حضور داری؟", dimension: "mind" },
  { text: "با احساساتت آشتی هستی؟", dimension: "mind" },

  { text: "هدفت در زندگی شفاف است؟", dimension: "goal" },
  { text: "برای آینده برنامه داری؟", dimension: "goal" },
  { text: "تصمیم‌هایت هدفمندند؟", dimension: "goal" },
  { text: "می‌دانی چه می‌خواهی؟", dimension: "goal" },
  { text: "پیشرفتت را می‌سنجی؟", dimension: "goal" },

  { text: "عادت‌های مثبتی داری؟", dimension: "habit" },
  { text: "پایبند به روتین هستی؟", dimension: "habit" },
  { text: "کارها را عقب نمی‌اندازی؟", dimension: "habit" },
  { text: "استمرار داری؟", dimension: "habit" },
  { text: "خودکنترلی خوبی داری؟", dimension: "habit" },

  { text: "خودت را خوب می‌شناسی؟", dimension: "self" },
  { text: "نقاط قوتت را می‌دانی؟", dimension: "self" },
  { text: "نقاط ضعفت را پذیرفته‌ای؟", dimension: "self" },
  { text: "با خودت صادقی؟", dimension: "self" },
  { text: "خودت را دوست داری؟", dimension: "self" }
];

const DIMENSIONS = {
  mind:  { label: "ذهن", importance: 1.1 },
  goal:  { label: "هدف", importance: 1.3 },
  habit: { label: "عادت", importance: 1.4 },
  self:  { label: "خودشناسی", importance: 1.5 }
};

/*************************
 * STATE
 *************************/
let currentQuestion = 0;
let answers = [];
let gratitudeIndex = 0;
let beliefIndex = 0;

/*************************
 * DOM
 *************************/
const cardArea = document.getElementById("card-area");
const inputArea = document.getElementById("input-area");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

/*************************
 * INIT
 *************************/
renderQuestion();

/*************************
 * EVENTS
 *************************/
sendBtn.addEventListener("click", submitAnswer);
input.addEventListener("keydown", e => e.key === "Enter" && submitAnswer());

/*************************
 * QUESTION FLOW
 *************************/
function renderQuestion() {
  const q = QUESTIONS[currentQuestion];
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-number">
        سوال ${currentQuestion + 1} از ${QUESTIONS.length}
      </div>
      <div class="question-text">${q.text}</div>
    </div>
  `;
  input.value = "";
  input.focus();
}

function submitAnswer() {
  const value = Number(input.value);
  if (value < 1 || value > 10) return;

  answers.push({ dimension: QUESTIONS[currentQuestion].dimension, value });
  currentQuestion++;

  currentQuestion < QUESTIONS.length
    ? renderQuestion()
    : showResults(analyzeAssessment());
}

/*************************
 * ANALYSIS + COACH
 *************************/
function analyzeAssessment() {
  const data = {};
  Object.keys(DIMENSIONS).forEach(k => {
    data[k] = { sum: 0, count: 0, importance: DIMENSIONS[k].importance };
  });

  answers.forEach(a => {
    data[a.dimension].sum += a.value;
    data[a.dimension].count++;
  });

  let weightedSum = 0;
  let importanceSum = 0;

  Object.keys(DIMENSIONS).forEach(k => {
    const avg = data[k].sum / data[k].count;
    const score = Math.round(avg * 10);
    data[k].score = score;
    weightedSum += score * data[k].importance;
    importanceSum += data[k].importance;
  });

  data.overallScore = Math.round(weightedSum / importanceSum);
  return data;
}

function getCoachInsight(data) {
  const self = data.self.score;
  let message =
    self < 70
      ? "الان تمرکز اصلی روی آرامش و خودشناسیه."
      : self < 85
      ? "پایه خوبی داری. رشد تدریجی بهترین انتخابه."
      : "آماده اجرای رشد هدفمند هستی.";

  return { message };
}

/*************************
 * RESULTS
 *************************/
function showResults(data) {
  const coach = getCoachInsight(data);

  let html = `<div class="question-card">`;
  Object.keys(DIMENSIONS).forEach(k => {
    html += `<div class="result-row">${DIMENSIONS[k].label}: ${data[k].score}%</div>`;
  });

  html += `
    <hr>
    <strong>🎯 امتیاز کل: ${data.overallScore}%</strong>
    <hr>
    <div>👤 Coach:<br>${coach.message}</div>
    <button onclick="startProgram()" style="${mainBtnStyle()}">
      🚀 ورود به برنامه رشد
    </button>
  </div>`;

  cardArea.innerHTML = html;
  inputArea.style.display = "none";
}

/*************************
 * PROGRAM MENU
 *************************/
function startProgram() {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text">📅 برنامه رشد شخصی</div>
      ${programCard("🔥","عادت‌ساز","openHabit","#ff7a18,#ffb347")}
      ${programCard("⚡","ایجاد انگیزه","openMotivation","#f953c6,#b91d73")}
      ${programCard("🌿","ایجاد آرامش","openCalm","#43cea2,#185a9d")}
      ${programCard("🎯","کشف هدف","openGoal","#f7971e,#ffd200")}
      ${programCard("💪","تقویت اراده","openWill","#11998e,#38ef7d")}
      ${programCard("🙏","شکرگزاری","openGratitude","#56ab2f,#a8e063")}
      ${programCard("🧠","اصلاح باورها","openBelief","#8360c3,#2ebf91")}
    </div>
  `;
}

function programCard(icon,title,fn,gradient) {
  return `
    <div onclick="${fn}()" style="
      margin-top:14px;
      padding:16px;
      border-radius:18px;
      cursor:pointer;
      color:white;
      font-weight:bold;
      background:linear-gradient(135deg,${gradient});
      display:flex;
      align-items:center;
      gap:12px;
    ">
      <div style="font-size:26px">${icon}</div>
      <div>${title}</div>
    </div>
  `;
}

/*************************
 * SECTIONS (unchanged)
 *************************/
const openHabit      = () => showSection("🔥 عادت‌ساز","ساخت عادت‌های کوچک روزانه.");
const openMotivation = () => showSection("⚡ ایجاد انگیزه","اتصال به معنا و انرژی درونی.");
const openCalm       = () => showSection("🌿 ایجاد آرامش","تنظیم ذهن و سیستم عصبی.");
const openGoal       = () => showSection("🎯 کشف هدف","شفاف‌سازی مسیر زندگی.");
const openWill       = () => showSection("💪 تقویت اراده","تمرین تعهد و استمرار.");

function showSection(title,text) {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text">${title}</div>
      <p style="margin-top:10px">${text}</p>
      <button onclick="startProgram()" style="${backBtnStyle()}">⬅ بازگشت</button>
    </div>
  `;
}

/*************************
 * ✅ BELIEF SECTION (NEW)
 *************************/
const openBelief = () => {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text">🧠 اصلاح باورها</div>

      ${programSubBtn("📖 چرا باورهایمان را اصلاح کنیم؟","openWhyBelief","#8360c3,#2ebf91")}
      ${programSubBtn("💡 باورساز","startBeliefCards","#56ab2f,#a8e063")}

      <button onclick="startProgram()" style="${backBtnStyle()}">⬅ بازگشت</button>
    </div>
  `;
};

function openWhyBelief() {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text">📖 چرا باورهایمان را اصلاح کنیم؟</div>
      <p style="margin-top:12px; line-height:1.9">
        باورها فیلتر نگاه ما به خودمان و زندگی هستند.
        وقتی اصلاح می‌شوند، تصمیم‌ها و احساسات ما هم تغییر می‌کند.
      </p>
      <button onclick="openBelief()" style="${backBtnStyle()}">⬅ بازگشت</button>
    </div>
  `;
}

function startBeliefCards() {
  beliefIndex = 0;
  renderBeliefCard();
}

function renderBeliefCard() {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-number">
        باور ${beliefIndex + 1} از ${BELIEF_LIST.length}
      </div>

      <div class="question-text" style="margin-top:14px">
        ${BELIEF_LIST[beliefIndex]}
      </div>

      <button onclick="nextBelief()" style="${mainBtnStyle()}">
        💪 من می‌تونم
      </button>

      <button onclick="prevBelief()" style="${backBtnStyle()}">
        ⬅ قبلی
      </button>

      <button onclick="startProgram()" style="${backBtnStyle()}">
        🏠 منوی اصلی
      </button>
    </div>
  `;
}

function nextBelief() {
  if (beliefIndex < BELIEF_LIST.length - 1) {
    beliefIndex++;
    renderBeliefCard();
  }
}

function prevBelief() {
  if (beliefIndex > 0) {
    beliefIndex--;
    renderBeliefCard();
  }
}

/*************************
 * GRATITUDE (UNCHANGED)
 *************************/
const openGratitude = () => {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text">🙏 شکرگزاری</div>

      ${programSubBtn("📖 چرا شکرگزاری؟", "openWhyGratitude", "#8360c3,#2ebf91")}
      ${programSubBtn("🤍 با هم شکرگزاری کنیم", "startGratitudeCards", "#56ab2f,#a8e063")}

      <button onclick="startProgram()" style="${backBtnStyle()}">⬅ بازگشت</button>
    </div>
  `;
};

function programSubBtn(title, fn, gradient) {
  return `
    <div onclick="${fn}()" style="
      margin-top:14px;
      padding:14px;
      border-radius:16px;
      cursor:pointer;
      color:white;
      font-weight:bold;
      background:linear-gradient(135deg,${gradient});
      text-align:center;
    ">
      ${title}
    </div>
  `;
}

/*************************
 * BUTTON STYLES
 *************************/
function mainBtnStyle() {
  return `
    margin-top:20px;
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
    margin-top:12px;
    width:100%;
    padding:14px;
    border:none;
    border-radius:16px;
    font-weight:bold;
    cursor:pointer;
    background:#eee;
  `;
}
/*************************
 * ✅ GRATITUDE (FIXED)
 *************************/
function openWhyGratitude() {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text">📖 چرا شکرگزاری؟</div>
      <p style="margin-top:12px; line-height:1.9">
        شکرگزاری تمرینی قدرتمند برای افزایش آرامش،
        رضایت درونی و حضور در لحظه حال است.
      </p>
      <button onclick="openGratitude()" style="${backBtnStyle()}">
        ⬅ بازگشت
      </button>
    </div>
  `;
}

function startGratitudeCards() {
  gratitudeIndex = 0;
  renderGratitudeCard();
}

function renderGratitudeCard() {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-number">
        شکرگزاری ${gratitudeIndex + 1} از ${GRATITUDE_LIST.length}
      </div>

      <div class="question-text" style="margin-top:14px">
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
/*************************
 * 🔒 BELIEF PROGRESS PERSISTENCE (PATCH)
 *************************/
(function () {
  const _startBeliefCards = startBeliefCards;
  const _nextBelief = nextBelief;

  startBeliefCards = function () {
    const saved = JSON.parse(localStorage.getItem("beliefProgress") || "{}");
    beliefIndex = typeof saved.index === "number" ? saved.index : 0;
    _startBeliefCards();
  };

  nextBelief = function () {
    _nextBelief();
    localStorage.setItem(
      "beliefProgress",
      JSON.stringify({ index: beliefIndex })
    );
  };
})();
/*************************
 * ✨ BUTTON PULSE EFFECT (PATCH)
 *************************/
(function () {
  document.addEventListener("click", e => {
    const btn = e.target.closest("button");
    if (!btn) return;

    if (
      btn.textContent.includes("من می‌تونم") ||
      btn.textContent.includes("خدایا شکرت")
    ) {
      btn.classList.add("pulse-glow");
      setTimeout(() => btn.classList.remove("pulse-glow"), 650);
    }
  });
})();
/*************************
 * 🎨 FONT + ANIMATION STYLE (PATCH)
 *************************/
(() => {
  const style = document.createElement("style");
  style.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;600;700&display=swap');

.question-card {
  font-family: 'Vazirmatn', sans-serif;
  letter-spacing: 0.2px;
}

.pulse-glow {
  animation: pulseGlow .65s ease;
}

@keyframes pulseGlow {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255,180,0,0);
  }
  50% {
    transform: scale(1.12);
    box-shadow: 0 0 18px rgba(255,180,0,.85);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255,180,0,0);
  }
}
`;
  document.head.appendChild(style);
})();
console.log("✅ PATCH LOADED");
alert("PATCH LOADED");
