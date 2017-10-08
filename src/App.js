import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

import Loading from './common/Loading';

class App extends Component {
  state = {
    nim: '',
    ket: null,
    ketJudul: null,
    isLoading: false,
  }

  handleChange = e => {
    this.setState({nim: e.target.value});
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({isLoading: true});
    axios.get(`http://128.199.84.81:3100/api/v1/getPerson?nim=${this.state.nim}`).then(res => {
      if (res.data.person.status !== 'lolos') return this.setState({ketJudul: 'Maaf', ket: 'anda belum terdaftar dalam himpunan mahasiswa ilmu keolahragaan 2017/2018 ', isLoading:false})
      this.setState({ketJudul: 'Selamat!', ket: `Anda masuk di bidang ${res.data.person.jabatan} mahasiswa ilmu keolahragaan 2017/2018 `, isLoading: false});
    }).catch(err => {
      this.setState({ketJudul: '404', ket: 'Not Found', isLoading: false});
    });
  }

  renderKet = () => {
    if (!this.state.ket) return '';
    return (
      <div className="ket">
        <h1>{this.state.ketJudul}</h1>
        <p>{this.state.ket}</p>
      </div> 
    );
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="header">
            <img src="/img/FPOK.png" alt="UPI Logo"/>
            <h1>Pengumuman DPM dan HIMA IKOR periode 2017/2018 FPOK UPI</h1>
            <form onSubmit={this.onSubmit}>
              <input placeholder="Masukkan NIM" type="text" onChange={this.handleChange}/>
              <input className="custom-button" type="submit" value="Submit"/>
              { this.state.isLoading ? <Loading /> : '' }
            </form>
            {this.renderKet()}
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