const Order = () => { 
    return (
        <section id="order">
            <div className="mt-20 flex justify-center items-center">
            <h1 className="text-3xl font-bold">
            <span className="text-yellow-500 italic decoration-2 underline">Order</span> Now
            </h1>          
            </div>
            <div className="text-center">
                <form className="mt-10">
                    <input type="text" placeholder="You Name?" className="input" />
                    <br />
                    <input type="email" placeholder="You Email?" className="input" />
                    <br />
                    <input type="tel" placeholder="You Number Phone?" className="input" />
                    <br />
                    <input type="number" placeholder="You Much?" className="input" />
                    <br />
                    <input type="text" placeholder="You Order?" className="input" />
                    <br />
                    <input type="text" placeholder="You Address?" className="input" />
                    <br />
                    <button className="bg-yellow-500 text-nowrap text-white py-1 px-2 w-1/4 mb-4">Order Now</button> 
                </form>
            </div>         
        </section>
    );
}; 
export default Order;