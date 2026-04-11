import React from "react";
import {Link} from 'react-router-dom';
function Navigation()
{
    return(
        <nav>
            <ul>
                <li> 
                    <Link to='/home'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/registration'>
                         Registration
                    </Link>
                </li>
                <li> 
                    <Link to='/contact'>  
                         Contact
                    </Link>
                </li>
                <li>
                    <Link to='/login'>
                          Login
                    </Link>
                </li>
                <li>
                    <Link to="/donate">
                           Donate
                    </Link>
                </li>
                <li>
                    <Link to="/request">
                            Request
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navigation;