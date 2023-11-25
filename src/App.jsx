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
          searchQuery ||
          filterArchetype !== "" ||
          level !== "" ||
          atribute !== ""
        ) {
          apiUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=0fname=${searchQuery}`;
          if (filterArchetype !== "") {
            apiUrl += `&archetype=${filterArchetype}`;
          }
          if (level !== "") {
            apiUrl += `&level=${level}`;
          }
          if (atribute !== "") {
            apiUrl += `&attribute=${atribute}`;
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
  }, [searchQuery, filterArchetype, level, atribute]);
  const indexOfLastCharacter = currentPage * cardsPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - cardsPerPage;
  const currentCard = cards.slice(indexOfFirstCharacter, indexOfLastCharacter);

  return (
    <div>
      <Navbar />
      <Search setSearchTerm={setSearchQuery} />
      <MenuTabs setLevel={setLevel} setAtribute={setAtribute}></MenuTabs>
      <Filter setFilter={setFilterArchetype} options={archetypeOptions} />
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