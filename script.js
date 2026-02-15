const questions = [
  { text: "چقدر احساساتت رو می‌شناسی؟", dimension: "mind" },
  { text: "چقدر استرس روزانه‌ات رو مدیریت می‌کنی؟", dimension: "mind" },
  { text: "چقدر ذهنت آرام است؟", dimension: "mind" },
  { text: "چقدر به خودت مهربانی؟", dimension: "mind" },
  { text: "چقدر افکارت منفی نیستند؟", dimension: "mind" },

  { text: "چقدر هدفت در زندگی مشخص است؟", dimension: "goal" },
  { text: "چقدر انگیزه‌ی پایدار داری؟", dimension: "goal" },
  { text: "چقدر به آینده‌ات امیدوار هستی؟", dimension: "goal" },
  { text: "چقدر برای هدفت تلاش می‌کنی؟", dimension: "goal" },
  { text: "چقدر می‌دانی چه می‌خواهی؟", dimension: "goal" },

  { text: "چقدر عادت‌های منظمی داری؟", dimension: "habit" },
  { text: "چقدر برنامه‌ریزی می‌کنی؟", dimension: "habit" },
  { text: "چقدر به برنامه‌ات پایبندی؟", dimension: "habit" },
  { text: "چقدر اهمال‌کاری نداری؟", dimension: "habit" },
  { text: "چقدر کارهایت را کامل می‌کنی؟", dimension: "habit" },

  { text: "چقدر خودت را می‌شناسی؟", dimension: "self" },
  { text: "چقدر نقاط قوتت را می‌دانی؟", dimension: "self" },
  { text: "چقدر نقاط ضعفت را پذیرفتی؟", dimension: "self" },
  { text: "چقدر با خودت صادقی؟", dimension: "self" },
  { text: "چقدر از درونت آگاهی داری؟", dimension: "self" }
];

const DIMENSIONS = {
  mind: { label: "ذهن و احساسات", importance: 1.3 },
  goal: { label: "هدف و انگیزه", importance: 1.1 },
  habit: { label: "نظم و عادت‌ها", importance: 1.2 },
  self: { label: "خودشناسی", importance: 1.0 }
};

let current = 0;
const answers = [];

const cardArea = document.getElementById("card-area");
const input = document.getElementById("userInput");
const btn = document.getElementById("sendBtn");

renderQuestion();

input.addEventListener("keydown", e => {
  if (e.key === "Enter") submitAnswer();
});
btn.onclick = submitAnswer;

function renderQuestion() {
  cardArea.innerHTML = `
    <div class="question-card">
      <div class="question-number">
        سؤال ${current + 1} از ${questions.length}
      </div>
      <div class="question-text">${questions[current].text}</div>
    </div>
  `;
}

function submitAnswer() {
  const value = Number(input.value);
  if (!value || value < 1 || value > 10) return;

  answers.push({ value, dimension: questions[current].dimension });
  input.value = "";

  const card = document.querySelector(".question-card");
  card.classList.add("card-exit");

  setTimeout(() => {
    current++;
    current < questions.length ? renderQuestion() : showResult();
  }, 400);
}

function analyzeAssessment() {
  const data = {};
  Object.keys(DIMENSIONS).forEach(k => data[k] = { sum: 0, count: 0 });

  answers.forEach(a => {
    data[a.dimension].sum += a.value;
    data[a.dimension].count++;
  });

  Object.keys(data).forEach(k => {
    const avg = data[k].sum / data[k].count;
    data[k].score = Math.round(avg * 10);
  });

  return data;
}

function showResult() {
  const data = analyzeAssessment();
  launchConfetti();

  let html = `<div class="question-card"><strong>🎉 نتیجه ارزیابی</strong><br><br>`;

  Object.keys(data).forEach(k => {
    html += `
      <div class="result-row">
        <div class="result-label">${DIMENSIONS[k].label} – ${data[k].score}%</div>
        <div class="progress">
          <div class="progress-fill" style="--value:${data[k].score}%"></div>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  cardArea.innerHTML = html;
}

/* ✅ Confetti Effect */
function launchConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  const pieces = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    r: Math.random() * 6 + 4,
    s: Math.random() * 4 + 2
  }));

  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y += p.s, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${Math.random()*40+20},100%,60%)`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}
