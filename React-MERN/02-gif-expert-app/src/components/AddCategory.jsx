import { useState } from 'react';
import PropTypes from 'prop-types';

export function AddCategory({ onNewCategory }) {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories((categorie) => [inputValue, ...categorie]);
    console.log(inputValue);
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
