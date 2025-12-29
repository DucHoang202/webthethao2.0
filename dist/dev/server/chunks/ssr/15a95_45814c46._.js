module.exports = [
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactDOM; //# sourceMappingURL=react-dom.js.map
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxRuntime; //# sourceMappingURL=react-jsx-runtime.js.map
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-is/cjs/react-is.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-is/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-is/cjs/react-is.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/object-assign/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/prop-types/lib/has.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/prop-types/checkPropTypes.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var ReactPropTypesSecret = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-ssr] (ecmascript)");
    var loggedTypeFailures = {};
    var has = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/prop-types/lib/has.js [app-ssr] (ecmascript)");
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
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/prop-types/factoryWithTypeCheckers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactIs = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-is/index.js [app-ssr] (ecmascript)");
var assign = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/object-assign/index.js [app-ssr] (ecmascript)");
var ReactPropTypesSecret = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-ssr] (ecmascript)");
var has = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/prop-types/lib/has.js [app-ssr] (ecmascript)");
var checkPropTypes = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/prop-types/checkPropTypes.js [app-ssr] (ecmascript)");
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
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/prop-types/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("TURBOPACK compile-time truthy", 1) {
    var ReactIs = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-is/index.js [app-ssr] (ecmascript)");
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/prop-types/factoryWithTypeCheckers.js [app-ssr] (ecmascript)")(ReactIs.isElement, throwOnDirectAccess);
} else //TURBOPACK unreachable
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/helpers/baseStyles.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/helpers/dom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/components/BurgerIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
var _react = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _propTypes = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
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
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/components/CrossIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
var _react = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _propTypes = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
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
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menuFactory.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
var _react = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _reactDom = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var _reactDom2 = _interopRequireDefault(_reactDom);
var _propTypes = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var _propTypes2 = _interopRequireDefault(_propTypes);
var _helpersBaseStyles = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/helpers/baseStyles.js [app-ssr] (ecmascript)");
var _helpersBaseStyles2 = _interopRequireDefault(_helpersBaseStyles);
var _helpersDom = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/helpers/dom.js [app-ssr] (ecmascript)");
var _componentsBurgerIcon = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/components/BurgerIcon.js [app-ssr] (ecmascript)");
var _componentsBurgerIcon2 = _interopRequireDefault(_componentsBurgerIcon);
var _componentsCrossIcon = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/components/CrossIcon.js [app-ssr] (ecmascript)");
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
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menus/slide.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _menuFactory = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menuFactory.js [app-ssr] (ecmascript)");
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var styles = {};
exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menus/stack.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _menuFactory = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menuFactory.js [app-ssr] (ecmascript)");
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
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/helpers/snapsvgImporter.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = function() {
    var Snap = undefined;
    try {
        Snap = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/snapsvg-cjs/dist/snap.svg-cjs.js [app-ssr] (ecmascript)");
    } finally{
        return Snap;
    }
};
module.exports = exports['default'];
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/helpers/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var pxToNum = function pxToNum(val) {
    return parseInt(val.slice(0, -2), 10);
};
exports.pxToNum = pxToNum;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menus/elastic.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _helpersSnapsvgImporter = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/helpers/snapsvgImporter.js [app-ssr] (ecmascript)");
var _helpersSnapsvgImporter2 = _interopRequireDefault(_helpersSnapsvgImporter);
var _menuFactory = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menuFactory.js [app-ssr] (ecmascript)");
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var _helpersUtils = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/helpers/utils.js [app-ssr] (ecmascript)");
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
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menus/bubble.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _helpersSnapsvgImporter = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/helpers/snapsvgImporter.js [app-ssr] (ecmascript)");
var _helpersSnapsvgImporter2 = _interopRequireDefault(_helpersSnapsvgImporter);
var _menuFactory = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menuFactory.js [app-ssr] (ecmascript)");
var _menuFactory2 = _interopRequireDefault(_menuFactory);
var _helpersUtils = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/helpers/utils.js [app-ssr] (ecmascript)");
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
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menus/push.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _menuFactory = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menuFactory.js [app-ssr] (ecmascript)");
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
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menus/pushRotate.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _menuFactory = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menuFactory.js [app-ssr] (ecmascript)");
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
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menus/scaleDown.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _menuFactory = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menuFactory.js [app-ssr] (ecmascript)");
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
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menus/scaleRotate.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _menuFactory = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menuFactory.js [app-ssr] (ecmascript)");
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
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menus/fallDown.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _menuFactory = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menuFactory.js [app-ssr] (ecmascript)");
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
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menus/reveal.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _menuFactory = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menuFactory.js [app-ssr] (ecmascript)");
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
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/BurgerMenu.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = {
    slide: __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menus/slide.js [app-ssr] (ecmascript)"),
    stack: __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menus/stack.js [app-ssr] (ecmascript)"),
    elastic: __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menus/elastic.js [app-ssr] (ecmascript)"),
    bubble: __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menus/bubble.js [app-ssr] (ecmascript)"),
    push: __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menus/push.js [app-ssr] (ecmascript)"),
    pushRotate: __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menus/pushRotate.js [app-ssr] (ecmascript)"),
    scaleDown: __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menus/scaleDown.js [app-ssr] (ecmascript)"),
    scaleRotate: __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menus/scaleRotate.js [app-ssr] (ecmascript)"),
    fallDown: __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menus/fallDown.js [app-ssr] (ecmascript)"),
    reveal: __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-burger-menu/lib/menus/reveal.js [app-ssr] (ecmascript)")
};
module.exports = exports['default'];
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/eve/eve.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/is-object.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isObject",
    ()=>isObject
]);
function isObject(value) {
    return typeof value === "object" && value !== null;
}
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/clamp.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
const clamp = (min, max, v)=>{
    if (v > max) return max;
    if (v < min) return min;
    return v;
};
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatErrorMessage",
    ()=>formatErrorMessage
]);
function formatErrorMessage(message, errorCode) {
    return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
}
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invariant",
    ()=>invariant,
    "warning",
    ()=>warning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)");
;
let warning = ()=>{};
let invariant = ()=>{};
if ("TURBOPACK compile-time truthy", 1) {
    warning = (check, message, errorCode)=>{
        if (!check && typeof console !== "undefined") {
            console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
    invariant = (check, message, errorCode)=>{
        if (!check) {
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
}
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/is-numerical-string.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */ __turbopack_context__.s([
    "isNumericalString",
    ()=>isNumericalString
]);
const isNumericalString = (v)=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "noop",
    ()=>noop
]);
const noop = (any)=>any;
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/global-config.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionGlobalConfig",
    ()=>MotionGlobalConfig
]);
const MotionGlobalConfig = {};
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/is-zero-value-string.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if the value is a zero value string like "0px" or "0%"
 */ __turbopack_context__.s([
    "isZeroValueString",
    ()=>isZeroValueString
]);
const isZeroValueString = (v)=>/^0[^.\s]+$/u.test(v);
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/warn-once.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasWarned",
    ()=>hasWarned,
    "warnOnce",
    ()=>warnOnce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)");
;
const warned = new Set();
function hasWarned(message) {
    return warned.has(message);
}
function warnOnce(condition, message, errorCode) {
    if (condition || warned.has(message)) return;
    console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
    warned.add(message);
}
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/array.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addUniqueItem",
    ()=>addUniqueItem,
    "moveItem",
    ()=>moveItem,
    "removeItem",
    ()=>removeItem
]);
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/subscription-manager.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubscriptionManager",
    ()=>SubscriptionManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/array.mjs [app-ssr] (ecmascript)");
;
class SubscriptionManager {
    constructor(){
        this.subscriptions = [];
    }
    add(handler) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addUniqueItem"])(this.subscriptions, handler);
        return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeItem"])(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions) return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */ this.subscriptions[0](a, b, c);
        } else {
            for(let i = 0; i < numSubscriptions; i++){
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */ const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/ __turbopack_context__.s([
    "velocityPerSecond",
    ()=>velocityPerSecond
]);
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/pipe.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */ __turbopack_context__.s([
    "pipe",
    ()=>pipe
]);
const combineFunctions = (a, b)=>(v)=>b(a(v));
const pipe = (...transformers)=>transformers.reduce(combineFunctions);
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/time-conversion.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "millisecondsToSeconds",
    ()=>millisecondsToSeconds,
    "secondsToMilliseconds",
    ()=>secondsToMilliseconds
]);
const secondsToMilliseconds = (seconds)=>seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/ const millisecondsToSeconds = (milliseconds)=>milliseconds / 1000;
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubicBezier",
    ()=>cubicBezier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
;
/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticeably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        } else {
            lowerBound = currentT;
        }
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations)
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/easing/ease.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easeIn",
    ()=>easeIn,
    "easeInOut",
    ()=>easeInOut,
    "easeOut",
    ()=>easeOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
;
const easeIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 0.58, 1);
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isEasingArray",
    ()=>isEasingArray
]);
const isEasingArray = (ease)=>{
    return Array.isArray(ease) && typeof ease[0] !== "number";
};
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
__turbopack_context__.s([
    "mirrorEasing",
    ()=>mirrorEasing
]);
const mirrorEasing = (easing)=>(p)=>p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
__turbopack_context__.s([
    "reverseEasing",
    ()=>reverseEasing
]);
const reverseEasing = (easing)=>(p)=>1 - easing(1 - p);
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "backIn",
    ()=>backIn,
    "backInOut",
    ()=>backInOut,
    "backOut",
    ()=>backOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)");
;
;
;
const backOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseEasing"])(backOut);
const backInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mirrorEasing"])(backIn);
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anticipate",
    ()=>anticipate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)");
;
const anticipate = (p)=>(p *= 2) < 1 ? 0.5 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backIn"])(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/easing/circ.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "circIn",
    ()=>circIn,
    "circInOut",
    ()=>circInOut,
    "circOut",
    ()=>circOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)");
;
;
const circIn = (p)=>1 - Math.sin(Math.acos(p));
const circOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseEasing"])(circIn);
const circInOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mirrorEasing"])(circIn);
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBezierDefinition",
    ()=>isBezierDefinition
]);
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/easing/utils/map.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easingDefinitionToFunction",
    ()=>easingDefinitionToFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/easing/circ.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/easing/ease.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const easingLookup = {
    linear: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"],
    easeIn: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeIn"],
    easeInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"],
    easeOut: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeOut"],
    circIn: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circIn"],
    circInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circInOut"],
    circOut: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circOut"],
    backIn: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backIn"],
    backInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backInOut"],
    backOut: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backOut"],
    anticipate: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anticipate"]
};
const isValidEasing = (easing)=>{
    return typeof easing === "string";
};
const easingDefinitionToFunction = (definition)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBezierDefinition"])(definition)) {
        // If cubic bezier definition, create bezier curve
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`, "cubic-bezier-length");
        const [x1, y1, x2, y2] = definition;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(x1, y1, x2, y2);
    } else if (isValidEasing(definition)) {
        // Else lookup from table
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`, "invalid-easing-type");
        return easingLookup[definition];
    }
    return definition;
};
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/progress.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "progress",
    ()=>progress
]);
const progress = (from, to, value)=>{
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/motion-utils/dist/es/memo.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "memo",
    ()=>memo
]);
function memo(callback) {
    let result;
    return ()=>{
        if (result === undefined) result = callback();
        return result;
    };
}
;
}),
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/css-mediaquery/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/matchmediaquery/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var staticMatch = __turbopack_context__.r("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/css-mediaquery/index.js [app-ssr] (ecmascript)").match;
var dynamicMatch = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
// our fake MediaQueryList
function Mql(query, values, forceStatic) {
    var self = this;
    var mql;
    // matchMedia will return null in FF when it's called in a hidden iframe
    // ref: https://stackoverflow.com/a/12330568
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
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
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/hyphenate-style-name/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/shallow-equal/dist/index.modern.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/react-responsive/dist/esm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$matchmediaquery$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/matchmediaquery/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$hyphenate$2d$style$2d$name$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/hyphenate-style-name/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$shallow$2d$equal$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/shallow-equal/dist/index.modern.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/webthethao2.0-main/webthethao2.0-main/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
const stringOrNumber = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number
]);
// media types
const types = {
    all: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    grid: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    aural: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    braille: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    handheld: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    print: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    projection: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    screen: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    tty: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    tv: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    embossed: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool
};
// properties that match media queries
const matchers = {
    orientation: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
        'portrait',
        'landscape'
    ]),
    scan: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
        'progressive',
        'interlace'
    ]),
    aspectRatio: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    deviceAspectRatio: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    height: stringOrNumber,
    deviceHeight: stringOrNumber,
    width: stringOrNumber,
    deviceWidth: stringOrNumber,
    color: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    colorIndex: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    monochrome: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    resolution: stringOrNumber,
    type: Object.keys(types)
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { type, ...featureMatchers } = matchers;
// media features
const features = {
    minAspectRatio: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    maxAspectRatio: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    minDeviceAspectRatio: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    maxDeviceAspectRatio: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    minHeight: stringOrNumber,
    maxHeight: stringOrNumber,
    minDeviceHeight: stringOrNumber,
    maxDeviceHeight: stringOrNumber,
    minWidth: stringOrNumber,
    maxWidth: stringOrNumber,
    minDeviceWidth: stringOrNumber,
    maxDeviceWidth: stringOrNumber,
    minColor: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
    maxColor: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
    minColorIndex: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
    maxColorIndex: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
    minMonochrome: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
    maxMonochrome: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
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
    const realKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$hyphenate$2d$style$2d$name$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(k);
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
const Context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const makeQuery = (settings)=>settings.query || toQuery(settings);
const hyphenateKeys = (obj)=>{
    if (!obj) return undefined;
    const keys = Object.keys(obj);
    return keys.reduce((result, key)=>{
        result[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$hyphenate$2d$style$2d$name$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(key)] = obj[key];
        return result;
    }, {});
};
const useIsUpdate = ()=>{
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        ref.current = true;
    }, []);
    return ref.current;
};
const useDevice = (deviceFromProps)=>{
    const deviceFromContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(Context);
    const getDevice = ()=>hyphenateKeys(deviceFromProps) || hyphenateKeys(deviceFromContext);
    const [device, setDevice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getDevice);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const newDevice = getDevice();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$shallow$2d$equal$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(device, newDevice)) {
            setDevice(newDevice);
        }
    }, [
        deviceFromProps,
        deviceFromContext
    ]);
    return device;
};
const useQuery = (settings)=>{
    const getQuery = ()=>makeQuery(settings);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getQuery);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const newQuery = getQuery();
        if (query !== newQuery) {
            setQuery(newQuery);
        }
    }, [
        settings
    ]);
    return query;
};
const useMatchMedia = (query, device)=>{
    const getMatchMedia = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$matchmediaquery$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(query, device || {}, !!device);
    const [mq, setMq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getMatchMedia);
    const isUpdate = useIsUpdate();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isUpdate) {
            // skip on mounting, it has already been set
            const newMq = getMatchMedia();
            setMq(newMq);
            return ()=>{
                if (newMq) {
                    newMq.dispose();
                }
            };
        }
    }, [
        query,
        device
    ]);
    return mq;
};
const useMatches = (mediaQuery)=>{
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(mediaQuery.matches);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateMatches = (ev)=>{
            setMatches(ev.matches);
        };
        mediaQuery.addListener(updateMatches);
        setMatches(mediaQuery.matches);
        return ()=>{
            mediaQuery.removeListener(updateMatches);
        };
    }, [
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isUpdate && onChange) {
            onChange(matches);
        }
    }, [
        matches
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$webthethao2$2e$0$2d$main$2f$webthethao2$2e$0$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            if (mq) {
                mq.dispose();
            }
        }, []);
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
];

//# sourceMappingURL=15a95_45814c46._.js.map