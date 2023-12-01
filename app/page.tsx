import { Facebook, Github, Linkedin } from "lucide-react";
import AboutMe from "./components/about-me";
import Skills from "./components/skills";
import Experience from "./components/experience";
import ContactMe from "./components/contact-me";

const Home = () => {
  return (
    <main>
      <div className="max-w-7xl mx-auto  px-5  sm:p-5">
        <div className=" py-[25px] sm:py-[70px] max-w-5xl mx-auto ">
          <p className="block">Hi ! My Name is </p>
          <h1
            className=" text-5xl sm:text-7xl  my-5 sm:my-7 
        "
          >
            Zin Paing Htet
          </h1>
          <h2 className="text-4xl sm:text-5xl my-5">
            I build <span className="text-primary">Apps</span> for the
            <span className="text-primary"> Web</span>
          </h2>
          <p className=" max-w-2xl text-[18px]">
            I am passionate web developer specializing
            <span className="text-primary"> MERN Stack</span>, focused on
            building fast and accessible products .
          </p>
          <div className="my-5">
            <a href="/user.jpg">
              <button className="btn">Resume</button>
            </a>
          </div>
          <div className="my-7  flex items-center gap-5 text-3xl text-primary">
            <a
              href="https://google.com"
              target="_blank"
              className="hover:opacity-75"
            >
              <Facebook size={"35px"} />
            </a>
            <a
              href="https://google.com"
              target="_blank"
              className="hover:opacity-75"
            >
              <Linkedin size={"35px"} />
            </a>
            <a
              href="https://google.com"
              target="_blank"
              className="hover:opacity-75"
            >
              <Github size={"35px"} />
            </a>
          </div>
        </div>
      </div>
      <div className=" max-w-5xl mx-auto  p-5 text-[18px] ">
        <AboutMe />
        <div className="my-20 flex gap-10 sm:gap-28 sm:flex-row flex-col ">
          <Skills />
          <Experience />
        </div>
        <div className="my-20">
          <ContactMe />
        </div>
      </div>
    </main>
  );
};

export default Home;
