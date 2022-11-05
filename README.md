# 📝 prince-assessment

**An assessment to test my ability to build and compose components.** [Design file](https://www.figma.com/file/ogmqYR5Quhaz71cRo58I8c/assessment-design-file?node-id=0%3A46)

### About this repo

```sh
prince-assessment/
├── apps                        
|   └── web-app                 # Webstie
|
└── libs/
    └── components/
        └── src/
            └── lib/            # Components for @prince-assessment/components package
                └── [component] # Individual components
```

### Libraries

🧰 &nbsp; [NX](https://nx.dev/) — Monorepo manager

🎨 &nbsp; [Vanilla Extract](https://vanilla-extract.style) - CSS-in-TS styling library

🧱 &nbsp; [Radix UI](https://www.radix-ui.com/) - Headless accessible components

✂️ &nbsp; [Capsize](https://seek-oss.github.io/capsize/) - Font trimming

📈 &nbsp; [React Chart Js](https://react-chartjs-2.js.org/) - Headless charts

🏓 &nbsp; [Tanstack Table](https://tanstack.com/table/v8) - Headless table

### Install dependencies and run app

```sh
# install packages
yarn install

# to run
npx nx run web-app:serve 
