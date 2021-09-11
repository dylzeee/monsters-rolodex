import React from "react";
import './search-box.style.css'

export const SearchBox = ( { placeholder, handleChange } ) => {
  return (

     <input 
        type='search' 
        onChange={ handleChange } 
        placeholder={ placeholder } 
      />

  )
} 