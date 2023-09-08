import { ProductData } from "./ProductsData";

export const initialState = {
  basket: [],
  user: null,
};
export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return{
        ...state,user:action.user
      }
      break;
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket,action.item] };
      break;
    case "REMOVE_FROM_BASKET":
        let newBasket=[...state.basket];
        // console.log(newBasket)
        newBasket=newBasket.filter((item)=>item.id!==action.id);
      return {...state,basket:newBasket};
      break;
    default:
      return state;
  }
};
