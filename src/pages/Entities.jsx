import { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "../components/CharacterCard";

function Entities() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllCharacters = async () => {
      try {
        const { data } = await axios.get(
          "https://dragonball-api.com/api/characters"
        );
        setCharacters(data.items);
      } catch (error) {
        console.error("Error al cargar personajes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCharacters();
  }, []);

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Todos los Personajes</h2>
        
        {loading ? (
          <div className="text-center">
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Entities;