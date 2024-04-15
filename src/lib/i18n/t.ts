import { defaultLocale } from "../../consts";

let preferredLocale = defaultLocale;

export function setLocale(locale: string) {
  preferredLocale = locale;
}

export function getLocale() {
  return preferredLocale;
}

/**
 * @param id The identifier used for this string in the string file for one particular locale.
 */
export async function t(id: string) {
  const { default: strings } = await import(`./strings/${preferredLocale}.js`);

  return strings[id] ?? "not there";
}
