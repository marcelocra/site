const defaultStrings = {
  appName: "Utilitários",
  appDescription: "Conjunto de utilitários para facilitar o dia a dia.",
  appIndexInstructions:
    "Escolha um dos apps disponíveis na barra lateral, à esquerda.",

  numberToFullText: {
    url: "/number-to-full-text",
    title: "Número por extenso",
    description: "Converte um número para sua forma por extenso.",
    placeholder: "Digite um número e aperte Enter",
    result: "Resultado",
    convert: "Converter",
  },
  settings: {
    url: "/settings",
    title: "Configurações",
  },
};

abstract class DeaultStrings {
  strings: typeof defaultStrings;

  constructor() {
    this.strings = defaultStrings;
  }
}

class PtBrStrings extends DeaultStrings {}

// class EnStrings extends DeaultStrings {
//   constructor() {
//     super();

//     this.strings.appDescription = "Set of utilities to make your day easier.";

//     this.strings.numberToFullText.title = "Number to full text";
//   }
// }

const strings = new PtBrStrings();
export const s = { ...strings.strings };
