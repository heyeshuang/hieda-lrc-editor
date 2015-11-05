
import React, { Component, PropTypes } from 'react';

import { Avatar } from 'material-ui';
const avatarImg = require('../../assets/images/logo.png');

class AvatarWithImage extends Component {

    constructor(props, content) {
        super(props, content);
    }

    render() {
        return (
            <Avatar {...this.props} src={avatarImg}>
                { this.props.children }
            </Avatar>
        );
    }
}

export default AvatarWithImage;