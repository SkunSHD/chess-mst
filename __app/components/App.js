import React from 'react';
import logo from 'logo.svg';
import 'App.css';
// Utils
import timeTraveller from "utils/timeTraveller.utils";
// Routes
import Routes from "components/Routes";


class App extends React.Component {

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">Welcome to React</h1>

					{ timeTraveller.canUndo ?
						<button onClick={ ()=> timeTraveller.undo() }>Undo</button>
						:
						<button disabled>undo</button>
					}
					{ timeTraveller.canRedo ?
						<button onClick={ ()=> timeTraveller.redo() }>Redo</button>
						:
						<button disabled>Redo</button>
					}
				</header>
				<p className="App-intro">
					To get started, edit <code>__app/App.js</code> and save to reload.
				</p>
				<Routes />
			</div>
		)
	}
}

export default App
