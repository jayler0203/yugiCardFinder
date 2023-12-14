import React from "react";

const SpellTrapCardDetails = ({ card }) => {
  function banStatus(banList) {
    if(banList== undefined){
      return "Unlimited"
    }else{
        return banList
    }

  }
  return (
    <section className="card-details trapSpell">
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
        <p>{card.race}</p>
        <img
          className="icon"
          src={
            new URL(
              `../assets/type_spell_traps/${card.race}.png`,
              import.meta.url
            ).href
          }
          alt=""
        />
      </div>
    </section>
  );
};

export default SpellTrapCardDetails;
