// =============================
//  Main Program Logic
// =============================

// عناصر کلی اپ
const app = document.getElementById("app");
const header = document.getElementById("header");
const cardArea = document.getElementById("card-area");
const inputArea = document.getElementById("input-area");

// حالت برنامه
let currentSection = "assessment"; // assessment | menu | coach | gratitude | belief
let assessmentData = {};
let currentBeliefIndex = 0;

// =============================
//  داده‌های اصلاح باورها
// =============================
const beliefCards = [
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

// =============================
//  بخش ارزیابی اولیه (Assessment)
// =============================

// نمونه ساده برای ارزیابی
const questions = [
  "در حال حاضر چقدر احساس انرژی و انگیزه داری؟ (1 تا 5)",
  "چقدر خواب کافی و باکیفیت داری؟ (1 تا 5)",
  "چقدر از تغذیه‌ات رضایت داری؟ (1 تا 5)",
  "فعالیت بدنی‌ات در هفته چقدره؟ (1 تا 5)",
];

let currentQuestion = 0;
let answers = [];

function showQuestion() {
  header.textContent = "ارزیابی آغازین 🌿";
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-number">سؤال ${currentQuestion + 1} از ${questions.length}</div>
      <div class="question-text">${questions[currentQuestion]}</div>
    </div>
  `;
  inputArea.innerHTML = `
    <input id="answerInput" type="number" min="1" max="5" placeholder="امتیاز 1 تا 5">
    <button id="nextBtn">بعدی</button>
  `;
  document.getElementById("nextBtn").onclick = nextQuestion;
}

function nextQuestion() {
  const val = parseInt(document.getElementById("answerInput").value);
  if (!val || val < 1 || val > 5) {
    alert("لطفاً عددی بین ۱ تا ۵ وارد کن.");
    return;
  }
  answers.push(val);
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showAssessmentResult();
  }
}

function showAssessmentResult() {
  const avg = answers.reduce((a, b) => a + b, 0) / answers.length;
  header.textContent = "نتیجه ارزیابی 🌞";
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text">
        میانگین وضعیت فعایت ${avg.toFixed(1)} از ۵ است.
      </div>
      <div class="result-row">
        <div class="result-label">پیشرفت کلی</div>
        <div class="progress">
          <div class="progress-fill" style="--value:${(avg / 5) * 100}%"></div>
        </div>
      </div>
    </div>
  `;
  inputArea.innerHTML = `<button id="toMenu">ادامه</button>`;
  document.getElementById("toMenu").onclick = showMainMenu;
}

// =============================
//  منوی اصلی
// =============================
function showMainMenu() {
  currentSection = "menu";
  header.textContent = "منوی اصلی 🏠";
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text" style="text-align:center; line-height:2">
        یکی از گزینه‌ها رو انتخاب کن:
      </div>
      <button id="openCoach" style="margin-top:12px;width:100%">👩‍🏫 راهنمای من</button>
      <button id="openGratitude" style="margin-top:8px;width:100%">🙏 شکرگزاری</button>
      <button id="openBeliefs" style="margin-top:8px;width:100%">💡 اصلاح باورها</button>
    </div>
  `;
  inputArea.innerHTML = "";
  document.getElementById("openCoach").onclick = showCoach;
  document.getElementById("openGratitude").onclick = showGratitude;
  document.getElementById("openBeliefs").onclick = showBeliefCard;
}

// =============================
//  Coach (همان قبلی، دست‌نخورده)
// =============================
function showCoach() {
  currentSection = "coach";
  header.textContent = "کوچ سلامت 🌿";
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text">به مسیر رشدت ادامه بده؛ من همراهتم 💪</div>
    </div>
  `;
  inputArea.innerHTML = `<button onclick="showMainMenu()">🏠 منوی اصلی</button>`;
}

// =============================
//  شکرگزاری (grateful cards)
// =============================
const gratitudeCards = [
  "خدا رو شکر که امروز بیدار شدم و فرصتی برای زندگی دوباره دارم.",
  "سپاس‌گزار بدنم هستم که در هر شرایطی همراه منه.",
  "قدردان لحظات کوچیک شادی و آرامشم.",
];
let gratitudeIndex = 0;

function showGratitude() {
  currentSection = "gratitude";
  showGratitudeCard();
}

function showGratitudeCard() {
  header.textContent = "لحظه شکرگزاری ✨";
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-text">${gratitudeCards[gratitudeIndex]}</div>
    </div>
  `;
  inputArea.innerHTML = `
    <button id="prevGrat">⬅ قبلی</button>
    <button id="nextGrat">💪 من می‌تونم</button>
    <button onclick="showMainMenu()">🏠 منوی اصلی</button>
  `;
  document.getElementById("prevGrat").onclick = () => {
    gratitudeIndex = (gratitudeIndex - 1 + gratitudeCards.length) % gratitudeCards.length;
    showGratitudeCard();
  };
  document.getElementById("nextGrat").onclick = () => {
    gratitudeIndex = (gratitudeIndex + 1) % gratitudeCards.length;
    showGratitudeCard();
  };
}

// =============================
//  📌 اصلاح باورها (BELIEF CORRECTION)
// =============================
function showBeliefCard() {
  currentSection = "belief";
  header.textContent = "اصلاح باورها 💡";

  const beliefText = beliefCards[currentBeliefIndex];
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-number">باور ${currentBeliefIndex + 1} از ${beliefCards.length}</div>
      <div class="question-text">${beliefText}</div>
    </div>
  `;

  inputArea.innerHTML = `
    <button id="prevBelief">⬅ قبلی</button>
    <button id="nextBelief">💪 من می‌تونم</button>
    <button onclick="showMainMenu()">🏠 منوی اصلی</button>
  `;

  document.getElementById("prevBelief").onclick = () => {
    currentBeliefIndex = (currentBeliefIndex - 1 + beliefCards.length) % beliefCards.length;
    showBeliefCard();
  };

  document.getElementById("nextBelief").onclick = () => {
    currentBeliefIndex = (currentBeliefIndex + 1) % beliefCards.length;
    showBeliefCard();
  };
}

// =============================
//  شروع برنامه
// =============================
showQuestion();
