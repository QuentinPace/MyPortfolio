import { Outlet, useLocation, useNavigate } from "react-router-dom";
import portfolioObj from "../../portfolioObj";
import "./Navigation.css"

export default function Navigation () {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <>
            {location.pathname !== "/" && (
                <header className="nav-bar-non-home">
                    <span className="title-name-container-nav"><span className="name-nav">{portfolioObj.name}</span> | {portfolioObj.jobTitle}</span>
                    <nav className="nav-nav-links">
                        <a onClick={() => navigate("/")}>Home</a>
                    </nav>
                </header>
            )}
            <Outlet />
        </>
    )
}

