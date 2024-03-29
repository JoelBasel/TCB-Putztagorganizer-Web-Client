document.addEventListener("DOMContentLoaded", () => {
    const connectButton = document.getElementById("connectButton");
  
    connectButton.addEventListener("click", () => {
      const ip = document.getElementById("ip").value;
      const port = document.getElementById("port").value;
      console.log("In index.html")
      console.log("IP:", ip);
      console.log("Port:", port);

      if (!ip || !port) {
        alert("Bitte geben Sie eine IP-Adresse und Portnummer ein.");
        return;
      }

      // IP und Port im Local Storage speichern
      localStorage.setItem("ip", ip);
      localStorage.setItem("port", port);
  
      // Hier Weiterleitung zur Nachrichten-Seite
      window.location.href = "sender.html";
    });
  });
  