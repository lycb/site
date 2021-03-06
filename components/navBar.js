import React from 'react';
import Link from "next/link";

function NavBarComponent() {
  return (
    <>
      <div className="nav">
        <Link href="/" className="nav-link">
          <a className="nav-link">Home</a>
        </Link>
        <Link href="/projects" className="nav-link">
          <a className="nav-link">Projects</a>
        </Link>
        <Link href="/posts" className="nav-link">
          <a className="nav-link">Blog</a>
        </Link>
      </div>
    </>
  );
};

export default NavBarComponent