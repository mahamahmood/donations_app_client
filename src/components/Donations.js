import React, { useState, useEffect } from 'react';

function Donations(props) {
    const [donations, setDonations] = useState([]);

    const getDonations = async () => {
        try {
            const response = fetch('https://donations-app-api.herokuapp.com/items')
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
            <h2>List of Items to Donate</h2>
            {donations.map(donation => {
                return (
                    <div className="donations" key={donation.id}>
                        <h4>Item Name: <small>{donation.name}</small></h4>
                        <h4>Category: <small>{donation.category}</small></h4>
                        <h4>Current Condition: <small>{donation.condition}</small></h4>
                        <img src={donation.img} alt={donation.name} /><br />
                    </div>
                )
            })}
        </>
    )
}

export default Donations;