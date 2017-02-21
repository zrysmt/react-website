import React from 'react';

import "./home.scss";

class HomePic extends React.Component{
	render(){
		return(
			<div id="home-pic" className="article-top home-top">
				<img/>
			</div>
		);
	}
}

class Home extends React.Component{
	render(){
		return (
		    <article>
				<HomePic/>
		    </article>
		);
	}
}
  
export default Home;
