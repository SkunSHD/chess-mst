import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
// Pages
import HomePage from "components/pages/HomePage.component";
import ProfilePage from "components/pages/ProfilePage.component";
import LoginPage from "components/pages/LoginPage.component";
import Page404 from "components/pages/Page404.component";


const RouteComponent = ({ component: Component, ...rest }) => {

	console.log(Component.permissions, "423");
	return <Route {...rest} render={ (props)=> {
		return <Component { ...props }/>;
	} }/>
};


// @SOURCE: https://reacttraining.com/react-router/
// TODO: https://reacttraining.com/react-router/web/example/auth-workflow
const Routes = ()=>
	<Router>
		<div>
			<ul>
				<Link to="/">Home</Link><br/>
				<Link to="/profile">Profile</Link><br/>
				<Link to="/login">Login</Link><br/>
				<Link to="/test">test</Link><br/>
				<Link to="/test5">test3</Link><br/>
			</ul>

			<hr />

			<Switch>
				<RouteComponent exact path="/" component={HomePage} />
				<RouteComponent exact path="/profile" component={ProfilePage} />
				<RouteComponent component={Page404} />
			</Switch>
		</div>
	</Router>
;

export default Routes;