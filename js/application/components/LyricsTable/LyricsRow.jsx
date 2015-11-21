import React,{Component,PropTypes} from 'react';

import {TableRow,TableRowColumn} from 'material-ui';
import {secondsToTime} from '../TimeFormatter.js';

class LyricsRow extends Component {
  _bind(...methods) {
    methods.forEach( (method) => this[method] = this[method].bind(this) );
  }
  constructor (props){
    super(props);
    this._bind('render');
  }
  render (){
    return(
      <TableRow selected={this.props.isSelected}  onCellClick={this.props.onCellClick}>
        <TableRowColumn width='100px'>{(this.props.time)}</TableRowColumn>
        <TableRowColumn>{this.props.lyricsContent}</TableRowColumn>
      </TableRow>
    )
  }
}

LyricsRow.defaultProps={
  isSelected:false,
  time:0
};
export default LyricsRow;
