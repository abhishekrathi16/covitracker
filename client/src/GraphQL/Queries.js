//this component is not used, it was made for purposes using Graphql but because of an error I couldnt proceed using this 

import { gql } from "@apollo/client";

export const LOAD_STATS = gql`
query {
  case {
    _id
	country
	totalConf
	totalDeaths
	totalRecovered
  }
}
`