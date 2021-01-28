import React from 'react';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import Link from 'next/link';
import Head from 'next/head';

function PostTemplate({ content, data }) {
	const frontmatter = data;

	return (
		<>
			<Head>
		        <title>{frontmatter.title}</title>
		        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
	      	</Head>
			<p className="pages-title">{frontmatter.title}</p>
			<div className="nav">
				<Link href="/posts"  className="nav-link">
					<a className="nav-link">Back</a>
				</Link>
			</div>
			<p className="post-date">{frontmatter.date}</p>
			<ReactMarkdown source={content} />
		</>
	);
};

export async function getStaticProps(context) {
	const { slug } = context.params;

	const content = await import(`../../content/${slug}.md`);

	const meta = matter(content.default);

	return {
		props: {
			content: meta.content,
			data: meta.data,
		}
	}
}

export async function getStaticPaths() {
	const context = require.context('../../content', false, /\.md$/)
  const posts = []
  for(const key of context.keys()){
    const post = key.slice(2);
    const content = await import(`../../content/${post}`);
    const meta = matter(content.default)
    posts.push({
      slug: post.replace('.md',''),
      title: meta.data.title
    })
  }

	// const paths = [{
	// 	params: { slug: 'cs-undergrad-experience'}
	// }]

	const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

	return {paths, fallback: false}
}

export default PostTemplate;