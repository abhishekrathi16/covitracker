import React, { useState } from "react";
import Country from "./Country";
import DropdownTime from "./DropdownTime";
import RealtimeGraph from "./RealtimeGraph";
import axios from "axios";

const Realtime = () => {
  let [covidDates, setCovidDates] = useState([]);
  let [covidCases, setCovidCases] = useState([]);
  let [covidDeaths, setCovidDeaths] = useState([]);
  let [covidRecoveries, setCovidRecoveries] = useState([]);
  let [currentCountry, setCurrentCountry] = useState("");
  let [currentTimeline, setCurrentTimeline] = useState("365");
  let Data = {};
  let DeathData = {};
  let RecoveryData = {};
  const setOutput = (c, d) => {
    async function set(c, d) {
      let res = await axios.get(
        `https://disease.sh/v3/covid-19/historical/${c}?lastdays=${d}`
      );
      let output = res.data.timeline.cases;
      let deathOutput = res.data.timeline.deaths;
      let recoveredOutput = res.data.timeline.recovered;
      Data = output;
      DeathData = deathOutput;
      RecoveryData = recoveredOutput;
      setCurrentCountry(c);
      updaterFunction();
    }
    set(c, d);
  };
  const setTimeline = (d) => {
    setCurrentTimeline(d);
    setOutput(currentCountry, d);
  };
  const setCountry = (c) => {
    setCurrentCountry(c);
    setOutput(c, currentTimeline);
  };
  const updaterFunction = () => {
    setCovidDates(Object.keys(Data));
    setCovidCases(Object.values(Data));
    setCovidDeaths(Object.values(DeathData));
    setCovidRecoveries(Object.values(RecoveryData));
  };

  return (
    <div className="Realtime">
      <h2 className="heading">Cases, Deaths and Recoveries For Coronavirus</h2>
      <div className="input">
      <Country
        name="Country"
        datafetch={setOutput}
        val={currentCountry}
        update={setCountry}
        className="country"
      />
      <DropdownTime
        name="Timeline"
        datafetch={setOutput}
        val={currentTimeline}
        update={setTimeline}
        className="time"
      />
      </div>
      <div>
        <RealtimeGraph
          labels={covidDates}
          dataval={covidCases}
          deathval={covidDeaths}
          recoveredval={covidRecoveries}
        />
      </div>
    </div>
  );
};

export default Realtime;
