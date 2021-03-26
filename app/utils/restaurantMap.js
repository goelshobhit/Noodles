import map from 'lodash/map';

const mappedResData = (imageData, restaurantData) => {
  const restaurantMapData = map(restaurantData, item => ({
    ...item,
    ...imageData[Math.floor(Math.random() * imageData.length)],
  }));
  return restaurantMapData;
};

export default mappedResData;
