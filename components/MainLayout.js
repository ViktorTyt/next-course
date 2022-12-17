//  this component uses inline-styles as an example

import Head from "next/head";
import Link from "next/link";

export const MainLayout = ({ children, titlePage = "Next App" }) => {
  return (
    <>
      <Head>
        <meta name="keyword" content="next.js, javascript, react" />
        <meta name="description" content="this is my second next.js app " />
        <meta charSet="utf-8" />
        <title>{titlePage}</title>
      </Head>

      <nav>
        <Link href={"/"} legacyBehavior>
          <a>Home</a>
        </Link>
        <Link href={"/about"} legacyBehavior>
          <a>About</a>
        </Link>
        <Link href={"/posts"} legacyBehavior>
          <a>Posts</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          display: flex;
          /* gap: 96px; */
          justify-content: space-around;
          align-items: center;
          height: 60px;
          background-color: darkblue;
        }
        nav a {
          color: white;
        }
        main {
          margin-top: 80px;
        }
      `}</style>
    </>
  );
};
