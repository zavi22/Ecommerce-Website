import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title'
import { useEffect } from 'react';
import ProductItems from '../components/ProductItems'; 

const Collection = () => {

  const { products,search, showSearch, selectedCategory, setSelectedCategory } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavant')

  const toggleCategory = (event) => {
    if (category.includes(event.target.value)) {
      setCategory(prev => prev.filter(item => item !== event.target.value))
      //👉 filter() keeps items that return TRUE
      //👉 removes items that return FALSE
    }
    else {
      setCategory(prev => [...prev, event.target.value])
    }
  }
  const toggleSubCategory = (event) => {
    if (subCategory.includes(event.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== event.target.value))
      //👉 filter() keeps items that return TRUE
      //👉 removes items that return FALSE
    }
    else {
      setSubCategory(prev => [...prev, event.target.value])
      // Because:
      //👉 We must create a NEW array, not modify the old one.
      //So we:
      //copy old items → ...prev
      //add new item → event.target.value
      //wrap in [] → make a new array
    }
  }

  const applyFilter = () => {

    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilterProducts(productsCopy)
  }

  const sortProduct = ()=>{
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>{return a.price - b.price}))
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>{return b.price - a.price}))
        break;
    
      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch])

  useEffect(() => {
    sortProduct();
  }, [sortType])

  // Auto-select category when coming from navbar
  useEffect(() => {
    if (selectedCategory) {
      setCategory([selectedCategory])
      setSelectedCategory('')  // Reset so it doesn't auto-select on other visits
    }
  }, [selectedCategory])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter options */}
      <div className='min-w-60'>
        <p onClick={() => (setShowFilter(showFilter ? '' : 'hidden'))} className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filters
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ' '}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Categories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} checked={category.includes('Men')} onChange={toggleCategory} /> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} checked={category.includes('Women')} onChange={toggleCategory} /> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} checked={category.includes('Kids')} onChange={toggleCategory} /> Kids
            </p>
          </div>
        </div>
        {/* Subcategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} /> Top Wear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} /> Bottom Wear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} /> Winter Wear
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1='All' text2='Collections' />
          {/* Product sort */}
          <select onChange={(e)=>{return setSortType(e.target.value)}} className='border border-gray-300 text-sm px-2'>
            <option value="relavant">Sort by: Relavant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Map products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => {
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
    </div>
  )
}

export default Collection
