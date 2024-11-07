import { useState } from 'react';
import menu from '../assets/iconMenu.svg';
import close from '../assets/iconClose.svg';
import { FaSearchPlus } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "menu",
      title: "Menu",
    },
    {
      id: "gallary",
      title: "Gallary",
    },
    {
        id: "review",
        title: "Review",
    },
    {
        id: "order",
        title: "Order",
    },
];
const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);    
    const handleRefresh = () => window.location.reload();
    return (
        <section>
            <div className='z-10 w-full flex justify-between px-8 bg-white fixed top-0 shadow-sm p-4'>
                <div className='cursor-pointer' onClick={handleRefresh}>
                    <h1 className='text-yellow-500 flex items-center'>
                        Fo<span className='text-black rotate-[-150deg]'><FaSearchPlus /></span>d
                    </h1>
                </div>
                <div className='list'>
                    <nav>
                        <ul className='flex gap-6 items-center'>
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className='navbarHover navbarBorder'  
                                    onClick={() => setActive(nav.title)}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className='flex gap-2 items-center'>
                    <FaSearch className='navbarHover cursor-pointer' />
                    <MdFavorite className='navbarHover cursor-pointer' />
                    <FaShoppingCart className='navbarHover cursor-pointer' />
                    <img 
                        src={toggle ? close : menu} 
                        onClick={() => setToggle(!toggle)}
                        className='w-4 h-4 toggleMenu'
                        alt={toggle ? "close" : "menu"}
                    />           
                </div> 
            </div>   
            <div
              className={`bg-yellow-400 text-white w-full ${
              !toggle ? "hidden" : "flex" 
              }   p-6 bg-black-gradient absolute top-10 -right-4 mx-4 my-2 min-w-[140px] sidebar`}
            >
              <ul className="list-none flex justify-center items-start flex-1 flex-col">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => setActive(nav.title)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div> 
        </section>
    );
};
export default Navbar;