import React from 'react';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';

function PostTemplate({ content, data }) {
	const frontmatter = data;

	return (
		<>
			<h1 className="post-title">{frontmatter.title}</h1>
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