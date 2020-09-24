import React, { useState, useEffect } from 'react';
import CreateDonation from './CreateDonation.js';

function Donations(props) {
    const [donations, setDonations] = useState([]);

    const getDonations = async () => {
        try {
            const response = fetch('/items')
            const donations = await (await response).json();
            console.log(donations);
            setDonations(donations);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        const callDonations = async () => {
            await getDonations();
        }
        callDonations();
    }, []);

    return (
        <>
            <CreateDonation />
            <h2>List of Items to Donate</h2>
            {donations.map( donation => {
                return (
                    <div key={donation.id}>
                        <h4>Item Name: {donation.name}</h4>
                        <h4>Category: {donation.category}</h4>
                        <h4>Current Condition: {donation.condition}</h4>
                        <img src={donation.img} alt={donation.name} /><br />
                    </div>
                )
            })}
        </>
    )
}

export default Donations;