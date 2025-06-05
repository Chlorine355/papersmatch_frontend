import { Outlet } from "react-router"
import { Header } from "../widgets/Header/Header"

export const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}