import { NextPageContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { MainLayout } from "../../components/MainLayout";
import { IMyPost } from "../../inerfaces/post";

interface IPostPageProps {
  post: IMyPost;
}

export default function Post({ post: serverPost }: IPostPageProps) {
  const [post, setPost] = useState(serverPost);
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    async function load() {
      const response = await fetch(`http://localhost:4100/posts/${id}`);
      const data = await response.json();
      setPost(data);
    }

    if (!serverPost) {
      load();
    }
  }, [serverPost, id]);

  if (!post) {
    return (
      <MainLayout titlePage={"..."}>
        <p>Loading ...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout titlePage={post.title}>
      <p>{post.title}</p>
      <hr />
      <p>{post.text}</p>
      <Link href={"/posts"}>Back to all posts</Link>
    </MainLayout>
  );
}

interface IPostNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

Post.getInitialProps = async ({ query: { id }, req }: IPostNextPageContext) => {
  // req is present only in backend-part
  if (!req) {
    return { post: null };
  }

  const response = await fetch(`http://localhost:4100/posts/${id}`);
  const post: IMyPost = await response.json();

  return {
    post,
  };
};
