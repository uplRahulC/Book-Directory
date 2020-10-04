require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const bookRouter = require("./Routes/book");

//Middlewares
app.use(bodyParser.json({}));

//DB Connection

mongoose
  .connect(process.env.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => console.log(`Error on connecting to mongo ${err}`));

//import routes
app.use("/api/book", bookRouter);

//Port
const port = process.env.PORT || 8000;

//starting server
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
