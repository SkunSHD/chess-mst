import React from 'react';
// MobX
import { observable } from 'mobx';
import { observer } from 'mobx-react';
// Store
import store from "store";
import { withRouter } from 'react-router-dom';


@withRouter
@observer
class LoginForm extends React.Component {


	@observable form = {
		login: '',
		password: ''
	};


	onSubmit = async (e)=> {
		e.preventDefault();

		await store.login({
			login: this.form.login,
			password: this.form.password
		});

		this.props.history.push('/');
	}

	render() {
		return (
			<form onSubmit={ this.onSubmit }>
				<div className="pt-form-group">
					<label className="pt-label">
						Email
						<span className="pt-text-muted">(required)</span>
					</label>
					<div className="pt-form-content">
						<input className="pt-input"
						       placeholder="Email"
						       type="text"
						       value={ this.form.login }
						       onChange={ (e)=> this.form.login = e.currentTarget.value } />
						<div className="pt-form-helper-text">Enter your email address</div>
					</div>
				</div>
				<div className="pt-form-group pt-intent-danger">
					<label className="pt-label">
						Password
						<span className="pt-text-muted">(required)</span>
					</label>
					<div className="pt-form-content">
						<input className="pt-input"
						       placeholder="Password"
						       type="password"
						       value={ this.form.password }
						       onChange={ (e)=> this.form.password = e.currentTarget.value } />
						{/*<div className="pt-form-helper-text">Enter your password</div>*/}
					</div>
				</div>
				<button type="submit" className="pt-button pt-icon-log-in">Login</button>
			</form>
		)
	}
}

export default LoginForm;
