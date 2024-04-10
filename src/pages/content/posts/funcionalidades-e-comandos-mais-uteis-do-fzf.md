---
title: Funcionalidades e comandos mais úteis do fzf
description: >
  Para quem não conhece, [`fzf`](https://github.com/junegunn/fzf) é uma
  excelente ferramenta de fuzzy searching (busca sem ter match exato, como o
  VSCode faz no `ctrl+p` e `ctrl+shift+p`, por exemplo).

pubDate: 2022-09-25
createdDate: 2022-09-25
updatedDate: 2022-09-30
tags:
  - fzf
  - terminal
  - zsh
---

Para quem não conhece, [`fzf`](https://github.com/junegunn/fzf) é uma excelente
ferramenta de fuzzy searching (busca sem ter match exato, como o VSCode faz no
`ctrl+p` e `ctrl+shift+p`, por exemplo).

Integra muito bem com o terminal e com outras aplicações (Vim/Neovim).

Apesar de já usar `fzf` há alguns anos, recentemente descobri que ele tem
diversas funcionalidades que eu não utilizava, facilitando inclusive tarefas
simples, como alternar entre pastas.

Uma das referências que me ajudou a descobrir mais coisa foi
[esse vídeo do YouTube](https://www.youtube.com/watch?v=qgG5Jhi_Els),
recomendado no próprio repo do `fzf`.

Para quem não quiser ver o vídeo, abaixo vou listar os comandos que acho mais
úteis.

## Funcionalidades e comandos mais úteis

Sempre que eu descobro algo novo e útil, adiciono aqui.

### Piping (processar output de outros comandos)

Qualquer comando pode ter seu output jogado para o fzf, usando um pipe:

```shell
find . -type | fzf
```

(Nesse exemplo em específico, só rodar o comando `fzf` teria o mesmo efeito.)

### `ctrl+t`

Permite que façamos uma busca na árvore de arquivos, começando no diretório onde
estamos atualmente (pwd). Ao selecionar um arquivo ou pasta, o caminho será
colocado na linha de comando, para ser usado em outros comandos.

### `alt+c`

Mesma ideia do `ctrl+t`, mas funciona apenas para diretórios e muda o pwd para o
que foi selecionado (ou seja, faz `cd` para o diretório).

### Usar `**<tab>` para buscar arquivos

Ao chamar um comando que aceita um arquivo como parâmetro (e.g.
`vim caminho-do-arquivo.js`), para não ter que preencher o caminho completo, o
`fzf` permite que se use `**`. Isso vai ativar a busca fuzzy por arquivos,
começando no diretório atual (pwd):

![fzf sendo usado para preencher o caminho de um arquivo](/fzf-double-star.png)

### Ignorar matches

Basta adicionar um `!` antes de termos que quer que sejam excluídos das matches.

### Matches exatas

É possível desativar o fuzzy matching usando o apóstrofe dentro do `fzf` ou
usando a flag `-e` ao ativar o `fzf`:

#### Dentro do fzf

```shell
# Sem apóstrofe:
  config-files/Preferences.sublime-settings
  config-files/windows-terminal-settings.json
  config-files/vscode-snippets.code-snippets
  config-files/init_system.sh
  config-files/init_shell.sh
> copy-pastes/init.sh
  6/23
> init

# Com apóstrofe:
  config-files/init_system.sh
  config-files/init_shell.sh
> copy-pastes/init.sh
  3/23
> 'init
```

#### Antes de chamar o fzf

Ao ativar o `fzf`, é possível dizer que você só quer matches exatos, de forma
que não precise usar o apóstrofe. Basta usar a flag `-e`:

```shell
fzf -e
```

Em seguida, ao digitar `init`, por exemplo, terá os mesmos resultados que no
exemplo anterior com apóstrofe.
