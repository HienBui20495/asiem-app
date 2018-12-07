import { BrowserRouter, Route, Switch } from "react-router-dom";

import React, { Suspense } from "react";

import HomePage from "./Component/HomePage";
//import Experience from "./Component/Experience";
//import New from "./Component/New" 

const Router = () => (
    <BrowserRouter>
        <Suspense fallback = { <div> </div>}>
            <Switch>
                <Route exact path ="/" component ={HomePage}/>
            </Switch>
        </Suspense>
    </BrowserRouter>
)

export default Router;