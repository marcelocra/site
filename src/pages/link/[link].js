const linkTable = new Map(
  Object.entries({
    cv: "https://www.canva.com/design/DAFfJBLsVSs/bNFNumjdhWy4ZldHkvSKOQ/view?utm_content=DAFfJBLsVSs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    linkedin: "https://www.linkedin.com/in/marcelocra",
    whatsapp: "https://wa.me/5531971320866",
  })
);

export async function get({ params, redirect }) {
  const link = params.link;

  let url = linkTable.get(link);
  if (url) {
    return redirect(url, 302);
  }

  return new Response(null, {
    status: 404,
    statusText: "Not found",
  });
}
