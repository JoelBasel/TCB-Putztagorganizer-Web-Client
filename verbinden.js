document.addEventListener("DOMContentLoaded", () => {
    const connectButton = document.getElementById("connectButton");
  
    connectButton.addEventListener("click", () => {
      const ip = document.getElementById("ip").value;
      const port = document.getElementById("port").value;
      
      if (!ip || !port) {
        alert("Bitte geben Sie eine IP-Adresse und Portnummer ein.");
        return;
      }
  
      // Hier Weiterleitung zur Nachrichten-Seite
      window.location.href = "nachrichten.html";
    });
  });
  