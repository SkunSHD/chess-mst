import React from 'react';
// Utils
import permissions from "utils/permissions.utils";


@permissions
class ProfilePage extends React.Component {

	static permissions = {
		auth: true
	};


	render() {
		return (
			<div>
				<h2>Profile page</h2>
			</div>
		)
	}
}

export default ProfilePage;