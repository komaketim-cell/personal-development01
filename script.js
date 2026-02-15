/* ======================
   Global State
====================== */

let coachState = null;

/* ======================
   Elements
====================== */

const programSection = document.getElementById("program");
const dashboard = document.getElementById("dashboard");
const programContent = document.getElementById("program-content");
const dailyCheckBtn = document.getElementById("daily-check");

/* ======================
   Go To Program
====================== */

goToProgramBtn.addEventListener("click", () => {
  coachSection.classList.add("hidden");
  programSection.classList.remove("hidden");

  renderDashboard();
  renderProgramTools();
});

/* ======================
   Dashboard
====================== */

function renderDashboard() {
  dashboard.innerHTML = `
    <div>مرحله فعلی تو:</div>
    <div class="badge ${coachState.toLowerCase()}">${coachState}</div>
    <p style="opacity:.7;margin-top:10px">
      تمرکز این مرحله:
      ${coachState === "STABILIZE" ? "آرام‌سازی و خودشناسی" :
        coachState === "BUILD" ? "ساخت تدریجی" :
        "اجرای هدف"}
    </p>
  `;
}

/* ======================
   Program Tools
====================== */

function renderProgramTools() {

  if (coachState === "STABILIZE") {
    programContent.innerHTML = `
      <div class="tool">
        <h3>خودشناسی امروز</h3>
        <p>الان دقیقاً چه احساسی داری؟</p>
        <textarea rows="4" style="width:100%"></textarea>
      </div>
    `;
  }

  if (coachState === "BUILD") {
    programContent.innerHTML = `
      <div class="tool">
        <h3>روتین امروز</h3>
        <label><input type="checkbox"> کار کوچک ولی مهم</label><br/>
        <label><input type="checkbox"> مراقبت از ذهن</label>
      </div>
    `;
  }

  if (coachState === "EXECUTE") {
    programContent.innerHTML = `
      <div class="tool">
        <h3>تمرکز اصلی</h3>
        <p>امروز فقط روی این کار تمرکز کن:</p>
        <input type="text" placeholder="کار کلیدی امروز" style="width:100%" />
      </div>
    `;
  }
}

/* ======================
   Daily Check-in
====================== */

dailyCheckBtn.addEventListener("click", () => {
  alert("چک‌این ثبت شد ✅ (در نسخه بعد ذخیره می‌شود)");
});
