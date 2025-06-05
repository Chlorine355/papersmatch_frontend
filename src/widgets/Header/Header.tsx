import { Link } from "react-router"
import './Header.css'

export const Header = () => {
    return <div className="header">
        <span className="hover-name logo">
            <Link to={'/'}>PapersMatch</Link>
        </span>
    </div>
}