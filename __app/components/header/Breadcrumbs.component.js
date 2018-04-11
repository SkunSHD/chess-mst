import React from 'react';
import { Link } from "react-router-dom";


class Breadcrumbs extends React.Component {

	render() {
		return (
			<ul className="pt-breadcrumbs">
				<li><Link to="/" className="pt-breadcrumb pt-breadcrumb-current">Home</Link></li>
				<li><span className="pt-breadcrumb ">Next?</span></li>
			</ul>
		)
	}
}

export default Breadcrumbs;
