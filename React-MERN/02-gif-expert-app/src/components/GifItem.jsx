import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {
  console.log();
  return (
    <div>
      <img src={url} alt={title} />
      <p>{ title }</p>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
