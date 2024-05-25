import React from 'react'

const Ecommerce = () => {


   const opacColor ={backgroundColor: 'rgba(240, 240, 240, 0.1)'}
  return (
   <>
   
  
<section  className="bg-gray-200 text-gray-900 body-font">
<div className="container mx-auto py-12 flex-col justify-center items-center h-s">
        <h2 className="text-3xl font-bold mb-6 text-center">Ranges</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* <div className="flex justify-center align-middle gap-20">  */}
            <div className="shadow-md rounded-lg overflow-hidden" style={opacColor}>
                <img src="https://domf5oio6qrcr.cloudfront.net/medialibrary/11435/b3c65ed2-1c85-4f8f-9bd0-b3503d592ffe.jpg" alt="Product 1" className="w-full h-64 object-cover object-center"/>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Make-up</h3>
                    <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Click to see more</button>
                </div>
            </div>
            
            <div className="shadow-md rounded-lg overflow-hidden" style={opacColor}>
                <img src="https://zeesy.pk/cdn/shop/files/Magnolia-Glimmer-black.jpg?v=1690805457&width=1080" alt="Product 2" className="w-full h-64 object-cover object-center"/>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Jewellery</h3>
                    <button className="mt-4 bg-indigo-500 text-white py-2 px-2 rounded-md hover:bg-indigo-600">Click to see more</button>
                </div>
            </div>
            
        </div>
    </div>
</section>
    



   
   </>
  )
}

export default Ecommerce