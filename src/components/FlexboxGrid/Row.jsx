import React, { Component, PropTypes } from 'react';

class Row extends Component {

    constructor(props, content) {
        super(props, content);
    }

    render() {
        let className = 'row ' + this.props.className;
        return (
            <div {...this.props} className={className}>
                { this.props.children }
            </div>
            );
    }
}

export default Row;