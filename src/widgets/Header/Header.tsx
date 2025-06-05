import { Link } from "react-router"
import './Header.css'
import { SearchBar } from "../SearchBar/SearchBar";

export const Header = ({withSearchBar}: {withSearchBar?: boolean;}) => {
    return <div className="header">
        <span className="hover-name logo">
            <Link to={'/'}>PapersMatch</Link>
        </span>
        {withSearchBar && <SearchBar/>}
    </div>
}