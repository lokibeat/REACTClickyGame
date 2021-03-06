import React from "react";
import "./GameTile.css";

const GameTile = props => (
    <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    </div>
  );

export default GameTile;
