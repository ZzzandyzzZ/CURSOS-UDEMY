import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch'])
  const onAddCategory = () => {
    setCategories(['andy', ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory />
      <button onClick={ onAddCategory }>Agregar</button>
      <ol>
        { categories.map(category => (
            <li key={ category }>
              { category }
            </li>
          ))
        }
      </ol>
      {/* hN2atWxiqce1cPDui6XGj1gQapbzKvTK */}
    </>
  )
}
