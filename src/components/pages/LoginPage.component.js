import React from 'react';
// Utils
import permissions from "utils/permissions.utils";


class LoginPage extends React.Component {

	render() {
		return (
			<div>
				<h2>Login page</h2>
			</div>
		)
	}
}

export default permissions(LoginPage);