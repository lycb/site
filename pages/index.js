import React from 'react';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import Link from "next/link";
import Head from 'next/head';

import NavBarComponent from '../components/navBar.js';

function Home({ content, data }) {
	const frontmatter = data;

	return (
		<>
			<Head>
		    <title>Jenny Ly</title>
		    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div className="home-wrapper">
				<p className="home-title">Jenny Ly</p>
					<NavBarComponent style="nav-home"/>
			    <div className="logo-wrapper">
					<a href="https://github.com/lycb">
						<img src="/assets/github.png" className="logo"/>
					</a>
					<a href="https://www.linkedin.com/in/jenny-chau-ly/">
						<img src="/assets/linkedin.png" className="logo"/>
					</a>
				</div>
			</div>
		</>
	);
};

Home.getInitialProps = () => {

	const content = require('./index.md');

	const data = matter(content.default);

	return { ...data };
}


export default Home