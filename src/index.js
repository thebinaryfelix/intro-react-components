import React from 'react';
import ReactDOM from 'react-dom';

/** 
 * Toggle between the App imports by uncommenting the respective line
*/

// import App from './oop/App';
import App from './functional/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
