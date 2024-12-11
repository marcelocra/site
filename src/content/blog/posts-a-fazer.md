---
title: Posts a fazer
description: Posts que ainda quero fazer nesse blog.
pubDate: "2024-11-04"
createdDate: "2024-11-04"
updatedDate: "2024-11-04"
draft: true
---

Posts que ainda quero fazer nesse blog, com alguns detalhes.

TODO: talvez criar um componente que permita que as pessoas votem?

## Como usar Elm em uma extensão do Chrome

## Como escrever scripts com Deno 2

## Entender porque o código comentado não funciona

```typescript
const hasTime = date.length > 10;
// const opts = hasTime
//   ? {
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: false,
//     }
//   : {
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: false,
//     };

let formattedDate = new Date(date).toLocaleDateString(
  navigator.language ?? "pt-br",
  {
    year: "numeric",
    month: "short",
    day: "numeric",
    ...(hasTime ? { hour: "2-digit", minute: "2-digit", hour12: false } : {}),
  }
);
```

## CSS position relative e absolute

<Hello />
