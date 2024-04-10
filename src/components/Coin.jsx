import React from "react";
import Citem from "./Citem";
import Coins from "../routes/Coins"
import {Link} from "react-router-dom"
import "./coin.css";

const Coin = (props) => {
  return (
    <div className="container">
      <div className="heading">
        <p>#</p>
        <p>Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p className="hide-mobile">Volume</p>
        <p className="hide-mobile">Mkt CaP</p>
      </div>
      {props.coin.map((coins) => {
        return (
          <Link to={`/coins/${coins.id}`} key={coins.id} element={<Coins />}>
            <Citem coins={coins} />
          </Link>
        );
      })}
    </div>
  );
};

export default Coin;
