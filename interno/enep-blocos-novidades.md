# ENEP 2026 — blocos a colar

Publicar **depois da tertúlia**, a 26 ou 27 de setembro, quando o cartão
*Próximo encontro* da página inicial ficar livre.

Vão aqui como blocos e não como ficheiros inteiros, por uma razão: até lá, a
`index.html` terá mudado três vezes com a publicação dos artigos de 12, 19 e 26
de setembro, e a `formacao.html` terá mudado quando a tertúlia passar a evento
passado. Entregar os ficheiros como os tenho hoje reverteria esse trabalho.

---

## 1 · `formacao.html` — cartão do encontro

Colar **antes** do cartão da tertúlia, para que o próximo fique primeiro. A ordem
da secção é manual: o próximo em cima, os passados a seguir, do mais recente para
o mais antigo.

```html
<article class="evento-cartao">
  <div class="evento-cartao__imagem" data-vazio="Fotografias em breve"></div>
  <div class="evento-cartao__corpo">
    <span class="evento-cartao__data" style="color:var(--agua)">Próximo · 3 de outubro de 2026</span>
    <h3>Neuropsicologia do Desenvolvimento Saudável do Bebé</h3>
    <p class="nota">Workshop no 32.º Encontro Nacional de Estudantes de Psicologia, organizado pela ANEP, em Lisboa. Dirigido a estudantes de psicologia, cruza investigação recente com prática clínica e inclui uma dinâmica de observação ao vivo. Parte da pergunta que a investigação das últimas décadas responde: o que é que o bebé realmente precisa, e o que isso significa para quem intervém. O tema do encontro deste ano é <em>Entre o ruído e o diálogo: fragmentos do encontro humano</em>.</p>
  </div>
</article>
```

**Ao mesmo tempo, no cartão da tertúlia:** retirar «Próximo · » e o
`style="color:var(--agua)"`, que passam ao encontro seguinte.

---

## 2 · `index.html` — cartão *Próximo encontro*

Substituir o cartão da tertúlia na secção *Novidades*. É a secção manual da
página inicial, e é o único sítio dela que precisa de manutenção regular.

```html
<a class="novidade novidade--ocre" href="formacao.html">
  <svg class="icone" aria-hidden="true"><use href="#i-users"/></svg>
  <span class="novidade__marca">Próximo encontro · 3 de outubro</span>
  <h3>Neuropsicologia do Desenvolvimento do Bebé</h3>
  <p class="nota">Workshop no 32.º Encontro Nacional de Estudantes de Psicologia, em Lisboa. Sobre reciprocidade e desenvolvimento precoce.</p>
</a>
```

---

## 3 · Instagram — nota de anúncio

Uma imagem só, no sistema de encontros: fundo `#FDFBF8`, acento ocre, rótulo
ENCONTROS. Faço quando disser.

Legenda:

> No dia 3 de outubro estarei no ENEP, em Lisboa.
>
> O workshop que vou dinamizar chama-se *Neuropsicologia do Desenvolvimento
> Saudável do Bebé*, e a pergunta que o atravessa é esta: o que é que a
> investigação das últimas décadas sabe sobre o que o bebé realmente precisa — e
> o que é que isso significa para quem intervém?
>
> O tema do encontro deste ano é «Entre o ruído e o diálogo». É, literalmente, o
> mecanismo que a investigação identifica como mais determinante no
> desenvolvimento precoce.

---

## O que fica por confirmar

- **Hora e sala** do workshop dentro do programa do ENEP. Não constam da nota. Se
  souber, entram no cartão da `formacao.html`.
- **Fotografia do evento.** O cartão sai com «Fotografias em breve». Depois do
  dia 3, se houver imagem, aplicam-se os critérios de sempre: nada de
  participantes reconhecíveis, e nunca capturas de ecrã com nomes.
- **Ordem de publicação.** O cartão do encontro sai a 26 ou 27 de setembro; o
  artigo sai a 2 de outubro. Entre um e outro, quem chegar pela página inicial vê
  o encontro anunciado sem ter ainda o texto — o que está certo, porque o texto é
  para depois de o tema estar lançado.
