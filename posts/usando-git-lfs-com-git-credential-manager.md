---
title: Usando git-lfs com Git Credential Manager
publish_date: 2022-10-06

created_date: 2022-10-06
last_edit: 2022-10-06
---

`git-lfs` permite que se adicione arquivos grandes em um repositório do git sem
que o arquivo faça parte do histórico. Basicamente ele adiciona um ponteiro para
o arquivo, que vai ser armazenado no provedor git que você utilizar (por
exemplo, github).

Git Credential Manager (GCM) é uma forma de gerenciar credenciais do git para um
determinado sistema, com suporte para Windows, Linux e Mac.

Acontece que quando usamos os dois juntos, particularmente no caso de múltiplos
usuários, as coisas não são tão suaves.

Para múltiplos usuários, o GCM espera que o seu username apareça antes do
domínio na URL do remote. Por exemplo:

```diff
[remote "origin"]

-  url = https://github.com/marcelocra/blog.git
+  url = https://marcelocra@github.com/marcelocra/blog.git
```

O problema é que o `git-lfs` parece não entender essa url por algum motivo, não
sendo capaz de identificar as credenciais.

Dessa forma, ao tentar rodar o comando para enviar os arquivos para o storage do
GitHub, temos o seguinte erro:

```shell
# Apesar de ser dry-run, ele contacta o servidor.
> git lfs push origin main --dry-run --all
error: Authentication error: Authentication required: You must have push access to verify locks
```

Desfazendo a mudança que o GCM espera (removendo `marcelocra` no remote acima),
o comando funciona[^1], retornando os arquivos que serão adicionados:

```shell
> git lfs push origin main --dry-run --all
push ... => file1
push ... => file2
...
```

e populando o `.git/config` (git config local do repositório) automaticamente
com a seguinte entrada:

```conf
[lfs "https://github.com/marcelocra/blog.git/info/lfs"]
  access = basic
```

E esse é o segredo!

Essa linha que o `git-lfs` adiciona no `.git/config` é o que parece permiti-lo
identificar as credenciais, dado que a partir desse ponto tudo funciona, até
mesmo se você colocar o username novamente na URL do remote (o que você
provavelmente vai querer fazer)!

[^1]: Assumindo que nesse sistema você ainda não está usando múltiplos
usuários... se estiver, o final vai te ajudar.
