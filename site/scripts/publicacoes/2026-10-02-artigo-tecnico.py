# -*- coding: utf-8 -*-
"""2 de outubro — publicação do artigo técnico sobre reciprocidade."""

DATA = '2026-10-02'
RESUMO = 'Publica o artigo técnico «Não é mais estimulação. É mais presença.»'

FILTRO = '\n      <button class="filtro" data-tema="tecnico" aria-pressed="false">Artigo técnico</button>'

CARTAO = '''
      <a class="artigo-cartao" href="artigos/reciprocidade-desenvolvimento-bebe.html" data-temas="tecnico">
        <span class="etiqueta etiqueta--tecnico">Artigo técnico</span>
        <h3>Não é mais estimulação. É mais presença.</h3>
        <p class="nota">O que prediz o desenvolvimento não é a quantidade de estimulação. É a reciprocidade — e isso muda o que se pergunta na anamnese.</p>
        <span class="artigo-cartao__meta">7 min de leitura</span>
      </a>
'''

LINHA_SITEMAP = ('  <url><loc>https://ricardinacorreia.pt/artigos/'
                 'reciprocidade-desenvolvimento-bebe.html</loc><priority>0.8</priority></url>\n')


def aplicar(inserir, substituir, ler, escrever):
    mexidos = []

    # 1 · filtro novo, a seguir ao último filtro existente
    t = ler('biblioteca.html')
    if 'data-tema="tecnico"' in t:
        raise SystemExit('ABORTADO: o filtro técnico já existe na biblioteca.')
    fim = t.rfind('</button>', 0, t.find('</div>', t.find('class="filtros"')))
    if fim == -1:
        raise SystemExit('ABORTADO: não encontrei a barra de filtros da biblioteca.')
    fim += len('</button>')
    t = t[:fim] + FILTRO + t[fim:]

    # 2 · cartão do artigo, antes do cartão «Em breve» se existir,
    #     senão no fim da grelha
    marca = '<div class="artigo-cartao artigo-cartao--espera"'
    if marca in t:
        pos = t.find(marca)
        pos = t.rfind('\n', 0, pos)
    else:
        pos = t.rfind('</a>', 0, t.find('<p class="vazio"'))
        if pos == -1:
            raise SystemExit('ABORTADO: não encontrei o fim da grelha da biblioteca.')
        pos += len('</a>')
    t = t[:pos] + CARTAO + t[pos:]
    escrever('biblioteca.html', t, minimo=len(ler('biblioteca.html')))
    mexidos.append('biblioteca.html')

    # 3 · sitemap
    s = ler('sitemap.xml')
    if LINHA_SITEMAP in s:
        raise SystemExit('ABORTADO: o artigo já consta do sitemap.')
    escrever('sitemap.xml', s.replace('</urlset>', LINHA_SITEMAP + '</urlset>'), minimo=len(s))
    mexidos.append('sitemap.xml')

    return mexidos
