import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import reportWebVitals from './reportWebVitals';
import "@fontsource/ubuntu";
import "@fontsource/open-sans";
import GlobalStyles from './styles/globals';

const renderApp = () => {
  ReactDOM.render(
    <div>
      <GlobalStyles />
      <App />
    </div>,
    document.getElementById('root'),
  );
}
renderApp();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
