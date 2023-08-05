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
    }
    var scriptUrls = ["https://unpkg.com/requirejs@2.3.6/require.js"];
    //scriptUrls.push("https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js");
loadScriptsInOrder(scriptUrls);