/* Ricardina Correia — comportamentos do site */

(function () {
  'use strict';

  /* ---- Menu em ecrãs pequenos ---- */
  var botaoMenu = document.querySelector('.menu__botao');
  var menu = document.getElementById('menu');

  function ajustarMenu() {
    if (!botaoMenu || !menu) return;
    if (window.innerWidth > 800) {
      menu.hidden = false;
      botaoMenu.setAttribute('aria-expanded', 'false');
    } else if (botaoMenu.getAttribute('aria-expanded') !== 'true') {
      menu.hidden = true;
    }
  }

  if (botaoMenu && menu) {
    botaoMenu.addEventListener('click', function () {
      var aberto = botaoMenu.getAttribute('aria-expanded') === 'true';
      botaoMenu.setAttribute('aria-expanded', String(!aberto));
      menu.hidden = aberto;
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && window.innerWidth <= 800) {
        botaoMenu.setAttribute('aria-expanded', 'false');
        menu.hidden = true;
      }
    });
    window.addEventListener('resize', ajustarMenu);
    ajustarMenu();
  }

  /* ---- Painéis expansíveis (caminhos e ferramentas) ---- */
  function ligarPaineis(seletor) {
    var botoes = Array.prototype.slice.call(document.querySelectorAll(seletor));
    if (!botoes.length) return;

    botoes.forEach(function (botao) {
      botao.addEventListener('click', function () {
        var alvo = document.getElementById(botao.dataset.painel);
        if (!alvo) return;
        var jaAberto = botao.getAttribute('aria-expanded') === 'true';

        botoes.forEach(function (outro) {
          outro.setAttribute('aria-expanded', 'false');
          var painel = document.getElementById(outro.dataset.painel);
          if (painel) painel.hidden = true;
        });

        if (!jaAberto) {
          botao.setAttribute('aria-expanded', 'true');
          alvo.hidden = false;
        }
      });
    });
  }

  ligarPaineis('.caminho');
  ligarPaineis('.ferramenta');

  /* ---- Filtros da biblioteca ---- */
  var filtros = Array.prototype.slice.call(document.querySelectorAll('.filtro'));
  var cartoes = Array.prototype.slice.call(document.querySelectorAll('[data-temas]'));
  var vazio = document.querySelector('.vazio');

  if (filtros.length && cartoes.length) {
    filtros.forEach(function (filtro) {
      filtro.addEventListener('click', function () {
        var tema = filtro.dataset.tema;
        filtros.forEach(function (f) {
          f.setAttribute('aria-pressed', String(f === filtro));
        });

        var visiveis = 0;
        cartoes.forEach(function (cartao) {
          var mostra = tema === 'todos' || cartao.dataset.temas.split(' ').indexOf(tema) !== -1;
          cartao.hidden = !mostra;
          if (mostra) visiveis++;
        });
        if (vazio) vazio.hidden = visiveis > 0;
      });
    });
  }
})();

/* ---- Formulário de pedido de contacto ----
   Compõe uma mensagem de correio no programa da própria pessoa.
   Nenhum dado é transmitido a serviços de terceiros.            */
(function () {
  'use strict';
  var f = document.getElementById('pedido');
  if (!f) return;

  var DESTINO = 'geral@ricardinacorreia.pt';

  f.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!f.reportValidity()) return;

    var v = function (id) { return (document.getElementById(id).value || '').trim(); };
    var assunto = v('assunto');
    var linhas = [
      'Nome: ' + v('nome'),
      'Correio eletrónico: ' + v('mail')
    ];
    if (v('tel')) linhas.push('Telefone: ' + v('tel'));
    linhas.push('', 'Mensagem:', v('msg'), '',
                '—', 'Enviado através do formulário de ricardinacorreia.pt');

    window.location.href = 'mailto:' + DESTINO
      + '?subject=' + encodeURIComponent('Pedido de contacto — ' + assunto)
      + '&body=' + encodeURIComponent(linhas.join('\n'));
  });
})();

/* ---------- Ampliar diagramas ---------- */
(function () {
  var botoes = document.querySelectorAll('.figura__ampliar');
  if (!botoes.length) return;

  var lupa = document.createElement('div');
  lupa.className = 'lupa';
  lupa.setAttribute('role', 'dialog');
  lupa.setAttribute('aria-modal', 'true');
  lupa.setAttribute('aria-label', 'Diagrama em tamanho grande');
  lupa.innerHTML = '<div class="lupa__interior">' +
    '<button class="lupa__fechar" type="button">Fechar</button>' +
    '<img alt=""></div>';
  document.body.appendChild(lupa);

  var img = lupa.querySelector('img');
  var fechar = lupa.querySelector('.lupa__fechar');
  var origem = null;

  function abrir(botao) {
    origem = botao;
    var fig = botao.closest('.figura');
    var alvo = fig ? fig.querySelector('img') : null;
    img.src = botao.getAttribute('data-imagem');
    img.alt = alvo ? alvo.getAttribute('alt') : '';
    lupa.setAttribute('data-aberta', '');
    document.body.setAttribute('data-lupa', '');
    fechar.focus();
  }

  function encerrar() {
    lupa.removeAttribute('data-aberta');
    document.body.removeAttribute('data-lupa');
    img.removeAttribute('src');
    if (origem) { origem.focus(); origem = null; }
  }

  Array.prototype.forEach.call(botoes, function (b) {
    b.addEventListener('click', function () { abrir(b); });
  });
  fechar.addEventListener('click', encerrar);
  lupa.addEventListener('click', function (e) {
    if (e.target === lupa || e.target.classList.contains('lupa__interior')) encerrar();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lupa.hasAttribute('data-aberta')) encerrar();
  });
})();
