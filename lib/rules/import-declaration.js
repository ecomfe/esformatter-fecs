/**
 * @file transform ImportDeclaration
 * @author chris<wfsr@foxmail.com>
 */

const util = require('../util');

module.exports = {
    ImportDeclaration(node) {
        const left = util.token.findInBetween(node.startToken, node.endToken, '{');
        const right = util.token.findInBetweenFromEnd(node.fromToken, node.endToken, '}');

        if (!left || !right || left.loc.start.line === right.loc.start.line || node.specifiers.length < 2) {
            return;
        }

        node.specifiers.forEach(s => {
            util.linebreak.limitBefore(s.startToken, 1);
            util.indent.addLevel(s.startToken, 1);
        });

        util.linebreak.limitBefore(right, 1);
    }
};
