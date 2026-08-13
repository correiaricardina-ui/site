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
| Formulário da newsletter | Ligar ao serviço de envio (ver ponto 4) |
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

O formulário está desenhado mas não está ligado. Para o ativar com o MailerLite
(gratuito até 1000 subscritores), basta substituir no `index.html` o atributo
`action="#"` pelo endereço do formulário fornecido pelo serviço.

Antes de recolher endereços, confirmar que a política de privacidade está
publicada e que a mensagem de subscrição inclui ligação de cancelamento.

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
assets/fontes/        Fraunces e Instrument Sans, alojadas localmente
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
Fraunces nos títulos, pela leitura simultaneamente séria e acolhedora;
Instrument Sans no texto corrido, pela legibilidade em ecrãs pequenos.

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

O formulário em `contacto.html` **não envia nada para nenhum servidor**. Ao carregar
em "Enviar pedido", compõe uma mensagem no programa de correio da própria pessoa,
com os campos já preenchidos, e é ela quem decide se a envia.

Foi esta a opção escolhida por uma razão: serviços de formulário como o Formspree
ou o Web3Forms passariam a receber e armazenar o que as pessoas escrevem, muitas
vezes em servidores fora da União Europeia. Num contexto clínico, mesmo com o aviso
para não incluir informação clínica, evitar esse intermediário é mais defensável.

**O endereço de destino** está definido em `assets/js/site.js`, na constante
`DESTINO`. Alterar aí se o endereço mudar.

**Limitação a conhecer:** em computadores sem programa de correio configurado, o
botão pode não abrir nada. Por isso o endereço de correio aparece também no
rodapé de todas as páginas, como alternativa sempre disponível.

**Se um dia preferir um formulário que envie diretamente**, a alteração é simples:
criar conta num serviço de formulários, e substituir no `site.js` a construção do
`mailto:` por um `fetch()` para o endereço fornecido pelo serviço. Nesse caso, a
política de privacidade tem de ser atualizada para identificar o subcontratante.

### Acrescentar ou alterar assuntos

A lista de assuntos está em `contacto.html`, dentro do `<select id="assunto">`.
Basta acrescentar ou editar as linhas `<option>`.

---

## 8. Ligar o formulário de contacto

O formulário em `contacto.html` está desenhado mas não envia nada. Um site
estático não tem servidor próprio, pelo que o envio tem de passar por um
serviço externo.

**Serviço recomendado: Tally** (tally.so). É sediado na Bélgica, aloja os dados
na União Europeia e o plano gratuito é suficiente para este volume. Alternativas
como o Formspree ou o Google Forms alojam os dados fora da UE, o que é evitável
tratando-se de um site de saúde.

Passos:

1. Criar conta gratuita no Tally e um formulário com os mesmos campos.
2. Nas definições do formulário, escolher a opção de integração por HTML.
3. Em `contacto.html`, substituir `action="#"` pelo endereço fornecido.
4. Assinar o contrato de subcontratação (DPA) disponibilizado pelo serviço —
   é obrigatório e costuma ser aceite com um clique nas definições da conta.

**Regra que não deve ser alterada:** o formulário não pede nem deve permitir
informação clínica. O aviso no topo da página existe por essa razão. Se um
pedido chegar com informação clínica no campo de nota, convém apagá-la do
serviço depois de responder.

**Importante — a política de privacidade já descreve o formulário como ligado a
um serviço de formulários com dados na União Europeia.** Enquanto o formulário
não estiver ligado, esse parágrafo antecipa a situação futura; assim que ligar,
confirme que o serviço escolhido corresponde à descrição (dados na UE, contrato
de subcontratação assinado). Se optar por um serviço fora da UE, a política tem
de ser alterada em conformidade.

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

A versão PDF gerada aqui usa as fontes do site (Fraunces e Instrument Sans); a
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
3. **`assets/js/destaques.js`** — acrescentar o bloco do artigo novo, com a sua
   ilustração. Os destaques rodam diariamente entre os que estiverem na lista.
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
aplicações em preparação não têm ícone e usam ficha breve, com apenas dois campos.

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
pilha arredondada (`Avenir Next`, `SF Pro Rounded`, `Nunito`); o site usa Fraunces
nos títulos e Instrument Sans no corpo. São contextos distintos — uma aplicação
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
