import express from "express";
import axios from "axios";

const API_URL = "https://api.kanye.rest";
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    const result = response.data;
    res.render("index.ejs", { quote: result.quote });
  } catch (error) {
    res.status(404).send(error.message);
  }
});
app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
