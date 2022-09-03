import React from 'react'
import { connect } from 'react-redux'
import './App.css';


const Page = (props) =>{

  return(
    <div>Opa, Funcionando...</div>
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