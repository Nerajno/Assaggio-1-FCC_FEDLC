import * as redux from 'redux';

const initialState = {
  text: ''
};

const reducers = {
  text: (state, action) => {
    switch (action.type) {
      case 'UPDATE_TEXT':
        return {
          ...state,
          text: action.text
        };
      default:
        return state;
    }
  },
  preview: (state, action) => {
    switch (action.type) {
      case 'UPDATE_PREVIEW':
        return {
          ...state,
          preview: action.preview
        };
      default:
        return state;
    }
  }
};

const store = redux.createStore(reducers, initialState);

export default store;
