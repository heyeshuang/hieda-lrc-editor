
import React, { Component, PropTypes } from 'react';

import { RaisedButton } from 'material-ui';
import { Snackbar } from 'material-ui';

class SnackbarRaisedButton extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
        this.handleAction = this.handleAction.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleAction(){
        alert('We removed the event from your calendar.');
    }

    handleClick(e) {
        this.refs.snackbar.show();
    }

    render() {
        const { autoHideDuration, label } = this.props;
        return (
            <div {...this.props}>
                <RaisedButton label={label} onTouchTap={this.handleClick}></RaisedButton>
                <Snackbar
                    ref="snackbar"
                    message="Event added to your calendar"
                    action="undo"
                    autoHideDuration={autoHideDuration}
                    onActionTouchTap={this.handleAction}/>
            </div>
            );
    }
}

SnackbarRaisedButton.propTypes = {
    style: PropTypes.object,
    autoHideDuration: PropTypes.number,
    label: PropTypes.string
};
SnackbarRaisedButton.defaultProps = {
    style: {
        display: 'inline-block'
    },
    autoHideDuration: 0,
    label: "Snackbar toggle"
};

export default SnackbarRaisedButton;