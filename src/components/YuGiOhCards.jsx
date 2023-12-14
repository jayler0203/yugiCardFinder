import React, { useState, useEffect } from "react";
import MonsterCardDetails from "./MonsterCardDetails";
import SpellTrapCardDetails from "./SpellTrapCardDetails";
const YuGiOhCards = ({ cards, noResults }) => {
  function CardRace(frameType, race) {
    if (frameType === "spell" || frameType === "trap") {
      return new URL(`../assets/type_spell_traps/${race}.png`, import.meta.url)
        .href;
    }
    return new URL(`../assets/type_monster/${race}.png`, import.meta.url).href;
  }
  return (
    <div>
      {noResults ? (
        <p>
          No se encontraron resultados para la búsqueda o filtro especificado.
        </p>
      ) : (
        <ul className="card-list">
          {cards.map(
            (card) => (
              console.log(card.frameType),
              (
                <li key={card.id} className="card" type={card.type}>
                  <img
                    className="card-image"
                    src={card.card_images[0].image_url}
                    alt=""
                    id={card.id}
                  />
                  <section className="card-info">
                    <h1 className="card-title">{card.name}</h1>
                    {card.frameType !== "spell" && card.frameType !== "trap" ? (
                    <MonsterCardDetails card={card} />
                  ) : (
                    <SpellTrapCardDetails card={card} />
                  )}
                    <p>{card.desc}</p>
                  </section>
                </li>
              )
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default YuGiOhCards;
