import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
// Blueprint
import { Button, Intent, Spinner } from "@blueprintjs/core";
// Pages
import HomePage from "components/pages/HomePage.component";
import ProfilePage from "components/pages/ProfilePage.component";
import LoginPage from "components/pages/LoginPage.component";
import Page404 from "components/pages/Page404.component";


const RouteComponent = ({ component: Component, ...rest }) => {
	// TODO: Add user check here
	// Need auth case
	if(Component.permissions.auth === true) return <Redirect to={{ pathname: Component.permissions.redirectPath }} />;

	// Default case
	return <Route { ...rest } render={ (props)=> <Component { ...props } /> }/>
};


// @SOURCE: https://reacttraining.com/react-router/
// TODO: https://reacttraining.com/react-router/web/example/auth-workflow
const Routes = ()=> {
	return (
		<Router>
			<div>
				<nav className="pt-navbar pt-dark">
					<div className="pt-navbar-group pt-align-left">
						<div className="pt-navbar-heading">Chesslessons</div>
						<span className="pt-navbar-divider" />
						<button className="pt-button pt-minimal pt-icon-home">
							<Link to="/">Home</Link>
						</button>
						<button className="pt-button pt-minimal pt-icon-new-person">
							<Link to="/visitors">Visitors</Link>
						</button>
						<span className="pt-navbar-divider" />
					</div>
					<div className="pt-navbar-group pt-align-right">
						<Link to="/profile">
							<button className="pt-button pt-minimal pt-icon-person" />
						</Link>
						<span className="pt-navbar-divider" />
						<Link to="/login">
							<button className="pt-button pt-minimal pt-icon-log-in" />
						</Link>
					</div>
				</nav>

				<ul className="pt-breadcrumbs">
					<li><Link to="/" className="pt-breadcrumb pt-breadcrumb-current">Home</Link></li>
					<li><span className="pt-breadcrumb ">Next?</span></li>
				</ul>

				<Switch>
					<RouteComponent exact path="/" component={HomePage} />
					<RouteComponent exact path="/profile" component={ProfilePage} />
					<RouteComponent exact path="/login" component={LoginPage} />
					<RouteComponent component={Page404} />
				</Switch>
			</div>
		</Router>
	);
}

;

export default Routes;