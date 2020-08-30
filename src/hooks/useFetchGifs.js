import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGif';

export const useFetchGif = ( category ) =>{

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        /*getGifs(category)
            .then(imgs => setimages(imgs));*/
        
        getGifs(category)
            .then(imgs => {

                /*setTimeout(() => {
                    setstate({
                        data: imgs,
                        loading: false
                    })
                }, 1000);*/

                setstate({
                    data: imgs,
                    loading: false
                });
            })
    }, [category]);
    /************IMPORTANTE: LOS EFECTOS NO PUEDEN SER ASYNC*************/

    return state; //{ data [], loading: true }
};