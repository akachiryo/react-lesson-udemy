
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const animalList =[]
  for(const animal of animals) {
    animalList.push(<li>{animal}</li>)
  }

  const helloAnimals = animals.map((animal) => <li>Hello, {animal}</li>)
  console.log(helloAnimals)
  console.log(animalList)
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* <li>{animals[0]}</li>
        <li>{animals[0]}</li>
        <li>{animals[0]}</li> */}
        {animalList}
        {helloAnimals}
      </ul>
    </>
  );
};

export default Example;
