import React from 'react';
// Utils
import permissions from "utils/permissions.utils";

@permissions
class HomePage extends React.Component {

	render() {
		return (
			<div>
				<h2>Home page</h2>
			</div>
		)
	}
}

export default HomePage;