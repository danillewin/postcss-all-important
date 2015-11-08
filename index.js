'use strict'
var postcss = require('postcss');

module.exports = postcss.plugin('postcss-all-important', allImportant);

function allImportant(options) {

    options = options || {};

    return function (root) {
        root.walkRules(function (rule) {
            rule.each(function (child) {
                if (child.type === 'decl') {
                    child.important = true
                }
            });
        });
    };
}

