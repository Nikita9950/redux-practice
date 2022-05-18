import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
// import { configureStore } from "@reduxjs/toolkit";
import heroes from '../reducers/heroes';
import filters from '../reducers/filters';
import ReduxThunk from 'redux-thunk'

const rootReducer = combineReducers({heroes, filters})

// const store = configureStore({
//     reducer: {heroes, filters},
//     middleware: getDefaultMiddleware => getDefaultMiddleware(),
//     devTools: process.env.NODE_ENV !== 'production'
// })

const store = createStore(rootReducer,
    compose(applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;