import { GraduationCap, Waypoints } from "lucide-react";

const Experience = () => {
  return (
    <div className="flex-1 space-y-10">
      <div>
        <h2 className="section-title-2">Experience </h2>
        <div className="my-5">
          <div className="flex gap-5">
            <Waypoints className="text-primary" />
            <div>
              <p>Frontend developer at Qualy Myanmar</p>
              <span className="text-sm">(Nov-2022 to June-2023)</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="section-title-2">Education Background </h2>
        <div className="my-5">
          <div className="flex gap-5 ">
            <GraduationCap
              size={"40px"}
              className="text-primary -mt-2  self-start"
            />
            <div>
              <p>
                Studied 4th Year (Electronics Engineering ) at Mandalay
                Technological University - MTU
              </p>
              <span className="text-sm">(2016 to 2020)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
