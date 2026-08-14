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

/* ---------- Formulário de contacto (Tally, carregado ao clique) ----------
   O formulário está alojado na Tally. Nada é pedido a servidores externos
   enquanto a pessoa não carregar no botão — só nesse momento o endereço IP
   de quem visita é transmitido. Quem abrir a página e não abrir o
   formulário não estabelece qualquer ligação a terceiros.

   PARA LIGAR: substituir ID_DO_FORMULARIO pelo identificador do formulário
   publicado no Tally. Encontra-se no fim do endereço do formulário:
   https://tally.so/r/XXXXXXX  ->  o identificador é XXXXXXX              */
(function () {
  'use strict';

  var FORMULARIO = 'ID_DO_FORMULARIO';

  var caixa = document.getElementById('tally');
  if (!caixa) return;
  var botao = caixa.querySelector('.tally__abrir');
  if (!botao) return;

  /* Salvaguarda: por ligar, o botão não finge funcionar. */
  if (FORMULARIO === 'ID_DO_FORMULARIO') {
    botao.disabled = true;
    botao.textContent = 'Formulário por ativar';
    return;
  }

  botao.addEventListener('click', function () {
    caixa.innerHTML = '';
    caixa.classList.add('tally--aberto');

    var quadro = document.createElement('iframe');
    quadro.className = 'tally__quadro';
    quadro.src = 'https://tally.so/embed/' + FORMULARIO +
                 '?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1';
    quadro.title = 'Formulário de pedido de contacto';
    quadro.setAttribute('frameborder', '0');
    quadro.setAttribute('marginheight', '0');
    quadro.setAttribute('marginwidth', '0');
    caixa.appendChild(quadro);

    /* Só agora se carrega o script de ajuste de altura da Tally. */
    var s = document.createElement('script');
    s.src = 'https://tally.so/widgets/embed.js';
    document.body.appendChild(s);
  });
})();

/* ---------- Ampliar diagramas ---------- */
(function () {
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

  document.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('.figura__ampliar') : null;
    if (b) abrir(b);
  });
  fechar.addEventListener('click', encerrar);
  lupa.addEventListener('click', function (e) {
    if (e.target === lupa || e.target.classList.contains('lupa__interior')) encerrar();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lupa.hasAttribute('data-aberta')) encerrar();
  });
})();
