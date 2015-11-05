
import React, { Component, PropTypes } from 'react';

import { AppBar } from 'material-ui';
import { MenuItem } from 'material-ui';
import { LeftNav } from 'material-ui';

class DemoAppBar extends Component {

    constructor(props, content) {
        super(props, content);
        this.showLeftNavClick = this.showLeftNavClick.bind(this);
    }

    showLeftNavClick() {
        this.refs.leftNav.toggle();
    }

    render() {
        let menuItems = [
            { type: MenuItem.Types.SUBHEADER, text: 'Select page' },
            { type: MenuItem.Types.LINK, payload: 'set1', text: 'go to /set1' },
            { type: MenuItem.Types.LINK, payload: 'set2', text: 'go to /set2' },
            { type: MenuItem.Types.LINK, payload: 'progress', text: 'go to /progress' }
        ];
        return (
            <div>
                <AppBar {...this.props} onLeftIconButtonTouchTap={this.showLeftNavClick}/>
                <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
            </div>
            );
    }
}


DemoAppBar.propTypes = {
    title: PropTypes.string
};
DemoAppBar.defaultProps = {
    title: 'Brand'
};

export default DemoAppBar;