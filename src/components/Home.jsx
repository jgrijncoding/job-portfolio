import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import landscape from '../assets/landscape.mp4'
import me from '../assets/me.png'

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full"
    >
      <video src={landscape} autoPlay loop muted className="object-cover absolute -z-10 min-h-full"/>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row gap-x-20">
        <div className="flex flex-col justify-center h-full mt-24">
          <h1 className="text-xl sm:text-4xl font-bold text-black w-max">
            The sky is the limit!
          </h1>
          <p className=" text-black font-bold py-4">
            Als Applicatie engineer is het mijn taak om voor de klant de bestaande webapplicatie te ontwikkelen/onderhouden. 
            <br />
            Deze website is gemaakt met het React library van Javascript. Omtrent styling heb ik gebruik gemaakt van het Tailwind framework. 
            Op deze webpagina kun je meer info over mij vinden en is mijn skill set te zien.        
          </p>
  

          <div>
            <Link
              to="Skill set"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              offset={-80}
            >
              Skill set
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>          
        </div>
        <div>
          <img
            src={me}
            alt="my profile"
            className=" rounded-3xl mx-auto w-1/2 md:w-90"
          />
        </div>        
      </div>
    </div>
  );
};

export default Home;