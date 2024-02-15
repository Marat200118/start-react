import { Bio } from "./Bio";
import Meals, { List } from "./Meals";

function App() {
  return (
    <article>
      <h2>Hi, I am {name}</h2>
      <Bio />
      <Meals />
    </article>
  );
}

export default App;
