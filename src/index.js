import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';

import { Provider } from 'react-redux';
import store from 'store';

const rootElement = document.getElementById('root');
const renderApp = () => {
  ReactDOM.render(
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </div>,
    rootElement
  );
};
renderApp();
