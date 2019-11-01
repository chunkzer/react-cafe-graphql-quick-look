import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import HomePageQueries from './queries/HomePageQueries';
import logo from './logo.svg';
import './App.css';


const HomePage = () => {
  const {
    cowboyBebopQuery,
  } = HomePageQueries

  const result = useQuery(cowboyBebopQuery);
  console.log('result: ', result);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
};

export default HomePage;
