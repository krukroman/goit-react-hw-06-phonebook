import { combineReducers } from 'redux';
import types from './contacts-types';
import isContactExist from 'components/functions/isContactExists';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      if (isContactExist(state, payload?.name)) {
        alert('exists');
        return state;
      }
      return [...state, payload];
    case types.DELETE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});