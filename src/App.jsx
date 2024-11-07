import './app.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Gallary from './components/Gallary';
import Menu from './components/Menu';
import Order from './components/Order';
import Review from './components/Review';
import Footer from './components/Footer';
function App() {
  return (
    <div className='w-full overflow-hidden mt-20'> 
    <Navbar />   
    <Home />
    <About /> 
    <Menu />
    <Gallary />
    <Review />
    <Order /> 
    <Footer />
    </div>
  );
};
export default App