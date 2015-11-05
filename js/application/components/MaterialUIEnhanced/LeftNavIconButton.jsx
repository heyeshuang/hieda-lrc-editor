
import React, { Component, PropTypes } from 'react';

import { IconButton } from 'material-ui';
import { MenuItem } from 'material-ui';
import { LeftNav } from 'material-ui';

class LeftNavIconButton extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
        this.showLeftNavClick = this.showLeftNavClick.bind(this);
    }

    showLeftNavClick() {
        this.refs.leftNav.toggle();
    }

    render() {

        let menuItems = [
            { route: 'get-started', text: 'Get Started' },
            { route: 'customization', text: 'Customization' },
            { route: 'components', text: 'Components' },
            { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
            { type: MenuItem.Types.LINK, payload: 'https://github.com/callemall/material-ui', text: 'GitHub' },
            { text: 'Disabled', disabled: true },
            { type: MenuItem.Types.LINK, payload: 'https://www.google.com', text: 'Disabled Link', disabled: true }
        ];

        // const { propOne, propTwo } = this.props;
        return (
            <div style={{display: 'inline-block'}}>
                <IconButton {...this.props} onTouchTap={this.showLeftNavClick}>
                    { this.props.children }
                </IconButton>
                <LeftNav ref="leftNav" docked={this.props.docked} menuItems={menuItems} />
            </div>
        );
    }
}


LeftNavIconButton.propTypes = {
    iconClassName: PropTypes.string,
    tooltip: PropTypes.string,
    disabled: PropTypes.bool,
    tooltipPosition: PropTypes.string,
    docked: PropTypes.bool
};
LeftNavIconButton.defaultProps = {
    iconClassName: 'fa fa-bars',
    tooltip: 'Left side navigation bar',
    disabled: false,
    tooltipPosition: 'bottom-center',
    docked: false
};

export default LeftNavIconButton;