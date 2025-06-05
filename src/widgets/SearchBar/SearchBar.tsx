import { useRef, type KeyboardEventHandler } from 'react';
import './SearchBar.css'
import { useNavigate } from 'react-router';

export const SearchBar = () => {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);
    const redirectToSearch = () => {
        if (inputRef.current?.value) navigate(`/search/${inputRef.current.value}/1`)
    }

    const enterHandler: KeyboardEventHandler = (event) => { if (event.key === 'Enter') { redirectToSearch() } }

    return (
        <div className="searchbar">
            <input ref={inputRef} onKeyDown={enterHandler} type="text" id="search" placeholder="Статья, автор, тема..." />
            <button id="sbutton" onClick={redirectToSearch}>Найти</button>
        </div>
    )
}