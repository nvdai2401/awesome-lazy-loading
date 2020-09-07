import React, { useState, useEffect } from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';

import { LazyImageWrapper, FolkMe } from '../../components';

import './InfiniteGallery.scss';

const Row = (props) => {
  console.log(props);
  const { index, data } = props;
  return (
    <div>
      {data.map((img) => (
        <img key={img.id} src={img.src} alt={img.alt} loading='lazy' />
        // <LazyImageWrapper
        //   key={img.id}
        //   placeHolder={img.placeHolder}
        //   src={img.src}
        //   alt={img.alt}
        //   {...img}
        // />
      ))}
    </div>
  );
};

const InfiniteGallery = () => {
  const [images, setImages] = useState([]);
  const LOADING = 1;
  const LOADED = 2;
  let itemStatusMap = {};

  const isItemLoaded = (index) => !!itemStatusMap[index];
  const loadMoreItems = (startIndex, stopIndex) => {
    for (let index = startIndex; index <= stopIndex; index++) {
      itemStatusMap[index] = LOADING;
    }
    return new Promise((resolve) =>
      setTimeout(() => {
        for (let index = startIndex; index <= stopIndex; index++) {
          itemStatusMap[index] = LOADED;
        }
        resolve();
      }, 2500),
    );
  };
  useEffect(() => {
    const genImages = async () => {
      const res = await fetch('https://picsum.photos/v2/list?page=1&limit=100');
      const images = await res.json();

      images.forEach((img) => {
        img.placeHolder = `https://picsum.photos/id/${img.id}/1/1/?blur=10`;
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
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={20}
        loadMoreItems={loadMoreItems}
        threshold={20}
        minimumBatchSize={10}
      >
        {({ onItemsRendered, ref }) => (
          <AutoSizer>
            {({ height, width }) => (
              <List
                className='List'
                height={height}
                width={width}
                itemCount={30}
                itemSize={20}
                onItemsRendered={onItemsRendered}
                ref={ref}
                itemData={images}
              >
                {Row}
              </List>
            )}
          </AutoSizer>
        )}
      </InfiniteLoader>
      {/* <div className='container'>
        {images.map((img) => (
          <LazyImageWrapper
            key={img.id}
            placeHolder={img.placeHolder}
            src={img.src}
            alt={img.alt}
            {...img}
          />
        ))}
      </div> */}
    </div>
  );
};

export default InfiniteGallery;
