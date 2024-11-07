import { FaStar } from "react-icons/fa";
const CardReview = ({ srcImg }) => {
    return (
        <div className='h-96 cardReview mt-4 w-1/4 ml-4 bg-white rounded-lg shadow-lg'>
         <div className='flex justify-center'>
         <img src={srcImg} alt={'man'} className='h-24 w-24 p-2 rounded-full' />
         </div> 
         <h1 className='text-center font-bold'>John Deo</h1>  
         <div className='flex gap-1 justify-center mt-2'>
                <FaStar className='text-yellow-500' />  
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
            </div> 
            <p className='text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus laboriosam magni quisquam fugit quia architecto obcaecati laudantium sunt similique velit veritatis officiis beatae cumque rem aliquam, quibusdam labore commodi harum?
            </p>
        </div>
    )
}
export default CardReview; 