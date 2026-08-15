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
| Páginas | 12 páginas + 10 artigos |
| Artigos escritos | 10, revistos clinicamente, cada um com diagrama |
| Artigos publicados | Apenas o primeiro, «Será que já é caso para consulta?» |
| Materiais | 10, em PDF e Word |
| Ferramentas descritas | 9 disponíveis, 4 em preparação |
| Recursos recomendados | 5, na página «Onde saber mais» |
| Repositório | `correiaricardina-ui/site`, público, no GitHub |
| Alojamento | GitHub Pages, gratuito, já a funcionar |
| Domínio | **Registado e pago, mas por ativar** |

**As páginas:** index, biblioteca, ferramentas, materiais, recursos, formacao,
onde-me-encontrar, sobre, contacto, online, supervisao, privacidade.

**Feito a 14 de agosto:** tipografia mudada de Fraunces para Source Serif 4;
formulário de contacto passado para a Tally, com carregamento ao clique;
corrigida uma duplicação do bloco de arranque no `index.html` e um segundo
cabeçalho HTML em `formacao`, `onde-me-encontrar` e `recursos`, que faziam as
três mostrar o título do «Sobre»; retirada a ligação a um artigo por publicar
em `materiais.html`.

**Feito a 15 de agosto — o site está no ar em `ricardinacorreia.pt`.**

- **DNS configurado** na Gestão de DNS da Dominios.pt: quatro registos A do GitHub,
  CNAME do `www`, e um MX para `webdomain04.dnscpanel.com` com prioridade 10.
  Os nameservers continuam os `dns1-4.host-redirect.com` — **não mudar para os do
  cPanel**, que tomariam conta do domínio e tirariam o site do ar.
- **Caixa `geral@ricardinacorreia.pt` criada** no cPanel, dentro do serviço «Web
  Domain 1GB de Alojamento e Email» — o email não existe como serviço isolado.
  IMAP e SMTP em `webdomain04.dnscpanel.com`, portas 993 e 465.
- **Formulário de contacto ligado à Tally**, identificador `ODqq08`.

**Por fazer:**

- **Enforce HTTPS** no GitHub Pages, assim que o «DNS Check» ficar verde. Enquanto
  não estiver, o site serve por `http://` e o browser assinala-o como inseguro.
- **Ligar a caixa `geral@`** ao Gmail ou ao Outlook, e confirmar que já recebe.
- **Mudar o email da conta Tally** de `ricardinacorreia.lda@gmail.com` para o
  `geral@`. No plano gratuito o aviso de nova submissão vai sempre para o email
  da conta, pelo que basta essa alteração para os avisos passarem a chegar lá.
- **Avisar a Dra. Inês Oliveira e a T.O. Diana Barroso** de que constam da página
  «Onde saber mais», com fotografia. A Enf.ª Ângela Baptista já reviu o seu texto.

**Desenho:** entrada assimétrica com o símbolo cérebro-coração em gradiente
ardósia-rosa; fundo quente `#FDFBF8` com cartões brancos; cada secção com o seu
tom em saturação muito baixa; Source Serif 4 nos títulos, com itálico
verdadeiro no «só» da entrada.

---

## O problema do domínio

O `ricardinacorreia.pt` foi registado a 13 de agosto de 2026 e **pago por
referência Multibanco**, com fatura emitida pela Dominios.pt. Apesar disso, o
estado continua «Pendente», a data de registo aparece por preencher, e a página
de gestão diz «Domínio não ativo. Não é possível fazer alterações.»

**O pagamento não foi associado ao registo.** Resolve-se com um ticket de
suporte, anexando a fatura. Enquanto não estiver ativo, não é possível
configurar o DNS.

**Os registos a criar, quando ativar:**

```
Quatro registos A, nome vazio ou @
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

Um registo CNAME, nome www
correiaricardina-ui.github.io
```

O domínio já está declarado no GitHub Pages, que é a ordem correta — declarar
primeiro, apontar depois.

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
- **Nunca se publicam fotografias de crianças**, mesmo com autorização.
- **A newsletter foi retirada** em agosto de 2026.
