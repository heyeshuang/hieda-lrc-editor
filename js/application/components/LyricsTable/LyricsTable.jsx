import React, {
  Component,
  PropTypes
} from 'react';

import {Table,TableHeader,TableHeaderColumn,TableBody,
  TableRow,TableRowColumn,TableFooter} from 'material-ui';
import {LrcPre,lyricsDemo} from '../LrcPreprocess.js';
class LyricsTable extends Component {
  _bind(...methods) {
    methods.forEach( (method) => this[method] = this[method].bind(this) );
  }
  constructor(props){
    super(props);
    this.state = {
    };
    this._bind('render');
  }
  render(){
    return (
      <Table
        height='auto'
        fixedHeader={false}
        selectable={true}
        multiSelectable={false}
        onCellClick={this._onCellClick}
        >
        <TableHeader enableSelectAll={this.state.enableSelectAll}
          adjustForCheckbox={false} displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn width='100px' tooltip='timestamp'>Time</TableHeaderColumn>
            <TableHeaderColumn tooltip='lyrics row'>Lyrics</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          deselectOnClickaway={false}
          showRowHover={true}
          displayRowCheckbox={false}>
          {LrcPre(lyricsDemo).map((value,index)=>{
            return(
              <TableRow selected={index==this.props.selectedRow}
                onCellClick={this._onCellClick} key={"lr"+index}>
                <TableRowColumn width='100px'>{value[0]}</TableRowColumn>
                <TableRowColumn>{value[1]}</TableRowColumn>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    )
  }
  _onCellClick(a,b){
    console.log(a,b);
  }
}

LyricsTable.defaultProps={
  selectedRow:5,
}

export default LyricsTable;
