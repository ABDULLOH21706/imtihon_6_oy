import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../index.css";
import { Navigation, Autoplay } from "swiper/modules";
import showcase_item2_1 from "../../assets/Background.png";
import showcase_item2_2 from "../../assets/Background-1.png";
import showcase_item2_3 from "../../assets/Background-2.png";
import showcase_item2_4 from "../../assets/Background-3.png";
import Card from "../home/card/index.jsx";
import { useAxiosGet } from "../../hooks/useAxios";
import maqola1 from "../../assets/maqola1.png";
import maqola2 from "../../assets/maqola2.png";
import maqola3 from "../../assets/maqola3.png";
import maqola4 from "../../assets/maqola4.png";
import maqola5 from "../../assets/maqola5.png";

const Home = () => {
  const { data } = useAxiosGet({ url: "/zon_product" });
  return (
    <main className="flex items-center justify-center w-[100%] mt-[20px]">
      <div className="flex flex-col items-center justify-center w-[80%] max-[380px]:w-[95%] lg:w-[90%] xl:w-[90%] 2xl:w-[80%]">
        <div className="flex flex-col items-center justify-center w-[100%] gap-[13px]">
          <div className="w-[100%] max-[678px]:hidden">
            <Swiper
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper rounded-[10px]"
            >
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={
                    "https://zon.uz/_next/static/media/inverter_protech-desktop.f5a74588.webp"
                  }
                  alt=""
                  draggable="false"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={
                    "https://zon.uz/_next/static/media/dewalt_new_desktop.1a3adcaf.webp"
                  }
                  alt=""
                  draggable="false"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={
                    "https://zon.uz/_next/static/media/resanta-desk.d0ae6da5.webp"
                  }
                  alt=""
                  draggable="false"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={
                    "https://zon.uz/_next/static/media/crown-desk.6b1b7d10.webp"
                  }
                  alt=""
                  draggable="false"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={
                    "https://zon.uz/_next/static/media/fubag-desk.8415d125.webp"
                  }
                  alt=""
                  draggable="false"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={
                    "https://zon.uz/_next/static/media/med-texnika.ce3e7d78.webp"
                  }
                  alt=""
                  draggable="false"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex flex-wrap items-center justify-center w-[100%] gap-[10px]">
            <div className="max-[678px]:w-[200px]">
              <img src={showcase_item2_1} alt="" draggable="false" />
            </div>
            <div className="max-[678px]:w-[200px]">
              <img src={showcase_item2_2} alt="" draggable="false" />
            </div>
            <div className="max-[678px]:w-[200px]">
              <img src={showcase_item2_3} alt="" draggable="false" />
            </div>
            <div className="max-[678px]:w-[200px]">
              <img src={showcase_item2_4} alt="" draggable="false" />
            </div>
          </div>
          <div className="mt-[10px] flex flex-wrap items-center justify-center w-[100%] gap-[13px]">
            <p className="text-[25px] font-[700] w-[100%]">Ommabop</p>
            <div className="w-[100%] flex items-center justify-center">
              <div className="product_grid">
                {data.map((value) => (
                  <Card key={value.id} {...value} />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-[50px] flex flex-col items-center justify-center w-[100%] gap-[30px]">
            <div className="flex items-center w-[100%] gap-[30px]">
              <p className="text-[23px] font-[500]">Maqolalar</p>
              <button className="rounded-[14px] border-[1px] border-[#1B7DA2] text-[#1B7DA2] p-[8px] flex items-center justify-center h-[33px]">
                Hammasini ko'rish
              </button>
            </div>
            <div className="maqola_grid">
              <div className="flex flex-col items-center cursor-pointer justify-center gap-[5px] w-[300px] border-[#E5E7EB] border-[1px]">
                <div className="w-[100%]">
                  <img src={maqola1} alt="" draggable="false" />
                </div>
                <div className="w-[100%] p-[10px]">
                  <p className="flex flex-col text-[18px] font-[400] h-[86px] overflow-hidden">
                    <span className="text-[#6682A9]">13.06.2023</span>
                    Виброметры для двигателей и механизмов
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center cursor-pointer justify-center gap-[5px] w-[300px] border-[#E5E7EB] border-[1px]">
                <div className="w-[100%]">
                  <img src={maqola2} alt="" draggable="false" />
                </div>
                <div className="w-[100%] p-[10px]">
                  <p className="flex flex-col text-[18px] font-[400] h-[86px] overflow-hidden">
                    <span className="text-[#6682A9]">11.06.2023</span>
                    Зачем нужен такой прибор, как лазерный тахометр?
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center cursor-pointer justify-center gap-[5px] w-[300px] border-[#E5E7EB] border-[1px]">
                <div className="w-[100%]">
                  <img src={maqola3} alt="" draggable="false" />
                </div>
                <div className="w-[100%] p-[10px]">
                  <p className="flex flex-col text-[18px] font-[400] h-[86px] overflow-hidden">
                    <span className="text-[#6682A9]">12.06.2023</span>
                    Частотный преобразователь — что такое и для чего он нужен
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center cursor-pointer justify-center gap-[5px] w-[300px] border-[#E5E7EB] border-[1px]">
                <div className="w-[100%]">
                  <img src={maqola4} alt="" draggable="false" />
                </div>
                <div className="w-[100%] p-[10px]">
                  <p className="flex flex-col text-[18px] font-[400] h-[86px] overflow-hidden">
                    <span className="text-[#6682A9]">10.04.2023</span>
                    Люксометр - Измеритель яркости и освещённости
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center cursor-pointer justify-center gap-[5px] w-[300px] border-[#E5E7EB] border-[1px]">
                <div className="w-[100%]">
                  <img src={maqola5} alt="" draggable="false" />
                </div>
                <div className="w-[100%] p-[10px]">
                  <p className="flex flex-col text-[18px] font-[400] h-[86px] overflow-hidden">
                    <span className="text-[#6682A9]">09.04.2023</span>
                    Термометр для измерения температуры объекта
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
