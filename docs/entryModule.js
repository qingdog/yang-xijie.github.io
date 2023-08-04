console.log('Script loaded and executed successfully.');
require.config({
    paths: {
        'toolbar': 'https://unpkg.com/prismjs@1.29.0/plugins/toolbar/prism-toolbar.min',
        'prism-copy-to-clipboard': 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min',
        'prism-show-language': 'https://unpkg.com/prismjs@1.29.0/plugins/show-language/prism-show-language.min',
        'marked': 'https://unpkg.com/marked@6.0.0/marked.min'
    },
    shim: {
        'toolbar': {
            exports: 'toolbar'
        },
        'prism-copy-to-clipboard': {
            deps: ['toolbar'],
            exports: 'prism-copy-to-clipboard'
        },
        'prism-show-language': {
            deps: ['toolbar'],
            exports: 'prism-show-language'
        },
        'marked': {
            exports: 'marked'
        }
    }
});

// 加载入口模块
require(['prism-copy-to-clipboard', 'prism-show-language', 'marked'], function(clipboard, language, markedjs) {
    // 在这里使用script3
    //console.log(script3.message); // 假设script3.js模块导出了一个包含"message"属性的对象
    //script3.someFunction(); // 假设script3.js模块导出了一个名为"someFunction"的函数

    markedjs.setOptions({
        // mangle参数通常用于压缩和混淆HTML输出，但自从版本5.0.0以来一直不推荐使用
        mangle: false,
        // 用于自定义Markdown标题（headers）的ID生成，但自从版本5.0.0以来一直不推荐使用
        headerIds: false
    });

    console.log(markedjs.parse("**123**"))

});