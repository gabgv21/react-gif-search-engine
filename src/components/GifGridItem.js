import React from 'react';
//import {FullScreen} from './FullScreen';

export const GifGridItem = ({id, title, url}) => {
    return (
        <div className="col-md-6 col-lg-3 espaciado">
            <div className='card animate__animated animate__fadeIn animate__delay-2s'>
                <img src={url} alt={title} className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text">Tag: {title}</p>
                    <div className="text-right">
                    </div>
                </div>
            </div>
        </div>    
    )
}
