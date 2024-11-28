
const webSocket = new WebSocket('ws://localhost:8081', "protocolOne");

webSocket.onopen = (event) => {
  webSocket.send("Here is some text that server is awaiting");
}