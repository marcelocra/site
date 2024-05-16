// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Marcelo Almeida";
export const SITE_DESCRIPTION =
  "Seja bem vindo ao meu site pessoal! Aqui você encontra informações sobre mim e meus projetos.";

/**
 * Returns a random number between the two values, starting at {@link from} and
 * ending at {@link to}.
 *
 * @param from the minimum value
 * @param to the maximum value
 * @returns the random number between the two values
 */
export function randomFromTo(from: number, to: number) {
  return from + Math.floor(Math.random() * (to - from));
}
