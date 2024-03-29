# sass

## Sass in a project

Install sass globally

```bash
  npm i -g sass
```

Folders and files structur on a project

```bash
  project
  └── public
      ├── index.html
      ├── css
      │   └── index.css
      └── sass
          ├── index.scss
          ├── pages
          │   ├── page1.scss
          │   ├── page2.scss
          │   └── page3.scss
          └── variables
              ├── colors
              │   └── colors.scss
              └── common
                  └── common.scss
```

CLI to run and watch sass 

```bash
  sass --watch sass/index.scss:css/index.css
```

CLI to run and minify sass 

```bash
  sass sass/index.scss:css/index.css --style compressed
```