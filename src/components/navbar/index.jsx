import React from "react";
import logo1 from "../../assets/logo1.png";
import work from "../../assets/work.png";
import phone from "../../assets/phone.png";
import logo from "../../assets/logo.png";
import katalog from "../../assets/katalog.png";
import search from "../../assets/search.png";
import shop from "../../assets/shop.png";
import { Link } from "react-router-dom";
import uz from "../../assets/uz.png";
import katalog2 from "../../assets/katalog2.png";
import "../../index.css";
import "../../../tailwind.config.js";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center w-[100%]">
      <header className="flex flex-col items-center justify-center w-[80%] max-[380px]:w-[95%] lg:w-[90%] xl:w-[90%] 2xl:w-[80%] gap-[15px] p-[10px]">
        <div className="flex items-center justify-between w-[100%] max-[1130px]:hidden">
          <div className="flex items-center justify-center gap-[40px]">
            <div className="flex items-center justify-center gap-[5px]">
              <div>
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <p className="text-[#C2CDDD] text-[15px] font-[400]">Shahar</p>
              <a href="#" className="text-[#5D78FF] text-[15px] font-[400]">
                Toshkent
              </a>
            </div>
            <div className="flex items-center justify-center gap-[5px]">
              <div>
                <img src={logo1} alt="" draggable="false" />
              </div>
              <p className="text-[#5D78FF] text-[15px] font-[700]">
                Zon.uz da soting
              </p>
            </div>
            <div className="flex items-center justify-center gap-[5px]">
              <div>
                <img src={work} alt="" draggable="false" />
              </div>
              <p className="text-[#6682A9] text-[15px] font-[400]">
                Yuridik shaxs sifatida sotib oling
              </p>
            </div>
            <div>
              <select className="text-[#6682A9] text-[15px] font-[400] outline-none">
                <option value="1">Yordam</option>
                <option value="2">Yordam</option>
                <option value="3">Yordam</option>
              </select>
            </div>
            <div>
              <p className="text-[#6682A9] text-[15px] font-[400]">
                Kontaktlar
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[10px] cursor-pointer">
            <div className="w-[20px]">
              <img src={phone} alt="" draggable="false" />
            </div>
            <p className="text-[16px] font-[700]">+998-78 555-35-00</p>
          </div>
        </div>
        <div className="flex items-center justify-between w-[100%]">
          <div className="hidden max-[1130px]:flex items-center justify-center menu">
            <div className="flex items-center justify-between w-[100%]">
              <input type="checkbox" className="hidden" id="click" />
              <label htmlFor="click">
                <i className="fa-solid fa-bars text-[20px]"></i>
              </label>
              <div className="w-[100%] h-[100%] fixed z-2 flex flex-col items-center justify-center gap-[12px] p-[15px] bg-white list">
                <div className="flex items-center justify-start w-[100%]">
                  <label htmlFor="click">
                    <i className="fa-solid fa-xmark text-[20px]"></i>
                  </label>
                </div>
                <div className="flex flex-col items-center justify-center w-[100%] h-[100%] gap-[150px]">
                  <div className="flex flex-wrap items-center justify-center gap-[10px] min-[1030px]:gap-[2px]">
                    <Link
                      to={"Shop"}
                      className="max-[1055px]:flex hidden items-center justify-center cursor-pointer w-[43px] h-[40px] border-[#6682A9] hover:border-[2px] rounded-[5px]"
                    >
                      <div className="w-[25px]">
                        <img src={shop} alt="" draggable="false" />
                      </div>
                    </Link>
                    <div className="max-[1055px]:flex hidden items-center justify-center gap-[5px] cursor-pointer w-[73px] h-[40px] border-[#6682A9] hover:border-[2px] rounded-[5px]">
                      <div>
                        <div className="w-[25px]">
                          <img src={uz} alt="" draggable="false" />
                        </div>
                      </div>
                      <p className="text-[16px] font-[700]">UZ</p>
                    </div>
                    <div className="max-[1055px]:flex hidden items-center justify-center w-[40px] h-[40px] cursor-pointer border-[#6682A9] hover:border-[2px] rounded-[5px]">
                      <Link to={"Like"}>
                        <div className="flex items-center justify-center w-[20px]">
                          <i className="fa-solid fa-heart text-[#D1DAE6] text-[23px]"></i>
                        </div>
                      </Link>
                    </div>
                    <div className="max-[1055px]:flex hidden items-center justify-center w-[40px] h-[40px] cursor-pointer border-[#6682A9] hover:border-[2px] rounded-[5px]">
                      <div className="ml-[2px] w-[23px]">
                        <img src={katalog2} alt="" draggable="false" />
                      </div>
                    </div>
                    <div>
                      <button className="w-[82px] h-[40px] rounded-[5px] text-white hover:bg-[#7D92FD] bg-[#5D78FF]">
                        Login
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-between w-[100%] max-[1130px]:flex">
                    <div className="flex flex-col items-center justify-center gap-[20px]">
                      <div className="flex items-center justify-center gap-[5px]">
                        <div>
                          <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <p className="text-[#C2CDDD] text-[15px] font-[400]">
                          Shahar
                        </p>
                        <a
                          href="#"
                          className="text-[#5D78FF] text-[15px] font-[400]"
                        >
                          Toshkent
                        </a>
                      </div>
                      <div className="flex items-center justify-center gap-[5px]">
                        <div>
                          <img src={logo1} alt="" draggable="false" />
                        </div>
                        <p className="text-[#5D78FF] text-[15px] font-[700]">
                          Zon.uz da soting
                        </p>
                      </div>
                      <div className="flex items-center justify-center gap-[5px]">
                        <div>
                          <img src={work} alt="" draggable="false" />
                        </div>
                        <p className="text-[#6682A9] text-[15px] font-[400]">
                          Yuridik shaxs sifatida sotib oling
                        </p>
                      </div>
                      <div>
                        <select className="text-[#6682A9] text-[15px] font-[400] outline-none">
                          <option value="1">Yordam</option>
                          <option value="2">Yordam</option>
                          <option value="3">Yordam</option>
                        </select>
                      </div>
                      <div>
                        <p className="text-[#6682A9] text-[15px] font-[400]">
                          Kontaktlar
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-[10px] cursor-pointer">
                      <div className="w-[20px]">
                        <img src={phone} alt="" draggable="false" />
                      </div>
                      <p className="text-[16px] font-[700]">
                        +998-78 555-35-00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[160px] max-[720px]:hidden">
            <Link to={"/"}>
              <img src={logo} alt="" draggable="false" />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-[10px] w-[50%]">
            <button className="flex items-center justify-center gap-[7px] border-[2px] border-[#011C47] w-[127px] h-[40px] rounded-[5px] max-[1055px]:hidden">
              <div className="w-[20px]">
                <img src={katalog} alt="" draggable="false" />
              </div>
              Katalog
            </button>
            <div className="flex items-center justify-center w-[100%] max-[680px]:hidden">
              <input
                type="text"
                id="search"
                className="outline-none border-[1px] border-[#6682A9] text-[#6682A9] p-[13px] h-[40px] rounded-[5px] w-[94%] max-[1055px]:w-[87%] lg:w-[90%] xl:w-[92%] rounded-tr-[0px] rounded-br-[0px]"
                placeholder="Tovarni qidiring"
              />
              <label
                className="flex items-center justify-center w-[6%] max-[1055px]:w-[13%] lg:w-[10%] xl:w-[8%] h-[40px] bg-[#a3b2c7] cursor-pointer rounded-tr-[5px] rounded-br-[5px]"
                htmlFor="search"
              >
                <div className="w-[20px]">
                  <img src={search} alt="" draggable="false" />
                </div>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[10px] min-[1030px]:gap-[2px]">
            <Link
              to={"Shop"}
              className="max-[1055px]:hidden flex items-center justify-center cursor-pointer w-[43px] h-[40px] border-[#6682A9] hover:border-[2px] rounded-[5px]"
            >
              <div className="w-[25px]">
                <img src={shop} alt="" draggable="false" />
              </div>
            </Link>
            <div className="max-[1055px]:hidden flex items-center justify-center gap-[5px] cursor-pointer w-[73px] h-[40px] border-[#6682A9] hover:border-[2px] rounded-[5px]">
              <div>
                <div className="w-[25px]">
                  <img src={uz} alt="" draggable="false" />
                </div>
              </div>
              <p className="text-[16px] font-[700]">UZ</p>
            </div>
            <div className="max-[1055px]:hidden flex items-center justify-center w-[40px] h-[40px] cursor-pointer border-[#6682A9] hover:border-[2px] rounded-[5px]">
              <Link to={"Like"}>
                <div className="flex items-center justify-center w-[20px]">
                  <i className="fa-solid fa-heart text-[#D1DAE6] text-[23px]"></i>
                </div>
              </Link>
            </div>
            <div className="max-[1055px]:hidden flex items-center justify-center w-[40px] h-[40px] cursor-pointer border-[#6682A9] hover:border-[2px] rounded-[5px]">
              <div className="ml-[2px] w-[23px]">
                <img src={katalog2} alt="" draggable="false" />
              </div>
            </div>
            <div>
              <button className="w-[82px] h-[40px] rounded-[5px] text-white hover:bg-[#7D92FD] bg-[#5D78FF]">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
