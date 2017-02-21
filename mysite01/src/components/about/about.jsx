import React from 'react';
import ReactDOM from 'react-dom';

import "./about.scss";

import ArticleTop from '../public/articleTop';

class About extends React.Component{
	render(){
		return (
			<article>
				<ArticleTop className="about-top"/>
			</article>
		);
	}
}
  
export default About;