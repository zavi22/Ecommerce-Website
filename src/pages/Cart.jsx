import React, { useContext, useState, useEffect } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';

const Cart = () => {

  const { products, cartItems, currency, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        tempData.push({
          _id: items,
          size: item,
          qty: cartItems[items][item],
          // reason why we use [] instead of .notation is because items you are getting there key values are dynamic and not fixed. So you cannot use .notation to access them. You have to use [] notation to access them.
        });
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1='Your' text2='Cart' />
      </div>
      <div>
        {cartData.map((item) => {
          const product = products.find(p => p._id === item._id);
          return (<div key={`${item._id}-${item.size}`} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap'>
            <div className='flex items-start gap-6'>
              <img className='w-16 sm:w-20' src={product.image[0]} alt="" />
              <div>
                <p className='text-lg font-medium'>{product.name}</p>
                <div className='flex items-center gap-5 mt-2'>
                  <p>{currency}{product.price}</p>
                  <p className='px-2 sm:py-1 border bg-slate-50'>{item.size}</p>
                </div>
              </div>
            </div>
            <input onChange={(e) => {
              const value = e.target.value;
              if (value === "" || value === "0") { return; } else { updateQuantity(item._id, item.size, Number(value)); } // Do nothing for empty or zero
            }} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} value={item.qty} />
            <img onClick={() => updateQuantity(item._id, item.size, 0)} className='w-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
          </div>
          )
        })}
      </div>
    </div>
  )
}
export default Cart;
