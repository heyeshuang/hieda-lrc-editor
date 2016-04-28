import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import Row from './components/FlexboxGrid/Row.jsx';
import Col from './components/FlexboxGrid/Col.jsx';
import Box from './components/FlexboxGrid/Box.jsx';
import PlayController from './components/AudioPlayer/PlayController.jsx';
import LyricsTable from './components/LyricsTable/LyricsTable.jsx';
import {RaisedButton} from 'material-ui';
import {Paper} from 'material-ui';
import { changeFile, changeRow, modifyCell } from 'js/actions.js'
import {secondsToTime} from 'js/TimeFormatter.js'

class Application extends Component {
  // _bind(...methods) {
  //   methods.forEach( (method) => this[method] = this[method].bind(this) );
  // }
  constructor(props){
    super(props);
    const { dispatch } = props;
    // const {rowIndex,lrcArray,fileName}=this.props
    this.onCellClick=(a)=>{
      this.props.dispatch(changeRow(a));
    }
    this.onAddClick=()=>{
      let seek=0;
      try {
        seek=this.refs.playc.seekNow();
      }
      catch(err){
        // if (err instanceof TypeError){
        seek=this.refs.playc.state.seek;
        // }
      }
      seek=secondsToTime(seek);
      // console.log(this.props.rowIndex);
      this.props.dispatch(modifyCell(this.props.rowIndex,0,seek));
      this.props.dispatch(changeRow(this.props.rowIndex+1));
      //TODO:scroll
    }
    this.onDeleteClick=()=>{

    }
    // this._bind('render','onCellClick');
  }

  render () {
    return (
      <div>
        <Row className="center-xs" params={this.props.params}>
          <Col className="col-xs-12 col-md-8" params={this.props.params}>
            <Box style={{
                marginTop: '200px'
              }} params={this.props.params}>
              <Paper zDepth={1} rounded={true} params={this.props.params}>
                <LyricsTable callbackParent={this.onCellClick}
                  lrcArray={this.props.lrcArray} selectedRow={this.props.rowIndex} />
              </Paper>
            </Box>
          </Col>
        </Row>
        <div style={{
            position: 'fixed',
            top: 0,
            width: '100%'
          }} params={this.props.params}>
          <Row className="center-xs" params={this.props.params}>
            <Col className="col-xs-12 col-md-8" params={this.props.params}>
              <Box params={this.props.params}>
                <Paper zDepth={4} rounded={true} params={this.props.params}>
                  <PlayController ref="playc" />
                  <Row className="middle-xs around-xs" style={{
                      padding: '0 10px 20px'
                    }} params={this.props.params}>
                    <Col className="col-xs-12 col-sm-3" style={{
                        marginBottom: '10px'
                      }} params={this.props.params}>
                      <Box params={this.props.params}>
                        <RaisedButton label="Add" primary={true} style={{
                            width: '80%'
                          }} params={this.props.params} onMouseDown={this.onAddClick}
                          ></RaisedButton>
                        </Box>
                      </Col>
                      <Col className="col-xs-12 col-sm-3" params={this.props.params}>
                        <Box style={{
                            marginBottom: '10px'
                          }} params={this.props.params}>
                          <RaisedButton label="Delete" style={{
                              width: '80%'
                            }} secondary={true} params={this.props.params}></RaisedButton>
                          </Box>
                        </Col>
                        <Col className="col-xs-12 col-sm-3" params={this.props.params}>
                          <Box style={{
                              marginBottom: '10px'
                            }} params={this.props.params}>
                            <RaisedButton label="Perv Tag" style={{
                                width: '80%'
                              }} params={this.props.params}></RaisedButton>
                            </Box>
                          </Col>
                          <Col className="col-xs-12 col-sm-3" params={this.props.params}>
                            <Box style={{
                                marginBottom: '10px'
                              }} params={this.props.params}>
                              <RaisedButton label="Next Tag" style={{
                                  width: '80%'
                                }} params={this.props.params}></RaisedButton>
                              </Box>
                            </Col>
                          </Row>
                        </Paper>
                      </Box>
                    </Col>
                  </Row>
                </div>
              </div>
            );
          }
        }
function select(state) {
  return {
    rowIndex:state.rowIndex,
    lrcArray:state.lrcArray,
    fileName:state.fileName
  }
}
export default connect(select)(Application);
