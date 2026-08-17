# Site — Ricardina Correia

Site estático, sem dependências externas. Não faz um único pedido a servidores de
terceiros: fontes, ícones e imagens são todos servidos a partir do próprio domínio.

---

## 1. Publicar (GitHub Pages)

1. Em github.com, criar um repositório **público** com o nome `site`.
2. No GitHub Desktop: *File → Clone repository*, escolher o `site`.
3. Copiar o **conteúdo** desta pasta para dentro da pasta clonada — o `index.html`
   tem de ficar na raiz do repositório, não dentro de outra pasta.
4. No Desktop: escrever um resumo, *Commit to main*, depois *Push origin*.
5. No github.com, no repositório: *Settings → Pages → Source: Deploy from a branch
   → Branch: main → / (root) → Save*.

Fica em `utilizador.github.io/site` ao fim de um ou dois minutos.

Quando o domínio estiver registado: *Settings → Pages → Custom domain*.

Todos os caminhos do site são relativos, pelo que funciona tanto em subdiretório
como na raiz de um domínio próprio. Não há passo de compilação.

**Alterações:** editar o ficheiro no computador, o GitHub Desktop deteta a
alteração; escrever um resumo, *Commit to main*, *Push origin*. Publicado em
cerca de um minuto.

Nota: o ficheiro `_headers` é específico do Cloudflare e é ignorado pelo GitHub
Pages. Não faz mal mantê-lo, caso venha a mudar de alojamento.

---

## 2. Antes de publicar — o que falta preencher

| Onde | O quê |
|---|---|
| Rodapé de todas as páginas | Número da cédula profissional da OPP |
| `sobre.html` | Confirmar datas e designações do percurso |
| `privacidade.html` | Data da última atualização |
| `index.html` (secção *Onde me encontrar*) | Designação do CNS, após autorização |
| `sitemap.xml` e `robots.txt` | Trocar o domínio, se for diferente |

O endereço `geral@ricardinacorreia.pt` aparece no rodapé e na política de
privacidade. Convém criá-lo, ou substituí-lo pelo endereço a usar.

---

## 3. Escrever um artigo novo

1. Copiar `artigos/_modelo-artigo.html` e dar-lhe um nome descritivo em minúsculas
   e com hífenes — por exemplo `artigos/manhas-dificeis.html`. Esse nome passa a
   fazer parte do endereço, por isso convém ser claro.
2. Editar no ficheiro: o `<title>`, a `<meta name="description">`, a etiqueta do
   tema, o `<h1>`, o texto de entrada (`lede`), o tempo de leitura e o corpo.
3. As etiquetas de tema disponíveis são `etiqueta--rosa`, `etiqueta--agua`,
   `etiqueta--ocre` e `etiqueta--roxo`.
4. Acrescentar um cartão em `biblioteca.html`, copiando um dos existentes.
   O atributo `data-temas` controla os filtros e aceita vários temas separados
   por espaço (`data-temas="phda escola"`).
5. Acrescentar a página em `sitemap.xml`.

Elementos disponíveis no corpo do artigo: `<h2>` para subtítulos, `<p>` para
parágrafos, `<blockquote><p>…</p></blockquote>` para caixas de destaque, e
`<strong>` para realces.

---

## 4. Newsletter

---

## 5. Estrutura dos ficheiros

```
index.html            Página inicial
biblioteca.html       Lista de artigos, com filtros por tema
sobre.html            Percurso e enquadramento profissional
privacidade.html      Política de privacidade (RGPD)
artigos/              Um ficheiro por artigo
  _modelo-artigo.html Modelo a copiar (o underscore indica que não é publicado)
assets/css/site.css   Todos os estilos, num só ficheiro
assets/js/site.js     Menu, painéis expansíveis e filtros
assets/fontes/        Source Serif 4 e Instrument Sans, alojadas localmente
assets/icones/        Sprite SVG com os dez ícones usados
assets/img/           Ilustração em quatro tamanhos
_headers              Cabeçalhos de segurança e de cache (Cloudflare)
robots.txt            Indexação
sitemap.xml           Mapa do site para motores de busca
```

---

## 6. Decisões técnicas, e porquê

**Fontes alojadas localmente.** Carregar tipos de letra a partir do Google
transmite o endereço IP de quem visita para servidores fora do controlo do
responsável pelo tratamento — matéria já decidida contra em tribunal alemão. Num
site de saúde na União Europeia, evitar essa transmissão é a opção prudente, e
tem a vantagem acessória de tornar o carregamento mais rápido.

**Ícones em SVG embutido.** A versão em fonte pesava 664 KB para dez símbolos.
O sprite embutido ocupa cerca de 2 KB.

**Sem sistema de gestão de conteúdos.** Um editor visual como o Decap exige um
gerador de site estático por baixo, o que acrescenta um passo de compilação e uma
camada de fragilidade. Para o ritmo de publicação previsto, copiar o modelo de
artigo é mais simples e não depende de nada. Se a frequência aumentar, essa
camada pode ser acrescentada depois sem refazer o desenho.

**Paleta e tipografia.** Azul-ardósia herdado da identidade já existente.
Source Serif 4 nos títulos, pela sobriedade sem frieza; Instrument Sans no
texto corrido, pela legibilidade em ecrãs pequenos.

---

## 7. Acrescentar fotografias aos eventos

Cada cartão da secção *Encontros* mostra "Fotografias em breve" enquanto não
tiver imagem. Para acrescentar uma:

1. Guardar a fotografia em `assets/img/`, com nome sem espaços nem acentos —
   por exemplo `tertulia-caldas-2026.webp`.
2. Em `index.html`, localizar o cartão e substituir

   ```html
   <div class="evento-cartao__imagem" data-vazio="Fotografias em breve"></div>
   ```

   por

   ```html
   <div class="evento-cartao__imagem" style="background-image:url('/assets/img/tertulia-caldas-2026.webp')"></div>
   ```

O recorte é automático (proporção 3:2, centrado). Convém usar imagens com pelo
menos 900 px de largura.

**Antes de publicar qualquer fotografia:** não incluir crianças, mesmo com
autorização dos pais; obter consentimento de adultos identificáveis, ou preferir
planos gerais de sala, imagens de costas e fotografias do cartaz do evento; e
confirmar a autoria quando a fotografia for do organizador.

Para acrescentar um evento novo, copiar um bloco `<article class="evento-cartao">`
inteiro e editar a data, o título e a descrição. Os eventos aparecem pela ordem
em que estão escritos no ficheiro — o mais recente primeiro.

---

## 8. Formulário de pedido de contacto

O formulário está alojado na **Tally** (tally.so), empresa com sede na Bélgica,
com os dados armazenados na União Europeia e ao abrigo de contrato de
subcontratação. Foi escolhida por isso: alternativas como o Formspree ou o
Google Forms alojam fora da UE, o que é evitável num site de saúde.

**A Tally não tem endpoint para formulários HTML próprios.** Não é possível
apontar um `<form>` para um endereço deles — o modelo é de incorporação, em
janela. Foi por isso que o formulário desenhado à mão deixou de existir.

### Carregamento ao clique

`contacto.html` tem uma caixa com uma nota e um botão. Só quando alguém carrega
no botão é que a janela da Tally é carregada — e é nesse momento que o endereço
IP de quem visita é transmitido. **Quem abrir a página e não abrir o formulário
não faz qualquer pedido a servidores de terceiros.**

Foi esta a forma encontrada de manter o princípio de zero pedidos externos com o
formulário na própria página, em vez de uma ligação para fora.

O código está em `assets/js/site.js`, na secção do formulário. **O identificador
do formulário está na constante `FORMULARIO`**, no início desse bloco: é o que
aparece no fim do endereço do formulário publicado — `https://tally.so/r/XXXXXXX`.

**Salvaguarda:** enquanto o identificador não estiver preenchido, o botão fica
desativado e diz «Formulário por ativar». Nunca finge funcionar.

### O que substituiu

Existia código de `mailto:` no `site.js` que **nunca chegou a funcionar**:
procurava `getElementById('pedido')` quando o formulário tinha `class="pedido"`
sem `id`, e lia campos com nomes de uma versão anterior. Carregar em «Enviar
pedido» fazia um POST para `#` e recarregava a página, dando a impressão de ter
enviado. Foi removido, tal como as regras `.campo` da folha de estilos, que
também não eram usadas por nenhuma página.

### Regras que não se alteram

O formulário **não pede nem deve permitir informação clínica**. O aviso no topo
da página existe por essa razão. Se um pedido chegar com informação dessa
natureza, apagá-la do serviço depois de responder.

Os tipos de pedido são configurados no próprio Tally. Ao acrescentar um, manter
a correspondência com as modalidades descritas em `supervisao.html`.

O identificador do formulário publicado é **`ODqq08`**, e está na constante
`FORMULARIO` do `site.js`.

### Conservação das submissões — é manual

**A eliminação automática é do plano Business**, a 79 €/mês. No plano gratuito as
submissões ficam guardadas até serem apagadas à mão.

A política de privacidade foi escrita em conformidade: declara que as submissões
são eliminadas logo que o pedido esteja respondido, e no máximo ao fim de 12
meses, **por eliminação manual**. Cumprir isso depende de apagar as submissões no
painel da Tally — `Submissions`, selecionar a linha, eliminar. Vale a pena rever
uma vez por ano, ao mesmo tempo que as ligações da página «Onde saber mais».

Se um dia se contratar o plano Business, ligar a retenção a 12 meses e atualizar
a política, que deixaria de precisar da menção à eliminação manual.

### O aviso por email

No plano gratuito, o aviso de nova submissão **vai sempre para o email da conta
Tally**, com assunto fixo e sem *reply-to* — o painel que os mostra é apenas
ilustrativo. Para responder a quem escreveu, copiar o endereço do corpo da
mensagem ou responder a partir do painel.

Consequência prática: para mudar o destinatário dos avisos, muda-se o email da
conta. É uma alteração, não duas.

### O DPA está celebrado

Não há nada a assinar. Pelos termos da Tally, ao criar a conta o utilizador
profissional aceita, em nome da empresa, o Acordo de Tratamento de Dados. O texto
está em `tally.so/help/data-processing-agreement` e convém guardar uma cópia em
PDF no dossiê de RGPD.

---

## 9. Páginas de supervisão e contacto

`supervisao.html` descreve as modalidades de supervisão e consultoria, as áreas
de trabalho e as condições de realização. É a página de referência para colegas.

`contacto.html` recebe pedidos de supervisão, consultoria, formação e convites.
O campo "tipo de pedido" permite triar sem ler o corpo da mensagem. O formulário
não se destina a marcação de consultas clínicas — essas decorrem no CNS e são
marcadas pelos canais da instituição.

---

## 10. Logótipos institucionais

Os logótipos do CNS Pediatria e do CAIDI estão colocados, com autorização das
respetivas instituições:

- **CNS Pediatria** — na caixa *Prática clínica*, secção "Onde me encontrar"
- **CAIDI** — no bloco de coordenação de formações, secção "Formação"

Os ficheiros estão em `assets/img/` (`logo-cns-pediatria.png`, `logo-caidi.png`)
e foram tratados: margens recortadas, fundo branco tornado transparente e largura
reduzida para a necessária. Existe ainda `logo-cns.png` — o logótipo
institucional do CNS, não utilizado por se ter preferido a marca da pediatria.

Para trocar um logótipo, substituir o ficheiro mantendo o nome. A altura é fixada
por CSS (`.marca-inst`), pelo que qualquer proporção se ajusta sozinha.

---

## 11. Materiais para imprimir

`materiais.html` lista os documentos PDF de acesso livre, filtráveis por tema.
Cada cartão mostra "Em preparação" enquanto não houver ficheiro.

Para publicar um material:

1. Guardar o PDF em `assets/materiais/` — nome sem espaços nem acentos,
   por exemplo `rotina-visual.pdf`.
2. Em `materiais.html`, substituir a linha do estado:

```html
<span class="material__estado">Em preparação</span>
```

por

```html
<a class="material__descarregar" href="assets/materiais/rotina-visual.pdf" download><svg class="icone" aria-hidden="true"><use href="#i-download"/></svg>Descarregar</a>
```

**Código QR:** os materiais impressos não incluem código QR. O acesso à página é
feito por código apresentado nos diapositivos das sessões, gerado à parte, a
apontar para `https://ricardinacorreia.pt/materiais.html`. Convém que o código
seja gerado em SVG, para não perder definição, e que aponte diretamente ao
endereço — sem encurtadores, que deixam de funcionar se o serviço fechar.

---

## 12. Ferramentas (aplicações)

`ferramentas.html` descreve cada aplicação: para quem se destina, objetivos,
conteúdos e modo de utilização. Não há descarregamento — as aplicações são
entregues em consulta.

Para acrescentar uma aplicação, copiar um bloco `<article class="app">` inteiro e
editar o ícone, o nome, o selo de estado e os quatro campos.

Ícones disponíveis no sprite: `i-star`, `i-moon`, `i-wind`, `i-heart`,
`i-users`, `i-school`, `i-file`, `i-download`, `i-lock`, `i-building-hospital`,
`i-device-laptop`, `i-menu-2`. Para acrescentar outro, é preciso juntá-lo ao
ficheiro `assets/icones/sprite.svg.html` em todas as páginas.

---

## 13. Destaque rotativo da página inicial

A secção de destaque mostra um artigo com uma ilustração própria — gráfico ou
diagrama, conforme o tema. A rotação é **diária**: dentro do mesmo dia todos veem
o mesmo destaque, e a cada dia muda. Escolheu-se assim, em vez de rotação a cada
visita, para que a página não mude a meio de uma partilha.

Os destaques estão em `assets/js/destaques.js`, num único array. Para acrescentar
um, copiar um bloco existente e editar:

- `etiqueta`, `titulo`, `resumo`, `ligacao` — o texto e o destino
- `legenda` — a linha por baixo da ilustração
- `svg` — a ilustração, em SVG, com `viewBox="0 0 460 250"`

As classes CSS já definidas para as ilustrações são `dv-eixo`, `dv-linha`,
`dv-txt`, `dv-txt-p`, `dv-txt-c` e `dv-ponto`. Convém usá-las em vez de cores
fixas, para as ilustrações acompanharem a paleta do site.

Cada novo artigo deve, sempre que possível, ter a sua ilustração aqui.

---

## 14. Ligação entre artigos e materiais

Sempre que exista um material que acompanhe um artigo, os dois devem ligar-se:

- No artigo, um bloco `<div class="recurso">` antes da nota final.
- Em `materiais.html`, uma linha a indicar o artigo que o material acompanha.

Está feito para os dois primeiros artigos e serve de modelo para os seguintes.

---

## 15. Materiais: versão Word e versão PDF

Cada material existe em dois formatos:

- **`.docx` em `materiais-editaveis/`** — a versão de trabalho, para rever e
  alterar antes de publicar. Não é publicada no site.
- **`.pdf` em `assets/materiais/`** — a versão publicada, ligada a partir de
  `materiais.html` e do artigo correspondente.

**Fluxo de publicação:** abrir o `.docx`, rever e alterar, exportar para PDF
(*Ficheiro → Guardar como → PDF*), substituir o ficheiro em `assets/materiais/`
mantendo o mesmo nome. As ligações continuam a funcionar sem qualquer alteração.

Todos os materiais partilháveis levam o logótipo no cabeçalho e o rodapé com o
endereço do site. Ao criar um material novo, manter esses dois elementos.

Ficheiros do logótipo em `assets/img/`: `logo-rc.png` (completo, para rodapés e
documentos), `simbolo-rc.png` (apenas o símbolo, usado no cabeçalho do site) e
`icone-32.png` / `icone-180.png` (ícone do separador do browser e do ecrã
inicial em telemóvel). Todos com fundo transparente.

A versão PDF gerada aqui usa as fontes do site (Source Serif 4 e Instrument Sans); a
versão Word usa Calibri, por ser universal e não depender de fontes instaladas.
Se preferir uniformizar, é possível instalar as fontes do site no computador e
alterá-las no Word.


---

## 16. Lista de materiais

Cada material existe em PDF (publicado em `assets/materiais/`) e em Word
(editável, em `materiais-editaveis/`). Todos com logótipo no cabeçalho.

| Material | Páginas | Artigo associado |
|---|---|---|
| Guião para a reunião na escola | 2 | A reunião na escola |
| Antes da reunião — para o próprio preencher | 1 | A reunião na escola |
| Registo de sono — três semanas | 2 | Retomar o sono |
| Preparar a primeira consulta | 2 | Preparar a ida à consulta |
| Depois da devolução | 2 | A devolução dos resultados |
| PHDA — o essencial | 2 | «Ele consegue quando quer» |
| Porque é que isto falhou da última vez | 2 | — |
| Como escolher um alvo | 2 | — |
| Antes de pedir avaliação (3 semanas) | 2 | Preparar a ida à consulta |
| Maturação cortical na PHDA — nota científica | 2 | — |

Os cinco últimos foram criados para a tertúlia sobre PHDA de 24 de setembro
de 2026.

**Quatro materiais continuam em preparação**, assinalados como tal na página:
quadro de rotina visual, termómetro das emoções, grelha de observação para
professores e planificador semanal de estudo.

---

## 17. Notas de manutenção

**Fontes.** O PDF e o Word usam a mesma tipografia (Carlito no PDF, Calibri no
Word — são metricamente compatíveis), pelo que um PDF exportado a partir do Word
fica igual ao PDF gerado de origem.

**Quebras de página no Word.** As tabelas e caixas têm `cantSplit`, que impede
que se dividam entre páginas. Ao acrescentar blocos novos, manter essa
propriedade — sem ela, as caixas partem-se a meio e ficam com linhas órfãs.

**Uma diferença entre formatos:** o gráfico da nota científica existe apenas no
PDF. Na versão Word, os mesmos valores aparecem em tabela, para se manterem
editáveis.

---

## 18. Publicação semanal — como publicar cada artigo

Os artigos saem **aos sábados**. Os ficheiros dos artigos já escritos estão todos
em `artigos/`, mas apenas os publicados estão ligados a partir de alguma página —
os restantes existem sem serem encontráveis.

**Antes de publicar**, verificar se a rubrica «CNS Pediatria responde» já tratou o
tema. Se sim, acrescentar o bloco de vídeo e confirmar que o texto não contradiz
as formulações da equipa — a regra de coerência está em `CALENDARIO-EDITORIAL.md`.

Para publicar o artigo da semana, quatro alterações:

1. **`biblioteca.html`** — converter o cartão *a publicar* num cartão real
   (mudar `<div class="artigo-cartao artigo-cartao--espera">` para
   `<a class="artigo-cartao" href="artigos/nome.html">`, fechar com `</a>`, e
   trocar «A publicar · data» pelo tempo de leitura). Acrescentar de seguida um
   novo cartão *a publicar* para o artigo seguinte, com a data.
2. **`index.html`** — a mesma operação nos dois cartões da secção *Da biblioteca*.
3. **`assets/js/destaques.js`** — **mover** o bloco do artigo do comentário para
   dentro do array `destaques`. Os blocos dos dez artigos estão já escritos, num
   comentário no fim do ficheiro, por ordem de publicação e com a data indicada.

   **Só devem estar no array os artigos já publicados.** Se lá estiverem os
   restantes, a página inicial passa a mostrar e a ligar artigos que ainda não
   saíram — e qualquer pessoa lhes acede.
4. **`sitemap.xml`** — acrescentar a linha do artigo.

**Filtros.** Só devem estar visíveis os temas com artigos publicados. À medida
que os artigos saem, acrescentar os filtros correspondentes em `biblioteca.html`.

**Materiais.** Cada material sai na mesma semana do artigo que acompanha. Os
blocos dos materiais ainda não publicados foram retirados de `materiais.html`,
mas os PDF estão todos em `assets/materiais/` — basta repor o bloco quando for
altura. Os cinco materiais de PHDA saem a 19 de setembro, antes da tertúlia
de 24.

O calendário completo, com datas e ordem, está em `CALENDARIO-EDITORIAL.md`.

---

## 19. Ligar vídeos do Instagram aos artigos

Quando um artigo tiver vídeo associado, usa-se um bloco `<div class="video">`,
colocado logo a seguir à linha de assinatura e antes da primeira secção — para
que quem prefere ver encontre a opção antes de decidir se lê.

**A ligação é sempre externa, nunca incorporada.** Incorporar publicações do
Instagram carrega scripts da Meta e transmite o endereço IP de quem visita, o que
contraria o princípio de zero pedidos externos que o site segue e o que a
política de privacidade declara. Uma ligação simples não tem esse efeito.

O artigo «Será que já é caso para consulta?» tem o bloco criado, com o endereço
por preencher. Em `artigos/porque-procurar-consulta.html`, substituir:

```html
href="URL_DO_VIDEO"
```

pelo endereço da publicação — algo do género
`https://www.instagram.com/reel/XXXXXXXXX/`. Retirar o que vier depois de `?`
no endereço copiado: esses parâmetros são códigos de rastreio de quem partilhou
e não devem constar de um site público.

Quando o vídeo for de conteúdo do CNS, manter a referência à equipa, como está.

---

## 20. Acrescentar eventos à secção «Encontros»

A secção reúne eventos futuros e passados. Os futuros levam a data a verde-água
com o prefixo «Próximo ·»; os passados levam a data simples. A ordem é manual —
o próximo primeiro, os passados a seguir, do mais recente para o mais antigo.
Quando um evento passa, retirar «Próximo ·» e a cor.

Para acrescentar, copiar um bloco `<article class="evento-cartao">` e editar a
data, o título e a descrição. A ligação ao Instagram, quando exista, vai numa
linha própria no fim, com `rel="noopener"`.

**Fotografias.** Guardar em `assets/img/`, em WebP, com proporção 3:2 e cerca de
900 px de largura. Substituir `data-vazio="Fotografias em breve"` por
`style="background-image:url(assets/img/nome.webp)"` e acrescentar `role="img"`
com `aria-label` a descrever a imagem.

**Antes de publicar qualquer fotografia**, os critérios mantêm-se: não incluir
crianças, mesmo com autorização dos pais; obter consentimento de adultos
identificáveis, ou preferir planos onde não sejam reconhecíveis; e confirmar a
autoria quando a fotografia for do organizador.

A fotografia da primeira *Conversa no Campus* foi escolhida por esse critério —
mostra apenas a oradora, sem público identificável. As restantes fotografias
dessa sessão incluem participantes de frente e colegas, e exigiriam consentimento
antes de qualquer utilização.

---

## 21. Referências bibliográficas — norma APA

Cada artigo termina com um bloco `<div class="referencias">`, com o título
«Referências» e uma lista em norma APA, 7.ª edição. A folha de estilos aplica
indentação pendente, como a norma exige.

Regras a seguir ao acrescentar:

- **Ordem alfabética** pelo apelido do primeiro autor. Não é a ordem em que
  aparecem no texto.
- **Só entram obras verificadas**, com autoria, ano, título, publicação e
  identificador. Formulações vagas do tipo «trabalhos de X sobre Y» não cumprem
  a norma e não devem ser usadas.
- O título da publicação vai em itálico, com `<em>`; o volume também.
- O DOI ou endereço vai no fim, sem ponto final.
- Quando uma afirmação assenta num corpo de literatura e não numa obra isolada,
  isso diz-se numa nota por baixo da lista, em vez de se inventar uma citação.

Legislação portuguesa segue a forma: «Decreto-Lei n.º 54/2018, de 6 de julho.
*Diário da República* n.º 129/2018, Série I. Presidência do Conselho de
Ministros.»

**Antes de publicar**, confirmar que cada referência corresponde a uma obra real
e que os elementos estão certos. Uma referência errada num texto assinado por
uma psicóloga custa mais do que a ausência dela.

---

## 22. Fichas das aplicações — que informação incluir

Cada aplicação tem uma ficha com **seis campos**, mais a idade em destaque junto
ao nome:

| Campo | O que dizer |
|---|---|
| **Idade** | Junto ao nome, em destaque. É o primeiro filtro de quem lê |
| **Para quem** | A situação clínica que a aplicação serve, não a idade — essa já está em destaque |
| **Objetivos** | O que se pretende que mude, não o que a aplicação faz |
| **Conteúdos** | O que a aplicação tem. Curto |
| **Como se usa** | As condições em que funciona. É aqui que está o valor clínico |
| **Quando não se usa** | As situações em que não serve, ou em que é preciso resolver outra coisa antes |
| **O que se pede à família** | O compromisso concreto — quanto tempo, com que frequência, por quem |

Os dois últimos campos são os que mais distinguem estas fichas de descrições de
produtos comerciais. **Dizer quando não se usa sinaliza critério clínico**, e
indicar o compromisso permite à família decidir antes de aceitar.

**O que não incluir:** capturas de ecrã, que convidam à comparação com aplicações
de loja; instruções de utilização, que pertencem à ficha em Word entregue em
consulta; e promessas de resultado, que são problemáticas do ponto de vista
deontológico.

**Ícones.** Ficheiros SVG em `assets/img/apps/`, um por aplicação disponível. As
aplicações em preparação não têm ícone.

**As fichas das aplicações em preparação têm apenas três coisas:** o nome, a idade
e uma linha a dizer a quem se destina, no mesmo registo das fichas completas —
«Para famílias em que…», «Para jovens que…». Reduzidas a 14 de agosto de 2026, por
decisão de Ricardina Correia: descrever em detalhe uma aplicação que ainda não
existe sugere um estado de desenvolvimento que não corresponde ao real.

Não levam resumo, «Para quem» nem «Objetivos». Esses campos entram quando a
aplicação passar a disponível e ganhar ficha completa.

O sistema visual das aplicações tem documento próprio, mantido no projeto das
ferramentas. As regras essenciais: quadrado branco, cantos a 22% da largura,
traço a cerca de 11%, símbolo legível a 60 píxeis e a ocupar cerca de dois terços
do quadrado. **O que distingue as aplicações é a silhueta, e só depois a cor** —
cada uma usa uma silhueta não circular e uma só cor, não repetida. As silhuetas
circulares e a policromia estão reservadas ao Pontos em Família. Formas pequenas
dentro do símbolo vão cheias, porque em contorno se fecham numa mancha ao
encolher. Vários ícones são desenhos à mão da autora, vetorizados — o traço
irregular é deliberado.

**A paleta é partilhada com o site**, o que não é coincidência: fundo `#F6F7FA`,
texto `#33465C`, secundário `#6E86A6`, contornos `#E2E7EF`, e os acentos magenta,
turquesa, laranja e roxo. O azul `#9FB6D0` está reservado à autoria em ambos.

**A tipografia é que não é partilhada, e é deliberado.** As aplicações usam uma
pilha arredondada (`Avenir Next`, `SF Pro Rounded`, `Nunito`); o site usa
Source Serif 4 nos títulos e Instrument Sans no corpo. São contextos distintos — uma aplicação
usada por uma criança e um site lido por adultos — e não devem ser uniformizados.

**Fichas que abrem.** Cada ferramenta disponível está num elemento `<details>`,
fechado por omissão, com nome, idade e resumo visíveis. Abre ao clicar. É um
elemento nativo do HTML — funciona sem JavaScript, e o browser dá-lhe teclado e
leitura por leitores de ecrã sem programação adicional.

**Um efeito a conhecer:** com as fichas fechadas, o texto que está dentro delas
não é encontrado pela pesquisa do browser, e nem sempre pelos motores de busca.
Se isso vier a importar — por exemplo, para que os critérios de não-utilização
sejam encontráveis —, a alternativa é abrir a primeira por omissão, ou manter
tudo aberto e ter apenas o índice.

**O índice no topo** é gerado à mão a partir dos identificadores das fichas. Ao
acrescentar uma ferramenta, acrescentar também a entrada correspondente.

**O que não figura na página:** as ferramentas previstas e ainda sem desenho, para
não sugerir mais aplicações do que as que existem. Os dois materiais de uso
exclusivo em sessão — *Vamos conversar sobre…?* e *Resolver conflitos sociais* —
aparecem separados no fim, precisamente por não serem entregues às famílias.

A página serve dois públicos ao mesmo tempo: famílias em acompanhamento que
querem relembrar como se usa, e quem ainda não é doente e retira daqui que o
acompanhamento é estruturado. Nenhum dos dois descarrega nada — é credibilidade,
não catálogo.

**Autoria das ilustrações.** As ilustrações das aplicações são de Júlia, filha de
Ricardina Correia. O crédito aparece no fim da página das ferramentas, na forma
«Ilustrações de Júlia, 10 anos» — primeiro nome e idade, sem apelido.

A formulação foi escolhida com cuidado e não deve ser alterada para nome
completo. Num site que já indica a localidade, a profissão e o apelido de
família, o nome completo mais a idade identificaria uma criança concreta, e essa
informação ficaria indexada sem que ela a tivesse escolhido. Segue o mesmo
princípio que impede a publicação de fotografias de crianças.

**A idade não se atualiza.** Não descreve quem Júlia é hoje, descreve quando o
trabalho foi feito — é informação sobre a obra, como uma data. Alterá-la mais
tarde falsearia o registo e sugeriria que as ilustrações são recentes.

---

## 23. Gerir a página no dia a dia

### O que é público e o que não é

O repositório é público. **Tudo o que estiver dentro da pasta `site` fica visível**
a quem souber procurar, mesmo que nenhuma página lhe faça ligação.

Por isso existe a pasta `_rascunhos/`, declarada no ficheiro `.gitignore`. O que
estiver lá dentro **fica apenas no computador** e nunca vai para o GitHub. É onde
devem viver os artigos em escrita e os que não devem ser publicados.

Está lá o artigo sobre medidas de suporte, que descreve um regime a ser revogado
e não deve ser acessível.

### Escrever um artigo novo

Trabalhar sempre dentro de `_rascunhos/`. O GitHub Desktop ignora essa pasta —
não aparece nada na lista de alterações, e não há risco de publicar por engano.

### Publicar

Quando o artigo estiver revisto:

1. Mover o ficheiro de `_rascunhos/` para `artigos/`
2. Fazer as cinco alterações descritas no ponto 18 — cartão na biblioteca, cartão
   na página inicial, destaque, sitemap, filtros
3. No GitHub Desktop, escrever um resumo (por exemplo «Publica o artigo sobre o
   sono») e clicar em **Commit to main**
4. Clicar em **Push origin**

Ao fim de um minuto está online. Não é preciso mais nada.

### Alterar qualquer coisa

Corrigir uma frase, mudar uma data, trocar uma imagem: editar o ficheiro no
computador, gravar, e no GitHub Desktop fazer commit e push. O mesmo gesto serve
para tudo.

### Voltar atrás

Cada commit é uma fotografia do site. Se alguma coisa correr mal, o separador
**History** no GitHub Desktop mostra tudo o que foi feito, e é possível reverter
um commit sem perder o resto. Nada se perde definitivamente.

### Quando é preciso ajuda

Alterações de conteúdo — texto, datas, cartões — fazem-se num editor de texto
simples. Alterações de estrutura ou de desenho é melhor pedir, para não partir
nada.

**Antes de publicar, correr sempre a verificação:** abrir o site localmente e
confirmar que nenhuma ligação está partida e que nenhum ficheiro falta. O
procedimento está descrito na skill do projeto.


---

## 24. A newsletter foi retirada

A página inicial tinha uma secção de subscrição de newsletter, retirada em agosto
de 2026. A decisão foi de Ricardina Correia, e as razões ficam registadas caso se
pondere voltar atrás:

- Zero subscritores e onze artigos por publicar — a carta não acrescentava nada
  que o site não fizesse
- Uma carta mensal é um compromisso adicional, a somar ao ritmo semanal
- Gerir subscritores traz obrigações próprias: consentimento registado,
  cancelamento em cada mensagem, lista alojada em serviço conforme

As referências à newsletter foram retiradas da política de privacidade, que a
descrevia como existente.

Se vier a fazer sentido, a decisão reavalia-se quando o site tiver tráfego
próprio — provavelmente em janeiro, quando também se decidir sobre o Instagram.


---

## 25. Estrutura de páginas e desenho — agosto de 2026

### As páginas

| Página | Conteúdo |
|---|---|
| `index.html` | Entrada, artigo em destaque, novidades, biblioteca em resumo |
| `biblioteca.html` | Todos os artigos, com filtros por tema |
| `ferramentas.html` | As aplicações, em fichas que abrem |
| `materiais.html` | Materiais para imprimir |
| `formacao.html` | Formações e encontros, passados e futuros |
| `onde-me-encontrar.html` | Os três contextos: CNS, supervisão, Cheque Cuida-te |
| `sobre.html` | Percurso e formação |
| `contacto.html` | Formulário de pedido de contacto |

A página inicial **não repete o site inteiro** — encaminha. Cada assunto tem uma
página própria, e o menu leva lá.

### A secção «Novidades» é manual

Os três cartões — ferramenta, material, próximo encontro — são editados à mão em
`index.html`. Sempre que houver algo novo, substituir o cartão respetivo. É o
único sítio da página inicial que precisa de manutenção regular.

### Sistema de cor

Cada secção tem um tom próprio, em saturação muito baixa: verde-água para
avaliação e consultas, rosa para a biblioteca, roxo para ferramentas e materiais,
ocre para formação. **A cor cheia aparece apenas em elementos pequenos** — barras
de topo dos cartões, ícones, rótulos de secção.

O princípio a manter: área grande com saturação mínima, cor cheia só no que é
pequeno. É o que permite ter cor sem perder sobriedade.

Classes disponíveis: `seccao--tom-agua`, `seccao--tom-rosa`, `seccao--tom-roxo`,
`seccao--tom-ocre`, `seccao--tom-neutro`.

### Tipografia

**Source Serif 4** nos títulos, Instrument Sans no corpo. A Fraunces foi
substituída em agosto de 2026, por decisão de Ricardina Correia — era demasiado
marcada e chamava atenção a si própria.

A Source Serif tem dois eixos, `wght` e `opsz`, e nenhum equivalente ao `SOFT` e
ao `WONK` da Fraunces. Ao mexer em `font-variation-settings`, usar apenas esses
dois; qualquer outro eixo é ignorado em silêncio, o que faz um título ficar com
o peso errado sem se perceber porquê.

**Há um ficheiro de itálico verdadeiro** — `source-serif-latin-full-italic.woff2`
— que a Fraunces não tinha. O «só» da entrada era inclinado artificialmente pelo
browser; agora é itálico desenhado. Só é descarregado quando aparece na página.

### O símbolo da entrada

`simbolo-grande-cor.png` — o cérebro em ardósia e o coração em rosa, com gradiente
na transição. Gerado a partir do logótipo original por recoloração horizontal.

**Fotografias de eventos com participantes.** Nunca publicar capturas de ecrã de
sessões em linha que mostrem o chat, a lista de participantes ou as janelas de
vídeo. Contêm nomes e imagens de pessoas que assistiram, e são dados pessoais
delas — não da sessão. O mesmo se aplica a fotografias de sala com público
reconhecível.

O que é seguro: o cartaz do evento, a oradora sozinha, ou planos onde ninguém é
identificável.

---

## 26. Página «Onde saber mais» — recursos escolhidos

`recursos.html` reúne páginas, contas e conteúdos de outros profissionais que
Ricardina Correia considera úteis. Está ligada a partir do rodapé e da página de
materiais, **não do menu principal** — que já tem sete entradas.

**Não inclui organismos oficiais nem associações.** Foi decisão explícita: a
Ordem, o SNS 24, a DGE e as associações encontram-se numa pesquisa simples, e
listá-los faria da página um diretório como outro qualquer. **O valor está na
escolha, não na lista.**

### Acrescentar um recurso

Copiar um bloco `<article class="achado">` inteiro e editar cinco coisas:

```html
<article class="achado">
  <img class="achado__icone" src="assets/img/recursos/ICONE.svg" alt="" width="56" height="56">
  <div>
    <span class="achado__tipo achado__tipo--sitio">Página</span>
    <h3><a href="ENDEREÇO" rel="noopener">Nome</a></h3>
    <p class="achado__fonte">Área ou instituição</p>
    <p class="nota">O que é, em duas ou três frases.</p>
    <p class="nota" style="margin-top:10px">Porque é que vale a pena, e para quem.</p>
  </div>
</article>
```

**O segundo parágrafo é o que dá valor à lista.** Não é o resumo do que lá está —
é a razão pela qual vale o tempo de quem visita, e a quem se recomenda. Sem ele,
isto é uma lista de ligações como qualquer outra.

Etiquetas disponíveis: `achado__tipo--artigo`, `--video`, `--livro` e `--sitio`,
cada uma com a sua cor. A barra lateral assume automaticamente a cor da etiqueta.
A classe `achado--destaque` dá fundo e barra mais espessa ao primeiro item.

### Ícones

SVG em `assets/img/recursos/`, no mesmo sistema dos das páginas: traço simples,
uma só cor, legível em tamanho pequeno. Existem cinco — `medico`, `rubrica`,
`formacao-ext`, `leitura` e `video-ext`. Para um recurso de tipo novo, desenhar
outro com as mesmas regras.

### Manutenção

**Rever as ligações uma vez por ano.** Páginas de profissionais mudam de endereço
com frequência, e uma ligação partida numa página de recomendações é pior do que
noutra qualquer.

A caixa final declara que são páginas externas e que a inclusão não significa
vínculo nem parceria, salvo onde se indica. Manter essa nota.

---

## 27. Ícones ilustrados das páginas

Cada página interior tem um ícone no topo, em `assets/img/paginas/`. São SVG de
traço simples, com a cor do tema da página, no mesmo sistema dos ícones das
aplicações: silhueta simples, uma só cor, legível em tamanho pequeno.

| Página | Ficheiro | Cor | Origem |
|---|---|---|---|
| Biblioteca | `biblioteca.svg` | magenta `#D6336C` | desenho da Júlia |
| Ferramentas | `ferramentas.svg` | roxo `#7B5BD6` | desenho da Júlia |
| Materiais | `materiais.svg` | turquesa `#0E9384` | desenho da Júlia |
| Formações | `formacao.svg` | ocre `#C2620A` | desenho da Júlia |
| Onde saber mais | `recursos.svg` | laranja `#D97008` | desenho da Júlia |
| Sobre mim | `sobre.svg` | azul-marinho `#2B4C7E` | desenho da Júlia |
| Contacto | `contacto.svg` | turquesa `#0E9384` | desenho da Júlia |
| Onde me encontrar | `encontrar.svg` | azul `#0C447C` | desenho da Júlia |

**Os oito são desenhos à mão da Júlia, vetorizados** — não reconstruções. O traço
irregular é deliberado, e é o mesmo princípio dos ícones das aplicações.
Substituídos a 15 de agosto de 2026. Nenhum ícone do site é agora desenhado por
código.

Cada ícone existe em duas versões com o mesmo nome: o `.svg`, que é o que as
páginas usam, e um `.png` de 512×512 com fundo transparente, para utilizações
fora do site. As páginas não referenciam o PNG.

### Como se vetoriza um desenho novo

O guião é o `icone-paginas.py`, guardado no projeto. Faz o mesmo que o dos
ícones das aplicações — corrigir a iluminação dividindo pelo cinzento desfocado
e aplicar Otsu, reduzir a resolução antes de traçar, engrossar o traço, e deitar
fora os componentes com menos de 800 píxeis, que são manchas do papel.

**Uma diferença em relação ao guião das aplicações, e a razão dela.** Ali a
dilatação é fixa; aqui não pode ser. Cada desenho ocupa a folha de maneira
diferente — o chapéu enche a página, as ferramentas atravessam-na na diagonal —
e uma dilatação igual para todos daria traços de espessuras visivelmente
diferentes depois de encaixados na caixa de 512. O guião mede a espessura do
traço de cada desenho, pela transformada de distância, e dilata o necessário
para que todos fiquem iguais.

**A espessura alvo é 18 numa caixa de 512, e não mais.** Os ícones que estes
substituíram tinham traço a 26, e experimentou-se lá chegar: a essa espessura o
interior do desenho das ferramentas fecha-se — as bocas das chaves, o coração e
os riscos do cabo tornam-se uma mancha. 18 é o mais grosso que ainda deixa esse
desenho respirar, e continua legível a 72 píxeis, que é o tamanho a que aparecem.

**O teste, antes de dar por bom:** reduzir a 72 píxeis e olhar para o ícone ao
lado dos outros. É o tamanho real, e é a essa escala que se decide.

Ao substituir um ícone, basta trocar o ficheiro mantendo o nome — as páginas
não precisam de alteração. A cor vai dentro do SVG, no atributo `fill` do
caminho, e é a do tema da página.

**Crédito.** Mantém-se apenas no fim da página das ferramentas, na forma
«Ilustrações de Júlia, 10 anos», e não foi alargado às restantes páginas. A
questão de onde deve figurar, agora que os desenhos dela estão em quase todo o
site, ficou em aberto — ver o ponto 22 quanto às razões da formulação, que não
se altera para nome completo.

---

## 28. Ilustrações nos artigos

Cada artigo tem **um diagrama**, e um só. Não é decoração — é a ideia central do
texto traduzida em imagem, colocada junto da secção que a explica.

**E deve ter também um desenho**, que abre o artigo, antes da primeira secção.
Não faz o mesmo trabalho: o diagrama explica, o desenho dá o tom. Duas imagens
por artigo é o limite, e só porque fazem coisas diferentes — duas que expliquem o
mesmo competiriam entre si. Começou com «Será que já é caso para consulta?», em
agosto de 2026.

### A regra, nos dois casos

| | Página inicial | Início do artigo | Meio do artigo |
|---|---|---|---|
| **Com desenho** | desenho | desenho | diagrama |
| **Sem desenho** | diagrama | — | diagrama |

Ou seja: **o desenho, quando existe, ocupa a página inicial e a abertura do
artigo, e o diagrama fica reservado ao interior**, junto da secção que explica.
Sem desenho, o diagrama faz as duas coisas, como fazia antes.

O objetivo é que todos os artigos venham a ter os dois. Enquanto não tiverem, a
rotação da página inicial mistura desenhos e diagramas, e não há problema nisso —
o que não se deve fazer é publicar um artigo sem nenhuma imagem.

**Os diagramas são verticais; os desenhos, deitados.** Uma figura deitada leva a
classe `figura--larga` além de `figura`, sem a qual o limite de altura pensado
para os diagramas verticais lhe daria uma largura acima da coluna de leitura.

### Autoria

**Os desenhos dos artigos são da Luísa; os ícones das páginas e das aplicações,
da Júlia.** O crédito segue a mesma convenção nos dois casos: primeiro nome e
idade, sem apelido, e **a idade não se atualiza** — descreve quando o trabalho foi
feito, como uma data. As razões estão no ponto 22 e valem igualmente aqui.

Nos artigos, o crédito vai na legenda da própria figura, a seguir à frase da
legenda: «Ilustração de Luísa, 6 anos.»

### Tratamento de um desenho fotografado

Não se publica a fotografia como veio, nem em PNG. Corrigir a iluminação
dividindo pelo cinzento desfocado, recortar ao conteúdo, e mapear as cores às do
site — papel a `#FDFBF8`, tinta a `#1F2D3D` —, para o desenho assentar na página
em vez de flutuar sobre ela num cinzento fotográfico. Exportar em WebP a cerca de
1600 píxeis de largura; o mesmo desenho em PNG pesaria uns dois megabytes.

**Não vetorizar.** É o que se faz aos ícones, que são silhuetas simples, mas numa
cena com caras, cabelos e traços finos a vetorização engrossa-os até se fecharem
— e a textura do marcador faz parte do desenho.

**Os desenhos são a marcador preto.** Decidido a 17 de agosto de 2026, depois de
chegar um a cores. Ao pedir um desenho novo, dizê-lo — é mais fácil do que
resolver depois.

**Um desenho a cores não se aproveita.** Tentaram-se as duas conversões possíveis
e nenhuma serve. Converter por luminância faz **desaparecer o amarelo**, que é
claro e fica indistinguível do papel — num desenho com um sol, perde-se o sol.
Converter pela distância à cor do papel resolve isso, mas transforma as áreas
pintadas em manchas escuras: o mesmo sol passa a ser uma mancha preta que domina
a imagem, e a relva uma faixa cinzenta. **Deixa de ser o desenho que a criança
fez.** Se vier um a cores, ou se pede outro a preto, ou o artigo sai só com o
diagrama.

**Na rotação de destaques da página inicial entra o desenho, quando existe; o
diagrama, quando não existe.** A regra mudou a 15 de agosto de 2026, e a razão
está nas medidas: a coluna do visual tem cerca de 450 píxeis
úteis, e um diagrama vertical, travado pelo limite de altura de 460, sai com 227
de largura — o texto fica a uns 7 píxeis, ilegível. Uma imagem deitada enche a
caixa e lê-se. O diagrama não perde nada: passa a aparecer uma vez só, dentro do
artigo, à largura a que foi desenhado.

Uma imagem deitada no destaque leva `destaque__imagem--larga` além de
`destaque__imagem`, pela mesma razão que a `figura--larga` no artigo.

**O crédito não vai na legenda do destaque**, ao contrário do que acontece na
figura dentro do artigo. O desenho liga ao artigo, e é lá que o crédito está. É a
mesma lógica que mantém o crédito da Júlia numa página só: não pôr o nome de uma
criança na entrada do site, indexado.

```html
<figure class="figura">
  <img src="../assets/img/nome.webp" alt="Descrição do que o diagrama mostra"
       width="1000" height="667" loading="lazy">
  <figcaption>Uma frase que acrescenta, não que repita o que está na imagem.</figcaption>
</figure>
```

**A legenda não repete o que a imagem diz.** Se a imagem já tem a frase escrita,
a legenda deve dizer outra coisa — o que se conclui dela, por exemplo.

**O texto alternativo descreve o conteúdo**, não o formato. «Diagrama dos três
critérios: duração, interferência e o que já se tentou» serve; «ilustração do
artigo» não serve de nada a quem usa leitor de ecrã.

### O que não usar

**Fotografias de banco de imagens.** São genéricas e reconhecem-se como tal. As
de crianças estão excluídas pela regra que atravessa todo o site.

**Animações.** Numa página de leitura, o movimento distrai — e parte do público
são famílias de crianças com dificuldades de atenção. Acresce que obriga a
JavaScript e prejudica quem tem movimento reduzido ativado no sistema.

### Estado das ilustrações

Os dez artigos escritos têm todos o seu diagrama, em `assets/img/`. Quatro têm já
o desenho da Luísa; faltam seis.

| Artigo | Diagrama | Desenho |
|---|---|---|
| Será que já é caso para consulta? | `destaque-criterios.webp` | `desenho-consulta.webp` |
| Retomar o sono | `destaque-sono.webp` | `desenho-sono.webp` |
| Preparar a ida à consulta | `destaque-preparar.webp` | `desenho-preparar.webp` |
| A devolução dos resultados | `destaque-relatorio.webp` | `desenho-relatorio.webp` |
| Organizar-se não é feitio | `destaque-organizar.webp` | — |
| «Ele consegue quando quer» | `destaque-phda.webp` | — |
| Correu tudo bem na escola | `destaque-desaba.webp` | — |
| E se ele não se adaptar? | `destaque-pais.webp` | — |
| A reunião na escola | `destaque-reuniao.webp` | — |
| Manhãs difíceis | `destaque-manhas.webp` | — |

Falta o diagrama das medidas de suporte, que se faz quando o artigo for reescrito
para o novo regime, em janeiro de 2027.

**Os desenhos chamam-se `desenho-*`; os diagramas, `destaque-*`.** O prefixo dos
diagramas é anterior à existência dos desenhos e ficou por razões de história —
não se renomeiam, porque estão referidos em vários sítios.

**Os dez diagramas continuam em Fraunces**, e assim ficam — são imagens, e
substituem-se uma a uma se e quando fizer sentido. **O décimo primeiro, o das
medidas de suporte, deve seguir os outros dez e ser feito em Fraunces.** O que se
nota não é a diferença entre os diagramas e a página: é a diferença entre os
diagramas uns dos outros.

### Como se desenha um diagrama novo

**Formato vertical**, cerca de 1000 × 1700 píxeis. O horizontal parece melhor no
ecrã largo e fica ilegível na coluna de leitura, que tem cerca de 700 píxeis.

**Estrutura em três ou quatro blocos**, com separadores entre eles: o que se
observa, o que daí decorre, e a conclusão no fim. **A conclusão fica sempre no
fim** — a meio, antecipa o que ainda não foi apresentado.

**Nada abaixo de 28 píxeis** de tamanho de letra no original. Reduzido a 700 de
largura, 28 tornam-se 20, que é legível; 18 tornam-se 13, que não é.

**O teste, antes de dar por bom:** reduzir a imagem para 700 píxeis de largura e
lê-la no ecrã. Se não se ler tudo com conforto, não serve — independentemente de
como fica em tamanho real.

**Cores por função:** verde-água para o que funciona ou tranquiliza, rosa para a
tese central, roxo para o que estrutura, ocre para a leitura que atrasa ou
prejudica. Nunca o ocre a julgar quem faz essa leitura.

### O que dá ritmo sem imagens

As secções `<h2>` levam agora um separador no topo, o que divide o artigo em
blocos visíveis ao percorrer. A isso somam-se as caixas de destaque, as listas
de condições com marcador colorido, e os blocos de material e de ferramenta.
Um artigo com estes elementos não se lê como um muro de texto mesmo sem imagem.


---

## 29. Ampliar os diagramas

Cada figura tem um botão **Ampliar** no canto superior direito, que abre o
diagrama em ecrã inteiro sobre um fundo escurecido. Fecha-se com o botão, com a
tecla Escape, ou clicando fora da imagem.

Existe porque os diagramas são densos e, à largura da coluna de leitura, o texto
mais pequeno fica no limite do legível — sobretudo em telemóvel.

O comportamento está no fim de `assets/js/site.js` e é acrescentado
automaticamente a qualquer figura com a classe `figura`. Ao criar um artigo novo,
basta incluir o botão no bloco da figura:

```html
<figure class="figura">
  <button class="figura__ampliar" type="button" data-imagem="../assets/img/nome.webp"
          aria-label="Ver o diagrama em tamanho grande">
    <svg class="icone" aria-hidden="true"><use href="#i-maximizar"/></svg><span>Ampliar</span>
  </button>
  <img src="../assets/img/nome.webp" alt="..." width="..." height="..." loading="lazy">
</figure>
```

O `data-imagem` do botão tem de apontar ao mesmo ficheiro que o `img`.


---

## 30. Cartões dos recursos: logótipos e retratos

Cada recurso da página «Onde saber mais» usa a imagem real da entidade ou da
pessoa, em vez de um ícone genérico:

- **Logótipos** — classe `achado__icone--logo`, em WebP com fundo transparente,
  cerca de 220 px de largura. A altura é fixada por CSS, pelo que qualquer
  proporção se ajusta.
- **Retratos** — classe `achado__icone--retrato`, recortados em círculo, 200×200.

Ao acrescentar um recurso com pessoa, **pedir autorização para usar a fotografia**
ou usar apenas o ícone genérico. Uma fotografia de perfil é pública, mas usá-la
noutro sítio é outra coisa.
