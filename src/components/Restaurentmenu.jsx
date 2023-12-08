import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SWIGGY_RESAUTRANT_DETAILS } from '../constant';
import { MENU_ITEM_TYPE_KEY } from '../constant';
import { IMG_CDN } from '../constant';
import { CiLocationOn } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { LuSquareDot } from "react-icons/lu";
import { BiCaretUpSquare } from "react-icons/bi";
import {useDispatch, useSelector} from 'react-redux'
import { addItem, removeItem } from '../redux/slices/cartSlice';

const Restaurentmenu = () => {
  const dispatch = useDispatch()
  const cart = useSelector((store)=> store.cart )

    const {id} = useParams();
    const [restaurant, setRestaurant] = useState({});
  const [menuItems, setMenuItems] = useState([]);
async function getMenuData() {
    console.log(id)
    let data = await fetch(`${SWIGGY_RESAUTRANT_DETAILS}${id}`);
    let res = await data.json();
    let result = await res?.data?.cards[0]?.card?.card?.info;
    setRestaurant(result);
    getResMenu(res);
  }

function getResMenu(res){
      setMenuItems(res?.data?.cards.find(x=> x.groupedCard)?.
      groupedCard?.cardGroupMap?.REGULAR?.
      cards?.map(x => x.card?.card)?.
      filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
      map(x=> x.itemCards).flat().map(x=> x.card?.info) || [])
}
    useEffect(()=>{
      getMenuData()
    },[])
    console.log(restaurant)
    console.log(menuItems)

    const addfooditem = (menu) => {
dispatch(addItem(menu))
    }

    const removefooditem = (menu) => {
      dispatch(removeItem(menu.id))
          }
  return (
    <div> 
      
<div class="flex flex-col ml-[140px] mr-8 mt-8 mb-8 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-[80%] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-[500px] md:rounded-none md:rounded-s-lg" src = {IMG_CDN + restaurant.cloudinaryImageId} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{restaurant.name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{restaurant?.cuisines?.join(", ").slice(0,35)}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center"><CiLocationOn fill='red'/> {restaurant.locality
}  <span className='ml-5 flex items-center'><CiStar fill='yellow'/> {restaurant.totalRatingsString}</span></p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Delivery Time :{restaurant?.sla?.maxDeliveryTime
} Min</p>
    </div>
</div>
<div className='flex flex-wrap justify-center items-center'>
{
  menuItems.map((menu)=>(
  

<div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 scale-95 hover:scale-100 hover:cursor-pointer">
    <div>
        <img className="rounded-t-lg" src={IMG_CDN + menu?.imageId } alt="" />
    </div>
    <div className="p-5">
        <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{menu?.name.slice(0,25)}</h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Category: {menu?.category}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center">
        {menu?.itemAttribute?.vegClassifier == "NONVEG" ? (
                      <BiCaretUpSquare fontSize={20} color="red" />
                    ) : (
                      <LuSquareDot fontSize={20} color="green" />
                    )}

{menu?.itemAttribute?.vegClassifier == "NONVEG" ? (
                      <b>NON-VEG</b>
                    ) : (
                    <b>VEG</b>
                    )}
        </p>
   <div className='flex justify-between'>
   <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#fd953f] rounded-lg hover:bg-[#fd953f] hover:cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Price : {menu?.price / 100}
           
        </div>
        {
cart.some((p)=> p.id == menu.id) ? (
  <button onClick={() => removefooditem(menu)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#fd953f] rounded-lg hover:bg-[#fd953f] hover:cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
REMOVE FROM CART
 
</button>
) : (
  <button onClick={() => addfooditem(menu)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#fd953f] rounded-lg hover:bg-[#fd953f] hover:cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
ADD TO CART
</button>
)


        }
      
   </div>
    </div>
</div>
 

  ))
}</div>

    </div>
  )
}

export default Restaurentmenu