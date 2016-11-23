import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

import gConfig from './gConfig';

import './menu.scss';

const menuLis = new gConfig().getMenuLis();//默认["Home","Blog","Project","Life","About"]
console.log(menuLis);

class MenuLi extends React.Component{
	render(){
		let propsName = this.props.name.toLowerCase(),
		    linkTo = this.props.name == menuLis[0]?"/":"/"+propsName,
		    activeClass = this.props.name == menuLis[0]?"":"active";
		return (
			<li>
				<Link to={linkTo} key={propsName} activeClassName={activeClass}>
					{this.props.name}
				</Link>
			</li>
		);
	}
}

class MenuUl extends React.Component{
	render(){
		return(
			<ul id="menu">
			{
				menuLis.map(function(menuLi) {
				    return <MenuLi name={menuLi}/>
				})
			}
			</ul>
		);	
	}
} 

class Nav extends React.Component{
	render(){
		return(
			<nav>
				<MenuUl/>			
			</nav>
		)
	}
}


export default Nav;