import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// Pages
import HomePage from "components/pages/HomePage.component";
import Page404 from "components/pages/Page404.component";


// @SOURCE: https://reacttraining.com/react-router/
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
				<Route exact path="/" component={HomePage} />
				<Route component={Page404} />
			</Switch>
		</div>
	</Router>
;

export default Routes;