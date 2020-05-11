import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import browserHistory from './utils/history';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './containers/App';
import configureStore from './store'
import * as serviceWorker from './serviceWorker';

const store = configureStore()
ReactDOM.render(
	<React.StrictMode>
	  <Provider store={store}>
	    <Router history={browserHistory}>
	      <Suspense fallback={'Loading...'}>
	        <App />
	      </Suspense>
	    </Router>
	  </Provider>
	</React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
