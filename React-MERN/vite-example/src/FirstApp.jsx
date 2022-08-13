import PropTypes from 'prop-types';

export const FirstApp = ({ name }) => {
  return (
    <>
      <h1> Hola a todos</h1>
      <h2> Soy { name }</h2>
    </>
  );
};

FirstApp.propTypes = {
  name: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  name: 'Andy',
}
