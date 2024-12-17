import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./Navigation.css"

export default function Navigation () {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <>
            {location.pathname !== "/" && (
                <header className="nav-bar-non-home">
                    <nav>
                        <a onClick={() => navigate("/")}>Home</a>
                    </nav>
                </header>
            )}
            <Outlet />
        </>
    )
}

