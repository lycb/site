import React from 'react';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import Link from "next/link";

import NavBarComponent from '../components/navBar.js';

function Home({ content, data }) {
	const frontmatter = data;

	return (
		<>
			<p className="pages-title">Jenny Ly</p>
			<NavBarComponent />
			<ReactMarkdown source={content} />
		</>
	);
};

Home.getInitialProps = () => {

	const content = require('./index.md');

	const data = matter(content.default);

	return { ...data };
}


export default Home