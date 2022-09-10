import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes' 
import Header from './componentes'
import { Templete } from './componentes/MainComponentes';
import './App.css';
import Footer from './componentes/partials/Footer';


const Page = (props) =>{

  return(
    <BrowserRouter>
    <Templete>
      <Header/>
      <Routes/>
      <Footer/>
    </Templete>
    </BrowserRouter>
    
  );
}

const mapStateToProps = (state) =>{

  return{
    user:state.user
  }
}

const mapDispactToProps = (dispatch) =>{
  return{

  }
}

export default connect(mapStateToProps,mapDispactToProps) (Page)