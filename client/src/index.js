import React from 'react';
import ReactDOM  from 'react-dom';

import {Provider} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers';

import App from './App';

export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    reducer: reducers
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);