import React from "react";

const Search = ({ SearchField, SearchChange }) => {
    return(
        <div>
        <input className='bg-light-green dib br3 pa3 ma2'
        type='search' 
         placeholder='robot name' 
         onChange={SearchChange}/>
         
         </div>
    )
}

export default Search;