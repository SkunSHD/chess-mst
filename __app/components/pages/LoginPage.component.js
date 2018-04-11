import React from 'react';
// Utils
import permissions from "utils/permissions.utils";
// Components
import LoginForm from "components/auth/LoginForm.component";


@permissions
class LoginPage extends React.Component {

	render() {
		return (
			<div>
				<LoginForm />
			</div>
		)
	}
}

export default LoginPage;