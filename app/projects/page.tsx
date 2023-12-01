import ProjectCard from "../components/pro-card";

const ProjectsPage = () => {
  return (
    <div className="p-5 my-5">
      <div className="max-w-5xl  mx-auto  ">
        <h2 className="section-title">Some Projects I've built </h2>
        <div className="my-10 flex gap-5  flex-wrap ">
          <ProjectCard />
          <ProjectCard text="I've made a few CLIs. Probably my simplest recent one is split-guide. You'll see the CLI code lives here. And I tell npm to use the transpiled version of that file as the bin in the package.json here where the key in that object is the name of the binary " />
          <ProjectCard text="I've made a few CLIs. Probably my simplest recent one is split-guide. You'll see the CLI code lives here. And I tell npm to use the transpiled version of that file as the bin in the package.json here where the key in that object is the name of the binary " />
          <ProjectCard text="I've made a few CLIs. Probably my simplest recent one is split-guide. You'll see the CLI code lives here. And I tell npm to use the transpiled version of that file as the bin in the package.json here where the key in that object is the name of the binary " />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
