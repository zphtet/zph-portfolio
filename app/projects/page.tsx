import ProjectCard from "../components/pro-card";

const Projects = [
  {
    gitUrl: "https://github.com/zphtet/dev-overflow",
    working: true,
    title: "StackOverflow Clone",
    description:
      "This is the stackoverflow clone project . Users can post , comment , answers and etc ...",
    builds: ["NextJs", "Typescript", "MongoDB", "Prisma", "ShadcnUi"],
  },
  {
    gitUrl: "https://github.com/zphtet/issue-tracker",
    liveUrl: "https://issue-tracker-rho-lemon.vercel.app/",
    title: "Issues Tracker",
    description: "You can create issues and assign someone you want.",
    builds: ["NextJs", "Typescript", "MongoDB", "Prisma", "ShadcnUi"],
  },
];

const ProjectsPage = () => {
  return (
    <div className="p-5 my-5">
      <div className="max-w-5xl  mx-auto  ">
        <h2 className="section-title">Some Projects I've built </h2>
        <div className="my-10 flex gap-5  flex-wrap ">
          {Projects.map((project) => {
            return <ProjectCard key={project.title} {...project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
