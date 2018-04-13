import React from 'react';
import { observer } from 'mobx-react';
// Utils
import permissions from "utils/permissions.utils";
// Store
import store from 'store';


@observer
@permissions
class VisitorsPage extends React.Component {

	static permissions = {
		needAuth: true
	};


	render() {
		return (
			<div>
				<h2>Visitors page</h2>
				{
					store.visitors.map((visitor)=> <p key={visitor.timestamp}>{visitor.name}, logged: {visitor.date}</p>)
				}
			</div>
		)
	}
}

export default VisitorsPage;