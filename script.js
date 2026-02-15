/* =====================
   Global State
===================== */

let currentQuestion = 0;
let answers = [];
let coachState = null;

/* =====================
   Questions
===================== */

const questions = [
  "چقدر ذهنت آرام است؟",
  "چقدر روی هدفت شفاف هستی؟",
  "چقدر عادت‌های پایداری داری؟",
  "چقدر خودت را می‌شناسی؟",
  "چقدر تمرکز داری؟",
  "چقدر انگیزه داری؟",
  "چقدر استمرار داری؟",
  "چقدر احساس معنا می‌کنی؟",
  "چقدر استرس داری؟",
  "چقدر از مسیرت راضی هستی؟"
];

/* =====================
   Elements
===================== */

const assessmentSection = document.getElementById("assessment");
const coachSection = document.getElementById("coach");
const programSection = document.getElementById("program");

const questionBox = document.getElementById("question-box");
const nextBtn = document.getElementById("next-question");
const progressBar = document.getElementById("progress-bar");

const coachChat = document.getElementById("coach-chat");
const coachAction = document.getElementById("coach-action");
const goToProgramBtn = document.getElementById("go-to-program");

const dashboard = document.getElementById("dashboard");
const programContent = document.getElementById("program-content");
const dailyCheckBtn = document.getElementById("daily-check");

/* =====================
   Init
===================== */

renderQuestion();

/* =====================
   Assessment
===================== */

function renderQuestion() {
  progressBar.style.width = `${(currentQuestion / questions.length) * 100}%`;

  questionBox.innerHTML = `
    <div>${questions[currentQuestion]}</div>
    <input type="range" min="1" max="10" value="5" id="answer" />
  `;
}

nextBtn.addEventListener("click", () => {
  const val = document.getElementById("answer").value;
  answers.push(Number(val));
  currentQuestion++;

  if (currentQuestion < questions.length) {
    renderQuestion();
  } else {
    finishAssessment();
  }
});

function finishAssessment() {
  assessmentSection.classList.add("hidden");
  coachSection.classList.remove("hidden");

  const avg = answers.reduce((a, b) => a + b, 0) / answers.length;
  coachState = determineCoachState(avg); // ✅ فیکس اصلی

  startCoach(coachState);
}

/* =====================
   Coach
===================== */

function determineCoachState(score) {
  if (score < 7) return "STABILIZE";
  if (score < 8.5) return "BUILD";
  return "EXECUTE";
}

function startCoach(state) {
  coachChat.innerHTML = "";

  const msg =
    state === "STABILIZE"
      ? "اول باید ذهنت آروم بشه و خودتو بهتر بشناسی."
      : state === "BUILD"
      ? "وقت ساختن روتین و ثباته."
      : "تو آماده اجرا و تمرکز جدی هستی.";

  addCoachMessage(msg);

  setTimeout(() => {
    coachAction.classList.remove("hidden");
  }, 600);
}

function addCoachMessage(text) {
  const div = document.createElement("div");
  div.className = "message coach";
  div.innerText = text;
  coachChat.appendChild(div);
}

/* =====================
   Program
===================== */

goToProgramBtn.addEventListener("click", () => {
  coachSection.classList.add("hidden");
  programSection.classList.remove("hidden");

  renderDashboard();
  renderProgram();
});

function renderDashboard() {
  dashboard.innerHTML = `
    <div>وضعیت فعلی:</div>
    <div class="badge ${coachState.toLowerCase()}">${coachState}</div>
  `;
}

function renderProgram() {
  if (coachState === "STABILIZE") {
    programContent.innerHTML = `
      <div class="tool">
        <h3>خودشناسی</h3>
        <textarea rows="4" style="width:100%"></textarea>
      </div>
    `;
  }

  if (coachState === "BUILD") {
    programContent.innerHTML = `
      <div class="tool">
        <label><input type="checkbox"> کار مهم</label><br/>
        <label><input type="checkbox"> مراقبت ذهن</label>
      </div>
    `;
  }

  if (coachState === "EXECUTE") {
    programContent.innerHTML = `
      <div class="tool">
        <input type="text" placeholder="کار کلیدی امروز" style="width:100%" />
      </div>
    `;
  }
}

dailyCheckBtn.addEventListener("click", () => {
  alert("چک‌این ثبت شد ✅");
});
