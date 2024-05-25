import React from 'react'

const Hero = () => {
  return (
    <>
    
    <section className="text-gray-400 bg-black body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img className="object-cover object-center rounded" alt="hero" src="https://st3.depositphotos.com/4814445/14902/i/450/depositphotos_149028175-stock-photo-set-of-cosmetics-and-jewellery.jpg"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-400">Arwa's Beauty world
        {/* <br className="hidden lg:inline-block"/> */}
      </h1>
      <p className="mb-8 leading-relaxed">•Step into a realm where beauty reigns supreme and elegance knows no bounds. Welcome to our sanctuary of allure, where every glance reveals a symphony of sophistication and every touch unveils a masterpiece of refinement. Nestled within these walls lies a treasure trove of enchantment, where cosmetics become canvases for creativity and jewels adorn like whispers of opulence. Here, beauty is not just a concept—it is a way of life. It is a celebration of individuality, a reflection of inner strength, and a testament to the limitless possibilities that lie within each of us. So come, immerse yourself in the splendor of our makeup and jewel store, and discover a world where every moment is an opportunity to shine.<br/>
Expert Advice: Get personalized recommendations and skincare tips from our beauty experts to enhance your daily routine.</p>


    </div>
  </div>
</section>

    </>
  )
}

export default Hero