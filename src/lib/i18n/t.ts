import { defaultLocale } from "../../consts";

let preferredLocale = defaultLocale;

export function setLocale(locale: string) {
  preferredLocale = locale;
}

/**
 * @param id The identifier used for this string in the string file for one particular locale.
 */
export function t(id: string) {
  const strings = import(`./strings/${preferredLocale}.js`);

  // @ts-ignore
  return strings[id] ?? "not there";
}
