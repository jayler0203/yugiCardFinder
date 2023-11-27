import React from 'react'

function FilterButton({name}) {
    return(
    <button>
    <img
      src={
        new URL(
          `../assets/type_spell_traps/${name}.png`,
          import.meta.url
        ).href
      }
      alt={`${name} icon card`}
    />
    {name}
  </button>
    )
}


export default FilterButton

