import React from "react";
import payme from "../../assets/payme.png";
import click from "../../assets/click.png";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-[100%] mt-[50px] p-[20px]">
      <div className="flex justify-center footer w-[80%] max-[380px]:w-[95%] lg:w-[90%] xl:w-[90%] 2xl:w-[80%] gap-[20px]">
        <div className="flex flex-col items-center justify-between border-[#E9E9E9] border-[1px] rounded-[5px] gap-[12px] p-[10px]">
          <p className="w-[100%] text-[18px] font-[500]">Kontakt</p>
          <div className="flex flex-col items-center w-[100%] justify-center gap-[10px]">
            <div className="flex flex-col justify-center w-[100%] gap-[4px]">
              <p className="text-[#6682A9] text-[16px] font-[400]">
                Call-центр
              </p>
              <p className="text-[16px] font-[400]">+998-78 555-35-00</p>
            </div>
            <div className="flex flex-col justify-center w-[100%] gap-[4px]">
              <p className="text-[#6682A9] text-[16px] font-[400]">el.pochta</p>
              <p className="text-[16px] font-[400]">info@zon.uz</p>
            </div>
            <div className="flex flex-col justify-center w-[100%] gap-[4px]">
              <p className="text-[#6682A9] text-[16px] font-[400]">Ish vaqti</p>
              <div className="flex items-center justify-between gap-[12px]">
                <div className="flex flex-col justify-center gap-[2px]">
                  <p className="text-[16px] font-[400]">Ish kunlarida</p>
                  <p className="text-[16px] font-[400]">shanba</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-[2px]">
                  <p className="text-[16px] font-[400]">
                    09:00 dan 18:00 gacha
                  </p>
                  <p className="text-[16px] font-[400]">
                    09:00 dan 18:00 gacha
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-[12px]">
          <div className="flex flex-col items-center justify-center w-[100%] gap-[20px] p-[10px] border-[1px] border-[#E9E9E9] rounded-[5px]">
            <p className="text-[18px] font-[500] w-[100%]">
              Biz ijtimoiy tarmoqlardamiz
            </p>
            <div className="flex items-center justify-between w-[100%]">
              <i className="fa-brands fa-telegram text-[40px]"></i>
              <i className="fa-brands fa-youtube text-[40px]"></i>
              <i className="fa-brands fa-square-instagram text-[40px]"></i>
              <i className="fa-brands fa-facebook text-[40px]"></i>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-[100%] p-[15px] border-[1px] border-[#E9E9E9] rounded-[5px] gap-[10px]">
            <div className="flex items-center justify-between w-[100%]">
              <div className="w-[130px]">
                <img src={payme} alt="" draggable="false" />
              </div>
              <div className="w-[95px]">
                <img src={click} alt="" draggable="false" />
              </div>
            </div>
            <div className="flex items-center justify-center w-[100%]">
              <p className="text-[16px] font-[400] text-center">
                Zon.uz internet-do‘koni 2017-2024. Barcha huquqlar himoyalangan
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-[12px] p-[10px] border-[1px] border-[#E9E9E9] rounded-[5px]">
          <p className="text-[18px] font-[500] w-[100%]">Kompaniya</p>
          <div className="flex items-start justify-between gap-[10px] w-[100%]">
            <div className="flex flex-col justify-center gap-[10px]">
              <p className="text-[#007AA7] text-[16px] font-[400]">
                Biz haqimizda
              </p>
              <p className="text-[#007AA7] text-[16px] font-[400]">
                Tafsilotlar
              </p>
              <p className="text-[#007AA7] text-[16px] font-[400]">
                Kontaktlar
              </p>
              <p className="text-[#007AA7] text-[16px] font-[400]">
                Bo'sh ish o'rinlari
              </p>
              <p className="text-[#007AA7] text-[16px] font-[400]">
                Sayt xaritasi
              </p>
              <p className="text-[#007AA7] text-[16px] font-[400]">
                Ommaviy taklif
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#007AA7] text-[16px] font-[400]">
                Zon.uz da soting
              </p>
              <p className="text-[#007AA7] text-[16px] font-[400]">
                Yuridik shaxs sifatida sotib oling
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-[12px] p-[10px] border-[1px] border-[#E9E9E9] rounded-[5px]">
          <p className="text-[18px] font-[500]">Yordam</p>
          <div className="flex flex-col justify-center gap-[10px] w-[100%]">
            <p className="text-[#007AA7] text-[16px] font-[400]">Savollar va javoblar</p>
            <p className="text-[#007AA7] text-[16px] font-[400]">To'lov shartlari</p>
            <p className="text-[#007AA7] text-[16px] font-[400]">To'lov usuli</p>
            <p className="text-[#007AA7] text-[16px] font-[400]">Yetkazib berish</p>
            <p className="text-[#007AA7] text-[16px] font-[400]">Tovarlarni qaytarish</p>
            <p className="text-[#007AA7] text-[16px] font-[400]">Xizmat ko'rsatish markazlari</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
