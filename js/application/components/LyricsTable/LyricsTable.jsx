import React, {
  Component,
  PropTypes
} from 'react';

import {Table,TableHeader,TableHeaderColumn,TableBody,
  TableRow,TableRowColumn,TableFooter} from 'material-ui';
import LyricsRow from './LyricsRow.jsx';
import {LrcPre,lyricsDemo} from '../LrcPreprocess.js';
  class LyricsTable extends Component {
    _bind(...methods) {
      methods.forEach( (method) => this[method] = this[method].bind(this) );
    }
    constructor(){
      super();
      this.state = {
      };
      this._bind('render');
    }
    render(){
      return (
        <Table
          height='auto'
          fixedHeader={false}
          selectable={false}
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
            {LrcPre(lyricsDemo).map((value)=>{
                return(
                  <LyricsRow isSelected={false} time={value[0]}
                  lyricsContent={value[1]} onCellClick={this._onCellClick}/>
                )
              })}
          </TableBody>
        </Table>
      )}
      _onCellClick(a,b){
      }
    }


    export default LyricsTable;
