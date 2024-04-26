import Header from "../components/header";
import Facts from "../components/Facts";
import Footer from "../components/footer";
import Conditions from "../components/conditions";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { conditions } from "./conditions";

function Home() {
  console.log({ conditions });
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
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <p className="p-4">
                Start your meals with a salad or a bowl of soup to help control
                your appetite and prevent overeating. Your waistline will thank
                you!
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p class="p-4">
                Love your waakye? Try adding some grilled vegetables like
                zucchini and eggplant for added flavor and nutrition. Your taste
                buds will thank you!
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p class="p-4">
                Make water your go-to drink! Cut down on sugary sodas and juices
                by quenching your thirst with refreshing H2O. Your body will
                thank you!
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p class="p-4">
                Enjoy traditional Ghanaian snacks like koose or akara made with
                beans for a protein-packed treat!
              </p>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <p class="p-4">
                Did you know that adding more leafy greens like kontomire and
                spinach to your diet can boost your iron levels and keep you
                energized?
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
                Feeling tired? Boost your energy levels with a handful of
                almonds or a slice of whole-grain bread topped with peanut
                butter.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <p class="p-4">
                Eating out? Look for dishes that are steamed, boiled, or grilled
                instead of fried. Your waistline will thank you later!
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p class="p-4">
                Cut down on salt by using herbs and spices like basil, thyme,
                and rosemary to flavor your meals. Your heart will thank you!
              </p>
            </SwiperSlide>

            <SwiperSlide>
              <p class="p-4">
                Opt for homemade soups and stews with plenty of vegetables &
                lean proteins for a comforting yet nutritious meal.
              </p>
            </SwiperSlide>

            <SwiperSlide>
              <p class="p-4">
                Include a source of protein in each meal, such as grilled fish,
                tofu, or beans, to help you feel full and satisfied.
              </p>
            </SwiperSlide>

            <SwiperSlide>
              <p class="p-4">
                Did you know that adding more leafy greens like kontomire and
                spinach to your diet can boost your iron levels and keep you
                energized?
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <Swiper className="mySwiper" modules={[Autoplay]}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  >
            {conditions.map((data) => {
              return (
                <SwiperSlide
                  
                >
                  <div className="flex flex-col gap-10 p-2">
                    <span className="underline">{data.title}</span>
                    <span className="text-[19px]">{data.description}</span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      <section>
        <Facts />

        <div className="bg-gray-100">
          <div className="">
            <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div class="max-w-lg">
                  <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    About Us
                  </h2>
                  <p class="mt-4 text-gray-600 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    quis eros at lacus feugiat hendrerit sed ut tortor.
                    Suspendisse et magna quis elit efficitur consequat. Mauris
                    eleifend velit a pretium iaculis. Donec sagittis velit et
                    magna euismod, vel aliquet nulla malesuada. Nunc pharetra
                    massa lectus, a fermentum arcu volutpat vel.
                  </p>
                  <div class="mt-8">
                    <a
                      href="#"
                      class="text-blue-500 hover:text-blue-600 font-medium"
                    >
                      Learn more about us
                      <span class="ml-2">&#8594;</span>
                    </a>
                  </div>
                </div>
                <div class="mt-12 md:mt-0">
                  <img
                    src="https://i.pinimg.com/564x/cc/4a/89/cc4a899fec592a8216e9c42a17b2e929.jpg"
                    alt="About Us Image"
                    class="object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Dignissim fusce tortor, ac sed malesuada blandit.
              </p>
            </div>

            <div class="flex flex-wrap flex-col items-center justify-center px-6">
              <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-300">
                Nutrition Counselling
              </h1>

              <p class="mt-2 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Dignissim fusce tortor, ac sed malesuada blandit.
              </p>
            </div>

            <div class="flex flex-wrap flex-col items-center justify-center px-6">
              <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-300">
                Meal Planning
              </h1>

              <p class="mt-2 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Dignissim fusce tortor, ac sed malesuada blandit.
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
