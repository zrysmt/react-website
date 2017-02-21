import React from 'react';
import ReactDOM from 'react-dom';

import "./life.scss";

import ArticleTop from '../public/articleTop';

class Life extends React.Component{
	render(){
		return (
			<article>
				<ArticleTop className="life-top"/>
			</article>
		);
	}
}
  
export default Life;