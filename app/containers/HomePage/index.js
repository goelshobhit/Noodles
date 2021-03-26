/**
 *
 * HomePage
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Grid from 'components/Grid';

import { makeSelectHomePage, makeSelectRestaurants } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getImages } from './actions';

export function HomePage({ handleGetData, restaurants }) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    handleGetData();
  }, []);
  useEffect(() => {
    setRestaurantData(restaurants);
  }, [restaurants]);

  return (
    <div className="container pt-5">
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      <Grid restaurantData={restaurantData} />
    </div>
  );
}

HomePage.propTypes = {
  handleGetData: PropTypes.func,
  restaurants: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
  restaurants: makeSelectRestaurants(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleGetData: () => dispatch(getImages()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
