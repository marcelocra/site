import { defaultLocale } from "../../consts";
import { getLocale } from "./t";

export function prepareInternalUrl(pathFromIndex: string) {
  let locale = getLocale() ?? defaultLocale;

  if (locale === defaultLocale) {
    return pathFromIndex;
  }

  return `/${locale}${pathFromIndex}`;
}
