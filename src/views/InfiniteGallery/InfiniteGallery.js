import React, { useState, useEffect } from 'react';

import { LazyImageWrapper, FolkMe } from '../../components';

import './InfiniteGallery.scss';

const InfiniteGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const genImages = async () => {
      const res = await fetch('https://picsum.photos/v2/list?page=1&limit=9');
      const images = await res.json();

      images.forEach((img) => {
        img.placeHolder = `https://picsum.photos/id/${img.id}/100/100/?blur=10`;
        img.alt = `Author: ${img.author} - Unsplash: ${img.url}`;
        img.src = `https://picsum.photos/id/${img.id}/600/600/`;
      });
      setImages(images);
    };
    genImages();
  }, []);

  return (
    <div className='image-container'>
      <h2 className='title'>
        Scroll down to check out these beautiful images...
      </h2>
      <FolkMe
        color='#fff'
        backgroundColor='#000'
        position='right'
        size='100px'
        ariaLabel='View source on Github'
        targetURL='https://github.com/nvdai2401/awesome-lazy-loading'
      />
      <div className='container'>
        {images.map((img) => (
          <LazyImageWrapper
            key={img.id}
            placeHolder={img.placeHolder}
            src={img.src}
            alt={img.alt}
            {...img}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteGallery;
