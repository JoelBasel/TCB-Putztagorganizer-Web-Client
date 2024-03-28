let socket;

document.addEventListener("DOMContentLoaded", () => {
  const sendButton = document.getElementById("sendButton");
  const disconnectButton = document.getElementById("disconnectButton");

  sendButton.addEventListener("click", () => {
    const message = document.getElementById("message").value;
    if (socket && message) {
      socket.send(message);
    }
  });

  disconnectButton.addEventListener("click", () => {
    if (socket) {
      socket.close();
    }
    // Hier Weiterleitung zur Verbinden-Seite
    window.location.href = "verbinden.html";
  });
});
