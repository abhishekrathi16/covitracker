//this component is not used, it was made for purposes using Graphql but because of an error I couldnt proceed using this 

import React from "react";
import StatusCard from "./StatusCard";
// import { useQuery, gql } from "@apollo/client";
// import { LOAD_STATS } from "../GraphQL/Queries";
// import { result } from "./Status";

const StatusCards = () => {
//   const {error, loading, data} = useQuery(LOAD_STATS)
//   useEffect(()=>{
//       console.log(data); //problem with authentication, dont know how to resolve, used MongoDB Realm to create the endpoint for the data, guess it didnt work the way i wanted it to
//   },[data])

  let statuses = [
      {
        id: 1,
        country: "India",
        totalCases: 100,
        totalDeaths: 100,
        totalRecovered: 100,
      }
    ]
    // console.log(result)
  return (
    <>
      <div className="statuses">
        {statuses.map((status) => {
          return (
            <StatusCard
              key={status.id}
              country={status.country}
              totalCases={status.totalCases}
              totalDeaths={status.totalDeaths}
              totalRecovered={status.totalRecovered}
            />
          );
        })}
      </div>
    </>
  );
};

export default StatusCards;
