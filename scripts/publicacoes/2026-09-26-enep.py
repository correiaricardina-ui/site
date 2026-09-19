# -*- coding: utf-8 -*-
"""26 de setembro — anúncio do workshop no ENEP, depois da tertúlia."""

DATA = '2026-09-26'
RESUMO = 'Anuncia o workshop no ENEP e passa a tertúlia a evento passado'

CARTAO_FORMACAO = '''
      <article class="evento-cartao">
        <div class="evento-cartao__imagem" style="background-image:url(assets/img/evento-enep.webp); background-size:contain; background-repeat:no-repeat; background-position:center; background-color:#F4F1DD" role="img" aria-label="32.º Encontro Nacional de Estudantes de Psicologia — Entre o Ruído e o Diálogo"></div>
        <div class="evento-cartao__corpo">
          <span class="evento-cartao__data" style="color:var(--agua)">Próximo · 3 de outubro de 2026</span>
          <h3>Neuropsicologia do Desenvolvimento Saudável do Bebé</h3>
          <p class="nota">Workshop no 32.º Encontro Nacional de Estudantes de Psicologia, organizado pela ANEP, em Lisboa. Dirigido a estudantes de psicologia, cruza investigação recente com prática clínica e inclui uma dinâmica de observação ao vivo. Parte da pergunta que a investigação das últimas décadas responde: o que é que o bebé realmente precisa, e o que isso significa para quem intervém. O tema do encontro deste ano é <em>Entre o Ruído e o Diálogo — Os Fragmentos do Encontro Humano</em>.</p>
        </div>
      </article>
'''

CARTAO_INICIAL = '''<a class="novidade novidade--ocre" href="formacao.html">
        <svg class="icone" aria-hidden="true"><use href="#i-users"/></svg>
        <span class="novidade__marca">Próximo encontro · 3 de outubro</span>
        <h3>Neuropsicologia do Desenvolvimento do Bebé</h3>
        <p class="nota">Workshop no 32.º Encontro Nacional de Estudantes de Psicologia, em Lisboa. Sobre reciprocidade e desenvolvimento precoce.</p>
      </a>'''


def aplicar(inserir, substituir, ler, escrever):
    mexidos = []

    # 1 · o cartão do ENEP entra antes do primeiro cartão de evento
    mexidos.append(inserir(
        'formacao.html',
        '<p class="lede" style="margin-bottom:34px">Jornadas, tertúlias, ações de formação e sessões abertas a famílias e profissionais. Os encontros passados ficam registados.</p>\n\n    <div class="grelha">',
        CARTAO_FORMACAO))

    # 2 · a tertúlia deixa de ser o próximo evento
    mexidos.append(substituir(
        'formacao.html',
        '<span class="evento-cartao__data" style="color:var(--agua)">Próximo · 24 de setembro de 2026</span>',
        '<span class="evento-cartao__data">24 de setembro de 2026</span>'))

    # 3 · cartão «Próximo encontro» da página inicial
    t = ler('index.html')
    i = t.find('<span class="novidade__marca">Próximo encontro')
    if i == -1:
        raise SystemExit('ABORTADO: não encontrei o cartão «Próximo encontro» na index.html')
    inicio = t.rfind('<a class="novidade', 0, i)
    fim = t.find('</a>', i) + len('</a>')
    if inicio == -1 or fim <= inicio:
        raise SystemExit('ABORTADO: não consegui delimitar o cartão na index.html')
    escrever('index.html', t[:inicio] + CARTAO_INICIAL + t[fim:], minimo=len(t) - 400)
    mexidos.append('index.html')

    return mexidos
