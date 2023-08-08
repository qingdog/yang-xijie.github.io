<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Chrome网页翻译测试</title>
</head>
<body>
<div>
    <div style="display:flex;column-gap:10px;">
        <div style="flex:1;">
            <label style="font-size:.85em;">※ 输入英文</label>
            <label>
                <textarea placeholder="输入英文"
                          style="height: 30em;padding:10px;border:2px solid #666;border-radius:5px;box-sizing:border-box;width:100%;resize: vertical;">Hello World!</textarea>
            </label>
        </div>
        <div style="flex:1;">
            <label style="font-size:.85em;">※ 翻译结果</label>
            <label>
                <textarea placeholder="翻译结果"
                          style="height: 30em;padding:10px;border:2px solid #666;border-radius:5px;box-sizing:border-box;width:100%;resize: vertical;"></textarea>
            </label>
        </div>
    </div>
    <div style="margin-top:10px;">
        <input type="submit" value="测试一下"
               style="margin:0 auto;padding:5px 10px;border:1px solid #ccc;border-radius:5px;width:100%;">
    </div>
</div>
</body>
<script>
	load();
	
	// 在页面加载完成后执行
    function load() {
		document.addEventListener("DOMContentLoaded", function() {
			translate();
		});
	}
	
    function translate() {
        document.querySelector("input[type=submit]").onclick = function () {
            let api = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-CN&hl=en-US&dt=t&dt=bd&dj=1&source=icon&tk=294611.294611&q=";
			api = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-CN&hl=en-US&dt=t&dt=bd&dj=1"
			const url = new URL(api);
            url.searchParams.set('q', document.getElementsByTagName("textarea")[0].value);

            const xhr = new XMLHttpRequest();
			// 请求方式 url链接 异步方式
            xhr.open('get', url.href, true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            document.getElementsByTagName("textarea")[1].value = "翻译中。。。";

			// 回调函数：处理异步响应结果
            xhr.onreadystatechange = function () {
				// readyState为4表示请求已完成
                if (xhr.readyState != 4) {
					return;
				}
				// status为200表示成功收到响应
				if (xhr.status != 200) {
					// 处理错误：连接超时 net::ERR_CONNECTION_TIMED_OUT
					document.getElementsByTagName("textarea")[1].value = "翻译出错！";
					console.warn(xhr);	
				}
				
				const json = JSON.parse(xhr.responseText);
				console.log(json);
				
				let value = "";
				for (let i = 0; i < json.sentences.length; i++) {
					value += json.sentences[i].trans;
				}
				document.getElementsByTagName("textarea")[1].value = value;
            };

            // 设置超时时间为 5 秒视为错误停止请求
            xhr.timeout = 5000;
            xhr.ontimeout = function () {
                document.getElementsByTagName("textarea")[1].value = "请求 API 超时！";
                console.error("请求超过5s！");
            };

            xhr.send();
        }
    }

    /*window.onload = function () {
    }*/
	
	function onLoadPromise() {
	  return new Promise(function(resolve) {
		window.addEventListener('load', resolve);
	  });
	}
	onLoadPromise().then(function() {
	  // 在整个页面及其依赖资源加载完成后的操作
	});
	
	

</script>
</html>