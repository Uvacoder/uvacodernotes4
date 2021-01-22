# How to Create Page Like This?

This page is built using [Nextra](https://nextra.vercel.app) ([repo here](https://github.com/shuding/nextra)), a Next.js and MDX powered, no-code site generator by [@shuding](https://github.com/shuding) and [@pacocoursey](https://github.com/pacocoursey) at [Vercel](https://vercel.com). 

It comes with two themes: [docs](https://github.com/shuding/nextra/tree/core/packages/nextra-theme-docs) and [blog](https://github.com/shuding/nextra/tree/core/packages/nextra-theme-blog).

### Configurations
if you use `create-next-app`, just start from step number 3.

1. Create your project folder
```bash
# create your project folder
mkdir <your_project_folder>
cd <your_project_folder>

npm init
# or 
yarn init
```

2. Install React and Next.js 
```bash
npm i next react react-dom
# or
yarn add next react react-dom
```

3. Install nextra and docs / blog theme
```bash
# docs theme
npm i nextra nextra-theme-docs
## or
yarn add nextra nextra-theme-docs

# blog theme
npm i nextra nextra-theme-blog
## or 
yarn add nextra nextra-theme-blog
```

references: [nextra - get started](https://nextra.vercel.app/docs/get-started)