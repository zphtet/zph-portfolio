import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ text }: { text?: string }) => {
  return (
    <div className="project-card  ">
      <div className="flex items-center gap-5 justify-end ">
        <a href="https://www.google.com" target="_blank">
          <Github className="text-primary" />
        </a>
        <a href="https://www.google.com" target="_blank">
          <ExternalLink className="text-primary" />
        </a>
      </div>

      <div className="space-y-3">
        <h6 className="font-bold text-xl leading-5">
          Building A Headless CMS from scratch
        </h6>
        <p className="text-justify">
          {text ||
            "  Find out how we build Headless CMS from Nodejs Express Mongodb Firebase"}
        </p>
      </div>
      <div className=" flex-1 flex items-end ">
        <div className="techs">
          <span className="italic block text-sm">Built with </span>
          <p>React</p>
          <p>Node </p>
          <p>Express</p>
          <p>Typescript</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
