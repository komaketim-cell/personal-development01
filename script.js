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
/*************************
 * 🔥 HABIT BUILDER MAIN
 *************************/
const openHabit = () => {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text">🔥 عادت‌ساز</div>

      ${programSubBtn("📖 نقش عادت‌ها در زندگی","openHabitRole","#ff7a18,#ffb347")}
      ${programSubBtn("💪 عادت‌ساز","startHabitBuilder","#ff512f,#dd2476")}
      ${programSubBtn("🏆 چالش ۲۱ روزه ایجاد عادت","open21Challenge","#11998e,#38ef7d")}

      <button onclick="startProgram()" style="${backBtnStyle()}">
        ⬅ بازگشت به منوی اصلی
      </button>
    </div>
  `;
};
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
/*********************************
 * 🔒 BELIEF PROGRESS PERSISTENCE
 *********************************/
(function () {
  const KEY = "beliefProgressIndex";

  // هنگام ورود به کارت‌های باور
  const _startBeliefCards = startBeliefCards;
  startBeliefCards = function () {
    const saved = localStorage.getItem(KEY);
    if (saved !== null) {
      beliefIndex = Number(saved);
    }
    _startBeliefCards();
  };

  // هر بار تغییر کارت
  document.addEventListener("click", () => {
    if (typeof beliefIndex === "number") {
      localStorage.setItem(KEY, beliefIndex);
    }
  });
})();
/*********************************
 * ✨ STRONG BUTTON ANIMATION
 *********************************/
(function () {
  document.addEventListener("click", function (e) {
    const btn = e.target.closest("button");
    if (!btn) return;

    btn.classList.remove("pulse-glow");
    void btn.offsetWidth; // reset animation
    btn.classList.add("pulse-glow");

    setTimeout(() => {
      btn.classList.remove("pulse-glow");
    }, 700);
  });
})();
/*********************************
 * 🎨 FONT + VISUAL ENHANCEMENT
 *********************************/
(() => {
  const style = document.createElement("style");
  style.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;600;700&display=swap');

body,
.question-card,
.question-text,
.result-row,
button {
  font-family: 'Vazirmatn', sans-serif !important;
}

.question-text {
  font-size: 16.5px;
  line-height: 1.9;
}

.pulse-glow {
  animation: pulseGlow .7s ease;
}

@keyframes pulseGlow {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255,170,0,0);
  }
  50% {
    transform: scale(1.12);
    box-shadow: 0 0 20px rgba(255,170,0,.85);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255,170,0,0);
  }
}
`;
  document.head.appendChild(style);
}
.blink-goal{
  animation: blinkGoal 1s infinite;
  font-weight:bold;
  margin-bottom:10px;
}

@keyframes blinkGoal{
  0%{opacity:1;}
  50%{opacity:.3;}
  100%{opacity:1;}
}
function openHabitRole(){
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text">📖 نقش عادت‌ها در زندگی</div>
      <p style="margin-top:12px; line-height:1.9">
        عادت‌ها مسیر آینده ما را می‌سازند.
        آنچه هر روز تکرار می‌کنیم، شخصیت فردای ما را شکل می‌دهد.
        موفقیت نتیجه کارهای کوچک اما مداوم است.
      </p>

      <button onclick="openHabit()" style="${backBtnStyle()}">
        ⬅ بازگشت
      </button>

      <button onclick="startProgram()" style="${backBtnStyle()}">
        🏠 منوی اصلی
      </button>
    </div>
  `;
}
const HABIT_BUILDER_LIST = [
"من هر روز حتی با قدم‌های کوچک به سمت بهتر شدن حرکت می‌کنم.",
"من شروع کردن را به کامل بودن ترجیح می‌دهم.",
"من به جای انتظار برای انگیزه، با عمل کردن انگیزه می‌سازم.",
"من برای زمانم ارزش قائلم و آن را آگاهانه خرج می‌کنم.",
"من عادت‌های کوچکی می‌سازم که آینده بزرگی برایم می‌آفرینند.",
"من مراقبت از جسم و ذهنم را جزو اولویت‌های زندگی‌ام می‌دانم.",
"من هر روز چیزی جدید یاد می‌گیرم، حتی اگر بسیار کوچک باشد.",
"من کارهای مهمم را قبل از کارهای آسان انجام می‌دهم.",
"من با تکرار روزانه، مهارت‌هایم را عمیق‌تر می‌کنم.",
"من افکارم را می‌نویسم تا ذهنم شفاف‌تر شود.",
"من برای داشته‌هایم قدردانم و این حس را هر روز تمرین می‌کنم.",
"من بدنم را هر روز به حرکت وادار می‌کنم تا انرژی داشته باشم.",
"من محیط اطرافم را مرتب نگه می‌دارم تا ذهنم آرام بماند.",
"من شب‌ها برای فردایم برنامه ساده و واضح می‌نویسم.",
"من به جای مقایسه خودم با دیگران، پیشرفت خودم را می‌سنجم.",
"من روی کارهایی تمرکز می‌کنم که واقعاً در زندگی‌ام اثر دارند.",
"من استراحت کافی را بخشی از موفقیتم می‌دانم.",
"من با انجام کارهای کوچک اما مداوم، اعتماد به نفسم را می‌سازم.",
"من به خودم فرصت اشتباه و یادگیری می‌دهم.",
"من هر روز نسخه آگاهانه‌تر و قوی‌تری از خودم می‌شوم."
];

let habitIndex = 0;
function startHabitBuilder(){
  habitIndex = 0;
  renderHabitCard();
}

function renderHabitCard(){
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-number">
        عادت ${habitIndex+1} از ${HABIT_BUILDER_LIST.length}
      </div>

      <div class="question-text" style="margin-top:14px">
        ${HABIT_BUILDER_LIST[habitIndex]}
      </div>

      <button onclick="nextHabit()" style="${mainBtnStyle()}">
        💪 من می‌تونم
      </button>

      <button onclick="prevHabit()" style="${backBtnStyle()}">
        ⬅ قبلی
      </button>

      <button onclick="startProgram()" style="${backBtnStyle()}">
        🏠 منوی اصلی
      </button>
    </div>
  `;
}

function nextHabit(){
  if(habitIndex < HABIT_BUILDER_LIST.length-1){
    habitIndex++;
    renderHabitCard();
  }
}

function prevHabit(){
  if(habitIndex>0){
    habitIndex--;
    renderHabitCard();
  }
}
function open21Challenge(){
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text">🏆 چالش ۲۱ روزه</div>

      ${programSubBtn("هفته اول — شروع و فعال‌سازی","openWeek1","#ff9966,#ff5e62")}
      ${programSubBtn("هفته دوم — تثبیت و آگاهی","openWeek2","#00b09b,#96c93d")}
      ${programSubBtn("هفته سوم — هویت‌سازی","openWeek3","#7f00ff,#e100ff")}

      <button onclick="openHabit()" style="${backBtnStyle()}">
        ⬅ بازگشت
      </button>
    </div>
  `;
}
const WEEK1 = [
"روز ۱: امروز فقط یک عادت کوچک انتخاب می‌کنم و متعهد می‌شوم ۲۱ روز ادامه‌اش بدهم.",
"روز ۲: امروز کار مهمم را قبل از چک کردن گوشی انجام می‌دهم.",
"روز ۳: امروز ۱۰ دقیقه مطالعه یا یادگیری انجام می‌دهم.",
"روز ۴: امروز ۵ دقیقه افکارم را می‌نویسم.",
"روز ۵: امروز حداقل ۱۰ دقیقه بدنم را حرکت می‌دهم.",
"روز ۶: امروز یک کار نیمه‌تمام کوچک را کامل می‌کنم.",
"روز ۷: امروز ۳ مورد از چیزهایی که بابتشان شکرگزارم را می‌نویسم."
];

function openWeek1(){
  renderWeek("هفته اول — شروع و فعال‌سازی (روزهای ۱ تا ۷)",
             "هدف هفته اول: فقط «شروع کردن و انجام دادن» بدون وسواس.",
             WEEK1,
             open21Challenge);
}
function renderWeek(title,goal,days,backFn){
  let html = `
    <div class="question-card">
      <div class="question-text">${title}</div>
      <div class="blink-goal">${goal}</div>
  `;

  days.forEach((d,i)=>{
    html+=`
      <div onclick="renderDay('${d.replace(/'/g,"")}','${title}',${backFn.name})"
        style="margin-top:10px;padding:10px;border-radius:12px;background:#f4f4f4;cursor:pointer">
        ${d.split(":")[0]}
      </div>
    `;
  });

  html+=`
      <button onclick="${backFn.name}()" style="${backBtnStyle()}">
        ⬅ بازگشت
      </button>
    </div>
  `;

  cardArea.innerHTML=html;
}
function renderDay(text,weekTitle,backFnName){
  cardArea.innerHTML=`
    <div class="question-card">
      <div class="question-text">${text}</div>

      <button onclick="${backFnName}()" style="${backBtnStyle()}">
        ⬅ بازگشت به ${weekTitle}
      </button>

      <button onclick="startProgram()" style="${backBtnStyle()}">
        🏠 منوی اصلی
      </button>
    </div>
  `;
}
})();
