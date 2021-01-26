import React from 'react';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import Link from "next/link";

function PostTemplate({ content, data }) {
	const frontmatter = data;

	return (
		<>
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

PostTemplate.getInitialProps = async (context) => {
	const { slug } = context.query;

	const content = await import(`../../content/${slug}.md`);

	const data = matter(content.default);

	return { ...data };

	return { slug };
}

export default PostTemplate;