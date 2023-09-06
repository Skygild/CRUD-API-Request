const express = require("express");
const connectDB = require("./db/connectDB");
const app = express();
const port = 3001;
require("dotenv").config();
const listRequest = require("./api-request/listRequest");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/list", listRequest.createNewList);
app.get("/list", listRequest.getAllList);
app.patch("/list/target", listRequest.updateList);
app.delete("/list/target", listRequest.deleteList);

app.listen(port, () => {
  console.log(`Listening to Port ${port}`);
});
connectDB(process.env.URL);
