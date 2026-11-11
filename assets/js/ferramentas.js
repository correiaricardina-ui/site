/* Página «Ferramentas»: dois separadores (jogos e aplicações).
   Sem JavaScript, as duas secções ficam visíveis, uma a seguir à outra. */
(function () {
  'use strict';
  var lista = document.querySelector('.ferr-tabs');
  if (!lista) return;
  var botoes = Array.prototype.slice.call(lista.querySelectorAll('[role="tab"]'));
  var paineis = botoes.map(function (b) { return document.getElementById(b.getAttribute('aria-controls')); });
  document.documentElement.classList.add('ferr-js');

  function ativar(i, foco) {
    botoes.forEach(function (b, j) {
      var on = i === j;
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
      if (paineis[j]) paineis[j].hidden = !on;
    });
    if (foco) botoes[i].focus();
  }

  botoes.forEach(function (b, i) {
    b.addEventListener('click', function () { ativar(i, false); });
    b.addEventListener('keydown', function (e) {
      var n = botoes.length, k = null;
      if (e.key === 'ArrowRight') k = (i + 1) % n;
      else if (e.key === 'ArrowLeft') k = (i - 1 + n) % n;
      if (k !== null) { e.preventDefault(); ativar(k, true); }
    });
  });

  function porEndereco() {
    var id = decodeURIComponent((location.hash || '').slice(1));
    var alvo = id ? document.getElementById(id) : null;
    for (var i = 0; i < paineis.length; i++) {
      if (alvo && paineis[i] && paineis[i].contains(alvo)) {
        ativar(i, false);
        alvo.scrollIntoView();
        return;
      }
    }
  }

  ativar(0, false);        /* os jogos abrem primeiro */
  porEndereco();
  window.addEventListener('hashchange', porEndereco);
})();
