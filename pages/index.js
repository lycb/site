import React from 'react';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import Link from "next/link";
import Head from 'next/head';

function Home({ content, data }) {
	const frontmatter = data;

	return (
		<>
			<Head>
		        <title>Jenny Ly</title>
		        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
	      	</Head>
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
			<a href="https://github.com/lycb">
				<img src="/assets/github.png" className="logo"/>
			</a>
		</>
	);
};

Home.getInitialProps = () => {

	const content = require('./index.md');

	const data = matter(content.default);

	return { ...data };
}


export default Home