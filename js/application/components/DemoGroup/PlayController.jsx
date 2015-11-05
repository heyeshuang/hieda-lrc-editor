
import React, { Component, PropTypes } from 'react';

import Row from '../FlexboxGrid/Row.jsx';
import Col from '../FlexboxGrid/Col.jsx';
import Box from '../FlexboxGrid/Box.jsx';
import { IconButton } from 'material-ui';
import { Slider } from 'material-ui';

class PlayController extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    render() {
        // const { propOne, propTwo } = this.props;
        return (
            <div {...this.props}>
                <Row className="middle-xs around-xs" style={ {    margin: '0 20px '} }>
                    <Col className="col-xs-2 col-sm-1">
                        <Box>
                            <IconButton iconClassName="fa fa-play"
                                        tooltip="Play"
                                        disabled={ false }
                                        tooltipPosition="bottom-center"></IconButton>
                        </Box>
                    </Col>
                    <Col className="col-xs-2 col-sm-1">
                        <Box>
                            <IconButton iconClassName="fa fa-pause"
                                        tooltip="Pause"
                                        disabled={ false }
                                        tooltipPosition="bottom-center"></IconButton>
                        </Box>
                    </Col>
                    <Col className="col-xs-2 col-sm-1">
                        <Box>
                            <IconButton iconClassName="fa fa-backward"
                                        tooltip="Backward"
                                        disabled={ false }
                                        tooltipPosition="bottom-center"></IconButton>
                        </Box>
                    </Col>
                    <Col className="col-xs-2 col-sm-1">
                        <Box>
                            <IconButton iconClassName="fa fa-forward"
                                        tooltip="Forward"
                                        disabled={ false }
                                        tooltipPosition="bottom-center"></IconButton>
                        </Box>
                    </Col>
                    <Col className="col-xs-4 col-sm-8">
                        <Box style={ {    marginTop: '50px'} }>
                            <Slider></Slider>
                        </Box>
                    </Col>
                </Row>
            </div>
            );
    }
}


export default PlayController;