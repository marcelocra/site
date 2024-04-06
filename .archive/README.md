# Blog

Ainda não defini de fato o que vou usar para construir esse blog. Enquanto isso
estou escrevendo os posts e testando as coisas (no momento,
[Astro](https://astro.build)).

Comecei com Deno e o
[template oficial de blog](https://github.com/denoland/deno_blog) que eles
oferecem, mas achei limitado. E como já estou construindo
[meu site](https://github.com/marcelocra/marcelocra.github.io) usando Deno (e
[Fresh](https://fresh.deno.dev/)), achei que seria interessante testar algo
diferente.

Vamos ver onde isso vai dar :).

## Apêndice

Abaixo você pode ver o readme original do template que usei aqui, caso queira
testar no seu blog.

<details>
  <summary>Clique aqui para ver o readme original.</summary>

# Astro Starter Kit: Blog

```
npm create astro@latest -- --template blog
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![blog](https://user-images.githubusercontent.com/4677417/186189140-4ef17aac-c3c9-4918-a8c2-ce86ba1bb394.png)

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page
is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put
any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our
[Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely
[Bear Blog](https://github.com/HermanMartinus/bearblog/).

</details>
