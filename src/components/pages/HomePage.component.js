import React from 'react';
// Utils
import permissions from "utils/permissions.utils";


class HomePage extends React.Component {

	render() {
		return (
			<div>
				<h2>Home page</h2>
			</div>
		)
	}
}

export default permissions(HomePage);