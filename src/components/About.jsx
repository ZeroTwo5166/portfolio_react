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
            About me
          </p>
        </div>
        <p className="text-xl mt-20">
           I am hardworking and always motivated. I always look forward to my
           goals. I am good at group works and even better at solo works. I
           am honest and love to listen to people's opinions and recommendations. I
           love to collaborate with new people and learn new things.
        </p>
        <br />

        <p className="text-xl">
           My previous work experience includes innovation in many areas,
           including strategies for more effective teamwork. At my previous one
           company, I drew up strategies for improving teamwork and
           communication between members of team projects. I can not only
           bring my ideas from my previous job, but also my general passion for
           innovation for your organization. I may not be perfect in Danish,
           but if language isn't a dealbreaker, I may have something to offer.
        </p>
      </div>
    </div>
  );
};

export default About;
