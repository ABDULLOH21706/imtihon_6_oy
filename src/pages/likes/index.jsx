import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context/index2.jsx";
import add_to_card from "../../assets/add_to_card.png";
import { Rate } from "antd";

const Like = () => {
  const { state, dispatch } = useContext(ShopContext);
  const likedProducts = state.likedProducts;

  if (!likedProducts || likedProducts.length === 0) {
    return (
      <main className="flex items-center justify-center w-full">
        <div className="border border-[#E5E7EB] min-h-[490px] rounded p-[18px] w-[80%] mt-[10px]">
          <div className="flex flex-col items-center justify-center gap-5">
            <p className="text-[33px] max-[338px]:text-[22px] font-bold w-full m-[10px] max-[338px]:m-[0px]">
              Saqlangan mahsulotlar
            </p>
            <div className="flex flex-col items-center justify-center gap-4 w-full">
              <p className="text-[25px] max-[338px]:text-[16px] font-bold w-full m-[10px] max-[338px]:m-[0px]">
                Savatingiz bo'sh
              </p>
              <Link to="/" className="w-full">
                <button className="rounded bg-[#6682A9] hover:bg-[#1ED8D0] text-white h-[45px] px-10">
                  Asosiy sahifaga
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex items-center justify-center w-full">
      <div className="border-[1px] max-[338px]:border-[0px] border-[#E5E7EB] min-h-[490px] rounded-[5px] flex flex-col w-[80%] max-[380px]:w-[95%] lg:w-[90%] xl:w-[90%] 2xl:w-[80%] gap-[15px] p-[10px]">
        <p className="text-[33px] max-[338px]:text-[22px] font-bold w-full m-[10px] max-[338px]:m-[0px]">Saqlangan mahsulotlar</p>
        <div className="like_grid">
          {likedProducts.map((item) => {
            const isLiked = state.likedProducts.some((p) => p.id === item.id);

            const toggleLike = () => {
              dispatch({ type: "toggle_like", data: item });
            };

            const addToCart = () => {
              dispatch({ type: "add_product", data: item });
            };

            return (
              <div
                key={item.id}
                className="flex flex-col items-start gap-1 w-[250px] h-[500px] rounded relative border-[1px] border-[#E5E7EB] p-2"
              >
                <div className="w-full relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded transition-transform duration-300 hover:scale-105 w-full"
                    draggable="false"
                  />
                  <button
                    onClick={toggleLike}
                    className="absolute top-2 right-2"
                  >
                    <i
                      className={`fa-heart text-[20px] like_product ${
                        isLiked
                          ? "fa-solid text-red-500"
                          : "fa-regular text-[#bfbfbf]"
                      }`}
                    ></i>
                  </button>
                </div>

                <div className="w-full">
                  <h1 className="text-[15px] h-[50px] overflow-hidden">
                    {item.title}
                  </h1>
                </div>

                <div className="flex items-center gap-2 w-full">
                  <Rate
                    count={1}
                    className="text-[10px]"
                    defaultValue={item.rate}
                  />
                  <p className="text-[14px] font-medium">{item.rate}</p>
                  <code className="text-[14px]">({item.comment} sharxlar)</code>
                </div>

                <div className="flex items-end justify-between w-full mt-auto">
                  <div>
                    <del className="text-[#8D909A] text-[13px]">
                      {item.discount} so'm
                    </del>
                    <p className="font-semibold">{item.price} so'm</p>
                  </div>
                  <button
                    onClick={addToCart}
                    className="p-1 border border-[#D7D7D9] hover:bg-[#DEE0E5] rounded-full"
                  >
                    <img
                      src={add_to_card}
                      alt="Add to cart"
                      draggable="false"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Like;
