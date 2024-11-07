// Starting import images Gallary Section
import icecream from'../assets/icecream-gallary.png';
import snadwitch from'../assets/sandwitch-gallary.png';
import pizza from'../assets/pizza-gallary.png';
import pasta from'../assets/pasta-gallary.png';
import drink from'../assets/drink-gallary.png';
import burger from'../assets/burger-gallary.png';
// Ending import images Gallary Section
const Gallary = () => {
    return (
        <section id="gallary">
           <div className="mt-20">
            <div className="flex justify-center items-center">
            <h1 className="text-3xl font-bold">
            Our <span className="text-yellow-500 italic decoration-2 underline">Gallary</span>
            </h1>
            </div>
            <div className='gallary flex relative gap-2 mt-10'>
                <div className='cardGallary w-1/3 image-container relative group'>
                <img src={snadwitch} alt="sandwitch" className='h-60 object-cover w-full h-auto transition-all duration-500' />
                <div className='h-full overlay absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 transform translate-y-1/4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500'>
                    <h1 className='text-yellow-500 italic text-center mb-6 font-bold'>Food</h1>
                    <p className='text-center mb-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, vero?
                    </p>
                    <div className='text-center'>
                    <button className='bg-yellow-500 py-1 px-6'>Order Now</button>
                    </div>
                </div>
                </div>
                <div className='cardGallary w-1/3 image-container relative group'>
                <img src={icecream} alt="icecream" className='h-60 object-cover w-full h-auto transition-all duration-500' />
                <div className='h-full overlay absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 transform translate-y-1/4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500'>
                    <h1 className='text-yellow-500 italic text-center mb-6 font-bold'>Food</h1>
                    <p className='text-center mb-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, vero?
                    </p>
                    <div className='text-center'>
                    <button className='bg-yellow-500 py-1 px-6'>Order Now</button>
                    </div>
                </div>
                </div>
                <div className='cardGallary w-1/3 image-container relative group'>
                <img src={pizza} alt="pizza" className='h-60 object-cover w-full h-auto transition-all duration-500' />
                <div className='h-full overlay absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 transform translate-y-1/4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500'>
                    <h1 className='text-yellow-500 italic text-center mb-6 font-bold'>Food</h1>
                    <p className='text-center mb-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, vero?
                    </p>
                    <div className='text-center'>
                    <button className='bg-yellow-500 py-1 px-6'>Order Now</button>
                    </div>
                </div>
                </div>          
            </div>
            </div>        
            <div className='overflow-hidden gallary flex relative gap-2 mt-10'>
                <div className='h-96 cardGallary w-1/3 image-container relative group'>
                <img src={pasta} alt="pasta" className=' object-cover w-full transition-all duration-500' />
                <div className='h-full overlay absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 transform translate-y-1/4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500'>
                    <h1 className='text-yellow-500 italic text-center mb-6 font-bold'>Food</h1>
                    <p className='text-center mb-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, vero?
                    </p>
                    <div className='text-center'>
                    <button className='bg-yellow-500 py-1 px-6'>Order Now</button>
                    </div>
                </div>
                </div>
                <div className='cardGallary w-1/3 image-container relative group overflow-hidden'>
                        <img src={drink} alt="sandwitch" className='w-full h-96 object-cover transition-all duration-500' />
                        <div className='overlay absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-4 transform translate-y-1/4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500'>
                            <h1 className='text-yellow-500 italic text-center mb-6 font-bold'>Food</h1>
                            <p className='text-center mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, vero?</p>
                            <div className='text-center'>
                                <button className='bg-yellow-500 py-1 px-6'>Order Now</button>
                            </div>
                        </div>
                    </div>

                <div className='h-96 cardGallary w-1/3 image-container relative group'>
                <img src={burger} alt="burger" className='h-60 object-cover w-full h-auto transition-all duration-500' />
                <div className='h-full overlay absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 transform translate-y-1/4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500'>
                    <h1 className='text-yellow-500 italic text-center mb-6 font-bold'>Food</h1>
                    <p className='text-center mb-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, vero?
                    </p>
                    <div className='text-center'>
                    <button className='bg-yellow-500 py-1 px-6'>Order Now</button>
                    </div>
                </div>
                </div>          
            </div>           
        </section>
    );
}; 
export default Gallary; 