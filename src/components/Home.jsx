import React from 'react'
import profile from '../assets/profile.png'
import {TbArrowRight} from 'react-icons/tb'
import { Link } from 'react-scroll/modules';

const Home = ({setColor1, setColor2, color1, color2}) => {
    return (
      <div name="home" className="h-screen w-full">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <div
              style={{ fontSize: "20px", color: "white", fontWeight: "bold" }}
            >
              Change Background -- 
              <input
                className="color1"
                type="color"
                name="color1"
                onChange={(e) => setColor1(e.target.value)}
                value={color1}
              />
              <input
                className="color2"
                type="color"
                name="color2"
                onChange={(e) => setColor2(e.target.value)}
                value={color2}
              />
            </div>
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a student
            </h2>
            <p className="text-gray-300 py-4 max-w-md">
               My name is Subarna Gurung and I am 22 years old. I go to TEC in
               Ballerup. I am starting my P3 (Praktik forløb). I am a
               friendly and hardworking student who is always motivated and
               looking forward to new goals. I always try to do more than I can
               to exceed my abilities and gain new knowledge, experience and
               skills.
            </p>

            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex 
              items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500
              cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <TbArrowRight size={20} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>

          <div>
            <img
              src={profile}
              alt="my profile"
              style={{ marginLeft: "20px" }}
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;