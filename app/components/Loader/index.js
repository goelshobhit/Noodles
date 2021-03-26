/**
 *
 * Loader
 *
 */

import React, { memo } from 'react';
import './style.css';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Loader() {
  return (
    <div id="loader-wrapper">
      <div id="loader" />
    </div>
  );
}

Loader.propTypes = {};

export default memo(Loader);
