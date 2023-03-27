import React from "react";
import "./advicecard.css";

export default function AdviceCard({ slip, handleClick }) {
  return (
    <main>
      <p className="advice_number">ADVICE #{slip.slip.id}</p>
      <p className="advice_text">"{slip.slip.advice}"</p>
      <div className="divider" />
      <button className="new_advice_button" onClick={handleClick}>
        <img
          className="dice_image"
          src="../images/icon-dice.svg"
          alt="dice image"
        />
      </button>
    </main>
  );
}
