import AnimalItem from "./AnimalItem"

const AnimalList = ({ animals }) => {
  if(animals.length === 0) {
    return <h3>animalが見つかりません</h3>
  } else {
    return (
      <ul>
        {animals
          .map((animal) => {
            return (
              <AnimalItem key={animal} animal={animal} />
            )
          })}
      </ul>
    )
  }
}

export default AnimalList;

