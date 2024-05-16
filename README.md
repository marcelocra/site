# Site

## Todo

right now:

- v0.1.1
  - [ ] export cv pdf and link

next (in order):

- v0.1.1

  - [ ] figure out the problem with warnings

        09:44:37 ▶ src/pages/blog/index.astro
        09:44:37   └─ /blog/index.html09:44:37 [WARN] `Astro.request.headers` is unavailable in "static" output mode, and in prerendered pages within "hybrid" and "server" output modes. If you need access to request headers, make sure that `output` is configured as either `"server"` or `output: "hybrid"` in your config file,
        and that the page accessing the headers is rendered on-demand.

- vNext
  - [ ] prepare simple mobile version
  - [ ] fix active links
    - https://stackoverflow.com/questions/23699666/javascript-get-and-set-url-hash-parameters
  - [ ] fix click target and behavior in blog post page
  - [ ] dark mode
  - [ ] extract svgs to one component
  - [ ] extract strings to isolated file

done or ~~cancelled~~:

- v0.1.0
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
