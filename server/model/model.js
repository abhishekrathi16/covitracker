const mongoose = require("mongoose")

const statusSchema = new mongoose.Schema({
    country: String,
    totalConf: Number,
    totalDeaths: Number,
    totalRecovered: Number,
})

module.exports = new mongoose.model('Status',statusSchema)