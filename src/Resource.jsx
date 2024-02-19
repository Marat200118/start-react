import Tags from "./Tags";
import PropTypes from "prop-types";

const Resource = ({ resource, link, tags }) => {
  const removeHtml = (originalString) =>
    originalString.replace(/(<([^>]+)>)/gi, "");
    
  return (
    <article>
      <h2>
        <a href={link}>{resource.name}</a>
      </h2>
      <div className="flex-block">
        <p className="description">{removeHtml(resource.description)}</p>
        <Tags tags={tags} />
      </div>
    </article>
  );
};

Resource.propTypes = {
  resource: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};

export default Resource;
