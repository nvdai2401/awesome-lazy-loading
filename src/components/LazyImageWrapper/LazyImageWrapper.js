import React from 'react';

import LazyImage from '../LazyImage';
import './LazyImageWrapper.scss';

const LazyImageWrapper = (props) => {
  const { placeHolder, src, alt, author, url } = props;
  return (
    <div className='cell'>
      <LazyImage
        src={src}
        alt={alt}
        placeHolder={placeHolder}
        height='300'
        width='300'
        className='image'
      />
      <div className='caption'>
        {author} from{' '}
        <a href={url} target='_blank' rel='noopener noreferrer'>
          Unsplash
        </a>
      </div>
    </div>
  );
};

export default LazyImageWrapper;
