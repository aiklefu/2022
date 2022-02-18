import { Button } from 'bootstrap';
import React from 'react';
import { useState } from 'react';


export default function FormSample() {

    const [formData, setFormDate] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comment: "",
        isChecked: true,
        employment: "",
        favColor: ""
    });

    console.log(formData);

    function handleChange(event) {
        
        const{name, value, checked, type} = event.target;

        setFormDate(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        });        
    }

    function handleSubmit(event){
        event.preventDefault();
        //submitToApi(formData);
        console.log(formData);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="First name"
                    type="text"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                />
                <input 
                    placeholder="Last name"
                    type="text"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                />
                <input 
                    placeholder="Email"
                    type="text"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <textarea
                    placeholder="Comments" 
                    onChange={handleChange}
                    name="comment"
                    value={formData.comment}
                />
                <input 
                    type="checkbox"
                    checked={formData.isChecked}
                    onChange={handleChange}
                    name="isChecked"
                    id="isCheckedId"
                />
                <label htmlFor="isCheckedId">Is this one checked?</label>

                <fieldset>
                    <legend>Current employment status</legend>

                    <input
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value="Unemployed"
                        onChange={handleChange}
                        //make it controlled form element
                        checked={formData.employment ==="Unemployed"}
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                    <br/>

                    <input
                        type="radio"
                        id="employed"
                        name="employment"
                        value="Employed"
                        onChange={handleChange}
                        //make it controlled form element
                        checked={formData.employment ==="Employed"}
                    />
                    <label htmlFor="employed">Employed</label>
                    <br/>
                    
                    <input
                        type="radio"
                        id="partEmployed"
                        name="employment"
                        value="Part Employed"
                        onChange={handleChange}
                              //make it controlled form element
                        checked={formData.employment ==="Part Employed"}
                    />
                    <label htmlFor="partEmployed">Part Employed</label>                    
                </fieldset>

                <label htmlFor="favcolor">What is your select?</label>
                <select 
                    id="favcolor"
                    name="favColor"
                    onChange={handleChange}
                    value={formData.favColor}
                >
                    <option value="">-- Choose --</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="pink">Pink</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>                    
                </select>
                <br></br>
                <button>Submit</button>
            </form>
        </>
    )
}