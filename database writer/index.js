import connectDB from "./db/connect.js";
import getOverall from "./writer/overall.js"
import { createRequire } from "module"
const require = createRequire(import.meta.url)
const dotenv = require("dotenv")
dotenv.config()

//this is the database writer. It fetches data from an api and writes the content in a database while creating a new collection as mentioned in the MONGO_URI
// dotenv.config()
connectDB(process.env.MONGO_URI);

const country = "India"
const lastDays = "365"

getOverall()