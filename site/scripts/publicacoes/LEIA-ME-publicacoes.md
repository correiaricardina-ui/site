# Publicações agendadas — como funciona

O GitHub corre `scripts/publicar.py` **uma vez por dia**, às 06:00 UTC. O guião vê
se há alguma publicação marcada para hoje nesta pasta, aplica-a e faz o commit
sozinho. Não é preciso ter o computador ligado.

## A primeira vez tem de ser à mão

Antes de confiar na agenda, confirme que funciona:

1. No GitHub, separador **Actions**
2. À esquerda, **Publicações agendadas**
3. Botão **Run workflow** → **Run workflow**

Deve dizer «Nada marcado para hoje» e terminar a verde. Se terminar a vermelho,
alguma coisa está mal e vale a pena resolver antes de haver uma data em risco.

## O que está marcado

| Data | O quê |
|---|---|
| 26 de setembro de 2026 | Cartão do workshop no ENEP, na formação e na página inicial; a tertúlia passa a evento passado |
| 2 de outubro de 2026 | Artigo técnico: filtro novo e cartão na biblioteca, mais a linha no sitemap |

O que já foi aplicado fica em `FEITAS.txt` e não se repete.

## O que este sistema não faz

**Não esconde o que já está no repositório.** O ficheiro do artigo está público
desde que foi enviado, mesmo sem ligação — o que se agenda é o momento em que
passa a estar ligado e no sitemap.

**A hora não é garantida.** O GitHub pode atrasar-se de minutos a algumas horas.
Marcado para as 06:00 UTC, sai de manhã — não a horas certas.

**Desativa-se após 60 dias sem atividade** no repositório. Com publicações
semanais, não chega lá.

## Se falhar

O guião foi escrito para **falhar em vez de escrever mal**. Se uma âncora não for
encontrada — porque o ficheiro mudou entretanto —, aborta sem tocar em nada e o
GitHub avisa por email. Nesse caso faz-se à mão e corrige-se o guião.

## Marcar uma publicação nova

Copiar um dos ficheiros desta pasta, dar-lhe o nome `AAAA-MM-DD-assunto.py` e
editar `DATA`, `RESUMO` e a função `aplicar()`. As funções disponíveis são
`inserir`, `substituir`, `ler` e `escrever` — todas com escrita segura e com
verificação de que a âncora é única.
