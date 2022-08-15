import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export function GifExpertApp() {
  const [categories, setCategories] = useState(['One Punch']);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      {/* <AddCategory setCategories={setCategories} /> */}
      <AddCategory onNewCategory={onAddCategory} />
      <button onClick={onAddCategory} type="button">Agregar</button>
      <ol>
        { categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
      {/* hN2atWxiqce1cPDui6XGj1gQapbzKvTK */}
    </>
  );
}
