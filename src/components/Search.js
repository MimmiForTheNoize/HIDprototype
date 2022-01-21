import * as React from 'react';


import SearchResults from "./SearchResults";
import search from "../Data/search.json";
import {useState} from "react";

const Search = () => {

    const [results, setResults] = useState(search);

    return (
        <div className='mainDiv container'>

            <p className='searchtitle'>Finde jetzt den perfekten Kindergarten</p>


            <SearchResults results={results}/>
        </div>
    )
}

export default Search
