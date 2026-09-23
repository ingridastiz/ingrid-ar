// Idioma persistente entre páginas
(function () {
  var KEY = "ingrid-lang";
  var WA = {
    es: "https://wa.me/34673626550?text=Hola%20Ingrid%2C%20me%20gustar%C3%ADa%20contarte%20mi%20momento%20y%20ver%20si%20hacemos%20una%20sesi%C3%B3n",
    en: "https://wa.me/34673626550?text=Hi%20Ingrid%2C%20I%27d%20like%20to%20tell%20you%20a%20bit%20about%20my%20moment%20and%20see%20if%20we%20do%20a%20session"
  };
  function apply(lang) {
    document.body.classList.toggle("lang-en", lang === "en");
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.classList.toggle("on", b.dataset.lang === lang);
    });
    document.querySelectorAll(".js-wa-link").forEach(function (a) {
      a.href = WA[lang];
    });
  }
  function get() {
    try { return localStorage.getItem(KEY) || "es"; } catch (e) { return "es"; }
  }
  function set(lang) {
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    apply(lang);
  }
  document.addEventListener("DOMContentLoaded", function () {
    apply(get());
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.addEventListener("click", function () { set(b.dataset.lang); });
    });
  });
  // aplicar cuanto antes para evitar parpadeo
  if (document.body) apply(get());
})();
