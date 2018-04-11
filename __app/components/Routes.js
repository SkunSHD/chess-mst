import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// Utils
import timeTraveller from "utils/timeTraveller.utils";
// Pages
import HomePage from "components/pages/HomePage.component";
import ProfilePage from "components/pages/ProfilePage.component";
import LoginPage from "components/pages/LoginPage.component";
import RegistrationPage from "components/pages/RegistrationPage.component";
import Page404 from "components/pages/Page404.component";
// Components
import Header from "components/header/Header.component";
// import Breadcrumbs from "components/header/Breadcrumbs.component";


const RouteComponent = ({ component: Component, ...rest })=> {
	// TODO: Add user check here
	// Need needAuth case
	if(Component.permissions.needAuth === true) return <Redirect to={{ pathname: Component.permissions.redirectPath }} />;

	// Default case
	return <Route { ...rest } render={ (props)=> <Component { ...props } /> }/>
};


// @SOURCE: https://reacttraining.com/react-router/
// TODO: https://reacttraining.com/react-router/web/example/auth-workflow
const Routes = ()=> {
	return (
		<Router>
			<div>
				<Header />

				{/*{ timeTraveller.canUndo ?*/}
					{/*<button role="button" className="pt-button pt-small" onClick={ ()=> timeTraveller.undo() }>Undo</button>*/}
					{/*:*/}
					{/*<button role="button" className="pt-button pt-small" disabled>undo</button>*/}
				{/*}*/}
				{/*{ timeTraveller.canRedo ?*/}
					{/*<button role="button" className="pt-button pt-small" onClick={ ()=> timeTraveller.redo() }>Redo</button>*/}
					{/*:*/}
					{/*<button role="button" className="pt-button pt-small" disabled>Redo</button>*/}
				{/*}*/}

				<div style={{ margin: "0 auto", width: 1000, marginTop: 20 }}>
					{/*<Breadcrumbs />*/}

					<Switch>
						<RouteComponent exact path="/" component={HomePage} />
						<RouteComponent exact path="/profile" component={ProfilePage} />
						<RouteComponent exact path="/login" component={LoginPage} />
						<RouteComponent exact path="/registration" component={RegistrationPage} />
						<RouteComponent component={Page404} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

;

export default Routes;