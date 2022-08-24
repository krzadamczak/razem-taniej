import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
            </nav>
            <Outlet />
            <footer>All rights reserved</footer>
        </>
    );
}

export default App;
