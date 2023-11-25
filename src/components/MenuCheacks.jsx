function MenuCheacks( setChecks, TypesCards) {
  fetch();

  return (
    <div>
      <label>Filter by archetype:</label>
 
        {TypesCards.map((type, index) => (
            <button ><type value="" key={index}></type></button>

        ))}
    </div>
  );
}

export default MenuCheacks;
