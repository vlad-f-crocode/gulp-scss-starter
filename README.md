# gulp-scss-starter

![License](https://img.shields.io/github/license/vlad-f-crocode/gulp-scss-starter)
![GitHub stars](https://img.shields.io/github/stars/vlad-f-crocode/gulp-scss-starter.svg?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/vlad-f-crocode/gulp-scss-starter.svg?style=social)

## Содержимое

- [Особенности](#peculiarities)
- [Установка](#installation)
- [Файловая структура](#fileStructure)
- [Команды](#commands)
- [Компиляция](#compilation)
- [Рекомендации по использованию](#recommendationsForUse)
  - [Шрифты](#fonts)
  - [Изображения](#images)
  - [SVG-спрайты](#svgSprites)
  - [SCSS файлы](#scssFiles)
    - [Min-width](#minWidth)
    - [Max-width](#maxWidth)
    - [Between breakpoints](#betweenBreakpoints)
  - [Шаблонизатор _gulp-file-include_](#templateEngine)
  - [Сторонние библиотеки](#libraries)
- [Нравится проект?](#project)

<a id="peculiarities" name="peculiarities"></a>

## Особенности

- именование классов по [БЭМ](https://ru.bem.info/)
- используется препроцессор [SCSS](https://sass-lang.com/)
- используется транспайлер [Babel](https://babeljs.io/) для поддержки современного JavaScript (ES6)
  в браузерах
- используется [Webpack](https://webpack.js.org/) для сборки JavaScript-модулей
- используется жёсткий кодгайд
- используется проверка кода на ошибки перед коммитом
- используется
  шаблонизатор [gulp-file-include](https://github.com/haoxins/gulp-file-include/blob/main/Readme.md)

<a id="installation" name="installation"></a>

## Установка

- установите [NodeJS](https://nodejs.org/en/)
- установите глобально:
  - [Yarn](https://yarnpkg.com/getting-started): `npm i -g yarn`
  - [Gulp](https://gulpjs.com/): `npm i -g gulp`
- скачайте сборку с
  помощью [Git](https://git-scm.com/downloads): `git clone https://github.com/vlad-f-crocode/gulp-scss-starter.git`
- перейдите в скачанную папку со сборкой: `cd gulp-scss-starter`
- введите `yarn set version berry`
- скачайте необходимые зависимости: `yarn`
- чтобы начать работу, введите команду: `yarn start` (режим разработки)
- чтобы собрать проект, введите команду `yarn build` (режим сборки)

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером. Режим сборки
предполагает оптимизацию проекта: сжатие изображений, минифицирование CSS и JS-файлов для загрузки
на сервер.

<a id="fileStructure" name="fileStructure"></a>

## Файловая структура

```
gulp-scss-starter
├── .husky
├── .vscode
├── dist
├── gulp-tasks
├── src
│   ├── assets
│   │   ├── favicon
│   │   │   └── favicon.png
│   │   ├── fonts
│   │   └── sprites
│   ├── scripts
│   │   ├── base
│   │   ├── blocks
│   │   ├── sections
│   │   ├── templates
│   │   └── main.js
│   ├── styles
│   │   ├── base
│   │   │   ├── _fonts.scss
│   │   │   ├── _functions.scss
│   │   │   ├── _mixins.scss
│   │   │   ├── _reboot.scss
│   │   │   └── _root.scss
│   │   ├── blocks
│   │   ├── sections
│   │   ├── templates
│   │   └── main.scss
│   ├── views
│   │   ├── blocks
│   │   ├── layout
│   │   │   ├── html-bottom.html
│   │   │   └── html-top.html
│   │   ├── sections
│   │   ├── templates
│   └── .htaccess
├── .babelrc.json
├── .browserlistrc
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── .lintstagedrc.json
├── .prettierignore
├── .stylelintignore
├── .stylelintrc
├── .yarnrc.yml
├── gulpfile.babel.js
├── LICENSE.md
├── package.json
├── README.md
├── webpack.config.js
└── yarn.lock
```

- Корень папки:
  - `.babelrc.json` — настройки Babel
  - `.browserlistrc` — настройки Browserslist
  - `.editorconfig` — настройки EditorConfig
  - `.eslintrc.json` — настройки ESLint
  - `.gitignore` – запрет на отслеживание файлов Git'ом
  - `.lintstagedrc.json` — настройки Lint-staged
  - `.prettierignore` – запрет на отслеживание файлов Prettier'ом
  - `.stylelintignore` – запрет на отслеживание файлов Stylelint'ом
  - `.stylelintrc` — настройки Stylelint
  - `.yarnrc.yml` – настройка Yarn
  - `gulpfile.babel.js` — настройки Gulp
  - `package.json` — список зависимостей
  - `webpack.config.js` — настройки Webpack

- Папка `src` - используется во время разработки:
  - шрифты: `src/assets/fonts`
  - SVG иконки: `src/assets/sprites`
  - JS-файлы `src/scripts`, используемые:
    - базовые скрипты: `src/scripts/base`
    - в блоках: `src/scripts/blocks`
    - в секциях: `src/scripts/sections`
    - на страницах: `src/scripts/templates`
    - `src/scripts/main.js` - импортированные глобальных модули
  - SCSS-файлы `src/styles`, используемые:
    - базовые стили: `src/styles/base`
      - подключение шрифтов: `src/styles/_fonts.scss`
      - SCSS-функции: `src/styles/_functions.scss`
      - SCSS-миксины: `src/styles/_mixins.scss`
      - Стили сброса: `src/styles/_reboot.scss`
      - корневые переменные: `src/styles/_root.scss`
    - в блоках: `src/styles/blocks`
    - в секциях: `src/styles/sections`
    - на страницах: `src/styles/templates`
    - `src/styles/main.scss` - импортированные глобальных стили
  - HTML-файлы `src/views`, используемые:
    - в блоках: `src/views/blocks`
    - в секциях: `src/views/sections`
    - на страницах: `src/views/templates`
  - изображения и любые другие файлы: `src/assets`
  - конфигурационный файл веб-сервера Apache с настройками [gzip](https://habr.com/ru/post/221849/) (сжатие без потерь): `src/.htaccess`

- Папка `dist` - папка, из которой запускается локальный сервер для разработки (при
  запуске `yarn dev`)

- Папка `gulp-tasks` - папка с Gulp-тасками

В пустых папках есть файл "заглушка" `.gitkeep`, который можно удалить при добавлении файлов.

<a id="commands" name="commands"></a>

## Команды

- `yarn start` - запуск сервера для разработки проекта
- `yarn build` - собрать проект с оптимизацией без запуска сервера
- `yarn build:views` - собрать HTML-файлы
- `yarn build:styles` - скомпилировать SCSS-файлы
- `yarn build:scripts` - собрать JS-файлы
- `yarn build:images` - собрать изображения
- `yarn build:webp` - сконвертировать изображения в формат `.webp`
- `yarn build:sprites`- собрать спрайты
- `yarn build:fonts` - собрать шрифты
- `yarn build:favicons` - собрать фавиконки
- `yarn build:gzip` - собрать конфигурацию Apache
- `yarn lint:views:fix` - отформатировать код в HTML-файлах
- `yarn lint:styles` - проверить SCSS-файлы согласно настройкам Stylelint
- `yarn lint:styles:fix` - отформатировать и исправить ошибки в SCSS-файлах согласно настройкам
  Stylelint
- `yarn lint:scripts` - проверить JS-файлы согласно настройкам ESLint
- `yarn lint:scripts:fix` - отформатировать и исправить ошибки в JS-файлах согласно настройкам
  ESLint
- `yarn eclint` - проверить HTML, CSS и JS файлы согласно настройкам editorconfig
- `yarn eclint:fix` - исправить ошибки в HTML, CSS и JS файлах согласно настройкам editorconfig
- `yarn lint` - отформатировать и исправить ошибки в HTML, CSS и JS файлах

<a id="compilation" name="compilation"></a>

## Компиляция

После выполнения команд `yarn start` и `yarn build` физически создаются:

- JS файлы, которые находятся только в папке `src/scripts`. Например, `src/scripts/main.js`
  - будет создан, `src/scripts/section/main.js` - создан не будет.
- SCSS файлы в папке `src/styles` и подпапках данного каталога, которые не имеют нижнего
  подчёркивания `_` в начале названия файла. Например, `src/styles/section/slider.scss` -
  будет создан, `src/styles/section/_slider.scss` - не будет создан.

<a id="recommendationsForUse" name="recommendationsForUse"></a>

## Рекомендации по использованию

<a id="fonts" name="fonts"></a>

### Шрифты

- шрифты находятся в папке `src/assets/fonts`
  - используйте [формат](https://caniuse.com/#search=woff2) `.woff2`
  - шрифты подключаются в файл `src/styles/base/_fonts.scss`
  - cконвертировать локальные шрифты можно с помощью [данного сервиса](https://transfonter.org/)
    - переключите тумблер `Add local rule` для добавления локального правила
    - отметьте только `.woff2` формат

<a id="images" name="images"></a>

### Изображения

- изображения находятся в папке `src/assets`
  - изображения автоматически конвертируются в формат `.webp`. Подробнее про
    WebP [тут](https://vk.com/@vk_it-webp)
- изображение для генерации фавиконок должно находиться в папке `src/assets/favicons` и иметь
  размер не менее `1024px x 1024px`

<a id="svgSprites" name="svgSprites"></a>

### SVG-спрайты

Для создания спрайтов:

- изображения `.svg` должны находиться в папке `src/assets/sprites`. Например, у нас есть
  файлы `icon-1.svg`, `icon-2.svg` и `icon-3.svg`, и мы должны обратиться
  к `icon-2.svg`. Для этого в HTML нужно воспользоваться тегом `<use>`
  где `logo` название файла:

```html
<svg>
  <use xlink:href="sprite.svg#logo"></use>
</svg>
```

Изменить стили svg-иконки из спрайта в CSS:

```css
svg use {
  fill: red;
}
```

Бывает такая ситуация, когда стили иконки поменять не получается. Это связано с тем, что при
экспорте из Figma в svg добавляется лишний код. Например:

```html
<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.90918 4.04542L13.091 9.54088L4.90918 14.9545L4.90918 4.04542Z" fill="#1B1B1D" />
</svg>
```

Нужно удалить `fill="none"` и `fill="#1B1B1D"`. Должно получиться так:

```html
<svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.90918 4.04542L13.091 9.54088L4.90918 14.9545L4.90918 4.04542Z" />
</svg>
```

<a id="scssFiles" name="scssFiles"></a>

### SCSS файлы

Рекомендации:

- все "hex", "rgb", 'rgba", "hsl" и "hwb" цвета задаются только CSS переменным в
  файле `src/styles/base/_root.scss`
- так же рекомендуется задавать и использовать другие CSS переменные для общих стилей, таких
  как `box-shadow`, `font-size`, `font-weight` и др.
- используйте готовую SCSS-функцию `rem` для перевода значения PX в REM
  - для всех значений;
  - исключения: `border`, `box-shadow`, `background-size`, `max-width`
  - в зависимости от ситуации: `transform`, `width`, `height`

Контрольные точки (Breakpoints):

| Breakpoint              | Class infix | Dimensions |
| ----------------------- | ----------- | ---------- |
| Extra small             | None        | <480px     |
| Small                   | `sm`        | ≥480px     |
| Medium                  | `md`        | ≥768px     |
| Large                   | `lg`        | ≥992px     |
| Extra large             | `xl`        | ≥1280px    |
| Extra extra large       | `xxl`       | ≥1536px    |
| Extra extra extra large | `xxxl`      | ≥1920px    |

Эти точки можно настроить в файле `src/styles/base/_mixins.scss`

<a id="minWidth" name="minWidth"></a>

#### Min-width

```scss
// Для точки останова xs не требуется медиа-запрос, поскольку он фактически `@media (min-width: 0) { ... }`
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }
@include media-breakpoint-up(xxl) { ... }

// Применение

// Пример: скрыть, начиная с `min-width: 0`, а затем показать в точке останова `sm`
.custom-class {
  display: none;
}
@include media-breakpoint-up(sm) {
  .custom-class {
    display: block;
  }
}
```

Эти миксины Sass транслируются в наш скомпилированный CSS с использованием значений, объявленных в
наших переменных Sass. Например:

```scss
@media (min-width: 480px) {
  ...
}

@media (min-width: 768px) {
  ...
}

@media (min-width: 992px) {
  ...
}

@media (min-width: 1280px) {
  ...
}

@media (min-width: 1536px) {
  ...
}
```

<br>

<a id="maxWidth" name="maxWidth"></a>

#### Max-width

```scss
// Для точки останова xs не требуется медиа-запрос, поскольку он фактически `@media (min-width: 0) { ... }`
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
@include media-breakpoint-down(xl) { ... }
@include media-breakpoint-down(xxl) { ... }

// Применение

// Пример: Стиль от средней точки останова и вниз
@include media-breakpoint-down(md) {
  .custom-class {
    display: block;
  }
}
```

Эти миксины Sass транслируются в наш скомпилированный CSS с использованием значений, объявленных в
наших переменных Sass. Например:

```scss
@media (max-width: 479.98px) {
  ...
}

@media (max-width: 767.98px) {
  ...
}

@media (max-width: 991.98px) {
  ...
}

@media (max-width: 1279.98px) {
  ...
}

@media (max-width: 1535.98px) {
  ...
}
```

<br>

<a id="betweenBreakpoints" name="betweenBreakpoints"></a>

#### Between breakpoints

Точно так же медиа-запросы могут охватывать несколько точек останова по ширине:

```scss
@include media-breakpoint-between(md, xl) {
  ...
}
```

Что приводит к:

```scss
@media (min-width: 768px) and (max-width: 1279.98px) {
  ...
}
```

<a id="templateEngine" name="templateEngine"></a>

## Шаблонизатор _gulp-file-include_

В проекте присутствует шаблонизатор, который помогает соединять несколько html файлов в один
через `@@include` и другое.
Подробнее [здесь](https://github.com/haoxins/gulp-file-include/blob/main/Readme.md).

<a id="libraries" name="libraries"></a>

### Сторонние библиотеки

- все сторонние библиотеки устанавливаются в папку `node_modules`
  - для их загрузки воспользуйтеcь командой `yarn add package_name` (
    например, `yarn add jquery`)
  - для подключения JS-файлов библиотек импортируйте их в самом начале JS-файла блока/секции (то
    есть тот блок/секция, которая использует скрипт), например:
    ```javascript
    import $ from "jquery";
    ```
  - для подключения стилевых файлов библиотек импортируйте их в файл `src/styles/main.scss` под
    комментарием `// Libs`
  - JS-файлы и стилевые файлы библиотек самостоятельно изменять нельзя

<a id="project" name="project"></a>

## Нравится проект?

Сообщайте мне о [багах](https://github.com/vlad-f-crocode/gulp-scss-starter/issues), ставьте
звёздочку в правом верхнем углу
