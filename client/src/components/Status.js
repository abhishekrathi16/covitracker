import React,{useState} from "react";
import axios from "axios"
import {Box, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from "@mui/material"


function createData(country, totalConf, totalDeaths, totalRecovered) {
  return { country, totalConf, totalDeaths, totalRecovered };
}

const Status = () => {
  let countryName
  let result
  const [country, setCountry] = useState("-")
  const [totalConf, setTotalConf] = useState(0)
  const [totalDeaths, setTotalDeaths] = useState(0)
  const [totalRecov, setTotalRecov] = useState(0)
  const [textValue, setTextValue] = useState("");
  const onTextChange = (e) => setTextValue(e.target.value) 
  const handleSubmit = () => {
      countryName = textValue
      async function getStatus(){
        const Status = await axios.get(`https://api.covid19api.com/summary`)
        const response = Status.data
        response.Countries.forEach(element => {
            if(element.Country === countryName){
                result = element
            }
        });
        return result
      }
      let res = getStatus()
      res.then(value=>{
        setCountry(value.Country)
        setTotalConf(value.TotalConfirmed)
        setTotalDeaths(value.TotalDeaths)
        setTotalRecov(value.TotalRecovered)
      })
  }
  const rows = [
    createData(country, totalConf, totalDeaths, totalConf-totalDeaths),
  ];
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="aligned">
          <TextField
            id="filled-search"
            label="Status of Country"
            type="search"
            variant="filled"
            onChange={onTextChange}
            value={textValue}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Box>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align="left">Total Confirmed</TableCell>
            <TableCell align="left">Total Deaths</TableCell>
            <TableCell align="left">Total Recovered</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.country}
              </TableCell>
              <TableCell align="left">{row.totalConf}</TableCell>
              <TableCell align="left">{row.totalDeaths}</TableCell>
              <TableCell align="left">{row.totalConf - row.totalDeaths}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default Status;

