const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {graphqlHTTP} = require("express-graphql");
const statusSchema = require('./schema/schema.js')
const resolver = require("./resolver/resolver.js")
const dotenv = require("dotenv");

dotenv.config();

//this module is for fetching data from the data base using graphql 
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));


//setting up graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema: statusSchema,
    graphiql: true,
    rootValue: resolver
  })
);

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.listen(5000, () => {
  console.log("server on port 5000");
});
