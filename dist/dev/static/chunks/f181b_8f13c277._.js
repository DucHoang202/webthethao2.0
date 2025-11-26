(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/webthethao2.0/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/webthethao2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/webthethao2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/webthethao2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/webthethao2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/webthethao2.0/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/webthethao2.0/node_modules/css-mediaquery/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/ exports.match = matchQuery;
exports.parse = parseQuery;
// -----------------------------------------------------------------------------
var RE_MEDIA_QUERY = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, RE_MQ_EXPRESSION = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, RE_MQ_FEATURE = /^(?:(min|max)-)?(.+)/, RE_LENGTH_UNIT = /(em|rem|px|cm|mm|in|pt|pc)?$/, RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;
function matchQuery(mediaQuery, values) {
    return parseQuery(mediaQuery).some(function(query) {
        var inverse = query.inverse;
        // Either the parsed or specified `type` is "all", or the types must be
        // equal for a match.
        var typeMatch = query.type === 'all' || values.type === query.type;
        // Quit early when `type` doesn't match, but take "not" into account.
        if (typeMatch && inverse || !(typeMatch || inverse)) {
            return false;
        }
        var expressionsMatch = query.expressions.every(function(expression) {
            var feature = expression.feature, modifier = expression.modifier, expValue = expression.value, value = values[feature];
            // Missing or falsy values don't match.
            if (!value) {
                return false;
            }
            switch(feature){
                case 'orientation':
                case 'scan':
                    return value.toLowerCase() === expValue.toLowerCase();
                case 'width':
                case 'height':
                case 'device-width':
                case 'device-height':
                    expValue = toPx(expValue);
                    value = toPx(value);
                    break;
                case 'resolution':
                    expValue = toDpi(expValue);
                    value = toDpi(value);
                    break;
                case 'aspect-ratio':
                case 'device-aspect-ratio':
                case /* Deprecated */ 'device-pixel-ratio':
                    expValue = toDecimal(expValue);
                    value = toDecimal(value);
                    break;
                case 'grid':
                case 'color':
                case 'color-index':
                case 'monochrome':
                    expValue = parseInt(expValue, 10) || 1;
                    value = parseInt(value, 10) || 0;
                    break;
            }
            switch(modifier){
                case 'min':
                    return value >= expValue;
                case 'max':
                    return value <= expValue;
                default:
                    return value === expValue;
            }
        });
        return expressionsMatch && !inverse || !expressionsMatch && inverse;
    });
}
function parseQuery(mediaQuery) {
    return mediaQuery.split(',').map(function(query) {
        query = query.trim();
        var captures = query.match(RE_MEDIA_QUERY), modifier = captures[1], type = captures[2], expressions = captures[3] || '', parsed = {};
        parsed.inverse = !!modifier && modifier.toLowerCase() === 'not';
        parsed.type = type ? type.toLowerCase() : 'all';
        // Split expressions into a list.
        expressions = expressions.match(/\([^\)]+\)/g) || [];
        parsed.expressions = expressions.map(function(expression) {
            var captures = expression.match(RE_MQ_EXPRESSION), feature = captures[1].toLowerCase().match(RE_MQ_FEATURE);
            return {
                modifier: feature[1],
                feature: feature[2],
                value: captures[2]
            };
        });
        return parsed;
    });
}
// -- Utilities ----------------------------------------------------------------
function toDecimal(ratio) {
    var decimal = Number(ratio), numbers;
    if (!decimal) {
        numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/);
        decimal = numbers[1] / numbers[2];
    }
    return decimal;
}
function toDpi(resolution) {
    var value = parseFloat(resolution), units = String(resolution).match(RE_RESOLUTION_UNIT)[1];
    switch(units){
        case 'dpcm':
            return value / 2.54;
        case 'dppx':
            return value * 96;
        default:
            return value;
    }
}
function toPx(length) {
    var value = parseFloat(length), units = String(length).match(RE_LENGTH_UNIT)[1];
    switch(units){
        case 'em':
            return value * 16;
        case 'rem':
            return value * 16;
        case 'cm':
            return value * 96 / 2.54;
        case 'mm':
            return value * 96 / 2.54 / 10;
        case 'in':
            return value * 96;
        case 'pt':
            return value * 72;
        case 'pc':
            return value * 72 / 12;
        default:
            return value;
    }
}
}),
"[project]/webthethao2.0/node_modules/matchmediaquery/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var staticMatch = __turbopack_context__.r("[project]/webthethao2.0/node_modules/css-mediaquery/index.js [app-client] (ecmascript)").match;
var dynamicMatch = typeof window !== 'undefined' ? window.matchMedia : null;
// our fake MediaQueryList
function Mql(query, values, forceStatic) {
    var self = this;
    var mql;
    // matchMedia will return null in FF when it's called in a hidden iframe
    // ref: https://stackoverflow.com/a/12330568
    if (dynamicMatch && !forceStatic) mql = dynamicMatch.call(window, query);
    if (mql) {
        this.matches = mql.matches;
        this.media = mql.media;
        // TODO: is there a time it makes sense to remove this listener?
        mql.addListener(update);
    } else {
        this.matches = staticMatch(query, values);
        this.media = query;
    }
    this.addListener = addListener;
    this.removeListener = removeListener;
    this.dispose = dispose;
    function addListener(listener) {
        if (mql) {
            mql.addListener(listener);
        }
    }
    function removeListener(listener) {
        if (mql) {
            mql.removeListener(listener);
        }
    }
    // update ourselves!
    function update(evt) {
        self.matches = evt.matches;
        self.media = evt.media;
    }
    function dispose() {
        if (mql) {
            mql.removeListener(update);
        }
    }
}
function matchMedia(query, values, forceStatic) {
    return new Mql(query, values, forceStatic);
}
module.exports = matchMedia;
}),
"[project]/webthethao2.0/node_modules/hyphenate-style-name/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable no-var, prefer-template */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};
function toHyphenLower(match) {
    return '-' + match.toLowerCase();
}
function hyphenateStyleName(name) {
    if (cache.hasOwnProperty(name)) {
        return cache[name];
    }
    var hName = name.replace(uppercasePattern, toHyphenLower);
    return cache[name] = msPattern.test(hName) ? '-' + hName : hName;
}
const __TURBOPACK__default__export__ = hyphenateStyleName;
}),
"[project]/webthethao2.0/node_modules/shallow-equal/dist/index.modern.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shallowEqual",
    ()=>shallowEqual,
    "shallowEqualArrays",
    ()=>shallowEqualArrays,
    "shallowEqualObjects",
    ()=>shallowEqualObjects
]);
function shallowEqualArrays(arrA, arrB) {
    if (arrA === arrB) {
        return true;
    }
    if (!arrA || !arrB) {
        return false;
    }
    const len = arrA.length;
    if (arrB.length !== len) {
        return false;
    }
    for(let i = 0; i < len; i++){
        if (arrA[i] !== arrB[i]) {
            return false;
        }
    }
    return true;
}
function shallowEqualObjects(objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (!objA || !objB) {
        return false;
    }
    const aKeys = Object.keys(objA);
    const bKeys = Object.keys(objB);
    const len = aKeys.length;
    if (bKeys.length !== len) {
        return false;
    }
    for(let i = 0; i < len; i++){
        const key = aKeys[i];
        if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
            return false;
        }
    }
    return true;
}
function shallowEqual(a, b) {
    const aIsArr = Array.isArray(a);
    const bIsArr = Array.isArray(b);
    if (aIsArr !== bIsArr) {
        return false;
    }
    if (aIsArr && bIsArr) {
        return shallowEqualArrays(a, b);
    }
    return shallowEqualObjects(a, b);
}
;
 //# sourceMappingURL=index.modern.mjs.map
}),
"[project]/webthethao2.0/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/webthethao2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/webthethao2.0/node_modules/react-is/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/webthethao2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)");
}
}),
"[project]/webthethao2.0/node_modules/next/dist/build/polyfills/object-assign.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var assign = Object.assign.bind(Object);
module.exports = assign;
module.exports.default = module.exports; //# sourceMappingURL=object-assign.js.map
}),
"[project]/webthethao2.0/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}),
"[project]/webthethao2.0/node_modules/prop-types/lib/has.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}),
"[project]/webthethao2.0/node_modules/prop-types/checkPropTypes.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/webthethao2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var ReactPropTypesSecret = __turbopack_context__.r("[project]/webthethao2.0/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)");
    var loggedTypeFailures = {};
    var has = __turbopack_context__.r("[project]/webthethao2.0/node_modules/prop-types/lib/has.js [app-client] (ecmascript)");
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if ("TURBOPACK compile-time truthy", 1) {
        for(var typeSpecName in typeSpecs){
            if (has(typeSpecs, typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                        err.name = 'Invariant Violation';
                        throw err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (error && !(error instanceof Error)) {
                    printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
                }
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : '';
                    printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
                }
            }
        }
    }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */ checkPropTypes.resetWarningCache = function() {
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        loggedTypeFailures = {};
    }
};
module.exports = checkPropTypes;
}),
"[project]/webthethao2.0/node_modules/prop-types/factoryWithTypeCheckers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/webthethao2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var ReactIs = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-is/index.js [app-client] (ecmascript)");
var assign = __turbopack_context__.r("[project]/webthethao2.0/node_modules/next/dist/build/polyfills/object-assign.js [app-client] (ecmascript)");
var ReactPropTypesSecret = __turbopack_context__.r("[project]/webthethao2.0/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)");
var has = __turbopack_context__.r("[project]/webthethao2.0/node_modules/prop-types/lib/has.js [app-client] (ecmascript)");
var checkPropTypes = __turbopack_context__.r("[project]/webthethao2.0/node_modules/prop-types/checkPropTypes.js [app-client] (ecmascript)");
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */ var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */ function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }
    /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */ var ANONYMOUS = '<<anonymous>>';
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */ /*eslint-disable no-self-compare*/ function is(x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    }
    /*eslint-enable no-self-compare*/ /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */ function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data : {};
        this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                    err.name = 'Invariant Violation';
                    throw err;
                } else if (("TURBOPACK compile-time value", "development") !== 'production' && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                        printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
                    expectedType: expectedType
                });
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for(var i = 0; i < propValue.length; i++){
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (arguments.length > 1) {
                    printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
                } else {
                    printWarning('Invalid argument supplied to oneOf, expected an array.');
                }
            }
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for(var i = 0; i < expectedValues.length; i++){
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === 'symbol') {
                    return String(value);
                }
                return value;
            });
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for(var key in propValue){
                if (has(propValue, key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            ("TURBOPACK compile-time truthy", 1) ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : "TURBOPACK unreachable";
            return emptyFunctionThatReturnsNull;
        }
        for(var i = 0; i < arrayOfTypeCheckers.length; i++){
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                if (checkerResult == null) {
                    return null;
                }
                if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
                    expectedTypes.push(checkerResult.data.expectedType);
                }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for(var key in shapeTypes){
                var checker = shapeTypes[key];
                if (typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            // We need to check all keys in case some are required but missing from props.
            var allKeys = assign({}, props[propName], shapeTypes);
            for(var key in allKeys){
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch(typeof propValue){
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                    return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                        while(!(step = iterator.next()).done){
                            if (!isNode(step.value)) {
                                return false;
                            }
                        }
                    } else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while(!(step = iterator.next()).done){
                            var entry = step.value;
                            if (entry) {
                                if (!isNode(entry[1])) {
                                    return false;
                                }
                            }
                        }
                    }
                } else {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
            return true;
        }
        // falsy value can't be a Symbol
        if (!propValue) {
            return false;
        }
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }
        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
        }
        return false;
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) {
                return 'date';
            } else if (propValue instanceof RegExp) {
                return 'regexp';
            }
        }
        return propType;
    }
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch(type){
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};
}),
"[project]/webthethao2.0/node_modules/prop-types/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/webthethao2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
if ("TURBOPACK compile-time truthy", 1) {
    var ReactIs = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-is/index.js [app-client] (ecmascript)");
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __turbopack_context__.r("[project]/webthethao2.0/node_modules/prop-types/factoryWithTypeCheckers.js [app-client] (ecmascript)")(ReactIs.isElement, throwOnDirectAccess);
} else //TURBOPACK unreachable
;
}),
"[project]/webthethao2.0/node_modules/react-responsive/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Context",
    ()=>Context,
    "MediaQuery",
    ()=>MediaQuery,
    "default",
    ()=>MediaQuery,
    "toQuery",
    ()=>toQuery,
    "useMediaQuery",
    ()=>useMediaQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$matchmediaquery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/matchmediaquery/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$hyphenate$2d$style$2d$name$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/hyphenate-style-name/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$shallow$2d$equal$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/shallow-equal/dist/index.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/prop-types/index.js [app-client] (ecmascript)");
;
;
;
;
;
const stringOrNumber = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number
]);
// media types
const types = {
    all: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    grid: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    aural: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    braille: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    handheld: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    print: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    projection: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    screen: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    tty: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    tv: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    embossed: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
};
// properties that match media queries
const matchers = {
    orientation: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'portrait',
        'landscape'
    ]),
    scan: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'progressive',
        'interlace'
    ]),
    aspectRatio: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    deviceAspectRatio: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    height: stringOrNumber,
    deviceHeight: stringOrNumber,
    width: stringOrNumber,
    deviceWidth: stringOrNumber,
    color: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    colorIndex: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    monochrome: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    resolution: stringOrNumber,
    type: Object.keys(types)
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { type, ...featureMatchers } = matchers;
// media features
const features = {
    minAspectRatio: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    maxAspectRatio: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    minDeviceAspectRatio: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    maxDeviceAspectRatio: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    minHeight: stringOrNumber,
    maxHeight: stringOrNumber,
    minDeviceHeight: stringOrNumber,
    maxDeviceHeight: stringOrNumber,
    minWidth: stringOrNumber,
    maxWidth: stringOrNumber,
    minDeviceWidth: stringOrNumber,
    maxDeviceWidth: stringOrNumber,
    minColor: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    maxColor: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    minColorIndex: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    maxColorIndex: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    minMonochrome: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    maxMonochrome: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    minResolution: stringOrNumber,
    maxResolution: stringOrNumber,
    ...featureMatchers
};
const all = {
    ...types,
    ...features
};
var mq = {
    all: all,
    types: types,
    matchers: matchers,
    features: features
};
const negate = (cond)=>`not ${cond}`;
const keyVal = (k, v)=>{
    const realKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$hyphenate$2d$style$2d$name$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(k);
    // px shorthand
    if (typeof v === 'number') {
        v = `${v}px`;
    }
    if (v === true) {
        return realKey;
    }
    if (v === false) {
        return negate(realKey);
    }
    return `(${realKey}: ${v})`;
};
const join = (conds)=>conds.join(' and ');
const toQuery = (obj)=>{
    const rules = [];
    Object.keys(mq.all).forEach((k)=>{
        const v = obj[k];
        if (v != null) {
            rules.push(keyVal(k, v));
        }
    });
    return join(rules);
};
const Context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const makeQuery = (settings)=>settings.query || toQuery(settings);
const hyphenateKeys = (obj)=>{
    if (!obj) return undefined;
    const keys = Object.keys(obj);
    return keys.reduce((result, key)=>{
        result[(0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$hyphenate$2d$style$2d$name$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(key)] = obj[key];
        return result;
    }, {});
};
const useIsUpdate = ()=>{
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsUpdate.useEffect": ()=>{
            ref.current = true;
        }
    }["useIsUpdate.useEffect"], []);
    return ref.current;
};
const useDevice = (deviceFromProps)=>{
    const deviceFromContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Context);
    const getDevice = ()=>hyphenateKeys(deviceFromProps) || hyphenateKeys(deviceFromContext);
    const [device, setDevice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getDevice);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDevice.useEffect": ()=>{
            const newDevice = getDevice();
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$shallow$2d$equal$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(device, newDevice)) {
                setDevice(newDevice);
            }
        }
    }["useDevice.useEffect"], [
        deviceFromProps,
        deviceFromContext
    ]);
    return device;
};
const useQuery = (settings)=>{
    const getQuery = ()=>makeQuery(settings);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getQuery);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useQuery.useEffect": ()=>{
            const newQuery = getQuery();
            if (query !== newQuery) {
                setQuery(newQuery);
            }
        }
    }["useQuery.useEffect"], [
        settings
    ]);
    return query;
};
const useMatchMedia = (query, device)=>{
    const getMatchMedia = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$matchmediaquery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(query, device || {}, !!device);
    const [mq, setMq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getMatchMedia);
    const isUpdate = useIsUpdate();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMatchMedia.useEffect": ()=>{
            if (isUpdate) {
                // skip on mounting, it has already been set
                const newMq = getMatchMedia();
                setMq(newMq);
                return ({
                    "useMatchMedia.useEffect": ()=>{
                        if (newMq) {
                            newMq.dispose();
                        }
                    }
                })["useMatchMedia.useEffect"];
            }
        }
    }["useMatchMedia.useEffect"], [
        query,
        device
    ]);
    return mq;
};
const useMatches = (mediaQuery)=>{
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(mediaQuery.matches);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMatches.useEffect": ()=>{
            const updateMatches = {
                "useMatches.useEffect.updateMatches": (ev)=>{
                    setMatches(ev.matches);
                }
            }["useMatches.useEffect.updateMatches"];
            mediaQuery.addListener(updateMatches);
            setMatches(mediaQuery.matches);
            return ({
                "useMatches.useEffect": ()=>{
                    mediaQuery.removeListener(updateMatches);
                }
            })["useMatches.useEffect"];
        }
    }["useMatches.useEffect"], [
        mediaQuery
    ]);
    return matches;
};
const useMediaQuery = (settings, device, onChange)=>{
    const deviceSettings = useDevice(device);
    const query = useQuery(settings);
    if (!query) throw new Error('Invalid or missing MediaQuery!');
    const mq = useMatchMedia(query, deviceSettings);
    const matches = useMatches(mq);
    const isUpdate = useIsUpdate();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMediaQuery.useEffect": ()=>{
            if (isUpdate && onChange) {
                onChange(matches);
            }
        }
    }["useMediaQuery.useEffect"], [
        matches
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMediaQuery.useEffect": ()=>({
                "useMediaQuery.useEffect": ()=>{
                    if (mq) {
                        mq.dispose();
                    }
                }
            })["useMediaQuery.useEffect"]
    }["useMediaQuery.useEffect"], []);
    return matches;
};
// ReactNode and ReactElement typings are a little funky for functional components, so the ReactElement cast is needed on the return
const MediaQuery = ({ children, device, onChange, ...settings })=>{
    const matches = useMediaQuery(settings, device, onChange);
    if (typeof children === 'function') {
        return children(matches);
    }
    return matches ? children : null;
};
;
 //# sourceMappingURL=index.js.map
}),
"[project]/webthethao2.0/node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * react-router v7.9.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ __turbopack_context__.s([
    "Action",
    ()=>Action,
    "Await",
    ()=>Await,
    "AwaitContextProvider",
    ()=>AwaitContextProvider,
    "BrowserRouter",
    ()=>BrowserRouter,
    "CRITICAL_CSS_DATA_ATTRIBUTE",
    ()=>CRITICAL_CSS_DATA_ATTRIBUTE,
    "DataRouterContext",
    ()=>DataRouterContext,
    "DataRouterStateContext",
    ()=>DataRouterStateContext,
    "ENABLE_DEV_WARNINGS",
    ()=>ENABLE_DEV_WARNINGS,
    "ErrorResponseImpl",
    ()=>ErrorResponseImpl,
    "FetchersContext",
    ()=>FetchersContext,
    "Form",
    ()=>Form,
    "FrameworkContext",
    ()=>FrameworkContext,
    "HashRouter",
    ()=>HashRouter,
    "HistoryRouter",
    ()=>HistoryRouter,
    "IDLE_BLOCKER",
    ()=>IDLE_BLOCKER,
    "IDLE_FETCHER",
    ()=>IDLE_FETCHER,
    "IDLE_NAVIGATION",
    ()=>IDLE_NAVIGATION,
    "Link",
    ()=>Link,
    "Links",
    ()=>Links,
    "LocationContext",
    ()=>LocationContext,
    "MemoryRouter",
    ()=>MemoryRouter,
    "Meta",
    ()=>Meta,
    "NO_BODY_STATUS_CODES",
    ()=>NO_BODY_STATUS_CODES,
    "NavLink",
    ()=>NavLink,
    "Navigate",
    ()=>Navigate,
    "NavigationContext",
    ()=>NavigationContext,
    "Outlet",
    ()=>Outlet,
    "PrefetchPageLinks",
    ()=>PrefetchPageLinks,
    "RSCRouterContext",
    ()=>RSCRouterContext,
    "RemixErrorBoundary",
    ()=>RemixErrorBoundary,
    "Route",
    ()=>Route,
    "RouteContext",
    ()=>RouteContext,
    "Router",
    ()=>Router,
    "RouterContextProvider",
    ()=>RouterContextProvider,
    "RouterProvider",
    ()=>RouterProvider,
    "Routes",
    ()=>Routes,
    "SINGLE_FETCH_REDIRECT_STATUS",
    ()=>SINGLE_FETCH_REDIRECT_STATUS,
    "Scripts",
    ()=>Scripts,
    "ScrollRestoration",
    ()=>ScrollRestoration,
    "SingleFetchRedirectSymbol",
    ()=>SingleFetchRedirectSymbol,
    "StaticRouter",
    ()=>StaticRouter,
    "StaticRouterProvider",
    ()=>StaticRouterProvider,
    "StreamTransfer",
    ()=>StreamTransfer,
    "UNSTABLE_TransitionEnabledRouterProvider",
    ()=>UNSTABLE_TransitionEnabledRouterProvider,
    "ViewTransitionContext",
    ()=>ViewTransitionContext,
    "WithComponentProps",
    ()=>WithComponentProps,
    "WithErrorBoundaryProps",
    ()=>WithErrorBoundaryProps,
    "WithHydrateFallbackProps",
    ()=>WithHydrateFallbackProps,
    "convertRoutesToDataRoutes",
    ()=>convertRoutesToDataRoutes,
    "createBrowserHistory",
    ()=>createBrowserHistory,
    "createBrowserRouter",
    ()=>createBrowserRouter,
    "createClientRoutes",
    ()=>createClientRoutes,
    "createClientRoutesWithHMRRevalidationOptOut",
    ()=>createClientRoutesWithHMRRevalidationOptOut,
    "createContext",
    ()=>createContext,
    "createHashRouter",
    ()=>createHashRouter,
    "createMemoryRouter",
    ()=>createMemoryRouter,
    "createPath",
    ()=>createPath,
    "createRequestInit",
    ()=>createRequestInit,
    "createRouter",
    ()=>createRouter,
    "createRoutesFromChildren",
    ()=>createRoutesFromChildren,
    "createRoutesFromElements",
    ()=>createRoutesFromElements,
    "createSearchParams",
    ()=>createSearchParams,
    "createServerRoutes",
    ()=>createServerRoutes,
    "createStaticHandler",
    ()=>createStaticHandler,
    "createStaticHandler2",
    ()=>createStaticHandler2,
    "createStaticRouter",
    ()=>createStaticRouter,
    "data",
    ()=>data,
    "decodeViaTurboStream",
    ()=>decodeViaTurboStream,
    "encode",
    ()=>encode,
    "escapeHtml",
    ()=>escapeHtml,
    "generatePath",
    ()=>generatePath,
    "getManifestPath",
    ()=>getManifestPath,
    "getPatchRoutesOnNavigationFunction",
    ()=>getPatchRoutesOnNavigationFunction,
    "getSingleFetchDataStrategyImpl",
    ()=>getSingleFetchDataStrategyImpl,
    "getStaticContextFromError",
    ()=>getStaticContextFromError,
    "getTurboStreamSingleFetchDataStrategy",
    ()=>getTurboStreamSingleFetchDataStrategy,
    "hydrationRouteProperties",
    ()=>hydrationRouteProperties,
    "instrumentHandler",
    ()=>instrumentHandler,
    "invariant",
    ()=>invariant,
    "isDataWithResponseInit",
    ()=>isDataWithResponseInit,
    "isMutationMethod",
    ()=>isMutationMethod,
    "isRedirectResponse",
    ()=>isRedirectResponse,
    "isRedirectStatusCode",
    ()=>isRedirectStatusCode,
    "isResponse",
    ()=>isResponse,
    "isRouteErrorResponse",
    ()=>isRouteErrorResponse,
    "mapRouteProperties",
    ()=>mapRouteProperties,
    "matchPath",
    ()=>matchPath,
    "matchRoutes",
    ()=>matchRoutes,
    "noActionDefinedError",
    ()=>noActionDefinedError,
    "parsePath",
    ()=>parsePath,
    "redirect",
    ()=>redirect,
    "redirectDocument",
    ()=>redirectDocument,
    "renderMatches",
    ()=>renderMatches,
    "replace",
    ()=>replace,
    "resolvePath",
    ()=>resolvePath,
    "setIsHydrated",
    ()=>setIsHydrated,
    "shouldHydrateRouteLoader",
    ()=>shouldHydrateRouteLoader,
    "singleFetchUrl",
    ()=>singleFetchUrl,
    "stripBasename",
    ()=>stripBasename,
    "stripIndexParam",
    ()=>stripIndexParam,
    "useActionData",
    ()=>useActionData,
    "useAsyncError",
    ()=>useAsyncError,
    "useAsyncValue",
    ()=>useAsyncValue,
    "useBeforeUnload",
    ()=>useBeforeUnload,
    "useBlocker",
    ()=>useBlocker,
    "useFetcher",
    ()=>useFetcher,
    "useFetchers",
    ()=>useFetchers,
    "useFogOFWarDiscovery",
    ()=>useFogOFWarDiscovery,
    "useFormAction",
    ()=>useFormAction,
    "useHref",
    ()=>useHref,
    "useInRouterContext",
    ()=>useInRouterContext,
    "useLinkClickHandler",
    ()=>useLinkClickHandler,
    "useLoaderData",
    ()=>useLoaderData,
    "useLocation",
    ()=>useLocation,
    "useMatch",
    ()=>useMatch,
    "useMatches",
    ()=>useMatches,
    "useNavigate",
    ()=>useNavigate,
    "useNavigation",
    ()=>useNavigation,
    "useNavigationType",
    ()=>useNavigationType,
    "useOutlet",
    ()=>useOutlet,
    "useOutletContext",
    ()=>useOutletContext,
    "useParams",
    ()=>useParams,
    "usePrompt",
    ()=>usePrompt,
    "useResolvedPath",
    ()=>useResolvedPath,
    "useRevalidator",
    ()=>useRevalidator,
    "useRoute",
    ()=>useRoute,
    "useRouteError",
    ()=>useRouteError,
    "useRouteLoaderData",
    ()=>useRouteLoaderData,
    "useRoutes",
    ()=>useRoutes,
    "useScrollRestoration",
    ()=>useScrollRestoration,
    "useSearchParams",
    ()=>useSearchParams,
    "useSubmit",
    ()=>useSubmit,
    "useViewTransitionState",
    ()=>useViewTransitionState,
    "warnOnce",
    ()=>warnOnce,
    "withComponentProps",
    ()=>withComponentProps,
    "withErrorBoundaryProps",
    ()=>withErrorBoundaryProps,
    "withHydrateFallbackProps",
    ()=>withHydrateFallbackProps
]);
// lib/context.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("webthethao2.0/node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs")}`;
    }
};
var __typeError = (msg)=>{
    throw TypeError(msg);
};
var __accessCheck = (obj, member, msg)=>member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter)=>(__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value)=>member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
// lib/router/history.ts
var Action = /* @__PURE__ */ ((Action2)=>{
    Action2["Pop"] = "POP";
    Action2["Push"] = "PUSH";
    Action2["Replace"] = "REPLACE";
    return Action2;
})(Action || {});
var PopStateEventType = "popstate";
function createMemoryHistory(options = {}) {
    let { initialEntries = [
        "/"
    ], initialIndex, v5Compat = false } = options;
    let entries;
    entries = initialEntries.map((entry, index2)=>createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index2 === 0 ? "default" : void 0));
    let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
    let action = "POP" /* Pop */ ;
    let listener = null;
    function clampIndex(n) {
        return Math.min(Math.max(n, 0), entries.length - 1);
    }
    function getCurrentLocation() {
        return entries[index];
    }
    function createMemoryLocation(to, state = null, key) {
        let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
        warning(location.pathname.charAt(0) === "/", `relative pathnames are not supported in memory history: ${JSON.stringify(to)}`);
        return location;
    }
    function createHref2(to) {
        return typeof to === "string" ? to : createPath(to);
    }
    let history = {
        get index () {
            return index;
        },
        get action () {
            return action;
        },
        get location () {
            return getCurrentLocation();
        },
        createHref: createHref2,
        createURL (to) {
            return new URL(createHref2(to), "http://localhost");
        },
        encodeLocation (to) {
            let path = typeof to === "string" ? parsePath(to) : to;
            return {
                pathname: path.pathname || "",
                search: path.search || "",
                hash: path.hash || ""
            };
        },
        push (to, state) {
            action = "PUSH" /* Push */ ;
            let nextLocation = createMemoryLocation(to, state);
            index += 1;
            entries.splice(index, entries.length, nextLocation);
            if (v5Compat && listener) {
                listener({
                    action,
                    location: nextLocation,
                    delta: 1
                });
            }
        },
        replace (to, state) {
            action = "REPLACE" /* Replace */ ;
            let nextLocation = createMemoryLocation(to, state);
            entries[index] = nextLocation;
            if (v5Compat && listener) {
                listener({
                    action,
                    location: nextLocation,
                    delta: 0
                });
            }
        },
        go (delta) {
            action = "POP" /* Pop */ ;
            let nextIndex = clampIndex(index + delta);
            let nextLocation = entries[nextIndex];
            index = nextIndex;
            if (listener) {
                listener({
                    action,
                    location: nextLocation,
                    delta
                });
            }
        },
        listen (fn) {
            listener = fn;
            return ()=>{
                listener = null;
            };
        }
    };
    return history;
}
function createBrowserHistory(options = {}) {
    function createBrowserLocation(window2, globalHistory) {
        let { pathname, search, hash } = window2.location;
        return createLocation("", {
            pathname,
            search,
            hash
        }, // state defaults to `null` because `window.history.state` does
        globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
    }
    function createBrowserHref(window2, to) {
        return typeof to === "string" ? to : createPath(to);
    }
    return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
function createHashHistory(options = {}) {
    function createHashLocation(window2, globalHistory) {
        let { pathname = "/", search = "", hash = "" } = parsePath(window2.location.hash.substring(1));
        if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
            pathname = "/" + pathname;
        }
        return createLocation("", {
            pathname,
            search,
            hash
        }, // state defaults to `null` because `window.history.state` does
        globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
    }
    function createHashHref(window2, to) {
        let base = window2.document.querySelector("base");
        let href = "";
        if (base && base.getAttribute("href")) {
            let url = window2.location.href;
            let hashIndex = url.indexOf("#");
            href = hashIndex === -1 ? url : url.slice(0, hashIndex);
        }
        return href + "#" + (typeof to === "string" ? to : createPath(to));
    }
    function validateHashLocation(location, to) {
        warning(location.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(to)})`);
    }
    return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
        throw new Error(message);
    }
}
function warning(cond, message) {
    if (!cond) {
        if (typeof console !== "undefined") console.warn(message);
        try {
            throw new Error(message);
        } catch (e) {}
    }
}
function createKey() {
    return Math.random().toString(36).substring(2, 10);
}
function getHistoryState(location, index) {
    return {
        usr: location.state,
        key: location.key,
        idx: index
    };
}
function createLocation(current, to, state = null, key) {
    let location = {
        pathname: typeof current === "string" ? current : current.pathname,
        search: "",
        hash: "",
        ...typeof to === "string" ? parsePath(to) : to,
        state,
        // TODO: This could be cleaned up.  push/replace should probably just take
        // full Locations now and avoid the need to run through this flow at all
        // But that's a pretty big refactor to the current test suite so going to
        // keep as is for the time being and just let any incoming keys take precedence
        key: to && to.key || key || createKey()
    };
    return location;
}
function createPath({ pathname = "/", search = "", hash = "" }) {
    if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
}
function parsePath(path) {
    let parsedPath = {};
    if (path) {
        let hashIndex = path.indexOf("#");
        if (hashIndex >= 0) {
            parsedPath.hash = path.substring(hashIndex);
            path = path.substring(0, hashIndex);
        }
        let searchIndex = path.indexOf("?");
        if (searchIndex >= 0) {
            parsedPath.search = path.substring(searchIndex);
            path = path.substring(0, searchIndex);
        }
        if (path) {
            parsedPath.pathname = path;
        }
    }
    return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref2, validateLocation, options = {}) {
    let { window: window2 = document.defaultView, v5Compat = false } = options;
    let globalHistory = window2.history;
    let action = "POP" /* Pop */ ;
    let listener = null;
    let index = getIndex();
    if (index == null) {
        index = 0;
        globalHistory.replaceState({
            ...globalHistory.state,
            idx: index
        }, "");
    }
    function getIndex() {
        let state = globalHistory.state || {
            idx: null
        };
        return state.idx;
    }
    function handlePop() {
        action = "POP" /* Pop */ ;
        let nextIndex = getIndex();
        let delta = nextIndex == null ? null : nextIndex - index;
        index = nextIndex;
        if (listener) {
            listener({
                action,
                location: history.location,
                delta
            });
        }
    }
    function push(to, state) {
        action = "PUSH" /* Push */ ;
        let location = createLocation(history.location, to, state);
        if (validateLocation) validateLocation(location, to);
        index = getIndex() + 1;
        let historyState = getHistoryState(location, index);
        let url = history.createHref(location);
        try {
            globalHistory.pushState(historyState, "", url);
        } catch (error) {
            if (error instanceof DOMException && error.name === "DataCloneError") {
                throw error;
            }
            window2.location.assign(url);
        }
        if (v5Compat && listener) {
            listener({
                action,
                location: history.location,
                delta: 1
            });
        }
    }
    function replace2(to, state) {
        action = "REPLACE" /* Replace */ ;
        let location = createLocation(history.location, to, state);
        if (validateLocation) validateLocation(location, to);
        index = getIndex();
        let historyState = getHistoryState(location, index);
        let url = history.createHref(location);
        globalHistory.replaceState(historyState, "", url);
        if (v5Compat && listener) {
            listener({
                action,
                location: history.location,
                delta: 0
            });
        }
    }
    function createURL(to) {
        return createBrowserURLImpl(to);
    }
    let history = {
        get action () {
            return action;
        },
        get location () {
            return getLocation(window2, globalHistory);
        },
        listen (fn) {
            if (listener) {
                throw new Error("A history only accepts one active listener");
            }
            window2.addEventListener(PopStateEventType, handlePop);
            listener = fn;
            return ()=>{
                window2.removeEventListener(PopStateEventType, handlePop);
                listener = null;
            };
        },
        createHref (to) {
            return createHref2(window2, to);
        },
        createURL,
        encodeLocation (to) {
            let url = createURL(to);
            return {
                pathname: url.pathname,
                search: url.search,
                hash: url.hash
            };
        },
        push,
        replace: replace2,
        go (n) {
            return globalHistory.go(n);
        }
    };
    return history;
}
function createBrowserURLImpl(to, isAbsolute = false) {
    let base = "http://localhost";
    if (typeof window !== "undefined") {
        base = window.location.origin !== "null" ? window.location.origin : window.location.href;
    }
    invariant(base, "No window.location.(origin|href) available to create URL");
    let href = typeof to === "string" ? to : createPath(to);
    href = href.replace(/ $/, "%20");
    if (!isAbsolute && href.startsWith("//")) {
        href = base + href;
    }
    return new URL(href, base);
}
// lib/router/utils.ts
function createContext(defaultValue) {
    return {
        defaultValue
    };
}
var _map;
var RouterContextProvider = class {
    /**
   * Create a new `RouterContextProvider` instance
   * @param init An optional initial context map to populate the provider with
   */ constructor(init){
        __privateAdd(this, _map, /* @__PURE__ */ new Map());
        if (init) {
            for (let [context, value] of init){
                this.set(context, value);
            }
        }
    }
    /**
   * Access a value from the context. If no value has been set for the context,
   * it will return the context's `defaultValue` if provided, or throw an error
   * if no `defaultValue` was set.
   * @param context The context to get the value for
   * @returns The value for the context, or the context's `defaultValue` if no
   * value was set
   */ get(context) {
        if (__privateGet(this, _map).has(context)) {
            return __privateGet(this, _map).get(context);
        }
        if (context.defaultValue !== void 0) {
            return context.defaultValue;
        }
        throw new Error("No value found for context");
    }
    /**
   * Set a value for the context. If the context already has a value set, this
   * will overwrite it.
   *
   * @param context The context to set the value for
   * @param value The value to set for the context
   * @returns {void}
   */ set(context, value) {
        __privateGet(this, _map).set(context, value);
    }
};
_map = new WeakMap();
var unsupportedLazyRouteObjectKeys = /* @__PURE__ */ new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "children"
]);
function isUnsupportedLazyRouteObjectKey(key) {
    return unsupportedLazyRouteObjectKeys.has(key);
}
var unsupportedLazyRouteFunctionKeys = /* @__PURE__ */ new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "middleware",
    "children"
]);
function isUnsupportedLazyRouteFunctionKey(key) {
    return unsupportedLazyRouteFunctionKeys.has(key);
}
function isIndexRoute(route) {
    return route.index === true;
}
function convertRoutesToDataRoutes(routes, mapRouteProperties2, parentPath = [], manifest = {}, allowInPlaceMutations = false) {
    return routes.map((route, index)=>{
        let treePath = [
            ...parentPath,
            String(index)
        ];
        let id = typeof route.id === "string" ? route.id : treePath.join("-");
        invariant(route.index !== true || !route.children, `Cannot specify children on an index route`);
        invariant(allowInPlaceMutations || !manifest[id], `Found a route id collision on id "${id}".  Route id's must be globally unique within Data Router usages`);
        if (isIndexRoute(route)) {
            let indexRoute = {
                ...route,
                id
            };
            manifest[id] = mergeRouteUpdates(indexRoute, mapRouteProperties2(indexRoute));
            return indexRoute;
        } else {
            let pathOrLayoutRoute = {
                ...route,
                id,
                children: void 0
            };
            manifest[id] = mergeRouteUpdates(pathOrLayoutRoute, mapRouteProperties2(pathOrLayoutRoute));
            if (route.children) {
                pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, mapRouteProperties2, treePath, manifest, allowInPlaceMutations);
            }
            return pathOrLayoutRoute;
        }
    });
}
function mergeRouteUpdates(route, updates) {
    return Object.assign(route, {
        ...updates,
        ...typeof updates.lazy === "object" && updates.lazy != null ? {
            lazy: {
                ...route.lazy,
                ...updates.lazy
            }
        } : {}
    });
}
function matchRoutes(routes, locationArg, basename = "/") {
    return matchRoutesImpl(routes, locationArg, basename, false);
}
function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
    let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    let pathname = stripBasename(location.pathname || "/", basename);
    if (pathname == null) {
        return null;
    }
    let branches = flattenRoutes(routes);
    rankRouteBranches(branches);
    let matches = null;
    for(let i = 0; matches == null && i < branches.length; ++i){
        let decoded = decodePath(pathname);
        matches = matchRouteBranch(branches[i], decoded, allowPartial);
    }
    return matches;
}
function convertRouteMatchToUiMatch(match, loaderData) {
    let { route, pathname, params } = match;
    return {
        id: route.id,
        pathname,
        params,
        data: loaderData[route.id],
        loaderData: loaderData[route.id],
        handle: route.handle
    };
}
function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = "", _hasParentOptionalSegments = false) {
    let flattenRoute = (route, index, hasParentOptionalSegments = _hasParentOptionalSegments, relativePath)=>{
        let meta = {
            relativePath: relativePath === void 0 ? route.path || "" : relativePath,
            caseSensitive: route.caseSensitive === true,
            childrenIndex: index,
            route
        };
        if (meta.relativePath.startsWith("/")) {
            if (!meta.relativePath.startsWith(parentPath) && hasParentOptionalSegments) {
                return;
            }
            invariant(meta.relativePath.startsWith(parentPath), `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`);
            meta.relativePath = meta.relativePath.slice(parentPath.length);
        }
        let path = joinPaths([
            parentPath,
            meta.relativePath
        ]);
        let routesMeta = parentsMeta.concat(meta);
        if (route.children && route.children.length > 0) {
            invariant(// Our types know better, but runtime JS may not!
            // @ts-expect-error
            route.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${path}".`);
            flattenRoutes(route.children, branches, routesMeta, path, hasParentOptionalSegments);
        }
        if (route.path == null && !route.index) {
            return;
        }
        branches.push({
            path,
            score: computeScore(path, route.index),
            routesMeta
        });
    };
    routes.forEach((route, index)=>{
        if (route.path === "" || !route.path?.includes("?")) {
            flattenRoute(route, index);
        } else {
            for (let exploded of explodeOptionalSegments(route.path)){
                flattenRoute(route, index, true, exploded);
            }
        }
    });
    return branches;
}
function explodeOptionalSegments(path) {
    let segments = path.split("/");
    if (segments.length === 0) return [];
    let [first, ...rest] = segments;
    let isOptional = first.endsWith("?");
    let required = first.replace(/\?$/, "");
    if (rest.length === 0) {
        return isOptional ? [
            required,
            ""
        ] : [
            required
        ];
    }
    let restExploded = explodeOptionalSegments(rest.join("/"));
    let result = [];
    result.push(...restExploded.map((subpath)=>subpath === "" ? required : [
            required,
            subpath
        ].join("/")));
    if (isOptional) {
        result.push(...restExploded);
    }
    return result.map((exploded)=>path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
    branches.sort((a, b)=>a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta)=>meta.childrenIndex), b.routesMeta.map((meta)=>meta.childrenIndex)));
}
var paramRe = /^:[\w-]+$/;
var dynamicSegmentValue = 3;
var indexRouteValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;
var isSplat = (s)=>s === "*";
function computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some(isSplat)) {
        initialScore += splatPenalty;
    }
    if (index) {
        initialScore += indexRouteValue;
    }
    return segments.filter((s)=>!isSplat(s)).reduce((score, segment)=>score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
    let siblings = a.length === b.length && a.slice(0, -1).every((n, i)=>n === b[i]);
    return siblings ? // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0;
}
function matchRouteBranch(branch, pathname, allowPartial = false) {
    let { routesMeta } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for(let i = 0; i < routesMeta.length; ++i){
        let meta = routesMeta[i];
        let end = i === routesMeta.length - 1;
        let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
        let match = matchPath({
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end
        }, remainingPathname);
        let route = meta.route;
        if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
            match = matchPath({
                path: meta.relativePath,
                caseSensitive: meta.caseSensitive,
                end: false
            }, remainingPathname);
        }
        if (!match) {
            return null;
        }
        Object.assign(matchedParams, match.params);
        matches.push({
            // TODO: Can this as be avoided?
            params: matchedParams,
            pathname: joinPaths([
                matchedPathname,
                match.pathname
            ]),
            pathnameBase: normalizePathname(joinPaths([
                matchedPathname,
                match.pathnameBase
            ])),
            route
        });
        if (match.pathnameBase !== "/") {
            matchedPathname = joinPaths([
                matchedPathname,
                match.pathnameBase
            ]);
        }
    }
    return matches;
}
function generatePath(originalPath, params = {}) {
    let path = originalPath;
    if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
        warning(false, `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`);
        path = path.replace(/\*$/, "/*");
    }
    const prefix = path.startsWith("/") ? "/" : "";
    const stringify2 = (p)=>p == null ? "" : typeof p === "string" ? p : String(p);
    const segments = path.split(/\/+/).map((segment, index, array)=>{
        const isLastSegment = index === array.length - 1;
        if (isLastSegment && segment === "*") {
            const star = "*";
            return stringify2(params[star]);
        }
        const keyMatch = segment.match(/^:([\w-]+)(\??)$/);
        if (keyMatch) {
            const [, key, optional] = keyMatch;
            let param = params[key];
            invariant(optional === "?" || param != null, `Missing ":${key}" param`);
            return encodeURIComponent(stringify2(param));
        }
        return segment.replace(/\?$/g, "");
    }).filter((segment)=>!!segment);
    return prefix + segments.join("/");
}
function matchPath(pattern, pathname) {
    if (typeof pattern === "string") {
        pattern = {
            path: pattern,
            caseSensitive: false,
            end: true
        };
    }
    let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
    let match = pathname.match(matcher);
    if (!match) return null;
    let matchedPathname = match[0];
    let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
    let captureGroups = match.slice(1);
    let params = compiledParams.reduce((memo2, { paramName, isOptional }, index)=>{
        if (paramName === "*") {
            let splatValue = captureGroups[index] || "";
            pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
        }
        const value = captureGroups[index];
        if (isOptional && !value) {
            memo2[paramName] = void 0;
        } else {
            memo2[paramName] = (value || "").replace(/%2F/g, "/");
        }
        return memo2;
    }, {});
    return {
        params,
        pathname: matchedPathname,
        pathnameBase,
        pattern
    };
}
function compilePath(path, caseSensitive = false, end = true) {
    warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`);
    let params = [];
    let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional)=>{
        params.push({
            paramName,
            isOptional: isOptional != null
        });
        return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
    }).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    if (path.endsWith("*")) {
        params.push({
            paramName: "*"
        });
        regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
    } else if (end) {
        regexpSource += "\\/*$";
    } else if (path !== "" && path !== "/") {
        regexpSource += "(?:(?=\\/|$))";
    } else {}
    let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
    return [
        matcher,
        params
    ];
}
function decodePath(value) {
    try {
        return value.split("/").map((v)=>decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
    } catch (error) {
        warning(false, `The URL path "${value}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`);
        return value;
    }
}
function stripBasename(pathname, basename) {
    if (basename === "/") return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
        return null;
    }
    let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
    let nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== "/") {
        return null;
    }
    return pathname.slice(startIndex) || "/";
}
function prependBasename({ basename, pathname }) {
    return pathname === "/" ? basename : joinPaths([
        basename,
        pathname
    ]);
}
var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function resolvePath(to, fromPathname = "/") {
    let { pathname: toPathname, search = "", hash = "" } = typeof to === "string" ? parsePath(to) : to;
    let pathname;
    if (toPathname) {
        if (isAbsoluteUrl(toPathname)) {
            pathname = toPathname;
        } else {
            if (toPathname.includes("//")) {
                let oldPathname = toPathname;
                toPathname = toPathname.replace(/\/\/+/g, "/");
                warning(false, `Pathnames cannot have embedded double slashes - normalizing ${oldPathname} -> ${toPathname}`);
            }
            if (toPathname.startsWith("/")) {
                pathname = resolvePathname(toPathname.substring(1), "/");
            } else {
                pathname = resolvePathname(toPathname, fromPathname);
            }
        }
    } else {
        pathname = fromPathname;
    }
    return {
        pathname,
        search: normalizeSearch(search),
        hash: normalizeHash(hash)
    };
}
function resolvePathname(relativePath, fromPathname) {
    let segments = fromPathname.replace(/\/+$/, "").split("/");
    let relativeSegments = relativePath.split("/");
    relativeSegments.forEach((segment)=>{
        if (segment === "..") {
            if (segments.length > 1) segments.pop();
        } else if (segment !== ".") {
            segments.push(segment);
        }
    });
    return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
    return `Cannot include a '${char}' character in a manually specified \`to.${field}\` field [${JSON.stringify(path)}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function getPathContributingMatches(matches) {
    return matches.filter((match, index)=>index === 0 || match.route.path && match.route.path.length > 0);
}
function getResolveToMatches(matches) {
    let pathMatches = getPathContributingMatches(matches);
    return pathMatches.map((match, idx)=>idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase);
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
    let to;
    if (typeof toArg === "string") {
        to = parsePath(toArg);
    } else {
        to = {
            ...toArg
        };
        invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
        invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
        invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
    }
    let isEmptyPath = toArg === "" || to.pathname === "";
    let toPathname = isEmptyPath ? "/" : to.pathname;
    let from;
    if (toPathname == null) {
        from = locationPathname;
    } else {
        let routePathnameIndex = routePathnames.length - 1;
        if (!isPathRelative && toPathname.startsWith("..")) {
            let toSegments = toPathname.split("/");
            while(toSegments[0] === ".."){
                toSegments.shift();
                routePathnameIndex -= 1;
            }
            to.pathname = toSegments.join("/");
        }
        from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    let path = resolvePath(to, from);
    let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
    let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
    if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
        path.pathname += "/";
    }
    return path;
}
var joinPaths = (paths)=>paths.join("/").replace(/\/\/+/g, "/");
var normalizePathname = (pathname)=>pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
var normalizeSearch = (search)=>!search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
var normalizeHash = (hash)=>!hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
var DataWithResponseInit = class {
    constructor(data2, init){
        this.type = "DataWithResponseInit";
        this.data = data2;
        this.init = init || null;
    }
};
function data(data2, init) {
    return new DataWithResponseInit(data2, typeof init === "number" ? {
        status: init
    } : init);
}
var redirect = (url, init = 302)=>{
    let responseInit = init;
    if (typeof responseInit === "number") {
        responseInit = {
            status: responseInit
        };
    } else if (typeof responseInit.status === "undefined") {
        responseInit.status = 302;
    }
    let headers = new Headers(responseInit.headers);
    headers.set("Location", url);
    return new Response(null, {
        ...responseInit,
        headers
    });
};
var redirectDocument = (url, init)=>{
    let response = redirect(url, init);
    response.headers.set("X-Remix-Reload-Document", "true");
    return response;
};
var replace = (url, init)=>{
    let response = redirect(url, init);
    response.headers.set("X-Remix-Replace", "true");
    return response;
};
var ErrorResponseImpl = class {
    constructor(status, statusText, data2, internal = false){
        this.status = status;
        this.statusText = statusText || "";
        this.internal = internal;
        if (data2 instanceof Error) {
            this.data = data2.toString();
            this.error = data2;
        } else {
            this.data = data2;
        }
    }
};
function isRouteErrorResponse(error) {
    return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
function getRoutePattern(paths) {
    return paths.filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
// lib/router/instrumentation.ts
var UninstrumentedSymbol = Symbol("Uninstrumented");
function getRouteInstrumentationUpdates(fns, route) {
    let aggregated = {
        lazy: [],
        "lazy.loader": [],
        "lazy.action": [],
        "lazy.middleware": [],
        middleware: [],
        loader: [],
        action: []
    };
    fns.forEach((fn)=>fn({
            id: route.id,
            index: route.index,
            path: route.path,
            instrument (i) {
                let keys = Object.keys(aggregated);
                for (let key of keys){
                    if (i[key]) {
                        aggregated[key].push(i[key]);
                    }
                }
            }
        }));
    let updates = {};
    if (typeof route.lazy === "function" && aggregated.lazy.length > 0) {
        let instrumented = wrapImpl(aggregated.lazy, route.lazy, ()=>void 0);
        if (instrumented) {
            updates.lazy = instrumented;
        }
    }
    if (typeof route.lazy === "object") {
        let lazyObject = route.lazy;
        [
            "middleware",
            "loader",
            "action"
        ].forEach((key)=>{
            let lazyFn = lazyObject[key];
            let instrumentations = aggregated[`lazy.${key}`];
            if (typeof lazyFn === "function" && instrumentations.length > 0) {
                let instrumented = wrapImpl(instrumentations, lazyFn, ()=>void 0);
                if (instrumented) {
                    updates.lazy = Object.assign(updates.lazy || {}, {
                        [key]: instrumented
                    });
                }
            }
        });
    }
    [
        "loader",
        "action"
    ].forEach((key)=>{
        let handler = route[key];
        if (typeof handler === "function" && aggregated[key].length > 0) {
            let original = handler[UninstrumentedSymbol] ?? handler;
            let instrumented = wrapImpl(aggregated[key], original, (...args)=>getHandlerInfo(args[0]));
            if (instrumented) {
                instrumented[UninstrumentedSymbol] = original;
                updates[key] = instrumented;
            }
        }
    });
    if (route.middleware && route.middleware.length > 0 && aggregated.middleware.length > 0) {
        updates.middleware = route.middleware.map((middleware)=>{
            let original = middleware[UninstrumentedSymbol] ?? middleware;
            let instrumented = wrapImpl(aggregated.middleware, original, (...args)=>getHandlerInfo(args[0]));
            if (instrumented) {
                instrumented[UninstrumentedSymbol] = original;
                return instrumented;
            }
            return middleware;
        });
    }
    return updates;
}
function instrumentClientSideRouter(router, fns) {
    let aggregated = {
        navigate: [],
        fetch: []
    };
    fns.forEach((fn)=>fn({
            instrument (i) {
                let keys = Object.keys(i);
                for (let key of keys){
                    if (i[key]) {
                        aggregated[key].push(i[key]);
                    }
                }
            }
        }));
    if (aggregated.navigate.length > 0) {
        let navigate = router.navigate[UninstrumentedSymbol] ?? router.navigate;
        let instrumentedNavigate = wrapImpl(aggregated.navigate, navigate, (...args)=>{
            let [to, opts] = args;
            return {
                to: typeof to === "number" || typeof to === "string" ? to : to ? createPath(to) : ".",
                ...getRouterInfo(router, opts ?? {})
            };
        });
        if (instrumentedNavigate) {
            instrumentedNavigate[UninstrumentedSymbol] = navigate;
            router.navigate = instrumentedNavigate;
        }
    }
    if (aggregated.fetch.length > 0) {
        let fetch2 = router.fetch[UninstrumentedSymbol] ?? router.fetch;
        let instrumentedFetch = wrapImpl(aggregated.fetch, fetch2, (...args)=>{
            let [key, , href, opts] = args;
            return {
                href: href ?? ".",
                fetcherKey: key,
                ...getRouterInfo(router, opts ?? {})
            };
        });
        if (instrumentedFetch) {
            instrumentedFetch[UninstrumentedSymbol] = fetch2;
            router.fetch = instrumentedFetch;
        }
    }
    return router;
}
function instrumentHandler(handler, fns) {
    let aggregated = {
        request: []
    };
    fns.forEach((fn)=>fn({
            instrument (i) {
                let keys = Object.keys(i);
                for (let key of keys){
                    if (i[key]) {
                        aggregated[key].push(i[key]);
                    }
                }
            }
        }));
    let instrumentedHandler = handler;
    if (aggregated.request.length > 0) {
        instrumentedHandler = wrapImpl(aggregated.request, handler, (...args)=>{
            let [request, context] = args;
            return {
                request: getReadonlyRequest(request),
                context: context != null ? getReadonlyContext(context) : context
            };
        });
    }
    return instrumentedHandler;
}
function wrapImpl(impls, handler, getInfo) {
    if (impls.length === 0) {
        return null;
    }
    return async (...args)=>{
        let result = await recurseRight(impls, getInfo(...args), ()=>handler(...args), impls.length - 1);
        if (result.type === "error") {
            throw result.value;
        }
        return result.value;
    };
}
async function recurseRight(impls, info, handler, index) {
    let impl = impls[index];
    let result;
    if (!impl) {
        try {
            let value = await handler();
            result = {
                type: "success",
                value
            };
        } catch (e) {
            result = {
                type: "error",
                value: e
            };
        }
    } else {
        let handlerPromise = void 0;
        let callHandler = async ()=>{
            if (handlerPromise) {
                console.error("You cannot call instrumented handlers more than once");
            } else {
                handlerPromise = recurseRight(impls, info, handler, index - 1);
            }
            result = await handlerPromise;
            invariant(result, "Expected a result");
            if (result.type === "error" && result.value instanceof Error) {
                return {
                    status: "error",
                    error: result.value
                };
            }
            return {
                status: "success",
                error: void 0
            };
        };
        try {
            await impl(callHandler, info);
        } catch (e) {
            console.error("An instrumentation function threw an error:", e);
        }
        if (!handlerPromise) {
            await callHandler();
        }
        await handlerPromise;
    }
    if (result) {
        return result;
    }
    return {
        type: "error",
        value: new Error("No result assigned in instrumentation chain.")
    };
}
function getHandlerInfo(args) {
    let { request, context, params, unstable_pattern } = args;
    return {
        request: getReadonlyRequest(request),
        params: {
            ...params
        },
        unstable_pattern,
        context: getReadonlyContext(context)
    };
}
function getRouterInfo(router, opts) {
    return {
        currentUrl: createPath(router.state.location),
        ..."formMethod" in opts ? {
            formMethod: opts.formMethod
        } : {},
        ..."formEncType" in opts ? {
            formEncType: opts.formEncType
        } : {},
        ..."formData" in opts ? {
            formData: opts.formData
        } : {},
        ..."body" in opts ? {
            body: opts.body
        } : {}
    };
}
function getReadonlyRequest(request) {
    return {
        method: request.method,
        url: request.url,
        headers: {
            get: (...args)=>request.headers.get(...args)
        }
    };
}
function getReadonlyContext(context) {
    if (isPlainObject(context)) {
        let frozen = {
            ...context
        };
        Object.freeze(frozen);
        return frozen;
    } else {
        return {
            get: (ctx)=>context.get(ctx)
        };
    }
}
var objectProtoNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function isPlainObject(thing) {
    if (thing === null || typeof thing !== "object") {
        return false;
    }
    const proto = Object.getPrototypeOf(thing);
    return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === objectProtoNames;
}
// lib/router/router.ts
var validMutationMethodsArr = [
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
];
var validMutationMethods = new Set(validMutationMethodsArr);
var validRequestMethodsArr = [
    "GET",
    ...validMutationMethodsArr
];
var validRequestMethods = new Set(validRequestMethodsArr);
var redirectStatusCodes = /* @__PURE__ */ new Set([
    301,
    302,
    303,
    307,
    308
]);
var redirectPreserveMethodStatusCodes = /* @__PURE__ */ new Set([
    307,
    308
]);
var IDLE_NAVIGATION = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
};
var IDLE_FETCHER = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
};
var IDLE_BLOCKER = {
    state: "unblocked",
    proceed: void 0,
    reset: void 0,
    location: void 0
};
var defaultMapRouteProperties = (route)=>({
        hasErrorBoundary: Boolean(route.hasErrorBoundary)
    });
var TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
var ResetLoaderDataSymbol = Symbol("ResetLoaderData");
function createRouter(init) {
    const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : void 0;
    const isBrowser2 = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
    invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let hydrationRouteProperties2 = init.hydrationRouteProperties || [];
    let _mapRouteProperties = init.mapRouteProperties || defaultMapRouteProperties;
    let mapRouteProperties2 = _mapRouteProperties;
    if (init.unstable_instrumentations) {
        let instrumentations = init.unstable_instrumentations;
        mapRouteProperties2 = (route)=>{
            return {
                ..._mapRouteProperties(route),
                ...getRouteInstrumentationUpdates(instrumentations.map((i)=>i.route).filter(Boolean), route)
            };
        };
    }
    let manifest = {};
    let dataRoutes = convertRoutesToDataRoutes(init.routes, mapRouteProperties2, void 0, manifest);
    let inFlightDataRoutes;
    let basename = init.basename || "/";
    if (!basename.startsWith("/")) {
        basename = `/${basename}`;
    }
    let dataStrategyImpl = init.dataStrategy || defaultDataStrategyWithMiddleware;
    let future = {
        ...init.future
    };
    let unlistenHistory = null;
    let subscribers = /* @__PURE__ */ new Set();
    let savedScrollPositions2 = null;
    let getScrollRestorationKey2 = null;
    let getScrollPosition = null;
    let initialScrollRestored = init.hydrationData != null;
    let initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
    let initialMatchesIsFOW = false;
    let initialErrors = null;
    let initialized;
    if (initialMatches == null && !init.patchRoutesOnNavigation) {
        let error = getInternalRouterError(404, {
            pathname: init.history.location.pathname
        });
        let { matches, route } = getShortCircuitMatches(dataRoutes);
        initialized = true;
        initialMatches = matches;
        initialErrors = {
            [route.id]: error
        };
    } else {
        if (initialMatches && !init.hydrationData) {
            let fogOfWar = checkFogOfWar(initialMatches, dataRoutes, init.history.location.pathname);
            if (fogOfWar.active) {
                initialMatches = null;
            }
        }
        if (!initialMatches) {
            initialized = false;
            initialMatches = [];
            let fogOfWar = checkFogOfWar(null, dataRoutes, init.history.location.pathname);
            if (fogOfWar.active && fogOfWar.matches) {
                initialMatchesIsFOW = true;
                initialMatches = fogOfWar.matches;
            }
        } else if (initialMatches.some((m)=>m.route.lazy)) {
            initialized = false;
        } else if (!initialMatches.some((m)=>routeHasLoaderOrMiddleware(m.route))) {
            initialized = true;
        } else {
            let loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
            let errors = init.hydrationData ? init.hydrationData.errors : null;
            if (errors) {
                let idx = initialMatches.findIndex((m)=>errors[m.route.id] !== void 0);
                initialized = initialMatches.slice(0, idx + 1).every((m)=>!shouldLoadRouteOnHydration(m.route, loaderData, errors));
            } else {
                initialized = initialMatches.every((m)=>!shouldLoadRouteOnHydration(m.route, loaderData, errors));
            }
        }
    }
    let router;
    let state = {
        historyAction: init.history.action,
        location: init.history.location,
        matches: initialMatches,
        initialized,
        navigation: IDLE_NAVIGATION,
        // Don't restore on initial updateState() if we were SSR'd
        restoreScrollPosition: init.hydrationData != null ? false : null,
        preventScrollReset: false,
        revalidation: "idle",
        loaderData: init.hydrationData && init.hydrationData.loaderData || {},
        actionData: init.hydrationData && init.hydrationData.actionData || null,
        errors: init.hydrationData && init.hydrationData.errors || initialErrors,
        fetchers: /* @__PURE__ */ new Map(),
        blockers: /* @__PURE__ */ new Map()
    };
    let pendingAction = "POP" /* Pop */ ;
    let pendingPreventScrollReset = false;
    let pendingNavigationController;
    let pendingViewTransitionEnabled = false;
    let appliedViewTransitions = /* @__PURE__ */ new Map();
    let removePageHideEventListener = null;
    let isUninterruptedRevalidation = false;
    let isRevalidationRequired = false;
    let cancelledFetcherLoads = /* @__PURE__ */ new Set();
    let fetchControllers = /* @__PURE__ */ new Map();
    let incrementingLoadId = 0;
    let pendingNavigationLoadId = -1;
    let fetchReloadIds = /* @__PURE__ */ new Map();
    let fetchRedirectIds = /* @__PURE__ */ new Set();
    let fetchLoadMatches = /* @__PURE__ */ new Map();
    let activeFetchers = /* @__PURE__ */ new Map();
    let fetchersQueuedForDeletion = /* @__PURE__ */ new Set();
    let blockerFunctions = /* @__PURE__ */ new Map();
    let unblockBlockerHistoryUpdate = void 0;
    let pendingRevalidationDfd = null;
    function initialize() {
        unlistenHistory = init.history.listen(({ action: historyAction, location, delta })=>{
            if (unblockBlockerHistoryUpdate) {
                unblockBlockerHistoryUpdate();
                unblockBlockerHistoryUpdate = void 0;
                return;
            }
            warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
            let blockerKey = shouldBlockNavigation({
                currentLocation: state.location,
                nextLocation: location,
                historyAction
            });
            if (blockerKey && delta != null) {
                let nextHistoryUpdatePromise = new Promise((resolve)=>{
                    unblockBlockerHistoryUpdate = resolve;
                });
                init.history.go(delta * -1);
                updateBlocker(blockerKey, {
                    state: "blocked",
                    location,
                    proceed () {
                        updateBlocker(blockerKey, {
                            state: "proceeding",
                            proceed: void 0,
                            reset: void 0,
                            location
                        });
                        nextHistoryUpdatePromise.then(()=>init.history.go(delta));
                    },
                    reset () {
                        let blockers = new Map(state.blockers);
                        blockers.set(blockerKey, IDLE_BLOCKER);
                        updateState({
                            blockers
                        });
                    }
                });
                return;
            }
            return startNavigation(historyAction, location);
        });
        if (isBrowser2) {
            restoreAppliedTransitions(routerWindow, appliedViewTransitions);
            let _saveAppliedTransitions = ()=>persistAppliedTransitions(routerWindow, appliedViewTransitions);
            routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
            removePageHideEventListener = ()=>routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
        }
        if (!state.initialized) {
            startNavigation("POP" /* Pop */ , state.location, {
                initialHydration: true
            });
        }
        return router;
    }
    function dispose() {
        if (unlistenHistory) {
            unlistenHistory();
        }
        if (removePageHideEventListener) {
            removePageHideEventListener();
        }
        subscribers.clear();
        pendingNavigationController && pendingNavigationController.abort();
        state.fetchers.forEach((_, key)=>deleteFetcher(key));
        state.blockers.forEach((_, key)=>deleteBlocker(key));
    }
    function subscribe(fn) {
        subscribers.add(fn);
        return ()=>subscribers.delete(fn);
    }
    function updateState(newState, opts = {}) {
        if (newState.matches) {
            newState.matches = newState.matches.map((m)=>{
                let route = manifest[m.route.id];
                let matchRoute = m.route;
                if (matchRoute.element !== route.element || matchRoute.errorElement !== route.errorElement || matchRoute.hydrateFallbackElement !== route.hydrateFallbackElement) {
                    return {
                        ...m,
                        route
                    };
                }
                return m;
            });
        }
        state = {
            ...state,
            ...newState
        };
        let unmountedFetchers = [];
        let mountedFetchers = [];
        state.fetchers.forEach((fetcher, key)=>{
            if (fetcher.state === "idle") {
                if (fetchersQueuedForDeletion.has(key)) {
                    unmountedFetchers.push(key);
                } else {
                    mountedFetchers.push(key);
                }
            }
        });
        fetchersQueuedForDeletion.forEach((key)=>{
            if (!state.fetchers.has(key) && !fetchControllers.has(key)) {
                unmountedFetchers.push(key);
            }
        });
        [
            ...subscribers
        ].forEach((subscriber)=>subscriber(state, {
                deletedFetchers: unmountedFetchers,
                viewTransitionOpts: opts.viewTransitionOpts,
                flushSync: opts.flushSync === true
            }));
        unmountedFetchers.forEach((key)=>deleteFetcher(key));
        mountedFetchers.forEach((key)=>state.fetchers.delete(key));
    }
    function completeNavigation(location, newState, { flushSync } = {}) {
        let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && location.state?._isRedirect !== true;
        let actionData;
        if (newState.actionData) {
            if (Object.keys(newState.actionData).length > 0) {
                actionData = newState.actionData;
            } else {
                actionData = null;
            }
        } else if (isActionReload) {
            actionData = state.actionData;
        } else {
            actionData = null;
        }
        let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
        let blockers = state.blockers;
        if (blockers.size > 0) {
            blockers = new Map(blockers);
            blockers.forEach((_, k)=>blockers.set(k, IDLE_BLOCKER));
        }
        let restoreScrollPosition = isUninterruptedRevalidation ? false : getSavedScrollPosition(location, newState.matches || state.matches);
        let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && location.state?._isRedirect !== true;
        if (inFlightDataRoutes) {
            dataRoutes = inFlightDataRoutes;
            inFlightDataRoutes = void 0;
        }
        if (isUninterruptedRevalidation) {} else if (pendingAction === "POP" /* Pop */ ) {} else if (pendingAction === "PUSH" /* Push */ ) {
            init.history.push(location, location.state);
        } else if (pendingAction === "REPLACE" /* Replace */ ) {
            init.history.replace(location, location.state);
        }
        let viewTransitionOpts;
        if (pendingAction === "POP" /* Pop */ ) {
            let priorPaths = appliedViewTransitions.get(state.location.pathname);
            if (priorPaths && priorPaths.has(location.pathname)) {
                viewTransitionOpts = {
                    currentLocation: state.location,
                    nextLocation: location
                };
            } else if (appliedViewTransitions.has(location.pathname)) {
                viewTransitionOpts = {
                    currentLocation: location,
                    nextLocation: state.location
                };
            }
        } else if (pendingViewTransitionEnabled) {
            let toPaths = appliedViewTransitions.get(state.location.pathname);
            if (toPaths) {
                toPaths.add(location.pathname);
            } else {
                toPaths = /* @__PURE__ */ new Set([
                    location.pathname
                ]);
                appliedViewTransitions.set(state.location.pathname, toPaths);
            }
            viewTransitionOpts = {
                currentLocation: state.location,
                nextLocation: location
            };
        }
        updateState({
            ...newState,
            // matches, errors, fetchers go through as-is
            actionData,
            loaderData,
            historyAction: pendingAction,
            location,
            initialized: true,
            navigation: IDLE_NAVIGATION,
            revalidation: "idle",
            restoreScrollPosition,
            preventScrollReset,
            blockers
        }, {
            viewTransitionOpts,
            flushSync: flushSync === true
        });
        pendingAction = "POP" /* Pop */ ;
        pendingPreventScrollReset = false;
        pendingViewTransitionEnabled = false;
        isUninterruptedRevalidation = false;
        isRevalidationRequired = false;
        pendingRevalidationDfd?.resolve();
        pendingRevalidationDfd = null;
    }
    async function navigate(to, opts) {
        if (typeof to === "number") {
            init.history.go(to);
            return;
        }
        let normalizedPath = normalizeTo(state.location, state.matches, basename, to, opts?.fromRouteId, opts?.relative);
        let { path, submission, error } = normalizeNavigateOptions(false, normalizedPath, opts);
        let currentLocation = state.location;
        let nextLocation = createLocation(state.location, path, opts && opts.state);
        nextLocation = {
            ...nextLocation,
            ...init.history.encodeLocation(nextLocation)
        };
        let userReplace = opts && opts.replace != null ? opts.replace : void 0;
        let historyAction = "PUSH" /* Push */ ;
        if (userReplace === true) {
            historyAction = "REPLACE" /* Replace */ ;
        } else if (userReplace === false) {} else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
            historyAction = "REPLACE" /* Replace */ ;
        }
        let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : void 0;
        let flushSync = (opts && opts.flushSync) === true;
        let blockerKey = shouldBlockNavigation({
            currentLocation,
            nextLocation,
            historyAction
        });
        if (blockerKey) {
            updateBlocker(blockerKey, {
                state: "blocked",
                location: nextLocation,
                proceed () {
                    updateBlocker(blockerKey, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: nextLocation
                    });
                    navigate(to, opts);
                },
                reset () {
                    let blockers = new Map(state.blockers);
                    blockers.set(blockerKey, IDLE_BLOCKER);
                    updateState({
                        blockers
                    });
                }
            });
            return;
        }
        await startNavigation(historyAction, nextLocation, {
            submission,
            // Send through the formData serialization error if we have one so we can
            // render at the right error boundary after we match routes
            pendingError: error,
            preventScrollReset,
            replace: opts && opts.replace,
            enableViewTransition: opts && opts.viewTransition,
            flushSync
        });
    }
    function revalidate() {
        if (!pendingRevalidationDfd) {
            pendingRevalidationDfd = createDeferred();
        }
        interruptActiveLoads();
        updateState({
            revalidation: "loading"
        });
        let promise = pendingRevalidationDfd.promise;
        if (state.navigation.state === "submitting") {
            return promise;
        }
        if (state.navigation.state === "idle") {
            startNavigation(state.historyAction, state.location, {
                startUninterruptedRevalidation: true
            });
            return promise;
        }
        startNavigation(pendingAction || state.historyAction, state.navigation.location, {
            overrideNavigation: state.navigation,
            // Proxy through any rending view transition
            enableViewTransition: pendingViewTransitionEnabled === true
        });
        return promise;
    }
    async function startNavigation(historyAction, location, opts) {
        pendingNavigationController && pendingNavigationController.abort();
        pendingNavigationController = null;
        pendingAction = historyAction;
        isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
        saveScrollPosition(state.location, state.matches);
        pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
        pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let loadingNavigation = opts && opts.overrideNavigation;
        let matches = opts?.initialHydration && state.matches && state.matches.length > 0 && !initialMatchesIsFOW ? // `matchRoutes()` has already been called if we're in here via `router.initialize()`
        state.matches : matchRoutes(routesToUse, location, basename);
        let flushSync = (opts && opts.flushSync) === true;
        if (matches && state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
            completeNavigation(location, {
                matches
            }, {
                flushSync
            });
            return;
        }
        let fogOfWar = checkFogOfWar(matches, routesToUse, location.pathname);
        if (fogOfWar.active && fogOfWar.matches) {
            matches = fogOfWar.matches;
        }
        if (!matches) {
            let { error, notFoundMatches, route } = handleNavigational404(location.pathname);
            completeNavigation(location, {
                matches: notFoundMatches,
                loaderData: {},
                errors: {
                    [route.id]: error
                }
            }, {
                flushSync
            });
            return;
        }
        pendingNavigationController = new AbortController();
        let request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
        let scopedContext = init.getContext ? await init.getContext() : new RouterContextProvider();
        let pendingActionResult;
        if (opts && opts.pendingError) {
            pendingActionResult = [
                findNearestBoundary(matches).route.id,
                {
                    type: "error" /* error */ ,
                    error: opts.pendingError
                }
            ];
        } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
            let actionResult = await handleAction(request, location, opts.submission, matches, scopedContext, fogOfWar.active, opts && opts.initialHydration === true, {
                replace: opts.replace,
                flushSync
            });
            if (actionResult.shortCircuited) {
                return;
            }
            if (actionResult.pendingActionResult) {
                let [routeId, result] = actionResult.pendingActionResult;
                if (isErrorResult(result) && isRouteErrorResponse(result.error) && result.error.status === 404) {
                    pendingNavigationController = null;
                    completeNavigation(location, {
                        matches: actionResult.matches,
                        loaderData: {},
                        errors: {
                            [routeId]: result.error
                        }
                    });
                    return;
                }
            }
            matches = actionResult.matches || matches;
            pendingActionResult = actionResult.pendingActionResult;
            loadingNavigation = getLoadingNavigation(location, opts.submission);
            flushSync = false;
            fogOfWar.active = false;
            request = createClientSideRequest(init.history, request.url, request.signal);
        }
        let { shortCircuited, matches: updatedMatches, loaderData, errors } = await handleLoaders(request, location, matches, scopedContext, fogOfWar.active, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, opts && opts.initialHydration === true, flushSync, pendingActionResult);
        if (shortCircuited) {
            return;
        }
        pendingNavigationController = null;
        completeNavigation(location, {
            matches: updatedMatches || matches,
            ...getActionDataForCommit(pendingActionResult),
            loaderData,
            errors
        });
    }
    async function handleAction(request, location, submission, matches, scopedContext, isFogOfWar, initialHydration, opts = {}) {
        interruptActiveLoads();
        let navigation = getSubmittingNavigation(location, submission);
        updateState({
            navigation
        }, {
            flushSync: opts.flushSync === true
        });
        if (isFogOfWar) {
            let discoverResult = await discoverRoutes(matches, location.pathname, request.signal);
            if (discoverResult.type === "aborted") {
                return {
                    shortCircuited: true
                };
            } else if (discoverResult.type === "error") {
                if (discoverResult.partialMatches.length === 0) {
                    let { matches: matches2, route } = getShortCircuitMatches(dataRoutes);
                    return {
                        matches: matches2,
                        pendingActionResult: [
                            route.id,
                            {
                                type: "error" /* error */ ,
                                error: discoverResult.error
                            }
                        ]
                    };
                }
                let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
                return {
                    matches: discoverResult.partialMatches,
                    pendingActionResult: [
                        boundaryId,
                        {
                            type: "error" /* error */ ,
                            error: discoverResult.error
                        }
                    ]
                };
            } else if (!discoverResult.matches) {
                let { notFoundMatches, error, route } = handleNavigational404(location.pathname);
                return {
                    matches: notFoundMatches,
                    pendingActionResult: [
                        route.id,
                        {
                            type: "error" /* error */ ,
                            error
                        }
                    ]
                };
            } else {
                matches = discoverResult.matches;
            }
        }
        let result;
        let actionMatch = getTargetMatch(matches, location);
        if (!actionMatch.route.action && !actionMatch.route.lazy) {
            result = {
                type: "error" /* error */ ,
                error: getInternalRouterError(405, {
                    method: request.method,
                    pathname: location.pathname,
                    routeId: actionMatch.route.id
                })
            };
        } else {
            let dsMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, request, matches, actionMatch, initialHydration ? [] : hydrationRouteProperties2, scopedContext);
            let results = await callDataStrategy(request, dsMatches, scopedContext, null);
            result = results[actionMatch.route.id];
            if (!result) {
                for (let match of matches){
                    if (results[match.route.id]) {
                        result = results[match.route.id];
                        break;
                    }
                }
            }
            if (request.signal.aborted) {
                return {
                    shortCircuited: true
                };
            }
        }
        if (isRedirectResult(result)) {
            let replace2;
            if (opts && opts.replace != null) {
                replace2 = opts.replace;
            } else {
                let location2 = normalizeRedirectLocation(result.response.headers.get("Location"), new URL(request.url), basename);
                replace2 = location2 === state.location.pathname + state.location.search;
            }
            await startRedirectNavigation(request, result, true, {
                submission,
                replace: replace2
            });
            return {
                shortCircuited: true
            };
        }
        if (isErrorResult(result)) {
            let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
            if ((opts && opts.replace) !== true) {
                pendingAction = "PUSH" /* Push */ ;
            }
            return {
                matches,
                pendingActionResult: [
                    boundaryMatch.route.id,
                    result,
                    actionMatch.route.id
                ]
            };
        }
        return {
            matches,
            pendingActionResult: [
                actionMatch.route.id,
                result
            ]
        };
    }
    async function handleLoaders(request, location, matches, scopedContext, isFogOfWar, overrideNavigation, submission, fetcherSubmission, replace2, initialHydration, flushSync, pendingActionResult) {
        let loadingNavigation = overrideNavigation || getLoadingNavigation(location, submission);
        let activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
        let shouldUpdateNavigationState = !isUninterruptedRevalidation && !initialHydration;
        if (isFogOfWar) {
            if (shouldUpdateNavigationState) {
                let actionData = getUpdatedActionData(pendingActionResult);
                updateState({
                    navigation: loadingNavigation,
                    ...actionData !== void 0 ? {
                        actionData
                    } : {}
                }, {
                    flushSync
                });
            }
            let discoverResult = await discoverRoutes(matches, location.pathname, request.signal);
            if (discoverResult.type === "aborted") {
                return {
                    shortCircuited: true
                };
            } else if (discoverResult.type === "error") {
                if (discoverResult.partialMatches.length === 0) {
                    let { matches: matches2, route } = getShortCircuitMatches(dataRoutes);
                    return {
                        matches: matches2,
                        loaderData: {},
                        errors: {
                            [route.id]: discoverResult.error
                        }
                    };
                }
                let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
                return {
                    matches: discoverResult.partialMatches,
                    loaderData: {},
                    errors: {
                        [boundaryId]: discoverResult.error
                    }
                };
            } else if (!discoverResult.matches) {
                let { error, notFoundMatches, route } = handleNavigational404(location.pathname);
                return {
                    matches: notFoundMatches,
                    loaderData: {},
                    errors: {
                        [route.id]: error
                    }
                };
            } else {
                matches = discoverResult.matches;
            }
        }
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let { dsMatches, revalidatingFetchers } = getMatchesToLoad(request, scopedContext, mapRouteProperties2, manifest, init.history, state, matches, activeSubmission, location, initialHydration ? [] : hydrationRouteProperties2, initialHydration === true, isRevalidationRequired, cancelledFetcherLoads, fetchersQueuedForDeletion, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, init.patchRoutesOnNavigation != null, pendingActionResult);
        pendingNavigationLoadId = ++incrementingLoadId;
        if (!init.dataStrategy && !dsMatches.some((m)=>m.shouldLoad) && !dsMatches.some((m)=>m.route.middleware && m.route.middleware.length > 0) && revalidatingFetchers.length === 0) {
            let updatedFetchers2 = markFetchRedirectsDone();
            completeNavigation(location, {
                matches,
                loaderData: {},
                // Commit pending error if we're short circuiting
                errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? {
                    [pendingActionResult[0]]: pendingActionResult[1].error
                } : null,
                ...getActionDataForCommit(pendingActionResult),
                ...updatedFetchers2 ? {
                    fetchers: new Map(state.fetchers)
                } : {}
            }, {
                flushSync
            });
            return {
                shortCircuited: true
            };
        }
        if (shouldUpdateNavigationState) {
            let updates = {};
            if (!isFogOfWar) {
                updates.navigation = loadingNavigation;
                let actionData = getUpdatedActionData(pendingActionResult);
                if (actionData !== void 0) {
                    updates.actionData = actionData;
                }
            }
            if (revalidatingFetchers.length > 0) {
                updates.fetchers = getUpdatedRevalidatingFetchers(revalidatingFetchers);
            }
            updateState(updates, {
                flushSync
            });
        }
        revalidatingFetchers.forEach((rf)=>{
            abortFetcher(rf.key);
            if (rf.controller) {
                fetchControllers.set(rf.key, rf.controller);
            }
        });
        let abortPendingFetchRevalidations = ()=>revalidatingFetchers.forEach((f)=>abortFetcher(f.key));
        if (pendingNavigationController) {
            pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
        }
        let { loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(dsMatches, revalidatingFetchers, request, scopedContext);
        if (request.signal.aborted) {
            return {
                shortCircuited: true
            };
        }
        if (pendingNavigationController) {
            pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
        }
        revalidatingFetchers.forEach((rf)=>fetchControllers.delete(rf.key));
        let redirect2 = findRedirect(loaderResults);
        if (redirect2) {
            await startRedirectNavigation(request, redirect2.result, true, {
                replace: replace2
            });
            return {
                shortCircuited: true
            };
        }
        redirect2 = findRedirect(fetcherResults);
        if (redirect2) {
            fetchRedirectIds.add(redirect2.key);
            await startRedirectNavigation(request, redirect2.result, true, {
                replace: replace2
            });
            return {
                shortCircuited: true
            };
        }
        let { loaderData, errors } = processLoaderData(state, matches, loaderResults, pendingActionResult, revalidatingFetchers, fetcherResults);
        if (initialHydration && state.errors) {
            errors = {
                ...state.errors,
                ...errors
            };
        }
        let updatedFetchers = markFetchRedirectsDone();
        let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
        let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
        return {
            matches,
            loaderData,
            errors,
            ...shouldUpdateFetchers ? {
                fetchers: new Map(state.fetchers)
            } : {}
        };
    }
    function getUpdatedActionData(pendingActionResult) {
        if (pendingActionResult && !isErrorResult(pendingActionResult[1])) {
            return {
                [pendingActionResult[0]]: pendingActionResult[1].data
            };
        } else if (state.actionData) {
            if (Object.keys(state.actionData).length === 0) {
                return null;
            } else {
                return state.actionData;
            }
        }
    }
    function getUpdatedRevalidatingFetchers(revalidatingFetchers) {
        revalidatingFetchers.forEach((rf)=>{
            let fetcher = state.fetchers.get(rf.key);
            let revalidatingFetcher = getLoadingFetcher(void 0, fetcher ? fetcher.data : void 0);
            state.fetchers.set(rf.key, revalidatingFetcher);
        });
        return new Map(state.fetchers);
    }
    async function fetch2(key, routeId, href, opts) {
        abortFetcher(key);
        let flushSync = (opts && opts.flushSync) === true;
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let normalizedPath = normalizeTo(state.location, state.matches, basename, href, routeId, opts?.relative);
        let matches = matchRoutes(routesToUse, normalizedPath, basename);
        let fogOfWar = checkFogOfWar(matches, routesToUse, normalizedPath);
        if (fogOfWar.active && fogOfWar.matches) {
            matches = fogOfWar.matches;
        }
        if (!matches) {
            setFetcherError(key, routeId, getInternalRouterError(404, {
                pathname: normalizedPath
            }), {
                flushSync
            });
            return;
        }
        let { path, submission, error } = normalizeNavigateOptions(true, normalizedPath, opts);
        if (error) {
            setFetcherError(key, routeId, error, {
                flushSync
            });
            return;
        }
        let scopedContext = init.getContext ? await init.getContext() : new RouterContextProvider();
        let preventScrollReset = (opts && opts.preventScrollReset) === true;
        if (submission && isMutationMethod(submission.formMethod)) {
            await handleFetcherAction(key, routeId, path, matches, scopedContext, fogOfWar.active, flushSync, preventScrollReset, submission);
            return;
        }
        fetchLoadMatches.set(key, {
            routeId,
            path
        });
        await handleFetcherLoader(key, routeId, path, matches, scopedContext, fogOfWar.active, flushSync, preventScrollReset, submission);
    }
    async function handleFetcherAction(key, routeId, path, requestMatches, scopedContext, isFogOfWar, flushSync, preventScrollReset, submission) {
        interruptActiveLoads();
        fetchLoadMatches.delete(key);
        let existingFetcher = state.fetchers.get(key);
        updateFetcherState(key, getSubmittingFetcher(submission, existingFetcher), {
            flushSync
        });
        let abortController = new AbortController();
        let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
        if (isFogOfWar) {
            let discoverResult = await discoverRoutes(requestMatches, new URL(fetchRequest.url).pathname, fetchRequest.signal, key);
            if (discoverResult.type === "aborted") {
                return;
            } else if (discoverResult.type === "error") {
                setFetcherError(key, routeId, discoverResult.error, {
                    flushSync
                });
                return;
            } else if (!discoverResult.matches) {
                setFetcherError(key, routeId, getInternalRouterError(404, {
                    pathname: path
                }), {
                    flushSync
                });
                return;
            } else {
                requestMatches = discoverResult.matches;
            }
        }
        let match = getTargetMatch(requestMatches, path);
        if (!match.route.action && !match.route.lazy) {
            let error = getInternalRouterError(405, {
                method: submission.formMethod,
                pathname: path,
                routeId
            });
            setFetcherError(key, routeId, error, {
                flushSync
            });
            return;
        }
        fetchControllers.set(key, abortController);
        let originatingLoadId = incrementingLoadId;
        let fetchMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, fetchRequest, requestMatches, match, hydrationRouteProperties2, scopedContext);
        let actionResults = await callDataStrategy(fetchRequest, fetchMatches, scopedContext, key);
        let actionResult = actionResults[match.route.id];
        if (!actionResult) {
            for (let match2 of fetchMatches){
                if (actionResults[match2.route.id]) {
                    actionResult = actionResults[match2.route.id];
                    break;
                }
            }
        }
        if (fetchRequest.signal.aborted) {
            if (fetchControllers.get(key) === abortController) {
                fetchControllers.delete(key);
            }
            return;
        }
        if (fetchersQueuedForDeletion.has(key)) {
            if (isRedirectResult(actionResult) || isErrorResult(actionResult)) {
                updateFetcherState(key, getDoneFetcher(void 0));
                return;
            }
        } else {
            if (isRedirectResult(actionResult)) {
                fetchControllers.delete(key);
                if (pendingNavigationLoadId > originatingLoadId) {
                    updateFetcherState(key, getDoneFetcher(void 0));
                    return;
                } else {
                    fetchRedirectIds.add(key);
                    updateFetcherState(key, getLoadingFetcher(submission));
                    return startRedirectNavigation(fetchRequest, actionResult, false, {
                        fetcherSubmission: submission,
                        preventScrollReset
                    });
                }
            }
            if (isErrorResult(actionResult)) {
                setFetcherError(key, routeId, actionResult.error);
                return;
            }
        }
        let nextLocation = state.navigation.location || state.location;
        let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
        invariant(matches, "Didn't find any matches after fetcher action");
        let loadId = ++incrementingLoadId;
        fetchReloadIds.set(key, loadId);
        let loadFetcher = getLoadingFetcher(submission, actionResult.data);
        state.fetchers.set(key, loadFetcher);
        let { dsMatches, revalidatingFetchers } = getMatchesToLoad(revalidationRequest, scopedContext, mapRouteProperties2, manifest, init.history, state, matches, submission, nextLocation, hydrationRouteProperties2, false, isRevalidationRequired, cancelledFetcherLoads, fetchersQueuedForDeletion, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, init.patchRoutesOnNavigation != null, [
            match.route.id,
            actionResult
        ]);
        revalidatingFetchers.filter((rf)=>rf.key !== key).forEach((rf)=>{
            let staleKey = rf.key;
            let existingFetcher2 = state.fetchers.get(staleKey);
            let revalidatingFetcher = getLoadingFetcher(void 0, existingFetcher2 ? existingFetcher2.data : void 0);
            state.fetchers.set(staleKey, revalidatingFetcher);
            abortFetcher(staleKey);
            if (rf.controller) {
                fetchControllers.set(staleKey, rf.controller);
            }
        });
        updateState({
            fetchers: new Map(state.fetchers)
        });
        let abortPendingFetchRevalidations = ()=>revalidatingFetchers.forEach((rf)=>abortFetcher(rf.key));
        abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
        let { loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(dsMatches, revalidatingFetchers, revalidationRequest, scopedContext);
        if (abortController.signal.aborted) {
            return;
        }
        abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
        fetchReloadIds.delete(key);
        fetchControllers.delete(key);
        revalidatingFetchers.forEach((r)=>fetchControllers.delete(r.key));
        if (state.fetchers.has(key)) {
            let doneFetcher = getDoneFetcher(actionResult.data);
            state.fetchers.set(key, doneFetcher);
        }
        let redirect2 = findRedirect(loaderResults);
        if (redirect2) {
            return startRedirectNavigation(revalidationRequest, redirect2.result, false, {
                preventScrollReset
            });
        }
        redirect2 = findRedirect(fetcherResults);
        if (redirect2) {
            fetchRedirectIds.add(redirect2.key);
            return startRedirectNavigation(revalidationRequest, redirect2.result, false, {
                preventScrollReset
            });
        }
        let { loaderData, errors } = processLoaderData(state, matches, loaderResults, void 0, revalidatingFetchers, fetcherResults);
        abortStaleFetchLoads(loadId);
        if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
            invariant(pendingAction, "Expected pending action");
            pendingNavigationController && pendingNavigationController.abort();
            completeNavigation(state.navigation.location, {
                matches,
                loaderData,
                errors,
                fetchers: new Map(state.fetchers)
            });
        } else {
            updateState({
                errors,
                loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors),
                fetchers: new Map(state.fetchers)
            });
            isRevalidationRequired = false;
        }
    }
    async function handleFetcherLoader(key, routeId, path, matches, scopedContext, isFogOfWar, flushSync, preventScrollReset, submission) {
        let existingFetcher = state.fetchers.get(key);
        updateFetcherState(key, getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : void 0), {
            flushSync
        });
        let abortController = new AbortController();
        let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
        if (isFogOfWar) {
            let discoverResult = await discoverRoutes(matches, new URL(fetchRequest.url).pathname, fetchRequest.signal, key);
            if (discoverResult.type === "aborted") {
                return;
            } else if (discoverResult.type === "error") {
                setFetcherError(key, routeId, discoverResult.error, {
                    flushSync
                });
                return;
            } else if (!discoverResult.matches) {
                setFetcherError(key, routeId, getInternalRouterError(404, {
                    pathname: path
                }), {
                    flushSync
                });
                return;
            } else {
                matches = discoverResult.matches;
            }
        }
        let match = getTargetMatch(matches, path);
        fetchControllers.set(key, abortController);
        let originatingLoadId = incrementingLoadId;
        let dsMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, fetchRequest, matches, match, hydrationRouteProperties2, scopedContext);
        let results = await callDataStrategy(fetchRequest, dsMatches, scopedContext, key);
        let result = results[match.route.id];
        if (fetchControllers.get(key) === abortController) {
            fetchControllers.delete(key);
        }
        if (fetchRequest.signal.aborted) {
            return;
        }
        if (fetchersQueuedForDeletion.has(key)) {
            updateFetcherState(key, getDoneFetcher(void 0));
            return;
        }
        if (isRedirectResult(result)) {
            if (pendingNavigationLoadId > originatingLoadId) {
                updateFetcherState(key, getDoneFetcher(void 0));
                return;
            } else {
                fetchRedirectIds.add(key);
                await startRedirectNavigation(fetchRequest, result, false, {
                    preventScrollReset
                });
                return;
            }
        }
        if (isErrorResult(result)) {
            setFetcherError(key, routeId, result.error);
            return;
        }
        updateFetcherState(key, getDoneFetcher(result.data));
    }
    async function startRedirectNavigation(request, redirect2, isNavigation, { submission, fetcherSubmission, preventScrollReset, replace: replace2 } = {}) {
        if (redirect2.response.headers.has("X-Remix-Revalidate")) {
            isRevalidationRequired = true;
        }
        let location = redirect2.response.headers.get("Location");
        invariant(location, "Expected a Location header on the redirect Response");
        location = normalizeRedirectLocation(location, new URL(request.url), basename);
        let redirectLocation = createLocation(state.location, location, {
            _isRedirect: true
        });
        if (isBrowser2) {
            let isDocumentReload = false;
            if (redirect2.response.headers.has("X-Remix-Reload-Document")) {
                isDocumentReload = true;
            } else if (isAbsoluteUrl(location)) {
                const url = createBrowserURLImpl(location, true);
                isDocumentReload = url.origin !== routerWindow.location.origin || // Hard reload if it's an absolute URL that does not match our basename
                stripBasename(url.pathname, basename) == null;
            }
            if (isDocumentReload) {
                if (replace2) {
                    routerWindow.location.replace(location);
                } else {
                    routerWindow.location.assign(location);
                }
                return;
            }
        }
        pendingNavigationController = null;
        let redirectNavigationType = replace2 === true || redirect2.response.headers.has("X-Remix-Replace") ? "REPLACE" /* Replace */  : "PUSH" /* Push */ ;
        let { formMethod, formAction, formEncType } = state.navigation;
        if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) {
            submission = getSubmissionFromNavigation(state.navigation);
        }
        let activeSubmission = submission || fetcherSubmission;
        if (redirectPreserveMethodStatusCodes.has(redirect2.response.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) {
            await startNavigation(redirectNavigationType, redirectLocation, {
                submission: {
                    ...activeSubmission,
                    formAction: location
                },
                // Preserve these flags across redirects
                preventScrollReset: preventScrollReset || pendingPreventScrollReset,
                enableViewTransition: isNavigation ? pendingViewTransitionEnabled : void 0
            });
        } else {
            let overrideNavigation = getLoadingNavigation(redirectLocation, submission);
            await startNavigation(redirectNavigationType, redirectLocation, {
                overrideNavigation,
                // Send fetcher submissions through for shouldRevalidate
                fetcherSubmission,
                // Preserve these flags across redirects
                preventScrollReset: preventScrollReset || pendingPreventScrollReset,
                enableViewTransition: isNavigation ? pendingViewTransitionEnabled : void 0
            });
        }
    }
    async function callDataStrategy(request, matches, scopedContext, fetcherKey) {
        let results;
        let dataResults = {};
        try {
            results = await callDataStrategyImpl(dataStrategyImpl, request, matches, fetcherKey, scopedContext, false);
        } catch (e) {
            matches.filter((m)=>m.shouldLoad).forEach((m)=>{
                dataResults[m.route.id] = {
                    type: "error" /* error */ ,
                    error: e
                };
            });
            return dataResults;
        }
        if (request.signal.aborted) {
            return dataResults;
        }
        for (let [routeId, result] of Object.entries(results)){
            if (isRedirectDataStrategyResult(result)) {
                let response = result.result;
                dataResults[routeId] = {
                    type: "redirect" /* redirect */ ,
                    response: normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename)
                };
            } else {
                dataResults[routeId] = await convertDataStrategyResultToDataResult(result);
            }
        }
        return dataResults;
    }
    async function callLoadersAndMaybeResolveData(matches, fetchersToLoad, request, scopedContext) {
        let loaderResultsPromise = callDataStrategy(request, matches, scopedContext, null);
        let fetcherResultsPromise = Promise.all(fetchersToLoad.map(async (f)=>{
            if (f.matches && f.match && f.request && f.controller) {
                let results = await callDataStrategy(f.request, f.matches, scopedContext, f.key);
                let result = results[f.match.route.id];
                return {
                    [f.key]: result
                };
            } else {
                return Promise.resolve({
                    [f.key]: {
                        type: "error" /* error */ ,
                        error: getInternalRouterError(404, {
                            pathname: f.path
                        })
                    }
                });
            }
        }));
        let loaderResults = await loaderResultsPromise;
        let fetcherResults = (await fetcherResultsPromise).reduce((acc, r)=>Object.assign(acc, r), {});
        return {
            loaderResults,
            fetcherResults
        };
    }
    function interruptActiveLoads() {
        isRevalidationRequired = true;
        fetchLoadMatches.forEach((_, key)=>{
            if (fetchControllers.has(key)) {
                cancelledFetcherLoads.add(key);
            }
            abortFetcher(key);
        });
    }
    function updateFetcherState(key, fetcher, opts = {}) {
        state.fetchers.set(key, fetcher);
        updateState({
            fetchers: new Map(state.fetchers)
        }, {
            flushSync: (opts && opts.flushSync) === true
        });
    }
    function setFetcherError(key, routeId, error, opts = {}) {
        let boundaryMatch = findNearestBoundary(state.matches, routeId);
        deleteFetcher(key);
        updateState({
            errors: {
                [boundaryMatch.route.id]: error
            },
            fetchers: new Map(state.fetchers)
        }, {
            flushSync: (opts && opts.flushSync) === true
        });
    }
    function getFetcher(key) {
        activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
        if (fetchersQueuedForDeletion.has(key)) {
            fetchersQueuedForDeletion.delete(key);
        }
        return state.fetchers.get(key) || IDLE_FETCHER;
    }
    function resetFetcher(key, opts) {
        abortFetcher(key, opts?.reason);
        updateFetcherState(key, getDoneFetcher(null));
    }
    function deleteFetcher(key) {
        let fetcher = state.fetchers.get(key);
        if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) {
            abortFetcher(key);
        }
        fetchLoadMatches.delete(key);
        fetchReloadIds.delete(key);
        fetchRedirectIds.delete(key);
        fetchersQueuedForDeletion.delete(key);
        cancelledFetcherLoads.delete(key);
        state.fetchers.delete(key);
    }
    function queueFetcherForDeletion(key) {
        let count = (activeFetchers.get(key) || 0) - 1;
        if (count <= 0) {
            activeFetchers.delete(key);
            fetchersQueuedForDeletion.add(key);
        } else {
            activeFetchers.set(key, count);
        }
        updateState({
            fetchers: new Map(state.fetchers)
        });
    }
    function abortFetcher(key, reason) {
        let controller = fetchControllers.get(key);
        if (controller) {
            controller.abort(reason);
            fetchControllers.delete(key);
        }
    }
    function markFetchersDone(keys) {
        for (let key of keys){
            let fetcher = getFetcher(key);
            let doneFetcher = getDoneFetcher(fetcher.data);
            state.fetchers.set(key, doneFetcher);
        }
    }
    function markFetchRedirectsDone() {
        let doneKeys = [];
        let updatedFetchers = false;
        for (let key of fetchRedirectIds){
            let fetcher = state.fetchers.get(key);
            invariant(fetcher, `Expected fetcher: ${key}`);
            if (fetcher.state === "loading") {
                fetchRedirectIds.delete(key);
                doneKeys.push(key);
                updatedFetchers = true;
            }
        }
        markFetchersDone(doneKeys);
        return updatedFetchers;
    }
    function abortStaleFetchLoads(landedId) {
        let yeetedKeys = [];
        for (let [key, id] of fetchReloadIds){
            if (id < landedId) {
                let fetcher = state.fetchers.get(key);
                invariant(fetcher, `Expected fetcher: ${key}`);
                if (fetcher.state === "loading") {
                    abortFetcher(key);
                    fetchReloadIds.delete(key);
                    yeetedKeys.push(key);
                }
            }
        }
        markFetchersDone(yeetedKeys);
        return yeetedKeys.length > 0;
    }
    function getBlocker(key, fn) {
        let blocker = state.blockers.get(key) || IDLE_BLOCKER;
        if (blockerFunctions.get(key) !== fn) {
            blockerFunctions.set(key, fn);
        }
        return blocker;
    }
    function deleteBlocker(key) {
        state.blockers.delete(key);
        blockerFunctions.delete(key);
    }
    function updateBlocker(key, newBlocker) {
        let blocker = state.blockers.get(key) || IDLE_BLOCKER;
        invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", `Invalid blocker state transition: ${blocker.state} -> ${newBlocker.state}`);
        let blockers = new Map(state.blockers);
        blockers.set(key, newBlocker);
        updateState({
            blockers
        });
    }
    function shouldBlockNavigation({ currentLocation, nextLocation, historyAction }) {
        if (blockerFunctions.size === 0) {
            return;
        }
        if (blockerFunctions.size > 1) {
            warning(false, "A router only supports one blocker at a time");
        }
        let entries = Array.from(blockerFunctions.entries());
        let [blockerKey, blockerFunction] = entries[entries.length - 1];
        let blocker = state.blockers.get(blockerKey);
        if (blocker && blocker.state === "proceeding") {
            return;
        }
        if (blockerFunction({
            currentLocation,
            nextLocation,
            historyAction
        })) {
            return blockerKey;
        }
    }
    function handleNavigational404(pathname) {
        let error = getInternalRouterError(404, {
            pathname
        });
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let { matches, route } = getShortCircuitMatches(routesToUse);
        return {
            notFoundMatches: matches,
            route,
            error
        };
    }
    function enableScrollRestoration(positions, getPosition, getKey) {
        savedScrollPositions2 = positions;
        getScrollPosition = getPosition;
        getScrollRestorationKey2 = getKey || null;
        if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
            initialScrollRestored = true;
            let y = getSavedScrollPosition(state.location, state.matches);
            if (y != null) {
                updateState({
                    restoreScrollPosition: y
                });
            }
        }
        return ()=>{
            savedScrollPositions2 = null;
            getScrollPosition = null;
            getScrollRestorationKey2 = null;
        };
    }
    function getScrollKey(location, matches) {
        if (getScrollRestorationKey2) {
            let key = getScrollRestorationKey2(location, matches.map((m)=>convertRouteMatchToUiMatch(m, state.loaderData)));
            return key || location.key;
        }
        return location.key;
    }
    function saveScrollPosition(location, matches) {
        if (savedScrollPositions2 && getScrollPosition) {
            let key = getScrollKey(location, matches);
            savedScrollPositions2[key] = getScrollPosition();
        }
    }
    function getSavedScrollPosition(location, matches) {
        if (savedScrollPositions2) {
            let key = getScrollKey(location, matches);
            let y = savedScrollPositions2[key];
            if (typeof y === "number") {
                return y;
            }
        }
        return null;
    }
    function checkFogOfWar(matches, routesToUse, pathname) {
        if (init.patchRoutesOnNavigation) {
            if (!matches) {
                let fogMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
                return {
                    active: true,
                    matches: fogMatches || []
                };
            } else {
                if (Object.keys(matches[0].params).length > 0) {
                    let partialMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
                    return {
                        active: true,
                        matches: partialMatches
                    };
                }
            }
        }
        return {
            active: false,
            matches: null
        };
    }
    async function discoverRoutes(matches, pathname, signal, fetcherKey) {
        if (!init.patchRoutesOnNavigation) {
            return {
                type: "success",
                matches
            };
        }
        let partialMatches = matches;
        while(true){
            let isNonHMR = inFlightDataRoutes == null;
            let routesToUse = inFlightDataRoutes || dataRoutes;
            let localManifest = manifest;
            try {
                await init.patchRoutesOnNavigation({
                    signal,
                    path: pathname,
                    matches: partialMatches,
                    fetcherKey,
                    patch: (routeId, children)=>{
                        if (signal.aborted) return;
                        patchRoutesImpl(routeId, children, routesToUse, localManifest, mapRouteProperties2, false);
                    }
                });
            } catch (e) {
                return {
                    type: "error",
                    error: e,
                    partialMatches
                };
            } finally{
                if (isNonHMR && !signal.aborted) {
                    dataRoutes = [
                        ...dataRoutes
                    ];
                }
            }
            if (signal.aborted) {
                return {
                    type: "aborted"
                };
            }
            let newMatches = matchRoutes(routesToUse, pathname, basename);
            let newPartialMatches = null;
            if (newMatches) {
                if (Object.keys(newMatches[0].params).length === 0) {
                    return {
                        type: "success",
                        matches: newMatches
                    };
                } else {
                    newPartialMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
                    let matchedDeeper = newPartialMatches && partialMatches.length < newPartialMatches.length && compareMatches(partialMatches, newPartialMatches.slice(0, partialMatches.length));
                    if (!matchedDeeper) {
                        return {
                            type: "success",
                            matches: newMatches
                        };
                    }
                }
            }
            if (!newPartialMatches) {
                newPartialMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
            }
            if (!newPartialMatches || compareMatches(partialMatches, newPartialMatches)) {
                return {
                    type: "success",
                    matches: null
                };
            }
            partialMatches = newPartialMatches;
        }
    }
    function compareMatches(a, b) {
        return a.length === b.length && a.every((m, i)=>m.route.id === b[i].route.id);
    }
    function _internalSetRoutes(newRoutes) {
        manifest = {};
        inFlightDataRoutes = convertRoutesToDataRoutes(newRoutes, mapRouteProperties2, void 0, manifest);
    }
    function patchRoutes(routeId, children, unstable_allowElementMutations = false) {
        let isNonHMR = inFlightDataRoutes == null;
        let routesToUse = inFlightDataRoutes || dataRoutes;
        patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties2, unstable_allowElementMutations);
        if (isNonHMR) {
            dataRoutes = [
                ...dataRoutes
            ];
            updateState({});
        }
    }
    router = {
        get basename () {
            return basename;
        },
        get future () {
            return future;
        },
        get state () {
            return state;
        },
        get routes () {
            return dataRoutes;
        },
        get window () {
            return routerWindow;
        },
        initialize,
        subscribe,
        enableScrollRestoration,
        navigate,
        fetch: fetch2,
        revalidate,
        // Passthrough to history-aware createHref used by useHref so we get proper
        // hash-aware URLs in DOM paths
        createHref: (to)=>init.history.createHref(to),
        encodeLocation: (to)=>init.history.encodeLocation(to),
        getFetcher,
        resetFetcher,
        deleteFetcher: queueFetcherForDeletion,
        dispose,
        getBlocker,
        deleteBlocker,
        patchRoutes,
        _internalFetchControllers: fetchControllers,
        // TODO: Remove setRoutes, it's temporary to avoid dealing with
        // updating the tree while validating the update algorithm.
        _internalSetRoutes,
        _internalSetStateDoNotUseOrYouWillBreakYourApp (newState) {
            updateState(newState);
        }
    };
    if (init.unstable_instrumentations) {
        router = instrumentClientSideRouter(router, init.unstable_instrumentations.map((i)=>i.router).filter(Boolean));
    }
    return router;
}
function createStaticHandler(routes, opts) {
    invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
    let manifest = {};
    let basename = (opts ? opts.basename : null) || "/";
    let _mapRouteProperties = opts?.mapRouteProperties || defaultMapRouteProperties;
    let mapRouteProperties2 = _mapRouteProperties;
    if (opts?.unstable_instrumentations) {
        let instrumentations = opts.unstable_instrumentations;
        mapRouteProperties2 = (route)=>{
            return {
                ..._mapRouteProperties(route),
                ...getRouteInstrumentationUpdates(instrumentations.map((i)=>i.route).filter(Boolean), route)
            };
        };
    }
    let dataRoutes = convertRoutesToDataRoutes(routes, mapRouteProperties2, void 0, manifest);
    async function query(request, { requestContext, filterMatchesToLoad, skipLoaderErrorBubbling, skipRevalidation, dataStrategy, generateMiddlewareResponse } = {}) {
        let url = new URL(request.url);
        let method = request.method;
        let location = createLocation("", createPath(url), null, "default");
        let matches = matchRoutes(dataRoutes, location, basename);
        requestContext = requestContext != null ? requestContext : new RouterContextProvider();
        if (!isValidMethod(method) && method !== "HEAD") {
            let error = getInternalRouterError(405, {
                method
            });
            let { matches: methodNotAllowedMatches, route } = getShortCircuitMatches(dataRoutes);
            let staticContext = {
                basename,
                location,
                matches: methodNotAllowedMatches,
                loaderData: {},
                actionData: null,
                errors: {
                    [route.id]: error
                },
                statusCode: error.status,
                loaderHeaders: {},
                actionHeaders: {}
            };
            return generateMiddlewareResponse ? generateMiddlewareResponse(()=>Promise.resolve(staticContext)) : staticContext;
        } else if (!matches) {
            let error = getInternalRouterError(404, {
                pathname: location.pathname
            });
            let { matches: notFoundMatches, route } = getShortCircuitMatches(dataRoutes);
            let staticContext = {
                basename,
                location,
                matches: notFoundMatches,
                loaderData: {},
                actionData: null,
                errors: {
                    [route.id]: error
                },
                statusCode: error.status,
                loaderHeaders: {},
                actionHeaders: {}
            };
            return generateMiddlewareResponse ? generateMiddlewareResponse(()=>Promise.resolve(staticContext)) : staticContext;
        }
        if (generateMiddlewareResponse) {
            invariant(requestContext instanceof RouterContextProvider, "When using middleware in `staticHandler.query()`, any provided `requestContext` must be an instance of `RouterContextProvider`");
            try {
                await loadLazyMiddlewareForMatches(matches, manifest, mapRouteProperties2);
                let renderedStaticContext;
                let response = await runServerMiddlewarePipeline({
                    request,
                    unstable_pattern: getRoutePattern(matches.map((m)=>m.route.path)),
                    matches,
                    params: matches[0].params,
                    // If we're calling middleware then it must be enabled so we can cast
                    // this to the proper type knowing it's not an `AppLoadContext`
                    context: requestContext
                }, async ()=>{
                    let res = await generateMiddlewareResponse(async (revalidationRequest, opts2 = {})=>{
                        let result2 = await queryImpl(revalidationRequest, location, matches, requestContext, dataStrategy || null, skipLoaderErrorBubbling === true, null, "filterMatchesToLoad" in opts2 ? opts2.filterMatchesToLoad ?? null : filterMatchesToLoad ?? null, skipRevalidation === true);
                        if (isResponse(result2)) {
                            return result2;
                        }
                        renderedStaticContext = {
                            location,
                            basename,
                            ...result2
                        };
                        return renderedStaticContext;
                    });
                    return res;
                }, async (error, routeId)=>{
                    if (isRedirectResponse(error)) {
                        return error;
                    }
                    if (isResponse(error)) {
                        try {
                            error = new ErrorResponseImpl(error.status, error.statusText, await parseResponseBody(error));
                        } catch (e) {
                            error = e;
                        }
                    }
                    if (isDataWithResponseInit(error)) {
                        error = dataWithResponseInitToErrorResponse(error);
                    }
                    if (renderedStaticContext) {
                        if (routeId in renderedStaticContext.loaderData) {
                            renderedStaticContext.loaderData[routeId] = void 0;
                        }
                        let staticContext = getStaticContextFromError(dataRoutes, renderedStaticContext, error, skipLoaderErrorBubbling ? routeId : findNearestBoundary(matches, routeId).route.id);
                        return generateMiddlewareResponse(()=>Promise.resolve(staticContext));
                    } else {
                        let boundaryRouteId = skipLoaderErrorBubbling ? routeId : findNearestBoundary(matches, matches.find((m)=>m.route.id === routeId || m.route.loader)?.route.id || routeId).route.id;
                        let staticContext = {
                            matches,
                            location,
                            basename,
                            loaderData: {},
                            actionData: null,
                            errors: {
                                [boundaryRouteId]: error
                            },
                            statusCode: isRouteErrorResponse(error) ? error.status : 500,
                            actionHeaders: {},
                            loaderHeaders: {}
                        };
                        return generateMiddlewareResponse(()=>Promise.resolve(staticContext));
                    }
                });
                invariant(isResponse(response), "Expected a response in query()");
                return response;
            } catch (e) {
                if (isResponse(e)) {
                    return e;
                }
                throw e;
            }
        }
        let result = await queryImpl(request, location, matches, requestContext, dataStrategy || null, skipLoaderErrorBubbling === true, null, filterMatchesToLoad || null, skipRevalidation === true);
        if (isResponse(result)) {
            return result;
        }
        return {
            location,
            basename,
            ...result
        };
    }
    async function queryRoute(request, { routeId, requestContext, dataStrategy, generateMiddlewareResponse } = {}) {
        let url = new URL(request.url);
        let method = request.method;
        let location = createLocation("", createPath(url), null, "default");
        let matches = matchRoutes(dataRoutes, location, basename);
        requestContext = requestContext != null ? requestContext : new RouterContextProvider();
        if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") {
            throw getInternalRouterError(405, {
                method
            });
        } else if (!matches) {
            throw getInternalRouterError(404, {
                pathname: location.pathname
            });
        }
        let match = routeId ? matches.find((m)=>m.route.id === routeId) : getTargetMatch(matches, location);
        if (routeId && !match) {
            throw getInternalRouterError(403, {
                pathname: location.pathname,
                routeId
            });
        } else if (!match) {
            throw getInternalRouterError(404, {
                pathname: location.pathname
            });
        }
        if (generateMiddlewareResponse) {
            invariant(requestContext instanceof RouterContextProvider, "When using middleware in `staticHandler.queryRoute()`, any provided `requestContext` must be an instance of `RouterContextProvider`");
            await loadLazyMiddlewareForMatches(matches, manifest, mapRouteProperties2);
            let response = await runServerMiddlewarePipeline({
                request,
                unstable_pattern: getRoutePattern(matches.map((m)=>m.route.path)),
                matches,
                params: matches[0].params,
                // If we're calling middleware then it must be enabled so we can cast
                // this to the proper type knowing it's not an `AppLoadContext`
                context: requestContext
            }, async ()=>{
                let res = await generateMiddlewareResponse(async (innerRequest)=>{
                    let result2 = await queryImpl(innerRequest, location, matches, requestContext, dataStrategy || null, false, match, null, false);
                    let processed = handleQueryResult(result2);
                    return isResponse(processed) ? processed : typeof processed === "string" ? new Response(processed) : Response.json(processed);
                });
                return res;
            }, (error)=>{
                if (isDataWithResponseInit(error)) {
                    return Promise.resolve(dataWithResponseInitToResponse(error));
                }
                if (isResponse(error)) {
                    return Promise.resolve(error);
                }
                throw error;
            });
            return response;
        }
        let result = await queryImpl(request, location, matches, requestContext, dataStrategy || null, false, match, null, false);
        return handleQueryResult(result);
        //TURBOPACK unreachable
        ;
        function handleQueryResult(result2) {
            if (isResponse(result2)) {
                return result2;
            }
            let error = result2.errors ? Object.values(result2.errors)[0] : void 0;
            if (error !== void 0) {
                throw error;
            }
            if (result2.actionData) {
                return Object.values(result2.actionData)[0];
            }
            if (result2.loaderData) {
                return Object.values(result2.loaderData)[0];
            }
            return void 0;
        }
    }
    async function queryImpl(request, location, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, filterMatchesToLoad, skipRevalidation) {
        invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
        try {
            if (isMutationMethod(request.method)) {
                let result2 = await submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch != null, filterMatchesToLoad, skipRevalidation);
                return result2;
            }
            let result = await loadRouteData(request, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, filterMatchesToLoad);
            return isResponse(result) ? result : {
                ...result,
                actionData: null,
                actionHeaders: {}
            };
        } catch (e) {
            if (isDataStrategyResult(e) && isResponse(e.result)) {
                if (e.type === "error" /* error */ ) {
                    throw e.result;
                }
                return e.result;
            }
            if (isRedirectResponse(e)) {
                return e;
            }
            throw e;
        }
    }
    async function submit(request, matches, actionMatch, requestContext, dataStrategy, skipLoaderErrorBubbling, isRouteRequest, filterMatchesToLoad, skipRevalidation) {
        let result;
        if (!actionMatch.route.action && !actionMatch.route.lazy) {
            let error = getInternalRouterError(405, {
                method: request.method,
                pathname: new URL(request.url).pathname,
                routeId: actionMatch.route.id
            });
            if (isRouteRequest) {
                throw error;
            }
            result = {
                type: "error" /* error */ ,
                error
            };
        } else {
            let dsMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, request, matches, actionMatch, [], requestContext);
            let results = await callDataStrategy(request, dsMatches, isRouteRequest, requestContext, dataStrategy);
            result = results[actionMatch.route.id];
            if (request.signal.aborted) {
                throwStaticHandlerAbortedError(request, isRouteRequest);
            }
        }
        if (isRedirectResult(result)) {
            throw new Response(null, {
                status: result.response.status,
                headers: {
                    Location: result.response.headers.get("Location")
                }
            });
        }
        if (isRouteRequest) {
            if (isErrorResult(result)) {
                throw result.error;
            }
            return {
                matches: [
                    actionMatch
                ],
                loaderData: {},
                actionData: {
                    [actionMatch.route.id]: result.data
                },
                errors: null,
                // Note: statusCode + headers are unused here since queryRoute will
                // return the raw Response or value
                statusCode: 200,
                loaderHeaders: {},
                actionHeaders: {}
            };
        }
        if (skipRevalidation) {
            if (isErrorResult(result)) {
                let boundaryMatch = skipLoaderErrorBubbling ? actionMatch : findNearestBoundary(matches, actionMatch.route.id);
                return {
                    statusCode: isRouteErrorResponse(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
                    actionData: null,
                    actionHeaders: {
                        ...result.headers ? {
                            [actionMatch.route.id]: result.headers
                        } : {}
                    },
                    matches,
                    loaderData: {},
                    errors: {
                        [boundaryMatch.route.id]: result.error
                    },
                    loaderHeaders: {}
                };
            } else {
                return {
                    actionData: {
                        [actionMatch.route.id]: result.data
                    },
                    actionHeaders: result.headers ? {
                        [actionMatch.route.id]: result.headers
                    } : {},
                    matches,
                    loaderData: {},
                    errors: null,
                    statusCode: result.statusCode || 200,
                    loaderHeaders: {}
                };
            }
        }
        let loaderRequest = new Request(request.url, {
            headers: request.headers,
            redirect: request.redirect,
            signal: request.signal
        });
        if (isErrorResult(result)) {
            let boundaryMatch = skipLoaderErrorBubbling ? actionMatch : findNearestBoundary(matches, actionMatch.route.id);
            let handlerContext2 = await loadRouteData(loaderRequest, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, null, filterMatchesToLoad, [
                boundaryMatch.route.id,
                result
            ]);
            return {
                ...handlerContext2,
                statusCode: isRouteErrorResponse(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
                actionData: null,
                actionHeaders: {
                    ...result.headers ? {
                        [actionMatch.route.id]: result.headers
                    } : {}
                }
            };
        }
        let handlerContext = await loadRouteData(loaderRequest, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, null, filterMatchesToLoad);
        return {
            ...handlerContext,
            actionData: {
                [actionMatch.route.id]: result.data
            },
            // action status codes take precedence over loader status codes
            ...result.statusCode ? {
                statusCode: result.statusCode
            } : {},
            actionHeaders: result.headers ? {
                [actionMatch.route.id]: result.headers
            } : {}
        };
    }
    async function loadRouteData(request, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, filterMatchesToLoad, pendingActionResult) {
        let isRouteRequest = routeMatch != null;
        if (isRouteRequest && !routeMatch?.route.loader && !routeMatch?.route.lazy) {
            throw getInternalRouterError(400, {
                method: request.method,
                pathname: new URL(request.url).pathname,
                routeId: routeMatch?.route.id
            });
        }
        let dsMatches;
        if (routeMatch) {
            dsMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, request, matches, routeMatch, [], requestContext);
        } else {
            let maxIdx = pendingActionResult && isErrorResult(pendingActionResult[1]) ? // Up to but not including the boundary
            matches.findIndex((m)=>m.route.id === pendingActionResult[0]) - 1 : void 0;
            let pattern = getRoutePattern(matches.map((m)=>m.route.path));
            dsMatches = matches.map((match, index)=>{
                if (maxIdx != null && index > maxIdx) {
                    return getDataStrategyMatch(mapRouteProperties2, manifest, request, pattern, match, [], requestContext, false);
                }
                return getDataStrategyMatch(mapRouteProperties2, manifest, request, pattern, match, [], requestContext, (match.route.loader || match.route.lazy) != null && (!filterMatchesToLoad || filterMatchesToLoad(match)));
            });
        }
        if (!dataStrategy && !dsMatches.some((m)=>m.shouldLoad)) {
            return {
                matches,
                loaderData: {},
                errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? {
                    [pendingActionResult[0]]: pendingActionResult[1].error
                } : null,
                statusCode: 200,
                loaderHeaders: {}
            };
        }
        let results = await callDataStrategy(request, dsMatches, isRouteRequest, requestContext, dataStrategy);
        if (request.signal.aborted) {
            throwStaticHandlerAbortedError(request, isRouteRequest);
        }
        let handlerContext = processRouteLoaderData(matches, results, pendingActionResult, true, skipLoaderErrorBubbling);
        return {
            ...handlerContext,
            matches
        };
    }
    async function callDataStrategy(request, matches, isRouteRequest, requestContext, dataStrategy) {
        let results = await callDataStrategyImpl(dataStrategy || defaultDataStrategy, request, matches, null, requestContext, true);
        let dataResults = {};
        await Promise.all(matches.map(async (match)=>{
            if (!(match.route.id in results)) {
                return;
            }
            let result = results[match.route.id];
            if (isRedirectDataStrategyResult(result)) {
                let response = result.result;
                throw normalizeRelativeRoutingRedirectResponse(response, request, match.route.id, matches, basename);
            }
            if (isRouteRequest) {
                if (isResponse(result.result)) {
                    throw result;
                } else if (isDataWithResponseInit(result.result)) {
                    throw dataWithResponseInitToResponse(result.result);
                }
            }
            dataResults[match.route.id] = await convertDataStrategyResultToDataResult(result);
        }));
        return dataResults;
    }
    return {
        dataRoutes,
        query,
        queryRoute
    };
}
function getStaticContextFromError(routes, handlerContext, error, boundaryId) {
    let errorBoundaryId = boundaryId || handlerContext._deepestRenderedBoundaryId || routes[0].id;
    return {
        ...handlerContext,
        statusCode: isRouteErrorResponse(error) ? error.status : 500,
        errors: {
            [errorBoundaryId]: error
        }
    };
}
function throwStaticHandlerAbortedError(request, isRouteRequest) {
    if (request.signal.reason !== void 0) {
        throw request.signal.reason;
    }
    let method = isRouteRequest ? "queryRoute" : "query";
    throw new Error(`${method}() call aborted without an \`AbortSignal.reason\`: ${request.method} ${request.url}`);
}
function isSubmissionNavigation(opts) {
    return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== void 0);
}
function normalizeTo(location, matches, basename, to, fromRouteId, relative) {
    let contextualMatches;
    let activeRouteMatch;
    if (fromRouteId) {
        contextualMatches = [];
        for (let match of matches){
            contextualMatches.push(match);
            if (match.route.id === fromRouteId) {
                activeRouteMatch = match;
                break;
            }
        }
    } else {
        contextualMatches = matches;
        activeRouteMatch = matches[matches.length - 1];
    }
    let path = resolveTo(to ? to : ".", getResolveToMatches(contextualMatches), stripBasename(location.pathname, basename) || location.pathname, relative === "path");
    if (to == null) {
        path.search = location.search;
        path.hash = location.hash;
    }
    if ((to == null || to === "" || to === ".") && activeRouteMatch) {
        let nakedIndex = hasNakedIndexQuery(path.search);
        if (activeRouteMatch.route.index && !nakedIndex) {
            path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
        } else if (!activeRouteMatch.route.index && nakedIndex) {
            let params = new URLSearchParams(path.search);
            let indexValues = params.getAll("index");
            params.delete("index");
            indexValues.filter((v)=>v).forEach((v)=>params.append("index", v));
            let qs = params.toString();
            path.search = qs ? `?${qs}` : "";
        }
    }
    if (basename !== "/") {
        path.pathname = prependBasename({
            basename,
            pathname: path.pathname
        });
    }
    return createPath(path);
}
function normalizeNavigateOptions(isFetcher, path, opts) {
    if (!opts || !isSubmissionNavigation(opts)) {
        return {
            path
        };
    }
    if (opts.formMethod && !isValidMethod(opts.formMethod)) {
        return {
            path,
            error: getInternalRouterError(405, {
                method: opts.formMethod
            })
        };
    }
    let getInvalidBodyError = ()=>({
            path,
            error: getInternalRouterError(400, {
                type: "invalid-body"
            })
        });
    let rawFormMethod = opts.formMethod || "get";
    let formMethod = rawFormMethod.toUpperCase();
    let formAction = stripHashFromPath(path);
    if (opts.body !== void 0) {
        if (opts.formEncType === "text/plain") {
            if (!isMutationMethod(formMethod)) {
                return getInvalidBodyError();
            }
            let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ? // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
            Array.from(opts.body.entries()).reduce((acc, [name, value])=>`${acc}${name}=${value}
`, "") : String(opts.body);
            return {
                path,
                submission: {
                    formMethod,
                    formAction,
                    formEncType: opts.formEncType,
                    formData: void 0,
                    json: void 0,
                    text
                }
            };
        } else if (opts.formEncType === "application/json") {
            if (!isMutationMethod(formMethod)) {
                return getInvalidBodyError();
            }
            try {
                let json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
                return {
                    path,
                    submission: {
                        formMethod,
                        formAction,
                        formEncType: opts.formEncType,
                        formData: void 0,
                        json,
                        text: void 0
                    }
                };
            } catch (e) {
                return getInvalidBodyError();
            }
        }
    }
    invariant(typeof FormData === "function", "FormData is not available in this environment");
    let searchParams;
    let formData;
    if (opts.formData) {
        searchParams = convertFormDataToSearchParams(opts.formData);
        formData = opts.formData;
    } else if (opts.body instanceof FormData) {
        searchParams = convertFormDataToSearchParams(opts.body);
        formData = opts.body;
    } else if (opts.body instanceof URLSearchParams) {
        searchParams = opts.body;
        formData = convertSearchParamsToFormData(searchParams);
    } else if (opts.body == null) {
        searchParams = new URLSearchParams();
        formData = new FormData();
    } else {
        try {
            searchParams = new URLSearchParams(opts.body);
            formData = convertSearchParamsToFormData(searchParams);
        } catch (e) {
            return getInvalidBodyError();
        }
    }
    let submission = {
        formMethod,
        formAction,
        formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
        formData,
        json: void 0,
        text: void 0
    };
    if (isMutationMethod(submission.formMethod)) {
        return {
            path,
            submission
        };
    }
    let parsedPath = parsePath(path);
    if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
        searchParams.append("index", "");
    }
    parsedPath.search = `?${searchParams}`;
    return {
        path: createPath(parsedPath),
        submission
    };
}
function getMatchesToLoad(request, scopedContext, mapRouteProperties2, manifest, history, state, matches, submission, location, lazyRoutePropertiesToSkip, initialHydration, isRevalidationRequired, cancelledFetcherLoads, fetchersQueuedForDeletion, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, hasPatchRoutesOnNavigation, pendingActionResult) {
    let actionResult = pendingActionResult ? isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : pendingActionResult[1].data : void 0;
    let currentUrl = history.createURL(state.location);
    let nextUrl = history.createURL(location);
    let maxIdx;
    if (initialHydration && state.errors) {
        let boundaryId = Object.keys(state.errors)[0];
        maxIdx = matches.findIndex((m)=>m.route.id === boundaryId);
    } else if (pendingActionResult && isErrorResult(pendingActionResult[1])) {
        let boundaryId = pendingActionResult[0];
        maxIdx = matches.findIndex((m)=>m.route.id === boundaryId) - 1;
    }
    let actionStatus = pendingActionResult ? pendingActionResult[1].statusCode : void 0;
    let shouldSkipRevalidation = actionStatus && actionStatus >= 400;
    let baseShouldRevalidateArgs = {
        currentUrl,
        currentParams: state.matches[0]?.params || {},
        nextUrl,
        nextParams: matches[0].params,
        ...submission,
        actionResult,
        actionStatus
    };
    let pattern = getRoutePattern(matches.map((m)=>m.route.path));
    let dsMatches = matches.map((match, index)=>{
        let { route } = match;
        let forceShouldLoad = null;
        if (maxIdx != null && index > maxIdx) {
            forceShouldLoad = false;
        } else if (route.lazy) {
            forceShouldLoad = true;
        } else if (!routeHasLoaderOrMiddleware(route)) {
            forceShouldLoad = false;
        } else if (initialHydration) {
            forceShouldLoad = shouldLoadRouteOnHydration(route, state.loaderData, state.errors);
        } else if (isNewLoader(state.loaderData, state.matches[index], match)) {
            forceShouldLoad = true;
        }
        if (forceShouldLoad !== null) {
            return getDataStrategyMatch(mapRouteProperties2, manifest, request, pattern, match, lazyRoutePropertiesToSkip, scopedContext, forceShouldLoad);
        }
        let defaultShouldRevalidate = shouldSkipRevalidation ? false : // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
        isRevalidationRequired || currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search || // Search params affect all loaders
        currentUrl.search !== nextUrl.search || isNewRouteInstance(state.matches[index], match);
        let shouldRevalidateArgs = {
            ...baseShouldRevalidateArgs,
            defaultShouldRevalidate
        };
        let shouldLoad = shouldRevalidateLoader(match, shouldRevalidateArgs);
        return getDataStrategyMatch(mapRouteProperties2, manifest, request, pattern, match, lazyRoutePropertiesToSkip, scopedContext, shouldLoad, shouldRevalidateArgs);
    });
    let revalidatingFetchers = [];
    fetchLoadMatches.forEach((f, key)=>{
        if (initialHydration || !matches.some((m)=>m.route.id === f.routeId) || fetchersQueuedForDeletion.has(key)) {
            return;
        }
        let fetcher = state.fetchers.get(key);
        let isMidInitialLoad = fetcher && fetcher.state !== "idle" && fetcher.data === void 0;
        let fetcherMatches = matchRoutes(routesToUse, f.path, basename);
        if (!fetcherMatches) {
            if (hasPatchRoutesOnNavigation && isMidInitialLoad) {
                return;
            }
            revalidatingFetchers.push({
                key,
                routeId: f.routeId,
                path: f.path,
                matches: null,
                match: null,
                request: null,
                controller: null
            });
            return;
        }
        if (fetchRedirectIds.has(key)) {
            return;
        }
        let fetcherMatch = getTargetMatch(fetcherMatches, f.path);
        let fetchController = new AbortController();
        let fetchRequest = createClientSideRequest(history, f.path, fetchController.signal);
        let fetcherDsMatches = null;
        if (cancelledFetcherLoads.has(key)) {
            cancelledFetcherLoads.delete(key);
            fetcherDsMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, fetchRequest, fetcherMatches, fetcherMatch, lazyRoutePropertiesToSkip, scopedContext);
        } else if (isMidInitialLoad) {
            if (isRevalidationRequired) {
                fetcherDsMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, fetchRequest, fetcherMatches, fetcherMatch, lazyRoutePropertiesToSkip, scopedContext);
            }
        } else {
            let shouldRevalidateArgs = {
                ...baseShouldRevalidateArgs,
                defaultShouldRevalidate: shouldSkipRevalidation ? false : isRevalidationRequired
            };
            if (shouldRevalidateLoader(fetcherMatch, shouldRevalidateArgs)) {
                fetcherDsMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, fetchRequest, fetcherMatches, fetcherMatch, lazyRoutePropertiesToSkip, scopedContext, shouldRevalidateArgs);
            }
        }
        if (fetcherDsMatches) {
            revalidatingFetchers.push({
                key,
                routeId: f.routeId,
                path: f.path,
                matches: fetcherDsMatches,
                match: fetcherMatch,
                request: fetchRequest,
                controller: fetchController
            });
        }
    });
    return {
        dsMatches,
        revalidatingFetchers
    };
}
function routeHasLoaderOrMiddleware(route) {
    return route.loader != null || route.middleware != null && route.middleware.length > 0;
}
function shouldLoadRouteOnHydration(route, loaderData, errors) {
    if (route.lazy) {
        return true;
    }
    if (!routeHasLoaderOrMiddleware(route)) {
        return false;
    }
    let hasData = loaderData != null && route.id in loaderData;
    let hasError = errors != null && errors[route.id] !== void 0;
    if (!hasData && hasError) {
        return false;
    }
    if (typeof route.loader === "function" && route.loader.hydrate === true) {
        return true;
    }
    return !hasData && !hasError;
}
function isNewLoader(currentLoaderData, currentMatch, match) {
    let isNew = // [a] -> [a, b]
    !currentMatch || // [a, b] -> [a, c]
    match.route.id !== currentMatch.route.id;
    let isMissingData = !currentLoaderData.hasOwnProperty(match.route.id);
    return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
    let currentPath = currentMatch.route.path;
    return(// param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]);
}
function shouldRevalidateLoader(loaderMatch, arg) {
    if (loaderMatch.route.shouldRevalidate) {
        let routeChoice = loaderMatch.route.shouldRevalidate(arg);
        if (typeof routeChoice === "boolean") {
            return routeChoice;
        }
    }
    return arg.defaultShouldRevalidate;
}
function patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties2, allowElementMutations) {
    let childrenToPatch;
    if (routeId) {
        let route = manifest[routeId];
        invariant(route, `No route found to patch children into: routeId = ${routeId}`);
        if (!route.children) {
            route.children = [];
        }
        childrenToPatch = route.children;
    } else {
        childrenToPatch = routesToUse;
    }
    let uniqueChildren = [];
    let existingChildren = [];
    children.forEach((newRoute)=>{
        let existingRoute = childrenToPatch.find((existingRoute2)=>isSameRoute(newRoute, existingRoute2));
        if (existingRoute) {
            existingChildren.push({
                existingRoute,
                newRoute
            });
        } else {
            uniqueChildren.push(newRoute);
        }
    });
    if (uniqueChildren.length > 0) {
        let newRoutes = convertRoutesToDataRoutes(uniqueChildren, mapRouteProperties2, [
            routeId || "_",
            "patch",
            String(childrenToPatch?.length || "0")
        ], manifest);
        childrenToPatch.push(...newRoutes);
    }
    if (allowElementMutations && existingChildren.length > 0) {
        for(let i = 0; i < existingChildren.length; i++){
            let { existingRoute, newRoute } = existingChildren[i];
            let existingRouteTyped = existingRoute;
            let [newRouteTyped] = convertRoutesToDataRoutes([
                newRoute
            ], mapRouteProperties2, [], // Doesn't matter for mutated routes since they already have an id
            {}, // Don't touch the manifest here since we're updating in place
            true);
            Object.assign(existingRouteTyped, {
                element: newRouteTyped.element ? newRouteTyped.element : existingRouteTyped.element,
                errorElement: newRouteTyped.errorElement ? newRouteTyped.errorElement : existingRouteTyped.errorElement,
                hydrateFallbackElement: newRouteTyped.hydrateFallbackElement ? newRouteTyped.hydrateFallbackElement : existingRouteTyped.hydrateFallbackElement
            });
        }
    }
}
function isSameRoute(newRoute, existingRoute) {
    if ("id" in newRoute && "id" in existingRoute && newRoute.id === existingRoute.id) {
        return true;
    }
    if (!(newRoute.index === existingRoute.index && newRoute.path === existingRoute.path && newRoute.caseSensitive === existingRoute.caseSensitive)) {
        return false;
    }
    if ((!newRoute.children || newRoute.children.length === 0) && (!existingRoute.children || existingRoute.children.length === 0)) {
        return true;
    }
    return newRoute.children.every((aChild, i)=>existingRoute.children?.some((bChild)=>isSameRoute(aChild, bChild)));
}
var lazyRoutePropertyCache = /* @__PURE__ */ new WeakMap();
var loadLazyRouteProperty = ({ key, route, manifest, mapRouteProperties: mapRouteProperties2 })=>{
    let routeToUpdate = manifest[route.id];
    invariant(routeToUpdate, "No route found in manifest");
    if (!routeToUpdate.lazy || typeof routeToUpdate.lazy !== "object") {
        return;
    }
    let lazyFn = routeToUpdate.lazy[key];
    if (!lazyFn) {
        return;
    }
    let cache = lazyRoutePropertyCache.get(routeToUpdate);
    if (!cache) {
        cache = {};
        lazyRoutePropertyCache.set(routeToUpdate, cache);
    }
    let cachedPromise = cache[key];
    if (cachedPromise) {
        return cachedPromise;
    }
    let propertyPromise = (async ()=>{
        let isUnsupported = isUnsupportedLazyRouteObjectKey(key);
        let staticRouteValue = routeToUpdate[key];
        let isStaticallyDefined = staticRouteValue !== void 0 && key !== "hasErrorBoundary";
        if (isUnsupported) {
            warning(!isUnsupported, "Route property " + key + " is not a supported lazy route property. This property will be ignored.");
            cache[key] = Promise.resolve();
        } else if (isStaticallyDefined) {
            warning(false, `Route "${routeToUpdate.id}" has a static property "${key}" defined. The lazy property will be ignored.`);
        } else {
            let value = await lazyFn();
            if (value != null) {
                Object.assign(routeToUpdate, {
                    [key]: value
                });
                Object.assign(routeToUpdate, mapRouteProperties2(routeToUpdate));
            }
        }
        if (typeof routeToUpdate.lazy === "object") {
            routeToUpdate.lazy[key] = void 0;
            if (Object.values(routeToUpdate.lazy).every((value)=>value === void 0)) {
                routeToUpdate.lazy = void 0;
            }
        }
    })();
    cache[key] = propertyPromise;
    return propertyPromise;
};
var lazyRouteFunctionCache = /* @__PURE__ */ new WeakMap();
function loadLazyRoute(route, type, manifest, mapRouteProperties2, lazyRoutePropertiesToSkip) {
    let routeToUpdate = manifest[route.id];
    invariant(routeToUpdate, "No route found in manifest");
    if (!route.lazy) {
        return {
            lazyRoutePromise: void 0,
            lazyHandlerPromise: void 0
        };
    }
    if (typeof route.lazy === "function") {
        let cachedPromise = lazyRouteFunctionCache.get(routeToUpdate);
        if (cachedPromise) {
            return {
                lazyRoutePromise: cachedPromise,
                lazyHandlerPromise: cachedPromise
            };
        }
        let lazyRoutePromise2 = (async ()=>{
            invariant(typeof route.lazy === "function", "No lazy route function found");
            let lazyRoute = await route.lazy();
            let routeUpdates = {};
            for(let lazyRouteProperty in lazyRoute){
                let lazyValue = lazyRoute[lazyRouteProperty];
                if (lazyValue === void 0) {
                    continue;
                }
                let isUnsupported = isUnsupportedLazyRouteFunctionKey(lazyRouteProperty);
                let staticRouteValue = routeToUpdate[lazyRouteProperty];
                let isStaticallyDefined = staticRouteValue !== void 0 && // This property isn't static since it should always be updated based
                // on the route updates
                lazyRouteProperty !== "hasErrorBoundary";
                if (isUnsupported) {
                    warning(!isUnsupported, "Route property " + lazyRouteProperty + " is not a supported property to be returned from a lazy route function. This property will be ignored.");
                } else if (isStaticallyDefined) {
                    warning(!isStaticallyDefined, `Route "${routeToUpdate.id}" has a static property "${lazyRouteProperty}" defined but its lazy function is also returning a value for this property. The lazy route property "${lazyRouteProperty}" will be ignored.`);
                } else {
                    routeUpdates[lazyRouteProperty] = lazyValue;
                }
            }
            Object.assign(routeToUpdate, routeUpdates);
            Object.assign(routeToUpdate, {
                // To keep things framework agnostic, we use the provided `mapRouteProperties`
                // function to set the framework-aware properties (`element`/`hasErrorBoundary`)
                // since the logic will differ between frameworks.
                ...mapRouteProperties2(routeToUpdate),
                lazy: void 0
            });
        })();
        lazyRouteFunctionCache.set(routeToUpdate, lazyRoutePromise2);
        lazyRoutePromise2.catch(()=>{});
        return {
            lazyRoutePromise: lazyRoutePromise2,
            lazyHandlerPromise: lazyRoutePromise2
        };
    }
    let lazyKeys = Object.keys(route.lazy);
    let lazyPropertyPromises = [];
    let lazyHandlerPromise = void 0;
    for (let key of lazyKeys){
        if (lazyRoutePropertiesToSkip && lazyRoutePropertiesToSkip.includes(key)) {
            continue;
        }
        let promise = loadLazyRouteProperty({
            key,
            route,
            manifest,
            mapRouteProperties: mapRouteProperties2
        });
        if (promise) {
            lazyPropertyPromises.push(promise);
            if (key === type) {
                lazyHandlerPromise = promise;
            }
        }
    }
    let lazyRoutePromise = lazyPropertyPromises.length > 0 ? Promise.all(lazyPropertyPromises).then(()=>{}) : void 0;
    lazyRoutePromise?.catch(()=>{});
    lazyHandlerPromise?.catch(()=>{});
    return {
        lazyRoutePromise,
        lazyHandlerPromise
    };
}
function isNonNullable(value) {
    return value !== void 0;
}
function loadLazyMiddlewareForMatches(matches, manifest, mapRouteProperties2) {
    let promises = matches.map(({ route })=>{
        if (typeof route.lazy !== "object" || !route.lazy.middleware) {
            return void 0;
        }
        return loadLazyRouteProperty({
            key: "middleware",
            route,
            manifest,
            mapRouteProperties: mapRouteProperties2
        });
    }).filter(isNonNullable);
    return promises.length > 0 ? Promise.all(promises) : void 0;
}
async function defaultDataStrategy(args) {
    let matchesToLoad = args.matches.filter((m)=>m.shouldLoad);
    let keyedResults = {};
    let results = await Promise.all(matchesToLoad.map((m)=>m.resolve()));
    results.forEach((result, i)=>{
        keyedResults[matchesToLoad[i].route.id] = result;
    });
    return keyedResults;
}
async function defaultDataStrategyWithMiddleware(args) {
    if (!args.matches.some((m)=>m.route.middleware)) {
        return defaultDataStrategy(args);
    }
    return runClientMiddlewarePipeline(args, ()=>defaultDataStrategy(args));
}
function runServerMiddlewarePipeline(args, handler, errorHandler) {
    return runMiddlewarePipeline(args, handler, processResult, isResponse, errorHandler);
    //TURBOPACK unreachable
    ;
    function processResult(result) {
        return isDataWithResponseInit(result) ? dataWithResponseInitToResponse(result) : result;
    }
}
function runClientMiddlewarePipeline(args, handler) {
    return runMiddlewarePipeline(args, handler, (r)=>r, // No post-processing needed on the client
    isDataStrategyResults, errorHandler);
    //TURBOPACK unreachable
    ;
    function errorHandler(error, routeId, nextResult) {
        if (nextResult) {
            return Promise.resolve(Object.assign(nextResult.value, {
                [routeId]: {
                    type: "error",
                    result: error
                }
            }));
        } else {
            let { matches } = args;
            let maxBoundaryIdx = Math.min(// Throwing route
            Math.max(matches.findIndex((m)=>m.route.id === routeId), 0), // or the shallowest route that needs to load data
            Math.max(matches.findIndex((m)=>m.unstable_shouldCallHandler()), 0));
            let boundaryRouteId = findNearestBoundary(matches, matches[maxBoundaryIdx].route.id).route.id;
            return Promise.resolve({
                [boundaryRouteId]: {
                    type: "error",
                    result: error
                }
            });
        }
    }
}
async function runMiddlewarePipeline(args, handler, processResult, isResult, errorHandler) {
    let { matches, request, params, context, unstable_pattern } = args;
    let tuples = matches.flatMap((m)=>m.route.middleware ? m.route.middleware.map((fn)=>[
                m.route.id,
                fn
            ]) : []);
    let result = await callRouteMiddleware({
        request,
        params,
        context,
        unstable_pattern
    }, tuples, handler, processResult, isResult, errorHandler);
    return result;
}
async function callRouteMiddleware(args, middlewares, handler, processResult, isResult, errorHandler, idx = 0) {
    let { request } = args;
    if (request.signal.aborted) {
        throw request.signal.reason ?? new Error(`Request aborted: ${request.method} ${request.url}`);
    }
    let tuple = middlewares[idx];
    if (!tuple) {
        let result = await handler();
        return result;
    }
    let [routeId, middleware] = tuple;
    let nextResult;
    let next = async ()=>{
        if (nextResult) {
            throw new Error("You may only call `next()` once per middleware");
        }
        try {
            let result = await callRouteMiddleware(args, middlewares, handler, processResult, isResult, errorHandler, idx + 1);
            nextResult = {
                value: result
            };
            return nextResult.value;
        } catch (error) {
            nextResult = {
                value: await errorHandler(error, routeId, nextResult)
            };
            return nextResult.value;
        }
    };
    try {
        let value = await middleware(args, next);
        let result = value != null ? processResult(value) : void 0;
        if (isResult(result)) {
            return result;
        } else if (nextResult) {
            return result ?? nextResult.value;
        } else {
            nextResult = {
                value: await next()
            };
            return nextResult.value;
        }
    } catch (error) {
        let response = await errorHandler(error, routeId, nextResult);
        return response;
    }
}
function getDataStrategyMatchLazyPromises(mapRouteProperties2, manifest, request, match, lazyRoutePropertiesToSkip) {
    let lazyMiddlewarePromise = loadLazyRouteProperty({
        key: "middleware",
        route: match.route,
        manifest,
        mapRouteProperties: mapRouteProperties2
    });
    let lazyRoutePromises = loadLazyRoute(match.route, isMutationMethod(request.method) ? "action" : "loader", manifest, mapRouteProperties2, lazyRoutePropertiesToSkip);
    return {
        middleware: lazyMiddlewarePromise,
        route: lazyRoutePromises.lazyRoutePromise,
        handler: lazyRoutePromises.lazyHandlerPromise
    };
}
function getDataStrategyMatch(mapRouteProperties2, manifest, request, unstable_pattern, match, lazyRoutePropertiesToSkip, scopedContext, shouldLoad, unstable_shouldRevalidateArgs = null) {
    let isUsingNewApi = false;
    let _lazyPromises = getDataStrategyMatchLazyPromises(mapRouteProperties2, manifest, request, match, lazyRoutePropertiesToSkip);
    return {
        ...match,
        _lazyPromises,
        shouldLoad,
        unstable_shouldRevalidateArgs,
        unstable_shouldCallHandler (defaultShouldRevalidate) {
            isUsingNewApi = true;
            if (!unstable_shouldRevalidateArgs) {
                return shouldLoad;
            }
            if (typeof defaultShouldRevalidate === "boolean") {
                return shouldRevalidateLoader(match, {
                    ...unstable_shouldRevalidateArgs,
                    defaultShouldRevalidate
                });
            }
            return shouldRevalidateLoader(match, unstable_shouldRevalidateArgs);
        },
        resolve (handlerOverride) {
            let { lazy, loader, middleware } = match.route;
            let callHandler = isUsingNewApi || shouldLoad || handlerOverride && !isMutationMethod(request.method) && (lazy || loader);
            let isMiddlewareOnlyRoute = middleware && middleware.length > 0 && !loader && !lazy;
            if (callHandler && (isMutationMethod(request.method) || !isMiddlewareOnlyRoute)) {
                return callLoaderOrAction({
                    request,
                    unstable_pattern,
                    match,
                    lazyHandlerPromise: _lazyPromises?.handler,
                    lazyRoutePromise: _lazyPromises?.route,
                    handlerOverride,
                    scopedContext
                });
            }
            return Promise.resolve({
                type: "data" /* data */ ,
                result: void 0
            });
        }
    };
}
function getTargetedDataStrategyMatches(mapRouteProperties2, manifest, request, matches, targetMatch, lazyRoutePropertiesToSkip, scopedContext, shouldRevalidateArgs = null) {
    return matches.map((match)=>{
        if (match.route.id !== targetMatch.route.id) {
            return {
                ...match,
                shouldLoad: false,
                unstable_shouldRevalidateArgs: shouldRevalidateArgs,
                unstable_shouldCallHandler: ()=>false,
                _lazyPromises: getDataStrategyMatchLazyPromises(mapRouteProperties2, manifest, request, match, lazyRoutePropertiesToSkip),
                resolve: ()=>Promise.resolve({
                        type: "data",
                        result: void 0
                    })
            };
        }
        return getDataStrategyMatch(mapRouteProperties2, manifest, request, getRoutePattern(matches.map((m)=>m.route.path)), match, lazyRoutePropertiesToSkip, scopedContext, true, shouldRevalidateArgs);
    });
}
async function callDataStrategyImpl(dataStrategyImpl, request, matches, fetcherKey, scopedContext, isStaticHandler) {
    if (matches.some((m)=>m._lazyPromises?.middleware)) {
        await Promise.all(matches.map((m)=>m._lazyPromises?.middleware));
    }
    let dataStrategyArgs = {
        request,
        unstable_pattern: getRoutePattern(matches.map((m)=>m.route.path)),
        params: matches[0].params,
        context: scopedContext,
        matches
    };
    let runClientMiddleware = isStaticHandler ? ()=>{
        throw new Error("You cannot call `runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`");
    } : (cb)=>{
        let typedDataStrategyArgs = dataStrategyArgs;
        return runClientMiddlewarePipeline(typedDataStrategyArgs, ()=>{
            return cb({
                ...typedDataStrategyArgs,
                fetcherKey,
                runClientMiddleware: ()=>{
                    throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler");
                }
            });
        });
    };
    let results = await dataStrategyImpl({
        ...dataStrategyArgs,
        fetcherKey,
        runClientMiddleware
    });
    try {
        await Promise.all(matches.flatMap((m)=>[
                m._lazyPromises?.handler,
                m._lazyPromises?.route
            ]));
    } catch (e) {}
    return results;
}
async function callLoaderOrAction({ request, unstable_pattern, match, lazyHandlerPromise, lazyRoutePromise, handlerOverride, scopedContext }) {
    let result;
    let onReject;
    let isAction = isMutationMethod(request.method);
    let type = isAction ? "action" : "loader";
    let runHandler = (handler)=>{
        let reject;
        let abortPromise = new Promise((_, r)=>reject = r);
        onReject = ()=>reject();
        request.signal.addEventListener("abort", onReject);
        let actualHandler = (ctx)=>{
            if (typeof handler !== "function") {
                return Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${type}" [routeId: ${match.route.id}]`));
            }
            return handler({
                request,
                unstable_pattern,
                params: match.params,
                context: scopedContext
            }, ...ctx !== void 0 ? [
                ctx
            ] : []);
        };
        let handlerPromise = (async ()=>{
            try {
                let val = await (handlerOverride ? handlerOverride((ctx)=>actualHandler(ctx)) : actualHandler());
                return {
                    type: "data",
                    result: val
                };
            } catch (e) {
                return {
                    type: "error",
                    result: e
                };
            }
        })();
        return Promise.race([
            handlerPromise,
            abortPromise
        ]);
    };
    try {
        let handler = isAction ? match.route.action : match.route.loader;
        if (lazyHandlerPromise || lazyRoutePromise) {
            if (handler) {
                let handlerError;
                let [value] = await Promise.all([
                    // If the handler throws, don't let it immediately bubble out,
                    // since we need to let the lazy() execution finish so we know if this
                    // route has a boundary that can handle the error
                    runHandler(handler).catch((e)=>{
                        handlerError = e;
                    }),
                    // Ensure all lazy route promises are resolved before continuing
                    lazyHandlerPromise,
                    lazyRoutePromise
                ]);
                if (handlerError !== void 0) {
                    throw handlerError;
                }
                result = value;
            } else {
                await lazyHandlerPromise;
                let handler2 = isAction ? match.route.action : match.route.loader;
                if (handler2) {
                    [result] = await Promise.all([
                        runHandler(handler2),
                        lazyRoutePromise
                    ]);
                } else if (type === "action") {
                    let url = new URL(request.url);
                    let pathname = url.pathname + url.search;
                    throw getInternalRouterError(405, {
                        method: request.method,
                        pathname,
                        routeId: match.route.id
                    });
                } else {
                    return {
                        type: "data" /* data */ ,
                        result: void 0
                    };
                }
            }
        } else if (!handler) {
            let url = new URL(request.url);
            let pathname = url.pathname + url.search;
            throw getInternalRouterError(404, {
                pathname
            });
        } else {
            result = await runHandler(handler);
        }
    } catch (e) {
        return {
            type: "error" /* error */ ,
            result: e
        };
    } finally{
        if (onReject) {
            request.signal.removeEventListener("abort", onReject);
        }
    }
    return result;
}
async function parseResponseBody(response) {
    let contentType = response.headers.get("Content-Type");
    if (contentType && /\bapplication\/json\b/.test(contentType)) {
        return response.body == null ? null : response.json();
    }
    return response.text();
}
async function convertDataStrategyResultToDataResult(dataStrategyResult) {
    let { result, type } = dataStrategyResult;
    if (isResponse(result)) {
        let data2;
        try {
            data2 = await parseResponseBody(result);
        } catch (e) {
            return {
                type: "error" /* error */ ,
                error: e
            };
        }
        if (type === "error" /* error */ ) {
            return {
                type: "error" /* error */ ,
                error: new ErrorResponseImpl(result.status, result.statusText, data2),
                statusCode: result.status,
                headers: result.headers
            };
        }
        return {
            type: "data" /* data */ ,
            data: data2,
            statusCode: result.status,
            headers: result.headers
        };
    }
    if (type === "error" /* error */ ) {
        if (isDataWithResponseInit(result)) {
            if (result.data instanceof Error) {
                return {
                    type: "error" /* error */ ,
                    error: result.data,
                    statusCode: result.init?.status,
                    headers: result.init?.headers ? new Headers(result.init.headers) : void 0
                };
            }
            return {
                type: "error" /* error */ ,
                error: new ErrorResponseImpl(result.init?.status || 500, void 0, result.data),
                statusCode: isRouteErrorResponse(result) ? result.status : void 0,
                headers: result.init?.headers ? new Headers(result.init.headers) : void 0
            };
        }
        return {
            type: "error" /* error */ ,
            error: result,
            statusCode: isRouteErrorResponse(result) ? result.status : void 0
        };
    }
    if (isDataWithResponseInit(result)) {
        return {
            type: "data" /* data */ ,
            data: result.data,
            statusCode: result.init?.status,
            headers: result.init?.headers ? new Headers(result.init.headers) : void 0
        };
    }
    return {
        type: "data" /* data */ ,
        data: result
    };
}
function normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename) {
    let location = response.headers.get("Location");
    invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
    if (!isAbsoluteUrl(location)) {
        let trimmedMatches = matches.slice(0, matches.findIndex((m)=>m.route.id === routeId) + 1);
        location = normalizeTo(new URL(request.url), trimmedMatches, basename, location);
        response.headers.set("Location", location);
    }
    return response;
}
function normalizeRedirectLocation(location, currentUrl, basename) {
    if (isAbsoluteUrl(location)) {
        let normalizedLocation = location;
        let url = normalizedLocation.startsWith("//") ? new URL(currentUrl.protocol + normalizedLocation) : new URL(normalizedLocation);
        let isSameBasename = stripBasename(url.pathname, basename) != null;
        if (url.origin === currentUrl.origin && isSameBasename) {
            return url.pathname + url.search + url.hash;
        }
    }
    return location;
}
function createClientSideRequest(history, location, signal, submission) {
    let url = history.createURL(stripHashFromPath(location)).toString();
    let init = {
        signal
    };
    if (submission && isMutationMethod(submission.formMethod)) {
        let { formMethod, formEncType } = submission;
        init.method = formMethod.toUpperCase();
        if (formEncType === "application/json") {
            init.headers = new Headers({
                "Content-Type": formEncType
            });
            init.body = JSON.stringify(submission.json);
        } else if (formEncType === "text/plain") {
            init.body = submission.text;
        } else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) {
            init.body = convertFormDataToSearchParams(submission.formData);
        } else {
            init.body = submission.formData;
        }
    }
    return new Request(url, init);
}
function convertFormDataToSearchParams(formData) {
    let searchParams = new URLSearchParams();
    for (let [key, value] of formData.entries()){
        searchParams.append(key, typeof value === "string" ? value : value.name);
    }
    return searchParams;
}
function convertSearchParamsToFormData(searchParams) {
    let formData = new FormData();
    for (let [key, value] of searchParams.entries()){
        formData.append(key, value);
    }
    return formData;
}
function processRouteLoaderData(matches, results, pendingActionResult, isStaticHandler = false, skipLoaderErrorBubbling = false) {
    let loaderData = {};
    let errors = null;
    let statusCode;
    let foundError = false;
    let loaderHeaders = {};
    let pendingError = pendingActionResult && isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : void 0;
    matches.forEach((match)=>{
        if (!(match.route.id in results)) {
            return;
        }
        let id = match.route.id;
        let result = results[id];
        invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
        if (isErrorResult(result)) {
            let error = result.error;
            if (pendingError !== void 0) {
                error = pendingError;
                pendingError = void 0;
            }
            errors = errors || {};
            if (skipLoaderErrorBubbling) {
                errors[id] = error;
            } else {
                let boundaryMatch = findNearestBoundary(matches, id);
                if (errors[boundaryMatch.route.id] == null) {
                    errors[boundaryMatch.route.id] = error;
                }
            }
            if (!isStaticHandler) {
                loaderData[id] = ResetLoaderDataSymbol;
            }
            if (!foundError) {
                foundError = true;
                statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
            }
            if (result.headers) {
                loaderHeaders[id] = result.headers;
            }
        } else {
            loaderData[id] = result.data;
            if (result.statusCode && result.statusCode !== 200 && !foundError) {
                statusCode = result.statusCode;
            }
            if (result.headers) {
                loaderHeaders[id] = result.headers;
            }
        }
    });
    if (pendingError !== void 0 && pendingActionResult) {
        errors = {
            [pendingActionResult[0]]: pendingError
        };
        if (pendingActionResult[2]) {
            loaderData[pendingActionResult[2]] = void 0;
        }
    }
    return {
        loaderData,
        errors,
        statusCode: statusCode || 200,
        loaderHeaders
    };
}
function processLoaderData(state, matches, results, pendingActionResult, revalidatingFetchers, fetcherResults) {
    let { loaderData, errors } = processRouteLoaderData(matches, results, pendingActionResult);
    revalidatingFetchers.filter((f)=>!f.matches || f.matches.some((m)=>m.shouldLoad)).forEach((rf)=>{
        let { key, match, controller } = rf;
        if (controller && controller.signal.aborted) {
            return;
        }
        let result = fetcherResults[key];
        invariant(result, "Did not find corresponding fetcher result");
        if (isErrorResult(result)) {
            let boundaryMatch = findNearestBoundary(state.matches, match?.route.id);
            if (!(errors && errors[boundaryMatch.route.id])) {
                errors = {
                    ...errors,
                    [boundaryMatch.route.id]: result.error
                };
            }
            state.fetchers.delete(key);
        } else if (isRedirectResult(result)) {
            invariant(false, "Unhandled fetcher revalidation redirect");
        } else {
            let doneFetcher = getDoneFetcher(result.data);
            state.fetchers.set(key, doneFetcher);
        }
    });
    return {
        loaderData,
        errors
    };
}
function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
    let mergedLoaderData = Object.entries(newLoaderData).filter(([, v])=>v !== ResetLoaderDataSymbol).reduce((merged, [k, v])=>{
        merged[k] = v;
        return merged;
    }, {});
    for (let match of matches){
        let id = match.route.id;
        if (!newLoaderData.hasOwnProperty(id) && loaderData.hasOwnProperty(id) && match.route.loader) {
            mergedLoaderData[id] = loaderData[id];
        }
        if (errors && errors.hasOwnProperty(id)) {
            break;
        }
    }
    return mergedLoaderData;
}
function getActionDataForCommit(pendingActionResult) {
    if (!pendingActionResult) {
        return {};
    }
    return isErrorResult(pendingActionResult[1]) ? {
        // Clear out prior actionData on errors
        actionData: {}
    } : {
        actionData: {
            [pendingActionResult[0]]: pendingActionResult[1].data
        }
    };
}
function findNearestBoundary(matches, routeId) {
    let eligibleMatches = routeId ? matches.slice(0, matches.findIndex((m)=>m.route.id === routeId) + 1) : [
        ...matches
    ];
    return eligibleMatches.reverse().find((m)=>m.route.hasErrorBoundary === true) || matches[0];
}
function getShortCircuitMatches(routes) {
    let route = routes.length === 1 ? routes[0] : routes.find((r)=>r.index || !r.path || r.path === "/") || {
        id: `__shim-error-route__`
    };
    return {
        matches: [
            {
                params: {},
                pathname: "",
                pathnameBase: "",
                route
            }
        ],
        route
    };
}
function getInternalRouterError(status, { pathname, routeId, method, type, message } = {}) {
    let statusText = "Unknown Server Error";
    let errorMessage = "Unknown @remix-run/router error";
    if (status === 400) {
        statusText = "Bad Request";
        if (method && pathname && routeId) {
            errorMessage = `You made a ${method} request to "${pathname}" but did not provide a \`loader\` for route "${routeId}", so there is no way to handle the request.`;
        } else if (type === "invalid-body") {
            errorMessage = "Unable to encode submission body";
        }
    } else if (status === 403) {
        statusText = "Forbidden";
        errorMessage = `Route "${routeId}" does not match URL "${pathname}"`;
    } else if (status === 404) {
        statusText = "Not Found";
        errorMessage = `No route matches URL "${pathname}"`;
    } else if (status === 405) {
        statusText = "Method Not Allowed";
        if (method && pathname && routeId) {
            errorMessage = `You made a ${method.toUpperCase()} request to "${pathname}" but did not provide an \`action\` for route "${routeId}", so there is no way to handle the request.`;
        } else if (method) {
            errorMessage = `Invalid request method "${method.toUpperCase()}"`;
        }
    }
    return new ErrorResponseImpl(status || 500, statusText, new Error(errorMessage), true);
}
function findRedirect(results) {
    let entries = Object.entries(results);
    for(let i = entries.length - 1; i >= 0; i--){
        let [key, result] = entries[i];
        if (isRedirectResult(result)) {
            return {
                key,
                result
            };
        }
    }
}
function stripHashFromPath(path) {
    let parsedPath = typeof path === "string" ? parsePath(path) : path;
    return createPath({
        ...parsedPath,
        hash: ""
    });
}
function isHashChangeOnly(a, b) {
    if (a.pathname !== b.pathname || a.search !== b.search) {
        return false;
    }
    if (a.hash === "") {
        return b.hash !== "";
    } else if (a.hash === b.hash) {
        return true;
    } else if (b.hash !== "") {
        return true;
    }
    return false;
}
function dataWithResponseInitToResponse(data2) {
    return Response.json(data2.data, data2.init ?? void 0);
}
function dataWithResponseInitToErrorResponse(data2) {
    return new ErrorResponseImpl(data2.init?.status ?? 500, data2.init?.statusText ?? "Internal Server Error", data2.data);
}
function isDataStrategyResults(result) {
    return result != null && typeof result === "object" && Object.entries(result).every(([key, value])=>typeof key === "string" && isDataStrategyResult(value));
}
function isDataStrategyResult(result) {
    return result != null && typeof result === "object" && "type" in result && "result" in result && (result.type === "data" /* data */  || result.type === "error" /* error */ );
}
function isRedirectDataStrategyResult(result) {
    return isResponse(result.result) && redirectStatusCodes.has(result.result.status);
}
function isErrorResult(result) {
    return result.type === "error" /* error */ ;
}
function isRedirectResult(result) {
    return (result && result.type) === "redirect" /* redirect */ ;
}
function isDataWithResponseInit(value) {
    return typeof value === "object" && value != null && "type" in value && "data" in value && "init" in value && value.type === "DataWithResponseInit";
}
function isResponse(value) {
    return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectStatusCode(statusCode) {
    return redirectStatusCodes.has(statusCode);
}
function isRedirectResponse(result) {
    return isResponse(result) && isRedirectStatusCode(result.status) && result.headers.has("Location");
}
function isValidMethod(method) {
    return validRequestMethods.has(method.toUpperCase());
}
function isMutationMethod(method) {
    return validMutationMethods.has(method.toUpperCase());
}
function hasNakedIndexQuery(search) {
    return new URLSearchParams(search).getAll("index").some((v)=>v === "");
}
function getTargetMatch(matches, location) {
    let search = typeof location === "string" ? parsePath(location).search : location.search;
    if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
        return matches[matches.length - 1];
    }
    let pathMatches = getPathContributingMatches(matches);
    return pathMatches[pathMatches.length - 1];
}
function getSubmissionFromNavigation(navigation) {
    let { formMethod, formAction, formEncType, text, formData, json } = navigation;
    if (!formMethod || !formAction || !formEncType) {
        return;
    }
    if (text != null) {
        return {
            formMethod,
            formAction,
            formEncType,
            formData: void 0,
            json: void 0,
            text
        };
    } else if (formData != null) {
        return {
            formMethod,
            formAction,
            formEncType,
            formData,
            json: void 0,
            text: void 0
        };
    } else if (json !== void 0) {
        return {
            formMethod,
            formAction,
            formEncType,
            formData: void 0,
            json,
            text: void 0
        };
    }
}
function getLoadingNavigation(location, submission) {
    if (submission) {
        let navigation = {
            state: "loading",
            location,
            formMethod: submission.formMethod,
            formAction: submission.formAction,
            formEncType: submission.formEncType,
            formData: submission.formData,
            json: submission.json,
            text: submission.text
        };
        return navigation;
    } else {
        let navigation = {
            state: "loading",
            location,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            json: void 0,
            text: void 0
        };
        return navigation;
    }
}
function getSubmittingNavigation(location, submission) {
    let navigation = {
        state: "submitting",
        location,
        formMethod: submission.formMethod,
        formAction: submission.formAction,
        formEncType: submission.formEncType,
        formData: submission.formData,
        json: submission.json,
        text: submission.text
    };
    return navigation;
}
function getLoadingFetcher(submission, data2) {
    if (submission) {
        let fetcher = {
            state: "loading",
            formMethod: submission.formMethod,
            formAction: submission.formAction,
            formEncType: submission.formEncType,
            formData: submission.formData,
            json: submission.json,
            text: submission.text,
            data: data2
        };
        return fetcher;
    } else {
        let fetcher = {
            state: "loading",
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            json: void 0,
            text: void 0,
            data: data2
        };
        return fetcher;
    }
}
function getSubmittingFetcher(submission, existingFetcher) {
    let fetcher = {
        state: "submitting",
        formMethod: submission.formMethod,
        formAction: submission.formAction,
        formEncType: submission.formEncType,
        formData: submission.formData,
        json: submission.json,
        text: submission.text,
        data: existingFetcher ? existingFetcher.data : void 0
    };
    return fetcher;
}
function getDoneFetcher(data2) {
    let fetcher = {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: data2
    };
    return fetcher;
}
function restoreAppliedTransitions(_window, transitions) {
    try {
        let sessionPositions = _window.sessionStorage.getItem(TRANSITIONS_STORAGE_KEY);
        if (sessionPositions) {
            let json = JSON.parse(sessionPositions);
            for (let [k, v] of Object.entries(json || {})){
                if (v && Array.isArray(v)) {
                    transitions.set(k, new Set(v || []));
                }
            }
        }
    } catch (e) {}
}
function persistAppliedTransitions(_window, transitions) {
    if (transitions.size > 0) {
        let json = {};
        for (let [k, v] of transitions){
            json[k] = [
                ...v
            ];
        }
        try {
            _window.sessionStorage.setItem(TRANSITIONS_STORAGE_KEY, JSON.stringify(json));
        } catch (error) {
            warning(false, `Failed to save applied view transitions in sessionStorage (${error}).`);
        }
    }
}
function createDeferred() {
    let resolve;
    let reject;
    let promise = new Promise((res, rej)=>{
        resolve = async (val)=>{
            res(val);
            try {
                await promise;
            } catch (e) {}
        };
        reject = async (error)=>{
            rej(error);
            try {
                await promise;
            } catch (e) {}
        };
    });
    return {
        promise,
        //@ts-ignore
        resolve,
        //@ts-ignore
        reject
    };
}
;
var DataRouterContext = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
DataRouterContext.displayName = "DataRouter";
var DataRouterStateContext = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
DataRouterStateContext.displayName = "DataRouterState";
var RSCRouterContext = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](false);
function useIsRSCRouterContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](RSCRouterContext);
}
var ViewTransitionContext = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    isTransitioning: false
});
ViewTransitionContext.displayName = "ViewTransition";
var FetchersContext = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](/* @__PURE__ */ new Map());
FetchersContext.displayName = "Fetchers";
var AwaitContext = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
AwaitContext.displayName = "Await";
var AwaitContextProvider = (props)=>__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](AwaitContext.Provider, props);
var NavigationContext = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
NavigationContext.displayName = "Navigation";
var LocationContext = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
LocationContext.displayName = "Location";
var RouteContext = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    outlet: null,
    matches: [],
    isDataRoute: false
});
RouteContext.displayName = "Route";
var RouteErrorContext = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
RouteErrorContext.displayName = "RouteError";
var ENABLE_DEV_WARNINGS = true;
;
function useHref(to, { relative } = {}) {
    invariant(useInRouterContext(), // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useHref() may be used only in the context of a <Router> component.`);
    let { basename, navigator } = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](NavigationContext);
    let { hash, pathname, search } = useResolvedPath(to, {
        relative
    });
    let joinedPathname = pathname;
    if (basename !== "/") {
        joinedPathname = pathname === "/" ? basename : joinPaths([
            basename,
            pathname
        ]);
    }
    return navigator.createHref({
        pathname: joinedPathname,
        search,
        hash
    });
}
function useInRouterContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](LocationContext) != null;
}
function useLocation() {
    invariant(useInRouterContext(), // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useLocation() may be used only in the context of a <Router> component.`);
    return __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](LocationContext).location;
}
function useNavigationType() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](LocationContext).navigationType;
}
function useMatch(pattern) {
    invariant(useInRouterContext(), // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useMatch() may be used only in the context of a <Router> component.`);
    let { pathname } = useLocation();
    return __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useMatch.useMemo": ()=>matchPath(pattern, decodePath(pathname))
    }["useMatch.useMemo"], [
        pathname,
        pattern
    ]);
}
var navigateEffectWarning = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
function useIsomorphicLayoutEffect(cb) {
    let isStatic = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](NavigationContext).static;
    if (!isStatic) {
        __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"](cb);
    }
}
function useNavigate() {
    let { isDataRoute } = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](RouteContext);
    return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
    invariant(useInRouterContext(), // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useNavigate() may be used only in the context of a <Router> component.`);
    let dataRouterContext = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DataRouterContext);
    let { basename, navigator } = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](NavigationContext);
    let { matches } = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
    let activeRef = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    useIsomorphicLayoutEffect({
        "useNavigateUnstable.useIsomorphicLayoutEffect": ()=>{
            activeRef.current = true;
        }
    }["useNavigateUnstable.useIsomorphicLayoutEffect"]);
    let navigate = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useNavigateUnstable.useCallback[navigate]": (to, options = {})=>{
            warning(activeRef.current, navigateEffectWarning);
            if (!activeRef.current) return;
            if (typeof to === "number") {
                navigator.go(to);
                return;
            }
            let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
            if (dataRouterContext == null && basename !== "/") {
                path.pathname = path.pathname === "/" ? basename : joinPaths([
                    basename,
                    path.pathname
                ]);
            }
            (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
        }
    }["useNavigateUnstable.useCallback[navigate]"], [
        basename,
        navigator,
        routePathnamesJson,
        locationPathname,
        dataRouterContext
    ]);
    return navigate;
}
var OutletContext = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
function useOutletContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](OutletContext);
}
function useOutlet(context) {
    let outlet = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](RouteContext).outlet;
    return __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useOutlet.useMemo": ()=>outlet && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](OutletContext.Provider, {
                value: context
            }, outlet)
    }["useOutlet.useMemo"], [
        outlet,
        context
    ]);
}
function useParams() {
    let { matches } = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](RouteContext);
    let routeMatch = matches[matches.length - 1];
    return routeMatch ? routeMatch.params : {};
}
function useResolvedPath(to, { relative } = {}) {
    let { matches } = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
    return __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useResolvedPath.useMemo": ()=>resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path")
    }["useResolvedPath.useMemo"], [
        to,
        routePathnamesJson,
        locationPathname,
        relative
    ]);
}
function useRoutes(routes, locationArg) {
    return useRoutesImpl(routes, locationArg);
}
function useRoutesImpl(routes, locationArg, dataRouterState, unstable_onError, future) {
    invariant(useInRouterContext(), // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useRoutes() may be used only in the context of a <Router> component.`);
    let { navigator } = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](NavigationContext);
    let { matches: parentMatches } = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](RouteContext);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    if ("TURBOPACK compile-time truthy", 1) {
        let parentPath = parentRoute && parentRoute.path || "";
        warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${parentPathname}" (under <Route path="${parentPath}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${parentPath}"> to <Route path="${parentPath === "/" ? "*" : `${parentPath}/*`}">.`);
    }
    let locationFromContext = useLocation();
    let location;
    if (locationArg) {
        let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
        invariant(parentPathnameBase === "/" || parsedLocationArg.pathname?.startsWith(parentPathnameBase), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${parentPathnameBase}" but pathname "${parsedLocationArg.pathname}" was given in the \`location\` prop.`);
        location = parsedLocationArg;
    } else {
        location = locationFromContext;
    }
    let pathname = location.pathname || "/";
    let remainingPathname = pathname;
    if (parentPathnameBase !== "/") {
        let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
        let segments = pathname.replace(/^\//, "").split("/");
        remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
    }
    let matches = matchRoutes(routes, {
        pathname: remainingPathname
    });
    if ("TURBOPACK compile-time truthy", 1) {
        warning(parentRoute || matches != null, `No routes matched location "${location.pathname}${location.search}${location.hash}" `);
        warning(matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0, `Matched leaf route at location "${location.pathname}${location.search}${location.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    }
    let renderedMatches = _renderMatches(matches && matches.map((match)=>Object.assign({}, match, {
            params: Object.assign({}, parentParams, match.params),
            pathname: joinPaths([
                parentPathnameBase,
                // Re-encode pathnames that were decoded inside matchRoutes.
                // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
                // `new URL()` internally and we need to prevent it from treating
                // them as separators
                navigator.encodeLocation ? navigator.encodeLocation(match.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : match.pathname
            ]),
            pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
                parentPathnameBase,
                // Re-encode pathnames that were decoded inside matchRoutes
                // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
                // `new URL()` internally and we need to prevent it from treating
                // them as separators
                navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : match.pathnameBase
            ])
        })), parentMatches, dataRouterState, unstable_onError, future);
    if (locationArg && renderedMatches) {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](LocationContext.Provider, {
            value: {
                location: {
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default",
                    ...location
                },
                navigationType: "POP" /* Pop */ 
            }
        }, renderedMatches);
    }
    return renderedMatches;
}
function DefaultErrorComponent() {
    let error = useRouteError();
    let message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : JSON.stringify(error);
    let stack = error instanceof Error ? error.stack : null;
    let lightgrey = "rgba(200,200,200, 0.5)";
    let preStyles = {
        padding: "0.5rem",
        backgroundColor: lightgrey
    };
    let codeStyles = {
        padding: "2px 4px",
        backgroundColor: lightgrey
    };
    let devInfo = null;
    if ("TURBOPACK compile-time truthy", 1) {
        console.error("Error handled by React Router default ErrorBoundary:", error);
        devInfo = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("code", {
            style: codeStyles
        }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("code", {
            style: codeStyles
        }, "errorElement"), " prop on your route."));
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("h3", {
        style: {
            fontStyle: "italic"
        }
    }, message), stack ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("pre", {
        style: preStyles
    }, stack) : null, devInfo);
}
var defaultErrorElement = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](DefaultErrorComponent, null);
var RenderErrorBoundary = class extends __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        this.state = {
            location: props.location,
            revalidation: props.revalidation,
            error: props.error
        };
    }
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    static getDerivedStateFromProps(props, state) {
        if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
            return {
                error: props.error,
                location: props.location,
                revalidation: props.revalidation
            };
        }
        return {
            error: props.error !== void 0 ? props.error : state.error,
            location: state.location,
            revalidation: props.revalidation || state.revalidation
        };
    }
    componentDidCatch(error, errorInfo) {
        if (this.props.onError) {
            this.props.onError(error, errorInfo);
        } else {
            console.error("React Router caught the following error during render", error);
        }
    }
    render() {
        return this.state.error !== void 0 ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](RouteContext.Provider, {
            value: this.props.routeContext
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](RouteErrorContext.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children;
    }
};
function RenderedRoute({ routeContext, match, children }) {
    let dataRouterContext = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DataRouterContext);
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
        dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](RouteContext.Provider, {
        value: routeContext
    }, children);
}
function _renderMatches(matches, parentMatches = [], dataRouterState = null, unstable_onError = null, future = null) {
    if (matches == null) {
        if (!dataRouterState) {
            return null;
        }
        if (dataRouterState.errors) {
            matches = dataRouterState.matches;
        } else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
            matches = dataRouterState.matches;
        } else {
            return null;
        }
    }
    let renderedMatches = matches;
    let errors = dataRouterState?.errors;
    if (errors != null) {
        let errorIndex = renderedMatches.findIndex((m)=>m.route.id && errors?.[m.route.id] !== void 0);
        invariant(errorIndex >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(errors).join(",")}`);
        renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
    }
    let renderFallback = false;
    let fallbackIndex = -1;
    if (dataRouterState) {
        for(let i = 0; i < renderedMatches.length; i++){
            let match = renderedMatches[i];
            if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
                fallbackIndex = i;
            }
            if (match.route.id) {
                let { loaderData, errors: errors2 } = dataRouterState;
                let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors2 || errors2[match.route.id] === void 0);
                if (match.route.lazy || needsToRunLoader) {
                    renderFallback = true;
                    if (fallbackIndex >= 0) {
                        renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
                    } else {
                        renderedMatches = [
                            renderedMatches[0]
                        ];
                    }
                    break;
                }
            }
        }
    }
    let onError = dataRouterState && unstable_onError ? (error, errorInfo)=>{
        unstable_onError(error, {
            location: dataRouterState.location,
            params: dataRouterState.matches?.[0]?.params ?? {},
            errorInfo
        });
    } : void 0;
    return renderedMatches.reduceRight((outlet, match, index)=>{
        let error;
        let shouldRenderHydrateFallback = false;
        let errorElement = null;
        let hydrateFallbackElement = null;
        if (dataRouterState) {
            error = errors && match.route.id ? errors[match.route.id] : void 0;
            errorElement = match.route.errorElement || defaultErrorElement;
            if (renderFallback) {
                if (fallbackIndex < 0 && index === 0) {
                    warningOnce("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
                    shouldRenderHydrateFallback = true;
                    hydrateFallbackElement = null;
                } else if (fallbackIndex === index) {
                    shouldRenderHydrateFallback = true;
                    hydrateFallbackElement = match.route.hydrateFallbackElement || null;
                }
            }
        }
        let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
        let getChildren = ()=>{
            let children;
            if (error) {
                children = errorElement;
            } else if (shouldRenderHydrateFallback) {
                children = hydrateFallbackElement;
            } else if (match.route.Component) {
                children = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](match.route.Component, null);
            } else if (match.route.element) {
                children = match.route.element;
            } else {
                children = outlet;
            }
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](RenderedRoute, {
                match,
                routeContext: {
                    outlet,
                    matches: matches2,
                    isDataRoute: dataRouterState != null
                },
                children
            });
        };
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](RenderErrorBoundary, {
            location: dataRouterState.location,
            revalidation: dataRouterState.revalidation,
            component: errorElement,
            error,
            children: getChildren(),
            routeContext: {
                outlet: null,
                matches: matches2,
                isDataRoute: true
            },
            onError
        }) : getChildren();
    }, null);
}
function getDataRouterConsoleError(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function useDataRouterContext(hookName) {
    let ctx = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DataRouterContext);
    invariant(ctx, getDataRouterConsoleError(hookName));
    return ctx;
}
function useDataRouterState(hookName) {
    let state = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DataRouterStateContext);
    invariant(state, getDataRouterConsoleError(hookName));
    return state;
}
function useRouteContext(hookName) {
    let route = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](RouteContext);
    invariant(route, getDataRouterConsoleError(hookName));
    return route;
}
function useCurrentRouteId(hookName) {
    let route = useRouteContext(hookName);
    let thisRoute = route.matches[route.matches.length - 1];
    invariant(thisRoute.route.id, `${hookName} can only be used on routes that contain a unique "id"`);
    return thisRoute.route.id;
}
function useRouteId() {
    return useCurrentRouteId("useRouteId" /* UseRouteId */ );
}
function useNavigation() {
    let state = useDataRouterState("useNavigation" /* UseNavigation */ );
    return state.navigation;
}
function useRevalidator() {
    let dataRouterContext = useDataRouterContext("useRevalidator" /* UseRevalidator */ );
    let state = useDataRouterState("useRevalidator" /* UseRevalidator */ );
    let revalidate = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useRevalidator.useCallback[revalidate]": async ()=>{
            await dataRouterContext.router.revalidate();
        }
    }["useRevalidator.useCallback[revalidate]"], [
        dataRouterContext.router
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useRevalidator.useMemo": ()=>({
                revalidate,
                state: state.revalidation
            })
    }["useRevalidator.useMemo"], [
        revalidate,
        state.revalidation
    ]);
}
function useMatches() {
    let { matches, loaderData } = useDataRouterState("useMatches" /* UseMatches */ );
    return __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useMatches.useMemo": ()=>matches.map({
                "useMatches.useMemo": (m)=>convertRouteMatchToUiMatch(m, loaderData)
            }["useMatches.useMemo"])
    }["useMatches.useMemo"], [
        matches,
        loaderData
    ]);
}
function useLoaderData() {
    let state = useDataRouterState("useLoaderData" /* UseLoaderData */ );
    let routeId = useCurrentRouteId("useLoaderData" /* UseLoaderData */ );
    return state.loaderData[routeId];
}
function useRouteLoaderData(routeId) {
    let state = useDataRouterState("useRouteLoaderData" /* UseRouteLoaderData */ );
    return state.loaderData[routeId];
}
function useActionData() {
    let state = useDataRouterState("useActionData" /* UseActionData */ );
    let routeId = useCurrentRouteId("useLoaderData" /* UseLoaderData */ );
    return state.actionData ? state.actionData[routeId] : void 0;
}
function useRouteError() {
    let error = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](RouteErrorContext);
    let state = useDataRouterState("useRouteError" /* UseRouteError */ );
    let routeId = useCurrentRouteId("useRouteError" /* UseRouteError */ );
    if (error !== void 0) {
        return error;
    }
    return state.errors?.[routeId];
}
function useAsyncValue() {
    let value = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](AwaitContext);
    return value?._data;
}
function useAsyncError() {
    let value = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](AwaitContext);
    return value?._error;
}
var blockerId = 0;
function useBlocker(shouldBlock) {
    let { router, basename } = useDataRouterContext("useBlocker" /* UseBlocker */ );
    let state = useDataRouterState("useBlocker" /* UseBlocker */ );
    let [blockerKey, setBlockerKey] = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    let blockerFunction = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useBlocker.useCallback[blockerFunction]": (arg)=>{
            if (typeof shouldBlock !== "function") {
                return !!shouldBlock;
            }
            if (basename === "/") {
                return shouldBlock(arg);
            }
            let { currentLocation, nextLocation, historyAction } = arg;
            return shouldBlock({
                currentLocation: {
                    ...currentLocation,
                    pathname: stripBasename(currentLocation.pathname, basename) || currentLocation.pathname
                },
                nextLocation: {
                    ...nextLocation,
                    pathname: stripBasename(nextLocation.pathname, basename) || nextLocation.pathname
                },
                historyAction
            });
        }
    }["useBlocker.useCallback[blockerFunction]"], [
        basename,
        shouldBlock
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useBlocker.useEffect": ()=>{
            let key = String(++blockerId);
            setBlockerKey(key);
            return ({
                "useBlocker.useEffect": ()=>router.deleteBlocker(key)
            })["useBlocker.useEffect"];
        }
    }["useBlocker.useEffect"], [
        router
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useBlocker.useEffect": ()=>{
            if (blockerKey !== "") {
                router.getBlocker(blockerKey, blockerFunction);
            }
        }
    }["useBlocker.useEffect"], [
        router,
        blockerKey,
        blockerFunction
    ]);
    return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : IDLE_BLOCKER;
}
function useNavigateStable() {
    let { router } = useDataRouterContext("useNavigate" /* UseNavigateStable */ );
    let id = useCurrentRouteId("useNavigate" /* UseNavigateStable */ );
    let activeRef = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    useIsomorphicLayoutEffect({
        "useNavigateStable.useIsomorphicLayoutEffect": ()=>{
            activeRef.current = true;
        }
    }["useNavigateStable.useIsomorphicLayoutEffect"]);
    let navigate = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useNavigateStable.useCallback[navigate]": async (to, options = {})=>{
            warning(activeRef.current, navigateEffectWarning);
            if (!activeRef.current) return;
            if (typeof to === "number") {
                router.navigate(to);
            } else {
                await router.navigate(to, {
                    fromRouteId: id,
                    ...options
                });
            }
        }
    }["useNavigateStable.useCallback[navigate]"], [
        router,
        id
    ]);
    return navigate;
}
var alreadyWarned = {};
function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned[key]) {
        alreadyWarned[key] = true;
        warning(false, message);
    }
}
function useRoute(...args) {
    const currentRouteId = useCurrentRouteId("useRoute" /* UseRoute */ );
    const id = args[0] ?? currentRouteId;
    const state = useDataRouterState("useRoute" /* UseRoute */ );
    const route = state.matches.find(({ route: route2 })=>route2.id === id);
    if (route === void 0) return void 0;
    return {
        handle: route.route.handle,
        loaderData: state.loaderData[id],
        actionData: state.actionData?.[id]
    };
}
;
// lib/server-runtime/warnings.ts
var alreadyWarned2 = {};
function warnOnce(condition, message) {
    if (!condition && !alreadyWarned2[message]) {
        alreadyWarned2[message] = true;
        console.warn(message);
    }
}
// lib/components.tsx
function mapRouteProperties(route) {
    let updates = {
        // Note: this check also occurs in createRoutesFromChildren so update
        // there if you change this -- please and thank you!
        hasErrorBoundary: route.hasErrorBoundary || route.ErrorBoundary != null || route.errorElement != null
    };
    if (route.Component) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (route.element) {
                warning(false, "You should not include both `Component` and `element` on your route - `Component` will be used.");
            }
        }
        Object.assign(updates, {
            element: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](route.Component),
            Component: void 0
        });
    }
    if (route.HydrateFallback) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (route.hydrateFallbackElement) {
                warning(false, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.");
            }
        }
        Object.assign(updates, {
            hydrateFallbackElement: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](route.HydrateFallback),
            HydrateFallback: void 0
        });
    }
    if (route.ErrorBoundary) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (route.errorElement) {
                warning(false, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.");
            }
        }
        Object.assign(updates, {
            errorElement: __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](route.ErrorBoundary),
            ErrorBoundary: void 0
        });
    }
    return updates;
}
var hydrationRouteProperties = [
    "HydrateFallback",
    "hydrateFallbackElement"
];
function createMemoryRouter(routes, opts) {
    return createRouter({
        basename: opts?.basename,
        getContext: opts?.getContext,
        future: opts?.future,
        history: createMemoryHistory({
            initialEntries: opts?.initialEntries,
            initialIndex: opts?.initialIndex
        }),
        hydrationData: opts?.hydrationData,
        routes,
        hydrationRouteProperties,
        mapRouteProperties,
        dataStrategy: opts?.dataStrategy,
        patchRoutesOnNavigation: opts?.patchRoutesOnNavigation,
        unstable_instrumentations: opts?.unstable_instrumentations
    }).initialize();
}
var Deferred = class {
    constructor(){
        this.status = "pending";
        this.promise = new Promise((resolve, reject)=>{
            this.resolve = (value)=>{
                if (this.status === "pending") {
                    this.status = "resolved";
                    resolve(value);
                }
            };
            this.reject = (reason)=>{
                if (this.status === "pending") {
                    this.status = "rejected";
                    reject(reason);
                }
            };
        });
    }
};
function shallowDiff(a, b) {
    if (a === b) {
        return false;
    }
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) {
        return true;
    }
    for (let key of aKeys){
        if (a[key] !== b[key]) {
            return true;
        }
    }
    return false;
}
function UNSTABLE_TransitionEnabledRouterProvider({ router, flushSync: reactDomFlushSyncImpl, unstable_onError }) {
    let fetcherData = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](/* @__PURE__ */ new Map());
    let [revalidating, startRevalidation] = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]();
    let [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](router.state);
    router.__setPendingRerender = (promise)=>startRevalidation(// @ts-expect-error - need react 19 types for this to be async
        async ()=>{
            const rerender = await promise;
            startRevalidation(()=>{
                rerender();
            });
        });
    let navigator = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "UNSTABLE_TransitionEnabledRouterProvider.useMemo[navigator]": ()=>{
            return {
                createHref: router.createHref,
                encodeLocation: router.encodeLocation,
                go: ({
                    "UNSTABLE_TransitionEnabledRouterProvider.useMemo[navigator]": (n)=>router.navigate(n)
                })["UNSTABLE_TransitionEnabledRouterProvider.useMemo[navigator]"],
                push: ({
                    "UNSTABLE_TransitionEnabledRouterProvider.useMemo[navigator]": (to, state2, opts)=>router.navigate(to, {
                            state: state2,
                            preventScrollReset: opts?.preventScrollReset
                        })
                })["UNSTABLE_TransitionEnabledRouterProvider.useMemo[navigator]"],
                replace: ({
                    "UNSTABLE_TransitionEnabledRouterProvider.useMemo[navigator]": (to, state2, opts)=>router.navigate(to, {
                            replace: true,
                            state: state2,
                            preventScrollReset: opts?.preventScrollReset
                        })
                })["UNSTABLE_TransitionEnabledRouterProvider.useMemo[navigator]"]
            };
        }
    }["UNSTABLE_TransitionEnabledRouterProvider.useMemo[navigator]"], [
        router
    ]);
    let basename = router.basename || "/";
    let dataRouterContext = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "UNSTABLE_TransitionEnabledRouterProvider.useMemo[dataRouterContext]": ()=>({
                router,
                navigator,
                static: false,
                basename,
                unstable_onError
            })
    }["UNSTABLE_TransitionEnabledRouterProvider.useMemo[dataRouterContext]"], [
        router,
        navigator,
        basename,
        unstable_onError
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "UNSTABLE_TransitionEnabledRouterProvider.useLayoutEffect": ()=>{
            return router.subscribe({
                "UNSTABLE_TransitionEnabledRouterProvider.useLayoutEffect": (newState, { deletedFetchers, flushSync, viewTransitionOpts })=>{
                    newState.fetchers.forEach({
                        "UNSTABLE_TransitionEnabledRouterProvider.useLayoutEffect": (fetcher, key)=>{
                            if (fetcher.data !== void 0) {
                                fetcherData.current.set(key, fetcher.data);
                            }
                        }
                    }["UNSTABLE_TransitionEnabledRouterProvider.useLayoutEffect"]);
                    deletedFetchers.forEach({
                        "UNSTABLE_TransitionEnabledRouterProvider.useLayoutEffect": (key)=>fetcherData.current.delete(key)
                    }["UNSTABLE_TransitionEnabledRouterProvider.useLayoutEffect"]);
                    const diff = shallowDiff(state, newState);
                    if (!diff) return;
                    if (flushSync) {
                        if (reactDomFlushSyncImpl) {
                            reactDomFlushSyncImpl({
                                "UNSTABLE_TransitionEnabledRouterProvider.useLayoutEffect": ()=>setState(newState)
                            }["UNSTABLE_TransitionEnabledRouterProvider.useLayoutEffect"]);
                        } else {
                            setState(newState);
                        }
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"]({
                            "UNSTABLE_TransitionEnabledRouterProvider.useLayoutEffect": ()=>{
                                setState(newState);
                            }
                        }["UNSTABLE_TransitionEnabledRouterProvider.useLayoutEffect"]);
                    }
                }
            }["UNSTABLE_TransitionEnabledRouterProvider.useLayoutEffect"]);
        }
    }["UNSTABLE_TransitionEnabledRouterProvider.useLayoutEffect"], [
        router,
        reactDomFlushSyncImpl,
        state
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](DataRouterContext.Provider, {
        value: dataRouterContext
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](DataRouterStateContext.Provider, {
        value: {
            ...state,
            revalidation: revalidating ? "loading" : state.revalidation
        }
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](FetchersContext.Provider, {
        value: fetcherData.current
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Router, {
        basename,
        location: state.location,
        navigationType: state.historyAction,
        navigator
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](MemoizedDataRoutes, {
        routes: router.routes,
        future: router.future,
        state,
        unstable_onError
    }))))), null);
}
function RouterProvider({ router, flushSync: reactDomFlushSyncImpl, unstable_onError }) {
    let [state, setStateImpl] = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](router.state);
    let [pendingState, setPendingState] = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    let [vtContext, setVtContext] = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        isTransitioning: false
    });
    let [renderDfd, setRenderDfd] = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    let [transition, setTransition] = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    let [interruption, setInterruption] = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    let fetcherData = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](/* @__PURE__ */ new Map());
    let logErrorsAndSetState = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RouterProvider.useCallback[logErrorsAndSetState]": (newState)=>{
            setStateImpl({
                "RouterProvider.useCallback[logErrorsAndSetState]": (prevState)=>{
                    if (newState.errors && unstable_onError) {
                        Object.entries(newState.errors).forEach({
                            "RouterProvider.useCallback[logErrorsAndSetState]": ([routeId, error])=>{
                                if (prevState.errors?.[routeId] !== error) {
                                    unstable_onError(error, {
                                        location: newState.location,
                                        params: newState.matches[0]?.params ?? {}
                                    });
                                }
                            }
                        }["RouterProvider.useCallback[logErrorsAndSetState]"]);
                    }
                    return newState;
                }
            }["RouterProvider.useCallback[logErrorsAndSetState]"]);
        }
    }["RouterProvider.useCallback[logErrorsAndSetState]"], [
        unstable_onError
    ]);
    let setState = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RouterProvider.useCallback[setState]": (newState, { deletedFetchers, flushSync, viewTransitionOpts })=>{
            newState.fetchers.forEach({
                "RouterProvider.useCallback[setState]": (fetcher, key)=>{
                    if (fetcher.data !== void 0) {
                        fetcherData.current.set(key, fetcher.data);
                    }
                }
            }["RouterProvider.useCallback[setState]"]);
            deletedFetchers.forEach({
                "RouterProvider.useCallback[setState]": (key)=>fetcherData.current.delete(key)
            }["RouterProvider.useCallback[setState]"]);
            warnOnce(flushSync === false || reactDomFlushSyncImpl != null, 'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');
            let isViewTransitionAvailable = router.window != null && router.window.document != null && typeof router.window.document.startViewTransition === "function";
            warnOnce(viewTransitionOpts == null || isViewTransitionAvailable, "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.");
            if (!viewTransitionOpts || !isViewTransitionAvailable) {
                if (reactDomFlushSyncImpl && flushSync) {
                    reactDomFlushSyncImpl({
                        "RouterProvider.useCallback[setState]": ()=>logErrorsAndSetState(newState)
                    }["RouterProvider.useCallback[setState]"]);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"]({
                        "RouterProvider.useCallback[setState]": ()=>logErrorsAndSetState(newState)
                    }["RouterProvider.useCallback[setState]"]);
                }
                return;
            }
            if (reactDomFlushSyncImpl && flushSync) {
                reactDomFlushSyncImpl({
                    "RouterProvider.useCallback[setState]": ()=>{
                        if (transition) {
                            renderDfd && renderDfd.resolve();
                            transition.skipTransition();
                        }
                        setVtContext({
                            isTransitioning: true,
                            flushSync: true,
                            currentLocation: viewTransitionOpts.currentLocation,
                            nextLocation: viewTransitionOpts.nextLocation
                        });
                    }
                }["RouterProvider.useCallback[setState]"]);
                let t = router.window.document.startViewTransition({
                    "RouterProvider.useCallback[setState].t": ()=>{
                        reactDomFlushSyncImpl({
                            "RouterProvider.useCallback[setState].t": ()=>logErrorsAndSetState(newState)
                        }["RouterProvider.useCallback[setState].t"]);
                    }
                }["RouterProvider.useCallback[setState].t"]);
                t.finished.finally({
                    "RouterProvider.useCallback[setState]": ()=>{
                        reactDomFlushSyncImpl({
                            "RouterProvider.useCallback[setState]": ()=>{
                                setRenderDfd(void 0);
                                setTransition(void 0);
                                setPendingState(void 0);
                                setVtContext({
                                    isTransitioning: false
                                });
                            }
                        }["RouterProvider.useCallback[setState]"]);
                    }
                }["RouterProvider.useCallback[setState]"]);
                reactDomFlushSyncImpl({
                    "RouterProvider.useCallback[setState]": ()=>setTransition(t)
                }["RouterProvider.useCallback[setState]"]);
                return;
            }
            if (transition) {
                renderDfd && renderDfd.resolve();
                transition.skipTransition();
                setInterruption({
                    state: newState,
                    currentLocation: viewTransitionOpts.currentLocation,
                    nextLocation: viewTransitionOpts.nextLocation
                });
            } else {
                setPendingState(newState);
                setVtContext({
                    isTransitioning: true,
                    flushSync: false,
                    currentLocation: viewTransitionOpts.currentLocation,
                    nextLocation: viewTransitionOpts.nextLocation
                });
            }
        }
    }["RouterProvider.useCallback[setState]"], [
        router.window,
        reactDomFlushSyncImpl,
        transition,
        renderDfd,
        logErrorsAndSetState
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "RouterProvider.useLayoutEffect": ()=>router.subscribe(setState)
    }["RouterProvider.useLayoutEffect"], [
        router,
        setState
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RouterProvider.useEffect": ()=>{
            if (vtContext.isTransitioning && !vtContext.flushSync) {
                setRenderDfd(new Deferred());
            }
        }
    }["RouterProvider.useEffect"], [
        vtContext
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RouterProvider.useEffect": ()=>{
            if (renderDfd && pendingState && router.window) {
                let newState = pendingState;
                let renderPromise = renderDfd.promise;
                let transition2 = router.window.document.startViewTransition({
                    "RouterProvider.useEffect.transition2": async ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"]({
                            "RouterProvider.useEffect.transition2": ()=>logErrorsAndSetState(newState)
                        }["RouterProvider.useEffect.transition2"]);
                        await renderPromise;
                    }
                }["RouterProvider.useEffect.transition2"]);
                transition2.finished.finally({
                    "RouterProvider.useEffect": ()=>{
                        setRenderDfd(void 0);
                        setTransition(void 0);
                        setPendingState(void 0);
                        setVtContext({
                            isTransitioning: false
                        });
                    }
                }["RouterProvider.useEffect"]);
                setTransition(transition2);
            }
        }
    }["RouterProvider.useEffect"], [
        pendingState,
        renderDfd,
        router.window,
        logErrorsAndSetState
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RouterProvider.useEffect": ()=>{
            if (renderDfd && pendingState && state.location.key === pendingState.location.key) {
                renderDfd.resolve();
            }
        }
    }["RouterProvider.useEffect"], [
        renderDfd,
        transition,
        state.location,
        pendingState
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RouterProvider.useEffect": ()=>{
            if (!vtContext.isTransitioning && interruption) {
                setPendingState(interruption.state);
                setVtContext({
                    isTransitioning: true,
                    flushSync: false,
                    currentLocation: interruption.currentLocation,
                    nextLocation: interruption.nextLocation
                });
                setInterruption(void 0);
            }
        }
    }["RouterProvider.useEffect"], [
        vtContext.isTransitioning,
        interruption
    ]);
    let navigator = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "RouterProvider.useMemo[navigator]": ()=>{
            return {
                createHref: router.createHref,
                encodeLocation: router.encodeLocation,
                go: ({
                    "RouterProvider.useMemo[navigator]": (n)=>router.navigate(n)
                })["RouterProvider.useMemo[navigator]"],
                push: ({
                    "RouterProvider.useMemo[navigator]": (to, state2, opts)=>router.navigate(to, {
                            state: state2,
                            preventScrollReset: opts?.preventScrollReset
                        })
                })["RouterProvider.useMemo[navigator]"],
                replace: ({
                    "RouterProvider.useMemo[navigator]": (to, state2, opts)=>router.navigate(to, {
                            replace: true,
                            state: state2,
                            preventScrollReset: opts?.preventScrollReset
                        })
                })["RouterProvider.useMemo[navigator]"]
            };
        }
    }["RouterProvider.useMemo[navigator]"], [
        router
    ]);
    let basename = router.basename || "/";
    let dataRouterContext = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "RouterProvider.useMemo[dataRouterContext]": ()=>({
                router,
                navigator,
                static: false,
                basename,
                unstable_onError
            })
    }["RouterProvider.useMemo[dataRouterContext]"], [
        router,
        navigator,
        basename,
        unstable_onError
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](DataRouterContext.Provider, {
        value: dataRouterContext
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](DataRouterStateContext.Provider, {
        value: state
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](FetchersContext.Provider, {
        value: fetcherData.current
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](ViewTransitionContext.Provider, {
        value: vtContext
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Router, {
        basename,
        location: state.location,
        navigationType: state.historyAction,
        navigator
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](MemoizedDataRoutes, {
        routes: router.routes,
        future: router.future,
        state,
        unstable_onError
    })))))), null);
}
var MemoizedDataRoutes = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"](DataRoutes);
function DataRoutes({ routes, future, state, unstable_onError }) {
    return useRoutesImpl(routes, void 0, state, unstable_onError, future);
}
function MemoryRouter({ basename, children, initialEntries, initialIndex }) {
    let historyRef = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    if (historyRef.current == null) {
        historyRef.current = createMemoryHistory({
            initialEntries,
            initialIndex,
            v5Compat: true
        });
    }
    let history = historyRef.current;
    let [state, setStateImpl] = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        action: history.action,
        location: history.location
    });
    let setState = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "MemoryRouter.useCallback[setState]": (newState)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"]({
                "MemoryRouter.useCallback[setState]": ()=>setStateImpl(newState)
            }["MemoryRouter.useCallback[setState]"]);
        }
    }["MemoryRouter.useCallback[setState]"], [
        setStateImpl
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "MemoryRouter.useLayoutEffect": ()=>history.listen(setState)
    }["MemoryRouter.useLayoutEffect"], [
        history,
        setState
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Router, {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history
    });
}
function Navigate({ to, replace: replace2, state, relative }) {
    invariant(useInRouterContext(), // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    `<Navigate> may be used only in the context of a <Router> component.`);
    let { static: isStatic } = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](NavigationContext);
    warning(!isStatic, `<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);
    let { matches } = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](RouteContext);
    let { pathname: locationPathname } = useLocation();
    let navigate = useNavigate();
    let path = resolveTo(to, getResolveToMatches(matches), locationPathname, relative === "path");
    let jsonPath = JSON.stringify(path);
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Navigate.useEffect": ()=>{
            navigate(JSON.parse(jsonPath), {
                replace: replace2,
                state,
                relative
            });
        }
    }["Navigate.useEffect"], [
        navigate,
        jsonPath,
        relative,
        replace2,
        state
    ]);
    return null;
}
function Outlet(props) {
    return useOutlet(props.context);
}
function Route(props) {
    invariant(false, `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`);
}
function Router({ basename: basenameProp = "/", children = null, location: locationProp, navigationType = "POP" /* Pop */ , navigator, static: staticProp = false }) {
    invariant(!useInRouterContext(), `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);
    let basename = basenameProp.replace(/^\/*/, "/");
    let navigationContext = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Router.useMemo[navigationContext]": ()=>({
                basename,
                navigator,
                static: staticProp,
                future: {}
            })
    }["Router.useMemo[navigationContext]"], [
        basename,
        navigator,
        staticProp
    ]);
    if (typeof locationProp === "string") {
        locationProp = parsePath(locationProp);
    }
    let { pathname = "/", search = "", hash = "", state = null, key = "default" } = locationProp;
    let locationContext = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Router.useMemo[locationContext]": ()=>{
            let trailingPathname = stripBasename(pathname, basename);
            if (trailingPathname == null) {
                return null;
            }
            return {
                location: {
                    pathname: trailingPathname,
                    search,
                    hash,
                    state,
                    key
                },
                navigationType
            };
        }
    }["Router.useMemo[locationContext]"], [
        basename,
        pathname,
        search,
        hash,
        state,
        key,
        navigationType
    ]);
    warning(locationContext != null, `<Router basename="${basename}"> is not able to match the URL "${pathname}${search}${hash}" because it does not start with the basename, so the <Router> won't render anything.`);
    if (locationContext == null) {
        return null;
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](NavigationContext.Provider, {
        value: navigationContext
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](LocationContext.Provider, {
        children,
        value: locationContext
    }));
}
function Routes({ children, location }) {
    return useRoutes(createRoutesFromChildren(children), location);
}
function Await({ children, errorElement, resolve }) {
    let dataRouterContext = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DataRouterContext);
    let dataRouterStateContext = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DataRouterStateContext);
    let onError = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Await.useCallback[onError]": (error, errorInfo)=>{
            if (dataRouterContext && dataRouterContext.unstable_onError && dataRouterStateContext) {
                dataRouterContext.unstable_onError(error, {
                    location: dataRouterStateContext.location,
                    params: dataRouterStateContext.matches?.[0]?.params || {},
                    errorInfo
                });
            }
        }
    }["Await.useCallback[onError]"], [
        dataRouterContext,
        dataRouterStateContext
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](AwaitErrorBoundary, {
        resolve,
        errorElement,
        onError
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](ResolveAwait, null, children));
}
var AwaitErrorBoundary = class extends __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        this.state = {
            error: null
        };
    }
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        if (this.props.onError) {
            this.props.onError(error, errorInfo);
        } else {
            console.error("<Await> caught the following error during render", error, errorInfo);
        }
    }
    render() {
        let { children, errorElement, resolve } = this.props;
        let promise = null;
        let status = 0 /* pending */ ;
        if (!(resolve instanceof Promise)) {
            status = 1 /* success */ ;
            promise = Promise.resolve();
            Object.defineProperty(promise, "_tracked", {
                get: ()=>true
            });
            Object.defineProperty(promise, "_data", {
                get: ()=>resolve
            });
        } else if (this.state.error) {
            status = 2 /* error */ ;
            let renderError = this.state.error;
            promise = Promise.reject().catch(()=>{});
            Object.defineProperty(promise, "_tracked", {
                get: ()=>true
            });
            Object.defineProperty(promise, "_error", {
                get: ()=>renderError
            });
        } else if (resolve._tracked) {
            promise = resolve;
            status = "_error" in promise ? 2 /* error */  : "_data" in promise ? 1 /* success */  : 0 /* pending */ ;
        } else {
            status = 0 /* pending */ ;
            Object.defineProperty(resolve, "_tracked", {
                get: ()=>true
            });
            promise = resolve.then((data2)=>Object.defineProperty(resolve, "_data", {
                    get: ()=>data2
                }), (error)=>{
                this.props.onError?.(error);
                Object.defineProperty(resolve, "_error", {
                    get: ()=>error
                });
            });
        }
        if (status === 2 /* error */  && !errorElement) {
            throw promise._error;
        }
        if (status === 2 /* error */ ) {
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](AwaitContext.Provider, {
                value: promise,
                children: errorElement
            });
        }
        if (status === 1 /* success */ ) {
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](AwaitContext.Provider, {
                value: promise,
                children
            });
        }
        throw promise;
    }
};
function ResolveAwait({ children }) {
    let data2 = useAsyncValue();
    let toRender = typeof children === "function" ? children(data2) : children;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, toRender);
}
function createRoutesFromChildren(children, parentPath = []) {
    let routes = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].forEach(children, (element, index)=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](element)) {
            return;
        }
        let treePath = [
            ...parentPath,
            index
        ];
        if (element.type === __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"]) {
            routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
            return;
        }
        invariant(element.type === Route, `[${typeof element.type === "string" ? element.type : element.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`);
        invariant(!element.props.index || !element.props.children, "An index route cannot have child routes.");
        let route = {
            id: element.props.id || treePath.join("-"),
            caseSensitive: element.props.caseSensitive,
            element: element.props.element,
            Component: element.props.Component,
            index: element.props.index,
            path: element.props.path,
            middleware: element.props.middleware,
            loader: element.props.loader,
            action: element.props.action,
            hydrateFallbackElement: element.props.hydrateFallbackElement,
            HydrateFallback: element.props.HydrateFallback,
            errorElement: element.props.errorElement,
            ErrorBoundary: element.props.ErrorBoundary,
            hasErrorBoundary: element.props.hasErrorBoundary === true || element.props.ErrorBoundary != null || element.props.errorElement != null,
            shouldRevalidate: element.props.shouldRevalidate,
            handle: element.props.handle,
            lazy: element.props.lazy
        };
        if (element.props.children) {
            route.children = createRoutesFromChildren(element.props.children, treePath);
        }
        routes.push(route);
    });
    return routes;
}
var createRoutesFromElements = createRoutesFromChildren;
function renderMatches(matches) {
    return _renderMatches(matches);
}
function useRouteComponentProps() {
    return {
        params: useParams(),
        loaderData: useLoaderData(),
        actionData: useActionData(),
        matches: useMatches()
    };
}
function WithComponentProps({ children }) {
    const props = useRouteComponentProps();
    return __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](children, props);
}
function withComponentProps(Component4) {
    return function WithComponentProps2() {
        const props = useRouteComponentProps();
        return __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Component4, props);
    };
}
function useHydrateFallbackProps() {
    return {
        params: useParams(),
        loaderData: useLoaderData(),
        actionData: useActionData()
    };
}
function WithHydrateFallbackProps({ children }) {
    const props = useHydrateFallbackProps();
    return __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](children, props);
}
function withHydrateFallbackProps(HydrateFallback) {
    return function WithHydrateFallbackProps2() {
        const props = useHydrateFallbackProps();
        return __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](HydrateFallback, props);
    };
}
function useErrorBoundaryProps() {
    return {
        params: useParams(),
        loaderData: useLoaderData(),
        actionData: useActionData(),
        error: useRouteError()
    };
}
function WithErrorBoundaryProps({ children }) {
    const props = useErrorBoundaryProps();
    return __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](children, props);
}
function withErrorBoundaryProps(ErrorBoundary) {
    return function WithErrorBoundaryProps2() {
        const props = useErrorBoundaryProps();
        return __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](ErrorBoundary, props);
    };
}
// lib/dom/dom.ts
var defaultMethod = "get";
var defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
    return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
    return event.button === 0 && // Ignore everything but left clicks
    (!target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event);
}
function createSearchParams(init = "") {
    return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo2, key)=>{
        let value = init[key];
        return memo2.concat(Array.isArray(value) ? value.map((v)=>[
                key,
                v
            ]) : [
            [
                key,
                value
            ]
        ]);
    }, []));
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
    let searchParams = createSearchParams(locationSearch);
    if (defaultSearchParams) {
        defaultSearchParams.forEach((_, key)=>{
            if (!searchParams.has(key)) {
                defaultSearchParams.getAll(key).forEach((value)=>{
                    searchParams.append(key, value);
                });
            }
        });
    }
    return searchParams;
}
var _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
    if (_formDataSupportsSubmitter === null) {
        try {
            new FormData(document.createElement("form"), // @ts-expect-error if FormData supports the submitter parameter, this will throw
            0);
            _formDataSupportsSubmitter = false;
        } catch (e) {
            _formDataSupportsSubmitter = true;
        }
    }
    return _formDataSupportsSubmitter;
}
var supportedFormEncTypes = /* @__PURE__ */ new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
]);
function getFormEncType(encType) {
    if (encType != null && !supportedFormEncTypes.has(encType)) {
        warning(false, `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`);
        return null;
    }
    return encType;
}
function getFormSubmissionInfo(target, basename) {
    let method;
    let action;
    let encType;
    let formData;
    let body;
    if (isFormElement(target)) {
        let attr = target.getAttribute("action");
        action = attr ? stripBasename(attr, basename) : null;
        method = target.getAttribute("method") || defaultMethod;
        encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
        formData = new FormData(target);
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
        let form = target.form;
        if (form == null) {
            throw new Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);
        }
        let attr = target.getAttribute("formaction") || form.getAttribute("action");
        action = attr ? stripBasename(attr, basename) : null;
        method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
        encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
        formData = new FormData(form, target);
        if (!isFormDataSubmitterSupported()) {
            let { name, type, value } = target;
            if (type === "image") {
                let prefix = name ? `${name}.` : "";
                formData.append(`${prefix}x`, "0");
                formData.append(`${prefix}y`, "0");
            } else if (name) {
                formData.append(name, value);
            }
        }
    } else if (isHtmlElement(target)) {
        throw new Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);
    } else {
        method = defaultMethod;
        action = null;
        encType = defaultEncType;
        body = target;
    }
    if (formData && encType === "text/plain") {
        body = formData;
        formData = void 0;
    }
    return {
        action,
        method: method.toLowerCase(),
        encType,
        formData,
        body
    };
}
;
// vendor/turbo-stream-v2/utils.ts
var HOLE = -1;
var NAN = -2;
var NEGATIVE_INFINITY = -3;
var NEGATIVE_ZERO = -4;
var NULL = -5;
var POSITIVE_INFINITY = -6;
var UNDEFINED = -7;
var TYPE_BIGINT = "B";
var TYPE_DATE = "D";
var TYPE_ERROR = "E";
var TYPE_MAP = "M";
var TYPE_NULL_OBJECT = "N";
var TYPE_PROMISE = "P";
var TYPE_REGEXP = "R";
var TYPE_SET = "S";
var TYPE_SYMBOL = "Y";
var TYPE_URL = "U";
var TYPE_PREVIOUS_RESOLVED = "Z";
var Deferred2 = class {
    constructor(){
        this.promise = new Promise((resolve, reject)=>{
            this.resolve = resolve;
            this.reject = reject;
        });
    }
};
function createLineSplittingTransform() {
    const decoder = new TextDecoder();
    let leftover = "";
    return new TransformStream({
        transform (chunk, controller) {
            const str = decoder.decode(chunk, {
                stream: true
            });
            const parts = (leftover + str).split("\n");
            leftover = parts.pop() || "";
            for (const part of parts){
                controller.enqueue(part);
            }
        },
        flush (controller) {
            if (leftover) {
                controller.enqueue(leftover);
            }
        }
    });
}
// vendor/turbo-stream-v2/flatten.ts
function flatten(input) {
    const { indices } = this;
    const existing = indices.get(input);
    if (existing) return [
        existing
    ];
    if (input === void 0) return UNDEFINED;
    if (input === null) return NULL;
    if (Number.isNaN(input)) return NAN;
    if (input === Number.POSITIVE_INFINITY) return POSITIVE_INFINITY;
    if (input === Number.NEGATIVE_INFINITY) return NEGATIVE_INFINITY;
    if (input === 0 && 1 / input < 0) return NEGATIVE_ZERO;
    const index = this.index++;
    indices.set(input, index);
    stringify.call(this, input, index);
    return index;
}
function stringify(input, index) {
    const { deferred, plugins, postPlugins } = this;
    const str = this.stringified;
    const stack = [
        [
            input,
            index
        ]
    ];
    while(stack.length > 0){
        const [input2, index2] = stack.pop();
        const partsForObj = (obj)=>Object.keys(obj).map((k)=>`"_${flatten.call(this, k)}":${flatten.call(this, obj[k])}`).join(",");
        let error = null;
        switch(typeof input2){
            case "boolean":
            case "number":
            case "string":
                str[index2] = JSON.stringify(input2);
                break;
            case "bigint":
                str[index2] = `["${TYPE_BIGINT}","${input2}"]`;
                break;
            case "symbol":
                {
                    const keyFor = Symbol.keyFor(input2);
                    if (!keyFor) {
                        error = new Error("Cannot encode symbol unless created with Symbol.for()");
                    } else {
                        str[index2] = `["${TYPE_SYMBOL}",${JSON.stringify(keyFor)}]`;
                    }
                    break;
                }
            case "object":
                {
                    if (!input2) {
                        str[index2] = `${NULL}`;
                        break;
                    }
                    const isArray = Array.isArray(input2);
                    let pluginHandled = false;
                    if (!isArray && plugins) {
                        for (const plugin of plugins){
                            const pluginResult = plugin(input2);
                            if (Array.isArray(pluginResult)) {
                                pluginHandled = true;
                                const [pluginIdentifier, ...rest] = pluginResult;
                                str[index2] = `[${JSON.stringify(pluginIdentifier)}`;
                                if (rest.length > 0) {
                                    str[index2] += `,${rest.map((v)=>flatten.call(this, v)).join(",")}`;
                                }
                                str[index2] += "]";
                                break;
                            }
                        }
                    }
                    if (!pluginHandled) {
                        let result = isArray ? "[" : "{";
                        if (isArray) {
                            for(let i = 0; i < input2.length; i++)result += (i ? "," : "") + (i in input2 ? flatten.call(this, input2[i]) : HOLE);
                            str[index2] = `${result}]`;
                        } else if (input2 instanceof Date) {
                            const dateTime = input2.getTime();
                            str[index2] = `["${TYPE_DATE}",${Number.isNaN(dateTime) ? JSON.stringify("invalid") : dateTime}]`;
                        } else if (input2 instanceof URL) {
                            str[index2] = `["${TYPE_URL}",${JSON.stringify(input2.href)}]`;
                        } else if (input2 instanceof RegExp) {
                            str[index2] = `["${TYPE_REGEXP}",${JSON.stringify(input2.source)},${JSON.stringify(input2.flags)}]`;
                        } else if (input2 instanceof Set) {
                            if (input2.size > 0) {
                                str[index2] = `["${TYPE_SET}",${[
                                    ...input2
                                ].map((val)=>flatten.call(this, val)).join(",")}]`;
                            } else {
                                str[index2] = `["${TYPE_SET}"]`;
                            }
                        } else if (input2 instanceof Map) {
                            if (input2.size > 0) {
                                str[index2] = `["${TYPE_MAP}",${[
                                    ...input2
                                ].flatMap(([k, v])=>[
                                        flatten.call(this, k),
                                        flatten.call(this, v)
                                    ]).join(",")}]`;
                            } else {
                                str[index2] = `["${TYPE_MAP}"]`;
                            }
                        } else if (input2 instanceof Promise) {
                            str[index2] = `["${TYPE_PROMISE}",${index2}]`;
                            deferred[index2] = input2;
                        } else if (input2 instanceof Error) {
                            str[index2] = `["${TYPE_ERROR}",${JSON.stringify(input2.message)}`;
                            if (input2.name !== "Error") {
                                str[index2] += `,${JSON.stringify(input2.name)}`;
                            }
                            str[index2] += "]";
                        } else if (Object.getPrototypeOf(input2) === null) {
                            str[index2] = `["${TYPE_NULL_OBJECT}",{${partsForObj(input2)}}]`;
                        } else if (isPlainObject2(input2)) {
                            str[index2] = `{${partsForObj(input2)}}`;
                        } else {
                            error = new Error("Cannot encode object with prototype");
                        }
                    }
                    break;
                }
            default:
                {
                    const isArray = Array.isArray(input2);
                    let pluginHandled = false;
                    if (!isArray && plugins) {
                        for (const plugin of plugins){
                            const pluginResult = plugin(input2);
                            if (Array.isArray(pluginResult)) {
                                pluginHandled = true;
                                const [pluginIdentifier, ...rest] = pluginResult;
                                str[index2] = `[${JSON.stringify(pluginIdentifier)}`;
                                if (rest.length > 0) {
                                    str[index2] += `,${rest.map((v)=>flatten.call(this, v)).join(",")}`;
                                }
                                str[index2] += "]";
                                break;
                            }
                        }
                    }
                    if (!pluginHandled) {
                        error = new Error("Cannot encode function or unexpected type");
                    }
                }
        }
        if (error) {
            let pluginHandled = false;
            if (postPlugins) {
                for (const plugin of postPlugins){
                    const pluginResult = plugin(input2);
                    if (Array.isArray(pluginResult)) {
                        pluginHandled = true;
                        const [pluginIdentifier, ...rest] = pluginResult;
                        str[index2] = `[${JSON.stringify(pluginIdentifier)}`;
                        if (rest.length > 0) {
                            str[index2] += `,${rest.map((v)=>flatten.call(this, v)).join(",")}`;
                        }
                        str[index2] += "]";
                        break;
                    }
                }
            }
            if (!pluginHandled) {
                throw error;
            }
        }
    }
}
var objectProtoNames2 = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function isPlainObject2(thing) {
    const proto = Object.getPrototypeOf(thing);
    return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === objectProtoNames2;
}
// vendor/turbo-stream-v2/unflatten.ts
var globalObj = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : void 0;
function unflatten(parsed) {
    const { hydrated, values } = this;
    if (typeof parsed === "number") return hydrate.call(this, parsed);
    if (!Array.isArray(parsed) || !parsed.length) throw new SyntaxError();
    const startIndex = values.length;
    for (const value of parsed){
        values.push(value);
    }
    hydrated.length = values.length;
    return hydrate.call(this, startIndex);
}
function hydrate(index) {
    const { hydrated, values, deferred, plugins } = this;
    let result;
    const stack = [
        [
            index,
            (v)=>{
                result = v;
            }
        ]
    ];
    let postRun = [];
    while(stack.length > 0){
        const [index2, set] = stack.pop();
        switch(index2){
            case UNDEFINED:
                set(void 0);
                continue;
            case NULL:
                set(null);
                continue;
            case NAN:
                set(NaN);
                continue;
            case POSITIVE_INFINITY:
                set(Infinity);
                continue;
            case NEGATIVE_INFINITY:
                set(-Infinity);
                continue;
            case NEGATIVE_ZERO:
                set(-0);
                continue;
        }
        if (hydrated[index2]) {
            set(hydrated[index2]);
            continue;
        }
        const value = values[index2];
        if (!value || typeof value !== "object") {
            hydrated[index2] = value;
            set(value);
            continue;
        }
        if (Array.isArray(value)) {
            if (typeof value[0] === "string") {
                const [type, b, c] = value;
                switch(type){
                    case TYPE_DATE:
                        set(hydrated[index2] = new Date(b));
                        continue;
                    case TYPE_URL:
                        set(hydrated[index2] = new URL(b));
                        continue;
                    case TYPE_BIGINT:
                        set(hydrated[index2] = BigInt(b));
                        continue;
                    case TYPE_REGEXP:
                        set(hydrated[index2] = new RegExp(b, c));
                        continue;
                    case TYPE_SYMBOL:
                        set(hydrated[index2] = Symbol.for(b));
                        continue;
                    case TYPE_SET:
                        const newSet = /* @__PURE__ */ new Set();
                        hydrated[index2] = newSet;
                        for(let i = value.length - 1; i > 0; i--)stack.push([
                            value[i],
                            (v)=>{
                                newSet.add(v);
                            }
                        ]);
                        set(newSet);
                        continue;
                    case TYPE_MAP:
                        const map = /* @__PURE__ */ new Map();
                        hydrated[index2] = map;
                        for(let i = value.length - 2; i > 0; i -= 2){
                            const r = [];
                            stack.push([
                                value[i + 1],
                                (v)=>{
                                    r[1] = v;
                                }
                            ]);
                            stack.push([
                                value[i],
                                (k)=>{
                                    r[0] = k;
                                }
                            ]);
                            postRun.push(()=>{
                                map.set(r[0], r[1]);
                            });
                        }
                        set(map);
                        continue;
                    case TYPE_NULL_OBJECT:
                        const obj = /* @__PURE__ */ Object.create(null);
                        hydrated[index2] = obj;
                        for (const key of Object.keys(b).reverse()){
                            const r = [];
                            stack.push([
                                b[key],
                                (v)=>{
                                    r[1] = v;
                                }
                            ]);
                            stack.push([
                                Number(key.slice(1)),
                                (k)=>{
                                    r[0] = k;
                                }
                            ]);
                            postRun.push(()=>{
                                obj[r[0]] = r[1];
                            });
                        }
                        set(obj);
                        continue;
                    case TYPE_PROMISE:
                        if (hydrated[b]) {
                            set(hydrated[index2] = hydrated[b]);
                        } else {
                            const d = new Deferred2();
                            deferred[b] = d;
                            set(hydrated[index2] = d.promise);
                        }
                        continue;
                    case TYPE_ERROR:
                        const [, message, errorType] = value;
                        let error = errorType && globalObj && globalObj[errorType] ? new globalObj[errorType](message) : new Error(message);
                        hydrated[index2] = error;
                        set(error);
                        continue;
                    case TYPE_PREVIOUS_RESOLVED:
                        set(hydrated[index2] = hydrated[b]);
                        continue;
                    default:
                        if (Array.isArray(plugins)) {
                            const r = [];
                            const vals = value.slice(1);
                            for(let i = 0; i < vals.length; i++){
                                const v = vals[i];
                                stack.push([
                                    v,
                                    (v2)=>{
                                        r[i] = v2;
                                    }
                                ]);
                            }
                            postRun.push(()=>{
                                for (const plugin of plugins){
                                    const result2 = plugin(value[0], ...r);
                                    if (result2) {
                                        set(hydrated[index2] = result2.value);
                                        return;
                                    }
                                }
                                throw new SyntaxError();
                            });
                            continue;
                        }
                        throw new SyntaxError();
                }
            } else {
                const array = [];
                hydrated[index2] = array;
                for(let i = 0; i < value.length; i++){
                    const n = value[i];
                    if (n !== HOLE) {
                        stack.push([
                            n,
                            (v)=>{
                                array[i] = v;
                            }
                        ]);
                    }
                }
                set(array);
                continue;
            }
        } else {
            const object = {};
            hydrated[index2] = object;
            for (const key of Object.keys(value).reverse()){
                const r = [];
                stack.push([
                    value[key],
                    (v)=>{
                        r[1] = v;
                    }
                ]);
                stack.push([
                    Number(key.slice(1)),
                    (k)=>{
                        r[0] = k;
                    }
                ]);
                postRun.push(()=>{
                    object[r[0]] = r[1];
                });
            }
            set(object);
            continue;
        }
    }
    while(postRun.length > 0){
        postRun.pop()();
    }
    return result;
}
// vendor/turbo-stream-v2/turbo-stream.ts
async function decode(readable, options) {
    const { plugins } = options ?? {};
    const done = new Deferred2();
    const reader = readable.pipeThrough(createLineSplittingTransform()).getReader();
    const decoder = {
        values: [],
        hydrated: [],
        deferred: {},
        plugins
    };
    const decoded = await decodeInitial.call(decoder, reader);
    let donePromise = done.promise;
    if (decoded.done) {
        done.resolve();
    } else {
        donePromise = decodeDeferred.call(decoder, reader).then(done.resolve).catch((reason)=>{
            for (const deferred of Object.values(decoder.deferred)){
                deferred.reject(reason);
            }
            done.reject(reason);
        });
    }
    return {
        done: donePromise.then(()=>reader.closed),
        value: decoded.value
    };
}
async function decodeInitial(reader) {
    const read = await reader.read();
    if (!read.value) {
        throw new SyntaxError();
    }
    let line;
    try {
        line = JSON.parse(read.value);
    } catch (reason) {
        throw new SyntaxError();
    }
    return {
        done: read.done,
        value: unflatten.call(this, line)
    };
}
async function decodeDeferred(reader) {
    let read = await reader.read();
    while(!read.done){
        if (!read.value) continue;
        const line = read.value;
        switch(line[0]){
            case TYPE_PROMISE:
                {
                    const colonIndex = line.indexOf(":");
                    const deferredId = Number(line.slice(1, colonIndex));
                    const deferred = this.deferred[deferredId];
                    if (!deferred) {
                        throw new Error(`Deferred ID ${deferredId} not found in stream`);
                    }
                    const lineData = line.slice(colonIndex + 1);
                    let jsonLine;
                    try {
                        jsonLine = JSON.parse(lineData);
                    } catch (reason) {
                        throw new SyntaxError();
                    }
                    const value = unflatten.call(this, jsonLine);
                    deferred.resolve(value);
                    break;
                }
            case TYPE_ERROR:
                {
                    const colonIndex = line.indexOf(":");
                    const deferredId = Number(line.slice(1, colonIndex));
                    const deferred = this.deferred[deferredId];
                    if (!deferred) {
                        throw new Error(`Deferred ID ${deferredId} not found in stream`);
                    }
                    const lineData = line.slice(colonIndex + 1);
                    let jsonLine;
                    try {
                        jsonLine = JSON.parse(lineData);
                    } catch (reason) {
                        throw new SyntaxError();
                    }
                    const value = unflatten.call(this, jsonLine);
                    deferred.reject(value);
                    break;
                }
            default:
                throw new SyntaxError();
        }
        read = await reader.read();
    }
}
function encode(input, options) {
    const { plugins, postPlugins, signal } = options ?? {};
    const encoder = {
        deferred: {},
        index: 0,
        indices: /* @__PURE__ */ new Map(),
        stringified: [],
        plugins,
        postPlugins,
        signal
    };
    const textEncoder = new TextEncoder();
    let lastSentIndex = 0;
    const readable = new ReadableStream({
        async start (controller) {
            const id = flatten.call(encoder, input);
            if (Array.isArray(id)) {
                throw new Error("This should never happen");
            }
            if (id < 0) {
                controller.enqueue(textEncoder.encode(`${id}
`));
            } else {
                controller.enqueue(textEncoder.encode(`[${encoder.stringified.join(",")}]
`));
                lastSentIndex = encoder.stringified.length - 1;
            }
            const seenPromises = /* @__PURE__ */ new WeakSet();
            if (Object.keys(encoder.deferred).length) {
                let raceDone;
                const racePromise = new Promise((resolve, reject)=>{
                    raceDone = resolve;
                    if (signal) {
                        const rejectPromise = ()=>reject(signal.reason || new Error("Signal was aborted."));
                        if (signal.aborted) {
                            rejectPromise();
                        } else {
                            signal.addEventListener("abort", (event)=>{
                                rejectPromise();
                            });
                        }
                    }
                });
                while(Object.keys(encoder.deferred).length > 0){
                    for (const [deferredId, deferred] of Object.entries(encoder.deferred)){
                        if (seenPromises.has(deferred)) continue;
                        seenPromises.add(// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
                        encoder.deferred[Number(deferredId)] = Promise.race([
                            racePromise,
                            deferred
                        ]).then((resolved)=>{
                            const id2 = flatten.call(encoder, resolved);
                            if (Array.isArray(id2)) {
                                controller.enqueue(textEncoder.encode(`${TYPE_PROMISE}${deferredId}:[["${TYPE_PREVIOUS_RESOLVED}",${id2[0]}]]
`));
                                encoder.index++;
                                lastSentIndex++;
                            } else if (id2 < 0) {
                                controller.enqueue(textEncoder.encode(`${TYPE_PROMISE}${deferredId}:${id2}
`));
                            } else {
                                const values = encoder.stringified.slice(lastSentIndex + 1).join(",");
                                controller.enqueue(textEncoder.encode(`${TYPE_PROMISE}${deferredId}:[${values}]
`));
                                lastSentIndex = encoder.stringified.length - 1;
                            }
                        }, (reason)=>{
                            if (!reason || typeof reason !== "object" || !(reason instanceof Error)) {
                                reason = new Error("An unknown error occurred");
                            }
                            const id2 = flatten.call(encoder, reason);
                            if (Array.isArray(id2)) {
                                controller.enqueue(textEncoder.encode(`${TYPE_ERROR}${deferredId}:[["${TYPE_PREVIOUS_RESOLVED}",${id2[0]}]]
`));
                                encoder.index++;
                                lastSentIndex++;
                            } else if (id2 < 0) {
                                controller.enqueue(textEncoder.encode(`${TYPE_ERROR}${deferredId}:${id2}
`));
                            } else {
                                const values = encoder.stringified.slice(lastSentIndex + 1).join(",");
                                controller.enqueue(textEncoder.encode(`${TYPE_ERROR}${deferredId}:[${values}]
`));
                                lastSentIndex = encoder.stringified.length - 1;
                            }
                        }).finally(()=>{
                            delete encoder.deferred[Number(deferredId)];
                        }));
                    }
                    await Promise.race(Object.values(encoder.deferred));
                }
                raceDone();
            }
            await Promise.all(Object.values(encoder.deferred));
            controller.close();
        }
    });
    return readable;
}
// lib/dom/ssr/data.ts
async function createRequestInit(request) {
    let init = {
        signal: request.signal
    };
    if (request.method !== "GET") {
        init.method = request.method;
        let contentType = request.headers.get("Content-Type");
        if (contentType && /\bapplication\/json\b/.test(contentType)) {
            init.headers = {
                "Content-Type": contentType
            };
            init.body = JSON.stringify(await request.json());
        } else if (contentType && /\btext\/plain\b/.test(contentType)) {
            init.headers = {
                "Content-Type": contentType
            };
            init.body = await request.text();
        } else if (contentType && /\bapplication\/x-www-form-urlencoded\b/.test(contentType)) {
            init.body = new URLSearchParams(await request.text());
        } else {
            init.body = await request.formData();
        }
    }
    return init;
}
// lib/dom/ssr/markup.ts
var ESCAPE_LOOKUP = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
};
var ESCAPE_REGEX = /[&><\u2028\u2029]/g;
function escapeHtml(html) {
    return html.replace(ESCAPE_REGEX, (match)=>ESCAPE_LOOKUP[match]);
}
// lib/dom/ssr/invariant.ts
function invariant2(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
        throw new Error(message);
    }
}
// lib/dom/ssr/single-fetch.tsx
var SingleFetchRedirectSymbol = Symbol("SingleFetchRedirect");
var SingleFetchNoResultError = class extends Error {
};
var SINGLE_FETCH_REDIRECT_STATUS = 202;
var NO_BODY_STATUS_CODES = /* @__PURE__ */ new Set([
    100,
    101,
    204,
    205
]);
function StreamTransfer({ context, identifier, reader, textDecoder, nonce }) {
    if (!context.renderMeta || !context.renderMeta.didRenderScripts) {
        return null;
    }
    if (!context.renderMeta.streamCache) {
        context.renderMeta.streamCache = {};
    }
    let { streamCache } = context.renderMeta;
    let promise = streamCache[identifier];
    if (!promise) {
        promise = streamCache[identifier] = reader.read().then((result)=>{
            streamCache[identifier].result = {
                done: result.done,
                value: textDecoder.decode(result.value, {
                    stream: true
                })
            };
        }).catch((e)=>{
            streamCache[identifier].error = e;
        });
    }
    if (promise.error) {
        throw promise.error;
    }
    if (promise.result === void 0) {
        throw promise;
    }
    let { done, value } = promise.result;
    let scriptTag = value ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("script", {
        nonce,
        dangerouslySetInnerHTML: {
            __html: `window.__reactRouterContext.streamController.enqueue(${escapeHtml(JSON.stringify(value))});`
        }
    }) : null;
    if (done) {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, scriptTag, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("script", {
            nonce,
            dangerouslySetInnerHTML: {
                __html: `window.__reactRouterContext.streamController.close();`
            }
        }));
    } else {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, scriptTag, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StreamTransfer, {
            context,
            identifier: identifier + 1,
            reader,
            textDecoder,
            nonce
        })));
    }
}
function getTurboStreamSingleFetchDataStrategy(getRouter, manifest, routeModules, ssr, basename) {
    let dataStrategy = getSingleFetchDataStrategyImpl(getRouter, (match)=>{
        let manifestRoute = manifest.routes[match.route.id];
        invariant2(manifestRoute, "Route not found in manifest");
        let routeModule = routeModules[match.route.id];
        return {
            hasLoader: manifestRoute.hasLoader,
            hasClientLoader: manifestRoute.hasClientLoader,
            hasShouldRevalidate: Boolean(routeModule?.shouldRevalidate)
        };
    }, fetchAndDecodeViaTurboStream, ssr, basename);
    return async (args)=>args.runClientMiddleware(dataStrategy);
}
function getSingleFetchDataStrategyImpl(getRouter, getRouteInfo, fetchAndDecode, ssr, basename, shouldAllowOptOut = ()=>true) {
    return async (args)=>{
        let { request, matches, fetcherKey } = args;
        let router = getRouter();
        if (request.method !== "GET") {
            return singleFetchActionStrategy(args, fetchAndDecode, basename);
        }
        let foundRevalidatingServerLoader = matches.some((m)=>{
            let { hasLoader, hasClientLoader } = getRouteInfo(m);
            return m.unstable_shouldCallHandler() && hasLoader && !hasClientLoader;
        });
        if (!ssr && !foundRevalidatingServerLoader) {
            return nonSsrStrategy(args, getRouteInfo, fetchAndDecode, basename);
        }
        if (fetcherKey) {
            return singleFetchLoaderFetcherStrategy(args, fetchAndDecode, basename);
        }
        return singleFetchLoaderNavigationStrategy(args, router, getRouteInfo, fetchAndDecode, ssr, basename, shouldAllowOptOut);
    };
}
async function singleFetchActionStrategy(args, fetchAndDecode, basename) {
    let actionMatch = args.matches.find((m)=>m.unstable_shouldCallHandler());
    invariant2(actionMatch, "No action match found");
    let actionStatus = void 0;
    let result = await actionMatch.resolve(async (handler)=>{
        let result2 = await handler(async ()=>{
            let { data: data2, status } = await fetchAndDecode(args, basename, [
                actionMatch.route.id
            ]);
            actionStatus = status;
            return unwrapSingleFetchResult(data2, actionMatch.route.id);
        });
        return result2;
    });
    if (isResponse(result.result) || isRouteErrorResponse(result.result) || isDataWithResponseInit(result.result)) {
        return {
            [actionMatch.route.id]: result
        };
    }
    return {
        [actionMatch.route.id]: {
            type: result.type,
            result: data(result.result, actionStatus)
        }
    };
}
async function nonSsrStrategy(args, getRouteInfo, fetchAndDecode, basename) {
    let matchesToLoad = args.matches.filter((m)=>m.unstable_shouldCallHandler());
    let results = {};
    await Promise.all(matchesToLoad.map((m)=>m.resolve(async (handler)=>{
            try {
                let { hasClientLoader } = getRouteInfo(m);
                let routeId = m.route.id;
                let result = hasClientLoader ? await handler(async ()=>{
                    let { data: data2 } = await fetchAndDecode(args, basename, [
                        routeId
                    ]);
                    return unwrapSingleFetchResult(data2, routeId);
                }) : await handler();
                results[m.route.id] = {
                    type: "data",
                    result
                };
            } catch (e) {
                results[m.route.id] = {
                    type: "error",
                    result: e
                };
            }
        })));
    return results;
}
async function singleFetchLoaderNavigationStrategy(args, router, getRouteInfo, fetchAndDecode, ssr, basename, shouldAllowOptOut = ()=>true) {
    let routesParams = /* @__PURE__ */ new Set();
    let foundOptOutRoute = false;
    let routeDfds = args.matches.map(()=>createDeferred2());
    let singleFetchDfd = createDeferred2();
    let results = {};
    let resolvePromise = Promise.all(args.matches.map(async (m, i)=>m.resolve(async (handler)=>{
            routeDfds[i].resolve();
            let routeId = m.route.id;
            let { hasLoader, hasClientLoader, hasShouldRevalidate } = getRouteInfo(m);
            let defaultShouldRevalidate = !m.unstable_shouldRevalidateArgs || m.unstable_shouldRevalidateArgs.actionStatus == null || m.unstable_shouldRevalidateArgs.actionStatus < 400;
            let shouldCall = m.unstable_shouldCallHandler(defaultShouldRevalidate);
            if (!shouldCall) {
                foundOptOutRoute || (foundOptOutRoute = m.unstable_shouldRevalidateArgs != null && // This is a revalidation,
                hasLoader && // for a route with a server loader,
                hasShouldRevalidate === true);
                return;
            }
            if (shouldAllowOptOut(m) && hasClientLoader) {
                if (hasLoader) {
                    foundOptOutRoute = true;
                }
                try {
                    let result = await handler(async ()=>{
                        let { data: data2 } = await fetchAndDecode(args, basename, [
                            routeId
                        ]);
                        return unwrapSingleFetchResult(data2, routeId);
                    });
                    results[routeId] = {
                        type: "data",
                        result
                    };
                } catch (e) {
                    results[routeId] = {
                        type: "error",
                        result: e
                    };
                }
                return;
            }
            if (hasLoader) {
                routesParams.add(routeId);
            }
            try {
                let result = await handler(async ()=>{
                    let data2 = await singleFetchDfd.promise;
                    return unwrapSingleFetchResult(data2, routeId);
                });
                results[routeId] = {
                    type: "data",
                    result
                };
            } catch (e) {
                results[routeId] = {
                    type: "error",
                    result: e
                };
            }
        })));
    await Promise.all(routeDfds.map((d)=>d.promise));
    let isInitialLoad = !router.state.initialized && router.state.navigation.state === "idle";
    if ((isInitialLoad || routesParams.size === 0) && !window.__reactRouterHdrActive) {
        singleFetchDfd.resolve({
            routes: {}
        });
    } else {
        let targetRoutes = ssr && foundOptOutRoute && routesParams.size > 0 ? [
            ...routesParams.keys()
        ] : void 0;
        try {
            let data2 = await fetchAndDecode(args, basename, targetRoutes);
            singleFetchDfd.resolve(data2.data);
        } catch (e) {
            singleFetchDfd.reject(e);
        }
    }
    await resolvePromise;
    await bubbleMiddlewareErrors(singleFetchDfd.promise, args.matches, routesParams, results);
    return results;
}
async function bubbleMiddlewareErrors(singleFetchPromise, matches, routesParams, results) {
    try {
        let middlewareError;
        let fetchedData = await singleFetchPromise;
        if ("routes" in fetchedData) {
            for (let match of matches){
                if (match.route.id in fetchedData.routes) {
                    let routeResult = fetchedData.routes[match.route.id];
                    if ("error" in routeResult) {
                        middlewareError = routeResult.error;
                        if (results[match.route.id]?.result == null) {
                            results[match.route.id] = {
                                type: "error",
                                result: middlewareError
                            };
                        }
                        break;
                    }
                }
            }
        }
        if (middlewareError !== void 0) {
            Array.from(routesParams.values()).forEach((routeId)=>{
                if (results[routeId].result instanceof SingleFetchNoResultError) {
                    results[routeId].result = middlewareError;
                }
            });
        }
    } catch (e) {}
}
async function singleFetchLoaderFetcherStrategy(args, fetchAndDecode, basename) {
    let fetcherMatch = args.matches.find((m)=>m.unstable_shouldCallHandler());
    invariant2(fetcherMatch, "No fetcher match found");
    let routeId = fetcherMatch.route.id;
    let result = await fetcherMatch.resolve(async (handler)=>handler(async ()=>{
            let { data: data2 } = await fetchAndDecode(args, basename, [
                routeId
            ]);
            return unwrapSingleFetchResult(data2, routeId);
        }));
    return {
        [fetcherMatch.route.id]: result
    };
}
function stripIndexParam(url) {
    let indexValues = url.searchParams.getAll("index");
    url.searchParams.delete("index");
    let indexValuesToKeep = [];
    for (let indexValue of indexValues){
        if (indexValue) {
            indexValuesToKeep.push(indexValue);
        }
    }
    for (let toKeep of indexValuesToKeep){
        url.searchParams.append("index", toKeep);
    }
    return url;
}
function singleFetchUrl(reqUrl, basename, extension) {
    let url = typeof reqUrl === "string" ? new URL(reqUrl, // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window === "undefined" ? "server://singlefetch/" : window.location.origin) : reqUrl;
    if (url.pathname === "/") {
        url.pathname = `_root.${extension}`;
    } else if (basename && stripBasename(url.pathname, basename) === "/") {
        url.pathname = `${basename.replace(/\/$/, "")}/_root.${extension}`;
    } else {
        url.pathname = `${url.pathname.replace(/\/$/, "")}.${extension}`;
    }
    return url;
}
async function fetchAndDecodeViaTurboStream(args, basename, targetRoutes) {
    let { request } = args;
    let url = singleFetchUrl(request.url, basename, "data");
    if (request.method === "GET") {
        url = stripIndexParam(url);
        if (targetRoutes) {
            url.searchParams.set("_routes", targetRoutes.join(","));
        }
    }
    let res = await fetch(url, await createRequestInit(request));
    if (res.status >= 400 && !res.headers.has("X-Remix-Response")) {
        throw new ErrorResponseImpl(res.status, res.statusText, await res.text());
    }
    if (res.status === 204 && res.headers.has("X-Remix-Redirect")) {
        return {
            status: SINGLE_FETCH_REDIRECT_STATUS,
            data: {
                redirect: {
                    redirect: res.headers.get("X-Remix-Redirect"),
                    status: Number(res.headers.get("X-Remix-Status") || "302"),
                    revalidate: res.headers.get("X-Remix-Revalidate") === "true",
                    reload: res.headers.get("X-Remix-Reload-Document") === "true",
                    replace: res.headers.get("X-Remix-Replace") === "true"
                }
            }
        };
    }
    if (NO_BODY_STATUS_CODES.has(res.status)) {
        let routes = {};
        if (targetRoutes && request.method !== "GET") {
            routes[targetRoutes[0]] = {
                data: void 0
            };
        }
        return {
            status: res.status,
            data: {
                routes
            }
        };
    }
    invariant2(res.body, "No response body to decode");
    try {
        let decoded = await decodeViaTurboStream(res.body, window);
        let data2;
        if (request.method === "GET") {
            let typed = decoded.value;
            if (SingleFetchRedirectSymbol in typed) {
                data2 = {
                    redirect: typed[SingleFetchRedirectSymbol]
                };
            } else {
                data2 = {
                    routes: typed
                };
            }
        } else {
            let typed = decoded.value;
            let routeId = targetRoutes?.[0];
            invariant2(routeId, "No routeId found for single fetch call decoding");
            if ("redirect" in typed) {
                data2 = {
                    redirect: typed
                };
            } else {
                data2 = {
                    routes: {
                        [routeId]: typed
                    }
                };
            }
        }
        return {
            status: res.status,
            data: data2
        };
    } catch (e) {
        throw new Error("Unable to decode turbo-stream response");
    }
}
function decodeViaTurboStream(body, global) {
    return decode(body, {
        plugins: [
            (type, ...rest)=>{
                if (type === "SanitizedError") {
                    let [name, message, stack] = rest;
                    let Constructor = Error;
                    if (name && name in global && typeof global[name] === "function") {
                        Constructor = global[name];
                    }
                    let error = new Constructor(message);
                    error.stack = stack;
                    return {
                        value: error
                    };
                }
                if (type === "ErrorResponse") {
                    let [data2, status, statusText] = rest;
                    return {
                        value: new ErrorResponseImpl(status, statusText, data2)
                    };
                }
                if (type === "SingleFetchRedirect") {
                    return {
                        value: {
                            [SingleFetchRedirectSymbol]: rest[0]
                        }
                    };
                }
                if (type === "SingleFetchClassInstance") {
                    return {
                        value: rest[0]
                    };
                }
                if (type === "SingleFetchFallback") {
                    return {
                        value: void 0
                    };
                }
            }
        ]
    });
}
function unwrapSingleFetchResult(result, routeId) {
    if ("redirect" in result) {
        let { redirect: location, revalidate, reload, replace: replace2, status } = result.redirect;
        throw redirect(location, {
            status,
            headers: {
                // Three R's of redirecting (lol Veep)
                ...revalidate ? {
                    "X-Remix-Revalidate": "yes"
                } : null,
                ...reload ? {
                    "X-Remix-Reload-Document": "yes"
                } : null,
                ...replace2 ? {
                    "X-Remix-Replace": "yes"
                } : null
            }
        });
    }
    let routeResult = result.routes[routeId];
    if (routeResult == null) {
        throw new SingleFetchNoResultError(`No result found for routeId "${routeId}"`);
    } else if ("error" in routeResult) {
        throw routeResult.error;
    } else if ("data" in routeResult) {
        return routeResult.data;
    } else {
        throw new Error(`Invalid response found for routeId "${routeId}"`);
    }
}
function createDeferred2() {
    let resolve;
    let reject;
    let promise = new Promise((res, rej)=>{
        resolve = async (val)=>{
            res(val);
            try {
                await promise;
            } catch (e) {}
        };
        reject = async (error)=>{
            rej(error);
            try {
                await promise;
            } catch (e) {}
        };
    });
    return {
        promise,
        //@ts-ignore
        resolve,
        //@ts-ignore
        reject
    };
}
;
;
// lib/dom/ssr/routeModules.ts
async function loadRouteModule(route, routeModulesCache) {
    if (route.id in routeModulesCache) {
        return routeModulesCache[route.id];
    }
    try {
        let routeModule = await import(/* @vite-ignore */ /* webpackIgnore: true */ route.module);
        routeModulesCache[route.id] = routeModule;
        return routeModule;
    } catch (error) {
        console.error(`Error loading route module \`${route.module}\`, reloading page...`);
        console.error(error);
        if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && // @ts-expect-error
        __TURBOPACK__import$2e$meta__.hot) {
            throw error;
        }
        window.location.reload();
        return new Promise(()=>{});
    }
}
// lib/dom/ssr/links.ts
function getKeyedLinksForMatches(matches, routeModules, manifest) {
    let descriptors = matches.map((match)=>{
        let module = routeModules[match.route.id];
        let route = manifest.routes[match.route.id];
        return [
            route && route.css ? route.css.map((href)=>({
                    rel: "stylesheet",
                    href
                })) : [],
            module?.links?.() || []
        ];
    }).flat(2);
    let preloads = getModuleLinkHrefs(matches, manifest);
    return dedupeLinkDescriptors(descriptors, preloads);
}
function getRouteCssDescriptors(route) {
    if (!route.css) return [];
    return route.css.map((href)=>({
            rel: "stylesheet",
            href
        }));
}
async function prefetchRouteCss(route) {
    if (!route.css) return;
    let descriptors = getRouteCssDescriptors(route);
    await Promise.all(descriptors.map(prefetchStyleLink));
}
async function prefetchStyleLinks(route, routeModule) {
    if (!route.css && !routeModule.links || !isPreloadSupported()) return;
    let descriptors = [];
    if (route.css) {
        descriptors.push(...getRouteCssDescriptors(route));
    }
    if (routeModule.links) {
        descriptors.push(...routeModule.links());
    }
    if (descriptors.length === 0) return;
    let styleLinks = [];
    for (let descriptor of descriptors){
        if (!isPageLinkDescriptor(descriptor) && descriptor.rel === "stylesheet") {
            styleLinks.push({
                ...descriptor,
                rel: "preload",
                as: "style"
            });
        }
    }
    await Promise.all(styleLinks.map(prefetchStyleLink));
}
async function prefetchStyleLink(descriptor) {
    return new Promise((resolve)=>{
        if (descriptor.media && !window.matchMedia(descriptor.media).matches || document.querySelector(`link[rel="stylesheet"][href="${descriptor.href}"]`)) {
            return resolve();
        }
        let link = document.createElement("link");
        Object.assign(link, descriptor);
        function removeLink() {
            if (document.head.contains(link)) {
                document.head.removeChild(link);
            }
        }
        link.onload = ()=>{
            removeLink();
            resolve();
        };
        link.onerror = ()=>{
            removeLink();
            resolve();
        };
        document.head.appendChild(link);
    });
}
function isPageLinkDescriptor(object) {
    return object != null && typeof object.page === "string";
}
function isHtmlLinkDescriptor(object) {
    if (object == null) {
        return false;
    }
    if (object.href == null) {
        return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
    }
    return typeof object.rel === "string" && typeof object.href === "string";
}
async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
    let links = await Promise.all(matches.map(async (match)=>{
        let route = manifest.routes[match.route.id];
        if (route) {
            let mod = await loadRouteModule(route, routeModules);
            return mod.links ? mod.links() : [];
        }
        return [];
    }));
    return dedupeLinkDescriptors(links.flat(1).filter(isHtmlLinkDescriptor).filter((link)=>link.rel === "stylesheet" || link.rel === "preload").map((link)=>link.rel === "stylesheet" ? {
            ...link,
            rel: "prefetch",
            as: "style"
        } : {
            ...link,
            rel: "prefetch"
        }));
}
function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location, mode) {
    let isNew = (match, index)=>{
        if (!currentMatches[index]) return true;
        return match.route.id !== currentMatches[index].route.id;
    };
    let matchPathChanged = (match, index)=>{
        return(// param change, /users/123 -> /users/456
        currentMatches[index].pathname !== match.pathname || // splat param changed, which is not present in match.path
        // e.g. /files/images/avatar.jpg -> files/finances.xls
        currentMatches[index].route.path?.endsWith("*") && currentMatches[index].params["*"] !== match.params["*"]);
    };
    if (mode === "assets") {
        return nextMatches.filter((match, index)=>isNew(match, index) || matchPathChanged(match, index));
    }
    if (mode === "data") {
        return nextMatches.filter((match, index)=>{
            let manifestRoute = manifest.routes[match.route.id];
            if (!manifestRoute || !manifestRoute.hasLoader) {
                return false;
            }
            if (isNew(match, index) || matchPathChanged(match, index)) {
                return true;
            }
            if (match.route.shouldRevalidate) {
                let routeChoice = match.route.shouldRevalidate({
                    currentUrl: new URL(location.pathname + location.search + location.hash, window.origin),
                    currentParams: currentMatches[0]?.params || {},
                    nextUrl: new URL(page, window.origin),
                    nextParams: match.params,
                    defaultShouldRevalidate: true
                });
                if (typeof routeChoice === "boolean") {
                    return routeChoice;
                }
            }
            return true;
        });
    }
    return [];
}
function getModuleLinkHrefs(matches, manifest, { includeHydrateFallback } = {}) {
    return dedupeHrefs(matches.map((match)=>{
        let route = manifest.routes[match.route.id];
        if (!route) return [];
        let hrefs = [
            route.module
        ];
        if (route.clientActionModule) {
            hrefs = hrefs.concat(route.clientActionModule);
        }
        if (route.clientLoaderModule) {
            hrefs = hrefs.concat(route.clientLoaderModule);
        }
        if (includeHydrateFallback && route.hydrateFallbackModule) {
            hrefs = hrefs.concat(route.hydrateFallbackModule);
        }
        if (route.imports) {
            hrefs = hrefs.concat(route.imports);
        }
        return hrefs;
    }).flat(1));
}
function dedupeHrefs(hrefs) {
    return [
        ...new Set(hrefs)
    ];
}
function sortKeys(obj) {
    let sorted = {};
    let keys = Object.keys(obj).sort();
    for (let key of keys){
        sorted[key] = obj[key];
    }
    return sorted;
}
function dedupeLinkDescriptors(descriptors, preloads) {
    let set = /* @__PURE__ */ new Set();
    let preloadsSet = new Set(preloads);
    return descriptors.reduce((deduped, descriptor)=>{
        let alreadyModulePreload = preloads && !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
        if (alreadyModulePreload) {
            return deduped;
        }
        let key = JSON.stringify(sortKeys(descriptor));
        if (!set.has(key)) {
            set.add(key);
            deduped.push({
                key,
                link: descriptor
            });
        }
        return deduped;
    }, []);
}
var _isPreloadSupported;
function isPreloadSupported() {
    if (_isPreloadSupported !== void 0) {
        return _isPreloadSupported;
    }
    let el = document.createElement("link");
    _isPreloadSupported = el.relList.supports("preload");
    el = null;
    return _isPreloadSupported;
}
;
;
;
function RemixRootDefaultHydrateFallback() {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](BoundaryShell, {
        title: "Loading...",
        renderScripts: true
    }, ("TURBOPACK compile-time truthy", 1) ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("script", {
        dangerouslySetInnerHTML: {
            __html: `
              console.log(
                "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://reactrouter.com/start/framework/route-module#hydratefallback " +
                "for more information."
              );
            `
        }
    }) : "TURBOPACK unreachable");
}
// lib/dom/ssr/routes.tsx
function groupRoutesByParentId(manifest) {
    let routes = {};
    Object.values(manifest).forEach((route)=>{
        if (route) {
            let parentId = route.parentId || "";
            if (!routes[parentId]) {
                routes[parentId] = [];
            }
            routes[parentId].push(route);
        }
    });
    return routes;
}
function getRouteComponents(route, routeModule, isSpaMode) {
    let Component4 = getRouteModuleComponent(routeModule);
    let HydrateFallback = routeModule.HydrateFallback && (!isSpaMode || route.id === "root") ? routeModule.HydrateFallback : route.id === "root" ? RemixRootDefaultHydrateFallback : void 0;
    let ErrorBoundary = routeModule.ErrorBoundary ? routeModule.ErrorBoundary : route.id === "root" ? ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](RemixRootDefaultErrorBoundary, {
            error: useRouteError()
        }) : void 0;
    if (route.id === "root" && routeModule.Layout) {
        return {
            ...Component4 ? {
                element: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](routeModule.Layout, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Component4, null))
            } : {
                Component: Component4
            },
            ...ErrorBoundary ? {
                errorElement: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](routeModule.Layout, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](ErrorBoundary, null))
            } : {
                ErrorBoundary
            },
            ...HydrateFallback ? {
                hydrateFallbackElement: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](routeModule.Layout, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](HydrateFallback, null))
            } : {
                HydrateFallback
            }
        };
    }
    return {
        Component: Component4,
        ErrorBoundary,
        HydrateFallback
    };
}
function createServerRoutes(manifest, routeModules, future, isSpaMode, parentId = "", routesByParentId = groupRoutesByParentId(manifest), spaModeLazyPromise = Promise.resolve({
    Component: ()=>null
})) {
    return (routesByParentId[parentId] || []).map((route)=>{
        let routeModule = routeModules[route.id];
        invariant2(routeModule, "No `routeModule` available to create server routes");
        let dataRoute = {
            ...getRouteComponents(route, routeModule, isSpaMode),
            caseSensitive: route.caseSensitive,
            id: route.id,
            index: route.index,
            path: route.path,
            handle: routeModule.handle,
            // For SPA Mode, all routes are lazy except root.  However we tell the
            // router root is also lazy here too since we don't need a full
            // implementation - we just need a `lazy` prop to tell the RR rendering
            // where to stop which is always at the root route in SPA mode
            lazy: isSpaMode ? ()=>spaModeLazyPromise : void 0,
            // For partial hydration rendering, we need to indicate when the route
            // has a loader/clientLoader, but it won't ever be called during the static
            // render, so just give it a no-op function so we can render down to the
            // proper fallback
            loader: route.hasLoader || route.hasClientLoader ? ()=>null : void 0
        };
        let children = createServerRoutes(manifest, routeModules, future, isSpaMode, route.id, routesByParentId, spaModeLazyPromise);
        if (children.length > 0) dataRoute.children = children;
        return dataRoute;
    });
}
function createClientRoutesWithHMRRevalidationOptOut(needsRevalidation, manifest, routeModulesCache, initialState, ssr, isSpaMode) {
    return createClientRoutes(manifest, routeModulesCache, initialState, ssr, isSpaMode, "", groupRoutesByParentId(manifest), needsRevalidation);
}
function preventInvalidServerHandlerCall(type, route) {
    if (type === "loader" && !route.hasLoader || type === "action" && !route.hasAction) {
        let fn = type === "action" ? "serverAction()" : "serverLoader()";
        let msg = `You are trying to call ${fn} on a route that does not have a server ${type} (routeId: "${route.id}")`;
        console.error(msg);
        throw new ErrorResponseImpl(400, "Bad Request", new Error(msg), true);
    }
}
function noActionDefinedError(type, routeId) {
    let article = type === "clientAction" ? "a" : "an";
    let msg = `Route "${routeId}" does not have ${article} ${type}, but you are trying to submit to it. To fix this, please add ${article} \`${type}\` function to the route`;
    console.error(msg);
    throw new ErrorResponseImpl(405, "Method Not Allowed", new Error(msg), true);
}
function createClientRoutes(manifest, routeModulesCache, initialState, ssr, isSpaMode, parentId = "", routesByParentId = groupRoutesByParentId(manifest), needsRevalidation) {
    return (routesByParentId[parentId] || []).map((route)=>{
        let routeModule = routeModulesCache[route.id];
        function fetchServerHandler(singleFetch) {
            invariant2(typeof singleFetch === "function", "No single fetch function available for route handler");
            return singleFetch();
        }
        function fetchServerLoader(singleFetch) {
            if (!route.hasLoader) return Promise.resolve(null);
            return fetchServerHandler(singleFetch);
        }
        function fetchServerAction(singleFetch) {
            if (!route.hasAction) {
                throw noActionDefinedError("action", route.id);
            }
            return fetchServerHandler(singleFetch);
        }
        function prefetchModule(modulePath) {
            import(/* @vite-ignore */ /* webpackIgnore: true */ modulePath);
        }
        function prefetchRouteModuleChunks(route2) {
            if (route2.clientActionModule) {
                prefetchModule(route2.clientActionModule);
            }
            if (route2.clientLoaderModule) {
                prefetchModule(route2.clientLoaderModule);
            }
        }
        async function prefetchStylesAndCallHandler(handler) {
            let cachedModule = routeModulesCache[route.id];
            let linkPrefetchPromise = cachedModule ? prefetchStyleLinks(route, cachedModule) : Promise.resolve();
            try {
                return handler();
            } finally{
                await linkPrefetchPromise;
            }
        }
        let dataRoute = {
            id: route.id,
            index: route.index,
            path: route.path
        };
        if (routeModule) {
            Object.assign(dataRoute, {
                ...dataRoute,
                ...getRouteComponents(route, routeModule, isSpaMode),
                middleware: routeModule.clientMiddleware,
                handle: routeModule.handle,
                shouldRevalidate: getShouldRevalidateFunction(dataRoute.path, routeModule, route, ssr, needsRevalidation)
            });
            let hasInitialData = initialState && initialState.loaderData && route.id in initialState.loaderData;
            let initialData = hasInitialData ? initialState?.loaderData?.[route.id] : void 0;
            let hasInitialError = initialState && initialState.errors && route.id in initialState.errors;
            let initialError = hasInitialError ? initialState?.errors?.[route.id] : void 0;
            let isHydrationRequest = needsRevalidation == null && (routeModule.clientLoader?.hydrate === true || !route.hasLoader);
            dataRoute.loader = async ({ request, params, context, unstable_pattern }, singleFetch)=>{
                try {
                    let result = await prefetchStylesAndCallHandler(async ()=>{
                        invariant2(routeModule, "No `routeModule` available for critical-route loader");
                        if (!routeModule.clientLoader) {
                            return fetchServerLoader(singleFetch);
                        }
                        return routeModule.clientLoader({
                            request,
                            params,
                            context,
                            unstable_pattern,
                            async serverLoader () {
                                preventInvalidServerHandlerCall("loader", route);
                                if (isHydrationRequest) {
                                    if (hasInitialData) {
                                        return initialData;
                                    }
                                    if (hasInitialError) {
                                        throw initialError;
                                    }
                                }
                                return fetchServerLoader(singleFetch);
                            }
                        });
                    });
                    return result;
                } finally{
                    isHydrationRequest = false;
                }
            };
            dataRoute.loader.hydrate = shouldHydrateRouteLoader(route.id, routeModule.clientLoader, route.hasLoader, isSpaMode);
            dataRoute.action = ({ request, params, context, unstable_pattern }, singleFetch)=>{
                return prefetchStylesAndCallHandler(async ()=>{
                    invariant2(routeModule, "No `routeModule` available for critical-route action");
                    if (!routeModule.clientAction) {
                        if (isSpaMode) {
                            throw noActionDefinedError("clientAction", route.id);
                        }
                        return fetchServerAction(singleFetch);
                    }
                    return routeModule.clientAction({
                        request,
                        params,
                        context,
                        unstable_pattern,
                        async serverAction () {
                            preventInvalidServerHandlerCall("action", route);
                            return fetchServerAction(singleFetch);
                        }
                    });
                });
            };
        } else {
            if (!route.hasClientLoader) {
                dataRoute.loader = (_, singleFetch)=>prefetchStylesAndCallHandler(()=>{
                        return fetchServerLoader(singleFetch);
                    });
            }
            if (!route.hasClientAction) {
                dataRoute.action = (_, singleFetch)=>prefetchStylesAndCallHandler(()=>{
                        if (isSpaMode) {
                            throw noActionDefinedError("clientAction", route.id);
                        }
                        return fetchServerAction(singleFetch);
                    });
            }
            let lazyRoutePromise;
            async function getLazyRoute() {
                if (lazyRoutePromise) {
                    return await lazyRoutePromise;
                }
                lazyRoutePromise = (async ()=>{
                    if (route.clientLoaderModule || route.clientActionModule) {
                        await new Promise((resolve)=>setTimeout(resolve, 0));
                    }
                    let routeModulePromise = loadRouteModuleWithBlockingLinks(route, routeModulesCache);
                    prefetchRouteModuleChunks(route);
                    return await routeModulePromise;
                })();
                return await lazyRoutePromise;
            }
            dataRoute.lazy = {
                loader: route.hasClientLoader ? async ()=>{
                    let { clientLoader } = route.clientLoaderModule ? await import(/* @vite-ignore */ /* webpackIgnore: true */ route.clientLoaderModule) : await getLazyRoute();
                    invariant2(clientLoader, "No `clientLoader` export found");
                    return (args, singleFetch)=>clientLoader({
                            ...args,
                            async serverLoader () {
                                preventInvalidServerHandlerCall("loader", route);
                                return fetchServerLoader(singleFetch);
                            }
                        });
                } : void 0,
                action: route.hasClientAction ? async ()=>{
                    let clientActionPromise = route.clientActionModule ? import(/* @vite-ignore */ /* webpackIgnore: true */ route.clientActionModule) : getLazyRoute();
                    prefetchRouteModuleChunks(route);
                    let { clientAction } = await clientActionPromise;
                    invariant2(clientAction, "No `clientAction` export found");
                    return (args, singleFetch)=>clientAction({
                            ...args,
                            async serverAction () {
                                preventInvalidServerHandlerCall("action", route);
                                return fetchServerAction(singleFetch);
                            }
                        });
                } : void 0,
                middleware: route.hasClientMiddleware ? async ()=>{
                    let { clientMiddleware } = route.clientMiddlewareModule ? await import(/* @vite-ignore */ /* webpackIgnore: true */ route.clientMiddlewareModule) : await getLazyRoute();
                    invariant2(clientMiddleware, "No `clientMiddleware` export found");
                    return clientMiddleware;
                } : void 0,
                shouldRevalidate: async ()=>{
                    let lazyRoute = await getLazyRoute();
                    return getShouldRevalidateFunction(dataRoute.path, lazyRoute, route, ssr, needsRevalidation);
                },
                handle: async ()=>(await getLazyRoute()).handle,
                // No need to wrap these in layout since the root route is never
                // loaded via route.lazy()
                Component: async ()=>(await getLazyRoute()).Component,
                ErrorBoundary: route.hasErrorBoundary ? async ()=>(await getLazyRoute()).ErrorBoundary : void 0
            };
        }
        let children = createClientRoutes(manifest, routeModulesCache, initialState, ssr, isSpaMode, route.id, routesByParentId, needsRevalidation);
        if (children.length > 0) dataRoute.children = children;
        return dataRoute;
    });
}
function getShouldRevalidateFunction(path, route, manifestRoute, ssr, needsRevalidation) {
    if (needsRevalidation) {
        return wrapShouldRevalidateForHdr(manifestRoute.id, route.shouldRevalidate, needsRevalidation);
    }
    if (!ssr && manifestRoute.hasLoader && !manifestRoute.hasClientLoader) {
        let myParams = path ? compilePath(path)[1].map((p)=>p.paramName) : [];
        const didParamsChange = (opts)=>myParams.some((p)=>opts.currentParams[p] !== opts.nextParams[p]);
        if (route.shouldRevalidate) {
            let fn = route.shouldRevalidate;
            return (opts)=>fn({
                    ...opts,
                    defaultShouldRevalidate: didParamsChange(opts)
                });
        } else {
            return (opts)=>didParamsChange(opts);
        }
    }
    if (ssr && route.shouldRevalidate) {
        let fn = route.shouldRevalidate;
        return (opts)=>fn({
                ...opts,
                defaultShouldRevalidate: true
            });
    }
    return route.shouldRevalidate;
}
function wrapShouldRevalidateForHdr(routeId, routeShouldRevalidate, needsRevalidation) {
    let handledRevalidation = false;
    return (arg)=>{
        if (!handledRevalidation) {
            handledRevalidation = true;
            return needsRevalidation.has(routeId);
        }
        return routeShouldRevalidate ? routeShouldRevalidate(arg) : arg.defaultShouldRevalidate;
    };
}
async function loadRouteModuleWithBlockingLinks(route, routeModules) {
    let routeModulePromise = loadRouteModule(route, routeModules);
    let prefetchRouteCssPromise = prefetchRouteCss(route);
    let routeModule = await routeModulePromise;
    await Promise.all([
        prefetchRouteCssPromise,
        prefetchStyleLinks(route, routeModule)
    ]);
    return {
        Component: getRouteModuleComponent(routeModule),
        ErrorBoundary: routeModule.ErrorBoundary,
        clientMiddleware: routeModule.clientMiddleware,
        clientAction: routeModule.clientAction,
        clientLoader: routeModule.clientLoader,
        handle: routeModule.handle,
        links: routeModule.links,
        meta: routeModule.meta,
        shouldRevalidate: routeModule.shouldRevalidate
    };
}
function getRouteModuleComponent(routeModule) {
    if (routeModule.default == null) return void 0;
    let isEmptyObject = typeof routeModule.default === "object" && Object.keys(routeModule.default).length === 0;
    if (!isEmptyObject) {
        return routeModule.default;
    }
}
function shouldHydrateRouteLoader(routeId, clientLoader, hasLoader, isSpaMode) {
    return isSpaMode && routeId !== "root" || clientLoader != null && (clientLoader.hydrate === true || hasLoader !== true);
}
// lib/dom/ssr/fog-of-war.ts
var nextPaths = /* @__PURE__ */ new Set();
var discoveredPathsMaxSize = 1e3;
var discoveredPaths = /* @__PURE__ */ new Set();
var URL_LIMIT = 7680;
function isFogOfWarEnabled(routeDiscovery, ssr) {
    return routeDiscovery.mode === "lazy" && ssr === true;
}
function getPartialManifest({ sri, ...manifest }, router) {
    let routeIds = new Set(router.state.matches.map((m)=>m.route.id));
    let segments = router.state.location.pathname.split("/").filter(Boolean);
    let paths = [
        "/"
    ];
    segments.pop();
    while(segments.length > 0){
        paths.push(`/${segments.join("/")}`);
        segments.pop();
    }
    paths.forEach((path)=>{
        let matches = matchRoutes(router.routes, path, router.basename);
        if (matches) {
            matches.forEach((m)=>routeIds.add(m.route.id));
        }
    });
    let initialRoutes = [
        ...routeIds
    ].reduce((acc, id)=>Object.assign(acc, {
            [id]: manifest.routes[id]
        }), {});
    return {
        ...manifest,
        routes: initialRoutes,
        sri: sri ? true : void 0
    };
}
function getPatchRoutesOnNavigationFunction(manifest, routeModules, ssr, routeDiscovery, isSpaMode, basename) {
    if (!isFogOfWarEnabled(routeDiscovery, ssr)) {
        return void 0;
    }
    return async ({ path, patch, signal, fetcherKey })=>{
        if (discoveredPaths.has(path)) {
            return;
        }
        await fetchAndApplyManifestPatches([
            path
        ], fetcherKey ? window.location.href : path, manifest, routeModules, ssr, isSpaMode, basename, routeDiscovery.manifestPath, patch, signal);
    };
}
function useFogOFWarDiscovery(router, manifest, routeModules, ssr, routeDiscovery, isSpaMode) {
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useFogOFWarDiscovery.useEffect": ()=>{
            if (!isFogOfWarEnabled(routeDiscovery, ssr) || // @ts-expect-error - TS doesn't know about this yet
            window.navigator?.connection?.saveData === true) {
                return;
            }
            function registerElement(el) {
                let path = el.tagName === "FORM" ? el.getAttribute("action") : el.getAttribute("href");
                if (!path) {
                    return;
                }
                let pathname = el.tagName === "A" ? el.pathname : new URL(path, window.location.origin).pathname;
                if (!discoveredPaths.has(pathname)) {
                    nextPaths.add(pathname);
                }
            }
            async function fetchPatches() {
                document.querySelectorAll("a[data-discover], form[data-discover]").forEach(registerElement);
                let lazyPaths = Array.from(nextPaths.keys()).filter({
                    "useFogOFWarDiscovery.useEffect.fetchPatches.lazyPaths": (path)=>{
                        if (discoveredPaths.has(path)) {
                            nextPaths.delete(path);
                            return false;
                        }
                        return true;
                    }
                }["useFogOFWarDiscovery.useEffect.fetchPatches.lazyPaths"]);
                if (lazyPaths.length === 0) {
                    return;
                }
                try {
                    await fetchAndApplyManifestPatches(lazyPaths, null, manifest, routeModules, ssr, isSpaMode, router.basename, routeDiscovery.manifestPath, router.patchRoutes);
                } catch (e) {
                    console.error("Failed to fetch manifest patches", e);
                }
            }
            let debouncedFetchPatches = debounce(fetchPatches, 100);
            fetchPatches();
            let observer = new MutationObserver({
                "useFogOFWarDiscovery.useEffect": ()=>debouncedFetchPatches()
            }["useFogOFWarDiscovery.useEffect"]);
            observer.observe(document.documentElement, {
                subtree: true,
                childList: true,
                attributes: true,
                attributeFilter: [
                    "data-discover",
                    "href",
                    "action"
                ]
            });
            return ({
                "useFogOFWarDiscovery.useEffect": ()=>observer.disconnect()
            })["useFogOFWarDiscovery.useEffect"];
        }
    }["useFogOFWarDiscovery.useEffect"], [
        ssr,
        isSpaMode,
        manifest,
        routeModules,
        router,
        routeDiscovery
    ]);
}
function getManifestPath(_manifestPath, basename) {
    let manifestPath = _manifestPath || "/__manifest";
    if (basename == null) {
        return manifestPath;
    }
    return `${basename}${manifestPath}`.replace(/\/+/g, "/");
}
var MANIFEST_VERSION_STORAGE_KEY = "react-router-manifest-version";
async function fetchAndApplyManifestPatches(paths, errorReloadPath, manifest, routeModules, ssr, isSpaMode, basename, manifestPath, patchRoutes, signal) {
    const searchParams = new URLSearchParams();
    searchParams.set("paths", paths.sort().join(","));
    searchParams.set("version", manifest.version);
    let url = new URL(getManifestPath(manifestPath, basename), window.location.origin);
    url.search = searchParams.toString();
    if (url.toString().length > URL_LIMIT) {
        nextPaths.clear();
        return;
    }
    let serverPatches;
    try {
        let res = await fetch(url, {
            signal
        });
        if (!res.ok) {
            throw new Error(`${res.status} ${res.statusText}`);
        } else if (res.status === 204 && res.headers.has("X-Remix-Reload-Document")) {
            if (!errorReloadPath) {
                console.warn("Detected a manifest version mismatch during eager route discovery. The next navigation/fetch to an undiscovered route will result in a new document navigation to sync up with the latest manifest.");
                return;
            }
            try {
                if (sessionStorage.getItem(MANIFEST_VERSION_STORAGE_KEY) === manifest.version) {
                    console.error("Unable to discover routes due to manifest version mismatch.");
                    return;
                }
                sessionStorage.setItem(MANIFEST_VERSION_STORAGE_KEY, manifest.version);
            } catch  {}
            window.location.href = errorReloadPath;
            console.warn("Detected manifest version mismatch, reloading...");
            await new Promise(()=>{});
        } else if (res.status >= 400) {
            throw new Error(await res.text());
        }
        try {
            sessionStorage.removeItem(MANIFEST_VERSION_STORAGE_KEY);
        } catch  {}
        serverPatches = await res.json();
    } catch (e) {
        if (signal?.aborted) return;
        throw e;
    }
    let knownRoutes = new Set(Object.keys(manifest.routes));
    let patches = Object.values(serverPatches).reduce((acc, route)=>{
        if (route && !knownRoutes.has(route.id)) {
            acc[route.id] = route;
        }
        return acc;
    }, {});
    Object.assign(manifest.routes, patches);
    paths.forEach((p)=>addToFifoQueue(p, discoveredPaths));
    let parentIds = /* @__PURE__ */ new Set();
    Object.values(patches).forEach((patch)=>{
        if (patch && (!patch.parentId || !patches[patch.parentId])) {
            parentIds.add(patch.parentId);
        }
    });
    parentIds.forEach((parentId)=>patchRoutes(parentId || null, createClientRoutes(patches, routeModules, null, ssr, isSpaMode, parentId)));
}
function addToFifoQueue(path, queue) {
    if (queue.size >= discoveredPathsMaxSize) {
        let first = queue.values().next().value;
        queue.delete(first);
    }
    queue.add(path);
}
function debounce(callback, wait) {
    let timeoutId;
    return (...args)=>{
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(()=>callback(...args), wait);
    };
}
// lib/dom/ssr/components.tsx
function useDataRouterContext2() {
    let context = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DataRouterContext);
    invariant2(context, "You must render this element inside a <DataRouterContext.Provider> element");
    return context;
}
function useDataRouterStateContext() {
    let context = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DataRouterStateContext);
    invariant2(context, "You must render this element inside a <DataRouterStateContext.Provider> element");
    return context;
}
var FrameworkContext = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](void 0);
FrameworkContext.displayName = "FrameworkContext";
function useFrameworkContext() {
    let context = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FrameworkContext);
    invariant2(context, "You must render this element inside a <HydratedRouter> element");
    return context;
}
function usePrefetchBehavior(prefetch, theirElementProps) {
    let frameworkContext = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FrameworkContext);
    let [maybePrefetch, setMaybePrefetch] = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    let [shouldPrefetch, setShouldPrefetch] = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;
    let ref = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "usePrefetchBehavior.useEffect": ()=>{
            if (prefetch === "render") {
                setShouldPrefetch(true);
            }
            if (prefetch === "viewport") {
                let callback = {
                    "usePrefetchBehavior.useEffect.callback": (entries)=>{
                        entries.forEach({
                            "usePrefetchBehavior.useEffect.callback": (entry)=>{
                                setShouldPrefetch(entry.isIntersecting);
                            }
                        }["usePrefetchBehavior.useEffect.callback"]);
                    }
                }["usePrefetchBehavior.useEffect.callback"];
                let observer = new IntersectionObserver(callback, {
                    threshold: 0.5
                });
                if (ref.current) observer.observe(ref.current);
                return ({
                    "usePrefetchBehavior.useEffect": ()=>{
                        observer.disconnect();
                    }
                })["usePrefetchBehavior.useEffect"];
            }
        }
    }["usePrefetchBehavior.useEffect"], [
        prefetch
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "usePrefetchBehavior.useEffect": ()=>{
            if (maybePrefetch) {
                let id = setTimeout({
                    "usePrefetchBehavior.useEffect.id": ()=>{
                        setShouldPrefetch(true);
                    }
                }["usePrefetchBehavior.useEffect.id"], 100);
                return ({
                    "usePrefetchBehavior.useEffect": ()=>{
                        clearTimeout(id);
                    }
                })["usePrefetchBehavior.useEffect"];
            }
        }
    }["usePrefetchBehavior.useEffect"], [
        maybePrefetch
    ]);
    let setIntent = ()=>{
        setMaybePrefetch(true);
    };
    let cancelIntent = ()=>{
        setMaybePrefetch(false);
        setShouldPrefetch(false);
    };
    if (!frameworkContext) {
        return [
            false,
            ref,
            {}
        ];
    }
    if (prefetch !== "intent") {
        return [
            shouldPrefetch,
            ref,
            {}
        ];
    }
    return [
        shouldPrefetch,
        ref,
        {
            onFocus: composeEventHandlers(onFocus, setIntent),
            onBlur: composeEventHandlers(onBlur, cancelIntent),
            onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
            onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
            onTouchStart: composeEventHandlers(onTouchStart, setIntent)
        }
    ];
}
function composeEventHandlers(theirHandler, ourHandler) {
    return (event)=>{
        theirHandler && theirHandler(event);
        if (!event.defaultPrevented) {
            ourHandler(event);
        }
    };
}
function getActiveMatches(matches, errors, isSpaMode) {
    if (isSpaMode && !isHydrated) {
        return [
            matches[0]
        ];
    }
    if (errors) {
        let errorIdx = matches.findIndex((m)=>errors[m.route.id] !== void 0);
        return matches.slice(0, errorIdx + 1);
    }
    return matches;
}
var CRITICAL_CSS_DATA_ATTRIBUTE = "data-react-router-critical-css";
function Links({ nonce }) {
    let { isSpaMode, manifest, routeModules, criticalCss } = useFrameworkContext();
    let { errors, matches: routerMatches } = useDataRouterStateContext();
    let matches = getActiveMatches(routerMatches, errors, isSpaMode);
    let keyedLinks = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Links.useMemo[keyedLinks]": ()=>getKeyedLinksForMatches(matches, routeModules, manifest)
    }["Links.useMemo[keyedLinks]"], [
        matches,
        routeModules,
        manifest
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, typeof criticalCss === "string" ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("style", {
        ...{
            [CRITICAL_CSS_DATA_ATTRIBUTE]: ""
        },
        dangerouslySetInnerHTML: {
            __html: criticalCss
        }
    }) : null, typeof criticalCss === "object" ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("link", {
        ...{
            [CRITICAL_CSS_DATA_ATTRIBUTE]: ""
        },
        rel: "stylesheet",
        href: criticalCss.href,
        nonce
    }) : null, keyedLinks.map(({ key, link })=>isPageLinkDescriptor(link) ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](PrefetchPageLinks, {
            key,
            nonce,
            ...link
        }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("link", {
            key,
            nonce,
            ...link
        })));
}
function PrefetchPageLinks({ page, ...linkProps }) {
    let { router } = useDataRouterContext2();
    let matches = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "PrefetchPageLinks.useMemo[matches]": ()=>matchRoutes(router.routes, page, router.basename)
    }["PrefetchPageLinks.useMemo[matches]"], [
        router.routes,
        page,
        router.basename
    ]);
    if (!matches) {
        return null;
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](PrefetchPageLinksImpl, {
        page,
        matches,
        ...linkProps
    });
}
function useKeyedPrefetchLinks(matches) {
    let { manifest, routeModules } = useFrameworkContext();
    let [keyedPrefetchLinks, setKeyedPrefetchLinks] = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useKeyedPrefetchLinks.useEffect": ()=>{
            let interrupted = false;
            void getKeyedPrefetchLinks(matches, manifest, routeModules).then({
                "useKeyedPrefetchLinks.useEffect": (links)=>{
                    if (!interrupted) {
                        setKeyedPrefetchLinks(links);
                    }
                }
            }["useKeyedPrefetchLinks.useEffect"]);
            return ({
                "useKeyedPrefetchLinks.useEffect": ()=>{
                    interrupted = true;
                }
            })["useKeyedPrefetchLinks.useEffect"];
        }
    }["useKeyedPrefetchLinks.useEffect"], [
        matches,
        manifest,
        routeModules
    ]);
    return keyedPrefetchLinks;
}
function PrefetchPageLinksImpl({ page, matches: nextMatches, ...linkProps }) {
    let location = useLocation();
    let { manifest, routeModules } = useFrameworkContext();
    let { basename } = useDataRouterContext2();
    let { loaderData, matches } = useDataRouterStateContext();
    let newMatchesForData = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "PrefetchPageLinksImpl.useMemo[newMatchesForData]": ()=>getNewMatchesForLinks(page, nextMatches, matches, manifest, location, "data")
    }["PrefetchPageLinksImpl.useMemo[newMatchesForData]"], [
        page,
        nextMatches,
        matches,
        manifest,
        location
    ]);
    let newMatchesForAssets = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "PrefetchPageLinksImpl.useMemo[newMatchesForAssets]": ()=>getNewMatchesForLinks(page, nextMatches, matches, manifest, location, "assets")
    }["PrefetchPageLinksImpl.useMemo[newMatchesForAssets]"], [
        page,
        nextMatches,
        matches,
        manifest,
        location
    ]);
    let dataHrefs = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "PrefetchPageLinksImpl.useMemo[dataHrefs]": ()=>{
            if (page === location.pathname + location.search + location.hash) {
                return [];
            }
            let routesParams = /* @__PURE__ */ new Set();
            let foundOptOutRoute = false;
            nextMatches.forEach({
                "PrefetchPageLinksImpl.useMemo[dataHrefs]": (m)=>{
                    let manifestRoute = manifest.routes[m.route.id];
                    if (!manifestRoute || !manifestRoute.hasLoader) {
                        return;
                    }
                    if (!newMatchesForData.some({
                        "PrefetchPageLinksImpl.useMemo[dataHrefs]": (m2)=>m2.route.id === m.route.id
                    }["PrefetchPageLinksImpl.useMemo[dataHrefs]"]) && m.route.id in loaderData && routeModules[m.route.id]?.shouldRevalidate) {
                        foundOptOutRoute = true;
                    } else if (manifestRoute.hasClientLoader) {
                        foundOptOutRoute = true;
                    } else {
                        routesParams.add(m.route.id);
                    }
                }
            }["PrefetchPageLinksImpl.useMemo[dataHrefs]"]);
            if (routesParams.size === 0) {
                return [];
            }
            let url = singleFetchUrl(page, basename, "data");
            if (foundOptOutRoute && routesParams.size > 0) {
                url.searchParams.set("_routes", nextMatches.filter({
                    "PrefetchPageLinksImpl.useMemo[dataHrefs]": (m)=>routesParams.has(m.route.id)
                }["PrefetchPageLinksImpl.useMemo[dataHrefs]"]).map({
                    "PrefetchPageLinksImpl.useMemo[dataHrefs]": (m)=>m.route.id
                }["PrefetchPageLinksImpl.useMemo[dataHrefs]"]).join(","));
            }
            return [
                url.pathname + url.search
            ];
        }
    }["PrefetchPageLinksImpl.useMemo[dataHrefs]"], [
        basename,
        loaderData,
        location,
        manifest,
        newMatchesForData,
        nextMatches,
        page,
        routeModules
    ]);
    let moduleHrefs = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "PrefetchPageLinksImpl.useMemo[moduleHrefs]": ()=>getModuleLinkHrefs(newMatchesForAssets, manifest)
    }["PrefetchPageLinksImpl.useMemo[moduleHrefs]"], [
        newMatchesForAssets,
        manifest
    ]);
    let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, dataHrefs.map((href)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("link", {
            key: href,
            rel: "prefetch",
            as: "fetch",
            href,
            ...linkProps
        })), moduleHrefs.map((href)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("link", {
            key: href,
            rel: "modulepreload",
            href,
            ...linkProps
        })), keyedPrefetchLinks.map(({ key, link })=>// these don't spread `linkProps` because they are full link descriptors
        // already with their own props
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("link", {
            key,
            nonce: linkProps.nonce,
            ...link
        })));
}
function Meta() {
    let { isSpaMode, routeModules } = useFrameworkContext();
    let { errors, matches: routerMatches, loaderData } = useDataRouterStateContext();
    let location = useLocation();
    let _matches = getActiveMatches(routerMatches, errors, isSpaMode);
    let error = null;
    if (errors) {
        error = errors[_matches[_matches.length - 1].route.id];
    }
    let meta = [];
    let leafMeta = null;
    let matches = [];
    for(let i = 0; i < _matches.length; i++){
        let _match = _matches[i];
        let routeId = _match.route.id;
        let data2 = loaderData[routeId];
        let params = _match.params;
        let routeModule = routeModules[routeId];
        let routeMeta = [];
        let match = {
            id: routeId,
            data: data2,
            loaderData: data2,
            meta: [],
            params: _match.params,
            pathname: _match.pathname,
            handle: _match.route.handle,
            error
        };
        matches[i] = match;
        if (routeModule?.meta) {
            routeMeta = typeof routeModule.meta === "function" ? routeModule.meta({
                data: data2,
                loaderData: data2,
                params,
                location,
                matches,
                error
            }) : Array.isArray(routeModule.meta) ? [
                ...routeModule.meta
            ] : routeModule.meta;
        } else if (leafMeta) {
            routeMeta = [
                ...leafMeta
            ];
        }
        routeMeta = routeMeta || [];
        if (!Array.isArray(routeMeta)) {
            throw new Error("The route at " + _match.route.path + " returns an invalid value. All route meta functions must return an array of meta objects.\n\nTo reference the meta function API, see https://remix.run/route/meta");
        }
        match.meta = routeMeta;
        matches[i] = match;
        meta = [
            ...routeMeta
        ];
        leafMeta = meta;
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, meta.flat().map((metaProps)=>{
        if (!metaProps) {
            return null;
        }
        if ("tagName" in metaProps) {
            let { tagName, ...rest } = metaProps;
            if (!isValidMetaTag(tagName)) {
                console.warn(`A meta object uses an invalid tagName: ${tagName}. Expected either 'link' or 'meta'`);
                return null;
            }
            let Comp = tagName;
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Comp, {
                key: JSON.stringify(rest),
                ...rest
            });
        }
        if ("title" in metaProps) {
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("title", {
                key: "title"
            }, String(metaProps.title));
        }
        if ("charset" in metaProps) {
            metaProps.charSet ?? (metaProps.charSet = metaProps.charset);
            delete metaProps.charset;
        }
        if ("charSet" in metaProps && metaProps.charSet != null) {
            return typeof metaProps.charSet === "string" ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("meta", {
                key: "charSet",
                charSet: metaProps.charSet
            }) : null;
        }
        if ("script:ld+json" in metaProps) {
            try {
                let json = JSON.stringify(metaProps["script:ld+json"]);
                return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("script", {
                    key: `script:ld+json:${json}`,
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: escapeHtml(json)
                    }
                });
            } catch (err) {
                return null;
            }
        }
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("meta", {
            key: JSON.stringify(metaProps),
            ...metaProps
        });
    }));
}
function isValidMetaTag(tagName) {
    return typeof tagName === "string" && /^(meta|link)$/.test(tagName);
}
var isHydrated = false;
function setIsHydrated() {
    isHydrated = true;
}
function Scripts(scriptProps) {
    let { manifest, serverHandoffString, isSpaMode, renderMeta, routeDiscovery, ssr } = useFrameworkContext();
    let { router, static: isStatic, staticContext } = useDataRouterContext2();
    let { matches: routerMatches } = useDataRouterStateContext();
    let isRSCRouterContext = useIsRSCRouterContext();
    let enableFogOfWar = isFogOfWarEnabled(routeDiscovery, ssr);
    if (renderMeta) {
        renderMeta.didRenderScripts = true;
    }
    let matches = getActiveMatches(routerMatches, null, isSpaMode);
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Scripts.useEffect": ()=>{
            setIsHydrated();
        }
    }["Scripts.useEffect"], []);
    let initialScripts = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Scripts.useMemo[initialScripts]": ()=>{
            if (isRSCRouterContext) {
                return null;
            }
            let streamScript = "window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());";
            let contextScript = staticContext ? `window.__reactRouterContext = ${serverHandoffString};${streamScript}` : " ";
            let routeModulesScript = !isStatic ? " " : `${manifest.hmr?.runtime ? `import ${JSON.stringify(manifest.hmr.runtime)};` : ""}${!enableFogOfWar ? `import ${JSON.stringify(manifest.url)}` : ""};
${matches.map({
                "Scripts.useMemo[initialScripts]": (match, routeIndex)=>{
                    let routeVarName = `route${routeIndex}`;
                    let manifestEntry = manifest.routes[match.route.id];
                    invariant2(manifestEntry, `Route ${match.route.id} not found in manifest`);
                    let { clientActionModule, clientLoaderModule, clientMiddlewareModule, hydrateFallbackModule, module } = manifestEntry;
                    let chunks = [
                        ...clientActionModule ? [
                            {
                                module: clientActionModule,
                                varName: `${routeVarName}_clientAction`
                            }
                        ] : [],
                        ...clientLoaderModule ? [
                            {
                                module: clientLoaderModule,
                                varName: `${routeVarName}_clientLoader`
                            }
                        ] : [],
                        ...clientMiddlewareModule ? [
                            {
                                module: clientMiddlewareModule,
                                varName: `${routeVarName}_clientMiddleware`
                            }
                        ] : [],
                        ...hydrateFallbackModule ? [
                            {
                                module: hydrateFallbackModule,
                                varName: `${routeVarName}_HydrateFallback`
                            }
                        ] : [],
                        {
                            module,
                            varName: `${routeVarName}_main`
                        }
                    ];
                    if (chunks.length === 1) {
                        return `import * as ${routeVarName} from ${JSON.stringify(module)};`;
                    }
                    let chunkImportsSnippet = chunks.map({
                        "Scripts.useMemo[initialScripts].chunkImportsSnippet": (chunk)=>`import * as ${chunk.varName} from "${chunk.module}";`
                    }["Scripts.useMemo[initialScripts].chunkImportsSnippet"]).join("\n");
                    let mergedChunksSnippet = `const ${routeVarName} = {${chunks.map({
                        "Scripts.useMemo[initialScripts]": (chunk)=>`...${chunk.varName}`
                    }["Scripts.useMemo[initialScripts]"]).join(",")}};`;
                    return [
                        chunkImportsSnippet,
                        mergedChunksSnippet
                    ].join("\n");
                }
            }["Scripts.useMemo[initialScripts]"]).join("\n")}
  ${enableFogOfWar ? // Inline a minimal manifest with the SSR matches
            `window.__reactRouterManifest = ${JSON.stringify(getPartialManifest(manifest, router), null, 2)};` : ""}
  window.__reactRouterRouteModules = {${matches.map({
                "Scripts.useMemo[initialScripts]": (match, index)=>`${JSON.stringify(match.route.id)}:route${index}`
            }["Scripts.useMemo[initialScripts]"]).join(",")}};

import(${JSON.stringify(manifest.entry.module)});`;
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("script", {
                ...scriptProps,
                suppressHydrationWarning: true,
                dangerouslySetInnerHTML: {
                    __html: contextScript
                },
                type: void 0
            }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("script", {
                ...scriptProps,
                suppressHydrationWarning: true,
                dangerouslySetInnerHTML: {
                    __html: routeModulesScript
                },
                type: "module",
                async: true
            }));
        }
    }["Scripts.useMemo[initialScripts]"], []);
    let preloads = isHydrated || isRSCRouterContext ? [] : dedupe(manifest.entry.imports.concat(getModuleLinkHrefs(matches, manifest, {
        includeHydrateFallback: true
    })));
    let sri = typeof manifest.sri === "object" ? manifest.sri : {};
    warnOnce(!isRSCRouterContext, "The <Scripts /> element is a no-op when using RSC and can be safely removed.");
    return isHydrated || isRSCRouterContext ? null : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, typeof manifest.sri === "object" ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("script", {
        "rr-importmap": "",
        type: "importmap",
        suppressHydrationWarning: true,
        dangerouslySetInnerHTML: {
            __html: JSON.stringify({
                integrity: sri
            })
        }
    }) : null, !enableFogOfWar ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("link", {
        rel: "modulepreload",
        href: manifest.url,
        crossOrigin: scriptProps.crossOrigin,
        integrity: sri[manifest.url],
        suppressHydrationWarning: true
    }) : null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("link", {
        rel: "modulepreload",
        href: manifest.entry.module,
        crossOrigin: scriptProps.crossOrigin,
        integrity: sri[manifest.entry.module],
        suppressHydrationWarning: true
    }), preloads.map((path)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("link", {
            key: path,
            rel: "modulepreload",
            href: path,
            crossOrigin: scriptProps.crossOrigin,
            integrity: sri[path],
            suppressHydrationWarning: true
        })), initialScripts);
}
function dedupe(array) {
    return [
        ...new Set(array)
    ];
}
function mergeRefs(...refs) {
    return (value)=>{
        refs.forEach((ref)=>{
            if (typeof ref === "function") {
                ref(value);
            } else if (ref != null) {
                ref.current = value;
            }
        });
    };
}
// lib/dom/ssr/errorBoundaries.tsx
var RemixErrorBoundary = class extends __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        this.state = {
            error: props.error || null,
            location: props.location
        };
    }
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    static getDerivedStateFromProps(props, state) {
        if (state.location !== props.location) {
            return {
                error: props.error || null,
                location: props.location
            };
        }
        return {
            error: props.error || state.error,
            location: state.location
        };
    }
    render() {
        if (this.state.error) {
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](RemixRootDefaultErrorBoundary, {
                error: this.state.error,
                isOutsideRemixApp: true
            });
        } else {
            return this.props.children;
        }
    }
};
function RemixRootDefaultErrorBoundary({ error, isOutsideRemixApp }) {
    console.error(error);
    let heyDeveloper = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("script", {
        dangerouslySetInnerHTML: {
            __html: `
        console.log(
          "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      `
        }
    });
    if (isRouteErrorResponse(error)) {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](BoundaryShell, {
            title: "Unhandled Thrown Response!"
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("h1", {
            style: {
                fontSize: "24px"
            }
        }, error.status, " ", error.statusText), ("TURBOPACK compile-time truthy", 1) ? heyDeveloper : "TURBOPACK unreachable");
    }
    let errorInstance;
    if (error instanceof Error) {
        errorInstance = error;
    } else {
        let errorString = error == null ? "Unknown Error" : typeof error === "object" && "toString" in error ? error.toString() : JSON.stringify(error);
        errorInstance = new Error(errorString);
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](BoundaryShell, {
        title: "Application Error!",
        isOutsideRemixApp
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("h1", {
        style: {
            fontSize: "24px"
        }
    }, "Application Error"), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("pre", {
        style: {
            padding: "2rem",
            background: "hsla(10, 50%, 50%, 0.1)",
            color: "red",
            overflow: "auto"
        }
    }, errorInstance.stack), heyDeveloper);
}
function BoundaryShell({ title, renderScripts, isOutsideRemixApp, children }) {
    let { routeModules } = useFrameworkContext();
    if (routeModules.root?.Layout && !isOutsideRemixApp) {
        return children;
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("html", {
        lang: "en"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("head", null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("meta", {
        charSet: "utf-8"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,viewport-fit=cover"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("title", null, title)), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("body", null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("main", {
        style: {
            fontFamily: "system-ui, sans-serif",
            padding: "2rem"
        }
    }, children, renderScripts ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Scripts, null) : null)));
}
;
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
try {
    if (isBrowser) {
        window.__reactRouterVersion = "7.9.6";
    }
} catch (e) {}
function createBrowserRouter(routes, opts) {
    return createRouter({
        basename: opts?.basename,
        getContext: opts?.getContext,
        future: opts?.future,
        history: createBrowserHistory({
            window: opts?.window
        }),
        hydrationData: opts?.hydrationData || parseHydrationData(),
        routes,
        mapRouteProperties,
        hydrationRouteProperties,
        dataStrategy: opts?.dataStrategy,
        patchRoutesOnNavigation: opts?.patchRoutesOnNavigation,
        window: opts?.window,
        unstable_instrumentations: opts?.unstable_instrumentations
    }).initialize();
}
function createHashRouter(routes, opts) {
    return createRouter({
        basename: opts?.basename,
        getContext: opts?.getContext,
        future: opts?.future,
        history: createHashHistory({
            window: opts?.window
        }),
        hydrationData: opts?.hydrationData || parseHydrationData(),
        routes,
        mapRouteProperties,
        hydrationRouteProperties,
        dataStrategy: opts?.dataStrategy,
        patchRoutesOnNavigation: opts?.patchRoutesOnNavigation,
        window: opts?.window,
        unstable_instrumentations: opts?.unstable_instrumentations
    }).initialize();
}
function parseHydrationData() {
    let state = window?.__staticRouterHydrationData;
    if (state && state.errors) {
        state = {
            ...state,
            errors: deserializeErrors(state.errors)
        };
    }
    return state;
}
function deserializeErrors(errors) {
    if (!errors) return null;
    let entries = Object.entries(errors);
    let serialized = {};
    for (let [key, val] of entries){
        if (val && val.__type === "RouteErrorResponse") {
            serialized[key] = new ErrorResponseImpl(val.status, val.statusText, val.data, val.internal === true);
        } else if (val && val.__type === "Error") {
            if (val.__subType) {
                let ErrorConstructor = window[val.__subType];
                if (typeof ErrorConstructor === "function") {
                    try {
                        let error = new ErrorConstructor(val.message);
                        error.stack = "";
                        serialized[key] = error;
                    } catch (e) {}
                }
            }
            if (serialized[key] == null) {
                let error = new Error(val.message);
                error.stack = "";
                serialized[key] = error;
            }
        } else {
            serialized[key] = val;
        }
    }
    return serialized;
}
function BrowserRouter({ basename, children, window: window2 }) {
    let historyRef = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    if (historyRef.current == null) {
        historyRef.current = createBrowserHistory({
            window: window2,
            v5Compat: true
        });
    }
    let history = historyRef.current;
    let [state, setStateImpl] = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        action: history.action,
        location: history.location
    });
    let setState = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "BrowserRouter.useCallback[setState]": (newState)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"]({
                "BrowserRouter.useCallback[setState]": ()=>setStateImpl(newState)
            }["BrowserRouter.useCallback[setState]"]);
        }
    }["BrowserRouter.useCallback[setState]"], [
        setStateImpl
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "BrowserRouter.useLayoutEffect": ()=>history.listen(setState)
    }["BrowserRouter.useLayoutEffect"], [
        history,
        setState
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Router, {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history
    });
}
function HashRouter({ basename, children, window: window2 }) {
    let historyRef = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    if (historyRef.current == null) {
        historyRef.current = createHashHistory({
            window: window2,
            v5Compat: true
        });
    }
    let history = historyRef.current;
    let [state, setStateImpl] = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        action: history.action,
        location: history.location
    });
    let setState = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "HashRouter.useCallback[setState]": (newState)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"]({
                "HashRouter.useCallback[setState]": ()=>setStateImpl(newState)
            }["HashRouter.useCallback[setState]"]);
        }
    }["HashRouter.useCallback[setState]"], [
        setStateImpl
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "HashRouter.useLayoutEffect": ()=>history.listen(setState)
    }["HashRouter.useLayoutEffect"], [
        history,
        setState
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Router, {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history
    });
}
function HistoryRouter({ basename, children, history }) {
    let [state, setStateImpl] = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        action: history.action,
        location: history.location
    });
    let setState = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "HistoryRouter.useCallback[setState]": (newState)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"]({
                "HistoryRouter.useCallback[setState]": ()=>setStateImpl(newState)
            }["HistoryRouter.useCallback[setState]"]);
        }
    }["HistoryRouter.useCallback[setState]"], [
        setStateImpl
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "HistoryRouter.useLayoutEffect": ()=>history.listen(setState)
    }["HistoryRouter.useLayoutEffect"], [
        history,
        setState
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Router, {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history
    });
}
HistoryRouter.displayName = "unstable_HistoryRouter";
var ABSOLUTE_URL_REGEX2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var Link = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function LinkWithRef({ onClick, discover = "render", prefetch = "none", relative, reloadDocument, replace: replace2, state, target, to, preventScrollReset, viewTransition, ...rest }, forwardedRef) {
    let { basename } = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](NavigationContext);
    let isAbsolute = typeof to === "string" && ABSOLUTE_URL_REGEX2.test(to);
    let absoluteHref;
    let isExternal = false;
    if (typeof to === "string" && isAbsolute) {
        absoluteHref = to;
        if (isBrowser) {
            try {
                let currentUrl = new URL(window.location.href);
                let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
                let path = stripBasename(targetUrl.pathname, basename);
                if (targetUrl.origin === currentUrl.origin && path != null) {
                    to = path + targetUrl.search + targetUrl.hash;
                } else {
                    isExternal = true;
                }
            } catch (e) {
                warning(false, `<Link to="${to}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
            }
        }
    }
    let href = useHref(to, {
        relative
    });
    let [shouldPrefetch, prefetchRef, prefetchHandlers] = usePrefetchBehavior(prefetch, rest);
    let internalOnClick = useLinkClickHandler(to, {
        replace: replace2,
        state,
        target,
        preventScrollReset,
        relative,
        viewTransition
    });
    function handleClick(event) {
        if (onClick) onClick(event);
        if (!event.defaultPrevented) {
            internalOnClick(event);
        }
    }
    let link = // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("a", {
        ...rest,
        ...prefetchHandlers,
        href: absoluteHref || href,
        onClick: isExternal || reloadDocument ? onClick : handleClick,
        ref: mergeRefs(forwardedRef, prefetchRef),
        target,
        "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
    });
    return shouldPrefetch && !isAbsolute ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, link, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](PrefetchPageLinks, {
        page: href
    })) : link;
});
Link.displayName = "Link";
var NavLink = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function NavLinkWithRef({ "aria-current": ariaCurrentProp = "page", caseSensitive = false, className: classNameProp = "", end = false, style: styleProp, to, viewTransition, children, ...rest }, ref) {
    let path = useResolvedPath(to, {
        relative: rest.relative
    });
    let location = useLocation();
    let routerState = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DataRouterStateContext);
    let { navigator, basename } = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](NavigationContext);
    let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useViewTransitionState(path) && viewTransition === true;
    let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
    let locationPathname = location.pathname;
    let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
    if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
        toPathname = toPathname.toLowerCase();
    }
    if (nextLocationPathname && basename) {
        nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
    }
    const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
    let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
    let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
    let renderProps = {
        isActive,
        isPending,
        isTransitioning
    };
    let ariaCurrent = isActive ? ariaCurrentProp : void 0;
    let className;
    if (typeof classNameProp === "function") {
        className = classNameProp(renderProps);
    } else {
        className = [
            classNameProp,
            isActive ? "active" : null,
            isPending ? "pending" : null,
            isTransitioning ? "transitioning" : null
        ].filter(Boolean).join(" ");
    }
    let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Link, {
        ...rest,
        "aria-current": ariaCurrent,
        className,
        ref,
        style,
        to,
        viewTransition
    }, typeof children === "function" ? children(renderProps) : children);
});
NavLink.displayName = "NavLink";
var Form = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ discover = "render", fetcherKey, navigate, reloadDocument, replace: replace2, state, method = defaultMethod, action, onSubmit, relative, preventScrollReset, viewTransition, ...props }, forwardedRef)=>{
    let submit = useSubmit();
    let formAction = useFormAction(action, {
        relative
    });
    let formMethod = method.toLowerCase() === "get" ? "get" : "post";
    let isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX2.test(action);
    let submitHandler = (event)=>{
        onSubmit && onSubmit(event);
        if (event.defaultPrevented) return;
        event.preventDefault();
        let submitter = event.nativeEvent.submitter;
        let submitMethod = submitter?.getAttribute("formmethod") || method;
        submit(submitter || event.currentTarget, {
            fetcherKey,
            method: submitMethod,
            navigate,
            replace: replace2,
            state,
            relative,
            preventScrollReset,
            viewTransition
        });
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("form", {
        ref: forwardedRef,
        method: formMethod,
        action: formAction,
        onSubmit: reloadDocument ? onSubmit : submitHandler,
        ...props,
        "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
    });
});
Form.displayName = "Form";
function ScrollRestoration({ getKey, storageKey, ...props }) {
    let remixContext = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FrameworkContext);
    let { basename } = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](NavigationContext);
    let location = useLocation();
    let matches = useMatches();
    useScrollRestoration({
        getKey,
        storageKey
    });
    let ssrKey = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ScrollRestoration.useMemo[ssrKey]": ()=>{
            if (!remixContext || !getKey) return null;
            let userKey = getScrollRestorationKey(location, matches, basename, getKey);
            return userKey !== location.key ? userKey : null;
        }
    }["ScrollRestoration.useMemo[ssrKey]"], // Nah, we only need this the first time for the SSR render
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    if (!remixContext || remixContext.isSpaMode) {
        return null;
    }
    let restoreScroll = ((storageKey2, restoreKey)=>{
        if (!window.history.state || !window.history.state.key) {
            let key = Math.random().toString(32).slice(2);
            window.history.replaceState({
                key
            }, "");
        }
        try {
            let positions = JSON.parse(sessionStorage.getItem(storageKey2) || "{}");
            let storedY = positions[restoreKey || window.history.state.key];
            if (typeof storedY === "number") {
                window.scrollTo(0, storedY);
            }
        } catch (error) {
            console.error(error);
            sessionStorage.removeItem(storageKey2);
        }
    }).toString();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("script", {
        ...props,
        suppressHydrationWarning: true,
        dangerouslySetInnerHTML: {
            __html: `(${restoreScroll})(${JSON.stringify(storageKey || SCROLL_RESTORATION_STORAGE_KEY)}, ${JSON.stringify(ssrKey)})`
        }
    });
}
ScrollRestoration.displayName = "ScrollRestoration";
function getDataRouterConsoleError2(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function useDataRouterContext3(hookName) {
    let ctx = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DataRouterContext);
    invariant(ctx, getDataRouterConsoleError2(hookName));
    return ctx;
}
function useDataRouterState2(hookName) {
    let state = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DataRouterStateContext);
    invariant(state, getDataRouterConsoleError2(hookName));
    return state;
}
function useLinkClickHandler(to, { target, replace: replaceProp, state, preventScrollReset, relative, viewTransition } = {}) {
    let navigate = useNavigate();
    let location = useLocation();
    let path = useResolvedPath(to, {
        relative
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useLinkClickHandler.useCallback": (event)=>{
            if (shouldProcessLinkClick(event, target)) {
                event.preventDefault();
                let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
                navigate(to, {
                    replace: replace2,
                    state,
                    preventScrollReset,
                    relative,
                    viewTransition
                });
            }
        }
    }["useLinkClickHandler.useCallback"], [
        location,
        navigate,
        path,
        replaceProp,
        state,
        target,
        to,
        preventScrollReset,
        relative,
        viewTransition
    ]);
}
function useSearchParams(defaultInit) {
    warning(typeof URLSearchParams !== "undefined", `You cannot use the \`useSearchParams\` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.`);
    let defaultSearchParamsRef = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](createSearchParams(defaultInit));
    let hasSetSearchParamsRef = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    let location = useLocation();
    let searchParams = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useSearchParams.useMemo[searchParams]": ()=>// Only merge in the defaults if we haven't yet called setSearchParams.
            // Once we call that we want those to take precedence, otherwise you can't
            // remove a param with setSearchParams({}) if it has an initial value
            getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current)
    }["useSearchParams.useMemo[searchParams]"], [
        location.search
    ]);
    let navigate = useNavigate();
    let setSearchParams = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useSearchParams.useCallback[setSearchParams]": (nextInit, navigateOptions)=>{
            const newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(new URLSearchParams(searchParams)) : nextInit);
            hasSetSearchParamsRef.current = true;
            navigate("?" + newSearchParams, navigateOptions);
        }
    }["useSearchParams.useCallback[setSearchParams]"], [
        navigate,
        searchParams
    ]);
    return [
        searchParams,
        setSearchParams
    ];
}
var fetcherId = 0;
var getUniqueFetcherId = ()=>`__${String(++fetcherId)}__`;
function useSubmit() {
    let { router } = useDataRouterContext3("useSubmit" /* UseSubmit */ );
    let { basename } = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](NavigationContext);
    let currentRouteId = useRouteId();
    return __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useSubmit.useCallback": async (target, options = {})=>{
            let { action, method, encType, formData, body } = getFormSubmissionInfo(target, basename);
            if (options.navigate === false) {
                let key = options.fetcherKey || getUniqueFetcherId();
                await router.fetch(key, currentRouteId, options.action || action, {
                    preventScrollReset: options.preventScrollReset,
                    formData,
                    body,
                    formMethod: options.method || method,
                    formEncType: options.encType || encType,
                    flushSync: options.flushSync
                });
            } else {
                await router.navigate(options.action || action, {
                    preventScrollReset: options.preventScrollReset,
                    formData,
                    body,
                    formMethod: options.method || method,
                    formEncType: options.encType || encType,
                    replace: options.replace,
                    state: options.state,
                    fromRouteId: currentRouteId,
                    flushSync: options.flushSync,
                    viewTransition: options.viewTransition
                });
            }
        }
    }["useSubmit.useCallback"], [
        router,
        basename,
        currentRouteId
    ]);
}
function useFormAction(action, { relative } = {}) {
    let { basename } = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](NavigationContext);
    let routeContext = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](RouteContext);
    invariant(routeContext, "useFormAction must be used inside a RouteContext");
    let [match] = routeContext.matches.slice(-1);
    let path = {
        ...useResolvedPath(action ? action : ".", {
            relative
        })
    };
    let location = useLocation();
    if (action == null) {
        path.search = location.search;
        let params = new URLSearchParams(path.search);
        let indexValues = params.getAll("index");
        let hasNakedIndexParam = indexValues.some((v)=>v === "");
        if (hasNakedIndexParam) {
            params.delete("index");
            indexValues.filter((v)=>v).forEach((v)=>params.append("index", v));
            let qs = params.toString();
            path.search = qs ? `?${qs}` : "";
        }
    }
    if ((!action || action === ".") && match.route.index) {
        path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    }
    if (basename !== "/") {
        path.pathname = path.pathname === "/" ? basename : joinPaths([
            basename,
            path.pathname
        ]);
    }
    return createPath(path);
}
function useFetcher({ key } = {}) {
    let { router } = useDataRouterContext3("useFetcher" /* UseFetcher */ );
    let state = useDataRouterState2("useFetcher" /* UseFetcher */ );
    let fetcherData = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FetchersContext);
    let route = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](RouteContext);
    let routeId = route.matches[route.matches.length - 1]?.route.id;
    invariant(fetcherData, `useFetcher must be used inside a FetchersContext`);
    invariant(route, `useFetcher must be used inside a RouteContext`);
    invariant(routeId != null, `useFetcher can only be used on routes that contain a unique "id"`);
    let defaultKey = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]();
    let [fetcherKey, setFetcherKey] = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](key || defaultKey);
    if (key && key !== fetcherKey) {
        setFetcherKey(key);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useFetcher.useEffect": ()=>{
            router.getFetcher(fetcherKey);
            return ({
                "useFetcher.useEffect": ()=>router.deleteFetcher(fetcherKey)
            })["useFetcher.useEffect"];
        }
    }["useFetcher.useEffect"], [
        router,
        fetcherKey
    ]);
    let load = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useFetcher.useCallback[load]": async (href, opts)=>{
            invariant(routeId, "No routeId available for fetcher.load()");
            await router.fetch(fetcherKey, routeId, href, opts);
        }
    }["useFetcher.useCallback[load]"], [
        fetcherKey,
        routeId,
        router
    ]);
    let submitImpl = useSubmit();
    let submit = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useFetcher.useCallback[submit]": async (target, opts)=>{
            await submitImpl(target, {
                ...opts,
                navigate: false,
                fetcherKey
            });
        }
    }["useFetcher.useCallback[submit]"], [
        fetcherKey,
        submitImpl
    ]);
    let unstable_reset = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useFetcher.useCallback[unstable_reset]": (opts)=>router.resetFetcher(fetcherKey, opts)
    }["useFetcher.useCallback[unstable_reset]"], [
        router,
        fetcherKey
    ]);
    let FetcherForm = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFetcher.useMemo[FetcherForm]": ()=>{
            let FetcherForm2 = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]({
                "useFetcher.useMemo[FetcherForm].FetcherForm2": (props, ref)=>{
                    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Form, {
                        ...props,
                        navigate: false,
                        fetcherKey,
                        ref
                    });
                }
            }["useFetcher.useMemo[FetcherForm].FetcherForm2"]);
            FetcherForm2.displayName = "fetcher.Form";
            return FetcherForm2;
        }
    }["useFetcher.useMemo[FetcherForm]"], [
        fetcherKey
    ]);
    let fetcher = state.fetchers.get(fetcherKey) || IDLE_FETCHER;
    let data2 = fetcherData.get(fetcherKey);
    let fetcherWithComponents = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFetcher.useMemo[fetcherWithComponents]": ()=>({
                Form: FetcherForm,
                submit,
                load,
                unstable_reset,
                ...fetcher,
                data: data2
            })
    }["useFetcher.useMemo[fetcherWithComponents]"], [
        FetcherForm,
        submit,
        load,
        unstable_reset,
        fetcher,
        data2
    ]);
    return fetcherWithComponents;
}
function useFetchers() {
    let state = useDataRouterState2("useFetchers" /* UseFetchers */ );
    return Array.from(state.fetchers.entries()).map(([key, fetcher])=>({
            ...fetcher,
            key
        }));
}
var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
var savedScrollPositions = {};
function getScrollRestorationKey(location, matches, basename, getKey) {
    let key = null;
    if (getKey) {
        if (basename !== "/") {
            key = getKey({
                ...location,
                pathname: stripBasename(location.pathname, basename) || location.pathname
            }, matches);
        } else {
            key = getKey(location, matches);
        }
    }
    if (key == null) {
        key = location.key;
    }
    return key;
}
function useScrollRestoration({ getKey, storageKey } = {}) {
    let { router } = useDataRouterContext3("useScrollRestoration" /* UseScrollRestoration */ );
    let { restoreScrollPosition, preventScrollReset } = useDataRouterState2("useScrollRestoration" /* UseScrollRestoration */ );
    let { basename } = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](NavigationContext);
    let location = useLocation();
    let matches = useMatches();
    let navigation = useNavigation();
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useScrollRestoration.useEffect": ()=>{
            window.history.scrollRestoration = "manual";
            return ({
                "useScrollRestoration.useEffect": ()=>{
                    window.history.scrollRestoration = "auto";
                }
            })["useScrollRestoration.useEffect"];
        }
    }["useScrollRestoration.useEffect"], []);
    usePageHide(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useScrollRestoration.usePageHide.useCallback": ()=>{
            if (navigation.state === "idle") {
                let key = getScrollRestorationKey(location, matches, basename, getKey);
                savedScrollPositions[key] = window.scrollY;
            }
            try {
                sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
            } catch (error) {
                warning(false, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${error}).`);
            }
            window.history.scrollRestoration = "auto";
        }
    }["useScrollRestoration.usePageHide.useCallback"], [
        navigation.state,
        getKey,
        basename,
        location,
        matches,
        storageKey
    ]));
    if (typeof document !== "undefined") {
        __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
            "useScrollRestoration.useLayoutEffect": ()=>{
                try {
                    let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
                    if (sessionPositions) {
                        savedScrollPositions = JSON.parse(sessionPositions);
                    }
                } catch (e) {}
            }
        }["useScrollRestoration.useLayoutEffect"], [
            storageKey
        ]);
        __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
            "useScrollRestoration.useLayoutEffect": ()=>{
                let disableScrollRestoration = router?.enableScrollRestoration(savedScrollPositions, {
                    "useScrollRestoration.useLayoutEffect": ()=>window.scrollY
                }["useScrollRestoration.useLayoutEffect"], getKey ? ({
                    "useScrollRestoration.useLayoutEffect": (location2, matches2)=>getScrollRestorationKey(location2, matches2, basename, getKey)
                })["useScrollRestoration.useLayoutEffect"] : void 0);
                return ({
                    "useScrollRestoration.useLayoutEffect": ()=>disableScrollRestoration && disableScrollRestoration()
                })["useScrollRestoration.useLayoutEffect"];
            }
        }["useScrollRestoration.useLayoutEffect"], [
            router,
            basename,
            getKey
        ]);
        __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
            "useScrollRestoration.useLayoutEffect": ()=>{
                if (restoreScrollPosition === false) {
                    return;
                }
                if (typeof restoreScrollPosition === "number") {
                    window.scrollTo(0, restoreScrollPosition);
                    return;
                }
                try {
                    if (location.hash) {
                        let el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
                        if (el) {
                            el.scrollIntoView();
                            return;
                        }
                    }
                } catch  {
                    warning(false, `"${location.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`);
                }
                if (preventScrollReset === true) {
                    return;
                }
                window.scrollTo(0, 0);
            }
        }["useScrollRestoration.useLayoutEffect"], [
            location,
            restoreScrollPosition,
            preventScrollReset
        ]);
    }
}
function useBeforeUnload(callback, options) {
    let { capture } = options || {};
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useBeforeUnload.useEffect": ()=>{
            let opts = capture != null ? {
                capture
            } : void 0;
            window.addEventListener("beforeunload", callback, opts);
            return ({
                "useBeforeUnload.useEffect": ()=>{
                    window.removeEventListener("beforeunload", callback, opts);
                }
            })["useBeforeUnload.useEffect"];
        }
    }["useBeforeUnload.useEffect"], [
        callback,
        capture
    ]);
}
function usePageHide(callback, options) {
    let { capture } = options || {};
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "usePageHide.useEffect": ()=>{
            let opts = capture != null ? {
                capture
            } : void 0;
            window.addEventListener("pagehide", callback, opts);
            return ({
                "usePageHide.useEffect": ()=>{
                    window.removeEventListener("pagehide", callback, opts);
                }
            })["usePageHide.useEffect"];
        }
    }["usePageHide.useEffect"], [
        callback,
        capture
    ]);
}
function usePrompt({ when, message }) {
    let blocker = useBlocker(when);
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "usePrompt.useEffect": ()=>{
            if (blocker.state === "blocked") {
                let proceed = window.confirm(message);
                if (proceed) {
                    setTimeout(blocker.proceed, 0);
                } else {
                    blocker.reset();
                }
            }
        }
    }["usePrompt.useEffect"], [
        blocker,
        message
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "usePrompt.useEffect": ()=>{
            if (blocker.state === "blocked" && !when) {
                blocker.reset();
            }
        }
    }["usePrompt.useEffect"], [
        blocker,
        when
    ]);
}
function useViewTransitionState(to, { relative } = {}) {
    let vtContext = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](ViewTransitionContext);
    invariant(vtContext != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let { basename } = useDataRouterContext3("useViewTransitionState" /* useViewTransitionState */ );
    let path = useResolvedPath(to, {
        relative
    });
    if (!vtContext.isTransitioning) {
        return false;
    }
    let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
    let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
    return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
}
;
function StaticRouter({ basename, children, location: locationProp = "/" }) {
    if (typeof locationProp === "string") {
        locationProp = parsePath(locationProp);
    }
    let action = "POP" /* Pop */ ;
    let location = {
        pathname: locationProp.pathname || "/",
        search: locationProp.search || "",
        hash: locationProp.hash || "",
        state: locationProp.state != null ? locationProp.state : null,
        key: locationProp.key || "default"
    };
    let staticNavigator = getStatelessNavigator();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Router, {
        basename,
        children,
        location,
        navigationType: action,
        navigator: staticNavigator,
        static: true
    });
}
function StaticRouterProvider({ context, router, hydrate: hydrate2 = true, nonce }) {
    invariant(router && context, "You must provide `router` and `context` to <StaticRouterProvider>");
    let dataRouterContext = {
        router,
        navigator: getStatelessNavigator(),
        static: true,
        staticContext: context,
        basename: context.basename || "/"
    };
    let fetchersContext = /* @__PURE__ */ new Map();
    let hydrateScript = "";
    if (hydrate2 !== false) {
        let data2 = {
            loaderData: context.loaderData,
            actionData: context.actionData,
            errors: serializeErrors(context.errors)
        };
        let json = htmlEscape(JSON.stringify(JSON.stringify(data2)));
        hydrateScript = `window.__staticRouterHydrationData = JSON.parse(${json});`;
    }
    let { state } = dataRouterContext.router;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](DataRouterContext.Provider, {
        value: dataRouterContext
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](DataRouterStateContext.Provider, {
        value: state
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](FetchersContext.Provider, {
        value: fetchersContext
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](ViewTransitionContext.Provider, {
        value: {
            isTransitioning: false
        }
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Router, {
        basename: dataRouterContext.basename,
        location: state.location,
        navigationType: state.historyAction,
        navigator: dataRouterContext.navigator,
        static: dataRouterContext.static
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](DataRoutes2, {
        routes: router.routes,
        future: router.future,
        state
    })))))), hydrateScript ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("script", {
        suppressHydrationWarning: true,
        nonce,
        dangerouslySetInnerHTML: {
            __html: hydrateScript
        }
    }) : null);
}
function DataRoutes2({ routes, future, state }) {
    return useRoutesImpl(routes, void 0, state, void 0, future);
}
function serializeErrors(errors) {
    if (!errors) return null;
    let entries = Object.entries(errors);
    let serialized = {};
    for (let [key, val] of entries){
        if (isRouteErrorResponse(val)) {
            serialized[key] = {
                ...val,
                __type: "RouteErrorResponse"
            };
        } else if (val instanceof Error) {
            serialized[key] = {
                message: val.message,
                __type: "Error",
                // If this is a subclass (i.e., ReferenceError), send up the type so we
                // can re-create the same type during hydration.
                ...val.name !== "Error" ? {
                    __subType: val.name
                } : {}
            };
        } else {
            serialized[key] = val;
        }
    }
    return serialized;
}
function getStatelessNavigator() {
    return {
        createHref,
        encodeLocation,
        push (to) {
            throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`);
        },
        replace (to) {
            throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`);
        },
        go (delta) {
            throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`);
        },
        back () {
            throw new Error(`You cannot use navigator.back() on the server because it is a stateless environment.`);
        },
        forward () {
            throw new Error(`You cannot use navigator.forward() on the server because it is a stateless environment.`);
        }
    };
}
function createStaticHandler2(routes, opts) {
    return createStaticHandler(routes, {
        ...opts,
        mapRouteProperties
    });
}
function createStaticRouter(routes, context, opts = {}) {
    let manifest = {};
    let dataRoutes = convertRoutesToDataRoutes(routes, mapRouteProperties, void 0, manifest);
    let matches = context.matches.map((match)=>{
        let route = manifest[match.route.id] || match.route;
        return {
            ...match,
            route
        };
    });
    let msg = (method)=>`You cannot use router.${method}() on the server because it is a stateless environment`;
    return {
        get basename () {
            return context.basename;
        },
        get future () {
            return {
                v8_middleware: false,
                ...opts?.future
            };
        },
        get state () {
            return {
                historyAction: "POP" /* Pop */ ,
                location: context.location,
                matches,
                loaderData: context.loaderData,
                actionData: context.actionData,
                errors: context.errors,
                initialized: true,
                navigation: IDLE_NAVIGATION,
                restoreScrollPosition: null,
                preventScrollReset: false,
                revalidation: "idle",
                fetchers: /* @__PURE__ */ new Map(),
                blockers: /* @__PURE__ */ new Map()
            };
        },
        get routes () {
            return dataRoutes;
        },
        get window () {
            return void 0;
        },
        initialize () {
            throw msg("initialize");
        },
        subscribe () {
            throw msg("subscribe");
        },
        enableScrollRestoration () {
            throw msg("enableScrollRestoration");
        },
        navigate () {
            throw msg("navigate");
        },
        fetch () {
            throw msg("fetch");
        },
        revalidate () {
            throw msg("revalidate");
        },
        createHref,
        encodeLocation,
        getFetcher () {
            return IDLE_FETCHER;
        },
        deleteFetcher () {
            throw msg("deleteFetcher");
        },
        resetFetcher () {
            throw msg("resetFetcher");
        },
        dispose () {
            throw msg("dispose");
        },
        getBlocker () {
            return IDLE_BLOCKER;
        },
        deleteBlocker () {
            throw msg("deleteBlocker");
        },
        patchRoutes () {
            throw msg("patchRoutes");
        },
        _internalFetchControllers: /* @__PURE__ */ new Map(),
        _internalSetRoutes () {
            throw msg("_internalSetRoutes");
        },
        _internalSetStateDoNotUseOrYouWillBreakYourApp () {
            throw msg("_internalSetStateDoNotUseOrYouWillBreakYourApp");
        }
    };
}
function createHref(to) {
    return typeof to === "string" ? to : createPath(to);
}
function encodeLocation(to) {
    let href = typeof to === "string" ? to : createPath(to);
    href = href.replace(/ $/, "%20");
    let encoded = ABSOLUTE_URL_REGEX3.test(href) ? new URL(href) : new URL(href, "http://localhost");
    return {
        pathname: encoded.pathname,
        search: encoded.search,
        hash: encoded.hash
    };
}
var ABSOLUTE_URL_REGEX3 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var ESCAPE_LOOKUP2 = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
};
var ESCAPE_REGEX2 = /[&><\u2028\u2029]/g;
function htmlEscape(str) {
    return str.replace(ESCAPE_REGEX2, (match)=>ESCAPE_LOOKUP2[match]);
}
;
}),
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/helpers/baseStyles.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
var styles = {
    overlay: function overlay(isOpen) {
        return {
            position: 'fixed',
            zIndex: 1000,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.3)',
            opacity: isOpen ? 1 : 0,
            MozTransform: isOpen ? '' : 'translate3d(100%, 0, 0)',
            MsTransform: isOpen ? '' : 'translate3d(100%, 0, 0)',
            OTransform: isOpen ? '' : 'translate3d(100%, 0, 0)',
            WebkitTransform: isOpen ? '' : 'translate3d(100%, 0, 0)',
            transform: isOpen ? '' : 'translate3d(100%, 0, 0)',
            transition: isOpen ? 'opacity 0.3s' : 'opacity 0.3s, transform 0s 0.3s'
        };
    },
    menuWrap: function menuWrap(isOpen, width, right) {
        return {
            position: 'fixed',
            right: right ? 0 : 'inherit',
            zIndex: 1100,
            width: width,
            height: '100%',
            MozTransform: isOpen ? '' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
            MsTransform: isOpen ? '' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
            OTransform: isOpen ? '' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
            WebkitTransform: isOpen ? '' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
            transform: isOpen ? '' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
            transition: 'all 0.5s'
        };
    },
    menu: function menu() {
        return {
            height: '100%',
            boxSizing: 'border-box',
            overflow: 'auto'
        };
    },
    itemList: function itemList() {
        return {
            height: '100%'
        };
    },
    item: function item() {
        return {
            display: 'block'
        };
    }
};
exports['default'] = styles;
module.exports = exports['default'];
}),
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/helpers/dom.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.focusOnFirstMenuItem = focusOnFirstMenuItem;
exports.focusOnLastMenuItem = focusOnLastMenuItem;
exports.focusOnCrossButton = focusOnCrossButton;
exports.focusOnMenuButton = focusOnMenuButton;
exports.focusOnMenuItem = focusOnMenuItem;
exports.focusOnNextMenuItem = focusOnNextMenuItem;
exports.focusOnPreviousMenuItem = focusOnPreviousMenuItem;
function focusOnFirstMenuItem() {
    var firstItem = Array.from(document.getElementsByClassName('bm-item')).shift();
    if (firstItem) {
        firstItem.focus();
    }
}
function focusOnLastMenuItem() {
    var lastItem = Array.from(document.getElementsByClassName('bm-item')).pop();
    if (lastItem) {
        lastItem.focus();
    }
}
function focusOnCrossButton() {
    var crossButton = document.getElementById('react-burger-cross-btn');
    if (crossButton) {
        crossButton.focus();
    }
}
function focusOnMenuButton() {
    var menuButton = document.getElementById('react-burger-menu-btn');
    if (menuButton) {
        menuButton.focus();
    }
}
function focusOnMenuItem(siblingType) {
    if (document.activeElement.className.includes('bm-item')) {
        var sibling = document.activeElement[siblingType];
        if (sibling) {
            sibling.focus();
        } else {
            focusOnCrossButton();
        }
    } else {
        if (siblingType === 'previousElementSibling') {
            focusOnLastMenuItem();
        } else {
            focusOnFirstMenuItem();
        }
    }
}
function focusOnNextMenuItem() {
    focusOnMenuItem('nextElementSibling');
}
function focusOnPreviousMenuItem() {
    focusOnMenuItem('previousElementSibling');
}
}),
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/components/BurgerIcon.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _get = function get(_x, _x2, _x3) {
    var _again = true;
    _function: while(_again){
        var object = _x, property = _x2, receiver = _x3;
        _again = false;
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);
        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
                return undefined;
            } else {
                _x = parent;
                _x2 = property;
                _x3 = receiver;
                _again = true;
                desc = parent = undefined;
                continue _function;
            }
        } else if ('value' in desc) {
            return desc.value;
        } else {
            var getter = desc.get;
            if (getter === undefined) {
                return undefined;
            }
            return getter.call(receiver);
        }
    }
};
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var _react = __turbopack_context__.r("[project]/webthethao2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _propTypes = __turbopack_context__.r("[project]/webthethao2.0/node_modules/prop-types/index.js [app-client] (ecmascript)");
var _propTypes2 = _interopRequireDefault(_propTypes);
var BurgerIcon = function(_Component) {
    _inherits(BurgerIcon, _Component);
    function BurgerIcon(props) {
        _classCallCheck(this, BurgerIcon);
        _get(Object.getPrototypeOf(BurgerIcon.prototype), 'constructor', this).call(this, props);
        this.state = {
            hover: false
        };
    }
    _createClass(BurgerIcon, [
        {
            key: 'getLineStyle',
            value: function getLineStyle(index) {
                return _extends({
                    position: 'absolute',
                    height: '20%',
                    left: 0,
                    right: 0,
                    top: 20 * (index * 2) + '%',
                    opacity: this.state.hover ? 0.6 : 1
                }, this.state.hover && this.props.styles.bmBurgerBarsHover);
            }
        },
        {
            key: 'render',
            value: function render() {
                var _this = this;
                var icon = undefined;
                var buttonStyle = {
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    height: '100%',
                    margin: 0,
                    padding: 0,
                    border: 'none',
                    fontSize: 0,
                    background: 'transparent',
                    cursor: 'pointer'
                };
                if (this.props.customIcon) {
                    var extraProps = {
                        className: ('bm-icon ' + (this.props.customIcon.props.className || '')).trim(),
                        style: _extends({
                            width: '100%',
                            height: '100%'
                        }, this.props.styles.bmIcon)
                    };
                    icon = _react2['default'].cloneElement(this.props.customIcon, extraProps);
                } else {
                    icon = _react2['default'].createElement('span', null, [
                        0,
                        1,
                        2
                    ].map(function(bar) {
                        return _react2['default'].createElement('span', {
                            key: bar,
                            className: ('bm-burger-bars ' + _this.props.barClassName + ' ' + (_this.state.hover ? 'bm-burger-bars-hover' : '')).trim(),
                            style: _extends({}, _this.getLineStyle(bar), _this.props.styles.bmBurgerBars)
                        });
                    }));
                }
                return _react2['default'].createElement('div', {
                    className: ('bm-burger-button ' + this.props.className).trim(),
                    style: _extends({
                        zIndex: 1000
                    }, this.props.styles.bmBurgerButton)
                }, _react2['default'].createElement('button', {
                    type: 'button',
                    id: 'react-burger-menu-btn',
                    onClick: this.props.onClick,
                    onMouseOver: function() {
                        _this.setState({
                            hover: true
                        });
                        if (_this.props.onIconHoverChange) {
                            _this.props.onIconHoverChange({
                                isMouseIn: true
                            });
                        }
                    },
                    onMouseOut: function() {
                        _this.setState({
                            hover: false
                        });
                        if (_this.props.onIconHoverChange) {
                            _this.props.onIconHoverChange({
                                isMouseIn: false
                            });
                        }
                    },
                    style: buttonStyle
                }, 'Open Menu'), icon);
            }
        }
    ]);
    return BurgerIcon;
}(_react.Component);
exports['default'] = BurgerIcon;
BurgerIcon.propTypes = {
    barClassName: _propTypes2['default'].string,
    customIcon: _propTypes2['default'].element,
    styles: _propTypes2['default'].object
};
BurgerIcon.defaultProps = {
    barClassName: '',
    className: '',
    styles: {}
};
module.exports = exports['default'];
}),
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/components/CrossIcon.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _get = function get(_x, _x2, _x3) {
    var _again = true;
    _function: while(_again){
        var object = _x, property = _x2, receiver = _x3;
        _again = false;
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);
        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
                return undefined;
            } else {
                _x = parent;
                _x2 = property;
                _x3 = receiver;
                _again = true;
                desc = parent = undefined;
                continue _function;
            }
        } else if ('value' in desc) {
            return desc.value;
        } else {
            var getter = desc.get;
            if (getter === undefined) {
                return undefined;
            }
            return getter.call(receiver);
        }
    }
};
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var _react = __turbopack_context__.r("[project]/webthethao2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _propTypes = __turbopack_context__.r("[project]/webthethao2.0/node_modules/prop-types/index.js [app-client] (ecmascript)");
var _propTypes2 = _interopRequireDefault(_propTypes);
var CrossIcon = function(_Component) {
    _inherits(CrossIcon, _Component);
    function CrossIcon() {
        _classCallCheck(this, CrossIcon);
        _get(Object.getPrototypeOf(CrossIcon.prototype), 'constructor', this).apply(this, arguments);
    }
    _createClass(CrossIcon, [
        {
            key: 'getCrossStyle',
            value: function getCrossStyle(type) {
                return {
                    position: 'absolute',
                    width: 3,
                    height: 14,
                    transform: type === 'before' ? 'rotate(45deg)' : 'rotate(-45deg)'
                };
            }
        },
        {
            key: 'render',
            value: function render() {
                var _this = this;
                var icon;
                var buttonWrapperStyle = {
                    position: 'absolute',
                    width: 24,
                    height: 24,
                    right: 8,
                    top: 8
                };
                var buttonStyle = {
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    height: '100%',
                    margin: 0,
                    padding: 0,
                    border: 'none',
                    fontSize: 0,
                    background: 'transparent',
                    cursor: 'pointer'
                };
                if (this.props.customIcon) {
                    var extraProps = {
                        className: ('bm-cross ' + (this.props.customIcon.props.className || '')).trim(),
                        style: _extends({
                            width: '100%',
                            height: '100%'
                        }, this.props.styles.bmCross)
                    };
                    icon = _react2['default'].cloneElement(this.props.customIcon, extraProps);
                } else {
                    icon = _react2['default'].createElement('span', {
                        style: {
                            position: 'absolute',
                            top: '6px',
                            right: '14px'
                        }
                    }, [
                        'before',
                        'after'
                    ].map(function(type, i) {
                        return _react2['default'].createElement('span', {
                            key: i,
                            className: ('bm-cross ' + _this.props.crossClassName).trim(),
                            style: _extends({}, _this.getCrossStyle(type), _this.props.styles.bmCross)
                        });
                    }));
                }
                return _react2['default'].createElement('div', {
                    className: ('bm-cross-button ' + this.props.className).trim(),
                    style: _extends({}, buttonWrapperStyle, this.props.styles.bmCrossButton)
                }, _react2['default'].createElement('button', _extends({
                    type: 'button',
                    id: 'react-burger-cross-btn',
                    onClick: this.props.onClick,
                    style: buttonStyle
                }, !this.props.isOpen && {
                    tabIndex: -1
                }), 'Close Menu'), icon);
            }
        }
    ]);
    return CrossIcon;
}(_react.Component);
exports['default'] = CrossIcon;
CrossIcon.propTypes = {
    crossClassName: _propTypes2['default'].string,
    customIcon: _propTypes2['default'].element,
    isOpen: _propTypes2['default'].bool,
    styles: _propTypes2['default'].object
};
CrossIcon.defaultProps = {
    crossClassName: '',
    className: '',
    styles: {},
    isOpen: false
};
module.exports = exports['default'];
}),
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/menuFactory.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
var _slicedToArray = function() {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i['return']) _i['return']();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    return function(arr, i) {
        if (Array.isArray(arr)) {
            return arr;
        } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
        } else {
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
        }
    };
}();
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _react = __turbopack_context__.r("[project]/webthethao2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _reactDom = __turbopack_context__.r("[project]/webthethao2.0/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var _reactDom2 = _interopRequireDefault(_reactDom);
var _propTypes = __turbopack_context__.r("[project]/webthethao2.0/node_modules/prop-types/index.js [app-client] (ecmascript)");
var _propTypes2 = _interopRequireDefault(_propTypes);
var _helpersBaseStyles = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/helpers/baseStyles.js [app-client] (ecmascript)");
var _helpersBaseStyles2 = _interopRequireDefault(_helpersBaseStyles);
var _helpersDom = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/helpers/dom.js [app-client] (ecmascript)");
var _componentsBurgerIcon = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/components/BurgerIcon.js [app-client] (ecmascript)");
var _componentsBurgerIcon2 = _interopRequireDefault(_componentsBurgerIcon);
var _componentsCrossIcon = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/components/CrossIcon.js [app-client] (ecmascript)");
var _componentsCrossIcon2 = _interopRequireDefault(_componentsCrossIcon);
exports['default'] = function(styles) {
    if (!styles) {
        throw new Error('No styles supplied');
    }
    var ARROW_DOWN = 'ArrowDown';
    var ARROW_UP = 'ArrowUp';
    var ESCAPE = 'Escape';
    var SPACE = ' ';
    var HOME = 'Home';
    var END = 'End';
    function usePrevious(value) {
        var ref = _react2['default'].useRef(value);
        _react2['default'].useEffect({
            "usePrevious.useEffect": function() {
                ref.current = value;
            }
        }["usePrevious.useEffect"]);
        return ref.current;
    }
    var Menu = function Menu(props) {
        var defaultProps = {
            bodyClassName: '',
            burgerBarClassName: '',
            burgerButtonClassName: '',
            className: '',
            crossButtonClassName: '',
            crossClassName: '',
            disableAutoFocus: false,
            disableCloseOnEsc: false,
            htmlClassName: '',
            id: '',
            itemClassName: '',
            itemListClassName: '',
            menuClassName: '',
            morphShapeClassName: '',
            noOverlay: false,
            noTransition: false,
            onStateChange: function onStateChange() {},
            outerContainerId: '',
            overlayClassName: '',
            pageWrapId: '',
            styles: {},
            width: 300,
            onIconHoverChange: function onIconHoverChange() {},
            itemListElement: 'nav'
        };
        props = _extends({}, defaultProps, props);
        var _React$useState = _react2['default'].useState(false);
        var _React$useState2 = _slicedToArray(_React$useState, 2);
        var isOpen = _React$useState2[0];
        var setIsOpen = _React$useState2[1];
        var timeoutId = _react2['default'].useRef();
        var toggleOptions = _react2['default'].useRef({});
        var prevIsOpenProp = usePrevious(props.isOpen);
        _react2['default'].useEffect({
            "Menu.useEffect": function() {
                if (props.isOpen) {
                    toggleMenu({
                        isOpen: true,
                        noStateChange: true
                    });
                }
                return function cleanup() {
                    applyWrapperStyles(false);
                    clearCurrentTimeout();
                };
            }
        }["Menu.useEffect"], []);
        _react2['default'].useEffect({
            "Menu.useEffect": function() {
                var wasToggled = typeof props.isOpen !== 'undefined' && props.isOpen !== isOpen && props.isOpen !== prevIsOpenProp;
                if (wasToggled) {
                    toggleMenu();
                    // Toggling changes SVG animation requirements, so defer these until next update
                    return;
                }
                if (styles.svg) {
                    ({
                        "Menu.useEffect": function() {
                            var morphShape = document.getElementById('bm-morph-shape');
                            var path = styles.svg.lib(morphShape).select('path');
                            if (isOpen) {
                                // Animate SVG path
                                styles.svg.animate(path);
                            } else {
                                // Reset path (timeout ensures animation happens off screen)
                                setTimeout({
                                    "Menu.useEffect": function() {
                                        path.attr('d', styles.svg.pathInitial);
                                    }
                                }["Menu.useEffect"], 300);
                            }
                        }
                    })["Menu.useEffect"]();
                }
            }
        }["Menu.useEffect"]);
        _react2['default'].useEffect({
            "Menu.useEffect": function() {
                var _toggleOptions$current = toggleOptions.current;
                var noStateChange = _toggleOptions$current.noStateChange;
                var focusOnLastItem = _toggleOptions$current.focusOnLastItem;
                if (!noStateChange) {
                    props.onStateChange({
                        isOpen: isOpen
                    });
                }
                if (!props.disableAutoFocus) {
                    // For accessibility reasons, ensures that when we toggle open,
                    // we focus the first or last menu item according to given parameter
                    if (isOpen) {
                        focusOnLastItem ? (0, _helpersDom.focusOnLastMenuItem)() : (0, _helpersDom.focusOnFirstMenuItem)();
                    } else {
                        if (document.activeElement) {
                            document.activeElement.blur();
                        } else {
                            document.body.blur(); // Needed for IE
                        }
                    }
                }
                // Timeout ensures wrappers are cleared after animation finishes
                clearCurrentTimeout();
                timeoutId.current = setTimeout({
                    "Menu.useEffect": function() {
                        timeoutId.current = null;
                        if (!isOpen) {
                            applyWrapperStyles(false);
                        }
                    }
                }["Menu.useEffect"], 500);
                // Bind keydown handlers (or custom function if supplied)
                var defaultOnKeyDown = isOpen ? onKeyDownOpen : onKeyDownClosed;
                var onKeyDown = props.customOnKeyDown || defaultOnKeyDown;
                window.addEventListener('keydown', onKeyDown);
                return function cleanup() {
                    window.removeEventListener('keydown', onKeyDown);
                };
            }
        }["Menu.useEffect"], [
            isOpen
        ]);
        function toggleMenu() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
            toggleOptions.current = options;
            applyWrapperStyles();
            // Ensures wrapper styles are applied before the menu is toggled
            setTimeout(function() {
                setIsOpen(function(open) {
                    return typeof options.isOpen !== 'undefined' ? options.isOpen : !open;
                });
            });
        }
        function open() {
            if (typeof props.onOpen === 'function') {
                props.onOpen();
            } else {
                toggleMenu();
            }
        }
        function close() {
            if (typeof props.onClose === 'function') {
                props.onClose();
            } else {
                toggleMenu();
            }
        }
        function getStyle(style, index) {
            var _props = props;
            var width = _props.width;
            var right = _props.right;
            var formattedWidth = typeof width !== 'string' ? width + 'px' : width;
            return style(isOpen, formattedWidth, right, index);
        }
        // Builds styles incrementally for a given element
        function getStyles(el, index, inline) {
            var propName = 'bm' + el.replace(el.charAt(0), el.charAt(0).toUpperCase());
            // Set base styles
            var output = _helpersBaseStyles2['default'][el] ? getStyle(_helpersBaseStyles2['default'][el]) : {};
            // Add animation-specific styles
            if (styles[el]) {
                output = _extends({}, output, getStyle(styles[el], index + 1));
            }
            // Add custom styles
            if (props.styles[propName]) {
                output = _extends({}, output, props.styles[propName]);
            }
            // Add element inline styles
            if (inline) {
                output = _extends({}, output, inline);
            }
            // Remove transition if required
            // (useful if rendering open initially)
            if (props.noTransition) {
                delete output.transition;
            }
            return output;
        }
        // Sets or unsets styles on DOM elements outside the menu component
        // This is necessary for correct page interaction with some of the menus
        // Throws and returns if the required external elements don't exist,
        // which means any external page animations won't be applied
        function handleExternalWrapper(id, wrapperStyles, set) {
            var wrapper = document.getElementById(id);
            if (!wrapper) {
                console.error("Element with ID '" + id + "' not found");
                return;
            }
            var builtStyles = getStyle(wrapperStyles);
            for(var prop in builtStyles){
                if (builtStyles.hasOwnProperty(prop)) {
                    wrapper.style[prop] = set ? builtStyles[prop] : '';
                }
            }
            // Prevent any horizontal scroll
            // Only set overflow-x as an inline style if htmlClassName or
            // bodyClassName is not passed in. Otherwise, it is up to the caller to
            // decide if they want to set the overflow style in CSS using the custom
            // class names
            var applyOverflow = function applyOverflow(el) {
                return el.style['overflow-x'] = set ? 'hidden' : '';
            };
            if (!props.htmlClassName) {
                applyOverflow(document.querySelector('html'));
            }
            if (!props.bodyClassName) {
                applyOverflow(document.querySelector('body'));
            }
        }
        // Applies component-specific styles to external wrapper elements
        function applyWrapperStyles() {
            var set = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
            var applyClass = function applyClass(el, className) {
                return el.classList[set ? 'add' : 'remove'](className);
            };
            if (props.htmlClassName) {
                applyClass(document.querySelector('html'), props.htmlClassName);
            }
            if (props.bodyClassName) {
                applyClass(document.querySelector('body'), props.bodyClassName);
            }
            if (styles.pageWrap && props.pageWrapId) {
                handleExternalWrapper(props.pageWrapId, styles.pageWrap, set);
            }
            if (styles.outerContainer && props.outerContainerId) {
                handleExternalWrapper(props.outerContainerId, styles.outerContainer, set);
            }
            var menuWrap = document.querySelector('.bm-menu-wrap');
            if (menuWrap) {
                if (set) {
                    menuWrap.removeAttribute('hidden');
                } else {
                    menuWrap.setAttribute('hidden', true);
                }
            }
        }
        // Avoids potentially attempting to update an unmounted component
        function clearCurrentTimeout() {
            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
            }
        }
        function onKeyDownOpen(e) {
            e = e || window.event;
            switch(e.key){
                case ESCAPE:
                    // Close on ESC, unless disabled
                    if (!props.disableCloseOnEsc) {
                        close();
                        (0, _helpersDom.focusOnMenuButton)();
                    }
                    break;
                case ARROW_DOWN:
                    (0, _helpersDom.focusOnNextMenuItem)();
                    break;
                case ARROW_UP:
                    (0, _helpersDom.focusOnPreviousMenuItem)();
                    break;
                case HOME:
                    (0, _helpersDom.focusOnFirstMenuItem)();
                    break;
                case END:
                    (0, _helpersDom.focusOnLastMenuItem)();
                    break;
            }
        }
        function onKeyDownClosed(e) {
            e = e || window.event;
            // Key downs came from menu button
            if (e.target === document.getElementById('react-burger-menu-btn')) {
                switch(e.key){
                    case ARROW_DOWN:
                    case SPACE:
                        // If down arrow, space or enter, open menu and focus on first menuitem
                        toggleMenu();
                        break;
                    case ARROW_UP:
                        // If arrow up, open menu and focus on last menuitem
                        toggleMenu({
                            focusOnLastItem: true
                        });
                        break;
                }
            }
        }
        function handleOverlayClick() {
            if (props.disableOverlayClick === true || typeof props.disableOverlayClick === 'function' && props.disableOverlayClick()) {
                return;
            } else {
                close();
            }
        }
        return _react2['default'].createElement('div', null, !props.noOverlay && _react2['default'].createElement('div', {
            className: ('bm-overlay ' + props.overlayClassName).trim(),
            onClick: handleOverlayClick,
            style: getStyles('overlay')
        }), props.customBurgerIcon !== false && _react2['default'].createElement('div', {
            style: getStyles('burgerIcon')
        }, _react2['default'].createElement(_componentsBurgerIcon2['default'], {
            onClick: open,
            styles: props.styles,
            customIcon: props.customBurgerIcon,
            className: props.burgerButtonClassName,
            barClassName: props.burgerBarClassName,
            onIconStateChange: props.onIconStateChange
        })), _react2['default'].createElement('div', {
            id: props.id,
            className: ('bm-menu-wrap ' + props.className).trim(),
            style: getStyles('menuWrap'),
            'aria-hidden': !isOpen
        }, styles.svg && _react2['default'].createElement('div', {
            id: 'bm-morph-shape',
            className: ('bm-morph-shape ' + props.morphShapeClassName).trim(),
            style: getStyles('morphShape')
        }, _react2['default'].createElement('svg', {
            width: '100%',
            height: '100%',
            viewBox: '0 0 100 800',
            preserveAspectRatio: 'none'
        }, _react2['default'].createElement('path', {
            d: styles.svg.pathInitial
        }))), _react2['default'].createElement('div', {
            className: ('bm-menu ' + props.menuClassName).trim(),
            style: getStyles('menu')
        }, _react2['default'].createElement(props.itemListElement, {
            className: ('bm-item-list ' + props.itemListClassName).trim(),
            style: getStyles('itemList')
        }, _react2['default'].Children.map(props.children, function(item, index) {
            if (item) {
                var classList = [
                    'bm-item',
                    props.itemClassName,
                    item.props.className
                ].filter(function(className) {
                    return !!className;
                }).join(' ');
                var extraProps = _extends({
                    key: index,
                    className: classList,
                    style: getStyles('item', index, item.props.style)
                }, !isOpen && {
                    tabIndex: -1
                });
                return _react2['default'].cloneElement(item, extraProps);
            }
        }))), props.customCrossIcon !== false && _react2['default'].createElement('div', {
            style: getStyles('closeButton')
        }, _react2['default'].createElement(_componentsCrossIcon2['default'], {
            onClick: close,
            styles: props.styles,
            customIcon: props.customCrossIcon,
            className: props.crossButtonClassName,
            crossClassName: props.crossClassName,
            isOpen: isOpen
        }))));
    };
    Menu.propTypes = {
        bodyClassName: _propTypes2['default'].string,
        burgerBarClassName: _propTypes2['default'].string,
        burgerButtonClassName: _propTypes2['default'].string,
        className: _propTypes2['default'].string,
        crossButtonClassName: _propTypes2['default'].string,
        crossClassName: _propTypes2['default'].string,
        customBurgerIcon: _propTypes2['default'].oneOfType([
            _propTypes2['default'].element,
            _propTypes2['default'].oneOf([
                false
            ])
        ]),
        customCrossIcon: _propTypes2['default'].oneOfType([
            _propTypes2['default'].element,
            _propTypes2['default'].oneOf([
                false
            ])
        ]),
        customOnKeyDown: _propTypes2['default'].func,
        disableAutoFocus: _propTypes2['default'].bool,
        disableCloseOnEsc: _propTypes2['default'].bool,
        disableOverlayClick: _propTypes2['default'].oneOfType([
            _propTypes2['default'].bool,
            _propTypes2['default'].func
        ]),
        htmlClassName: _propTypes2['default'].string,
        id: _propTypes2['default'].string,
        isOpen: _propTypes2['default'].bool,
        itemClassName: _propTypes2['default'].string,
        itemListClassName: _propTypes2['default'].string,
        itemListElement: _propTypes2['default'].oneOf([
            'div',
            'nav'
        ]),
        menuClassName: _propTypes2['default'].string,
        morphShapeClassName: _propTypes2['default'].string,
        noOverlay: _propTypes2['default'].bool,
        noTransition: _propTypes2['default'].bool,
        onClose: _propTypes2['default'].func,
        onIconHoverChange: _propTypes2['default'].func,
        onOpen: _propTypes2['default'].func,
        onStateChange: _propTypes2['default'].func,
        outerContainerId: styles && styles.outerContainer ? _propTypes2['default'].string.isRequired : _propTypes2['default'].string,
        overlayClassName: _propTypes2['default'].string,
        pageWrapId: styles && styles.pageWrap ? _propTypes2['default'].string.isRequired : _propTypes2['default'].string,
        right: _propTypes2['default'].bool,
        styles: _propTypes2['default'].object,
        width: _propTypes2['default'].oneOfType([
            _propTypes2['default'].number,
            _propTypes2['default'].string
        ])
    };
    return Menu;
};
module.exports = exports['default'];
}),
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/slide.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _menuFactory = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menuFactory.js [app-client] (ecmascript)");
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var styles = {};
exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];
}),
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/stack.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _menuFactory = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menuFactory.js [app-client] (ecmascript)");
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var styles = {
    menuWrap: function menuWrap(isOpen, width, right) {
        return {
            MozTransform: isOpen ? '' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
            MsTransform: isOpen ? '' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
            OTransform: isOpen ? '' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
            WebkitTransform: isOpen ? '' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
            transform: isOpen ? '' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
            transition: isOpen ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)' : 'transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)'
        };
    },
    item: function item(isOpen, width, right, nthChild) {
        return {
            MozTransform: isOpen ? '' : 'translate3d(0, ' + nthChild * 500 + 'px, 0)',
            MsTransform: isOpen ? '' : 'translate3d(0, ' + nthChild * 500 + 'px, 0)',
            OTransform: isOpen ? '' : 'translate3d(0, ' + nthChild * 500 + 'px, 0)',
            WebkitTransform: isOpen ? '' : 'translate3d(0, ' + nthChild * 500 + 'px, 0)',
            transform: isOpen ? '' : 'translate3d(0, ' + nthChild * 500 + 'px, 0)',
            transition: isOpen ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)' : 'transform 0s 0.2s cubic-bezier(0.7, 0, 0.3, 1)'
        };
    }
};
exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];
}),
"[project]/webthethao2.0/node_modules/eve/eve.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Copyright (c) 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ┌────────────────────────────────────────────────────────────┐ \\
// │ Eve 0.5.4 - JavaScript Events Library                      │ \\
// ├────────────────────────────────────────────────────────────┤ \\
// │ Author Dmitry Baranovskiy (http://dmitry.baranovskiy.com/) │ \\
// └────────────────────────────────────────────────────────────┘ \\
(function(glob) {
    var version = "0.5.4", has = "hasOwnProperty", separator = /[\.\/]/, comaseparator = /\s*,\s*/, wildcard = "*", numsort = function(a, b) {
        return a - b;
    }, current_event, stop, events = {
        n: {}
    }, firstDefined = function() {
        for(var i = 0, ii = this.length; i < ii; i++){
            if (typeof this[i] != "undefined") {
                return this[i];
            }
        }
    }, lastDefined = function() {
        var i = this.length;
        while(--i){
            if (typeof this[i] != "undefined") {
                return this[i];
            }
        }
    }, objtos = Object.prototype.toString, Str = String, isArray = Array.isArray || function(ar) {
        return ar instanceof Array || objtos.call(ar) == "[object Array]";
    }, /*\
     * eve
     [ method ]

     * Fires event with given `name`, given scope and other parameters.

     - name (string) name of the *event*, dot (`.`) or slash (`/`) separated
     - scope (object) context for the event handlers
     - varargs (...) the rest of arguments will be sent to event handlers

     = (object) array of returned values from the listeners. Array has two methods `.firstDefined()` and `.lastDefined()` to get first or last not `undefined` value.
    \*/ eve = function(name, scope) {
        var oldstop = stop, args = Array.prototype.slice.call(arguments, 2), listeners = eve.listeners(name), z = 0, l, indexed = [], queue = {}, out = [], ce = current_event;
        out.firstDefined = firstDefined;
        out.lastDefined = lastDefined;
        current_event = name;
        stop = 0;
        for(var i = 0, ii = listeners.length; i < ii; i++)if ("zIndex" in listeners[i]) {
            indexed.push(listeners[i].zIndex);
            if (listeners[i].zIndex < 0) {
                queue[listeners[i].zIndex] = listeners[i];
            }
        }
        indexed.sort(numsort);
        while(indexed[z] < 0){
            l = queue[indexed[z++]];
            out.push(l.apply(scope, args));
            if (stop) {
                stop = oldstop;
                return out;
            }
        }
        for(i = 0; i < ii; i++){
            l = listeners[i];
            if ("zIndex" in l) {
                if (l.zIndex == indexed[z]) {
                    out.push(l.apply(scope, args));
                    if (stop) {
                        break;
                    }
                    do {
                        z++;
                        l = queue[indexed[z]];
                        l && out.push(l.apply(scope, args));
                        if (stop) {
                            break;
                        }
                    }while (l)
                } else {
                    queue[l.zIndex] = l;
                }
            } else {
                out.push(l.apply(scope, args));
                if (stop) {
                    break;
                }
            }
        }
        stop = oldstop;
        current_event = ce;
        return out;
    };
    // Undocumented. Debug only.
    eve._events = events;
    /*\
     * eve.listeners
     [ method ]

     * Internal method which gives you array of all event handlers that will be triggered by the given `name`.

     - name (string) name of the event, dot (`.`) or slash (`/`) separated

     = (array) array of event handlers
    \*/ eve.listeners = function(name) {
        var names = isArray(name) ? name : name.split(separator), e = events, item, items, k, i, ii, j, jj, nes, es = [
            e
        ], out = [];
        for(i = 0, ii = names.length; i < ii; i++){
            nes = [];
            for(j = 0, jj = es.length; j < jj; j++){
                e = es[j].n;
                items = [
                    e[names[i]],
                    e[wildcard]
                ];
                k = 2;
                while(k--){
                    item = items[k];
                    if (item) {
                        nes.push(item);
                        out = out.concat(item.f || []);
                    }
                }
            }
            es = nes;
        }
        return out;
    };
    /*\
     * eve.separator
     [ method ]

     * If for some reasons you don’t like default separators (`.` or `/`) you can specify yours
     * here. Be aware that if you pass a string longer than one character it will be treated as
     * a list of characters.

     - separator (string) new separator. Empty string resets to default: `.` or `/`.
    \*/ eve.separator = function(sep) {
        if (sep) {
            sep = Str(sep).replace(/(?=[\.\^\]\[\-])/g, "\\");
            sep = "[" + sep + "]";
            separator = new RegExp(sep);
        } else {
            separator = /[\.\/]/;
        }
    };
    /*\
     * eve.on
     [ method ]
     **
     * Binds given event handler with a given name. You can use wildcards “`*`” for the names:
     | eve.on("*.under.*", f);
     | eve("mouse.under.floor"); // triggers f
     * Use @eve to trigger the listener.
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     - name (array) if you don’t want to use separators, you can use array of strings
     - f (function) event handler function
     **
     = (function) returned function accepts a single numeric parameter that represents z-index of the handler. It is an optional feature and only used when you need to ensure that some subset of handlers will be invoked in a given order, despite of the order of assignment.
     > Example:
     | eve.on("mouse", eatIt)(2);
     | eve.on("mouse", scream);
     | eve.on("mouse", catchIt)(1);
     * This will ensure that `catchIt` function will be called before `eatIt`.
     *
     * If you want to put your handler before non-indexed handlers, specify a negative value.
     * Note: I assume most of the time you don’t need to worry about z-index, but it’s nice to have this feature “just in case”.
    \*/ eve.on = function(name, f) {
        if (typeof f != "function") {
            return function() {};
        }
        var names = isArray(name) ? isArray(name[0]) ? name : [
            name
        ] : Str(name).split(comaseparator);
        for(var i = 0, ii = names.length; i < ii; i++){
            (function(name) {
                var names = isArray(name) ? name : Str(name).split(separator), e = events, exist;
                for(var i = 0, ii = names.length; i < ii; i++){
                    e = e.n;
                    e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = {
                        n: {}
                    });
                }
                e.f = e.f || [];
                for(i = 0, ii = e.f.length; i < ii; i++)if (e.f[i] == f) {
                    exist = true;
                    break;
                }
                !exist && e.f.push(f);
            })(names[i]);
        }
        return function(zIndex) {
            if (+zIndex == +zIndex) {
                f.zIndex = +zIndex;
            }
        };
    };
    /*\
     * eve.f
     [ method ]
     **
     * Returns function that will fire given event with optional arguments.
     * Arguments that will be passed to the result function will be also
     * concated to the list of final arguments.
     | el.onclick = eve.f("click", 1, 2);
     | eve.on("click", function (a, b, c) {
     |     console.log(a, b, c); // 1, 2, [event object]
     | });
     - event (string) event name
     - varargs (…) and any other arguments
     = (function) possible event handler function
    \*/ eve.f = function(event) {
        var attrs = [].slice.call(arguments, 1);
        return function() {
            eve.apply(null, [
                event,
                null
            ].concat(attrs).concat([].slice.call(arguments, 0)));
        };
    };
    /*\
     * eve.stop
     [ method ]
     **
     * Is used inside an event handler to stop the event, preventing any subsequent listeners from firing.
    \*/ eve.stop = function() {
        stop = 1;
    };
    /*\
     * eve.nt
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     - subname (string) #optional subname of the event
     **
     = (string) name of the event, if `subname` is not specified
     * or
     = (boolean) `true`, if current event’s name contains `subname`
    \*/ eve.nt = function(subname) {
        var cur = isArray(current_event) ? current_event.join(".") : current_event;
        if (subname) {
            return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(cur);
        }
        return cur;
    };
    /*\
     * eve.nts
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     **
     = (array) names of the event
    \*/ eve.nts = function() {
        return isArray(current_event) ? current_event : current_event.split(separator);
    };
    /*\
     * eve.off
     [ method ]
     **
     * Removes given function from the list of event listeners assigned to given name.
     * If no arguments specified all the events will be cleared.
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
    \*/ /*\
     * eve.unbind
     [ method ]
     **
     * See @eve.off
    \*/ eve.off = eve.unbind = function(name, f) {
        if (!name) {
            eve._events = events = {
                n: {}
            };
            return;
        }
        var names = isArray(name) ? isArray(name[0]) ? name : [
            name
        ] : Str(name).split(comaseparator);
        if (names.length > 1) {
            for(var i = 0, ii = names.length; i < ii; i++){
                eve.off(names[i], f);
            }
            return;
        }
        names = isArray(name) ? name : Str(name).split(separator);
        var e, key, splice, i, ii, j, jj, cur = [
            events
        ], inodes = [];
        for(i = 0, ii = names.length; i < ii; i++){
            for(j = 0; j < cur.length; j += splice.length - 2){
                splice = [
                    j,
                    1
                ];
                e = cur[j].n;
                if (names[i] != wildcard) {
                    if (e[names[i]]) {
                        splice.push(e[names[i]]);
                        inodes.unshift({
                            n: e,
                            name: names[i]
                        });
                    }
                } else {
                    for(key in e)if (e[has](key)) {
                        splice.push(e[key]);
                        inodes.unshift({
                            n: e,
                            name: key
                        });
                    }
                }
                cur.splice.apply(cur, splice);
            }
        }
        for(i = 0, ii = cur.length; i < ii; i++){
            e = cur[i];
            while(e.n){
                if (f) {
                    if (e.f) {
                        for(j = 0, jj = e.f.length; j < jj; j++)if (e.f[j] == f) {
                            e.f.splice(j, 1);
                            break;
                        }
                        !e.f.length && delete e.f;
                    }
                    for(key in e.n)if (e.n[has](key) && e.n[key].f) {
                        var funcs = e.n[key].f;
                        for(j = 0, jj = funcs.length; j < jj; j++)if (funcs[j] == f) {
                            funcs.splice(j, 1);
                            break;
                        }
                        !funcs.length && delete e.n[key].f;
                    }
                } else {
                    delete e.f;
                    for(key in e.n)if (e.n[has](key) && e.n[key].f) {
                        delete e.n[key].f;
                    }
                }
                e = e.n;
            }
        }
        // prune inner nodes in path
        prune: for(i = 0, ii = inodes.length; i < ii; i++){
            e = inodes[i];
            for(key in e.n[e.name].f){
                continue prune;
            }
            for(key in e.n[e.name].n){
                continue prune;
            }
            // is empty
            delete e.n[e.name];
        }
    };
    /*\
     * eve.once
     [ method ]
     **
     * Binds given event handler with a given name to only run once then unbind itself.
     | eve.once("login", f);
     | eve("login"); // triggers f
     | eve("login"); // no listeners
     * Use @eve to trigger the listener.
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     = (function) same return function as @eve.on
    \*/ eve.once = function(name, f) {
        var f2 = function() {
            eve.off(name, f2);
            return f.apply(this, arguments);
        };
        return eve.on(name, f2);
    };
    /*\
     * eve.version
     [ property (string) ]
     **
     * Current version of the library.
    \*/ eve.version = version;
    eve.toString = function() {
        return "You are running Eve " + version;
    };
    glob.eve = eve;
    ("TURBOPACK compile-time value", "object") != "undefined" && module.exports ? module.exports = eve : typeof define === "function" && define.amd ? ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
        return eve;
    }()) : glob.eve = eve;
})(typeof window != "undefined" ? window : /*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/webthethao2.0/node_modules/snapsvg-cjs/dist/snap.svg-cjs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

window.eve = __turbopack_context__.r("[project]/webthethao2.0/node_modules/eve/eve.js [app-client] (ecmascript)");
// Copyright (c) 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var mina = function(eve1) {
    var animations = {}, requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
        setTimeout(callback, 16, new Date().getTime());
        return true;
    }, requestID, isArray = Array.isArray || function(a) {
        return a instanceof Array || Object.prototype.toString.call(a) == "[object Array]";
    }, idgen = 0, idprefix = "M" + (+new Date).toString(36), ID = function() {
        return idprefix + (idgen++).toString(36);
    }, diff = function(a, b, A, B) {
        if (isArray(a)) {
            res = [];
            for(var i = 0, ii = a.length; i < ii; i++){
                res[i] = diff(a[i], b, A[i], B);
            }
            return res;
        }
        var dif = (A - a) / (B - b);
        return function(bb) {
            return a + dif * (bb - b);
        };
    }, timer = Date.now || function() {
        return +new Date;
    }, sta = function(val) {
        var a = this;
        if (val == null) {
            return a.s;
        }
        var ds = a.s - val;
        a.b += a.dur * ds;
        a.B += a.dur * ds;
        a.s = val;
    }, speed = function(val) {
        var a = this;
        if (val == null) {
            return a.spd;
        }
        a.spd = val;
    }, duration = function(val) {
        var a = this;
        if (val == null) {
            return a.dur;
        }
        a.s = a.s * val / a.dur;
        a.dur = val;
    }, stopit = function() {
        var a = this;
        delete animations[a.id];
        a.update();
        eve1("mina.stop." + a.id, a);
    }, pause = function() {
        var a = this;
        if (a.pdif) {
            return;
        }
        delete animations[a.id];
        a.update();
        a.pdif = a.get() - a.b;
    }, resume = function() {
        var a = this;
        if (!a.pdif) {
            return;
        }
        a.b = a.get() - a.pdif;
        delete a.pdif;
        animations[a.id] = a;
        frame();
    }, update = function() {
        var a = this, res1;
        if (isArray(a.start)) {
            res1 = [];
            for(var j = 0, jj = a.start.length; j < jj; j++){
                res1[j] = +a.start[j] + (a.end[j] - a.start[j]) * a.easing(a.s);
            }
        } else {
            res1 = +a.start + (a.end - a.start) * a.easing(a.s);
        }
        a.set(res1);
    }, frame = function(timeStamp) {
        // Manual invokation?
        if (!timeStamp) {
            // Frame loop stopped?
            if (!requestID) {
                // Start frame loop...
                requestID = requestAnimFrame(frame);
            }
            return;
        }
        var len = 0;
        for(var i in animations)if (animations.hasOwnProperty(i)) {
            var a = animations[i], b = a.get(), res1;
            len++;
            a.s = (b - a.b) / (a.dur / a.spd);
            if (a.s >= 1) {
                delete animations[i];
                a.s = 1;
                len--;
                (function(a) {
                    setTimeout(function() {
                        eve1("mina.finish." + a.id, a);
                    });
                })(a);
            }
            a.update();
        }
        requestID = len ? requestAnimFrame(frame) : false;
    }, /*\
     * mina
     [ method ]
     **
     * Generic animation of numbers
     **
     - a (number) start _slave_ number
     - A (number) end _slave_ number
     - b (number) start _master_ number (start time in general case)
     - B (number) end _master_ number (end time in general case)
     - get (function) getter of _master_ number (see @mina.time)
     - set (function) setter of _slave_ number
     - easing (function) #optional easing function, default is @mina.linear
     = (object) animation descriptor
     o {
     o         id (string) animation id,
     o         start (number) start _slave_ number,
     o         end (number) end _slave_ number,
     o         b (number) start _master_ number,
     o         s (number) animation status (0..1),
     o         dur (number) animation duration,
     o         spd (number) animation speed,
     o         get (function) getter of _master_ number (see @mina.time),
     o         set (function) setter of _slave_ number,
     o         easing (function) easing function, default is @mina.linear,
     o         status (function) status getter/setter,
     o         speed (function) speed getter/setter,
     o         duration (function) duration getter/setter,
     o         stop (function) animation stopper
     o         pause (function) pauses the animation
     o         resume (function) resumes the animation
     o         update (function) calles setter with the right value of the animation
     o }
    \*/ mina = function(a, A, b, B, get, set, easing) {
        var anim = {
            id: ID(),
            start: a,
            end: A,
            b: b,
            s: 0,
            dur: B - b,
            spd: 1,
            get: get,
            set: set,
            easing: easing || mina.linear,
            status: sta,
            speed: speed,
            duration: duration,
            stop: stopit,
            pause: pause,
            resume: resume,
            update: update
        };
        animations[anim.id] = anim;
        var len = 0, i;
        for(i in animations)if (animations.hasOwnProperty(i)) {
            len++;
            if (len == 2) {
                break;
            }
        }
        len == 1 && frame();
        return anim;
    };
    /*\
     * mina.time
     [ method ]
     **
     * Returns the current time. Equivalent to:
     | function () {
     |     return (new Date).getTime();
     | }
    \*/ mina.time = timer;
    /*\
     * mina.getById
     [ method ]
     **
     * Returns an animation by its id
     - id (string) animation's id
     = (object) See @mina
    \*/ mina.getById = function(id) {
        return animations[id] || null;
    };
    /*\
     * mina.linear
     [ method ]
     **
     * Default linear easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/ mina.linear = function(n) {
        return n;
    };
    /*\
     * mina.easeout
     [ method ]
     **
     * Easeout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/ mina.easeout = function(n) {
        return Math.pow(n, 1.7);
    };
    /*\
     * mina.easein
     [ method ]
     **
     * Easein easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/ mina.easein = function(n) {
        return Math.pow(n, .48);
    };
    /*\
     * mina.easeinout
     [ method ]
     **
     * Easeinout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/ mina.easeinout = function(n) {
        if (n == 1) {
            return 1;
        }
        if (n == 0) {
            return 0;
        }
        var q = .48 - n / 1.04, Q = Math.sqrt(.1734 + q * q), x = Q - q, X = Math.pow(Math.abs(x), 1 / 3) * (x < 0 ? -1 : 1), y = -Q - q, Y = Math.pow(Math.abs(y), 1 / 3) * (y < 0 ? -1 : 1), t = X + Y + .5;
        return (1 - t) * 3 * t * t + t * t * t;
    };
    /*\
     * mina.backin
     [ method ]
     **
     * Backin easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/ mina.backin = function(n) {
        if (n == 1) {
            return 1;
        }
        var s = 1.70158;
        return n * n * ((s + 1) * n - s);
    };
    /*\
     * mina.backout
     [ method ]
     **
     * Backout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/ mina.backout = function(n) {
        if (n == 0) {
            return 0;
        }
        n = n - 1;
        var s = 1.70158;
        return n * n * ((s + 1) * n + s) + 1;
    };
    /*\
     * mina.elastic
     [ method ]
     **
     * Elastic easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/ mina.elastic = function(n) {
        if (n == !!n) {
            return n;
        }
        return Math.pow(2, -10 * n) * Math.sin((n - .075) * (2 * Math.PI) / .3) + 1;
    };
    /*\
     * mina.bounce
     [ method ]
     **
     * Bounce easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/ mina.bounce = function(n) {
        var s = 7.5625, p = 2.75, l;
        if (n < 1 / p) {
            l = s * n * n;
        } else {
            if (n < 2 / p) {
                n -= 1.5 / p;
                l = s * n * n + .75;
            } else {
                if (n < 2.5 / p) {
                    n -= 2.25 / p;
                    l = s * n * n + .9375;
                } else {
                    n -= 2.625 / p;
                    l = s * n * n + .984375;
                }
            }
        }
        return l;
    };
    window.mina = mina;
    return mina;
}(typeof eve == "undefined" ? function() {} : eve);
// Copyright (c) 2013 - 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var Snap = function(root) {
    Snap.version = "0.5.1";
    /*\
 * Snap
 [ method ]
 **
 * Creates a drawing surface or wraps existing SVG element.
 **
 - width (number|string) width of surface
 - height (number|string) height of surface
 * or
 - DOM (SVGElement) element to be wrapped into Snap structure
 * or
 - array (array) array of elements (will return set of elements)
 * or
 - query (string) CSS query selector
 = (object) @Element
\*/ function Snap(w, h) {
        if (w) {
            if (w.nodeType) {
                return wrap(w);
            }
            if (is(w, "array") && Snap.set) {
                return Snap.set.apply(Snap, w);
            }
            if (w instanceof Element) {
                return w;
            }
            if (h == null) {
                try {
                    w = glob.doc.querySelector(String(w));
                    return wrap(w);
                } catch (e) {
                    return null;
                }
            }
        }
        w = w == null ? "100%" : w;
        h = h == null ? "100%" : h;
        return new Paper(w, h);
    }
    Snap.toString = function() {
        return "Snap v" + this.version;
    };
    Snap._ = {};
    var glob = {
        win: root.window,
        doc: root.window.document
    };
    Snap._.glob = glob;
    var has = "hasOwnProperty", Str = String, toFloat = parseFloat, toInt = parseInt, math1 = Math, mmax = math1.max, mmin = math1.min, abs = math1.abs, pow = math1.pow, PI = math1.PI, round = math1.round, E = "", S = " ", objectToString = Object.prototype.toString, ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i, bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/, separator = Snap._.separator = /[,\s]+/, whitespace = /[\s]/g, commaSpaces = /[\s]*,[\s]*/, hsrg = {
        hs: 1,
        rg: 1
    }, pathCommand = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig, tCommand = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig, pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/ig, idgen = 0, idprefix = "S" + (+new Date).toString(36), ID = function(el) {
        return (el && el.type ? el.type : E) + idprefix + (idgen++).toString(36);
    }, xlink = "http://www.w3.org/1999/xlink", xmlns = "http://www.w3.org/2000/svg", hub = {}, /*\
     * Snap.url
     [ method ]
     **
     * Wraps path into `"url('<path>')"`.
     - value (string) path
     = (string) wrapped path
    \*/ URL = Snap.url = function(url) {
        return "url('#" + url + "')";
    };
    function $(el, attr) {
        if (attr) {
            if (el == "#text") {
                el = glob.doc.createTextNode(attr.text || attr["#text"] || "");
            }
            if (el == "#comment") {
                el = glob.doc.createComment(attr.text || attr["#text"] || "");
            }
            if (typeof el == "string") {
                el = $(el);
            }
            if (typeof attr == "string") {
                if (el.nodeType == 1) {
                    if (attr.substring(0, 6) == "xlink:") {
                        return el.getAttributeNS(xlink, attr.substring(6));
                    }
                    if (attr.substring(0, 4) == "xml:") {
                        return el.getAttributeNS(xmlns, attr.substring(4));
                    }
                    return el.getAttribute(attr);
                } else if (attr == "text") {
                    return el.nodeValue;
                } else {
                    return null;
                }
            }
            if (el.nodeType == 1) {
                for(var key in attr)if (attr[has](key)) {
                    var val = Str(attr[key]);
                    if (val) {
                        if (key.substring(0, 6) == "xlink:") {
                            el.setAttributeNS(xlink, key.substring(6), val);
                        } else if (key.substring(0, 4) == "xml:") {
                            el.setAttributeNS(xmlns, key.substring(4), val);
                        } else {
                            el.setAttribute(key, val);
                        }
                    } else {
                        el.removeAttribute(key);
                    }
                }
            } else if ("text" in attr) {
                el.nodeValue = attr.text;
            }
        } else {
            el = glob.doc.createElementNS(xmlns, el);
        }
        return el;
    }
    Snap._.$ = $;
    Snap._.id = ID;
    function getAttrs(el) {
        var attrs = el.attributes, name, out = {};
        for(var i = 0; i < attrs.length; i++){
            if (attrs[i].namespaceURI == xlink) {
                name = "xlink:";
            } else {
                name = "";
            }
            name += attrs[i].name;
            out[name] = attrs[i].textContent;
        }
        return out;
    }
    function is(o, type) {
        type = Str.prototype.toLowerCase.call(type);
        if (type == "finite") {
            return isFinite(o);
        }
        if (type == "array" && (o instanceof Array || Array.isArray && Array.isArray(o))) {
            return true;
        }
        return type == "null" && o === null || type == typeof o && o !== null || type == "object" && o === Object(o) || objectToString.call(o).slice(8, -1).toLowerCase() == type;
    }
    /*\
 * Snap.format
 [ method ]
 **
 * Replaces construction of type `{<name>}` to the corresponding argument
 **
 - token (string) string to format
 - json (object) object which properties are used as a replacement
 = (string) formatted string
 > Usage
 | // this draws a rectangular shape equivalent to "M10,20h40v50h-40z"
 | paper.path(Snap.format("M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z", {
 |     x: 10,
 |     y: 20,
 |     dim: {
 |         width: 40,
 |         height: 50,
 |         "negative width": -40
 |     }
 | }));
\*/ Snap.format = function() {
        var tokenRegex = /\{([^\}]+)\}/g, objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, replacer = function(all, key, obj) {
            var res1 = obj;
            key.replace(objNotationRegex, function(all, name, quote, quotedName, isFunc) {
                name = name || quotedName;
                if (res1) {
                    if (name in res1) {
                        res1 = res1[name];
                    }
                    typeof res1 == "function" && isFunc && (res1 = res1());
                }
            });
            res1 = (res1 == null || res1 == obj ? all : res1) + "";
            return res1;
        };
        return function(str, obj) {
            return Str(str).replace(tokenRegex, function(all, key) {
                return replacer(all, key, obj);
            });
        };
    }();
    function clone(obj) {
        if (typeof obj == "function" || Object(obj) !== obj) {
            return obj;
        }
        var res1 = new obj.constructor;
        for(var key in obj)if (obj[has](key)) {
            res1[key] = clone(obj[key]);
        }
        return res1;
    }
    Snap._.clone = clone;
    function repush(array, item) {
        for(var i = 0, ii = array.length; i < ii; i++)if (array[i] === item) {
            return array.push(array.splice(i, 1)[0]);
        }
    }
    function cacher(f, scope, postprocessor) {
        function newf() {
            var arg = Array.prototype.slice.call(arguments, 0), args = arg.join("\u2400"), cache = newf.cache = newf.cache || {}, count = newf.count = newf.count || [];
            if (cache[has](args)) {
                repush(count, args);
                return postprocessor ? postprocessor(cache[args]) : cache[args];
            }
            count.length >= 1e3 && delete cache[count.shift()];
            count.push(args);
            cache[args] = f.apply(scope, arg);
            return postprocessor ? postprocessor(cache[args]) : cache[args];
        }
        return newf;
    }
    Snap._.cacher = cacher;
    function angle(x1, y1, x2, y2, x3, y3) {
        if (x3 == null) {
            var x = x1 - x2, y = y1 - y2;
            if (!x && !y) {
                return 0;
            }
            return (180 + math1.atan2(-y, -x) * 180 / PI + 360) % 360;
        } else {
            return angle(x1, y1, x3, y3) - angle(x2, y2, x3, y3);
        }
    }
    function rad(deg) {
        return deg % 360 * PI / 180;
    }
    function deg(rad) {
        return rad * 180 / PI % 360;
    }
    function x_y() {
        return this.x + S + this.y;
    }
    function x_y_w_h() {
        return this.x + S + this.y + S + this.width + " \xd7 " + this.height;
    }
    /*\
 * Snap.rad
 [ method ]
 **
 * Transform angle to radians
 - deg (number) angle in degrees
 = (number) angle in radians
\*/ Snap.rad = rad;
    /*\
 * Snap.deg
 [ method ]
 **
 * Transform angle to degrees
 - rad (number) angle in radians
 = (number) angle in degrees
\*/ Snap.deg = deg;
    /*\
 * Snap.sin
 [ method ]
 **
 * Equivalent to `Math.sin()` only works with degrees, not radians.
 - angle (number) angle in degrees
 = (number) sin
\*/ Snap.sin = function(angle) {
        return math1.sin(Snap.rad(angle));
    };
    /*\
 * Snap.tan
 [ method ]
 **
 * Equivalent to `Math.tan()` only works with degrees, not radians.
 - angle (number) angle in degrees
 = (number) tan
\*/ Snap.tan = function(angle) {
        return math1.tan(Snap.rad(angle));
    };
    /*\
 * Snap.cos
 [ method ]
 **
 * Equivalent to `Math.cos()` only works with degrees, not radians.
 - angle (number) angle in degrees
 = (number) cos
\*/ Snap.cos = function(angle) {
        return math1.cos(Snap.rad(angle));
    };
    /*\
 * Snap.asin
 [ method ]
 **
 * Equivalent to `Math.asin()` only works with degrees, not radians.
 - num (number) value
 = (number) asin in degrees
\*/ Snap.asin = function(num) {
        return Snap.deg(math1.asin(num));
    };
    /*\
 * Snap.acos
 [ method ]
 **
 * Equivalent to `Math.acos()` only works with degrees, not radians.
 - num (number) value
 = (number) acos in degrees
\*/ Snap.acos = function(num) {
        return Snap.deg(math1.acos(num));
    };
    /*\
 * Snap.atan
 [ method ]
 **
 * Equivalent to `Math.atan()` only works with degrees, not radians.
 - num (number) value
 = (number) atan in degrees
\*/ Snap.atan = function(num) {
        return Snap.deg(math1.atan(num));
    };
    /*\
 * Snap.atan2
 [ method ]
 **
 * Equivalent to `Math.atan2()` only works with degrees, not radians.
 - num (number) value
 = (number) atan2 in degrees
\*/ Snap.atan2 = function(num) {
        return Snap.deg(math1.atan2(num));
    };
    /*\
 * Snap.angle
 [ method ]
 **
 * Returns an angle between two or three points
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 - x3 (number) #optional x coord of third point
 - y3 (number) #optional y coord of third point
 = (number) angle in degrees
\*/ Snap.angle = angle;
    /*\
 * Snap.len
 [ method ]
 **
 * Returns distance between two points
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 = (number) distance
\*/ Snap.len = function(x1, y1, x2, y2) {
        return Math.sqrt(Snap.len2(x1, y1, x2, y2));
    };
    /*\
 * Snap.len2
 [ method ]
 **
 * Returns squared distance between two points
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 = (number) distance
\*/ Snap.len2 = function(x1, y1, x2, y2) {
        return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
    };
    /*\
 * Snap.closestPoint
 [ method ]
 **
 * Returns closest point to a given one on a given path.
 - path (Element) path element
 - x (number) x coord of a point
 - y (number) y coord of a point
 = (object) in format
 {
    x (number) x coord of the point on the path
    y (number) y coord of the point on the path
    length (number) length of the path to the point
    distance (number) distance from the given point to the path
 }
\*/ // Copied from http://bl.ocks.org/mbostock/8027637
    Snap.closestPoint = function(path, x, y) {
        function distance2(p) {
            var dx = p.x - x, dy = p.y - y;
            return dx * dx + dy * dy;
        }
        var pathNode = path.node, pathLength = pathNode.getTotalLength(), precision = pathLength / pathNode.pathSegList.numberOfItems * .125, best, bestLength, bestDistance = Infinity;
        // linear scan for coarse approximation
        for(var scan, scanLength = 0, scanDistance; scanLength <= pathLength; scanLength += precision){
            if ((scanDistance = distance2(scan = pathNode.getPointAtLength(scanLength))) < bestDistance) {
                best = scan;
                bestLength = scanLength;
                bestDistance = scanDistance;
            }
        }
        // binary search for precise estimate
        precision *= .5;
        while(precision > .5){
            var before, after, beforeLength, afterLength, beforeDistance, afterDistance;
            if ((beforeLength = bestLength - precision) >= 0 && (beforeDistance = distance2(before = pathNode.getPointAtLength(beforeLength))) < bestDistance) {
                best = before;
                bestLength = beforeLength;
                bestDistance = beforeDistance;
            } else if ((afterLength = bestLength + precision) <= pathLength && (afterDistance = distance2(after = pathNode.getPointAtLength(afterLength))) < bestDistance) {
                best = after;
                bestLength = afterLength;
                bestDistance = afterDistance;
            } else {
                precision *= .5;
            }
        }
        best = {
            x: best.x,
            y: best.y,
            length: bestLength,
            distance: Math.sqrt(bestDistance)
        };
        return best;
    };
    /*\
 * Snap.is
 [ method ]
 **
 * Handy replacement for the `typeof` operator
 - o (…) any object or primitive
 - type (string) name of the type, e.g., `string`, `function`, `number`, etc.
 = (boolean) `true` if given value is of given type
\*/ Snap.is = is;
    /*\
 * Snap.snapTo
 [ method ]
 **
 * Snaps given value to given grid
 - values (array|number) given array of values or step of the grid
 - value (number) value to adjust
 - tolerance (number) #optional maximum distance to the target value that would trigger the snap. Default is `10`.
 = (number) adjusted value
\*/ Snap.snapTo = function(values, value, tolerance) {
        tolerance = is(tolerance, "finite") ? tolerance : 10;
        if (is(values, "array")) {
            var i = values.length;
            while(i--)if (abs(values[i] - value) <= tolerance) {
                return values[i];
            }
        } else {
            values = +values;
            var rem = value % values;
            if (rem < tolerance) {
                return value - rem;
            }
            if (rem > values - tolerance) {
                return value - rem + values;
            }
        }
        return value;
    };
    // Colour
    /*\
 * Snap.getRGB
 [ method ]
 **
 * Parses color string as RGB object
 - color (string) color string in one of the following formats:
 # <ul>
 #     <li>Color name (<code>red</code>, <code>green</code>, <code>cornflowerblue</code>, etc)</li>
 #     <li>#••• — shortened HTML color: (<code>#000</code>, <code>#fc0</code>, etc.)</li>
 #     <li>#•••••• — full length HTML color: (<code>#000000</code>, <code>#bd2300</code>)</li>
 #     <li>rgb(•••, •••, •••) — red, green and blue channels values: (<code>rgb(200,&nbsp;100,&nbsp;0)</code>)</li>
 #     <li>rgba(•••, •••, •••, •••) — also with opacity</li>
 #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>)</li>
 #     <li>rgba(•••%, •••%, •••%, •••%) — also with opacity</li>
 #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>)</li>
 #     <li>hsba(•••, •••, •••, •••) — also with opacity</li>
 #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
 #     <li>hsba(•••%, •••%, •••%, •••%) — also with opacity</li>
 #     <li>hsl(•••, •••, •••) — hue, saturation and luminosity values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;0.5)</code>)</li>
 #     <li>hsla(•••, •••, •••, •••) — also with opacity</li>
 #     <li>hsl(•••%, •••%, •••%) — same as above, but in %</li>
 #     <li>hsla(•••%, •••%, •••%, •••%) — also with opacity</li>
 # </ul>
 * Note that `%` can be used any time: `rgb(20%, 255, 50%)`.
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••,
 o     error (boolean) true if string can't be parsed
 o }
\*/ Snap.getRGB = cacher(function(colour) {
        if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
            return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: rgbtoString
            };
        }
        if (colour == "none") {
            return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                toString: rgbtoString
            };
        }
        !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = toHex(colour));
        if (!colour) {
            return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: rgbtoString
            };
        }
        var res1, red, green, blue, opacity, t, values, rgb = colour.match(colourRegExp);
        if (rgb) {
            if (rgb[2]) {
                blue = toInt(rgb[2].substring(5), 16);
                green = toInt(rgb[2].substring(3, 5), 16);
                red = toInt(rgb[2].substring(1, 3), 16);
            }
            if (rgb[3]) {
                blue = toInt((t = rgb[3].charAt(3)) + t, 16);
                green = toInt((t = rgb[3].charAt(2)) + t, 16);
                red = toInt((t = rgb[3].charAt(1)) + t, 16);
            }
            if (rgb[4]) {
                values = rgb[4].split(commaSpaces);
                red = toFloat(values[0]);
                values[0].slice(-1) == "%" && (red *= 2.55);
                green = toFloat(values[1]);
                values[1].slice(-1) == "%" && (green *= 2.55);
                blue = toFloat(values[2]);
                values[2].slice(-1) == "%" && (blue *= 2.55);
                rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
            }
            if (rgb[5]) {
                values = rgb[5].split(commaSpaces);
                red = toFloat(values[0]);
                values[0].slice(-1) == "%" && (red /= 100);
                green = toFloat(values[1]);
                values[1].slice(-1) == "%" && (green /= 100);
                blue = toFloat(values[2]);
                values[2].slice(-1) == "%" && (blue /= 100);
                (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
                rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
                return Snap.hsb2rgb(red, green, blue, opacity);
            }
            if (rgb[6]) {
                values = rgb[6].split(commaSpaces);
                red = toFloat(values[0]);
                values[0].slice(-1) == "%" && (red /= 100);
                green = toFloat(values[1]);
                values[1].slice(-1) == "%" && (green /= 100);
                blue = toFloat(values[2]);
                values[2].slice(-1) == "%" && (blue /= 100);
                (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
                rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
                return Snap.hsl2rgb(red, green, blue, opacity);
            }
            red = mmin(math1.round(red), 255);
            green = mmin(math1.round(green), 255);
            blue = mmin(math1.round(blue), 255);
            opacity = mmin(mmax(opacity, 0), 1);
            rgb = {
                r: red,
                g: green,
                b: blue,
                toString: rgbtoString
            };
            rgb.hex = "#" + (16777216 | blue | green << 8 | red << 16).toString(16).slice(1);
            rgb.opacity = is(opacity, "finite") ? opacity : 1;
            return rgb;
        }
        return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: rgbtoString
        };
    }, Snap);
    /*\
 * Snap.hsb
 [ method ]
 **
 * Converts HSB values to a hex representation of the color
 - h (number) hue
 - s (number) saturation
 - b (number) value or brightness
 = (string) hex representation of the color
\*/ Snap.hsb = cacher(function(h, s, b) {
        return Snap.hsb2rgb(h, s, b).hex;
    });
    /*\
 * Snap.hsl
 [ method ]
 **
 * Converts HSL values to a hex representation of the color
 - h (number) hue
 - s (number) saturation
 - l (number) luminosity
 = (string) hex representation of the color
\*/ Snap.hsl = cacher(function(h, s, l) {
        return Snap.hsl2rgb(h, s, l).hex;
    });
    /*\
 * Snap.rgb
 [ method ]
 **
 * Converts RGB values to a hex representation of the color
 - r (number) red
 - g (number) green
 - b (number) blue
 = (string) hex representation of the color
\*/ Snap.rgb = cacher(function(r, g1, b, o) {
        if (is(o, "finite")) {
            var round = math1.round;
            return "rgba(" + [
                round(r),
                round(g1),
                round(b),
                +o.toFixed(2)
            ] + ")";
        }
        return "#" + (16777216 | b | g1 << 8 | r << 16).toString(16).slice(1);
    });
    var toHex = function(color) {
        var i = glob.doc.getElementsByTagName("head")[0] || glob.doc.getElementsByTagName("svg")[0], red = "rgb(255, 0, 0)";
        toHex = cacher(function(color) {
            if (color.toLowerCase() == "red") {
                return red;
            }
            i.style.color = red;
            i.style.color = color;
            var out = glob.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
            return out == red ? null : out;
        });
        return toHex(color);
    }, hsbtoString = function() {
        return "hsb(" + [
            this.h,
            this.s,
            this.b
        ] + ")";
    }, hsltoString = function() {
        return "hsl(" + [
            this.h,
            this.s,
            this.l
        ] + ")";
    }, rgbtoString = function() {
        return this.opacity == 1 || this.opacity == null ? this.hex : "rgba(" + [
            this.r,
            this.g,
            this.b,
            this.opacity
        ] + ")";
    }, prepareRGB = function(r, g1, b) {
        if (g1 == null && is(r, "object") && "r" in r && "g" in r && "b" in r) {
            b = r.b;
            g1 = r.g;
            r = r.r;
        }
        if (g1 == null && is(r, string)) {
            var clr = Snap.getRGB(r);
            r = clr.r;
            g1 = clr.g;
            b = clr.b;
        }
        if (r > 1 || g1 > 1 || b > 1) {
            r /= 255;
            g1 /= 255;
            b /= 255;
        }
        return [
            r,
            g1,
            b
        ];
    }, packageRGB = function(r, g1, b, o) {
        r = math1.round(r * 255);
        g1 = math1.round(g1 * 255);
        b = math1.round(b * 255);
        var rgb = {
            r: r,
            g: g1,
            b: b,
            opacity: is(o, "finite") ? o : 1,
            hex: Snap.rgb(r, g1, b),
            toString: rgbtoString
        };
        is(o, "finite") && (rgb.opacity = o);
        return rgb;
    };
    /*\
 * Snap.color
 [ method ]
 **
 * Parses the color string and returns an object featuring the color's component values
 - clr (string) color string in one of the supported formats (see @Snap.getRGB)
 = (object) Combined RGB/HSB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••,
 o     error (boolean) `true` if string can't be parsed,
 o     h (number) hue,
 o     s (number) saturation,
 o     v (number) value (brightness),
 o     l (number) lightness
 o }
\*/ Snap.color = function(clr) {
        var rgb;
        if (is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
            rgb = Snap.hsb2rgb(clr);
            clr.r = rgb.r;
            clr.g = rgb.g;
            clr.b = rgb.b;
            clr.opacity = 1;
            clr.hex = rgb.hex;
        } else if (is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
            rgb = Snap.hsl2rgb(clr);
            clr.r = rgb.r;
            clr.g = rgb.g;
            clr.b = rgb.b;
            clr.opacity = 1;
            clr.hex = rgb.hex;
        } else {
            if (is(clr, "string")) {
                clr = Snap.getRGB(clr);
            }
            if (is(clr, "object") && "r" in clr && "g" in clr && "b" in clr && !("error" in clr)) {
                rgb = Snap.rgb2hsl(clr);
                clr.h = rgb.h;
                clr.s = rgb.s;
                clr.l = rgb.l;
                rgb = Snap.rgb2hsb(clr);
                clr.v = rgb.b;
            } else {
                clr = {
                    hex: "none"
                };
                clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
                clr.error = 1;
            }
        }
        clr.toString = rgbtoString;
        return clr;
    };
    /*\
 * Snap.hsb2rgb
 [ method ]
 **
 * Converts HSB values to an RGB object
 - h (number) hue
 - s (number) saturation
 - v (number) value or brightness
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••
 o }
\*/ Snap.hsb2rgb = function(h, s, v, o) {
        if (is(h, "object") && "h" in h && "s" in h && "b" in h) {
            v = h.b;
            s = h.s;
            o = h.o;
            h = h.h;
        }
        h *= 360;
        var R, G, B, X, C;
        h = h % 360 / 60;
        C = v * s;
        X = C * (1 - abs(h % 2 - 1));
        R = G = B = v - C;
        h = ~~h;
        R += [
            C,
            X,
            0,
            0,
            X,
            C
        ][h];
        G += [
            X,
            C,
            C,
            X,
            0,
            0
        ][h];
        B += [
            0,
            0,
            X,
            C,
            C,
            X
        ][h];
        return packageRGB(R, G, B, o);
    };
    /*\
 * Snap.hsl2rgb
 [ method ]
 **
 * Converts HSL values to an RGB object
 - h (number) hue
 - s (number) saturation
 - l (number) luminosity
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••
 o }
\*/ Snap.hsl2rgb = function(h, s, l, o) {
        if (is(h, "object") && "h" in h && "s" in h && "l" in h) {
            l = h.l;
            s = h.s;
            h = h.h;
        }
        if (h > 1 || s > 1 || l > 1) {
            h /= 360;
            s /= 100;
            l /= 100;
        }
        h *= 360;
        var R, G, B, X, C;
        h = h % 360 / 60;
        C = 2 * s * (l < .5 ? l : 1 - l);
        X = C * (1 - abs(h % 2 - 1));
        R = G = B = l - C / 2;
        h = ~~h;
        R += [
            C,
            X,
            0,
            0,
            X,
            C
        ][h];
        G += [
            X,
            C,
            C,
            X,
            0,
            0
        ][h];
        B += [
            0,
            0,
            X,
            C,
            C,
            X
        ][h];
        return packageRGB(R, G, B, o);
    };
    /*\
 * Snap.rgb2hsb
 [ method ]
 **
 * Converts RGB values to an HSB object
 - r (number) red
 - g (number) green
 - b (number) blue
 = (object) HSB object in the following format:
 o {
 o     h (number) hue,
 o     s (number) saturation,
 o     b (number) brightness
 o }
\*/ Snap.rgb2hsb = function(r, g1, b) {
        b = prepareRGB(r, g1, b);
        r = b[0];
        g1 = b[1];
        b = b[2];
        var H, S, V, C;
        V = mmax(r, g1, b);
        C = V - mmin(r, g1, b);
        H = C == 0 ? null : V == r ? (g1 - b) / C : V == g1 ? (b - r) / C + 2 : (r - g1) / C + 4;
        H = (H + 360) % 6 * 60 / 360;
        S = C == 0 ? 0 : C / V;
        return {
            h: H,
            s: S,
            b: V,
            toString: hsbtoString
        };
    };
    /*\
 * Snap.rgb2hsl
 [ method ]
 **
 * Converts RGB values to an HSL object
 - r (number) red
 - g (number) green
 - b (number) blue
 = (object) HSL object in the following format:
 o {
 o     h (number) hue,
 o     s (number) saturation,
 o     l (number) luminosity
 o }
\*/ Snap.rgb2hsl = function(r, g1, b) {
        b = prepareRGB(r, g1, b);
        r = b[0];
        g1 = b[1];
        b = b[2];
        var H, S, L, M, m, C;
        M = mmax(r, g1, b);
        m = mmin(r, g1, b);
        C = M - m;
        H = C == 0 ? null : M == r ? (g1 - b) / C : M == g1 ? (b - r) / C + 2 : (r - g1) / C + 4;
        H = (H + 360) % 6 * 60 / 360;
        L = (M + m) / 2;
        S = C == 0 ? 0 : L < .5 ? C / (2 * L) : C / (2 - 2 * L);
        return {
            h: H,
            s: S,
            l: L,
            toString: hsltoString
        };
    };
    // Transformations
    /*\
 * Snap.parsePathString
 [ method ]
 **
 * Utility method
 **
 * Parses given path string into an array of arrays of path segments
 - pathString (string|array) path string or array of segments (in the last case it is returned straight away)
 = (array) array of segments
\*/ Snap.parsePathString = function(pathString) {
        if (!pathString) {
            return null;
        }
        var pth = Snap.path(pathString);
        if (pth.arr) {
            return Snap.path.clone(pth.arr);
        }
        var paramCounts = {
            a: 7,
            c: 6,
            o: 2,
            h: 1,
            l: 2,
            m: 2,
            r: 4,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            u: 3,
            z: 0
        }, data = [];
        if (is(pathString, "array") && is(pathString[0], "array")) {
            data = Snap.path.clone(pathString);
        }
        if (!data.length) {
            Str(pathString).replace(pathCommand, function(a, b, c) {
                var params = [], name = b.toLowerCase();
                c.replace(pathValues, function(a, b) {
                    b && params.push(+b);
                });
                if (name == "m" && params.length > 2) {
                    data.push([
                        b
                    ].concat(params.splice(0, 2)));
                    name = "l";
                    b = b == "m" ? "l" : "L";
                }
                if (name == "o" && params.length == 1) {
                    data.push([
                        b,
                        params[0]
                    ]);
                }
                if (name == "r") {
                    data.push([
                        b
                    ].concat(params));
                } else while(params.length >= paramCounts[name]){
                    data.push([
                        b
                    ].concat(params.splice(0, paramCounts[name])));
                    if (!paramCounts[name]) {
                        break;
                    }
                }
            });
        }
        data.toString = Snap.path.toString;
        pth.arr = Snap.path.clone(data);
        return data;
    };
    /*\
 * Snap.parseTransformString
 [ method ]
 **
 * Utility method
 **
 * Parses given transform string into an array of transformations
 - TString (string|array) transform string or array of transformations (in the last case it is returned straight away)
 = (array) array of transformations
\*/ var parseTransformString = Snap.parseTransformString = function(TString) {
        if (!TString) {
            return null;
        }
        var paramCounts = {
            r: 3,
            s: 4,
            t: 2,
            m: 6
        }, data = [];
        if (is(TString, "array") && is(TString[0], "array")) {
            data = Snap.path.clone(TString);
        }
        if (!data.length) {
            Str(TString).replace(tCommand, function(a, b, c) {
                var params = [], name = b.toLowerCase();
                c.replace(pathValues, function(a, b) {
                    b && params.push(+b);
                });
                data.push([
                    b
                ].concat(params));
            });
        }
        data.toString = Snap.path.toString;
        return data;
    };
    function svgTransform2string(tstr) {
        var res1 = [];
        tstr = tstr.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(all, name, params) {
            params = params.split(/\s*,\s*|\s+/);
            if (name == "rotate" && params.length == 1) {
                params.push(0, 0);
            }
            if (name == "scale") {
                if (params.length > 2) {
                    params = params.slice(0, 2);
                } else if (params.length == 2) {
                    params.push(0, 0);
                }
                if (params.length == 1) {
                    params.push(params[0], 0, 0);
                }
            }
            if (name == "skewX") {
                res1.push([
                    "m",
                    1,
                    0,
                    math1.tan(rad(params[0])),
                    1,
                    0,
                    0
                ]);
            } else if (name == "skewY") {
                res1.push([
                    "m",
                    1,
                    math1.tan(rad(params[0])),
                    0,
                    1,
                    0,
                    0
                ]);
            } else {
                res1.push([
                    name.charAt(0)
                ].concat(params));
            }
            return all;
        });
        return res1;
    }
    Snap._.svgTransform2string = svgTransform2string;
    Snap._.rgTransform = /^[a-z][\s]*-?\.?\d/i;
    function transform2matrix(tstr, bbox) {
        var tdata = parseTransformString(tstr), m = new Snap.Matrix;
        if (tdata) {
            for(var i = 0, ii = tdata.length; i < ii; i++){
                var t = tdata[i], tlen = t.length, command = Str(t[0]).toLowerCase(), absolute = t[0] != command, inver = absolute ? m.invert() : 0, x1, y1, x2, y2, bb;
                if (command == "t" && tlen == 2) {
                    m.translate(t[1], 0);
                } else if (command == "t" && tlen == 3) {
                    if (absolute) {
                        x1 = inver.x(0, 0);
                        y1 = inver.y(0, 0);
                        x2 = inver.x(t[1], t[2]);
                        y2 = inver.y(t[1], t[2]);
                        m.translate(x2 - x1, y2 - y1);
                    } else {
                        m.translate(t[1], t[2]);
                    }
                } else if (command == "r") {
                    if (tlen == 2) {
                        bb = bb || bbox;
                        m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                    } else if (tlen == 4) {
                        if (absolute) {
                            x2 = inver.x(t[2], t[3]);
                            y2 = inver.y(t[2], t[3]);
                            m.rotate(t[1], x2, y2);
                        } else {
                            m.rotate(t[1], t[2], t[3]);
                        }
                    }
                } else if (command == "s") {
                    if (tlen == 2 || tlen == 3) {
                        bb = bb || bbox;
                        m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                    } else if (tlen == 4) {
                        if (absolute) {
                            x2 = inver.x(t[2], t[3]);
                            y2 = inver.y(t[2], t[3]);
                            m.scale(t[1], t[1], x2, y2);
                        } else {
                            m.scale(t[1], t[1], t[2], t[3]);
                        }
                    } else if (tlen == 5) {
                        if (absolute) {
                            x2 = inver.x(t[3], t[4]);
                            y2 = inver.y(t[3], t[4]);
                            m.scale(t[1], t[2], x2, y2);
                        } else {
                            m.scale(t[1], t[2], t[3], t[4]);
                        }
                    }
                } else if (command == "m" && tlen == 7) {
                    m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
                }
            }
        }
        return m;
    }
    Snap._.transform2matrix = transform2matrix;
    Snap._unit2px = unit2px;
    var contains = glob.doc.contains || glob.doc.compareDocumentPosition ? function(a, b) {
        var adown = a.nodeType == 9 ? a.documentElement : a, bup = b && b.parentNode;
        return a == bup || !!(bup && bup.nodeType == 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
    } : function(a, b) {
        if (b) {
            while(b){
                b = b.parentNode;
                if (b == a) {
                    return true;
                }
            }
        }
        return false;
    };
    function getSomeDefs(el) {
        var p = el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || el.node.parentNode && wrap(el.node.parentNode) || Snap.select("svg") || Snap(0, 0), pdefs = p.select("defs"), defs = pdefs == null ? false : pdefs.node;
        if (!defs) {
            defs = make("defs", p.node).node;
        }
        return defs;
    }
    function getSomeSVG(el) {
        return el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || Snap.select("svg");
    }
    Snap._.getSomeDefs = getSomeDefs;
    Snap._.getSomeSVG = getSomeSVG;
    function unit2px(el, name, value) {
        var svg = getSomeSVG(el).node, out = {}, mgr = svg.querySelector(".svg---mgr");
        if (!mgr) {
            mgr = $("rect");
            $(mgr, {
                x: -9e9,
                y: -9e9,
                width: 10,
                height: 10,
                "class": "svg---mgr",
                fill: "none"
            });
            svg.appendChild(mgr);
        }
        function getW(val) {
            if (val == null) {
                return E;
            }
            if (val == +val) {
                return val;
            }
            $(mgr, {
                width: val
            });
            try {
                return mgr.getBBox().width;
            } catch (e) {
                return 0;
            }
        }
        function getH(val) {
            if (val == null) {
                return E;
            }
            if (val == +val) {
                return val;
            }
            $(mgr, {
                height: val
            });
            try {
                return mgr.getBBox().height;
            } catch (e) {
                return 0;
            }
        }
        function set(nam, f) {
            if (name == null) {
                out[nam] = f(el.attr(nam) || 0);
            } else if (nam == name) {
                out = f(value == null ? el.attr(nam) || 0 : value);
            }
        }
        switch(el.type){
            case "rect":
                set("rx", getW);
                set("ry", getH);
            case "image":
                set("width", getW);
                set("height", getH);
            case "text":
                set("x", getW);
                set("y", getH);
                break;
            case "circle":
                set("cx", getW);
                set("cy", getH);
                set("r", getW);
                break;
            case "ellipse":
                set("cx", getW);
                set("cy", getH);
                set("rx", getW);
                set("ry", getH);
                break;
            case "line":
                set("x1", getW);
                set("x2", getW);
                set("y1", getH);
                set("y2", getH);
                break;
            case "marker":
                set("refX", getW);
                set("markerWidth", getW);
                set("refY", getH);
                set("markerHeight", getH);
                break;
            case "radialGradient":
                set("fx", getW);
                set("fy", getH);
                break;
            case "tspan":
                set("dx", getW);
                set("dy", getH);
                break;
            default:
                set(name, getW);
        }
        svg.removeChild(mgr);
        return out;
    }
    /*\
 * Snap.select
 [ method ]
 **
 * Wraps a DOM element specified by CSS selector as @Element
 - query (string) CSS selector of the element
 = (Element) the current element
\*/ Snap.select = function(query) {
        query = Str(query).replace(/([^\\]):/g, "$1\\:");
        return wrap(glob.doc.querySelector(query));
    };
    /*\
 * Snap.selectAll
 [ method ]
 **
 * Wraps DOM elements specified by CSS selector as set or array of @Element
 - query (string) CSS selector of the element
 = (Element) the current element
\*/ Snap.selectAll = function(query) {
        var nodelist = glob.doc.querySelectorAll(query), set = (Snap.set || Array)();
        for(var i = 0; i < nodelist.length; i++){
            set.push(wrap(nodelist[i]));
        }
        return set;
    };
    function add2group(list) {
        if (!is(list, "array")) {
            list = Array.prototype.slice.call(arguments, 0);
        }
        var i = 0, j = 0, node = this.node;
        while(this[i])delete this[i++];
        for(i = 0; i < list.length; i++){
            if (list[i].type == "set") {
                list[i].forEach(function(el) {
                    node.appendChild(el.node);
                });
            } else {
                node.appendChild(list[i].node);
            }
        }
        var children = node.childNodes;
        for(i = 0; i < children.length; i++){
            this[j++] = wrap(children[i]);
        }
        return this;
    }
    // Hub garbage collector every 10s
    setInterval(function() {
        for(var key in hub)if (hub[has](key)) {
            var el = hub[key], node = el.node;
            if (el.type != "svg" && !node.ownerSVGElement || el.type == "svg" && (!node.parentNode || "ownerSVGElement" in node.parentNode && !node.ownerSVGElement)) {
                delete hub[key];
            }
        }
    }, 1e4);
    function Element(el) {
        if (el.snap in hub) {
            return hub[el.snap];
        }
        var svg;
        try {
            svg = el.ownerSVGElement;
        } catch (e) {}
        /*\
     * Element.node
     [ property (object) ]
     **
     * Gives you a reference to the DOM object, so you can assign event handlers or just mess around.
     > Usage
     | // draw a circle at coordinate 10,10 with radius of 10
     | var c = paper.circle(10, 10, 10);
     | c.node.onclick = function () {
     |     c.attr("fill", "red");
     | };
    \*/ this.node = el;
        if (svg) {
            this.paper = new Paper(svg);
        }
        /*\
     * Element.type
     [ property (string) ]
     **
     * SVG tag name of the given element.
    \*/ this.type = el.tagName || el.nodeName;
        var id = this.id = ID(this);
        this.anims = {};
        this._ = {
            transform: []
        };
        el.snap = id;
        hub[id] = this;
        if (this.type == "g") {
            this.add = add2group;
        }
        if (this.type in {
            g: 1,
            mask: 1,
            pattern: 1,
            symbol: 1
        }) {
            for(var method in Paper.prototype)if (Paper.prototype[has](method)) {
                this[method] = Paper.prototype[method];
            }
        }
    }
    /*\
     * Element.attr
     [ method ]
     **
     * Gets or sets given attributes of the element.
     **
     - params (object) contains key-value pairs of attributes you want to set
     * or
     - param (string) name of the attribute
     = (Element) the current element
     * or
     = (string) value of attribute
     > Usage
     | el.attr({
     |     fill: "#fc0",
     |     stroke: "#000",
     |     strokeWidth: 2, // CamelCase...
     |     "fill-opacity": 0.5, // or dash-separated names
     |     width: "*=2" // prefixed values
     | });
     | console.log(el.attr("fill")); // #fc0
     * Prefixed values in format `"+=10"` supported. All four operations
     * (`+`, `-`, `*` and `/`) could be used. Optionally you can use units for `+`
     * and `-`: `"+=2em"`.
    \*/ Element.prototype.attr = function(params, value) {
        var el = this, node = el.node;
        if (!params) {
            if (node.nodeType != 1) {
                return {
                    text: node.nodeValue
                };
            }
            var attr = node.attributes, out = {};
            for(var i = 0, ii = attr.length; i < ii; i++){
                out[attr[i].nodeName] = attr[i].nodeValue;
            }
            return out;
        }
        if (is(params, "string")) {
            if (arguments.length > 1) {
                var json = {};
                json[params] = value;
                params = json;
            } else {
                return eve("snap.util.getattr." + params, el).firstDefined();
            }
        }
        for(var att in params){
            if (params[has](att)) {
                eve("snap.util.attr." + att, el, params[att]);
            }
        }
        return el;
    };
    /*\
 * Snap.parse
 [ method ]
 **
 * Parses SVG fragment and converts it into a @Fragment
 **
 - svg (string) SVG string
 = (Fragment) the @Fragment
\*/ Snap.parse = function(svg) {
        var f = glob.doc.createDocumentFragment(), full = true, div = glob.doc.createElement("div");
        svg = Str(svg);
        if (!svg.match(/^\s*<\s*svg(?:\s|>)/)) {
            svg = "<svg>" + svg + "</svg>";
            full = false;
        }
        div.innerHTML = svg;
        svg = div.getElementsByTagName("svg")[0];
        if (svg) {
            if (full) {
                f = svg;
            } else {
                while(svg.firstChild){
                    f.appendChild(svg.firstChild);
                }
            }
        }
        return new Fragment(f);
    };
    function Fragment(frag) {
        this.node = frag;
    }
    /*\
 * Snap.fragment
 [ method ]
 **
 * Creates a DOM fragment from a given list of elements or strings
 **
 - varargs (…) SVG string
 = (Fragment) the @Fragment
\*/ Snap.fragment = function() {
        var args = Array.prototype.slice.call(arguments, 0), f = glob.doc.createDocumentFragment();
        for(var i = 0, ii = args.length; i < ii; i++){
            var item = args[i];
            if (item.node && item.node.nodeType) {
                f.appendChild(item.node);
            }
            if (item.nodeType) {
                f.appendChild(item);
            }
            if (typeof item == "string") {
                f.appendChild(Snap.parse(item).node);
            }
        }
        return new Fragment(f);
    };
    function make(name, parent) {
        var res1 = $(name);
        parent.appendChild(res1);
        var el = wrap(res1);
        return el;
    }
    function Paper(w, h) {
        var res1, desc, defs, proto = Paper.prototype;
        if (w && w.tagName && w.tagName.toLowerCase() == "svg") {
            if (w.snap in hub) {
                return hub[w.snap];
            }
            var doc = w.ownerDocument;
            res1 = new Element(w);
            desc = w.getElementsByTagName("desc")[0];
            defs = w.getElementsByTagName("defs")[0];
            if (!desc) {
                desc = $("desc");
                desc.appendChild(doc.createTextNode("Created with Snap"));
                res1.node.appendChild(desc);
            }
            if (!defs) {
                defs = $("defs");
                res1.node.appendChild(defs);
            }
            res1.defs = defs;
            for(var key in proto)if (proto[has](key)) {
                res1[key] = proto[key];
            }
            res1.paper = res1.root = res1;
        } else {
            res1 = make("svg", glob.doc.body);
            $(res1.node, {
                height: h,
                version: 1.1,
                width: w,
                xmlns: xmlns
            });
        }
        return res1;
    }
    function wrap(dom) {
        if (!dom) {
            return dom;
        }
        if (dom instanceof Element || dom instanceof Fragment) {
            return dom;
        }
        if (dom.tagName && dom.tagName.toLowerCase() == "svg") {
            return new Paper(dom);
        }
        if (dom.tagName && dom.tagName.toLowerCase() == "object" && dom.type == "image/svg+xml") {
            return new Paper(dom.contentDocument.getElementsByTagName("svg")[0]);
        }
        return new Element(dom);
    }
    Snap._.make = make;
    Snap._.wrap = wrap;
    /*\
 * Paper.el
 [ method ]
 **
 * Creates an element on paper with a given name and no attributes
 **
 - name (string) tag name
 - attr (object) attributes
 = (Element) the current element
 > Usage
 | var c = paper.circle(10, 10, 10); // is the same as...
 | var c = paper.el("circle").attr({
 |     cx: 10,
 |     cy: 10,
 |     r: 10
 | });
 | // and the same as
 | var c = paper.el("circle", {
 |     cx: 10,
 |     cy: 10,
 |     r: 10
 | });
\*/ Paper.prototype.el = function(name, attr) {
        var el = make(name, this.node);
        attr && el.attr(attr);
        return el;
    };
    /*\
 * Element.children
 [ method ]
 **
 * Returns array of all the children of the element.
 = (array) array of Elements
\*/ Element.prototype.children = function() {
        var out = [], ch = this.node.childNodes;
        for(var i = 0, ii = ch.length; i < ii; i++){
            out[i] = Snap(ch[i]);
        }
        return out;
    };
    function jsonFiller(root, o) {
        for(var i = 0, ii = root.length; i < ii; i++){
            var item = {
                type: root[i].type,
                attr: root[i].attr()
            }, children = root[i].children();
            o.push(item);
            if (children.length) {
                jsonFiller(children, item.childNodes = []);
            }
        }
    }
    /*\
 * Element.toJSON
 [ method ]
 **
 * Returns object representation of the given element and all its children.
 = (object) in format
 o {
 o     type (string) this.type,
 o     attr (object) attributes map,
 o     childNodes (array) optional array of children in the same format
 o }
\*/ Element.prototype.toJSON = function() {
        var out = [];
        jsonFiller([
            this
        ], out);
        return out[0];
    };
    // default
    eve.on("snap.util.getattr", function() {
        var att = eve.nt();
        att = att.substring(att.lastIndexOf(".") + 1);
        var css = att.replace(/[A-Z]/g, function(letter) {
            return "-" + letter.toLowerCase();
        });
        if (cssAttr[has](css)) {
            return this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(css);
        } else {
            return $(this.node, att);
        }
    });
    var cssAttr = {
        "alignment-baseline": 0,
        "baseline-shift": 0,
        "clip": 0,
        "clip-path": 0,
        "clip-rule": 0,
        "color": 0,
        "color-interpolation": 0,
        "color-interpolation-filters": 0,
        "color-profile": 0,
        "color-rendering": 0,
        "cursor": 0,
        "direction": 0,
        "display": 0,
        "dominant-baseline": 0,
        "enable-background": 0,
        "fill": 0,
        "fill-opacity": 0,
        "fill-rule": 0,
        "filter": 0,
        "flood-color": 0,
        "flood-opacity": 0,
        "font": 0,
        "font-family": 0,
        "font-size": 0,
        "font-size-adjust": 0,
        "font-stretch": 0,
        "font-style": 0,
        "font-variant": 0,
        "font-weight": 0,
        "glyph-orientation-horizontal": 0,
        "glyph-orientation-vertical": 0,
        "image-rendering": 0,
        "kerning": 0,
        "letter-spacing": 0,
        "lighting-color": 0,
        "marker": 0,
        "marker-end": 0,
        "marker-mid": 0,
        "marker-start": 0,
        "mask": 0,
        "opacity": 0,
        "overflow": 0,
        "pointer-events": 0,
        "shape-rendering": 0,
        "stop-color": 0,
        "stop-opacity": 0,
        "stroke": 0,
        "stroke-dasharray": 0,
        "stroke-dashoffset": 0,
        "stroke-linecap": 0,
        "stroke-linejoin": 0,
        "stroke-miterlimit": 0,
        "stroke-opacity": 0,
        "stroke-width": 0,
        "text-anchor": 0,
        "text-decoration": 0,
        "text-rendering": 0,
        "unicode-bidi": 0,
        "visibility": 0,
        "word-spacing": 0,
        "writing-mode": 0
    };
    eve.on("snap.util.attr", function(value) {
        var att = eve.nt(), attr = {};
        att = att.substring(att.lastIndexOf(".") + 1);
        attr[att] = value;
        var style = att.replace(/-(\w)/gi, function(all, letter) {
            return letter.toUpperCase();
        }), css = att.replace(/[A-Z]/g, function(letter) {
            return "-" + letter.toLowerCase();
        });
        if (cssAttr[has](css)) {
            this.node.style[style] = value == null ? E : value;
        } else {
            $(this.node, attr);
        }
    });
    (function(proto) {})(Paper.prototype);
    // simple ajax
    /*\
 * Snap.ajax
 [ method ]
 **
 * Simple implementation of Ajax
 **
 - url (string) URL
 - postData (object|string) data for post request
 - callback (function) callback
 - scope (object) #optional scope of callback
 * or
 - url (string) URL
 - callback (function) callback
 - scope (object) #optional scope of callback
 = (XMLHttpRequest) the XMLHttpRequest object, just in case
\*/ Snap.ajax = function(url, postData, callback, scope) {
        var req = new XMLHttpRequest, id = ID();
        if (req) {
            if (is(postData, "function")) {
                scope = callback;
                callback = postData;
                postData = null;
            } else if (is(postData, "object")) {
                var pd = [];
                for(var key in postData)if (postData.hasOwnProperty(key)) {
                    pd.push(encodeURIComponent(key) + "=" + encodeURIComponent(postData[key]));
                }
                postData = pd.join("&");
            }
            req.open(postData ? "POST" : "GET", url, true);
            if (postData) {
                req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            }
            if (callback) {
                eve.once("snap.ajax." + id + ".0", callback);
                eve.once("snap.ajax." + id + ".200", callback);
                eve.once("snap.ajax." + id + ".304", callback);
            }
            req.onreadystatechange = function() {
                if (req.readyState != 4) return;
                eve("snap.ajax." + id + "." + req.status, scope, req);
            };
            if (req.readyState == 4) {
                return req;
            }
            req.send(postData);
            return req;
        }
    };
    /*\
 * Snap.load
 [ method ]
 **
 * Loads external SVG file as a @Fragment (see @Snap.ajax for more advanced AJAX)
 **
 - url (string) URL
 - callback (function) callback
 - scope (object) #optional scope of callback
\*/ Snap.load = function(url, callback, scope) {
        Snap.ajax(url, function(req) {
            var f = Snap.parse(req.responseText);
            scope ? callback.call(scope, f) : callback(f);
        });
    };
    var getOffset = function(elem) {
        var box = elem.getBoundingClientRect(), doc = elem.ownerDocument, body = doc.body, docElem = doc.documentElement, clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0, top = box.top + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop) - clientTop, left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
        return {
            y: top,
            x: left
        };
    };
    /*\
 * Snap.getElementByPoint
 [ method ]
 **
 * Returns you topmost element under given point.
 **
 = (object) Snap element object
 - x (number) x coordinate from the top left corner of the window
 - y (number) y coordinate from the top left corner of the window
 > Usage
 | Snap.getElementByPoint(mouseX, mouseY).attr({stroke: "#f00"});
\*/ Snap.getElementByPoint = function(x, y) {
        var paper = this, svg = paper.canvas, target = glob.doc.elementFromPoint(x, y);
        if (glob.win.opera && target.tagName == "svg") {
            var so = getOffset(target), sr = target.createSVGRect();
            sr.x = x - so.x;
            sr.y = y - so.y;
            sr.width = sr.height = 1;
            var hits = target.getIntersectionList(sr, null);
            if (hits.length) {
                target = hits[hits.length - 1];
            }
        }
        if (!target) {
            return null;
        }
        return wrap(target);
    };
    /*\
 * Snap.plugin
 [ method ]
 **
 * Let you write plugins. You pass in a function with five arguments, like this:
 | Snap.plugin(function (Snap, Element, Paper, global, Fragment) {
 |     Snap.newmethod = function () {};
 |     Element.prototype.newmethod = function () {};
 |     Paper.prototype.newmethod = function () {};
 | });
 * Inside the function you have access to all main objects (and their
 * prototypes). This allow you to extend anything you want.
 **
 - f (function) your plugin body
\*/ Snap.plugin = function(f) {
        f(Snap, Element, Paper, glob, Fragment);
    };
    glob.win.Snap = Snap;
    return Snap;
}(window || /*TURBOPACK member replacement*/ __turbopack_context__.e);
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function(Snap, Element, Paper, glob, Fragment) {
    var elproto = Element.prototype, is = Snap.is, Str = String, unit2px = Snap._unit2px, $ = Snap._.$, make = Snap._.make, getSomeDefs = Snap._.getSomeDefs, has = "hasOwnProperty", wrap = Snap._.wrap;
    /*\
     * Element.getBBox
     [ method ]
     **
     * Returns the bounding box descriptor for the given element
     **
     = (object) bounding box descriptor:
     o {
     o     cx: (number) x of the center,
     o     cy: (number) x of the center,
     o     h: (number) height,
     o     height: (number) height,
     o     path: (string) path command for the box,
     o     r0: (number) radius of a circle that fully encloses the box,
     o     r1: (number) radius of the smallest circle that can be enclosed,
     o     r2: (number) radius of the largest circle that can be enclosed,
     o     vb: (string) box as a viewbox command,
     o     w: (number) width,
     o     width: (number) width,
     o     x2: (number) x of the right side,
     o     x: (number) x of the left side,
     o     y2: (number) y of the bottom edge,
     o     y: (number) y of the top edge
     o }
    \*/ elproto.getBBox = function(isWithoutTransform) {
        if (this.type == "tspan") {
            return Snap._.box(this.node.getClientRects().item(0));
        }
        if (!Snap.Matrix || !Snap.path) {
            return this.node.getBBox();
        }
        var el = this, m = new Snap.Matrix;
        if (el.removed) {
            return Snap._.box();
        }
        while(el.type == "use"){
            if (!isWithoutTransform) {
                m = m.add(el.transform().localMatrix.translate(el.attr("x") || 0, el.attr("y") || 0));
            }
            if (el.original) {
                el = el.original;
            } else {
                var href = el.attr("xlink:href");
                el = el.original = el.node.ownerDocument.getElementById(href.substring(href.indexOf("#") + 1));
            }
        }
        var _ = el._, pathfinder = Snap.path.get[el.type] || Snap.path.get.deflt;
        try {
            if (isWithoutTransform) {
                _.bboxwt = pathfinder ? Snap.path.getBBox(el.realPath = pathfinder(el)) : Snap._.box(el.node.getBBox());
                return Snap._.box(_.bboxwt);
            } else {
                el.realPath = pathfinder(el);
                el.matrix = el.transform().localMatrix;
                _.bbox = Snap.path.getBBox(Snap.path.map(el.realPath, m.add(el.matrix)));
                return Snap._.box(_.bbox);
            }
        } catch (e) {
            // Firefox doesn’t give you bbox of hidden element
            return Snap._.box();
        }
    };
    var propString = function() {
        return this.string;
    };
    function extractTransform(el, tstr) {
        if (tstr == null) {
            var doReturn = true;
            if (el.type == "linearGradient" || el.type == "radialGradient") {
                tstr = el.node.getAttribute("gradientTransform");
            } else if (el.type == "pattern") {
                tstr = el.node.getAttribute("patternTransform");
            } else {
                tstr = el.node.getAttribute("transform");
            }
            if (!tstr) {
                return new Snap.Matrix;
            }
            tstr = Snap._.svgTransform2string(tstr);
        } else {
            if (!Snap._.rgTransform.test(tstr)) {
                tstr = Snap._.svgTransform2string(tstr);
            } else {
                tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || "");
            }
            if (is(tstr, "array")) {
                tstr = Snap.path ? Snap.path.toString.call(tstr) : Str(tstr);
            }
            el._.transform = tstr;
        }
        var m = Snap._.transform2matrix(tstr, el.getBBox(1));
        if (doReturn) {
            return m;
        } else {
            el.matrix = m;
        }
    }
    /*\
     * Element.transform
     [ method ]
     **
     * Gets or sets transformation of the element
     **
     - tstr (string) transform string in Snap or SVG format
     = (Element) the current element
     * or
     = (object) transformation descriptor:
     o {
     o     string (string) transform string,
     o     globalMatrix (Matrix) matrix of all transformations applied to element or its parents,
     o     localMatrix (Matrix) matrix of transformations applied only to the element,
     o     diffMatrix (Matrix) matrix of difference between global and local transformations,
     o     global (string) global transformation as string,
     o     local (string) local transformation as string,
     o     toString (function) returns `string` property
     o }
    \*/ elproto.transform = function(tstr) {
        var _ = this._;
        if (tstr == null) {
            var papa = this, global = new Snap.Matrix(this.node.getCTM()), local = extractTransform(this), ms = [
                local
            ], m = new Snap.Matrix, i, localString = local.toTransformString(), string1 = Str(local) == Str(this.matrix) ? Str(_.transform) : localString;
            while(papa.type != "svg" && (papa = papa.parent())){
                ms.push(extractTransform(papa));
            }
            i = ms.length;
            while(i--){
                m.add(ms[i]);
            }
            return {
                string: string1,
                globalMatrix: global,
                totalMatrix: m,
                localMatrix: local,
                diffMatrix: global.clone().add(local.invert()),
                global: global.toTransformString(),
                total: m.toTransformString(),
                local: localString,
                toString: propString
            };
        }
        if (tstr instanceof Snap.Matrix) {
            this.matrix = tstr;
            this._.transform = tstr.toTransformString();
        } else {
            extractTransform(this, tstr);
        }
        if (this.node) {
            if (this.type == "linearGradient" || this.type == "radialGradient") {
                $(this.node, {
                    gradientTransform: this.matrix
                });
            } else if (this.type == "pattern") {
                $(this.node, {
                    patternTransform: this.matrix
                });
            } else {
                $(this.node, {
                    transform: this.matrix
                });
            }
        }
        return this;
    };
    /*\
     * Element.parent
     [ method ]
     **
     * Returns the element's parent
     **
     = (Element) the parent element
    \*/ elproto.parent = function() {
        return wrap(this.node.parentNode);
    };
    /*\
     * Element.append
     [ method ]
     **
     * Appends the given element to current one
     **
     - el (Element|Set) element to append
     = (Element) the parent element
    \*/ /*\
     * Element.add
     [ method ]
     **
     * See @Element.append
    \*/ elproto.append = elproto.add = function(el) {
        if (el) {
            if (el.type == "set") {
                var it = this;
                el.forEach(function(el) {
                    it.add(el);
                });
                return this;
            }
            el = wrap(el);
            this.node.appendChild(el.node);
            el.paper = this.paper;
        }
        return this;
    };
    /*\
     * Element.appendTo
     [ method ]
     **
     * Appends the current element to the given one
     **
     - el (Element) parent element to append to
     = (Element) the child element
    \*/ elproto.appendTo = function(el) {
        if (el) {
            el = wrap(el);
            el.append(this);
        }
        return this;
    };
    /*\
     * Element.prepend
     [ method ]
     **
     * Prepends the given element to the current one
     **
     - el (Element) element to prepend
     = (Element) the parent element
    \*/ elproto.prepend = function(el) {
        if (el) {
            if (el.type == "set") {
                var it = this, first;
                el.forEach(function(el) {
                    if (first) {
                        first.after(el);
                    } else {
                        it.prepend(el);
                    }
                    first = el;
                });
                return this;
            }
            el = wrap(el);
            var parent = el.parent();
            this.node.insertBefore(el.node, this.node.firstChild);
            this.add && this.add();
            el.paper = this.paper;
            this.parent() && this.parent().add();
            parent && parent.add();
        }
        return this;
    };
    /*\
     * Element.prependTo
     [ method ]
     **
     * Prepends the current element to the given one
     **
     - el (Element) parent element to prepend to
     = (Element) the child element
    \*/ elproto.prependTo = function(el) {
        el = wrap(el);
        el.prepend(this);
        return this;
    };
    /*\
     * Element.before
     [ method ]
     **
     * Inserts given element before the current one
     **
     - el (Element) element to insert
     = (Element) the parent element
    \*/ elproto.before = function(el) {
        if (el.type == "set") {
            var it = this;
            el.forEach(function(el) {
                var parent = el.parent();
                it.node.parentNode.insertBefore(el.node, it.node);
                parent && parent.add();
            });
            this.parent().add();
            return this;
        }
        el = wrap(el);
        var parent = el.parent();
        this.node.parentNode.insertBefore(el.node, this.node);
        this.parent() && this.parent().add();
        parent && parent.add();
        el.paper = this.paper;
        return this;
    };
    /*\
     * Element.after
     [ method ]
     **
     * Inserts given element after the current one
     **
     - el (Element) element to insert
     = (Element) the parent element
    \*/ elproto.after = function(el) {
        el = wrap(el);
        var parent = el.parent();
        if (this.node.nextSibling) {
            this.node.parentNode.insertBefore(el.node, this.node.nextSibling);
        } else {
            this.node.parentNode.appendChild(el.node);
        }
        this.parent() && this.parent().add();
        parent && parent.add();
        el.paper = this.paper;
        return this;
    };
    /*\
     * Element.insertBefore
     [ method ]
     **
     * Inserts the element after the given one
     **
     - el (Element) element next to whom insert to
     = (Element) the parent element
    \*/ elproto.insertBefore = function(el) {
        el = wrap(el);
        var parent = this.parent();
        el.node.parentNode.insertBefore(this.node, el.node);
        this.paper = el.paper;
        parent && parent.add();
        el.parent() && el.parent().add();
        return this;
    };
    /*\
     * Element.insertAfter
     [ method ]
     **
     * Inserts the element after the given one
     **
     - el (Element) element next to whom insert to
     = (Element) the parent element
    \*/ elproto.insertAfter = function(el) {
        el = wrap(el);
        var parent = this.parent();
        el.node.parentNode.insertBefore(this.node, el.node.nextSibling);
        this.paper = el.paper;
        parent && parent.add();
        el.parent() && el.parent().add();
        return this;
    };
    /*\
     * Element.remove
     [ method ]
     **
     * Removes element from the DOM
     = (Element) the detached element
    \*/ elproto.remove = function() {
        var parent = this.parent();
        this.node.parentNode && this.node.parentNode.removeChild(this.node);
        delete this.paper;
        this.removed = true;
        parent && parent.add();
        return this;
    };
    /*\
     * Element.select
     [ method ]
     **
     * Gathers the nested @Element matching the given set of CSS selectors
     **
     - query (string) CSS selector
     = (Element) result of query selection
    \*/ elproto.select = function(query) {
        return wrap(this.node.querySelector(query));
    };
    /*\
     * Element.selectAll
     [ method ]
     **
     * Gathers nested @Element objects matching the given set of CSS selectors
     **
     - query (string) CSS selector
     = (Set|array) result of query selection
    \*/ elproto.selectAll = function(query) {
        var nodelist = this.node.querySelectorAll(query), set = (Snap.set || Array)();
        for(var i = 0; i < nodelist.length; i++){
            set.push(wrap(nodelist[i]));
        }
        return set;
    };
    /*\
     * Element.asPX
     [ method ]
     **
     * Returns given attribute of the element as a `px` value (not %, em, etc.)
     **
     - attr (string) attribute name
     - value (string) #optional attribute value
     = (Element) result of query selection
    \*/ elproto.asPX = function(attr, value) {
        if (value == null) {
            value = this.attr(attr);
        }
        return +unit2px(this, attr, value);
    };
    // SIERRA Element.use(): I suggest adding a note about how to access the original element the returned <use> instantiates. It's a part of SVG with which ordinary web developers may be least familiar.
    /*\
     * Element.use
     [ method ]
     **
     * Creates a `<use>` element linked to the current element
     **
     = (Element) the `<use>` element
    \*/ elproto.use = function() {
        var use, id = this.node.id;
        if (!id) {
            id = this.id;
            $(this.node, {
                id: id
            });
        }
        if (this.type == "linearGradient" || this.type == "radialGradient" || this.type == "pattern") {
            use = make(this.type, this.node.parentNode);
        } else {
            use = make("use", this.node.parentNode);
        }
        $(use.node, {
            "xlink:href": "#" + id
        });
        use.original = this;
        return use;
    };
    function fixids(el) {
        var els = el.selectAll("*"), it, url = /^\s*url\(("|'|)(.*)\1\)\s*$/, ids = [], uses = {};
        function urltest(it, name) {
            var val = $(it.node, name);
            val = val && val.match(url);
            val = val && val[2];
            if (val && val.charAt() == "#") {
                val = val.substring(1);
            } else {
                return;
            }
            if (val) {
                uses[val] = (uses[val] || []).concat(function(id) {
                    var attr = {};
                    attr[name] = Snap.url(id);
                    $(it.node, attr);
                });
            }
        }
        function linktest(it) {
            var val = $(it.node, "xlink:href");
            if (val && val.charAt() == "#") {
                val = val.substring(1);
            } else {
                return;
            }
            if (val) {
                uses[val] = (uses[val] || []).concat(function(id) {
                    it.attr("xlink:href", "#" + id);
                });
            }
        }
        for(var i = 0, ii = els.length; i < ii; i++){
            it = els[i];
            urltest(it, "fill");
            urltest(it, "stroke");
            urltest(it, "filter");
            urltest(it, "mask");
            urltest(it, "clip-path");
            linktest(it);
            var oldid = $(it.node, "id");
            if (oldid) {
                $(it.node, {
                    id: it.id
                });
                ids.push({
                    old: oldid,
                    id: it.id
                });
            }
        }
        for(i = 0, ii = ids.length; i < ii; i++){
            var fs = uses[ids[i].old];
            if (fs) {
                for(var j = 0, jj = fs.length; j < jj; j++){
                    fs[j](ids[i].id);
                }
            }
        }
    }
    /*\
     * Element.clone
     [ method ]
     **
     * Creates a clone of the element and inserts it after the element
     **
     = (Element) the clone
    \*/ elproto.clone = function() {
        var clone = wrap(this.node.cloneNode(true));
        if ($(clone.node, "id")) {
            $(clone.node, {
                id: clone.id
            });
        }
        fixids(clone);
        clone.insertAfter(this);
        return clone;
    };
    /*\
     * Element.toDefs
     [ method ]
     **
     * Moves element to the shared `<defs>` area
     **
     = (Element) the element
    \*/ elproto.toDefs = function() {
        var defs = getSomeDefs(this);
        defs.appendChild(this.node);
        return this;
    };
    /*\
     * Element.toPattern
     [ method ]
     **
     * Creates a `<pattern>` element from the current element
     **
     * To create a pattern you have to specify the pattern rect:
     - x (string|number)
     - y (string|number)
     - width (string|number)
     - height (string|number)
     = (Element) the `<pattern>` element
     * You can use pattern later on as an argument for `fill` attribute:
     | var p = paper.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
     |         fill: "none",
     |         stroke: "#bada55",
     |         strokeWidth: 5
     |     }).pattern(0, 0, 10, 10),
     |     c = paper.circle(200, 200, 100);
     | c.attr({
     |     fill: p
     | });
    \*/ elproto.pattern = elproto.toPattern = function(x, y, width, height) {
        var p = make("pattern", getSomeDefs(this));
        if (x == null) {
            x = this.getBBox();
        }
        if (is(x, "object") && "x" in x) {
            y = x.y;
            width = x.width;
            height = x.height;
            x = x.x;
        }
        $(p.node, {
            x: x,
            y: y,
            width: width,
            height: height,
            patternUnits: "userSpaceOnUse",
            id: p.id,
            viewBox: [
                x,
                y,
                width,
                height
            ].join(" ")
        });
        p.node.appendChild(this.node);
        return p;
    };
    // SIERRA Element.marker(): clarify what a reference point is. E.g., helps you offset the object from its edge such as when centering it over a path.
    // SIERRA Element.marker(): I suggest the method should accept default reference point values.  Perhaps centered with (refX = width/2) and (refY = height/2)? Also, couldn't it assume the element's current _width_ and _height_? And please specify what _x_ and _y_ mean: offsets? If so, from where?  Couldn't they also be assigned default values?
    /*\
     * Element.marker
     [ method ]
     **
     * Creates a `<marker>` element from the current element
     **
     * To create a marker you have to specify the bounding rect and reference point:
     - x (number)
     - y (number)
     - width (number)
     - height (number)
     - refX (number)
     - refY (number)
     = (Element) the `<marker>` element
     * You can specify the marker later as an argument for `marker-start`, `marker-end`, `marker-mid`, and `marker` attributes. The `marker` attribute places the marker at every point along the path, and `marker-mid` places them at every point except the start and end.
    \*/ // TODO add usage for markers
    elproto.marker = function(x, y, width, height, refX, refY) {
        var p = make("marker", getSomeDefs(this));
        if (x == null) {
            x = this.getBBox();
        }
        if (is(x, "object") && "x" in x) {
            y = x.y;
            width = x.width;
            height = x.height;
            refX = x.refX || x.cx;
            refY = x.refY || x.cy;
            x = x.x;
        }
        $(p.node, {
            viewBox: [
                x,
                y,
                width,
                height
            ].join(" "),
            markerWidth: width,
            markerHeight: height,
            orient: "auto",
            refX: refX || 0,
            refY: refY || 0,
            id: p.id
        });
        p.node.appendChild(this.node);
        return p;
    };
    var eldata = {};
    /*\
     * Element.data
     [ method ]
     **
     * Adds or retrieves given value associated with given key. (Don’t confuse
     * with `data-` attributes)
     *
     * See also @Element.removeData
     - key (string) key to store data
     - value (any) #optional value to store
     = (object) @Element
     * or, if value is not specified:
     = (any) value
     > Usage
     | for (var i = 0, i < 5, i++) {
     |     paper.circle(10 + 15 * i, 10, 10)
     |          .attr({fill: "#000"})
     |          .data("i", i)
     |          .click(function () {
     |             alert(this.data("i"));
     |          });
     | }
    \*/ elproto.data = function(key, value) {
        var data = eldata[this.id] = eldata[this.id] || {};
        if (arguments.length == 0) {
            eve("snap.data.get." + this.id, this, data, null);
            return data;
        }
        if (arguments.length == 1) {
            if (Snap.is(key, "object")) {
                for(var i in key)if (key[has](i)) {
                    this.data(i, key[i]);
                }
                return this;
            }
            eve("snap.data.get." + this.id, this, data[key], key);
            return data[key];
        }
        data[key] = value;
        eve("snap.data.set." + this.id, this, value, key);
        return this;
    };
    /*\
     * Element.removeData
     [ method ]
     **
     * Removes value associated with an element by given key.
     * If key is not provided, removes all the data of the element.
     - key (string) #optional key
     = (object) @Element
    \*/ elproto.removeData = function(key) {
        if (key == null) {
            eldata[this.id] = {};
        } else {
            eldata[this.id] && delete eldata[this.id][key];
        }
        return this;
    };
    /*\
     * Element.outerSVG
     [ method ]
     **
     * Returns SVG code for the element, equivalent to HTML's `outerHTML`.
     *
     * See also @Element.innerSVG
     = (string) SVG code for the element
    \*/ /*\
     * Element.toString
     [ method ]
     **
     * See @Element.outerSVG
    \*/ elproto.outerSVG = elproto.toString = toString(1);
    /*\
     * Element.innerSVG
     [ method ]
     **
     * Returns SVG code for the element's contents, equivalent to HTML's `innerHTML`
     = (string) SVG code for the element
    \*/ elproto.innerSVG = toString();
    function toString(type) {
        return function() {
            var res1 = type ? "<" + this.type : "", attr = this.node.attributes, chld = this.node.childNodes;
            if (type) {
                for(var i = 0, ii = attr.length; i < ii; i++){
                    res1 += " " + attr[i].name + '="' + attr[i].value.replace(/"/g, '\\"') + '"';
                }
            }
            if (chld.length) {
                type && (res1 += ">");
                for(i = 0, ii = chld.length; i < ii; i++){
                    if (chld[i].nodeType == 3) {
                        res1 += chld[i].nodeValue;
                    } else if (chld[i].nodeType == 1) {
                        res1 += wrap(chld[i]).toString();
                    }
                }
                type && (res1 += "</" + this.type + ">");
            } else {
                type && (res1 += "/>");
            }
            return res1;
        };
    }
    elproto.toDataURL = function() {
        if (window && window.btoa) {
            var bb = this.getBBox(), svg = Snap.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                x: +bb.x.toFixed(3),
                y: +bb.y.toFixed(3),
                width: +bb.width.toFixed(3),
                height: +bb.height.toFixed(3),
                contents: this.outerSVG()
            });
            return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
        }
    };
    /*\
     * Fragment.select
     [ method ]
     **
     * See @Element.select
    \*/ Fragment.prototype.select = elproto.select;
    /*\
     * Fragment.selectAll
     [ method ]
     **
     * See @Element.selectAll
    \*/ Fragment.prototype.selectAll = elproto.selectAll;
});
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function(Snap, Element, Paper, glob, Fragment) {
    var objectToString = Object.prototype.toString, Str = String, math1 = Math, E = "";
    function Matrix(a, b, c, d, e, f) {
        if (b == null && objectToString.call(a) == "[object SVGMatrix]") {
            this.a = a.a;
            this.b = a.b;
            this.c = a.c;
            this.d = a.d;
            this.e = a.e;
            this.f = a.f;
            return;
        }
        if (a != null) {
            this.a = +a;
            this.b = +b;
            this.c = +c;
            this.d = +d;
            this.e = +e;
            this.f = +f;
        } else {
            this.a = 1;
            this.b = 0;
            this.c = 0;
            this.d = 1;
            this.e = 0;
            this.f = 0;
        }
    }
    (function(matrixproto) {
        /*\
         * Matrix.add
         [ method ]
         **
         * Adds the given matrix to existing one
         - a (number)
         - b (number)
         - c (number)
         - d (number)
         - e (number)
         - f (number)
         * or
         - matrix (object) @Matrix
        \*/ matrixproto.add = function(a, b, c, d, e, f) {
            if (a && a instanceof Matrix) {
                return this.add(a.a, a.b, a.c, a.d, a.e, a.f);
            }
            var aNew = a * this.a + b * this.c, bNew = a * this.b + b * this.d;
            this.e += e * this.a + f * this.c;
            this.f += e * this.b + f * this.d;
            this.c = c * this.a + d * this.c;
            this.d = c * this.b + d * this.d;
            this.a = aNew;
            this.b = bNew;
            return this;
        };
        /*\
         * Matrix.multLeft
         [ method ]
         **
         * Multiplies a passed affine transform to the left: M * this.
         - a (number)
         - b (number)
         - c (number)
         - d (number)
         - e (number)
         - f (number)
         * or
         - matrix (object) @Matrix
        \*/ Matrix.prototype.multLeft = function(a, b, c, d, e, f) {
            if (a && a instanceof Matrix) {
                return this.multLeft(a.a, a.b, a.c, a.d, a.e, a.f);
            }
            var aNew = a * this.a + c * this.b, cNew = a * this.c + c * this.d, eNew = a * this.e + c * this.f + e;
            this.b = b * this.a + d * this.b;
            this.d = b * this.c + d * this.d;
            this.f = b * this.e + d * this.f + f;
            this.a = aNew;
            this.c = cNew;
            this.e = eNew;
            return this;
        };
        /*\
         * Matrix.invert
         [ method ]
         **
         * Returns an inverted version of the matrix
         = (object) @Matrix
        \*/ matrixproto.invert = function() {
            var me = this, x = me.a * me.d - me.b * me.c;
            return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
        };
        /*\
         * Matrix.clone
         [ method ]
         **
         * Returns a copy of the matrix
         = (object) @Matrix
        \*/ matrixproto.clone = function() {
            return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
        };
        /*\
         * Matrix.translate
         [ method ]
         **
         * Translate the matrix
         - x (number) horizontal offset distance
         - y (number) vertical offset distance
        \*/ matrixproto.translate = function(x, y) {
            this.e += x * this.a + y * this.c;
            this.f += x * this.b + y * this.d;
            return this;
        };
        /*\
         * Matrix.scale
         [ method ]
         **
         * Scales the matrix
         - x (number) amount to be scaled, with `1` resulting in no change
         - y (number) #optional amount to scale along the vertical axis. (Otherwise `x` applies to both axes.)
         - cx (number) #optional horizontal origin point from which to scale
         - cy (number) #optional vertical origin point from which to scale
         * Default cx, cy is the middle point of the element.
        \*/ matrixproto.scale = function(x, y, cx, cy) {
            y == null && (y = x);
            (cx || cy) && this.translate(cx, cy);
            this.a *= x;
            this.b *= x;
            this.c *= y;
            this.d *= y;
            (cx || cy) && this.translate(-cx, -cy);
            return this;
        };
        /*\
         * Matrix.rotate
         [ method ]
         **
         * Rotates the matrix
         - a (number) angle of rotation, in degrees
         - x (number) horizontal origin point from which to rotate
         - y (number) vertical origin point from which to rotate
        \*/ matrixproto.rotate = function(a, x, y) {
            a = Snap.rad(a);
            x = x || 0;
            y = y || 0;
            var cos = +math1.cos(a).toFixed(9), sin = +math1.sin(a).toFixed(9);
            this.add(cos, sin, -sin, cos, x, y);
            return this.add(1, 0, 0, 1, -x, -y);
        };
        /*\
         * Matrix.skewX
         [ method ]
         **
         * Skews the matrix along the x-axis
         - x (number) Angle to skew along the x-axis (in degrees).
        \*/ matrixproto.skewX = function(x) {
            return this.skew(x, 0);
        };
        /*\
         * Matrix.skewY
         [ method ]
         **
         * Skews the matrix along the y-axis
         - y (number) Angle to skew along the y-axis (in degrees).
        \*/ matrixproto.skewY = function(y) {
            return this.skew(0, y);
        };
        /*\
         * Matrix.skew
         [ method ]
         **
         * Skews the matrix
         - y (number) Angle to skew along the y-axis (in degrees).
         - x (number) Angle to skew along the x-axis (in degrees).
        \*/ matrixproto.skew = function(x, y) {
            x = x || 0;
            y = y || 0;
            x = Snap.rad(x);
            y = Snap.rad(y);
            var c = math1.tan(x).toFixed(9);
            var b = math1.tan(y).toFixed(9);
            return this.add(1, b, c, 1, 0, 0);
        };
        /*\
         * Matrix.x
         [ method ]
         **
         * Returns x coordinate for given point after transformation described by the matrix. See also @Matrix.y
         - x (number)
         - y (number)
         = (number) x
        \*/ matrixproto.x = function(x, y) {
            return x * this.a + y * this.c + this.e;
        };
        /*\
         * Matrix.y
         [ method ]
         **
         * Returns y coordinate for given point after transformation described by the matrix. See also @Matrix.x
         - x (number)
         - y (number)
         = (number) y
        \*/ matrixproto.y = function(x, y) {
            return x * this.b + y * this.d + this.f;
        };
        matrixproto.get = function(i) {
            return +this[Str.fromCharCode(97 + i)].toFixed(4);
        };
        matrixproto.toString = function() {
            return "matrix(" + [
                this.get(0),
                this.get(1),
                this.get(2),
                this.get(3),
                this.get(4),
                this.get(5)
            ].join() + ")";
        };
        matrixproto.offset = function() {
            return [
                this.e.toFixed(4),
                this.f.toFixed(4)
            ];
        };
        function norm(a) {
            return a[0] * a[0] + a[1] * a[1];
        }
        function normalize(a) {
            var mag = math1.sqrt(norm(a));
            a[0] && (a[0] /= mag);
            a[1] && (a[1] /= mag);
        }
        /*\
         * Matrix.determinant
         [ method ]
         **
         * Finds determinant of the given matrix.
         = (number) determinant
        \*/ matrixproto.determinant = function() {
            return this.a * this.d - this.b * this.c;
        };
        /*\
         * Matrix.split
         [ method ]
         **
         * Splits matrix into primitive transformations
         = (object) in format:
         o dx (number) translation by x
         o dy (number) translation by y
         o scalex (number) scale by x
         o scaley (number) scale by y
         o shear (number) shear
         o rotate (number) rotation in deg
         o isSimple (boolean) could it be represented via simple transformations
        \*/ matrixproto.split = function() {
            var out = {};
            // translation
            out.dx = this.e;
            out.dy = this.f;
            // scale and shear
            var row = [
                [
                    this.a,
                    this.b
                ],
                [
                    this.c,
                    this.d
                ]
            ];
            out.scalex = math1.sqrt(norm(row[0]));
            normalize(row[0]);
            out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
            row[1] = [
                row[1][0] - row[0][0] * out.shear,
                row[1][1] - row[0][1] * out.shear
            ];
            out.scaley = math1.sqrt(norm(row[1]));
            normalize(row[1]);
            out.shear /= out.scaley;
            if (this.determinant() < 0) {
                out.scalex = -out.scalex;
            }
            // rotation
            var sin = row[0][1], cos = row[1][1];
            if (cos < 0) {
                out.rotate = Snap.deg(math1.acos(cos));
                if (sin < 0) {
                    out.rotate = 360 - out.rotate;
                }
            } else {
                out.rotate = Snap.deg(math1.asin(sin));
            }
            out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
            out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
            out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
            return out;
        };
        /*\
         * Matrix.toTransformString
         [ method ]
         **
         * Returns transform string that represents given matrix
         = (string) transform string
        \*/ matrixproto.toTransformString = function(shorter) {
            var s = shorter || this.split();
            if (!+s.shear.toFixed(9)) {
                s.scalex = +s.scalex.toFixed(4);
                s.scaley = +s.scaley.toFixed(4);
                s.rotate = +s.rotate.toFixed(4);
                return (s.dx || s.dy ? "t" + [
                    +s.dx.toFixed(4),
                    +s.dy.toFixed(4)
                ] : E) + (s.rotate ? "r" + [
                    +s.rotate.toFixed(4),
                    0,
                    0
                ] : E) + (s.scalex != 1 || s.scaley != 1 ? "s" + [
                    s.scalex,
                    s.scaley,
                    0,
                    0
                ] : E);
            } else {
                return "m" + [
                    this.get(0),
                    this.get(1),
                    this.get(2),
                    this.get(3),
                    this.get(4),
                    this.get(5)
                ];
            }
        };
    })(Matrix.prototype);
    /*\
     * Snap.Matrix
     [ method ]
     **
     * Matrix constructor, extend on your own risk.
     * To create matrices use @Snap.matrix.
    \*/ Snap.Matrix = Matrix;
    /*\
     * Snap.matrix
     [ method ]
     **
     * Utility method
     **
     * Returns a matrix based on the given parameters
     - a (number)
     - b (number)
     - c (number)
     - d (number)
     - e (number)
     - f (number)
     * or
     - svgMatrix (SVGMatrix)
     = (object) @Matrix
    \*/ Snap.matrix = function(a, b, c, d, e, f) {
        return new Matrix(a, b, c, d, e, f);
    };
});
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function(Snap, Element, Paper, glob, Fragment) {
    var has = "hasOwnProperty", make = Snap._.make, wrap = Snap._.wrap, is = Snap.is, getSomeDefs = Snap._.getSomeDefs, reURLValue = /^url\((['"]?)([^)]+)\1\)$/, $ = Snap._.$, URL = Snap.url, Str = String, separator = Snap._.separator, E = "";
    /*\
     * Snap.deurl
     [ method ]
     **
     * Unwraps path from `"url(<path>)"`.
     - value (string) url path
     = (string) unwrapped path
    \*/ Snap.deurl = function(value) {
        var res1 = String(value).match(reURLValue);
        return res1 ? res1[2] : value;
    };
    // Attributes event handlers
    eve.on("snap.util.attr.mask", function(value) {
        if (value instanceof Element || value instanceof Fragment) {
            eve.stop();
            if (value instanceof Fragment && value.node.childNodes.length == 1) {
                value = value.node.firstChild;
                getSomeDefs(this).appendChild(value);
                value = wrap(value);
            }
            if (value.type == "mask") {
                var mask = value;
            } else {
                mask = make("mask", getSomeDefs(this));
                mask.node.appendChild(value.node);
            }
            !mask.node.id && $(mask.node, {
                id: mask.id
            });
            $(this.node, {
                mask: URL(mask.id)
            });
        }
    });
    (function(clipIt) {
        eve.on("snap.util.attr.clip", clipIt);
        eve.on("snap.util.attr.clip-path", clipIt);
        eve.on("snap.util.attr.clipPath", clipIt);
    })(function(value) {
        if (value instanceof Element || value instanceof Fragment) {
            eve.stop();
            var clip, node = value.node;
            while(node){
                if (node.nodeName === "clipPath") {
                    clip = new Element(node);
                    break;
                }
                if (node.nodeName === "svg") {
                    clip = undefined;
                    break;
                }
                node = node.parentNode;
            }
            if (!clip) {
                clip = make("clipPath", getSomeDefs(this));
                clip.node.appendChild(value.node);
                !clip.node.id && $(clip.node, {
                    id: clip.id
                });
            }
            $(this.node, {
                "clip-path": URL(clip.node.id || clip.id)
            });
        }
    });
    function fillStroke(name) {
        return function(value) {
            eve.stop();
            if (value instanceof Fragment && value.node.childNodes.length == 1 && (value.node.firstChild.tagName == "radialGradient" || value.node.firstChild.tagName == "linearGradient" || value.node.firstChild.tagName == "pattern")) {
                value = value.node.firstChild;
                getSomeDefs(this).appendChild(value);
                value = wrap(value);
            }
            if (value instanceof Element) {
                if (value.type == "radialGradient" || value.type == "linearGradient" || value.type == "pattern") {
                    if (!value.node.id) {
                        $(value.node, {
                            id: value.id
                        });
                    }
                    var fill = URL(value.node.id);
                } else {
                    fill = value.attr(name);
                }
            } else {
                fill = Snap.color(value);
                if (fill.error) {
                    var grad = Snap(getSomeDefs(this).ownerSVGElement).gradient(value);
                    if (grad) {
                        if (!grad.node.id) {
                            $(grad.node, {
                                id: grad.id
                            });
                        }
                        fill = URL(grad.node.id);
                    } else {
                        fill = value;
                    }
                } else {
                    fill = Str(fill);
                }
            }
            var attrs = {};
            attrs[name] = fill;
            $(this.node, attrs);
            this.node.style[name] = E;
        };
    }
    eve.on("snap.util.attr.fill", fillStroke("fill"));
    eve.on("snap.util.attr.stroke", fillStroke("stroke"));
    var gradrg = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
    eve.on("snap.util.grad.parse", function parseGrad(string1) {
        string1 = Str(string1);
        var tokens = string1.match(gradrg);
        if (!tokens) {
            return null;
        }
        var type = tokens[1], params = tokens[2], stops = tokens[3];
        params = params.split(/\s*,\s*/).map(function(el) {
            return +el == el ? +el : el;
        });
        if (params.length == 1 && params[0] == 0) {
            params = [];
        }
        stops = stops.split("-");
        stops = stops.map(function(el) {
            el = el.split(":");
            var out = {
                color: el[0]
            };
            if (el[1]) {
                out.offset = parseFloat(el[1]);
            }
            return out;
        });
        var len = stops.length, start = 0, j = 0;
        function seed(i, end) {
            var step = (end - start) / (i - j);
            for(var k = j; k < i; k++){
                stops[k].offset = +(+start + step * (k - j)).toFixed(2);
            }
            j = i;
            start = end;
        }
        len--;
        for(var i = 0; i < len; i++)if ("offset" in stops[i]) {
            seed(i, stops[i].offset);
        }
        stops[len].offset = stops[len].offset || 100;
        seed(len, stops[len].offset);
        return {
            type: type,
            params: params,
            stops: stops
        };
    });
    eve.on("snap.util.attr.d", function(value) {
        eve.stop();
        if (is(value, "array") && is(value[0], "array")) {
            value = Snap.path.toString.call(value);
        }
        value = Str(value);
        if (value.match(/[ruo]/i)) {
            value = Snap.path.toAbsolute(value);
        }
        $(this.node, {
            d: value
        });
    })(-1);
    eve.on("snap.util.attr.#text", function(value) {
        eve.stop();
        value = Str(value);
        var txt = glob.doc.createTextNode(value);
        while(this.node.firstChild){
            this.node.removeChild(this.node.firstChild);
        }
        this.node.appendChild(txt);
    })(-1);
    eve.on("snap.util.attr.path", function(value) {
        eve.stop();
        this.attr({
            d: value
        });
    })(-1);
    eve.on("snap.util.attr.class", function(value) {
        eve.stop();
        this.node.className.baseVal = value;
    })(-1);
    eve.on("snap.util.attr.viewBox", function(value) {
        var vb;
        if (is(value, "object") && "x" in value) {
            vb = [
                value.x,
                value.y,
                value.width,
                value.height
            ].join(" ");
        } else if (is(value, "array")) {
            vb = value.join(" ");
        } else {
            vb = value;
        }
        $(this.node, {
            viewBox: vb
        });
        eve.stop();
    })(-1);
    eve.on("snap.util.attr.transform", function(value) {
        this.transform(value);
        eve.stop();
    })(-1);
    eve.on("snap.util.attr.r", function(value) {
        if (this.type == "rect") {
            eve.stop();
            $(this.node, {
                rx: value,
                ry: value
            });
        }
    })(-1);
    eve.on("snap.util.attr.textpath", function(value) {
        eve.stop();
        if (this.type == "text") {
            var id, tp, node;
            if (!value && this.textPath) {
                tp = this.textPath;
                while(tp.node.firstChild){
                    this.node.appendChild(tp.node.firstChild);
                }
                tp.remove();
                delete this.textPath;
                return;
            }
            if (is(value, "string")) {
                var defs = getSomeDefs(this), path = wrap(defs.parentNode).path(value);
                defs.appendChild(path.node);
                id = path.id;
                path.attr({
                    id: id
                });
            } else {
                value = wrap(value);
                if (value instanceof Element) {
                    id = value.attr("id");
                    if (!id) {
                        id = value.id;
                        value.attr({
                            id: id
                        });
                    }
                }
            }
            if (id) {
                tp = this.textPath;
                node = this.node;
                if (tp) {
                    tp.attr({
                        "xlink:href": "#" + id
                    });
                } else {
                    tp = $("textPath", {
                        "xlink:href": "#" + id
                    });
                    while(node.firstChild){
                        tp.appendChild(node.firstChild);
                    }
                    node.appendChild(tp);
                    this.textPath = wrap(tp);
                }
            }
        }
    })(-1);
    eve.on("snap.util.attr.text", function(value) {
        if (this.type == "text") {
            var i = 0, node = this.node, tuner = function(chunk) {
                var out = $("tspan");
                if (is(chunk, "array")) {
                    for(var i = 0; i < chunk.length; i++){
                        out.appendChild(tuner(chunk[i]));
                    }
                } else {
                    out.appendChild(glob.doc.createTextNode(chunk));
                }
                out.normalize && out.normalize();
                return out;
            };
            while(node.firstChild){
                node.removeChild(node.firstChild);
            }
            var tuned = tuner(value);
            while(tuned.firstChild){
                node.appendChild(tuned.firstChild);
            }
        }
        eve.stop();
    })(-1);
    function setFontSize(value) {
        eve.stop();
        if (value == +value) {
            value += "px";
        }
        this.node.style.fontSize = value;
    }
    eve.on("snap.util.attr.fontSize", setFontSize)(-1);
    eve.on("snap.util.attr.font-size", setFontSize)(-1);
    eve.on("snap.util.getattr.transform", function() {
        eve.stop();
        return this.transform();
    })(-1);
    eve.on("snap.util.getattr.textpath", function() {
        eve.stop();
        return this.textPath;
    })(-1);
    // Markers
    (function() {
        function getter(end) {
            return function() {
                eve.stop();
                var style = glob.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + end);
                if (style == "none") {
                    return style;
                } else {
                    return Snap(glob.doc.getElementById(style.match(reURLValue)[1]));
                }
            };
        }
        function setter(end) {
            return function(value) {
                eve.stop();
                var name = "marker" + end.charAt(0).toUpperCase() + end.substring(1);
                if (value == "" || !value) {
                    this.node.style[name] = "none";
                    return;
                }
                if (value.type == "marker") {
                    var id = value.node.id;
                    if (!id) {
                        $(value.node, {
                            id: value.id
                        });
                    }
                    this.node.style[name] = URL(id);
                    return;
                }
            };
        }
        eve.on("snap.util.getattr.marker-end", getter("end"))(-1);
        eve.on("snap.util.getattr.markerEnd", getter("end"))(-1);
        eve.on("snap.util.getattr.marker-start", getter("start"))(-1);
        eve.on("snap.util.getattr.markerStart", getter("start"))(-1);
        eve.on("snap.util.getattr.marker-mid", getter("mid"))(-1);
        eve.on("snap.util.getattr.markerMid", getter("mid"))(-1);
        eve.on("snap.util.attr.marker-end", setter("end"))(-1);
        eve.on("snap.util.attr.markerEnd", setter("end"))(-1);
        eve.on("snap.util.attr.marker-start", setter("start"))(-1);
        eve.on("snap.util.attr.markerStart", setter("start"))(-1);
        eve.on("snap.util.attr.marker-mid", setter("mid"))(-1);
        eve.on("snap.util.attr.markerMid", setter("mid"))(-1);
    })();
    eve.on("snap.util.getattr.r", function() {
        if (this.type == "rect" && $(this.node, "rx") == $(this.node, "ry")) {
            eve.stop();
            return $(this.node, "rx");
        }
    })(-1);
    function textExtract(node) {
        var out = [];
        var children = node.childNodes;
        for(var i = 0, ii = children.length; i < ii; i++){
            var chi = children[i];
            if (chi.nodeType == 3) {
                out.push(chi.nodeValue);
            }
            if (chi.tagName == "tspan") {
                if (chi.childNodes.length == 1 && chi.firstChild.nodeType == 3) {
                    out.push(chi.firstChild.nodeValue);
                } else {
                    out.push(textExtract(chi));
                }
            }
        }
        return out;
    }
    eve.on("snap.util.getattr.text", function() {
        if (this.type == "text" || this.type == "tspan") {
            eve.stop();
            var out = textExtract(this.node);
            return out.length == 1 ? out[0] : out;
        }
    })(-1);
    eve.on("snap.util.getattr.#text", function() {
        return this.node.textContent;
    })(-1);
    eve.on("snap.util.getattr.fill", function(internal) {
        if (internal) {
            return;
        }
        eve.stop();
        var value = eve("snap.util.getattr.fill", this, true).firstDefined();
        return Snap(Snap.deurl(value)) || value;
    })(-1);
    eve.on("snap.util.getattr.stroke", function(internal) {
        if (internal) {
            return;
        }
        eve.stop();
        var value = eve("snap.util.getattr.stroke", this, true).firstDefined();
        return Snap(Snap.deurl(value)) || value;
    })(-1);
    eve.on("snap.util.getattr.viewBox", function() {
        eve.stop();
        var vb = $(this.node, "viewBox");
        if (vb) {
            vb = vb.split(separator);
            return Snap._.box(+vb[0], +vb[1], +vb[2], +vb[3]);
        } else {
            return;
        }
    })(-1);
    eve.on("snap.util.getattr.points", function() {
        var p = $(this.node, "points");
        eve.stop();
        if (p) {
            return p.split(separator);
        } else {
            return;
        }
    })(-1);
    eve.on("snap.util.getattr.path", function() {
        var p = $(this.node, "d");
        eve.stop();
        return p;
    })(-1);
    eve.on("snap.util.getattr.class", function() {
        return this.node.className.baseVal;
    })(-1);
    function getFontSize() {
        eve.stop();
        return this.node.style.fontSize;
    }
    eve.on("snap.util.getattr.fontSize", getFontSize)(-1);
    eve.on("snap.util.getattr.font-size", getFontSize)(-1);
});
// Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function(Snap, Element, Paper, glob, Fragment) {
    var rgNotSpace = /\S+/g, rgBadSpace = /[\t\r\n\f]/g, rgTrim = /(^\s+|\s+$)/g, Str = String, elproto = Element.prototype;
    /*\
     * Element.addClass
     [ method ]
     **
     * Adds given class name or list of class names to the element.
     - value (string) class name or space separated list of class names
     **
     = (Element) original element.
    \*/ elproto.addClass = function(value) {
        var classes = Str(value || "").match(rgNotSpace) || [], elem = this.node, className = elem.className.baseVal, curClasses = className.match(rgNotSpace) || [], j, pos, clazz, finalValue;
        if (classes.length) {
            j = 0;
            while(clazz = classes[j++]){
                pos = curClasses.indexOf(clazz);
                if (!~pos) {
                    curClasses.push(clazz);
                }
            }
            finalValue = curClasses.join(" ");
            if (className != finalValue) {
                elem.className.baseVal = finalValue;
            }
        }
        return this;
    };
    /*\
     * Element.removeClass
     [ method ]
     **
     * Removes given class name or list of class names from the element.
     - value (string) class name or space separated list of class names
     **
     = (Element) original element.
    \*/ elproto.removeClass = function(value) {
        var classes = Str(value || "").match(rgNotSpace) || [], elem = this.node, className = elem.className.baseVal, curClasses = className.match(rgNotSpace) || [], j, pos, clazz, finalValue;
        if (curClasses.length) {
            j = 0;
            while(clazz = classes[j++]){
                pos = curClasses.indexOf(clazz);
                if (~pos) {
                    curClasses.splice(pos, 1);
                }
            }
            finalValue = curClasses.join(" ");
            if (className != finalValue) {
                elem.className.baseVal = finalValue;
            }
        }
        return this;
    };
    /*\
     * Element.hasClass
     [ method ]
     **
     * Checks if the element has a given class name in the list of class names applied to it.
     - value (string) class name
     **
     = (boolean) `true` if the element has given class
    \*/ elproto.hasClass = function(value) {
        var elem = this.node, className = elem.className.baseVal, curClasses = className.match(rgNotSpace) || [];
        return !!~curClasses.indexOf(value);
    };
    /*\
     * Element.toggleClass
     [ method ]
     **
     * Add or remove one or more classes from the element, depending on either
     * the class’s presence or the value of the `flag` argument.
     - value (string) class name or space separated list of class names
     - flag (boolean) value to determine whether the class should be added or removed
     **
     = (Element) original element.
    \*/ elproto.toggleClass = function(value, flag) {
        if (flag != null) {
            if (flag) {
                return this.addClass(value);
            } else {
                return this.removeClass(value);
            }
        }
        var classes = (value || "").match(rgNotSpace) || [], elem = this.node, className = elem.className.baseVal, curClasses = className.match(rgNotSpace) || [], j, pos, clazz, finalValue;
        j = 0;
        while(clazz = classes[j++]){
            pos = curClasses.indexOf(clazz);
            if (~pos) {
                curClasses.splice(pos, 1);
            } else {
                curClasses.push(clazz);
            }
        }
        finalValue = curClasses.join(" ");
        if (className != finalValue) {
            elem.className.baseVal = finalValue;
        }
        return this;
    };
});
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function(Snap, Element, Paper, glob, Fragment) {
    var operators = {
        "+": function(x, y) {
            return x + y;
        },
        "-": function(x, y) {
            return x - y;
        },
        "/": function(x, y) {
            return x / y;
        },
        "*": function(x, y) {
            return x * y;
        }
    }, Str = String, reUnit = /[a-z]+$/i, reAddon = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
    function getNumber(val) {
        return val;
    }
    function getUnit(unit) {
        return function(val) {
            return +val.toFixed(3) + unit;
        };
    }
    eve.on("snap.util.attr", function(val) {
        var plus = Str(val).match(reAddon);
        if (plus) {
            var evnt = eve.nt(), name = evnt.substring(evnt.lastIndexOf(".") + 1), a = this.attr(name), atr = {};
            eve.stop();
            var unit = plus[3] || "", aUnit = a.match(reUnit), op = operators[plus[1]];
            if (aUnit && aUnit == unit) {
                val = op(parseFloat(a), +plus[2]);
            } else {
                a = this.asPX(name);
                val = op(this.asPX(name), this.asPX(name, plus[2] + unit));
            }
            if (isNaN(a) || isNaN(val)) {
                return;
            }
            atr[name] = val;
            this.attr(atr);
        }
    })(-10);
    eve.on("snap.util.equal", function(name, b) {
        var A, B, a = Str(this.attr(name) || ""), el = this, bplus = Str(b).match(reAddon);
        if (bplus) {
            eve.stop();
            var unit = bplus[3] || "", aUnit = a.match(reUnit), op = operators[bplus[1]];
            if (aUnit && aUnit == unit) {
                return {
                    from: parseFloat(a),
                    to: op(parseFloat(a), +bplus[2]),
                    f: getUnit(aUnit)
                };
            } else {
                a = this.asPX(name);
                return {
                    from: a,
                    to: op(a, this.asPX(name, bplus[2] + unit)),
                    f: getNumber
                };
            }
        }
    })(-10);
});
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function(Snap, Element, Paper, glob, Fragment) {
    var proto = Paper.prototype, is = Snap.is;
    /*\
     * Paper.rect
     [ method ]
     *
     * Draws a rectangle
     **
     - x (number) x coordinate of the top left corner
     - y (number) y coordinate of the top left corner
     - width (number) width
     - height (number) height
     - rx (number) #optional horizontal radius for rounded corners, default is 0
     - ry (number) #optional vertical radius for rounded corners, default is rx or 0
     = (object) the `rect` element
     **
     > Usage
     | // regular rectangle
     | var c = paper.rect(10, 10, 50, 50);
     | // rectangle with rounded corners
     | var c = paper.rect(40, 40, 50, 50, 10);
    \*/ proto.rect = function(x, y, w, h, rx, ry) {
        var attr;
        if (ry == null) {
            ry = rx;
        }
        if (is(x, "object") && x == "[object Object]") {
            attr = x;
        } else if (x != null) {
            attr = {
                x: x,
                y: y,
                width: w,
                height: h
            };
            if (rx != null) {
                attr.rx = rx;
                attr.ry = ry;
            }
        }
        return this.el("rect", attr);
    };
    /*\
     * Paper.circle
     [ method ]
     **
     * Draws a circle
     **
     - x (number) x coordinate of the centre
     - y (number) y coordinate of the centre
     - r (number) radius
     = (object) the `circle` element
     **
     > Usage
     | var c = paper.circle(50, 50, 40);
    \*/ proto.circle = function(cx, cy, r) {
        var attr;
        if (is(cx, "object") && cx == "[object Object]") {
            attr = cx;
        } else if (cx != null) {
            attr = {
                cx: cx,
                cy: cy,
                r: r
            };
        }
        return this.el("circle", attr);
    };
    var preload = function() {
        function onerror() {
            this.parentNode.removeChild(this);
        }
        return function(src, f) {
            var img = glob.doc.createElement("img"), body = glob.doc.body;
            img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
            img.onload = function() {
                f.call(img);
                img.onload = img.onerror = null;
                body.removeChild(img);
            };
            img.onerror = onerror;
            body.appendChild(img);
            img.src = src;
        };
    }();
    /*\
     * Paper.image
     [ method ]
     **
     * Places an image on the surface
     **
     - src (string) URI of the source image
     - x (number) x offset position
     - y (number) y offset position
     - width (number) width of the image
     - height (number) height of the image
     = (object) the `image` element
     * or
     = (object) Snap element object with type `image`
     **
     > Usage
     | var c = paper.image("apple.png", 10, 10, 80, 80);
    \*/ proto.image = function(src, x, y, width, height) {
        var el = this.el("image");
        if (is(src, "object") && "src" in src) {
            el.attr(src);
        } else if (src != null) {
            var set = {
                "xlink:href": src,
                preserveAspectRatio: "none"
            };
            if (x != null && y != null) {
                set.x = x;
                set.y = y;
            }
            if (width != null && height != null) {
                set.width = width;
                set.height = height;
            } else {
                preload(src, function() {
                    Snap._.$(el.node, {
                        width: this.offsetWidth,
                        height: this.offsetHeight
                    });
                });
            }
            Snap._.$(el.node, set);
        }
        return el;
    };
    /*\
     * Paper.ellipse
     [ method ]
     **
     * Draws an ellipse
     **
     - x (number) x coordinate of the centre
     - y (number) y coordinate of the centre
     - rx (number) horizontal radius
     - ry (number) vertical radius
     = (object) the `ellipse` element
     **
     > Usage
     | var c = paper.ellipse(50, 50, 40, 20);
    \*/ proto.ellipse = function(cx, cy, rx, ry) {
        var attr;
        if (is(cx, "object") && cx == "[object Object]") {
            attr = cx;
        } else if (cx != null) {
            attr = {
                cx: cx,
                cy: cy,
                rx: rx,
                ry: ry
            };
        }
        return this.el("ellipse", attr);
    };
    // SIERRA Paper.path(): Unclear from the link what a Catmull-Rom curveto is, and why it would make life any easier.
    /*\
     * Paper.path
     [ method ]
     **
     * Creates a `<path>` element using the given string as the path's definition
     - pathString (string) #optional path string in SVG format
     * Path string consists of one-letter commands, followed by comma seprarated arguments in numerical form. Example:
     | "M10,20L30,40"
     * This example features two commands: `M`, with arguments `(10, 20)` and `L` with arguments `(30, 40)`. Uppercase letter commands express coordinates in absolute terms, while lowercase commands express them in relative terms from the most recently declared coordinates.
     *
     # <p>Here is short list of commands available, for more details see <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path's data attribute's format are described in the SVG specification.">SVG path string format</a> or <a href="https://developer.mozilla.org/en/SVG/Tutorial/Paths">article about path strings at MDN</a>.</p>
     # <table><thead><tr><th>Command</th><th>Name</th><th>Parameters</th></tr></thead><tbody>
     # <tr><td>M</td><td>moveto</td><td>(x y)+</td></tr>
     # <tr><td>Z</td><td>closepath</td><td>(none)</td></tr>
     # <tr><td>L</td><td>lineto</td><td>(x y)+</td></tr>
     # <tr><td>H</td><td>horizontal lineto</td><td>x+</td></tr>
     # <tr><td>V</td><td>vertical lineto</td><td>y+</td></tr>
     # <tr><td>C</td><td>curveto</td><td>(x1 y1 x2 y2 x y)+</td></tr>
     # <tr><td>S</td><td>smooth curveto</td><td>(x2 y2 x y)+</td></tr>
     # <tr><td>Q</td><td>quadratic Bézier curveto</td><td>(x1 y1 x y)+</td></tr>
     # <tr><td>T</td><td>smooth quadratic Bézier curveto</td><td>(x y)+</td></tr>
     # <tr><td>A</td><td>elliptical arc</td><td>(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+</td></tr>
     # <tr><td>R</td><td><a href="http://en.wikipedia.org/wiki/Catmull–Rom_spline#Catmull.E2.80.93Rom_spline">Catmull-Rom curveto</a>*</td><td>x1 y1 (x y)+</td></tr></tbody></table>
     * * _Catmull-Rom curveto_ is a not standard SVG command and added to make life easier.
     * Note: there is a special case when a path consists of only three commands: `M10,10R…z`. In this case the path connects back to its starting point.
     > Usage
     | var c = paper.path("M10 10L90 90");
     | // draw a diagonal line:
     | // move to 10,10, line to 90,90
    \*/ proto.path = function(d) {
        var attr;
        if (is(d, "object") && !is(d, "array")) {
            attr = d;
        } else if (d) {
            attr = {
                d: d
            };
        }
        return this.el("path", attr);
    };
    /*\
     * Paper.g
     [ method ]
     **
     * Creates a group element
     **
     - varargs (…) #optional elements to nest within the group
     = (object) the `g` element
     **
     > Usage
     | var c1 = paper.circle(),
     |     c2 = paper.rect(),
     |     g = paper.g(c2, c1); // note that the order of elements is different
     * or
     | var c1 = paper.circle(),
     |     c2 = paper.rect(),
     |     g = paper.g();
     | g.add(c2, c1);
    \*/ /*\
     * Paper.group
     [ method ]
     **
     * See @Paper.g
    \*/ proto.group = proto.g = function(first) {
        var attr, el = this.el("g");
        if (arguments.length == 1 && first && !first.type) {
            el.attr(first);
        } else if (arguments.length) {
            el.add(Array.prototype.slice.call(arguments, 0));
        }
        return el;
    };
    /*\
     * Paper.svg
     [ method ]
     **
     * Creates a nested SVG element.
     - x (number) @optional X of the element
     - y (number) @optional Y of the element
     - width (number) @optional width of the element
     - height (number) @optional height of the element
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     **
     = (object) the `svg` element
     **
    \*/ proto.svg = function(x, y, width, height, vbx, vby, vbw, vbh) {
        var attrs = {};
        if (is(x, "object") && y == null) {
            attrs = x;
        } else {
            if (x != null) {
                attrs.x = x;
            }
            if (y != null) {
                attrs.y = y;
            }
            if (width != null) {
                attrs.width = width;
            }
            if (height != null) {
                attrs.height = height;
            }
            if (vbx != null && vby != null && vbw != null && vbh != null) {
                attrs.viewBox = [
                    vbx,
                    vby,
                    vbw,
                    vbh
                ];
            }
        }
        return this.el("svg", attrs);
    };
    /*\
     * Paper.mask
     [ method ]
     **
     * Equivalent in behaviour to @Paper.g, except it’s a mask.
     **
     = (object) the `mask` element
     **
    \*/ proto.mask = function(first) {
        var attr, el = this.el("mask");
        if (arguments.length == 1 && first && !first.type) {
            el.attr(first);
        } else if (arguments.length) {
            el.add(Array.prototype.slice.call(arguments, 0));
        }
        return el;
    };
    /*\
     * Paper.ptrn
     [ method ]
     **
     * Equivalent in behaviour to @Paper.g, except it’s a pattern.
     - x (number) @optional X of the element
     - y (number) @optional Y of the element
     - width (number) @optional width of the element
     - height (number) @optional height of the element
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     **
     = (object) the `pattern` element
     **
    \*/ proto.ptrn = function(x, y, width, height, vx, vy, vw, vh) {
        if (is(x, "object")) {
            var attr = x;
        } else {
            attr = {
                patternUnits: "userSpaceOnUse"
            };
            if (x) {
                attr.x = x;
            }
            if (y) {
                attr.y = y;
            }
            if (width != null) {
                attr.width = width;
            }
            if (height != null) {
                attr.height = height;
            }
            if (vx != null && vy != null && vw != null && vh != null) {
                attr.viewBox = [
                    vx,
                    vy,
                    vw,
                    vh
                ];
            } else {
                attr.viewBox = [
                    x || 0,
                    y || 0,
                    width || 0,
                    height || 0
                ];
            }
        }
        return this.el("pattern", attr);
    };
    /*\
     * Paper.use
     [ method ]
     **
     * Creates a <use> element.
     - id (string) @optional id of element to link
     * or
     - id (Element) @optional element to link
     **
     = (object) the `use` element
     **
    \*/ proto.use = function(id) {
        if (id != null) {
            if (id instanceof Element) {
                if (!id.attr("id")) {
                    id.attr({
                        id: Snap._.id(id)
                    });
                }
                id = id.attr("id");
            }
            if (String(id).charAt() == "#") {
                id = id.substring(1);
            }
            return this.el("use", {
                "xlink:href": "#" + id
            });
        } else {
            return Element.prototype.use.call(this);
        }
    };
    /*\
     * Paper.symbol
     [ method ]
     **
     * Creates a <symbol> element.
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     = (object) the `symbol` element
     **
    \*/ proto.symbol = function(vx, vy, vw, vh) {
        var attr = {};
        if (vx != null && vy != null && vw != null && vh != null) {
            attr.viewBox = [
                vx,
                vy,
                vw,
                vh
            ];
        }
        return this.el("symbol", attr);
    };
    /*\
     * Paper.text
     [ method ]
     **
     * Draws a text string
     **
     - x (number) x coordinate position
     - y (number) y coordinate position
     - text (string|array) The text string to draw or array of strings to nest within separate `<tspan>` elements
     = (object) the `text` element
     **
     > Usage
     | var t1 = paper.text(50, 50, "Snap");
     | var t2 = paper.text(50, 50, ["S","n","a","p"]);
     | // Text path usage
     | t1.attr({textpath: "M10,10L100,100"});
     | // or
     | var pth = paper.path("M10,10L100,100");
     | t1.attr({textpath: pth});
    \*/ proto.text = function(x, y, text) {
        var attr = {};
        if (is(x, "object")) {
            attr = x;
        } else if (x != null) {
            attr = {
                x: x,
                y: y,
                text: text || ""
            };
        }
        return this.el("text", attr);
    };
    /*\
     * Paper.line
     [ method ]
     **
     * Draws a line
     **
     - x1 (number) x coordinate position of the start
     - y1 (number) y coordinate position of the start
     - x2 (number) x coordinate position of the end
     - y2 (number) y coordinate position of the end
     = (object) the `line` element
     **
     > Usage
     | var t1 = paper.line(50, 50, 100, 100);
    \*/ proto.line = function(x1, y1, x2, y2) {
        var attr = {};
        if (is(x1, "object")) {
            attr = x1;
        } else if (x1 != null) {
            attr = {
                x1: x1,
                x2: x2,
                y1: y1,
                y2: y2
            };
        }
        return this.el("line", attr);
    };
    /*\
     * Paper.polyline
     [ method ]
     **
     * Draws a polyline
     **
     - points (array) array of points
     * or
     - varargs (…) points
     = (object) the `polyline` element
     **
     > Usage
     | var p1 = paper.polyline([10, 10, 100, 100]);
     | var p2 = paper.polyline(10, 10, 100, 100);
    \*/ proto.polyline = function(points) {
        if (arguments.length > 1) {
            points = Array.prototype.slice.call(arguments, 0);
        }
        var attr = {};
        if (is(points, "object") && !is(points, "array")) {
            attr = points;
        } else if (points != null) {
            attr = {
                points: points
            };
        }
        return this.el("polyline", attr);
    };
    /*\
     * Paper.polygon
     [ method ]
     **
     * Draws a polygon. See @Paper.polyline
    \*/ proto.polygon = function(points) {
        if (arguments.length > 1) {
            points = Array.prototype.slice.call(arguments, 0);
        }
        var attr = {};
        if (is(points, "object") && !is(points, "array")) {
            attr = points;
        } else if (points != null) {
            attr = {
                points: points
            };
        }
        return this.el("polygon", attr);
    };
    // gradients
    (function() {
        var $ = Snap._.$;
        // gradients' helpers
        /*\
         * Element.stops
         [ method ]
         **
         * Only for gradients!
         * Returns array of gradient stops elements.
         = (array) the stops array.
        \*/ function Gstops() {
            return this.selectAll("stop");
        }
        /*\
         * Element.addStop
         [ method ]
         **
         * Only for gradients!
         * Adds another stop to the gradient.
         - color (string) stops color
         - offset (number) stops offset 0..100
         = (object) gradient element
        \*/ function GaddStop(color, offset) {
            var stop = $("stop"), attr = {
                offset: +offset + "%"
            };
            color = Snap.color(color);
            attr["stop-color"] = color.hex;
            if (color.opacity < 1) {
                attr["stop-opacity"] = color.opacity;
            }
            $(stop, attr);
            var stops = this.stops(), inserted;
            for(var i = 0; i < stops.length; i++){
                var stopOffset = parseFloat(stops[i].attr("offset"));
                if (stopOffset > offset) {
                    this.node.insertBefore(stop, stops[i].node);
                    inserted = true;
                    break;
                }
            }
            if (!inserted) {
                this.node.appendChild(stop);
            }
            return this;
        }
        function GgetBBox() {
            if (this.type == "linearGradient") {
                var x1 = $(this.node, "x1") || 0, x2 = $(this.node, "x2") || 1, y1 = $(this.node, "y1") || 0, y2 = $(this.node, "y2") || 0;
                return Snap._.box(x1, y1, math.abs(x2 - x1), math.abs(y2 - y1));
            } else {
                var cx = this.node.cx || .5, cy = this.node.cy || .5, r = this.node.r || 0;
                return Snap._.box(cx - r, cy - r, r * 2, r * 2);
            }
        }
        /*\
         * Element.setStops
         [ method ]
         **
         * Only for gradients!
         * Updates stops of the gradient based on passed gradient descriptor. See @Ppaer.gradient
         - str (string) gradient descriptor part after `()`.
         = (object) gradient element
         | var g = paper.gradient("l(0, 0, 1, 1)#000-#f00-#fff");
         | g.setStops("#fff-#000-#f00-#fc0");
        \*/ function GsetStops(str) {
            var grad = str, stops = this.stops();
            if (typeof str == "string") {
                grad = eve("snap.util.grad.parse", null, "l(0,0,0,1)" + str).firstDefined().stops;
            }
            if (!Snap.is(grad, "array")) {
                return;
            }
            for(var i = 0; i < stops.length; i++){
                if (grad[i]) {
                    var color = Snap.color(grad[i].color), attr = {
                        "offset": grad[i].offset + "%"
                    };
                    attr["stop-color"] = color.hex;
                    if (color.opacity < 1) {
                        attr["stop-opacity"] = color.opacity;
                    }
                    stops[i].attr(attr);
                } else {
                    stops[i].remove();
                }
            }
            for(i = stops.length; i < grad.length; i++){
                this.addStop(grad[i].color, grad[i].offset);
            }
            return this;
        }
        function gradient(defs, str) {
            var grad = eve("snap.util.grad.parse", null, str).firstDefined(), el;
            if (!grad) {
                return null;
            }
            grad.params.unshift(defs);
            if (grad.type.toLowerCase() == "l") {
                el = gradientLinear.apply(0, grad.params);
            } else {
                el = gradientRadial.apply(0, grad.params);
            }
            if (grad.type != grad.type.toLowerCase()) {
                $(el.node, {
                    gradientUnits: "userSpaceOnUse"
                });
            }
            var stops = grad.stops, len = stops.length;
            for(var i = 0; i < len; i++){
                var stop = stops[i];
                el.addStop(stop.color, stop.offset);
            }
            return el;
        }
        function gradientLinear(defs, x1, y1, x2, y2) {
            var el = Snap._.make("linearGradient", defs);
            el.stops = Gstops;
            el.addStop = GaddStop;
            el.getBBox = GgetBBox;
            el.setStops = GsetStops;
            if (x1 != null) {
                $(el.node, {
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2
                });
            }
            return el;
        }
        function gradientRadial(defs, cx, cy, r, fx, fy) {
            var el = Snap._.make("radialGradient", defs);
            el.stops = Gstops;
            el.addStop = GaddStop;
            el.getBBox = GgetBBox;
            if (cx != null) {
                $(el.node, {
                    cx: cx,
                    cy: cy,
                    r: r
                });
            }
            if (fx != null && fy != null) {
                $(el.node, {
                    fx: fx,
                    fy: fy
                });
            }
            return el;
        }
        /*\
         * Paper.gradient
         [ method ]
         **
         * Creates a gradient element
         **
         - gradient (string) gradient descriptor
         > Gradient Descriptor
         * The gradient descriptor is an expression formatted as
         * follows: `<type>(<coords>)<colors>`.  The `<type>` can be
         * either linear or radial.  The uppercase `L` or `R` letters
         * indicate absolute coordinates offset from the SVG surface.
         * Lowercase `l` or `r` letters indicate coordinates
         * calculated relative to the element to which the gradient is
         * applied.  Coordinates specify a linear gradient vector as
         * `x1`, `y1`, `x2`, `y2`, or a radial gradient as `cx`, `cy`,
         * `r` and optional `fx`, `fy` specifying a focal point away
         * from the center of the circle. Specify `<colors>` as a list
         * of dash-separated CSS color values.  Each color may be
         * followed by a custom offset value, separated with a colon
         * character.
         > Examples
         * Linear gradient, relative from top-left corner to bottom-right
         * corner, from black through red to white:
         | var g = paper.gradient("l(0, 0, 1, 1)#000-#f00-#fff");
         * Linear gradient, absolute from (0, 0) to (100, 100), from black
         * through red at 25% to white:
         | var g = paper.gradient("L(0, 0, 100, 100)#000-#f00:25-#fff");
         * Radial gradient, relative from the center of the element with radius
         * half the width, from black to white:
         | var g = paper.gradient("r(0.5, 0.5, 0.5)#000-#fff");
         * To apply the gradient:
         | paper.circle(50, 50, 40).attr({
         |     fill: g
         | });
         = (object) the `gradient` element
        \*/ proto.gradient = function(str) {
            return gradient(this.defs, str);
        };
        proto.gradientLinear = function(x1, y1, x2, y2) {
            return gradientLinear(this.defs, x1, y1, x2, y2);
        };
        proto.gradientRadial = function(cx, cy, r, fx, fy) {
            return gradientRadial(this.defs, cx, cy, r, fx, fy);
        };
        /*\
         * Paper.toString
         [ method ]
         **
         * Returns SVG code for the @Paper
         = (string) SVG code for the @Paper
        \*/ proto.toString = function() {
            var doc = this.node.ownerDocument, f = doc.createDocumentFragment(), d = doc.createElement("div"), svg = this.node.cloneNode(true), res1;
            f.appendChild(d);
            d.appendChild(svg);
            Snap._.$(svg, {
                xmlns: "http://www.w3.org/2000/svg"
            });
            res1 = d.innerHTML;
            f.removeChild(f.firstChild);
            return res1;
        };
        /*\
         * Paper.toDataURL
         [ method ]
         **
         * Returns SVG code for the @Paper as Data URI string.
         = (string) Data URI string
        \*/ proto.toDataURL = function() {
            if (window && window.btoa) {
                return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this)));
            }
        };
        /*\
         * Paper.clear
         [ method ]
         **
         * Removes all child nodes of the paper, except <defs>.
        \*/ proto.clear = function() {
            var node = this.node.firstChild, next;
            while(node){
                next = node.nextSibling;
                if (node.tagName != "defs") {
                    node.parentNode.removeChild(node);
                } else {
                    proto.clear.call({
                        node: node
                    });
                }
                node = next;
            }
        };
    })();
});
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function(Snap, Element, Paper, glob) {
    var elproto = Element.prototype, is = Snap.is, clone = Snap._.clone, has = "hasOwnProperty", p2s = /,?([a-z]),?/gi, toFloat = parseFloat, math1 = Math, PI = math1.PI, mmin = math1.min, mmax = math1.max, pow = math1.pow, abs = math1.abs;
    function paths(ps) {
        var p = paths.ps = paths.ps || {};
        if (p[ps]) {
            p[ps].sleep = 100;
        } else {
            p[ps] = {
                sleep: 100
            };
        }
        setTimeout(function() {
            for(var key in p)if (p[has](key) && key != ps) {
                p[key].sleep--;
                !p[key].sleep && delete p[key];
            }
        });
        return p[ps];
    }
    function box(x, y, width, height) {
        if (x == null) {
            x = y = width = height = 0;
        }
        if (y == null) {
            y = x.y;
            width = x.width;
            height = x.height;
            x = x.x;
        }
        return {
            x: x,
            y: y,
            width: width,
            w: width,
            height: height,
            h: height,
            x2: x + width,
            y2: y + height,
            cx: x + width / 2,
            cy: y + height / 2,
            r1: math1.min(width, height) / 2,
            r2: math1.max(width, height) / 2,
            r0: math1.sqrt(width * width + height * height) / 2,
            path: rectPath(x, y, width, height),
            vb: [
                x,
                y,
                width,
                height
            ].join(" ")
        };
    }
    function toString() {
        return this.join(",").replace(p2s, "$1");
    }
    function pathClone(pathArray) {
        var res1 = clone(pathArray);
        res1.toString = toString;
        return res1;
    }
    function getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
        if (length == null) {
            return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
        } else {
            return findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, getTotLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
        }
    }
    function getLengthFactory(istotal, subpath) {
        function O(val) {
            return +(+val).toFixed(3);
        }
        return Snap._.cacher(function(path, length, onlystart) {
            if (path instanceof Element) {
                path = path.attr("d");
            }
            path = path2curve(path);
            var x, y, p, l, sp = "", subpaths = {}, point, len = 0;
            for(var i = 0, ii = path.length; i < ii; i++){
                p = path[i];
                if (p[0] == "M") {
                    x = +p[1];
                    y = +p[2];
                } else {
                    l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                    if (len + l > length) {
                        if (subpath && !subpaths.start) {
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                            sp += [
                                "C" + O(point.start.x),
                                O(point.start.y),
                                O(point.m.x),
                                O(point.m.y),
                                O(point.x),
                                O(point.y)
                            ];
                            if (onlystart) {
                                return sp;
                            }
                            subpaths.start = sp;
                            sp = [
                                "M" + O(point.x),
                                O(point.y) + "C" + O(point.n.x),
                                O(point.n.y),
                                O(point.end.x),
                                O(point.end.y),
                                O(p[5]),
                                O(p[6])
                            ].join();
                            len += l;
                            x = +p[5];
                            y = +p[6];
                            continue;
                        }
                        if (!istotal && !subpath) {
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                            return point;
                        }
                    }
                    len += l;
                    x = +p[5];
                    y = +p[6];
                }
                sp += p.shift() + p;
            }
            subpaths.end = sp;
            point = istotal ? len : subpath ? subpaths : findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
            return point;
        }, null, Snap._.clone);
    }
    var getTotalLength = getLengthFactory(1), getPointAtLength = getLengthFactory(), getSubpathsAtLength = getLengthFactory(0, 1);
    function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t, t13 = pow(t1, 3), t12 = pow(t1, 2), t2 = t * t, t3 = t2 * t, x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x, y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y, mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x), my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y), nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x), ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y), ax = t1 * p1x + t * c1x, ay = t1 * p1y + t * c1y, cx = t1 * c2x + t * p2x, cy = t1 * c2y + t * p2y, alpha = 90 - math1.atan2(mx - nx, my - ny) * 180 / PI;
        // (mx > nx || my < ny) && (alpha += 180);
        return {
            x: x,
            y: y,
            m: {
                x: mx,
                y: my
            },
            n: {
                x: nx,
                y: ny
            },
            start: {
                x: ax,
                y: ay
            },
            end: {
                x: cx,
                y: cy
            },
            alpha: alpha
        };
    }
    function bezierBBox(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
        if (!Snap.is(p1x, "array")) {
            p1x = [
                p1x,
                p1y,
                c1x,
                c1y,
                c2x,
                c2y,
                p2x,
                p2y
            ];
        }
        var bbox = curveDim.apply(null, p1x);
        return box(bbox.min.x, bbox.min.y, bbox.max.x - bbox.min.x, bbox.max.y - bbox.min.y);
    }
    function isPointInsideBBox(bbox, x, y) {
        return x >= bbox.x && x <= bbox.x + bbox.width && y >= bbox.y && y <= bbox.y + bbox.height;
    }
    function isBBoxIntersect(bbox1, bbox2) {
        bbox1 = box(bbox1);
        bbox2 = box(bbox2);
        return isPointInsideBBox(bbox2, bbox1.x, bbox1.y) || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y) || isPointInsideBBox(bbox2, bbox1.x, bbox1.y2) || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2) || isPointInsideBBox(bbox1, bbox2.x, bbox2.y) || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y) || isPointInsideBBox(bbox1, bbox2.x, bbox2.y2) || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2) || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x) && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
    }
    function base3(t, p1, p2, p3, p4) {
        var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4, t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
        return t * t2 - 3 * p1 + 3 * p2;
    }
    function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
        if (z == null) {
            z = 1;
        }
        z = z > 1 ? 1 : z < 0 ? 0 : z;
        var z2 = z / 2, n = 12, Tvalues = [
            -.1252,
            .1252,
            -.3678,
            .3678,
            -.5873,
            .5873,
            -.7699,
            .7699,
            -.9041,
            .9041,
            -.9816,
            .9816
        ], Cvalues = [
            0.2491,
            0.2491,
            0.2335,
            0.2335,
            0.2032,
            0.2032,
            0.1601,
            0.1601,
            0.1069,
            0.1069,
            0.0472,
            0.0472
        ], sum = 0;
        for(var i = 0; i < n; i++){
            var ct = z2 * Tvalues[i] + z2, xbase = base3(ct, x1, x2, x3, x4), ybase = base3(ct, y1, y2, y3, y4), comb = xbase * xbase + ybase * ybase;
            sum += Cvalues[i] * math1.sqrt(comb);
        }
        return z2 * sum;
    }
    function getTotLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
        if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
            return;
        }
        var t = 1, step = t / 2, t2 = t - step, l, e = .01;
        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        while(abs(l - ll) > e){
            step /= 2;
            t2 += (l < ll ? 1 : -1) * step;
            l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        }
        return t2;
    }
    function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
        if (mmax(x1, x2) < mmin(x3, x4) || mmin(x1, x2) > mmax(x3, x4) || mmax(y1, y2) < mmin(y3, y4) || mmin(y1, y2) > mmax(y3, y4)) {
            return;
        }
        var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4), ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4), denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (!denominator) {
            return;
        }
        var px = nx / denominator, py = ny / denominator, px2 = +px.toFixed(2), py2 = +py.toFixed(2);
        if (px2 < +mmin(x1, x2).toFixed(2) || px2 > +mmax(x1, x2).toFixed(2) || px2 < +mmin(x3, x4).toFixed(2) || px2 > +mmax(x3, x4).toFixed(2) || py2 < +mmin(y1, y2).toFixed(2) || py2 > +mmax(y1, y2).toFixed(2) || py2 < +mmin(y3, y4).toFixed(2) || py2 > +mmax(y3, y4).toFixed(2)) {
            return;
        }
        return {
            x: px,
            y: py
        };
    }
    function inter(bez1, bez2) {
        return interHelper(bez1, bez2);
    }
    function interCount(bez1, bez2) {
        return interHelper(bez1, bez2, 1);
    }
    function interHelper(bez1, bez2, justCount) {
        var bbox1 = bezierBBox(bez1), bbox2 = bezierBBox(bez2);
        if (!isBBoxIntersect(bbox1, bbox2)) {
            return justCount ? 0 : [];
        }
        var l1 = bezlen.apply(0, bez1), l2 = bezlen.apply(0, bez2), n1 = ~~(l1 / 8), n2 = ~~(l2 / 8), dots1 = [], dots2 = [], xy = {}, res1 = justCount ? 0 : [];
        for(var i = 0; i < n1 + 1; i++){
            var p = findDotsAtSegment.apply(0, bez1.concat(i / n1));
            dots1.push({
                x: p.x,
                y: p.y,
                t: i / n1
            });
        }
        for(i = 0; i < n2 + 1; i++){
            p = findDotsAtSegment.apply(0, bez2.concat(i / n2));
            dots2.push({
                x: p.x,
                y: p.y,
                t: i / n2
            });
        }
        for(i = 0; i < n1; i++){
            for(var j = 0; j < n2; j++){
                var di = dots1[i], di1 = dots1[i + 1], dj = dots2[j], dj1 = dots2[j + 1], ci = abs(di1.x - di.x) < .001 ? "y" : "x", cj = abs(dj1.x - dj.x) < .001 ? "y" : "x", is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
                if (is) {
                    if (xy[is.x.toFixed(4)] == is.y.toFixed(4)) {
                        continue;
                    }
                    xy[is.x.toFixed(4)] = is.y.toFixed(4);
                    var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t), t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
                    if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
                        if (justCount) {
                            res1++;
                        } else {
                            res1.push({
                                x: is.x,
                                y: is.y,
                                t1: t1,
                                t2: t2
                            });
                        }
                    }
                }
            }
        }
        return res1;
    }
    function pathIntersection(path1, path2) {
        return interPathHelper(path1, path2);
    }
    function pathIntersectionNumber(path1, path2) {
        return interPathHelper(path1, path2, 1);
    }
    function interPathHelper(path1, path2, justCount) {
        path1 = path2curve(path1);
        path2 = path2curve(path2);
        var x1, y1, x2, y2, x1m, y1m, x2m, y2m, bez1, bez2, res1 = justCount ? 0 : [];
        for(var i = 0, ii = path1.length; i < ii; i++){
            var pi = path1[i];
            if (pi[0] == "M") {
                x1 = x1m = pi[1];
                y1 = y1m = pi[2];
            } else {
                if (pi[0] == "C") {
                    bez1 = [
                        x1,
                        y1
                    ].concat(pi.slice(1));
                    x1 = bez1[6];
                    y1 = bez1[7];
                } else {
                    bez1 = [
                        x1,
                        y1,
                        x1,
                        y1,
                        x1m,
                        y1m,
                        x1m,
                        y1m
                    ];
                    x1 = x1m;
                    y1 = y1m;
                }
                for(var j = 0, jj = path2.length; j < jj; j++){
                    var pj = path2[j];
                    if (pj[0] == "M") {
                        x2 = x2m = pj[1];
                        y2 = y2m = pj[2];
                    } else {
                        if (pj[0] == "C") {
                            bez2 = [
                                x2,
                                y2
                            ].concat(pj.slice(1));
                            x2 = bez2[6];
                            y2 = bez2[7];
                        } else {
                            bez2 = [
                                x2,
                                y2,
                                x2,
                                y2,
                                x2m,
                                y2m,
                                x2m,
                                y2m
                            ];
                            x2 = x2m;
                            y2 = y2m;
                        }
                        var intr = interHelper(bez1, bez2, justCount);
                        if (justCount) {
                            res1 += intr;
                        } else {
                            for(var k = 0, kk = intr.length; k < kk; k++){
                                intr[k].segment1 = i;
                                intr[k].segment2 = j;
                                intr[k].bez1 = bez1;
                                intr[k].bez2 = bez2;
                            }
                            res1 = res1.concat(intr);
                        }
                    }
                }
            }
        }
        return res1;
    }
    function isPointInsidePath(path, x, y) {
        var bbox = pathBBox(path);
        return isPointInsideBBox(bbox, x, y) && interPathHelper(path, [
            [
                "M",
                x,
                y
            ],
            [
                "H",
                bbox.x2 + 10
            ]
        ], 1) % 2 == 1;
    }
    function pathBBox(path) {
        var pth = paths(path);
        if (pth.bbox) {
            return clone(pth.bbox);
        }
        if (!path) {
            return box();
        }
        path = path2curve(path);
        var x = 0, y = 0, X = [], Y = [], p;
        for(var i = 0, ii = path.length; i < ii; i++){
            p = path[i];
            if (p[0] == "M") {
                x = p[1];
                y = p[2];
                X.push(x);
                Y.push(y);
            } else {
                var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                X = X.concat(dim.min.x, dim.max.x);
                Y = Y.concat(dim.min.y, dim.max.y);
                x = p[5];
                y = p[6];
            }
        }
        var xmin = mmin.apply(0, X), ymin = mmin.apply(0, Y), xmax = mmax.apply(0, X), ymax = mmax.apply(0, Y), bb = box(xmin, ymin, xmax - xmin, ymax - ymin);
        pth.bbox = clone(bb);
        return bb;
    }
    function rectPath(x, y, w, h, r) {
        if (r) {
            return [
                [
                    "M",
                    +x + +r,
                    y
                ],
                [
                    "l",
                    w - r * 2,
                    0
                ],
                [
                    "a",
                    r,
                    r,
                    0,
                    0,
                    1,
                    r,
                    r
                ],
                [
                    "l",
                    0,
                    h - r * 2
                ],
                [
                    "a",
                    r,
                    r,
                    0,
                    0,
                    1,
                    -r,
                    r
                ],
                [
                    "l",
                    r * 2 - w,
                    0
                ],
                [
                    "a",
                    r,
                    r,
                    0,
                    0,
                    1,
                    -r,
                    -r
                ],
                [
                    "l",
                    0,
                    r * 2 - h
                ],
                [
                    "a",
                    r,
                    r,
                    0,
                    0,
                    1,
                    r,
                    -r
                ],
                [
                    "z"
                ]
            ];
        }
        var res1 = [
            [
                "M",
                x,
                y
            ],
            [
                "l",
                w,
                0
            ],
            [
                "l",
                0,
                h
            ],
            [
                "l",
                -w,
                0
            ],
            [
                "z"
            ]
        ];
        res1.toString = toString;
        return res1;
    }
    function ellipsePath(x, y, rx, ry, a) {
        if (a == null && ry == null) {
            ry = rx;
        }
        x = +x;
        y = +y;
        rx = +rx;
        ry = +ry;
        if (a != null) {
            var rad = Math.PI / 180, x1 = x + rx * Math.cos(-ry * rad), x2 = x + rx * Math.cos(-a * rad), y1 = y + rx * Math.sin(-ry * rad), y2 = y + rx * Math.sin(-a * rad), res1 = [
                [
                    "M",
                    x1,
                    y1
                ],
                [
                    "A",
                    rx,
                    rx,
                    0,
                    +(a - ry > 180),
                    0,
                    x2,
                    y2
                ]
            ];
        } else {
            res1 = [
                [
                    "M",
                    x,
                    y
                ],
                [
                    "m",
                    0,
                    -ry
                ],
                [
                    "a",
                    rx,
                    ry,
                    0,
                    1,
                    1,
                    0,
                    2 * ry
                ],
                [
                    "a",
                    rx,
                    ry,
                    0,
                    1,
                    1,
                    0,
                    -2 * ry
                ],
                [
                    "z"
                ]
            ];
        }
        res1.toString = toString;
        return res1;
    }
    var unit2px = Snap._unit2px, getPath = {
        path: function(el) {
            return el.attr("path");
        },
        circle: function(el) {
            var attr = unit2px(el);
            return ellipsePath(attr.cx, attr.cy, attr.r);
        },
        ellipse: function(el) {
            var attr = unit2px(el);
            return ellipsePath(attr.cx || 0, attr.cy || 0, attr.rx, attr.ry);
        },
        rect: function(el) {
            var attr = unit2px(el);
            return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height, attr.rx, attr.ry);
        },
        image: function(el) {
            var attr = unit2px(el);
            return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height);
        },
        line: function(el) {
            return "M" + [
                el.attr("x1") || 0,
                el.attr("y1") || 0,
                el.attr("x2"),
                el.attr("y2")
            ];
        },
        polyline: function(el) {
            return "M" + el.attr("points");
        },
        polygon: function(el) {
            return "M" + el.attr("points") + "z";
        },
        deflt: function(el) {
            var bbox = el.node.getBBox();
            return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
        }
    };
    function pathToRelative(pathArray) {
        var pth = paths(pathArray), lowerCase = String.prototype.toLowerCase;
        if (pth.rel) {
            return pathClone(pth.rel);
        }
        if (!Snap.is(pathArray, "array") || !Snap.is(pathArray && pathArray[0], "array")) {
            pathArray = Snap.parsePathString(pathArray);
        }
        var res1 = [], x = 0, y = 0, mx = 0, my = 0, start = 0;
        if (pathArray[0][0] == "M") {
            x = pathArray[0][1];
            y = pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res1.push([
                "M",
                x,
                y
            ]);
        }
        for(var i = start, ii = pathArray.length; i < ii; i++){
            var r = res1[i] = [], pa = pathArray[i];
            if (pa[0] != lowerCase.call(pa[0])) {
                r[0] = lowerCase.call(pa[0]);
                switch(r[0]){
                    case "a":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +(pa[6] - x).toFixed(3);
                        r[7] = +(pa[7] - y).toFixed(3);
                        break;
                    case "v":
                        r[1] = +(pa[1] - y).toFixed(3);
                        break;
                    case "m":
                        mx = pa[1];
                        my = pa[2];
                    default:
                        for(var j = 1, jj = pa.length; j < jj; j++){
                            r[j] = +(pa[j] - (j % 2 ? x : y)).toFixed(3);
                        }
                }
            } else {
                r = res1[i] = [];
                if (pa[0] == "m") {
                    mx = pa[1] + x;
                    my = pa[2] + y;
                }
                for(var k = 0, kk = pa.length; k < kk; k++){
                    res1[i][k] = pa[k];
                }
            }
            var len = res1[i].length;
            switch(res1[i][0]){
                case "z":
                    x = mx;
                    y = my;
                    break;
                case "h":
                    x += +res1[i][len - 1];
                    break;
                case "v":
                    y += +res1[i][len - 1];
                    break;
                default:
                    x += +res1[i][len - 2];
                    y += +res1[i][len - 1];
            }
        }
        res1.toString = toString;
        pth.rel = pathClone(res1);
        return res1;
    }
    function pathToAbsolute(pathArray) {
        var pth = paths(pathArray);
        if (pth.abs) {
            return pathClone(pth.abs);
        }
        if (!is(pathArray, "array") || !is(pathArray && pathArray[0], "array")) {
            pathArray = Snap.parsePathString(pathArray);
        }
        if (!pathArray || !pathArray.length) {
            return [
                [
                    "M",
                    0,
                    0
                ]
            ];
        }
        var res1 = [], x = 0, y = 0, mx = 0, my = 0, start = 0, pa0;
        if (pathArray[0][0] == "M") {
            x = +pathArray[0][1];
            y = +pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res1[0] = [
                "M",
                x,
                y
            ];
        }
        var crz = pathArray.length == 3 && pathArray[0][0] == "M" && pathArray[1][0].toUpperCase() == "R" && pathArray[2][0].toUpperCase() == "Z";
        for(var r, pa, i = start, ii = pathArray.length; i < ii; i++){
            res1.push(r = []);
            pa = pathArray[i];
            pa0 = pa[0];
            if (pa0 != pa0.toUpperCase()) {
                r[0] = pa0.toUpperCase();
                switch(r[0]){
                    case "A":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +pa[6] + x;
                        r[7] = +pa[7] + y;
                        break;
                    case "V":
                        r[1] = +pa[1] + y;
                        break;
                    case "H":
                        r[1] = +pa[1] + x;
                        break;
                    case "R":
                        var dots = [
                            x,
                            y
                        ].concat(pa.slice(1));
                        for(var j = 2, jj = dots.length; j < jj; j++){
                            dots[j] = +dots[j] + x;
                            dots[++j] = +dots[j] + y;
                        }
                        res1.pop();
                        res1 = res1.concat(catmullRom2bezier(dots, crz));
                        break;
                    case "O":
                        res1.pop();
                        dots = ellipsePath(x, y, pa[1], pa[2]);
                        dots.push(dots[0]);
                        res1 = res1.concat(dots);
                        break;
                    case "U":
                        res1.pop();
                        res1 = res1.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                        r = [
                            "U"
                        ].concat(res1[res1.length - 1].slice(-2));
                        break;
                    case "M":
                        mx = +pa[1] + x;
                        my = +pa[2] + y;
                    default:
                        for(j = 1, jj = pa.length; j < jj; j++){
                            r[j] = +pa[j] + (j % 2 ? x : y);
                        }
                }
            } else if (pa0 == "R") {
                dots = [
                    x,
                    y
                ].concat(pa.slice(1));
                res1.pop();
                res1 = res1.concat(catmullRom2bezier(dots, crz));
                r = [
                    "R"
                ].concat(pa.slice(-2));
            } else if (pa0 == "O") {
                res1.pop();
                dots = ellipsePath(x, y, pa[1], pa[2]);
                dots.push(dots[0]);
                res1 = res1.concat(dots);
            } else if (pa0 == "U") {
                res1.pop();
                res1 = res1.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                r = [
                    "U"
                ].concat(res1[res1.length - 1].slice(-2));
            } else {
                for(var k = 0, kk = pa.length; k < kk; k++){
                    r[k] = pa[k];
                }
            }
            pa0 = pa0.toUpperCase();
            if (pa0 != "O") {
                switch(r[0]){
                    case "Z":
                        x = +mx;
                        y = +my;
                        break;
                    case "H":
                        x = r[1];
                        break;
                    case "V":
                        y = r[1];
                        break;
                    case "M":
                        mx = r[r.length - 2];
                        my = r[r.length - 1];
                    default:
                        x = r[r.length - 2];
                        y = r[r.length - 1];
                }
            }
        }
        res1.toString = toString;
        pth.abs = pathClone(res1);
        return res1;
    }
    function l2c(x1, y1, x2, y2) {
        return [
            x1,
            y1,
            x2,
            y2,
            x2,
            y2
        ];
    }
    function q2c(x1, y1, ax, ay, x2, y2) {
        var _13 = 1 / 3, _23 = 2 / 3;
        return [
            _13 * x1 + _23 * ax,
            _13 * y1 + _23 * ay,
            _13 * x2 + _23 * ax,
            _13 * y2 + _23 * ay,
            x2,
            y2
        ];
    }
    function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
        // for more information of where this math came from visit:
        // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
        var _120 = PI * 120 / 180, rad = PI / 180 * (+angle || 0), res1 = [], xy, rotate = Snap._.cacher(function(x, y, rad) {
            var X = x * math1.cos(rad) - y * math1.sin(rad), Y = x * math1.sin(rad) + y * math1.cos(rad);
            return {
                x: X,
                y: Y
            };
        });
        if (!rx || !ry) {
            return [
                x1,
                y1,
                x2,
                y2,
                x2,
                y2
            ];
        }
        if (!recursive) {
            xy = rotate(x1, y1, -rad);
            x1 = xy.x;
            y1 = xy.y;
            xy = rotate(x2, y2, -rad);
            x2 = xy.x;
            y2 = xy.y;
            var cos = math1.cos(PI / 180 * angle), sin = math1.sin(PI / 180 * angle), x = (x1 - x2) / 2, y = (y1 - y2) / 2;
            var h = x * x / (rx * rx) + y * y / (ry * ry);
            if (h > 1) {
                h = math1.sqrt(h);
                rx = h * rx;
                ry = h * ry;
            }
            var rx2 = rx * rx, ry2 = ry * ry, k = (large_arc_flag == sweep_flag ? -1 : 1) * math1.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))), cx = k * rx * y / ry + (x1 + x2) / 2, cy = k * -ry * x / rx + (y1 + y2) / 2, f1 = math1.asin(((y1 - cy) / ry).toFixed(9)), f2 = math1.asin(((y2 - cy) / ry).toFixed(9));
            f1 = x1 < cx ? PI - f1 : f1;
            f2 = x2 < cx ? PI - f2 : f2;
            f1 < 0 && (f1 = PI * 2 + f1);
            f2 < 0 && (f2 = PI * 2 + f2);
            if (sweep_flag && f1 > f2) {
                f1 = f1 - PI * 2;
            }
            if (!sweep_flag && f2 > f1) {
                f2 = f2 - PI * 2;
            }
        } else {
            f1 = recursive[0];
            f2 = recursive[1];
            cx = recursive[2];
            cy = recursive[3];
        }
        var df = f2 - f1;
        if (abs(df) > _120) {
            var f2old = f2, x2old = x2, y2old = y2;
            f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
            x2 = cx + rx * math1.cos(f2);
            y2 = cy + ry * math1.sin(f2);
            res1 = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [
                f2,
                f2old,
                cx,
                cy
            ]);
        }
        df = f2 - f1;
        var c1 = math1.cos(f1), s1 = math1.sin(f1), c2 = math1.cos(f2), s2 = math1.sin(f2), t = math1.tan(df / 4), hx = 4 / 3 * rx * t, hy = 4 / 3 * ry * t, m1 = [
            x1,
            y1
        ], m2 = [
            x1 + hx * s1,
            y1 - hy * c1
        ], m3 = [
            x2 + hx * s2,
            y2 - hy * c2
        ], m4 = [
            x2,
            y2
        ];
        m2[0] = 2 * m1[0] - m2[0];
        m2[1] = 2 * m1[1] - m2[1];
        if (recursive) {
            return [
                m2,
                m3,
                m4
            ].concat(res1);
        } else {
            res1 = [
                m2,
                m3,
                m4
            ].concat(res1).join().split(",");
            var newres = [];
            for(var i = 0, ii = res1.length; i < ii; i++){
                newres[i] = i % 2 ? rotate(res1[i - 1], res1[i], rad).y : rotate(res1[i], res1[i + 1], rad).x;
            }
            return newres;
        }
    }
    function findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t;
        return {
            x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
            y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
        };
    }
    // Returns bounding box of cubic bezier curve.
    // Source: http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
    // Original version: NISHIO Hirokazu
    // Modifications: https://github.com/timo22345
    function curveDim(x0, y0, x1, y1, x2, y2, x3, y3) {
        var tvalues = [], bounds = [
            [],
            []
        ], a, b, c, t, t1, t2, b2ac, sqrtb2ac;
        for(var i = 0; i < 2; ++i){
            if (i == 0) {
                b = 6 * x0 - 12 * x1 + 6 * x2;
                a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
                c = 3 * x1 - 3 * x0;
            } else {
                b = 6 * y0 - 12 * y1 + 6 * y2;
                a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
                c = 3 * y1 - 3 * y0;
            }
            if (abs(a) < 1e-12) {
                if (abs(b) < 1e-12) {
                    continue;
                }
                t = -c / b;
                if (0 < t && t < 1) {
                    tvalues.push(t);
                }
                continue;
            }
            b2ac = b * b - 4 * c * a;
            sqrtb2ac = math1.sqrt(b2ac);
            if (b2ac < 0) {
                continue;
            }
            t1 = (-b + sqrtb2ac) / (2 * a);
            if (0 < t1 && t1 < 1) {
                tvalues.push(t1);
            }
            t2 = (-b - sqrtb2ac) / (2 * a);
            if (0 < t2 && t2 < 1) {
                tvalues.push(t2);
            }
        }
        var x, y, j = tvalues.length, jlen = j, mt;
        while(j--){
            t = tvalues[j];
            mt = 1 - t;
            bounds[0][j] = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
            bounds[1][j] = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
        }
        bounds[0][jlen] = x0;
        bounds[1][jlen] = y0;
        bounds[0][jlen + 1] = x3;
        bounds[1][jlen + 1] = y3;
        bounds[0].length = bounds[1].length = jlen + 2;
        return {
            min: {
                x: mmin.apply(0, bounds[0]),
                y: mmin.apply(0, bounds[1])
            },
            max: {
                x: mmax.apply(0, bounds[0]),
                y: mmax.apply(0, bounds[1])
            }
        };
    }
    function path2curve(path, path2) {
        var pth = !path2 && paths(path);
        if (!path2 && pth.curve) {
            return pathClone(pth.curve);
        }
        var p = pathToAbsolute(path), p2 = path2 && pathToAbsolute(path2), attrs = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
        }, attrs2 = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
        }, processPath = function(path, d, pcom) {
            var nx, ny;
            if (!path) {
                return [
                    "C",
                    d.x,
                    d.y,
                    d.x,
                    d.y,
                    d.x,
                    d.y
                ];
            }
            !(path[0] in {
                T: 1,
                Q: 1
            }) && (d.qx = d.qy = null);
            switch(path[0]){
                case "M":
                    d.X = path[1];
                    d.Y = path[2];
                    break;
                case "A":
                    path = [
                        "C"
                    ].concat(a2c.apply(0, [
                        d.x,
                        d.y
                    ].concat(path.slice(1))));
                    break;
                case "S":
                    if (pcom == "C" || pcom == "S") {
                        nx = d.x * 2 - d.bx; // And reflect the previous
                        ny = d.y * 2 - d.by; // command's control point relative to the current point.
                    } else {
                        nx = d.x;
                        ny = d.y;
                    }
                    path = [
                        "C",
                        nx,
                        ny
                    ].concat(path.slice(1));
                    break;
                case "T":
                    if (pcom == "Q" || pcom == "T") {
                        d.qx = d.x * 2 - d.qx; // And make a reflection similar
                        d.qy = d.y * 2 - d.qy; // to case "S".
                    } else {
                        d.qx = d.x;
                        d.qy = d.y;
                    }
                    path = [
                        "C"
                    ].concat(q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
                    break;
                case "Q":
                    d.qx = path[1];
                    d.qy = path[2];
                    path = [
                        "C"
                    ].concat(q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
                    break;
                case "L":
                    path = [
                        "C"
                    ].concat(l2c(d.x, d.y, path[1], path[2]));
                    break;
                case "H":
                    path = [
                        "C"
                    ].concat(l2c(d.x, d.y, path[1], d.y));
                    break;
                case "V":
                    path = [
                        "C"
                    ].concat(l2c(d.x, d.y, d.x, path[1]));
                    break;
                case "Z":
                    path = [
                        "C"
                    ].concat(l2c(d.x, d.y, d.X, d.Y));
                    break;
            }
            return path;
        }, fixArc = function(pp, i) {
            if (pp[i].length > 7) {
                pp[i].shift();
                var pi = pp[i];
                while(pi.length){
                    pcoms1[i] = "A"; // if created multiple C:s, their original seg is saved
                    p2 && (pcoms2[i] = "A"); // the same as above
                    pp.splice(i++, 0, [
                        "C"
                    ].concat(pi.splice(0, 6)));
                }
                pp.splice(i, 1);
                ii = mmax(p.length, p2 && p2.length || 0);
            }
        }, fixM = function(path1, path2, a1, a2, i) {
            if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
                path2.splice(i, 0, [
                    "M",
                    a2.x,
                    a2.y
                ]);
                a1.bx = 0;
                a1.by = 0;
                a1.x = path1[i][1];
                a1.y = path1[i][2];
                ii = mmax(p.length, p2 && p2.length || 0);
            }
        }, pcoms1 = [], pcoms2 = [], pfirst = "", pcom = ""; // holder for previous path command of original path
        for(var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++){
            p[i] && (pfirst = p[i][0]); // save current path command
            if (pfirst != "C") {
                pcoms1[i] = pfirst; // Save current path command
                i && (pcom = pcoms1[i - 1]); // Get previous path command pcom
            }
            p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath
            if (pcoms1[i] != "A" && pfirst == "C") pcoms1[i] = "C"; // A is the only command
            // which may produce multiple C:s
            // so we have to make sure that C is also C in original path
            fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1
            if (p2) {
                p2[i] && (pfirst = p2[i][0]);
                if (pfirst != "C") {
                    pcoms2[i] = pfirst;
                    i && (pcom = pcoms2[i - 1]);
                }
                p2[i] = processPath(p2[i], attrs2, pcom);
                if (pcoms2[i] != "A" && pfirst == "C") {
                    pcoms2[i] = "C";
                }
                fixArc(p2, i);
            }
            fixM(p, p2, attrs, attrs2, i);
            fixM(p2, p, attrs2, attrs, i);
            var seg = p[i], seg2 = p2 && p2[i], seglen = seg.length, seg2len = p2 && seg2.length;
            attrs.x = seg[seglen - 2];
            attrs.y = seg[seglen - 1];
            attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
            attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
            attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
            attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
            attrs2.x = p2 && seg2[seg2len - 2];
            attrs2.y = p2 && seg2[seg2len - 1];
        }
        if (!p2) {
            pth.curve = pathClone(p);
        }
        return p2 ? [
            p,
            p2
        ] : p;
    }
    function mapPath(path, matrix) {
        if (!matrix) {
            return path;
        }
        var x, y, i, j, ii, jj, pathi;
        path = path2curve(path);
        for(i = 0, ii = path.length; i < ii; i++){
            pathi = path[i];
            for(j = 1, jj = pathi.length; j < jj; j += 2){
                x = matrix.x(pathi[j], pathi[j + 1]);
                y = matrix.y(pathi[j], pathi[j + 1]);
                pathi[j] = x;
                pathi[j + 1] = y;
            }
        }
        return path;
    }
    // http://schepers.cc/getting-to-the-point
    function catmullRom2bezier(crp, z) {
        var d = [];
        for(var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2){
            var p = [
                {
                    x: +crp[i - 2],
                    y: +crp[i - 1]
                },
                {
                    x: +crp[i],
                    y: +crp[i + 1]
                },
                {
                    x: +crp[i + 2],
                    y: +crp[i + 3]
                },
                {
                    x: +crp[i + 4],
                    y: +crp[i + 5]
                }
            ];
            if (z) {
                if (!i) {
                    p[0] = {
                        x: +crp[iLen - 2],
                        y: +crp[iLen - 1]
                    };
                } else if (iLen - 4 == i) {
                    p[3] = {
                        x: +crp[0],
                        y: +crp[1]
                    };
                } else if (iLen - 2 == i) {
                    p[2] = {
                        x: +crp[0],
                        y: +crp[1]
                    };
                    p[3] = {
                        x: +crp[2],
                        y: +crp[3]
                    };
                }
            } else {
                if (iLen - 4 == i) {
                    p[3] = p[2];
                } else if (!i) {
                    p[0] = {
                        x: +crp[i],
                        y: +crp[i + 1]
                    };
                }
            }
            d.push([
                "C",
                (-p[0].x + 6 * p[1].x + p[2].x) / 6,
                (-p[0].y + 6 * p[1].y + p[2].y) / 6,
                (p[1].x + 6 * p[2].x - p[3].x) / 6,
                (p[1].y + 6 * p[2].y - p[3].y) / 6,
                p[2].x,
                p[2].y
            ]);
        }
        return d;
    }
    // export
    Snap.path = paths;
    /*\
     * Snap.path.getTotalLength
     [ method ]
     **
     * Returns the length of the given path in pixels
     **
     - path (string) SVG path string
     **
     = (number) length
    \*/ Snap.path.getTotalLength = getTotalLength;
    /*\
     * Snap.path.getPointAtLength
     [ method ]
     **
     * Returns the coordinates of the point located at the given length along the given path
     **
     - path (string) SVG path string
     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
     **
     = (object) representation of the point:
     o {
     o     x: (number) x coordinate,
     o     y: (number) y coordinate,
     o     alpha: (number) angle of derivative
     o }
    \*/ Snap.path.getPointAtLength = getPointAtLength;
    /*\
     * Snap.path.getSubpath
     [ method ]
     **
     * Returns the subpath of a given path between given start and end lengths
     **
     - path (string) SVG path string
     - from (number) length, in pixels, from the start of the path to the start of the segment
     - to (number) length, in pixels, from the start of the path to the end of the segment
     **
     = (string) path string definition for the segment
    \*/ Snap.path.getSubpath = function(path, from, to) {
        if (this.getTotalLength(path) - to < 1e-6) {
            return getSubpathsAtLength(path, from).end;
        }
        var a = getSubpathsAtLength(path, to, 1);
        return from ? getSubpathsAtLength(a, from).end : a;
    };
    /*\
     * Element.getTotalLength
     [ method ]
     **
     * Returns the length of the path in pixels (only works for `path` elements)
     = (number) length
    \*/ elproto.getTotalLength = function() {
        if (this.node.getTotalLength) {
            return this.node.getTotalLength();
        }
    };
    // SIERRA Element.getPointAtLength()/Element.getTotalLength(): If a <path> is broken into different segments, is the jump distance to the new coordinates set by the _M_ or _m_ commands calculated as part of the path's total length?
    /*\
     * Element.getPointAtLength
     [ method ]
     **
     * Returns coordinates of the point located at the given length on the given path (only works for `path` elements)
     **
     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
     **
     = (object) representation of the point:
     o {
     o     x: (number) x coordinate,
     o     y: (number) y coordinate,
     o     alpha: (number) angle of derivative
     o }
    \*/ elproto.getPointAtLength = function(length) {
        return getPointAtLength(this.attr("d"), length);
    };
    // SIERRA Element.getSubpath(): Similar to the problem for Element.getPointAtLength(). Unclear how this would work for a segmented path. Overall, the concept of _subpath_ and what I'm calling a _segment_ (series of non-_M_ or _Z_ commands) is unclear.
    /*\
     * Element.getSubpath
     [ method ]
     **
     * Returns subpath of a given element from given start and end lengths (only works for `path` elements)
     **
     - from (number) length, in pixels, from the start of the path to the start of the segment
     - to (number) length, in pixels, from the start of the path to the end of the segment
     **
     = (string) path string definition for the segment
    \*/ elproto.getSubpath = function(from, to) {
        return Snap.path.getSubpath(this.attr("d"), from, to);
    };
    Snap._.box = box;
    /*\
     * Snap.path.findDotsAtSegment
     [ method ]
     **
     * Utility method
     **
     * Finds dot coordinates on the given cubic beziér curve at the given t
     - p1x (number) x of the first point of the curve
     - p1y (number) y of the first point of the curve
     - c1x (number) x of the first anchor of the curve
     - c1y (number) y of the first anchor of the curve
     - c2x (number) x of the second anchor of the curve
     - c2y (number) y of the second anchor of the curve
     - p2x (number) x of the second point of the curve
     - p2y (number) y of the second point of the curve
     - t (number) position on the curve (0..1)
     = (object) point information in format:
     o {
     o     x: (number) x coordinate of the point,
     o     y: (number) y coordinate of the point,
     o     m: {
     o         x: (number) x coordinate of the left anchor,
     o         y: (number) y coordinate of the left anchor
     o     },
     o     n: {
     o         x: (number) x coordinate of the right anchor,
     o         y: (number) y coordinate of the right anchor
     o     },
     o     start: {
     o         x: (number) x coordinate of the start of the curve,
     o         y: (number) y coordinate of the start of the curve
     o     },
     o     end: {
     o         x: (number) x coordinate of the end of the curve,
     o         y: (number) y coordinate of the end of the curve
     o     },
     o     alpha: (number) angle of the curve derivative at the point
     o }
    \*/ Snap.path.findDotsAtSegment = findDotsAtSegment;
    /*\
     * Snap.path.bezierBBox
     [ method ]
     **
     * Utility method
     **
     * Returns the bounding box of a given cubic beziér curve
     - p1x (number) x of the first point of the curve
     - p1y (number) y of the first point of the curve
     - c1x (number) x of the first anchor of the curve
     - c1y (number) y of the first anchor of the curve
     - c2x (number) x of the second anchor of the curve
     - c2y (number) y of the second anchor of the curve
     - p2x (number) x of the second point of the curve
     - p2y (number) y of the second point of the curve
     * or
     - bez (array) array of six points for beziér curve
     = (object) bounding box
     o {
     o     x: (number) x coordinate of the left top point of the box,
     o     y: (number) y coordinate of the left top point of the box,
     o     x2: (number) x coordinate of the right bottom point of the box,
     o     y2: (number) y coordinate of the right bottom point of the box,
     o     width: (number) width of the box,
     o     height: (number) height of the box
     o }
    \*/ Snap.path.bezierBBox = bezierBBox;
    /*\
     * Snap.path.isPointInsideBBox
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if given point is inside bounding box
     - bbox (string) bounding box
     - x (string) x coordinate of the point
     - y (string) y coordinate of the point
     = (boolean) `true` if point is inside
    \*/ Snap.path.isPointInsideBBox = isPointInsideBBox;
    Snap.closest = function(x, y, X, Y) {
        var r = 100, b = box(x - r / 2, y - r / 2, r, r), inside = [], getter = X[0].hasOwnProperty("x") ? function(i) {
            return {
                x: X[i].x,
                y: X[i].y
            };
        } : function(i) {
            return {
                x: X[i],
                y: Y[i]
            };
        }, found = 0;
        while(r <= 1e6 && !found){
            for(var i = 0, ii = X.length; i < ii; i++){
                var xy = getter(i);
                if (isPointInsideBBox(b, xy.x, xy.y)) {
                    found++;
                    inside.push(xy);
                    break;
                }
            }
            if (!found) {
                r *= 2;
                b = box(x - r / 2, y - r / 2, r, r);
            }
        }
        if (r == 1e6) {
            return;
        }
        var len = Infinity, res1;
        for(i = 0, ii = inside.length; i < ii; i++){
            var l = Snap.len(x, y, inside[i].x, inside[i].y);
            if (len > l) {
                len = l;
                inside[i].len = l;
                res1 = inside[i];
            }
        }
        return res1;
    };
    /*\
     * Snap.path.isBBoxIntersect
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if two bounding boxes intersect
     - bbox1 (string) first bounding box
     - bbox2 (string) second bounding box
     = (boolean) `true` if bounding boxes intersect
    \*/ Snap.path.isBBoxIntersect = isBBoxIntersect;
    /*\
     * Snap.path.intersection
     [ method ]
     **
     * Utility method
     **
     * Finds intersections of two paths
     - path1 (string) path string
     - path2 (string) path string
     = (array) dots of intersection
     o [
     o     {
     o         x: (number) x coordinate of the point,
     o         y: (number) y coordinate of the point,
     o         t1: (number) t value for segment of path1,
     o         t2: (number) t value for segment of path2,
     o         segment1: (number) order number for segment of path1,
     o         segment2: (number) order number for segment of path2,
     o         bez1: (array) eight coordinates representing beziér curve for the segment of path1,
     o         bez2: (array) eight coordinates representing beziér curve for the segment of path2
     o     }
     o ]
    \*/ Snap.path.intersection = pathIntersection;
    Snap.path.intersectionNumber = pathIntersectionNumber;
    /*\
     * Snap.path.isPointInside
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if given point is inside a given closed path.
     *
     * Note: fill mode doesn’t affect the result of this method.
     - path (string) path string
     - x (number) x of the point
     - y (number) y of the point
     = (boolean) `true` if point is inside the path
    \*/ Snap.path.isPointInside = isPointInsidePath;
    /*\
     * Snap.path.getBBox
     [ method ]
     **
     * Utility method
     **
     * Returns the bounding box of a given path
     - path (string) path string
     = (object) bounding box
     o {
     o     x: (number) x coordinate of the left top point of the box,
     o     y: (number) y coordinate of the left top point of the box,
     o     x2: (number) x coordinate of the right bottom point of the box,
     o     y2: (number) y coordinate of the right bottom point of the box,
     o     width: (number) width of the box,
     o     height: (number) height of the box
     o }
    \*/ Snap.path.getBBox = pathBBox;
    Snap.path.get = getPath;
    /*\
     * Snap.path.toRelative
     [ method ]
     **
     * Utility method
     **
     * Converts path coordinates into relative values
     - path (string) path string
     = (array) path string
    \*/ Snap.path.toRelative = pathToRelative;
    /*\
     * Snap.path.toAbsolute
     [ method ]
     **
     * Utility method
     **
     * Converts path coordinates into absolute values
     - path (string) path string
     = (array) path string
    \*/ Snap.path.toAbsolute = pathToAbsolute;
    /*\
     * Snap.path.toCubic
     [ method ]
     **
     * Utility method
     **
     * Converts path to a new path where all segments are cubic beziér curves
     - pathString (string|array) path string or array of segments
     = (array) array of segments
    \*/ Snap.path.toCubic = path2curve;
    /*\
     * Snap.path.map
     [ method ]
     **
     * Transform the path string with the given matrix
     - path (string) path string
     - matrix (object) see @Matrix
     = (string) transformed path string
    \*/ Snap.path.map = mapPath;
    Snap.path.toString = toString;
    Snap.path.clone = pathClone;
});
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function(Snap, Element, Paper, glob) {
    var mmax = Math.max, mmin = Math.min;
    // Set
    var Set = function(items) {
        this.items = [];
        this.bindings = {};
        this.length = 0;
        this.type = "set";
        if (items) {
            for(var i = 0, ii = items.length; i < ii; i++){
                if (items[i]) {
                    this[this.items.length] = this.items[this.items.length] = items[i];
                    this.length++;
                }
            }
        }
    }, setproto = Set.prototype;
    /*\
     * Set.push
     [ method ]
     **
     * Adds each argument to the current set
     = (object) original element
    \*/ setproto.push = function() {
        var item, len;
        for(var i = 0, ii = arguments.length; i < ii; i++){
            item = arguments[i];
            if (item) {
                len = this.items.length;
                this[len] = this.items[len] = item;
                this.length++;
            }
        }
        return this;
    };
    /*\
     * Set.pop
     [ method ]
     **
     * Removes last element and returns it
     = (object) element
    \*/ setproto.pop = function() {
        this.length && delete this[this.length--];
        return this.items.pop();
    };
    /*\
     * Set.forEach
     [ method ]
     **
     * Executes given function for each element in the set
     *
     * If the function returns `false`, the loop stops running.
     **
     - callback (function) function to run
     - thisArg (object) context object for the callback
     = (object) Set object
    \*/ setproto.forEach = function(callback, thisArg) {
        for(var i = 0, ii = this.items.length; i < ii; i++){
            if (callback.call(thisArg, this.items[i], i) === false) {
                return this;
            }
        }
        return this;
    };
    /*\
     * Set.animate
     [ method ]
     **
     * Animates each element in set in sync.
     *
     **
     - attrs (object) key-value pairs of destination attributes
     - duration (number) duration of the animation in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function that executes when the animation ends
     * or
     - animation (array) array of animation parameter for each element in set in format `[attrs, duration, easing, callback]`
     > Usage
     | // animate all elements in set to radius 10
     | set.animate({r: 10}, 500, mina.easein);
     | // or
     | // animate first element to radius 10, but second to radius 20 and in different time
     | set.animate([{r: 10}, 500, mina.easein], [{r: 20}, 1500, mina.easein]);
     = (Element) the current element
    \*/ setproto.animate = function(attrs, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        if (attrs instanceof Snap._.Animation) {
            callback = attrs.callback;
            easing = attrs.easing;
            ms = easing.dur;
            attrs = attrs.attr;
        }
        var args = arguments;
        if (Snap.is(attrs, "array") && Snap.is(args[args.length - 1], "array")) {
            var each = true;
        }
        var begin, handler = function() {
            if (begin) {
                this.b = begin;
            } else {
                begin = this.b;
            }
        }, cb = 0, set = this, callbacker = callback && function() {
            if (++cb == set.length) {
                callback.call(this);
            }
        };
        return this.forEach(function(el, i) {
            eve.once("snap.animcreated." + el.id, handler);
            if (each) {
                args[i] && el.animate.apply(el, args[i]);
            } else {
                el.animate(attrs, ms, easing, callbacker);
            }
        });
    };
    /*\
     * Set.remove
     [ method ]
     **
     * Removes all children of the set.
     *
     = (object) Set object
    \*/ setproto.remove = function() {
        while(this.length){
            this.pop().remove();
        }
        return this;
    };
    /*\
     * Set.bind
     [ method ]
     **
     * Specifies how to handle a specific attribute when applied
     * to a set.
     *
     **
     - attr (string) attribute name
     - callback (function) function to run
     * or
     - attr (string) attribute name
     - element (Element) specific element in the set to apply the attribute to
     * or
     - attr (string) attribute name
     - element (Element) specific element in the set to apply the attribute to
     - eattr (string) attribute on the element to bind the attribute to
     = (object) Set object
    \*/ setproto.bind = function(attr, a, b) {
        var data = {};
        if (typeof a == "function") {
            this.bindings[attr] = a;
        } else {
            var aname = b || attr;
            this.bindings[attr] = function(v) {
                data[aname] = v;
                a.attr(data);
            };
        }
        return this;
    };
    /*\
     * Set.attr
     [ method ]
     **
     * Equivalent of @Element.attr.
     = (object) Set object
    \*/ setproto.attr = function(value) {
        var unbound = {};
        for(var k in value){
            if (this.bindings[k]) {
                this.bindings[k](value[k]);
            } else {
                unbound[k] = value[k];
            }
        }
        for(var i = 0, ii = this.items.length; i < ii; i++){
            this.items[i].attr(unbound);
        }
        return this;
    };
    /*\
     * Set.clear
     [ method ]
     **
     * Removes all elements from the set
    \*/ setproto.clear = function() {
        while(this.length){
            this.pop();
        }
    };
    /*\
     * Set.splice
     [ method ]
     **
     * Removes range of elements from the set
     **
     - index (number) position of the deletion
     - count (number) number of element to remove
     - insertion… (object) #optional elements to insert
     = (object) set elements that were deleted
    \*/ setproto.splice = function(index, count, insertion) {
        index = index < 0 ? mmax(this.length + index, 0) : index;
        count = mmax(0, mmin(this.length - index, count));
        var tail = [], todel = [], args = [], i;
        for(i = 2; i < arguments.length; i++){
            args.push(arguments[i]);
        }
        for(i = 0; i < count; i++){
            todel.push(this[index + i]);
        }
        for(; i < this.length - index; i++){
            tail.push(this[index + i]);
        }
        var arglen = args.length;
        for(i = 0; i < arglen + tail.length; i++){
            this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
        }
        i = this.items.length = this.length -= count - arglen;
        while(this[i]){
            delete this[i++];
        }
        return new Set(todel);
    };
    /*\
     * Set.exclude
     [ method ]
     **
     * Removes given element from the set
     **
     - element (object) element to remove
     = (boolean) `true` if object was found and removed from the set
    \*/ setproto.exclude = function(el) {
        for(var i = 0, ii = this.length; i < ii; i++)if (this[i] == el) {
            this.splice(i, 1);
            return true;
        }
        return false;
    };
    /*\
     * Set.insertAfter
     [ method ]
     **
     * Inserts set elements after given element.
     **
     - element (object) set will be inserted after this element
     = (object) Set object
    \*/ setproto.insertAfter = function(el) {
        var i = this.items.length;
        while(i--){
            this.items[i].insertAfter(el);
        }
        return this;
    };
    /*\
     * Set.getBBox
     [ method ]
     **
     * Union of all bboxes of the set. See @Element.getBBox.
     = (object) bounding box descriptor. See @Element.getBBox.
    \*/ setproto.getBBox = function() {
        var x = [], y = [], x2 = [], y2 = [];
        for(var i = this.items.length; i--;)if (!this.items[i].removed) {
            var box = this.items[i].getBBox();
            x.push(box.x);
            y.push(box.y);
            x2.push(box.x + box.width);
            y2.push(box.y + box.height);
        }
        x = mmin.apply(0, x);
        y = mmin.apply(0, y);
        x2 = mmax.apply(0, x2);
        y2 = mmax.apply(0, y2);
        return {
            x: x,
            y: y,
            x2: x2,
            y2: y2,
            width: x2 - x,
            height: y2 - y,
            cx: x + (x2 - x) / 2,
            cy: y + (y2 - y) / 2
        };
    };
    /*\
     * Set.insertAfter
     [ method ]
     **
     * Creates a clone of the set.
     **
     = (object) New Set object
    \*/ setproto.clone = function(s) {
        s = new Set;
        for(var i = 0, ii = this.items.length; i < ii; i++){
            s.push(this.items[i].clone());
        }
        return s;
    };
    setproto.toString = function() {
        return "Snap\u2018s set";
    };
    setproto.type = "set";
    // export
    /*\
     * Snap.Set
     [ property ]
     **
     * Set constructor.
    \*/ Snap.Set = Set;
    /*\
     * Snap.set
     [ method ]
     **
     * Creates a set and fills it with list of arguments.
     **
     = (object) New Set object
     | var r = paper.rect(0, 0, 10, 10),
     |     s1 = Snap.set(), // empty set
     |     s2 = Snap.set(r, paper.circle(100, 100, 20)); // prefilled set
    \*/ Snap.set = function() {
        var set = new Set;
        if (arguments.length) {
            set.push.apply(set, Array.prototype.slice.call(arguments, 0));
        }
        return set;
    };
});
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function(Snap, Element, Paper, glob) {
    var names = {}, reUnit = /[%a-z]+$/i, Str = String;
    names.stroke = names.fill = "colour";
    function getEmpty(item) {
        var l = item[0];
        switch(l.toLowerCase()){
            case "t":
                return [
                    l,
                    0,
                    0
                ];
            case "m":
                return [
                    l,
                    1,
                    0,
                    0,
                    1,
                    0,
                    0
                ];
            case "r":
                if (item.length == 4) {
                    return [
                        l,
                        0,
                        item[2],
                        item[3]
                    ];
                } else {
                    return [
                        l,
                        0
                    ];
                }
            case "s":
                if (item.length == 5) {
                    return [
                        l,
                        1,
                        1,
                        item[3],
                        item[4]
                    ];
                } else if (item.length == 3) {
                    return [
                        l,
                        1,
                        1
                    ];
                } else {
                    return [
                        l,
                        1
                    ];
                }
        }
    }
    function equaliseTransform(t1, t2, getBBox) {
        t1 = t1 || new Snap.Matrix;
        t2 = t2 || new Snap.Matrix;
        t1 = Snap.parseTransformString(t1.toTransformString()) || [];
        t2 = Snap.parseTransformString(t2.toTransformString()) || [];
        var maxlength = Math.max(t1.length, t2.length), from = [], to = [], i = 0, j, jj, tt1, tt2;
        for(; i < maxlength; i++){
            tt1 = t1[i] || getEmpty(t2[i]);
            tt2 = t2[i] || getEmpty(tt1);
            if (tt1[0] != tt2[0] || tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3]) || tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4])) {
                t1 = Snap._.transform2matrix(t1, getBBox());
                t2 = Snap._.transform2matrix(t2, getBBox());
                from = [
                    [
                        "m",
                        t1.a,
                        t1.b,
                        t1.c,
                        t1.d,
                        t1.e,
                        t1.f
                    ]
                ];
                to = [
                    [
                        "m",
                        t2.a,
                        t2.b,
                        t2.c,
                        t2.d,
                        t2.e,
                        t2.f
                    ]
                ];
                break;
            }
            from[i] = [];
            to[i] = [];
            for(j = 0, jj = Math.max(tt1.length, tt2.length); j < jj; j++){
                j in tt1 && (from[i][j] = tt1[j]);
                j in tt2 && (to[i][j] = tt2[j]);
            }
        }
        return {
            from: path2array(from),
            to: path2array(to),
            f: getPath(from)
        };
    }
    function getNumber(val) {
        return val;
    }
    function getUnit(unit) {
        return function(val) {
            return +val.toFixed(3) + unit;
        };
    }
    function getViewBox(val) {
        return val.join(" ");
    }
    function getColour(clr) {
        return Snap.rgb(clr[0], clr[1], clr[2], clr[3]);
    }
    function getPath(path) {
        var k = 0, i, ii, j, jj, out, a, b = [];
        for(i = 0, ii = path.length; i < ii; i++){
            out = "[";
            a = [
                '"' + path[i][0] + '"'
            ];
            for(j = 1, jj = path[i].length; j < jj; j++){
                a[j] = "val[" + k++ + "]";
            }
            out += a + "]";
            b[i] = out;
        }
        return Function("val", "return Snap.path.toString.call([" + b + "])");
    }
    function path2array(path) {
        var out = [];
        for(var i = 0, ii = path.length; i < ii; i++){
            for(var j = 1, jj = path[i].length; j < jj; j++){
                out.push(path[i][j]);
            }
        }
        return out;
    }
    function isNumeric(obj) {
        return isFinite(obj);
    }
    function arrayEqual(arr1, arr2) {
        if (!Snap.is(arr1, "array") || !Snap.is(arr2, "array")) {
            return false;
        }
        return arr1.toString() == arr2.toString();
    }
    Element.prototype.equal = function(name, b) {
        return eve("snap.util.equal", this, name, b).firstDefined();
    };
    eve.on("snap.util.equal", function(name, b) {
        var A, B, a = Str(this.attr(name) || ""), el = this;
        if (names[name] == "colour") {
            A = Snap.color(a);
            B = Snap.color(b);
            return {
                from: [
                    A.r,
                    A.g,
                    A.b,
                    A.opacity
                ],
                to: [
                    B.r,
                    B.g,
                    B.b,
                    B.opacity
                ],
                f: getColour
            };
        }
        if (name == "viewBox") {
            A = this.attr(name).vb.split(" ").map(Number);
            B = b.split(" ").map(Number);
            return {
                from: A,
                to: B,
                f: getViewBox
            };
        }
        if (name == "transform" || name == "gradientTransform" || name == "patternTransform") {
            if (typeof b == "string") {
                b = Str(b).replace(/\.{3}|\u2026/g, a);
            }
            a = this.matrix;
            if (!Snap._.rgTransform.test(b)) {
                b = Snap._.transform2matrix(Snap._.svgTransform2string(b), this.getBBox());
            } else {
                b = Snap._.transform2matrix(b, this.getBBox());
            }
            return equaliseTransform(a, b, function() {
                return el.getBBox(1);
            });
        }
        if (name == "d" || name == "path") {
            A = Snap.path.toCubic(a, b);
            return {
                from: path2array(A[0]),
                to: path2array(A[1]),
                f: getPath(A[0])
            };
        }
        if (name == "points") {
            A = Str(a).split(Snap._.separator);
            B = Str(b).split(Snap._.separator);
            return {
                from: A,
                to: B,
                f: function(val) {
                    return val;
                }
            };
        }
        if (isNumeric(a) && isNumeric(b)) {
            return {
                from: parseFloat(a),
                to: parseFloat(b),
                f: getNumber
            };
        }
        var aUnit = a.match(reUnit), bUnit = Str(b).match(reUnit);
        if (aUnit && arrayEqual(aUnit, bUnit)) {
            return {
                from: parseFloat(a),
                to: parseFloat(b),
                f: getUnit(aUnit)
            };
        } else {
            return {
                from: this.asPX(name),
                to: this.asPX(name, b),
                f: getNumber
            };
        }
    });
});
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function(Snap, Element, Paper, glob) {
    var elproto = Element.prototype, has = "hasOwnProperty", supportsTouch = "createTouch" in glob.doc, events = [
        "click",
        "dblclick",
        "mousedown",
        "mousemove",
        "mouseout",
        "mouseover",
        "mouseup",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel"
    ], touchMap = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
    }, getScroll = function(xy, el) {
        var name = xy == "y" ? "scrollTop" : "scrollLeft", doc = el && el.node ? el.node.ownerDocument : glob.doc;
        return doc[name in doc.documentElement ? "documentElement" : "body"][name];
    }, preventDefault = function() {
        this.returnValue = false;
    }, preventTouch = function() {
        return this.originalEvent.preventDefault();
    }, stopPropagation = function() {
        this.cancelBubble = true;
    }, stopTouch = function() {
        return this.originalEvent.stopPropagation();
    }, addEvent = function(obj, type, fn, element) {
        var realName = supportsTouch && touchMap[type] ? touchMap[type] : type, f = function(e) {
            var scrollY = getScroll("y", element), scrollX = getScroll("x", element);
            if (supportsTouch && touchMap[has](type)) {
                for(var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++){
                    if (e.targetTouches[i].target == obj || obj.contains(e.targetTouches[i].target)) {
                        var olde = e;
                        e = e.targetTouches[i];
                        e.originalEvent = olde;
                        e.preventDefault = preventTouch;
                        e.stopPropagation = stopTouch;
                        break;
                    }
                }
            }
            var x = e.clientX + scrollX, y = e.clientY + scrollY;
            return fn.call(element, e, x, y);
        };
        if (type !== realName) {
            obj.addEventListener(type, f, false);
        }
        obj.addEventListener(realName, f, false);
        return function() {
            if (type !== realName) {
                obj.removeEventListener(type, f, false);
            }
            obj.removeEventListener(realName, f, false);
            return true;
        };
    }, drag = [], dragMove = function(e) {
        var x = e.clientX, y = e.clientY, scrollY = getScroll("y"), scrollX = getScroll("x"), dragi, j = drag.length;
        while(j--){
            dragi = drag[j];
            if (supportsTouch) {
                var i = e.touches && e.touches.length, touch;
                while(i--){
                    touch = e.touches[i];
                    if (touch.identifier == dragi.el._drag.id || dragi.el.node.contains(touch.target)) {
                        x = touch.clientX;
                        y = touch.clientY;
                        (e.originalEvent ? e.originalEvent : e).preventDefault();
                        break;
                    }
                }
            } else {
                e.preventDefault();
            }
            var node = dragi.el.node, o, next = node.nextSibling, parent = node.parentNode, display = node.style.display;
            // glob.win.opera && parent.removeChild(node);
            // node.style.display = "none";
            // o = dragi.el.paper.getElementByPoint(x, y);
            // node.style.display = display;
            // glob.win.opera && (next ? parent.insertBefore(node, next) : parent.appendChild(node));
            // o && eve("snap.drag.over." + dragi.el.id, dragi.el, o);
            x += scrollX;
            y += scrollY;
            eve("snap.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
        }
    }, dragUp = function(e) {
        Snap.unmousemove(dragMove).unmouseup(dragUp);
        var i = drag.length, dragi;
        while(i--){
            dragi = drag[i];
            dragi.el._drag = {};
            eve("snap.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
            eve.off("snap.drag.*." + dragi.el.id);
        }
        drag = [];
    };
    /*\
     * Element.click
     [ method ]
     **
     * Adds a click event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.unclick
     [ method ]
     **
     * Removes a click event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.dblclick
     [ method ]
     **
     * Adds a double click event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.undblclick
     [ method ]
     **
     * Removes a double click event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.mousedown
     [ method ]
     **
     * Adds a mousedown event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.unmousedown
     [ method ]
     **
     * Removes a mousedown event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.mousemove
     [ method ]
     **
     * Adds a mousemove event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.unmousemove
     [ method ]
     **
     * Removes a mousemove event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.mouseout
     [ method ]
     **
     * Adds a mouseout event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.unmouseout
     [ method ]
     **
     * Removes a mouseout event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.mouseover
     [ method ]
     **
     * Adds a mouseover event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.unmouseover
     [ method ]
     **
     * Removes a mouseover event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.mouseup
     [ method ]
     **
     * Adds a mouseup event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.unmouseup
     [ method ]
     **
     * Removes a mouseup event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.touchstart
     [ method ]
     **
     * Adds a touchstart event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.untouchstart
     [ method ]
     **
     * Removes a touchstart event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.touchmove
     [ method ]
     **
     * Adds a touchmove event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.untouchmove
     [ method ]
     **
     * Removes a touchmove event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.touchend
     [ method ]
     **
     * Adds a touchend event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.untouchend
     [ method ]
     **
     * Removes a touchend event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.touchcancel
     [ method ]
     **
     * Adds a touchcancel event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.untouchcancel
     [ method ]
     **
     * Removes a touchcancel event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ for(var i = events.length; i--;){
        (function(eventName) {
            Snap[eventName] = elproto[eventName] = function(fn, scope) {
                if (Snap.is(fn, "function")) {
                    this.events = this.events || [];
                    this.events.push({
                        name: eventName,
                        f: fn,
                        unbind: addEvent(this.node || document, eventName, fn, scope || this)
                    });
                } else {
                    for(var i = 0, ii = this.events.length; i < ii; i++)if (this.events[i].name == eventName) {
                        try {
                            this.events[i].f.call(this);
                        } catch (e) {}
                    }
                }
                return this;
            };
            Snap["un" + eventName] = elproto["un" + eventName] = function(fn) {
                var events = this.events || [], l = events.length;
                while(l--)if (events[l].name == eventName && (events[l].f == fn || !fn)) {
                    events[l].unbind();
                    events.splice(l, 1);
                    !events.length && delete this.events;
                    return this;
                }
                return this;
            };
        })(events[i]);
    }
    /*\
     * Element.hover
     [ method ]
     **
     * Adds hover event handlers to the element
     - f_in (function) handler for hover in
     - f_out (function) handler for hover out
     - icontext (object) #optional context for hover in handler
     - ocontext (object) #optional context for hover out handler
     = (object) @Element
    \*/ elproto.hover = function(f_in, f_out, scope_in, scope_out) {
        return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
    };
    /*\
     * Element.unhover
     [ method ]
     **
     * Removes hover event handlers from the element
     - f_in (function) handler for hover in
     - f_out (function) handler for hover out
     = (object) @Element
    \*/ elproto.unhover = function(f_in, f_out) {
        return this.unmouseover(f_in).unmouseout(f_out);
    };
    var draggable = [];
    // SIERRA unclear what _context_ refers to for starting, ending, moving the drag gesture.
    // SIERRA Element.drag(): _x position of the mouse_: Where are the x/y values offset from?
    // SIERRA Element.drag(): much of this member's doc appears to be duplicated for some reason.
    // SIERRA Unclear about this sentence: _Additionally following drag events will be triggered: drag.start.<id> on start, drag.end.<id> on end and drag.move.<id> on every move._ Is there a global _drag_ object to which you can assign handlers keyed by an element's ID?
    /*\
     * Element.drag
     [ method ]
     **
     * Adds event handlers for an element's drag gesture
     **
     - onmove (function) handler for moving
     - onstart (function) handler for drag start
     - onend (function) handler for drag end
     - mcontext (object) #optional context for moving handler
     - scontext (object) #optional context for drag start handler
     - econtext (object) #optional context for drag end handler
     * Additionaly following `drag` events are triggered: `drag.start.<id>` on start, 
     * `drag.end.<id>` on end and `drag.move.<id>` on every move. When element is dragged over another element 
     * `drag.over.<id>` fires as well.
     *
     * Start event and start handler are called in specified context or in context of the element with following parameters:
     o x (number) x position of the mouse
     o y (number) y position of the mouse
     o event (object) DOM event object
     * Move event and move handler are called in specified context or in context of the element with following parameters:
     o dx (number) shift by x from the start point
     o dy (number) shift by y from the start point
     o x (number) x position of the mouse
     o y (number) y position of the mouse
     o event (object) DOM event object
     * End event and end handler are called in specified context or in context of the element with following parameters:
     o event (object) DOM event object
     = (object) @Element
    \*/ elproto.drag = function(onmove, onstart, onend, move_scope, start_scope, end_scope) {
        var el = this;
        if (!arguments.length) {
            var origTransform;
            return el.drag(function(dx, dy) {
                this.attr({
                    transform: origTransform + (origTransform ? "T" : "t") + [
                        dx,
                        dy
                    ]
                });
            }, function() {
                origTransform = this.transform().local;
            });
        }
        function start(e, x, y) {
            (e.originalEvent || e).preventDefault();
            el._drag.x = x;
            el._drag.y = y;
            el._drag.id = e.identifier;
            !drag.length && Snap.mousemove(dragMove).mouseup(dragUp);
            drag.push({
                el: el,
                move_scope: move_scope,
                start_scope: start_scope,
                end_scope: end_scope
            });
            onstart && eve.on("snap.drag.start." + el.id, onstart);
            onmove && eve.on("snap.drag.move." + el.id, onmove);
            onend && eve.on("snap.drag.end." + el.id, onend);
            eve("snap.drag.start." + el.id, start_scope || move_scope || el, x, y, e);
        }
        function init(e, x, y) {
            eve("snap.draginit." + el.id, el, e, x, y);
        }
        eve.on("snap.draginit." + el.id, start);
        el._drag = {};
        draggable.push({
            el: el,
            start: start,
            init: init
        });
        el.mousedown(init);
        return el;
    };
    /*
     * Element.onDragOver
     [ method ]
     **
     * Shortcut to assign event handler for `drag.over.<id>` event, where `id` is the element's `id` (see @Element.id)
     - f (function) handler for event, first argument would be the element you are dragging over
    \*/ // elproto.onDragOver = function (f) {
    //     f ? eve.on("snap.drag.over." + this.id, f) : eve.unbind("snap.drag.over." + this.id);
    // };
    /*\
     * Element.undrag
     [ method ]
     **
     * Removes all drag event handlers from the given element
    \*/ elproto.undrag = function() {
        var i = draggable.length;
        while(i--)if (draggable[i].el == this) {
            this.unmousedown(draggable[i].init);
            draggable.splice(i, 1);
            eve.unbind("snap.drag.*." + this.id);
            eve.unbind("snap.draginit." + this.id);
        }
        !draggable.length && Snap.unmousemove(dragMove).unmouseup(dragUp);
        return this;
    };
});
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function(Snap, Element, Paper, glob) {
    var elproto = Element.prototype, pproto = Paper.prototype, rgurl = /^\s*url\((.+)\)/, Str = String, $ = Snap._.$;
    Snap.filter = {};
    /*\
     * Paper.filter
     [ method ]
     **
     * Creates a `<filter>` element
     **
     - filstr (string) SVG fragment of filter provided as a string
     = (object) @Element
     * Note: It is recommended to use filters embedded into the page inside an empty SVG element.
     > Usage
     | var f = paper.filter('<feGaussianBlur stdDeviation="2"/>'),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/ pproto.filter = function(filstr) {
        var paper = this;
        if (paper.type != "svg") {
            paper = paper.paper;
        }
        var f = Snap.parse(Str(filstr)), id = Snap._.id(), width = paper.node.offsetWidth, height = paper.node.offsetHeight, filter = $("filter");
        $(filter, {
            id: id,
            filterUnits: "userSpaceOnUse"
        });
        filter.appendChild(f.node);
        paper.defs.appendChild(filter);
        return new Element(filter);
    };
    eve.on("snap.util.getattr.filter", function() {
        eve.stop();
        var p = $(this.node, "filter");
        if (p) {
            var match = Str(p).match(rgurl);
            return match && Snap.select(match[1]);
        }
    });
    eve.on("snap.util.attr.filter", function(value) {
        if (value instanceof Element && value.type == "filter") {
            eve.stop();
            var id = value.node.id;
            if (!id) {
                $(value.node, {
                    id: value.id
                });
                id = value.id;
            }
            $(this.node, {
                filter: Snap.url(id)
            });
        }
        if (!value || value == "none") {
            eve.stop();
            this.node.removeAttribute("filter");
        }
    });
    /*\
     * Snap.filter.blur
     [ method ]
     **
     * Returns an SVG markup string for the blur filter
     **
     - x (number) amount of horizontal blur, in pixels
     - y (number) #optional amount of vertical blur, in pixels
     = (string) filter representation
     > Usage
     | var f = paper.filter(Snap.filter.blur(5, 10)),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/ Snap.filter.blur = function(x, y) {
        if (x == null) {
            x = 2;
        }
        var def = y == null ? x : [
            x,
            y
        ];
        return Snap.format('\<feGaussianBlur stdDeviation="{def}"/>', {
            def: def
        });
    };
    Snap.filter.blur.toString = function() {
        return this();
    };
    /*\
     * Snap.filter.shadow
     [ method ]
     **
     * Returns an SVG markup string for the shadow filter
     **
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - blur (number) #optional amount of blur
     - color (string) #optional color of the shadow
     - opacity (number) #optional `0..1` opacity of the shadow
     * or
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - color (string) #optional color of the shadow
     - opacity (number) #optional `0..1` opacity of the shadow
     * which makes blur default to `4`. Or
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - opacity (number) #optional `0..1` opacity of the shadow
     = (string) filter representation
     > Usage
     | var f = paper.filter(Snap.filter.shadow(0, 2, .3)),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/ Snap.filter.shadow = function(dx, dy, blur, color, opacity) {
        if (opacity == null) {
            if (color == null) {
                opacity = blur;
                blur = 4;
                color = "#000";
            } else {
                opacity = color;
                color = blur;
                blur = 4;
            }
        }
        if (blur == null) {
            blur = 4;
        }
        if (opacity == null) {
            opacity = 1;
        }
        if (dx == null) {
            dx = 0;
            dy = 2;
        }
        if (dy == null) {
            dy = dx;
        }
        color = Snap.color(color);
        return Snap.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
            color: color,
            dx: dx,
            dy: dy,
            blur: blur,
            opacity: opacity
        });
    };
    Snap.filter.shadow.toString = function() {
        return this();
    };
    /*\
     * Snap.filter.grayscale
     [ method ]
     **
     * Returns an SVG markup string for the grayscale filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/ Snap.filter.grayscale = function(amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
            a: 0.2126 + 0.7874 * (1 - amount),
            b: 0.7152 - 0.7152 * (1 - amount),
            c: 0.0722 - 0.0722 * (1 - amount),
            d: 0.2126 - 0.2126 * (1 - amount),
            e: 0.7152 + 0.2848 * (1 - amount),
            f: 0.0722 - 0.0722 * (1 - amount),
            g: 0.2126 - 0.2126 * (1 - amount),
            h: 0.0722 + 0.9278 * (1 - amount)
        });
    };
    Snap.filter.grayscale.toString = function() {
        return this();
    };
    /*\
     * Snap.filter.sepia
     [ method ]
     **
     * Returns an SVG markup string for the sepia filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/ Snap.filter.sepia = function(amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
            a: 0.393 + 0.607 * (1 - amount),
            b: 0.769 - 0.769 * (1 - amount),
            c: 0.189 - 0.189 * (1 - amount),
            d: 0.349 - 0.349 * (1 - amount),
            e: 0.686 + 0.314 * (1 - amount),
            f: 0.168 - 0.168 * (1 - amount),
            g: 0.272 - 0.272 * (1 - amount),
            h: 0.534 - 0.534 * (1 - amount),
            i: 0.131 + 0.869 * (1 - amount)
        });
    };
    Snap.filter.sepia.toString = function() {
        return this();
    };
    /*\
     * Snap.filter.saturate
     [ method ]
     **
     * Returns an SVG markup string for the saturate filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/ Snap.filter.saturate = function(amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="saturate" values="{amount}"/>', {
            amount: 1 - amount
        });
    };
    Snap.filter.saturate.toString = function() {
        return this();
    };
    /*\
     * Snap.filter.hueRotate
     [ method ]
     **
     * Returns an SVG markup string for the hue-rotate filter
     **
     - angle (number) angle of rotation
     = (string) filter representation
    \*/ Snap.filter.hueRotate = function(angle) {
        angle = angle || 0;
        return Snap.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
            angle: angle
        });
    };
    Snap.filter.hueRotate.toString = function() {
        return this();
    };
    /*\
     * Snap.filter.invert
     [ method ]
     **
     * Returns an SVG markup string for the invert filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/ Snap.filter.invert = function(amount) {
        if (amount == null) {
            amount = 1;
        }
        //        <feColorMatrix type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" color-interpolation-filters="sRGB"/>
        return Snap.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
            amount: amount,
            amount2: 1 - amount
        });
    };
    Snap.filter.invert.toString = function() {
        return this();
    };
    /*\
     * Snap.filter.brightness
     [ method ]
     **
     * Returns an SVG markup string for the brightness filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/ Snap.filter.brightness = function(amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
            amount: amount
        });
    };
    Snap.filter.brightness.toString = function() {
        return this();
    };
    /*\
     * Snap.filter.contrast
     [ method ]
     **
     * Returns an SVG markup string for the contrast filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/ Snap.filter.contrast = function(amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
            amount: amount,
            amount2: .5 - amount / 2
        });
    };
    Snap.filter.contrast.toString = function() {
        return this();
    };
});
// Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function(Snap, Element, Paper, glob, Fragment) {
    var box = Snap._.box, is = Snap.is, firstLetter = /^[^a-z]*([tbmlrc])/i, toString = function() {
        return "T" + this.dx + "," + this.dy;
    };
    /*\
     * Element.getAlign
     [ method ]
     **
     * Returns shift needed to align the element relatively to given element.
     * If no elements specified, parent `<svg>` container will be used.
     - el (object) @optional alignment element
     - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
     = (object|string) Object in format `{dx: , dy: }` also has a string representation as a transformation string
     > Usage
     | el.transform(el.getAlign(el2, "top"));
     * or
     | var dy = el.getAlign(el2, "top").dy;
    \*/ Element.prototype.getAlign = function(el, way) {
        if (way == null && is(el, "string")) {
            way = el;
            el = null;
        }
        el = el || this.paper;
        var bx = el.getBBox ? el.getBBox() : box(el), bb = this.getBBox(), out = {};
        way = way && way.match(firstLetter);
        way = way ? way[1].toLowerCase() : "c";
        switch(way){
            case "t":
                out.dx = 0;
                out.dy = bx.y - bb.y;
                break;
            case "b":
                out.dx = 0;
                out.dy = bx.y2 - bb.y2;
                break;
            case "m":
                out.dx = 0;
                out.dy = bx.cy - bb.cy;
                break;
            case "l":
                out.dx = bx.x - bb.x;
                out.dy = 0;
                break;
            case "r":
                out.dx = bx.x2 - bb.x2;
                out.dy = 0;
                break;
            default:
                out.dx = bx.cx - bb.cx;
                out.dy = 0;
                break;
        }
        out.toString = toString;
        return out;
    };
    /*\
     * Element.align
     [ method ]
     **
     * Aligns the element relatively to given one via transformation.
     * If no elements specified, parent `<svg>` container will be used.
     - el (object) @optional alignment element
     - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
     = (object) this element
     > Usage
     | el.align(el2, "top");
     * or
     | el.align("middle");
    \*/ Element.prototype.align = function(el, way) {
        return this.transform("..." + this.getAlign(el, way));
    };
});
// Copyright (c) 2016 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function(Snap, Element, Paper, glob, Fragment) {
    var elproto = Element.prototype, is = Snap.is, Str = String, has = "hasOwnProperty";
    function slice(from, to, f) {
        return function(arr) {
            var res1 = arr.slice(from, to);
            if (res1.length == 1) {
                res1 = res1[0];
            }
            return f ? f(res1) : res1;
        };
    }
    var Animation = function(attr, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        this.attr = attr;
        this.dur = ms;
        easing && (this.easing = easing);
        callback && (this.callback = callback);
    };
    Snap._.Animation = Animation;
    /*\
     * Snap.animation
     [ method ]
     **
     * Creates an animation object
     **
     - attr (object) attributes of final destination
     - duration (number) duration of the animation, in milliseconds
     - easing (function) #optional one of easing functions of @mina or custom one
     - callback (function) #optional callback function that fires when animation ends
     = (object) animation object
    \*/ Snap.animation = function(attr, ms, easing, callback) {
        return new Animation(attr, ms, easing, callback);
    };
    /*\
     * Element.inAnim
     [ method ]
     **
     * Returns a set of animations that may be able to manipulate the current element
     **
     = (object) in format:
     o {
     o     anim (object) animation object,
     o     mina (object) @mina object,
     o     curStatus (number) 0..1 — status of the animation: 0 — just started, 1 — just finished,
     o     status (function) gets or sets the status of the animation,
     o     stop (function) stops the animation
     o }
    \*/ elproto.inAnim = function() {
        var el = this, res1 = [];
        for(var id in el.anims)if (el.anims[has](id)) {
            (function(a) {
                res1.push({
                    anim: new Animation(a._attrs, a.dur, a.easing, a._callback),
                    mina: a,
                    curStatus: a.status(),
                    status: function(val) {
                        return a.status(val);
                    },
                    stop: function() {
                        a.stop();
                    }
                });
            })(el.anims[id]);
        }
        return res1;
    };
    /*\
     * Snap.animate
     [ method ]
     **
     * Runs generic animation of one number into another with a caring function
     **
     - from (number|array) number or array of numbers
     - to (number|array) number or array of numbers
     - setter (function) caring function that accepts one number argument
     - duration (number) duration, in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function to execute when animation ends
     = (object) animation object in @mina format
     o {
     o     id (string) animation id, consider it read-only,
     o     duration (function) gets or sets the duration of the animation,
     o     easing (function) easing,
     o     speed (function) gets or sets the speed of the animation,
     o     status (function) gets or sets the status of the animation,
     o     stop (function) stops the animation
     o }
     | var rect = Snap().rect(0, 0, 10, 10);
     | Snap.animate(0, 10, function (val) {
     |     rect.attr({
     |         x: val
     |     });
     | }, 1000);
     | // in given context is equivalent to
     | rect.animate({x: 10}, 1000);
    \*/ Snap.animate = function(from, to, setter, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        var now = mina.time(), anim = mina(from, to, now, now + ms, mina.time, setter, easing);
        callback && eve.once("mina.finish." + anim.id, callback);
        return anim;
    };
    /*\
     * Element.stop
     [ method ]
     **
     * Stops all the animations for the current element
     **
     = (Element) the current element
    \*/ elproto.stop = function() {
        var anims = this.inAnim();
        for(var i = 0, ii = anims.length; i < ii; i++){
            anims[i].stop();
        }
        return this;
    };
    /*\
     * Element.animate
     [ method ]
     **
     * Animates the given attributes of the element
     **
     - attrs (object) key-value pairs of destination attributes
     - duration (number) duration of the animation in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function that executes when the animation ends
     = (Element) the current element
    \*/ elproto.animate = function(attrs, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        if (attrs instanceof Animation) {
            callback = attrs.callback;
            easing = attrs.easing;
            ms = attrs.dur;
            attrs = attrs.attr;
        }
        var fkeys = [], tkeys = [], keys = {}, from, to, f, eq, el = this;
        for(var key in attrs)if (attrs[has](key)) {
            if (el.equal) {
                eq = el.equal(key, Str(attrs[key]));
                from = eq.from;
                to = eq.to;
                f = eq.f;
            } else {
                from = +el.attr(key);
                to = +attrs[key];
            }
            var len = is(from, "array") ? from.length : 1;
            keys[key] = slice(fkeys.length, fkeys.length + len, f);
            fkeys = fkeys.concat(from);
            tkeys = tkeys.concat(to);
        }
        var now = mina.time(), anim = mina(fkeys, tkeys, now, now + ms, mina.time, function(val) {
            var attr = {};
            for(var key in keys)if (keys[has](key)) {
                attr[key] = keys[key](val);
            }
            el.attr(attr);
        }, easing);
        el.anims[anim.id] = anim;
        anim._attrs = attrs;
        anim._callback = callback;
        eve("snap.animcreated." + el.id, anim);
        eve.once("mina.finish." + anim.id, function() {
            eve.off("mina.*." + anim.id);
            delete el.anims[anim.id];
            callback && callback.call(el);
        });
        eve.once("mina.stop." + anim.id, function() {
            eve.off("mina.*." + anim.id);
            delete el.anims[anim.id];
        });
        return el;
    };
});
// Copyright (c) 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function(Snap, Element, Paper, glob) {
    // Colours are from https://www.materialui.co
    var red = "#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000", pink = "#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162", purple = "#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF", deeppurple = "#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA", indigo = "#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE", blue = "#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF", lightblue = "#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA", cyan = "#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4", teal = "#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5", green = "#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853", lightgreen = "#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17", lime = "#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00", yellow = "#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600", amber = "#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00", orange = "#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00", deeporange = "#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00", brown = "#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723", grey = "#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121", bluegrey = "#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238";
    /*\
     * Snap.mui
     [ property ]
     **
     * Contain Material UI colours.
     | Snap().rect(0, 0, 10, 10).attr({fill: Snap.mui.deeppurple, stroke: Snap.mui.amber[600]});
     # For colour reference: <a href="https://www.materialui.co">https://www.materialui.co</a>.
    \*/ Snap.mui = {};
    /*\
     * Snap.flat
     [ property ]
     **
     * Contain Flat UI colours.
     | Snap().rect(0, 0, 10, 10).attr({fill: Snap.flat.carrot, stroke: Snap.flat.wetasphalt});
     # For colour reference: <a href="https://www.materialui.co">https://www.materialui.co</a>.
    \*/ Snap.flat = {};
    function saveColor(colors) {
        colors = colors.split(/(?=#)/);
        var color = new String(colors[5]);
        color[50] = colors[0];
        color[100] = colors[1];
        color[200] = colors[2];
        color[300] = colors[3];
        color[400] = colors[4];
        color[500] = colors[5];
        color[600] = colors[6];
        color[700] = colors[7];
        color[800] = colors[8];
        color[900] = colors[9];
        if (colors[10]) {
            color.A100 = colors[10];
            color.A200 = colors[11];
            color.A400 = colors[12];
            color.A700 = colors[13];
        }
        return color;
    }
    Snap.mui.red = saveColor(red);
    Snap.mui.pink = saveColor(pink);
    Snap.mui.purple = saveColor(purple);
    Snap.mui.deeppurple = saveColor(deeppurple);
    Snap.mui.indigo = saveColor(indigo);
    Snap.mui.blue = saveColor(blue);
    Snap.mui.lightblue = saveColor(lightblue);
    Snap.mui.cyan = saveColor(cyan);
    Snap.mui.teal = saveColor(teal);
    Snap.mui.green = saveColor(green);
    Snap.mui.lightgreen = saveColor(lightgreen);
    Snap.mui.lime = saveColor(lime);
    Snap.mui.yellow = saveColor(yellow);
    Snap.mui.amber = saveColor(amber);
    Snap.mui.orange = saveColor(orange);
    Snap.mui.deeporange = saveColor(deeporange);
    Snap.mui.brown = saveColor(brown);
    Snap.mui.grey = saveColor(grey);
    Snap.mui.bluegrey = saveColor(bluegrey);
    Snap.flat.turquoise = "#1abc9c";
    Snap.flat.greensea = "#16a085";
    Snap.flat.sunflower = "#f1c40f";
    Snap.flat.orange = "#f39c12";
    Snap.flat.emerland = "#2ecc71";
    Snap.flat.nephritis = "#27ae60";
    Snap.flat.carrot = "#e67e22";
    Snap.flat.pumpkin = "#d35400";
    Snap.flat.peterriver = "#3498db";
    Snap.flat.belizehole = "#2980b9";
    Snap.flat.alizarin = "#e74c3c";
    Snap.flat.pomegranate = "#c0392b";
    Snap.flat.amethyst = "#9b59b6";
    Snap.flat.wisteria = "#8e44ad";
    Snap.flat.clouds = "#ecf0f1";
    Snap.flat.silver = "#bdc3c7";
    Snap.flat.wetasphalt = "#34495e";
    Snap.flat.midnightblue = "#2c3e50";
    Snap.flat.concrete = "#95a5a6";
    Snap.flat.asbestos = "#7f8c8d";
    /*\
     * Snap.importMUIColors
     [ method ]
     **
     * Imports Material UI colours into global object.
     | Snap.importMUIColors();
     | Snap().rect(0, 0, 10, 10).attr({fill: deeppurple, stroke: amber[600]});
     # For colour reference: <a href="https://www.materialui.co">https://www.materialui.co</a>.
    \*/ Snap.importMUIColors = function() {
        for(var color in Snap.mui){
            if (Snap.mui.hasOwnProperty(color)) {
                window[color] = Snap.mui[color];
            }
        }
    };
});
module.exports = Snap;
}),
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/helpers/snapsvgImporter.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = function() {
    var Snap = undefined;
    try {
        Snap = __turbopack_context__.r("[project]/webthethao2.0/node_modules/snapsvg-cjs/dist/snap.svg-cjs.js [app-client] (ecmascript)");
    } finally{
        return Snap;
    }
};
module.exports = exports['default'];
}),
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/helpers/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var pxToNum = function pxToNum(val) {
    return parseInt(val.slice(0, -2), 10);
};
exports.pxToNum = pxToNum;
}),
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/elastic.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _helpersSnapsvgImporter = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/helpers/snapsvgImporter.js [app-client] (ecmascript)");
var _helpersSnapsvgImporter2 = _interopRequireDefault(_helpersSnapsvgImporter);
var _menuFactory = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menuFactory.js [app-client] (ecmascript)");
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var _helpersUtils = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/helpers/utils.js [app-client] (ecmascript)");
var MORPH_SHAPE_WIDTH = 120;
var styles = {
    svg: {
        lib: _helpersSnapsvgImporter2['default'],
        pathInitial: 'M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z',
        pathOpen: 'M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z',
        animate: function animate(path) {
            path.animate({
                path: this.pathOpen
            }, 400, window.mina.easeinout);
        }
    },
    morphShape: function morphShape(isOpen, width, right) {
        return {
            position: 'absolute',
            width: MORPH_SHAPE_WIDTH,
            height: '100%',
            right: right ? 'inherit' : 0,
            left: right ? 0 : 'inherit',
            MozTransform: right ? 'rotateY(180deg)' : '',
            MsTransform: right ? 'rotateY(180deg)' : '',
            OTransform: right ? 'rotateY(180deg)' : '',
            WebkitTransform: right ? 'rotateY(180deg)' : '',
            transform: right ? 'rotateY(180deg)' : ''
        };
    },
    menuWrap: function menuWrap(isOpen, width, right) {
        return {
            MozTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
            MsTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
            OTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
            WebkitTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
            transform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
            transition: 'all 0.3s'
        };
    },
    menu: function menu(isOpen, width, right) {
        return {
            position: 'fixed',
            right: right ? 0 : 'inherit',
            width: (0, _helpersUtils.pxToNum)(width) - MORPH_SHAPE_WIDTH,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            overflow: 'visible'
        };
    },
    itemList: function itemList(isOpen, width, right) {
        if (right) {
            return {
                position: 'relative',
                left: '-110px',
                width: '170%',
                overflow: 'auto'
            };
        }
    },
    pageWrap: function pageWrap(isOpen, width, right) {
        return {
            MozTransform: isOpen ? '' : right ? 'translate3d(-100px, 0, 0)' : 'translate3d(100px, 0, 0)',
            MsTransform: isOpen ? '' : right ? 'translate3d(-100px, 0, 0)' : 'translate3d(100px, 0, 0)',
            OTransform: isOpen ? '' : right ? 'translate3d(-100px, 0, 0)' : 'translate3d(100px, 0, 0)',
            WebkitTransform: isOpen ? '' : right ? 'translate3d(-100px, 0, 0)' : 'translate3d(100px, 0, 0)',
            transform: isOpen ? '' : right ? 'translate3d(-100px, 0, 0)' : 'translate3d(100px, 0, 0)',
            transition: isOpen ? 'all 0.3s' : 'all 0.3s 0.1s'
        };
    },
    outerContainer: function outerContainer(isOpen) {
        return {
            overflow: isOpen ? '' : 'hidden'
        };
    }
};
exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];
}),
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/bubble.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _helpersSnapsvgImporter = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/helpers/snapsvgImporter.js [app-client] (ecmascript)");
var _helpersSnapsvgImporter2 = _interopRequireDefault(_helpersSnapsvgImporter);
var _menuFactory = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menuFactory.js [app-client] (ecmascript)");
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var _helpersUtils = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/helpers/utils.js [app-client] (ecmascript)");
var BUBBLE_WIDTH = 140;
var styles = {
    svg: {
        lib: _helpersSnapsvgImporter2['default'],
        pathInitial: 'M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z',
        pathOpen: 'M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z',
        animate: function animate(path) {
            var pos = 0;
            var steps = this.pathOpen.split(';');
            var stepsTotal = steps.length;
            var mina = window.mina;
            var nextStep = function nextStep() {
                if (pos > stepsTotal - 1) return;
                path.animate({
                    path: steps[pos]
                }, pos === 0 ? 400 : 500, pos === 0 ? mina.easein : mina.elastic, function() {
                    nextStep();
                });
                pos++;
            };
            nextStep();
        }
    },
    morphShape: function morphShape(isOpen, width, right) {
        return {
            position: 'absolute',
            width: '100%',
            height: '100%',
            right: right ? 'inherit' : 0,
            left: right ? 0 : 'inherit',
            MozTransform: right ? 'rotateY(180deg)' : 'rotateY(0deg)',
            MsTransform: right ? 'rotateY(180deg)' : 'rotateY(0deg)',
            OTransform: right ? 'rotateY(180deg)' : 'rotateY(0deg)',
            WebkitTransform: right ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transform: right ? 'rotateY(180deg)' : 'rotateY(0deg)'
        };
    },
    menuWrap: function menuWrap(isOpen, width, right) {
        return {
            MozTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
            MsTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
            OTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
            WebkitTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
            transform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
            transition: isOpen ? 'transform 0.4s 0s' : 'transform 0.4s'
        };
    },
    menu: function menu(isOpen, width, right) {
        var finalWidth = (0, _helpersUtils.pxToNum)(width) - BUBBLE_WIDTH;
        return {
            position: 'fixed',
            MozTransform: isOpen ? '' : right ? 'translate3d(' + finalWidth + ', 0, 0)' : 'translate3d(-' + finalWidth + ', 0, 0)',
            MsTransform: isOpen ? '' : right ? 'translate3d(' + finalWidth + ', 0, 0)' : 'translate3d(-' + finalWidth + ', 0, 0)',
            OTransform: isOpen ? '' : right ? 'translate3d(' + finalWidth + ', 0, 0)' : 'translate3d(-' + finalWidth + ', 0, 0)',
            WebkitTransform: isOpen ? '' : right ? 'translate3d(' + finalWidth + ', 0, 0)' : 'translate3d(-' + finalWidth + ', 0, 0)',
            transform: isOpen ? '' : right ? 'translate3d(' + finalWidth + ', 0, 0)' : 'translate3d(-' + finalWidth + ', 0, 0)',
            transition: isOpen ? 'opacity 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27)' : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
            opacity: isOpen ? 1 : 0
        };
    },
    item: function item(isOpen, width, right, nthChild) {
        var finalWidth = (0, _helpersUtils.pxToNum)(width) - BUBBLE_WIDTH;
        return {
            MozTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + finalWidth + ', 0, 0)' : 'translate3d(-' + finalWidth + ', 0, 0)',
            MsTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + finalWidth + ', 0, 0)' : 'translate3d(-' + finalWidth + ', 0, 0)',
            OTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + finalWidth + ', 0, 0)' : 'translate3d(-' + finalWidth + ', 0, 0)',
            WebkitTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + finalWidth + ', 0, 0)' : 'translate3d(-' + finalWidth + ', 0, 0)',
            transform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + finalWidth + ', 0, 0)' : 'translate3d(-' + finalWidth + ', 0, 0)',
            transition: isOpen ? 'opacity 0.3s 0.4s, transform 0.3s 0.4s' : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
            opacity: isOpen ? 1 : 0
        };
    },
    closeButton: function closeButton(isOpen, width, right) {
        var finalWidth = (0, _helpersUtils.pxToNum)(width) - BUBBLE_WIDTH;
        return {
            MozTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + finalWidth + ', 0, 0)' : 'translate3d(-' + finalWidth + ', 0, 0)',
            MsTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + finalWidth + ', 0, 0)' : 'translate3d(-' + finalWidth + ', 0, 0)',
            OTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + finalWidth + ', 0, 0)' : 'translate3d(-' + finalWidth + ', 0, 0)',
            WebkitTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + finalWidth + ', 0, 0)' : 'translate3d(-' + finalWidth + ', 0, 0)',
            transform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + finalWidth + ', 0, 0)' : 'translate3d(-' + finalWidth + ', 0, 0)',
            transition: isOpen ? 'opacity 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27)' : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
            opacity: isOpen ? 1 : 0
        };
    }
};
exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];
}),
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/push.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _menuFactory = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menuFactory.js [app-client] (ecmascript)");
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var styles = {
    pageWrap: function pageWrap(isOpen, width, right) {
        return {
            MozTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
            MsTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
            OTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
            WebkitTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
            transform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
            transition: 'all 0.5s'
        };
    },
    outerContainer: function outerContainer(isOpen) {
        return {
            overflow: isOpen ? '' : 'hidden'
        };
    }
};
exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];
}),
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/pushRotate.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _menuFactory = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menuFactory.js [app-client] (ecmascript)");
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var styles = {
    pageWrap: function pageWrap(isOpen, width, right) {
        return {
            MozTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0) rotateY(15deg)' : 'translate3d(' + width + ', 0, 0) rotateY(-15deg)',
            MsTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0) rotateY(15deg)' : 'translate3d(' + width + ', 0, 0) rotateY(-15deg)',
            OTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0) rotateY(15deg)' : 'translate3d(' + width + ', 0, 0) rotateY(-15deg)',
            WebkitTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0) rotateY(15deg)' : 'translate3d(' + width + ', 0, 0) rotateY(-15deg)',
            transform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0) rotateY(15deg)' : 'translate3d(' + width + ', 0, 0) rotateY(-15deg)',
            transformOrigin: right ? '100% 50%' : '0% 50%',
            transformStyle: 'preserve-3d',
            transition: 'all 0.5s'
        };
    },
    outerContainer: function outerContainer(isOpen) {
        return {
            perspective: '1500px',
            overflow: isOpen ? '' : 'hidden'
        };
    }
};
exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];
}),
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/scaleDown.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _menuFactory = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menuFactory.js [app-client] (ecmascript)");
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var styles = {
    pageWrap: function pageWrap(isOpen, width) {
        return {
            MozTransform: isOpen ? '' : 'translate3d(0, 0, -' + width + ')',
            MsTransform: isOpen ? '' : 'translate3d(0, 0, -' + width + ')',
            OTransform: isOpen ? '' : 'translate3d(0, 0, -' + width + ')',
            WebkitTransform: isOpen ? '' : 'translate3d(0, 0, -' + width + ')',
            transform: isOpen ? '' : 'translate3d(0, 0, -' + width + ')',
            transformOrigin: '100%',
            transformStyle: 'preserve-3d',
            transition: 'all 0.5s'
        };
    },
    outerContainer: function outerContainer() {
        return {
            perspective: '1500px'
        };
    }
};
exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];
}),
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/scaleRotate.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _menuFactory = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menuFactory.js [app-client] (ecmascript)");
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var styles = {
    pageWrap: function pageWrap(isOpen, width, right) {
        return {
            MozTransform: isOpen ? '' : right ? 'translate3d(-100px, 0, -600px) rotateY(20deg)' : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            MsTransform: isOpen ? '' : right ? 'translate3d(-100px, 0, -600px) rotateY(20deg)' : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            OTransform: isOpen ? '' : right ? 'translate3d(-100px, 0, -600px) rotateY(20deg)' : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            WebkitTransform: isOpen ? '' : right ? 'translate3d(-100px, 0, -600px) rotateY(20deg)' : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            transform: isOpen ? '' : right ? 'translate3d(-100px, 0, -600px) rotateY(20deg)' : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            transformStyle: 'preserve-3d',
            transition: 'all 0.5s',
            overflow: isOpen ? '' : 'hidden'
        };
    },
    outerContainer: function outerContainer(isOpen) {
        return {
            perspective: '1500px',
            overflow: isOpen ? '' : 'hidden'
        };
    }
};
exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];
}),
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/fallDown.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _menuFactory = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menuFactory.js [app-client] (ecmascript)");
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var styles = {
    menuWrap: function menuWrap(isOpen) {
        return {
            MozTransform: isOpen ? '' : 'translate3d(0, -100%, 0)',
            MsTransform: isOpen ? '' : 'translate3d(0, -100%, 0)',
            OTransform: isOpen ? '' : 'translate3d(0, -100%, 0)',
            WebkitTransform: isOpen ? '' : 'translate3d(0, -100%, 0)',
            transform: isOpen ? '' : 'translate3d(0, -100%, 0)',
            transition: 'all 0.5s ease-in-out'
        };
    },
    pageWrap: function pageWrap(isOpen, width, right) {
        return {
            MozTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
            MsTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
            OTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
            WebkitTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
            transform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
            transition: 'all 0.5s'
        };
    },
    outerContainer: function outerContainer(isOpen) {
        return {
            perspective: '1500px',
            perspectiveOrigin: '0% 50%',
            overflow: isOpen ? '' : 'hidden'
        };
    }
};
exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];
}),
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/reveal.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _menuFactory = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menuFactory.js [app-client] (ecmascript)");
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var styles = {
    menuWrap: function menuWrap(isOpen, width, right) {
        return {
            MozTransform: 'translate3d(0, 0, 0)',
            MsTransform: 'translate3d(0, 0, 0)',
            OTransform: 'translate3d(0, 0, 0)',
            WebkitTransform: 'translate3d(0, 0, 0)',
            transform: 'translate3d(0, 0, 0)',
            zIndex: isOpen ? 1000 : -1
        };
    },
    overlay: function overlay(isOpen, width, right) {
        return {
            zIndex: 1400,
            MozTransform: isOpen ? right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)' : 'translate3d(0, 0, 0)',
            MsTransform: isOpen ? right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)' : 'translate3d(0, 0, 0)',
            OTransform: isOpen ? right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)' : 'translate3d(0, 0, 0)',
            WebkitTransform: isOpen ? right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)' : 'translate3d(0, 0, 0)',
            transform: isOpen ? right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)' : 'translate3d(0, 0, 0)',
            transition: 'all 0.5s',
            visibility: isOpen ? 'visible' : 'hidden'
        };
    },
    pageWrap: function pageWrap(isOpen, width, right) {
        return {
            MozTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
            MsTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
            OTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
            WebkitTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
            transform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
            transition: 'all 0.5s',
            zIndex: 1200,
            position: 'relative'
        };
    },
    burgerIcon: function burgerIcon(isOpen, width, right) {
        return {
            MozTransform: isOpen ? right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)' : 'translate3d(0, 0, 0)',
            MsTransform: isOpen ? right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)' : 'translate3d(0, 0, 0)',
            OTransform: isOpen ? right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)' : 'translate3d(0, 0, 0)',
            WebkitTransform: isOpen ? right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)' : 'translate3d(0, 0, 0)',
            transform: isOpen ? right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)' : 'translate3d(0, 0, 0)',
            transition: 'all 0.1s',
            position: 'relative',
            zIndex: 1300
        };
    },
    outerContainer: function outerContainer(isOpen) {
        return {
            overflow: isOpen ? '' : 'hidden'
        };
    }
};
exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];
}),
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/BurgerMenu.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = {
    slide: __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/slide.js [app-client] (ecmascript)"),
    stack: __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/stack.js [app-client] (ecmascript)"),
    elastic: __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/elastic.js [app-client] (ecmascript)"),
    bubble: __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/bubble.js [app-client] (ecmascript)"),
    push: __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/push.js [app-client] (ecmascript)"),
    pushRotate: __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/pushRotate.js [app-client] (ecmascript)"),
    scaleDown: __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/scaleDown.js [app-client] (ecmascript)"),
    scaleRotate: __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/scaleRotate.js [app-client] (ecmascript)"),
    fallDown: __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/fallDown.js [app-client] (ecmascript)"),
    reveal: __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/reveal.js [app-client] (ecmascript)")
};
module.exports = exports['default'];
}),
]);

//# sourceMappingURL=f181b_8f13c277._.js.map