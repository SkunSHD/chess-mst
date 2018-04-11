import React from 'react';
import 'App.css';
// Utils
import timeTraveller from "utils/timeTraveller.utils";
// Routes
import Routes from "components/Routes";


class App extends React.Component {

	render() {
		return (
			<div className="App">
				{/*{ timeTraveller.canUndo ?*/}
					{/*<button onClick={ ()=> timeTraveller.undo() }>Undo</button>*/}
					{/*:*/}
					{/*<button disabled>undo</button>*/}
				{/*}*/}
				{/*{ timeTraveller.canRedo ?*/}
					{/*<button onClick={ ()=> timeTraveller.redo() }>Redo</button>*/}
					{/*:*/}
					{/*<button disabled>Redo</button>*/}
				{/*}*/}
				<Routes />
			</div>
		)
	}
}

export default App
