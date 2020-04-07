import React from 'react';
import './App.css';
import MenuBar from './MenuBar';
import Projectview from './Projectview';
import {createStore} from 'redux';
import mainReducer from './store/reducers';
import { Provider } from 'react-redux';
import './fontpack.css';
const store = createStore(mainReducer);
function App() {
  return (
    <div>
      <Provider store = {store}>
        <div style={{paddingLeft: "10%", paddingTop:"12px", paddingBottom: "8px",  fontSize:"28px", fontFamily: "Quicksand"}}>
          KRZYSZTOF PRZYBYŁO
        </div>

              <MenuBar></MenuBar>
              <Projectview></Projectview>
      </Provider>
    </div>
  );
}

export default App;
