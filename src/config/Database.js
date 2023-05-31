// import mongoose, {ConnectOptions} from "mongoose";
const mongoose = require("mongoose");

require("dotenv").config();
const { MONGO_URI, DB_NAME } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: DB_NAME,
};

class Database {
  constructor() {
    this.mongoose = mongoose;
    this.options = options;
  }

  connect() {
    this.mongoose.connect(MONGO_URI, this.options);
    this.mongoose.connection.once("connecting", () => {
      console.log("connecting to mongodb server via mongoose...");
    });
    this.mongoose.connection.once("connected", () => {
      console.log("connected to mongodb server via mongoose...");
    });
    this.mongoose.connection.once("open", () => {
      console.log("database is active...");
    });
    this.mongoose.connection.once("disconnecting", () => {
      console.log("disconnecting from mongodb server...");
    });
    this.mongoose.connection.once("disconnected", () => {
      console.log("disconnected from mongodb server...");
    });
    this.mongoose.connection.once("close", () => {
      console.log("closing connections with mongodb server...");
    });
    this.mongoose.connection.once("reconnected", () => {
      console.log("reconnected to mongodb server...");
    });
    this.mongoose.connection.once("error", (err) => {
      console.log("mongodb server error...");
      console.log(err);
    });
  }

  disconnect() {
    this.mongoose.disconnect().then(() => {
      console.log("Successfully disconnected from db");
    });
  }
}

module.exports = Database;
