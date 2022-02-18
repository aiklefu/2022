import React, {useState} from 'react';
import StartIcon from '../imgs/star-icon.png';
import StartIconEmpty from '../imgs/star-empty.jpg';
 

function Toggle()
{
    const [contact, setContact] = useState({
        name: "John",
        email: "John@gmail.com",
        mobile: "00000001",
        isFavorite: false
    });

    let starIcon = contact.isFavorite ? StartIcon : StartIconEmpty; 

    function toggleFav(){
        setContact((prevContact) => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        });

    };
    


    return (
        <>
            {/*<img src={`../imgs/${starIcon}`}></img>*/}
            <img 
                src={starIcon} 
                className = "img--star"
                onClick={toggleFav}></img>
        </>
    );
}

export default Toggle