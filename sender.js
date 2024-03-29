document.addEventListener("DOMContentLoaded", () => {
    let socket;

    function connectToServer() {
        const ip = localStorage.getItem("ip");
        const port = localStorage.getItem("port");
        socket = new WebSocket(`ws://${ip}:${port}`);

        socket.onopen = () => {
            console.log('Verbunden mit dem Server');
        };

        socket.onerror = error => {
            console.error('Verbindungsfehler:', error);
        };

        socket.onclose = () => {
            console.log('Verbindung geschlossen');
            // Versuchen Sie, die Verbindung erneut herzustellen
            setTimeout(connectToServer, 2000); // Nach 2 Sekunden erneut verbinden
        };
    }

    connectToServer();

    // Nachrichten senden
    const sendButton = document.getElementById("sendButton");
    const messageInput = document.getElementById("messageInput");

    sendButton.addEventListener("click", () => {
        const message = messageInput.value;
        if (message.trim() !== '') {
            socket.send(message);
            messageInput.value = '';
        }
    });

    // Disconnect-Button
    const disconnectButton = document.getElementById("disconnectButton");
    disconnectButton.addEventListener("click", () => {
        if (socket) {
            socket.close();
        }
        // Hier Weiterleitung zur Verbinden-Seite
        window.location.href = "index.html";
    });
});

