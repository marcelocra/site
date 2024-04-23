---
title:
  Simplificando a escrita de classes condicionais do CSS com a biblioteca clsx
description: >
  A biblioteca `clsx` facilita a escrita de classes condicionais do CSS e deixa
  o resultado mais fácil de ler, editar e formatar (pelo Prettier).
pubDate: 2024-04-23
createdDate: 2024-04-23
# updatedDate: 2024-04-23
tags:
  - javascript
  - css
---

A biblioteca `clsx` facilita a escrita de classes condicionais do CSS e deixa o
resultado mais fácil de ler, editar e formatar (pelo Prettier).

Claro que não fica perfeito, afinal muitos condicionais adicionam complexidade a
qualquer tipo de código.

Entretanto, o simples fato dessa lib permitir que cada condicional fique em uma
linha separada já é uma grande vantagem (aqui - e sempre - eu formatei
automaticamente, com o Prettier).

Veja, abaixo, um exemplo de uso real.

Essa lib ainda traz outro benefício que pode parecer pequeno e passar
despercebido inicialmente, mas é muito relevante: com ela, não precisamos tomar
conta dos espaços em branco que ficam ao redor de cada classe como ao usar
template literals.

Por exemplo, um erro que pode acontecer é esse:

```js
<button class={`some-class${shadow ? "other-class" : ""}`}>the button</button>
```

Faltou um espaço entre `some-class` e `other-class` quando a variável `shadow` é
verdadeira. Isso fará com que os estilos não sejam aplicados corretamente.

Nesse caso é fácil de ver, mas isso fica mais complicado à medida que mais
condicionais são adicionadas.

ps.: A existências de muitas classes condicionais no mesmo componente podem
indicar que aquele componente tá fazendo coisa demais e talvez devesse ser
refatorado, mas isso é assunto pra outra postagem.

## Exemplos

Note que as classes são as mesmas... eu escrevi os dois botões, começando sem
`clsx` e depois migrando pra lib.

**Sem `clsx`:**

```jsx
<button
  class={`font-bold px-10 py-2 rounded-[10px] hover:bg-opacity-60 ${
    outline ? "btn-outline border-2 border-black" : "bg-[#160033] text-white"
  } ${shadow ? "drop-shadow-md" : ""}`}
>
  {t("startProject")}
</button>
```

**Com `clsx`:**

```jsx
<button
  class={clsx(
    "font-bold px-10 py-2 rounded-[10px] hover:bg-opacity-60",
    outline ? "btn-outline border-2 border-black" : "bg-[#160033] text-white",
    shadow ? "drop-shadow-md" : ""
  )}
>
  {t("startProject")}
</button>
```
