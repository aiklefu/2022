import React, { useState } from 'react';
import WinTrackerCalc from './WindowTackerCalc';

export default function WinTracker() {

    const[show, setShow] = useState(true);

    function toggle() {
        setShow(prevShow => {
            return !prevShow
        });
    }

    return (
        <div>
            <button onClick={toggle}>
                Toggle WindowTracker
            </button>
            
           {show && <WinTrackerCalc />}

            
        </div>
    )
}