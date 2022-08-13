import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ value }) => {

  const [counter, setCounter] = useState( value );
  const handleAdd = (event) => setCounter( counter + 1);
  const handleSubstract = (event) => setCounter( counter - 1);
  const handleReset = (event) => setCounter( value );

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
      <button onClick={ handleAdd }>
        +1
      </button>
      <button onClick={ handleSubstract }>
        -1
      </button>
      <button onClick={ handleReset }>
        Reset
      </button>
    </>
  );
}
CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}