/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import {
  GET_IMAGES,
  IMAGES_SUCCESS,
  RESTAURANTS_SUCCESS,
  IMAGES_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  images: [],
  restaurants: [],
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_IMAGES:
        draft.loading = true;
        break;
      case IMAGES_SUCCESS:
        draft.images = action.payload;
        draft.loading = false;
        break;
      case RESTAURANTS_SUCCESS:
        draft.restaurants = action.payload;
        break;
      case IMAGES_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default homePageReducer;
