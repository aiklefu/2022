import React, {useState} from 'react';
import boxes from './BoxesData';
import Box from './Box'

export default function Boxes()
{
    const [squares, setSquares] = useState(boxes);

    function toggle(id){
        let square = squares.find(s => s.id == id);

        const newSquare = {
            ...square,
            on: !square.on
        }

        setSquares(prevSqs => {
            return prevSqs.map((sq) => {
                if (sq.id === id)
                    return newSquare;
                else
                    return sq;
            });
        });

        /*
        //c# style
        setSquares(prevSqs => {
            const newSquares = [];
            for (let i=0; i < prevSqs.length; i++) {
                const currSq = prevSqs[i];
                if (currSq.id === id){
                    const updateSq = {
                        ...currSq,
                        on: !currSq.on
                    }
                    newSquares.push(updateSq);
                }
                else
                    newSquares.push(currSq);
            }

            return newSquares;
        });
        */
    };

    const squareEle = squares.map(square => (
        //<Box key={square.id} on={square.on} divClick={toggle} id={square.id}/>
        <Box 
            key={square.id} 
            on={square.on} 
            divClick={() => toggle(square.id)}
        />
    ));

    return (        
        <main>
            {squareEle}
        </main>        
    )
}