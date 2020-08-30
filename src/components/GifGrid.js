import React, { /*useState, useEffect*/ } from 'react'
import { useFetchGif } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
import { RemoveCategory } from './RemoveCategory';
//import { getGifs } from '../helpers/getGif';

export const GifGrid = ({category, categories, setCategories}) => {

    const { data: images, loading } = useFetchGif( category );
    //console.log(state);
    //const [images, setimages] = useState([]);
    
    //useEffect(() => {
    //    getGifs(category)
    //        .then(imgs => setimages(imgs));
    //}, [ category ]); //Solo se ejecuta ese codigo cuando el componente es renderizado por primera vez = []. Permite que se vuelva a cargar si cambia el contenido de [category] 

    //getGifs(); //Sin useEffect vuelve a realizar la peticion cada que recarga el componente.
    
    return (
        <div className="card espaciado">
            <div className="card-header">
                <span className="card-title animate__animated animate__fadeIn animate__delay-1s">{category}</span>
                <RemoveCategory category={category} categories={categories} setCategories={setCategories} />
            </div>

            {loading && <p className="animate__animated animate__flash">Loading</p>}
            
            <div className="card-body card-grid">
                    {
                        images.map(img => (

                            <GifGridItem 
                                key={img.id}   
                                //img={img} 
                                {...img} //envia cada propiedad de las imagenes como propiedad independiente
                            />
                        ))
                    }
                </div>    
        </div>
    )
}
