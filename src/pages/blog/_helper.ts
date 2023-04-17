export function isHiddenPage(pageUrl: string) {
  return pageUrl.replace("/blog/", "").startsWith("_");
}
