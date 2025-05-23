# Site

## Todo

### P0

- Create a mobile version
- Revisar as tags (recent, archived, new) da home, tanto de projects quanto de
  blog

### P1

- fix active links
  - https://stackoverflow.com/questions/23699666/javascript-get-and-set-url-hash-parameters
- fix click target and behavior in blog post page

### P2

- dark mode
- extract svgs to one component
- extract strings to isolated file
- create simple contact url
- add 'quer ideia' link
- add an easter egg that makes the site more fun/different
- create the cv in a dedicated page

## [0.4.0] - 2024-12-16 17:54

### Added

### Fixed

- Add draft to all draft posts (some starting with `_` were not marked as draft)
- Fix width and height of containers, to avoid weird overflows
- Add shadow in small screens for header links
- Use better link anchors

### Changed

### Removed

## [0.3.0] - 2024-12-11 09:56

### Fixed

- Removed unneeded custom component, also fixing the links in blog post list
- Added pnpm as packageManager in package.json, required for the GitHub Action
  to work correctly

### Changed

- Improve posts width

## [0.2.0] - 2024-12-11 09:20

### Added

- Tracking changelog here and versions in [package.json](./package.json).

### Changed

- Update Astro (v4 -> v5)
- Use date or datetime for frontmatter dates in blog posts

## [0.1.5]

- prepare very simple mobile version

## [0.1.4](https://marcelocra-nsqh6zeav3jj.deno.dev)

- [x] figure out the problem with warnings

      09:44:37 ▶ src/pages/blog/index.astro
      09:44:37   └─ /blog/index.html09:44:37 [WARN] `Astro.request.headers` is unavailable in "static" output mode, and in prerendered pages within "hybrid" and "server" output modes. If you need access to request headers, make sure that `output` is configured as either `"server"` or `output: "hybrid"` in your config file,
      and that the page accessing the headers is rendered on-demand.

## [v0.1.3](https://marcelocra-zjpvd67wbd7t.deno.dev/)

- [x] export cv pdf and link

## [v0.1.2](https://marcelocra-d271fd0hn89k.deno.dev/)

- [x] remove 'see all' from projects in index

## [v0.1.0](https://marcelocra-5d6h6vwr081t.deno.dev/)

- [x] figure out why it is not deploying
  - it was because I imported the astro config module in consts.ts
- [x] fix (as in keep static) top bar
- [x] fix blog post style
- [x] fix blog style
- [x] fix blog link in the footer
- [x] fix home link style
- [x] finish updating main page content
  - [x] timeline
  - [x] projects
  - [x] blog excerpts
- [x] improve outlined button hover style
- ~~strings en and pt-br~~
- [x] main page
- [x] about me
- [x] link redirect
