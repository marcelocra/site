---
title: Como escrevere um bom early return em TypeScript (JavaScript)
author: Marcelo Almeida
description: >
  Early return é uma técnica que pode tornar seu código mais legível e fácil de
  manter. Veja como fazer um bom early return em TypeScript (e JavaScript).
createdDate: "2024-12-11T08:19:29-03:00"
pubDate: "2024-12-11T08:19:29-03:00"
updatedDate: "2024-12-11T08:19:29-03:00"
draft: true
tags:
  - typescript
  - javascript
  - qualidade de código
  - boas práticas
---

```typescript
function isOpts(obj: any): obj is Opts {
  return (
    // ...
  );
}

function doSomething(...args: unknown[]) {
  const [first, ...rest] = args;

  const firstIsOpts =
    typeof first === "object" &&
    first !== null &&
    isOpts(first);

  if (!firstIsOpts) {
    return;
  }

  // Do something, knowing that `first` is an `Opts` object.
  // ...
}
```
