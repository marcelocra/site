import { defaultLocale } from "../../consts";
import { setLocale } from "./t";

export function prepareInternalUrl(
  currentLocale: string,
  pathFromIndex: string
) {
  setLocale(currentLocale);

  if (currentLocale === defaultLocale) {
    return pathFromIndex;
  }

  return `/${currentLocale}${pathFromIndex}`;
}
