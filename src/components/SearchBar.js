import React, { useState } from 'react';

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');

    const onSubmit = event => {
        event.preventDefault();

        //sets prop value "term", onFormSubmit prop passed in from App Component
        onFormSubmit(term)
    };

    return (
        <div className="search-bar ui segment">
           <form onSubmit={onSubmit} className="ui form">
               <div className="field">
                   <label> Video Search </label>
                   <input 
                   type="text" 
                   value={term}
                   onChange={(event)=> setTerm(event.target.value)}//callback handler
                   />
               </div>
           </form>
        
        </div>
        );
};

 export default SearchBar;