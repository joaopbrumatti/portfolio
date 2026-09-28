(function () {
  var d = document.documentElement;
  function get() { try { return localStorage.getItem('lang') === 'en' ? 'en' : 'pt'; } catch (e) { return 'pt'; } }
  function apply(l) {
    d.setAttribute('data-lang', l);
    d.setAttribute('lang', l === 'en' ? 'en' : 'pt-BR');
    var t = document.querySelector('title');
    if (t) {
      if (!t.getAttribute('data-pt')) t.setAttribute('data-pt', t.textContent);
      var en = t.getAttribute('data-en');
      t.textContent = (l === 'en' && en) ? en : t.getAttribute('data-pt');
    }
    var b = document.querySelectorAll('[data-lang-btn]'), i;
    for (i = 0; i < b.length; i++) b[i].setAttribute('aria-pressed', b[i].getAttribute('data-lang-btn') === l ? 'true' : 'false');
    var a = document.querySelectorAll('[data-aria-en]');
    for (i = 0; i < a.length; i++) {
      if (!a[i].getAttribute('data-aria-pt')) a[i].setAttribute('data-aria-pt', a[i].getAttribute('aria-label') || '');
      a[i].setAttribute('aria-label', l === 'en' ? a[i].getAttribute('data-aria-en') : a[i].getAttribute('data-aria-pt'));
    }
  }
  apply(get());
  document.addEventListener('DOMContentLoaded', function () { apply(get()); });
  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('[data-lang-btn]');
    if (!el) return;
    var l = el.getAttribute('data-lang-btn');
    try { localStorage.setItem('lang', l); } catch (x) {}
    apply(l);
  });
})();
