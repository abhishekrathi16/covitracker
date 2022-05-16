import Overall from "../models/overall.js";
import mongoose from "mongoose";
import fetch from "node-fetch";

async function getOverall(){
    const myOverall = await fetch(`https://api.covid19api.com/summary`)
    const response = await myOverall.json()
    // console.log(response);
    for(let  i = 0; i< response.Countries.length;i++){
        const overall = new Overall({
            country: response.Countries[i].Country,
            totalConf: response.Countries[i].TotalConfirmed,
            totalDeaths: response.Countries[i].TotalDeaths,
            totalRecovered: response.Countries[i].TotalRecovered,
        })
        overall.save()
    }
}

export default getOverall