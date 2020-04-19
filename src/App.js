import React from 'react';
import './App.css';
import MenuBar from './MenuBar';
import Projectview from './Projectview';
import {createStore} from 'redux';
import mainReducer from './store/reducers';
import { Provider } from 'react-redux';
import Home from "./Home";
import './fontpack.css';
import Contactandaboutview from './Contactandaboutview';
const store = createStore(mainReducer);
function App() {
  return (
    <div>
      <Provider store = {store}>
      
              <MenuBar></MenuBar>
              <Contactandaboutview></Contactandaboutview>
              <Home></Home>
              <Projectview></Projectview>
      </Provider>
    </div>
  );
}

export default App;
