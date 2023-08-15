import React from "react";
import roboFriends2 from '../assets/portfolio/roboFriends.png';
import starwars from '../assets/portfolio/starwars.png'
import gameDatabase from '../assets/portfolio/gameDatabase.PNG'

const Portfolio = () => {

  const demoLink = "https://zerotwo5166.github.io";
  const codeSource = "https://github.com/ZeroTwo5166";

  const projects = [
    {
    name: "robofriends",
    image: roboFriends2,
    website: `${demoLink}/robofriends`,
    source: `${codeSource}/robofriends`
   }, 
   {
    name: "Starwars_api",
    image: starwars,
    website: `${demoLink}/Starwars_api/`,    
    source: `${codeSource}/Starwars_api`

   }, 
   {
    name: "ng_game_database",
    image: gameDatabase,
    website: `${demoLink}/ng_game_database`,
    source: `${codeSource}/ng_game_database`
   }];  


  return (
    <div
      name="portfolio"
      className="w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Only those projects that are live on Github (Javascript projects)</p>
        </div>

        {projects.map((item, index) => {
          return(
            <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              <div className="shadow-md shadow-gray-600 rounded-lg">
                <img
                    src={item.image}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <form
                  target="_blank"
                  action= {item.website}>
                    <button 
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                    </button>
                  </form>
                  <form target="_blank"
                  action={item.source}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                    </button>
                  </form>        
                </div>
              </div>
            </div> 
            <br/>
            </>
          )})}
        

      </div>
    </div>
  );
};

export default Portfolio;


/*{portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))} 
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            <div className="shadow-md shadow-gray-600 rounded-lg">
                <img
                    src={roboFriends2}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <form
                  target="_blank"
                   action="https://zerotwo5166.github.io/robofriends/">
                    <button 
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                    </button>
                  </form>
                  <form target="_blank"
                  action="https://github.com/ZeroTwo5166/robofriends">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                    </button>
                  </form>
                    
                </div>
            </div>
        </div>      <br/>
          
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            <div className="shadow-md shadow-gray-600 rounded-lg">
                <img
                    src={starwars}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <form
                  target="_blank"
                   action="https://zerotwo5166.github.io/Starwars_api/">
                    <button 
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                    </button>
                  </form>
                  <form target="_blank"
                  action="https://github.com/ZeroTwo5166/Starwars_api">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                    </button>
                  </form>
                    
                </div>
            </div>
        </div>  
          
          */