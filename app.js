import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Selamun aleyküm babanız geri döndü");
});

app.get("/ask", (req, res) => {
  res.send("Benim aşkım PELİN ÇEÇEN");
});

app.get("/*", (req, res) => {
  res.send("Kardeşim single pageee!! Geri bas!!!");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
