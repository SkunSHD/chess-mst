import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// Pages
import HomePage from "components/pages/HomePage.component";
import Page404 from "components/pages/Page404.component";


const RouteComponent = ({ component: Component, ...rest }) => {

	return <Route {...rest} render={ (props)=> {
		console.log(" ENTER3!", props, rest);
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
				<Link to="/test">test</Link><br/>
				<Link to="/test5">test3</Link><br/>
			</ul>

			<hr />

			<Switch>
				<RouteComponent exact path="/" component={HomePage} />
				<RouteComponent component={Page404} />
			</Switch>
		</div>
	</Router>
;

export default Routes;