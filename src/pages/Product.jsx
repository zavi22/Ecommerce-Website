import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500'>
      {/* product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* product image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => {
              return <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer'></img>
            })}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
        {/* products info */}
        <div className='flex-1'>
          <h1 className='text-2xl font-bold mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_dull_icon} alt="" />
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-600 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => {
                return <button onClick={() => setSize(item)} key={index} className={`border border-gray-300 px-3 py-1 cursor-pointer ${item === size ? 'border-orange-500' : ''}`}>{item}</button>
              })}
            </div>
          </div>
          <button onClick={()=> addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 mt-4 active:bg-gray-700 cursor-pointer'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy returns and exchange policy within7 days</p>
          </div>
        </div>
      </div>

      {/* Description and reviews section */}

      <div className='mt-20'>
        <div className='flex'>
          <b className='px-5 py-3 text-sm'>Description</b>
          <p className='px-5 py-3 text-sm'>Reviews {122}</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem recusandae mollitia velit porro, at ratione, dicta corporis obcaecati, nobis illo expedita labore minus! Eveniet deleniti vel sint eum laudantium earum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe accusantium odit maxime quas! Magnam, dolor culpa. Fugiat impedit quia nobis, culpa eaque maiores tempore fuga at animi! Porro, expedita!</p>
        </div>
      </div>

      {/* display related products */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : (
    <div className='opacity-0'>Loading...</div>
  )
}

export default Product
