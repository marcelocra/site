---
title: Alterne entre projetos rapidamente
publish_date: 2022-09-21

created_date: 2022-09-21
last_edit: 2022-09-21
---

Ainda que `cd` seja um jeito muito fácil de mover entre projetos, dá pra fazer
isso mais rapidamente usando uma combinação de `popd`, `pushd` e `alias`.

No meu `~/.zshrc` (mas tb vale para o bash, fish, etc), eu defini aliases para
cada um dos meus diretórios mais usados, bem como "sobrescrevi" o `cd` padrão:

```bash
# Use o `pushd` como `cd`.
alias cd="pushd"

# O `j` significa `jump` (ou pular).
alias jdoc="cd ~/path/to/docs/project"
alias jblog="cd ~/path/to/blog/project"
```

Dessa forma consigo rapidamente alternar para os projetos, simplesmente chamando
`jdoc`, por exemplo, de qualquer lugar.

Se quiser voltar para a pasta inicial, basta chamar `popd`. Isso porque fizemos
aquele override do `cd` para `pushd`: esse comando coloca o caminho que você dá
pra ele em uma pilha, que o `popd` remove quando chamado.

Por exemplo:

```bash
# Diretório atual: ~
# Pilha: [~]

pushd ~/work

# Diretório atual: ~/work
# Pilha: [~, ~/work]

pushd ~/work/project

# Diretório atual: ~/work/project
# Pilha: [~, ~/work, ~/work/project]

popd

# Diretório atual: ~/work
# Pilha: [~, ~/work]
```

(Não sei se é exatamente assim que funciona, mas você pode pensar que o caminho
que está no topo da pilha é seu diretório atual.)

Você ainda vai precisar do `cd` pra mover internamente nos projetos, mas só com
essas pequenas mudanças provavelmente já vai economizar um bom tempo.
