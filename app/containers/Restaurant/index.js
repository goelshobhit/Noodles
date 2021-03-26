/**
 *
 * Restaurant
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectRestaurant from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Restaurant() {
  useInjectReducer({ key: 'restaurant', reducer });
  useInjectSaga({ key: 'restaurant', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Restaurant.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  restaurant: makeSelectRestaurant(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Restaurant);
