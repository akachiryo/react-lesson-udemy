import { useState } from "react";
import AnimalList from "./components/AnimalList";
import AnimalFilter from "./components/AnimalFilter";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");
  const filterdAnimals = animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    return isMatch;
  })

  return (
    <>
      <AnimalFilter filterState={[filterVal,setFilterVal]}></AnimalFilter>
      <AnimalList animals={filterdAnimals}></AnimalList>
    </>
  );
};

export default Example;
