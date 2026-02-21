import React, { useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import { useEffect } from 'react';
import ProductItems from './ProductItems';

const LatestCollection = () => {

  const { products } = useContext(ShopContext);
  const [LatestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10))
  }, [])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'Latest'} text2={'Collection'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, odit. Iusto molestias aut eum architecto consectetur! Saepe similique obcaecati neque architecto? Tempora asperiores expedita quo sequi veniam ipsum non culpa.
        </p>
      </div>
      {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          LatestProducts.map((item, index) => (
            <ProductItems
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))

        }
      </div>
    </div>
  )
}

export default LatestCollection;
