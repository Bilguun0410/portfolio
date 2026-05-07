(function () {
  "use strict";

  /* ── Project data for the hover preview ── */
  var PROJECTS = [
    { name: "msmgroup.mn", role: "FRONTEND", meta: "NEXT.JS · 2022" },
    { name: "erxes.io", role: "FRONTEND", meta: "REACT · 2024" },
    { name: "erxes XOS", role: "FRONTEND", meta: "REACT · ONGOING" },
  ];

  /* ── Scroll reveal ── */
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    /* Fallback for browsers without IntersectionObserver */
    revealEls.forEach(function (el) {
      el.classList.add("in");
    });
  }

  /* ── Hover preview ── */
  var preview = document.getElementById("work-preview");
  var previewTitle = document.getElementById("preview-title");
  var previewName = document.getElementById("preview-name");
  var previewRole = document.getElementById("preview-role");
  var previewMeta = document.getElementById("preview-meta");
  var workRows = document.querySelectorAll(".pb-work-row");

  if (!preview || !workRows.length) return;

  /* Track cursor globally so the card always follows */
  document.addEventListener("mousemove", function (e) {
    preview.style.left = e.clientX + "px";
    preview.style.top = e.clientY + "px";
  });

  function showPreview(idx) {
    var p = PROJECTS[idx];
    if (!p) return;
    previewTitle.textContent = p.name;
    previewName.textContent = p.name;
    previewRole.textContent = p.role;
    previewMeta.textContent = p.meta;
    preview.classList.add("show");
  }

  function hidePreview() {
    preview.classList.remove("show");
  }

  workRows.forEach(function (row) {
    var idx = parseInt(row.getAttribute("data-project"), 10);

    row.addEventListener("mouseenter", function () {
      showPreview(idx);
    });
    row.addEventListener("mouseleave", hidePreview);

    /* Touch devices: no preview, just standard link behaviour */
    row.addEventListener("touchstart", hidePreview, { passive: true });
  });
})();
