import React, { useState, useEffect } from "react";
import Pagination from "./components/Pagination";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import YuGiOhCards from "./components/YuGiOhCards";
import Search from "./components/Search";
import MenuTabs from "./components/MenuTabs";
const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(10);
  const [noResults, setNoResults] = useState(false);
  const [filterArchetype, setFilterArchetype] = useState("");
  const [level, setLevel] = useState("");
  const [atribute, setAtribute] = useState("");
  const [race ,setRace] = useState("")
  const [archetypeOptions, setArchetypeOptions] = useState([]);
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const fetchSpeciesOptions = async () => {
      try {
        const ArchetypeResponse = await fetch(
          "https://db.ygoprodeck.com/api/v7/archetypes.php"
        );
        const ArchetypeData = await ArchetypeResponse.json();
        const ArchetypeList = ArchetypeData.map(
          (archetype) => archetype.archetype_name
        );
        setArchetypeOptions(ArchetypeList);
      } catch (error) {
        console.error("Error al obtener los archetypes desde la API:", error);
      }
    };

    fetchSpeciesOptions();
  }, []);
  useEffect(() => {
    const fetchYuGiOhCards = async () => {
      try {
        let apiUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php?staple=yes";

        // Si hay una búsqueda, actualiza la URL con el término de búsqueda
        if (
          searchQuery !== "" ||
          filterArchetype !== "" ||
          level !== "" ||
          atribute !== "" ||
          race!== ""
        ) {
          apiUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=0&fname=${searchQuery}`;
          if (filterArchetype !== "") {
            apiUrl += `&archetype=${filterArchetype}`;
          }
          if (level !== "") {
            apiUrl += `&level=${level}`;
          }
          if (atribute !== "") {
            apiUrl += `&attribute=${atribute}`;
          }
          if(race !== ""){
            console.log(race)
            apiUrl += `&race=${race}`;
          }
        }
        console.log(apiUrl);
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.data && data.data.length > 0) {
          setCards(data.data);
          setNoResults(false);
        } else {
          // Manejar el caso en que no hay resultados
          setCards([]);
          setNoResults(true);
        }
      } catch (error) {
        console.error("Error al obtener cartas de Yu-Gi-Oh!", error);
      }
    };

    fetchYuGiOhCards();
  }, [searchQuery, filterArchetype, level, atribute,race]);
  const indexOfLastCharacter = currentPage * cardsPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - cardsPerPage;
  const currentCard = cards.slice(indexOfFirstCharacter, indexOfLastCharacter);

  return (
    <div>
      <Navbar />
      <section className="search-panel">
      <Search setSearchTerm={setSearchQuery} />
      <MenuTabs setLevel={setLevel} setAtribute={setAtribute} setRace={setRace} setSearchTerm={setSearchQuery}></MenuTabs>
     {/* <Filter setFilter={setFilterArchetype} options={archetypeOptions} /> */}
      </section>

      <>
        <YuGiOhCards noResults={noResults} cards={currentCard} />
        <Pagination
          charactersPerPage={cardsPerPage}
          totalCharacters={cards.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </>
    </div>
  );
};
export default App;