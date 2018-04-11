import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
// Ons
import ons from "onsenui";
import * as Ons from "react-onsenui";

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
const Routes = ()=>
	<Router>
		<Ons.Page>
			<ul>
				<Link to="/">Home</Link><br/>
				<Link to="/profile">Profile</Link><br/>
				<Link to="/login">Login</Link><br/>
				<Link to="/test">test</Link><br/>
				<Link to="/test5">test3</Link><br/>
			</ul>

			<hr />

			<Ons.Button>Tap me!</Ons.Button>

			<Switch>
				<RouteComponent exact path="/" component={HomePage} />
				<RouteComponent exact path="/profile" component={ProfilePage} />
				<RouteComponent exact path="/login" component={LoginPage} />
				<RouteComponent component={Page404} />
			</Switch>
		</Ons.Page>
	</Router>
;

export default Routes;