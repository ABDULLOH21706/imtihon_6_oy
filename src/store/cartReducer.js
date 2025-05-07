const initialState = []; // faqat array!

// Umumiy narxni hisoblash uchun yordamchi funksiya
const calculateTotalPrice = (cart) => {
  return cart.reduce((total, item) => {
    if (!item.price || !item.amount) {
      console.error("Item data is missing", item);
      return total; // umumiy narxni o'zgartirmaslik uchun
    }
    return total + item.price * item.amount;
  }, 0);
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "add_to_cart":
      return [...state, action.payload];

    case "increase_amount":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, amount: item.amount + 1 }
          : item
      );

    case "decrease_amount":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, amount: item.amount > 1 ? item.amount - 1 : 1 }
          : item
      );

    default:
      return state;
  }
}

// Umumiy narxni olish
export const getTotalPrice = (state) => {
  return calculateTotalPrice(state.cart2);
};
