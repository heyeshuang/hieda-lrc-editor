import React, {
  Component,
  PropTypes
} from 'react';
import ReactDOM from 'react-dom';

import {Table,TableHeader,TableHeaderColumn,TableBody,
  TableRow,TableRowColumn,TableFooter} from 'material-ui';
import {LrcPre,lyricsDemo} from '../../../LrcPreprocess.js';
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
        onCellClick={this.props.callbackParent}
        >
        <TableHeader enableSelectAll={false}
          adjustForCheckbox={false} displaySelectAll={false}>
          <TableRow >
            <TableHeaderColumn width='100px' tooltip='timestamp'>Time</TableHeaderColumn>
            <TableHeaderColumn tooltip='lyrics row'>Lyrics</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          deselectOnClickaway={false}
          showRowHover={true}
          displayRowCheckbox={false}>
          {this.props.lrcArray.map((value,index)=>{
             let selected=index==this.props.selectedRow;
             let selectedNext=index==this.props.selectedRow+2;
            return(
              <TableRow selected={selected}
                ref={selectedNext?"selectedNext":""}
                key={"lr"+index}>
                <TableRowColumn width='100px'>{value[0]}</TableRowColumn>
                <TableRowColumn>{value[1]}</TableRowColumn>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    )
  }
  componentDidUpdate(){
    if (!Element.prototype.scrollIntoViewIfNeeded) {
      // ReactDOM.findDOMNode(this.refs.selectedNext).scrollIntoView(false);
      ReactDOM.findDOMNode(this.refs.selectedNext).scrollIntoView({block: "end", behavior: "smooth"});
    }
    else {
      ReactDOM.findDOMNode(this.refs.selectedNext).scrollIntoViewIfNeeded(false);
    }
  }
}

LyricsTable.propTypes={
  lrcArray:PropTypes.array,
  selectedRow:PropTypes.number,
}

LyricsTable.defaultProps={
  selectedRow:0,
  // lrcArray:LrcPre(lyricsDemo),
}

export default LyricsTable;
