/* ======================
   Assessment Data
====================== */

const questions = [
  { text: "چقدر ذهنت آرام است؟", dimension: "mind" },
  { text: "چقدر هدفت شفاف است؟", dimension: "goal" },
  { text: "چقدر به عادت‌ها پایبندی؟", dimension: "habit" },
  { text: "چقدر خودت را می‌شناسی؟", dimension: "self" },

  { text: "تمرکزت چقدر پایدار است؟", dimension: "mind" },
  { text: "انگیزه‌ات چقدر ثابت است؟", dimension: "goal" },
  { text: "عادت‌هایت چقدر خودکارند؟", dimension: "habit" },
  { text: "احساست را چقدر می‌فهمی؟", dimension: "self" },

  { text: "ذهنت چقدر شلوغ است؟", dimension: "mind" },
  { text: "هدفت چقدر قابل اجراست؟", dimension: "goal" },
  { text: "در عادت‌ها چقدر استمرار داری؟", dimension: "habit" },
  { text: "چقدر نقاط قوت و ضعفت را می‌دانی؟", dimension: "self" },
];

let currentQuestion = 0;
const answers = [];

/* ======================
   Elements
====================== */

const assessmentSection = document.getElementById("assessment");
const coachSection = document.getElementById("coach");
const questionBox = document.getElementById("question-box");
const nextBtn = document.getElementById("next-question");
const coachChat = document.getElementById("coach-chat");
const coachAction = document.getElementById("coach-action");
const goToProgramBtn = document.getElementById("go-to-program");

/* ======================
   Assessment Logic
====================== */

function renderQuestion() {
  const q = questions[currentQuestion];
  questionBox.innerHTML = `
    <div>${q.text}</div>
    <input id="answer" type="number" min="1" max="10" placeholder="۱ تا ۱۰" />
  `;
}

renderQuestion();

nextBtn.addEventListener("click", () => {
  const input = document.getElementById("answer");
  const value = Number(input.value);

  if (!value || value < 1 || value > 10) {
    alert("عدد بین ۱ تا ۱۰ وارد کن");
    return;
  }

  answers.push({
    dimension: questions[currentQuestion].dimension,
    value
  });

  currentQuestion++;

  if (currentQuestion < questions.length) {
    renderQuestion();
  } else {
    finishAssessment();
  }
});

/* ======================
   Scoring & Coach
====================== */

function finishAssessment() {
  assessmentSection.classList.add("hidden");
  coachSection.classList.remove("hidden");

  const scores = calculateScores();
  const coachState = determineCoachState(scores);

  startCoach(coachState, scores);
}

function calculateScores() {
  const totals = { mind: [], goal: [], habit: [], self: [] };

  answers.forEach(a => totals[a.dimension].push(a.value));

  const avg = d =>
    totals[d].reduce((a, b) => a + b, 0) / totals[d].length * 10;

  return {
    mind: avg("mind"),
    goal: avg("goal"),
    habit: avg("habit"),
    self: avg("self")
  };
}

function determineCoachState(scores) {
  if (scores.self < 70) return "STABILIZE";
  if (scores.self < 85) return "BUILD";
  return "EXECUTE";
}

/* ======================
   Coach Chat
====================== */

function addCoachMessage(text, type = "coach") {
  const div = document.createElement("div");
  div.className = `message ${type}`;
  div.innerText = text;
  coachChat.appendChild(div);
}

function startCoach(state, scores) {
  addCoachMessage("اجازه بده یک‌کم با هم فضا را تنظیم کنیم.");

  setTimeout(() => {
    if (state === "STABILIZE") {
      addCoachMessage(
        "الان مهم‌ترین کار تو آرام‌سازی ذهن و افزایش خودشناسیه. عجله نداریم."
      );
      addCoachMessage(
        "فعلاً فقط ضعیف‌ترین بُعدت رو می‌شناسیم، نه اینکه روش فشار بیاریم."
      );
    }

    if (state === "BUILD") {
      addCoachMessage(
        "تو آماده ساختن هستی، اما با قدم‌های کنترل‌شده."
      );
      addCoachMessage(
        "خودشناسی فعال + کار تدریجی روی ضعیف‌ترین بُعد."
      );
    }

    if (state === "EXECUTE") {
      addCoachMessage(
        "تو آماده اجرایی. تمرکز کامل روی ضعیف‌ترین بُعد."
      );
      addCoachMessage(
        "برنامه‌ات باید شفاف و قابل اندازه‌گیری باشد."
      );
    }

    addCoachMessage(`Stage فعلی تو: ${state}`, "system");

    coachAction.classList.remove("hidden");
  }, 600);
}

/* ======================
   Go To Program
====================== */

goToProgramBtn.addEventListener("click", () => {
  alert("مرحله بعدی: ورود به برنامه (در قدم بعدی پیاده‌سازی می‌شود)");
});
