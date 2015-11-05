
import React, { Component, PropTypes } from 'react';

import { IconButton } from 'material-ui';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import MenuDivider from 'material-ui/lib/menus/menu-divider';

class IconMenuX extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    render() {
        const { menuItems } = this.props;
        let menuList = [];
        if(menuItems && menuItems.length > 0){
            menuItems.map( (item, index) => {
                menuList.push(
                    <MenuItem key={index} primaryText={item.primaryText} />
                );
            });
        }
        let buttonElement = <IconButton iconClassName="fa fa-ellipsis-v" ></IconButton>;
        return (
            <IconMenu
                {...this.props}
                iconButtonElement={buttonElement}>
                {menuList}
            </IconMenu>
        );
    }
}

IconMenuX.defaultProps = {
    menuItems: [{primaryText: "Refresh"}, {primaryText: "Send feedback"}]
};

export default IconMenuX;