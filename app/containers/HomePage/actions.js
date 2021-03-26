/*
 *
 * HomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_IMAGES,
  IMAGES_SUCCESS,
  IMAGES_ERROR,
  GET_RESTAURANTS,
  RESTAURANTS_SUCCESS,
  RESTAURANTS_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const getImages = () => ({
  type: GET_IMAGES,
});

export const imagesSuccess = payload => ({
  type: IMAGES_SUCCESS,
  payload,
});

export const imagesError = error => ({
  type: IMAGES_ERROR,
  error,
});

export const getRestaurants = () => ({
  type: GET_RESTAURANTS,
});

export const restaurantsSuccess = payload => ({
  type: RESTAURANTS_SUCCESS,
  payload,
});

export const restaurantsError = error => ({
  type: RESTAURANTS_ERROR,
});
