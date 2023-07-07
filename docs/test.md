## test2

``` yaml
theme:
  palette:
    primary: indigo
```

Click on a tile to change the primary color:

<style>
  /*新增https://squidfunk.github.io/mkdocs-material/assets/stylesheets/custom.css*/
  div.mdx-switch button[data-md-color-primary] > code {
    background-color: var(--md-primary-fg-color);
    color: var(--md-primary-bg-color);
    display: block
  }


body {
        margin: 0;
        overflow: hidden; /* 隐藏滚动条 */
    }

    iframe {
        border: none;
        width: 100%;
        height: 100vh;
    }

    /* 隐藏标题 */
    div.md-content > article.md-content__inner.md-typeset > h1, h2, h3, h4, h5, h6 {
		display: none;
	}
    /* 侧边栏 */
	div.md-sidebar.md-sidebar--primary {
		display: none;
    }
</style>

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

<iframe src="https://qingdog.github.io/interview/"></iframe>