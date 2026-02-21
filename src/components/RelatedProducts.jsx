import React, { useEffect, useContext, useState } from 'react'
import Title from './Title'
import ProductItems from './ProductItems'
import { ShopContext } from '../context/ShopContext'

const RelatedProducts = ({ category, subCategory }) => {
    const [relatedProducts, setRelatedProducts] = useState([])
    const { products } = useContext(ShopContext)

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice()
            productsCopy = productsCopy.filter(item => category === item.category && subCategory === item.subCategory)
            setRelatedProducts(productsCopy.slice(0, 5))
        }
    }, [products])
    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1="Related" text2="Products" />
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {relatedProducts.map((item, index) => {
                    return <ProductItems
                        key={index}
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                })}
            </div>
        </div>
    )
}

export default RelatedProducts
