import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full  text-white h-fit bg-gradient-to-b  from-black to-gray-500"
    >
  
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Neem contact met mij op via onderstaand formulier!</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/b751a74e-5fa6-42cd-8c70-8be83dc1a221"
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