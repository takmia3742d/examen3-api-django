import { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../components/Hero";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const { data } = await axios.get(
          "https://dragonball-api.com/api/characters?page=2&limit=5"
        );
        setCharacters(data.items);
      } catch (error) {
        console.error("Error al cargar personajes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <>
      <Hero />
      <section className="py-5" id="characters">
        <div className="container">
          <h2 className="text-center mb-4">Personajes Destacados</h2>
          {loading ? (
            <div className="text-center">
            </div>
          ) : (
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {characters.map((character) => (
                <div key={character.id} className="col">
                  <div className="card shadow-sm h-100">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{character.name}</h5>
                      <p className="text-muted">{character.race}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;