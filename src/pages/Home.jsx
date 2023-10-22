import Footer from "../components/Footer";
import Products from "../components/Products";

const Home = () => {
    return ( 
        <div className="home">
            <h2 className="text-red-500 text-center">Home page</h2>
            <Products/>
            <Footer/>
        </div>
     );
}
 
export default Home;