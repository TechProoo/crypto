import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Coin from "./components/Coin";
import Coins from "./routes/Coins"
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50";
  const options = {
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-5jsH7gLHCUkm22rjjPNppPD8",
    },
  };

  useEffect(() => {
    axios
      .get(url, options)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => console.error("error:" + error));
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coin coin={coins} />} />
        <Route path="/coins" element={<Coins />}>
          <Route path=":coinId" element={<Coins />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
