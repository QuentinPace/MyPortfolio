import { Outlet } from "react-router-dom";

export default function Navigation () {
    return (
        <>
            <header className="main-nav-bar">
                <div className="main-nav-bar-links">
                navybabay
                </div>
            </header>
            <Outlet />
        </>
    )
}

