import React from 'react';

import LazyImage from '../LazyImage';
import './LazyImageWrapper.scss';

const LazyImageWrapper = (props) => {
  const { placeHolder, src, srcset, alt, author, url } = props;
  return (
    <div className='cell'>
      <LazyImage
        src={src}
        srcset={srcset}
        alt={alt}
        placeHolder={placeHolder}
        // height='400'
        // width='400'
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
