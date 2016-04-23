import { combineReducers } from 'redux';
import {CHANGE_ROW,CHANGE_FILE,MODIFY_CELL} from './actions.js'
import {LrcPre,lyricsDemo} from './LrcPreprocess.js';

function rowIndex(state=0,action){
  switch (action.type){
    case CHANGE_ROW:
      return action.index;
    default:
      return state;
  }
}

function lrcArray(state=LrcPre(lyricsDemo),action){
  switch (action.type){
    case MODIFY_CELL:
      let state_copy=Object.assign({},state);
      state_copy[action.rowIndex][action.cellIndex]=action.text;
      return state_copy;
    default:
      return state;
  }
}

function fileName(state="",action){ //TODO
  switch (action.type) {
    case CHANGE_FILE:
      return action.fileURL;
    default:
      return state;
  }
}

const hiedaApp=combineReducers({
  rowIndex,
  lrcArray,
  fileName
});

export default hiedaApp;
