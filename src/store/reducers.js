// import * as redux from 'redux';

// const initialState = {
//   text: '',
//   preview: ''
// };

// // const reducers = {
// //   text: (state, action) => {
// //     switch (action.type) {
// //       case 'UPDATE_TEXT':
// //         return {
// //           ...state,
// //           text: action.text
// //         };
// //       default:
// //         return state;
// //     }
// //   },
// //   preview: (state, action) => {
// //     switch (action.type) {
// //       case 'UPDATE_PREVIEW':
// //         return {
// //           ...state,
// //           preview: action.preview
// //         };
// //       default:
// //         return state;
// //     }
// //   }
// // };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'UPDATE_TEXT':
//       return {
//         ...state,
//         text: action.text
//       };
//     case 'UPDATE_PREVIEW':
//       return {
//         ...state,
//         preview: action.preview
//       };
//     default:
//       return state;
//   }
// };

// export default const store = redux.createStore(rootReducer, initialState);



// const textReducer = (state = initialState.text, action) => {
//   console.log(action);
//   switch (action.type) {
//     case 'UPDATE_TEXT':
//       return action.text;
//     default:
//       return state;
//   }
// };

// const previewReducer = (state = initialState.preview, action) => {
//   console.log(action);
//   switch (action.type) {
//     case 'UPDATE_PREVIEW':
//       return action.preview;
//     default:
//       return state;
//   }
// };

// const rootReducer = (state = initialState, action) => {
//   return {
//     text: textReducer(state.text, action),
//     preview: previewReducer(state.preview, action)
//   };
// };

// export default rootReducer;
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  text: '',
  preview: ''
};

const textReducer = (state = initialState.text, action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return {
        text: action.text
      };
    default:
      return state;
  }
};

const previewReducer = (state = initialState.preview, action) => {
  console.log(action, state);
  switch (action.type) {
    case 'UPDATE_PREVIEW':
      return {
        preview: action.preview
      };
    default:
      return state;
  }
};

const rootReducer = (state = initialState, action) => {
  console.log(action,);
  return {
    text: textReducer(state.text, action),
    preview: previewReducer(state.preview, action)
  };
};

export default configureStore({
  reducer: rootReducer
});

