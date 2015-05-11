/// <reference path="typings/requirejs/require.d.ts" />

//Main typescript code file, contains the AMD implementation for loading scripts with require.js

import Init = require('initializer');

requirejs.config({
    baseUrl: 'scripts',
    paths: { 'jquery': 'jquery-2.1.3' }
});

requirejs(['jquery', 'initializer'],($) => { Init.windowOnLoad(); });