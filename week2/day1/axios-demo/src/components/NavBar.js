import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <h2>React Demos</h2>
            <div className="links">
                <Link to="/getdemo">Get Demo</Link>
                <Link to="/postdemo">Post Demo</Link>
                <Link to="/patchdemo">Patch Demo</Link>
                <Link to="/deletedemo">Delete Demo</Link>
            </div>
        </div>
    )
}

export default NavBar;