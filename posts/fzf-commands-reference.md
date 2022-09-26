---
title: Lista de comandos do `fzf`
publish_date: 2022-09-25

created_date: 2022-09-25
last_edit: 2022-09-25
---

Para quem não conhece, [`fzf`](https://github.com/junegunn/fzf) é uma excelente
ferramenta de fuzzy searching.

Integra muito bem com o terminal e com outras aplicações (por exemplo, Vim/
Neovim).

Apesar de já usar `fzf` há alguns anos, recentemente descobri que ele tem
diversas funcionalidades que eu não utilizava, facilitando inclusive o uso de
ferramentas como `cd` para alternar entre pastas.

Uma das referências que me ajudou a descobrir mais coisa foi
[esse vídeo do YouTube](https://www.youtube.com/watch?v=qgG5Jhi_Els),
recomendado no próprio repo do `fzf`.

Para quem não quiser ver o vídeo todo pra descobrir os comandos, abaixo está uma
lista dos que achei mais úteis.

## Comandos essenciais

- `ctrl+t`: permite que façamos uma busca na árvore de arquivos que começa no
  diretório onde estamos atualmente (pwd). Ao selecionar um arquivo ou pasta, o
  caminho será colocado na linha de comando, para ser usado como quisermos.
- `alt+c`: mesma ideia do `ctrl+t`, mas muda o pwd para o diretório selecionado
  (ou seja, faz `cd` para o diretório).
