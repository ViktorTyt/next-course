import Head from "next/head";
import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

const Index = () => {
  return (
    <MainLayout titlePage="Home">
      <h1>Hello Kyiv</h1>
      <p>
        <Link href={"/about"}>About</Link>
      </p>
      <p>
        <Link href={"/posts"}>Posts</Link>
      </p>
      <a href="">test</a>
    </MainLayout>
  );
};

export default Index;
