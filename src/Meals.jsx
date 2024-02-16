import PropTypes from "prop-types";

const Meals = ({ showEmoji, food }) => (
  <section>
    <h3>My favourite meals</h3>
    <List showEmoji={showEmoji} food={food} />
  </section>
);

// const Meal = (props) => (
//   <li className="meal" style={listStyling}>
//     <span>{props.emoji}</span>
//     <span>{props.name}</span>
//   </li>
// );

const Meal = ({ emoji, name, showEmoji }) => (
  <li className="meal" style={listStyling}>
    {showEmoji && <span>{emoji}</span>}
    <span>{name}</span>
  </li>
);


const listStyling = {
  display: 'flex',
  margin: '1rem',
  gap: '1rem',
  color: 'white',
  listStyle: 'none',
};

export const List = ({ showEmoji, food }) => (
  <ul>
    {food.map(({ emoji, name }) => (
      <Meal emoji={emoji} name={name} key={name} showEmoji={showEmoji} />
    ))}
  </ul>
);

Meal.propTypes = {
  emoji: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  showEmoji: PropTypes.bool.isRequired,
};

List.propTypes = {
  showEmoji: PropTypes.bool.isRequired,
};

Meals.propTypes = {
  showEmoji: PropTypes.bool.isRequired,
};

export default Meals;