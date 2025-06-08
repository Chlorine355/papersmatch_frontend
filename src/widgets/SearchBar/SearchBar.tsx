import { useState, type KeyboardEventHandler } from 'react';
import './SearchBar.css'

type SearchBarProps = {
    onSearch: (value: string) => void;
    initialValue?: string;
};

export const SearchBar = (props: SearchBarProps) => {
    const { initialValue = '', onSearch } = props;

    const [value, setValue] = useState<string>(initialValue);
    const enterHandler: KeyboardEventHandler = (event) => { if (event.key === 'Enter') { onSearch(value) } }

    return (
        <div className="searchbar">
            <input 
                value={value}
                onKeyDown={enterHandler} 
                onChange={(event) => setValue(event.target?.value)} 
                type="text" 
                id="search" 
                placeholder="Статья, автор, тема..." 
                />
            <button id="sbutton" onClick={() => onSearch(value)}>Найти</button>
        </div>
    )
}