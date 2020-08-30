import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    //const categories = ['My Hero Academia', 'Hunter x Hunter', 'Samurai X', 'Naruto'];

    const [categories, setCategories] = useState(['Batman']);


    /*const handleAdd = () =>{
        
        setcategories([...categories, 'Naruto']);
    };*/

    return (
        <>
            <main role="main">
                <div className="row">
                    <div className="col-md-12 col-lg-10 centrado">
                        <h2>Gifs Search Engine</h2>
                        <AddCategory setCategories={setCategories} />
                        <hr />
                    </div>
                </div>       

                {/*<div className="container-fluid">
                    <div className="row">*/}
                <div className="col-md-12 col-lg-10 centrado">
                    { 
                        categories.map( (category) => (
                            //<li key={category}>{category}</li> no olvidar el key 
                            <GifGrid 
                                key={category}    
                                category={category}
                                categories={categories}
                                setCategories={setCategories}
                            />
                        ))
                    }
                </div>
                    {/*</div>
                </div>*/}
            </main> 
    </>    
    )
}
