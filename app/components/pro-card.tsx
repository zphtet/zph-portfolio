import { ExternalLink, Github } from "lucide-react";
import React from "react";
import { mplus } from "@/fonts";
type ProjectCardProps = {
  gitUrl: string;
  liveUrl?: string;
  working?: boolean;
  title: string;
  description: string;
  builds: string[];
  num?: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  gitUrl,
  liveUrl,
  working,
  title,
  description,
  builds,
  num,
}) => {
  return (
    <div
      className="project-card  "
      data-aos="flip-left"
      data-aos-offset="0"
      data-aos-delay={num! * 300}
      data-aos-duration={500}
    >
      <div className="flex items-center gap-5 justify-end ">
        <a href={gitUrl} target="_blank">
          <Github className="text-primary" />
        </a>
        {liveUrl && (
          <a href={liveUrl} target="_blank">
            <ExternalLink className="text-primary" />
          </a>
        )}
      </div>

      <div className="space-y-3">
        <h6 className="font-bold text-xl leading-5">{title}</h6>
        <p className="text-justify">{description}</p>
        {working && (
          <span className=" block text-right mt-5 italic text-sm text-red-600">
            Working on it *
          </span>
        )}
      </div>
      <div className=" flex-1 flex items-end ">
        <div className={`techs ${mplus.className}`}>
          <span className="italic block text-sm underline decoration-double">
            Built with{" "}
          </span>
          {builds.map((tech) => {
            return <p key={tech}>{tech}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
