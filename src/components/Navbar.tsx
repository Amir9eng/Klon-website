import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false)


  //function for changing toggle state
  const handleModal = () => {
    setToggle(prev => !prev)
  }
  return (
    <header className="flex items-center justify-between text-white bg-black px-11 h-[110px]">
      <div>
        <img src="/assets/logo.png" alt="" />
      </div>
      <nav className="hidden lg:flex items-center">
        <ul className="flex items-center gap-11">
          <li><a href="#LawnCare" className="pb-1 text-sm font-semibold text-green-600 border-b-2 border-green-600">Lawn Care</a></li>
          <li><a href="#Herbicide">Herbicide</a></li>
          <li><a href="#Landscape">Landscape</a></li>
          <li><a href="#Garden">Garden</a></li>
          <li><a href="#Trees">Trees</a></li>
          <li><a href="#Sprayers">Sprayers</a></li>
          <li><a href="#SnowRemoval">Snow Removal</a></li>
          <li><a href="#Careers">Careers</a></li>
          <li><a href="#About">About</a></li>
        </ul>
      </nav>
      <button className="lg:flex items-center px-4 py-3 bg-green-600 rounded-md gap-[14px] hidden">
        <img src="/assets/Notebook.svg" alt="notebook" />
        <span className="md:hidden xl:block">Quote or Services</span>
      </button>
      {!toggle && <FaBars className="text-2xl cursor-pointer lg:hidden" onClick={handleModal} />}
      {/* rendering Times Icon with toggle condition */}
      {toggle && <FaTimes className="text-2xl cursor-pointer lg:hidden" onClick={handleModal} />}
      {
        toggle &&
        <div className='fixed left-0 z-20 w-full min-h-full text-2xl font-bold text-center bg-black font-quicksand top-20'>
          <ul className="flex flex-col justify-center items-center gap-11">
            <li><a href="#LawnCare" className="pb-1 font-semibold text-green-600 border-b-2 border-green-600">Lawn Care</a></li>
            <li><a href="#Herbicide">Herbicide</a></li>
            <li><a href="#Landscape">Landscape</a></li>
            <li><a href="#Garden">Garden</a></li>
            <li><a href="#Trees">Trees</a></li>
            <li><a href="#Sprayers">Sprayers</a></li>
            <li><a href="#SnowRemoval">Snow Removal</a></li>
            <li><a href="#Careers">Careers</a></li>
            <li><a href="#About">About</a></li>
          </ul>
        </div>
      }
    </header>
  );
};

export default Navbar;
