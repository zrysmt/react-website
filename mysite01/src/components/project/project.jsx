import React from 'react';
import ReactDOM from 'react-dom';

import "./project.scss";

import ArticleTop from '../public/articleTop';

class Project extends React.Component{
	render(){
		return (
			<article>
				<ArticleTop className="project-top"/>
			</article>
		);
	}
}

export default Project;
