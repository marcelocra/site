const linkTable = new Map(
  Object.entries({
    cv: "https://www.canva.com/design/DAFfJBLsVSs/ZwPgH-8mUYYqveOQHr6gSQ/edit?utm_content=DAFfJBLsVSs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
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
