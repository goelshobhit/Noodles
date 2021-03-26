import { createSelector } from 'reselect';
import mappedResData from 'utils/restaurantMap';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.homePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate,
  );

const makeSelectImages = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.images,
  );

const makeSelectRestaurants = () =>
  createSelector(
    selectHomePageDomain,
    substate => {
      const { images, restaurants } = substate;
      return mappedResData(images, restaurants);
    },
  );

export default makeSelectHomePage;
export {
  selectHomePageDomain,
  makeSelectHomePage,
  makeSelectImages,
  makeSelectRestaurants,
};
