import React from "react";
import strand from '../assets/strand.mp4'

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full  text-white h-fit"
    >
      <video src={strand} autoPlay loop muted className="object-cover absolute -z-10 min-h-full"/>
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Neem contact met mij op via onderstaand formulier!</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Vul je naam in"
              className="p-2 bg-black border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Vul je email adres in"
              className="my-4 p-2 bg-black border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Schrijf je bericht hier"
              rows="10"
              className="p-2 bg-black border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Laten we praten!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;