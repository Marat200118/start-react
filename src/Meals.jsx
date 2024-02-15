const Meals = () => (
  <section>
    <h3>My favourite meals</h3>
    <List />
  </section>
);

const Meal = (props) => (
  <li className="meal" style={listStyling}>
    <span>{props.emoji}</span>
    <span>{props.name}</span>
  </li>
);

const listStyling = {
  display: 'flex',
  margin: '1rem',
  gap: '1rem',
  color: 'white',
  listStyle: 'none',
};

export const List = () => (
  <ul>
    <Meal emoji={"🍝"} name="Spaghetti" />
    <Meal emoji={"🍟"} name="French fries" />
    <Meal emoji={"🍗"} name="Roasted chicken" />
  </ul>
);

export default Meals;