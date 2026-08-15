# Estado do projeto — atualizado a 15 de agosto de 2026

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
| Páginas | 12 páginas + 11 artigos na pasta |
| Artigos escritos | 10, revistos clinicamente, cada um com diagrama |
| Ilustrações | 10 diagramas; 2 desenhos da Luísa, faltam 8; ícones da Júlia |
| Artigos publicados | Apenas o primeiro, «Será que já é caso para consulta?» |
| Materiais | 10, em PDF e Word; 9 publicados na página |
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
  coisas. **Dois artigos têm já o desenho — o dos critérios e o do sono. Faltam
  oito.**
- O artigo do sono ficou com o desenho inserido e o bloco do destaque já
  atualizado, à espera do dia 22. Continua por publicar.

---

## Por fazer

**1 · Publicar o artigo de 22 de agosto** — «Retomar o sono antes do regresso às
aulas». São cinco alterações coordenadas: cartão na `biblioteca.html`, cartões na
`index.html`, mover o bloco do comentário para o array em `assets/js/destaques.js`,
linha no `sitemap.xml`, e tornar descarregável o material «Registo de sono — três
semanas», que está na página como «Em preparação» e cujo PDF já existe em
`assets/materiais/`.

**2 · Decidir onde fica o crédito à Júlia.** O crédito «Ilustrações de Júlia, 10
anos» está apenas no fim da página das ferramentas, e assim ficou por decisão de
15 de agosto. Os desenhos dela passaram a estar no topo de todas as páginas do
site, pelo que a questão fica em aberto, e não fechada. O crédito à Luísa, esse,
ficou resolvido: vai na legenda da própria figura.

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
