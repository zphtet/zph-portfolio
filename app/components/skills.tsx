import SkillItem from "./skill-item";
const skills = [
  {
    label: "React",
    imgUrl: "/assets/react.svg",
  },
  {
    label: "Next",
    imgUrl: "/assets/next.svg",
  },
  {
    label: "NodeJS",
    imgUrl: "/assets/node.svg",
  },
  {
    label: "Tailwind",
    imgUrl: "/assets/tailwind.svg",
  },
  {
    label: "Typescript",
    imgUrl: "/assets/typescript.svg",
  },
  {
    label: "Javascript",
    imgUrl: "/assets/javascript.svg",
  },
  {
    label: "mongodb",
    imgUrl: "/assets/mongodb.svg",
  },
  {
    label: "Redux",
    imgUrl: "/assets/redux.svg",
  },
  {
    label: "React Query",
    imgUrl: "/assets/react-query.svg",
  },
  {
    label: "Express",
    imgUrl: "/assets/express.svg",
  },
];

const Skills = () => {
  return (
    <div className="flex-1 ">
      <h2 className="section-title-2">Main Stack </h2>
      <div className="my-5  flex flex-wrap gap-5 items-center sm:justify-start justify-between ">
        {skills.map((skill, idx) => {
          return (
            <SkillItem imgUrl={skill.imgUrl} alt={skill.label} num={idx} />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
