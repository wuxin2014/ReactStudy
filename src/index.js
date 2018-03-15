import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import RouteMap from './router/routerMap';
import todoApp from './reducers';

const store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <RouteMap />
  </Provider>,
  document.getElementById('root')
);
