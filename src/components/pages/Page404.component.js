import React from 'react';
// Utils
import permissions from "utils/permissions.utils";


@permissions
class Page404 extends React.Component {

	render() {
		return (
			<div>
				<h2>404</h2>
			</div>
		)
	}
}

export default Page404;