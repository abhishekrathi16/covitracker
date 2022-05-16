//this component is not used, it was made for purposes using Graphql but because of an error I couldnt proceed using this 

import React from "react";

const StatusCard = (props) =>{
    return(
        <div className="card">
            <div className="container">
                <h2>Status of {props.country}</h2>
                <h4>Total Cases: {props.totalCases}</h4>
                <h4>Total Deaths: {props.totalDeaths}</h4>
                <h4>Total Recovered: {props.totalCases - props.totalDeaths}</h4>
            </div>
        </div>
    )
}

export default StatusCard