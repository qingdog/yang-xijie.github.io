<style>
    /* 可选的样式调整 
    body {
        margin: 0;
        overflow: hidden; 隐藏滚动条
    } */

    iframe {
        border: none;
        width: 100%;
        height: 82vh;
    }

    /* 隐藏标题 */
    div.md-content > article.md-content__inner.md-typeset > h1, h2, h3, h4, h5, h6 {
		display: none;
	}
    /* 侧边栏
	div.md-sidebar.md-sidebar--primary {
		display: none;
    } */

    /* 移除div容器边距 */
    main > div.md-main__inner.md-grid{
		margin-top: 0!important;
		padding: 0!important;
	}
    /* 移除div容器边距 */
    div.md-content > article.md-content__inner.md-typeset{
		margin: 0!important;
		padding: 0!important;
	}
	/* 隐藏before（block） */
	div.md-content > article.md-content__inner.md-typeset::before{
		display: none;
	}

    footer.md-footer {
        /* 页脚 */
        display: none;
    }

</style>

<iframe src="https://qingdog.github.io/interview/day03虚拟机篇讲义.html"></iframe>
