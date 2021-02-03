import React from 'react';
import matter from "gray-matter";
import Link from "next/link";
import NavBarComponent from '../components/navBar.js';
import Head from 'next/head';

function Blog({ data, title, description }) {
  const RealData = data.map((blog) => matter(blog));
  const ListItems = RealData
    .map((listItem) => listItem.data)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p className="pages-title">Posts</p>
      <NavBarComponent />
      <div>
        <ul className="posts-list">
          {ListItems.map((blog, i) => (
            <li key={i}>
              <Link href={`/posts/${blog.slug}`}>
                <p className="posts-title">{blog.title}</p>
              </Link>
              <p className="post-date">{blog.date}</p>
              <p>{blog.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const fs = require("fs");
  const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");

  const blogs = files.filter((fn) => fn.endsWith(".md"));

  const data = blogs.map((blog) => {
    const path = `${process.cwd()}/content/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });
    return rawContent;
  })

  return {
    props: {
      data: data,
    },
  };
}

export default Blog