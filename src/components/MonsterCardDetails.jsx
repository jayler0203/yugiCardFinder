import React from "react";

const MonsterCardDetails = ({ card }) => {
    function banStatus(banList) {
        if(banList== undefined){
          return "Unlimited"
        }else{
            return banList
        }

      }
  return (
    <section className="card-details monster">
      <div>
        <p>{card.type}</p>
        <img
          className="icon"
          src={
            new URL(`../assets/type_of_card/${card.type}.jpg`, import.meta.url)
              .href
          }
          alt=""
        />
      </div>
      <div>
        <p>{banStatus(card.banlist_info?.ban_tcg)}</p>
        <img src={
            new URL(`../assets/ban_status/${banStatus(card.banlist_info?.ban_tcg)}.png`, import.meta.url)
              .href
          } alt="" />

      </div>
      <div>
        <p>
          {card.attribute
            ? card.attribute.charAt(0).toUpperCase() +
              card.attribute.slice(1).toLowerCase()
            : ""}
        </p>
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
      </div>
      <div>
        <p>{card.race}</p>
        <img
          className="icon"
          src={
            new URL(`../assets/type_monster/${card.race}.png`, import.meta.url)
              .href
          }
          alt=""
        />
      </div>
    </section>
  );
};

export default MonsterCardDetails;
