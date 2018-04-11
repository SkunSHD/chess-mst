import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
// Ons
import * as Ons from "react-onsenui";

// Pages
import HomePage from "components/pages/HomePage.component";
import ProfilePage from "components/pages/ProfilePage.component";
import LoginPage from "components/pages/LoginPage.component";
import Page404 from "components/pages/Page404.component";


const RouteComponent = ({ component: Component, ...rest }) => {
	// TODO: Add user check here
	// Need needAuth case
	if(Component.permissions.needAuth === true) return <Redirect to={{ pathname: Component.permissions.redirectPath }} />;

	// Default case
	return <Route { ...rest } render={ (props)=> <Component { ...props } /> }/>
};


console.log(Ons);
// @SOURCE: https://reacttraining.com/react-router/
// TODO: https://reacttraining.com/react-router/web/example/auth-workflow
const Routes = ()=> {
	return (
		<Router>
			<Ons.Page>
				<ons-tabbar>
					<ons-tab active><Link to="/">Home</Link></ons-tab>
					<ons-tab><Link to="/profile">Profile</Link></ons-tab>
					<ons-tab><Link to="/login">Login</Link></ons-tab>
					<ons-tab><Link to="/test">test</Link></ons-tab>
				</ons-tabbar>

				<Ons.Button>Tap me!</Ons.Button>

				<Switch>
					<RouteComponent exact path="/" component={HomePage} />
					<RouteComponent exact path="/profile" component={ProfilePage} />
					<RouteComponent exact path="/login" component={LoginPage} />
					<RouteComponent component={Page404} />
				</Switch>
			</Ons.Page>
		</Router>
	);
}

;

export default Routes;