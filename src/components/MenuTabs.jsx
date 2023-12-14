import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Filter from "./Filter";
import FilterButton from "./FilterButton";
import Search from "./Search";
const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const atributes = ["DARK", "DIVINE", "EARTH", "FIRE", "LIGHT", "WATER", "WIND"];
const races = [
  "Aqua",
  "Beast",
  "Beast-Warrior",
  "Cyberse",
  "Dinosaur",
  "Divine-Beast",
  "Dragon",
  "Fairy",
  "Fiend",
  "Fish",
  "Insect",
  "Machine",
  "Plant",
  "Psychic",
  "Pyro",
  "Reptile",
  "Rock",
  "Sea Serpent",
  "Spellcaster",
  "Thunder",
  "Warrior",
  "Winged Beast",
  "Wyrm",
  "Zombie",
];

const MenuTabs = ({ setLevel, setAtribute, setSearchTerm, setRace }) => {
  console.log(setLevel);
  return (
    <Tabs>
      <TabList className={"tab-list"}>
        <Tab className={"tab tab-monster"} selectedClassName={"tab-selected tab-selected-monster"}>
          Monster
        </Tab>
        <Tab className={"tab tab-spell"} selectedClassName={"tab-selected tab-selected-spell"}>
          Spell
        </Tab>
        <Tab className={"tab tab-trap"} selectedClassName={"tab-selected tab-selected-trap"}>
          Trap
        </Tab>
      </TabList>

      <TabPanel selectedClassName={"tab-panel-selected tab-panel-selected-monster"}>
      <Filter
            options={levels}
            setFilter={setLevel}
            topic={"Level"}
          ></Filter>
          <Filter
            options={atributes}
            setFilter={setAtribute}
            topic={"Atribute"}
          ></Filter>
          <Filter options={races} setFilter={setRace} topic={"Type"}></Filter>
      </TabPanel>
      <TabPanel selectedClassName={"tab-panel-selected tab-panel-selected-spell"}>
          <FilterButton name={"Continuous"}></FilterButton> 
          <FilterButton name={"Field"}></FilterButton> 
          <FilterButton name={"Equip"}></FilterButton> 
          <FilterButton name={"Normal"}></FilterButton>

      </TabPanel>
      <TabPanel selectedClassName={"tab-panel-selected tab-panel-selected-trap"}>
          <button >
            <img
              src={
                new URL(
                  `../assets/type_spell_traps/Continuous.png`,
                  import.meta.url
                ).href
              }
              alt="Continuous trap icon"
            />
            Continuous
          </button>
          <button>
            {" "}
            <img
              src={
                new URL(
                  `../assets/type_spell_traps/Counter.png`,
                  import.meta.url
                ).href
              }
              alt="Continuous trap icon"
            />
            Counter
          </button>
          <button>
            {" "}
            <img
              src={
                new URL(
                  `../assets/type_spell_traps/Normal.png`,
                  import.meta.url
                ).href
              }
              alt="Continuous trap icon"
            />
            Normal
          </button>
      </TabPanel>
    </Tabs>
  );
};

export default MenuTabs;
