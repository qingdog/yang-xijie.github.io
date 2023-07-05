# Changing the colors

As any proper Material Design implementation, Material for MkDocs supports
Google's original [color palette], which can be easily configured through 
`mkdocs.yml`. Furthermore, colors can be customized with a few lines of CSS to
fit your brand's identity by using [CSS variables][custom colors].

  [color palette]: http://www.materialui.co/colors
  [custom colors]: #custom-colors

## Configuration

### Color palette

#### Color scheme

[:octicons-tag-24: 5.2.0][Color scheme support] ·
:octicons-milestone-24: Default: `default`

Material for MkDocs supports two color schemes: a __light mode__, which is just
called `default`, and a __dark mode__, which is called `slate`. The color scheme
can be set via `mkdocs.yml`:

``` yaml
theme:
  palette:
    scheme: default
```

Click on a tile to change the color scheme:

<div class="mdx-switch">
  <button data-md-color-scheme="default"><code>default</code></button>
  <button data-md-color-scheme="slate"><code>slate</code></button>
</div>

<script>
  var buttons = document.querySelectorAll("button[data-md-color-scheme]")
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      document.body.setAttribute("data-md-color-switching", "")
      var attr = this.getAttribute("data-md-color-scheme")
      document.body.setAttribute("data-md-color-scheme", attr)
      var name = document.querySelector("#__code_0 code span.l")
      name.textContent = attr
      setTimeout(function() {
        document.body.removeAttribute("data-md-color-switching")
      })
    })
  })
</script>

  [Color scheme support]: https://github.com/squidfunk/mkdocs-material/releases/tag/5.2.0

#### Primary color

[:octicons-tag-24: 0.2.0][Primary color support] ·
:octicons-milestone-24: Default: `indigo`

The primary color is used for the header, the sidebar, text links and several
other components. In order to change the primary color, set the following value
in `mkdocs.yml` to a valid color name:

``` yaml
theme:
  palette:
    primary: indigo
```

Click on a tile to change the primary color:

<div class="mdx-switch">
  <button data-md-color-primary="red"><code>red</code></button>
  <button data-md-color-primary="pink"><code>pink</code></button>
  <button data-md-color-primary="purple"><code>purple</code></button>
  <button data-md-color-primary="deep-purple"><code>deep purple</code></button>
  <button data-md-color-primary="indigo"><code>indigo</code></button>
  <button data-md-color-primary="blue"><code>blue</code></button>
  <button data-md-color-primary="light-blue"><code>light blue</code></button>
  <button data-md-color-primary="cyan"><code>cyan</code></button>
  <button data-md-color-primary="teal"><code>teal</code></button>
  <button data-md-color-primary="green"><code>green</code></button>
  <button data-md-color-primary="light-green"><code>light green</code></button>
  <button data-md-color-primary="lime"><code>lime</code></button>
  <button data-md-color-primary="yellow"><code>yellow</code></button>
  <button data-md-color-primary="amber"><code>amber</code></button>
  <button data-md-color-primary="orange"><code>orange</code></button>
  <button data-md-color-primary="deep-orange"><code>deep orange</code></button>
  <button data-md-color-primary="brown"><code>brown</code></button>
  <button data-md-color-primary="grey"><code>grey</code></button>
  <button data-md-color-primary="blue-grey"><code>blue grey</code></button>
  <button data-md-color-primary="black"><code>black</code></button>
  <button data-md-color-primary="white"><code>white</code></button>
</div>

<script>
  var buttons = document.querySelectorAll("button[data-md-color-primary]")
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var attr = this.getAttribute("data-md-color-primary")
      document.body.setAttribute("data-md-color-primary", attr)
      var name = document.querySelector("#__code_1 code span.l")
      name.textContent = attr.replace("-", " ")
    })
  })
</script>

See our guide below to learn how to set [custom colors].

  [Primary color support]: https://github.com/squidfunk/mkdocs-material/releases/tag/0.2.0

#### Accent color

[:octicons-tag-24: 0.2.0][Accent color support] ·
:octicons-milestone-24: Default: `indigo`

The accent color is used to denote elements that can be interacted with, e.g.
hovered links, buttons and scrollbars. It can be changed in `mkdocs.yml` by
choosing a valid color name:

``` yaml
theme:
  palette:
    accent: indigo
```

Click on a tile to change the accent color:

<style>
  .md-typeset button[data-md-color-accent] > code {
    background-color: var(--md-code-bg-color);
    color: var(--md-accent-fg-color);
  }
</style>

<div class="mdx-switch">
  <button data-md-color-accent="red"><code>red</code></button>
  <button data-md-color-accent="pink"><code>pink</code></button>
  <button data-md-color-accent="purple"><code>purple</code></button>
  <button data-md-color-accent="deep-purple"><code>deep purple</code></button>
  <button data-md-color-accent="indigo"><code>indigo</code></button>
  <button data-md-color-accent="blue"><code>blue</code></button>
  <button data-md-color-accent="light-blue"><code>light blue</code></button>
  <button data-md-color-accent="cyan"><code>cyan</code></button>
  <button data-md-color-accent="teal"><code>teal</code></button>
  <button data-md-color-accent="green"><code>green</code></button>
  <button data-md-color-accent="light-green"><code>light green</code></button>
  <button data-md-color-accent="lime"><code>lime</code></button>
  <button data-md-color-accent="yellow"><code>yellow</code></button>
  <button data-md-color-accent="amber"><code>amber</code></button>
  <button data-md-color-accent="orange"><code>orange</code></button>
  <button data-md-color-accent="deep-orange"><code>deep orange</code></button>
</div>

<script>
  var buttons = document.querySelectorAll("button[data-md-color-accent]")
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var attr = this.getAttribute("data-md-color-accent")
      document.body.setAttribute("data-md-color-accent", attr)
      var name = document.querySelector("#__code_2 code span.l")
      name.textContent = attr.replace("-", " ")
    })
  })
</script>

See our guide below to learn how to set [custom colors].

  [Accent color support]: https://github.com/squidfunk/mkdocs-material/releases/tag/0.2.0

### Color palette toggle

[:octicons-tag-24: 7.1.0][Color palette toggle support] ·
:octicons-milestone-24: Default: _none_

Offering a light _and_ dark color palette makes your documentation pleasant to
read at different times of the day, so the user can choose accordingly. Add the
following lines to `mkdocs.yml`:

``` yaml
theme:
  palette: # (1)!

    # Palette toggle for light mode
    - scheme: default
      toggle:
        icon: material/brightness-7 # (2)!
        name: Switch to dark mode

    # Palette toggle for dark mode
    - scheme: slate
      toggle:
        icon: material/brightness-4
        name: Switch to light mode
```

1.  Note that the `theme.palette` setting is now defined as a list.

2.  Enter a few keywords to find the perfect icon using our [icon search] and
    click on the shortcode to copy it to your clipboard:

    <div class="mdx-iconsearch" data-mdx-component="iconsearch">
      <input class="md-input md-input--stretch mdx-iconsearch__input" placeholder="Search icon" data-mdx-component="iconsearch-query" value="brightness" />
      <div class="mdx-iconsearch-result" data-mdx-component="iconsearch-result" data-mdx-mode="file">
        <div class="mdx-iconsearch-result__meta"></div>
        <ol class="mdx-iconsearch-result__list"></ol>
      </div>
    </div>

This configuration will render a color palette toggle next to the search bar.
Note that you can also define separate settings for [`primary`][palette.primary]
and [`accent`][palette.accent] per color palette.

The following properties must be set for each toggle:

[`icon`](#+palette.toggle.icon){ #+palette.toggle.icon }

:   :octicons-milestone-24: Default: _none_ · :octicons-alert-24: __Required__ –
    This property must point to a valid icon path referencing any icon bundled
    with the theme, or the build will not succeed. Some popular combinations:

    * :material-brightness-7: + :material-brightness-4: – `material/brightness-7` + `material/brightness-4`
    * :material-toggle-switch: + :material-toggle-switch-off-outline: – `material/toggle-switch` + `material/toggle-switch-off-outline`
    * :material-weather-night: + :material-weather-sunny: – `material/weather-night` + `material/weather-sunny`
    * :material-eye: + :material-eye-outline: – `material/eye` + `material/eye-outline`
    * :material-lightbulb: + :material-lightbulb-outline: – `material/lightbulb` + `material/lightbulb-outline`

[`name`](#+palette.toggle.name){ #+palette.toggle.name }

:   :octicons-milestone-24: Default: _none_ · :octicons-alert-24: __Required__ –
    This property is used as the toggle's `title` attribute and should be set to
    a discernable name to improve accessibility. It's rendered as a [tooltip].

  [Color palette toggle support]: https://github.com/squidfunk/mkdocs-material/releases/tag/7.1.0
  [palette.scheme]: #color-scheme
  [palette.primary]: #primary-color
  [palette.accent]: #accent-color
  [icon search]: ../reference/icons-emojis.md#search
  [tooltip]: ../reference/tooltips.md

### System preference

[:octicons-tag-24: 7.1.0][System preference support] ·
:octicons-milestone-24: Default: _none_

Each color palette can be linked to the user's system preference for light and
dark appearance by using a media query. Simply add a `media` property next to
the `scheme` definition in `mkdocs.yml`:

``` yaml
theme:
  palette:

    # Palette toggle for light mode
    - media: "(prefers-color-scheme: light)"
      scheme: default
      toggle:
        icon: material/brightness-7
        name: Switch to dark mode

    # Palette toggle for dark mode
    - media: "(prefers-color-scheme: dark)"
      scheme: slate
      toggle:
        icon: material/brightness-4
        name: Switch to light mode
```

When the user first visits your site, the media queries are evaluated in the
order of their definition. The first media query that matches selects the
default color palette.

  [System preference support]: https://github.com/squidfunk/mkdocs-material/releases/tag/7.1.0

#### Automatic light / dark mode

[:octicons-heart-fill-24:{ .mdx-heart } Sponsors only][Insiders]{ .mdx-insiders } ·
[:octicons-tag-24: insiders-4.18.0][Insiders] ·
:octicons-beaker-24: Experimental

Newer operating system allow to automatically switch between light and dark
appearance during day and night times. [Insiders] adds support for automatic
light / dark mode, delegating color palette selection to the user's operating
system. Add the following lines to `mkdocs.yml`:

``` yaml
theme:
  palette:

    # Palette toggle for automatic mode
    - media: "(prefers-color-scheme)"
      toggle:
        icon: material/brightness-auto
        name: Switch to light mode

    # Palette toggle for light mode
    - media: "(prefers-color-scheme: light)"
      scheme: default # (1)!
      toggle:
        icon: material/brightness-7
        name: Switch to dark mode

    # Palette toggle for dark mode
    - media: "(prefers-color-scheme: dark)"
      scheme: slate
      toggle:
        icon: material/brightness-4
        name: Switch to system preference
```

1.  You can also define separate settings for [`primary`][palette.primary] and
    [`accent`][palette.accent] per color palette, i.e. different colors for
    light and dark mode.

Material for MkDocs will now change the color palette each time the operating
system switches between light and dark appearance, even when the user doesn't
reload the site.

  [Insiders]: ../insiders/index.md

## Customization

### Custom colors

Material for MkDocs implements colors using [CSS variables] (custom
properties). If you want to customize the colors beyond the palette (e.g. to
use your brand-specific colors), you can add an [additional style sheet] and
tweak the values of the CSS variables.

First, set the [`primary`][palette.primary] or [`accent`][palette.accent] values
in `mkdocs.yml` to `custom`, to signal to the theme that you want to define
custom colors, e.g., when you want to override the `primary` color:

``` yaml
theme:
  palette:
    primary: custom
```

Let's say you're :fontawesome-brands-youtube:{ style="color: #EE0F0F" }
__YouTube__, and want to set the primary color to your brand's palette. Just
add:

=== ":octicons-file-code-16: `docs/stylesheets/extra.css`"

    ``` css
    :root {
      --md-primary-fg-color:        #EE0F0F;
      --md-primary-fg-color--light: #ECB7B7;
      --md-primary-fg-color--dark:  #90030C;
    }
    ```

=== ":octicons-file-code-16: `mkdocs.yml`"

    ``` yaml
    extra_css:
      - stylesheets/extra.css
    ```

See the file containing the [color definitions] for a list of all CSS variables.

  [CSS variables]: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
  [color definitions]: https://github.com/squidfunk/mkdocs-material/blob/master/src/assets/stylesheets/main/_colors.scss
  [additional style sheet]: ../customization.md#additional-css


### Custom color schemes

Besides overriding specific colors, you can create your own, named color scheme
by wrapping the definitions in a `[data-md-color-scheme="..."]`
[attribute selector], which you can then set via `mkdocs.yml` as described
in the [color schemes][palette.scheme] section:

=== ":octicons-file-code-16: `docs/stylesheets/extra.css`"

    ``` css
    [data-md-color-scheme="youtube"] {
      --md-primary-fg-color:        #EE0F0F;
      --md-primary-fg-color--light: #ECB7B7;
      --md-primary-fg-color--dark:  #90030C;
    }
    ```

=== ":octicons-file-code-16: `mkdocs.yml`"

    ``` yaml
    theme:
      palette:
        scheme: youtube
    extra_css:
      - stylesheets/extra.css
    ```

Additionally, the `slate` color scheme defines all of it's colors via `hsla`
color functions and deduces its colors from the `--md-hue` CSS variable. You
can tune the `slate` theme with:

``` css
[data-md-color-scheme="slate"] {
  --md-hue: 210; /* (1)! */
}
```

1.  The `hue` value must be in the range of `[0, 360]`

  [attribute selector]: https://www.w3.org/TR/selectors-4/#attribute-selectors

<css>
@keyframes heart{0%,40%,80%,to{transform:scale(1)}20%,60%{transform:scale(1.15)}}@keyframes new{0%,to{transform:scale(1) rotate(0deg)}50%{transform:scale(1.15) rotate(10deg)}}.md-typeset .twitter{color:#00acee}.md-typeset .mastodon{color:#897ff8}.md-typeset .mdx-video{width:auto}.md-typeset .mdx-video__inner{height:0;padding-bottom:56.138%;position:relative;width:100%}.md-typeset .mdx-video iframe{border:none;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%}.md-typeset .mdx-heart{animation:heart 1s infinite}.md-typeset .mdx-pulse{animation:new 2s infinite}.md-typeset .mdx-pulse svg{fill:var(--md-accent-fg-color)}.md-typeset .mdx-insiders{color:#e91e63}.md-typeset .mdx-switch button{cursor:pointer;transition:opacity .25s}.md-typeset .mdx-switch button:focus,.md-typeset .mdx-switch button:hover{opacity:.75}.md-typeset .mdx-switch button>code{background-color:var(--md-primary-fg-color);color:var(--md-primary-bg-color);display:block}.md-typeset .mdx-deprecated{opacity:.5;transition:opacity .25s}.md-typeset .mdx-deprecated:focus-within,.md-typeset .mdx-deprecated:hover{opacity:1}.md-typeset .mdx-columns ol,.md-typeset .mdx-columns ul{-moz-columns:2;column-count:2}@media screen and (max-width:29.9375em){.md-typeset .mdx-columns ol,.md-typeset .mdx-columns ul{-moz-columns:initial;columns:initial}}.md-typeset .mdx-columns li{-moz-column-break-inside:avoid;break-inside:avoid}.md-typeset .mdx-flags{margin:2em auto}.md-typeset .mdx-flags ol{list-style:none}.md-typeset .mdx-flags ol li{margin-bottom:1em}.md-typeset .mdx-flags__item{display:flex;gap:.6rem}.md-typeset .mdx-flags__content{display:flex;flex:1;flex-direction:column}.md-typeset .mdx-flags__content span{align-items:baseline;display:inline-flex;justify-content:space-between}.md-typeset .mdx-flags__content>span:nth-child(2){font-size:80%}.md-typeset .mdx-flags__content code{float:right}.md-typeset .mdx-author{display:flex;font-size:.68rem}.md-typeset .mdx-author img{border-radius:100%;height:2rem}.md-typeset .mdx-author p:first-child{flex-shrink:0;margin-right:.8rem}.md-typeset .mdx-author p>span{display:block}.md-typeset .mdx-social{height:min(27rem,80vw);position:relative}.md-typeset .mdx-social:hover .mdx-social__image{background-color:#e4e4e40d}.md-typeset .mdx-social__layer{margin-top:4rem;position:absolute;transform-style:preserve-3d;transition:.25s cubic-bezier(.7,0,.3,1)}.md-typeset .mdx-social__layer:hover .mdx-social__label{opacity:1}.md-typeset .mdx-social__layer:hover .mdx-social__image{background-color:#7f7f7ffc}.md-typeset .mdx-social__layer:hover~.mdx-social__layer{opacity:0}.md-typeset .mdx-social__image{box-shadow:-.25rem .25rem .5rem #0000000d;transform:rotate(-40deg) skew(15deg,15deg) scale(.7);transition:all .25s}.md-typeset .mdx-social__image img{display:block}.md-typeset .mdx-social__label{background-color:var(--md-default-fg-color--light);color:var(--md-default-bg-color);display:block;opacity:0;padding:.2rem .4rem;position:absolute;transition:all .25s}.md-typeset .mdx-social:hover .mdx-social__layer:nth-child(6){transform:translateY(-30px)}.md-typeset .mdx-social:hover .mdx-social__layer:nth-child(5){transform:translateY(-20px)}.md-typeset .mdx-social:hover .mdx-social__layer:nth-child(4){transform:translateY(-10px)}.md-typeset .mdx-social:hover .mdx-social__layer:nth-child(3){transform:translateY(0)}.md-typeset .mdx-social:hover .mdx-social__layer:nth-child(2){transform:translateY(10px)}.md-typeset .mdx-social:hover .mdx-social__layer:first-child{transform:translateY(20px)}.md-typeset .mdx-social:hover .mdx-social__layer:nth-child(0){transform:translateY(30px)}.md-banner{color:var(--md-footer-fg-color--lighter)}.md-banner strong{white-space:nowrap}.md-banner a,.md-banner strong{color:var(--md-footer-fg-color)}.md-banner a:focus,.md-banner a:hover{color:currentcolor}.md-banner a:focus .twemoji,.md-banner a:hover .twemoji{background-color:var(--md-footer-fg-color);box-shadow:none}.md-banner .twemoji{border-radius:100%;box-shadow:inset 0 0 0 .05rem currentcolor;display:inline-block;height:1.2rem;padding:.25rem;transition:all .25s;vertical-align:bottom;width:1.2rem}.md-banner .twemoji svg{display:block;max-height:none}.md-typeset .mdx-iconsearch{background-color:var(--md-default-bg-color);border-radius:.1rem;box-shadow:var(--md-shadow-z1);position:relative;transition:box-shadow 125ms}.md-typeset .mdx-iconsearch:focus-within,.md-typeset .mdx-iconsearch:hover{box-shadow:var(--md-shadow-z2)}.md-typeset .mdx-iconsearch .md-input{background:var(--md-default-bg-color);box-shadow:none}[data-md-color-scheme=slate] .md-typeset .mdx-iconsearch .md-input{background:var(--md-code-bg-color)}.md-typeset .mdx-iconsearch-result{-webkit-backface-visibility:hidden;backface-visibility:hidden;max-height:50vh;overflow-y:auto;scrollbar-color:var(--md-default-fg-color--lighter) #0000;scrollbar-width:thin;touch-action:pan-y}.md-tooltip .md-typeset .mdx-iconsearch-result{max-height:10.25rem}.md-typeset .mdx-iconsearch-result::-webkit-scrollbar{height:.2rem;width:.2rem}.md-typeset .mdx-iconsearch-result::-webkit-scrollbar-thumb{background-color:var(--md-default-fg-color--lighter)}.md-typeset .mdx-iconsearch-result::-webkit-scrollbar-thumb:hover{background-color:var(--md-accent-fg-color)}.md-typeset .mdx-iconsearch-result__meta{color:var(--md-default-fg-color--lighter);font-size:.64rem;position:absolute;right:.6rem;top:.4rem}[dir=ltr] .md-typeset .mdx-iconsearch-result__list{margin-left:0}[dir=rtl] .md-typeset .mdx-iconsearch-result__list{margin-right:0}.md-typeset .mdx-iconsearch-result__list{list-style:none;margin:0;padding:0}[dir=ltr] .md-typeset .mdx-iconsearch-result__item{margin-left:0}[dir=rtl] .md-typeset .mdx-iconsearch-result__item{margin-right:0}.md-typeset .mdx-iconsearch-result__item{border-bottom:.05rem solid var(--md-default-fg-color--lightest);margin:0;padding:.2rem .6rem}.md-typeset .mdx-iconsearch-result__item:last-child{border-bottom:none}.md-typeset .mdx-iconsearch-result__item>*{margin-right:.6rem}.md-typeset .mdx-iconsearch-result__item img{height:.9rem;width:.9rem}[data-md-color-scheme=slate] .md-typeset .mdx-iconsearch-result__item img[src*=squidfunk]{filter:invert(1)}.md-typeset .mdx-premium p{margin:2em 0;text-align:center}.md-typeset .mdx-premium img{height:3.25rem}.md-typeset .mdx-premium p:last-child{display:flex;flex-wrap:wrap;justify-content:center}.md-typeset .mdx-premium p:last-child>a{display:block;flex-shrink:0}.md-typeset .mdx-sponsorship__list{margin:2em 0}.md-typeset .mdx-sponsorship__list:after{clear:both;content:"";display:block}[dir=ltr] .md-typeset .mdx-sponsorship__item{float:left}[dir=rtl] .md-typeset .mdx-sponsorship__item{float:right}.md-typeset .mdx-sponsorship__item{border-radius:100%;display:block;height:1.6rem;margin:.2rem;overflow:hidden;transform:scale(1);transition:color 125ms,transform 125ms;width:1.6rem}.md-typeset .mdx-sponsorship__item:focus,.md-typeset .mdx-sponsorship__item:hover{transform:scale(1.1)}.md-typeset .mdx-sponsorship__item:focus img,.md-typeset .mdx-sponsorship__item:hover img{filter:grayscale(0)}.md-typeset .mdx-sponsorship__item--private{background:var(--md-default-fg-color--lightest);color:var(--md-default-fg-color--lighter);font-size:.6rem;font-weight:700;line-height:1.6rem;text-align:center}.md-typeset .mdx-sponsorship__item img{display:block;filter:grayscale(100%) opacity(75%);height:auto;transition:filter 125ms;width:100%}.md-typeset .mdx-sponsorship-button{font-weight:400}.md-typeset .mdx-sponsorship-count,.md-typeset .mdx-sponsorship-total{font-weight:700}
</css>