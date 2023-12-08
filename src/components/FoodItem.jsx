import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {removeItem} from "../redux/slices/cartSlice"
import {IMG_CDN} from "../constant"

import { BiCaretUpSquare } from "react-icons/bi";
import { LuSquareDot } from "react-icons/lu";
import {MdDelete} from "react-icons/md"
const FoodItem = ({ item }) => {
const cartdata = useSelector((store) => store.cart);
const dispatch = useDispatch();
const removeFromCart = () => {
  dispatch(removeItem(item.id));
}

console.log({item})
  return (
    <div>
      <div className="w-11/12 mt-10">
        <div className="flex justify-between">
          <div className="ml-11+11px">
          <img className="h-[120px] w-[250px] rounded-md shadow-md" src={`${IMG_CDN}${item.imageId}`}/>
          <div className="flex  items-center">
          <span> {item?.itemAttribute?.vegClassifier == "NONVEG" ? (
                      <BiCaretUpSquare fontSize={20} color="red" />
                    ) : (
                      <LuSquareDot fontSize={20} color="green" />
                    )}</span>
            <div className="font-bold text-lg mt-1 ml-1 text-[#fc9847]">{item.name.split("[")[0]}</div>
            </div>
            <h1 className=" text-md text-stone-500">{item.description.split("[")[0]}</h1> 
            <div className="flex gap-40">
          <h1 className="font-bold text-xl text-stone-900">₹ {item.price / 100}</h1> 
            {
            cartdata.some((p) => p.id == item.id) ? (
            <button onClick={removeFromCart}>
            <MdDelete fontSize={22} color="#EF3E3E"/>
            </button>
          ) : (
            <button>
              Add to Cart
            </button>
          )
        }
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
