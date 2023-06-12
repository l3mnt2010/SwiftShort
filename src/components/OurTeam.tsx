import React from "react";
import { about, team } from "@/item.global";
import TeamMember from "../components/TeamMember";

const OurTeam = () => {
  return (
    <div className="w-full my-10 mx-auto sm:mt-40 sm:mb-32 text-white">
      <h1 className="font-thin w-full text-center sm:font-bold text-3xl text-pink-400 mb-3">
        Our relative team
      </h1>
      <p className="w-full text-center text-xl font-sans my-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae.
      </p>
      <div className="sm:flex sm:w-2/3 gap-20 mx-auto">
        {team.map((itm) => (
          // eslint-disable-next-line react/jsx-key
          <TeamMember
            name={itm.name}
            job={itm.job}
            avatar={itm.img}
            about={about}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(OurTeam);
