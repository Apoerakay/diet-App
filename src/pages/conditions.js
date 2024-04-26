import { useState, useEffect } from "react";
import axios from "axios";


export const conditions = [
  {
    title: "Hypertension",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    title: "Diabetes",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    title: "Cardiovacular Accident",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    title: "Gastric Ulcer",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    title: "Iron Deficiency Anaemia",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    title: "Vitamin A deficiency",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    title: "Obesity",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
];

function Condition() {
  return (
    <>
      <section class=" bg-gray-100">
        <div class="py-10  sm:py-16 block lg:py-24 relative bg-opacity-50  z-40  ">
          <div class="relative mx-auto h-full px-4 pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div class=" absolute  top-0 -right-1/4 z-0  opacity-10 "></div>

            <div class=" absolute -bottom-0 -left-1/4 z-0  opacity-10 "></div>
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
              <div class="max-w-xl mx-auto text-center">
                <div class="inline-flex px-4 py-1.5 mx-auto rounded-full  ">
                  <p class="text-4xl font-semibold tracking-widest text-g uppercase">
                    Conditions:
                  </p>
                </div>
                <p class="mt-4 text-base leading-relaxed text-gray-600 group-hover:text-white">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit..
                </p>
              </div>
              <div class="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20   ">
                {conditions.map((data) => {
                  return (
                    <>
                      <a
                        href="#"
                        class="transition-all  duration-1000 bg-white hover:bg-blue-500  hover:shadow-xl m-2 p-4 relative z-40 group  "
                      >
                        <div class=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                        <div class="py-2 px-9 relative  ">
                          <h3 class="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                            {data.title}
                          </h3>
                          <p class="mt-4 text-base text-gray-600 group-hover:text-white  ">
                            {data.description}
                          </p>
                        </div>
                      </a>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Condition;
