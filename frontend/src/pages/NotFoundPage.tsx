import React from 'react';
//import '../styles/NotFoundPage.css';

const NotFoundPage = () => {
	return (
		<div className={`not-found-page`}>
			<div className='not-found-container'>
				<h1>404</h1>
				<p>Oops! The page you're looking for does not exist.</p>
				<a href='/'>Return to Home</a>
			</div>
		</div>
	);
};

export default NotFoundPage;
