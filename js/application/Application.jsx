import React, {
  Component,
  PropTypes
} from 'react';

import Row from './components/FlexboxGrid/Row.jsx';
import Col from './components/FlexboxGrid/Col.jsx';
import Box from './components/FlexboxGrid/Box.jsx';
import PlayController from './components/AudioPlayer/PlayController.jsx';
import LyricsTable from './components/LyricsTable/LyricsTable.jsx';
import {RaisedButton} from 'material-ui';
import {Paper} from 'material-ui';

class Application extends Component {
  render () {
    return (
      <div>
        <Row className="center-xs" params={this.props.params}>
          <Col className="col-xs-12 col-md-8" params={this.props.params}>
            <Box style={{
              marginTop: '200px'
            }} params={this.props.params}>
              <Paper zDepth={1} rounded={true} params={this.props.params}>
                <LyricsTable />
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
                  <PlayController />
                  <Row className="middle-xs around-xs" style={{
                    padding: '0 10px 20px'
                  }} params={this.props.params}>
                    <Col className="col-xs-12 col-sm-3" style={{
                      marginBottom: '10px'
                    }} params={this.props.params}>
                      <Box params={this.props.params}>
                        <RaisedButton label="Add" primary={true} style={{
                          width: '80%'
                        }} params={this.props.params}></RaisedButton>
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

export default Application;
