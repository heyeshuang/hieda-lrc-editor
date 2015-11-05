'use strict';

import React from 'react';
import { isFunction } from 'lodash';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import lightTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';

import Page from './components/UnnamedPage1.jsx'

class Application extends React.Component {


    render() {
        return (
          <Page />
            );
    }
}


export default Application;
