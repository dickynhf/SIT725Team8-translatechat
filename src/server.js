const PORT = 8000;
const express = require("express");
const cors = require("cors");
const Database = require("./config/Database");
const { data } = require("./model");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
const { API_KEY } = process.env;
// const fetch = require("node-fetch");

app.post("/completions", async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that translating languages.",
        },
        {
          role: "user",
          content: `Translate the following texts to English: ${req.body.message}`,
        },
        // { role: "user", content: req.body.message }
      ],
      max_tokens: 1000,
    }),
  };
  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
  }
});

new Database().connect();
app.listen(PORT, () => console.log(`Your server is http://localhost:${PORT}`));

app.get("/datas", async (req, res) => {
  try {
    const datas = await data.find({});
    return res.json(datas);
  } catch (e) {
    return res
      .json({ error: true, message: "Unable to complete request" })
      .status(400);
  }
});

app.post("/datas", async (req, res) => {
  try {
    const { request, response } = req.body;
    let query = {};
    request && (query = { ...query, request });
    response && (query = { ...query, response });
    const dataModel = new data(query);

    const savedData = await dataModel.save();

    if (savedData && savedData._id) {
      return res.json("Saved successfully");
    } else {
      return res
        .json({ error: true, message: "Unable to save data" })
        .status(400);
    }
  } catch (e) {
    console.error(e);
    return res
      .json({ error: true, message: "Unable to complete request" })
      .status(400);
  }
});
