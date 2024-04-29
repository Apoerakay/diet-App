import Header from "../components/header";
import Facts from "../components/Facts";
import Footer from "../components/footer";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Autoplay } from "swiper/modules";
// import { conditions } from "./conditions";

function Home() {
  // console.log({ conditions });

  const [conditions, setConditions]= useState([])
  const url = "http://localhost:8000/api/Conditions"
  const getConditions = async () => {
    const conditionsData = await fetch("http://localhost:8000/api/Conditions").then((response)=>response.json()).then((conditionsDataaa)=>{console.log(conditionsDataaa) 
    setConditions(conditionsDataaa)})
   
    
  }
  useEffect(()=>{getConditions()}, [])
  return (
    <>
      <Header />

      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl bg-gray-100 pt-[50px] text-center">
        Nutritional Tips
      </h1>
      <section className="p-24 bg-gray-100 flex justify-center items-center gap-[300px]">
        <div>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <p className="p-4">
              Physical activity helps lower blood sugar levels by increasing insulin sensitivity, allowing cells to use glucose more effectively. This can lead to better overall blood sugar management.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p class="p-4">
              While moderate caffeine intake is generally safe for most people, excessive caffeine consumption can temporarily raise blood pressure. 
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p class="p-4">
              Pay attention to portion sizes and avoid oversized servings. Use smaller plates, bowls, and utensils to help control portions and prevent overeating.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p class="p-4">
              Consume foods rich in iron to help replenish your body's iron stores. Good sources of iron include lean meats (like beef, pork, and chicken), seafood, beans, etc
              </p>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <p class="p-4">
              Opt for cooking methods that preserve the vitamin A content in foods. For example, steam or roast vegetables instead of boiling them, as boiling can cause some loss of water-soluble vitamins.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <p class="p-4">
                Cut down on processed meats like sausage and bacon. Opt for
                leaner proteins like grilled chicken or fish instead. Your heart
                will thank you!
              </p>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <p class="p-4">
              If you drink alcohol, do so in moderation. Excessive alcohol consumption can raise blood pressure and contribute to other health problems.
              </p>
            </SwiperSlide>
            

          </Swiper>
        </div>
        <div>
          <Swiper className="mySwiper" modules={[Autoplay]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  >
            {conditions.map((data) => {
              return (
                <SwiperSlide
                  
                >
                  <div className="flex flex-col  pt-[100px] font-bold text-4xl text-center">
                    <span className="underline">{data.title}</span>
                   
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      <section>
        <Facts />
        <div class="sm:flex items-center max-w-screen-xl">
    <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
            <img className="rounded-2xl" src="https://img.freepik.com/free-photo/healthy-food-medical-equipment_23-2148108966.jpg?t=st=1714264232~exp=1714267832~hmac=29be708b16d4aee228c7eead2906cf036debd03455de05c0aba417a1172af88a&w=740"/>
        </div>
    </div>
    <div class="sm:w-1/2 p-5">
        <div class="text">
            <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">Welcome to <span class="text-indigo-600">My Diet</span>
            </h2>
            <p class="text-gray-700 text-3xl font-bold">
            At My Diet, we're passionate about helping you achieve your health and wellness goals. Whether you want to lose weight, improve your eating habits, or simply lead a healthier lifestyle, our app is designed to support you every step of the way.
            </p>
        </div>
    </div>
</div>
      </section>

      <section class="bg-gray-100 dark:bg-gray-900">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center pt-8">
          Our Services
        </h2>
        <div class="container px-4 md:px-12 py-12 mx-auto">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 border rounded-lg shadow p-4 md:p-6 text-center">
            <div class="flex flex-wrap flex-col items-center justify-center px-1 md:px-6">
              <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-300">
                Diet Recommendation
              </h1>

              <p class="mt-2 text-gray-500 dark:text-gray-400">
               As our main mission, we are focused on recommending healthy and nutrient densed meals to the general public
              </p>
            </div>

            <div class="flex flex-wrap flex-col items-center justify-center px-6">
              <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-300">
                Nutrition Counselling
              </h1>

              <p class="mt-2 text-gray-500 dark:text-gray-400">
               We Offer nutritional counselling Services to individuals and cooperate bodies, where promoting good eating habits is our priority.
              </p>
            </div>

            <div class="flex flex-wrap flex-col items-center justify-center px-6">
              <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-300">
                Meal Planning
              </h1>

              <p class="mt-2 text-gray-500 dark:text-gray-400">
                We support individuals who need a well planned diet to lead a healthy eating habit.
              </p>
            </div>
          </div>
        </div>
      </section>
      

      <Footer />
    </>
  );
}

export default Home;
