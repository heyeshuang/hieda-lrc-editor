
import React, { Component, PropTypes } from 'react';

class Box extends Component {

    constructor(props, content) {
        super(props, content);
    }

    render() {
        return (
            <div {...this.props} className="box">
                { this.props.children }
            </div>
        );
    }
}

export default Box;