import React, {
  Component
} from 'react';

import Col from '../FlexboxGrid/Col.jsx';
import Box from '../FlexboxGrid/Box.jsx';
import IconButton from '@material-ui/core/IconButton';
import { Pause, PlayArrow, FastForward, FastRewind } from '@material-ui/icons';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tooltip from '@material-ui/core/Tooltip';

function MainButton(props) {
  const iconName = props.iconName
  if (iconName == "spin") {
    return <CircularProgress size={24} />
  }
  else if (iconName == "pause") {
    return <Pause />
  }
  else {
    return <PlayArrow />
  }
}
class ButtonGroup extends Component {

  render() {
    // const { propOne, propTwo } = this.props;
    // var buttonClass="col-xs-8 col-sm-4";
    var isPlaying = this.props.isPlaying;
    var isPause = this.props.isPause;
    var isLoading = this.props.isLoading;
    var isShowPlayBtn = !isPlaying || isPause;
    var buttonClickHandler = isShowPlayBtn ? this.props.onPlayBtnClick : this.props.onPauseBtnClick;
    var iconTooltip = "";
    var iconName = "";
    if (isLoading) {
      iconTooltip = "Loading";
      iconName = "spin"
    }
    else {
      iconTooltip = isShowPlayBtn ? "Play" : "Pause";
      iconName = isShowPlayBtn ? "play" : "pause";
    }

    return (
      <Col >
        <Box>
          <Tooltip title={iconTooltip}>
            <IconButton aria-label={iconName}
              onClick={buttonClickHandler} disabled={this.props.disabled}>
              <MainButton iconName={iconName} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Backward">
            <IconButton aria-label="Backward"
              onClick={this.props.onBackBtnClick} disabled={this.props.disabled}>
              <FastRewind />
            </IconButton>
          </Tooltip>
          <Tooltip title="Forward">
            <IconButton aria-label="Forward"
              onClick={this.props.onForwardBtnClick} disabled={this.props.disabled}>
              <FastForward />
            </IconButton>
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
