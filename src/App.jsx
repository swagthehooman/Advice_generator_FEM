import React, { useEffect, useState } from "react";
import AdviceCard from "./components/AdviceCard.jsx";
import { AdviceURL } from "./Api.jsx";

function App() {
  const [adviceSlip, setAdviceSlip] = useState(); //advice slip state
  const adviceFetch = fetch(`${AdviceURL}`); //advice slip api call fetch for random advice

  function ApiCall() {
    Promise.all([adviceFetch])
      .then(async (response) => {
        const adviceResponse = await response[0].json();
        setAdviceSlip(adviceResponse);
      })
      .catch((err) => {});
  } //function for api call to generate new advice and call setState

  useEffect(() => {
    //for initial advice display
    ApiCall();
  }, []);

  function handleOnClick() {
    //on click of button, new advice will be generated
    ApiCall();
  }

  return adviceSlip ? (
    <AdviceCard slip={adviceSlip} handleClick={handleOnClick} />
  ) : (
    <p className="loading">loading</p>
  ); //if advice slip is not loaded, loading will be displayed, else the advice card
}

export default App;
