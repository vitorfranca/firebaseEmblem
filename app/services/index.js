'use strict';

angular.module('fire-emblem')
    .service('firebase', require('./firebase'))
    .service('characters', require('./characters'))
    .service('classes', require('./classes'))
    .service('skills', require('./skills'));