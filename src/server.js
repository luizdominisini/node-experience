import express from "express";
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/:nome", (req, res) => {
  const nome = req.params.nome;
  res.render("index.ejs", {nome});
});

app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} in adress http://localhost:${PORT}`
  );
});
