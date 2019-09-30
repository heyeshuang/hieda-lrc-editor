import React, {
  Component
} from 'react';

import Col from '../FlexboxGrid/Col.jsx';
import Box from '../FlexboxGrid/Box.jsx';
import IconButton from '@material-ui/core/IconButton';
import PauseIcon, from '@material-ui/icons/Pause';


import Tooltip from '@material-ui/core/Tooltip';

class ButtonGroup extends Component {

  render () {
    // const { propOne, propTwo } = this.props;
    // var buttonClass="col-xs-8 col-sm-4";
		var isPlaying = this.props.isPlaying;
		var isPause = this.props.isPause;
    var isLoading= this.props.isLoading;
		var isShowPlayBtn = !isPlaying || isPause;
		var buttonClickHandler = isShowPlayBtn ? this.props.onPlayBtnClick : this.props.onPauseBtnClick;
		var iconTooltip ="";
		var iconName = "";
    if (isLoading){
      iconTooltip = "Loading";
      iconName = "fa fa-circle-o-notch fa-spin"
    }
    else {
      iconTooltip = isShowPlayBtn ? "Play" : "Pause";
      iconName = isShowPlayBtn ? "fa fa-play" : "fa fa-pause";
    }

    return (
      <Col >
        <Box>
          <Tooltip title={iconTooltip}>
          <IconButton aria-label={iconName} 
            onClick={buttonClickHandler} disabled={this.props.disabled}></IconButton>
          </Tooltip>
          {/* <IconButton iconClassName="fa fa-backward" tooltip="Backward"
            onClick={this.props.onBackBtnClick} disabled={this.props.disabled}></IconButton>
          <IconButton iconClassName="fa fa-forward" tooltip="Forward"
            onClick={this.props.onForwardBtnClick} disabled={this.props.disabled}></IconButton> */}
        </Box>
      </Col>
    );
  }
}

export default ButtonGroup;
