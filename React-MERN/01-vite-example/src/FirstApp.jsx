import PropTypes from 'prop-types';

export const FirstApp = ({ name, title }) => {
  return (
    <>
      <h1 data-testid="test-title">{ title }</h1>
      <h2> Soy { name }</h2>
    </>
  );
};

FirstApp.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  name: 'Andy',
}
