import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
//import ReactDOM from 'react-dom/client';
//mport './index.css';
//import App from './App';
//import React from 'react';
//import reportWebVitals from './reportWebVitals';
//import  {addPost} from './redux/state';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
let reRenderTree = () => {
  root.render(
    <React.StrictMode>
      <App store={store} state={store.getSate()} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>
  );
}
reRenderTree(store.getSate())
store.callSubscriber(reRenderTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
