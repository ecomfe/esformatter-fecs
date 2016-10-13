/**
 * @file transform ObjectPattern
 * @author chris<wfsr@foxmail.com>
 */
'use strict';

const util = require('../util');

module.exports = {

    ObjectPattern(node) {
        const left = node.startToken;
        const right = node.endToken;

        if (left.loc.start.line === right.loc.start.line || node.properties.length < 2) {
            return;
        }

        node.properties.forEach(p => util.linebreak.limitBefore(p.startToken, 1));

        util.linebreak.limitBefore(right, 1);
    }

};
