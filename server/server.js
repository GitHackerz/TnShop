//Import Packages
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

//Import The Function Files
const functions = require("./functions");

//Import The Router Files
const clientRouter = require("./Routes/Client");
const workerRouter = require("./Routes/Worker");
const productRouter = require("./Routes/Product");

const app = express();

//Import the Secret Variables
const PORT = process.env.PORT;

// configure the app to use bodyParser()
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

//Connect to MongoDB
functions.startMongooseServer();

//Listen on port 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/**
 * @clientRouter CLient Router
 * @workerRouter Worker Router
 * @productRouter Product Router
 */
app.use("/api/Client", clientRouter);
app.use("/api/Worker", workerRouter);
app.use("/api/Product", productRouter);
