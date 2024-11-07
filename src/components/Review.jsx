import CardReview from "./CardReview";
import man1 from '../assets/man1.jpg'; 
import man2 from '../assets/man2.webp'; 
import man3 from '../assets/man3.jpg'; 
import man4 from '../assets/man4.webp'; 
const Review = () => {
    return (
        <section id="review">
           <div className="mt-20">
            <div className="flex justify-center items-center">
            <h1 className="text-3xl font-bold">
            Customer <span className="text-yellow-500 italic decoration-2 underline">Review</span>
            </h1>
            </div>   
            <div className="review flex mt-10 ">
                <CardReview srcImg={man1} />
                <CardReview srcImg={man2} />
                <CardReview srcImg={man3} />
                <CardReview srcImg={man4} /> 
            </div>        
            </div> 
        </section>
    );
};
export default Review;