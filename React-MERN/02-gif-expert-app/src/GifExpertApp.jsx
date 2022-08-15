import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export function GifExpertApp() {
  const [categories, setCategories] = useState(['One Punch']);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      <ol>
        { categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
      {/* hN2atWxiqce1cPDui6XGj1gQapbzKvTK */}
    </>
  );
}
