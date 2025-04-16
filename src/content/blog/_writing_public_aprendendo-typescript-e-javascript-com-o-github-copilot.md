---
title: Aprendendo TypeScript (e JavaScript) com o GitHub Copilot
author: Marcelo Almeida
description: >
  Como o **GitHub Copilot** me ajuda a aprender TypeScript (e JavaScript)
  **diariamente**.
createdDate: "2024-12-11T07:45:22-03:00"
pubDate: "2024-12-11T08:56:05-03:00"
writing: true
tags:
  - github
  - github copilot
  - copilot
  - typescript
  - javascript
---

O GitHub Copilot tem sido um grande aliado no meu processo de aprofundamento em
TypeScript.

Além de acelerar muito o processo de escrita de código boilerplate[^1], muitas
vezes ele me permite evitar ter que pesquisar como fazer algo que ainda não sei.

E se dou "dicas" durante a escrita do código, ele traz resultados ainda
melhores.

Por exemplo, precisava detectar se um objeto tinha uma propriedade `opts` e, se
tivesse, extrair essa propriedade e o restante do objeto.

Inicialmente eu não tinha ideia de como fazer isso. Comecei a escrever e o
Copilot já me deu a linha completa do condicional. Em seguida, queria fazer um
cast[^2] para o tipo correto. Escrevi o tipo em outra parte do arquivo e quando
voltei, ele já me sugeriu o cast. Em seguida, queria tipar[^3] o restante do
objeto... ele também me disse como. Chegamos nisso, que é um resultado inicial
bem satisfatório:

```typescript
if (typeof first === "object" && first !== null && "opts" in first) {
  const { opts, ...restFirst } = first as {
    opts: Opts;
    [key: string]: unknown;
  };
  if (opts.group) {
    console.groupCollapsed();
    console.log(restFirst);
    return;
  }
}
```

Ainda dá pra melhorar, mas já ajudou demais. Pontos positivos:

- Relembrei o `in`
- Descobri que é possível fazer destructuring[^4] de um objeto e extrair o
  restante dele
- Descobri como declarar um tipo que tem uma propriedade específica e o restante
  do objeto, tudo inline[^5]

[^1]:
    Código "boilerplate" é aquele que é necessário para o funcionamento das
    coisas, mas não é o foco do que se está fazendo. Por exemplo, importar
    módulos, criar interfaces, etc.

[^2]:
    "Cast" é a conversão de um tipo para outro. No caso, eu queria que o
    TypeScript entendesse que o objeto que eu estava manipulando tinha uma
    propriedade específica.

[^3]:
    "Tipar" é dizer ao TypeScript qual é o tipo de uma variável, parâmetro, etc.

[^4]:
    "Destructuring" é a técnica de extrair valores de um objeto ou array e
    atribuí-los a variáveis, tudo em uma única linha. Por exemplo:

    ```typescript
    const { name, age } = person;
    ```

[^5]:
    "Inline" é algo que é feito no mesmo lugar onde é usado, sem precisar de uma
    declaração separada. Por exemplo:

    ```typescript
    const person: { name: string } = { name: "Marcelo" };
    ```

    Aqui estamos dizendo qual é o tipo de `person` no mesmo lugar onde ele é
    criado.
