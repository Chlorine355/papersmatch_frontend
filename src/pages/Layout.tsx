import { Outlet, useLocation } from "react-router"
import { Header } from "../widgets/Header/Header"

export const Layout = () => {
    const location = useLocation();
    return (
        <div className='app-container'>
            <Header withSearchBar={location.pathname.startsWith('/graph')} />
            <Outlet />
        </div>
    )
}