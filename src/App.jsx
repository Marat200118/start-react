// import { Bio } from "./Bio";
// import Meals from "./Meals";
// import { seattle } from "./seattle.js";


// function App() {
//   const bioData = {
//     name: "Jeremy Robinson",
//     birthPlace: "Laarne",
//     yearOfBirth: 1999,
//   };

//   const { name, birthPlace, yearOfBirth } = bioData;

//   const favouriteFood = [
//     { name: "Pizza", emoji: "🍕" },
//     { name: "Hamburger", emoji: "🍔" },
//     { name: "Hotdog", emoji: "🌭" },
//     { name: "Taco", emoji: "🌮" },
//   ];

//   return (
//     <article>
//       <h2>Hi, I am {name}</h2>
//       <Bio birthPlace={birthPlace} yearOfBirth={yearOfBirth} />
//       <Meals showEmoji={true} food={favouriteFood}/>
//     </article>
//   );
// }

// export default App;






import Resource from "./Resource";
import { seattle } from "./seattle";


function App() {
  return (
    <>
      <h1>Seattle in data</h1>
      {seattle.results.map(({ resource, classification, link }) => (
        <Resource
          key={resource.id}
          resource={resource}
          link={link}
          tags={classification.domain_tags.slice(0, 5)}
        />
      ))}
    </>
  );
}

export default App;
