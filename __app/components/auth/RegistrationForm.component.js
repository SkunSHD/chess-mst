import React from 'react';


class RegistrationForm extends React.Component {

	render() {
		return (
			<form>
				<div className="pt-form-group">
					<label className="pt-label">
						Email
						<span className="pt-text-muted">(required)</span>
					</label>
					<div className="pt-form-content">
						<input className="pt-input" placeholder="Email" type="text" />
						<div className="pt-form-helper-text">Enter your email address</div>
					</div>
				</div>
				<div className="pt-form-group pt-intent-danger">
					<label className="pt-label">
						Password
						<span className="pt-text-muted">(required)</span>
					</label>
					<div className="pt-form-content">
						<input className="pt-input" placeholder="Password" type="password" />
						<div className="pt-form-helper-text">Enter your password</div>
					</div>
				</div>
				<button type="button" className="pt-button pt-icon-new-person">Register</button>
			</form>
		)
	}
}

export default RegistrationForm;
