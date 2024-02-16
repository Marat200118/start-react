import { Bio } from "./Bio";
import Meals from "./Meals";


function App() {
  const bioData = {
    name: "Jeremy Robinson",
    birthPlace: "Laarne",
    yearOfBirth: 1999,
  };

  const { name, birthPlace, yearOfBirth } = bioData;

  const favouriteFood = [
    { name: "Pizza", emoji: "🍕" },
    { name: "Hamburger", emoji: "🍔" },
    { name: "Hotdog", emoji: "🌭" },
    { name: "Taco", emoji: "🌮" },
  ];

  return (
    <article>
      <h2>Hi, I am {name}</h2>
      <Bio birthPlace={birthPlace} yearOfBirth={yearOfBirth} />
      <Meals showEmoji={true} food={favouriteFood}/>
    </article>
  );
}

export default App;
