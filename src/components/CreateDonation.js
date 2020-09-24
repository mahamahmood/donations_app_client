import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [donations, setDonations] = useState([]);
    const [formInputs, updateFormInputs] = useState({
        name: '',
        category: '',
        condition: '',
        img: ''
    });

    const handleChange = (event) => {
        event.preventDefault();
        const updatedFormInputs = Object.assign({}, formInputs, { [event.target.id]: event.target.value });
        updateFormInputs(updatedFormInputs);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://donations-app-api.herokuapp.com/items', formInputs);
            const createdDonation = response.data
            await updateFormInputs({
                name: '',
                category: '',
                condition: '',
                img: ''
            });
            await setDonations([createdDonation, ...donations]);
        } catch(error) {
            console.error(error);
        }
    };

    return (
        <>
            <div>
                <h2>Add a New Item to Donate</h2>
                <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                    <input
                        type="text" 
                        id="name"
                        onChange={handleChange}
                        value={formInputs.name}
                    /><br />
                    <label htmlFor="category">Category</label>
                     <input
                        type="text" 
                        id="category"
                        onChange={handleChange}
                        value={formInputs.category}
                        placeholder="Clothes, Toys, Electronics, etc."
                    /><br />
                    <label htmlFor="current-condition">Current Condition</label>
                     <input
                        type="text" 
                        id="condition"
                        onChange={handleChange}
                        value={formInputs.condition}
                        placeholder="Good, Great, Not Bad, etc."
                    /><br />
                    <label htmlFor="img">Img</label>
                     <input
                        type="text" 
                        id="img"
                        onChange={handleChange}
                        value={formInputs.img}
                        placeholder="Img Link"
                    /><br />
                     <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}

export default App;