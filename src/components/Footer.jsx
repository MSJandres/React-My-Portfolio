import { NavLink } from 'react-router';
import GitHubLogo from '../assets/images/GitHub_Logo.png';

export default function Footer() {
    return (
        <footer>
            <nav>
            <hr></hr>
            <ul>
                <li>
                <NavLink 
                to="/"
                className={({ isActive }) => isActive ? "footer-link-active" : "" }
                id="about"
                onClick={() => document.title="Michael Jandres | About"}
                end
                >
                About
                </NavLink>
                </li>

                <li>
                <NavLink 
                to="/portfolio"
                className={({ isActive }) => isActive ? "footer-link-active" : "" }
                id="portfolio"
                onClick={() => document.title="Michael Jandres | Portfolio"}
                end
                >
                Portfolio
                </NavLink> 
                </li>

                <li>
                <NavLink 
                to="/contact"
                className={({ isActive }) => isActive ? "footer-link-active" : "" }
                id="contact"
                onClick={() => document.title="Michael Jandres | Contact"}
                end
                >
                Contact
                </NavLink> 
                </li>

                <li>
                <NavLink 
                to="/resume"
                className={({ isActive }) => isActive ? "footer-link-active" : "" }
                id="resume"
                onClick={() => document.title="Michael Jandres | Resume"}
                end
                >
                Resume
                </NavLink> 
                </li>
            </ul>

            <a href="https://github.com/msjandres" target="_blank"><img id="github-logo" src={GitHubLogo} alt="GitHub Link"></img></a>
            </nav>
        </footer>
    );
}