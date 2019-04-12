'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('prismjs/themes/prism-tomorrow.css');
var Prism = _interopDefault(require('prismjs'));
var React = require('react');
var React__default = _interopDefault(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

var CodeInline = function (_a) {
    var children = _a.children, _b = _a.language, language = _b === void 0 ? "javascript" : _b, lang = _a.lang, props = __rest(_a, ["children", "language", "lang"]);
    var codeRef = React.useRef(null);
    React.useEffect(function () {
        var current = codeRef.current;
        if (current !== null) {
            Prism.highlightElement(current);
        }
    }, [codeRef]);
    var space = children.search(/\S/) - 1;
    return (React__default.createElement("code", __assign({}, props, { ref: codeRef, className: "language-" + (language || lang) }), children
        .split("\n")
        .map(function (line) { return line.slice(space); })
        .slice(1)
        .join("\n")));
};
var Code = function (_a) {
    var style = _a.style, className = _a.className, props = __rest(_a, ["style", "className"]);
    return (React__default.createElement("pre", __assign({}, { style: style, className: className }),
        React__default.createElement(CodeInline, __assign({}, props))));
};

exports.Code = Code;
exports.CodeInline = CodeInline;
