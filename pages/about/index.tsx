import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";

const About = ({ title }) => {
  const handleLinkClick = () => {
    Router.push("/");
  };

  return (
    <MainLayout titlePage="About">
      <h1>{title}</h1>
      <button onClick={handleLinkClick}>Go back to home</button>
      <button onClick={() => Router.push("/posts")}>
        Go back to home inline
      </button>
    </MainLayout>
  );
};

About.getInitialProps = async () => {
  const result = await fetch("http://localhost:4100/about");
  const data = await result.json();

  return {
    title: data.title,
  };
};

export default About;
