
const webSocket = new WebSocket('ws://localhost:8081');

const input = document.getElementById("input");
const button = document.querySelector("button");


webSocket.onopen = (event) => {
  webSocket.send("Websocket connection is established");
}

button.addEventListener("click", () => {
  const clientText = input.value.toString();
  if (webSocket.readyState === webSocket.OPEN){
    webSocket.send(clientText);
  }else{
    console.log("Websocket connection is not open")
  }
});
