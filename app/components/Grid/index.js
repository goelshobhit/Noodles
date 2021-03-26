/**
 *
 * Grid
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Row, Col, Card, Button } from 'antd';
import map from 'lodash/map';

import history from 'utils/history';

import Image from 'components/Image';

function Grid({ restaurantData }) {
  return (
    <Row gutter={[16, 16]}>
      {map(restaurantData, item => (
        <Col
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 18, offset: 1 }}
          md={{ span: 12, offset: 1 }}
          lg={{ span: 6, offset: 2 }}
          key={`${item.Brand}${Math.random()}`}
        >
          <Card
            hoverable
            cover={<Image image={{ alt: 'demo', src: item.Image }} />}
            title={item.Brand}
            onClick={() => {
              history.push(`/restaurant/${item.Brand}`, item);
            }}
            actions={[<Button type="primary">{item['Top Ten']}</Button>]}
          />
        </Col>
      ))}
    </Row>
  );
}

Grid.propTypes = {
  restaurantData: PropTypes.array,
};

export default memo(Grid);
