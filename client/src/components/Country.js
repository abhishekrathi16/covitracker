import React, { useState, useEffect } from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const Country = (props) => {
  const [val, setVal] = useState(props.val);
  useEffect(() => {
    // console.log(val);
    // props.datafetch(val);
  });

  const handleChange = (event) => {
    setVal(event.target.value);
    props.update(event.target.value);
  };
  return (
    <Box
      sx={{
        minWidth: 150,
        width: "5rem",
        margin: "1rem",
        display: "inline-block",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={val}
          label={props.name}
          onChange={handleChange}
        >
          {/* the options have been hardcoded since I couldn't figure out the map function here,it kept throwing errors */}
          <MenuItem value={"Australia"}>Australia</MenuItem>
          <MenuItem value={"Canada"}>Canada</MenuItem>
          <MenuItem value={"India"}>India</MenuItem>
          <MenuItem value={"UK"}>UK</MenuItem>
          <MenuItem value={"USA"}>USA</MenuItem>
          <MenuItem value={"Germany"}>Germany</MenuItem>
          <MenuItem value={"France"}>France</MenuItem>
          <MenuItem value={"Sri Lanka"}>Sri Lanka</MenuItem>
          <MenuItem value={"UAE"}>UAE</MenuItem>
          <MenuItem value={"South Africa"}>South Africa</MenuItem>
          <MenuItem value={"Japan"}>Japan</MenuItem>
          <MenuItem value={"China"}>China</MenuItem>
          <MenuItem value={"South Korea"}>South Korea</MenuItem>
          <MenuItem value={"Switzerland"}>Switzerland</MenuItem>
          <MenuItem value={"Ukraine"}>Ukraine</MenuItem>
          <MenuItem value={"Belarus"}>Belarus</MenuItem>
          <MenuItem value={"Afghanistan"}>Afghanistan</MenuItem>
          <MenuItem value={"Austria"}>Austria</MenuItem>
          <MenuItem value={"Georgia"}>Georgia</MenuItem>
          <MenuItem value={"Egypt"}>Egypt</MenuItem>
          <MenuItem value={"Bahrain"}>Bahrain</MenuItem>
          <MenuItem value={"Thailand"}>Thailand</MenuItem>
          <MenuItem value={"Iceland"}>Iceland</MenuItem>
          <MenuItem value={"Turkey"}>Turkey</MenuItem>
          <MenuItem value={"Israel"}>Israel</MenuItem>
          <MenuItem value={"Brazil"}>Brazil</MenuItem>
          <MenuItem value={"Argentina"}>Argentina</MenuItem>
          <MenuItem value={"Jamaica"}>Jamaica</MenuItem>
          <MenuItem value={"Russia"}>Russia</MenuItem>
          <MenuItem value={"Ecuador"}>Ecuador</MenuItem>
          <MenuItem value={"Chad"}>Chad</MenuItem>
          <MenuItem value={"Albania"}>Albania</MenuItem>
          <MenuItem value={"Spain"}>Spain</MenuItem>
          <MenuItem value={"Oman"}>Oman</MenuItem>
          <MenuItem value={"Cameroon"}>Cameroon</MenuItem>
          <MenuItem value={"Zimbabwe"}>Zimbabwe</MenuItem>
          <MenuItem value={"Morocco"}>Morocco</MenuItem>
          <MenuItem value={"Kuwait"}>Kuwait</MenuItem>
          <MenuItem value={"Iran"}>Iran</MenuItem>
          <MenuItem value={"Iraq"}>Iraq</MenuItem>
          <MenuItem value={"Greece"}>Greece</MenuItem>
          <MenuItem value={"Sudan"}>Sudan</MenuItem>
          <MenuItem value={"North Korea"}>North Korea</MenuItem>
          <MenuItem value={"Hungary"}>Hungary</MenuItem>
          <MenuItem value={"Pakistan"}>Pakistan</MenuItem>
          <MenuItem value={"Ghana"}>Ghana</MenuItem>
          <MenuItem value={"Bhutan"}>Bhutan</MenuItem>
          <MenuItem value={"Nepal"}>Nepal</MenuItem>
          <MenuItem value={"Cambodia"}>Cambodia</MenuItem>
          <MenuItem value={"Myanmar"}>Myanmar</MenuItem>
          <MenuItem value={"Greenland"}>Greenland</MenuItem>
          <MenuItem value={"Antarctica"}>Antarctica</MenuItem>
          <MenuItem value={"Guinea"}>Guinea</MenuItem>
          <MenuItem value={"Portugal"}>Portugal</MenuItem>
          <MenuItem value={"Mexico"}>Mexico</MenuItem>
          <MenuItem value={"Ireland"}>Ireland</MenuItem>
          <MenuItem value={"Netherlands"}>Netherlands</MenuItem>
          <MenuItem value={"Libya"}>Libya</MenuItem>
          <MenuItem value={"Fiji"}>Fiji</MenuItem>
          <MenuItem value={"Zambia"}>Zambia</MenuItem>
          <MenuItem value={"Panama"}>Panama</MenuItem>
          <MenuItem value={"Congo"}>Congo</MenuItem>
          <MenuItem value={"Qatar"}>Qatar</MenuItem>
          <MenuItem value={"New Caledonia"}>New Caledonia</MenuItem>
          <MenuItem value={"New Zealand"}>New Zealand</MenuItem>
          <MenuItem value={"Uganda"}>Uganda</MenuItem>
          <MenuItem value={"Algeria"}>Algeria</MenuItem>
          <MenuItem value={"Poland"}>Poland</MenuItem>
          <MenuItem value={"Madagascar"}>Madagascar</MenuItem>
          <MenuItem value={"Uzbekistan"}>Uzbekistan</MenuItem>
          <MenuItem value={"Croatia"}>Croatia</MenuItem>
          <MenuItem value={"Senegal"}>Senegal</MenuItem>
          <MenuItem value={"Saudi Arabia"}>Saudi Arabia</MenuItem>
          <MenuItem value={"Sweden"}>Sweden</MenuItem>
          <MenuItem value={"Slovakia"}>Slovakia</MenuItem>
          <MenuItem value={"Romania"}>Romania</MenuItem>
          <MenuItem value={"Peru"}>Peru</MenuItem>
          <MenuItem value={"Denmark"}>Denmark</MenuItem>
          <MenuItem value={"Chile"}>Chile</MenuItem>
          <MenuItem value={"Hoduras"}>Hoduras</MenuItem>
          <MenuItem value={"Kenya"}>Kenya</MenuItem>
          <MenuItem value={"Mauritius"}>Mauritius</MenuItem>
          <MenuItem value={"Ajikistan"}>Ajikistan</MenuItem>
          <MenuItem value={"Namibia"}>Namibia</MenuItem>
          <MenuItem value={"Barbados"}>Barbados</MenuItem>
          <MenuItem value={"Trinidad and Tobago"}>Trinidad and Tobago</MenuItem>
          <MenuItem value={"Puerto Rico"}>Puerto Rico</MenuItem>
          <MenuItem value={"Guam"}>Guam</MenuItem>
          <MenuItem value={"Jordan"}>Jordan</MenuItem>
          <MenuItem value={"Malaysia"}>Malaysia</MenuItem>
          <MenuItem value={"Tunisia"}>Tunisia</MenuItem>
          <MenuItem value={"Mozambique"}>Mozambique</MenuItem>
          <MenuItem value={"Bahamas"}>Bahamas</MenuItem>
          <MenuItem value={"Christmas Island"}>Christmas Island</MenuItem>
          <MenuItem value={"Vatican City"}>Vatican City</MenuItem>
          <MenuItem value={"Costa Rica"}>Costa Rica</MenuItem>
          <MenuItem value={"Bulgaria"}>Bulgaria</MenuItem>
          <MenuItem value={"Solomon Islands"}>Solomon Islands</MenuItem>
          <MenuItem value={"Malta"}>Malta</MenuItem>
          <MenuItem value={"Luxemborg"}>Luxemborg</MenuItem>
          <MenuItem value={"Armenia"}>Armenia</MenuItem>
          <MenuItem value={"Vietnam"}>Vietnam</MenuItem>
          <MenuItem value={"Cyprus"}>Cyprus</MenuItem>
          <MenuItem value={"Italy"}>Italy</MenuItem>
          <MenuItem value={"Finland"}>Finland</MenuItem>
          <MenuItem value={"Ethiopia"}>Ethiopia</MenuItem>
          <MenuItem value={"Botswana"}>Botswana</MenuItem>
          <MenuItem value={"Liechtenstein"}>Liechtenstein</MenuItem>
          <MenuItem value={"Cape Verde"}>Cape Verde</MenuItem>
          <MenuItem value={"Mongolia"}>Mongolia</MenuItem>
          <MenuItem value={"Guatemala"}>Guatemala</MenuItem>
          <MenuItem value={"Guyana"}>Guyana</MenuItem>
          <MenuItem value={"Benin"}>Benin</MenuItem>
          <MenuItem value={"El Salvador"}>El Salvador</MenuItem>
          <MenuItem value={"Bangladesh"}>Bangladesh</MenuItem>
          <MenuItem value={"Niue"}>Niue</MenuItem>
          <MenuItem value={"Piticarin"}>Piticarin</MenuItem>
          <MenuItem value={"Norway"}>Norway</MenuItem>
          <MenuItem value={"Sierra Leone"}>Sierra Leone</MenuItem>
          <MenuItem value={"Bermuda"}>Bermuda</MenuItem>
          <MenuItem value={"Vanuatu"}>Vanuatu</MenuItem>
          <MenuItem value={"American Samoa"}>American Samoa</MenuItem>
          <MenuItem value={"Saint Helena"}>Saint Helena</MenuItem>
          <MenuItem value={"Maldives"}>Maldives</MenuItem>
          <MenuItem value={"Bulgaria"}>Bulgaria</MenuItem>
          <MenuItem value={"Grenada"}>Grenada</MenuItem>
          <MenuItem value={"Haiti"}>Haiti</MenuItem>
          <MenuItem value={"Moldova"}>Moldova</MenuItem>
          <MenuItem value={"Seychelles"}>Seychelles</MenuItem>
          <MenuItem value={"Gibraltar"}>Gibraltar</MenuItem>
          <MenuItem value={"Lithuania"}>Lithuania</MenuItem>
          <MenuItem value={"Yemen"}>Yemen</MenuItem>
          <MenuItem value={"Hungary"}>Hungary</MenuItem>
          <MenuItem value={"South Sudan"}>South Sudan</MenuItem>
          <MenuItem value={"Sudan"}>Sudan</MenuItem>
          <MenuItem value={"Bolivia"}>Bolivia</MenuItem>
          <MenuItem value={"Serbia"}>Serbia</MenuItem>
          <MenuItem value={"Colombia"}>Colombia</MenuItem>
          <MenuItem value={"Singapore"}>Singapore</MenuItem>
          <MenuItem value={"Aruba"}>Aruba</MenuItem>
          <MenuItem value={"Kyrgyzstan"}>Kyrgyzstan</MenuItem>
          <MenuItem value={"Lebanon"}>Lebanon</MenuItem>
          <MenuItem value={"Hong Kong"}>Hong Kong</MenuItem>
          <MenuItem value={"Taiwan"}>Taiwan</MenuItem>
          <MenuItem value={"Paraguay"}>Paraguay</MenuItem>
          <MenuItem value={"Uruguay"}>Uruguay</MenuItem>
          <MenuItem value={"Czech Republic"}>Czech Republic</MenuItem>
          <MenuItem value={"Martinique"}>Martinique</MenuItem>
          <MenuItem value={"Rwanda"}>Rwanda</MenuItem>
          <MenuItem value={"Honduras"}>Honduras</MenuItem>
          <MenuItem value={"Azerbaijan"}>Azerbaijan</MenuItem>
          <MenuItem value={"Venezuela"}>Venezuela</MenuItem>
          <MenuItem value={"Serbia"}>Serbia</MenuItem>
          <MenuItem value={"Djibouti"}>Djibouti</MenuItem>
          <MenuItem value={"Albania"}>Albania</MenuItem>
          <MenuItem value={"Comoros"}>Comoros</MenuItem>
          <MenuItem value={"Andorra"}>Andorra</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Country;
