import { Bio } from "./Bio";
import Meals from "./Meals";


function App() {
  const bioData = {
    name: "Jeremy Robinson",
    birthPlace: "Laarne",
    yearOfBirth: 1999,
  };

  const { name, birthPlace, yearOfBirth } = bioData;

  return (
    <article>
      <h2>Hi, I am {bioData.name}</h2>
      <Bio birthPlace={bioData.birthPlace} yearOfBirth={bioData.yearOfBirth} />
      <Meals />
    </article>
  );
}

export default App;
