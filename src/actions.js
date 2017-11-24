import {createActions} from 'redux-actions';

export const {
  fetchShowRequest,
  fetchShowSuccess,
  fetchShowFailure
} = createActions(
  'FETCH_SHOW_REQUEST',
  'FETCH_SHOW_FAILURE',
  'FETCH_SHOW_SUCCESS'
);
