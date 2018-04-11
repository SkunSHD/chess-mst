import React from 'react';
// Utils
import permissions from "utils/permissions.utils";


@permissions
class Page404 extends React.Component {

	render() {
		return (
			<div>
				<div className="pt-non-ideal-state">
					<div className="pt-non-ideal-state-visual pt-non-ideal-state-icon">
						<span className="pt-icon pt-icon-geosearch" />
					</div>
					<h1 className="pt-non-ideal-state-title">404</h1>
					<div className="pt-non-ideal-state-description">
						There is no such page
					</div>
				</div>
			</div>
		)
	}
}

export default Page404;