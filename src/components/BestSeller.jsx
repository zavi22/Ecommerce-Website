import React, { useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useEffect } from 'react'
import Title from './Title'
import ProductItems from './ProductItems'

const BestSeller = () => {

    const { products } = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller));
        setBestSeller(bestProduct);
    }, [])

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'Best'} text2={'Sellers'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quae eos suscipit debitis cupiditate eaque sit neque. Eveniet tempore eum et earum, labore repellendus obcaecati repellat dignissimos perspiciatis odit. Voluptates!
                </p>
            </div>

            {/* Rendering Products */}

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {bestSeller.map((item, index) => {
                    return <ProductItems
                        key={index}
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                })}

                { // Diff between curly and round brackets

                /* // 1️⃣ With parentheses () → implicit return
                const add = (a, b) => a + b;

                // 2️⃣ With curly braces {} → block body
                const add = (a, b) => {
                    return a + b;   
                }; */

                // you cant show thing inside curly brackets without returning it
                }
            </div>
        </div>
    )
}

export default BestSeller
