/* MBH Customer App mock layout — injects app bar (no bottom tab bar).
   Usage (inside <body>):
     <div class="app">
       <script>window.PAGE = { title: "งวดผ่อน", back: "home.html" };</script>
       <script src="assets/layout.js"></script>
       <div class="screen"> ...page content... </div>
     </div>

   window.PAGE keys (ทุกตัวไม่บังคับ):
     title   : ข้อความกลาง/ซ้ายของ app bar
     tab     : ถ้าใส่ = มี tab bar (เลิกใช้แล้ว — หน้าแรกเป็นจอเดียวแบบ Customer Connect)
     back    : ชื่อไฟล์ปลายทางของปุ่มย้อนกลับ เช่น "home.html" (ไม่ใส่ = ไม่มีปุ่ม)
     right   : [{ ico:"refresh-cw", href:"home.html" }] ปุ่มมุมขวา
     bare    : true = ไม่ต้อง app bar เลย (pay-success / index)
     dark    : true = app bar โปร่งใสตัวอักษรขาว (ใช้กับหน้าที่ hero เข้มชนขอบบน)
   ไม่มีการ fetch ออกนอกเครื่อง เปิดจาก file:// ได้ */

(function () {
  var P = window.PAGE || {};

  // ไอคอนเป็นไฟล์ในเครื่อง (lucide 0.544.0) ไม่ยิงออกเน็ตตอนรัน และเปิดจาก file:// ได้
  document.write('<scr' + 'ipt src="assets/lucide.min.js"></scr' + 'ipt>');

  function ico(name) { return '<i data-lucide="' + name + '"></i>'; }

  var TABS = [
    { id: "home",     href: "home.html",             ico: "house",         label: "หน้าแรก" },
    { id: "schedule", href: "payment-schedule.html", ico: "calendar-days", label: "งวดผ่อน" },
    { id: "history",  href: "payment-history.html",  ico: "receipt-text",  label: "ประวัติ" },
    { id: "profile",  href: "profile.html",          ico: "user-round",    label: "บัญชี" }
  ];

  if (!P.bare) {
    var h = '<div class="appbar' + (P.dark ? ' dark' : '') + '">';
    h += P.back
      ? '<a class="icon-btn" href="' + P.back + '">' + ico("chevron-left") + '</a>'
      : '<span class="icon-btn" aria-hidden="true"></span>';
    h += '<div class="appbar-title">' + (P.title || "") + '</div>';
    if (P.right && P.right.length) {
      P.right.forEach(function (r) {
        h += '<a class="icon-btn' + (r.dot ? ' has-dot' : '') + '" href="' + (r.href || "#") + '">' + ico(r.ico) + '</a>';
      });
    } else {
      h += '<span class="icon-btn" aria-hidden="true"></span>';
    }
    h += '</div>';
    document.write(h);
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (P.tab) {
      var t = document.createElement("div");
      t.className = "tabbar";
      t.innerHTML = TABS.map(function (x) {
        return '<a class="tab-item' + (x.id === P.tab ? " active" : "") + '" href="' + x.href + '">' +
               ico(x.ico) + '<span>' + x.label + '</span></a>';
      }).join("");
      (document.querySelector(".app") || document.body).appendChild(t);
      var sc = document.querySelector(".screen");
      if (sc) sc.classList.add("has-tabbar");
    }
    if (window.lucide) lucide.createIcons();
  });
})();
