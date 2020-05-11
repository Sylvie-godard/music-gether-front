import React, {Dispatch, SetStateAction, useState} from "react";
import axios from "axios";
import {IConcert} from "../pages/concerts";

interface IActions {
    setConcerts: Dispatch<SetStateAction<Array<IConcert>>>
}

const SearchBar: React.FC<IActions> = ({setConcerts}) => {
    const [query, setQuery]: [string, Dispatch<SetStateAction<string>>] = useState('');

    function handleOnInputChange(event){
        setQuery(event.target.value);
    }

    function submit(event: React.KeyboardEvent){
        if (event.key === 'Enter'){
            getConcerts();
        }
    }

    async function getConcerts() {
        const response = await axios.get(`http://127.0.0.1:8080/concerts?artist=${query}`);
        const data = response.data;
        setConcerts(data.data);
    }

    return (
        <div className="container">
            <label className="search-label" htmlFor="search-input">
                <input
                    type="text"
                    value={query}
                    id="search-input"
                    placeholder="Recherchez un artiste"
                    onChange={handleOnInputChange}
                    onKeyPress={submit}
                />
                <i onClick={getConcerts} className="fa fa-search search-icon"/>
            </label>
        </div>
    );
}

export default SearchBar;