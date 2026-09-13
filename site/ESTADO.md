# Estado do projeto — atualizado a 10 de setembro de 2026

Documento de referência rápida. **Atualizar sempre que houver alteração
substancial.** O que aqui está desatualizado gera trabalho errado.

---

## Identificação

**Ricardina Correia** · Psicóloga · Psicologia pediátrica
Cédula OPP n.º 8233 · Especialista em Psicologia da Educação

**Ricardina Correia & Associados, Lda.** · NIPC 519 479 610
Sede: Av. General Humberto Delgado, n.º 39, 3.º esq., 2560-272 Torres Vedras
Sócios: Ricardina Correia (70%), Mário Rui Teles (30%) · IRC · IVA isento (art. 9.º CIVA)
Contabilista: Dra. Isabel Ferreira (cédula 95470)

**Site:** ricardinacorreia.pt · repositório `correiaricardina-ui/site` no GitHub
Domínio registado a 13/08/2026, renovação 13/08/2027, na Dominios.pt

---

## Onde exerce

**CNS — Campus Neurológico**, Unidade de Pediatria, Torres Vedras. Prática clínica
exclusivamente presencial. Marcações pelos canais do CNS, nunca pela página.
Participa na rubrica «CNS Pediatria responde», no Instagram @cnspediatria.

**CAIDI** — coordenação do plano de formação, desde 2021 e em curso. A assessoria
técnica terminou em 2026 e é referida com delimitação temporal, a pedido da
Direção Técnica.

**À distância**, apenas supervisão a colegas. O **Cheque Cuida-te aguarda
ativação** — a página assinala-o como tal e não aceita pedidos por essa via. Se
vier a ativar, o acompanhamento limita-se aos 18 anos.

---

## Estado do site

| Elemento | Estado |
|---|---|
| Endereço | **`https://ricardinacorreia.pt` — no ar, com certificado válido** |
| Páginas | 12 páginas + 12 artigos na pasta |
| Artigos escritos | 10, revistos clinicamente, cada um com diagrama |
| Ilustrações | 10 diagramas; 9 desenhos da Luísa, faltam 2; ícones da Júlia |
| Artigos publicados | 4 — até «E se ele não se adaptar?» |
| Materiais | 12, em PDF e Word; 5 visíveis na página. Dois são para profissionais e estão assinalados como tal |
| Ferramentas descritas | 9 disponíveis, 4 em preparação |
| Recursos recomendados | 5, na página «Onde saber mais» |
| Repositório | `correiaricardina-ui/site`, público, no GitHub |
| Alojamento | GitHub Pages, gratuito |
| Formulário | Ligado à Tally, identificador `ODqq08`, carregamento ao clique |
| Email | `geral@ricardinacorreia.pt`, criado e a receber |

**As páginas:** index, biblioteca, ferramentas, materiais, recursos, formacao,
onde-me-encontrar, sobre, contacto, online, supervisao, privacidade.

---

## Infraestrutura — como está montada

**DNS**, na Gestão de DNS da Dominios.pt: quatro registos A do GitHub
(185.199.108–111.153), um CNAME de `www` para `correiaricardina-ui.github.io`, e
um MX para `webdomain04.dnscpanel.com` com prioridade 10.

**Os nameservers continuam os `dns1-4.host-redirect.com`. Não mudar para os do
cPanel** — tomariam conta do domínio e tirariam o site do ar.

**HTTPS ativo.** O «Enforce HTTPS» foi assinalado no GitHub Pages depois de o
DNS check passar.

**Email.** A caixa `geral@` vive dentro do serviço «Web Domain 1GB de Alojamento
e Email» do cPanel — não existe como serviço isolado. IMAP e SMTP em
`webdomain04.dnscpanel.com`, portas 993 e 465.

---

## Feito a 15 de agosto

- DNS configurado, HTTPS ativo, site no ar no domínio próprio.
- Caixa `geral@` criada e a receber.
- Formulário ligado à Tally e testado de ponta a ponta: submissão, registo no
  painel, aviso por email.
- Avisadas as três colegas que constam da página «Onde saber mais».
- Corrigida a ligação partida `#agenda` no rodapé da página inicial, que apontava
  a uma secção extinta. Passou a apontar a `formacao.html`, como nas restantes
  páginas.
- Corrigidas as duas referências Paruthi et al. (2016) do artigo do sono, que em
  APA 7 pedem os sufixos *2016a* e *2016b*.
- **Os oito ícones das páginas substituídos pelos desenhos da Júlia**,
  vetorizados. Nenhum ícone do site é agora desenhado por código.
- **Revisão ortográfica e gramatical de todas as páginas**, a partir da lista
  enviada por Ricardina Correia: 81 correções em 14 ficheiros, quase todas
  supressão da vírgula antes de «e». Três correções da lista caem dentro do
  diagrama `destaque-criterios.webp` e uma dentro de um material em PDF — nenhuma
  delas se faz por texto.
- Reescrito o ponto 27 do LEIA-ME, que descrevia os ícones das páginas como
  desenhados por código. Passa a documentar a vetorização e a razão da espessura
  de traço escolhida.
- **Primeira ilustração de abertura num artigo** — um desenho da Luísa, no «Será
  que já é caso para consulta?», antes da secção «A situação». O diagrama dos
  critérios mantém-se onde estava. O ponto 28 do LEIA-ME passa a prever duas
  imagens por artigo, desde que façam coisas diferentes.
- **O destaque da página inicial passou a mostrar o desenho**, em vez do diagrama
  vertical, que à largura da caixa ficava ilegível.
- **Regra nova, no ponto 28 do LEIA-ME:** cada artigo deve ter desenho e
  diagrama. Havendo desenho, ele ocupa a página inicial e a abertura do artigo, e
  o diagrama fica para o meio do texto; não havendo, o diagrama faz as duas
  coisas. **Quatro artigos têm já o desenho — os critérios, o sono, a preparação da
  consulta e a devolução. Faltam seis.**
- O artigo do sono ficou com o desenho inserido e o bloco do destaque já
  atualizado, à espera do dia 22. Continua por publicar.

---

## Feito a 24 de agosto

- **Publicado o artigo do sono**, com dois dias de atraso sobre o sábado 22. Feitas
  quatro das cinco alterações: cartões na `biblioteca.html` e na `index.html`,
  filtro *Rotinas*, bloco movido para o array em `assets/js/destaques.js` e linha
  no `sitemap.xml`. E a quinta: o material «Registo de sono — três semanas»
  passou de «Em preparação» a descarregável na `materiais.html`, a apontar ao PDF
  que já existia em `assets/materiais/`. O artigo já lhe ligava. O cartão
  *Material* da secção *Novidades* da página inicial passou a mostrá-lo — essa
  secção é manual, e o ponto 18 do LEIA-ME passa a lembrá-lo. Os materiais
  passaram a ter identificador próprio, para o cartão poder ligar ao item e não
  à página inteira.
- **Os cartões de espera deixam de ter data e passam a dizer «Em breve».** Decisão
  de Ricardina Correia, tomada a propósito deste atraso. O ponto 18 do LEIA-ME foi
  reescrito em conformidade. As datas continuam no calendário editorial, que é
  interno.
- **O artigo da PHDA ficou com desenho** — a marcador preto, desta vez. Resolve o
  caso do desenho a cores que ficara de fora a 17 de agosto. É o primeiro desenho
  vertical: a folha está preenchida de alto a baixo e não se recorta sem se
  perder, pelo que leva `figura` sozinha e não `figura--larga`. O ponto 28 do
  LEIA-ME passa a prever o caso. O artigo continua por publicar, a 19 de setembro.
- **Retirada a função `serieSono()` do `destaques.js`.** Desenhava o gráfico da
  versão antiga do destaque do sono e deixou de ser chamada quando esse destaque
  passou a ser o desenho.
- **Página «Onde saber mais»:** entrou uma caixa `chamada` com a ligação ao
  Instagram próprio, **fora da lista de recursos** e com a razão registada no
  ponto 26 do LEIA-ME; a etiqueta do CNS Pediatria passou de «Vídeos · Instagram»
  a «Instagram», por a ligação ser à conta e não aos vídeos; e a
  `<meta name="description">` foi substituída — descrevia a página como um
  diretório de organismos oficiais, exatamente o contrário do que ficou decidido.

---

## Feito a 29 de agosto

- **Publicado «Preparar a ida à consulta de psicologia»**, a horas. As cinco
  alterações: cartões na `biblioteca.html` e na `index.html`, bloco movido para o
  array em `assets/js/destaques.js`, linha no `sitemap.xml`, e o material
  «Preparar a primeira consulta» reposto na `materiais.html`, com identificador
  próprio, a que o cartão *Material* das *Novidades* passa a ligar.
- O cartão de espera seguinte é «A devolução dos resultados e como ler um
  relatório», sem data, como ficou regra a 24 de agosto.
- **A página inicial tem agora quatro cartões de artigo** na secção da biblioteca,
  e cresce um por semana. Fica por decidir se passa a mostrar apenas o último
  publicado e o seguinte — ver «Por fazer».
- **O artigo liga a «A devolução dos resultados», que só sai a 5 de setembro.**
  A ligação estava escrita no artigo e foi mantida; torna esse texto alcançável
  uma semana antes da data. Ver «Por fazer».

---

## Feito a 5 de setembro

- **O calendário de setembro foi reordenado**, a pedido de Ricardina Correia. O
  critério deixou de ser a sequência do percurso e passou a ser qual das janelas
  fecha primeiro: «E se ele não se adaptar?» está construído sobre as semanas
  anteriores ao primeiro dia de aulas, e esse momento acaba nesta semana. A nova
  ordem é **5 set** adaptação, **12 set** organização, **19 set** PHDA com os cinco
  materiais, **26 set** o desaba, **3 out** a devolução. «A reunião na escola» e
  «Manhãs difíceis» ficam onde estavam.
- **Publicado «E se ele não se adaptar?»** — cartões na `biblioteca.html` e na
  `index.html`, filtro *Emoções*, bloco no array do `destaques.js` com o desenho,
  e linha no `sitemap.xml`.
- **Retirada a ligação antecipada** para «A devolução dos resultados», no fim de
  «Preparar a ida à consulta». Decisão de Ricardina Correia entre as três saídas
  postas: manter, formalizar a publicação, ou retirar. O texto do parágrafo
  mantém-se e passa a anunciar em vez de entregar; o código original ficou em
  comentário no ficheiro, para repor quando o artigo sair.
- **A ligação recíproca do par foi neutralizada.** «E se ele não se adaptar?» e
  «Correu tudo bem na escola» remetem um para o outro; publicar o primeiro tornava
  o segundo alcançável durante três semanas. A caixa mantém-se com a pergunta que
  lança, o destino passa a «Em breve», e o original fica em comentário com a
  indicação de repor a 26 de setembro.
- **Três desenhos novos da Luísa**, todos a marcador preto: a escola com a
  despedida à porta (`desenho-pais.webp`), a mochila com o material todo fora
  (`desenho-organizar.webp`) e os dois painéis escola/casa
  (`desenho-desaba.webp`). Os dois últimos ficam em `assets/img/` à espera dos
  sábados de 12 e 26.
- **O telhado da escola sai da folha, por opção da autora do desenho.** Não é
  defeito da fotografia, e não se substitui. Tem consequência técnica — ver o
  ponto 28 do LEIA-ME.
- **Regra nova no processamento dos desenhos:** descartar os componentes cuja
  caixa toca a margem da imagem, que são sombras do bordo da folha e passam o
  filtro dos 800 píxeis. Não é automática — no desenho da escola teria comido o
  telhado.

---

## Feito a 10 de setembro

- **As publicações do site passaram a ser automáticas.** Um trabalho agendado no
  GitHub (`.github/workflows/publicar.yml`) corre uma vez por dia, vê o que está
  marcado em `scripts/publicacoes/` e aplica-o sozinho. Está marcado o cartão do
  ENEP para 26 de setembro e o artigo técnico para 2 de outubro. Documentado em
  `scripts/publicacoes/LEIA-ME-publicacoes.md`. **A primeira execução tem de ser
  feita à mão**, pelo separador Actions.
- **Categoria nova: artigos técnicos.** Dirigidos a colegas, com referências em
  APA e sem a estrutura fixa dos artigos das famílias. Etiqueta própria,
  `etiqueta--tecnico`, em azul-marinho `#2B4C7E` — **é um público, não um tema**.
  Não entram na página inicial nem na rotação de destaques, e por isso dispensam
  desenho e diagrama. A `supervisao.html` remete-lhes.
- **Primeiro artigo técnico escrito**, `reciprocidade-desenvolvimento-bebe.html`,
  a partir do workshop no ENEP. Cinco referências verificadas nas fontes
  primárias. Sai a 2 de outubro, automaticamente.
- **A ilustração desse artigo é um desenho da Luísa**, com crédito na legenda,
  como as restantes. Substituiu a imagem provisória que existiu entre 10 e 12 de
  setembro.
- **Dois materiais novos, para profissionais:** grelha de observação da díade e
  guião de anamnese sobre a interação precoce. A `materiais.html` ganhou o filtro
  «Para profissionais» e uma nota de que pressupõem formação em psicologia e não
  se destinam a autoavaliação nem à observação do próprio filho.
- **Os filtros passaram a ler `?tema=` do endereço**, para se poder ligar a um
  filtro a partir de outra página.
- **Reposta a ligação de inscrição da tertúlia** na `formacao.html`, com o local
  e as condições de entrada corretos: Auditório da Universidade Sénior Rainha
  Dona Leonor, entrada gratuita com inscrição obrigatória até às 14h00 do dia 24.
  A acreditação do CFAE só conta para quem tenha estado também na sessão de 10 de
  setembro.
- **O calendário de publicações passou a viver num Excel**, que é agora a fonte.
  O calendário editorial e a pasta `scripts/publicacoes/` derivam dele.

---

## Por fazer

**1 · Os cartões da página inicial.** São cinco, e o calendário traz mais seis. A
alternativa é mostrar só o último publicado e o «Em breve», deixando os
anteriores para a biblioteca, o que é mais coerente com o princípio de que a
entrada encaminha em vez de repetir o site. **A decisão sobre a ligação
antecipada ficou resolvida a 5 de setembro** — retirou-se.

**1a · Uma divergência de cor por resolver.** O tema *Rotinas* aparece com
`etiqueta--ocre` dentro do artigo «Organizar-se» e com `etiqueta--roxo` nos
cartões da biblioteca. Nos cartões seguiu-se a biblioteca, para a página ficar
coerente consigo mesma. Falta decidir qual das duas fica.

**2 · Os desenhos que faltam.** Dois artigos ainda só têm diagrama: «A reunião na
escola», de 10 de outubro, e «Manhãs difíceis», de 17.

**Os desenhos são a marcador preto** — decidido a 17 de agosto, e a dizer sempre
que se pedir um novo. Chegou um a cores para a PHDA e não se aproveitou: as duas
conversões possíveis ou fazem desaparecer o sol ou transformam-no numa mancha
preta que domina a imagem. **Resolveu-se a 24 de agosto**, com um desenho novo a
preto, já inserido no artigo. O caso fica registado porque a razão continua a
valer para os próximos.

**Ao publicar a devolução, a 3 de outubro, há também o vídeo da rubrica a ligar**
— o Reel com a Dra. Marta Ezequiel, indicado no CALENDARIO-EDITORIAL.

**O desenho da devolução é o primeiro com palavras escritas** — «pontos fortes» e
«a melhorar». Os três anteriores não tinham nenhuma. Fica a nota de que a coluna
da direita é ilustrada com duas caras em sofrimento, o que aproxima dificuldade
de tristeza; o artigo trabalha precisamente contra essa leitura. Foi decidido
manter, com a legenda a fazer o contrapeso.

**3 · Decidir onde fica o crédito à Júlia.** O crédito «Ilustrações de Júlia, 10
anos» está apenas no fim da página das ferramentas, e assim ficou por decisão de
15 de agosto. Os desenhos dela passaram a estar no topo de todas as páginas do
site, pelo que a questão fica em aberto, e não fechada. O crédito à Luísa, esse,
ficou resolvido: vai na legenda da própria figura.

**4 · Estatísticas de visitas — ponderado e adiado a 15 de agosto.** A opção
considerada foi uma ferramenta sem cookies alojada na União Europeia (Plausible,
Simple Analytics, Matomo), a cerca de nove euros por mês. Ficou adiada por não
corresponder a nenhuma decisão em curso. **O que a distingue da Tally:** o
formulário só faz pedido externo se a pessoa o abrir, e um script de estatísticas
dispara em todas as visitas — deixaria de ser verdade que o site não faz pedidos
a terceiros, e a política de privacidade teria de o dizer, antes de o script
entrar e não depois. Fica ligada à reavaliação de janeiro, sobre a newsletter e o
Instagram, que é quando a pergunta passa a ter consequência.

A Search Console do Google é a alternativa gratuita e sem script na página, mas
só vê quem chega pela pesquisa — e **não recupera o passado**: só conta a partir
do dia em que é ligada. Se em janeiro se quiser ter alguma coisa para olhar, esse
é o único gesto que tem de acontecer antes.

---

## Histórico — o registo do domínio

O `ricardinacorreia.pt` foi registado e pago a 13 de agosto de 2026, mas o
pagamento por referência Multibanco não ficou associado ao registo: o estado
manteve-se «Pendente» e a página de gestão recusava alterações. Resolveu-se com
um ticket de suporte à Dominios.pt, com a fatura anexada. **Fica a nota para o
caso de a renovação, em agosto de 2027, repetir o problema.**

---

## Decisões tomadas que não se revertem sem conversa

- **Zero pedidos externos, com uma exceção declarada.** Fontes, ícones e imagens
  servidos do próprio domínio. A exceção é o formulário de contacto, alojado na
  Tally (Bélgica, dados na UE) — e mesmo esse só carrega ao clique. Quem não abrir
  o formulário não faz qualquer pedido a terceiros.
- **A página não marca consultas presenciais.** Remete para o CNS.
- **As aplicações não se descarregam.** São entregues em consulta.
- **O formulário não recolhe informação clínica.** Conservação: máximo de 12 meses,
  **por eliminação manual** — a eliminação automática é do plano Business da Tally,
  a 79 €/mês. Apagar as submissões no painel depois de responder.
- **O `geral@` lê-se pelo webmail do cPanel, uma vez por dia, e assim fica.** O
  Gmail já não oferece «Consultar o correio de outras contas» e a alternativa do
  Outlook foi ponderada e recusada. **Não propor de novo ligar a caixa a outro
  programa** sem que seja pedido.
- **Os avisos de novas submissões da Tally continuam a ir para o
  `ricardinacorreia.lda@gmail.com`**, que é consultado diariamente. É o inverso do
  que estava planeado, e é deliberado: o gmail é onde se vê, o webmail é onde se
  vai buscar.
- **Nunca se publicam fotografias de crianças**, mesmo com autorização.
- **A newsletter foi retirada** em agosto de 2026.

---

## Desenho

Entrada assimétrica com o símbolo cérebro-coração em gradiente ardósia-rosa;
fundo quente `#FDFBF8` com cartões brancos; cada secção com o seu tom em
saturação muito baixa; Source Serif 4 nos títulos, com itálico verdadeiro no
«só» da entrada. Os ícones do topo de cada página são desenhos à mão da Júlia,
vetorizados, cada um na cor do tema da página.
