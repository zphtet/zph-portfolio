import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="flex sm:flex-row flex-col gap-5">
      <div className="flex-1">
        <h2 className="section-title">About Me </h2>
        <div className="my-5 space-y-2 text-justify">
          <p className="text-[18px] indent-10 ">
            Hello! My name is{" "}
            <span className="text-primary">Zin Paing Htet</span> . I am an
            experienced web developer with a background in frontend development,
            embarking on my journey to dig deeper into the{" "}
            <span className="text-primary">full stack development </span> .
            Having{" "}
            <span className="text-primary">
              previously worked as a frontend developer
            </span>
            , I've developed visually appealing and user-centric interfaces.
          </p>
          <p className="text-[18px] indent-10">
            My passion for web development is now complemented by a growing
            proficiency in the <span className="text-primary">MERN stack</span>{" "}
            , where I am eager to expand my skill set and contribute to
            full-stack development.
          </p>
          <p className="text-[18px] indent-10">
            My goal is to bring{" "}
            <span className="text-primary"> creativity</span>, a strong work
            ethic, and a hunger for continuous learning to a dynamic team,
            contributing to the success of{" "}
            <span className="text-primary">innovative web projects</span> .
          </p>
        </div>
      </div>
      <div className="flex-1 pt-16 flex justify-center">
        <div>
          <Image
            className="rounded-md grayscale rotate-6 hover:rotate-0 transition-all hover:[filter:grayscale(60%)]"
            src={"/assets/my.png"}
            alt="profile pic"
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
