import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export function GifExpertApp() {
  const [categories, setCategories] = useState(['One Punch']);
  const onAddCategory = () => {
    setCategories(['andy', ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <button onClick={onAddCategory} type="button">Agregar</button>
      <ol>
        { categories.map((category) => (
          <li key={category}>
            { category }
          </li>
        ))}
      </ol>
      {/* hN2atWxiqce1cPDui6XGj1gQapbzKvTK */}
    </>
  );
}
