/**
 *  index.js, the starter.
 *
 *  @author  He Yeshuang
 *  @date    Nov 4, 2015
 *
 */
'use strict';
require.ensure(['splash-screen/splash.min.css', 'splash-screen'], function(require) {

    require('splash-screen/splash.min.css').use();
    require('splash-screen').enable('circular');
});

require.ensure([
    'less/main.less',
    'splash-screen',
    './fw/Entrance'
], function(require) {

    require('less/main.less');

    var Entrance = require('./fw/Entrance').default;
    (new Entrance()).run();
});
