import React, {
  Component,
  PropTypes
} from 'react';

import ButtonGroup from './ButtonGroup.jsx';
import Snackbar from 'material-ui/Snackbar';
import Row from '../FlexboxGrid/Row.jsx';
import Col from '../FlexboxGrid/Col.jsx';
import Box from '../FlexboxGrid/Box.jsx';
import {Slider} from 'material-ui';
import {Howl} from './howler.min.js';

class PlayController extends Component {
  _bind(...methods) {
    methods.forEach( (method) => this[method] = this[method].bind(this) );
  }
  constructor() {
    super();
    this.state = {
      isPlaying: false,
      isPause: false,
      isLoading: false,
      volume: 0.5,
      step: 10,
      seek: 0,
      initSucceed: false,
      openError: false,
      songs: [
        {
          url: "statics/Wilf-YouAreMySunshine.mp3"
        }
      ]
    };
    this._bind('onBackBtnClick','onForwardBtnClick','onPauseBtnClick',
                'onPlayBtnClick',"onSliderChange",'play',
                'initSoundObject','initSoundObjectCompleted',
                'clearSoundObject','_play','playEnd','pause','stop',
                'updateCurrentDuration','stopUpdateCurrentDuration',
                'seekTo','seekNow','adjustVolumeTo','onLoadError',
              'onSnackbarClose'
              );
  }

  render () {
    // const { propOne, propTwo } = this.props;
    return (
      <div {...this.props}>
        <Row className="middle-xs around-xs" style={{
          margin: '0 20px '
        }}>
          <ButtonGroup disabled={this.props.file.fileURL.length == 0}
            isPlaying={this.state.isPlaying} isPause={this.state.isPause}
            isLoading={this.state.isLoading}
             onPlayBtnClick={this.onPlayBtnClick} onPauseBtnClick={this.onPauseBtnClick}
             onBackBtnClick={this.onBackBtnClick} onForwardBtnClick={this.onForwardBtnClick}/>
          <Col className="col-xs-5 col-sm-9">
            <Box style={{
              marginTop: '50px'
            }}>
              <Slider name="playProgress" value={this.state.seek/this.state.duration}
                disabled={!this.howler}
                onChange={this.onSliderChange} step={0.0001}
                ></Slider>
            </Box>
          </Col>
        </Row>
        <Snackbar
          open={this.state.openError}
          message="Incompatible File Format"
          autoHideDuration={4000}
          onRequestClose={this.onSnackbarClose}
        />
      </div>
    );
  }
  //ideal: statics onBackBtnClick=()=>{...}, autobind `this`
  onSnackbarClose (){
    this.setState({
      openError: false
    })
  }
  onBackBtnClick  () {
    var p=(this.state.seek-this.state.step)/this.state.duration;
    this.seekTo((p>0?p:0));
  }
  onForwardBtnClick () {
    console.log(this.howler)
    this.seekTo((this.state.seek+this.state.step)/this.state.duration);
  }

  onPlayBtnClick () {
    if (this.state.isPlaying && !this.state.isPause) {
      return;
    };
    this.play();
  }

  onPauseBtnClick () {
    var isPause = !this.state.isPause;
    this.setState({isPause: isPause});
    isPause
      ? this.pause()
      : this._play();
  }
  onSliderChange (event,value){
    if (this.howler) this.seekTo(value);
  }
  play () {

    this.setState({isPlaying: true, isPause: false});

    if (!this.howler) {
      this.initSoundObject();
    } else {
      // var songUrl = this.state.songs[0].url;
      var songUrl =  this.props.file.fileURL;
      if (songUrl != this.howler._src) {
        this.initSoundObject();
      } else {
        this._play();
      }
    }
  }

  initSoundObject () {
    this.clearSoundObject();
    this.setState({isLoading: true});

    // var song = this.state.songs[0];
    var song = this.props.file.fileURL;
    this.howler = new Howl({src: [song],
                            volume: this.state.volume,
                            format: [this.props.file.fileFormat],
                            // html5: true,
                            onloaderror: this.onLoadError,
                            onload: this.initSoundObjectCompleted,
                            onend: this.playEnd});
  }
  onLoadError(){
    console.log("error");
    this.clearSoundObject();
    this.setState({initSucceed: false,
      isLoading: false,
      isPlaying: false,
      isPause: false,
      openError: true
    });
  }

  clearSoundObject () {
    if (this.howler) {
      this.howler
        .stop();
      this.howler = null;
    }
  }

  initSoundObjectCompleted () {
    this._play();
    this.setState({duration: this.howler.duration(),
      initSucceed: true,
      isLoading: false,
      openError: false
    });
    }

	_play() {
		this.howler.play();
		this.stopUpdateCurrentDuration();
		this.updateCurrentDuration();
		this.interval = setInterval(this.updateCurrentDuration, 1000);
	}

	playEnd() {
    this.stop();
	}

	stop() {
		this.stopUpdateCurrentDuration();
		this.setState({ seek: 0, isPlaying: false });
	}

	pause (){
		this.howler.pause();
		this.stopUpdateCurrentDuration();
	}
	updateCurrentDuration() {
		this.setState({ seek: this.howler.seek() });
	}

	stopUpdateCurrentDuration() {
		clearInterval(this.interval);
	}

	seekTo(percent) {
		var seek = this.state.duration * percent;
		this.howler.seek(seek);
		this.setState({ seek: seek });
	}

  seekNow() {
    return this.howler.seek();
  }
	adjustVolumeTo(percent) {
		this.setState({ volume: percent });
		if (this.howler) {
			this.howler.volume(percent);
		}
	}
}

export default PlayController;
