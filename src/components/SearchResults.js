import * as React from 'react';
import SingleResult from './SingleResult';
import {useState} from "react";
import Filter from './Filter';

const SearchResults = ({ results }) => {

    const [allResults, setAllResults] = useState(results);

    const generateLocationDataForDropdown = () => {
        return [...new Set(results.map((result) => result.location))];
    }
    const generateRatingDataForDropdown = () => {
        return [...new Set(results.map((result) => result.rating))];
    }

    const handleFilterSerach = (mainContent) => {
        const filteredData = results.filter(result => {
        const allContent = `${result.heading} ${result.content} ${result.location}`;
        if(allContent.toLowerCase().includes(mainContent.toLowerCase())) {
            return result;
        }
        });
        setAllResults(filteredData);
    };

    const handleFilterSelectLocation = (singleLocation) => {
        const filteredData = results.filter(result => {
            if(result.location.toLowerCase() === (singleLocation.toLowerCase())) {
                return result;
            }
        });
        setAllResults(filteredData);
    };

    const handleFilterSelectRating = (singleRating) => {
        const filteredData = results.filter(result => {
            if(result.rating === singleRating) {
                return result;
            }
        });
        setAllResults(filteredData);
    };

    return (
        <div>
            <Filter locations={generateLocationDataForDropdown()}
                    ratings={generateRatingDataForDropdown()}
                    onSearchFilter={handleFilterSerach}
                    onLocationFilter={handleFilterSelectLocation}
                    onRatingFilter={handleFilterSelectRating}/>
            <div className='results'>
                <>
                    {allResults.map((result) => (
                        <SingleResult key={result.id} result={result} />

                    ))}
                </>
            </div>

        </div>
    )
}

export default SearchResults
