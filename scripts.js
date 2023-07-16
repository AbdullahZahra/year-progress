const clock = document.getElementById("clock");
const date = document.getElementById("date");

const year = document.getElementById("year");
// const quarter = document.getElementById("quarter");
// const month = document.getElementById("month");

function updateClock() {
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  clock.innerText = `${h}:${m}:${s}`;
}

function updateDate() {
  const now = new Date();

  const y = now.getFullYear();
  const m = now.getMonth() + 1;
  const d = now.getDate();

  date.innerText = `${d}/${m}/${y}`;
}

function updateYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);

  year.innerText = `${Math.floor((day / 365) * 100)}%`;
  // alert(`We are ${Math.floor((day / 365) * 100)}% through the year!`);
}

function percentage() {}

updateClock();
updateDate();
updateYear();
