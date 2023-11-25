import React, { useState, useEffect } from "react";
import "../assets/attribute/DARK.png";
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
              console.log(card.type),
              (
                <li key={card.id} className="card">
                  <section className="card-image">
                    <img
                      src={card.card_images[0].image_url}
                      alt=""
                      id={card.id}
                    />
                  </section>
                  <section className="card-info">
                  <h1 className="card-title" >{card.name}</h1>
                    <section className="card-details">
                      

                      <p>{card.type}</p>
                      <img
                        className="icon"
                        src={
                          new URL(
                            `../assets/type_of_card/${card.type}.jpg`,
                            import.meta.url
                          ).href
                        }
                        alt=""
                      />
                      <p>{card.attribute}</p>
                      <img
                        className="icon"
                        src={
                          new URL(
                            `../assets/attribute/${card.attribute}.png`,
                            import.meta.url
                          ).href
                        }
                        alt=""
                      />

                      <p>{card.race}</p>
                      <img
                        className="icon"
                        src={CardRace(card.frameType, card.race)}
                        alt=""
                      />
                    </section>

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
