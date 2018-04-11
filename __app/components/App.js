import React from 'react';
// Firebase
import FBS from "firebase/API.firebase";
// Routes
import Routes from "components/Routes";

async function test() {
	const test = await FBS.collections.visitors.get();
	console.log(test, 42);
}

test();

class App extends React.Component {

	render() {
		console.log(FBS.collections.visitors, "sad");
		return (
			<div className="pt-dark">
				<Routes />
			</div>
		)
	}
}

export default App
