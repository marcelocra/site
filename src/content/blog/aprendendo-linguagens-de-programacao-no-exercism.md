---
title: Aprendendo liguagens de programação (funcionais?) no Exercism
description: >
  Uma forma bem interessante de aprender linguagens de programação.

pubDate: 2023-03-04
createdDate: 2023-03-02
updatedDate: 2023-03-17
tags:
  - f#
  - fsharp
  - exercism
  - aprender
---

Aprender linguagens de programação não é algo inútil e que simplesmente ocupa o
tempo. Linguagens diferentes podem mudar a forma como você pensa sobre
programação e até mesmo sobre como vai resolver certos problemas.

O que é necessário para aprender uma nova linguagem?

Depois que você entende o básico de programação, basta remapear os mecanismos de
uma linguagem para a outra, certo?

Mais ou menos.

Dependendo do tipo de linguagem, os mecanismos são tão diferentes que você
realmente precisa aprender um novo jeito de pensar.

Um bom exemplo disso são as linguagens funcionais.

Quando você começa a aprender alguma delas -- especialmente as que não te dão
muitas formas de "escapar" da parte funcional --, acaba se forçando a resolver
problemas de uma maneira bem diferente.

Vamos ver um exemplo prático.

O problema: como montar acrônimos das palavras de uma frase, considerando apenas
`-` e `_` (espaço) como separadores e ignorando casing (upper/lower). Por
exemplo, "Visual Studio Code" seria "VSC", "kebab-case" seria "KB".

(Esse é um dos exercícios de F# no [Exercism](https://exercism.org). Falo mais
sobre esse site em seguida.)

Na abordagem tradicional e imperativa, seria mais ou menos assim:

```js
function abbreviate(phrase) {
  const words = phrase.replace("-", " ").split(" ");

  let res = "";
  for (let word of words) {
    res += word[0].toUpperCase();
  }

  return res;
}
```

A solução em F# fica assim:

```fsharp
let abbreviate (phrase: string) =
    // Everything that is not a letter or space.
    let delimiters = "[^a-zA-Z ]"

    // '-' is considered whitespace, so remove it first.
    let noHyphens = phrase.Replace("-", " ")

    let initialsArray =
        Regex.Replace(noHyphens, delimiters, "").Split(" ")
        |> Array.filter (fun x -> x <> "") // Ignore consecutive spaces.
        |> Array.map (fun x -> Char.ToUpper(x.[0]))
        |> String

    String.Join("", initialsArray)
```

Linguagens imperativas favorecem modificações enquanto as funcionais favorecem
transformações.

Pra quem não conhece, o operador `|>` passa o output de uma função para a
próxima, que acessa os novos valores e pode aplicar novas transformações. Muita
coisa no mundo funcional é feita desse jeito.

JavaScript até permite uma abordagem funcional, de forma que é possível fazer
algo parecido nela, mas não encoraja e não é como a maior parte do código é
escrito.

Agora, como é a melhor forma de aprender novas linguagens?

Um jeito simples e muito usado é o de seguir os "getting started" dos sites das
linguagens. Quase todas as linguagens têm um.

Entretanto, muitas vezes eles dão diversos recursos soltos, sem um caminho claro
e bem definido do que fazer.

O [Exercism](https://exercism.org), que mencionei acima, é diferente.

Ele tem trilhas para várias linguagens, algumas com programa de estudo (chama de
syllabus) bem definido, alternando entre conceitos e exercícios.

À medida que você vai avançando, vai tendo desafios mais difíceis e aprendendo
partes mais complexas das linguagens.

Estou aprendendo F# por lá nesse momento, com algumas outras linguagens no
plano.

Inclusive, esse ano eles estão com um desafio bem legal chamado 12in23, que
estimula as pessoas a aprenderem o básico de 12 linguagens diferentes durante
2023, uma por mês.

Além disso, cada mês foca em um estilo diferente. Fevereiro, por exemplo, focava
em linguagens funcionais tipo F#, Elixir, Haskell e outras. Março foca nas
linguagens mais "próximas da máquina", como Go, Rust, Nim, Zig, V e as
conhecidas C e C++.

<div class="italic text-xs text-orange-400">
Edit 17mar2023: estou testando diversas trilhas, incluindo Common Lips, Rust e 
V (vlang.io). Está sendo bem interessante.
</div>

Terão meses com linguagens ainda mais incomuns, tipo Smalltalk, Prolog, Common
Lisp, etc.

Vou testando e mais pra frente conto se deu certo ou não.

E se você quiser testar junto, dá uma olhada
[no site do projeto](https://exercism.org/challenges/12in23).

Se quiser aprender um jeito diferente de pensar sobre programação, aprenda uma
linguagem nova. O Exercism é uma boa forma de fazer isso.
