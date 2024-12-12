import React from "react";




const Header = (props) =>{
    
    return(
        <header className={props.theme?"darker":"lighter"}>
            <nav className="navbar">
                <img src={"./images/react.png"} alt="logo"/>
                <h1 className="navsize">ReactFacts</h1>
                
                <button onClick={props.toggleMode} className="toggle">
                    
                </button>
                
            </nav>

        </header>
            
    );
};

export default Header;