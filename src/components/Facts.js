import react from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});

function Facts() {
  return (
    <>
      <div class="swiper w-[500px] h-[200px] mt-16 mr-[460px]">
        <div class="swiper-wrapper">
          <div class="swiper-slide"> <img src="https://img.freepik.com/premium-photo/man-measures-blood-pressure-white-background-arterial-hypotension-hand-tonometer-close-up_170532-3247.jpg?w=740" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=" />
"/> </div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>

        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <div class="swiper-scrollbar"></div>
      </div>
      {/* <div id="default-carousel" class="relative w-1/2 pt-16" data-carousel="slide">

    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div class=" duration-700 ease-in-out" data-carousel-item>
            <img src="https://img.freepik.com/free-photo/closeup-shot-doctor-with-rubber-gloves-taking-blood-test-from-patient_181624-56107.jpg?t=st=1713432558~exp=1713436158~hmac=ac4741577fc0ec71ac597c34d6bb4c531ca73af0cb121abd123b90743b67c979&w=740" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://img.freepik.com/premium-photo/man-measures-blood-pressure-white-background-arterial-hypotension-hand-tonometer-close-up_170532-3247.jpg?w=740" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://img.freepik.com/free-photo/closeup-shot-doctor-with-rubber-gloves-taking-blood-test-from-patient_181624-56107.jpg?t=st=1713432558~exp=1713436158~hmac=ac4741577fc0ec71ac597c34d6bb4c531ca73af0cb121abd123b90743b67c979&w=740" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://img.freepik.com/free-photo/closeup-shot-doctor-with-rubber-gloves-taking-blood-test-from-patient_181624-56107.jpg?t=st=1713432558~exp=1713436158~hmac=ac4741577fc0ec71ac597c34d6bb4c531ca73af0cb121abd123b90743b67c979&w=740" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://img.freepik.com/free-photo/closeup-shot-doctor-with-rubber-gloves-taking-blood-test-from-patient_181624-56107.jpg?t=st=1713432558~exp=1713436158~hmac=ac4741577fc0ec71ac597c34d6bb4c531ca73af0cb121abd123b90743b67c979&w=740" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
    </div>
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>

    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div> */}
    </>
  );
}

export default Facts;
