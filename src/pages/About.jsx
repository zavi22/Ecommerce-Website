import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1='About' text2='Us' />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt="About Us" className='w-full md:max-w-112.5' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p className='text-lg'>Welcome to our online clothing store! We are passionate about fashion and committed to providing you with the latest trends and timeless styles. Our mission is to offer high-quality, stylish clothing that empowers you to express your unique personality and confidence.</p>
          <p className='text-lg'>At our store, we believe that fashion is more than just clothing; it's a form of self-expression. We curate a diverse collection of clothing for men</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At our store, we believe that fashion is more than just clothing; it's a form of self-expression. We curate a diverse collection of clothing for men</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1='Why' text2='Choose Us' />
      </div>
      <div className='flex flex-col md:flex-row text-sm my-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-500'>We are committed to providing our customers with high-quality products. Each item in our collection is carefully selected and undergoes rigorous quality checks to ensure that it meets our standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-500'>We are committed to providing our customers with high-quality products. Each item in our collection is carefully selected and undergoes rigorous quality checks to ensure that it meets our standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-500'>We are committed to providing our customers with high-quality products. Each item in our collection is carefully selected and undergoes rigorous quality checks to ensure that it meets our standards.</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About
