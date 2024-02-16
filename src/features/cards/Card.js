import React, { useState } from "react";
import { useSelector } from "react-redux";
// import selector
import { allCardsSelector } from "./cardsSlice";
export default function Card({ id }) {
  const card = useSelector(allCardsSelector); // replace this with a call to your selector to get a card by id
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card[id].back : card[id].front}
      </button>
    </li>
  );
}
