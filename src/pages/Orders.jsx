import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {

  const { products, currency } = useContext(ShopContext);

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={"Your"} text2={"Orders"} />
      </div>
      <div>
        {
          products.slice(1, 4).map((item, index) => (
            <div className='flex flex-col sm:flex-row sm:items-center gap-4 border-b py-6' key={item._id || index}>
              <div className='flex items-start gap-6 text-sm flex-1'>
                <img className='w-20 h-20 sm:w-16 sm:h-16 object-cover rounded' src={item.image[0]} alt={item.name} />
                <div>
                  <p className='font-medium text-sm sm:text-base'>{item.name}</p>
                  <div className='text-gray-600 flex items-center gap-4 mt-2 text-sm'>
                    <span className='text-sm'>{currency}{item.price}</span>
                    <span>Quantity: 1</span>
                    <span>Size: M</span>
                  </div>
                  <p className='mt-2 text-xs text-gray-400'>Date: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                </div>
              </div>

              <div className='sm:w-48 w-full flex items-center sm:justify-center justify-start mt-3 sm:mt-0'>
                <div className='flex items-center gap-2 text-sm text-green-600'>
                  <span className='w-2 h-2 rounded-full bg-green-500 inline-block'></span>
                  <span>Ready to ship</span>
                </div>
              </div>

              <div className='sm:w-40 w-full flex sm:justify-end justify-start mt-3 sm:mt-0'>
                <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
