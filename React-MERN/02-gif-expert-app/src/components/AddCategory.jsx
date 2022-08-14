import { useState } from 'react';

export function AddCategory() {
  const [inputValue, setInputValue] = useState('One Puch Man');
  return (
    <input
      type="text"
      placeholder="Buscar Gifs"
      value={inputValue}
    />
  );
}
