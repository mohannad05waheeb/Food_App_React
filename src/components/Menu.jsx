// Starting import images Food
import CardMenu from "./CardMenu";
import burger from'../assets/burger.jpg';
import pasta from'../assets/pasta.webp';
import lasagna from'../assets/lasagna.jfif';
import drink from'../assets/drink.jfif';
import pizza from'../assets/pizza.jpg'; 
import hotdog from'../assets/hotdog.jpg'; 
import juse from'../assets/juse.avif'; 
import biryani from'../assets/biryani.jfif';
import chocolate from'../assets/chocolate.jpg'; 
import icecream from'../assets/icecream.jfif';
import spanchi from'../assets/spanchi.jfif';
import snadwitch from'../assets/sandwitch.jpg';
// Ending import images Food
const Menu = () => {
    return (
        <section id="menu">
          <div className="mt-20">
          <div className="flex justify-center items-center">
            <h1 className="text-3xl font-bold">
            Our <span className="text-yellow-500 italic decoration-2 underline"> Menu </span>
            </h1>
          </div>
          <div className="parentCard flex">
            <CardMenu 
            srcImg={burger} 
            name='Burger'         
            />       
            <CardMenu 
            srcImg={pasta} 
            name='Pasta'             
            />     
            <CardMenu 
            srcImg={lasagna} 
            name='Lasagna'             
            />    
            <CardMenu 
            srcImg={drink} 
            name='Drink'             
            />    
          </div>
          <div className="parentCard flex">
            <CardMenu 
            srcImg={pizza} 
            name='Pizza'         
            />       
            <CardMenu 
            srcImg={hotdog} 
            name='Hot Dog'             
            />     
            <CardMenu 
            srcImg={juse} 
            name='Juse'             
            />    
            <CardMenu 
            srcImg={biryani} 
            name='Biryani'             
            />    
          </div>
          <div className="parentCard flex">
            <CardMenu 
            srcImg={chocolate} 
            name='Chocolate'   
            />       
            <CardMenu 
            srcImg={icecream} 
            name='Ice Cream'             
            />     
            <CardMenu 
            srcImg={spanchi} 
            name='Spanchi'             
            />    
            <CardMenu 
            srcImg={snadwitch} 
            name='Snadwitch'             
            />    
          </div>      
          </div>
        </section>
    );
};
export default Menu;