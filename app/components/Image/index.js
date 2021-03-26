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
        delayMethod="debounce"
        delayTime={100}
        threshold={20}
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
