---
title: A melhor forma de gerenciar múltiplos usuários do GitHub pelo Git
description: >
  Depois de um tempo procurando uma boa forma de lidar com múltiplos usuários do
  GitHub por meio da linha de comando do Git, finalmente eu encontrei uma
  solução.

pubDate: "2022-09-26"
createdDate: "2022-09-26"
updatedDate: "2022-09-26"
tags:
  - git
  - git credential manager
---

Depois de um tempo procurando uma boa forma de lidar com múltiplos usuários do
GitHub por meio da linha de comando do Git, finalmente eu encontrei uma solução.

E ela se chama Git Credential Manager.

Permite que configuremos os nossos repositórios de forma que as credenciais
sejam usadas corretamente para cada conta, de forma automática.

É claro que para que isso realmente aconteça, precisamos de fazer algumas
configurações iniciais, que irei descrever em detalhes.

Até lá, confira a página principal do repositório, em:

https://github.com/GitCredentialManager/git-credential-manager

<!-- https://github.com/GitCredentialManager/git-credential-manager/blob/main/docs/credstores.md#gpgpass-compatible-files -->
