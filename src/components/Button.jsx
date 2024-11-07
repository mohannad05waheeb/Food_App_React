import { FaArrowRight } from "react-icons/fa";
const Button = () => {
    return (
        <a href="order">
        <button className='btn flex bg-yellow-500 text-white py-2 px-4 rounded-sm mt-6'>
        <div>
         Order Now
        </div>
        <div className='mt-1 ml-2 arrow-right'>
         <FaArrowRight />
        </div>
     </button>
        </a>
    );
};
export default Button; 