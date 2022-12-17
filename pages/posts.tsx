import { NextPageContext } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MainLayout } from "../components/MainLayout";
import { IMyPost } from "../inerfaces/post";

interface IPostsPageProps {
  posts: IMyPost[];
}
const Posts = ({ posts: serverPosts }: IPostsPageProps) => {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      const response = await fetch("http://localhost:4100/posts");
      const data = await response.json();
      setPosts(data);
    }

    if (!serverPosts) {
      load();
    }
  }, [serverPosts]);

  if (!posts) {
    return (
      <MainLayout titlePage={"..."}>
        <p>Loading ...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout titlePage="Posts">
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/post/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

Posts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return { posts: null };
  }

  const response = await fetch("http://localhost:4100/posts");
  const posts: IMyPost[] = await response.json();

  return {
    posts,
  };
};
export default Posts;
