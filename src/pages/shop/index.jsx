import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context/index2.jsx";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import add_to_card from "../../assets/add_to_card.png";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../../src/store/cartReducer.js";

const Shop = () => {
  const { state, dispatch } = useContext(ShopContext);
  const cart = state.cart;
  const likedProducts = state.likedProducts || [];

  const addToCart = (product) => {
    dispatch({ type: "add_product", data: product });
  };

  const toggleLike = (product) => {
    dispatch({ type: "toggle_like", data: product });
  };

  if (!cart || cart.length === 0) {
    return (
      <main className="flex flex-col items-center justify-center w-full">
        <div className="border border-[#E5E7EB] min-h-[490px] rounded-[5px] p-[18px] w-[80%] mt-[10px]">
          <div className="flex flex-col items-center justify-center gap-[20px] w-full">
            <p className="text-[33px] max-[338px]:text-[22px] font-bold w-full m-[10px] max-[338px]:m-[0px]">
              Savat
            </p>
            <div className="flex flex-col items-center justify-center w-full gap-[15px]">
              <p className="text-[25px] max-[338px]:text-[16px] font-bold w-full m-[10px] max-[338px]:m-[0px]">
                Savatingiz bo'sh
              </p>
              <Link to="/" className="w-full">
                <button className="rounded bg-[#6682A9] hover:bg-[#1ED8D0] text-white h-[45px] px-[40px]">
                  Asosiy sahifaga
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const shoppingCart = useSelector((state) => state.cart2);
  const total = getTotalPrice({ cart2: shoppingCart });

  return (
    <main className="flex flex-col items-center justify-center w-full">
      <div className="border-[1px] max-[338px]:border-[0px] border-[#E5E7EB] min-h-[490px] rounded-[5px] flex max-[1024px]:flex-col w-[80%] max-[380px]:w-[95%] lg:w-[90%] xl:w-[90%] 2xl:w-[80%] gap-[15px]">
        <div className="flex flex-col items-center justify-center w-[70%] max-[1024px]:w-[100%] gap-[15px] p-[15px] max-[450px]:p-[8px]">
          <h1 className="text-[33px] max-[338px]:text-[22px] font-bold w-full m-[10px] max-[338px]:m-[0px]">
            Savat
          </h1>
          <div className="w-[100%] shop_grid">
            {cart.map((item) => {
              const isLiked = likedProducts.some((p) => p.id === item.id);
              const inCart = state.cart.find((p) => p.id === item.id);

              return (
                <div key={item.id} className="flex flex-col items-center justify-center w-[100%]">
                  <div
                    className="flex flex-col w-[100%] items-start h-auto rounded relative border-[1px] gap-[20px] border-[#E5E7EB] p-2"
                  >
                    <div className="flex max-[650px]:flex-col items-center justify-center">
                      <div className="w-[280px] max-[450px]:w-[100%] m-[10px] relative">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="rounded transition-transform duration-300 hover:scale-105 w-full"
                          draggable="false"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center w-full">
                        <button
                          onClick={() => toggleLike(item)}
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
                        <h1 className="text-[22px] max-[450px]:text-[16px] w-[100%] h-[33px] max-[450px]:h-[25px] overflow-hidden">
                          {item.title}
                        </h1>
                        <div className="flex items-center gap-2 w-full">
                          <Rate
                            count={1}
                            className="text-[10px]"
                            defaultValue={item.rate}
                          />
                          <p className="text-[14px] font-medium">{item.rate}</p>
                          <code className="text-[14px]">
                            ({item.comment} sharxlar)
                          </code>
                        </div>
                        <div className="w-[100%]">
                          <del className="text-[#8D909A] text-[13px]">
                            {item.discount} so'm
                          </del>
                          <p className="font-semibold">{item.price} so'm</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-end justify-between w-full mt-auto">
                      {inCart ? (
                        <div className="flex items-center rounded-full mb-[10px] ml-[10px] gap-[30px] max-[450px]:gap-[12px]">
                          <button
                            className="flex items-center justify-center pb-[5px] max-[450px]:pr-[1px] max-[450px]:pb-[6px] w-[40px] h-[40px] max-[450px]:w-[30px] max-[450px]:h-[30px] border-[1px] border-red-400 text-red-400 rounded-[50px]"
                            onClick={() =>
                              dispatch({
                                type: "decrease_amount",
                                data: { id: item.id },
                              })
                            }
                            disabled={item.amount <= 1}
                          >
                            <p className="text-[33px] font-[500]">-</p>
                          </button>
                          <span className="text-[24px] font-[600]">
                            {inCart.amount}
                          </span>
                          <button
                            className="flex items-center justify-center pb-[5px] pr-[1px] w-[40px] h-[40px] max-[450px]:w-[30px] max-[450px]:h-[30px] border-[1px] border-[#6682A9] text-[#6682A9] rounded-[50px]"
                            onClick={() =>
                              dispatch({
                                type: "increase_amount",
                                data: { id: item.id },
                              })
                            }
                          >
                            <p className="text-[25px] font-[500]">+</p>
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(item)}
                          className="p-1 border border-[#D7D7D9] hover:bg-[#DEE0E5] rounded-full"
                        >
                          <img
                            src={add_to_card}
                            alt="Add to cart"
                            draggable="false"
                          />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative flex items-start justify-center w-[40%] max-[1024px]:w-[100%] h-auto">
          <div className="border-[1px] border-[#E5E7EB] flex flex-col items-center justify-start gap-[20px] p-[10px] w-[100%] h-auto rounded-[5px]">
            <div className="w-[100%] flex items-end justify-between">
              <p className="text-[35px] font-[700] max-[450px]:text-[22px]">
                Jami
              </p>
              <p className="text-[30px] font-[600] max-[450px]:text-[20px]">
                {total.toLocaleString()} so'm
              </p>
            </div>
            <div className="w-[100%] flex items-end justify-between">
              <p className="text-[23px] font-[600] max-[450px]:text-[20px]">
                Yetkazib berish
              </p>
              <p className="text-[20px] font-[600] max-[450px]:text-[18px]">
                bepul
              </p>
            </div>
            <div className="w-[100%] flex flex-col items-end justify-between gap-[10px]">
              <p className="text-[18px] font-[400] max-[450px]:text-[16px]">
                Mahsulotlarga buyurtma berish uchun ro'yxatdan o'tish kerak.
                Agar siz allaqachon ro'yxatdan o'tgan bo'lsangiz, hisobingizga
                kiring
              </p>
              <button className="w-[100%] bg-[#6682A9] text-white text-[20px] max-[450px]:text-[17px] font-[500] h-[45px] rounded-[6px]">
                Buyurtma
              </button>
            </div>
            <div className="flex items-start justify-center gap-[10px]">
              <input type="checkbox" id="roziman" className="m-[8px]" />
              <label htmlFor="roziman">
                <p className="max-[450px]:text-[16px]">
                  Men savdo maydonchasidan foydalanish shartlari va qaytarish
                  siyosati shartlariga roziman
                </p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
