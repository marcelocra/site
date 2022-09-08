/** @jsx h */

import blog, { h } from "blog";

blog({
  title: "Marcelo Almeida",
  author: "Marcelo Almeida",
  description: "Um blog de programação",
  avatar: "https://github.com/marcelocra.png?size=100",
  avatarClass: "rounded-full",
  favicon: "./logo.svg",

  lang: "pt-br",
  theme: "dark",
  dateStyle: "medium",
  port: 1111,

  links: [
    { title: "Email", url: "mailto:dev@marcelocra.com" },
    { title: "GitHub", url: "https://github.com/marcelocra" },
    {
      title: "Telegram",
      url: "https://t.me/marcelocra",
      icon: <img style="padding:7px" src="./msg.svg"></img>,
    },
    // { title: "Instagram", url: "https://instagram.com/marcelocra" },
  ],

  middlewares: [
    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //   // "/hello-world.html": "/hello-world",
    // }),
  ],
});
