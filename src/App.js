import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="header">
            <img src="/img/FPOK.png" alt="UPI Logo"/>
            <h1>Pengumuman DPM dan HIMA IKOR periode 2017/2018 FPOK UPI</h1>
            <form action="">
              <input placeholder="Masukkan NIM" type="text"/>
              <input className="custom-button" type="submit" value="Submit"/>
            </form>
          </div>
          <div className="footer">
            <p>Powered by <a href="http://bcc.ptiik.ub.ac.id">Basic Computing Community</a>. Copyright 2017 &copy; All rights reserved.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;