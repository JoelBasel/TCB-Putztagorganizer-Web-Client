let socket;

document.addEventListener("DOMContentLoaded", () => {
  const connectButton = document.getElementById("connectButton");
  const disconnectButton = document.getElementById("disconnectButton");

  connectButton.addEventListener("click", () => {
    const ip = document.getElementById("ip").value;
    const port = document.getElementById("port").value;
    
    if (!ip || !port) {
      alert("Bitte geben Sie eine IP-Adresse und Portnummer ein.");
      return;
    }

    socket = new WebSocket(`ws://${ip}:${port}`);

    socket.onopen = () => {
      console.log("Verbindung hergestellt");
      connectButton.style.display = "none";
      disconnectButton.style.display = "inline";
    };

    socket.onmessage = (event) => {
      console.log("Nachricht vom Server:", event.data);
    };

    socket.onclose = () => {
      console.log("Verbindung geschlossen");
      connectButton.style.display = "inline";
      disconnectButton.style.display = "none";
    };
  });

  disconnectButton.addEventListener("click", () => {
    if (socket) {
      socket.close();
    }
  });
});
