<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
	
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            line-height: 1.6;
        }

        a {
            color: inherit;
        }
    </style>
    <title>ChatGPT App</title>
</head>
<body class="bg-white min-h-screen" style="background-color: rgb(241 245 249);">
    <div class="container mx-auto px-4 py-8">
        <form id="chat-form" class="space-y-4">
            <div id="messages" class="bg-white border-2 border-gray-300 p-4 mb-4">
            </div>
            <label for="message" class="block">
                Message or question for ChatGPT
                <input type="text" id="message" name="message" class="w-full border-2 border-gray-300 focus:border-indigo-500 p-2 mt-1">
            </label>
            <button type="submit" class="bg-indigo-700 text-white py-2 px-4 rounded">Send</button>
        </form>

        <footer class="mt-8">
            <a href="#" class="text-indigo-700">Made with ❤️</a>
        </footer>
    </div>

	<script src="https://cdn.bootcdn.net/ajax/libs/marked/2.1.3/marked.min.js"></script>
	
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js@10.7.2/styles/default.min.css">
	<script src="https://cdn.bootcdn.net/ajax/libs/highlight.js/10.7.2/highlight.min.js"></script>
	
    <script>
        const form = document.getElementById("chat-form");
        const messageInput = document.getElementById("message");
        const messages = document.getElementById("messages");

        form.addEventListener("submit", (event) => {
            event.preventDefault();
			
			const userMessage = document.createElement("div");
            userMessage.classList.add("border-b", "border-gray-200", "my-4");
            userMessage.innerHTML = `<p class="text-gray-700 mb-2"><strong>You:</strong> ${messageInput.value}</p>`;
            messages.appendChild(userMessage);
            messageInput.value = "";

            let prompt = document.querySelector("#messages").innerText;
            console.log(prompt);


			const aiMessageDiv = document.createElement("div");
			aiMessageDiv.classList.add("border-b", "border-gray-200", "my-4");
			
			const aiMessages = document.createElement("p");
			aiMessages.classList.add("text-blue-500", "mb-2");
			
			aiMessageDiv.appendChild(aiMessages);
			messages.appendChild(aiMessageDiv);
			
			
			
			const substitutedUrl = `wss://backend.buildpicoapps.com/ask_ai_streaming?app_id=leg-raise&prompt=${encodeURIComponent(prompt)}`;
            const ws = new WebSocket(substitutedUrl);
			
			let eventData = '';
            ws.addEventListener("message", (event) => {
                console.log(event.data);
				
				eventData += `${event.data}`;
                
				aiMessages.innerHTML = marked(eventData);
            });
			
			
            ws.addEventListener("close", (event) => {
				//aiMessages.innerHTML = marked(aiMessages.innerHTML);
				// 启用代码高亮
				document.querySelectorAll('pre code').forEach((block) => {
					hljs.highlightBlock(block);
				});
				
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