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
      legenda: 'Os três critérios que substituem a pergunta sobre gravidade',
      svg: [
        '<svg viewBox="0 0 460 250" role="img" aria-label="Diagrama dos três critérios que substituem a pergunta sobre gravidade: duração, interferência e o que já se tentou">',
        '<rect x="88" y="20" width="284" height="40" rx="10" fill="#FDF6F8" stroke="#E0B4C4" stroke-width="0.5"/>',
        '<text class="dv-txt-p" x="230" y="45" text-anchor="middle" fill="#993556">«Será que já é grave o suficiente?»</text>',
        '<text class="dv-txt-c" x="230" y="76" text-anchor="middle">não tem resposta possível</text>',
        '<path d="M230 86 L 230 104" stroke="#9FB6D0" stroke-width="1"/>',
        '<path d="M224 98 L 230 105 L 236 98" fill="none" stroke="#9FB6D0" stroke-width="1"/>',
        '<rect x="14" y="116" width="136" height="76" rx="10" fill="#E1F5F1" stroke="#12A594" stroke-width="0.5"/>',
        '<text class="dv-txt-p" x="82" y="142" text-anchor="middle" fill="#0F6E56">Duração</text>',
        '<text class="dv-txt" x="82" y="162" text-anchor="middle" fill="#0F6E56">Há quanto tempo</text>',
        '<text class="dv-txt" x="82" y="177" text-anchor="middle" fill="#0F6E56">dura?</text>',
        '<rect x="162" y="116" width="136" height="76" rx="10" fill="#E1F5F1" stroke="#12A594" stroke-width="0.5"/>',
        '<text class="dv-txt-p" x="230" y="142" text-anchor="middle" fill="#0F6E56">Interferência</text>',
        '<text class="dv-txt" x="230" y="162" text-anchor="middle" fill="#0F6E56">O que é que isto</text>',
        '<text class="dv-txt" x="230" y="177" text-anchor="middle" fill="#0F6E56">o impede de fazer?</text>',
        '<rect x="310" y="116" width="136" height="76" rx="10" fill="#E1F5F1" stroke="#12A594" stroke-width="0.5"/>',
        '<text class="dv-txt-p" x="378" y="142" text-anchor="middle" fill="#0F6E56">O que se tentou</text>',
        '<text class="dv-txt" x="378" y="162" text-anchor="middle" fill="#0F6E56">Deixou de</text>',
        '<text class="dv-txt" x="378" y="177" text-anchor="middle" fill="#0F6E56">resultar?</text>',
        '<text class="dv-txt-c" x="230" y="222" text-anchor="middle">Três perguntas com resposta — e nenhuma exige saber nomear o problema</text>',
        '</svg>'
      ].join('')
    }
  ];

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
