# 📝 Exploring dashboard styling with Vanilla Extract

**Design File ->** [Design file](https://www.figma.com/file/qVnSyRyvmpCIIimDiRl96y/dashboard-ui-vanilla-extract?type=design&node-id=0-1&mode=design)

## About this repo

```sh
vanilla-extract-dashboard/
├── apps                        
|   └── web-app                 # Website
|
└── libs/
    └── components/
        └── src/
            └── lib/            # Components for @/components package
                └── [component] # Individual components
```

## Libraries

🧰 &nbsp; [NX](https://nx.dev/) — Monorepo manager

🎨 &nbsp; [Vanilla Extract](https://vanilla-extract.style) - CSS-in-TS styling library

🧱 &nbsp; [Radix UI](https://www.radix-ui.com/) - Headless accessible components

✂️ &nbsp; [Capsize](https://seek-oss.github.io/capsize/) - Font trimming

📈 &nbsp; [React Chart Js](https://react-chartjs-2.js.org/) - Headless charts

🏓 &nbsp; [Tanstack Table](https://tanstack.com/table/v8) - Headless table

### Install dependencies and run app

```sh
# install packages
pnpm install

# to run
 pnpm exec nx run web-app:serve
