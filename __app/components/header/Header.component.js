import React from 'react';
import { observer } from 'mobx-react';
import { Link } from "react-router-dom";
// Store
import store from 'store';

import * as MD from "react-md";

const navItems = [{
	label: 'Inbox',
	to: "/",
	exact: true,
	icon: 'inbox',
}, {
	label: 'Starred',
	to: `a/starred`,
	icon: 'star',
}, {
	label: 'Send mail',
	to: `a/send-mail`,
	icon: 'send',
}, {
	label: 'Drafts',
	to: `a/drafts`,
	icon: 'drafts',
}];

@observer
class Header extends React.Component {


	render() {
		return (
			<div>
				<MD.NavigationDrawer
					// visible={true}
					// onVisibilityChange={ (e)=> console.log("e", e) }
					renderNode={<div>renderNode</div>}
					navItems={[<div key="1">nav item 1</div>]}
					toolbarTitle="Hello, World!"
					toolbarActions={<MD.Button icon>close</MD.Button>}
					contentId="main-demo-content"
					temporaryIcon={<MD.SVGIcon use="{menu.url}" />}
					persistentIcon={<MD.SVGIcon use="{arrowBack.url}" />}
					contentClassName="md-grid">
					<h2 className="md-cell md-cell--12">Currently on page: X</h2>
					<section className="md-text-container md-cell md-cell--12">
						<p>test2</p>
					</section>
				</MD.NavigationDrawer>

				{/*<MD.Drawer*/}
					{/*visible={true}*/}
					{/*position="left"*/}
					{/*onVisibilityChange={ (e)=> console.log(e) }*/}
					{/*renderNode={<div>test42</div>}*/}
					{/*navItems={[<div key="1">test</div>]}*/}
				{/*/>*/}
			</div>
		)
	}
}

export default Header;


// const a = <nav className="pt-navbar">
// 	<md.Button flat primary swapTheming>Hello</md.Button>
// 	<md.Button flat secondary swapTheming>World</md.Button>
//
// 	<div className="pt-navbar-group pt-align-left">
// 		<Link to="/" style={{ color: "#f5f8fa" }}><div className="pt-navbar-heading">Chesslessons</div></Link>
// 		<span className="pt-navbar-divider" />
// 		<button className="pt-button pt-minimal pt-icon-home">
// 			<Link to="/">Home</Link>
// 		</button>
// 		<button className="pt-button pt-minimal pt-icon-people">
// 			<Link to="/visitors">Visitors</Link>
// 		</button>
// 		<span className="pt-navbar-divider" />
// 	</div>
// 	<div className="pt-navbar-group pt-align-right">
// 		{ 1 === 2 ?
// 			<Link to="/profile">
// 				<button className="pt-button pt-minimal pt-icon-person" />
// 			</Link>
// 			: null
// 		}
//
// 		<span className="pt-navbar-divider" />
// 		<Link to="/registration">
// 			<button className="pt-button pt-minimal pt-icon-new-person" />
// 		</Link>
// 		<span className="pt-navbar-divider" />
// 		{ store.user ?
// 			<button className="pt-button pt-minimal pt-icon-log-out"
// 					onClick={ store.logout }
// 					title="logout" />
// 			:
// 			<Link to="/login">
// 				<button className="pt-button pt-minimal pt-icon-log-in" />
// 			</Link>
// 		}
// 	</div>
// </nav>
