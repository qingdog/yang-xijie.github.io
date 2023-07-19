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
               style="margin:0 auto;padding:5px 10px;border:1px solid #ccc;border-radius:5px;width:100%;"
			   onclick="callOpenAIWithSSE('https://p0.kamiya.dev/api/openai/chat/completions', 'sk-5EzqpaEloq20btdLIlrhDYh50r01kB9cZI6HpPpSUip16sD0', null);">
    </div>
</div>

<script>
    function translate() {
        document.querySelector("input[type=submit]").onclick = function () {
            const api = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-CN&hl=en-US&dt=t&dt=bd&dj=1&source=icon&tk=294611.294611&q=";
            const url = new URL(api);
            url.searchParams.set('q', document.getElementsByTagName("textarea")[0].value);

            const xhr = new XMLHttpRequest();
            xhr.open('post', url.href, true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            document.getElementsByTagName("textarea")[1].value = "翻译中。。。";

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        const json = JSON.parse(xhr.responseText);
                        let value = "";
                        for (let i = 0; i < json.sentences.length; i++) {
                            value += json.sentences[i].trans;
                        }
                        document.getElementsByTagName("textarea")[1].value = value;
                        console.log(json);
                    } else {
                        // 处理浏览器请求连接超时 net::ERR_CONNECTION_TIMED_OUT
                        document.getElementsByTagName("textarea")[1].value = "翻译请求出错。";
                        console.warn(xhr);
                    }
                }
            };

            // 设置超时时间为 5 秒视为错误停止请求
            xhr.timeout = 5000;
            xhr.ontimeout = function () {
                document.getElementsByTagName("textarea")[1].value = "请求 API 超时。";
                console.warn("请求超过5s！");
            };

            xhr.send();
        }
    }

    window.onload = function () {
        
    }
	
	function onLoadPromise() {
		console.log(000);
	  return new Promise(function(resolve) {
		window.addEventListener('load', resolve);
	  });
	}

	onLoadPromise().then(function() {
		// 在整个页面及其依赖资源加载完成后的异步操作
		const input = document.querySelector("input[type=submit]");
		console.log(input);
	});
	
	window.addEventListener('load', function() {
	  // 整个页面及其依赖资源加载完成后的操作
	  console.log(123);
	});


	
	document.addEventListener("DOMContentLoaded", function() {
		// 页面DOM结构加载完成后的操作
		
		const input = document.querySelector("input[type=submit]");
		console.log(true);
		//translate();

		input.addEventListener('click', (event) => {
			event.preventDefault();

			let token = "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";
			let url = "https://api.openai.com/v1/completions";

			url = "https://p0.kamiya.dev/api/openai/chat/completions";
			token = "sk-oD0CmFb0LfS3ASpF58NlNH8luYO34JkAl2iw2nIrNtuscnWQ";

			callOpenAIWithSSE(url, 'sk-5EzqpaEloq20btdLIlrhDYh50r01kB9cZI6HpPpSUip16sD0', null);
		});
	});



    function send() {
        const url = 'https://api.openai.com/v1/completions';
        document.getElementsByTagName("textarea")[1].value = "发送中。。。";

        const xhr = new XMLHttpRequest();
        xhr.open('post', url, true);

        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);

        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                const json = JSON.parse(xhr.responseText);
                document.getElementsByTagName("textarea")[1].value = json.choices[0].text;
                console.log(json);
            }
        };

        const value = document.getElementsByTagName("textarea")[0].value;
        let json = {model: 'gpt-3', max_tokens: 2048, prompt: value};

        console.log(json);
        xhr.send(JSON.stringify(json));
    }

    async function callOpenAIWithSSE(url, token, model) {
		document.getElementsByTagName("textarea")[1].value = "发送中。。。";
		
        const contentStr = document.getElementsByTagName("textarea")[0].value;
        let requestBodyData = {
            messages: [
                {
                    role: "system",
                    content:
                        "You are ChatGPT, a large language model trained by OpenAI.\nCarefully heed the user's instructions. \nRespond using Markdown.",
                },
                {
                    role: "user",
                    content: contentStr,
                },
            ],
            model: "openai:gpt-3.5-turbo",
            max_tokens: null,
            temperature: 1,
            presence_penalty: 0,
            top_p: 1,
            frequency_penalty: 0,
            stream: true,
        };

        requestBodyData.model = model ?? 'gpt-3.5-turbo';

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
                body: JSON.stringify(requestBodyData),
            });

            const reader = response.body.getReader();
			
			const textarea = document.getElementsByTagName("textarea")[1];
			textarea.value = "";
			
			const prefix = 'data: ';

            while (true) {
                const {done, value} = await reader.read();
                if (done) break;

                // TextDecoder解码读取的二进制数据为文本
                const text = new TextDecoder().decode(value);
				console.log(text);
                
                const arr = text.split("\n");

                let jsonObj = {};
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] === "") continue;
                    if (arr[i] === "data: [DONE]") break;
					
					let jsonStr = null;
					// 截取SSE流的数据首6个字节
					if (arr[i].indexOf(prefix) === 0) {
						jsonStr = arr[i].substr(prefix.length);
					} else {
						jsonStr = arr[i];
					}
					
                    jsonObj["k" + i] = JSON.parse(jsonStr);

                    if (jsonObj["k" + i].status === 500) {
                        alert(jsonObj["k" + i].message);
                        break;
                    }

                    textarea.value += jsonObj["k" + i].choices[0].delta.content ?? "";
                }
            }
        } catch (error) {
            console.error("Error:", error);
			alert('请求出错了！');
        }
    }

    function oldCallOpenAI(token) {
        const contentStr = document.getElementsByTagName("textarea")[0].value;

        const url = 'https://p0.kamiya.dev/api/openai/chat/completions';
        const data = {
            "messages": [
                {
                    "role": "system",
                    "content": "You are ChatGPT, a large language model trained by OpenAI.\nCarefully heed the user's instructions. \nRespond using Markdown."
                },
                {
                    "role": "user",
                    "content": contentStr
                }
            ],
            "model": "openai:gpt-3.5-turbo",
            "max_tokens": null,
            "temperature": 1,
            "presence_penalty": 0,
            "top_p": 1,
            "frequency_penalty": 0,
            "stream": true
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(data),
        })
            .then(response => response.text())  // 使用 text() 而不是 json()
            .then(data => {
                let jsonStr = data.replaceAll('data: ', '');  // 删除 "data: " 字符串
                jsonStr = jsonStr.replaceAll('[DONE]', '');
                let arr = jsonStr.split('\n');

                console.log(arr.length);

                let textarea = document.getElementsByTagName("textarea")[1]
                textarea.value = "";

                const jsonObj = {};
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] != '') {
                        jsonObj['k' + i] = JSON.parse(arr[i])

                        let responseStr = jsonObj['k' + i].choices[0].delta.content ?? '';
                        document.getElementsByTagName("textarea")[1].value = textarea.value + responseStr;

                    }
                }
                console.log(jsonObj['k0'].choices[0].delta.content);

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

</script>
</body>
</html>