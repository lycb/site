import React from 'react';
import Link from "next/link";

function Home(props) {
	return (
		<>
			<p className="pages-title">Jenny Ly</p>
			<div className="nav">
				<Link href="/" className="nav-link">
					<a className="nav-link">About</a>
				</Link>
				<Link href="/posts"  className="nav-link">
					<a className="nav-link">Blog</a>
				</Link>
			</div>
			<p>{props.description}</p>
		</>
	)
}

Home.getInitialProps = () => {
	return {
		title: 'Jenny Ly',
		description: 'Jenny is a CS student from Appalachian State University.'
	}
}

export default Home