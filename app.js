import express from "express";
import dotenv from "dotenv";
import { conn } from "./db.js";
import pageRoute from "./routes/pageRoute.js";
dotenv.config();

// connection to the DB
conn();

const app = express();
const port = process.env.PORT;

app.set("view engine", "ejs");

app.use(express.static("public"));

// routes
app.use("/", pageRoute);

// app.get("/", (req, res) => {
//   res.render("index");
//   //   res.send("Selamun aleyküm babanız geri döndü");
// });
// app.get("/about", (req, res) => {
//   res.render("about");
// });

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
