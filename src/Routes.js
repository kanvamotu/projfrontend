import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Switch from "react-switch";
import Home from "./core/Home"

 const app = () =>  {
    return (
       
        <BrowserRouter>
           <Switch>
            <Routes>
            
            <Route path ="/" exact component={Home} />
        </Routes>
           

            </Switch>
        </BrowserRouter>
      
    );
}

export default app;




