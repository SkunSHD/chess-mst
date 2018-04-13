import React from 'react';
import { observer } from 'mobx-react';
import { Link } from "react-router-dom";
// Store
import store from 'store'


@observer
class Header extends React.Component {

	render() {
		return (
			<nav className="pt-navbar">
				<div className="pt-navbar-group pt-align-left">
					<Link to="/" style={{ color: "#f5f8fa" }}><div className="pt-navbar-heading">Chesslessons</div></Link>
					<span className="pt-navbar-divider" />
					<button className="pt-button pt-minimal pt-icon-home">
						<Link to="/">Home</Link>
					</button>
					<button className="pt-button pt-minimal pt-icon-people">
						<Link to="/visitors">Visitors</Link>
					</button>
					<span className="pt-navbar-divider" />
				</div>
				<div className="pt-navbar-group pt-align-right">
					{ 1 === 2 ?
						<Link to="/profile">
							<button className="pt-button pt-minimal pt-icon-person" />
						</Link>
						: null
					}

					<span className="pt-navbar-divider" />
					<Link to="/registration">
						<button className="pt-button pt-minimal pt-icon-new-person" />
					</Link>
					<span className="pt-navbar-divider" />
						{ store.user ?
							<button className="pt-button pt-minimal pt-icon-log-out"
							        onClick={store.logout}
									title="logout" />
							:
							<Link to="/login">
								<button className="pt-button pt-minimal pt-icon-log-in" />
							</Link>
						}
				</div>
			</nav>
		)
	}
}

export default Header;
