<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <!-- Font Awesome CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    
	<title>ChatGPT App</title>
</head>


<body style="background-color: rgb(241 245 249);" class="line-numbers"> <!-- enabled for the whole page -->

	<div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div class="card">
				
                    <div class="card-header">
                        <i class="fas fa-comments"></i> Chat
                    </div>
					
					<div class="card-body p-4 mb-4" id="messages">
                        <!-- Chat messages will be displayed here -->	
                    </div>
					
                    <form id="mes">
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
	
	<!-- markdown格式 -->
	<script src="https://unpkg.com/marked@6.0.0/marked.min.js"></script>
	
	<!-- prism高亮 -->
	<link rel="stylesheet" href="https://unpkg.com/prismjs@1.29.0/themes/prism-tomorrow.min.css">
	<style>
		pre.line-numbers {
			/*给tomorrow主题加圆角*/
			border-radius: 0.3em;
		}
	</style>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
	
	<!-- 自动加载高亮语言语法的js代码 -->
	<script src="https://unpkg.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>
	
	<!-- 插件工具栏 -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/toolbar/prism-toolbar.min.css">
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/toolbar/prism-toolbar.js"></script>
	<!-- 插件工具栏复制 -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js"></script>
	<!-- 插件工具栏显示语言 -->
	<script src="https://unpkg.com/prismjs@1.29.0/plugins/show-language/prism-show-language.min.js"></script>
	
	<!-- 给class='line-numbers'加行号 -->
	<link rel="stylesheet" href="https://unpkg.com/prismjs@1.29.0/plugins/line-numbers/prism-line-numbers.min.css">
	<script src="https://unpkg.com/prismjs@1.29.0/plugins/line-numbers/prism-line-numbers.min.js"></script>
	
    <script>
		marked.setOptions({
			// mangle参数通常用于压缩和混淆HTML输出，但自从版本5.0.0以来一直不推荐使用
			mangle: false,
			// 用于自定义Markdown标题（headers）的ID生成，但自从版本5.0.0以来一直不推荐使用
			headerIds: false
		});

        const form = document.querySelector('form#mes');
        const messageInput = document.querySelector('form input');
        const messages = document.getElementById("messages");

        form.addEventListener("submit", (event) => {
            event.preventDefault();
			
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
				aiMessages.innerHTML = marked.parse(eventData);
				
				<!-- 高亮 -->
				Prism.highlightAll();
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