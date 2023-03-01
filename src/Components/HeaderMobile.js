import React from "react";
import '../App.css'

const HeaderMobile = () => {
    const [active, setActive] = React.useState(false); 

    return(
        <>
            <header className={active ? 'icon ActiveIcon' : 'icon'}>

            </header>
        </>
    )
}