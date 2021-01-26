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

PostTemplate.getStaticProps = async(context) => {
	const { slug } = context.query;

	const content = await import(`../../content/${slug}.md`);

	const data = matter(content.default);

	return { ...data };

	return { slug };
}

PostTemplate.getStaticPaths = async() => {
	const fs = require("fs");
	const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");

	const blogs = files.filter((fn) => fn.endsWith(".md"));

	const paths = blogs.map((blog) => {
		params: { slug: blog.slug }
	})

	return { paths, fallback: false }
}

export default PostTemplate;