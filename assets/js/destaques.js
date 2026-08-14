/* Ricardina Correia — destaque rotativo da página inicial
   Cada artigo tem uma ilustração própria. A rotação é diária: dentro do mesmo
   dia todos veem o mesmo destaque, e a cada dia muda. Assim quem regressa
   encontra novidade, sem que a página mude a meio de uma partilha. */

(function () {
  'use strict';

  var destaques = [
    {
      etiqueta: 'Em destaque · Avaliação',
      titulo: '«Será que já é caso para consulta?»',
      resumo: 'O critério não é a gravidade — é há quanto tempo dura, quanto interfere, e se o que já se fazia deixou de resultar.',
      ligacao: 'artigos/porque-procurar-consulta.html',
      legenda: 'Os três critérios, e a leitura que decide tudo',
      svg: '<img src="assets/img/destaque-criterios.webp" alt="Os três critérios que substituem a pergunta sobre gravidade: duração, interferência e o que já se tentou" class="destaque__imagem" width="881" height="1786">'
    }
  ];

  /* ═══════════════════════════════════════════════════════════════
     ARTIGOS POR PUBLICAR — repor um por semana, ao sábado.
     Ao publicar, mover o bloco respetivo para dentro do array acima
     e fazer as restantes alterações do ponto 18 do LEIA-ME.
     ═══════════════════════════════════════════════════════════════

  // ── 22 ago ──
  {
        etiqueta: 'Em destaque · Rotinas',
        titulo: 'Retomar o sono antes do regresso às aulas',
        resumo: 'O horário ajusta-se em duas semanas. O que costuma demorar mais é o que acontece entre as pessoas na hora de deitar.',
        ligacao: 'artigos/sono-regresso-as-aulas.html',
        legenda: 'O que se resolve com método, e o que não se resolve',
        svg: '<img src="assets/img/destaque-sono.webp" alt="Diagrama do ajuste gradual do horário de deitar e do ciclo que se instala entre a criança e os adultos" class="destaque__imagem" width="1000" height="1500">'
      }

  // ── 29 ago ──
  {
        etiqueta: 'Em destaque · Avaliação',
        titulo: 'Preparar a ida à consulta de psicologia',
        resumo: 'A primeira consulta é só com os pais, e há razões clínicas para isso. É nela que se define o que vai ser avaliado.',
        ligacao: 'artigos/preparar-consulta-psicologia.html',
        legenda: 'O que organizar antes de vir',
        svg: '<img src="assets/img/destaque-preparar.webp" alt="Diagrama das razões pelas quais a primeira consulta é só com os pais e dos três eixos a organizar antes de vir" class="destaque__imagem" width="1000" height="1860">'
      }

  // ── 5 set ──
  {
        etiqueta: 'Em destaque · Avaliação',
        titulo: 'A devolução dos resultados e como ler um relatório',
        resumo: 'A convergência entre as fontes é o que sustenta cada conclusão — e é por isso que um relatório não se lê sozinho.',
        ligacao: 'artigos/ler-relatorio-avaliacao.html',
        legenda: 'De onde vêm as conclusões, e como se leem',
        svg: '<img src="assets/img/destaque-relatorio.webp" alt="Diagrama das três origens que convergem num relatório e dos dois erros de leitura mais comuns" class="destaque__imagem" width="1024" height="1536">'
      }

  // ── 12 set ──
  {
        etiqueta: 'Em destaque · Rotinas',
        titulo: 'Começar o ano letivo: organizar-se não é feitio',
        resumo: 'É um conjunto de competências que se desenvolve, e que falha por áreas. Identificar qual muda o que se faz.',
        ligacao: 'artigos/organizar-se-ano-letivo.html',
        legenda: 'Quatro áreas que falham separadamente',
        svg: '<img src="assets/img/destaque-organizar.webp" alt="Diagrama das quatro áreas da organização escolar e do que ajuda em cada uma" class="destaque__imagem" width="911" height="1726">'
      }

  // ── 19 set ──
  {
        etiqueta: 'Em destaque · PHDA',
        titulo: '«Ele consegue quando quer»',
        resumo: 'Não é uma dificuldade em saber o que fazer. É uma dificuldade em fazer aquilo que se sabe — e isso muda o que ajuda.',
        ligacao: 'artigos/phda-consegue-quando-quer.html',
        legenda: 'A mesma criança, em condições opostas',
        svg: '<img src="assets/img/destaque-phda.webp" alt="Diagrama das condições em que o desempenho melhora e em que piora, e do que daí decorre para a intervenção" class="destaque__imagem" width="1024" height="1536">'
      }

  // ── 26 set ──
  {
        etiqueta: 'Em destaque · Emoções',
        titulo: 'Correu tudo bem na escola. E às cinco da tarde desaba.',
        resumo: 'Manter-se durante o dia inteiro exige um esforço que tem limite. Quando chega ao sítio onde se sente segura, o esforço para.',
        ligacao: 'artigos/ansiedade-inicio-das-aulas.html',
        legenda: 'O esforço de contenção tem limite',
        svg: '<img src="assets/img/destaque-desaba.webp" alt="Diagrama da capacidade de autorregulação a esgotar-se ao longo do dia e do ciclo do evitamento" class="destaque__imagem" width="941" height="1672">'
      }

  // ── 3 out ──
  {
        etiqueta: 'Em destaque · Emoções',
        titulo: 'E se ele não se adaptar?',
        resumo: 'Nas mudanças de ciclo, quem passa pior noite é frequentemente o adulto. E isso tem efeitos que vale a pena conhecer.',
        ligacao: 'artigos/ansiedade-dos-pais-transicoes.html',
        legenda: 'A acomodação familiar, e porque se desfaz',
        svg: '<img src="assets/img/destaque-pais.webp" alt="Diagrama da acomodação familiar, do mecanismo que a mantém e da combinação que a evidência aponta" class="destaque__imagem" width="921" height="1707">'
      }

  // ── 10 out ──
  {
        etiqueta: 'Em destaque · Escola',
        titulo: 'A reunião na escola: preparar antes de entrar',
        resumo: 'Não é sobre quem tem razão — é sobre o que se combina fazer a seguir. E o que a determina é a preparação.',
        ligacao: 'artigos/reuniao-na-escola.html',
        legenda: 'O que levar, e o que fixar antes de sair',
        svg: '<img src="assets/img/destaque-reuniao.webp" alt="Diagrama do que cada lado vê, do que levar à reunião e do que fixar por escrito antes de sair" class="destaque__imagem" width="922" height="1706">'
      }

  // ── 17 out ──
  {
        etiqueta: 'Em destaque · Rotinas',
        titulo: 'Manhãs difíceis: desmontar a rotina em passos',
        resumo: 'Quando a manhã corre mal todos os dias, o problema quase nunca está na motivação. Está na sequência.',
        ligacao: 'artigos/manhas-dificeis.html',
        legenda: 'Uma manhã não é uma tarefa. São sete.',
        svg: '<img src="assets/img/destaque-manhas.webp" alt="Diagrama da cadeia dos sete passos da manhã e do ciclo que se instala entre a criança e o adulto" class="destaque__imagem" width="914" height="1721">'
      }

  ═══════════════════════════════════════════════════════════════ */


  // Constrói a série de pontos do gráfico do sono
  function serieSono() {
    var horas = [0, 23.75, 23.5, 23.25, 23, 22.75, 22.5, 22.25, 22, 21.75, 21.5, 21.25, 21, 21];
    var partes = [], caminho = [];
    for (var i = 0; i < horas.length; i++) {
      var x = 68 + i * 28;
      var h = horas[i] === 0 ? 24 : horas[i];
      var y = 38 + (24 - h) / 3 * 158;
      caminho.push((i === 0 ? 'M' : 'L') + x + ' ' + y);
      partes.push('<circle class="dv-ponto" cx="' + x + '" cy="' + y + '" r="3.5"/>');
    }
    return '<path d="' + caminho.join(' ') + '" fill="none" stroke="#7B5BD6" stroke-width="1.6" stroke-linejoin="round"/>' + partes.join('');
  }

  var visual = document.getElementById('destaque-visual');
  if (!visual) return;

  // Rotação diária, estável dentro do mesmo dia
  var dias = Math.floor(Date.now() / 86400000);
  var d = destaques[dias % destaques.length];

  visual.innerHTML = d.svg +
    '<p class="nota" style="font-size:12.5px; text-align:center; margin:14px 0 0">' + d.legenda + '</p>';
  visual.style.flexDirection = 'column';

  document.getElementById('destaque-etiqueta').textContent = d.etiqueta;
  document.getElementById('destaque-titulo').textContent = d.titulo;
  document.getElementById('destaque-resumo').textContent = d.resumo;
  document.getElementById('destaque-ligacao').setAttribute('href', d.ligacao);
})();
