import { useNavigate } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    };

    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo" onClick={navigateHome} >Mybooking</span>
                <div className="naviteams">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
