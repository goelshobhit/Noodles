/**
 *
 * Filters
 *
 */

import React, { memo, useState } from 'react';
import { Row, Input, Button, Tooltip } from 'antd';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import orderBy from 'lodash/orderBy';
import capitalize from 'lodash/capitalize';
import find from 'lodash/filter';
import isEmpty from 'lodash/isEmpty';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const { Search } = Input;

function Filters({ restaurantData, setRestaurantData, restaurants }) {
  const [direction, setDirection] = useState('asc');
  const onSearch = value => {
    const findRestaurants = find(restaurantData, { Brand: capitalize(value) });
    setRestaurantData(findRestaurants);
    if (isEmpty(value)) {
      setRestaurantData(restaurants);
    }
  };

  const handleSort = () => {
    const orderList = orderBy(restaurantData, 'Stars', direction);
    setRestaurantData(orderList);
    if (direction === 'asc') {
      setDirection('desc');
    } else {
      setDirection('asc');
    }
  };

  const handleReset = () => {
    setRestaurantData(restaurants);
  };

  return (
    <Row type="flex" justify="space-between" className="m-5">
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        style={{ width: '80%', height: 20 }}
      />
      <Tooltip title={`Sort by ${direction}`}>
        <Button style={{ height: 40 }} onClick={handleSort}>
          <FormattedMessage {...messages.header} />
        </Button>
      </Tooltip>
      <Button style={{ height: 40 }} onClick={handleReset}>
        <FormattedMessage {...messages.reset} />
      </Button>
    </Row>
  );
}

Filters.propTypes = {
  restaurantData: PropTypes.array,
  setRestaurantData: PropTypes.func,
  restaurants: PropTypes.array,
};

export default memo(Filters);
