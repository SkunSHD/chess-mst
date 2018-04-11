import React from 'react';
// Utils
import permissions from "utils/permissions.utils";
// Components
import RegistrationForm from "components/auth/RegistrationForm.component";


@permissions
class RegistrationPage extends React.Component {

	render() {
		return (
			<div>
				<RegistrationForm />
			</div>
		)
	}
}

export default RegistrationPage;