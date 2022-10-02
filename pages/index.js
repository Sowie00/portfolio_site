import Head from "next/head";
import About from "../src/components/About/About";
import BackgroundAnimation from "../src/components/BackgroundAnimation/BackgroundAnimation";
import Contact from "../src/components/Contact/Contact";
import Main from "../src/components/Main/Main";
import Projects from "../src/components/Projects/Projects";
import Skills from "../src/components/Skills/Skills";
import connectMongo from "../database/mongodb";
import Project from "../models/projectModel";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Sourav | Full-Stack Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackgroundAnimation />
      <Main />
      <About />
      <Skills />
      <Projects data={data} />
      <Contact />
    </div>
  );
}

export async function getServerSideProps() {
  connectMongo();
  const data = await Project.find({});
  console.log(data);
  return {
    props: { data: JSON.parse(JSON.stringify(data)) },
  };
}
