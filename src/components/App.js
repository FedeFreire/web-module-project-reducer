import React, {useReducer} from 'react';
import './App.css';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import { initialState } from '../reducers/index';
import reducer from '../reducers/index';
import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, MEMORY_CLEAR, MEMORY_PLUS, MEMORY_RECALL } from './../actions';

function App() {
  //console.log(reducer(initialState.operation, {type: "CHANGE_OPERATION", payload: "*"}));;  
  const [state, dispatch] = useReducer(reducer, initialState);  
  console.log(state);
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={() => dispatch({type: 'MEMORY_PLUS'})}  value={"M+"}/>
              <CalcButton onClick={() => dispatch({type: 'MEMORY_RECALL'})}  value={"MR"}/>
              <CalcButton onClick={() => dispatch({type: 'MEMORY_CLEAR'})}  value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton 
              //onClick={() => dispatch({type: 'ADD_ONE'})}//
              onClick={() => dispatch({type: 'APPLY_NUMBER', payload: 1})}
               value={1}/>
              <CalcButton onClick={() => dispatch({type: 'APPLY_NUMBER', payload: 2})} value={2}/>
              <CalcButton onClick={() => dispatch({type: 'APPLY_NUMBER', payload: 3})} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => dispatch({type: 'APPLY_NUMBER', payload: 4})} value={4}/>
              <CalcButton onClick={() => dispatch({type: 'APPLY_NUMBER', payload: 5})} value={5}/>
              <CalcButton onClick={() => dispatch({type: 'APPLY_NUMBER', payload: 6})} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => dispatch({type: 'APPLY_NUMBER', payload: 7})} value={7}/>
              <CalcButton onClick={() => dispatch({type: 'APPLY_NUMBER', payload: 8})} value={8}/>
              <CalcButton onClick={() => dispatch({type: 'APPLY_NUMBER', payload: 9})} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => dispatch({type: 'CHANGE_OPERATION', payload: '+'})} value={"+"}/>
              <CalcButton onClick={() => dispatch({type: 'CHANGE_OPERATION', payload: '*'})} value={"*"}/>
              <CalcButton onClick={() => dispatch({type: 'CHANGE_OPERATION', payload: '-'})} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => dispatch({type: 'CLEAR_DISPLAY'})}value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
