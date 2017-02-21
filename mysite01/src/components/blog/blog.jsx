import React from 'react';
import ReactDOM from 'react-dom';

import "./blog.scss";

import ArticleTop from '../public/articleTop';

class Blog extends React.Component{
	render(){
		return(
			<article>
				<ArticleTop className="blog-top"/>
			</article>
		);
	}
}

export default Blog;
