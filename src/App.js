import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import KonversiList from './Components/KonversiList';
import InitialList from './Components/InitialList';
import AddList from './Components/AddList';

class App extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      InitialMataUang: //Initial Value
          [
            {
              "kurs": "CAD",
              "nilai": 1.3069247312
          }, {
              "kurs": "GBP",
              "nilai": 0.7640688172
          }, {
              "kurs": "IDR",
              "nilai": 14417.4967741935
          }, {
              "kurs": "CHF",
              "nilai": 0.9975913978
          }, {
              "kurs": "INR",
              "nilai": 68.6851612903
          }, {
              "kurs": "JPY",
              "nilai": 111.1827956989
          }, {
              "kurs": "KRW",
              "nilai": 1118.4344086022
          }, {
              "kurs": "MYR",
              "nilai": 4.064516129
          }, {
              "kurs": "SGD",
              "nilai": 1.3643010753
          },  {
              "kurs": "USD",
              "nilai": 1
          }
          ]
      
    };

    this.AddListKurs = this.AddListKurs.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.Konversi = this.Konversi.bind(this);
        
  }


  //Method Delete List Mata Uang
  removeItem (itemIndex) {
    this.state.InitialMataUang.splice(itemIndex, 1);
    this.setState({InitialMataUang: this.state.InitialMataUang});
  }
  
  //Method Tambah List Mata Uang
  AddListKurs (item){
    this.state.InitialMataUang.unshift({
      kurs  : item.toUpperCase(),
      nilai : 0
    });
    this.setState({InitialMataUang:this.state.InitialMataUang})
  }

  //Method Konversi Mata Uang
  Konversi(event){
    axios.get('https://exchangeratesapi.io/api/latest?base=USD')
    .then(response =>{
    // handle success
    for(var i = 0; i <Object.keys(response.data.rates).length; i++ ){
        var text = Object.values(response.data.rates)[i];
        var valas = Object.keys(response.data.rates)[i];
        const rates = (text*parseInt(event)).toFixed(2);
        
        //Masukan object ke Array
        this.state.InitialMataUang.unshift({
          kurs  : valas.toUpperCase(),
          nilai : rates
        });
        this.setState({InitialMataUang:this.state.InitialMataUang})
        
    }
    
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    .then(function (response) {
    // always executed
    });
    
  }

  render() {

    return (
      <div className="App">
        <KonversiList InitialMataUang={this.state.InitialMataUang} Konversi={this.Konversi}/>
        <InitialList InitialMataUang={this.state.InitialMataUang}
          removeItem={this.removeItem}  
          />
        <AddList AddListKurs={this.AddListKurs}/>
      </div>
    );
  }
}

export default App;
