import {Link} from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            
            <nav>
                <div className="logo">Logo</div>
                <div className="links">
                    <Link to='/'><h4>Home</h4></Link>
                    <Link to='/contact'><h4>Contact</h4></Link>
                    <Link to='/about'><h4>About</h4></Link>
                    <Link to='/cart'><h4>Cart icon</h4></Link>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;