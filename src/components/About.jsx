import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen" style={{color:"white"}}>
      <div
        className="max-w-screen-lg p-4 mx-auto flex
        flex-col justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4 border-gray-500"
            style={{ color: "white" }}
          >
            Om mig
          </p>
        </div>
        <p className="text-xl mt-20">
          Jeg er hårdtarbejdende og altid motiveret. Jeg ser altid frem til mine
          mål. Jeg er god til gruppearbejde og endnu bedre til solo-værker. Jeg
          er ærlig og elsker at lytte til folks meninger og anbefalinger. Jeg
          elsker at samarbejde med nye mennesker og lære og opleve nye ting
        </p>
        <br />

        <p className="text-xl">
          Min tidligere arbejdserfaring inkluderer innovation på mange områder,
          herunder strategier for mere effektivt teamwork. Hos min tidligere
          virksomhed udarbejdede jeg strategier til forbedring af teamwork og
          kommunikation mellem medlemmer af teamprojekter. Jeg kan ikke kun
          bringe mine ideer fra mit tidligere job, men min generelle passion for
          innovation til din organisation. Jeg er muligvis ikke så god på dansk,
          men hvis sprog ikke betyder noget, er jeg sikker på, at jeg kan gøre
          noget for dig.
        </p>
      </div>
    </div>
  );
};

export default About;
