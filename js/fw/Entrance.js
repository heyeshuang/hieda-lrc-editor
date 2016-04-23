/**
 *  Entrance.js launch the application.
 *
 *  @author  He Yeshuang
 *  @date    Nov 4, 2015
 *
 */
'use strict';
import Splash from 'splash-screen';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Application from 'js/application/Application.jsx';
import hiedaApp from 'js/reducers.js'
import { changeFile, changeRow, modifyCell } from 'js/actions.js'
let store = createStore(hiedaApp)

class Entrance {

    constructor() {}

    beforeStart() {
        let injectTapEventPlugin = require('react-tap-event-plugin');
        //Needed for onTouchTap
        //Can go away when react 1.0 release
        //Check this repo:
        //https://github.com/zilverline/react-tap-event-plugin
        injectTapEventPlugin();
    }

    _destroySplash() {
        let _this = this;
        Splash.destroy();
        require('splash-screen/splash.min.css').unuse();
        setTimeout(function() {
            if (Splash.isRunning()) {
                _this.destroySplash();
            }
        }, 100);
    }

    launch() {
        ReactDOM.render(
          // <Provider store={store}>
            <Application />
          // </Provider>
          ,document.querySelector('#view'));
        console.log(store.getState());
        let unsubscribe = store.subscribe(() =>
          console.log(store.getState())
        );
        store.dispatch(changeFile("aaaaa"));
        store.dispatch(changeRow(5));
        store.dispatch(modifyCell(5,0,"aaaaa"));
        unsubscribe();
    }

    run() {
        this.beforeStart();
        this._destroySplash();
        this.launch();
    }

}

export default Entrance;
