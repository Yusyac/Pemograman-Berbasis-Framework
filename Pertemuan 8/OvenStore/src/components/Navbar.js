import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper blue">
                <div className="container">
                    <Link to="/" className="brand-logo">OvenStore</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Product</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;