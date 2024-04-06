---
title: Será que TypeScript é sempre a melhor solução?
description: >
  Recentemente, enquanto fuçava na codebase do [Svelte
  Kit](https://github.com/sveltejs/kit) (equivalente ao Next.js para Svelte), vi
  que eles usam principalmente JavaScript.
pubDate: Jan 23, 2023
createdDate: Jan 23, 2023
updatedDate: Jan 23, 2023
tags:
  - svelte
  - sveltekit
  - javascript
  - typescript
  - nextjs
---

Recentemente, enquanto fuçava na codebase do
[Svelte Kit](https://github.com/sveltejs/kit) (equivalente ao Next.js para
Svelte), vi que eles usam principalmente JavaScript.

Sim, usam tipos por meio de
[comentários nas JSDocs](https://github.com/sveltejs/kit/blob/1494ff8a16bfdfa6ce847b18fe048ed6664637e2/packages/kit/src/core/sync/sync.js),
mas como TODO MUNDO agora acha que deve usar TypeScript pra TUDO, achei
interessante entender qual foi o motivo da escolha deles e fui pesquisar a
respeito.

Cheguei em uma issue que apresenta os motivos principais da escolha:

> - You can still generate types from JSDoc source code and the resulting code
>   is generally smaller than TS-compiled code
>   ([source](https://twitter.com/Rich_Harris/status/1350436286948122625))
>
>   _("Ainda é possível gerar os tipos do código que usa JSDoc e o resultado
>   normalmente é código menor do que o gerado pelo compilador do TS.")_
>
> - Using JS made it easier to make changes when the project was in an
>   experimental phase
>   ([source](https://twitter.com/Rich_Harris/status/1487933546966753284))
>
>   _("Usar JS facilitou fazer mudanças quando o projeto ainda estava em fase
>   experimental.")_
>
> - Using JSDoc types means you can run tests without adding a build step
>   ([source](https://twitter.com/Rich_Harris/status/1440447529934417923))
>
>   _("Usar tipos pelo JSDoc significa que você consegue rodar testes sem
>   precisar de um passo de build.")_

O comentário referencia vários Tweets do criador do Svelte e de outros
mantenedores do projeto.

Um deles fala que ainda pretendiam voltar para TypeScript antes de liberar o
projeto como público (ou seja, antes do 1.0).

É um Tweet de janeiro de 2021.

Em resposta a ele, o criador do Svelte fala que ainda ia tentar convencer o
pessoal a continuar usando JSDoc com tipos.

Recentemente o projeto foi lançado na versão 1.0 e ainda estão usando JSDoc com
tipos hahaha... parece que conseguiu.

A conclusão é: não faz sentido considerar usar uma tecnologia simplesmente
porque todos estão usando. Precisamos olhar para nossos projetos e pensar com
cuidado se faz sentido ou não usar uma tecnologia.

O que ela traz de bom? O que traz de ruim? Vale à pena?

Em resumo, não... TypeScript não é sempre a melhor solução :).

p.s.:
[Aqui está o link para a discussão no GitHub](https://github.com/sveltejs/kit/discussions/4429).
