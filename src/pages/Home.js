import React from 'react';
import { connect } from 'react-redux';

import { setUser, setView } from '../actions';
import { VIEWS } from '../actions/helpers';

export class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: "",
			validEmail: false,
			validPassword: false,
			enableLogin: false
		}

		this.emailRef = React.createRef();
		this.emailMsgRef = React.createRef();
	}

	updateFieldInState = (field, value, callback = null) => {
		const state = this.state;

		state[field] = value;
		this.setState(state, callback);
	}

	validateEmail = () => {
		const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
		const email = this.emailRef.current.value;

		if(regex.test(email)) {
			this.setState({ validEmail: true }, this.enableLogin);
		}
		else {
			this.emailMsgRef.current.innerHTML = "not a valid email";
			this.setState({	validEmail: false	}, this.enableLogin);
		}
	}

	validatePassword = () => {
		const password = this.state.password;
		// console.log(password, password.trim().length);
		if(password.trim().length >= 8) {
			this.setState({ validPassword: true }, this.enableLogin);
		} 
		else {
			this.setState({ validPassword: false }, this.enableLogin);
		}
	}

	enableLogin = () => {
		// console.log('enable');
		if(this.state.validPassword && this.state.validEmail) {
			this.setState({ enableLogin: true	});
		}
		else {
			this.setState({	enableLogin: false });
		}	
	}

	handleLogin = () => {
		this.props.setUser(this.state.email);
		this.props.setView(VIEWS.REVIEW);
	}

	render() {
		// console.log('this state', this.state);
		return (
			<form>
				<div className="form-control">
					<label>Email</label>
					<input type="email" name="email" ref={this.emailRef}
						onKeyUp={(e) => {
							this.emailMsgRef.current.innerHTML = "";
							this.updateFieldInState('email', e.target.value, this.validateEmail);
						}} />
					<span className="email-msg" ref={this.emailMsgRef}></span>
				</div>

				<div className="form-control">
					<label>Password</label>
					<input type="password" name="password"
						onKeyUp={(e) => {
							this.updateFieldInState('password', e.target.value, this.validatePassword);
						}} />
				</div>

				<div className="form-control">
					{
						(this.state.enableLogin) ? 
							<button className="login"
								onClick={(e) => {
									e.preventDefault();
									this.handleLogin()}}>Login</button>
							: 
							<button className="login" disabled>Login</button>
					}
				</div>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, { setUser, setView })(Home);