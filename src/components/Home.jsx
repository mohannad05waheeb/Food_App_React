import burger from '../assets/burger-home.png';  
import Button from './Button';
const Home = () => {
    return (
        <section id="home"> 
        <div className='home flex items-center justify-center gap-40'>
            <div>
                <h1 className='text-4xl font-bold mb-6'>
                    Get Fresh <span className='text-yellow-500 italic'>Food</span><br />
                    in a Easy Way
                </h1>
                <p className='max-w-80 leading-6  '>
                We offer you the best, most delicious and most delicious types of food, such as meat, chicken, the distinctive Syrian shawarma, all kinds of fresh pizza and pies, and finally our very distinctive specialty, which is the burger.
                </p>
                <Button /> 
            </div>
            <div>
                <img src={burger} className='bg-white'/>
            </div>
        </div>                        
        </section>
    );
}; 
export default Home; 