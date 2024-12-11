import { NavLink } from 'react-router';
import { useEffect } from 'react';

function NavTabs() {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) => 
                            isActive ? "active-link" : ""
                        }
                        id='about'
                        onClick={() => document.title="Michael Jandres | About"}
                        end
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/portfolio'
                        className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }
                        onClick={() => document.title="Michael Jandres | Portfolio"}
                        id='portfolio'
                    >
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }
                        onClick={() => document.title="Michael Jandres | Contact"}
                        id='contact'
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/resume'
                        className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }
                        onClick={() => document.title="Michael Jandres | Resume"}
                        id='resume'
                    >
                        Resume
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavTabs;