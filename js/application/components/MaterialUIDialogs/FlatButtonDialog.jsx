
import React, { Component, PropTypes } from 'react';

import { FlatButton } from 'material-ui';
import { Dialog } from 'material-ui';

class FlatButtonDialog extends Component {

    constructor(props, content) {
        super(props, content); // this.state = { someProp: 'Default' };
        this.onDialogSubmit = this.onDialogSubmit.bind(this);
        this.onDialogCancel = this.onDialogCancel.bind(this);
        this.handleShowDialog = this.handleShowDialog.bind(this);
    }

    onDialogSubmit(){
        if(this.props.onDialogSubmit){
            this.props.onDialogSubmit();
        }
    }

    onDialogCancel() {
        if(this.props.onDialogCancel){
            if(this.props.onDialogCancel()){
                this.refs.dialog.dismiss();
            }
        } else {
            this.refs.dialog.dismiss();
        }
    }

    handleShowDialog(){
        this.refs.dialog.show();
    };

    render() {
        let standardActions = [
            { text: 'Cancel' },
            { text: 'Submit', onTouchTap: this.onDialogSubmit, ref: 'submit' }
        ];
        const { dialogTitle, modal } = this.props;
        return (
            <div style={{display: 'inline-block'}}>
                <FlatButton {...this.props} onTouchTap={this.handleShowDialog}/>
                <Dialog
                    ref="dialog"
                    title={dialogTitle}
                    actions={standardActions}
                    modal={modal} autoDetectWindowHeight={true}>
                    <div>
                        <p><span>Change content of this Dialog</span></p>
                    </div>
                </Dialog>
            </div>
        );
    }
}

FlatButtonDialog.propTypes = {
    dialogTitle: PropTypes.string,
    modal: PropTypes.bool,
    onDialogSubmit: PropTypes.func,
    onDialogCancel: PropTypes.func
};
FlatButtonDialog.defaultProps = {
    label: 'Default Dialog',
    modal: true,
    onDialogSubmit: null,
    onDialogCancel: null
};

export default FlatButtonDialog;