// import mongoose from "mongoose";
import mongoose from "mongoose"

const OverallSchema = new mongoose.Schema({
    country:{
        type: String,
        required: true
    },
    totalConf: {
        type: Number,
        required: true
    },
    totalDeaths: {
        type: Number,
        required: true
    },
    totalRecovered: {
        type: Number,
        required: true
    }
})
const Overall = mongoose.model('Cases', OverallSchema)

export default Overall 