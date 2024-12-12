import React from "react";

const Main = (props) =>{
    return(
        <main className={props.theme?"dark":"light"}>
            <div className="main" >
            <div>
                <h1 className="mainh1">FUN FACTS ABOUT REACT</h1>
            </div>
            
            <div>
                <ul className="list">
                    <li>Created by Jordan Walke at Facebook</li>
                    <li>React was open-sourced in May 2013 during the JSConf US.</li>
                    <li>React introduced a new reconciliation algorithm called Fiber in version 16, enabling asynchronous UI rendering.</li>
                    <li>React developers are consistently among the most in-demand in the industry, reflecting its popularity and adoption.</li>
                    <li>React's creation was influenced by XHP, an HTML component framework for PHP.</li>
                </ul>
                
            </div>
        </div>

        </main>
        
        
    );
};

export default Main;