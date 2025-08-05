// latte / frappe / macchiato / mocha
const palette = macchiato;

const default_config = {
  overrideStorage: true,
  disabled: [],
  openLastVisitedTab: true,
  localIcons: true,
  tabs: [
    {
      name: "home",
      background_url: `src/img/banners/cbg-12.gif`,
      categories: [
        {
          name: "",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.blue,
            },
            {
              name: "blackboard",
              url: "https://elearning.uminho.pt/",
              icon: "books",
              icon_color: palette.green,
            },
            {
              name: "docs",
              url: "https://docs.google.com/document/u/0/",
              icon: "file-text",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "twitter",
              url: "https://x.com",
              icon: "brand-twitter",
              icon_color: palette.text,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "Notion",
              url: "https://www.notion.so/Notion-9dbbe3c39e7f45e79e51150c7bcfe634",
              icon: "brand-notion",
              icon_color: palette.green,
            },
            {
              name: "F1",
              url: "https://f1tv.formula1.com/",
              icon: "helmet",
              icon_color: palette.red,
            },
            {
              name: "Twitch",
              url: "www.twitch.tv",
              icon: "brand-twitch",
              icon_color: palette.purple,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "outlook",
              url: "https://outlook.office.com/mail/",
              icon: "mail-spark",
              icon_color: palette.yellow,
            },
            {
              name: "FMHY",
              url: "https://fmhy.net/",
              icon: "skull",
              icon_color: palette.peach,
            },
            {
              name: "chatgpt",
              url: "https://chatgpt.com/",
              icon: "brand-openai",
              icon_color: palette.teal,
            
            },
          ]
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
