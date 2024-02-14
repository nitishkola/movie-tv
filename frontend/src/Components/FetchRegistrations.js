import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchRegistrations = () => {
    const [res, setRes] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8085/retrieve', {})
            .then(response => {
                setRes(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error.message);
            });
    }, []); // Empty dependency array to fetch data only once on component mount

    return (
        <div>
            <h1>FetchRegistrations</h1>
            {res ? (
                <ul>
                    {res.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default FetchRegistrations;
