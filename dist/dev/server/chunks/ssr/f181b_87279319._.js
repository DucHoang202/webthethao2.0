module.exports = [
"[project]/webthethao2.0/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/webthethao2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/webthethao2.0/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/webthethao2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/webthethao2.0/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/webthethao2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/webthethao2.0/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactDOM; //# sourceMappingURL=react-dom.js.map
}),
"[project]/webthethao2.0/node_modules/react-is/cjs/react-is.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("TURBOPACK compile-time truthy", 1) {
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
"[project]/webthethao2.0/node_modules/react-is/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-is/cjs/react-is.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/webthethao2.0/node_modules/object-assign/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ /* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
function shouldUseNative() {
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
        }
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {};
        for(var i = 0; i < 10; i++){
            test2['_' + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') {
            return false;
        }
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
            return false;
        }
        return true;
    } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
    }
}
module.exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        for(var key in from){
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++){
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
};
}),
"[project]/webthethao2.0/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}),
"[project]/webthethao2.0/node_modules/prop-types/lib/has.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}),
"[project]/webthethao2.0/node_modules/prop-types/checkPropTypes.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var ReactPropTypesSecret = __turbopack_context__.r("[project]/webthethao2.0/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-ssr] (ecmascript)");
    var loggedTypeFailures = {};
    var has = __turbopack_context__.r("[project]/webthethao2.0/node_modules/prop-types/lib/has.js [app-ssr] (ecmascript)");
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
"[project]/webthethao2.0/node_modules/prop-types/factoryWithTypeCheckers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactIs = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-is/index.js [app-ssr] (ecmascript)");
var assign = __turbopack_context__.r("[project]/webthethao2.0/node_modules/object-assign/index.js [app-ssr] (ecmascript)");
var ReactPropTypesSecret = __turbopack_context__.r("[project]/webthethao2.0/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-ssr] (ecmascript)");
var has = __turbopack_context__.r("[project]/webthethao2.0/node_modules/prop-types/lib/has.js [app-ssr] (ecmascript)");
var checkPropTypes = __turbopack_context__.r("[project]/webthethao2.0/node_modules/prop-types/checkPropTypes.js [app-ssr] (ecmascript)");
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
"[project]/webthethao2.0/node_modules/prop-types/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("TURBOPACK compile-time truthy", 1) {
    var ReactIs = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-is/index.js [app-ssr] (ecmascript)");
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __turbopack_context__.r("[project]/webthethao2.0/node_modules/prop-types/factoryWithTypeCheckers.js [app-ssr] (ecmascript)")(ReactIs.isElement, throwOnDirectAccess);
} else //TURBOPACK unreachable
;
}),
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/helpers/baseStyles.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/helpers/dom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/components/BurgerIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
var _react = __turbopack_context__.r("[project]/webthethao2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _propTypes = __turbopack_context__.r("[project]/webthethao2.0/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
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
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/components/CrossIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
var _react = __turbopack_context__.r("[project]/webthethao2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _propTypes = __turbopack_context__.r("[project]/webthethao2.0/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
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
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/menuFactory.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
var _react = __turbopack_context__.r("[project]/webthethao2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _reactDom = __turbopack_context__.r("[project]/webthethao2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var _reactDom2 = _interopRequireDefault(_reactDom);
var _propTypes = __turbopack_context__.r("[project]/webthethao2.0/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var _propTypes2 = _interopRequireDefault(_propTypes);
var _helpersBaseStyles = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/helpers/baseStyles.js [app-ssr] (ecmascript)");
var _helpersBaseStyles2 = _interopRequireDefault(_helpersBaseStyles);
var _helpersDom = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/helpers/dom.js [app-ssr] (ecmascript)");
var _componentsBurgerIcon = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/components/BurgerIcon.js [app-ssr] (ecmascript)");
var _componentsBurgerIcon2 = _interopRequireDefault(_componentsBurgerIcon);
var _componentsCrossIcon = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/components/CrossIcon.js [app-ssr] (ecmascript)");
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
        _react2['default'].useEffect(function() {
            ref.current = value;
        });
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
        _react2['default'].useEffect(function() {
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
        }, []);
        _react2['default'].useEffect(function() {
            var wasToggled = typeof props.isOpen !== 'undefined' && props.isOpen !== isOpen && props.isOpen !== prevIsOpenProp;
            if (wasToggled) {
                toggleMenu();
                // Toggling changes SVG animation requirements, so defer these until next update
                return;
            }
            if (styles.svg) {
                (function() {
                    var morphShape = document.getElementById('bm-morph-shape');
                    var path = styles.svg.lib(morphShape).select('path');
                    if (isOpen) {
                        // Animate SVG path
                        styles.svg.animate(path);
                    } else {
                        // Reset path (timeout ensures animation happens off screen)
                        setTimeout(function() {
                            path.attr('d', styles.svg.pathInitial);
                        }, 300);
                    }
                })();
            }
        });
        _react2['default'].useEffect(function() {
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
            timeoutId.current = setTimeout(function() {
                timeoutId.current = null;
                if (!isOpen) {
                    applyWrapperStyles(false);
                }
            }, 500);
            // Bind keydown handlers (or custom function if supplied)
            var defaultOnKeyDown = isOpen ? onKeyDownOpen : onKeyDownClosed;
            var onKeyDown = props.customOnKeyDown || defaultOnKeyDown;
            window.addEventListener('keydown', onKeyDown);
            return function cleanup() {
                window.removeEventListener('keydown', onKeyDown);
            };
        }, [
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
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/slide.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _menuFactory = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menuFactory.js [app-ssr] (ecmascript)");
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var styles = {};
exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];
}),
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/stack.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _menuFactory = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menuFactory.js [app-ssr] (ecmascript)");
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
"[project]/webthethao2.0/node_modules/eve/eve.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
})(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : /*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/webthethao2.0/node_modules/snapsvg-cjs/dist/snap.svg-cjs.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

window.eve = __turbopack_context__.r("[project]/webthethao2.0/node_modules/eve/eve.js [app-ssr] (ecmascript)");
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
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/helpers/snapsvgImporter.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = function() {
    var Snap = undefined;
    try {
        Snap = __turbopack_context__.r("[project]/webthethao2.0/node_modules/snapsvg-cjs/dist/snap.svg-cjs.js [app-ssr] (ecmascript)");
    } finally{
        return Snap;
    }
};
module.exports = exports['default'];
}),
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/helpers/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var pxToNum = function pxToNum(val) {
    return parseInt(val.slice(0, -2), 10);
};
exports.pxToNum = pxToNum;
}),
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/elastic.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _helpersSnapsvgImporter = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/helpers/snapsvgImporter.js [app-ssr] (ecmascript)");
var _helpersSnapsvgImporter2 = _interopRequireDefault(_helpersSnapsvgImporter);
var _menuFactory = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menuFactory.js [app-ssr] (ecmascript)");
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var _helpersUtils = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/helpers/utils.js [app-ssr] (ecmascript)");
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
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/bubble.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _helpersSnapsvgImporter = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/helpers/snapsvgImporter.js [app-ssr] (ecmascript)");
var _helpersSnapsvgImporter2 = _interopRequireDefault(_helpersSnapsvgImporter);
var _menuFactory = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menuFactory.js [app-ssr] (ecmascript)");
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var _helpersUtils = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/helpers/utils.js [app-ssr] (ecmascript)");
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
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/push.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _menuFactory = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menuFactory.js [app-ssr] (ecmascript)");
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
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/pushRotate.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _menuFactory = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menuFactory.js [app-ssr] (ecmascript)");
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
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/scaleDown.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _menuFactory = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menuFactory.js [app-ssr] (ecmascript)");
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
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/scaleRotate.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _menuFactory = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menuFactory.js [app-ssr] (ecmascript)");
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
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/fallDown.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _menuFactory = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menuFactory.js [app-ssr] (ecmascript)");
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
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/reveal.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _menuFactory = __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menuFactory.js [app-ssr] (ecmascript)");
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
"[project]/webthethao2.0/node_modules/react-burger-menu/lib/BurgerMenu.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = {
    slide: __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/slide.js [app-ssr] (ecmascript)"),
    stack: __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/stack.js [app-ssr] (ecmascript)"),
    elastic: __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/elastic.js [app-ssr] (ecmascript)"),
    bubble: __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/bubble.js [app-ssr] (ecmascript)"),
    push: __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/push.js [app-ssr] (ecmascript)"),
    pushRotate: __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/pushRotate.js [app-ssr] (ecmascript)"),
    scaleDown: __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/scaleDown.js [app-ssr] (ecmascript)"),
    scaleRotate: __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/scaleRotate.js [app-ssr] (ecmascript)"),
    fallDown: __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/fallDown.js [app-ssr] (ecmascript)"),
    reveal: __turbopack_context__.r("[project]/webthethao2.0/node_modules/react-burger-menu/lib/menus/reveal.js [app-ssr] (ecmascript)")
};
module.exports = exports['default'];
}),
"[project]/webthethao2.0/node_modules/swiper/shared/ssr-window.esm.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * SSR Window 5.0.1
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2025, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: June 27, 2025
 */ /* eslint-disable no-param-reassign */ __turbopack_context__.s([
    "a",
    ()=>getWindow,
    "g",
    ()=>getDocument
]);
function isObject(obj) {
    return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function extend(target = {}, src = {}) {
    const noExtend = [
        '__proto__',
        'constructor',
        'prototype'
    ];
    Object.keys(src).filter((key)=>noExtend.indexOf(key) < 0).forEach((key)=>{
        if (typeof target[key] === 'undefined') target[key] = src[key];
        else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
            extend(target[key], src[key]);
        }
    });
}
const ssrDocument = {
    body: {},
    addEventListener () {},
    removeEventListener () {},
    activeElement: {
        blur () {},
        nodeName: ''
    },
    querySelector () {
        return null;
    },
    querySelectorAll () {
        return [];
    },
    getElementById () {
        return null;
    },
    createEvent () {
        return {
            initEvent () {}
        };
    },
    createElement () {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute () {},
            getElementsByTagName () {
                return [];
            }
        };
    },
    createElementNS () {
        return {};
    },
    importNode () {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
    }
};
function getDocument() {
    const doc = typeof document !== 'undefined' ? document : {};
    extend(doc, ssrDocument);
    return doc;
}
const ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: ''
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
    },
    history: {
        replaceState () {},
        pushState () {},
        go () {},
        back () {}
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener () {},
    removeEventListener () {},
    getComputedStyle () {
        return {
            getPropertyValue () {
                return '';
            }
        };
    },
    Image () {},
    Date () {},
    screen: {},
    setTimeout () {},
    clearTimeout () {},
    matchMedia () {
        return {};
    },
    requestAnimationFrame (callback) {
        if (typeof setTimeout === 'undefined') {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame (id) {
        if (typeof setTimeout === 'undefined') {
            return;
        }
        clearTimeout(id);
    }
};
function getWindow() {
    const win = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : {};
    extend(win, ssrWindow);
    return win;
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>getRotateFix,
    "b",
    ()=>setCSSProperty,
    "c",
    ()=>createElement,
    "d",
    ()=>elementParents,
    "e",
    ()=>elementChildren,
    "f",
    ()=>elementOffset,
    "g",
    ()=>getSlideTransformEl,
    "h",
    ()=>now,
    "i",
    ()=>elementOuterSize,
    "j",
    ()=>elementIndex,
    "k",
    ()=>classesToTokens,
    "l",
    ()=>getTranslate,
    "m",
    ()=>makeElementsArray,
    "n",
    ()=>nextTick,
    "o",
    ()=>elementTransitionEnd,
    "p",
    ()=>isObject,
    "q",
    ()=>elementStyle,
    "r",
    ()=>elementNextAll,
    "s",
    ()=>setInnerHTML,
    "t",
    ()=>elementPrevAll,
    "u",
    ()=>animateCSSModeScroll,
    "v",
    ()=>showWarning,
    "w",
    ()=>elementIsChildOf,
    "x",
    ()=>extend,
    "y",
    ()=>deleteProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/ssr-window.esm.mjs [app-ssr] (ecmascript)");
;
function classesToTokens(classes = '') {
    return classes.trim().split(' ').filter((c)=>!!c.trim());
}
function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key)=>{
        try {
            object[key] = null;
        } catch (e) {
        // no getter for object
        }
        try {
            delete object[key];
        } catch (e) {
        // something got wrong
        }
    });
}
function nextTick(callback, delay = 0) {
    return setTimeout(callback, delay);
}
function now() {
    return Date.now();
}
function getComputedStyle(el) {
    const window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
    let style;
    if (window.getComputedStyle) {
        style = window.getComputedStyle(el, null);
    }
    if (!style && el.currentStyle) {
        style = el.currentStyle;
    }
    if (!style) {
        style = el.style;
    }
    return style;
}
function getTranslate(el, axis = 'x') {
    const window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle(el);
    if (window.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(',').length > 6) {
            curTransform = curTransform.split(', ').map((a)=>a.replace(',', '.')).join(', ');
        }
        // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
    }
    if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
        else curTransform = parseFloat(matrix[4]);
    }
    if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
        else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
}
function isObject(o) {
    return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function isNode(node) {
    // eslint-disable-next-line
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend(...args) {
    const to = Object(args[0]);
    const noExtend = [
        '__proto__',
        'constructor',
        'prototype'
    ];
    for(let i = 1; i < args.length; i += 1){
        const nextSource = args[i];
        if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
            const keysArray = Object.keys(Object(nextSource)).filter((key)=>noExtend.indexOf(key) < 0);
            for(let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1){
                const nextKey = keysArray[nextIndex];
                const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                if (desc !== undefined && desc.enumerable) {
                    if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        if (nextSource[nextKey].__swiper__) {
                            to[nextKey] = nextSource[nextKey];
                        } else {
                            extend(to[nextKey], nextSource[nextKey]);
                        }
                    } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        to[nextKey] = {};
                        if (nextSource[nextKey].__swiper__) {
                            to[nextKey] = nextSource[nextKey];
                        } else {
                            extend(to[nextKey], nextSource[nextKey]);
                        }
                    } else {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
        }
    }
    return to;
}
function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll({ swiper, targetPosition, side }) {
    const window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = 'none';
    window.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? 'next' : 'prev';
    const isOutOfBound = (current, target)=>{
        return dir === 'next' && current >= target || dir === 'prev' && current <= target;
    };
    const animate = ()=>{
        time = new Date().getTime();
        if (startTime === null) {
            startTime = time;
        }
        const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
        let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
        if (isOutOfBound(currentPosition, targetPosition)) {
            currentPosition = targetPosition;
        }
        swiper.wrapperEl.scrollTo({
            [side]: currentPosition
        });
        if (isOutOfBound(currentPosition, targetPosition)) {
            swiper.wrapperEl.style.overflow = 'hidden';
            swiper.wrapperEl.style.scrollSnapType = '';
            setTimeout(()=>{
                swiper.wrapperEl.style.overflow = '';
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
            });
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            return;
        }
        swiper.cssModeFrameID = window.requestAnimationFrame(animate);
    };
    animate();
}
function getSlideTransformEl(slideEl) {
    return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform') || slideEl;
}
function elementChildren(element, selector = '') {
    const window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
    const children = [
        ...element.children
    ];
    if (window.HTMLSlotElement && element instanceof HTMLSlotElement) {
        children.push(...element.assignedElements());
    }
    if (!selector) {
        return children;
    }
    return children.filter((el)=>el.matches(selector));
}
function elementIsChildOfSlot(el, slot) {
    // Breadth-first search through all parent's children and assigned elements
    const elementsQueue = [
        slot
    ];
    while(elementsQueue.length > 0){
        const elementToCheck = elementsQueue.shift();
        if (el === elementToCheck) {
            return true;
        }
        elementsQueue.push(...elementToCheck.children, ...elementToCheck.shadowRoot ? elementToCheck.shadowRoot.children : [], ...elementToCheck.assignedElements ? elementToCheck.assignedElements() : []);
    }
}
function elementIsChildOf(el, parent) {
    const window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
    let isChild = parent.contains(el);
    if (!isChild && window.HTMLSlotElement && parent instanceof HTMLSlotElement) {
        const children = [
            ...parent.assignedElements()
        ];
        isChild = children.includes(el);
        if (!isChild) {
            isChild = elementIsChildOfSlot(el, parent);
        }
    }
    return isChild;
}
function showWarning(text) {
    try {
        console.warn(text);
        return;
    } catch (err) {
    // err
    }
}
function createElement(tag, classes = []) {
    const el = document.createElement(tag);
    el.classList.add(...Array.isArray(classes) ? classes : classesToTokens(classes));
    return el;
}
function elementOffset(el) {
    const window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
    const document1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])();
    const box = el.getBoundingClientRect();
    const body = document1.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === window ? window.scrollY : el.scrollTop;
    const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
        top: box.top + scrollTop - clientTop,
        left: box.left + scrollLeft - clientLeft
    };
}
function elementPrevAll(el, selector) {
    const prevEls = [];
    while(el.previousElementSibling){
        const prev = el.previousElementSibling; // eslint-disable-line
        if (selector) {
            if (prev.matches(selector)) prevEls.push(prev);
        } else prevEls.push(prev);
        el = prev;
    }
    return prevEls;
}
function elementNextAll(el, selector) {
    const nextEls = [];
    while(el.nextElementSibling){
        const next = el.nextElementSibling; // eslint-disable-line
        if (selector) {
            if (next.matches(selector)) nextEls.push(next);
        } else nextEls.push(next);
        el = next;
    }
    return nextEls;
}
function elementStyle(el, prop) {
    const window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
    return window.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
    let child = el;
    let i;
    if (child) {
        i = 0;
        // eslint-disable-next-line
        while((child = child.previousSibling) !== null){
            if (child.nodeType === 1) i += 1;
        }
        return i;
    }
    return undefined;
}
function elementParents(el, selector) {
    const parents = []; // eslint-disable-line
    let parent = el.parentElement; // eslint-disable-line
    while(parent){
        if (selector) {
            if (parent.matches(selector)) parents.push(parent);
        } else {
            parents.push(parent);
        }
        parent = parent.parentElement;
    }
    return parents;
}
function elementTransitionEnd(el, callback) {
    function fireCallBack(e) {
        if (e.target !== el) return;
        callback.call(el, e);
        el.removeEventListener('transitionend', fireCallBack);
    }
    if (callback) {
        el.addEventListener('transitionend', fireCallBack);
    }
}
function elementOuterSize(el, size, includeMargins) {
    const window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
    if (includeMargins) {
        return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
    }
    return el.offsetWidth;
}
function makeElementsArray(el) {
    return (Array.isArray(el) ? el : [
        el
    ]).filter((e)=>!!e);
}
function getRotateFix(swiper) {
    return (v)=>{
        if (Math.abs(v) > 0 && swiper.browser && swiper.browser.need3dFix && Math.abs(v) % 90 === 0) {
            return v + 0.001;
        }
        return v;
    };
}
function setInnerHTML(el, html = '') {
    if (typeof trustedTypes !== 'undefined') {
        el.innerHTML = trustedTypes.createPolicy('html', {
            createHTML: (s)=>s
        }).createHTML(html);
    } else {
        el.innerHTML = html;
    }
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/shared/swiper-core.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "S",
    ()=>Swiper,
    "d",
    ()=>defaults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/ssr-window.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
;
let support;
function calcSupport() {
    const window1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
    const document1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])();
    return {
        smoothScroll: document1.documentElement && document1.documentElement.style && 'scrollBehavior' in document1.documentElement.style,
        touch: !!('ontouchstart' in window1 || window1.DocumentTouch && document1 instanceof window1.DocumentTouch)
    };
}
function getSupport() {
    if (!support) {
        support = calcSupport();
    }
    return support;
}
let deviceCached;
function calcDevice({ userAgent } = {}) {
    const support = getSupport();
    const window1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
    const platform = window1.navigator.platform;
    const ua = userAgent || window1.navigator.userAgent;
    const device = {
        ios: false,
        android: false
    };
    const screenWidth = window1.screen.width;
    const screenHeight = window1.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    let ipad = ua.match(/(iPad)(?!\1).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === 'Win32';
    let macos = platform === 'MacIntel';
    // iPadOs 13 fix
    const iPadScreens = [
        '1024x1366',
        '1366x1024',
        '834x1194',
        '1194x834',
        '834x1112',
        '1112x834',
        '768x1024',
        '1024x768',
        '820x1180',
        '1180x820',
        '810x1080',
        '1080x810'
    ];
    if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        if (!ipad) ipad = [
            0,
            1,
            '13_0_0'
        ];
        macos = false;
    }
    // Android
    if (android && !windows) {
        device.os = 'android';
        device.android = true;
    }
    if (ipad || iphone || ipod) {
        device.os = 'ios';
        device.ios = true;
    }
    // Export object
    return device;
}
function getDevice(overrides = {}) {
    if (!deviceCached) {
        deviceCached = calcDevice(overrides);
    }
    return deviceCached;
}
let browser;
function calcBrowser() {
    const window1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
    const device = getDevice();
    let needPerspectiveFix = false;
    function isSafari() {
        const ua = window1.navigator.userAgent.toLowerCase();
        return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
    }
    if (isSafari()) {
        const ua = String(window1.navigator.userAgent);
        if (ua.includes('Version/')) {
            const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map((num)=>Number(num));
            needPerspectiveFix = major < 16 || major === 16 && minor < 2;
        }
    }
    const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window1.navigator.userAgent);
    const isSafariBrowser = isSafari();
    const need3dFix = isSafariBrowser || isWebView && device.ios;
    return {
        isSafari: needPerspectiveFix || isSafariBrowser,
        needPerspectiveFix,
        need3dFix,
        isWebView
    };
}
function getBrowser() {
    if (!browser) {
        browser = calcBrowser();
    }
    return browser;
}
function Resize({ swiper, on, emit }) {
    const window1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit('beforeResize');
        emit('resize');
    };
    const createObserver = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        observer = new ResizeObserver((entries)=>{
            animationFrame = window1.requestAnimationFrame(()=>{
                const { width, height } = swiper;
                let newWidth = width;
                let newHeight = height;
                entries.forEach(({ contentBoxSize, contentRect, target })=>{
                    if (target && target !== swiper.el) return;
                    newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                    newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                });
                if (newWidth !== width || newHeight !== height) {
                    resizeHandler();
                }
            });
        });
        observer.observe(swiper.el);
    };
    const removeObserver = ()=>{
        if (animationFrame) {
            window1.cancelAnimationFrame(animationFrame);
        }
        if (observer && observer.unobserve && swiper.el) {
            observer.unobserve(swiper.el);
            observer = null;
        }
    };
    const orientationChangeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit('orientationchange');
    };
    on('init', ()=>{
        if (swiper.params.resizeObserver && typeof window1.ResizeObserver !== 'undefined') {
            createObserver();
            return;
        }
        window1.addEventListener('resize', resizeHandler);
        window1.addEventListener('orientationchange', orientationChangeHandler);
    });
    on('destroy', ()=>{
        removeObserver();
        window1.removeEventListener('resize', resizeHandler);
        window1.removeEventListener('orientationchange', orientationChangeHandler);
    });
}
function Observer({ swiper, extendParams, on, emit }) {
    const observers = [];
    const window1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
    const attach = (target, options = {})=>{
        const ObserverFunc = window1.MutationObserver || window1.WebkitMutationObserver;
        const observer = new ObserverFunc((mutations)=>{
            // The observerUpdate event should only be triggered
            // once despite the number of mutations.  Additional
            // triggers are redundant and are very costly
            if (swiper.__preventObserver__) return;
            if (mutations.length === 1) {
                emit('observerUpdate', mutations[0]);
                return;
            }
            const observerUpdate = function observerUpdate() {
                emit('observerUpdate', mutations[0]);
            };
            if (window1.requestAnimationFrame) {
                window1.requestAnimationFrame(observerUpdate);
            } else {
                window1.setTimeout(observerUpdate, 0);
            }
        });
        observer.observe(target, {
            attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
            childList: swiper.isElement || (typeof options.childList === 'undefined' ? true : options).childList,
            characterData: typeof options.characterData === 'undefined' ? true : options.characterData
        });
        observers.push(observer);
    };
    const init = ()=>{
        if (!swiper.params.observer) return;
        if (swiper.params.observeParents) {
            const containerParents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(swiper.hostEl);
            for(let i = 0; i < containerParents.length; i += 1){
                attach(containerParents[i]);
            }
        }
        // Observe container
        attach(swiper.hostEl, {
            childList: swiper.params.observeSlideChildren
        });
        // Observe wrapper
        attach(swiper.wrapperEl, {
            attributes: false
        });
    };
    const destroy = ()=>{
        observers.forEach((observer)=>{
            observer.disconnect();
        });
        observers.splice(0, observers.length);
    };
    extendParams({
        observer: false,
        observeParents: false,
        observeSlideChildren: false
    });
    on('init', init);
    on('destroy', destroy);
}
/* eslint-disable no-underscore-dangle */ var eventsEmitter = {
    on (events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';
        events.split(' ').forEach((event)=>{
            if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
            self.eventsListeners[event][method](handler);
        });
        return self;
    },
    once (events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== 'function') return self;
        function onceHandler(...args) {
            self.off(events, onceHandler);
            if (onceHandler.__emitterProxy) {
                delete onceHandler.__emitterProxy;
            }
            handler.apply(self, args);
        }
        onceHandler.__emitterProxy = handler;
        return self.on(events, onceHandler, priority);
    },
    onAny (handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';
        if (self.eventsAnyListeners.indexOf(handler) < 0) {
            self.eventsAnyListeners[method](handler);
        }
        return self;
    },
    offAny (handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsAnyListeners) return self;
        const index = self.eventsAnyListeners.indexOf(handler);
        if (index >= 0) {
            self.eventsAnyListeners.splice(index, 1);
        }
        return self;
    },
    off (events, handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        events.split(' ').forEach((event)=>{
            if (typeof handler === 'undefined') {
                self.eventsListeners[event] = [];
            } else if (self.eventsListeners[event]) {
                self.eventsListeners[event].forEach((eventHandler, index)=>{
                    if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
                        self.eventsListeners[event].splice(index, 1);
                    }
                });
            }
        });
        return self;
    },
    emit (...args) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        let events;
        let data;
        let context;
        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
        } else {
            events = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
        }
        data.unshift(context);
        const eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach((event)=>{
            if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
                self.eventsAnyListeners.forEach((eventHandler)=>{
                    eventHandler.apply(context, [
                        event,
                        ...data
                    ]);
                });
            }
            if (self.eventsListeners && self.eventsListeners[event]) {
                self.eventsListeners[event].forEach((eventHandler)=>{
                    eventHandler.apply(context, data);
                });
            }
        });
        return self;
    }
};
function updateSize() {
    const swiper = this;
    let width;
    let height;
    const el = swiper.el;
    if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
        width = swiper.params.width;
    } else {
        width = el.clientWidth;
    }
    if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
        height = swiper.params.height;
    } else {
        height = el.clientHeight;
    }
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
        return;
    }
    // Subtract paddings
    width = width - parseInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["q"])(el, 'padding-left') || 0, 10) - parseInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["q"])(el, 'padding-right') || 0, 10);
    height = height - parseInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["q"])(el, 'padding-top') || 0, 10) - parseInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["q"])(el, 'padding-bottom') || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
        width,
        height,
        size: swiper.isHorizontal() ? width : height
    });
}
function updateSlides() {
    const swiper = this;
    function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const { wrapperEl, slidesEl, rtlTranslate: rtl, wrongRTL } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === 'function') {
        offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === 'function') {
        offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    const swiperSize = swiper.size - offsetBefore - offsetAfter;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === 'undefined') {
        return;
    }
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
        spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
    } else if (typeof spaceBetween === 'string') {
        spaceBetween = parseFloat(spaceBetween);
    }
    swiper.virtualSize = -spaceBetween - offsetBefore - offsetAfter;
    // reset margins
    slides.forEach((slideEl)=>{
        if (rtl) {
            slideEl.style.marginLeft = '';
        } else {
            slideEl.style.marginRight = '';
        }
        slideEl.style.marginBottom = '';
        slideEl.style.marginTop = '';
    });
    // reset cssMode offsets
    if (params.centeredSlides && params.cssMode) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(wrapperEl, '--swiper-centered-offset-before', '');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(wrapperEl, '--swiper-centered-offset-after', '');
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) {
        swiper.grid.initSlides(slides);
    } else if (swiper.grid) {
        swiper.grid.unsetSlides();
    }
    // Calc slides
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter((key)=>{
        return typeof params.breakpoints[key].slidesPerView !== 'undefined';
    }).length > 0;
    for(let i = 0; i < slidesLength; i += 1){
        slideSize = 0;
        const slide = slides[i];
        if (slide) {
            if (gridEnabled) {
                swiper.grid.updateSlide(i, slide, slides);
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["q"])(slide, 'display') === 'none') continue; // eslint-disable-line
        }
        if (isVirtual && params.slidesPerView === 'auto') {
            if (params.virtual.slidesPerViewAutoSlideSize) {
                slideSize = params.virtual.slidesPerViewAutoSlideSize;
            }
            if (slideSize && slide) {
                if (params.roundLengths) slideSize = Math.floor(slideSize);
                slide.style[swiper.getDirectionLabel('width')] = `${slideSize}px`;
            }
        } else if (params.slidesPerView === 'auto') {
            if (shouldResetSlideSize) {
                slide.style[swiper.getDirectionLabel('width')] = ``;
            }
            const slideStyles = getComputedStyle(slide);
            const currentTransform = slide.style.transform;
            const currentWebKitTransform = slide.style.webkitTransform;
            if (currentTransform) {
                slide.style.transform = 'none';
            }
            if (currentWebKitTransform) {
                slide.style.webkitTransform = 'none';
            }
            if (params.roundLengths) {
                slideSize = swiper.isHorizontal() ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(slide, 'width', true) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(slide, 'height', true);
            } else {
                // eslint-disable-next-line
                const width = getDirectionPropertyValue(slideStyles, 'width');
                const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
                const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
                const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
                const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
                const boxSizing = slideStyles.getPropertyValue('box-sizing');
                if (boxSizing && boxSizing === 'border-box') {
                    slideSize = width + marginLeft + marginRight;
                } else {
                    const { clientWidth, offsetWidth } = slide;
                    slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                }
            }
            if (currentTransform) {
                slide.style.transform = currentTransform;
            }
            if (currentWebKitTransform) {
                slide.style.webkitTransform = currentWebKitTransform;
            }
            if (params.roundLengths) slideSize = Math.floor(slideSize);
        } else {
            slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
            if (slide) {
                slide.style[swiper.getDirectionLabel('width')] = `${slideSize}px`;
            }
        }
        if (slide) {
            slide.swiperSlideSize = slideSize;
        }
        slidesSizesGrid.push(slideSize);
        if (params.centeredSlides) {
            slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
            if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
        } else {
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
            slidePosition = slidePosition + slideSize + spaceBetween;
        }
        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
        wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (params.setWrapperSize) {
        wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (gridEnabled) {
        swiper.grid.updateWrapperSize(slideSize, snapGrid);
    }
    // Remove last grid elements depending on width
    if (!params.centeredSlides) {
        const newSlidesGrid = [];
        for(let i = 0; i < snapGrid.length; i += 1){
            let slidesGridItem = snapGrid[i];
            if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
            if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
                newSlidesGrid.push(slidesGridItem);
            }
        }
        snapGrid = newSlidesGrid;
        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
            snapGrid.push(swiper.virtualSize - swiperSize);
        }
    }
    if (isVirtual && params.loop) {
        const size = slidesSizesGrid[0] + spaceBetween;
        if (params.slidesPerGroup > 1) {
            const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
            const groupSize = size * params.slidesPerGroup;
            for(let i = 0; i < groups; i += 1){
                snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
            }
        }
        for(let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1){
            if (params.slidesPerGroup === 1) {
                snapGrid.push(snapGrid[snapGrid.length - 1] + size);
            }
            slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
            swiper.virtualSize += size;
        }
    }
    if (snapGrid.length === 0) snapGrid = [
        0
    ];
    if (spaceBetween !== 0) {
        const key = swiper.isHorizontal() && rtl ? 'marginLeft' : swiper.getDirectionLabel('marginRight');
        slides.filter((_, slideIndex)=>{
            if (!params.cssMode || params.loop) return true;
            if (slideIndex === slides.length - 1) {
                return false;
            }
            return true;
        }).forEach((slideEl)=>{
            slideEl.style[key] = `${spaceBetween}px`;
        });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (spaceBetween || 0);
        });
        allSlidesSize -= spaceBetween;
        const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
        snapGrid = snapGrid.map((snap)=>{
            if (snap <= 0) return -offsetBefore;
            if (snap > maxSnap) return maxSnap + offsetAfter;
            return snap;
        });
    }
    if (params.centerInsufficientSlides) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (spaceBetween || 0);
        });
        allSlidesSize -= spaceBetween;
        const offsetSize = (offsetBefore || 0) + (offsetAfter || 0);
        if (allSlidesSize + offsetSize < swiperSize) {
            const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
            snapGrid.forEach((snap, snapIndex)=>{
                snapGrid[snapIndex] = snap - allSlidesOffset;
            });
            slidesGrid.forEach((snap, snapIndex)=>{
                slidesGrid[snapIndex] = snap + allSlidesOffset;
            });
        }
    }
    Object.assign(swiper, {
        slides,
        snapGrid,
        slidesGrid,
        slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
        const addToSnapGrid = -swiper.snapGrid[0];
        const addToSlidesGrid = -swiper.slidesGrid[0];
        swiper.snapGrid = swiper.snapGrid.map((v)=>v + addToSnapGrid);
        swiper.slidesGrid = swiper.slidesGrid.map((v)=>v + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) {
        swiper.emit('slidesLengthChange');
    }
    if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
        swiper.emit('slidesGridLengthChange');
    }
    if (params.watchSlidesProgress) {
        swiper.updateSlidesOffset();
    }
    swiper.emit('slidesUpdated');
    if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
        const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
        const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
        if (slidesLength <= params.maxBackfaceHiddenSlides) {
            if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
        } else if (hasClassBackfaceClassAdded) {
            swiper.el.classList.remove(backFaceHiddenClass);
        }
    }
}
function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === 'number') {
        swiper.setTransition(speed);
    } else if (speed === true) {
        swiper.setTransition(swiper.params.speed);
    }
    const getSlideByIndex = (index)=>{
        if (isVirtual) {
            return swiper.slides[swiper.getSlideIndexByData(index)];
        }
        return swiper.slides[index];
    };
    // Find slides currently in view
    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) {
            (swiper.visibleSlides || []).forEach((slide)=>{
                activeSlides.push(slide);
            });
        } else {
            for(i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1){
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            }
        }
    } else {
        activeSlides.push(getSlideByIndex(swiper.activeIndex));
    }
    // Find new height from highest slide in view
    for(i = 0; i < activeSlides.length; i += 1){
        if (typeof activeSlides[i] !== 'undefined') {
            const height = activeSlides[i].offsetHeight;
            newHeight = height > newHeight ? height : newHeight;
        }
    }
    // Update Height
    if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}
function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    // eslint-disable-next-line
    const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
    for(let i = 0; i < slides.length; i += 1){
        slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
    }
}
const toggleSlideClasses$1 = (slideEl, condition, className)=>{
    if (condition && !slideEl.classList.contains(className)) {
        slideEl.classList.add(className);
    } else if (!condition && slideEl.classList.contains(className)) {
        slideEl.classList.remove(className);
    }
};
function updateSlidesProgress(translate = this && this.translate || 0) {
    const swiper = this;
    const params = swiper.params;
    const { slides, rtlTranslate: rtl, snapGrid } = swiper;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
    let offsetCenter = -translate;
    if (rtl) offsetCenter = translate;
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    let spaceBetween = params.spaceBetween;
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
        spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
    } else if (typeof spaceBetween === 'string') {
        spaceBetween = parseFloat(spaceBetween);
    }
    for(let i = 0; i < slides.length; i += 1){
        const slide = slides[i];
        let slideOffset = slide.swiperSlideOffset;
        if (params.cssMode && params.centeredSlides) {
            slideOffset -= slides[0].swiperSlideOffset;
        }
        const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
        const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
        const slideBefore = -(offsetCenter - slideOffset);
        const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
        const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
        if (isVisible) {
            swiper.visibleSlides.push(slide);
            swiper.visibleSlidesIndexes.push(i);
        }
        toggleSlideClasses$1(slide, isVisible, params.slideVisibleClass);
        toggleSlideClasses$1(slide, isFullyVisible, params.slideFullyVisibleClass);
        slide.progress = rtl ? -slideProgress : slideProgress;
        slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
}
function updateProgress(translate) {
    const swiper = this;
    if (typeof translate === 'undefined') {
        const multiplier = swiper.rtlTranslate ? -1 : 1;
        // eslint-disable-next-line
        translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let { progress, isBeginning, isEnd, progressLoop } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
    } else {
        progress = (translate - swiper.minTranslate()) / translatesDiff;
        const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
        const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
        isBeginning = isBeginningRounded || progress <= 0;
        isEnd = isEndRounded || progress >= 1;
        if (isBeginningRounded) progress = 0;
        if (isEndRounded) progress = 1;
    }
    if (params.loop) {
        const firstSlideIndex = swiper.getSlideIndexByData(0);
        const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
        const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
        const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
        const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
        const translateAbs = Math.abs(translate);
        if (translateAbs >= firstSlideTranslate) {
            progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
        } else {
            progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
        }
        if (progressLoop > 1) progressLoop -= 1;
    }
    Object.assign(swiper, {
        progress,
        progressLoop,
        isBeginning,
        isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) {
        swiper.emit('reachBeginning toEdge');
    }
    if (isEnd && !wasEnd) {
        swiper.emit('reachEnd toEdge');
    }
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
        swiper.emit('fromEdge');
    }
    swiper.emit('progress', progress);
}
const toggleSlideClasses = (slideEl, condition, className)=>{
    if (condition && !slideEl.classList.contains(className)) {
        slideEl.classList.add(className);
    } else if (!condition && slideEl.classList.contains(className)) {
        slideEl.classList.remove(className);
    }
};
function updateSlidesClasses() {
    const swiper = this;
    const { slides, params, slidesEl, activeIndex } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const getFilteredSlide = (selector)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
    };
    let activeSlide;
    let prevSlide;
    let nextSlide;
    if (isVirtual) {
        if (params.loop) {
            let slideIndex = activeIndex - swiper.virtual.slidesBefore;
            if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
            if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
            activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
        } else {
            activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
        }
    } else {
        if (gridEnabled) {
            activeSlide = slides.find((slideEl)=>slideEl.column === activeIndex);
            nextSlide = slides.find((slideEl)=>slideEl.column === activeIndex + 1);
            prevSlide = slides.find((slideEl)=>slideEl.column === activeIndex - 1);
        } else {
            activeSlide = slides[activeIndex];
        }
    }
    if (activeSlide) {
        if (!gridEnabled) {
            // Next Slide
            nextSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
            if (params.loop && !nextSlide) {
                nextSlide = slides[0];
            }
            // Prev Slide
            prevSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
            if (params.loop && !prevSlide === 0) {
                prevSlide = slides[slides.length - 1];
            }
        }
    }
    slides.forEach((slideEl)=>{
        toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
        toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
        toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
    });
    swiper.emitSlidesClasses();
}
const processLazyPreloader = (swiper, imageEl)=>{
    if (!swiper || swiper.destroyed || !swiper.params) return;
    const slideSelector = ()=>swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    const slideEl = imageEl.closest(slideSelector());
    if (slideEl) {
        let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
        if (!lazyEl && swiper.isElement) {
            if (slideEl.shadowRoot) {
                lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            } else {
                // init later
                requestAnimationFrame(()=>{
                    if (slideEl.shadowRoot) {
                        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                        if (lazyEl) lazyEl.remove();
                    }
                });
            }
        }
        if (lazyEl) lazyEl.remove();
    }
};
const unlazy = (swiper, index)=>{
    if (!swiper.slides[index]) return;
    const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
    if (imageEl) imageEl.removeAttribute('loading');
};
const preload = (swiper)=>{
    if (!swiper || swiper.destroyed || !swiper.params) return;
    let amount = swiper.params.lazyPreloadPrevNext;
    const len = swiper.slides.length;
    if (!len || !amount || amount < 0) return;
    amount = Math.min(amount, len);
    const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
    const activeIndex = swiper.activeIndex;
    if (swiper.params.grid && swiper.params.grid.rows > 1) {
        const activeColumn = activeIndex;
        const preloadColumns = [
            activeColumn - amount
        ];
        preloadColumns.push(...Array.from({
            length: amount
        }).map((_, i)=>{
            return activeColumn + slidesPerView + i;
        }));
        swiper.slides.forEach((slideEl, i)=>{
            if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
        });
        return;
    }
    const slideIndexLastInView = activeIndex + slidesPerView - 1;
    if (swiper.params.rewind || swiper.params.loop) {
        for(let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1){
            const realIndex = (i % len + len) % len;
            if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
        }
    } else {
        for(let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1){
            if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
                unlazy(swiper, i);
            }
        }
    }
};
function getActiveIndexByTranslate(swiper) {
    const { slidesGrid, params } = swiper;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    let activeIndex;
    for(let i = 0; i < slidesGrid.length; i += 1){
        if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
                activeIndex = i;
            } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
                activeIndex = i + 1;
            }
        } else if (translate >= slidesGrid[i]) {
            activeIndex = i;
        }
    }
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
    return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const { snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    const getVirtualRealIndex = (aIndex)=>{
        let realIndex = aIndex - swiper.virtual.slidesBefore;
        if (realIndex < 0) {
            realIndex = swiper.virtual.slides.length + realIndex;
        }
        if (realIndex >= swiper.virtual.slides.length) {
            realIndex -= swiper.virtual.slides.length;
        }
        return realIndex;
    };
    if (typeof activeIndex === 'undefined') {
        activeIndex = getActiveIndexByTranslate(swiper);
    }
    if (snapGrid.indexOf(translate) >= 0) {
        snapIndex = snapGrid.indexOf(translate);
    } else {
        const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex && !swiper.params.loop) {
        if (snapIndex !== previousSnapIndex) {
            swiper.snapIndex = snapIndex;
            swiper.emit('snapIndexChange');
        }
        return;
    }
    if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
        swiper.realIndex = getVirtualRealIndex(activeIndex);
        return;
    }
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    // Get real index
    let realIndex;
    if (swiper.virtual && params.virtual.enabled && params.loop) {
        realIndex = getVirtualRealIndex(activeIndex);
    } else if (gridEnabled) {
        const firstSlideInColumn = swiper.slides.find((slideEl)=>slideEl.column === activeIndex);
        let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute('data-swiper-slide-index'), 10);
        if (Number.isNaN(activeSlideIndex)) {
            activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
        }
        realIndex = Math.floor(activeSlideIndex / params.grid.rows);
    } else if (swiper.slides[activeIndex]) {
        const slideIndex = swiper.slides[activeIndex].getAttribute('data-swiper-slide-index');
        if (slideIndex) {
            realIndex = parseInt(slideIndex, 10);
        } else {
            realIndex = activeIndex;
        }
    } else {
        realIndex = activeIndex;
    }
    Object.assign(swiper, {
        previousSnapIndex,
        snapIndex,
        previousRealIndex,
        realIndex,
        previousIndex,
        activeIndex
    });
    if (swiper.initialized) {
        preload(swiper);
    }
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
        if (previousRealIndex !== realIndex) {
            swiper.emit('realIndexChange');
        }
        swiper.emit('slideChange');
    }
}
function updateClickedSlide(el, path) {
    const swiper = this;
    const params = swiper.params;
    let slide = el.closest(`.${params.slideClass}, swiper-slide`);
    if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) {
        [
            ...path.slice(path.indexOf(el) + 1, path.length)
        ].forEach((pathEl)=>{
            if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
                slide = pathEl;
            }
        });
    }
    let slideFound = false;
    let slideIndex;
    if (slide) {
        for(let i = 0; i < swiper.slides.length; i += 1){
            if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
        }
    }
    if (slide && slideFound) {
        swiper.clickedSlide = slide;
        if (swiper.virtual && swiper.params.virtual.enabled) {
            swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
        } else {
            swiper.clickedIndex = slideIndex;
        }
    } else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
        swiper.slideToClickedSlide();
    }
}
var update = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide
};
function getSwiperTranslate(axis = this.isHorizontal() ? 'x' : 'y') {
    const swiper = this;
    const { params, rtlTranslate: rtl, translate, wrapperEl } = swiper;
    if (params.virtualTranslate) {
        return rtl ? -translate : translate;
    }
    if (params.cssMode) {
        return translate;
    }
    let currentTranslate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])(wrapperEl, axis);
    currentTranslate += swiper.cssOverflowAdjustment();
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
}
function setTranslate(translate, byController) {
    const swiper = this;
    const { rtlTranslate: rtl, params, wrapperEl, progress } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) {
        x = rtl ? -translate : translate;
    } else {
        y = translate;
    }
    if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    if (params.cssMode) {
        wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
        if (swiper.isHorizontal()) {
            x -= swiper.cssOverflowAdjustment();
        } else {
            y -= swiper.cssOverflowAdjustment();
        }
        wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    }
    // Check if we need to update progress
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
        newProgress = 0;
    } else {
        newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
        swiper.updateProgress(translate);
    }
    swiper.emit('setTranslate', swiper.translate, byController);
}
function minTranslate() {
    return -this.snapGrid[0];
}
function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
    const swiper = this;
    const { params, wrapperEl } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) {
        return false;
    }
    const minTranslate = swiper.minTranslate();
    const maxTranslate = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate > minTranslate) newTranslate = minTranslate;
    else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;
    else newTranslate = translate;
    // Update progress
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        if (speed === 0) {
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        } else {
            if (!swiper.support.smoothScroll) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])({
                    swiper,
                    targetPosition: -newTranslate,
                    side: isH ? 'left' : 'top'
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? 'left' : 'top']: -newTranslate,
                behavior: 'smooth'
            });
        }
        return true;
    }
    if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.emit('transitionEnd');
        }
    } else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.emit('transitionStart');
        }
        if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onTranslateToWrapperTransitionEnd) {
                swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                    swiper.onTranslateToWrapperTransitionEnd = null;
                    delete swiper.onTranslateToWrapperTransitionEnd;
                    swiper.animating = false;
                    if (runCallbacks) {
                        swiper.emit('transitionEnd');
                    }
                };
            }
            swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
        }
    }
    return true;
}
var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo
};
function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) {
        swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
        swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';
    }
    swiper.emit('setTransition', duration, byController);
}
function transitionEmit({ swiper, runCallbacks, direction, step }) {
    const { activeIndex, previousIndex } = swiper;
    let dir = direction;
    if (!dir) {
        if (activeIndex > previousIndex) dir = 'next';
        else if (activeIndex < previousIndex) dir = 'prev';
        else dir = 'reset';
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && dir === 'reset') {
        swiper.emit(`slideResetTransition${step}`);
    } else if (runCallbacks && activeIndex !== previousIndex) {
        swiper.emit(`slideChangeTransition${step}`);
        if (dir === 'next') {
            swiper.emit(`slideNextTransition${step}`);
        } else {
            swiper.emit(`slidePrevTransition${step}`);
        }
    }
}
function transitionStart(runCallbacks = true, direction) {
    const swiper = this;
    const { params } = swiper;
    if (params.cssMode) return;
    if (params.autoHeight) {
        swiper.updateAutoHeight();
    }
    transitionEmit({
        swiper,
        runCallbacks,
        direction,
        step: 'Start'
    });
}
function transitionEnd(runCallbacks = true, direction) {
    const swiper = this;
    const { params } = swiper;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    transitionEmit({
        swiper,
        runCallbacks,
        direction,
        step: 'End'
    });
}
var transition = {
    setTransition,
    transitionStart,
    transitionEnd
};
function slideTo(index = 0, speed, runCallbacks = true, internal, initial) {
    if (typeof index === 'string') {
        index = parseInt(index, 10);
    }
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    const { params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled } = swiper;
    if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
        return false;
    }
    if (typeof speed === 'undefined') {
        speed = swiper.params.speed;
    }
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    const translate = -snapGrid[snapIndex];
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
        for(let i = 0; i < slidesGrid.length; i += 1){
            const normalizedTranslate = -Math.floor(translate * 100);
            const normalizedGrid = Math.floor(slidesGrid[i] * 100);
            const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
            if (typeof slidesGrid[i + 1] !== 'undefined') {
                if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
                    slideIndex = i;
                } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
                    slideIndex = i + 1;
                }
            } else if (normalizedTranslate >= normalizedGrid) {
                slideIndex = i;
            }
        }
    }
    // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
            return false;
        }
        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
            if ((activeIndex || 0) !== slideIndex) {
                return false;
            }
        }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) {
        swiper.emit('beforeSlideChangeStart');
    }
    // Update progress
    swiper.updateProgress(translate);
    let direction;
    if (slideIndex > activeIndex) direction = 'next';
    else if (slideIndex < activeIndex) direction = 'prev';
    else direction = 'reset';
    // initial virtual
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    const isInitialVirtual = isVirtual && initial;
    // Update Index
    if (!isInitialVirtual && (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate)) {
        swiper.updateActiveIndex(slideIndex);
        // Update Height
        if (params.autoHeight) {
            swiper.updateAutoHeight();
        }
        swiper.updateSlidesClasses();
        if (params.effect !== 'slide') {
            swiper.setTranslate(translate);
        }
        if (direction !== 'reset') {
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
        }
        return false;
    }
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        const t = rtl ? translate : -translate;
        if (speed === 0) {
            if (isVirtual) {
                swiper.wrapperEl.style.scrollSnapType = 'none';
                swiper._immediateVirtual = true;
            }
            if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                swiper._cssModeVirtualInitialSet = true;
                requestAnimationFrame(()=>{
                    wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
                });
            } else {
                wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
            }
            if (isVirtual) {
                requestAnimationFrame(()=>{
                    swiper.wrapperEl.style.scrollSnapType = '';
                    swiper._immediateVirtual = false;
                });
            }
        } else {
            if (!swiper.support.smoothScroll) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])({
                    swiper,
                    targetPosition: t,
                    side: isH ? 'left' : 'top'
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? 'left' : 'top']: t,
                behavior: 'smooth'
            });
        }
        return true;
    }
    const browser = getBrowser();
    const isSafari = browser.isSafari;
    if (isVirtual && !initial && isSafari && swiper.isElement) {
        swiper.virtual.update(false, false, slideIndex);
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) {
        swiper.transitionEnd(runCallbacks, direction);
    } else if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) {
            swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                if (!swiper || swiper.destroyed) return;
                if (e.target !== this) return;
                swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                swiper.onSlideToWrapperTransitionEnd = null;
                delete swiper.onSlideToWrapperTransitionEnd;
                swiper.transitionEnd(runCallbacks, direction);
            };
        }
        swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
}
function slideToLoop(index = 0, speed, runCallbacks = true, internal) {
    if (typeof index === 'string') {
        const indexAsNumber = parseInt(index, 10);
        index = indexAsNumber;
    }
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === 'undefined') {
        speed = swiper.params.speed;
    }
    const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
    let newIndex = index;
    if (swiper.params.loop) {
        if (swiper.virtual && swiper.params.virtual.enabled) {
            // eslint-disable-next-line
            newIndex = newIndex + swiper.virtual.slidesBefore;
        } else {
            let targetSlideIndex;
            if (gridEnabled) {
                const slideIndex = newIndex * swiper.params.grid.rows;
                targetSlideIndex = swiper.slides.find((slideEl)=>slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex).column;
            } else {
                targetSlideIndex = swiper.getSlideIndexByData(newIndex);
            }
            const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
            const { centeredSlides, slidesOffsetBefore, slidesOffsetAfter } = swiper.params;
            const bothDirections = centeredSlides || !!slidesOffsetBefore || !!slidesOffsetAfter;
            let slidesPerView = swiper.params.slidesPerView;
            if (slidesPerView === 'auto') {
                slidesPerView = swiper.slidesPerViewDynamic();
            } else {
                slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
                if (bothDirections && slidesPerView % 2 === 0) {
                    slidesPerView = slidesPerView + 1;
                }
            }
            let needLoopFix = cols - targetSlideIndex < slidesPerView;
            if (bothDirections) {
                needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
            }
            if (internal && bothDirections && swiper.params.slidesPerView !== 'auto' && !gridEnabled) {
                needLoopFix = false;
            }
            if (needLoopFix) {
                const direction = bothDirections ? targetSlideIndex < swiper.activeIndex ? 'prev' : 'next' : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? 'next' : 'prev';
                swiper.loopFix({
                    direction,
                    slideTo: true,
                    activeSlideIndex: direction === 'next' ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
                    slideRealIndex: direction === 'next' ? swiper.realIndex : undefined
                });
            }
            if (gridEnabled) {
                const slideIndex = newIndex * swiper.params.grid.rows;
                newIndex = swiper.slides.find((slideEl)=>slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex).column;
            } else {
                newIndex = swiper.getSlideIndexByData(newIndex);
            }
        }
    }
    requestAnimationFrame(()=>{
        swiper.slideTo(newIndex, speed, runCallbacks, internal);
    });
    return swiper;
}
/* eslint no-unused-vars: "off" */ function slideNext(speed, runCallbacks = true, internal) {
    const swiper = this;
    const { enabled, params, animating } = swiper;
    if (!enabled || swiper.destroyed) return swiper;
    if (typeof speed === 'undefined') {
        speed = swiper.params.speed;
    }
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
    }
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
        if (animating && !isVirtual && params.loopPreventsSliding) return false;
        swiper.loopFix({
            direction: 'next'
        });
        // eslint-disable-next-line
        swiper._clientLeft = swiper.wrapperEl.clientLeft;
        if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
            requestAnimationFrame(()=>{
                swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
            });
            return true;
        }
    }
    if (params.rewind && swiper.isEnd) {
        return swiper.slideTo(0, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */ function slidePrev(speed, runCallbacks = true, internal) {
    const swiper = this;
    const { params, snapGrid, slidesGrid, rtlTranslate, enabled, animating } = swiper;
    if (!enabled || swiper.destroyed) return swiper;
    if (typeof speed === 'undefined') {
        speed = swiper.params.speed;
    }
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
        if (animating && !isVirtual && params.loopPreventsSliding) return false;
        swiper.loopFix({
            direction: 'prev'
        });
        // eslint-disable-next-line
        swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    const translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val));
        return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate);
    const normalizedSnapGrid = snapGrid.map((val)=>normalize(val));
    const isFreeMode = params.freeMode && params.freeMode.enabled;
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === 'undefined' && (params.cssMode || isFreeMode)) {
        let prevSnapIndex;
        snapGrid.forEach((snap, snapIndex)=>{
            if (normalizedTranslate >= snap) {
                // prevSnap = snap;
                prevSnapIndex = snapIndex;
            }
        });
        if (typeof prevSnapIndex !== 'undefined') {
            prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
        }
    }
    let prevIndex = 0;
    if (typeof prevSnap !== 'undefined') {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
        if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
            prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
            prevIndex = Math.max(prevIndex, 0);
        }
    }
    if (params.rewind && swiper.isBeginning) {
        const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
        requestAnimationFrame(()=>{
            swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        });
        return true;
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */ function slideReset(speed, runCallbacks = true, internal) {
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === 'undefined') {
        speed = swiper.params.speed;
    }
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */ function slideToClosest(speed, runCallbacks = true, internal, threshold = 0.5) {
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === 'undefined') {
        speed = swiper.params.speed;
    }
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        const currentSnap = swiper.snapGrid[snapIndex];
        const nextSnap = swiper.snapGrid[snapIndex + 1];
        if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
            index += swiper.params.slidesPerGroup;
        }
    } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        const prevSnap = swiper.snapGrid[snapIndex - 1];
        const currentSnap = swiper.snapGrid[snapIndex];
        if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
            index -= swiper.params.slidesPerGroup;
        }
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
}
function slideToClickedSlide() {
    const swiper = this;
    if (swiper.destroyed) return;
    const { params, slidesEl } = swiper;
    const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.getSlideIndexWhenGrid(swiper.clickedIndex);
    let realIndex;
    const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
    const isGrid = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
    if (params.loop) {
        if (swiper.animating) return;
        realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
        if (params.centeredSlides) {
            swiper.slideToLoop(realIndex);
        } else if (slideToIndex > (isGrid ? (swiper.slides.length - slidesPerView) / 2 - (swiper.params.grid.rows - 1) : swiper.slides.length - slidesPerView)) {
            swiper.loopFix();
            slideToIndex = swiper.getSlideIndex((0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(()=>{
                swiper.slideTo(slideToIndex);
            });
        } else {
            swiper.slideTo(slideToIndex);
        }
    } else {
        swiper.slideTo(slideToIndex);
    }
}
var slide = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide
};
function loopCreate(slideRealIndex, initial) {
    const swiper = this;
    const { params, slidesEl } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    const initSlides = ()=>{
        const slides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(slidesEl, `.${params.slideClass}, swiper-slide`);
        slides.forEach((el, index)=>{
            el.setAttribute('data-swiper-slide-index', index);
        });
    };
    const clearBlankSlides = ()=>{
        const slides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(slidesEl, `.${params.slideBlankClass}`);
        slides.forEach((el)=>{
            el.remove();
        });
        if (slides.length > 0) {
            swiper.recalcSlides();
            swiper.updateSlides();
        }
    };
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    if (params.loopAddBlankSlides && (params.slidesPerGroup > 1 || gridEnabled)) {
        clearBlankSlides();
    }
    const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
    const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
    const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
    const addBlankSlides = (amountOfSlides)=>{
        for(let i = 0; i < amountOfSlides; i += 1){
            const slideEl = swiper.isElement ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])('swiper-slide', [
                params.slideBlankClass
            ]) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])('div', [
                params.slideClass,
                params.slideBlankClass
            ]);
            swiper.slidesEl.append(slideEl);
        }
    };
    if (shouldFillGroup) {
        if (params.loopAddBlankSlides) {
            const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
            addBlankSlides(slidesToAdd);
            swiper.recalcSlides();
            swiper.updateSlides();
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"])('Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
        }
        initSlides();
    } else if (shouldFillGrid) {
        if (params.loopAddBlankSlides) {
            const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
            addBlankSlides(slidesToAdd);
            swiper.recalcSlides();
            swiper.updateSlides();
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"])('Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
        }
        initSlides();
    } else {
        initSlides();
    }
    const bothDirections = params.centeredSlides || !!params.slidesOffsetBefore || !!params.slidesOffsetAfter;
    swiper.loopFix({
        slideRealIndex,
        direction: bothDirections ? undefined : 'next',
        initial
    });
}
function loopFix({ slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, initial, byController, byMousewheel } = {}) {
    const swiper = this;
    if (!swiper.params.loop) return;
    swiper.emit('beforeLoopFix');
    const { slides, allowSlidePrev, allowSlideNext, slidesEl, params } = swiper;
    const { centeredSlides, slidesOffsetBefore, slidesOffsetAfter, initialSlide } = params;
    const bothDirections = centeredSlides || !!slidesOffsetBefore || !!slidesOffsetAfter;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    if (swiper.virtual && params.virtual.enabled) {
        if (slideTo) {
            if (!bothDirections && swiper.snapIndex === 0) {
                swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
            } else if (bothDirections && swiper.snapIndex < params.slidesPerView) {
                swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
            } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
                swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
            }
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        swiper.emit('loopFix');
        return;
    }
    let slidesPerView = params.slidesPerView;
    if (slidesPerView === 'auto') {
        slidesPerView = swiper.slidesPerViewDynamic();
    } else {
        slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
        if (bothDirections && slidesPerView % 2 === 0) {
            slidesPerView = slidesPerView + 1;
        }
    }
    const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
    let loopedSlides = bothDirections ? Math.max(slidesPerGroup, Math.ceil(slidesPerView / 2)) : slidesPerGroup;
    if (loopedSlides % slidesPerGroup !== 0) {
        loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
    }
    loopedSlides += params.loopAdditionalSlides;
    swiper.loopedSlides = loopedSlides;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    if (slides.length < slidesPerView + loopedSlides || swiper.params.effect === 'cards' && slides.length < slidesPerView + loopedSlides * 2) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"])('Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters');
    } else if (gridEnabled && params.grid.fill === 'row') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"])('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
    }
    const prependSlidesIndexes = [];
    const appendSlidesIndexes = [];
    const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
    const isInitialOverflow = initial && cols - initialSlide < slidesPerView && !bothDirections;
    let activeIndex = isInitialOverflow ? initialSlide : swiper.activeIndex;
    if (typeof activeSlideIndex === 'undefined') {
        activeSlideIndex = swiper.getSlideIndex(slides.find((el)=>el.classList.contains(params.slideActiveClass)));
    } else {
        activeIndex = activeSlideIndex;
    }
    const isNext = direction === 'next' || !direction;
    const isPrev = direction === 'prev' || !direction;
    let slidesPrepended = 0;
    let slidesAppended = 0;
    const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
    const activeColIndexWithShift = activeColIndex + (bothDirections && typeof setTranslate === 'undefined' ? -slidesPerView / 2 + 0.5 : 0);
    // prepend last slides before start
    if (activeColIndexWithShift < loopedSlides) {
        slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
        for(let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1){
            const index = i - Math.floor(i / cols) * cols;
            if (gridEnabled) {
                const colIndexToPrepend = cols - index - 1;
                for(let i = slides.length - 1; i >= 0; i -= 1){
                    if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
                }
            // slides.forEach((slide, slideIndex) => {
            //   if (slide.column === colIndexToPrepend) prependSlidesIndexes.push(slideIndex);
            // });
            } else {
                prependSlidesIndexes.push(cols - index - 1);
            }
        }
    } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
        slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
        if (isInitialOverflow) {
            slidesAppended = Math.max(slidesAppended, slidesPerView - cols + initialSlide + 1);
        }
        for(let i = 0; i < slidesAppended; i += 1){
            const index = i - Math.floor(i / cols) * cols;
            if (gridEnabled) {
                slides.forEach((slide, slideIndex)=>{
                    if (slide.column === index) appendSlidesIndexes.push(slideIndex);
                });
            } else {
                appendSlidesIndexes.push(index);
            }
        }
    }
    swiper.__preventObserver__ = true;
    requestAnimationFrame(()=>{
        swiper.__preventObserver__ = false;
    });
    if (swiper.params.effect === 'cards' && slides.length < slidesPerView + loopedSlides * 2) {
        if (appendSlidesIndexes.includes(activeSlideIndex)) {
            appendSlidesIndexes.splice(appendSlidesIndexes.indexOf(activeSlideIndex), 1);
        }
        if (prependSlidesIndexes.includes(activeSlideIndex)) {
            prependSlidesIndexes.splice(prependSlidesIndexes.indexOf(activeSlideIndex), 1);
        }
    }
    if (isPrev) {
        prependSlidesIndexes.forEach((index)=>{
            slides[index].swiperLoopMoveDOM = true;
            slidesEl.prepend(slides[index]);
            slides[index].swiperLoopMoveDOM = false;
        });
    }
    if (isNext) {
        appendSlidesIndexes.forEach((index)=>{
            slides[index].swiperLoopMoveDOM = true;
            slidesEl.append(slides[index]);
            slides[index].swiperLoopMoveDOM = false;
        });
    }
    swiper.recalcSlides();
    if (params.slidesPerView === 'auto') {
        swiper.updateSlides();
    } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
        swiper.slides.forEach((slide, slideIndex)=>{
            swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
        });
    }
    if (params.watchSlidesProgress) {
        swiper.updateSlidesOffset();
    }
    if (slideTo) {
        if (prependSlidesIndexes.length > 0 && isPrev) {
            if (typeof slideRealIndex === 'undefined') {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) {
                    swiper.setTranslate(swiper.translate - diff);
                } else {
                    swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
                    if (setTranslate) {
                        swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                        swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                    }
                }
            } else {
                if (setTranslate) {
                    const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
                    swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
                    swiper.touchEventsData.currentTranslate = swiper.translate;
                }
            }
        } else if (appendSlidesIndexes.length > 0 && isNext) {
            if (typeof slideRealIndex === 'undefined') {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) {
                    swiper.setTranslate(swiper.translate - diff);
                } else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) {
                        swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                        swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                    }
                }
            } else {
                const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
                swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
            }
        }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.controller && swiper.controller.control && !byController) {
        const loopParams = {
            slideRealIndex,
            direction,
            setTranslate,
            activeSlideIndex,
            byController: true
        };
        if (Array.isArray(swiper.controller.control)) {
            swiper.controller.control.forEach((c)=>{
                if (!c.destroyed && c.params.loop) c.loopFix({
                    ...loopParams,
                    slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
                });
            });
        } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
            swiper.controller.control.loopFix({
                ...loopParams,
                slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
            });
        }
    }
    swiper.emit('loopFix');
}
function loopDestroy() {
    const swiper = this;
    const { params, slidesEl } = swiper;
    if (!params.loop || !slidesEl || swiper.virtual && swiper.params.virtual.enabled) return;
    swiper.recalcSlides();
    const newSlidesOrder = [];
    swiper.slides.forEach((slideEl)=>{
        const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
        newSlidesOrder[index] = slideEl;
    });
    swiper.slides.forEach((slideEl)=>{
        slideEl.removeAttribute('data-swiper-slide-index');
    });
    newSlidesOrder.forEach((slideEl)=>{
        slidesEl.append(slideEl);
    });
    swiper.recalcSlides();
    swiper.slideTo(swiper.realIndex, 0);
}
var loop = {
    loopCreate,
    loopFix,
    loopDestroy
};
function setGrabCursor(moving) {
    const swiper = this;
    if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
    if (swiper.isElement) {
        swiper.__preventObserver__ = true;
    }
    el.style.cursor = 'move';
    el.style.cursor = moving ? 'grabbing' : 'grab';
    if (swiper.isElement) {
        requestAnimationFrame(()=>{
            swiper.__preventObserver__ = false;
        });
    }
}
function unsetGrabCursor() {
    const swiper = this;
    if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
        return;
    }
    if (swiper.isElement) {
        swiper.__preventObserver__ = true;
    }
    swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
    if (swiper.isElement) {
        requestAnimationFrame(()=>{
            swiper.__preventObserver__ = false;
        });
    }
}
var grabCursor = {
    setGrabCursor,
    unsetGrabCursor
};
// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base = this) {
    function __closestFrom(el) {
        if (!el || el === (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])() || el === (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])()) return null;
        if (el.assignedSlot) el = el.assignedSlot;
        const found = el.closest(selector);
        if (!found && !el.getRootNode) {
            return null;
        }
        return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event, startX) {
    const window1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
    const { params } = swiper;
    const edgeSwipeDetection = params.edgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window1.innerWidth - edgeSwipeThreshold)) {
        if (edgeSwipeDetection === 'prevent') {
            event.preventDefault();
            return true;
        }
        return false;
    }
    return true;
}
function onTouchStart(event) {
    const swiper = this;
    const document1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])();
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    const data = swiper.touchEventsData;
    if (e.type === 'pointerdown') {
        if (data.pointerId !== null && data.pointerId !== e.pointerId) {
            return;
        }
        data.pointerId = e.pointerId;
    } else if (e.type === 'touchstart' && e.targetTouches.length === 1) {
        data.touchId = e.targetTouches[0].identifier;
    }
    if (e.type === 'touchstart') {
        // don't proceed touch event
        preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
        return;
    }
    const { params, touches, enabled } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && e.pointerType === 'mouse') return;
    if (swiper.animating && params.preventInteractionOnTransition) {
        return;
    }
    if (!swiper.animating && params.cssMode && params.loop) {
        swiper.loopFix();
    }
    let targetEl = e.target;
    if (params.touchEventsTarget === 'wrapper') {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["w"])(targetEl, swiper.wrapperEl)) return;
    }
    if ('which' in e && e.which === 3) return;
    if ('button' in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return;
    // change target el for shadow root component
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
    // eslint-disable-next-line
    const eventPath = e.composedPath ? e.composedPath() : e.path;
    if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
        targetEl = eventPath[0];
    }
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e.target && e.target.shadowRoot);
    // use closestElement for shadow root element to get the actual closest for nested shadow root element
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
        swiper.allowClick = true;
        return;
    }
    if (params.swipeHandler) {
        if (!targetEl.closest(params.swipeHandler)) return;
    }
    touches.currentX = e.pageX;
    touches.currentY = e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;
    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
    if (!preventEdgeSwipe(swiper, e, startX)) {
        return;
    }
    Object.assign(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) data.allowThresholdMove = false;
    let preventDefault = true;
    if (targetEl.matches(data.focusableElements)) {
        preventDefault = false;
        if (targetEl.nodeName === 'SELECT') {
            data.isTouched = false;
        }
    }
    if (document1.activeElement && document1.activeElement.matches(data.focusableElements) && document1.activeElement !== targetEl && (e.pointerType === 'mouse' || e.pointerType !== 'mouse' && !targetEl.matches(data.focusableElements))) {
        document1.activeElement.blur();
    }
    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
        e.preventDefault();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
        swiper.freeMode.onTouchStart();
    }
    swiper.emit('touchStart', e);
}
function onTouchMove(event) {
    const document1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])();
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params, touches, rtlTranslate: rtl, enabled } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && event.pointerType === 'mouse') return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (e.type === 'pointermove') {
        if (data.touchId !== null) return; // return from pointer if we use touch
        const id = e.pointerId;
        if (id !== data.pointerId) return;
    }
    let targetTouch;
    if (e.type === 'touchmove') {
        targetTouch = [
            ...e.changedTouches
        ].find((t)=>t.identifier === data.touchId);
        if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    } else {
        targetTouch = e;
    }
    if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) {
            swiper.emit('touchMoveOpposite', e);
        }
        return;
    }
    const pageX = targetTouch.pageX;
    const pageY = targetTouch.pageY;
    if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
    }
    if (!swiper.allowTouchMove) {
        if (!e.target.matches(data.focusableElements)) {
            swiper.allowClick = false;
        }
        if (data.isTouched) {
            Object.assign(touches, {
                startX: pageX,
                startY: pageY,
                currentX: pageX,
                currentY: pageY
            });
            data.touchStartTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])();
        }
        return;
    }
    if (params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) {
            // Vertical
            if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                data.isTouched = false;
                data.isMoved = false;
                return;
            }
        } else if (rtl && (pageX > touches.startX && -swiper.translate <= swiper.maxTranslate() || pageX < touches.startX && -swiper.translate >= swiper.minTranslate())) {
            return;
        } else if (!rtl && (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate())) {
            return;
        }
    }
    if (document1.activeElement && document1.activeElement.matches(data.focusableElements) && document1.activeElement !== e.target && e.pointerType !== 'mouse') {
        document1.activeElement.blur();
    }
    if (document1.activeElement) {
        if (e.target === document1.activeElement && e.target.matches(data.focusableElements)) {
            data.isMoved = true;
            swiper.allowClick = false;
            return;
        }
    }
    if (data.allowTouchCallbacks) {
        swiper.emit('touchMove', e);
    }
    touches.previousX = touches.currentX;
    touches.previousY = touches.currentY;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
    if (typeof data.isScrolling === 'undefined') {
        let touchAngle;
        if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
            data.isScrolling = false;
        } else {
            // eslint-disable-next-line
            if (diffX * diffX + diffY * diffY >= 25) {
                touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
            }
        }
    }
    if (data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
    }
    if (typeof data.startMoving === 'undefined') {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
            data.startMoving = true;
        }
    }
    if (data.isScrolling || e.type === 'touchmove' && data.preventTouchMoveFromPointerMove) {
        data.isTouched = false;
        return;
    }
    if (!data.startMoving) {
        return;
    }
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) {
        e.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
        e.stopPropagation();
    }
    let diff = swiper.isHorizontal() ? diffX : diffY;
    let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
    if (params.oneWayMovement) {
        diff = Math.abs(diff) * (rtl ? 1 : -1);
        touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
    }
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
        diff = -diff;
        touchesDiff = -touchesDiff;
    }
    const prevTouchesDirection = swiper.touchesDirection;
    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
    const isLoop = swiper.params.loop && !params.cssMode;
    const allowLoopFix = swiper.touchesDirection === 'next' && swiper.allowSlideNext || swiper.touchesDirection === 'prev' && swiper.allowSlidePrev;
    if (!data.isMoved) {
        if (isLoop && allowLoopFix) {
            swiper.loopFix({
                direction: swiper.swipeDirection
            });
        }
        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);
        if (swiper.animating) {
            const evt = new window.CustomEvent('transitionend', {
                bubbles: true,
                cancelable: true,
                detail: {
                    bySwiperTouchMove: true
                }
            });
            swiper.wrapperEl.dispatchEvent(evt);
        }
        data.allowMomentumBounce = false;
        // Grab Cursor
        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
            swiper.setGrabCursor(true);
        }
        swiper.emit('sliderFirstMove', e);
    }
    let loopFixed;
    new Date().getTime();
    if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
        Object.assign(touches, {
            startX: pageX,
            startY: pageY,
            currentX: pageX,
            currentY: pageY,
            startTranslate: data.currentTranslate
        });
        data.loopSwapReset = true;
        data.startTranslate = data.currentTranslate;
        return;
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
        resistanceRatio = 0;
    }
    if (diff > 0) {
        if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
            swiper.loopFix({
                direction: 'prev',
                setTranslate: true,
                activeSlideIndex: 0
            });
        }
        if (data.currentTranslate > swiper.minTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) {
                data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
            }
        }
    } else if (diff < 0) {
        if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
            swiper.loopFix({
                direction: 'next',
                setTranslate: true,
                activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
            });
        }
        if (data.currentTranslate < swiper.maxTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) {
                data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
            }
        }
    }
    if (disableParentSwiper) {
        e.preventedByNestedSwiper = true;
    }
    // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
        data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
        data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
        data.currentTranslate = data.startTranslate;
    }
    // Threshold
    if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
            if (!data.allowThresholdMove) {
                data.allowThresholdMove = true;
                touches.startX = touches.currentX;
                touches.startY = touches.currentY;
                data.currentTranslate = data.startTranslate;
                touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                return;
            }
        } else {
            data.currentTranslate = data.startTranslate;
            return;
        }
    }
    if (!params.followFinger || params.cssMode) return;
    // Update active index in free mode
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
        swiper.freeMode.onTouchMove();
    }
    // Update progress
    swiper.updateProgress(data.currentTranslate);
    // Update translate
    swiper.setTranslate(data.currentTranslate);
}
function onTouchEnd(event) {
    const swiper = this;
    const data = swiper.touchEventsData;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    let targetTouch;
    const isTouchEvent = e.type === 'touchend' || e.type === 'touchcancel';
    if (!isTouchEvent) {
        if (data.touchId !== null) return; // return from pointer if we use touch
        if (e.pointerId !== data.pointerId) return;
        targetTouch = e;
    } else {
        targetTouch = [
            ...e.changedTouches
        ].find((t)=>t.identifier === data.touchId);
        if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    }
    if ([
        'pointercancel',
        'pointerout',
        'pointerleave',
        'contextmenu'
    ].includes(e.type)) {
        const proceed = [
            'pointercancel',
            'contextmenu'
        ].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
        if (!proceed) {
            return;
        }
    }
    data.pointerId = null;
    data.touchId = null;
    const { params, touches, rtlTranslate: rtl, slidesGrid, enabled } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && e.pointerType === 'mouse') return;
    if (data.allowTouchCallbacks) {
        swiper.emit('touchEnd', e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) {
            swiper.setGrabCursor(false);
        }
        data.isMoved = false;
        data.startMoving = false;
        return;
    }
    // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(false);
    }
    // Time diff
    const touchEndTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])();
    const timeDiff = touchEndTime - data.touchStartTime;
    // Tap, doubleTap, Click
    if (swiper.allowClick) {
        const pathTree = e.path || e.composedPath && e.composedPath();
        swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
        swiper.emit('tap click', e);
        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
            swiper.emit('doubleTap doubleClick', e);
        }
    }
    data.lastClickTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(()=>{
        if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) {
        currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
        currentPos = -data.currentTranslate;
    }
    if (params.cssMode) {
        return;
    }
    if (params.freeMode && params.freeMode.enabled) {
        swiper.freeMode.onTouchEnd({
            currentPos
        });
        return;
    }
    // Find current slide
    const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for(let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup){
        const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (typeof slidesGrid[i + increment] !== 'undefined') {
            if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                stopIndex = i;
                groupSize = slidesGrid[i + increment] - slidesGrid[i];
            }
        } else if (swipeToLast || currentPos >= slidesGrid[i]) {
            stopIndex = i;
            groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
        if (swiper.isBeginning) {
            rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        } else if (swiper.isEnd) {
            rewindFirstIndex = 0;
        }
    }
    // Find current slide size
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (swiper.swipeDirection === 'next') {
            if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
            else swiper.slideTo(stopIndex);
        }
        if (swiper.swipeDirection === 'prev') {
            if (ratio > 1 - params.longSwipesRatio) {
                swiper.slideTo(stopIndex + increment);
            } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
                swiper.slideTo(rewindLastIndex);
            } else {
                swiper.slideTo(stopIndex);
            }
        }
    } else {
        // Short swipes
        if (!params.shortSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
        if (!isNavButtonTarget) {
            if (swiper.swipeDirection === 'next') {
                swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
            }
            if (swiper.swipeDirection === 'prev') {
                swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
            }
        } else if (e.target === swiper.navigation.nextEl) {
            swiper.slideTo(stopIndex + increment);
        } else {
            swiper.slideTo(stopIndex);
        }
    }
}
function onResize() {
    const swiper = this;
    const { params, el } = swiper;
    if (el && el.offsetWidth === 0) return;
    // Breakpoints
    if (params.breakpoints) {
        swiper.setBreakpoint();
    }
    // Save locks
    const { allowSlideNext, allowSlidePrev, snapGrid } = swiper;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    const isVirtualLoop = isVirtual && params.loop;
    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
        swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
        if (swiper.params.loop && !isVirtual) {
            swiper.slideToLoop(swiper.realIndex, 0, false, true);
        } else {
            swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        clearTimeout(swiper.autoplay.resizeTimeout);
        swiper.autoplay.resizeTimeout = setTimeout(()=>{
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                swiper.autoplay.resume();
            }
        }, 500);
    }
    // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
    }
}
function onClick(e) {
    const swiper = this;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
        if (swiper.params.preventClicks) e.preventDefault();
        if (swiper.params.preventClicksPropagation && swiper.animating) {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
    }
}
function onScroll() {
    const swiper = this;
    const { wrapperEl, rtlTranslate, enabled } = swiper;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
        swiper.translate = -wrapperEl.scrollLeft;
    } else {
        swiper.translate = -wrapperEl.scrollTop;
    }
    // eslint-disable-next-line
    if (swiper.translate === 0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
        newProgress = 0;
    } else {
        newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper.progress) {
        swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    }
    swiper.emit('setTranslate', swiper.translate, false);
}
function onLoad(e) {
    const swiper = this;
    processLazyPreloader(swiper, e.target);
    if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
        return;
    }
    swiper.update();
}
function onDocumentTouchStart() {
    const swiper = this;
    if (swiper.documentTouchHandlerProceeded) return;
    swiper.documentTouchHandlerProceeded = true;
    if (swiper.params.touchReleaseOnEdges) {
        swiper.el.style.touchAction = 'auto';
    }
}
const events = (swiper, method)=>{
    const document1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])();
    const { params, el, wrapperEl, device } = swiper;
    const capture = !!params.nested;
    const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    const swiperMethod = method;
    if (!el || typeof el === 'string') return;
    // Touch Events
    document1[domMethod]('touchstart', swiper.onDocumentTouchStart, {
        passive: false,
        capture
    });
    el[domMethod]('touchstart', swiper.onTouchStart, {
        passive: false
    });
    el[domMethod]('pointerdown', swiper.onTouchStart, {
        passive: false
    });
    document1[domMethod]('touchmove', swiper.onTouchMove, {
        passive: false,
        capture
    });
    document1[domMethod]('pointermove', swiper.onTouchMove, {
        passive: false,
        capture
    });
    document1[domMethod]('touchend', swiper.onTouchEnd, {
        passive: true
    });
    document1[domMethod]('pointerup', swiper.onTouchEnd, {
        passive: true
    });
    document1[domMethod]('pointercancel', swiper.onTouchEnd, {
        passive: true
    });
    document1[domMethod]('touchcancel', swiper.onTouchEnd, {
        passive: true
    });
    document1[domMethod]('pointerout', swiper.onTouchEnd, {
        passive: true
    });
    document1[domMethod]('pointerleave', swiper.onTouchEnd, {
        passive: true
    });
    document1[domMethod]('contextmenu', swiper.onTouchEnd, {
        passive: true
    });
    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) {
        el[domMethod]('click', swiper.onClick, true);
    }
    if (params.cssMode) {
        wrapperEl[domMethod]('scroll', swiper.onScroll);
    }
    // Resize handler
    if (params.updateOnWindowResize) {
        swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
    } else {
        swiper[swiperMethod]('observerUpdate', onResize, true);
    }
    // Images loader
    el[domMethod]('load', swiper.onLoad, {
        capture: true
    });
};
function attachEvents() {
    const swiper = this;
    const { params } = swiper;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
    if (params.cssMode) {
        swiper.onScroll = onScroll.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    swiper.onLoad = onLoad.bind(swiper);
    events(swiper, 'on');
}
function detachEvents() {
    const swiper = this;
    events(swiper, 'off');
}
var events$1 = {
    attachEvents,
    detachEvents
};
const isGridEnabled = (swiper, params)=>{
    return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
    const swiper = this;
    const { realIndex, initialized, params, el } = swiper;
    const breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
    const document1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])();
    // Get breakpoint for window/container width and update parameters
    const breakpointsBase = params.breakpointsBase === 'window' || !params.breakpointsBase ? params.breakpointsBase : 'container';
    const breakpointContainer = [
        'window',
        'container'
    ].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document1.querySelector(params.breakpointsBase);
    const breakpoint = swiper.getBreakpoint(breakpoints, breakpointsBase, breakpointContainer);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasGrabCursor = swiper.params.grabCursor;
    const isGrabCursor = breakpointParams.grabCursor;
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
        el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
        el.classList.add(`${params.containerModifierClass}grid`);
        if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
            el.classList.add(`${params.containerModifierClass}grid-column`);
        }
        swiper.emitContainerClasses();
    }
    if (wasGrabCursor && !isGrabCursor) {
        swiper.unsetGrabCursor();
    } else if (!wasGrabCursor && isGrabCursor) {
        swiper.setGrabCursor();
    }
    // Toggle navigation, pagination, scrollbar
    [
        'navigation',
        'pagination',
        'scrollbar'
    ].forEach((prop)=>{
        if (typeof breakpointParams[prop] === 'undefined') return;
        const wasModuleEnabled = params[prop] && params[prop].enabled;
        const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
        if (wasModuleEnabled && !isModuleEnabled) {
            swiper[prop].disable();
        }
        if (!wasModuleEnabled && isModuleEnabled) {
            swiper[prop].enable();
        }
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    const wasLoop = params.loop;
    if (directionChanged && initialized) {
        swiper.changeDirection();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["x"])(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    const hasLoop = swiper.params.loop;
    Object.assign(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) {
        swiper.disable();
    } else if (!wasEnabled && isEnabled) {
        swiper.enable();
    }
    swiper.currentBreakpoint = breakpoint;
    swiper.emit('_beforeBreakpoint', breakpointParams);
    if (initialized) {
        if (needsReLoop) {
            swiper.loopDestroy();
            swiper.loopCreate(realIndex);
            swiper.updateSlides();
        } else if (!wasLoop && hasLoop) {
            swiper.loopCreate(realIndex);
            swiper.updateSlides();
        } else if (wasLoop && !hasLoop) {
            swiper.loopDestroy();
        }
    }
    swiper.emit('breakpoint', breakpointParams);
}
function getBreakpoint(breakpoints, base = 'window', containerEl) {
    if (!breakpoints || base === 'container' && !containerEl) return undefined;
    let breakpoint = false;
    const window1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
    const currentHeight = base === 'window' ? window1.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints).map((point)=>{
        if (typeof point === 'string' && point.indexOf('@') === 0) {
            const minRatio = parseFloat(point.substr(1));
            const value = currentHeight * minRatio;
            return {
                value,
                point
            };
        }
        return {
            value: point,
            point
        };
    });
    points.sort((a, b)=>parseInt(a.value, 10) - parseInt(b.value, 10));
    for(let i = 0; i < points.length; i += 1){
        const { point, value } = points[i];
        if (base === 'window') {
            if (window1.matchMedia(`(min-width: ${value}px)`).matches) {
                breakpoint = point;
            }
        } else if (value <= containerEl.clientWidth) {
            breakpoint = point;
        }
    }
    return breakpoint || 'max';
}
var breakpoints = {
    setBreakpoint,
    getBreakpoint
};
function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item)=>{
        if (typeof item === 'object') {
            Object.keys(item).forEach((classNames)=>{
                if (item[classNames]) {
                    resultClasses.push(prefix + classNames);
                }
            });
        } else if (typeof item === 'string') {
            resultClasses.push(prefix + item);
        }
    });
    return resultClasses;
}
function addClasses() {
    const swiper = this;
    const { classNames, params, rtl, el, device } = swiper;
    // prettier-ignore
    const suffixes = prepareClasses([
        'initialized',
        params.direction,
        {
            'free-mode': swiper.params.freeMode && params.freeMode.enabled
        },
        {
            'autoheight': params.autoHeight
        },
        {
            'rtl': rtl
        },
        {
            'grid': params.grid && params.grid.rows > 1
        },
        {
            'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
        },
        {
            'android': device.android
        },
        {
            'ios': device.ios
        },
        {
            'css-mode': params.cssMode
        },
        {
            'centered': params.cssMode && params.centeredSlides
        },
        {
            'watch-progress': params.watchSlidesProgress
        }
    ], params.containerModifierClass);
    classNames.push(...suffixes);
    el.classList.add(...classNames);
    swiper.emitContainerClasses();
}
function removeClasses() {
    const swiper = this;
    const { el, classNames } = swiper;
    if (!el || typeof el === 'string') return;
    el.classList.remove(...classNames);
    swiper.emitContainerClasses();
}
var classes = {
    addClasses,
    removeClasses
};
function checkOverflow() {
    const swiper = this;
    const { isLocked: wasLocked, params } = swiper;
    const { slidesOffsetBefore } = params;
    if (slidesOffsetBefore) {
        const lastSlideIndex = swiper.slides.length - 1;
        const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
        swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else {
        swiper.isLocked = swiper.snapGrid.length === 1;
    }
    if (params.allowSlideNext === true) {
        swiper.allowSlideNext = !swiper.isLocked;
    }
    if (params.allowSlidePrev === true) {
        swiper.allowSlidePrev = !swiper.isLocked;
    }
    if (wasLocked && wasLocked !== swiper.isLocked) {
        swiper.isEnd = false;
    }
    if (wasLocked !== swiper.isLocked) {
        swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
    }
}
var checkOverflow$1 = {
    checkOverflow
};
var defaults = {
    init: true,
    direction: 'horizontal',
    oneWayMovement: false,
    swiperElementNodeName: 'SWIPER-CONTAINER',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    eventsPrefix: 'swiper',
    enabled: true,
    focusableElements: 'input, select, option, textarea, button, video, label',
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: 'slide',
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: undefined,
    breakpointsBase: 'window',
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 5,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // loop
    loop: false,
    loopAddBlankSlides: true,
    loopAdditionalSlides: 0,
    loopPreventsSliding: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: 'swiper-',
    // NEW
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-blank',
    slideActiveClass: 'swiper-slide-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideFullyVisibleClass: 'swiper-slide-fully-visible',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    wrapperClass: 'swiper-wrapper',
    lazyPreloaderClass: 'swiper-lazy-preloader',
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
};
function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj = {}) {
        const moduleParamName = Object.keys(obj)[0];
        const moduleParams = obj[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["x"])(allModulesParams, obj);
            return;
        }
        if (params[moduleParamName] === true) {
            params[moduleParamName] = {
                enabled: true
            };
        }
        if (moduleParamName === 'navigation' && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
            params[moduleParamName].auto = true;
        }
        if ([
            'pagination',
            'scrollbar'
        ].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
            params[moduleParamName].auto = true;
        }
        if (!(moduleParamName in params && 'enabled' in moduleParams)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["x"])(allModulesParams, obj);
            return;
        }
        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
            params[moduleParamName].enabled = true;
        }
        if (!params[moduleParamName]) params[moduleParamName] = {
            enabled: false
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["x"])(allModulesParams, obj);
    };
}
/* eslint no-param-reassign: "off" */ const prototypes = {
    eventsEmitter,
    update,
    translate,
    transition,
    slide,
    loop,
    grabCursor,
    events: events$1,
    breakpoints,
    checkOverflow: checkOverflow$1,
    classes
};
const extendedDefaults = {};
class Swiper {
    constructor(...args){
        let el;
        let params;
        if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
            params = args[0];
        } else {
            [el, params] = args;
        }
        if (!params) params = {};
        params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["x"])({}, params);
        if (el && !params.el) params.el = el;
        const document1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])();
        if (params.el && typeof params.el === 'string' && document1.querySelectorAll(params.el).length > 1) {
            const swipers = [];
            document1.querySelectorAll(params.el).forEach((containerEl)=>{
                const newParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["x"])({}, params, {
                    el: containerEl
                });
                swipers.push(new Swiper(newParams));
            });
            // eslint-disable-next-line no-constructor-return
            return swipers;
        }
        // Swiper Instance
        const swiper = this;
        swiper.__swiper__ = true;
        swiper.support = getSupport();
        swiper.device = getDevice({
            userAgent: params.userAgent
        });
        swiper.browser = getBrowser();
        swiper.eventsListeners = {};
        swiper.eventsAnyListeners = [];
        swiper.modules = [
            ...swiper.__modules__
        ];
        if (params.modules && Array.isArray(params.modules)) {
            swiper.modules.push(...params.modules);
        }
        const allModulesParams = {};
        swiper.modules.forEach((mod)=>{
            mod({
                params,
                swiper,
                extendParams: moduleExtendParams(params, allModulesParams),
                on: swiper.on.bind(swiper),
                once: swiper.once.bind(swiper),
                off: swiper.off.bind(swiper),
                emit: swiper.emit.bind(swiper)
            });
        });
        // Extend defaults with modules params
        const swiperParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["x"])({}, defaults, allModulesParams);
        // Extend defaults with passed params
        swiper.params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["x"])({}, swiperParams, extendedDefaults, params);
        swiper.originalParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["x"])({}, swiper.params);
        swiper.passedParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["x"])({}, params);
        // add event listeners
        if (swiper.params && swiper.params.on) {
            Object.keys(swiper.params.on).forEach((eventName)=>{
                swiper.on(eventName, swiper.params.on[eventName]);
            });
        }
        if (swiper.params && swiper.params.onAny) {
            swiper.onAny(swiper.params.onAny);
        }
        // Extend Swiper
        Object.assign(swiper, {
            enabled: swiper.params.enabled,
            el,
            // Classes
            classNames: [],
            // Slides
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            // isDirection
            isHorizontal () {
                return swiper.params.direction === 'horizontal';
            },
            isVertical () {
                return swiper.params.direction === 'vertical';
            },
            // Indexes
            activeIndex: 0,
            realIndex: 0,
            //
            isBeginning: true,
            isEnd: false,
            // Props
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: false,
            cssOverflowAdjustment () {
                // Returns 0 unless `translate` is > 2**23
                // Should be subtracted from css values to prevent overflow
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            // Locks
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev,
            // Touch Events
            touchEventsData: {
                isTouched: undefined,
                isMoved: undefined,
                allowTouchCallbacks: undefined,
                touchStartTime: undefined,
                isScrolling: undefined,
                currentTranslate: undefined,
                startTranslate: undefined,
                allowThresholdMove: undefined,
                // Form elements to match
                focusableElements: swiper.params.focusableElements,
                // Last click time
                lastClickTime: 0,
                clickTimeout: undefined,
                // Velocities
                velocities: [],
                allowMomentumBounce: undefined,
                startMoving: undefined,
                pointerId: null,
                touchId: null
            },
            // Clicks
            allowClick: true,
            // Touches
            allowTouchMove: swiper.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            // Images
            imagesToLoad: [],
            imagesLoaded: 0
        });
        swiper.emit('_swiper');
        // Init
        if (swiper.params.init) {
            swiper.init();
        }
        // Return app instance
        // eslint-disable-next-line no-constructor-return
        return swiper;
    }
    getDirectionLabel(property) {
        if (this.isHorizontal()) {
            return property;
        }
        // prettier-ignore
        return ({
            'width': 'height',
            'margin-top': 'margin-left',
            'margin-bottom ': 'margin-right',
            'margin-left': 'margin-top',
            'margin-right': 'margin-bottom',
            'padding-left': 'padding-top',
            'padding-right': 'padding-bottom',
            'marginRight': 'marginBottom'
        })[property];
    }
    getSlideIndex(slideEl) {
        const { slidesEl, params } = this;
        const slides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(slidesEl, `.${params.slideClass}, swiper-slide`);
        const firstSlideIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])(slides[0]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])(slideEl) - firstSlideIndex;
    }
    getSlideIndexByData(index) {
        return this.getSlideIndex(this.slides.find((slideEl)=>slideEl.getAttribute('data-swiper-slide-index') * 1 === index));
    }
    getSlideIndexWhenGrid(index) {
        if (this.grid && this.params.grid && this.params.grid.rows > 1) {
            if (this.params.grid.fill === 'column') {
                index = Math.floor(index / this.params.grid.rows);
            } else if (this.params.grid.fill === 'row') {
                index = index % Math.ceil(this.slides.length / this.params.grid.rows);
            }
        }
        return index;
    }
    recalcSlides() {
        const swiper = this;
        const { slidesEl, params } = swiper;
        swiper.slides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(slidesEl, `.${params.slideClass}, swiper-slide`);
    }
    enable() {
        const swiper = this;
        if (swiper.enabled) return;
        swiper.enabled = true;
        if (swiper.params.grabCursor) {
            swiper.setGrabCursor();
        }
        swiper.emit('enable');
    }
    disable() {
        const swiper = this;
        if (!swiper.enabled) return;
        swiper.enabled = false;
        if (swiper.params.grabCursor) {
            swiper.unsetGrabCursor();
        }
        swiper.emit('disable');
    }
    setProgress(progress, speed) {
        const swiper = this;
        progress = Math.min(Math.max(progress, 0), 1);
        const min = swiper.minTranslate();
        const max = swiper.maxTranslate();
        const current = (max - min) * progress + min;
        swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const cls = swiper.el.className.split(' ').filter((className)=>{
            return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
        swiper.emit('_containerClasses', cls.join(' '));
    }
    getSlideClasses(slideEl) {
        const swiper = this;
        if (swiper.destroyed) return '';
        return slideEl.className.split(' ').filter((className)=>{
            return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(' ');
    }
    emitSlidesClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const updates = [];
        swiper.slides.forEach((slideEl)=>{
            const classNames = swiper.getSlideClasses(slideEl);
            updates.push({
                slideEl,
                classNames
            });
            swiper.emit('_slideClass', slideEl, classNames);
        });
        swiper.emit('_slideClasses', updates);
    }
    slidesPerViewDynamic(view = 'current', exact = false) {
        const swiper = this;
        const { params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex } = swiper;
        let spv = 1;
        if (typeof params.slidesPerView === 'number') return params.slidesPerView;
        if (params.centeredSlides) {
            let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
            let breakLoop;
            for(let i = activeIndex + 1; i < slides.length; i += 1){
                if (slides[i] && !breakLoop) {
                    slideSize += Math.ceil(slides[i].swiperSlideSize);
                    spv += 1;
                    if (slideSize > swiperSize) breakLoop = true;
                }
            }
            for(let i = activeIndex - 1; i >= 0; i -= 1){
                if (slides[i] && !breakLoop) {
                    slideSize += slides[i].swiperSlideSize;
                    spv += 1;
                    if (slideSize > swiperSize) breakLoop = true;
                }
            }
        } else {
            // eslint-disable-next-line
            if (view === 'current') {
                for(let i = activeIndex + 1; i < slides.length; i += 1){
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) {
                        spv += 1;
                    }
                }
            } else {
                // previous
                for(let i = activeIndex - 1; i >= 0; i -= 1){
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) {
                        spv += 1;
                    }
                }
            }
        }
        return spv;
    }
    update() {
        const swiper = this;
        if (!swiper || swiper.destroyed) return;
        const { snapGrid, params } = swiper;
        // Breakpoints
        if (params.breakpoints) {
            swiper.setBreakpoint();
        }
        [
            ...swiper.el.querySelectorAll('[loading="lazy"]')
        ].forEach((imageEl)=>{
            if (imageEl.complete) {
                processLazyPreloader(swiper, imageEl);
            }
        });
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        function setTranslate() {
            const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
            const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
            swiper.setTranslate(newTranslate);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        let translated;
        if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
            setTranslate();
            if (params.autoHeight) {
                swiper.updateAutoHeight();
            }
        } else {
            if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                translated = swiper.slideTo(slides.length - 1, 0, false, true);
            } else {
                translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
            }
            if (!translated) {
                setTranslate();
            }
        }
        if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
            swiper.checkOverflow();
        }
        swiper.emit('update');
    }
    changeDirection(newDirection, needUpdate = true) {
        const swiper = this;
        const currentDirection = swiper.params.direction;
        if (!newDirection) {
            // eslint-disable-next-line
            newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
        }
        if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
            return swiper;
        }
        swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
        swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.forEach((slideEl)=>{
            if (newDirection === 'vertical') {
                slideEl.style.width = '';
            } else {
                slideEl.style.height = '';
            }
        });
        swiper.emit('changeDirection');
        if (needUpdate) swiper.update();
        return swiper;
    }
    changeLanguageDirection(direction) {
        const swiper = this;
        if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
        swiper.rtl = direction === 'rtl';
        swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
        if (swiper.rtl) {
            swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
            swiper.el.dir = 'rtl';
        } else {
            swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
            swiper.el.dir = 'ltr';
        }
        swiper.update();
    }
    mount(element) {
        const swiper = this;
        if (swiper.mounted) return true;
        // Find el
        let el = element || swiper.params.el;
        if (typeof el === 'string') {
            el = document.querySelector(el);
        }
        if (!el) {
            return false;
        }
        el.swiper = swiper;
        if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
            swiper.isElement = true;
        }
        const getWrapperSelector = ()=>{
            return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
        };
        const getWrapper = ()=>{
            if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                const res = el.shadowRoot.querySelector(getWrapperSelector());
                // Children needs to return slot items
                return res;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(el, getWrapperSelector())[0];
        };
        // Find Wrapper
        let wrapperEl = getWrapper();
        if (!wrapperEl && swiper.params.createElements) {
            wrapperEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])('div', swiper.params.wrapperClass);
            el.append(wrapperEl);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(el, `.${swiper.params.slideClass}`).forEach((slideEl)=>{
                wrapperEl.append(slideEl);
            });
        }
        Object.assign(swiper, {
            el,
            wrapperEl,
            slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
            hostEl: swiper.isElement ? el.parentNode.host : el,
            mounted: true,
            // RTL
            rtl: el.dir.toLowerCase() === 'rtl' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["q"])(el, 'direction') === 'rtl',
            rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["q"])(el, 'direction') === 'rtl'),
            wrongRTL: (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["q"])(wrapperEl, 'display') === '-webkit-box'
        });
        return true;
    }
    init(el) {
        const swiper = this;
        if (swiper.initialized) return swiper;
        const mounted = swiper.mount(el);
        if (mounted === false) return swiper;
        swiper.emit('beforeInit');
        // Set breakpoint
        if (swiper.params.breakpoints) {
            swiper.setBreakpoint();
        }
        // Add Classes
        swiper.addClasses();
        // Update size
        swiper.updateSize();
        // Update slides
        swiper.updateSlides();
        if (swiper.params.watchOverflow) {
            swiper.checkOverflow();
        }
        // Set Grab Cursor
        if (swiper.params.grabCursor && swiper.enabled) {
            swiper.setGrabCursor();
        }
        // Slide To Initial Slide
        if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
            swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
        } else {
            swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
        }
        // Create loop
        if (swiper.params.loop) {
            swiper.loopCreate(undefined, true);
        }
        // Attach events
        swiper.attachEvents();
        const lazyElements = [
            ...swiper.el.querySelectorAll('[loading="lazy"]')
        ];
        if (swiper.isElement) {
            lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
        }
        lazyElements.forEach((imageEl)=>{
            if (imageEl.complete) {
                processLazyPreloader(swiper, imageEl);
            } else {
                imageEl.addEventListener('load', (e)=>{
                    processLazyPreloader(swiper, e.target);
                });
            }
        });
        preload(swiper);
        // Init Flag
        swiper.initialized = true;
        preload(swiper);
        // Emit
        swiper.emit('init');
        swiper.emit('afterInit');
        return swiper;
    }
    destroy(deleteInstance = true, cleanStyles = true) {
        const swiper = this;
        const { params, el, wrapperEl, slides } = swiper;
        if (typeof swiper.params === 'undefined' || swiper.destroyed) {
            return null;
        }
        swiper.emit('beforeDestroy');
        // Init Flag
        swiper.initialized = false;
        // Detach events
        swiper.detachEvents();
        // Destroy loop
        if (params.loop) {
            swiper.loopDestroy();
        }
        // Cleanup styles
        if (cleanStyles) {
            swiper.removeClasses();
            if (el && typeof el !== 'string') {
                el.removeAttribute('style');
            }
            if (wrapperEl) {
                wrapperEl.removeAttribute('style');
            }
            if (slides && slides.length) {
                slides.forEach((slideEl)=>{
                    slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                    slideEl.removeAttribute('style');
                    slideEl.removeAttribute('data-swiper-slide-index');
                });
            }
        }
        swiper.emit('destroy');
        // Detach emitter events
        Object.keys(swiper.eventsListeners).forEach((eventName)=>{
            swiper.off(eventName);
        });
        if (deleteInstance !== false) {
            if (swiper.el && typeof swiper.el !== 'string') {
                swiper.el.swiper = null;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"])(swiper);
        }
        swiper.destroyed = true;
        return null;
    }
    static extendDefaults(newDefaults) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["x"])(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
        return extendedDefaults;
    }
    static get defaults() {
        return defaults;
    }
    static installModule(mod) {
        if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
        const modules = Swiper.prototype.__modules__;
        if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
            modules.push(mod);
        }
    }
    static use(module) {
        if (Array.isArray(module)) {
            module.forEach((m)=>Swiper.installModule(m));
            return Swiper;
        }
        Swiper.installModule(module);
        return Swiper;
    }
}
Object.keys(prototypes).forEach((prototypeGroup)=>{
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod)=>{
        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
});
Swiper.use([
    Resize,
    Observer
]);
;
}),
"[project]/webthethao2.0/node_modules/swiper/shared/update-swiper.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>needsPagination,
    "b",
    ()=>needsScrollbar,
    "c",
    ()=>attrToProp,
    "d",
    ()=>uniqueClasses,
    "e",
    ()=>extend,
    "i",
    ()=>isObject,
    "n",
    ()=>needsNavigation,
    "p",
    ()=>paramsList,
    "u",
    ()=>updateSwiper,
    "w",
    ()=>wrapperClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
/* underscore in name -> watch for changes */ const paramsList = [
    'eventsPrefix',
    'injectStyles',
    'injectStylesUrls',
    'modules',
    'init',
    '_direction',
    'oneWayMovement',
    'swiperElementNodeName',
    'touchEventsTarget',
    'initialSlide',
    '_speed',
    'cssMode',
    'updateOnWindowResize',
    'resizeObserver',
    'nested',
    'focusableElements',
    '_enabled',
    '_width',
    '_height',
    'preventInteractionOnTransition',
    'userAgent',
    'url',
    '_edgeSwipeDetection',
    '_edgeSwipeThreshold',
    '_freeMode',
    '_autoHeight',
    'setWrapperSize',
    'virtualTranslate',
    '_effect',
    'breakpoints',
    'breakpointsBase',
    '_spaceBetween',
    '_slidesPerView',
    'maxBackfaceHiddenSlides',
    '_grid',
    '_slidesPerGroup',
    '_slidesPerGroupSkip',
    '_slidesPerGroupAuto',
    '_centeredSlides',
    '_centeredSlidesBounds',
    '_slidesOffsetBefore',
    '_slidesOffsetAfter',
    'normalizeSlideIndex',
    '_centerInsufficientSlides',
    '_watchOverflow',
    'roundLengths',
    'touchRatio',
    'touchAngle',
    'simulateTouch',
    '_shortSwipes',
    '_longSwipes',
    'longSwipesRatio',
    'longSwipesMs',
    '_followFinger',
    'allowTouchMove',
    '_threshold',
    'touchMoveStopPropagation',
    'touchStartPreventDefault',
    'touchStartForcePreventDefault',
    'touchReleaseOnEdges',
    'uniqueNavElements',
    '_resistance',
    '_resistanceRatio',
    '_watchSlidesProgress',
    '_grabCursor',
    'preventClicks',
    'preventClicksPropagation',
    '_slideToClickedSlide',
    '_loop',
    'loopAdditionalSlides',
    'loopAddBlankSlides',
    'loopPreventsSliding',
    '_rewind',
    '_allowSlidePrev',
    '_allowSlideNext',
    '_swipeHandler',
    '_noSwiping',
    'noSwipingClass',
    'noSwipingSelector',
    'passiveListeners',
    'containerModifierClass',
    'slideClass',
    'slideActiveClass',
    'slideVisibleClass',
    'slideFullyVisibleClass',
    'slideNextClass',
    'slidePrevClass',
    'slideBlankClass',
    'wrapperClass',
    'lazyPreloaderClass',
    'lazyPreloadPrevNext',
    'runCallbacksOnInit',
    'observer',
    'observeParents',
    'observeSlideChildren',
    // modules
    'a11y',
    '_autoplay',
    '_controller',
    'coverflowEffect',
    'cubeEffect',
    'fadeEffect',
    'flipEffect',
    'creativeEffect',
    'cardsEffect',
    'hashNavigation',
    'history',
    'keyboard',
    'mousewheel',
    '_navigation',
    '_pagination',
    'parallax',
    '_scrollbar',
    '_thumbs',
    'virtual',
    'zoom',
    'control'
];
function isObject(o) {
    return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object' && !o.__swiper__;
}
function extend(target, src) {
    const noExtend = [
        '__proto__',
        'constructor',
        'prototype'
    ];
    Object.keys(src).filter((key)=>noExtend.indexOf(key) < 0).forEach((key)=>{
        if (typeof target[key] === 'undefined') target[key] = src[key];
        else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
            if (src[key].__swiper__) target[key] = src[key];
            else extend(target[key], src[key]);
        } else {
            target[key] = src[key];
        }
    });
}
function needsNavigation(params = {}) {
    return params.navigation && typeof params.navigation.nextEl === 'undefined' && typeof params.navigation.prevEl === 'undefined';
}
function needsPagination(params = {}) {
    return params.pagination && typeof params.pagination.el === 'undefined';
}
function needsScrollbar(params = {}) {
    return params.scrollbar && typeof params.scrollbar.el === 'undefined';
}
function uniqueClasses(classNames = '') {
    const classes = classNames.split(' ').map((c)=>c.trim()).filter((c)=>!!c);
    const unique = [];
    classes.forEach((c)=>{
        if (unique.indexOf(c) < 0) unique.push(c);
    });
    return unique.join(' ');
}
function attrToProp(attrName = '') {
    return attrName.replace(/-[a-z]/g, (l)=>l.toUpperCase().replace('-', ''));
}
function wrapperClass(className = '') {
    if (!className) return 'swiper-wrapper';
    if (!className.includes('swiper-wrapper')) return `swiper-wrapper ${className}`;
    return className;
}
function updateSwiper({ swiper, slides, passedParams, changedParams, nextEl, prevEl, scrollbarEl, paginationEl }) {
    const updateParams = changedParams.filter((key)=>key !== 'children' && key !== 'direction' && key !== 'wrapperClass');
    const { params: currentParams, pagination, navigation, scrollbar, virtual, thumbs } = swiper;
    let needThumbsInit;
    let needControllerInit;
    let needPaginationInit;
    let needScrollbarInit;
    let needNavigationInit;
    let loopNeedDestroy;
    let loopNeedEnable;
    let loopNeedReloop;
    if (changedParams.includes('thumbs') && passedParams.thumbs && passedParams.thumbs.swiper && !passedParams.thumbs.swiper.destroyed && currentParams.thumbs && (!currentParams.thumbs.swiper || currentParams.thumbs.swiper.destroyed)) {
        needThumbsInit = true;
    }
    if (changedParams.includes('controller') && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control) {
        needControllerInit = true;
    }
    if (changedParams.includes('pagination') && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || currentParams.pagination === false) && pagination && !pagination.el) {
        needPaginationInit = true;
    }
    if (changedParams.includes('scrollbar') && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || currentParams.scrollbar === false) && scrollbar && !scrollbar.el) {
        needScrollbarInit = true;
    }
    if (changedParams.includes('navigation') && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || currentParams.navigation === false) && navigation && !navigation.prevEl && !navigation.nextEl) {
        needNavigationInit = true;
    }
    const destroyModule = (mod)=>{
        if (!swiper[mod]) return;
        swiper[mod].destroy();
        if (mod === 'navigation') {
            if (swiper.isElement) {
                swiper[mod].prevEl.remove();
                swiper[mod].nextEl.remove();
            }
            currentParams[mod].prevEl = undefined;
            currentParams[mod].nextEl = undefined;
            swiper[mod].prevEl = undefined;
            swiper[mod].nextEl = undefined;
        } else {
            if (swiper.isElement) {
                swiper[mod].el.remove();
            }
            currentParams[mod].el = undefined;
            swiper[mod].el = undefined;
        }
    };
    if (changedParams.includes('loop') && swiper.isElement) {
        if (currentParams.loop && !passedParams.loop) {
            loopNeedDestroy = true;
        } else if (!currentParams.loop && passedParams.loop) {
            loopNeedEnable = true;
        } else {
            loopNeedReloop = true;
        }
    }
    updateParams.forEach((key)=>{
        if (isObject(currentParams[key]) && isObject(passedParams[key])) {
            Object.assign(currentParams[key], passedParams[key]);
            if ((key === 'navigation' || key === 'pagination' || key === 'scrollbar') && 'enabled' in passedParams[key] && !passedParams[key].enabled) {
                destroyModule(key);
            }
        } else {
            const newValue = passedParams[key];
            if ((newValue === true || newValue === false) && (key === 'navigation' || key === 'pagination' || key === 'scrollbar')) {
                if (newValue === false) {
                    destroyModule(key);
                }
            } else {
                currentParams[key] = passedParams[key];
            }
        }
    });
    if (updateParams.includes('controller') && !needControllerInit && swiper.controller && swiper.controller.control && currentParams.controller && currentParams.controller.control) {
        swiper.controller.control = currentParams.controller.control;
    }
    if (changedParams.includes('children') && slides && virtual && currentParams.virtual.enabled) {
        virtual.slides = slides;
        virtual.update(true);
    } else if (changedParams.includes('virtual') && virtual && currentParams.virtual.enabled) {
        if (slides) virtual.slides = slides;
        virtual.update(true);
    }
    if (changedParams.includes('children') && slides && currentParams.loop) {
        loopNeedReloop = true;
    }
    if (needThumbsInit) {
        const initialized = thumbs.init();
        if (initialized) thumbs.update(true);
    }
    if (needControllerInit) {
        swiper.controller.control = currentParams.controller.control;
    }
    if (needPaginationInit) {
        if (swiper.isElement && (!paginationEl || typeof paginationEl === 'string')) {
            paginationEl = document.createElement('div');
            paginationEl.classList.add('swiper-pagination');
            paginationEl.part.add('pagination');
            swiper.el.appendChild(paginationEl);
        }
        if (paginationEl) currentParams.pagination.el = paginationEl;
        pagination.init();
        pagination.render();
        pagination.update();
    }
    if (needScrollbarInit) {
        if (swiper.isElement && (!scrollbarEl || typeof scrollbarEl === 'string')) {
            scrollbarEl = document.createElement('div');
            scrollbarEl.classList.add('swiper-scrollbar');
            scrollbarEl.part.add('scrollbar');
            swiper.el.appendChild(scrollbarEl);
        }
        if (scrollbarEl) currentParams.scrollbar.el = scrollbarEl;
        scrollbar.init();
        scrollbar.updateSize();
        scrollbar.setTranslate();
    }
    if (needNavigationInit) {
        if (swiper.isElement) {
            if (!nextEl || typeof nextEl === 'string') {
                nextEl = document.createElement('div');
                nextEl.classList.add('swiper-button-next');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(nextEl, swiper.navigation.arrowSvg);
                nextEl.part.add('button-next');
                swiper.el.appendChild(nextEl);
            }
            if (!prevEl || typeof prevEl === 'string') {
                prevEl = document.createElement('div');
                prevEl.classList.add('swiper-button-prev');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(prevEl, swiper.navigation.arrowSvg);
                prevEl.part.add('button-prev');
                swiper.el.appendChild(prevEl);
            }
        }
        if (nextEl) currentParams.navigation.nextEl = nextEl;
        if (prevEl) currentParams.navigation.prevEl = prevEl;
        navigation.init();
        navigation.update();
    }
    if (changedParams.includes('allowSlideNext')) {
        swiper.allowSlideNext = passedParams.allowSlideNext;
    }
    if (changedParams.includes('allowSlidePrev')) {
        swiper.allowSlidePrev = passedParams.allowSlidePrev;
    }
    if (changedParams.includes('direction')) {
        swiper.changeDirection(passedParams.direction, false);
    }
    if (loopNeedDestroy || loopNeedReloop) {
        swiper.loopDestroy();
    }
    if (loopNeedEnable || loopNeedReloop) {
        swiper.loopCreate();
    }
    swiper.update();
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/shared/update-on-virtual-data.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>getChangedParams,
    "g",
    ()=>getParams,
    "m",
    ()=>mountSwiper,
    "u",
    ()=>updateOnVirtualData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/update-swiper.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$swiper$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/swiper-core.mjs [app-ssr] (ecmascript)");
;
;
function getParams(obj = {}, splitEvents = true) {
    const params = {
        on: {}
    };
    const events = {};
    const passedParams = {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(params, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$swiper$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"]);
    params._emitClasses = true;
    params.init = false;
    const rest = {};
    const allowedParams = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"].map((key)=>key.replace(/_/, ''));
    const plainObj = Object.assign({}, obj);
    Object.keys(plainObj).forEach((key)=>{
        if (typeof obj[key] === 'undefined') return;
        if (allowedParams.indexOf(key) >= 0) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(obj[key])) {
                params[key] = {};
                passedParams[key] = {};
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(params[key], obj[key]);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(passedParams[key], obj[key]);
            } else {
                params[key] = obj[key];
                passedParams[key] = obj[key];
            }
        } else if (key.search(/on[A-Z]/) === 0 && typeof obj[key] === 'function') {
            if (splitEvents) {
                events[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
            } else {
                params.on[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
            }
        } else {
            rest[key] = obj[key];
        }
    });
    [
        'navigation',
        'pagination',
        'scrollbar'
    ].forEach((key)=>{
        if (params[key] === true) params[key] = {};
        if (params[key] === false) delete params[key];
    });
    return {
        params,
        passedParams,
        rest,
        events
    };
}
function mountSwiper({ el, nextEl, prevEl, paginationEl, scrollbarEl, swiper }, swiperParams) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(swiperParams) && nextEl && prevEl) {
        swiper.params.navigation.nextEl = nextEl;
        swiper.originalParams.navigation.nextEl = nextEl;
        swiper.params.navigation.prevEl = prevEl;
        swiper.originalParams.navigation.prevEl = prevEl;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(swiperParams) && paginationEl) {
        swiper.params.pagination.el = paginationEl;
        swiper.originalParams.pagination.el = paginationEl;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(swiperParams) && scrollbarEl) {
        swiper.params.scrollbar.el = scrollbarEl;
        swiper.originalParams.scrollbar.el = scrollbarEl;
    }
    swiper.init(el);
}
function getChangedParams(swiperParams, oldParams, children, oldChildren, getKey) {
    const keys = [];
    if (!oldParams) return keys;
    const addKey = (key)=>{
        if (keys.indexOf(key) < 0) keys.push(key);
    };
    if (children && oldChildren) {
        const oldChildrenKeys = oldChildren.map(getKey);
        const childrenKeys = children.map(getKey);
        if (oldChildrenKeys.join('') !== childrenKeys.join('')) addKey('children');
        if (oldChildren.length !== children.length) addKey('children');
    }
    const watchParams = __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"].filter((key)=>key[0] === '_').map((key)=>key.replace(/_/, ''));
    watchParams.forEach((key)=>{
        if (key in swiperParams && key in oldParams) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(swiperParams[key]) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(oldParams[key])) {
                const newKeys = Object.keys(swiperParams[key]);
                const oldKeys = Object.keys(oldParams[key]);
                if (newKeys.length !== oldKeys.length) {
                    addKey(key);
                } else {
                    newKeys.forEach((newKey)=>{
                        if (swiperParams[key][newKey] !== oldParams[key][newKey]) {
                            addKey(key);
                        }
                    });
                    oldKeys.forEach((oldKey)=>{
                        if (swiperParams[key][oldKey] !== oldParams[key][oldKey]) addKey(key);
                    });
                }
            } else if (swiperParams[key] !== oldParams[key]) {
                addKey(key);
            }
        }
    });
    return keys;
}
const updateOnVirtualData = (swiper)=>{
    if (!swiper || swiper.destroyed || !swiper.params.virtual || swiper.params.virtual && !swiper.params.virtual.enabled) return;
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    swiper.emit('_virtualUpdated');
    if (swiper.parallax && swiper.params.parallax && swiper.params.parallax.enabled) {
        swiper.parallax.setTranslate();
    }
};
;
}),
"[project]/webthethao2.0/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Swiper React 12.0.3
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2025 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 21, 2025
 */ __turbopack_context__.s([
    "Swiper",
    ()=>Swiper,
    "SwiperSlide",
    ()=>SwiperSlide,
    "useSwiper",
    ()=>useSwiper,
    "useSwiperSlide",
    ()=>useSwiperSlide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$swiper$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/swiper-core.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$on$2d$virtual$2d$data$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/update-on-virtual-data.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/update-swiper.mjs [app-ssr] (ecmascript)");
;
;
;
;
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
function isChildSwiperSlide(child) {
    return child.type && child.type.displayName && child.type.displayName.includes('SwiperSlide');
}
function processChildren(c) {
    const slides = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.toArray(c).forEach((child)=>{
        if (isChildSwiperSlide(child)) {
            slides.push(child);
        } else if (child.props && child.props.children) {
            processChildren(child.props.children).forEach((slide)=>slides.push(slide));
        }
    });
    return slides;
}
function getChildren(c) {
    const slides = [];
    const slots = {
        'container-start': [],
        'container-end': [],
        'wrapper-start': [],
        'wrapper-end': []
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.toArray(c).forEach((child)=>{
        if (isChildSwiperSlide(child)) {
            slides.push(child);
        } else if (child.props && child.props.slot && slots[child.props.slot]) {
            slots[child.props.slot].push(child);
        } else if (child.props && child.props.children) {
            const foundSlides = processChildren(child.props.children);
            if (foundSlides.length > 0) {
                foundSlides.forEach((slide)=>slides.push(slide));
            } else {
                slots['container-end'].push(child);
            }
        } else {
            slots['container-end'].push(child);
        }
    });
    return {
        slides,
        slots
    };
}
function renderVirtual(swiper, slides, virtualData) {
    if (!virtualData) return null;
    const getSlideIndex = (index)=>{
        let slideIndex = index;
        if (index < 0) {
            slideIndex = slides.length + index;
        } else if (slideIndex >= slides.length) {
            // eslint-disable-next-line
            slideIndex = slideIndex - slides.length;
        }
        return slideIndex;
    };
    const style = swiper.isHorizontal() ? {
        [swiper.rtlTranslate ? 'right' : 'left']: `${virtualData.offset}px`
    } : {
        top: `${virtualData.offset}px`
    };
    const { from, to } = virtualData;
    const loopFrom = swiper.params.loop ? -slides.length : 0;
    const loopTo = swiper.params.loop ? slides.length * 2 : slides.length;
    const slidesToRender = [];
    for(let i = loopFrom; i < loopTo; i += 1){
        if (i >= from && i <= to) {
            slidesToRender.push(slides[getSlideIndex(i)]);
        }
    }
    return slidesToRender.map((child, index)=>{
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(child, {
            swiper,
            style,
            key: child.props.virtualIndex || child.key || `slide-${index}`
        });
    });
}
function useIsomorphicLayoutEffect(callback, deps) {
    // eslint-disable-next-line
    if ("TURBOPACK compile-time truthy", 1) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(callback, deps);
    //TURBOPACK unreachable
    ;
}
const SwiperSlideContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const useSwiperSlide = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SwiperSlideContext);
};
const SwiperContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const useSwiper = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SwiperContext);
};
const Swiper = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, tag: Tag = 'div', wrapperTag: WrapperTag = 'div', children, onSwiper, ...rest } = {}, externalElRef)=>{
    let eventsAssigned = false;
    const [containerClasses, setContainerClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('swiper');
    const [virtualData, setVirtualData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [breakpointChanged, setBreakpointChanged] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const initializedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const swiperElRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const swiperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const oldPassedParamsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const oldSlides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nextElRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prevElRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const paginationElRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollbarElRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { params: swiperParams, passedParams, rest: restProps, events } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$on$2d$virtual$2d$data$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(rest);
    const { slides, slots } = getChildren(children);
    const onBeforeBreakpoint = ()=>{
        setBreakpointChanged(!breakpointChanged);
    };
    Object.assign(swiperParams.on, {
        _containerClasses (swiper, classes) {
            setContainerClasses(classes);
        }
    });
    const initSwiper = ()=>{
        // init swiper
        Object.assign(swiperParams.on, events);
        eventsAssigned = true;
        const passParams = {
            ...swiperParams
        };
        delete passParams.wrapperClass;
        swiperRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$swiper$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["S"](passParams);
        if (swiperRef.current.virtual && swiperRef.current.params.virtual.enabled) {
            swiperRef.current.virtual.slides = slides;
            const extendWith = {
                cache: false,
                slides,
                renderExternal: setVirtualData,
                renderExternalUpdate: false
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(swiperRef.current.params.virtual, extendWith);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(swiperRef.current.originalParams.virtual, extendWith);
        }
    };
    if (!swiperElRef.current) {
        initSwiper();
    }
    // Listen for breakpoints change
    if (swiperRef.current) {
        swiperRef.current.on('_beforeBreakpoint', onBeforeBreakpoint);
    }
    const attachEvents = ()=>{
        if (eventsAssigned || !events || !swiperRef.current) return;
        Object.keys(events).forEach((eventName)=>{
            swiperRef.current.on(eventName, events[eventName]);
        });
    };
    const detachEvents = ()=>{
        if (!events || !swiperRef.current) return;
        Object.keys(events).forEach((eventName)=>{
            swiperRef.current.off(eventName, events[eventName]);
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (swiperRef.current) swiperRef.current.off('_beforeBreakpoint', onBeforeBreakpoint);
        };
    });
    // set initialized flag
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!initializedRef.current && swiperRef.current) {
            swiperRef.current.emitSlidesClasses();
            initializedRef.current = true;
        }
    });
    // mount swiper
    useIsomorphicLayoutEffect(()=>{
        if (externalElRef) {
            externalElRef.current = swiperElRef.current;
        }
        if (!swiperElRef.current) return;
        if (swiperRef.current.destroyed) {
            initSwiper();
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$on$2d$virtual$2d$data$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])({
            el: swiperElRef.current,
            nextEl: nextElRef.current,
            prevEl: prevElRef.current,
            paginationEl: paginationElRef.current,
            scrollbarEl: scrollbarElRef.current,
            swiper: swiperRef.current
        }, swiperParams);
        if (onSwiper && !swiperRef.current.destroyed) onSwiper(swiperRef.current);
        // eslint-disable-next-line
        return ()=>{
            if (swiperRef.current && !swiperRef.current.destroyed) {
                swiperRef.current.destroy(true, false);
            }
        };
    }, []);
    // watch for params change
    useIsomorphicLayoutEffect(()=>{
        attachEvents();
        const changedParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$on$2d$virtual$2d$data$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(passedParams, oldPassedParamsRef.current, slides, oldSlides.current, (c)=>c.key);
        oldPassedParamsRef.current = passedParams;
        oldSlides.current = slides;
        if (changedParams.length && swiperRef.current && !swiperRef.current.destroyed) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])({
                swiper: swiperRef.current,
                slides,
                passedParams,
                changedParams,
                nextEl: nextElRef.current,
                prevEl: prevElRef.current,
                scrollbarEl: scrollbarElRef.current,
                paginationEl: paginationElRef.current
            });
        }
        return ()=>{
            detachEvents();
        };
    });
    // update on virtual update
    useIsomorphicLayoutEffect(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$on$2d$virtual$2d$data$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(swiperRef.current);
    }, [
        virtualData
    ]);
    // bypass swiper instance to slides
    function renderSlides() {
        if (swiperParams.virtual) {
            return renderVirtual(swiperRef.current, slides, virtualData);
        }
        return slides.map((child, index)=>{
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(child, {
                swiper: swiperRef.current,
                swiperSlideIndex: index
            });
        });
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Tag, _extends({
        ref: swiperElRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(`${containerClasses}${className ? ` ${className}` : ''}`)
    }, restProps), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(SwiperContext.Provider, {
        value: swiperRef.current
    }, slots['container-start'], /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(WrapperTag, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["w"])(swiperParams.wrapperClass)
    }, slots['wrapper-start'], renderSlides(), slots['wrapper-end']), (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(swiperParams) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: prevElRef,
        className: "swiper-button-prev"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: nextElRef,
        className: "swiper-button-next"
    })), (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(swiperParams) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: scrollbarElRef,
        className: "swiper-scrollbar"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(swiperParams) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: paginationElRef,
        className: "swiper-pagination"
    }), slots['container-end']));
});
Swiper.displayName = 'Swiper';
const SwiperSlide = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ tag: Tag = 'div', children, className = '', swiper, zoom, lazy, virtualIndex, swiperSlideIndex, ...rest } = {}, externalRef)=>{
    const slideElRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [slideClasses, setSlideClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('swiper-slide');
    const [lazyLoaded, setLazyLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    function updateClasses(_s, el, classNames) {
        if (el === slideElRef.current) {
            setSlideClasses(classNames);
        }
    }
    useIsomorphicLayoutEffect(()=>{
        if (typeof swiperSlideIndex !== 'undefined') {
            slideElRef.current.swiperSlideIndex = swiperSlideIndex;
        }
        if (externalRef) {
            externalRef.current = slideElRef.current;
        }
        if (!slideElRef.current || !swiper) {
            return;
        }
        if (swiper.destroyed) {
            if (slideClasses !== 'swiper-slide') {
                setSlideClasses('swiper-slide');
            }
            return;
        }
        swiper.on('_slideClass', updateClasses);
        // eslint-disable-next-line
        return ()=>{
            if (!swiper) return;
            swiper.off('_slideClass', updateClasses);
        };
    });
    useIsomorphicLayoutEffect(()=>{
        if (swiper && slideElRef.current && !swiper.destroyed) {
            setSlideClasses(swiper.getSlideClasses(slideElRef.current));
        }
    }, [
        swiper
    ]);
    const slideData = {
        isActive: slideClasses.indexOf('swiper-slide-active') >= 0,
        isVisible: slideClasses.indexOf('swiper-slide-visible') >= 0,
        isPrev: slideClasses.indexOf('swiper-slide-prev') >= 0,
        isNext: slideClasses.indexOf('swiper-slide-next') >= 0
    };
    const renderChildren = ()=>{
        return typeof children === 'function' ? children(slideData) : children;
    };
    const onLoad = ()=>{
        setLazyLoaded(true);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Tag, _extends({
        ref: slideElRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$update$2d$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(`${slideClasses}${className ? ` ${className}` : ''}`),
        "data-swiper-slide-index": virtualIndex,
        onLoad: onLoad
    }, rest), zoom && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(SwiperSlideContext.Provider, {
        value: slideData
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "swiper-zoom-container",
        "data-swiper-zoom": typeof zoom === 'number' ? zoom : undefined
    }, renderChildren(), lazy && !lazyLoaded && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "swiper-lazy-preloader"
    }))), !zoom && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(SwiperSlideContext.Provider, {
        value: slideData
    }, renderChildren(), lazy && !lazyLoaded && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "swiper-lazy-preloader"
    })));
});
SwiperSlide.displayName = 'SwiperSlide';
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/virtual.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Virtual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/ssr-window.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
;
function Virtual({ swiper, extendParams, on, emit }) {
    extendParams({
        virtual: {
            enabled: false,
            slides: [],
            cache: true,
            slidesPerViewAutoSlideSize: 320,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: true,
            addSlidesBefore: 0,
            addSlidesAfter: 0
        }
    });
    let cssModeTimeout;
    const document = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])();
    swiper.virtual = {
        cache: {},
        from: undefined,
        to: undefined,
        slides: [],
        offset: 0,
        slidesGrid: []
    };
    const tempDOM = document.createElement('div');
    function renderSlide(slide, index) {
        const params = swiper.params.virtual;
        if (params.cache && swiper.virtual.cache[index]) {
            return swiper.virtual.cache[index];
        }
        // eslint-disable-next-line
        let slideEl;
        if (params.renderSlide) {
            slideEl = params.renderSlide.call(swiper, slide, index);
            if (typeof slideEl === 'string') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(tempDOM, slideEl);
                slideEl = tempDOM.children[0];
            }
        } else if (swiper.isElement) {
            slideEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])('swiper-slide');
        } else {
            slideEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])('div', swiper.params.slideClass);
        }
        slideEl.setAttribute('data-swiper-slide-index', index);
        if (!params.renderSlide) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(slideEl, slide);
        }
        if (params.cache) {
            swiper.virtual.cache[index] = slideEl;
        }
        return slideEl;
    }
    function update(force, beforeInit, forceActiveIndex) {
        const { slidesPerGroup, centeredSlides, slidesPerView, loop: isLoop, initialSlide } = swiper.params;
        if (beforeInit && !isLoop && initialSlide > 0) {
            return;
        }
        const { addSlidesBefore, addSlidesAfter, slidesPerViewAutoSlideSize } = swiper.params.virtual;
        const { from: previousFrom, to: previousTo, slides, slidesGrid: previousSlidesGrid, offset: previousOffset } = swiper.virtual;
        if (!swiper.params.cssMode) {
            swiper.updateActiveIndex();
        }
        const activeIndex = typeof forceActiveIndex === 'undefined' ? swiper.activeIndex || 0 : forceActiveIndex;
        let offsetProp;
        if (swiper.rtlTranslate) offsetProp = 'right';
        else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
        let slidesPerViewNumeric;
        if (slidesPerView === 'auto') {
            if (slidesPerViewAutoSlideSize) {
                let swiperSize = swiper.size;
                if (!swiperSize) {
                    swiperSize = swiper.isHorizontal() ? swiper.el.getBoundingClientRect().width : swiper.el.getBoundingClientRect().height;
                }
                slidesPerViewNumeric = Math.max(1, Math.ceil(swiperSize / slidesPerViewAutoSlideSize));
            } else {
                slidesPerViewNumeric = 1;
            }
        } else {
            slidesPerViewNumeric = slidesPerView;
        }
        let slidesAfter;
        let slidesBefore;
        if (centeredSlides) {
            slidesAfter = Math.floor(slidesPerViewNumeric / 2) + slidesPerGroup + addSlidesAfter;
            slidesBefore = Math.floor(slidesPerViewNumeric / 2) + slidesPerGroup + addSlidesBefore;
        } else {
            slidesAfter = slidesPerViewNumeric + (slidesPerGroup - 1) + addSlidesAfter;
            slidesBefore = (isLoop ? slidesPerViewNumeric : slidesPerGroup) + addSlidesBefore;
        }
        let from = activeIndex - slidesBefore;
        let to = activeIndex + slidesAfter;
        if (!isLoop) {
            from = Math.max(from, 0);
            to = Math.min(to, slides.length - 1);
        }
        let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
        if (isLoop && activeIndex >= slidesBefore) {
            from -= slidesBefore;
            if (!centeredSlides) offset += swiper.slidesGrid[0];
        } else if (isLoop && activeIndex < slidesBefore) {
            from = -slidesBefore;
            if (centeredSlides) offset += swiper.slidesGrid[0];
        }
        Object.assign(swiper.virtual, {
            from,
            to,
            offset,
            slidesGrid: swiper.slidesGrid,
            slidesBefore,
            slidesAfter
        });
        function onRendered() {
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();
            emit('virtualUpdate');
        }
        if (previousFrom === from && previousTo === to && !force) {
            if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
                swiper.slides.forEach((slideEl)=>{
                    slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
                });
            }
            swiper.updateProgress();
            emit('virtualUpdate');
            return;
        }
        if (swiper.params.virtual.renderExternal) {
            swiper.params.virtual.renderExternal.call(swiper, {
                offset,
                from,
                to,
                slides: function getSlides() {
                    const slidesToRender = [];
                    for(let i = from; i <= to; i += 1){
                        slidesToRender.push(slides[i]);
                    }
                    return slidesToRender;
                }()
            });
            if (swiper.params.virtual.renderExternalUpdate) {
                onRendered();
            } else {
                emit('virtualUpdate');
            }
            return;
        }
        const prependIndexes = [];
        const appendIndexes = [];
        const getSlideIndex = (index)=>{
            let slideIndex = index;
            if (index < 0) {
                slideIndex = slides.length + index;
            } else if (slideIndex >= slides.length) {
                // eslint-disable-next-line
                slideIndex = slideIndex - slides.length;
            }
            return slideIndex;
        };
        if (force) {
            swiper.slides.filter((el)=>el.matches(`.${swiper.params.slideClass}, swiper-slide`)).forEach((slideEl)=>{
                slideEl.remove();
            });
        } else {
            for(let i = previousFrom; i <= previousTo; i += 1){
                if (i < from || i > to) {
                    const slideIndex = getSlideIndex(i);
                    swiper.slides.filter((el)=>el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`)).forEach((slideEl)=>{
                        slideEl.remove();
                    });
                }
            }
        }
        const loopFrom = isLoop ? -slides.length : 0;
        const loopTo = isLoop ? slides.length * 2 : slides.length;
        for(let i = loopFrom; i < loopTo; i += 1){
            if (i >= from && i <= to) {
                const slideIndex = getSlideIndex(i);
                if (typeof previousTo === 'undefined' || force) {
                    appendIndexes.push(slideIndex);
                } else {
                    if (i > previousTo) appendIndexes.push(slideIndex);
                    if (i < previousFrom) prependIndexes.push(slideIndex);
                }
            }
        }
        appendIndexes.forEach((index)=>{
            swiper.slidesEl.append(renderSlide(slides[index], index));
        });
        if (isLoop) {
            for(let i = prependIndexes.length - 1; i >= 0; i -= 1){
                const index = prependIndexes[i];
                swiper.slidesEl.prepend(renderSlide(slides[index], index));
            }
        } else {
            prependIndexes.sort((a, b)=>b - a);
            prependIndexes.forEach((index)=>{
                swiper.slidesEl.prepend(renderSlide(slides[index], index));
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(swiper.slidesEl, '.swiper-slide, swiper-slide').forEach((slideEl)=>{
            slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
        });
        onRendered();
    }
    function appendSlide(slides) {
        if (typeof slides === 'object' && 'length' in slides) {
            for(let i = 0; i < slides.length; i += 1){
                if (slides[i]) swiper.virtual.slides.push(slides[i]);
            }
        } else {
            swiper.virtual.slides.push(slides);
        }
        update(true);
    }
    function prependSlide(slides) {
        const activeIndex = swiper.activeIndex;
        let newActiveIndex = activeIndex + 1;
        let numberOfNewSlides = 1;
        if (Array.isArray(slides)) {
            for(let i = 0; i < slides.length; i += 1){
                if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
            }
            newActiveIndex = activeIndex + slides.length;
            numberOfNewSlides = slides.length;
        } else {
            swiper.virtual.slides.unshift(slides);
        }
        if (swiper.params.virtual.cache) {
            const cache = swiper.virtual.cache;
            const newCache = {};
            Object.keys(cache).forEach((cachedIndex)=>{
                const cachedEl = cache[cachedIndex];
                const cachedElIndex = cachedEl.getAttribute('data-swiper-slide-index');
                if (cachedElIndex) {
                    cachedEl.setAttribute('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
                }
                newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
            });
            swiper.virtual.cache = newCache;
        }
        update(true);
        swiper.slideTo(newActiveIndex, 0);
    }
    function removeSlide(slidesIndexes) {
        if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
        let activeIndex = swiper.activeIndex;
        if (Array.isArray(slidesIndexes)) {
            for(let i = slidesIndexes.length - 1; i >= 0; i -= 1){
                if (swiper.params.virtual.cache) {
                    delete swiper.virtual.cache[slidesIndexes[i]];
                    // shift cache indexes
                    Object.keys(swiper.virtual.cache).forEach((key)=>{
                        if (key > slidesIndexes) {
                            swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
                            swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
                            delete swiper.virtual.cache[key];
                        }
                    });
                }
                swiper.virtual.slides.splice(slidesIndexes[i], 1);
                if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
                activeIndex = Math.max(activeIndex, 0);
            }
        } else {
            if (swiper.params.virtual.cache) {
                delete swiper.virtual.cache[slidesIndexes];
                // shift cache indexes
                Object.keys(swiper.virtual.cache).forEach((key)=>{
                    if (key > slidesIndexes) {
                        swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
                        swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
                        delete swiper.virtual.cache[key];
                    }
                });
            }
            swiper.virtual.slides.splice(slidesIndexes, 1);
            if (slidesIndexes < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
        }
        update(true);
        swiper.slideTo(activeIndex, 0);
    }
    function removeAllSlides() {
        swiper.virtual.slides = [];
        if (swiper.params.virtual.cache) {
            swiper.virtual.cache = {};
        }
        update(true);
        swiper.slideTo(0, 0);
    }
    on('beforeInit', ()=>{
        if (!swiper.params.virtual.enabled) return;
        let domSlidesAssigned;
        if (typeof swiper.passedParams.virtual.slides === 'undefined') {
            const slides = [
                ...swiper.slidesEl.children
            ].filter((el)=>el.matches(`.${swiper.params.slideClass}, swiper-slide`));
            if (slides && slides.length) {
                swiper.virtual.slides = [
                    ...slides
                ];
                domSlidesAssigned = true;
                slides.forEach((slideEl, slideIndex)=>{
                    slideEl.setAttribute('data-swiper-slide-index', slideIndex);
                    swiper.virtual.cache[slideIndex] = slideEl;
                    slideEl.remove();
                });
            }
        }
        if (!domSlidesAssigned) {
            swiper.virtual.slides = swiper.params.virtual.slides;
        }
        swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
        update(false, true);
    });
    on('setTranslate', ()=>{
        if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode && !swiper._immediateVirtual) {
            clearTimeout(cssModeTimeout);
            cssModeTimeout = setTimeout(()=>{
                update();
            }, 100);
        } else {
            update();
        }
    });
    on('init update resize', ()=>{
        if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
        }
    });
    Object.assign(swiper.virtual, {
        appendSlide,
        prependSlide,
        removeSlide,
        removeAllSlides,
        update
    });
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/keyboard.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Keyboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/ssr-window.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
;
/* eslint-disable consistent-return */ function Keyboard({ swiper, extendParams, on, emit }) {
    const document = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])();
    const window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
    swiper.keyboard = {
        enabled: false
    };
    extendParams({
        keyboard: {
            enabled: false,
            onlyInViewport: true,
            pageUpDown: true
        }
    });
    function handle(event) {
        if (!swiper.enabled) return;
        const { rtlTranslate: rtl } = swiper;
        let e = event;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        const kc = e.keyCode || e.charCode;
        const pageUpDown = swiper.params.keyboard.pageUpDown;
        const isPageUp = pageUpDown && kc === 33;
        const isPageDown = pageUpDown && kc === 34;
        const isArrowLeft = kc === 37;
        const isArrowRight = kc === 39;
        const isArrowUp = kc === 38;
        const isArrowDown = kc === 40;
        // Directions locks
        if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
            return false;
        }
        if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
            return false;
        }
        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
            return undefined;
        }
        if (document.activeElement && (document.activeElement.isContentEditable || document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea'))) {
            return undefined;
        }
        if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
            let inView = false;
            // Check that swiper should be inside of visible area of window
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
                return undefined;
            }
            const el = swiper.el;
            const swiperWidth = el.clientWidth;
            const swiperHeight = el.clientHeight;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const swiperOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])(el);
            if (rtl) swiperOffset.left -= el.scrollLeft;
            const swiperCoord = [
                [
                    swiperOffset.left,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left + swiperWidth,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left,
                    swiperOffset.top + swiperHeight
                ],
                [
                    swiperOffset.left + swiperWidth,
                    swiperOffset.top + swiperHeight
                ]
            ];
            for(let i = 0; i < swiperCoord.length; i += 1){
                const point = swiperCoord[i];
                if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                    if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                    inView = true;
                }
            }
            if (!inView) return undefined;
        }
        if (swiper.isHorizontal()) {
            if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
            if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
        } else {
            if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if (isPageDown || isArrowDown) swiper.slideNext();
            if (isPageUp || isArrowUp) swiper.slidePrev();
        }
        emit('keyPress', kc);
        return undefined;
    }
    function enable() {
        if (swiper.keyboard.enabled) return;
        document.addEventListener('keydown', handle);
        swiper.keyboard.enabled = true;
    }
    function disable() {
        if (!swiper.keyboard.enabled) return;
        document.removeEventListener('keydown', handle);
        swiper.keyboard.enabled = false;
    }
    on('init', ()=>{
        if (swiper.params.keyboard.enabled) {
            enable();
        }
    });
    on('destroy', ()=>{
        if (swiper.keyboard.enabled) {
            disable();
        }
    });
    Object.assign(swiper.keyboard, {
        enable,
        disable
    });
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/mousewheel.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Mousewheel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/ssr-window.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
;
/* eslint-disable consistent-return */ function Mousewheel({ swiper, extendParams, on, emit }) {
    const window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
    extendParams({
        mousewheel: {
            enabled: false,
            releaseOnEdges: false,
            invert: false,
            forceToAxis: false,
            sensitivity: 1,
            eventsTarget: 'container',
            thresholdDelta: null,
            thresholdTime: null,
            noMousewheelClass: 'swiper-no-mousewheel'
        }
    });
    swiper.mousewheel = {
        enabled: false
    };
    let timeout;
    let lastScrollTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])();
    let lastEventBeforeSnap;
    const recentWheelEvents = [];
    function normalize(e) {
        // Reasonable defaults
        const PIXEL_STEP = 10;
        const LINE_HEIGHT = 40;
        const PAGE_HEIGHT = 800;
        let sX = 0;
        let sY = 0; // spinX, spinY
        let pX = 0;
        let pY = 0; // pixelX, pixelY
        // Legacy
        if ('detail' in e) {
            sY = e.detail;
        }
        if ('wheelDelta' in e) {
            sY = -e.wheelDelta / 120;
        }
        if ('wheelDeltaY' in e) {
            sY = -e.wheelDeltaY / 120;
        }
        if ('wheelDeltaX' in e) {
            sX = -e.wheelDeltaX / 120;
        }
        // side scrolling on FF with DOMMouseScroll
        if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
            sX = sY;
            sY = 0;
        }
        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;
        if ('deltaY' in e) {
            pY = e.deltaY;
        }
        if ('deltaX' in e) {
            pX = e.deltaX;
        }
        if (e.shiftKey && !pX) {
            // if user scrolls with shift he wants horizontal scroll
            pX = pY;
            pY = 0;
        }
        if ((pX || pY) && e.deltaMode) {
            if (e.deltaMode === 1) {
                // delta in LINE units
                pX *= LINE_HEIGHT;
                pY *= LINE_HEIGHT;
            } else {
                // delta in PAGE units
                pX *= PAGE_HEIGHT;
                pY *= PAGE_HEIGHT;
            }
        }
        // Fall-back if spin cannot be determined
        if (pX && !sX) {
            sX = pX < 1 ? -1 : 1;
        }
        if (pY && !sY) {
            sY = pY < 1 ? -1 : 1;
        }
        return {
            spinX: sX,
            spinY: sY,
            pixelX: pX,
            pixelY: pY
        };
    }
    function handleMouseEnter() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = true;
    }
    function handleMouseLeave() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = false;
    }
    function animateSlider(newEvent) {
        if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
            // Prevent if delta of wheel scroll delta is below configured threshold
            return false;
        }
        if (swiper.params.mousewheel.thresholdTime && (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
            // Prevent if time between scrolls is below configured threshold
            return false;
        }
        // If the movement is NOT big enough and
        // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
        //   Don't go any further (avoid insignificant scroll movement).
        if (newEvent.delta >= 6 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])() - lastScrollTime < 60) {
            // Return false as a default
            return true;
        }
        // If user is scrolling towards the end:
        //   If the slider hasn't hit the latest slide or
        //   if the slider is a loop and
        //   if the slider isn't moving right now:
        //     Go to next slide and
        //     emit a scroll event.
        // Else (the user is scrolling towards the beginning) and
        // if the slider hasn't hit the first slide or
        // if the slider is a loop and
        // if the slider isn't moving right now:
        //   Go to prev slide and
        //   emit a scroll event.
        if (newEvent.direction < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                swiper.slideNext();
                emit('scroll', newEvent.raw);
            }
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
            swiper.slidePrev();
            emit('scroll', newEvent.raw);
        }
        // If you got here is because an animation has been triggered so store the current time
        lastScrollTime = new window.Date().getTime();
        // Return false as a default
        return false;
    }
    function releaseScroll(newEvent) {
        const params = swiper.params.mousewheel;
        if (newEvent.direction < 0) {
            if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
                // Return true to animate scroll on edges
                return true;
            }
        } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
            // Return true to animate scroll on edges
            return true;
        }
        return false;
    }
    function handle(event1) {
        let e = event1;
        let disableParentSwiper = true;
        if (!swiper.enabled) return;
        // Ignore event if the target or its parents have the swiper-no-mousewheel class
        if (event1.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
        const params = swiper.params.mousewheel;
        if (swiper.params.cssMode) {
            e.preventDefault();
        }
        let targetEl = swiper.el;
        if (swiper.params.mousewheel.eventsTarget !== 'container') {
            targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
        }
        const targetElContainsTarget = targetEl && targetEl.contains(e.target);
        if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        let delta = 0;
        const rtlFactor = swiper.rtlTranslate ? -1 : 1;
        const data = normalize(e);
        if (params.forceToAxis) {
            if (swiper.isHorizontal()) {
                if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
                else return true;
            } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
            else return true;
        } else {
            delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        }
        if (delta === 0) return true;
        if (params.invert) delta = -delta;
        // Get the scroll positions
        let positions = swiper.getTranslate() + delta * params.sensitivity;
        if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
        if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();
        // When loop is true:
        //     the disableParentSwiper will be true.
        // When loop is false:
        //     if the scroll positions is not on edge,
        //     then the disableParentSwiper will be true.
        //     if the scroll on edge positions,
        //     then the disableParentSwiper will be false.
        disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
        if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
        if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
            // Register the new event in a variable which stores the relevant data
            const newEvent = {
                time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(),
                delta: Math.abs(delta),
                direction: Math.sign(delta),
                raw: event1
            };
            // Keep the most recent events
            if (recentWheelEvents.length >= 2) {
                recentWheelEvents.shift(); // only store the last N events
            }
            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
            recentWheelEvents.push(newEvent);
            // If there is at least one previous recorded event:
            //   If direction has changed or
            //   if the scroll is quicker than the previous one:
            //     Animate the slider.
            // Else (this is the first time the wheel is moved):
            //     Animate the slider.
            if (prevEvent) {
                if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
                    animateSlider(newEvent);
                }
            } else {
                animateSlider(newEvent);
            }
            // If it's time to release the scroll:
            //   Return now so you don't hit the preventDefault.
            if (releaseScroll(newEvent)) {
                return true;
            }
        } else {
            // Freemode or scrollContainer:
            // If we recently snapped after a momentum scroll, then ignore wheel events
            // to give time for the deceleration to finish. Stop ignoring after 500 msecs
            // or if it's a new scroll (larger delta or inverse sign as last event before
            // an end-of-momentum snap).
            const newEvent = {
                time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(),
                delta: Math.abs(delta),
                direction: Math.sign(delta)
            };
            const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
            if (!ignoreWheelEvents) {
                lastEventBeforeSnap = undefined;
                let position = swiper.getTranslate() + delta * params.sensitivity;
                const wasBeginning = swiper.isBeginning;
                const wasEnd = swiper.isEnd;
                if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                swiper.setTransition(0);
                swiper.setTranslate(position);
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
                if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
                    swiper.updateSlidesClasses();
                }
                if (swiper.params.loop) {
                    swiper.loopFix({
                        direction: newEvent.direction < 0 ? 'next' : 'prev',
                        byMousewheel: true
                    });
                }
                if (swiper.params.freeMode.sticky) {
                    // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                    // the end of a momentum scroll by storing recent (N=15?) wheel events.
                    // 1. do all N events have decreasing or same (absolute value) delta?
                    // 2. did all N events arrive in the last M (M=500?) msecs?
                    // 3. does the earliest event have an (absolute value) delta that's
                    //    at least P (P=1?) larger than the most recent event's delta?
                    // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                    // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
                    // Snap immediately and ignore remaining wheel events in this scroll.
                    // See comment above for "remaining wheel events in this scroll" determination.
                    // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                    clearTimeout(timeout);
                    timeout = undefined;
                    if (recentWheelEvents.length >= 15) {
                        recentWheelEvents.shift(); // only store the last N events
                    }
                    const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                    const firstEvent = recentWheelEvents[0];
                    recentWheelEvents.push(newEvent);
                    if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
                        // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                        recentWheelEvents.splice(0);
                    } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                        // We're at the end of the deceleration of a momentum scroll, so there's no need
                        // to wait for more events. Snap ASAP on the next tick.
                        // Also, because there's some remaining momentum we'll bias the snap in the
                        // direction of the ongoing scroll because it's better UX for the scroll to snap
                        // in the same direction as the scroll instead of reversing to snap.  Therefore,
                        // if it's already scrolled more than 20% in the current direction, keep going.
                        const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                        lastEventBeforeSnap = newEvent;
                        recentWheelEvents.splice(0);
                        timeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(()=>{
                            if (swiper.destroyed || !swiper.params) return;
                            swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                        }, 0); // no delay; move on next tick
                    }
                    if (!timeout) {
                        // if we get here, then we haven't detected the end of a momentum scroll, so
                        // we'll consider a scroll "complete" when there haven't been any wheel events
                        // for 500ms.
                        timeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(()=>{
                            if (swiper.destroyed || !swiper.params) return;
                            const snapToThreshold = 0.5;
                            lastEventBeforeSnap = newEvent;
                            recentWheelEvents.splice(0);
                            swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                        }, 500);
                    }
                }
                // Emit event
                if (!ignoreWheelEvents) emit('scroll', e);
                // Stop autoplay
                if (swiper.params.autoplay && swiper.params.autoplay.disableOnInteraction) swiper.autoplay.stop();
                // Return page scroll on edge positions
                if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
                    return true;
                }
            }
        }
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        return false;
    }
    function events(method) {
        let targetEl = swiper.el;
        if (swiper.params.mousewheel.eventsTarget !== 'container') {
            targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
        }
        targetEl[method]('mouseenter', handleMouseEnter);
        targetEl[method]('mouseleave', handleMouseLeave);
        targetEl[method]('wheel', handle);
    }
    function enable() {
        if (swiper.params.cssMode) {
            swiper.wrapperEl.removeEventListener('wheel', handle);
            return true;
        }
        if (swiper.mousewheel.enabled) return false;
        events('addEventListener');
        swiper.mousewheel.enabled = true;
        return true;
    }
    function disable() {
        if (swiper.params.cssMode) {
            swiper.wrapperEl.addEventListener(event, handle);
            return true;
        }
        if (!swiper.mousewheel.enabled) return false;
        events('removeEventListener');
        swiper.mousewheel.enabled = false;
        return true;
    }
    on('init', ()=>{
        if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
            disable();
        }
        if (swiper.params.mousewheel.enabled) enable();
    });
    on('destroy', ()=>{
        if (swiper.params.cssMode) {
            enable();
        }
        if (swiper.mousewheel.enabled) disable();
    });
    Object.assign(swiper.mousewheel, {
        enable,
        disable
    });
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/shared/create-element-if-not-defined.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "c",
    ()=>createElementIfNotDefined
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    if (swiper.params.createElements) {
        Object.keys(checkProps).forEach((key)=>{
            if (!params[key] && params.auto === true) {
                let element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(swiper.el, `.${checkProps[key]}`)[0];
                if (!element) {
                    element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])('div', checkProps[key]);
                    element.className = checkProps[key];
                    swiper.el.append(element);
                }
                params[key] = element;
                originalParams[key] = element;
            }
        });
    }
    return params;
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/navigation.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$create$2d$element$2d$if$2d$not$2d$defined$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/create-element-if-not-defined.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
;
const arrowSvg = `<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>`;
function Navigation({ swiper, extendParams, on, emit }) {
    extendParams({
        navigation: {
            nextEl: null,
            prevEl: null,
            addIcons: true,
            hideOnClick: false,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock',
            navigationDisabledClass: 'swiper-navigation-disabled'
        }
    });
    swiper.navigation = {
        nextEl: null,
        prevEl: null,
        arrowSvg
    };
    function getEl(el) {
        let res;
        if (el && typeof el === 'string' && swiper.isElement) {
            res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
            if (res) return res;
        }
        if (el) {
            if (typeof el === 'string') res = [
                ...document.querySelectorAll(el)
            ];
            if (swiper.params.uniqueNavElements && typeof el === 'string' && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
                res = swiper.el.querySelector(el);
            } else if (res && res.length === 1) {
                res = res[0];
            }
        }
        if (el && !res) return el;
        // if (Array.isArray(res) && res.length === 1) res = res[0];
        return res;
    }
    function toggleEl(el, disabled) {
        const params = swiper.params.navigation;
        el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(el);
        el.forEach((subEl)=>{
            if (subEl) {
                subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' '));
                if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;
                if (swiper.params.watchOverflow && swiper.enabled) {
                    subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
                }
            }
        });
    }
    function update() {
        // Update Navigation Buttons
        const { nextEl, prevEl } = swiper.navigation;
        if (swiper.params.loop) {
            toggleEl(prevEl, false);
            toggleEl(nextEl, false);
            return;
        }
        toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
        toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e) {
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slidePrev();
        emit('navigationPrev');
    }
    function onNextClick(e) {
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slideNext();
        emit('navigationNext');
    }
    function init() {
        const params = swiper.params.navigation;
        swiper.params.navigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$create$2d$element$2d$if$2d$not$2d$defined$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
            nextEl: 'swiper-button-next',
            prevEl: 'swiper-button-prev'
        });
        if (!(params.nextEl || params.prevEl)) return;
        let nextEl = getEl(params.nextEl);
        let prevEl = getEl(params.prevEl);
        Object.assign(swiper.navigation, {
            nextEl,
            prevEl
        });
        nextEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(nextEl);
        prevEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(prevEl);
        const initButton = (el, dir)=>{
            if (el) {
                if (params.addIcons && el.matches('.swiper-button-next,.swiper-button-prev') && !el.querySelector('svg')) {
                    const tempEl = document.createElement('div');
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(tempEl, arrowSvg);
                    el.appendChild(tempEl.querySelector('svg'));
                    tempEl.remove();
                }
                el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
            }
            if (!swiper.enabled && el) {
                el.classList.add(...params.lockClass.split(' '));
            }
        };
        nextEl.forEach((el)=>initButton(el, 'next'));
        prevEl.forEach((el)=>initButton(el, 'prev'));
    }
    function destroy() {
        let { nextEl, prevEl } = swiper.navigation;
        nextEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(nextEl);
        prevEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(prevEl);
        const destroyButton = (el, dir)=>{
            el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
            el.classList.remove(...swiper.params.navigation.disabledClass.split(' '));
        };
        nextEl.forEach((el)=>destroyButton(el, 'next'));
        prevEl.forEach((el)=>destroyButton(el, 'prev'));
    }
    on('init', ()=>{
        if (swiper.params.navigation.enabled === false) {
            // eslint-disable-next-line
            disable();
        } else {
            init();
            update();
        }
    });
    on('toEdge fromEdge lock unlock', ()=>{
        update();
    });
    on('destroy', ()=>{
        destroy();
    });
    on('enable disable', ()=>{
        let { nextEl, prevEl } = swiper.navigation;
        nextEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(nextEl);
        prevEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(prevEl);
        if (swiper.enabled) {
            update();
            return;
        }
        [
            ...nextEl,
            ...prevEl
        ].filter((el)=>!!el).forEach((el)=>el.classList.add(swiper.params.navigation.lockClass));
    });
    on('click', (_s, e)=>{
        let { nextEl, prevEl } = swiper.navigation;
        nextEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(nextEl);
        prevEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(prevEl);
        const targetEl = e.target;
        let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
        if (swiper.isElement && !targetIsButton) {
            const path = e.path || e.composedPath && e.composedPath();
            if (path) {
                targetIsButton = path.find((pathEl)=>nextEl.includes(pathEl) || prevEl.includes(pathEl));
            }
        }
        if (swiper.params.navigation.hideOnClick && !targetIsButton) {
            if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
            let isHidden;
            if (nextEl.length) {
                isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
            } else if (prevEl.length) {
                isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
            }
            if (isHidden === true) {
                emit('navigationShow');
            } else {
                emit('navigationHide');
            }
            [
                ...nextEl,
                ...prevEl
            ].filter((el)=>!!el).forEach((el)=>el.classList.toggle(swiper.params.navigation.hiddenClass));
        }
    });
    const enable = ()=>{
        swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(' '));
        init();
        update();
    };
    const disable = ()=>{
        swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(' '));
        destroy();
    };
    Object.assign(swiper.navigation, {
        enable,
        disable,
        update,
        init,
        destroy
    });
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/shared/classes-to-selector.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "c",
    ()=>classesToSelector
]);
function classesToSelector(classes = '') {
    return `.${classes.trim().replace(/([\.:!+\/()[\]])/g, '\\$1') // eslint-disable-line
    .replace(/ /g, '.')}`;
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/pagination.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Pagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$classes$2d$to$2d$selector$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/classes-to-selector.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$create$2d$element$2d$if$2d$not$2d$defined$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/create-element-if-not-defined.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
;
;
function Pagination({ swiper, extendParams, on, emit }) {
    const pfx = 'swiper-pagination';
    extendParams({
        pagination: {
            el: null,
            bulletElement: 'span',
            clickable: false,
            hideOnClick: false,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: false,
            type: 'bullets',
            // 'bullets' or 'progressbar' or 'fraction' or 'custom'
            dynamicBullets: false,
            dynamicMainBullets: 1,
            formatFractionCurrent: (number)=>number,
            formatFractionTotal: (number)=>number,
            bulletClass: `${pfx}-bullet`,
            bulletActiveClass: `${pfx}-bullet-active`,
            modifierClass: `${pfx}-`,
            currentClass: `${pfx}-current`,
            totalClass: `${pfx}-total`,
            hiddenClass: `${pfx}-hidden`,
            progressbarFillClass: `${pfx}-progressbar-fill`,
            progressbarOppositeClass: `${pfx}-progressbar-opposite`,
            clickableClass: `${pfx}-clickable`,
            lockClass: `${pfx}-lock`,
            horizontalClass: `${pfx}-horizontal`,
            verticalClass: `${pfx}-vertical`,
            paginationDisabledClass: `${pfx}-disabled`
        }
    });
    swiper.pagination = {
        el: null,
        bullets: []
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    function isPaginationDisabled() {
        return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
    }
    function setSideBullets(bulletEl, position) {
        const { bulletActiveClass } = swiper.params.pagination;
        if (!bulletEl) return;
        bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
        if (bulletEl) {
            bulletEl.classList.add(`${bulletActiveClass}-${position}`);
            bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
            if (bulletEl) {
                bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
            }
        }
    }
    function getMoveDirection(prevIndex, nextIndex, length) {
        prevIndex = prevIndex % length;
        nextIndex = nextIndex % length;
        if (nextIndex === prevIndex + 1) {
            return 'next';
        } else if (nextIndex === prevIndex - 1) {
            return 'previous';
        }
        return;
    }
    function onBulletClick(e) {
        const bulletEl = e.target.closest((0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$classes$2d$to$2d$selector$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(swiper.params.pagination.bulletClass));
        if (!bulletEl) {
            return;
        }
        e.preventDefault();
        const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])(bulletEl) * swiper.params.slidesPerGroup;
        if (swiper.params.loop) {
            if (swiper.realIndex === index) return;
            const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
            if (moveDirection === 'next') {
                swiper.slideNext();
            } else if (moveDirection === 'previous') {
                swiper.slidePrev();
            } else {
                swiper.slideToLoop(index);
            }
        } else {
            swiper.slideTo(index);
        }
    }
    function update() {
        // Render || Update Pagination bullets/items
        const rtl = swiper.rtl;
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        let el = swiper.pagination.el;
        el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(el);
        // Current/Total
        let current;
        let previousIndex;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.loop) {
            previousIndex = swiper.previousRealIndex || 0;
            current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
        } else if (typeof swiper.snapIndex !== 'undefined') {
            current = swiper.snapIndex;
            previousIndex = swiper.previousSnapIndex;
        } else {
            previousIndex = swiper.previousIndex || 0;
            current = swiper.activeIndex || 0;
        }
        // Types
        if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
            const bullets = swiper.pagination.bullets;
            let firstIndex;
            let lastIndex;
            let midIndex;
            if (params.dynamicBullets) {
                bulletSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);
                el.forEach((subEl)=>{
                    subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                });
                if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
                    dynamicBulletIndex += current - (previousIndex || 0);
                    if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
                        dynamicBulletIndex = params.dynamicMainBullets - 1;
                    } else if (dynamicBulletIndex < 0) {
                        dynamicBulletIndex = 0;
                    }
                }
                firstIndex = Math.max(current - dynamicBulletIndex, 0);
                lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                midIndex = (lastIndex + firstIndex) / 2;
            }
            bullets.forEach((bulletEl)=>{
                const classesToRemove = [
                    ...[
                        '',
                        '-next',
                        '-next-next',
                        '-prev',
                        '-prev-prev',
                        '-main'
                    ].map((suffix)=>`${params.bulletActiveClass}${suffix}`)
                ].map((s)=>typeof s === 'string' && s.includes(' ') ? s.split(' ') : s).flat();
                bulletEl.classList.remove(...classesToRemove);
            });
            if (el.length > 1) {
                bullets.forEach((bullet)=>{
                    const bulletIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])(bullet);
                    if (bulletIndex === current) {
                        bullet.classList.add(...params.bulletActiveClass.split(' '));
                    } else if (swiper.isElement) {
                        bullet.setAttribute('part', 'bullet');
                    }
                    if (params.dynamicBullets) {
                        if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                            bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));
                        }
                        if (bulletIndex === firstIndex) {
                            setSideBullets(bullet, 'prev');
                        }
                        if (bulletIndex === lastIndex) {
                            setSideBullets(bullet, 'next');
                        }
                    }
                });
            } else {
                const bullet = bullets[current];
                if (bullet) {
                    bullet.classList.add(...params.bulletActiveClass.split(' '));
                }
                if (swiper.isElement) {
                    bullets.forEach((bulletEl, bulletIndex)=>{
                        bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
                    });
                }
                if (params.dynamicBullets) {
                    const firstDisplayedBullet = bullets[firstIndex];
                    const lastDisplayedBullet = bullets[lastIndex];
                    for(let i = firstIndex; i <= lastIndex; i += 1){
                        if (bullets[i]) {
                            bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
                        }
                    }
                    setSideBullets(firstDisplayedBullet, 'prev');
                    setSideBullets(lastDisplayedBullet, 'next');
                }
            }
            if (params.dynamicBullets) {
                const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                const offsetProp = rtl ? 'right' : 'left';
                bullets.forEach((bullet)=>{
                    bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;
                });
            }
        }
        el.forEach((subEl, subElIndex)=>{
            if (params.type === 'fraction') {
                subEl.querySelectorAll((0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$classes$2d$to$2d$selector$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(params.currentClass)).forEach((fractionEl)=>{
                    fractionEl.textContent = params.formatFractionCurrent(current + 1);
                });
                subEl.querySelectorAll((0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$classes$2d$to$2d$selector$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(params.totalClass)).forEach((totalEl)=>{
                    totalEl.textContent = params.formatFractionTotal(total);
                });
            }
            if (params.type === 'progressbar') {
                let progressbarDirection;
                if (params.progressbarOpposite) {
                    progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
                } else {
                    progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
                }
                const scale = (current + 1) / total;
                let scaleX = 1;
                let scaleY = 1;
                if (progressbarDirection === 'horizontal') {
                    scaleX = scale;
                } else {
                    scaleY = scale;
                }
                subEl.querySelectorAll((0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$classes$2d$to$2d$selector$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(params.progressbarFillClass)).forEach((progressEl)=>{
                    progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                    progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                });
            }
            if (params.type === 'custom' && params.renderCustom) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(subEl, params.renderCustom(swiper, current + 1, total));
                if (subElIndex === 0) emit('paginationRender', subEl);
            } else {
                if (subElIndex === 0) emit('paginationRender', subEl);
                emit('paginationUpdate', subEl);
            }
            if (swiper.params.watchOverflow && swiper.enabled) {
                subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
            }
        });
    }
    function render() {
        // Render Container
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
        let el = swiper.pagination.el;
        el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(el);
        let paginationHTML = '';
        if (params.type === 'bullets') {
            let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
                numberOfBullets = slidesLength;
            }
            for(let i = 0; i < numberOfBullets; i += 1){
                if (params.renderBullet) {
                    paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
                } else {
                    // prettier-ignore
                    paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
                }
            }
        }
        if (params.type === 'fraction') {
            if (params.renderFraction) {
                paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
            } else {
                paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
            }
        }
        if (params.type === 'progressbar') {
            if (params.renderProgressbar) {
                paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
            } else {
                paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
            }
        }
        swiper.pagination.bullets = [];
        el.forEach((subEl)=>{
            if (params.type !== 'custom') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(subEl, paginationHTML || '');
            }
            if (params.type === 'bullets') {
                swiper.pagination.bullets.push(...subEl.querySelectorAll((0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$classes$2d$to$2d$selector$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(params.bulletClass)));
            }
        });
        if (params.type !== 'custom') {
            emit('paginationRender', el[0]);
        }
    }
    function init() {
        swiper.params.pagination = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$create$2d$element$2d$if$2d$not$2d$defined$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
            el: 'swiper-pagination'
        });
        const params = swiper.params.pagination;
        if (!params.el) return;
        let el;
        if (typeof params.el === 'string' && swiper.isElement) {
            el = swiper.el.querySelector(params.el);
        }
        if (!el && typeof params.el === 'string') {
            el = [
                ...document.querySelectorAll(params.el)
            ];
        }
        if (!el) {
            el = params.el;
        }
        if (!el || el.length === 0) return;
        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
            el = [
                ...swiper.el.querySelectorAll(params.el)
            ];
            // check if it belongs to another nested Swiper
            if (el.length > 1) {
                el = el.find((subEl)=>{
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(subEl, '.swiper')[0] !== swiper.el) return false;
                    return true;
                });
            }
        }
        if (Array.isArray(el) && el.length === 1) el = el[0];
        Object.assign(swiper.pagination, {
            el
        });
        el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(el);
        el.forEach((subEl)=>{
            if (params.type === 'bullets' && params.clickable) {
                subEl.classList.add(...(params.clickableClass || '').split(' '));
            }
            subEl.classList.add(params.modifierClass + params.type);
            subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
            if (params.type === 'bullets' && params.dynamicBullets) {
                subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                dynamicBulletIndex = 0;
                if (params.dynamicMainBullets < 1) {
                    params.dynamicMainBullets = 1;
                }
            }
            if (params.type === 'progressbar' && params.progressbarOpposite) {
                subEl.classList.add(params.progressbarOppositeClass);
            }
            if (params.clickable) {
                subEl.addEventListener('click', onBulletClick);
            }
            if (!swiper.enabled) {
                subEl.classList.add(params.lockClass);
            }
        });
    }
    function destroy() {
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        let el = swiper.pagination.el;
        if (el) {
            el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(el);
            el.forEach((subEl)=>{
                subEl.classList.remove(params.hiddenClass);
                subEl.classList.remove(params.modifierClass + params.type);
                subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if (params.clickable) {
                    subEl.classList.remove(...(params.clickableClass || '').split(' '));
                    subEl.removeEventListener('click', onBulletClick);
                }
            });
        }
        if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl)=>subEl.classList.remove(...params.bulletActiveClass.split(' ')));
    }
    on('changeDirection', ()=>{
        if (!swiper.pagination || !swiper.pagination.el) return;
        const params = swiper.params.pagination;
        let { el } = swiper.pagination;
        el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(el);
        el.forEach((subEl)=>{
            subEl.classList.remove(params.horizontalClass, params.verticalClass);
            subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        });
    });
    on('init', ()=>{
        if (swiper.params.pagination.enabled === false) {
            // eslint-disable-next-line
            disable();
        } else {
            init();
            render();
            update();
        }
    });
    on('activeIndexChange', ()=>{
        if (typeof swiper.snapIndex === 'undefined') {
            update();
        }
    });
    on('snapIndexChange', ()=>{
        update();
    });
    on('snapGridLengthChange', ()=>{
        render();
        update();
    });
    on('destroy', ()=>{
        destroy();
    });
    on('enable disable', ()=>{
        let { el } = swiper.pagination;
        if (el) {
            el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(el);
            el.forEach((subEl)=>subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass));
        }
    });
    on('lock unlock', ()=>{
        update();
    });
    on('click', (_s, e)=>{
        const targetEl = e.target;
        const el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(swiper.pagination.el);
        if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
            if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
            const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
            if (isHidden === true) {
                emit('paginationShow');
            } else {
                emit('paginationHide');
            }
            el.forEach((subEl)=>subEl.classList.toggle(swiper.params.pagination.hiddenClass));
        }
    });
    const enable = ()=>{
        swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
        let { el } = swiper.pagination;
        if (el) {
            el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(el);
            el.forEach((subEl)=>subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
        }
        init();
        render();
        update();
    };
    const disable = ()=>{
        swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
        let { el } = swiper.pagination;
        if (el) {
            el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(el);
            el.forEach((subEl)=>subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
        }
        destroy();
    };
    Object.assign(swiper.pagination, {
        enable,
        disable,
        render,
        update,
        init,
        destroy
    });
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/scrollbar.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Scrollbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/ssr-window.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$create$2d$element$2d$if$2d$not$2d$defined$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/create-element-if-not-defined.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$classes$2d$to$2d$selector$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/classes-to-selector.mjs [app-ssr] (ecmascript)");
;
;
;
;
function Scrollbar({ swiper, extendParams, on, emit }) {
    const document = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])();
    let isTouched = false;
    let timeout = null;
    let dragTimeout = null;
    let dragStartPos;
    let dragSize;
    let trackSize;
    let divider;
    extendParams({
        scrollbar: {
            el: null,
            dragSize: 'auto',
            hide: false,
            draggable: false,
            snapOnRelease: true,
            lockClass: 'swiper-scrollbar-lock',
            dragClass: 'swiper-scrollbar-drag',
            scrollbarDisabledClass: 'swiper-scrollbar-disabled',
            horizontalClass: `swiper-scrollbar-horizontal`,
            verticalClass: `swiper-scrollbar-vertical`
        }
    });
    swiper.scrollbar = {
        el: null,
        dragEl: null
    };
    function setTranslate() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const { scrollbar, rtlTranslate: rtl } = swiper;
        const { dragEl, el } = scrollbar;
        const params = swiper.params.scrollbar;
        const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
        let newSize = dragSize;
        let newPos = (trackSize - dragSize) * progress;
        if (rtl) {
            newPos = -newPos;
            if (newPos > 0) {
                newSize = dragSize - newPos;
                newPos = 0;
            } else if (-newPos + dragSize > trackSize) {
                newSize = trackSize + newPos;
            }
        } else if (newPos < 0) {
            newSize = dragSize + newPos;
            newPos = 0;
        } else if (newPos + dragSize > trackSize) {
            newSize = trackSize - newPos;
        }
        if (swiper.isHorizontal()) {
            dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
            dragEl.style.width = `${newSize}px`;
        } else {
            dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
            dragEl.style.height = `${newSize}px`;
        }
        if (params.hide) {
            clearTimeout(timeout);
            el.style.opacity = 1;
            timeout = setTimeout(()=>{
                el.style.opacity = 0;
                el.style.transitionDuration = '400ms';
            }, 1000);
        }
    }
    function setTransition(duration) {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
    }
    function updateSize() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const { scrollbar } = swiper;
        const { dragEl, el } = scrollbar;
        dragEl.style.width = '';
        dragEl.style.height = '';
        trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
        divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
        if (swiper.params.scrollbar.dragSize === 'auto') {
            dragSize = trackSize * divider;
        } else {
            dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
        }
        if (swiper.isHorizontal()) {
            dragEl.style.width = `${dragSize}px`;
        } else {
            dragEl.style.height = `${dragSize}px`;
        }
        if (divider >= 1) {
            el.style.display = 'none';
        } else {
            el.style.display = '';
        }
        if (swiper.params.scrollbar.hide) {
            el.style.opacity = 0;
        }
        if (swiper.params.watchOverflow && swiper.enabled) {
            scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](swiper.params.scrollbar.lockClass);
        }
    }
    function getPointerPosition(e) {
        return swiper.isHorizontal() ? e.clientX : e.clientY;
    }
    function setDragPosition(e) {
        const { scrollbar, rtlTranslate: rtl } = swiper;
        const { el } = scrollbar;
        let positionRatio;
        positionRatio = (getPointerPosition(e) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])(el)[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
        positionRatio = Math.max(Math.min(positionRatio, 1), 0);
        if (rtl) {
            positionRatio = 1 - positionRatio;
        }
        const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
        swiper.updateProgress(position);
        swiper.setTranslate(position);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    function onDragStart(e) {
        const params = swiper.params.scrollbar;
        const { scrollbar, wrapperEl } = swiper;
        const { el, dragEl } = scrollbar;
        isTouched = true;
        dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
        e.preventDefault();
        e.stopPropagation();
        wrapperEl.style.transitionDuration = '100ms';
        dragEl.style.transitionDuration = '100ms';
        setDragPosition(e);
        clearTimeout(dragTimeout);
        el.style.transitionDuration = '0ms';
        if (params.hide) {
            el.style.opacity = 1;
        }
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style['scroll-snap-type'] = 'none';
        }
        emit('scrollbarDragStart', e);
    }
    function onDragMove(e) {
        const { scrollbar, wrapperEl } = swiper;
        const { el, dragEl } = scrollbar;
        if (!isTouched) return;
        if (e.preventDefault && e.cancelable) e.preventDefault();
        else e.returnValue = false;
        setDragPosition(e);
        wrapperEl.style.transitionDuration = '0ms';
        el.style.transitionDuration = '0ms';
        dragEl.style.transitionDuration = '0ms';
        emit('scrollbarDragMove', e);
    }
    function onDragEnd(e) {
        const params = swiper.params.scrollbar;
        const { scrollbar, wrapperEl } = swiper;
        const { el } = scrollbar;
        if (!isTouched) return;
        isTouched = false;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style['scroll-snap-type'] = '';
            wrapperEl.style.transitionDuration = '';
        }
        if (params.hide) {
            clearTimeout(dragTimeout);
            dragTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(()=>{
                el.style.opacity = 0;
                el.style.transitionDuration = '400ms';
            }, 1000);
        }
        emit('scrollbarDragEnd', e);
        if (params.snapOnRelease) {
            swiper.slideToClosest();
        }
    }
    function events(method) {
        const { scrollbar, params } = swiper;
        const el = scrollbar.el;
        if (!el) return;
        const target = el;
        const activeListener = params.passiveListeners ? {
            passive: false,
            capture: false
        } : false;
        const passiveListener = params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        if (!target) return;
        const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
        target[eventMethod]('pointerdown', onDragStart, activeListener);
        document[eventMethod]('pointermove', onDragMove, activeListener);
        document[eventMethod]('pointerup', onDragEnd, passiveListener);
    }
    function enableDraggable() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        events('on');
    }
    function disableDraggable() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        events('off');
    }
    function init() {
        const { scrollbar, el: swiperEl } = swiper;
        swiper.params.scrollbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$create$2d$element$2d$if$2d$not$2d$defined$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
            el: 'swiper-scrollbar'
        });
        const params = swiper.params.scrollbar;
        if (!params.el) return;
        let el;
        if (typeof params.el === 'string' && swiper.isElement) {
            el = swiper.el.querySelector(params.el);
        }
        if (!el && typeof params.el === 'string') {
            el = document.querySelectorAll(params.el);
            if (!el.length) return;
        } else if (!el) {
            el = params.el;
        }
        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
            el = swiperEl.querySelector(params.el);
        }
        if (el.length > 0) el = el[0];
        el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        let dragEl;
        if (el) {
            dragEl = el.querySelector((0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$classes$2d$to$2d$selector$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(swiper.params.scrollbar.dragClass));
            if (!dragEl) {
                dragEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])('div', swiper.params.scrollbar.dragClass);
                el.append(dragEl);
            }
        }
        Object.assign(scrollbar, {
            el,
            dragEl
        });
        if (params.draggable) {
            enableDraggable();
        }
        if (el) {
            el.classList[swiper.enabled ? 'remove' : 'add'](...(0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["k"])(swiper.params.scrollbar.lockClass));
        }
    }
    function destroy() {
        const params = swiper.params.scrollbar;
        const el = swiper.scrollbar.el;
        if (el) {
            el.classList.remove(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["k"])(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));
        }
        disableDraggable();
    }
    on('changeDirection', ()=>{
        if (!swiper.scrollbar || !swiper.scrollbar.el) return;
        const params = swiper.params.scrollbar;
        let { el } = swiper.scrollbar;
        el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(el);
        el.forEach((subEl)=>{
            subEl.classList.remove(params.horizontalClass, params.verticalClass);
            subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        });
    });
    on('init', ()=>{
        if (swiper.params.scrollbar.enabled === false) {
            // eslint-disable-next-line
            disable();
        } else {
            init();
            updateSize();
            setTranslate();
        }
    });
    on('update resize observerUpdate lock unlock changeDirection', ()=>{
        updateSize();
    });
    on('setTranslate', ()=>{
        setTranslate();
    });
    on('setTransition', (_s, duration)=>{
        setTransition(duration);
    });
    on('enable disable', ()=>{
        const { el } = swiper.scrollbar;
        if (el) {
            el.classList[swiper.enabled ? 'remove' : 'add'](...(0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["k"])(swiper.params.scrollbar.lockClass));
        }
    });
    on('destroy', ()=>{
        destroy();
    });
    const enable = ()=>{
        swiper.el.classList.remove(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["k"])(swiper.params.scrollbar.scrollbarDisabledClass));
        if (swiper.scrollbar.el) {
            swiper.scrollbar.el.classList.remove(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["k"])(swiper.params.scrollbar.scrollbarDisabledClass));
        }
        init();
        updateSize();
        setTranslate();
    };
    const disable = ()=>{
        swiper.el.classList.add(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["k"])(swiper.params.scrollbar.scrollbarDisabledClass));
        if (swiper.scrollbar.el) {
            swiper.scrollbar.el.classList.add(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["k"])(swiper.params.scrollbar.scrollbarDisabledClass));
        }
        destroy();
    };
    Object.assign(swiper.scrollbar, {
        enable,
        disable,
        updateSize,
        setTranslate,
        init,
        destroy
    });
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/parallax.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Parallax
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
function Parallax({ swiper, extendParams, on }) {
    extendParams({
        parallax: {
            enabled: false
        }
    });
    const elementsSelector = '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]';
    const setTransform = (el, progress)=>{
        const { rtl } = swiper;
        const rtlFactor = rtl ? -1 : 1;
        const p = el.getAttribute('data-swiper-parallax') || '0';
        let x = el.getAttribute('data-swiper-parallax-x');
        let y = el.getAttribute('data-swiper-parallax-y');
        const scale = el.getAttribute('data-swiper-parallax-scale');
        const opacity = el.getAttribute('data-swiper-parallax-opacity');
        const rotate = el.getAttribute('data-swiper-parallax-rotate');
        if (x || y) {
            x = x || '0';
            y = y || '0';
        } else if (swiper.isHorizontal()) {
            x = p;
            y = '0';
        } else {
            y = p;
            x = '0';
        }
        if (x.indexOf('%') >= 0) {
            x = `${parseInt(x, 10) * progress * rtlFactor}%`;
        } else {
            x = `${x * progress * rtlFactor}px`;
        }
        if (y.indexOf('%') >= 0) {
            y = `${parseInt(y, 10) * progress}%`;
        } else {
            y = `${y * progress}px`;
        }
        if (typeof opacity !== 'undefined' && opacity !== null) {
            const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
            el.style.opacity = currentOpacity;
        }
        let transform = `translate3d(${x}, ${y}, 0px)`;
        if (typeof scale !== 'undefined' && scale !== null) {
            const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
            transform += ` scale(${currentScale})`;
        }
        if (rotate && typeof rotate !== 'undefined' && rotate !== null) {
            const currentRotate = rotate * progress * -1;
            transform += ` rotate(${currentRotate}deg)`;
        }
        el.style.transform = transform;
    };
    const setTranslate = ()=>{
        const { el, slides, progress, snapGrid, isElement } = swiper;
        const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(el, elementsSelector);
        if (swiper.isElement) {
            elements.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(swiper.hostEl, elementsSelector));
        }
        elements.forEach((subEl)=>{
            setTransform(subEl, progress);
        });
        slides.forEach((slideEl, slideIndex)=>{
            let slideProgress = slideEl.progress;
            if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
                slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
            }
            slideProgress = Math.min(Math.max(slideProgress, -1), 1);
            slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach((subEl)=>{
                setTransform(subEl, slideProgress);
            });
        });
    };
    const setTransition = (duration = swiper.params.speed)=>{
        const { el, hostEl } = swiper;
        const elements = [
            ...el.querySelectorAll(elementsSelector)
        ];
        if (swiper.isElement) {
            elements.push(...hostEl.querySelectorAll(elementsSelector));
        }
        elements.forEach((parallaxEl)=>{
            let parallaxDuration = parseInt(parallaxEl.getAttribute('data-swiper-parallax-duration'), 10) || duration;
            if (duration === 0) parallaxDuration = 0;
            parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
        });
    };
    on('beforeInit', ()=>{
        if (!swiper.params.parallax.enabled) return;
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
    });
    on('init', ()=>{
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
    });
    on('setTranslate', ()=>{
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
    });
    on('setTransition', (_swiper, duration)=>{
        if (!swiper.params.parallax.enabled) return;
        setTransition(duration);
    });
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/zoom.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Zoom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/ssr-window.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
;
function Zoom({ swiper, extendParams, on, emit }) {
    const window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
    extendParams({
        zoom: {
            enabled: false,
            limitToOriginalSize: false,
            maxRatio: 3,
            minRatio: 1,
            panOnMouseMove: false,
            toggle: true,
            containerClass: 'swiper-zoom-container',
            zoomedSlideClass: 'swiper-slide-zoomed'
        }
    });
    swiper.zoom = {
        enabled: false
    };
    let currentScale = 1;
    let isScaling = false;
    let isPanningWithMouse = false;
    let mousePanStart = {
        x: 0,
        y: 0
    };
    const mousePanSensitivity = -3; // Negative to invert pan direction
    let fakeGestureTouched;
    let fakeGestureMoved;
    const evCache = [];
    const gesture = {
        originX: 0,
        originY: 0,
        slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        imageEl: undefined,
        imageWrapEl: undefined,
        maxRatio: 3
    };
    const image = {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {},
        touchesCurrent: {}
    };
    const velocity = {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined
    };
    let scale = 1;
    Object.defineProperty(swiper.zoom, 'scale', {
        get () {
            return scale;
        },
        set (value) {
            if (scale !== value) {
                const imageEl = gesture.imageEl;
                const slideEl = gesture.slideEl;
                emit('zoomChange', value, imageEl, slideEl);
            }
            scale = value;
        }
    });
    function getDistanceBetweenTouches() {
        if (evCache.length < 2) return 1;
        const x1 = evCache[0].pageX;
        const y1 = evCache[0].pageY;
        const x2 = evCache[1].pageX;
        const y2 = evCache[1].pageY;
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return distance;
    }
    function getMaxRatio() {
        const params = swiper.params.zoom;
        const maxRatio = gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
        if (params.limitToOriginalSize && gesture.imageEl && gesture.imageEl.naturalWidth) {
            const imageMaxRatio = gesture.imageEl.naturalWidth / gesture.imageEl.offsetWidth;
            return Math.min(imageMaxRatio, maxRatio);
        }
        return maxRatio;
    }
    function getScaleOrigin() {
        if (evCache.length < 2) return {
            x: null,
            y: null
        };
        const box = gesture.imageEl.getBoundingClientRect();
        return [
            (evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window.scrollX) / currentScale,
            (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window.scrollY) / currentScale
        ];
    }
    function getSlideSelector() {
        return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    }
    function eventWithinSlide(e) {
        const slideSelector = getSlideSelector();
        if (e.target.matches(slideSelector)) return true;
        if (swiper.slides.filter((slideEl)=>slideEl.contains(e.target)).length > 0) return true;
        return false;
    }
    function eventWithinZoomContainer(e) {
        const selector = `.${swiper.params.zoom.containerClass}`;
        if (e.target.matches(selector)) return true;
        if ([
            ...swiper.hostEl.querySelectorAll(selector)
        ].filter((containerEl)=>containerEl.contains(e.target)).length > 0) return true;
        return false;
    }
    // Events
    function onGestureStart(e) {
        if (e.pointerType === 'mouse') {
            evCache.splice(0, evCache.length);
        }
        if (!eventWithinSlide(e)) return;
        const params = swiper.params.zoom;
        fakeGestureTouched = false;
        fakeGestureMoved = false;
        evCache.push(e);
        if (evCache.length < 2) {
            return;
        }
        fakeGestureTouched = true;
        gesture.scaleStart = getDistanceBetweenTouches();
        if (!gesture.slideEl) {
            gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
            if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
            let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
            if (imageEl) {
                imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
            }
            gesture.imageEl = imageEl;
            if (imageEl) {
                gesture.imageWrapEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(gesture.imageEl, `.${params.containerClass}`)[0];
            } else {
                gesture.imageWrapEl = undefined;
            }
            if (!gesture.imageWrapEl) {
                gesture.imageEl = undefined;
                return;
            }
            gesture.maxRatio = getMaxRatio();
        }
        if (gesture.imageEl) {
            const [originX, originY] = getScaleOrigin();
            gesture.originX = originX;
            gesture.originY = originY;
            gesture.imageEl.style.transitionDuration = '0ms';
        }
        isScaling = true;
    }
    function onGestureChange(e) {
        if (!eventWithinSlide(e)) return;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;
        const pointerIndex = evCache.findIndex((cachedEv)=>cachedEv.pointerId === e.pointerId);
        if (pointerIndex >= 0) evCache[pointerIndex] = e;
        if (evCache.length < 2) {
            return;
        }
        fakeGestureMoved = true;
        gesture.scaleMove = getDistanceBetweenTouches();
        if (!gesture.imageEl) {
            return;
        }
        zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
        if (zoom.scale > gesture.maxRatio) {
            zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
        }
        if (zoom.scale < params.minRatio) {
            zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
        }
        gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    }
    function onGestureEnd(e) {
        if (!eventWithinSlide(e)) return;
        if (e.pointerType === 'mouse' && e.type === 'pointerout') return;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;
        const pointerIndex = evCache.findIndex((cachedEv)=>cachedEv.pointerId === e.pointerId);
        if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
        if (!fakeGestureTouched || !fakeGestureMoved) {
            return;
        }
        fakeGestureTouched = false;
        fakeGestureMoved = false;
        if (!gesture.imageEl) return;
        zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
        gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
        gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
        currentScale = zoom.scale;
        isScaling = false;
        if (zoom.scale > 1 && gesture.slideEl) {
            gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
        } else if (zoom.scale <= 1 && gesture.slideEl) {
            gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
        }
        if (zoom.scale === 1) {
            gesture.originX = 0;
            gesture.originY = 0;
            gesture.slideEl = undefined;
        }
    }
    let allowTouchMoveTimeout;
    function allowTouchMove() {
        swiper.touchEventsData.preventTouchMoveFromPointerMove = false;
    }
    function preventTouchMove() {
        clearTimeout(allowTouchMoveTimeout);
        swiper.touchEventsData.preventTouchMoveFromPointerMove = true;
        allowTouchMoveTimeout = setTimeout(()=>{
            if (swiper.destroyed) return;
            allowTouchMove();
        });
    }
    function onTouchStart(e) {
        const device = swiper.device;
        if (!gesture.imageEl) return;
        if (image.isTouched) return;
        if (device.android && e.cancelable) e.preventDefault();
        image.isTouched = true;
        const event = evCache.length > 0 ? evCache[0] : e;
        image.touchesStart.x = event.pageX;
        image.touchesStart.y = event.pageY;
    }
    function onTouchMove(e) {
        const isMouseEvent = e.pointerType === 'mouse';
        const isMousePan = isMouseEvent && swiper.params.zoom.panOnMouseMove;
        if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) {
            return;
        }
        const zoom = swiper.zoom;
        if (!gesture.imageEl) {
            return;
        }
        if (!image.isTouched || !gesture.slideEl) {
            if (isMousePan) onMouseMove(e);
            return;
        }
        if (isMousePan) {
            onMouseMove(e);
            return;
        }
        if (!image.isMoved) {
            image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
            image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
            image.startX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])(gesture.imageWrapEl, 'x') || 0;
            image.startY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])(gesture.imageWrapEl, 'y') || 0;
            gesture.slideWidth = gesture.slideEl.offsetWidth;
            gesture.slideHeight = gesture.slideEl.offsetHeight;
            gesture.imageWrapEl.style.transitionDuration = '0ms';
        }
        // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
        image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
        const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
        if (touchesDiff > 5) {
            swiper.allowClick = false;
        }
        if (!image.isMoved && !isScaling) {
            if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                image.isTouched = false;
                allowTouchMove();
                return;
            }
            if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                image.isTouched = false;
                allowTouchMove();
                return;
            }
        }
        if (e.cancelable) {
            e.preventDefault();
        }
        e.stopPropagation();
        preventTouchMove();
        image.isMoved = true;
        const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
        const { originX, originY } = gesture;
        image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
        image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
        if (image.currentX < image.minX) {
            image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
        }
        if (image.currentX > image.maxX) {
            image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
        }
        if (image.currentY < image.minY) {
            image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
        }
        if (image.currentY > image.maxY) {
            image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
        }
        // Velocity
        if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
        if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
        if (!velocity.prevTime) velocity.prevTime = Date.now();
        velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
        velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
        if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
        if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
        velocity.prevPositionX = image.touchesCurrent.x;
        velocity.prevPositionY = image.touchesCurrent.y;
        velocity.prevTime = Date.now();
        gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
    }
    function onTouchEnd() {
        const zoom = swiper.zoom;
        evCache.length = 0;
        if (!gesture.imageEl) return;
        if (!image.isTouched || !image.isMoved) {
            image.isTouched = false;
            image.isMoved = false;
            return;
        }
        image.isTouched = false;
        image.isMoved = false;
        let momentumDurationX = 300;
        let momentumDurationY = 300;
        const momentumDistanceX = velocity.x * momentumDurationX;
        const newPositionX = image.currentX + momentumDistanceX;
        const momentumDistanceY = velocity.y * momentumDurationY;
        const newPositionY = image.currentY + momentumDistanceY;
        // Fix duration
        if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
        if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
        const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        image.currentX = newPositionX;
        image.currentY = newPositionY;
        // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
        gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
        gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
    }
    function onTransitionEnd() {
        const zoom = swiper.zoom;
        if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
            if (gesture.imageEl) {
                gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
            }
            if (gesture.imageWrapEl) {
                gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
            }
            gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
            zoom.scale = 1;
            currentScale = 1;
            gesture.slideEl = undefined;
            gesture.imageEl = undefined;
            gesture.imageWrapEl = undefined;
            gesture.originX = 0;
            gesture.originY = 0;
        }
    }
    function onMouseMove(e) {
        // Only pan if zoomed in and mouse panning is enabled
        if (currentScale <= 1 || !gesture.imageWrapEl) return;
        if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
        const currentTransform = window.getComputedStyle(gesture.imageWrapEl).transform;
        const matrix = new window.DOMMatrix(currentTransform);
        if (!isPanningWithMouse) {
            isPanningWithMouse = true;
            mousePanStart.x = e.clientX;
            mousePanStart.y = e.clientY;
            image.startX = matrix.e;
            image.startY = matrix.f;
            image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
            image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
            gesture.slideWidth = gesture.slideEl.offsetWidth;
            gesture.slideHeight = gesture.slideEl.offsetHeight;
            return;
        }
        const deltaX = (e.clientX - mousePanStart.x) * mousePanSensitivity;
        const deltaY = (e.clientY - mousePanStart.y) * mousePanSensitivity;
        const scaledWidth = image.width * currentScale;
        const scaledHeight = image.height * currentScale;
        const slideWidth = gesture.slideWidth;
        const slideHeight = gesture.slideHeight;
        const minX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
        const maxX = -minX;
        const minY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
        const maxY = -minY;
        const newX = Math.max(Math.min(image.startX + deltaX, maxX), minX);
        const newY = Math.max(Math.min(image.startY + deltaY, maxY), minY);
        gesture.imageWrapEl.style.transitionDuration = '0ms';
        gesture.imageWrapEl.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
        mousePanStart.x = e.clientX;
        mousePanStart.y = e.clientY;
        image.startX = newX;
        image.startY = newY;
        image.currentX = newX;
        image.currentY = newY;
    }
    function zoomIn(e) {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;
        if (!gesture.slideEl) {
            if (e && e.target) {
                gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
            }
            if (!gesture.slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
                    gesture.slideEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
                } else {
                    gesture.slideEl = swiper.slides[swiper.activeIndex];
                }
            }
            let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
            if (imageEl) {
                imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
            }
            gesture.imageEl = imageEl;
            if (imageEl) {
                gesture.imageWrapEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(gesture.imageEl, `.${params.containerClass}`)[0];
            } else {
                gesture.imageWrapEl = undefined;
            }
        }
        if (!gesture.imageEl || !gesture.imageWrapEl) return;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style.overflow = 'hidden';
            swiper.wrapperEl.style.touchAction = 'none';
        }
        gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
        let touchX;
        let touchY;
        let offsetX;
        let offsetY;
        let diffX;
        let diffY;
        let translateX;
        let translateY;
        let imageWidth;
        let imageHeight;
        let scaledWidth;
        let scaledHeight;
        let translateMinX;
        let translateMinY;
        let translateMaxX;
        let translateMaxY;
        let slideWidth;
        let slideHeight;
        if (typeof image.touchesStart.x === 'undefined' && e) {
            touchX = e.pageX;
            touchY = e.pageY;
        } else {
            touchX = image.touchesStart.x;
            touchY = image.touchesStart.y;
        }
        const prevScale = currentScale;
        const forceZoomRatio = typeof e === 'number' ? e : null;
        if (currentScale === 1 && forceZoomRatio) {
            touchX = undefined;
            touchY = undefined;
            image.touchesStart.x = undefined;
            image.touchesStart.y = undefined;
        }
        const maxRatio = getMaxRatio();
        zoom.scale = forceZoomRatio || maxRatio;
        currentScale = forceZoomRatio || maxRatio;
        if (e && !(currentScale === 1 && forceZoomRatio)) {
            slideWidth = gesture.slideEl.offsetWidth;
            slideHeight = gesture.slideEl.offsetHeight;
            offsetX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])(gesture.slideEl).left + window.scrollX;
            offsetY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])(gesture.slideEl).top + window.scrollY;
            diffX = offsetX + slideWidth / 2 - touchX;
            diffY = offsetY + slideHeight / 2 - touchY;
            imageWidth = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
            imageHeight = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
            scaledWidth = imageWidth * zoom.scale;
            scaledHeight = imageHeight * zoom.scale;
            translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
            translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
            translateMaxX = -translateMinX;
            translateMaxY = -translateMinY;
            if (prevScale > 0 && forceZoomRatio && typeof image.currentX === 'number' && typeof image.currentY === 'number') {
                translateX = image.currentX * zoom.scale / prevScale;
                translateY = image.currentY * zoom.scale / prevScale;
            } else {
                translateX = diffX * zoom.scale;
                translateY = diffY * zoom.scale;
            }
            if (translateX < translateMinX) {
                translateX = translateMinX;
            }
            if (translateX > translateMaxX) {
                translateX = translateMaxX;
            }
            if (translateY < translateMinY) {
                translateY = translateMinY;
            }
            if (translateY > translateMaxY) {
                translateY = translateMaxY;
            }
        } else {
            translateX = 0;
            translateY = 0;
        }
        if (forceZoomRatio && zoom.scale === 1) {
            gesture.originX = 0;
            gesture.originY = 0;
        }
        image.currentX = translateX;
        image.currentY = translateY;
        gesture.imageWrapEl.style.transitionDuration = '300ms';
        gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
        gesture.imageEl.style.transitionDuration = '300ms';
        gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    }
    function zoomOut() {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;
        if (!gesture.slideEl) {
            if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
                gesture.slideEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
            } else {
                gesture.slideEl = swiper.slides[swiper.activeIndex];
            }
            let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
            if (imageEl) {
                imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
            }
            gesture.imageEl = imageEl;
            if (imageEl) {
                gesture.imageWrapEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(gesture.imageEl, `.${params.containerClass}`)[0];
            } else {
                gesture.imageWrapEl = undefined;
            }
        }
        if (!gesture.imageEl || !gesture.imageWrapEl) return;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style.overflow = '';
            swiper.wrapperEl.style.touchAction = '';
        }
        zoom.scale = 1;
        currentScale = 1;
        image.currentX = undefined;
        image.currentY = undefined;
        image.touchesStart.x = undefined;
        image.touchesStart.y = undefined;
        gesture.imageWrapEl.style.transitionDuration = '300ms';
        gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
        gesture.imageEl.style.transitionDuration = '300ms';
        gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
        gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
        gesture.slideEl = undefined;
        gesture.originX = 0;
        gesture.originY = 0;
        if (swiper.params.zoom.panOnMouseMove) {
            mousePanStart = {
                x: 0,
                y: 0
            };
            if (isPanningWithMouse) {
                isPanningWithMouse = false;
                image.startX = 0;
                image.startY = 0;
            }
        }
    }
    // Toggle Zoom
    function zoomToggle(e) {
        const zoom = swiper.zoom;
        if (zoom.scale && zoom.scale !== 1) {
            // Zoom Out
            zoomOut();
        } else {
            // Zoom In
            zoomIn(e);
        }
    }
    function getListeners() {
        const passiveListener = swiper.params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        const activeListenerWithCapture = swiper.params.passiveListeners ? {
            passive: false,
            capture: true
        } : true;
        return {
            passiveListener,
            activeListenerWithCapture
        };
    }
    // Attach/Detach Events
    function enable() {
        const zoom = swiper.zoom;
        if (zoom.enabled) return;
        zoom.enabled = true;
        const { passiveListener, activeListenerWithCapture } = getListeners();
        // Scale image
        swiper.wrapperEl.addEventListener('pointerdown', onGestureStart, passiveListener);
        swiper.wrapperEl.addEventListener('pointermove', onGestureChange, activeListenerWithCapture);
        [
            'pointerup',
            'pointercancel',
            'pointerout'
        ].forEach((eventName)=>{
            swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
        });
        // Move image
        swiper.wrapperEl.addEventListener('pointermove', onTouchMove, activeListenerWithCapture);
    }
    function disable() {
        const zoom = swiper.zoom;
        if (!zoom.enabled) return;
        zoom.enabled = false;
        const { passiveListener, activeListenerWithCapture } = getListeners();
        // Scale image
        swiper.wrapperEl.removeEventListener('pointerdown', onGestureStart, passiveListener);
        swiper.wrapperEl.removeEventListener('pointermove', onGestureChange, activeListenerWithCapture);
        [
            'pointerup',
            'pointercancel',
            'pointerout'
        ].forEach((eventName)=>{
            swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
        });
        // Move image
        swiper.wrapperEl.removeEventListener('pointermove', onTouchMove, activeListenerWithCapture);
    }
    on('init', ()=>{
        if (swiper.params.zoom.enabled) {
            enable();
        }
    });
    on('destroy', ()=>{
        disable();
    });
    on('touchStart', (_s, e)=>{
        if (!swiper.zoom.enabled) return;
        onTouchStart(e);
    });
    on('touchEnd', (_s, e)=>{
        if (!swiper.zoom.enabled) return;
        onTouchEnd();
    });
    on('doubleTap', (_s, e)=>{
        if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
            zoomToggle(e);
        }
    });
    on('transitionEnd', ()=>{
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
            onTransitionEnd();
        }
    });
    on('slideChange', ()=>{
        if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
            onTransitionEnd();
        }
    });
    Object.assign(swiper.zoom, {
        enable,
        disable,
        in: zoomIn,
        out: zoomOut,
        toggle: zoomToggle
    });
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/controller.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Controller
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
/* eslint no-bitwise: ["error", { "allow": [">>"] }] */ function Controller({ swiper, extendParams, on }) {
    extendParams({
        controller: {
            control: undefined,
            inverse: false,
            by: 'slide' // or 'container'
        }
    });
    swiper.controller = {
        control: undefined
    };
    function LinearSpline(x, y) {
        const binarySearch = function search() {
            let maxIndex;
            let minIndex;
            let guess;
            return (array, val)=>{
                minIndex = -1;
                maxIndex = array.length;
                while(maxIndex - minIndex > 1){
                    guess = maxIndex + minIndex >> 1;
                    if (array[guess] <= val) {
                        minIndex = guess;
                    } else {
                        maxIndex = guess;
                    }
                }
                return maxIndex;
            };
        }();
        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1;
        // Given an x value (x2), return the expected y2 value:
        // (x1,y1) is the known point before given value,
        // (x3,y3) is the known point after given value.
        let i1;
        let i3;
        this.interpolate = function interpolate(x2) {
            if (!x2) return 0;
            // Get the indexes of x1 and x3 (the array indexes before and after given x2):
            i3 = binarySearch(this.x, x2);
            i1 = i3 - 1;
            // We have our indexes i1 & i3, so we can calculate already:
            // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
            return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
        };
        return this;
    }
    function getInterpolateFunction(c) {
        swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
    }
    function setTranslate(_t, byController) {
        const controlled = swiper.controller.control;
        let multiplier;
        let controlledTranslate;
        const Swiper = swiper.constructor;
        function setControlledTranslate(c) {
            if (c.destroyed) return;
            // this will create an Interpolate function based on the snapGrids
            // x is the Grid of the scrolled scroller and y will be the controlled scroller
            // it makes sense to create this only once and recall it for the interpolation
            // the function does a lot of value caching for performance
            const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
            if (swiper.params.controller.by === 'slide') {
                getInterpolateFunction(c);
                // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                // but it did not work out
                controlledTranslate = -swiper.controller.spline.interpolate(-translate);
            }
            if (!controlledTranslate || swiper.params.controller.by === 'container') {
                multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
                    multiplier = 1;
                }
                controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
            }
            if (swiper.params.controller.inverse) {
                controlledTranslate = c.maxTranslate() - controlledTranslate;
            }
            c.updateProgress(controlledTranslate);
            c.setTranslate(controlledTranslate, swiper);
            c.updateActiveIndex();
            c.updateSlidesClasses();
        }
        if (Array.isArray(controlled)) {
            for(let i = 0; i < controlled.length; i += 1){
                if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                    setControlledTranslate(controlled[i]);
                }
            }
        } else if (controlled instanceof Swiper && byController !== controlled) {
            setControlledTranslate(controlled);
        }
    }
    function setTransition(duration, byController) {
        const Swiper = swiper.constructor;
        const controlled = swiper.controller.control;
        let i;
        function setControlledTransition(c) {
            if (c.destroyed) return;
            c.setTransition(duration, swiper);
            if (duration !== 0) {
                c.transitionStart();
                if (c.params.autoHeight) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(()=>{
                        c.updateAutoHeight();
                    });
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(c.wrapperEl, ()=>{
                    if (!controlled) return;
                    c.transitionEnd();
                });
            }
        }
        if (Array.isArray(controlled)) {
            for(i = 0; i < controlled.length; i += 1){
                if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                    setControlledTransition(controlled[i]);
                }
            }
        } else if (controlled instanceof Swiper && byController !== controlled) {
            setControlledTransition(controlled);
        }
    }
    function removeSpline() {
        if (!swiper.controller.control) return;
        if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
        }
    }
    on('beforeInit', ()=>{
        if (("TURBOPACK compile-time value", "undefined") !== 'undefined' && (// eslint-disable-line
        typeof swiper.params.controller.control === 'string' || swiper.params.controller.control instanceof HTMLElement)) //TURBOPACK unreachable
        ;
        swiper.controller.control = swiper.params.controller.control;
    });
    on('update', ()=>{
        removeSpline();
    });
    on('resize', ()=>{
        removeSpline();
    });
    on('observerUpdate', ()=>{
        removeSpline();
    });
    on('setTranslate', (_s, translate, byController)=>{
        if (!swiper.controller.control || swiper.controller.control.destroyed) return;
        swiper.controller.setTranslate(translate, byController);
    });
    on('setTransition', (_s, duration, byController)=>{
        if (!swiper.controller.control || swiper.controller.control.destroyed) return;
        swiper.controller.setTransition(duration, byController);
    });
    Object.assign(swiper.controller, {
        setTranslate,
        setTransition
    });
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/a11y.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>A11y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/ssr-window.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$classes$2d$to$2d$selector$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/classes-to-selector.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
;
;
function A11y({ swiper, extendParams, on }) {
    extendParams({
        a11y: {
            enabled: true,
            notificationClass: 'swiper-notification',
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            slideLabelMessage: '{{index}} / {{slidesLength}}',
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            containerRole: null,
            itemRoleDescriptionMessage: null,
            slideRole: 'group',
            id: null,
            scrollOnFocus: true,
            wrapperLiveRegion: true
        }
    });
    swiper.a11y = {
        clicked: false
    };
    let liveRegion = null;
    let preventFocusHandler;
    let focusTargetSlideEl;
    let visibilityChangedTimestamp = new Date().getTime();
    function notify(message) {
        const notification = liveRegion;
        if (notification.length === 0) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(notification, message);
    }
    function getRandomNumber(size = 16) {
        const randomChar = ()=>Math.round(16 * Math.random()).toString(16);
        return 'x'.repeat(size).replace(/x/g, randomChar);
    }
    function makeElFocusable(el) {
        el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(el);
        el.forEach((subEl)=>{
            subEl.setAttribute('tabIndex', '0');
        });
    }
    function makeElNotFocusable(el) {
        el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(el);
        el.forEach((subEl)=>{
            subEl.setAttribute('tabIndex', '-1');
        });
    }
    function addElRole(el, role) {
        el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(el);
        el.forEach((subEl)=>{
            subEl.setAttribute('role', role);
        });
    }
    function addElRoleDescription(el, description) {
        el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(el);
        el.forEach((subEl)=>{
            subEl.setAttribute('aria-roledescription', description);
        });
    }
    function addElControls(el, controls) {
        el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(el);
        el.forEach((subEl)=>{
            subEl.setAttribute('aria-controls', controls);
        });
    }
    function addElLabel(el, label) {
        el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(el);
        el.forEach((subEl)=>{
            subEl.setAttribute('aria-label', label);
        });
    }
    function addElId(el, id) {
        el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(el);
        el.forEach((subEl)=>{
            subEl.setAttribute('id', id);
        });
    }
    function addElLive(el, live) {
        el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(el);
        el.forEach((subEl)=>{
            subEl.setAttribute('aria-live', live);
        });
    }
    function disableEl(el) {
        el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(el);
        el.forEach((subEl)=>{
            subEl.setAttribute('aria-disabled', true);
        });
    }
    function enableEl(el) {
        el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(el);
        el.forEach((subEl)=>{
            subEl.setAttribute('aria-disabled', false);
        });
    }
    function onEnterOrSpaceKey(e) {
        if (e.keyCode !== 13 && e.keyCode !== 32) return;
        const params = swiper.params.a11y;
        const targetEl = e.target;
        if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
            if (!e.target.matches((0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$classes$2d$to$2d$selector$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(swiper.params.pagination.bulletClass))) return;
        }
        if (swiper.navigation && swiper.navigation.prevEl && swiper.navigation.nextEl) {
            const prevEls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(swiper.navigation.prevEl);
            const nextEls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(swiper.navigation.nextEl);
            if (nextEls.includes(targetEl)) {
                if (!(swiper.isEnd && !swiper.params.loop)) {
                    swiper.slideNext();
                }
                if (swiper.isEnd) {
                    notify(params.lastSlideMessage);
                } else {
                    notify(params.nextSlideMessage);
                }
            }
            if (prevEls.includes(targetEl)) {
                if (!(swiper.isBeginning && !swiper.params.loop)) {
                    swiper.slidePrev();
                }
                if (swiper.isBeginning) {
                    notify(params.firstSlideMessage);
                } else {
                    notify(params.prevSlideMessage);
                }
            }
        }
        if (swiper.pagination && targetEl.matches((0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$classes$2d$to$2d$selector$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(swiper.params.pagination.bulletClass))) {
            targetEl.click();
        }
    }
    function updateNavigation() {
        if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
        const { nextEl, prevEl } = swiper.navigation;
        if (prevEl) {
            if (swiper.isBeginning) {
                disableEl(prevEl);
                makeElNotFocusable(prevEl);
            } else {
                enableEl(prevEl);
                makeElFocusable(prevEl);
            }
        }
        if (nextEl) {
            if (swiper.isEnd) {
                disableEl(nextEl);
                makeElNotFocusable(nextEl);
            } else {
                enableEl(nextEl);
                makeElFocusable(nextEl);
            }
        }
    }
    function hasPagination() {
        return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
    }
    function hasClickablePagination() {
        return hasPagination() && swiper.params.pagination.clickable;
    }
    function updatePagination() {
        const params = swiper.params.a11y;
        if (!hasPagination()) return;
        swiper.pagination.bullets.forEach((bulletEl)=>{
            if (swiper.params.pagination.clickable) {
                makeElFocusable(bulletEl);
                if (!swiper.params.pagination.renderBullet) {
                    addElRole(bulletEl, 'button');
                    addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])(bulletEl) + 1));
                }
            }
            if (bulletEl.matches((0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$classes$2d$to$2d$selector$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(swiper.params.pagination.bulletActiveClass))) {
                bulletEl.setAttribute('aria-current', 'true');
            } else {
                bulletEl.removeAttribute('aria-current');
            }
        });
    }
    const initNavEl = (el, wrapperId, message)=>{
        makeElFocusable(el);
        if (el.tagName !== 'BUTTON') {
            addElRole(el, 'button');
            el.addEventListener('keydown', onEnterOrSpaceKey);
        }
        addElLabel(el, message);
        addElControls(el, wrapperId);
    };
    const handlePointerDown = (e)=>{
        if (focusTargetSlideEl && focusTargetSlideEl !== e.target && !focusTargetSlideEl.contains(e.target)) {
            preventFocusHandler = true;
        }
        swiper.a11y.clicked = true;
    };
    const handlePointerUp = ()=>{
        preventFocusHandler = false;
        requestAnimationFrame(()=>{
            requestAnimationFrame(()=>{
                if (!swiper.destroyed) {
                    swiper.a11y.clicked = false;
                }
            });
        });
    };
    const onVisibilityChange = (e)=>{
        visibilityChangedTimestamp = new Date().getTime();
    };
    const handleFocus = (e)=>{
        if (swiper.a11y.clicked || !swiper.params.a11y.scrollOnFocus) return;
        if (new Date().getTime() - visibilityChangedTimestamp < 100) return;
        const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
        if (!slideEl || !swiper.slides.includes(slideEl)) return;
        focusTargetSlideEl = slideEl;
        const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
        const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
        if (isActive || isVisible) return;
        if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
        if (swiper.isHorizontal()) {
            swiper.el.scrollLeft = 0;
        } else {
            swiper.el.scrollTop = 0;
        }
        requestAnimationFrame(()=>{
            if (preventFocusHandler) return;
            if (swiper.params.loop) {
                swiper.slideToLoop(swiper.getSlideIndexWhenGrid(parseInt(slideEl.getAttribute('data-swiper-slide-index'))), 0);
            } else {
                swiper.slideTo(swiper.getSlideIndexWhenGrid(swiper.slides.indexOf(slideEl)), 0);
            }
            preventFocusHandler = false;
        });
    };
    const initSlides = ()=>{
        const params = swiper.params.a11y;
        if (params.itemRoleDescriptionMessage) {
            addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
        }
        if (params.slideRole) {
            addElRole(swiper.slides, params.slideRole);
        }
        const slidesLength = swiper.slides.length;
        if (params.slideLabelMessage) {
            swiper.slides.forEach((slideEl, index)=>{
                const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : index;
                const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
                addElLabel(slideEl, ariaLabelMessage);
            });
        }
    };
    const init = ()=>{
        const params = swiper.params.a11y;
        swiper.el.append(liveRegion);
        // Container
        const containerEl = swiper.el;
        if (params.containerRoleDescriptionMessage) {
            addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
        }
        if (params.containerMessage) {
            addElLabel(containerEl, params.containerMessage);
        }
        if (params.containerRole) {
            addElRole(containerEl, params.containerRole);
        }
        // Wrapper
        const wrapperEl = swiper.wrapperEl;
        const wrapperId = params.id || wrapperEl.getAttribute('id') || `swiper-wrapper-${getRandomNumber(16)}`;
        addElId(wrapperEl, wrapperId);
        if (params.wrapperLiveRegion) {
            const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
            addElLive(wrapperEl, live);
        }
        // Slide
        initSlides();
        // Navigation
        let { nextEl, prevEl } = swiper.navigation ? swiper.navigation : {};
        nextEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(nextEl);
        prevEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(prevEl);
        if (nextEl) {
            nextEl.forEach((el)=>initNavEl(el, wrapperId, params.nextSlideMessage));
        }
        if (prevEl) {
            prevEl.forEach((el)=>initNavEl(el, wrapperId, params.prevSlideMessage));
        }
        // Pagination
        if (hasClickablePagination()) {
            const paginationEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(swiper.pagination.el);
            paginationEl.forEach((el)=>{
                el.addEventListener('keydown', onEnterOrSpaceKey);
            });
        }
        // Tab focus
        const document = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])();
        document.addEventListener('visibilitychange', onVisibilityChange);
        swiper.el.addEventListener('focus', handleFocus, true);
        swiper.el.addEventListener('focus', handleFocus, true);
        swiper.el.addEventListener('pointerdown', handlePointerDown, true);
        swiper.el.addEventListener('pointerup', handlePointerUp, true);
    };
    function destroy() {
        if (liveRegion) liveRegion.remove();
        let { nextEl, prevEl } = swiper.navigation ? swiper.navigation : {};
        nextEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(nextEl);
        prevEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(prevEl);
        if (nextEl) {
            nextEl.forEach((el)=>el.removeEventListener('keydown', onEnterOrSpaceKey));
        }
        if (prevEl) {
            prevEl.forEach((el)=>el.removeEventListener('keydown', onEnterOrSpaceKey));
        }
        // Pagination
        if (hasClickablePagination()) {
            const paginationEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(swiper.pagination.el);
            paginationEl.forEach((el)=>{
                el.removeEventListener('keydown', onEnterOrSpaceKey);
            });
        }
        const document = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])();
        document.removeEventListener('visibilitychange', onVisibilityChange);
        // Tab focus
        if (swiper.el && typeof swiper.el !== 'string') {
            swiper.el.removeEventListener('focus', handleFocus, true);
            swiper.el.removeEventListener('pointerdown', handlePointerDown, true);
            swiper.el.removeEventListener('pointerup', handlePointerUp, true);
        }
    }
    on('beforeInit', ()=>{
        liveRegion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])('span', swiper.params.a11y.notificationClass);
        liveRegion.setAttribute('aria-live', 'assertive');
        liveRegion.setAttribute('aria-atomic', 'true');
    });
    on('afterInit', ()=>{
        if (!swiper.params.a11y.enabled) return;
        init();
    });
    on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', ()=>{
        if (!swiper.params.a11y.enabled) return;
        initSlides();
    });
    on('fromEdge toEdge afterInit lock unlock', ()=>{
        if (!swiper.params.a11y.enabled) return;
        updateNavigation();
    });
    on('paginationUpdate', ()=>{
        if (!swiper.params.a11y.enabled) return;
        updatePagination();
    });
    on('destroy', ()=>{
        if (!swiper.params.a11y.enabled) return;
        destroy();
    });
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/history.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>History
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/ssr-window.esm.mjs [app-ssr] (ecmascript)");
;
function History({ swiper, extendParams, on }) {
    extendParams({
        history: {
            enabled: false,
            root: '',
            replaceState: false,
            key: 'slides',
            keepQuery: false
        }
    });
    let initialized = false;
    let paths = {};
    const slugify = (text)=>{
        return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
    };
    const getPathValues = (urlOverride)=>{
        const window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
        let location;
        if (urlOverride) {
            location = new URL(urlOverride);
        } else {
            location = window.location;
        }
        const pathArray = location.pathname.slice(1).split('/').filter((part)=>part !== '');
        const total = pathArray.length;
        const key = pathArray[total - 2];
        const value = pathArray[total - 1];
        return {
            key,
            value
        };
    };
    const setHistory = (key, index)=>{
        const window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
        if (!initialized || !swiper.params.history.enabled) return;
        let location;
        if (swiper.params.url) {
            location = new URL(swiper.params.url);
        } else {
            location = window.location;
        }
        const slide = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${index}"]`) : swiper.slides[index];
        let value = slugify(slide.getAttribute('data-history'));
        if (swiper.params.history.root.length > 0) {
            let root = swiper.params.history.root;
            if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
            value = `${root}/${key ? `${key}/` : ''}${value}`;
        } else if (!location.pathname.includes(key)) {
            value = `${key ? `${key}/` : ''}${value}`;
        }
        if (swiper.params.history.keepQuery) {
            value += location.search;
        }
        const currentState = window.history.state;
        if (currentState && currentState.value === value) {
            return;
        }
        if (swiper.params.history.replaceState) {
            window.history.replaceState({
                value
            }, null, value);
        } else {
            window.history.pushState({
                value
            }, null, value);
        }
    };
    const scrollToSlide = (speed, value, runCallbacks)=>{
        if (value) {
            for(let i = 0, length = swiper.slides.length; i < length; i += 1){
                const slide = swiper.slides[i];
                const slideHistory = slugify(slide.getAttribute('data-history'));
                if (slideHistory === value) {
                    const index = swiper.getSlideIndex(slide);
                    swiper.slideTo(index, speed, runCallbacks);
                }
            }
        } else {
            swiper.slideTo(0, speed, runCallbacks);
        }
    };
    const setHistoryPopState = ()=>{
        paths = getPathValues(swiper.params.url);
        scrollToSlide(swiper.params.speed, paths.value, false);
    };
    const init = ()=>{
        const window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
        if (!swiper.params.history) return;
        if (!window.history || !window.history.pushState) {
            swiper.params.history.enabled = false;
            swiper.params.hashNavigation.enabled = true;
            return;
        }
        initialized = true;
        paths = getPathValues(swiper.params.url);
        if (!paths.key && !paths.value) {
            if (!swiper.params.history.replaceState) {
                window.addEventListener('popstate', setHistoryPopState);
            }
            return;
        }
        scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
        if (!swiper.params.history.replaceState) {
            window.addEventListener('popstate', setHistoryPopState);
        }
    };
    const destroy = ()=>{
        const window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
        if (!swiper.params.history.replaceState) {
            window.removeEventListener('popstate', setHistoryPopState);
        }
    };
    on('init', ()=>{
        if (swiper.params.history.enabled) {
            init();
        }
    });
    on('destroy', ()=>{
        if (swiper.params.history.enabled) {
            destroy();
        }
    });
    on('transitionEnd _freeModeNoMomentumRelease', ()=>{
        if (initialized) {
            setHistory(swiper.params.history.key, swiper.activeIndex);
        }
    });
    on('slideChange', ()=>{
        if (initialized && swiper.params.cssMode) {
            setHistory(swiper.params.history.key, swiper.activeIndex);
        }
    });
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/hash-navigation.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HashNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/ssr-window.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
;
function HashNavigation({ swiper, extendParams, emit, on }) {
    let initialized = false;
    const document = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])();
    const window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
    extendParams({
        hashNavigation: {
            enabled: false,
            replaceState: false,
            watchState: false,
            getSlideIndex (_s, hash) {
                if (swiper.virtual && swiper.params.virtual.enabled) {
                    const slideWithHash = swiper.slides.find((slideEl)=>slideEl.getAttribute('data-hash') === hash);
                    if (!slideWithHash) return 0;
                    const index = parseInt(slideWithHash.getAttribute('data-swiper-slide-index'), 10);
                    return index;
                }
                return swiper.getSlideIndex((0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
            }
        }
    });
    const onHashChange = ()=>{
        emit('hashChange');
        const newHash = document.location.hash.replace('#', '');
        const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
        const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') : '';
        if (newHash !== activeSlideHash) {
            const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
            if (typeof newIndex === 'undefined' || Number.isNaN(newIndex)) return;
            swiper.slideTo(newIndex);
        }
    };
    const setHash = ()=>{
        if (!initialized || !swiper.params.hashNavigation.enabled) return;
        const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
        const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') || activeSlideEl.getAttribute('data-history') : '';
        if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
            window.history.replaceState(null, null, `#${activeSlideHash}` || '');
            emit('hashSet');
        } else {
            document.location.hash = activeSlideHash || '';
            emit('hashSet');
        }
    };
    const init = ()=>{
        if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
        initialized = true;
        const hash = document.location.hash.replace('#', '');
        if (hash) {
            const speed = 0;
            const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
            swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
        }
        if (swiper.params.hashNavigation.watchState) {
            window.addEventListener('hashchange', onHashChange);
        }
    };
    const destroy = ()=>{
        if (swiper.params.hashNavigation.watchState) {
            window.removeEventListener('hashchange', onHashChange);
        }
    };
    on('init', ()=>{
        if (swiper.params.hashNavigation.enabled) {
            init();
        }
    });
    on('destroy', ()=>{
        if (swiper.params.hashNavigation.enabled) {
            destroy();
        }
    });
    on('transitionEnd _freeModeNoMomentumRelease', ()=>{
        if (initialized) {
            setHash();
        }
    });
    on('slideChange', ()=>{
        if (initialized && swiper.params.cssMode) {
            setHash();
        }
    });
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/autoplay.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Autoplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/ssr-window.esm.mjs [app-ssr] (ecmascript)");
;
/* eslint no-underscore-dangle: "off" */ /* eslint no-use-before-define: "off" */ function Autoplay({ swiper, extendParams, on, emit, params }) {
    swiper.autoplay = {
        running: false,
        paused: false,
        timeLeft: 0
    };
    extendParams({
        autoplay: {
            enabled: false,
            delay: 3000,
            waitForTransition: true,
            disableOnInteraction: false,
            stopOnLastSlide: false,
            reverseDirection: false,
            pauseOnMouseEnter: false
        }
    });
    let timeout;
    let raf;
    let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
    let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
    let autoplayTimeLeft;
    let autoplayStartTime = new Date().getTime();
    let wasPaused;
    let isTouched;
    let pausedByTouch;
    let touchStartTimeout;
    let slideChanged;
    let pausedByInteraction;
    let pausedByPointerEnter;
    function onTransitionEnd(e) {
        if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
        if (e.target !== swiper.wrapperEl) return;
        swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);
        if (pausedByPointerEnter || e.detail && e.detail.bySwiperTouchMove) {
            return;
        }
        resume();
    }
    const calcTimeLeft = ()=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        if (swiper.autoplay.paused) {
            wasPaused = true;
        } else if (wasPaused) {
            autoplayDelayCurrent = autoplayTimeLeft;
            wasPaused = false;
        }
        const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
        swiper.autoplay.timeLeft = timeLeft;
        emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);
        raf = requestAnimationFrame(()=>{
            calcTimeLeft();
        });
    };
    const getSlideDelay = ()=>{
        let activeSlideEl;
        if (swiper.virtual && swiper.params.virtual.enabled) {
            activeSlideEl = swiper.slides.find((slideEl)=>slideEl.classList.contains('swiper-slide-active'));
        } else {
            activeSlideEl = swiper.slides[swiper.activeIndex];
        }
        if (!activeSlideEl) return undefined;
        const currentSlideDelay = parseInt(activeSlideEl.getAttribute('data-swiper-autoplay'), 10);
        return currentSlideDelay;
    };
    const run = (delayForce)=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        cancelAnimationFrame(raf);
        calcTimeLeft();
        let delay = typeof delayForce === 'undefined' ? swiper.params.autoplay.delay : delayForce;
        autoplayDelayTotal = swiper.params.autoplay.delay;
        autoplayDelayCurrent = swiper.params.autoplay.delay;
        const currentSlideDelay = getSlideDelay();
        if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === 'undefined') {
            delay = currentSlideDelay;
            autoplayDelayTotal = currentSlideDelay;
            autoplayDelayCurrent = currentSlideDelay;
        }
        autoplayTimeLeft = delay;
        const speed = swiper.params.speed;
        const proceed = ()=>{
            if (!swiper || swiper.destroyed) return;
            if (swiper.params.autoplay.reverseDirection) {
                if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
                    swiper.slidePrev(speed, true, true);
                    emit('autoplay');
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    swiper.slideTo(swiper.slides.length - 1, speed, true, true);
                    emit('autoplay');
                }
            } else {
                if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
                    swiper.slideNext(speed, true, true);
                    emit('autoplay');
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    swiper.slideTo(0, speed, true, true);
                    emit('autoplay');
                }
            }
            if (swiper.params.cssMode) {
                autoplayStartTime = new Date().getTime();
                requestAnimationFrame(()=>{
                    run();
                });
            }
        };
        if (delay > 0) {
            clearTimeout(timeout);
            timeout = setTimeout(()=>{
                proceed();
            }, delay);
        } else {
            requestAnimationFrame(()=>{
                proceed();
            });
        }
        // eslint-disable-next-line
        return delay;
    };
    const start = ()=>{
        autoplayStartTime = new Date().getTime();
        swiper.autoplay.running = true;
        run();
        emit('autoplayStart');
    };
    const stop = ()=>{
        swiper.autoplay.running = false;
        clearTimeout(timeout);
        cancelAnimationFrame(raf);
        emit('autoplayStop');
    };
    const pause = (internal, reset)=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        clearTimeout(timeout);
        if (!internal) {
            pausedByInteraction = true;
        }
        const proceed = ()=>{
            emit('autoplayPause');
            if (swiper.params.autoplay.waitForTransition) {
                swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);
            } else {
                resume();
            }
        };
        swiper.autoplay.paused = true;
        if (reset) {
            if (slideChanged) {
                autoplayTimeLeft = swiper.params.autoplay.delay;
            }
            slideChanged = false;
            proceed();
            return;
        }
        const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
        autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
        if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
        if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
        proceed();
    };
    const resume = ()=>{
        if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
        autoplayStartTime = new Date().getTime();
        if (pausedByInteraction) {
            pausedByInteraction = false;
            run(autoplayTimeLeft);
        } else {
            run();
        }
        swiper.autoplay.paused = false;
        emit('autoplayResume');
    };
    const onVisibilityChange = ()=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        const document = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])();
        if (document.visibilityState === 'hidden') {
            pausedByInteraction = true;
            pause(true);
        }
        if (document.visibilityState === 'visible') {
            resume();
        }
    };
    const onPointerEnter = (e)=>{
        if (e.pointerType !== 'mouse') return;
        pausedByInteraction = true;
        pausedByPointerEnter = true;
        if (swiper.animating || swiper.autoplay.paused) return;
        pause(true);
    };
    const onPointerLeave = (e)=>{
        if (e.pointerType !== 'mouse') return;
        pausedByPointerEnter = false;
        if (swiper.autoplay.paused) {
            resume();
        }
    };
    const attachMouseEvents = ()=>{
        if (swiper.params.autoplay.pauseOnMouseEnter) {
            swiper.el.addEventListener('pointerenter', onPointerEnter);
            swiper.el.addEventListener('pointerleave', onPointerLeave);
        }
    };
    const detachMouseEvents = ()=>{
        if (swiper.el && typeof swiper.el !== 'string') {
            swiper.el.removeEventListener('pointerenter', onPointerEnter);
            swiper.el.removeEventListener('pointerleave', onPointerLeave);
        }
    };
    const attachDocumentEvents = ()=>{
        const document = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])();
        document.addEventListener('visibilitychange', onVisibilityChange);
    };
    const detachDocumentEvents = ()=>{
        const document = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])();
        document.removeEventListener('visibilitychange', onVisibilityChange);
    };
    on('init', ()=>{
        if (swiper.params.autoplay.enabled) {
            attachMouseEvents();
            attachDocumentEvents();
            start();
        }
    });
    on('destroy', ()=>{
        detachMouseEvents();
        detachDocumentEvents();
        if (swiper.autoplay.running) {
            stop();
        }
    });
    on('_freeModeStaticRelease', ()=>{
        if (pausedByTouch || pausedByInteraction) {
            resume();
        }
    });
    on('_freeModeNoMomentumRelease', ()=>{
        if (!swiper.params.autoplay.disableOnInteraction) {
            pause(true, true);
        } else {
            stop();
        }
    });
    on('beforeTransitionStart', (_s, speed, internal)=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
            pause(true, true);
        } else {
            stop();
        }
    });
    on('sliderFirstMove', ()=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        if (swiper.params.autoplay.disableOnInteraction) {
            stop();
            return;
        }
        isTouched = true;
        pausedByTouch = false;
        pausedByInteraction = false;
        touchStartTimeout = setTimeout(()=>{
            pausedByInteraction = true;
            pausedByTouch = true;
            pause(true);
        }, 200);
    });
    on('touchEnd', ()=>{
        if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
        clearTimeout(touchStartTimeout);
        clearTimeout(timeout);
        if (swiper.params.autoplay.disableOnInteraction) {
            pausedByTouch = false;
            isTouched = false;
            return;
        }
        if (pausedByTouch && swiper.params.cssMode) resume();
        pausedByTouch = false;
        isTouched = false;
    });
    on('slideChange', ()=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        slideChanged = true;
    });
    Object.assign(swiper.autoplay, {
        start,
        stop,
        pause,
        resume
    });
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/thumbs.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Thumb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/ssr-window.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
;
function Thumb({ swiper, extendParams, on }) {
    extendParams({
        thumbs: {
            swiper: null,
            multipleActiveThumbs: true,
            autoScrollOffset: 0,
            slideThumbActiveClass: 'swiper-slide-thumb-active',
            thumbsContainerClass: 'swiper-thumbs'
        }
    });
    let initialized = false;
    let swiperCreated = false;
    swiper.thumbs = {
        swiper: null
    };
    function onThumbClick() {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        const clickedIndex = thumbsSwiper.clickedIndex;
        const clickedSlide = thumbsSwiper.clickedSlide;
        if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
        if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
        let slideToIndex;
        if (thumbsSwiper.params.loop) {
            slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
        } else {
            slideToIndex = clickedIndex;
        }
        if (swiper.params.loop) {
            swiper.slideToLoop(slideToIndex);
        } else {
            swiper.slideTo(slideToIndex);
        }
    }
    function init() {
        const { thumbs: thumbsParams } = swiper.params;
        if (initialized) return false;
        initialized = true;
        const SwiperClass = swiper.constructor;
        if (thumbsParams.swiper instanceof SwiperClass) {
            if (thumbsParams.swiper.destroyed) {
                initialized = false;
                return false;
            }
            swiper.thumbs.swiper = thumbsParams.swiper;
            Object.assign(swiper.thumbs.swiper.originalParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            Object.assign(swiper.thumbs.swiper.params, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            swiper.thumbs.swiper.update();
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])(thumbsParams.swiper)) {
            const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
            Object.assign(thumbsSwiperParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
            swiperCreated = true;
        }
        swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
        swiper.thumbs.swiper.on('tap', onThumbClick);
        return true;
    }
    function update(initial) {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
        // Activate thumbs
        let thumbsToActivate = 1;
        const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
        if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
            thumbsToActivate = swiper.params.slidesPerView;
        }
        if (!swiper.params.thumbs.multipleActiveThumbs) {
            thumbsToActivate = 1;
        }
        thumbsToActivate = Math.floor(thumbsToActivate);
        thumbsSwiper.slides.forEach((slideEl)=>slideEl.classList.remove(thumbActiveClass));
        if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
            for(let i = 0; i < thumbsToActivate; i += 1){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach((slideEl)=>{
                    slideEl.classList.add(thumbActiveClass);
                });
            }
        } else {
            for(let i = 0; i < thumbsToActivate; i += 1){
                if (thumbsSwiper.slides[swiper.realIndex + i]) {
                    thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
                }
            }
        }
        const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
        const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
        if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
            const currentThumbsIndex = thumbsSwiper.activeIndex;
            let newThumbsIndex;
            let direction;
            if (thumbsSwiper.params.loop) {
                const newThumbsSlide = thumbsSwiper.slides.find((slideEl)=>slideEl.getAttribute('data-swiper-slide-index') === `${swiper.realIndex}`);
                newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
                direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
            } else {
                newThumbsIndex = swiper.realIndex;
                direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
            }
            if (useOffset) {
                newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
            }
            if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                if (thumbsSwiper.params.centeredSlides) {
                    if (newThumbsIndex > currentThumbsIndex) {
                        newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                    } else {
                        newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                    }
                } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
                thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
            }
        }
    }
    on('beforeInit', ()=>{
        const { thumbs } = swiper.params;
        if (!thumbs || !thumbs.swiper) return;
        if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {
            const document = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$ssr$2d$window$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])();
            const getThumbsElementAndInit = ()=>{
                const thumbsElement = typeof thumbs.swiper === 'string' ? document.querySelector(thumbs.swiper) : thumbs.swiper;
                if (thumbsElement && thumbsElement.swiper) {
                    thumbs.swiper = thumbsElement.swiper;
                    init();
                    update(true);
                } else if (thumbsElement) {
                    const eventName = `${swiper.params.eventsPrefix}init`;
                    const onThumbsSwiper = (e)=>{
                        thumbs.swiper = e.detail[0];
                        thumbsElement.removeEventListener(eventName, onThumbsSwiper);
                        init();
                        update(true);
                        thumbs.swiper.update();
                        swiper.update();
                    };
                    thumbsElement.addEventListener(eventName, onThumbsSwiper);
                }
                return thumbsElement;
            };
            const watchForThumbsToAppear = ()=>{
                if (swiper.destroyed) return;
                const thumbsElement = getThumbsElementAndInit();
                if (!thumbsElement) {
                    requestAnimationFrame(watchForThumbsToAppear);
                }
            };
            requestAnimationFrame(watchForThumbsToAppear);
        } else {
            init();
            update(true);
        }
    });
    on('slideChange update resize observerUpdate', ()=>{
        update();
    });
    on('setTransition', (_s, duration)=>{
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        thumbsSwiper.setTransition(duration);
    });
    on('beforeDestroy', ()=>{
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        if (swiperCreated) {
            thumbsSwiper.destroy();
        }
    });
    Object.assign(swiper.thumbs, {
        init,
        update
    });
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/free-mode.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>freeMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
function freeMode({ swiper, extendParams, emit, once }) {
    extendParams({
        freeMode: {
            enabled: false,
            momentum: true,
            momentumRatio: 1,
            momentumBounce: true,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: false,
            minimumVelocity: 0.02
        }
    });
    function onTouchStart() {
        if (swiper.params.cssMode) return;
        const translate = swiper.getTranslate();
        swiper.setTranslate(translate);
        swiper.setTransition(0);
        swiper.touchEventsData.velocities.length = 0;
        swiper.freeMode.onTouchEnd({
            currentPos: swiper.rtl ? swiper.translate : -swiper.translate
        });
    }
    function onTouchMove() {
        if (swiper.params.cssMode) return;
        const { touchEventsData: data, touches } = swiper;
        // Velocity
        if (data.velocities.length === 0) {
            data.velocities.push({
                position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
                time: data.touchStartTime
            });
        }
        data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
            time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])()
        });
    }
    function onTouchEnd({ currentPos }) {
        if (swiper.params.cssMode) return;
        const { params, wrapperEl, rtlTranslate: rtl, snapGrid, touchEventsData: data } = swiper;
        // Time diff
        const touchEndTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])();
        const timeDiff = touchEndTime - data.touchStartTime;
        if (currentPos < -swiper.minTranslate()) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (currentPos > -swiper.maxTranslate()) {
            if (swiper.slides.length < snapGrid.length) {
                swiper.slideTo(snapGrid.length - 1);
            } else {
                swiper.slideTo(swiper.slides.length - 1);
            }
            return;
        }
        if (params.freeMode.momentum) {
            if (data.velocities.length > 1) {
                const lastMoveEvent = data.velocities.pop();
                const velocityEvent = data.velocities.pop();
                const distance = lastMoveEvent.position - velocityEvent.position;
                const time = lastMoveEvent.time - velocityEvent.time;
                swiper.velocity = distance / time;
                swiper.velocity /= 2;
                if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
                    swiper.velocity = 0;
                }
                // this implies that the user stopped moving a finger then released.
                // There would be no events with distance zero, so the last event is stale.
                if (time > 150 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])() - lastMoveEvent.time > 300) {
                    swiper.velocity = 0;
                }
            } else {
                swiper.velocity = 0;
            }
            swiper.velocity *= params.freeMode.momentumVelocityRatio;
            data.velocities.length = 0;
            let momentumDuration = 1000 * params.freeMode.momentumRatio;
            const momentumDistance = swiper.velocity * momentumDuration;
            let newPosition = swiper.translate + momentumDistance;
            if (rtl) newPosition = -newPosition;
            let doBounce = false;
            let afterBouncePosition;
            const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
            let needsLoopFix;
            if (newPosition < swiper.maxTranslate()) {
                if (params.freeMode.momentumBounce) {
                    if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                        newPosition = swiper.maxTranslate() - bounceAmount;
                    }
                    afterBouncePosition = swiper.maxTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                } else {
                    newPosition = swiper.maxTranslate();
                }
                if (params.loop && params.centeredSlides) needsLoopFix = true;
            } else if (newPosition > swiper.minTranslate()) {
                if (params.freeMode.momentumBounce) {
                    if (newPosition - swiper.minTranslate() > bounceAmount) {
                        newPosition = swiper.minTranslate() + bounceAmount;
                    }
                    afterBouncePosition = swiper.minTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                } else {
                    newPosition = swiper.minTranslate();
                }
                if (params.loop && params.centeredSlides) needsLoopFix = true;
            } else if (params.freeMode.sticky) {
                let nextSlide;
                for(let j = 0; j < snapGrid.length; j += 1){
                    if (snapGrid[j] > -newPosition) {
                        nextSlide = j;
                        break;
                    }
                }
                if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
                    newPosition = snapGrid[nextSlide];
                } else {
                    newPosition = snapGrid[nextSlide - 1];
                }
                newPosition = -newPosition;
            }
            if (needsLoopFix) {
                once('transitionEnd', ()=>{
                    swiper.loopFix();
                });
            }
            // Fix duration
            if (swiper.velocity !== 0) {
                if (rtl) {
                    momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                } else {
                    momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                }
                if (params.freeMode.sticky) {
                    // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
                    // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                    // It's easy to see this when simulating touch with mouse events. To fix this,
                    // limit single-slide swipes to the default slide duration. This also has the
                    // nice side effect of matching slide speed if the user stopped moving before
                    // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                    // For faster swipes, also apply limits (albeit higher ones).
                    const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                    const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
                    if (moveDistance < currentSlideSize) {
                        momentumDuration = params.speed;
                    } else if (moveDistance < 2 * currentSlideSize) {
                        momentumDuration = params.speed * 1.5;
                    } else {
                        momentumDuration = params.speed * 2.5;
                    }
                }
            } else if (params.freeMode.sticky) {
                swiper.slideToClosest();
                return;
            }
            if (params.freeMode.momentumBounce && doBounce) {
                swiper.updateProgress(afterBouncePosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                swiper.animating = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(wrapperEl, ()=>{
                    if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                    emit('momentumBounce');
                    swiper.setTransition(params.speed);
                    setTimeout(()=>{
                        swiper.setTranslate(afterBouncePosition);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(wrapperEl, ()=>{
                            if (!swiper || swiper.destroyed) return;
                            swiper.transitionEnd();
                        });
                    }, 0);
                });
            } else if (swiper.velocity) {
                emit('_freeModeNoMomentumRelease');
                swiper.updateProgress(newPosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                if (!swiper.animating) {
                    swiper.animating = true;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(wrapperEl, ()=>{
                        if (!swiper || swiper.destroyed) return;
                        swiper.transitionEnd();
                    });
                }
            } else {
                swiper.updateProgress(newPosition);
            }
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        } else if (params.freeMode.sticky) {
            swiper.slideToClosest();
            return;
        } else if (params.freeMode) {
            emit('_freeModeNoMomentumRelease');
        }
        if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
            emit('_freeModeStaticRelease');
            swiper.updateProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
    }
    Object.assign(swiper, {
        freeMode: {
            onTouchStart,
            onTouchMove,
            onTouchEnd
        }
    });
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/grid.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Grid
]);
function Grid({ swiper, extendParams, on }) {
    extendParams({
        grid: {
            rows: 1,
            fill: 'column'
        }
    });
    let slidesNumberEvenToRows;
    let slidesPerRow;
    let numFullColumns;
    let wasMultiRow;
    const getSpaceBetween = ()=>{
        let spaceBetween = swiper.params.spaceBetween;
        if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
            spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
        } else if (typeof spaceBetween === 'string') {
            spaceBetween = parseFloat(spaceBetween);
        }
        return spaceBetween;
    };
    const initSlides = (slides)=>{
        const { slidesPerView } = swiper.params;
        const { rows, fill } = swiper.params.grid;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
        numFullColumns = Math.floor(slidesLength / rows);
        if (Math.floor(slidesLength / rows) === slidesLength / rows) {
            slidesNumberEvenToRows = slidesLength;
        } else {
            slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
        }
        if (slidesPerView !== 'auto' && fill === 'row') {
            slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
        }
        slidesPerRow = slidesNumberEvenToRows / rows;
    };
    const unsetSlides = ()=>{
        if (swiper.slides) {
            swiper.slides.forEach((slide)=>{
                if (slide.swiperSlideGridSet) {
                    slide.style.height = '';
                    slide.style[swiper.getDirectionLabel('margin-top')] = '';
                }
            });
        }
    };
    const updateSlide = (i, slide, slides)=>{
        const { slidesPerGroup } = swiper.params;
        const spaceBetween = getSpaceBetween();
        const { rows, fill } = swiper.params.grid;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
        // Set slides order
        let newSlideOrderIndex;
        let column;
        let row;
        if (fill === 'row' && slidesPerGroup > 1) {
            const groupIndex = Math.floor(i / (slidesPerGroup * rows));
            const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
            const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
            row = Math.floor(slideIndexInGroup / columnsInGroup);
            column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
            newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
            slide.style.order = newSlideOrderIndex;
        } else if (fill === 'column') {
            column = Math.floor(i / rows);
            row = i - column * rows;
            if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
                row += 1;
                if (row >= rows) {
                    row = 0;
                    column += 1;
                }
            }
        } else {
            row = Math.floor(i / slidesPerRow);
            column = i - row * slidesPerRow;
        }
        slide.row = row;
        slide.column = column;
        slide.style.height = `calc((100% - ${(rows - 1) * spaceBetween}px) / ${rows})`;
        slide.style[swiper.getDirectionLabel('margin-top')] = row !== 0 ? spaceBetween && `${spaceBetween}px` : '';
        slide.swiperSlideGridSet = true;
    };
    const updateWrapperSize = (slideSize, snapGrid)=>{
        const { centeredSlides, roundLengths } = swiper.params;
        const spaceBetween = getSpaceBetween();
        const { rows } = swiper.params.grid;
        swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
        swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
        if (!swiper.params.cssMode) {
            swiper.wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
        }
        if (centeredSlides) {
            const newSlidesGrid = [];
            for(let i = 0; i < snapGrid.length; i += 1){
                let slidesGridItem = snapGrid[i];
                if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
            }
            snapGrid.splice(0, snapGrid.length);
            snapGrid.push(...newSlidesGrid);
        }
    };
    const onInit = ()=>{
        wasMultiRow = swiper.params.grid && swiper.params.grid.rows > 1;
    };
    const onUpdate = ()=>{
        const { params, el } = swiper;
        const isMultiRow = params.grid && params.grid.rows > 1;
        if (wasMultiRow && !isMultiRow) {
            el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
            numFullColumns = 1;
            swiper.emitContainerClasses();
        } else if (!wasMultiRow && isMultiRow) {
            el.classList.add(`${params.containerModifierClass}grid`);
            if (params.grid.fill === 'column') {
                el.classList.add(`${params.containerModifierClass}grid-column`);
            }
            swiper.emitContainerClasses();
        }
        wasMultiRow = isMultiRow;
    };
    on('init', onInit);
    on('update', onUpdate);
    swiper.grid = {
        initSlides,
        unsetSlides,
        updateSlide,
        updateWrapperSize
    };
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/manipulation.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Manipulation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
function appendSlide(slides) {
    const swiper = this;
    const { params, slidesEl } = swiper;
    if (params.loop) {
        swiper.loopDestroy();
    }
    const appendElement = (slideEl)=>{
        if (typeof slideEl === 'string') {
            const tempDOM = document.createElement('div');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(tempDOM, slideEl);
            slidesEl.append(tempDOM.children[0]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(tempDOM, '');
        } else {
            slidesEl.append(slideEl);
        }
    };
    if (typeof slides === 'object' && 'length' in slides) {
        for(let i = 0; i < slides.length; i += 1){
            if (slides[i]) appendElement(slides[i]);
        }
    } else {
        appendElement(slides);
    }
    swiper.recalcSlides();
    if (params.loop) {
        swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
        swiper.update();
    }
}
function prependSlide(slides) {
    const swiper = this;
    const { params, activeIndex, slidesEl } = swiper;
    if (params.loop) {
        swiper.loopDestroy();
    }
    let newActiveIndex = activeIndex + 1;
    const prependElement = (slideEl)=>{
        if (typeof slideEl === 'string') {
            const tempDOM = document.createElement('div');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(tempDOM, slideEl);
            slidesEl.prepend(tempDOM.children[0]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(tempDOM, '');
        } else {
            slidesEl.prepend(slideEl);
        }
    };
    if (typeof slides === 'object' && 'length' in slides) {
        for(let i = 0; i < slides.length; i += 1){
            if (slides[i]) prependElement(slides[i]);
        }
        newActiveIndex = activeIndex + slides.length;
    } else {
        prependElement(slides);
    }
    swiper.recalcSlides();
    if (params.loop) {
        swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
        swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
}
function addSlide(index, slides) {
    const swiper = this;
    const { params, activeIndex, slidesEl } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.recalcSlides();
    }
    const baseLength = swiper.slides.length;
    if (index <= 0) {
        swiper.prependSlide(slides);
        return;
    }
    if (index >= baseLength) {
        swiper.appendSlide(slides);
        return;
    }
    let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    const slidesBuffer = [];
    for(let i = baseLength - 1; i >= index; i -= 1){
        const currentSlide = swiper.slides[i];
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
    }
    if (typeof slides === 'object' && 'length' in slides) {
        for(let i = 0; i < slides.length; i += 1){
            if (slides[i]) slidesEl.append(slides[i]);
        }
        newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else {
        slidesEl.append(slides);
    }
    for(let i = 0; i < slidesBuffer.length; i += 1){
        slidesEl.append(slidesBuffer[i]);
    }
    swiper.recalcSlides();
    if (params.loop) {
        swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
        swiper.update();
    }
    if (params.loop) {
        swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
        swiper.slideTo(newActiveIndex, 0, false);
    }
}
function removeSlide(slidesIndexes) {
    const swiper = this;
    const { params, activeIndex } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
    }
    let newActiveIndex = activeIndexBuffer;
    let indexToRemove;
    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
        for(let i = 0; i < slidesIndexes.length; i += 1){
            indexToRemove = slidesIndexes[i];
            if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
            if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        }
        newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
        indexToRemove = slidesIndexes;
        if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        newActiveIndex = Math.max(newActiveIndex, 0);
    }
    swiper.recalcSlides();
    if (params.loop) {
        swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
        swiper.update();
    }
    if (params.loop) {
        swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
        swiper.slideTo(newActiveIndex, 0, false);
    }
}
function removeAllSlides() {
    const swiper = this;
    const slidesIndexes = [];
    for(let i = 0; i < swiper.slides.length; i += 1){
        slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
}
function Manipulation({ swiper }) {
    Object.assign(swiper, {
        appendSlide: appendSlide.bind(swiper),
        prependSlide: prependSlide.bind(swiper),
        addSlide: addSlide.bind(swiper),
        removeSlide: removeSlide.bind(swiper),
        removeAllSlides: removeAllSlides.bind(swiper)
    });
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/shared/effect-init.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "e",
    ()=>effectInit
]);
function effectInit(params) {
    const { effect, swiper, on, setTranslate, setTransition, overwriteParams, perspective, recreateShadows, getEffectParams } = params;
    on('beforeInit', ()=>{
        if (swiper.params.effect !== effect) return;
        swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
        if (perspective && perspective()) {
            swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        }
        const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
        Object.assign(swiper.params, overwriteParamsResult);
        Object.assign(swiper.originalParams, overwriteParamsResult);
    });
    on('setTranslate _virtualUpdated', ()=>{
        if (swiper.params.effect !== effect) return;
        setTranslate();
    });
    on('setTransition', (_s, duration)=>{
        if (swiper.params.effect !== effect) return;
        setTransition(duration);
    });
    on('transitionEnd', ()=>{
        if (swiper.params.effect !== effect) return;
        if (recreateShadows) {
            if (!getEffectParams || !getEffectParams().slideShadows) return;
            // remove shadows
            swiper.slides.forEach((slideEl)=>{
                slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach((shadowEl)=>shadowEl.remove());
            });
            // create new one
            recreateShadows();
        }
    });
    let requireUpdateOnVirtual;
    on('virtualUpdate', ()=>{
        if (swiper.params.effect !== effect) return;
        if (!swiper.slides.length) {
            requireUpdateOnVirtual = true;
        }
        requestAnimationFrame(()=>{
            if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
                setTranslate();
                requireUpdateOnVirtual = false;
            }
        });
    });
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/shared/effect-target.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "e",
    ()=>effectTarget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
function effectTarget(effectParams, slideEl) {
    const transformEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(slideEl);
    if (transformEl !== slideEl) {
        transformEl.style.backfaceVisibility = 'hidden';
        transformEl.style['-webkit-backface-visibility'] = 'hidden';
    }
    return transformEl;
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/shared/effect-virtual-transition-end.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "e",
    ()=>effectVirtualTransitionEnd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
function effectVirtualTransitionEnd({ swiper, duration, transformElements, allSlides }) {
    const { activeIndex } = swiper;
    const getSlide = (el)=>{
        if (!el.parentElement) {
            // assume shadow root
            const slide = swiper.slides.find((slideEl)=>slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode);
            return slide;
        }
        return el.parentElement;
    };
    if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        let transitionEndTarget;
        if (allSlides) {
            transitionEndTarget = transformElements;
        } else {
            transitionEndTarget = transformElements.filter((transformEl)=>{
                const el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;
                return swiper.getSlideIndex(el) === activeIndex;
            });
        }
        transitionEndTarget.forEach((el)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(el, ()=>{
                if (eventTriggered) return;
                if (!swiper || swiper.destroyed) return;
                eventTriggered = true;
                swiper.animating = false;
                const evt = new window.CustomEvent('transitionend', {
                    bubbles: true,
                    cancelable: true
                });
                swiper.wrapperEl.dispatchEvent(evt);
            });
        });
    }
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/effect-fade.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EffectFade
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$init$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/effect-init.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$target$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/effect-target.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$virtual$2d$transition$2d$end$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/effect-virtual-transition-end.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
;
;
;
function EffectFade({ swiper, extendParams, on }) {
    extendParams({
        fadeEffect: {
            crossFade: false
        }
    });
    const setTranslate = ()=>{
        const { slides } = swiper;
        const params = swiper.params.fadeEffect;
        for(let i = 0; i < slides.length; i += 1){
            const slideEl = swiper.slides[i];
            const offset = slideEl.swiperSlideOffset;
            let tx = -offset;
            if (!swiper.params.virtualTranslate) tx -= swiper.translate;
            let ty = 0;
            if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
            }
            const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
            const targetEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$target$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(params, slideEl);
            targetEl.style.opacity = slideOpacity;
            targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
        }
    };
    const setTransition = (duration)=>{
        const transformElements = swiper.slides.map((slideEl)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(slideEl));
        transformElements.forEach((el)=>{
            el.style.transitionDuration = `${duration}ms`;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$virtual$2d$transition$2d$end$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])({
            swiper,
            duration,
            transformElements,
            allSlides: true
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$init$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])({
        effect: 'fade',
        swiper,
        on,
        setTranslate,
        setTransition,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/effect-cube.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EffectCube
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$init$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/effect-init.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
;
function EffectCube({ swiper, extendParams, on }) {
    extendParams({
        cubeEffect: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }
    });
    const createSlideShadows = (slideEl, progress, isHorizontal)=>{
        let shadowBefore = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
        let shadowAfter = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
        if (!shadowBefore) {
            shadowBefore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}`.split(' '));
            slideEl.append(shadowBefore);
        }
        if (!shadowAfter) {
            shadowAfter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}`.split(' '));
            slideEl.append(shadowAfter);
        }
        if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
        if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = ()=>{
        // create new ones
        const isHorizontal = swiper.isHorizontal();
        swiper.slides.forEach((slideEl)=>{
            const progress = Math.max(Math.min(slideEl.progress, 1), -1);
            createSlideShadows(slideEl, progress, isHorizontal);
        });
    };
    const setTranslate = ()=>{
        const { el, wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize, browser } = swiper;
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(swiper);
        const params = swiper.params.cubeEffect;
        const isHorizontal = swiper.isHorizontal();
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let wrapperRotate = 0;
        let cubeShadowEl;
        if (params.shadow) {
            if (isHorizontal) {
                cubeShadowEl = swiper.wrapperEl.querySelector('.swiper-cube-shadow');
                if (!cubeShadowEl) {
                    cubeShadowEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])('div', 'swiper-cube-shadow');
                    swiper.wrapperEl.append(cubeShadowEl);
                }
                cubeShadowEl.style.height = `${swiperWidth}px`;
            } else {
                cubeShadowEl = el.querySelector('.swiper-cube-shadow');
                if (!cubeShadowEl) {
                    cubeShadowEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])('div', 'swiper-cube-shadow');
                    el.append(cubeShadowEl);
                }
            }
        }
        for(let i = 0; i < slides.length; i += 1){
            const slideEl = slides[i];
            let slideIndex = i;
            if (isVirtual) {
                slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10);
            }
            let slideAngle = slideIndex * 90;
            let round = Math.floor(slideAngle / 360);
            if (rtl) {
                slideAngle = -slideAngle;
                round = Math.floor(-slideAngle / 360);
            }
            const progress = Math.max(Math.min(slideEl.progress, 1), -1);
            let tx = 0;
            let ty = 0;
            let tz = 0;
            if (slideIndex % 4 === 0) {
                tx = -round * 4 * swiperSize;
                tz = 0;
            } else if ((slideIndex - 1) % 4 === 0) {
                tx = 0;
                tz = -round * 4 * swiperSize;
            } else if ((slideIndex - 2) % 4 === 0) {
                tx = swiperSize + round * 4 * swiperSize;
                tz = swiperSize;
            } else if ((slideIndex - 3) % 4 === 0) {
                tx = -swiperSize;
                tz = 3 * swiperSize + swiperSize * 4 * round;
            }
            if (rtl) {
                tx = -tx;
            }
            if (!isHorizontal) {
                ty = tx;
                tx = 0;
            }
            const transform = `rotateX(${r(isHorizontal ? 0 : -slideAngle)}deg) rotateY(${r(isHorizontal ? slideAngle : 0)}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
            if (progress <= 1 && progress > -1) {
                wrapperRotate = slideIndex * 90 + progress * 90;
                if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
            }
            slideEl.style.transform = transform;
            if (params.slideShadows) {
                createSlideShadows(slideEl, progress, isHorizontal);
            }
        }
        wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
        wrapperEl.style['-webkit-transform-origin'] = `50% 50% -${swiperSize / 2}px`;
        if (params.shadow) {
            if (isHorizontal) {
                cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${params.shadowScale})`;
            } else {
                const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                const scale1 = params.shadowScale;
                const scale2 = params.shadowScale / multiplier;
                const offset = params.shadowOffset;
                cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-89.99deg)`;
            }
        }
        const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
        wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${r(swiper.isHorizontal() ? 0 : wrapperRotate)}deg) rotateY(${r(swiper.isHorizontal() ? -wrapperRotate : 0)}deg)`;
        wrapperEl.style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
    };
    const setTransition = (duration)=>{
        const { el, slides } = swiper;
        slides.forEach((slideEl)=>{
            slideEl.style.transitionDuration = `${duration}ms`;
            slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach((subEl)=>{
                subEl.style.transitionDuration = `${duration}ms`;
            });
        });
        if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
            const shadowEl = el.querySelector('.swiper-cube-shadow');
            if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$init$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])({
        effect: 'cube',
        swiper,
        on,
        setTranslate,
        setTransition,
        recreateShadows,
        getEffectParams: ()=>swiper.params.cubeEffect,
        perspective: ()=>true,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: false,
                virtualTranslate: true
            })
    });
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/shared/create-shadow.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "c",
    ()=>createShadow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
function createShadow(suffix, slideEl, side) {
    const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}${suffix ? ` swiper-slide-shadow-${suffix}` : ''}`;
    const shadowContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(slideEl);
    let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(' ').join('.')}`);
    if (!shadowEl) {
        shadowEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])('div', shadowClass.split(' '));
        shadowContainer.append(shadowEl);
    }
    return shadowEl;
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/effect-flip.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EffectFlip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$create$2d$shadow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/create-shadow.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$init$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/effect-init.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$target$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/effect-target.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$virtual$2d$transition$2d$end$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/effect-virtual-transition-end.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
function EffectFlip({ swiper, extendParams, on }) {
    extendParams({
        flipEffect: {
            slideShadows: true,
            limitRotation: true
        }
    });
    const createSlideShadows = (slideEl, progress)=>{
        let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
        let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
        if (!shadowBefore) {
            shadowBefore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$create$2d$shadow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])('flip', slideEl, swiper.isHorizontal() ? 'left' : 'top');
        }
        if (!shadowAfter) {
            shadowAfter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$create$2d$shadow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])('flip', slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
        }
        if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
        if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = ()=>{
        // Set shadows
        swiper.params.flipEffect;
        swiper.slides.forEach((slideEl)=>{
            let progress = slideEl.progress;
            if (swiper.params.flipEffect.limitRotation) {
                progress = Math.max(Math.min(slideEl.progress, 1), -1);
            }
            createSlideShadows(slideEl, progress);
        });
    };
    const setTranslate = ()=>{
        const { slides, rtlTranslate: rtl } = swiper;
        const params = swiper.params.flipEffect;
        const rotateFix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(swiper);
        for(let i = 0; i < slides.length; i += 1){
            const slideEl = slides[i];
            let progress = slideEl.progress;
            if (swiper.params.flipEffect.limitRotation) {
                progress = Math.max(Math.min(slideEl.progress, 1), -1);
            }
            const offset = slideEl.swiperSlideOffset;
            const rotate = -180 * progress;
            let rotateY = rotate;
            let rotateX = 0;
            let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
            let ty = 0;
            if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
                rotateX = -rotateY;
                rotateY = 0;
            } else if (rtl) {
                rotateY = -rotateY;
            }
            slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
            if (params.slideShadows) {
                createSlideShadows(slideEl, progress);
            }
            const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateFix(rotateX)}deg) rotateY(${rotateFix(rotateY)}deg)`;
            const targetEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$target$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(params, slideEl);
            targetEl.style.transform = transform;
        }
    };
    const setTransition = (duration)=>{
        const transformElements = swiper.slides.map((slideEl)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(slideEl));
        transformElements.forEach((el)=>{
            el.style.transitionDuration = `${duration}ms`;
            el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach((shadowEl)=>{
                shadowEl.style.transitionDuration = `${duration}ms`;
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$virtual$2d$transition$2d$end$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])({
            swiper,
            duration,
            transformElements
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$init$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])({
        effect: 'flip',
        swiper,
        on,
        setTranslate,
        setTransition,
        recreateShadows,
        getEffectParams: ()=>swiper.params.flipEffect,
        perspective: ()=>true,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/effect-coverflow.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EffectCoverflow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$create$2d$shadow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/create-shadow.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$init$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/effect-init.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$target$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/effect-target.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
;
;
;
function EffectCoverflow({ swiper, extendParams, on }) {
    extendParams({
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: true
        }
    });
    const setTranslate = ()=>{
        const { width: swiperWidth, height: swiperHeight, slides, slidesSizesGrid } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform = swiper.translate;
        const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth;
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(swiper);
        // Each slide offset from center
        for(let i = 0, length = slides.length; i < length; i += 1){
            const slideEl = slides[i];
            const slideSize = slidesSizesGrid[i];
            const slideOffset = slideEl.swiperSlideOffset;
            const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
            const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
            let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
            let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
            // var rotateZ = 0
            let translateZ = -translate * Math.abs(offsetMultiplier);
            let stretch = params.stretch;
            // Allow percentage to make a relative stretch for responsive sliders
            if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
                stretch = parseFloat(params.stretch) / 100 * slideSize;
            }
            let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
            let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
            let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
            // Fix for ultra small values
            if (Math.abs(translateX) < 0.001) translateX = 0;
            if (Math.abs(translateY) < 0.001) translateY = 0;
            if (Math.abs(translateZ) < 0.001) translateZ = 0;
            if (Math.abs(rotateY) < 0.001) rotateY = 0;
            if (Math.abs(rotateX) < 0.001) rotateX = 0;
            if (Math.abs(scale) < 0.001) scale = 0;
            const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${r(rotateX)}deg) rotateY(${r(rotateY)}deg) scale(${scale})`;
            const targetEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$target$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(params, slideEl);
            targetEl.style.transform = slideTransform;
            slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
            if (params.slideShadows) {
                // Set shadows
                let shadowBeforeEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
                let shadowAfterEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
                if (!shadowBeforeEl) {
                    shadowBeforeEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$create$2d$shadow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])('coverflow', slideEl, isHorizontal ? 'left' : 'top');
                }
                if (!shadowAfterEl) {
                    shadowAfterEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$create$2d$shadow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])('coverflow', slideEl, isHorizontal ? 'right' : 'bottom');
                }
                if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
            }
        }
    };
    const setTransition = (duration)=>{
        const transformElements = swiper.slides.map((slideEl)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(slideEl));
        transformElements.forEach((el)=>{
            el.style.transitionDuration = `${duration}ms`;
            el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach((shadowEl)=>{
                shadowEl.style.transitionDuration = `${duration}ms`;
            });
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$init$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])({
        effect: 'coverflow',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>true,
        overwriteParams: ()=>({
                watchSlidesProgress: true
            })
    });
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/effect-creative.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EffectCreative
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$create$2d$shadow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/create-shadow.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$init$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/effect-init.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$target$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/effect-target.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$virtual$2d$transition$2d$end$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/effect-virtual-transition-end.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
function EffectCreative({ swiper, extendParams, on }) {
    extendParams({
        creativeEffect: {
            limitProgress: 1,
            shadowPerProgress: false,
            progressMultiplier: 1,
            perspective: true,
            prev: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            },
            next: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            }
        }
    });
    const getTranslateValue = (value)=>{
        if (typeof value === 'string') return value;
        return `${value}px`;
    };
    const setTranslate = ()=>{
        const { slides, wrapperEl, slidesSizesGrid } = swiper;
        const params = swiper.params.creativeEffect;
        const { progressMultiplier: multiplier } = params;
        const isCenteredSlides = swiper.params.centeredSlides;
        const rotateFix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(swiper);
        if (isCenteredSlides) {
            const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
            wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
        }
        for(let i = 0; i < slides.length; i += 1){
            const slideEl = slides[i];
            const slideProgress = slideEl.progress;
            const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
            let originalProgress = progress;
            if (!isCenteredSlides) {
                originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
            }
            const offset = slideEl.swiperSlideOffset;
            const t = [
                swiper.params.cssMode ? -offset - swiper.translate : -offset,
                0,
                0
            ];
            const r = [
                0,
                0,
                0
            ];
            let custom = false;
            if (!swiper.isHorizontal()) {
                t[1] = t[0];
                t[0] = 0;
            }
            let data = {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                scale: 1,
                opacity: 1
            };
            if (progress < 0) {
                data = params.next;
                custom = true;
            } else if (progress > 0) {
                data = params.prev;
                custom = true;
            }
            // set translate
            t.forEach((value, index)=>{
                t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
            });
            // set rotates
            r.forEach((value, index)=>{
                let val = data.rotate[index] * Math.abs(progress * multiplier);
                r[index] = val;
            });
            slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
            const translateString = t.join(', ');
            const rotateString = `rotateX(${rotateFix(r[0])}deg) rotateY(${rotateFix(r[1])}deg) rotateZ(${rotateFix(r[2])}deg)`;
            const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
            const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
            const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;
            // Set shadows
            if (custom && data.shadow || !custom) {
                let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
                if (!shadowEl && data.shadow) {
                    shadowEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$create$2d$shadow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])('creative', slideEl);
                }
                if (shadowEl) {
                    const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
                    shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
                }
            }
            const targetEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$target$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(params, slideEl);
            targetEl.style.transform = transform;
            targetEl.style.opacity = opacityString;
            if (data.origin) {
                targetEl.style.transformOrigin = data.origin;
            }
        }
    };
    const setTransition = (duration)=>{
        const transformElements = swiper.slides.map((slideEl)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(slideEl));
        transformElements.forEach((el)=>{
            el.style.transitionDuration = `${duration}ms`;
            el.querySelectorAll('.swiper-slide-shadow').forEach((shadowEl)=>{
                shadowEl.style.transitionDuration = `${duration}ms`;
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$virtual$2d$transition$2d$end$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])({
            swiper,
            duration,
            transformElements,
            allSlides: true
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$init$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])({
        effect: 'creative',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>swiper.params.creativeEffect.perspective,
        overwriteParams: ()=>({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/effect-cards.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EffectCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$create$2d$shadow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/create-shadow.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$init$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/effect-init.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$target$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/effect-target.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$virtual$2d$transition$2d$end$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/effect-virtual-transition-end.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
function EffectCards({ swiper, extendParams, on }) {
    extendParams({
        cardsEffect: {
            slideShadows: true,
            rotate: true,
            perSlideRotate: 2,
            perSlideOffset: 8
        }
    });
    const setTranslate = ()=>{
        const { slides, activeIndex, rtlTranslate: rtl } = swiper;
        const params = swiper.params.cardsEffect;
        const { startTranslate, isTouched } = swiper.touchEventsData;
        const currentTranslate = rtl ? -swiper.translate : swiper.translate;
        for(let i = 0; i < slides.length; i += 1){
            const slideEl = slides[i];
            const slideProgress = slideEl.progress;
            const progress = Math.min(Math.max(slideProgress, -4), 4);
            let offset = slideEl.swiperSlideOffset;
            if (swiper.params.centeredSlides && !swiper.params.cssMode) {
                swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
            }
            if (swiper.params.centeredSlides && swiper.params.cssMode) {
                offset -= slides[0].swiperSlideOffset;
            }
            let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
            let tY = 0;
            const tZ = -100 * Math.abs(progress);
            let scale = 1;
            let rotate = -params.perSlideRotate * progress;
            let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
            const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
            const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
            const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
            if (isSwipeToNext || isSwipeToPrev) {
                const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
                rotate += -28 * progress * subProgress;
                scale += -0.5 * subProgress;
                tXAdd += 96 * subProgress;
                tY = `${(params.rotate || swiper.isHorizontal() ? -25 : 0) * subProgress * Math.abs(progress)}%`;
            }
            if (progress < 0) {
                // next
                tX = `calc(${tX}px ${rtl ? '-' : '+'} (${tXAdd * Math.abs(progress)}%))`;
            } else if (progress > 0) {
                // prev
                tX = `calc(${tX}px ${rtl ? '-' : '+'} (-${tXAdd * Math.abs(progress)}%))`;
            } else {
                tX = `${tX}px`;
            }
            if (!swiper.isHorizontal()) {
                const prevY = tY;
                tY = tX;
                tX = prevY;
            }
            const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
            /* eslint-disable */ const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
            /* eslint-enable */ if (params.slideShadows) {
                // Set shadows
                let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
                if (!shadowEl) {
                    shadowEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$create$2d$shadow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])('cards', slideEl);
                }
                if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
            }
            slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
            const targetEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$target$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(params, slideEl);
            targetEl.style.transform = transform;
        }
    };
    const setTransition = (duration)=>{
        const transformElements = swiper.slides.map((slideEl)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(slideEl));
        transformElements.forEach((el)=>{
            el.style.transitionDuration = `${duration}ms`;
            el.querySelectorAll('.swiper-slide-shadow').forEach((shadowEl)=>{
                shadowEl.style.transitionDuration = `${duration}ms`;
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$virtual$2d$transition$2d$end$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])({
            swiper,
            duration,
            transformElements
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$init$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])({
        effect: 'cards',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>true,
        overwriteParams: ()=>({
                _loopSwapReset: false,
                watchSlidesProgress: true,
                loopAdditionalSlides: swiper.params.cardsEffect.rotate ? 3 : 2,
                centeredSlides: true,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$virtual$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/virtual.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$keyboard$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/keyboard.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$mousewheel$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/mousewheel.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/navigation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/pagination.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$scrollbar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/scrollbar.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$parallax$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/parallax.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$zoom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/zoom.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$controller$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/controller.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$a11y$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/a11y.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$history$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/history.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$hash$2d$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/hash-navigation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/autoplay.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$thumbs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/thumbs.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$free$2d$mode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/free-mode.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$grid$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/grid.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$manipulation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/manipulation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$fade$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/effect-fade.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$cube$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/effect-cube.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$flip$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/effect-flip.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$coverflow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/effect-coverflow.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$creative$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/effect-creative.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$cards$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/effect-cards.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/webthethao2.0/node_modules/swiper/modules/navigation.mjs [app-ssr] (ecmascript) <export default as Navigation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/navigation.mjs [app-ssr] (ecmascript)");
}),
"[project]/webthethao2.0/node_modules/swiper/modules/pagination.mjs [app-ssr] (ecmascript) <export default as Pagination>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pagination",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/pagination.mjs [app-ssr] (ecmascript)");
}),
"[project]/webthethao2.0/node_modules/swiper/modules/free-mode.mjs [app-ssr] (ecmascript) <export default as FreeMode>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FreeMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$free$2d$mode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$webthethao2$2e$0$2f$node_modules$2f$swiper$2f$modules$2f$free$2d$mode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/webthethao2.0/node_modules/swiper/modules/free-mode.mjs [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=f181b_87279319._.js.map