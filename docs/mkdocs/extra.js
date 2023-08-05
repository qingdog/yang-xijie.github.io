// 使用模块化加载器requirejs管理脚本的加载顺序和依赖关系。
// 这里用于提前加载js库以便于在使用xhr即时加载（instant loading）时无需完全重新加载页面。
function loadScriptsInOrder(scripts, index) {
        index = index || 0;
        if (index < scripts.length) {
            var script = document.createElement('script');
            script.src = scripts[index];
            script.onload = function() {
                loadScriptsInOrder(scripts, index + 1);
            };
            document.head.appendChild(script);
        }
		
		initRequire();
    }
    var scriptUrls = ["https://unpkg.com/requirejs@2.3.6/require.js"];
    //scriptUrls.push("https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js");
loadScriptsInOrder(scriptUrls);

function initRequire(){
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
}