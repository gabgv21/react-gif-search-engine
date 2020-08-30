import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) =>{
        //console.log(e.target.value);
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //console.log('console log hecho desde el form');
        if(inputValue.trim().length>2){
            setCategories( categories => [inputValue, ...categories]);
            setInputValue('');
        }

    };


    return (
        <form onSubmit={handleSubmit}>
            <span className="input-group col-md-8 col-lg-10">
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="form-control"
                />
                <button className="btn btn-secondary"><span className="fa fa-search"></span></button>
            </span>
        </form>
    )
}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
};