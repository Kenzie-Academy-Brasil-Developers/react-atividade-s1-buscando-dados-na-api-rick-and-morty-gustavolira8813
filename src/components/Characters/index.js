import CharCard from "../CharCard";
import "./style.css";
function Characters({ characterList }) {
  return (
    <>
      <h1>Meus Personagens</h1>
      <ul className="cardList">
        {characterList.map((e) => (
          <li className="cards">
            <CharCard key={e} characterList={e} />
          </li>
        ))}
      </ul>
    </>
  );
}
export default Characters;
