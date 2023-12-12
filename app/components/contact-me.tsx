import { MailOpen, Phone } from "lucide-react";

const ContactMe = () => {
  return (
    <div data-aos="zoom-in" data-aos-offset={0} data-aos-duration={500}>
      <div className="">
        <h2 className="section-title-2">Get In Touch</h2>
      </div>
      <div className="my-5  mx-auto ">
        <div className="flex flex-col sm:flex-row  gap-3 sm:gap-5  my-5">
          <div className=" flex  items-center gap-3">
            <Phone size={"20px"} />
            <a className="block" href="tel:09774083439">
              09-774083439
            </a>
          </div>
          <div className=" flex items-center gap-3">
            <MailOpen size={"20px"} />
            <p>zinpainghtet.215108@gmail.com</p>
          </div>
        </div>
        <p className="text-[18px]">
          I am looking for{" "}
          <span className="text-primary">new opportunities</span> . My inbox is
          always open .Whether you want to ask question or just want to say hi ,
          I'll try my best to get back to you!
        </p>
      </div>
      <div className="my-5 grid place-items-center">
        <a href="mailto:zinpainghtet.215108@gmail.com">
          <button className="btn"> Send Message</button>
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
