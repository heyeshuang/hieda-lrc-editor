
import React, { Component, PropTypes } from 'react';

import { Avatar } from 'material-ui';
import { Styles } from 'material-ui';

class AvatarX extends Component {

    constructor(props, content) {
        super(props, content);
        // this.state = { someProp: 'Default' };

    }


    render() {
        const { color, backgroundColor } = this.props;
        let colorObj = null;
        if(color && color.length > 0){
            colorObj = Styles.Colors[color];
        }
        let backgroundColorObj = null;
        if(backgroundColor && backgroundColor.length > 0){
            backgroundColorObj = Styles.Colors[backgroundColor];
        }
        return (
            <Avatar {...this.props} color={colorObj} backgroundColor={backgroundColorObj}>
                { this.props.children }
            </Avatar>
            );
    }
}

export default AvatarX;