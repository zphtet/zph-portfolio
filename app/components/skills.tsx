import { Component } from "lucide-react";

const skills = [
  "React/NextJS",
  "Typescript",
  "Node",
  "Express",
  "Redux",
  "React Query",
  "Prisma",
  "Tailwind",
  "Sass",
];

const Skills = () => {
  return (
    <div className="flex-1">
      <h2 className="section-title-2">Main Stack </h2>
      <div className="my-5  flex flex-wrap gap-y-3 gap-x-5 items-center ">
        {skills.map((skill) => {
          return (
            <div key={skill} className="skill-item">
              <Component className="text-primary" size={"16px"} />
              <p>{skill}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
