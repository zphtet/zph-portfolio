import { DownloadCloud, Facebook, Github, Linkedin } from "lucide-react";
import AboutMe from "./components/about-me";
import Skills from "./components/skills";
import Experience from "./components/experience";
import ContactMe from "./components/contact-me";
import { robotoMono } from "@/fonts";
const Home = () => {
  return (
    <main>
      <div className="max-w-7xl mx-auto  px-5  sm:px-5 sm:py-7">
        <div className=" py-[25px] sm:py-[70px] max-w-5xl mx-auto ">
          <p className={`block ${robotoMono.className} text-primary`}>
            Hi ! My name is{" "}
          </p>
          <h1
            className=" text-5xl font-bold  my-5 
        "
          >
            Zin Paing Htet
          </h1>
          <h2 className="text-4xl  my-5">
            I build <span className="text-primary">Apps</span> for the
            <span className="text-primary"> Web</span>
          </h2>
          <p className="max-w-2xl text-[18px]">
            I am passionate web developer specializing
            <span className="text-primary"> MERN Stack</span>, focused on
            building fast and accessible products .
          </p>
          <div className="my-5">
            <a href="/assets/zphResume.pdf">
              <button className="btn flex items-center gap-3">
                <DownloadCloud size={"20px"} />
                Resume
              </button>
            </a>
          </div>
          <div className="my-7  flex items-center gap-5 text-3xl text-primary">
            <a
              href="https://www.facebook.com/zinpaing.htet.902/"
              target="_blank"
              className="social-icon"
            >
              <Facebook size={"35px"} />
            </a>
            <a
              href="https://www.linkedin.com/in/zin-paing-htet-49356a17b/"
              target="_blank"
              className="social-icon"
            >
              <Linkedin size={"35px"} />
            </a>
            <a
              href="https://github.com/zphtet"
              target="_blank"
              className="social-icon"
            >
              <Github size={"35px"} />
            </a>
          </div>
        </div>
      </div>
      <div className=" max-w-5xl mx-auto  p-5 text-[18px] ">
        <AboutMe />
        <div className=" my-10 sm:my-20 flex gap-10 sm:gap-28 sm:flex-row flex-col ">
          <Skills />
          <Experience />
        </div>
        <div className="my-10 sm:my-20">
          <ContactMe />
        </div>
      </div>
    </main>
  );
};

export default Home;
