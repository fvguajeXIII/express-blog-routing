// Importa il framework Express
const express = require("express");

// Crea un'istanza dell'applicazione Express
const app = express();

// Definisce la porta su cui il server sarà in ascolto
const port = 3000;

// Definisce la route principale 
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

// Avvia il server sulla porta specificata
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});