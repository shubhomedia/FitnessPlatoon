import React, { useEffect, useState } from 'react';
import service_image1 from '../../images/pilates.jpg'
import SingleCard from '../../SingleCard/SingleCard';

const Services = (props) => {

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('')
    }, []);

    return (
        <div>
            <h2>Our Services</h2>
            <div className="container py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6" >
                <SingleCard></SingleCard>
            </div >
        </div>


    );
};

export default Services;