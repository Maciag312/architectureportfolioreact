
import {SET_VIEW} from './actions'
import {SET_PROJECTS} from './actions'
import {SET_CATEGORIES} from './actions'
const initialState = {
  view: 'login',
  categories: [{id: 0, name: "architecture", selected: true}, {id: 1, name: "urbanistics", selected: false}, {id: 2, name: "design", selected: false}],
  projects: [{id: 0, name: "wooden home", selected: true, catg: 0},{id: 1, name: "museum des Espaniola", selected: false, catg: 0},{id: 2, name: "Some penthouses", selected: false, catg: 1},{id: 3, name: "lake", selected: false, catg: 1},{id: 4, name: "mazda", selected: false, catg: 2}]
};
export default function mainReducer(
    state = initialState,
    action
  ) {
    switch (action.type) {
      case SET_VIEW:
        return {
            view: action.payload 
        };
      case SET_PROJECTS: 
        return{
          projects: action.payload
        }
      case SET_CATEGORIES: 
        return{
          categories: action.payload
        }  
      default:
        return state;
    }
  }
  