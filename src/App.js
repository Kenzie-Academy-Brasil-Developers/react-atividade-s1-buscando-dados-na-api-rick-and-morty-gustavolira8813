import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import CharCard from "./components/CharCard";
import Characters from "./components/Characters";
function App() {
  const [characterList, setCharacterList] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, []);
  console.log(characterList);
  return (
    <div className="App">
      <header className="App-header">
        <h1>teste</h1>
        <Characters characterList={characterList} />
      </header>
    </div>
  );
}

export default App;
