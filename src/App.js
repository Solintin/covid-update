import React from 'react';
import './App.css';
import Header from './Header/Header';
import Tracker from './Tracker/Tracker';
import AffCont from './Affected/AffectedCountry';
import Symptoms from './Symtomps/Symtomps';
import Protect from './Protection/Protection';
import Footer from './Footer/Footer';
import loading from './Asset/loading.gif'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      covidApi: [],
      isLoading : true
    }
  }
  componentDidMount() {
    fetch('https://api.covid19api.com/summary')
      .then(resolve => resolve.json())
      .then(covidApi => this.setState({covidApi, isLoading : false}))
  }

  

  render() {

    if(this.state.isLoading)
    return <img src={loading} alt='Loading...' className='load'/>

    return (
      <>
   
        <Header covidApi={this.state.covidApi}/>
        <Tracker covidApi={this.state.covidApi}/>
        <AffCont covidApi={this.state.covidApi}/>
        <Symptoms />
        <Protect />
        <Footer/>

        
      </>
    );
  }
}
export default App;
