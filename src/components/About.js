import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Andy.
            <br className="hidden lg:inline-block" />I love to build immersive and innovative software.
          </h1>
          <p className="mb-8 leading-relaxed">
          Hey there! I'm Andy Juarez , a little about me... I am a first generation Mexican-American born and mostly raised in the beautiful city of San Diego in Southern  California. I have spent most of my professional career in the military and service industry with three years in the United States Army as an infantry team leader and six years split between two casinos as a table games dealer/supervisor,  I am currently attending Learn Academy's Full Stack Software Program in my attempts to break into the tech industry.  I have done and experienced my professional career have set me up to be a solid team player with exceptional leadership skills, a mastery of interpersonal communication, and a keen attention to detail.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="w-300 h-300 rounded-full object-cover object-center rounded"
            alt="lightbulb and plants"
            src="https://blog.richardvanhooijdonk.com/wp-content/uploads/2019/05/shutterstock_764422441-min-700x460hgh.jpg"
          />
        </div>
      </div>
    </section>
  );
}