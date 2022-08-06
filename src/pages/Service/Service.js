import React from 'react';
import './Service.css'

const Service = ({service}) => {
    // const {service}=props
    const{name,img,price,description}=service
    return (
        <div className='service'>
            <h3>{name}</h3>
            <h4>price:{price}</h4>
            <h5>Description:{description}</h5>
        </div>
    );
};

export default Service;