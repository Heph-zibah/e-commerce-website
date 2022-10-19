import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Category from '../Components/Category';
import Featured from '../Components/Featured';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<Category />
			<Featured />
		</div>
	);
};

export default Home;
