import React from 'react'

export default function Box(props){    

    const styles = {
        backgroundColor: !props.on ? "grey" : "white"        
    }
//console.log(props.id + " : " + props.on + " : " + styles.backgroundColor);
    return (
        <div 
            className='box'  
            style={styles} 
            onClick={props.divClick}
            //onClick={() => props.divClick(props.id)}
        ></div>
    )
}