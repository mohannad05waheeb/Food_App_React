import food from '../assets/food-about.png'; 
import Button from './Button';
const About = () => {
    return ( 
        <section id="about">
          <div className='about flex justify-center items-center gap-40'>      
            <div className='content-about'>
              <h1 className='text-4xl mb-6 font-bold'>
                <span className='text-yellow-500 italic title'>About</span> Us
              </h1>
              <h3 className='mb-6 font-bold text-xl why'>
                Why Choose us?
              </h3>
              <p className='max-w-96 leading-6 mb-16 disc'>
              <span className='text-yellow-500 italic'>"Food"</span> restaurant is an ideal destination for lovers of fine dining, as it combines high quality and exceptional taste in a sophisticated and attractive atmosphere. The restaurant features a variety of delicious dishes carefully prepared by professional chefs, using the best fresh ingredients. Modern decor and soft lighting add a unique touch that makes visitors feel comfortable and private. In addition to the excellent service provided by the friendly staff.
              </p>
              <Button />
            </div>
            <div>
              <img src={food} alt="Food" />
            </div>
            </div> 
        </section>    
    );
}; 
export default About; 