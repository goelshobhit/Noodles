import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the restaurant state domain
 */

const selectRestaurantDomain = state => state.restaurant || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Restaurant
 */

const makeSelectRestaurant = () =>
  createSelector(
    selectRestaurantDomain,
    substate => substate,
  );

export default makeSelectRestaurant;
export { selectRestaurantDomain };
