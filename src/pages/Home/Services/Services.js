import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service'
import './Services.css'

const Services = () => {
    const [services,setSevices]=useState([])
    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data=>setSevices(data))
    },[])
    return (
        <div className='service-container'>
            {
                services.map(service=><Service service={service}></Service>)
            } 
        </div>
    );
};

export default Services;