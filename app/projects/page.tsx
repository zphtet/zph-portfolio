import ProjectCard from "../components/pro-card";

const Projects = [
  {
    gitUrl: "https://github.com/zphtet/dev-overflow",
    working: true,
    title: "DevOverflow",
    description:
      "This is the stack overflow clone . In this project , you can post questions , anwers and comments . And other functionalities like upvote , downvote , save questions , filter , pagination  etc .",
    builds: ["NextJs", "Typescript", "Clerk", "MongoDB", "Prisma", "ShadcnUi"],
  },
  {
    gitUrl: "https://github.com/zphtet/issue-tracker",
    liveUrl: "https://issue-tracker-rho-lemon.vercel.app/",
    title: "Issues Tracker",
    description: "You can create issues and assign anyone you want.",
    builds: ["NextJs", "Typescript", "Clerk", "MongoDB", "Prisma", "ShadcnUi"],
  },
  {
    gitUrl: "https://github.com/zphtet/natours-travel-api",
    liveUrl: "https://natours-travel-6ypt.onrender.com/",
    title: "Natours Api",
    description:
      "APIs for travel informations . You can purchase any tour you want . In this projects , there are many functionalites like email sending , JWT auths ,forgot password , update password ,  image upload with multer ,  many advanced Mongoose knowledges and etc ...   ",
    builds: [
      "NodeJs",
      "Express",
      "MongoDB",
      "Mongoose",
      "Stripe",
      "Pug template",
    ],
  },
  {
    gitUrl: "https://github.com/zphtet/ecommerce-cms",
    liveUrl: "https://ecommerce-cms-one.vercel.app/",
    title: "Ecommerce CMS",
    description:
      "This is the advanced and features rich Ecommerce CMS . You can create many stores in this signle CMS . Also  you can create update delete  sizes, colors , categories , billboards , products and consume the created data on any frontend you want. This CMS gives APIs to consume.",
    builds: ["NextJs", "Typescript", "Clerk", "MongoDB", "Prisma", "ShadcnUi"],
  },
  {
    gitUrl: "https://github.com/zphtet/ecommerce-frontend",
    liveUrl: "https://ecommerce-frontend-omega-ten.vercel.app/",
    title: "Ecommerce Store",
    description:
      "In this store , all the datas are given from my Ecommerce CMS . Any changed datas will be reflected on this store or any consumed frontend. You can also purchase the products with the help of stripe checkout . ",
    builds: [
      "NextJs",
      "Typescript",
      "Zustand",
      "Stripe",
      "HeadlessUi",
      "ShadcnUi",
    ],
  },
  {
    gitUrl: "https://github.com/zphtet/wild-oasis",
    liveUrl: "https://wild-oasis-plum.vercel.app/login",
    title: "Wild Oasis",
    description:
      "This is the Hotel cabins  management dashboard . Withe the power of React Query , any changed data will be immediately reflected on the dashboard and other benefits such as caching , prefetching server states.I learned supabase from this project.",
    builds: ["ReactJs", "Typescript", "Supabase", "React Query"],
  },
  {
    gitUrl: "https://github.com/zphtet/fast-pizza-react",
    liveUrl: "https://fast-pizza-react-beige.vercel.app/",
    title: "React Pizza",
    description:
      "Just a smiple pizza app where you purcahse pizzas .With the help of Redux Toolkit , state management is flawless.",
    builds: ["ReactJs", "Redux-Toolkit"],
  },
  {
    gitUrl: "https://github.com/zphtet/countries-info-with-theme-switcher",
    liveUrl: "https://countries-info-with-theme-switcher.vercel.app/",
    title: "Country Infos",
    description:
      "Browse all countries over the world . This the advanced challenge website from frontendmentor.io . I am just using vanilla JS and Tailwind Css.",
    builds: ["Javascript", "Tailwind"],
  },
  {
    gitUrl: "https://github.com/zinphtet/apple_ecommerce/",
    liveUrl: "https://apple-ecommerce.vercel.app/",
    title: "Apple Ecommerce",
    description:
      "Apple ecommerce website design using CSS and JS. All animation , 3D rotation are in pure CSS and JS.",
    builds: ["HTML", "CSS", "Javascript"],
  },
];

const ProjectsPage = () => {
  return (
    <div className="p-5 my-5">
      <div className="max-w-5xl  mx-auto  ">
        <h2 className="section-title">
          Some Projects I've built
          <hr />
        </h2>
        <div className="my-10 flex gap-5  flex-wrap ">
          {Projects.map((project, idx) => {
            return <ProjectCard key={project.title} {...project} num={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
