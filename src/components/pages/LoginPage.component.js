import React from 'react';
// Utils
import permissions from "utils/permissions.utils";


@permissions
class LoginPage extends React.Component {

	render() {
		return (
			<div>
				<h2>Login page</h2>
			</div>
		)
	}
}

export default LoginPage;