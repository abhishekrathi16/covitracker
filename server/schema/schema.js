const { buildSchema } = require("graphql");

const statusSchema = buildSchema(`
type Query {
    cases: [Status],
    statusByCountry(country: String!): Status
}

type Status {
    country: String
    totalConf: Int
    totalDeaths: Int
    totalRecovered: Int
}
`);

module.exports = statusSchema