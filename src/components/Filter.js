import * as React from 'react';
import { useState } from "react";


const Filter = ({ locations, ratings, onSearchFilter, onLocationFilter, onRatingFilter }) => {

    const [filters, setFilters] = useState({
        mainContent: "",
        location: '',
        rating: '',
    });

    const handleInput = (field) => (event) => {

        const { value } = event.target;

        setFilters({
            ...filters,
            [field]:value,
        });

        switch (field) {
            case "mainContent":

                onSearchFilter(value);
                break;
            case "locations":
                onLocationFilter(value);
                break;
            case "ratings":
                onRatingFilter(value);
                break;
            default:
                break;
        }

    };


    return (
        <div className='mainDiv'>
            <div className="filter container">
                <div className='search row'>
                    <i className="material-icons small col s2 searchicon">search</i>
                    <input type='text' className='searchbar col s10' placeholder='Starte Suche'
                           onChange={handleInput("mainContent")}
                           value={filters.mainContent}
                    />
                </div>
                <div className='dropdown row'>
                   <div className='dropdownSelect'>
                       <label htmlFor='location'> Wohnort</label>
                       <select className='locationSelect' onChange={handleInput("locations")}>
                           <option value=''>Ort auswählen</option>
                           {locations.map(singleLocation => (
                               <option value={singleLocation} key={singleLocation}>{singleLocation}</option>
                           ))}
                    </select>
                   </div>
                    <div className='dropdownSelect'>
                        <label htmlFor='rating'> Bewertung</label>
                        <select className='ratingSelect' onChange={handleInput("ratings")}>
                            <option value=''>Bewertungsgrad</option>
                            {ratings.map(singleRating => (
                                <option value={singleRating} key={singleRating}>{singleRating}</option>
                            ))}
                        </select>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Filter;

