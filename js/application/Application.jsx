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
import {FontIcon} from 'material-ui';
import {Paper} from 'material-ui';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import FileReaderInput from 'react-file-reader-input';
import { changeFile, changeRow, modifyCell,modifyAll } from 'js/actions.js'
import {secondsToTime} from 'js/TimeFormatter.js'
import {LrcPre,LrcReset} from 'js/LrcPreprocess.js'

class Application extends Component {
  // _bind(...methods) {
  //   methods.forEach( (method) => this[method] = this[method].bind(this) );
  // }
  constructor(props){
    super(props);
    const { dispatch } = props;
    // const {rowIndex,lrcArray,fileName}=this.props
    this.state={
      openDialog:false,
      dialogContent:"",
    }
    this.onCellClick=(a)=>{
      dispatch(changeRow(a));
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
      dispatch(modifyCell(this.props.rowIndex,0,seek));
      dispatch(changeRow(this.props.rowIndex+1));
    }
    this.onDeleteClick=()=>{
      dispatch(modifyCell(this.props.rowIndex,0,""));
    }
    // this.onOpenClick=()=>{
    //   var fileInput = document.querySelector('#fileElem');
    //   console.log(fileInput);
    //   click(fileInput);
    // }
    this.handleFile=(f)=>{
      // this.refs.playc.state.openError = false
      let file=f.target.files[0]
      let fileURL=URL.createObjectURL(file);
      let fileFormat=file.name.substr(file.name.lastIndexOf('.')+1)
      // console.log(fileFormat)
      dispatch(changeFile(fileURL,fileFormat))
    }
    this.onDialogOpen=()=>{
      //TODO
      this.setState({openDialog: true,
      dialogContent:LrcReset(this.props.lrcArray)})
    }
    this.onDialogChange=(event)=>{
      this.setState({
        dialogContent:event.target.value
      })
    }
    this.onDialogClose=()=>{
      //TODO
      this.setState({openDialog: false,
      dialogContent:""});
    }
    this.onDialogSave=()=>{
      dispatch(modifyAll(this.state.dialogContent));
      dispatch(changeRow(0));
      this.setState({openDialog: false,
      dialogContent:""});
    }
    // this._bind('render','onCellClick');
  }

  render () {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.onDialogClose}
        />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.onDialogSave}
        />,
    ];
    return (
      <div>
        <div style={{
            position: 'sticky',
            top: 0,
            width: '100%',
            zIndex: 999
          }} params={this.props.params}>
          <Row className="center-xs" params={this.props.params}>
            <Col className="col-xs-12 col-md-8" params={this.props.params}>
              <Box params={this.props.params}>
                <Paper zDepth={4} rounded={true} params={this.props.params}>
                  <PlayController ref="playc" file={this.props.file}/>
                  <Row className="middle-xs around-xs" style={{
                      padding: '0 10px 20px'
                    }} params={this.props.params}>
                    <Col className="col-xs-12 col-sm-3" style={{
                        marginBottom: '10px'
                      }} params={this.props.params}>
                      <Box params={this.props.params}>
                        <RaisedButton label="Add Tag" primary={true} style={{
                            width: '80%'
                          }} params={this.props.params} onMouseDown={this.onAddClick}
                          icon={<FontIcon className="fa fa-plus"/>}
                          ></RaisedButton>
                        </Box>
                      </Col>
                      <Col className="col-xs-12 col-sm-3" params={this.props.params}>
                        <Box style={{
                            marginBottom: '10px'
                          }} params={this.props.params}>
                          <RaisedButton label="Delete Tag" style={{
                              width: '80%'
                            }} secondary={true} params={this.props.params}
                            icon={<FontIcon className="fa fa-minus"/>}
                            onMouseDown={this.onDeleteClick}></RaisedButton>
                          </Box>
                        </Col>
                        <Col className="col-xs-12 col-sm-3" params={this.props.params}>
                          <Box style={{
                              marginBottom: '10px'
                            }} params={this.props.params}>
                            <FileReaderInput as="binary" id="my-file-input"
                              onChange={this.handleFile}>
                              <RaisedButton label="Load Music" style={{
                                width: '80%'
                              }} params={this.props.params}
                              icon={<FontIcon className="fa fa-music"/>}
                              ></RaisedButton></FileReaderInput>
                            </Box>
                          </Col>
                          <Col className="col-xs-12 col-sm-3" params={this.props.params}>
                            <Box style={{
                                marginBottom: '10px'
                              }} params={this.props.params}>
                              <RaisedButton label="Raw LRC" style={{
                                  width: '80%'
                                }} params={this.props.params}
                              icon={<FontIcon className="fa fa-file-text"/>}
                                onMouseDown={this.onDialogOpen}></RaisedButton>
                              </Box>
                            </Col>
                          </Row>
                        </Paper>
                      </Box>
                    </Col>
                  </Row>
                </div>
                <Dialog
                  title="Raw Lyrics"
                  actions={actions}
                  modal={true}
                  open={this.state.openDialog}
                  onRequestClose={this.onDialogClose}
                  >
                  <TextField
                    hintText="Paste lyrics here"
                    multiLine={true}
                    fullWidth={true}
                    defaultValue={this.state.dialogContent}
                    onChange={this.onDialogChange}
                    rows={1} rowsMax={10}
                    />
                </Dialog>
        <Row className="center-xs" params={this.props.params}>
          <Col className="col-xs-12 col-md-8" params={this.props.params}>
            <Box style={{
                marginTop: '10px'
              }} params={this.props.params}>
              <Paper zDepth={1} rounded={true} params={this.props.params}>
                <LyricsTable callbackParent={this.onCellClick}
                  lrcArray={this.props.lrcArray} selectedRow={this.props.rowIndex} />
              </Paper>
            </Box>
          </Col>
        </Row>
              </div>
            );
          }
        }
function select(state) {
  return {
    rowIndex:state.rowIndex,
    lrcArray:state.lrcArray,
    file:state.file
  }
}
export default connect(select)(Application);
