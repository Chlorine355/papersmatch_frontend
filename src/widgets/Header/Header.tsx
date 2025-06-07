import { Link, useNavigate } from "react-router"
import './Header.css'
import { SearchBar } from "../SearchBar/SearchBar";

export const Header = ({withSearchBar}: {withSearchBar?: boolean;}) => {
     const navigate = useNavigate();
    const redirectToSearch = (value: string) => {
        if (value) navigate(`/search/${value}/1`)
    }
    return <div className="header">
        <span className="hover-name logo">
            <Link to={'/'}>PapersMatch</Link>
        </span>
        {withSearchBar && <SearchBar onSearch={redirectToSearch}/>}
    </div>
}