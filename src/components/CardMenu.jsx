import { FaStar } from "react-icons/fa";
const CardMenu = ({ srcImg , name }) => {
    return (
        <div className='h-96 cardMenu mt-4 w-1/4 ml-4 bg-white rounded-lg shadow-xl'>
            <img src={srcImg} alt={name} className='h-1/2 w-full p-2 hover:scale-105 transition-all' />
            <h2 className='text-yellow-500 font-bold text-center'>{name}</h2>
            <p className='text-center'>
            The most delicious, delicious and delicious {name}.
            </p>
            <p className='font-bold text-center'>
                $20.00
            </p>
            <div className='flex gap-1 justify-center mt-2'>
                <FaStar className='text-yellow-500' />  
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
            </div> 
            <div className='text-center mt-2'>
            <button className='text-white bg-black px-6 mb-2'>
                Order Now
            </button>
            </div>
        </div>
    );
};
export default CardMenu; 