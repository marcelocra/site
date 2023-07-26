import links from './_links.js'

const linkTable = new Map(links)

export async function get({ params, request, redirect }) {
  const link = params.link
  const url = new URL(request.url)

  const search = new URLSearchParams(url.search)
  const hasShow = search.has('show') || search.has('s')

  let urlForPath = linkTable.get(link)

  if (hasShow) {
    return new Response(urlForPath, {
      status: 200,
      headers: {
        'content-type': 'text/plain',
      },
    })
  }

  if (urlForPath) {
    return redirect(urlForPath, 302)
  }

  return new Response(null, {
    status: 404,
    statusText: 'Not found',
  })
}
