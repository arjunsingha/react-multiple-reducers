import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

//function App() {
class App extends Component{
  render(){
    return (
      <div className="App">
        <div className="cell">A:<span>{this.props.A}</span><br /><button onClick={()=>this.props.updateA(this.props.B)}>Update A</button></div>
        <div className="cell">B:<span>{this.props.B}</span><br /><button onClick={()=>this.props.updateB(this.props.A)}>Update B</button></div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  console.log(">>>>>>", state);
  return {
    A: state.rA.A,
    B: state.rB.B
  }
}

const mapDispachToProps = (dispatch) =>{
  return {
    updateA: (val) => dispatch({type:"UPDATE_A", value: val}),
    updateB: (val) => dispatch({type:"UPDATE_B", value: val})
  }
}

export default connect(mapStateToProps,mapDispachToProps)(App);
