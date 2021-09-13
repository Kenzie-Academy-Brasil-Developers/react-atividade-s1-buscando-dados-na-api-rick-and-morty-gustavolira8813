import "./style.css";
function CharCard({ characterList }) {
  return (
    <>
      <div className={characterList.status}>
        <h3>{characterList.name}</h3>
        <img src={characterList.image} alt={characterList.name} />

        <p>Specie: {characterList.species}</p>
        <p className={characterList.gender}>Gender: {characterList.gender}</p>
      </div>
    </>
  );
}
export default CharCard;
