import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home/home'
function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/index' exact />
          <Route path='/post/:id' />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
