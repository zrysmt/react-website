import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';

import './components/global/global.scss';

import Nav from './components/global/menu';
import Home from './components/home/home';
import Blog from './components/blog/blog';
import Project from './components/project/project';
import Life from './components/life/life';
import About from './components/about/about';

//browser.js:49 Warning: [react-router] You cannot change <Router routes>; it will be ignored
/*if (module.hot) {
   module.hot.accept();
}*/


/**
 * App组件是封装的所有的内容
 */
class App extends React.Component{
	render(){
		return(
			<div id="react-page">	
				<Nav/>
				{this.props.children}
			</div>				
		)
	}
}

let routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="/blog" component={Blog}/>
		<Route path="/project" component={Project}/>
		<Route path="/life" component={Life}/>
		<Route path="/about" component={About}/>
	</Route>
);

ReactDOM.render((
	<Router history={hashHistory}>
		{routes}
	</Router>
	),document.body
);


