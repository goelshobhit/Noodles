/**
 *
 * Restaurant
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Descriptions } from 'antd';
import Image from 'components/Image';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectRestaurant from './selectors';
import reducer from './reducer';
import saga from './saga';
import './style.less';
export function Restaurant(props) {
  useInjectReducer({ key: 'restaurant', reducer });
  useInjectSaga({ key: 'restaurant', saga });
  const {
    location: { state: ItemData },
  } = props;

  const { Brand, Country, Image: ItemImage, Stars, Style, Variety } = ItemData;
  return (
    <div className="container p-t-5">
      <Descriptions
        title={Brand}
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="Country" span={12}>
          {Country}
        </Descriptions.Item>
        <Descriptions.Item label="Stars" span={12}>
          {Stars}
        </Descriptions.Item>
        <Descriptions.Item label="Style" span={12}>
          {Style}
        </Descriptions.Item>
        <Descriptions.Item label="Variety" span={12}>
          {Variety}
        </Descriptions.Item>
        <Descriptions.Item label="Top Ten" span={12}>
          {ItemData['Top Ten']}
        </Descriptions.Item>
        <Descriptions.Item span={12}>
          <Image image={{ src: ItemImage, height: 300 }} />
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}

Restaurant.propTypes = {
  location: PropTypes.object,
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
