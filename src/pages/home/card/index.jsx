import { Rate } from "antd";
import React, { useContext } from "react";
import { ShopContext } from "../../../context/shop-context/index2.jsx";
import add_to_card from "../../../assets/add_to_card.png";

const Card = ({ id, title, price, img, description, rate, comment, discount, oyiga }) => {
  const { state, dispatch } = useContext(ShopContext);
  const likedProducts = state.likedProducts;

  const isLiked = likedProducts.some((item) => item.id === id);

  const toggleLike = () => {
    dispatch({ type: "toggle_like", data: { id, title, price, img, description, rate, comment, discount, oyiga } });
  };

  const addToCart = () => {
    dispatch({ type: "add_product", data: { id, title, price, img, description, rate, comment, discount, oyiga } });
  };

  return (
    <div className="border-[1px] border-[#E5E7EB] p-4 flex flex-col items-start justify-start gap-[5px] w-[250px] h-auto rounded-[9px] relative cursor-pointer">
      <div className="flex items-start justify-center w-full">
        <img
          src={img}
          alt={title}
          className="rounded-[9px] transition-transform duration-400 hover:scale-102"
          draggable="false"
        />
        <div className="absolute flex justify-end w-[250px] p-[12px]">
          <button onClick={toggleLike}>
            <i
              className={`fa-heart text-[20px] like_product ${
                isLiked ? "fa-solid text-red-500" : "fa-regular text-[#bfbfbf]"
              }`}
            ></i>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between w-[100%] gap-[5px]">
        <div className="w-full">
          <h1 className="text-[15px] w-[100%] h-[50px] overflow-hidden">{title}</h1>
        </div>
        <div className="flex flex-col items-center justify-center w-[100%] gap-[4px]">
          <div className="flex w-[100%] gap-[4px]">
            <Rate count={1} className="text-[10px]" defaultValue={rate} />
            <p className="text-[14px] font-[500]">{rate}</p>
            <code className="text-[14px] font-[400]">({comment} sharxlar)</code>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between w-[100%] h-[60px]">
        <div className="flex flex-col items-start justify-center w-[100%]">
          <del className="text-[#8D909A] text-[13px]">{discount} so'm</del>
          <p className="font-[500]">{price} so'm</p>
        </div>
        <button
          onClick={addToCart}
          className="flex items-center justify-center p-[5px] cursor-pointer border-[1px] border-[#D7D7D9] hover:bg-[#DEE0E5] rounded-[20px]"
        >
          <img src={add_to_card} alt="Add to cart" draggable="false" />
        </button>
      </div>
    </div>
  );
};

export default Card;
