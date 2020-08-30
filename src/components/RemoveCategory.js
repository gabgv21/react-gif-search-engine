import React from 'react'

export const RemoveCategory = ({category, categories, setCategories}) => {

    const handleRemoveCategory = () =>{
        //console.log(category);
        const newCategories = categories.filter(item => item !== category);
        //console.log(newCategories);
        setCategories( () => [...newCategories]);
    };

    return (
        <>
            <button className="close" onClick={handleRemoveCategory}>
                <span className="fa fa-times"></span>
            </button>
        </>
    )
}
