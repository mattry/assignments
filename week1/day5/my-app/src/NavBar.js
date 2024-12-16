import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <h2>React Demos</h2>
            <div className="links">
                <Link to="/hello">Hello</Link>
                <Link to="/sdc">State Demo</Link>
                <Link to="/edc">Event Demo</Link>
                <Link to="/todo">To Do List</Link>
            </div>
        </div>
    )
}

export default NavBar;