import React from "react";
import {Link} from 'react-router-dom'


const Navbar=()=>{
    return(
        <div>
            <ul className="Navbar-ul">
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/about">About</Link></li>
                <li><Link to ="/project">Company</Link></li>
                <li><Link to ="/achivement">Service</Link></li>
                <li><Link to ="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}
export default Navbar;