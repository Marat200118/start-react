import PropTypes from "prop-types";

const Meals = ({ showEmoji }) => (
  <section>
    <h3>My favourite meals</h3>
     <List showEmoji={showEmoji} />
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
    {showEmoji ? <span>{emoji}</span> : null}
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

export const List = ({ showEmoji }) => (
  <ul>
    <Meal emoji={"🍝"} name="Spaghetti" showEmoji={showEmoji} />
    <Meal emoji={"🍟"} name="French fries" showEmoji={showEmoji} />
    <Meal emoji={"🍗"} name="Roasted chicken" showEmoji={showEmoji} />
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