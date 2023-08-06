---
hide:

- navigation
- toc

---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <!-- Font Awesome CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">


    <style>
        a {
            color: inherit !important;
            text-decoration: none !important;
        }

        .md-typeset pre > code {
            overflow: initial !important;
            padding: 0 !important;
        }

        pre.line-numbers {
            /*给tomorrow主题加圆角*/
            border-radius: 0.3em !important;
        }
    </style>
    <title>ChatGPT App</title>
</head>


<body style="background-color: rgb(241 245 249);"> <!-- enabled for the whole page -->

<div class="container mt-5 line-numbers">
    <div class="row">
        <div class="col-md-8 offset-md-2">
            <div class="card">

                <div class="card-header">
                    <i class="fas fa-comments"></i> Chat
                </div>

                <form name="mes">
                    <div class="card-body p-4 mb-4" id="messages">
                        <!-- Chat messages will be displayed here -->
                    </div>
                    <div class="card-footer">
                        <div class="input-group">
                            <input type="text" class="form-control border-info" placeholder="Type your message...">
                            <button class="btn btn-primary" id="sendMessageBtn">Send</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>

    <footer class="mt-8" style="float: right;">
        <a href="#" class="text-indigo-700">Made with ❤️</a>
    </footer>
</div>

<!-- markdown格式
<script type="text/javascript" src="https://unpkg.com/marked@6.0.0/marked.min.js" ></script> -->

<!-- prism核心库 -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
<!-- prism高亮 -->
<link rel="stylesheet" href="https://unpkg.com/prismjs@1.29.0/themes/prism-tomorrow.min.css">
<!-- 自动加载高亮语言语法的js代码
<script src="https://unpkg.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js"></script> -->

<!-- 给class='line-numbers'加行号
<script src="https://unpkg.com/prismjs@1.29.0/plugins/line-numbers/prism-line-numbers.min.js"></script> -->
<link rel="stylesheet" href="https://unpkg.com/prismjs@1.29.0/plugins/line-numbers/prism-line-numbers.min.css">

<!-- 插件工具栏
<script defer type="text/javascript" src="https://unpkg.com/prismjs@1.29.0/plugins/toolbar/prism-toolbar.min.js"></script> -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/toolbar/prism-toolbar.min.css">

<!-- 插件工具栏复制
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js"></script> -->
<!-- 插件工具栏显示语言
<script defer src="https://unpkg.com/prismjs@1.29.0/plugins/show-language/prism-show-language.min.js"></script>-->

<script>
    function initRequireJs() {
        // 使用模块化加载器requirejs管理脚本的加载顺序和依赖关系。
        // 这里用于script.onload后再初始化，保证加载js库顺序。以便于在使用xhr即时加载（instant loading），而无需完全重新加载页面。
        requirejs.config({
            paths: {
                'marked': 'https://unpkg.com/marked@6.0.0/marked.min',
                'prism-toolbar': 'https://unpkg.com/prismjs@1.29.0/plugins/toolbar/prism-toolbar.min',
                'prism-copy-to-clipboard': 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min',
                'prism-show-language': 'https://unpkg.com/prismjs@1.29.0/plugins/show-language/prism-show-language.min',
                'prism-line-numbers': 'https://unpkg.com/prismjs@1.29.0/plugins/line-numbers/prism-line-numbers.min',
                'prism-autoloader': 'https://unpkg.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min'
            },
            shim: {
                'marked': {
                    exports: 'marked'
                },
                'prism-toolbar': {
                    exports: 'prism-toolbar'
                },
                'prism-copy-to-clipboard': {
                    deps: ['prism-toolbar'],
                    exports: 'prism-copy-to-clipboard'
                },
                'prism-show-language': {
                    deps: ['prism-toolbar'],
                    exports: 'prism-show-language'
                },
                'prism-line-numbers': {
                    exports: 'prism-line-numbers'
                },
                'prism-autoloader': {
                    exports: 'prism-autoloader'
                }
            }
        });

        // 允许取消定义模块
        // 它实际上只在错误情况下有用，即当没有其他模块获得模块值的句柄时，或者作为可能使用该模块的任何未来模块加载的一部分。
        requirejs.undef('prism-toolbar');
        requirejs.undef('prism-copy-to-clipboard');
        requirejs.undef('prism-show-language');
        requirejs.undef('prism-line-numbers');
        // 加载入口模块
        requirejs(['marked', 'prism-copy-to-clipboard', 'prism-show-language', 'prism-line-numbers', 'prism-autoloader'],
            function (marked, clipboard, language, numbers, autoloader) {
                // 在这里使用script3
                //console.log(script3.message); // 假设script3.js模块导出了一个包含"message"属性的对象
                //script3.someFunction(); // 假设script3.js模块导出了一个名为"someFunction"的函数

                marked.setOptions({
                    // mangle参数通常用于压缩和混淆HTML输出，但自从版本5.0.0以来一直不推荐使用
                    mangle: false,
                    // 用于自定义Markdown标题（headers）的ID生成，但自从版本5.0.0以来一直不推荐使用
                    headerIds: false
                });
            });
    }

    function load() {
        const scriptUrls = ["https://unpkg.com/requirejs@2.3.6/require.js"];
        // scriptUrls.push("https://unpkg.com/prismjs@1.29.0/plugins/toolbar/prism-toolbar.min.js");

        // (function scriptRecurse(count, callback) { ... })(0);以参数(0, undefined)自执行函数scriptRecurse。
        // 其中callback为全部加载完成后的回调函数，这里传入函数initRequireJs用于执行requestjs的配置以致于顺序加载js库。
        (function scriptRecurse(count, callback) {
            if (count === scriptUrls.length) {
                callback && callback();
            } else {
                //                            这里传入无参函数方便用于递归执行scriptRecurse
                loadScript(scriptUrls[count], function () {
                    scriptRecurse(++count, callback);
                });
            }
        })(0, initRequireJs);
    }

    load();

    /**
     * 这里使用js代码引入第三方js库，而不是script标签
     */
    function loadScript(url, fn) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        // onload加载完成后执行。onreadystatechange加载状态发生变化时被触发，包括加载完成，兼容处理IE9及更早版本。
        script.onload = script.onreadystatechange = function () {
            // 当script加载完成后且不处于准备状态时
            if (!script.readyState || 'loaded' === script.readyState || 'complete' === script.readyState) {
                // 脚本加载完成后执行函数，先看fn是否存在（不为null或undefined），然后再执行fn函数。
                fn && fn();
            }
        };
        script.src = url;
        document.head.appendChild(script);
    }
</script>

<!-- xhr即时加载默认不会重复引入script库，但是会执行script标签里的js代码
<script src="https://unpkg.com/requirejs@2.3.6/require.js" onload="initRequireJs()"></script> -->

<script>
    function loadScriptsInOrder(scripts, index) {
        index = index || 0;
        if (index < scripts.length) {
            const script = document.createElement('script');
            script.src = scripts[index];
            script.onload = function () {
                loadScriptsInOrder(scripts, index + 1);
            };
            document.head.appendChild(script);
        }
    }

    var scriptUrls = ["https://unpkg.com/requirejs@2.3.6/require.js"];
    //loadScriptsInOrder(scriptUrls);

    // 兼容xhr异步加载。不使用script标签，使用js代码按顺序加载cdn


    //var scriptUrls = ['script1.js', 'script2.js', 'script3.js'];
    //var scriptUrls = ["https://unpkg.com/prismjs@1.29.0/plugins/toolbar/prism-toolbar.min.js"];

    //scriptUrls.push("https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js");
    //scriptUrls.push("https://unpkg.com/prismjs@1.29.0/plugins/show-language/prism-show-language.min.js");
    //loadScriptsInOrder(scriptUrls);

    document.querySelector('form[name=mes]').addEventListener("submit", (event) => {
        event.preventDefault();

        const messageInput = document.querySelector('form[name=mes] input');
        const messages = document.getElementById("messages");

        const userMessage = document.createElement("div");
        userMessage.classList.add("my-4");
        userMessage.innerHTML = `<p class="mb-2"><strong>You:</strong> ${messageInput.value}</p>`;
        messages.appendChild(userMessage);
        messageInput.value = "";

        let prompt = document.querySelector("#messages").innerText;
        console.log(prompt);


        const aiMessageDiv = document.createElement("div");
        aiMessageDiv.classList.add("border-bottom", "border-info", "my-4");

        const aiMessages = document.createElement("p");
        aiMessages.classList.add("p-3", "bg-success", "bg-opacity-10", "rounded");

        aiMessageDiv.appendChild(aiMessages);
        messages.appendChild(aiMessageDiv);


        const substitutedUrl = `wss://backend.buildpicoapps.com/ask_ai_streaming?app_id=leg-raise&prompt=${encodeURIComponent(prompt)}`;
        const ws = new WebSocket(substitutedUrl);

        let eventData = '';
        ws.addEventListener("message", (event) => {
            console.log(event.data);

            eventData += event.data;
            //eventData = "```\nvar a = 1;\n```";
            aiMessages.innerHTML = marked.parse(eventData);

            // Prism.highlightAll(); 高亮全部，无参调用需要code标签的属性指定语言
            document.querySelectorAll("pre code").forEach(function (codeElement) {
                Prism.highlightElement(codeElement, true, function () {
                    console.log("Prism.highlightElement")
                });
            });
        });


        ws.addEventListener("close", (event) => {

            console.log("Connection closed", event.code, event.reason);
            if (event.code != 1000) {
                alert("Oops, we ran into an error. Refresh the page and try again.");
            }
        });

        ws.addEventListener("error", (error) => {
            console.log('WebSocket error', error);
            alert("Oops, we ran into an error. Refresh the page and try again.");
        });
    });
</script>
</body>
</html>