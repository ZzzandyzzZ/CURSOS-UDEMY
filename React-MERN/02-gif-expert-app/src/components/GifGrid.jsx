import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  // const getImages = async () => {
  //   const newImages = await getGifs(category);
  //   setImages(newImages);
  // };
  const [images, isLoading] = useFetchGifs(category);

  return (
    <>
      <h2>{ category }</h2>
      <div className="card-grid">
        {
          images.map(({ title, id, url }) => (
            <GifItem
              key={id}
              title={title}
              url={url}
            />
          ))
        }
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
