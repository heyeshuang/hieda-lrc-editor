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
          {LrcPre(lyricsDemo).map((value,index)=>{
            return(
              <LyricsRow isSelected={index==this.props.selectedRow?true:false}
                time={value[0]} key={value[0]}
                lyricsContent={value[1]} onCellClick={this._onCellClick}/>
            )
          })}
        </TableBody>
      </Table>
    )
  }
  _onCellClick(a,b){
    console.log(a,b);
      //TODO:修改此事件，现在不工作
  }
}

LyricsTable.defaultProps={
  selectedRow:0,
}

export default LyricsTable;
