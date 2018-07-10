import './scss/app.scss';

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// reducers
import rootReducer from './reducers';

// components
import App from './components/App';

const store = createStore(rootReducer);

store.subscribe(() => {	
	console.log('store', store.getState());
});

console.log('store', store.getState());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('app'));