import PropTypes from "prop-types";

const Tags = ({ tags }) => {
  return (
    <ul className="tags">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
};



Tags.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default Tags;
