/***********************
 * MAIN MENU
 ***********************/
function showMainMenu() {
  const card = `
    <div class="question-card">
      <div class="question-text">
        به برنامه رشد فردی خوش آمدی 🌱  
        لطفاً یک بخش را انتخاب کن:
      </div>
    </div>
  `;

  document.getElementById("card-area").innerHTML = card;

  document.getElementById("input-area").innerHTML = `
    <button onclick="startAssessment()">ارزیابی</button>
    <button onclick="startGratitude()">شکرگزاری</button>
    <button onclick="startBeliefCorrection()">اصلاح باورها</button>
  `;
}

/***********************
 * GRATITUDE (existing)
 ***********************/
const GRATITUDE_LIST = [
  "خدایا شکرت بابت امروز",
  "خدایا شکرت بابت سلامتی",
  "خدایا شکرت بابت فرصت دوباره"
];

let gratitudeIndex = 0;

function startGratitude() {
  gratitudeIndex = 0;
  showGratitudeCard();
}

function showGratitudeCard() {
  const card = `
    <div class="question-card">
      <div class="question-number">شکرگزاری ${gratitudeIndex + 1} از ${GRATITUDE_LIST.length}</div>
      <div class="question-text">${GRATITUDE_LIST[gratitudeIndex]}</div>
    </div>
  `;

  document.getElementById("card-area").innerHTML = card;

  document.getElementById("input-area").innerHTML = `
    <button onclick="prevGratitude()">⬅ قبلی</button>
    <button onclick="nextGratitude()">🤍 خدایا شکرت</button>
    <button onclick="showMainMenu()">🏠 منوی اصلی</button>
  `;
}

function nextGratitude() {
  if (gratitudeIndex < GRATITUDE_LIST.length - 1) {
    gratitudeIndex++;
    showGratitudeCard();
  }
}

function prevGratitude() {
  if (gratitudeIndex > 0) {
    gratitudeIndex--;
    showGratitudeCard();
  }
}

/***********************
 * ✅ BELIEF CORRECTION (NEW)
 ***********************/
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

let beliefIndex = 0;

function startBeliefCorrection() {
  beliefIndex = 0;
  showBeliefCard();
}

function showBeliefCard() {
  const card = `
    <div class="question-card">
      <div class="question-number">
        اصلاح باور ${beliefIndex + 1} از ${BELIEF_LIST.length}
      </div>
      <div class="question-text">
        ${BELIEF_LIST[beliefIndex]}
      </div>
    </div>
  `;

  document.getElementById("card-area").innerHTML = card;

  document.getElementById("input-area").innerHTML = `
    <button onclick="prevBelief()">⬅ قبلی</button>
    <button onclick="nextBelief()">من می‌تونم 💪</button>
    <button onclick="showMainMenu()">🏠 منوی اصلی</button>
  `;
}

function nextBelief() {
  if (beliefIndex < BELIEF_LIST.length - 1) {
    beliefIndex++;
    showBeliefCard();
  }
}

function prevBelief() {
  if (beliefIndex > 0) {
    beliefIndex--;
    showBeliefCard();
  }
}

/***********************
 * INIT
 ***********************/
showMainMenu();
