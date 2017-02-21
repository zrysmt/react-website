import React from 'react';

import "./articleTop.scss";

class ArticleTop extends React.Component{
	render(){
		let className = "article-top"+" "+this.props.className;
		return(
			<div className={className}>
			</div>
		);
	}
}

export default ArticleTop;