import { Autoplay, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';


function Facts() {
  return (
    <Swiper className="bg-gray-100 "
    slidesPerView={2}
    spaceBetween={30}
    loop = {true}
    pagination={{
      clickable: true,
     
    }}
    modules={[Pagination, Autoplay ]}
    autoplay={{delay: 2000,
    disableOnInteraction: false}}
    
  >
     
      <div className="">
      
      <SwiperSlide className=" "><img src="https://img.freepik.com/premium-photo/delicious-buddha-bowl-with-grilled-chicken_338779-1589.jpg?w=740" alt="meal" className=" p-8 duration-500 hover:scale-105 hover:shadow-xl " /></SwiperSlide>
        <SwiperSlide  className=" "> <img src="https://images.unsplash.com/photo-1530912585210-7916cd026e59?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Product" class="duration-500 hover:scale-105 hover:shadow-xl  p-8" /></SwiperSlide>
        <SwiperSlide  className=" "> <img src="https://img.freepik.com/free-photo/top-view-plate-with-assortment-healthy-food_23-2148381259.jpg?t=st=1713351385~exp=1713354985~hmac=61fadfae0a8d109d9399b00ec0f69944d7949cd6c98085bc660c2521238bbeab&w=740"
                    alt="Product" class=" duration-500 hover:scale-105 hover:shadow-xl p-8" /></SwiperSlide>
        <SwiperSlide  className=" "><img src="https://img.freepik.com/free-photo/fresh-fruit-berry-salad-healthy-eating_114579-20466.jpg?t=st=1713352213~exp=1713355813~hmac=1889346437c4b27a950c82f083c86348c94bfa9e8e3bff154e732a693e986e16&w=740"
                    alt="Product" class="p-8 duration-500 hover:scale-105 hover:shadow-xl" /></SwiperSlide>
        <SwiperSlide  className=" "> <img src="https://jollofhutdxb.com/wp-content/uploads/2023/06/6F89C53B-189B-4C54-88AD-6308463FAF1A.jpeg"
                    alt="Product" class="p-8" /></SwiperSlide>

<SwiperSlide  className=" "> <img src="https://img.freepik.com/free-photo/white-plate-oatmeal-porridge-with-slices-pear_114579-63790.jpg?t=st=1713745862~exp=1713749462~hmac=3fc8258636e390438fa9c0a0251b7c6a7c30df1f46f17304b59bc45ed4dd1371&w=740"
                    alt="Product" class="p-8 duration-500 hover:scale-105 hover:shadow-xl" /></SwiperSlide>
   <SwiperSlide  className=" "> <img src="https://img.freepik.com/free-photo/side-view-pilaf-with-stewed-beef-meat-plate_141793-5057.jpg?t=st=1713746251~exp=1713749851~hmac=a95c6762fa83c633a10d49bae97ef9e0159d62029c8ffee0fa8fbf79edd50080&w=740"
                    alt="Product" class="p-8" /></SwiperSlide>
                    
                    
        </div>

     
    </Swiper>
  );
}

export default Facts;
