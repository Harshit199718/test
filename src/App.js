import React from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home/home.component';
import Header from './components/common/Header/header.component';
import { Wrapper } from './components/layouts/wrapper.layout';

function App() {
  return (
    <Wrapper>
    <div className="App">
        <div>
          <Header/>
        </div>
        <div className='d-flex'>
          <aside style={{width: '20%', background: '#000',padding: '4px 20px',background:'#095845'}}></aside>
          <Home/>
        </div>
    </div>
    </Wrapper>
  );
}

export default App;
