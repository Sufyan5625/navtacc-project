import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'



const About = () => {
  return (
    <>
    <Header/>
   
    <section className="text-black  bg-cover bg-no-repeat bg-center bg-[url(https://t4.ftcdn.net/jpg/05/04/78/25/360_F_504782581_LHwsDbXlrFiiadWC4i15yV2lhbJnB8g0.jpg)] body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-black tracking-widest">About Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">At Radiant Elegance, we believe that beauty lies in the details. Our mission is to empower individuals to express their unique style and personality through our exquisite collection of makeup and jewelry. With a keen eye on the latest trends and a commitment to quality, we offer a diverse range of products that cater to every taste and occasion. From luxurious, handcrafted jewelry pieces to premium makeup essentials, our curated selection ensures that you feel confident and radiant every day. Our team of passionate experts is dedicated to providing exceptional service and personalized recommendations, making your shopping experience as delightful as our products. Join us at Radiant Elegance, where beauty meets artistry, and discover the perfect accents that enhance your natural allure.</p>
    </div>
    
  </div>
</section>


    <Footer/>
    </>
  )
}

export default About