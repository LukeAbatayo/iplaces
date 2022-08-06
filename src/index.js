import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// Using this caused some problems
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
