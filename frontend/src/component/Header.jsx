import React from 'react'
import { NavLink } from 'react-router-dom'
import logo1 from '../../public/Images/logo1.jpg'

const Header = () => {
  const opacColor ={backgroundColor: 'rgba(240, 240, 240, 0.1)'}
  return (
    <>
    {/*className="w-10 h-10 p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24"*/}
    
    <header className="text-gray800 bg-gray-200 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" style={opacColor}>
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
   <img src={logo1} alt="" className='w-20 h-20 text-white rounded-full p-2 bg-green'/>

    

      <span className="ml-3 text-xl text-black">Arwa's Beauty World</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
      <NavLink to="/" className="mr-5 hover:text-white">Home</NavLink>
      <NavLink to="/about" className="mr-5 hover:text-white">About</NavLink>
      <NavLink to="/cosmetics" className="mr-5 hover:text-white">Products</NavLink>
      {/* <NavLink to="/skincare" className="mr-5 hover:text-white">SkinCare</NavLink>
      <NavLink to="/jewelry" className="mr-5 hover:text-white">Jewelry</NavLink> */}
      <NavLink to="/contact" className="mr-5 hover:text-white">Contact</NavLink>
    </nav>
    <NavLink to="/login" className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Log In
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </NavLink>
    
  </div>
</header>
    
    </>
  )
}

export default Header