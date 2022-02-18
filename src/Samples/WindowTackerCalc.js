import React, { useEffect, useState } from "react";

export default function WinTrackerCalc() {

    const[windowWith, setWindowWith] = useState(window.innerWidth);

    useEffect(()=>{

        function watchWidth() {
            setWindowWith(this.window.innerWidth);
        }

        window.addEventListener("resize", watchWidth);

        //cleaning up method
        return () => {
            window.removeEventListener("resize", watchWidth);
        }
    }, []);

    return (
        <h1>Window width: {windowWith}</h1>
    )
}