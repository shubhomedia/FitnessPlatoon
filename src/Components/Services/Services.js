import React, { useEffect, useState } from 'react';
import service_image1 from '../../images/pilates.jpg'
import SingleCard from '../../SingleCard/SingleCard';

const Services = (props) => {

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/shubhomedia/FitnessPlatoon/main/src/assets/service_data.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    return (
        <div>
            <h2>Our Services</h2>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-3" >
                {
                    service.map(service => <SingleCard
                        key={service.id}
                        service={service}
                    >
                    </SingleCard>)
                }
            </div >
        </div>


    );
};

export default Services;