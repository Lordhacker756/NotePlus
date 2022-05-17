import React from 'react'
import about_img from "../assets/about.jpg"
import dp from "../assets/dp.jfif"

const About = () => {
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
      <div class="rounded-lg h-64 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src={about_img}/>
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
          <img src={dp} className="rounded-full" alt="" />
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-white text-lg">Utkarsh Mishra</h2>
            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p class="text-base text-gray-400">ReactJS Developer | NextJS | MERN Stack</p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">I'm a 20 year old student pursuing B. Tech from AIML. I have 2 years of experience in the field of web development. I love creating innovative website and helping people find solution to their problem using my skills. If you are reading this, I'd love to connect with you💜. Below are my linkedin Id and My twitter ID.<br/> Drop me a hi👋🏻</p>
          <a href='https://www.linkedin.com/in/theutkarshmishra/' target="_blank" class="text-indigo-400 inline-flex items-center mx-4 border-[1px] px-3 py-2 rounded-lg border-indigo-400 cursor-pointer hover:bg-indigo-400 hover:text-white">Linkedin
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <a href='https://twitter.com/utkarsh_x_rudra' target="_blank" class="text-indigo-400 inline-flex items-center border-[1px] px-3 py-2 rounded-lg border-indigo-400 cursor-pointer hover:bg-indigo-400 hover:text-white">Twitter
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default About