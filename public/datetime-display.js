(function () {
  const el = document.getElementById("datetime-display");
  function update() {
    const now = new Date();
    const offsetMin = -now.getTimezoneOffset();
    const sign = offsetMin >= 0 ? "+" : "-";
    const offsetHr = Math.floor(Math.abs(offsetMin) / 60);
    const yyyy = now.getFullYear();
    const MM = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    el.textContent = `UTC${sign}${offsetHr} ${yyyy}.${MM}.${dd}`;
  }
  update();
  const msUntilMidnight = 864e5 - (Date.now() % 864e5);
  setTimeout(function tick() {
    update();
    setTimeout(tick, 864e5);
  }, msUntilMidnight);
})();
