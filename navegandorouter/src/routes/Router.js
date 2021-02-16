import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BackEndPage from "../screens/BackEndPage/BackEndPage";
import FrontEndPage from "../screens/FrontEndPage/FrontEndPage";
import HomePage from "../screens/HomePage/HomePage";


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/'   component = { HomePage } />
      <Route path='/front-end' component = { FrontEndPage } />
      <Route path='/back-end'  component = { BackEndPage } />
    </Switch>
  </BrowserRouter>
);

export default Router;