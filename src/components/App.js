import React from 'react';
import { connect } from 'react-redux';

import { VIEWS } from '../actions/helpers';

import Home from '../pages/Home';
import Review from '../pages/Review';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			view: VIEWS.INIT
		}
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if(nextProps.view !== prevState.view) {
			return {
				view: nextProps.view
			}
		}
		return null;
	}

	render() {
		let theView;
		switch(this.state.view) {
			case VIEWS.REVIEW:
				theView = <Review />
				break;
			case VIEWS.INIT:
			default:
				theView = <Home />;
				break;
		};

		return (
			theView
		)
	}
};

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, null)(App);