import { combineReducers } from 'redux';
import {CHANGE_ROW,CHANGE_FILE,MODIFY_CELL,MODIFY_ALL} from './actions.js'
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
      let state_copy=state.concat();
      state_copy[action.rowIndex][action.cellIndex]=action.text;
      return state_copy;
    case MODIFY_ALL:
      return LrcPre(action.lrcText);
    default:
      return state;
  }
}

function file(state={fileURL:"",fileFormat:""},action){
  switch (action.type) {
    case CHANGE_FILE:
      return {fileURL:action.fileURL,
              fileFormat:action.fileFormat
            };
    default:
      return state;
  }
}

const hiedaApp=combineReducers({
  rowIndex,
  lrcArray,
  file
});

export default hiedaApp;
