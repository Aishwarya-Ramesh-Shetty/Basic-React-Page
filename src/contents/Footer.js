import React from "react";

const Footer = (props) =>{
    return(
        <footer className={props.theme?"dark":"light"}>
            <div className="footer" >
            <h3> &copy;ReactFacts|All rights reserved</h3>

            </div>
        </footer>
        
    );
};


export default Footer;