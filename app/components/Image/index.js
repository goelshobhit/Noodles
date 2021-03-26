/**
 *
 * Image
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import styled from 'styled-components';

function Image({ image }) {
  return (
    <div>
      <LazyLoadImage
        height={image.height || '100%'}
        width="100%"
        delayMethod="debounce"
        delayTime={1000}
        threshold={1000}
        useIntersectionObserver
        visibleByDefault
        effect="black-and-white"
        alt={image.alt}
        src={image.src} // use normal <img> attributes as props
      />
      <span>{image.caption}</span>
    </div>
  );
}

Image.propTypes = {
  image: PropTypes.object,
};

export default memo(Image);
