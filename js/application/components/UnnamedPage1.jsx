import React, {
  Component,
  PropTypes
} from 'react';

import Row from '../components/FlexboxGrid/Row.jsx';
import Col from '../components/FlexboxGrid/Col.jsx';
import Box from '../components/FlexboxGrid/Box.jsx';
import PlayController from './AudioPlayer/PlayController.jsx';
import {RaisedButton} from 'material-ui';
import {FontIcon} from 'material-ui';
import {IconButton} from 'material-ui';
import {Paper} from 'material-ui';
import {Slider} from 'material-ui';
import {List} from 'material-ui';
import {ListItem} from 'material-ui';

class UnnamedPage1 extends Component {

  render () {
    return (
      <div>
        <Row className="center-xs" params={this.props.params}>
          <Col className="col-xs-12 col-md-8" params={this.props.params}>
            <Box style={{
              marginTop: '200px'
            }} params={this.props.params}>
              <Paper zDepth={1} rounded={true} style={{
                height: 1000
              }} params={this.props.params}>
                <List params={this.props.params}>
                  <ListItem primaryText="Inbox" leftIcon={<FontIcon className="fa fa-inbox" params={ this.props.params }></FontIcon>} params={this.props.params}></ListItem>
                  <ListItem primaryText="Inbox" leftIcon={<FontIcon className="fa fa-inbox" params={ this.props.params }></FontIcon>} params={this.props.params}></ListItem>
                </List>
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

export default UnnamedPage1;
