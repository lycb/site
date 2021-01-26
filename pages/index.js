import React from 'react';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import Link from "next/link";

function Home({ content, data }) {
	const frontmatter = data;

	return (
		<>
			<p className="pages-title">Jenny Ly</p>
			<div className="nav">
				<Link href="/" className="nav-link">
					<a className="nav-link">About</a>
				</Link>
				<Link href="/posts" className="nav-link">
					<a className="nav-link">Blog</a>
				</Link>
			</div>
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