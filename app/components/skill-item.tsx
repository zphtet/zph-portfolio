import Image from "next/image";
const SkillItem = ({
  imgUrl,
  alt,
  num,
}: {
  imgUrl: string;
  alt: string;
  num?: number;
}) => {
  return (
    <div
      data-aos="fade-in"
      data-aos-delay={num! * 200}
      data-aos-duration={500}
      className="border dark:bg-gray-200 cursor-pointer hover:shadow-lg hover:shadow-primary/50  p-3 rounded-full w-[75px] h-[75px]"
    >
      <Image src={imgUrl} width={50} height={50} alt={alt} />
    </div>
  );
};

export default SkillItem;
