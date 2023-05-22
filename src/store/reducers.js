import * as redux from 'redux';

const initialState = {
  text: '',
  preview: ''
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

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return {
        ...state,
        text: action.text
      };
    case 'UPDATE_PREVIEW':
      return {
        ...state,
        preview: action.preview
      };
    default:
      return state;
  }
};

export const store = redux.createStore(rootReducer, initialState);

export default store;