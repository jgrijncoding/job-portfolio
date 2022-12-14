import React from "react";

const About = () => {
  return (
    <div
      name="Over mij"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-500 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Over mij
          </p>
        </div>

        <p className="text-white">
          Na mijn studie Chemische Technologie heb ik besloten om mijn carriere voort te zetten in de IT.
          <br />
          De IT betekent voor mij een wereld vol complexe uitdagingen. 
          <br />
          Bij elke uitdaging zijn er verschillende invalshoeken om tot een oplossing te komen.
          <br />
          Als IT'er is het belangrijk om je altijd door te ontwikkelen. 
          <br />
          Technologische ontwikkelingen vinden zich namelijk in hoog tempo plaats.
          <br />
          Zo ben ik op het moment van schrijven bezig om mijn AWS cloud practitioner certificaat te halen.  

        </p>

        <br />

        <p className="text-white">
          In mijn vrije tijd vind ik het leuk om te sporten en om ondernemend bezig te zijn.         
          <br />          
          Naast sport verdiep ik mij graag in de financiële markten en vind ik het leuk om te progammeren.
          <br />
          Op het gebied van ondernemerschap is het ontwikkelen van een eigen SaaS platform (Software as a Service) mijn ambitie.
          <br />
          Ik vind het gaaf om hiermee een impact te kunnen maken in het dagelijks leven van mensen.       
        </p>
      </div>
    </div>
  );
};

export default About;