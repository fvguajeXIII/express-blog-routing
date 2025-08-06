// Importa il framework Express
const express = require("express");

// Importa il router dei posts
const postsRouter = require("./routers/posts");

// Crea un'istanza dell'applicazione Express
const app = express();

// Middleware per parsare il JSON nelle richieste
app.use(express.json());

// Definisce la porta su cui il server sarà in ascolto
const port = 3000;

// Definisce la route principale 
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

// Registra il router dei posts con il prefisso /posts
app.use("/posts", postsRouter);

// Avvia il server sulla porta specificata
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});