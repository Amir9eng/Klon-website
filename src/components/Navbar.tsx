import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="flex bg-black text-white">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <p className="text-green-600 border-green-600 border-b-2">Lawn Care</p>
        <p>Herbicide</p>
        <p>Landscape</p>
        <p>Garden</p>
        <p>Trees</p>
        <p>Sprayers</p>
        <p>Snow Removal</p>
        <p>Careers</p>
        <div>
          <p>About</p>
        </div>
      </div>
      <div>
        <button className="bg-green-600 py-3 px-4">Quote or Services</button>
      </div>
    </nav>
  );
};

export default Navbar;
