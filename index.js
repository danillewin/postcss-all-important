'use strict'
var postcss = require('postcss');

module.exports = postcss.plugin('postcss-important', important);

function important() {

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

