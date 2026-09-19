#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Publicações agendadas — ricardinacorreia.pt

Corre uma vez por dia. Vê se há alguma publicação marcada para hoje em
scripts/publicacoes/ e, havendo, aplica-a e assinala-a como feita.

Cada publicação é um ficheiro .py em scripts/publicacoes/ com:
    DATA     — a data de publicação, no formato AAAA-MM-DD
    RESUMO   — a mensagem do commit
    def aplicar(): — faz as alterações; devolve a lista de ficheiros mexidos

REGRAS QUE ESTE GUIÃO SEGUE
  · Se uma âncora não for encontrada, falha e não escreve nada. Mais vale não
    publicar do que publicar mal — e o GitHub avisa por email.
  · Escreve para .tmp e substitui com os.replace, para nunca deixar um ficheiro
    truncado se alguma coisa correr mal a meio.
  · Uma publicação já feita não se repete: fica registada em
    scripts/publicacoes/FEITAS.txt
"""
import os, sys, datetime, importlib.util, pathlib

RAIZ = pathlib.Path(__file__).resolve().parent.parent
PASTA = RAIZ / 'scripts' / 'publicacoes'
FEITAS = PASTA / 'FEITAS.txt'


def ler(caminho):
    return (RAIZ / caminho).read_text(encoding='utf-8')


def escrever(caminho, texto, minimo=0):
    """Escrita segura: nunca trunca o ficheiro original."""
    p = RAIZ / caminho
    original = p.read_text(encoding='utf-8') if p.exists() else ''
    if minimo and len(texto) < minimo:
        raise SystemExit(f'ABORTADO: {caminho} encolheu de {len(original)} para {len(texto)}')
    if original and len(texto) < len(original) * 0.8:
        raise SystemExit(f'ABORTADO: {caminho} encolheu mais de 20%')
    tmp = p.with_suffix(p.suffix + '.tmp')
    tmp.write_text(texto, encoding='utf-8')
    os.replace(tmp, p)


def inserir(caminho, ancora, extra, depois=True):
    """Insere extra antes ou depois de ancora. A âncora tem de ser única."""
    t = ler(caminho)
    n = t.count(ancora)
    if n != 1:
        raise SystemExit(f'ABORTADO: em {caminho}, a âncora aparece {n} vezes.\n'
                         f'  âncora: {ancora[:90]}')
    novo = t.replace(ancora, ancora + extra if depois else extra + ancora, 1)
    escrever(caminho, novo, minimo=len(t))
    return caminho


def substituir(caminho, antigo, novo):
    t = ler(caminho)
    n = t.count(antigo)
    if n != 1:
        raise SystemExit(f'ABORTADO: em {caminho}, o texto a substituir aparece {n} vezes.\n'
                         f'  texto: {antigo[:90]}')
    escrever(caminho, t.replace(antigo, novo, 1))
    return caminho


def feitas():
    if not FEITAS.exists():
        return set()
    return {l.split('  ')[0] for l in FEITAS.read_text(encoding='utf-8').splitlines() if l.strip()}


def registar(nome, data):
    with FEITAS.open('a', encoding='utf-8') as f:
        f.write(f'{nome}  publicado em {data}\n')


def saida(chave, valor):
    ficheiro = os.environ.get('GITHUB_OUTPUT')
    if ficheiro:
        with open(ficheiro, 'a', encoding='utf-8') as f:
            f.write(f'{chave}={valor}\n')


def main():
    hoje = datetime.date.today().isoformat()
    ja = feitas()
    aplicadas = []

    for ficheiro in sorted(PASTA.glob('*.py')):
        if ficheiro.name.startswith('_') or ficheiro.stem in ja:
            continue
        spec = importlib.util.spec_from_file_location(ficheiro.stem, ficheiro)
        mod = importlib.util.module_from_spec(spec)
        sys.modules[ficheiro.stem] = mod
        spec.loader.exec_module(mod)

        if getattr(mod, 'DATA', None) != hoje:
            continue

        print(f'A aplicar: {ficheiro.stem} — {mod.RESUMO}')
        mexidos = mod.aplicar(inserir=inserir, substituir=substituir,
                              ler=ler, escrever=escrever)
        for m in mexidos:
            print(f'  alterado: {m}')
        registar(ficheiro.stem, hoje)
        aplicadas.append(mod.RESUMO)

    if aplicadas:
        saida('alterou', 'sim')
        saida('mensagem', ' | '.join(aplicadas))
        print('Feito.')
    else:
        saida('alterou', 'nao')
        print(f'Nada marcado para {hoje}.')


if __name__ == '__main__':
    main()
