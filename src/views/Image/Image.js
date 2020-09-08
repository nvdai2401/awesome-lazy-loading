/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { LazyImageWrapper, FolkMe, Spinner } from '../../components';

import './Image.scss';

const LIMIT = 15;

const Image = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    genImages();
  }, []);

  const fetchImages = async (page = 1) => {
    const res = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=${LIMIT}`,
    );
    const data = await res.json();

    return data;
  };

  const genImages = async (page = 1) => {
    const data = await fetchImages(page);

    data.forEach((img) => {
      img.placeHolder = `https://picsum.photos/id/${img.id}/1/1/?blur=10`;
      img.alt = `Author: ${img.author} - Unsplash: ${img.url}`;
      img.src = `https://picsum.photos/id/${img.id}/600/600/`;
      img.srcset = `https://picsum.photos/id/${img.id}/700/700 1x, https://picsum.photos/id/${img.id}/1200/1200 2x`;
    });

    setImages([...images, ...data]);
    setLoading(false);
  };

  const fetchMoreImages = async () => {
    setLoading(true);
    setPage(page + 1);
    await genImages(page + 1);
  };

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
      <InfiniteScroll
        dataLength={images.length}
        next={fetchMoreImages}
        hasMore={images.length !== 0}
        className='container'
      >
        {images.map((img) => (
          <LazyImageWrapper
            key={img.id}
            placeHolder={img.placeHolder}
            src={img.src}
            alt={img.alt}
            {...img}
          />
        ))}
      </InfiniteScroll>
      {loading ? <Spinner /> : null}
    </div>
  );
};

export default Image;
