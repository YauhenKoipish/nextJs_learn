import Router from "next/router";
import { MainLayout } from "../../components/mainLayout";

const About = ({ title }) => {
  const linkCLickHandler = () => Router.push("/");

  return (
    <MainLayout title={"About page"}>
      <h1>{title}</h1>
      <button onClick={linkCLickHandler}>Go back to home</button>
      <button onClick={() => Router.push("/posts")}>Go to posts in line</button>
    </MainLayout>
  );
};

export default About;

About.getInitialProps = async () => {
  const response = await fetch("http://localhost:4200/about");
  const data = await response.json();

  return { title: data.title };
};
