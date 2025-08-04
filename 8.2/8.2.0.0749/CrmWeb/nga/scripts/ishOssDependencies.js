/*!
* This file is based on or incorporates material from the projects listed below
* (collectively Third Party Code). Microsoft is not the original author of the
* Third Party Code. The original copyright notice and the license, under which
* Microsoft received such Third Party Code, are set forth below. Such licenses
* and notices are provided for informational purposes only. Microsoft, not the
* third party, licenses the Third Party Code to you under the terms set forth in
* the EULA for the Microsoft Product. Microsoft reserves all other rights not
* expressly granted under this agreement, whether by implication, estoppel or otherwise.
*
* jQuery 2.1.1
* Copyright 2014 jQuery Foundation and other contributors
* Provided for Informational Purposes Only
* MIT License
* Permission is hereby granted, free of charge, to any person obtaining a copy of
* this software and associated documentation files (the Software), to deal in the
* Software without restriction, including without limitation the rights to use, copy,
* modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
* and to permit persons to whom the Software is furnished to do so, subject to the
* following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
* INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
* PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
/*!
* jQuery JavaScript Library v2.1.1
* http://jquery.com/
*
* Includes Sizzle.js
* http://sizzlejs.com/
*
* Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
* Released under the MIT license
* http://jquery.org/license
*
* Date: 2014-05-01T17:11Z
*/
(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
// For CommonJS and CommonJS-like environments where a proper window is present,
// execute the factory and get jQuery
// For environments that do not inherently posses a window with a document
// (such as Node.js), expose a jQuery-making factory as module.exports
// This accentuates the need for the creation of a real window
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info
        module.exports = global.document
            ? factory(global, true)
            : function(w) {
                if (!w.document) {
                    throw new Error("jQuery requires a window with a document");
                }
                return factory(w);
            };
    } else {
        factory(global);
    }
// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this,
    function(window, noGlobal) {
// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//
        var arr = [];
        var slice = arr.slice;
        var concat = arr.concat;
        var push = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var support = {};
        var
// Use the correct document accordingly with window argument (sandbox)
            document = window.document,
            version = "2.1.1",
// Define a local copy of jQuery
            jQuery = function(selector, context) {
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
                return new jQuery.fn.init(selector, context);
            },
// Support: Android<4.1
// Make sure we trim BOM and NBSP
            rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
// Matches dashed string for camelizing
            rmsPrefix = /^-ms-/,
            rdashAlpha = /-([\da-z])/gi,
// Used by jQuery.camelCase as callback to replace()
            fcamelCase = function(all, letter) {
                return letter.toUpperCase();
            };
        jQuery.fn = jQuery.prototype = {
// The current version of jQuery being used
            jquery: version,
            constructor: jQuery,
// Start with an empty selector
            selector: "",
// The default length of a jQuery object is 0
            length: 0,
            toArray: function() {
                return slice.call(this);
            },
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
            get: function(num) {
                return num != null
                    ?
// Return just the one element from the set
                    (num < 0 ? this[num + this.length] : this[num])
                    :
// Return all the elements in a clean array
                    slice.call(this);
            },
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
            pushStack: function(elems) {
// Build a new jQuery matched element set
                var ret = jQuery.merge(this.constructor(), elems);
// Add the old object onto the stack (as a reference)
                ret.prevObject = this;
                ret.context = this.context;
// Return the newly-formed element set
                return ret;
            },
// Execute a callback for every element in the matched set.
// (You can seed the arguments with an array of args, but this is
// only used internally.)
            each: function(callback, args) {
                return jQuery.each(this, callback, args);
            },
            map: function(callback) {
                return this.pushStack(jQuery.map(this,
                    function(elem, i) {
                        return callback.call(elem, i, elem);
                    }));
            },
            slice: function() {
                return this.pushStack(slice.apply(this, arguments));
            },
            first: function() {
                return this.eq(0);
            },
            last: function() {
                return this.eq(-1);
            },
            eq: function(i) {
                var len = this.length,
                    j = +i + (i < 0 ? len : 0);
                return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
            },
            end: function() {
                return this.prevObject || this.constructor(null);
            },
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
            push: push,
            sort: arr.sort,
            splice: arr.splice
        };
        jQuery.extend = jQuery.fn.extend = function() {
            var options,
                name,
                src,
                copy,
                copyIsArray,
                clone,
                target = arguments[0] || {},
                i = 1,
                length = arguments.length,
                deep = false;
// Handle a deep copy situation
            if (typeof target === "boolean") {
                deep = target;
// skip the boolean and the target
                target = arguments[i] || {};
                i++;
            }
// Handle case when target is a string or something (possible in deep copy)
            if (typeof target !== "object" && !jQuery.isFunction(target)) {
                target = {};
            }
// extend jQuery itself if only one argument is passed
            if (i === length) {
                target = this;
                i--;
            }
            for (; i < length; i++) {
// Only deal with non-null/undefined values
                if ((options = arguments[i]) != null) {
// Extend the base object
                    for (name in options) {
                        src = target[name];
                        copy = options[name];
// Prevent never-ending loop
                        if (target === copy) {
                            continue;
                        }
// Recurse if we're merging plain objects or arrays
                        if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                            if (copyIsArray) {
                                copyIsArray = false;
                                clone = src && jQuery.isArray(src) ? src : [];
                            } else {
                                clone = src && jQuery.isPlainObject(src) ? src : {};
                            }
// Never move original objects, clone them
                            target[name] = jQuery.extend(deep, clone, copy);
// Don't bring in undefined values
                        } else if (copy !== undefined) {
                            target[name] = copy;
                        }
                    }
                }
            }
// Return the modified object
            return target;
        };
        jQuery.extend({
// Unique for each copy of jQuery on the page
            expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
// Assume jQuery is ready without the ready module
            isReady: true,
            error: function(msg) {
                throw new Error(msg);
            },
            noop: function() {},
// See test/unit/core.js for details concerning isFunction.
// Since version 1.3, DOM methods and functions like alert
// aren't supported. They return false on IE (#2968).
            isFunction: function(obj) {
                return jQuery.type(obj) === "function";
            },
            isArray: Array.isArray,
            isWindow: function(obj) {
                return obj != null && obj === obj.window;
            },
            isNumeric: function(obj) {
// parseFloat NaNs numeric-cast false positives (null|true|false|"")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
                return !jQuery.isArray(obj) && obj - parseFloat(obj) >= 0;
            },
            isPlainObject: function(obj) {
// Not plain objects:
// - Any object or value whose internal [[Class]] property is not "[object Object]"
// - DOM nodes
// - window
                if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                    return false;
                }
                if (obj.constructor &&
                    !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                    return false;
                }
// If the function hasn't returned already, we're confident that
// |obj| is a plain object, created by {} or constructed with new Object
                return true;
            },
            isEmptyObject: function(obj) {
                var name;
                for (name in obj) {
                    return false;
                }
                return true;
            },
            type: function(obj) {
                if (obj == null) {
                    return obj + "";
                }
// Support: Android < 4.0, iOS < 6 (functionish RegExp)
                return typeof obj === "object" || typeof obj === "function"
                    ? class2type[toString.call(obj)] || "object"
                    : typeof obj;
            },
// Evaluates a script in a global context
            globalEval: function(code) {
                var script,
                    indirect = eval;
                code = jQuery.trim(code);
                if (code) {
// If the code includes a valid, prologue position
// strict mode pragma, execute code by injecting a
// script tag into the document.
                    if (code.indexOf("use strict") === 1) {
                        script = document.createElement("script");
                        script.text = code;
                        document.head.appendChild(script).parentNode.removeChild(script);
                    } else {
// Otherwise, avoid the DOM node creation, insertion
// and removal by using an indirect global eval
                        indirect(code);
                    }
                }
            },
// Convert dashed to camelCase; used by the css and data modules
// Microsoft forgot to hump their vendor prefix (#9572)
            camelCase: function(string) {
                return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
            },
            nodeName: function(elem, name) {
                return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
            },
// args is for internal usage only
            each: function(obj, callback, args) {
                var value,
                    i = 0,
                    length = obj.length,
                    isArray = isArraylike(obj);
                if (args) {
                    if (isArray) {
                        for (; i < length; i++) {
                            value = callback.apply(obj[i], args);
                            if (value === false) {
                                break;
                            }
                        }
                    } else {
                        for (i in obj) {
                            value = callback.apply(obj[i], args);
                            if (value === false) {
                                break;
                            }
                        }
                    }
// A special, fast, case for the most common use of each
                } else {
                    if (isArray) {
                        for (; i < length; i++) {
                            value = callback.call(obj[i], i, obj[i]);
                            if (value === false) {
                                break;
                            }
                        }
                    } else {
                        for (i in obj) {
                            value = callback.call(obj[i], i, obj[i]);
                            if (value === false) {
                                break;
                            }
                        }
                    }
                }
                return obj;
            },
// Support: Android<4.1
            trim: function(text) {
                return text == null ? "" : (text + "").replace(rtrim, "");
            },
// results is for internal usage only
            makeArray: function(arr, results) {
                var ret = results || [];
                if (arr != null) {
                    if (isArraylike(Object(arr))) {
                        jQuery.merge(ret,
                            typeof arr === "string" ? [arr] : arr
                        );
                    } else {
                        push.call(ret, arr);
                    }
                }
                return ret;
            },
            inArray: function(elem, arr, i) {
                return arr == null ? -1 : indexOf.call(arr, elem, i);
            },
            merge: function(first, second) {
                var len = +second.length,
                    j = 0,
                    i = first.length;
                for (; j < len; j++) {
                    first[i++] = second[j];
                }
                first.length = i;
                return first;
            },
            grep: function(elems, callback, invert) {
                var callbackInverse,
                    matches = [],
                    i = 0,
                    length = elems.length,
                    callbackExpect = !invert;
// Go through the array, only saving the items
// that pass the validator function
                for (; i < length; i++) {
                    callbackInverse = !callback(elems[i], i);
                    if (callbackInverse !== callbackExpect) {
                        matches.push(elems[i]);
                    }
                }
                return matches;
            },
// arg is for internal usage only
            map: function(elems, callback, arg) {
                var value,
                    i = 0,
                    length = elems.length,
                    isArray = isArraylike(elems),
                    ret = [];
// Go through the array, translating each of the items to their new values
                if (isArray) {
                    for (; i < length; i++) {
                        value = callback(elems[i], i, arg);
                        if (value != null) {
                            ret.push(value);
                        }
                    }
// Go through every key on the object,
                } else {
                    for (i in elems) {
                        value = callback(elems[i], i, arg);
                        if (value != null) {
                            ret.push(value);
                        }
                    }
                }
// Flatten any nested arrays
                return concat.apply([], ret);
            },
// A global GUID counter for objects
            guid: 1,
// Bind a function to a context, optionally partially applying any
// arguments.
            proxy: function(fn, context) {
                var tmp, args, proxy;
                if (typeof context === "string") {
                    tmp = fn[context];
                    context = fn;
                    fn = tmp;
                }
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
                if (!jQuery.isFunction(fn)) {
                    return undefined;
                }
// Simulated bind
                args = slice.call(arguments, 2);
                proxy = function() {
                    return fn.apply(context || this, args.concat(slice.call(arguments)));
                };
// Set the guid of unique handler to the same of original handler, so it can be removed
                proxy.guid = fn.guid = fn.guid || jQuery.guid++;
                return proxy;
            },
            now: Date.now,
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
            support: support
        });
// Populate the class2type map
        jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
            function(i, name) {
                class2type["[object " + name + "]"] = name.toLowerCase();
            });

        function isArraylike(obj) {
            var length = obj.length,
                type = jQuery.type(obj);
            if (type === "function" || jQuery.isWindow(obj)) {
                return false;
            }
            if (obj.nodeType === 1 && length) {
                return true;
            }
            return type === "array" ||
                length === 0 ||
                typeof length === "number" && length > 0 && (length - 1) in obj;
        }

        var Sizzle =
/*!
* Sizzle CSS Selector Engine v1.10.19
* http://sizzlejs.com/
*
* Copyright 2013 jQuery Foundation, Inc. and other contributors
* Released under the MIT license
* http://jquery.org/license
*
* Date: 2014-04-18
*/
            (function(window) {
                var i,
                    support,
                    Expr,
                    getText,
                    isXML,
                    tokenize,
                    compile,
                    select,
                    outermostContext,
                    sortInput,
                    hasDuplicate,
// Local document vars
                    setDocument,
                    document,
                    docElem,
                    documentIsHTML,
                    rbuggyQSA,
                    rbuggyMatches,
                    matches,
                    contains,
// Instance-specific data
                    expando = "sizzle" + -(new Date()),
                    preferredDoc = window.document,
                    dirruns = 0,
                    done = 0,
                    classCache = createCache(),
                    tokenCache = createCache(),
                    compilerCache = createCache(),
                    sortOrder = function(a, b) {
                        if (a === b) {
                            hasDuplicate = true;
                        }
                        return 0;
                    },
// General-purpose constants
                    strundefined = typeof undefined,
                    MAX_NEGATIVE = 1 << 31,
// Instance methods
                    hasOwn = ({}).hasOwnProperty,
                    arr = [],
                    pop = arr.pop,
                    push_native = arr.push,
                    push = arr.push,
                    slice = arr.slice,
// Use a stripped-down indexOf if we can't use a native one
                    indexOf = arr.indexOf ||
                        function(elem) {
                            var i = 0,
                                len = this.length;
                            for (; i < len; i++) {
                                if (this[i] === elem) {
                                    return i;
                                }
                            }
                            return -1;
                        },
                    booleans =
                        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
                    whitespace = "[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/css3-syntax/#characters
                    characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
// Loosely modeled on CSS identifier characters
// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
                    identifier = characterEncoding.replace("w", "w#"),
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
                    attributes = "\\[" +
                        whitespace +
                        "*(" +
                        characterEncoding +
                        ")(?:" +
                        whitespace +
// Operator (capture 2)
                        "*([*^$|!~]?=)" +
                        whitespace +
// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
                        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                        identifier +
                        "))|)" +
                        whitespace +
                        "*\\]",
                    pseudos = ":(" +
                        characterEncoding +
                        ")(?:\\((" +
// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
// 1. quoted (capture 3; capture 4 or capture 5)
                        "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
// 2. simple (capture 6)
                        "((?:\\\\.|[^\\\\()[\\]]|" +
                        attributes +
                        ")*)|" +
// 3. anything else (capture 2)
                        ".*" +
                        ")\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
                    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
                    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
                    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
                    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
                    rpseudo = new RegExp(pseudos),
                    ridentifier = new RegExp("^" + identifier + "$"),
                    matchExpr = {
                        "ID": new RegExp("^#(" + characterEncoding + ")"),
                        "CLASS": new RegExp("^\\.(" + characterEncoding + ")"),
                        "TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
                        "ATTR": new RegExp("^" + attributes),
                        "PSEUDO": new RegExp("^" + pseudos),
                        "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                            whitespace +
                            "*(even|odd|(([+-]|)(\\d*)n|)" +
                            whitespace +
                            "*(?:([+-]|)" +
                            whitespace +
                            "*(\\d+)|))" +
                            whitespace +
                            "*\\)|)",
                            "i"),
                        "bool": new RegExp("^(?:" + booleans + ")$", "i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
                        "needsContext": new RegExp("^" +
                            whitespace +
                            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                            whitespace +
                            "*((?:-\\d)?\\d*)" +
                            whitespace +
                            "*\\)|)(?=[^-]|$)",
                            "i")
                    },
                    rinputs = /^(?:input|select|textarea|button)$/i,
                    rheader = /^h\d$/i,
                    rnative = /^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
                    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    rsibling = /[+~]/,
                    rescape = /'|\\/g,
// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
                    runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
                    funescape = function(_, escaped, escapedWhitespace) {
                        var high = "0x" + escaped - 0x10000;
// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
                        return high !== high || escapedWhitespace
                            ? escaped
                            : high < 0
                            ?
// BMP codepoint
                            String.fromCharCode(high + 0x10000)
                            :
// Supplemental Plane codepoint (surrogate pair)
                            String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
                    };
// Optimize for push.apply( _, NodeList )
                try {
                    push.apply(
                        (arr = slice.call(preferredDoc.childNodes)),
                        preferredDoc.childNodes
                    );
// Support: Android<4.0
// Detect silently failing push.apply
                    arr[preferredDoc.childNodes.length].nodeType;
                } catch (e) {
                    push = {
                        apply: arr.length
                            ?
// Leverage slice if possible
                            function(target, els) {
                                push_native.apply(target, slice.call(els));
                            }
                            :
// Support: IE<9
// Otherwise append directly
                            function(target, els) {
                                var j = target.length,
                                    i = 0;
// Can't trust NodeList.length
                                while ((target[j++] = els[i++])) {
                                }
                                target.length = j - 1;
                            }
                    };
                }

                function Sizzle(selector, context, results, seed) {
                    var match,
                        elem,
                        m,
                        nodeType,
// QSA vars
                        i,
                        groups,
                        old,
                        nid,
                        newContext,
                        newSelector;
                    if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                        setDocument(context);
                    }
                    context = context || document;
                    results = results || [];
                    if (!selector || typeof selector !== "string") {
                        return results;
                    }
                    if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
                        return [];
                    }
                    if (documentIsHTML && !seed) {
// Shortcuts
                        if ((match = rquickExpr.exec(selector))) {
// Speed-up: Sizzle("#ID")
                            if ((m = match[1])) {
                                if (nodeType === 9) {
                                    elem = context.getElementById(m);
// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document (jQuery #6963)
                                    if (elem && elem.parentNode) {
// Handle the case where IE, Opera, and Webkit return items
// by name instead of ID
                                        if (elem.id === m) {
                                            results.push(elem);
                                            return results;
                                        }
                                    } else {
                                        return results;
                                    }
                                } else {
// Context is not a document
                                    if (context.ownerDocument &&
                                        (elem = context.ownerDocument.getElementById(m)) &&
                                        contains(context, elem) &&
                                        elem.id === m) {
                                        results.push(elem);
                                        return results;
                                    }
                                }
// Speed-up: Sizzle("TAG")
                            } else if (match[2]) {
                                push.apply(results, context.getElementsByTagName(selector));
                                return results;
// Speed-up: Sizzle(".CLASS")
                            } else if ((m = match[3]) &&
                                support.getElementsByClassName &&
                                context.getElementsByClassName) {
                                push.apply(results, context.getElementsByClassName(m));
                                return results;
                            }
                        }
// QSA path
                        if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                            nid = old = expando;
                            newContext = context;
                            newSelector = nodeType === 9 && selector;
// qSA works strangely on Element-rooted queries
// We can work around this by specifying an extra ID on the root
// and working up from there (Thanks to Andrew Dupont for the technique)
// IE 8 doesn't work on object elements
                            if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
                                groups = tokenize(selector);
                                if ((old = context.getAttribute("id"))) {
                                    nid = old.replace(rescape, "\\$&");
                                } else {
                                    context.setAttribute("id", nid);
                                }
                                nid = "[id='" + nid + "'] ";
                                i = groups.length;
                                while (i--) {
                                    groups[i] = nid + toSelector(groups[i]);
                                }
                                newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                                newSelector = groups.join(",");
                            }
                            if (newSelector) {
                                try {
                                    push.apply(results,
                                        newContext.querySelectorAll(newSelector)
                                    );
                                    return results;
                                } catch (qsaError) {
                                } finally {
                                    if (!old) {
                                        context.removeAttribute("id");
                                    }
                                }
                            }
                        }
                    }
// All others
                    return select(selector.replace(rtrim, "$1"), context, results, seed);
                }

/**
* Create key-value caches of limited size
* @returns {Function(string, Object)} Returns the Object data after storing it on itself with
*	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
*	deleting the oldest entry
*/
                function createCache() {
                    var keys = [];

                    function cache(key, value) {
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                        if (keys.push(key + " ") > Expr.cacheLength) {
// Only keep the most recent entries
                            delete cache[keys.shift()];
                        }
                        return (cache[key + " "] = value);
                    }

                    return cache;
                }

/**
* Mark a function for special use by Sizzle
* @param {Function} fn The function to mark
*/
                function markFunction(fn) {
                    fn[expando] = true;
                    return fn;
                }

/**
* Support testing using an element
* @param {Function} fn Passed the created div and expects a boolean result
*/
                function assert(fn) {
                    var div = document.createElement("div");
                    try {
                        return !!fn(div);
                    } catch (e) {
                        return false;
                    } finally {
// Remove from its parent by default
                        if (div.parentNode) {
                            div.parentNode.removeChild(div);
                        }
// release memory in IE
                        div = null;
                    }
                }

/**
* Adds the same handler for all of the specified attrs
* @param {String} attrs Pipe-separated list of attributes
* @param {Function} handler The method that will be applied
*/
                function addHandle(attrs, handler) {
                    var arr = attrs.split("|"),
                        i = attrs.length;
                    while (i--) {
                        Expr.attrHandle[arr[i]] = handler;
                    }
                }

/**
* Checks document order of two siblings
* @param {Element} a
* @param {Element} b
* @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
*/
                function siblingCheck(a, b) {
                    var cur = b && a,
                        diff = cur &&
                            a.nodeType === 1 &&
                            b.nodeType === 1 &&
                            (~b.sourceIndex || MAX_NEGATIVE) -
                            (~a.sourceIndex || MAX_NEGATIVE);
// Use IE sourceIndex if available on both nodes
                    if (diff) {
                        return diff;
                    }
// Check if b follows a
                    if (cur) {
                        while ((cur = cur.nextSibling)) {
                            if (cur === b) {
                                return -1;
                            }
                        }
                    }
                    return a ? 1 : -1;
                }

/**
* Returns a function to use in pseudos for input types
* @param {String} type
*/
                function createInputPseudo(type) {
                    return function(elem) {
                        var name = elem.nodeName.toLowerCase();
                        return name === "input" && elem.type === type;
                    };
                }

/**
* Returns a function to use in pseudos for buttons
* @param {String} type
*/
                function createButtonPseudo(type) {
                    return function(elem) {
                        var name = elem.nodeName.toLowerCase();
                        return (name === "input" || name === "button") && elem.type === type;
                    };
                }

/**
* Returns a function to use in pseudos for positionals
* @param {Function} fn
*/
                function createPositionalPseudo(fn) {
                    return markFunction(function(argument) {
                        argument = +argument;
                        return markFunction(function(seed, matches) {
                            var j,
                                matchIndexes = fn([], seed.length, argument),
                                i = matchIndexes.length;
// Match elements found at the specified indexes
                            while (i--) {
                                if (seed[(j = matchIndexes[i])]) {
                                    seed[j] = !(matches[j] = seed[j]);
                                }
                            }
                        });
                    });
                }

/**
* Checks a node for validity as a Sizzle context
* @param {Element|Object=} context
* @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
*/
                function testContext(context) {
                    return context && typeof context.getElementsByTagName !== strundefined && context;
                }

// Expose support vars for convenience
                support = Sizzle.support = {};
/**
* Detects XML nodes
* @param {Element|Object} elem An element or a document
* @returns {Boolean} True iff elem is a non-HTML XML node
*/
                isXML = Sizzle.isXML = function(elem) {
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
                    var documentElement = elem && (elem.ownerDocument || elem).documentElement;
                    return documentElement ? documentElement.nodeName !== "HTML" : false;
                };
/**
* Sets document-related variables once based on the current document
* @param {Element|Object} [doc] An element or document object to use to set the document
* @returns {Object} Returns the current document
*/
                setDocument = Sizzle.setDocument = function(node) {
                    var hasCompare,
                        doc = node ? node.ownerDocument || node : preferredDoc,
                        parent = doc.defaultView;
// If no document and documentElement is available, return
                    if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                        return document;
                    }
// Set our document
                    document = doc;
                    docElem = doc.documentElement;
// Support tests
                    documentIsHTML = !isXML(doc);
// Support: IE>8
// If iframe document is assigned to "document" variable and if iframe has been reloaded,
// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
// IE6-8 do not support the defaultView property so parent will be undefined
                    if (parent && parent !== parent.top) {
// IE11 does not have attachEvent, so all must suffer
                        if (parent.addEventListener) {
                            parent.addEventListener("unload",
                                function() {
                                    setDocument();
                                },
                                false);
                        } else if (parent.attachEvent) {
                            parent.attachEvent("onunload",
                                function() {
                                    setDocument();
                                });
                        }
                    }
/* Attributes
---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
                    support.attributes = assert(function(div) {
                        div.className = "i";
                        return !div.getAttribute("className");
                    });
/* getElement(s)By*
---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
                    support.getElementsByTagName = assert(function(div) {
                        div.appendChild(doc.createComment(""));
                        return !div.getElementsByTagName("*").length;
                    });
// Check if getElementsByClassName can be trusted
                    support.getElementsByClassName = rnative.test(doc.getElementsByClassName) &&
                        assert(function(div) {
                            div.innerHTML = "<div class='a'></div><div class='a i'></div>";
// Support: Safari<4
// Catch class over-caching
                            div.firstChild.className = "i";
// Support: Opera<10
// Catch gEBCN failure to find non-leading classes
                            return div.getElementsByClassName("i").length === 2;
                        });
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programatically-set names,
// so use a roundabout getElementsByName test
                    support.getById = assert(function(div) {
                        docElem.appendChild(div).id = expando;
                        return !doc.getElementsByName || !doc.getElementsByName(expando).length;
                    });
// ID find and filter
                    if (support.getById) {
                        Expr.find["ID"] = function(id, context) {
                            if (typeof context.getElementById !== strundefined && documentIsHTML) {
                                var m = context.getElementById(id);
// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document #6963
                                return m && m.parentNode ? [m] : [];
                            }
                        };
                        Expr.filter["ID"] = function(id) {
                            var attrId = id.replace(runescape, funescape);
                            return function(elem) {
                                return elem.getAttribute("id") === attrId;
                            };
                        };
                    } else {
// Support: IE6/7
// getElementById is not reliable as a find shortcut
                        delete Expr.find["ID"];
                        Expr.filter["ID"] = function(id) {
                            var attrId = id.replace(runescape, funescape);
                            return function(elem) {
                                var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
                                return node && node.value === attrId;
                            };
                        };
                    }
// Tag
                    Expr.find["TAG"] = support.getElementsByTagName
                        ? function(tag, context) {
                            if (typeof context.getElementsByTagName !== strundefined) {
                                return context.getElementsByTagName(tag);
                            }
                        }
                        : function(tag, context) {
                            var elem,
                                tmp = [],
                                i = 0,
                                results = context.getElementsByTagName(tag);
// Filter out possible comments
                            if (tag === "*") {
                                while ((elem = results[i++])) {
                                    if (elem.nodeType === 1) {
                                        tmp.push(elem);
                                    }
                                }
                                return tmp;
                            }
                            return results;
                        };
// Class
                    Expr.find["CLASS"] = support.getElementsByClassName &&
                        function(className, context) {
                            if (typeof context.getElementsByClassName !== strundefined && documentIsHTML) {
                                return context.getElementsByClassName(className);
                            }
                        };
/* QSA/matchesSelector
---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
                    rbuggyMatches = [];
// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See http://bugs.jquery.com/ticket/13378
                    rbuggyQSA = [];
                    if ((support.qsa = rnative.test(doc.querySelectorAll))) {
// Build QSA regex
// Regex strategy adopted from Diego Perini
                        assert(function(div) {
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// http://bugs.jquery.com/ticket/12359
                            div.innerHTML = "<select msallowclip=''><option selected=''></option></select>";
// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                            if (div.querySelectorAll("[msallowclip^='']").length) {
                                rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                            }
// Support: IE8
// Boolean attributes and "value" are not treated correctly
                            if (!div.querySelectorAll("[selected]").length) {
                                rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                            }
// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
                            if (!div.querySelectorAll(":checked").length) {
                                rbuggyQSA.push(":checked");
                            }
                        });
                        assert(function(div) {
// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
                            var input = doc.createElement("input");
                            input.setAttribute("type", "hidden");
                            div.appendChild(input).setAttribute("name", "D");
// Support: IE8
// Enforce case-sensitivity of name attribute
                            if (div.querySelectorAll("[name=d]").length) {
                                rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                            }
// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
                            if (!div.querySelectorAll(":enabled").length) {
                                rbuggyQSA.push(":enabled", ":disabled");
                            }
// Opera 10-11 does not throw on post-comma invalid pseudos
                            div.querySelectorAll("*,:x");
                            rbuggyQSA.push(",.*:");
                        });
                    }
                    if ((support.matchesSelector = rnative.test((matches = docElem.matches ||
                        docElem.webkitMatchesSelector ||
                        docElem.mozMatchesSelector ||
                        docElem.oMatchesSelector ||
                        docElem.msMatchesSelector)))) {
                        assert(function(div) {
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
                            support.disconnectedMatch = matches.call(div, "div");
// This should fail with an exception
// Gecko does not error, returns false instead
                            matches.call(div, "[s!='']:x");
                            rbuggyMatches.push("!=", pseudos);
                        });
                    }
                    rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                    rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
/* Contains
---------------------------------------------------------------------- */
                    hasCompare = rnative.test(docElem.compareDocumentPosition);
// Element contains another
// Purposefully does not implement inclusive descendent
// As in, an element does not contain itself
                    contains = hasCompare || rnative.test(docElem.contains)
                        ? function(a, b) {
                            var adown = a.nodeType === 9 ? a.documentElement : a,
                                bup = b && b.parentNode;
                            return a === bup ||
                                !!(bup &&
                                    bup.nodeType === 1 &&
                                    (
                                        adown.contains
                                            ? adown.contains(bup)
                                            : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
                                    ));
                        }
                        : function(a, b) {
                            if (b) {
                                while ((b = b.parentNode)) {
                                    if (b === a) {
                                        return true;
                                    }
                                }
                            }
                            return false;
                        };
/* Sorting
---------------------------------------------------------------------- */
// Document order sorting
                    sortOrder = hasCompare
                        ? function(a, b) {
// Flag for duplicate removal
                            if (a === b) {
                                hasDuplicate = true;
                                return 0;
                            }
// Sort on method existence if only one input has compareDocumentPosition
                            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                            if (compare) {
                                return compare;
                            }
// Calculate position if both inputs belong to the same document
                            compare = (a.ownerDocument || a) === (b.ownerDocument || b)
                                ? a.compareDocumentPosition(b)
                                :
// Otherwise we know they are disconnected
                                1;
// Disconnected nodes
                            if (compare & 1 ||
                                (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {
// Choose the first element that is related to our preferred document
                                if (a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                                    return -1;
                                }
                                if (b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                                    return 1;
                                }
// Maintain original order
                                return sortInput ? (indexOf.call(sortInput, a) - indexOf.call(sortInput, b)) : 0;
                            }
                            return compare & 4 ? -1 : 1;
                        }
                        : function(a, b) {
// Exit early if the nodes are identical
                            if (a === b) {
                                hasDuplicate = true;
                                return 0;
                            }
                            var cur,
                                i = 0,
                                aup = a.parentNode,
                                bup = b.parentNode,
                                ap = [a],
                                bp = [b];
// Parentless nodes are either documents or disconnected
                            if (!aup || !bup) {
                                return a === doc
                                    ? -1
                                    : b === doc
                                    ? 1
                                    : aup
                                    ? -1
                                    : bup
                                    ? 1
                                    : sortInput ? (indexOf.call(sortInput, a) - indexOf.call(sortInput, b)) : 0;
// If the nodes are siblings, we can do a quick check
                            } else if (aup === bup) {
                                return siblingCheck(a, b);
                            }
// Otherwise we need full lists of their ancestors for comparison
                            cur = a;
                            while ((cur = cur.parentNode)) {
                                ap.unshift(cur);
                            }
                            cur = b;
                            while ((cur = cur.parentNode)) {
                                bp.unshift(cur);
                            }
// Walk down the tree looking for a discrepancy
                            while (ap[i] === bp[i]) {
                                i++;
                            }
                            return i
                                ?
// Do a sibling check if the nodes have a common ancestor
                                siblingCheck(ap[i], bp[i])
                                :
// Otherwise nodes in our document sort first
                                ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
                        };
                    return doc;
                };
                Sizzle.matches = function(expr, elements) {
                    return Sizzle(expr, null, null, elements);
                };
                Sizzle.matchesSelector = function(elem, expr) {
// Set document vars if needed
                    if ((elem.ownerDocument || elem) !== document) {
                        setDocument(elem);
                    }
// Make sure that attribute selectors are quoted
                    expr = expr.replace(rattributeQuotes, "='$1']");
                    if (support.matchesSelector &&
                        documentIsHTML &&
                        (!rbuggyMatches || !rbuggyMatches.test(expr)) &&
                        (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                        try {
                            var ret = matches.call(elem, expr);
// IE 9's matchesSelector returns false on disconnected nodes
                            if (ret ||
                                support.disconnectedMatch ||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9
                                elem.document && elem.document.nodeType !== 11) {
                                return ret;
                            }
                        } catch (e) {
                        }
                    }
                    return Sizzle(expr, document, null, [elem]).length > 0;
                };
                Sizzle.contains = function(context, elem) {
// Set document vars if needed
                    if ((context.ownerDocument || context) !== document) {
                        setDocument(context);
                    }
                    return contains(context, elem);
                };
                Sizzle.attr = function(elem, name) {
// Set document vars if needed
                    if ((elem.ownerDocument || elem) !== document) {
                        setDocument(elem);
                    }
                    var fn = Expr.attrHandle[name.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
                        val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase())
                            ? fn(elem, name, !documentIsHTML)
                            : undefined;
                    return val !== undefined
                        ? val
                        : support.attributes || !documentIsHTML
                        ? elem.getAttribute(name)
                        : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                };
                Sizzle.error = function(msg) {
                    throw new Error("Syntax error, unrecognized expression: " + msg);
                };
/**
* Document sorting and removing duplicates
* @param {ArrayLike} results
*/
                Sizzle.uniqueSort = function(results) {
                    var elem,
                        duplicates = [],
                        j = 0,
                        i = 0;
// Unless we *know* we can detect duplicates, assume their presence
                    hasDuplicate = !support.detectDuplicates;
                    sortInput = !support.sortStable && results.slice(0);
                    results.sort(sortOrder);
                    if (hasDuplicate) {
                        while ((elem = results[i++])) {
                            if (elem === results[i]) {
                                j = duplicates.push(i);
                            }
                        }
                        while (j--) {
                            results.splice(duplicates[j], 1);
                        }
                    }
// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
                    sortInput = null;
                    return results;
                };
/**
* Utility function for retrieving the text value of an array of DOM nodes
* @param {Array|Element} elem
*/
                getText = Sizzle.getText = function(elem) {
                    var node,
                        ret = "",
                        i = 0,
                        nodeType = elem.nodeType;
                    if (!nodeType) {
// If no nodeType, this is expected to be an array
                        while ((node = elem[i++])) {
// Do not traverse comment nodes
                            ret += getText(node);
                        }
                    } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
                        if (typeof elem.textContent === "string") {
                            return elem.textContent;
                        } else {
// Traverse its children
                            for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                                ret += getText(elem);
                            }
                        }
                    } else if (nodeType === 3 || nodeType === 4) {
                        return elem.nodeValue;
                    }
// Do not include comment or processing instruction nodes
                    return ret;
                };
                Expr = Sizzle.selectors = {
// Can be adjusted by the user
                    cacheLength: 50,
                    createPseudo: markFunction,
                    match: matchExpr,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": { dir: "parentNode", first: true },
                        " ": { dir: "parentNode" },
                        "+": { dir: "previousSibling", first: true },
                        "~": { dir: "previousSibling" }
                    },
                    preFilter: {
                        "ATTR": function(match) {
                            match[1] = match[1].replace(runescape, funescape);
// Move the given value to match[3] whether quoted or unquoted
                            match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                            if (match[2] === "~=") {
                                match[3] = " " + match[3] + " ";
                            }
                            return match.slice(0, 4);
                        },
                        "CHILD": function(match) {
/* matches from matchExpr["CHILD"]
1 type (only|nth|...)
2 what (child|of-type)
3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
4 xn-component of xn+y argument ([+-]?\d*n|)
5 sign of xn-component
6 x of xn-component
7 sign of y-component
8 y of y-component
*/
                            match[1] = match[1].toLowerCase();
                            if (match[1].slice(0, 3) === "nth") {
// nth-* requires argument
                                if (!match[3]) {
                                    Sizzle.error(match[0]);
                                }
// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
                                match[4] = +(match[4]
                                    ? match[5] + (match[6] || 1)
                                    : 2 * (match[3] === "even" || match[3] === "odd"));
                                match[5] = +((match[7] + match[8]) || match[3] === "odd");
// other types prohibit arguments
                            } else if (match[3]) {
                                Sizzle.error(match[0]);
                            }
                            return match;
                        },
                        "PSEUDO": function(match) {
                            var excess,
                                unquoted = !match[6] && match[2];
                            if (matchExpr["CHILD"].test(match[0])) {
                                return null;
                            }
// Accept quoted arguments as-is
                            if (match[3]) {
                                match[2] = match[4] || match[5] || "";
// Strip excess characters from unquoted arguments
                            } else if (unquoted &&
                                rpseudo.test(unquoted) &&
// Get excess from tokenize (recursively)
                                (excess = tokenize(unquoted, true)) &&
// advance to the next closing parenthesis
                                (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
// excess is a negative index
                                match[0] = match[0].slice(0, excess);
                                match[2] = unquoted.slice(0, excess);
                            }
// Return only captures needed by the pseudo filter method (type and argument)
                            return match.slice(0, 3);
                        }
                    },
                    filter: {
                        "TAG": function(nodeNameSelector) {
                            var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                            return nodeNameSelector === "*"
                                ? function() { return true; }
                                : function(elem) {
                                    return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                                };
                        },
                        "CLASS": function(className) {
                            var pattern = classCache[className + " "];
                            return pattern ||
                                (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")
                                ) &&
                                classCache(className,
                                    function(elem) {
                                        return pattern
                                            .test(typeof elem.className === "string" && elem.className ||
                                                typeof elem
                                                .getAttribute !==
                                                strundefined &&
                                                elem.getAttribute("class") ||
                                                "");
                                    });
                        },
                        "ATTR": function(name, operator, check) {
                            return function(elem) {
                                var result = Sizzle.attr(elem, name);
                                if (result == null) {
                                    return operator === "!=";
                                }
                                if (!operator) {
                                    return true;
                                }
                                result += "";
                                return operator === "="
                                    ? result === check
                                    : operator === "!="
                                    ? result !== check
                                    : operator === "^="
                                    ? check && result.indexOf(check) === 0
                                    : operator === "*="
                                    ? check && result.indexOf(check) > -1
                                    : operator === "$="
                                    ? check && result.slice(-check.length) === check
                                    : operator === "~="
                                    ? (" " + result + " ").indexOf(check) > -1
                                    : operator === "|="
                                    ? result === check || result.slice(0, check.length + 1) === check + "-"
                                    : false;
                            };
                        },
                        "CHILD": function(type, what, argument, first, last) {
                            var simple = type.slice(0, 3) !== "nth",
                                forward = type.slice(-4) !== "last",
                                ofType = what === "of-type";
                            return first === 1 && last === 0
                                ?
// Shortcut for :nth-*(n)
                                function(elem) {
                                    return !!elem.parentNode;
                                }
                                : function(elem, context, xml) {
                                    var cache,
                                        outerCache,
                                        node,
                                        diff,
                                        nodeIndex,
                                        start,
                                        dir = simple !== forward ? "nextSibling" : "previousSibling",
                                        parent = elem.parentNode,
                                        name = ofType && elem.nodeName.toLowerCase(),
                                        useCache = !xml && !ofType;
                                    if (parent) {
// :(first|last|only)-(child|of-type)
                                        if (simple) {
                                            while (dir) {
                                                node = elem;
                                                while ((node = node[dir])) {
                                                    if (ofType
                                                        ? node.nodeName.toLowerCase() === name
                                                        : node.nodeType === 1) {
                                                        return false;
                                                    }
                                                }
// Reverse direction for :only-* (if we haven't yet done so)
                                                start = dir = type === "only" && !start && "nextSibling";
                                            }
                                            return true;
                                        }
                                        start = [forward ? parent.firstChild : parent.lastChild];
// non-xml :nth-child(...) stores cache data on `parent`
                                        if (forward && useCache) {
// Seek `elem` from a previously-cached index
                                            outerCache = parent[expando] || (parent[expando] = {});
                                            cache = outerCache[type] || [];
                                            nodeIndex = cache[0] === dirruns && cache[1];
                                            diff = cache[0] === dirruns && cache[2];
                                            node = nodeIndex && parent.childNodes[nodeIndex];
                                            while ((node = ++nodeIndex && node && node[dir] ||
// Fallback to seeking `elem` from the start
                                                (diff = nodeIndex = 0) ||
                                                start.pop())) {
// When found, cache indexes on `parent` and break
                                                if (node.nodeType === 1 && ++diff && node === elem) {
                                                    outerCache[type] = [dirruns, nodeIndex, diff];
                                                    break;
                                                }
                                            }
// Use previously-cached element index if available
                                        } else if (useCache &&
                                            (cache = (elem[expando] || (elem[expando] = {}))[type]) &&
                                            cache[0] === dirruns) {
                                            diff = cache[1];
// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                        } else {
// Use the same loop as above to seek `elem` from the start
                                            while ((node = ++nodeIndex && node && node[dir] ||
                                                (diff = nodeIndex = 0) ||
                                                start.pop())) {
                                                if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1
                                                    ) &&
                                                    ++diff) {
// Cache the index of each encountered element
                                                    if (useCache) {
                                                        (node[expando] || (node[expando] = {}))[type] = [dirruns, diff];
                                                    }
                                                    if (node === elem) {
                                                        break;
                                                    }
                                                }
                                            }
                                        }
// Incorporate the offset, then check against cycle size
                                        diff -= last;
                                        return diff === first || (diff % first === 0 && diff / first >= 0);
                                    }
                                };
                        },
                        "PSEUDO": function(pseudo, argument) {
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
                            var args,
                                fn = Expr.pseudos[pseudo] ||
                                    Expr.setFilters[pseudo.toLowerCase()] ||
                                    Sizzle.error("unsupported pseudo: " + pseudo);
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
                            if (fn[expando]) {
                                return fn(argument);
                            }
// But maintain support for old signatures
                            if (fn.length > 1) {
                                args = [pseudo, pseudo, "", argument];
                                return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())
                                    ? markFunction(function(seed, matches) {
                                        var idx,
                                            matched = fn(seed, argument),
                                            i = matched.length;
                                        while (i--) {
                                            idx = indexOf.call(seed, matched[i]);
                                            seed[idx] = !(matches[idx] = matched[i]);
                                        }
                                    })
                                    : function(elem) {
                                        return fn(elem, 0, args);
                                    };
                            }
                            return fn;
                        }
                    },
                    pseudos: {
// Potentially complex pseudos
                        "not": markFunction(function(selector) {
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
                            var input = [],
                                results = [],
                                matcher = compile(selector.replace(rtrim, "$1"));
                            return matcher[expando]
                                ? markFunction(function(seed, matches, context, xml) {
                                    var elem,
                                        unmatched = matcher(seed, null, xml, []),
                                        i = seed.length;
// Match elements unmatched by `matcher`
                                    while (i--) {
                                        if ((elem = unmatched[i])) {
                                            seed[i] = !(matches[i] = elem);
                                        }
                                    }
                                })
                                : function(elem, context, xml) {
                                    input[0] = elem;
                                    matcher(input, null, xml, results);
                                    return !results.pop();
                                };
                        }),
                        "has": markFunction(function(selector) {
                            return function(elem) {
                                return Sizzle(selector, elem).length > 0;
                            };
                        }),
                        "contains": markFunction(function(text) {
                            return function(elem) {
                                return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                            };
                        }),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
                        "lang": markFunction(function(lang) {
// lang value must be a valid identifier
                            if (!ridentifier.test(lang || "")) {
                                Sizzle.error("unsupported lang: " + lang);
                            }
                            lang = lang.replace(runescape, funescape).toLowerCase();
                            return function(elem) {
                                var elemLang;
                                do {
                                    if ((elemLang = documentIsHTML
                                        ? elem.lang
                                        : elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {
                                        elemLang = elemLang.toLowerCase();
                                        return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                                    }
                                } while ((elem = elem.parentNode) && elem.nodeType === 1);
                                return false;
                            };
                        }),
// Miscellaneous
                        "target": function(elem) {
                            var hash = window.location && window.location.hash;
                            return hash && hash.slice(1) === elem.id;
                        },
                        "root": function(elem) {
                            return elem === docElem;
                        },
                        "focus": function(elem) {
                            return elem === document.activeElement &&
                                (!document.hasFocus || document.hasFocus()) &&
                                !!(elem.type || elem.href || ~elem.tabIndex);
                        },
// Boolean properties
                        "enabled": function(elem) {
                            return elem.disabled === false;
                        },
                        "disabled": function(elem) {
                            return elem.disabled === true;
                        },
                        "checked": function(elem) {
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                            var nodeName = elem.nodeName.toLowerCase();
                            return (nodeName === "input" && !!elem.checked) ||
                                (nodeName === "option" && !!elem.selected);
                        },
                        "selected": function(elem) {
// Accessing this property makes selected-by-default
// options in Safari work properly
                            if (elem.parentNode) {
                                elem.parentNode.selectedIndex;
                            }
                            return elem.selected === true;
                        },
// Contents
                        "empty": function(elem) {
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
                            for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                                if (elem.nodeType < 6) {
                                    return false;
                                }
                            }
                            return true;
                        },
                        "parent": function(elem) {
                            return !Expr.pseudos["empty"](elem);
                        },
// Element/input types
                        "header": function(elem) {
                            return rheader.test(elem.nodeName);
                        },
                        "input": function(elem) {
                            return rinputs.test(elem.nodeName);
                        },
                        "button": function(elem) {
                            var name = elem.nodeName.toLowerCase();
                            return name === "input" && elem.type === "button" || name === "button";
                        },
                        "text": function(elem) {
                            var attr;
                            return elem.nodeName.toLowerCase() === "input" &&
                                elem.type === "text" &&
// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                                ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                        },
// Position-in-collection
                        "first": createPositionalPseudo(function() {
                            return [0];
                        }),
                        "last": createPositionalPseudo(function(matchIndexes, length) {
                            return [length - 1];
                        }),
                        "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
                            return [argument < 0 ? argument + length : argument];
                        }),
                        "even": createPositionalPseudo(function(matchIndexes, length) {
                            var i = 0;
                            for (; i < length; i += 2) {
                                matchIndexes.push(i);
                            }
                            return matchIndexes;
                        }),
                        "odd": createPositionalPseudo(function(matchIndexes, length) {
                            var i = 1;
                            for (; i < length; i += 2) {
                                matchIndexes.push(i);
                            }
                            return matchIndexes;
                        }),
                        "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                            var i = argument < 0 ? argument + length : argument;
                            for (; --i >= 0;) {
                                matchIndexes.push(i);
                            }
                            return matchIndexes;
                        }),
                        "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                            var i = argument < 0 ? argument + length : argument;
                            for (; ++i < length;) {
                                matchIndexes.push(i);
                            }
                            return matchIndexes;
                        })
                    }
                };
                Expr.pseudos["nth"] = Expr.pseudos["eq"];
// Add button/input type pseudos
                for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
                    Expr.pseudos[i] = createInputPseudo(i);
                }
                for (i in { submit: true, reset: true }) {
                    Expr.pseudos[i] = createButtonPseudo(i);
                }

// Easy API for creating new setFilters
                function setFilters() {}

                setFilters.prototype = Expr.filters = Expr.pseudos;
                Expr.setFilters = new setFilters();
                tokenize = Sizzle.tokenize = function(selector, parseOnly) {
                    var matched,
                        match,
                        tokens,
                        type,
                        soFar,
                        groups,
                        preFilters,
                        cached = tokenCache[selector + " "];
                    if (cached) {
                        return parseOnly ? 0 : cached.slice(0);
                    }
                    soFar = selector;
                    groups = [];
                    preFilters = Expr.preFilter;
                    while (soFar) {
// Comma and first run
                        if (!matched || (match = rcomma.exec(soFar))) {
                            if (match) {
// Don't consume trailing commas as valid
                                soFar = soFar.slice(match[0].length) || soFar;
                            }
                            groups.push((tokens = []));
                        }
                        matched = false;
// Combinators
                        if ((match = rcombinators.exec(soFar))) {
                            matched = match.shift();
                            tokens.push({
                                value: matched,
// Cast descendant combinators to space
                                type: match[0].replace(rtrim, " ")
                            });
                            soFar = soFar.slice(matched.length);
                        }
// Filters
                        for (type in Expr.filter) {
                            if ((match = matchExpr[type].exec(soFar)) &&
                            (!preFilters[type] ||
                                (match = preFilters[type](match)))) {
                                matched = match.shift();
                                tokens.push({
                                    value: matched,
                                    type: type,
                                    matches: match
                                });
                                soFar = soFar.slice(matched.length);
                            }
                        }
                        if (!matched) {
                            break;
                        }
                    }
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
                    return parseOnly
                        ? soFar.length
                        : soFar
                        ? Sizzle.error(selector)
                        :
// Cache the tokens
                        tokenCache(selector, groups).slice(0);
                };

                function toSelector(tokens) {
                    var i = 0,
                        len = tokens.length,
                        selector = "";
                    for (; i < len; i++) {
                        selector += tokens[i].value;
                    }
                    return selector;
                }

                function addCombinator(matcher, combinator, base) {
                    var dir = combinator.dir,
                        checkNonElements = base && dir === "parentNode",
                        doneName = done++;
                    return combinator.first
                        ?
// Check against closest ancestor/preceding element
                        function(elem, context, xml) {
                            while ((elem = elem[dir])) {
                                if (elem.nodeType === 1 || checkNonElements) {
                                    return matcher(elem, context, xml);
                                }
                            }
                        }
                        :
// Check against all ancestor/preceding elements
                        function(elem, context, xml) {
                            var oldCache,
                                outerCache,
                                newCache = [dirruns, doneName];
// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
                            if (xml) {
                                while ((elem = elem[dir])) {
                                    if (elem.nodeType === 1 || checkNonElements) {
                                        if (matcher(elem, context, xml)) {
                                            return true;
                                        }
                                    }
                                }
                            } else {
                                while ((elem = elem[dir])) {
                                    if (elem.nodeType === 1 || checkNonElements) {
                                        outerCache = elem[expando] || (elem[expando] = {});
                                        if ((oldCache = outerCache[dir]) &&
                                            oldCache[0] === dirruns &&
                                            oldCache[1] === doneName) {
// Assign to newCache so results back-propagate to previous elements
                                            return (newCache[2] = oldCache[2]);
                                        } else {
// Reuse newcache so results back-propagate to previous elements
                                            outerCache[dir] = newCache;
// A match means we're done; a fail means we have to keep checking
                                            if ((newCache[2] = matcher(elem, context, xml))) {
                                                return true;
                                            }
                                        }
                                    }
                                }
                            }
                        };
                }

                function elementMatcher(matchers) {
                    return matchers.length > 1
                        ? function(elem, context, xml) {
                            var i = matchers.length;
                            while (i--) {
                                if (!matchers[i](elem, context, xml)) {
                                    return false;
                                }
                            }
                            return true;
                        }
                        : matchers[0];
                }

                function multipleContexts(selector, contexts, results) {
                    var i = 0,
                        len = contexts.length;
                    for (; i < len; i++) {
                        Sizzle(selector, contexts[i], results);
                    }
                    return results;
                }

                function condense(unmatched, map, filter, context, xml) {
                    var elem,
                        newUnmatched = [],
                        i = 0,
                        len = unmatched.length,
                        mapped = map != null;
                    for (; i < len; i++) {
                        if ((elem = unmatched[i])) {
                            if (!filter || filter(elem, context, xml)) {
                                newUnmatched.push(elem);
                                if (mapped) {
                                    map.push(i);
                                }
                            }
                        }
                    }
                    return newUnmatched;
                }

                function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                    if (postFilter && !postFilter[expando]) {
                        postFilter = setMatcher(postFilter);
                    }
                    if (postFinder && !postFinder[expando]) {
                        postFinder = setMatcher(postFinder, postSelector);
                    }
                    return markFunction(function(seed, results, context, xml) {
                        var temp,
                            i,
                            elem,
                            preMap = [],
                            postMap = [],
                            preexisting = results.length,
// Get initial elements from seed or context
                            elems = seed ||
                                multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
                            matcherIn = preFilter && (seed || !selector)
                                ? condense(elems, preMap, preFilter, context, xml)
                                : elems,
                            matcherOut = matcher
                                ?
// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                                postFinder || (seed ? preFilter : preexisting || postFilter)
                                ?
// ...intermediate processing is necessary
                                []
                                :
// ...otherwise use results directly
                                results
                                : matcherIn;
// Find primary matches
                        if (matcher) {
                            matcher(matcherIn, matcherOut, context, xml);
                        }
// Apply postFilter
                        if (postFilter) {
                            temp = condense(matcherOut, postMap);
                            postFilter(temp, [], context, xml);
// Un-match failing elements by moving them back to matcherIn
                            i = temp.length;
                            while (i--) {
                                if ((elem = temp[i])) {
                                    matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                                }
                            }
                        }
                        if (seed) {
                            if (postFinder || preFilter) {
                                if (postFinder) {
// Get the final matcherOut by condensing this intermediate into postFinder contexts
                                    temp = [];
                                    i = matcherOut.length;
                                    while (i--) {
                                        if ((elem = matcherOut[i])) {
// Restore matcherIn since elem is not yet a final match
                                            temp.push((matcherIn[i] = elem));
                                        }
                                    }
                                    postFinder(null, (matcherOut = []), temp, xml);
                                }
// Move matched elements from seed to results to keep them synchronized
                                i = matcherOut.length;
                                while (i--) {
                                    if ((elem = matcherOut[i]) &&
                                        (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {
                                        seed[temp] = !(results[temp] = elem);
                                    }
                                }
                            }
// Add elements to results, through postFinder if defined
                        } else {
                            matcherOut = condense(
                                matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
                            );
                            if (postFinder) {
                                postFinder(null, results, matcherOut, xml);
                            } else {
                                push.apply(results, matcherOut);
                            }
                        }
                    });
                }

                function matcherFromTokens(tokens) {
                    var checkContext,
                        matcher,
                        j,
                        len = tokens.length,
                        leadingRelative = Expr.relative[tokens[0].type],
                        implicitRelative = leadingRelative || Expr.relative[" "],
                        i = leadingRelative ? 1 : 0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
                        matchContext = addCombinator(function(elem) {
                                return elem === checkContext;
                            },
                            implicitRelative,
                            true),
                        matchAnyContext = addCombinator(function(elem) {
                                return indexOf.call(checkContext, elem) > -1;
                            },
                            implicitRelative,
                            true),
                        matchers = [
                            function(elem, context, xml) {
                                return (!leadingRelative && (xml || context !== outermostContext)) ||
                                (
                                    (checkContext = context).nodeType
                                        ? matchContext(elem, context, xml)
                                        : matchAnyContext(elem, context, xml));
                            }
                        ];
                    for (; i < len; i++) {
                        if ((matcher = Expr.relative[tokens[i].type])) {
                            matchers = [addCombinator(elementMatcher(matchers), matcher)];
                        } else {
                            matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
// Return special upon seeing a positional matcher
                            if (matcher[expando]) {
// Find the next relative operator (if any) for proper handling
                                j = ++i;
                                for (; j < len; j++) {
                                    if (Expr.relative[tokens[j].type]) {
                                        break;
                                    }
                                }
                                return setMatcher(
                                    i > 1 && elementMatcher(matchers),
                                    i > 1 &&
                                    toSelector(
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
                                        tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })
                                    ).replace(rtrim, "$1"),
                                    matcher,
                                    i < j && matcherFromTokens(tokens.slice(i, j)),
                                    j < len && matcherFromTokens((tokens = tokens.slice(j))),
                                    j < len && toSelector(tokens)
                                );
                            }
                            matchers.push(matcher);
                        }
                    }
                    return elementMatcher(matchers);
                }

                function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                    var bySet = setMatchers.length > 0,
                        byElement = elementMatchers.length > 0,
                        superMatcher = function(seed, context, xml, results, outermost) {
                            var elem,
                                j,
                                matcher,
                                matchedCount = 0,
                                i = "0",
                                unmatched = seed && [],
                                setMatched = [],
                                contextBackup = outermostContext,
// We must always have either seed elements or outermost context
                                elems = seed || byElement && Expr.find["TAG"]("*", outermost),
// Use integer dirruns iff this is the outermost matcher
                                dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                                len = elems.length;
                            if (outermost) {
                                outermostContext = context !== document && context;
                            }
// Add elements passing elementMatchers directly to results
// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
                            for (; i !== len && (elem = elems[i]) != null; i++) {
                                if (byElement && elem) {
                                    j = 0;
                                    while ((matcher = elementMatchers[j++])) {
                                        if (matcher(elem, context, xml)) {
                                            results.push(elem);
                                            break;
                                        }
                                    }
                                    if (outermost) {
                                        dirruns = dirrunsUnique;
                                    }
                                }
// Track unmatched elements for set filters
                                if (bySet) {
// They will have gone through all possible matchers
                                    if ((elem = !matcher && elem)) {
                                        matchedCount--;
                                    }
// Lengthen the array for every element, matched or not
                                    if (seed) {
                                        unmatched.push(elem);
                                    }
                                }
                            }
// Apply set filters to unmatched elements
                            matchedCount += i;
                            if (bySet && i !== matchedCount) {
                                j = 0;
                                while ((matcher = setMatchers[j++])) {
                                    matcher(unmatched, setMatched, context, xml);
                                }
                                if (seed) {
// Reintegrate element matches to eliminate the need for sorting
                                    if (matchedCount > 0) {
                                        while (i--) {
                                            if (!(unmatched[i] || setMatched[i])) {
                                                setMatched[i] = pop.call(results);
                                            }
                                        }
                                    }
// Discard index placeholder values to get only actual matches
                                    setMatched = condense(setMatched);
                                }
// Add matches to results
                                push.apply(results, setMatched);
// Seedless set matches succeeding multiple successful matchers stipulate sorting
                                if (outermost &&
                                    !seed &&
                                    setMatched.length > 0 &&
                                    (matchedCount + setMatchers.length) > 1) {
                                    Sizzle.uniqueSort(results);
                                }
                            }
// Override manipulation of globals by nested matchers
                            if (outermost) {
                                dirruns = dirrunsUnique;
                                outermostContext = contextBackup;
                            }
                            return unmatched;
                        };
                    return bySet ? markFunction(superMatcher) : superMatcher;
                }

                compile = Sizzle.compile = function(selector, match /* Internal Use Only */) {
                    var i,
                        setMatchers = [],
                        elementMatchers = [],
                        cached = compilerCache[selector + " "];
                    if (!cached) {
// Generate a function of recursive functions that can be used to check each element
                        if (!match) {
                            match = tokenize(selector);
                        }
                        i = match.length;
                        while (i--) {
                            cached = matcherFromTokens(match[i]);
                            if (cached[expando]) {
                                setMatchers.push(cached);
                            } else {
                                elementMatchers.push(cached);
                            }
                        }
// Cache the compiled function
                        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
// Save selector and tokenization
                        cached.selector = selector;
                    }
                    return cached;
                };
/**
* A low-level selection function that works with Sizzle's compiled
*  selector functions
* @param {String|Function} selector A selector or a pre-compiled
*  selector function built with Sizzle.compile
* @param {Element} context
* @param {Array} [results]
* @param {Array} [seed] A set of elements to match against
*/
                select = Sizzle.select = function(selector, context, results, seed) {
                    var i,
                        tokens,
                        token,
                        type,
                        find,
                        compiled = typeof selector === "function" && selector,
                        match = !seed && tokenize((selector = compiled.selector || selector));
                    results = results || [];
// Try to minimize operations if there is no seed and only one group
                    if (match.length === 1) {
// Take a shortcut and set the context if the root selector is an ID
                        tokens = match[0] = match[0].slice(0);
                        if (tokens.length > 2 &&
                            (token = tokens[0]).type === "ID" &&
                            support.getById &&
                            context.nodeType === 9 &&
                            documentIsHTML &&
                            Expr.relative[tokens[1].type]) {
                            context = (Expr.find["ID"](token.matches[0]
                                    .replace(runescape, funescape),
                                    context) ||
                                [])[0];
                            if (!context) {
                                return results;
// Precompiled matchers will still verify ancestry, so step up a level
                            } else if (compiled) {
                                context = context.parentNode;
                            }
                            selector = selector.slice(tokens.shift().value.length);
                        }
// Fetch a seed set for right-to-left matching
                        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                        while (i--) {
                            token = tokens[i];
// Abort if we hit a combinator
                            if (Expr.relative[(type = token.type)]) {
                                break;
                            }
                            if ((find = Expr.find[type])) {
// Search, expanding context for leading sibling combinators
                                if ((seed = find(
                                    token.matches[0].replace(runescape, funescape),
                                    rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                                ))) {
// If seed is empty or no tokens remain, we can return early
                                    tokens.splice(i, 1);
                                    selector = seed.length && toSelector(tokens);
                                    if (!selector) {
                                        push.apply(results, seed);
                                        return results;
                                    }
                                    break;
                                }
                            }
                        }
                    }
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
                    (compiled || compile(selector, match))(
                        seed,
                        context,
                        !documentIsHTML,
                        results,
                        rsibling.test(selector) && testContext(context.parentNode) || context
                    );
                    return results;
                };
// One-time assignments
// Sort stability
                support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
// Support: Chrome<14
// Always assume duplicates if they aren't passed to the comparison function
                support.detectDuplicates = !!hasDuplicate;
// Initialize against the default document
                setDocument();
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
                support.sortDetached = assert(function(div1) {
// Should return 1, but returns 4 (following)
                    return div1.compareDocumentPosition(document.createElement("div")) & 1;
                });
// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
                if (!assert(function(div) {
                    div.innerHTML = "<a href='#'></a>";
                    return div.firstChild.getAttribute("href") === "#";
                })) {
                    addHandle("type|href|height|width",
                        function(elem, name, isXML) {
                            if (!isXML) {
                                return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                            }
                        });
                }
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
                if (!support.attributes ||
                    !assert(function(div) {
                        div.innerHTML = "<input/>";
                        div.firstChild.setAttribute("value", "");
                        return div.firstChild.getAttribute("value") === "";
                    })) {
                    addHandle("value",
                        function(elem, name, isXML) {
                            if (!isXML && elem.nodeName.toLowerCase() === "input") {
                                return elem.defaultValue;
                            }
                        });
                }
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
                if (!assert(function(div) {
                    return div.getAttribute("disabled") == null;
                })) {
                    addHandle(booleans,
                        function(elem, name, isXML) {
                            var val;
                            if (!isXML) {
                                return elem[name] === true
                                    ? name.toLowerCase()
                                    : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                            }
                        });
                }
                return Sizzle;
            })(window);
        jQuery.find = Sizzle;
        jQuery.expr = Sizzle.selectors;
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.unique = Sizzle.uniqueSort;
        jQuery.text = Sizzle.getText;
        jQuery.isXMLDoc = Sizzle.isXML;
        jQuery.contains = Sizzle.contains;
        var rneedsContext = jQuery.expr.match.needsContext;
        var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
        var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
        function winnow(elements, qualifier, not) {
            if (jQuery.isFunction(qualifier)) {
                return jQuery.grep(elements,
                    function(elem, i) {
/* jshint -W018 */
                        return !!qualifier.call(elem, i, elem) !== not;
                    });
            }
            if (qualifier.nodeType) {
                return jQuery.grep(elements,
                    function(elem) {
                        return (elem === qualifier) !== not;
                    });
            }
            if (typeof qualifier === "string") {
                if (risSimple.test(qualifier)) {
                    return jQuery.filter(qualifier, elements, not);
                }
                qualifier = jQuery.filter(qualifier, elements);
            }
            return jQuery.grep(elements,
                function(elem) {
                    return (indexOf.call(qualifier, elem) >= 0) !== not;
                });
        }

        jQuery.filter = function(expr, elems, not) {
            var elem = elems[0];
            if (not) {
                expr = ":not(" + expr + ")";
            }
            return elems.length === 1 && elem.nodeType === 1
                ? jQuery.find.matchesSelector(elem, expr) ? [elem] : []
                : jQuery.find.matches(expr,
                    jQuery.grep(elems,
                        function(elem) {
                            return elem.nodeType === 1;
                        }));
        };
        jQuery.fn.extend({
            find: function(selector) {
                var i,
                    len = this.length,
                    ret = [],
                    self = this;
                if (typeof selector !== "string") {
                    return this.pushStack(jQuery(selector).filter(function() {
                        for (i = 0; i < len; i++) {
                            if (jQuery.contains(self[i], this)) {
                                return true;
                            }
                        }
                    }));
                }
                for (i = 0; i < len; i++) {
                    jQuery.find(selector, self[i], ret);
                }
// Needed because $( selector, context ) becomes $( context ).find( selector )
                ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
                ret.selector = this.selector ? this.selector + " " + selector : selector;
                return ret;
            },
            filter: function(selector) {
                return this.pushStack(winnow(this, selector || [], false));
            },
            not: function(selector) {
                return this.pushStack(winnow(this, selector || [], true));
            },
            is: function(selector) {
                return !!winnow(
                    this,
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
                    typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [],
                    false
                ).length;
            }
        });
// Initialize a jQuery object
// A central reference to the root jQuery(document)
        var rootjQuery,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
            rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            init = jQuery.fn.init = function(selector, context) {
                var match, elem;
// HANDLE: $(""), $(null), $(undefined), $(false)
                if (!selector) {
                    return this;
                }
// Handle HTML strings
                if (typeof selector === "string") {
                    if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
// Assume that strings that start and end with <> are HTML and skip the regex check
                        match = [null, selector, null];
                    } else {
                        match = rquickExpr.exec(selector);
                    }
// Match html or make sure no context is specified for #id
                    if (match && (match[1] || !context)) {
// HANDLE: $(html) -> $(array)
                        if (match[1]) {
                            context = context instanceof jQuery ? context[0] : context;
// scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
                            jQuery.merge(this,
                                jQuery.parseHTML(
                                    match[1],
                                    context && context.nodeType ? context.ownerDocument || context : document,
                                    true
                                ));
// HANDLE: $(html, props)
                            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                                for (match in context) {
// Properties of context are called as methods if possible
                                    if (jQuery.isFunction(this[match])) {
                                        this[match](context[match]);
// ...and otherwise set as attributes
                                    } else {
                                        this.attr(match, context[match]);
                                    }
                                }
                            }
                            return this;
// HANDLE: $(#id)
                        } else {
                            elem = document.getElementById(match[2]);
// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document #6963
                            if (elem && elem.parentNode) {
// Inject the element directly into the jQuery object
                                this.length = 1;
                                this[0] = elem;
                            }
                            this.context = document;
                            this.selector = selector;
                            return this;
                        }
// HANDLE: $(expr, $(...))
                    } else if (!context || context.jquery) {
                        return (context || rootjQuery).find(selector);
// HANDLE: $(expr, context)
// (which is just equivalent to: $(context).find(expr)
                    } else {
                        return this.constructor(context).find(selector);
                    }
// HANDLE: $(DOMElement)
                } else if (selector.nodeType) {
                    this.context = this[0] = selector;
                    this.length = 1;
                    return this;
// HANDLE: $(function)
// Shortcut for document ready
                } else if (jQuery.isFunction(selector)) {
                    return typeof rootjQuery.ready !== "undefined"
                        ? rootjQuery.ready(selector)
                        :
// Execute immediately if ready is not present
                        selector(jQuery);
                }
                if (selector.selector !== undefined) {
                    this.selector = selector.selector;
                    this.context = selector.context;
                }
                return jQuery.makeArray(selector, this);
            };
// Give the init function the jQuery prototype for later instantiation
        init.prototype = jQuery.fn;
// Initialize central reference
        rootjQuery = jQuery(document);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/,
// methods guaranteed to produce a unique set when starting from a unique set
            guaranteedUnique = {
                children: true,
                contents: true,
                next: true,
                prev: true
            };
        jQuery.extend({
            dir: function(elem, dir, until) {
                var matched = [],
                    truncate = until !== undefined;
                while ((elem = elem[dir]) && elem.nodeType !== 9) {
                    if (elem.nodeType === 1) {
                        if (truncate && jQuery(elem).is(until)) {
                            break;
                        }
                        matched.push(elem);
                    }
                }
                return matched;
            },
            sibling: function(n, elem) {
                var matched = [];
                for (; n; n = n.nextSibling) {
                    if (n.nodeType === 1 && n !== elem) {
                        matched.push(n);
                    }
                }
                return matched;
            }
        });
        jQuery.fn.extend({
            has: function(target) {
                var targets = jQuery(target, this),
                    l = targets.length;
                return this.filter(function() {
                    var i = 0;
                    for (; i < l; i++) {
                        if (jQuery.contains(this, targets[i])) {
                            return true;
                        }
                    }
                });
            },
            closest: function(selectors, context) {
                var cur,
                    i = 0,
                    l = this.length,
                    matched = [],
                    pos = rneedsContext.test(selectors) || typeof selectors !== "string"
                        ? jQuery(selectors, context || this.context)
                        : 0;
                for (; i < l; i++) {
                    for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
// Always skip document fragments
                        if (cur.nodeType < 11 &&
                        (pos
                            ? pos.index(cur) > -1
                            :
// Don't pass non-elements to Sizzle
                            cur.nodeType === 1 &&
                            jQuery.find.matchesSelector(cur, selectors))) {
                            matched.push(cur);
                            break;
                        }
                    }
                }
                return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
            },
// Determine the position of an element within
// the matched set of elements
            index: function(elem) {
// No argument, return index in parent
                if (!elem) {
                    return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
                }
// index in selector
                if (typeof elem === "string") {
                    return indexOf.call(jQuery(elem), this[0]);
                }
// Locate the position of the desired element
                return indexOf.call(this,
// If it receives a jQuery object, the first element is used
                    elem.jquery ? elem[0] : elem
                );
            },
            add: function(selector, context) {
                return this.pushStack(
                    jQuery.unique(
                        jQuery.merge(this.get(), jQuery(selector, context))
                    )
                );
            },
            addBack: function(selector) {
                return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector)
                );
            }
        });

        function sibling(cur, dir) {
            while ((cur = cur[dir]) && cur.nodeType !== 1) {
            }
            return cur;
        }

        jQuery.each({
                parent: function(elem) {
                    var parent = elem.parentNode;
                    return parent && parent.nodeType !== 11 ? parent : null;
                },
                parents: function(elem) {
                    return jQuery.dir(elem, "parentNode");
                },
                parentsUntil: function(elem, i, until) {
                    return jQuery.dir(elem, "parentNode", until);
                },
                next: function(elem) {
                    return sibling(elem, "nextSibling");
                },
                prev: function(elem) {
                    return sibling(elem, "previousSibling");
                },
                nextAll: function(elem) {
                    return jQuery.dir(elem, "nextSibling");
                },
                prevAll: function(elem) {
                    return jQuery.dir(elem, "previousSibling");
                },
                nextUntil: function(elem, i, until) {
                    return jQuery.dir(elem, "nextSibling", until);
                },
                prevUntil: function(elem, i, until) {
                    return jQuery.dir(elem, "previousSibling", until);
                },
                siblings: function(elem) {
                    return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
                },
                children: function(elem) {
                    return jQuery.sibling(elem.firstChild);
                },
                contents: function(elem) {
                    return elem.contentDocument || jQuery.merge([], elem.childNodes);
                }
            },
            function(name, fn) {
                jQuery.fn[name] = function(until, selector) {
                    var matched = jQuery.map(this, fn, until);
                    if (name.slice(-5) !== "Until") {
                        selector = until;
                    }
                    if (selector && typeof selector === "string") {
                        matched = jQuery.filter(selector, matched);
                    }
                    if (this.length > 1) {
// Remove duplicates
                        if (!guaranteedUnique[name]) {
                            jQuery.unique(matched);
                        }
// Reverse order for parents* and prev-derivatives
                        if (rparentsprev.test(name)) {
                            matched.reverse();
                        }
                    }
                    return this.pushStack(matched);
                };
            });
        var rnotwhite = (/\S+/g);
// String to Object options format cache
        var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
        function createOptions(options) {
            var object = optionsCache[options] = {};
            jQuery.each(options.match(rnotwhite) || [],
                function(_, flag) {
                    object[flag] = true;
                });
            return object;
        }

/*
* Create a callback list using the following parameters:
*
*	options: an optional list of space-separated options that will change how
*			the callback list behaves or a more traditional option object
*
* By default a callback list will act like an event callback list and can be
* "fired" multiple times.
*
* Possible options:
*
*	once:			will ensure the callback list can only be fired once (like a Deferred)
*
*	memory:			will keep track of previous values and will call any callback added
*					after the list has been fired right away with the latest "memorized"
*					values (like a Deferred)
*
*	unique:			will ensure a callback can only be added once (no duplicate in the list)
*
*	stopOnFalse:	interrupt callings when a callback returns false
*
*/
        jQuery.Callbacks = function(options) {
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
            options = typeof options === "string"
                ? (optionsCache[options] || createOptions(options))
                : jQuery.extend({}, options);
            var // Last fire value (for non-forgettable lists)
                memory,
// Flag to know if list was already fired
                fired,
// Flag to know if list is currently firing
                firing,
// First callback to fire (used internally by add and fireWith)
                firingStart,
// End of the loop when firing
                firingLength,
// Index of currently firing callback (modified by remove if needed)
                firingIndex,
// Actual callback list
                list = [],
// Stack of fire calls for repeatable lists
                stack = !options.once && [],
// Fire callbacks
                fire = function(data) {
                    memory = options.memory && data;
                    fired = true;
                    firingIndex = firingStart || 0;
                    firingStart = 0;
                    firingLength = list.length;
                    firing = true;
                    for (; list && firingIndex < firingLength; firingIndex++) {
                        if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
                            memory = false; // To prevent further calls using add
                            break;
                        }
                    }
                    firing = false;
                    if (list) {
                        if (stack) {
                            if (stack.length) {
                                fire(stack.shift());
                            }
                        } else if (memory) {
                            list = [];
                        } else {
                            self.disable();
                        }
                    }
                },
// Actual Callbacks object
                self = {
// Add a callback or a collection of callbacks to the list
                    add: function() {
                        if (list) {
// First, we save the current length
                            var start = list.length;
                            (function add(args) {
                                jQuery.each(args,
                                    function(_, arg) {
                                        var type = jQuery.type(arg);
                                        if (type === "function") {
                                            if (!options.unique || !self.has(arg)) {
                                                list.push(arg);
                                            }
                                        } else if (arg && arg.length && type !== "string") {
// Inspect recursively
                                            add(arg);
                                        }
                                    });
                            })(arguments);
// Do we need to add the callbacks to the
// current firing batch?
                            if (firing) {
                                firingLength = list.length;
// With memory, if we're not firing then
// we should call right away
                            } else if (memory) {
                                firingStart = start;
                                fire(memory);
                            }
                        }
                        return this;
                    },
// Remove a callback from the list
                    remove: function() {
                        if (list) {
                            jQuery.each(arguments,
                                function(_, arg) {
                                    var index;
                                    while ((index = jQuery.inArray(arg, list, index)) > -1) {
                                        list.splice(index, 1);
// Handle firing indexes
                                        if (firing) {
                                            if (index <= firingLength) {
                                                firingLength--;
                                            }
                                            if (index <= firingIndex) {
                                                firingIndex--;
                                            }
                                        }
                                    }
                                });
                        }
                        return this;
                    },
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
                    has: function(fn) {
                        return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
                    },
// Remove all callbacks from the list
                    empty: function() {
                        list = [];
                        firingLength = 0;
                        return this;
                    },
// Have the list do nothing anymore
                    disable: function() {
                        list = stack = memory = undefined;
                        return this;
                    },
// Is it disabled?
                    disabled: function() {
                        return !list;
                    },
// Lock the list in its current state
                    lock: function() {
                        stack = undefined;
                        if (!memory) {
                            self.disable();
                        }
                        return this;
                    },
// Is it locked?
                    locked: function() {
                        return !stack;
                    },
// Call all callbacks with the given context and arguments
                    fireWith: function(context, args) {
                        if (list && (!fired || stack)) {
                            args = args || [];
                            args = [context, args.slice ? args.slice() : args];
                            if (firing) {
                                stack.push(args);
                            } else {
                                fire(args);
                            }
                        }
                        return this;
                    },
// Call all the callbacks with the given arguments
                    fire: function() {
                        self.fireWith(this, arguments);
                        return this;
                    },
// To know if the callbacks have already been called at least once
                    fired: function() {
                        return !!fired;
                    }
                };
            return self;
        };
        jQuery.extend({
            Deferred: function(func) {
                var tuples = [
// action, add listener, listener list, final state
                        ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", jQuery.Callbacks("memory")]
                    ],
                    state = "pending",
                    promise = {
                        state: function() {
                            return state;
                        },
                        always: function() {
                            deferred.done(arguments).fail(arguments);
                            return this;
                        },
                        then: function(/* fnDone, fnFail, fnProgress */ ) {
                            var fns = arguments;
                            return jQuery.Deferred(function(newDefer) {
                                jQuery.each(tuples,
                                    function(i, tuple) {
                                        var fn = jQuery.isFunction(fns[i]) && fns[i];
// deferred[ done | fail | progress ] for forwarding actions to newDefer
                                        deferred[tuple[1]](function() {
                                            var returned = fn && fn.apply(this, arguments);
                                            if (returned && jQuery.isFunction(returned.promise)) {
                                                returned.promise()
                                                    .done(newDefer.resolve)
                                                    .fail(newDefer.reject)
                                                    .progress(newDefer.notify);
                                            } else {
                                                newDefer[tuple[0] + "With"
                                                ](this === promise ? newDefer.promise() : this,
                                                    fn ? [returned] : arguments);
                                            }
                                        });
                                    });
                                fns = null;
                            }).promise();
                        },
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
                        promise: function(obj) {
                            return obj != null ? jQuery.extend(obj, promise) : promise;
                        }
                    },
                    deferred = {};
// Keep pipe for back-compat
                promise.pipe = promise.then;
// Add list-specific methods
                jQuery.each(tuples,
                    function(i, tuple) {
                        var list = tuple[2],
                            stateString = tuple[3];
// promise[ done | fail | progress ] = list.add
                        promise[tuple[1]] = list.add;
// Handle state
                        if (stateString) {
                            list.add(function() {
// state = [ resolved | rejected ]
                                    state = stateString;
// [ reject_list | resolve_list ].disable; progress_list.lock
                                },
                                tuples[i ^ 1][2].disable,
                                tuples[2][2].lock);
                        }
// deferred[ resolve | reject | notify ]
                        deferred[tuple[0]] = function() {
                            deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
                            return this;
                        };
                        deferred[tuple[0] + "With"] = list.fireWith;
                    });
// Make the deferred a promise
                promise.promise(deferred);
// Call given func if any
                if (func) {
                    func.call(deferred, deferred);
                }
// All done!
                return deferred;
            },
// Deferred helper
            when: function(subordinate /* , ..., subordinateN */) {
                var i = 0,
                    resolveValues = slice.call(arguments),
                    length = resolveValues.length,
// the count of uncompleted subordinates
                    remaining = length !== 1 || (subordinate && jQuery.isFunction(subordinate.promise)) ? length : 0,
// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
                    deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
// Update function for both resolve and progress values
                    updateFunc = function(i, contexts, values) {
                        return function(value) {
                            contexts[i] = this;
                            values[i] = arguments.length > 1 ? slice.call(arguments) : value;
                            if (values === progressValues) {
                                deferred.notifyWith(contexts, values);
                            } else if (!(--remaining)) {
                                deferred.resolveWith(contexts, values);
                            }
                        };
                    },
                    progressValues,
                    progressContexts,
                    resolveContexts;
// add listeners to Deferred subordinates; treat others as resolved
                if (length > 1) {
                    progressValues = new Array(length);
                    progressContexts = new Array(length);
                    resolveContexts = new Array(length);
                    for (; i < length; i++) {
                        if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                            resolveValues[i].promise()
                                .done(updateFunc(i, resolveContexts, resolveValues))
                                .fail(deferred.reject)
                                .progress(updateFunc(i, progressContexts, progressValues));
                        } else {
                            --remaining;
                        }
                    }
                }
// if we're not waiting on anything, resolve the master
                if (!remaining) {
                    deferred.resolveWith(resolveContexts, resolveValues);
                }
                return deferred.promise();
            }
        });
// The deferred used on DOM ready
        var readyList;
        jQuery.fn.ready = function(fn) {
// Add the callback
            jQuery.ready.promise().done(fn);
            return this;
        };
        jQuery.extend({
// Is the DOM ready to be used? Set to true once it occurs.
            isReady: false,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
            readyWait: 1,
// Hold (or release) the ready event
            holdReady: function(hold) {
                if (hold) {
                    jQuery.readyWait++;
                } else {
                    jQuery.ready(true);
                }
            },
// Handle when the DOM is ready
            ready: function(wait) {
// Abort if there are pending holds or we're already ready
                if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                    return;
                }
// Remember that the DOM is ready
                jQuery.isReady = true;
// If a normal DOM Ready event fired, decrement, and wait if need be
                if (wait !== true && --jQuery.readyWait > 0) {
                    return;
                }
// If there are functions bound, to execute
                readyList.resolveWith(document, [jQuery]);
// Trigger any bound ready events
                if (jQuery.fn.triggerHandler) {
                    jQuery(document).triggerHandler("ready");
                    jQuery(document).off("ready");
                }
            }
        });

/**
* The ready event handler and self cleanup method
*/
        function completed() {
            document.removeEventListener("DOMContentLoaded", completed, false);
            window.removeEventListener("load", completed, false);
            jQuery.ready();
        }

        jQuery.ready.promise = function(obj) {
            if (!readyList) {
                readyList = jQuery.Deferred();
// Catch cases where $(document).ready() is called after the browser event has already occurred.
// we once tried to use readyState "interactive" here, but it caused issues like the one
// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
                if (document.readyState === "complete") {
// Handle it asynchronously to allow scripts the opportunity to delay ready
                    setTimeout(jQuery.ready);
                } else {
// Use the handy event callback
                    document.addEventListener("DOMContentLoaded", completed, false);
// A fallback to window.onload, that will always work
                    window.addEventListener("load", completed, false);
                }
            }
            return readyList.promise(obj);
        };
// Kick off the DOM ready check even if the user does not
        jQuery.ready.promise();
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
        var access = jQuery.access = function(elems, fn, key, value, chainable, emptyGet, raw) {
            var i = 0,
                len = elems.length,
                bulk = key == null;
// Sets many values
            if (jQuery.type(key) === "object") {
                chainable = true;
                for (i in key) {
                    jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
                }
// Sets one value
            } else if (value !== undefined) {
                chainable = true;
                if (!jQuery.isFunction(value)) {
                    raw = true;
                }
                if (bulk) {
// Bulk operations run against the entire set
                    if (raw) {
                        fn.call(elems, value);
                        fn = null;
// ...except when executing function values
                    } else {
                        bulk = fn;
                        fn = function(elem, key, value) {
                            return bulk.call(jQuery(elem), value);
                        };
                    }
                }
                if (fn) {
                    for (; i < len; i++) {
                        fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                    }
                }
            }
            return chainable
                ? elems
                :
// Gets
                bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
        };
/**
* Determines whether an object can have data
*/
        jQuery.acceptData = function(owner) {
// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
/* jshint -W018 */
            return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType);
        };

        function Data() {
// Support: Android < 4,
// Old WebKit does not have Object.preventExtensions/freeze method,
// return new empty object instead with no [[set]] accessor
            Object.defineProperty(this.cache = {},
                0,
                {
                    get: function() {
                        return {};
                    }
                });
            this.expando = jQuery.expando + Math.random();
        }

        Data.uid = 1;
        Data.accepts = jQuery.acceptData;
        Data.prototype = {
            key: function(owner) {
// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return the key for a frozen object.
                if (!Data.accepts(owner)) {
                    return 0;
                }
                var descriptor = {},
// Check if the owner object already has a cache key
                    unlock = owner[this.expando];
// If not, create one
                if (!unlock) {
                    unlock = Data.uid++;
// Secure it in a non-enumerable, non-writable property
                    try {
                        descriptor[this.expando] = { value: unlock };
                        Object.defineProperties(owner, descriptor);
// Support: Android < 4
// Fallback to a less secure definition
                    } catch (e) {
                        descriptor[this.expando] = unlock;
                        jQuery.extend(owner, descriptor);
                    }
                }
// Ensure the cache object
                if (!this.cache[unlock]) {
                    this.cache[unlock] = {};
                }
                return unlock;
            },
            set: function(owner, data, value) {
                var prop,
// There may be an unlock assigned to this node,
// if there is no entry for this "owner", create one inline
// and set the unlock as though an owner entry had always existed
                    unlock = this.key(owner),
                    cache = this.cache[unlock];
// Handle: [ owner, key, value ] args
                if (typeof data === "string") {
                    cache[data] = value;
// Handle: [ owner, { properties } ] args
                } else {
// Fresh assignments by object are shallow copied
                    if (jQuery.isEmptyObject(cache)) {
                        jQuery.extend(this.cache[unlock], data);
// Otherwise, copy the properties one-by-one to the cache object
                    } else {
                        for (prop in data) {
                            cache[prop] = data[prop];
                        }
                    }
                }
                return cache;
            },
            get: function(owner, key) {
// Either a valid cache is found, or will be created.
// New caches will be created and the unlock returned,
// allowing direct access to the newly created
// empty data object. A valid owner object must be provided.
                var cache = this.cache[this.key(owner)];
                return key === undefined ? cache : cache[key];
            },
            access: function(owner, key, value) {
                var stored;
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
                if (key === undefined ||
                    ((key && typeof key === "string") && value === undefined)) {
                    stored = this.get(owner, key);
                    return stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key));
                }
// [*]When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
                this.set(owner, key, value);
// Since the "set" path can have two possible entry points
// return the expected data based on which path was taken[*]
                return value !== undefined ? value : key;
            },
            remove: function(owner, key) {
                var i,
                    name,
                    camel,
                    unlock = this.key(owner),
                    cache = this.cache[unlock];
                if (key === undefined) {
                    this.cache[unlock] = {};
                } else {
// Support array or space separated string of keys
                    if (jQuery.isArray(key)) {
// If "name" is an array of keys...
// When data is initially created, via ("key", "val") signature,
// keys will be converted to camelCase.
// Since there is no way to tell _how_ a key was added, remove
// both plain key and camelCase key. #12786
// This will only penalize the array argument path.
                        name = key.concat(key.map(jQuery.camelCase));
                    } else {
                        camel = jQuery.camelCase(key);
// Try the string as a key before any manipulation
                        if (key in cache) {
                            name = [key, camel];
                        } else {
// If a key with the spaces exists, use it.
// Otherwise, create an array by matching non-whitespace
                            name = camel;
                            name = name in cache ? [name] : (name.match(rnotwhite) || []);
                        }
                    }
                    i = name.length;
                    while (i--) {
                        delete cache[name[i]];
                    }
                }
            },
            hasData: function(owner) {
                return !jQuery.isEmptyObject(
                    this.cache[owner[this.expando]] || {}
                );
            },
            discard: function(owner) {
                if (owner[this.expando]) {
                    delete this.cache[owner[this.expando]];
                }
            }
        };
        var data_priv = new Data();
        var data_user = new Data();
/*
Implementation Summary
1. Enforce API surface and semantic compatibility with 1.9.x branch
2. Improve the module's maintainability by reducing the storage
paths to a single mechanism.
3. Use the same single mechanism to support "private" and "user" data.
4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
5. Avoid exposing implementation details on user objects (eg. expando properties)
6. Provide a clear path for implementation upgrade to WeakMap in 2014
*/
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            rmultiDash = /([A-Z])/g;

        function dataAttr(elem, key, data) {
            var name;
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
            if (data === undefined && elem.nodeType === 1) {
                name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
                data = elem.getAttribute(name);
                if (typeof data === "string") {
                    try {
                        data = data === "true"
                            ? true
                            : data === "false"
                            ? false
                            : data === "null"
                            ? null
                            :
// Only convert to a number if it doesn't change the string
                            +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
                    } catch (e) {
                    }
// Make sure we set the data so it isn't changed later
                    data_user.set(elem, key, data);
                } else {
                    data = undefined;
                }
            }
            return data;
        }

        jQuery.extend({
            hasData: function(elem) {
                return data_user.hasData(elem) || data_priv.hasData(elem);
            },
            data: function(elem, name, data) {
                return data_user.access(elem, name, data);
            },
            removeData: function(elem, name) {
                data_user.remove(elem, name);
            },
// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to data_priv methods, these can be deprecated.
            _data: function(elem, name, data) {
                return data_priv.access(elem, name, data);
            },
            _removeData: function(elem, name) {
                data_priv.remove(elem, name);
            }
        });
        jQuery.fn.extend({
            data: function(key, value) {
                var i,
                    name,
                    data,
                    elem = this[0],
                    attrs = elem && elem.attributes;
// Gets all values
                if (key === undefined) {
                    if (this.length) {
                        data = data_user.get(elem);
                        if (elem.nodeType === 1 && !data_priv.get(elem, "hasDataAttrs")) {
                            i = attrs.length;
                            while (i--) {
// Support: IE11+
// The attrs elements can be null (#14894)
                                if (attrs[i]) {
                                    name = attrs[i].name;
                                    if (name.indexOf("data-") === 0) {
                                        name = jQuery.camelCase(name.slice(5));
                                        dataAttr(elem, name, data[name]);
                                    }
                                }
                            }
                            data_priv.set(elem, "hasDataAttrs", true);
                        }
                    }
                    return data;
                }
// Sets multiple values
                if (typeof key === "object") {
                    return this.each(function() {
                        data_user.set(this, key);
                    });
                }
                return access(this,
                    function(value) {
                        var data,
                            camelKey = jQuery.camelCase(key);
// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
                        if (elem && value === undefined) {
// Attempt to get data from the cache
// with the key as-is
                            data = data_user.get(elem, key);
                            if (data !== undefined) {
                                return data;
                            }
// Attempt to get data from the cache
// with the key camelized
                            data = data_user.get(elem, camelKey);
                            if (data !== undefined) {
                                return data;
                            }
// Attempt to "discover" the data in
// HTML5 custom data-* attrs
                            data = dataAttr(elem, camelKey, undefined);
                            if (data !== undefined) {
                                return data;
                            }
// We tried really hard, but the data doesn't exist.
                            return;
                        }
// Set the data...
                        this.each(function() {
// First, attempt to store a copy or reference of any
// data that might've been store with a camelCased key.
                            var data = data_user.get(this, camelKey);
// For HTML5 data-* attribute interop, we have to
// store property names with dashes in a camelCase form.
// This might not apply to all properties...*
                            data_user.set(this, camelKey, value);
// *... In the case of properties that might _actually_
// have dashes, we need to also store a copy of that
// unchanged property.
                            if (key.indexOf("-") !== -1 && data !== undefined) {
                                data_user.set(this, key, value);
                            }
                        });
                    },
                    null,
                    value,
                    arguments.length > 1,
                    null,
                    true);
            },
            removeData: function(key) {
                return this.each(function() {
                    data_user.remove(this, key);
                });
            }
        });
        jQuery.extend({
            queue: function(elem, type, data) {
                var queue;
                if (elem) {
                    type = (type || "fx") + "queue";
                    queue = data_priv.get(elem, type);
// Speed up dequeue by getting out quickly if this is just a lookup
                    if (data) {
                        if (!queue || jQuery.isArray(data)) {
                            queue = data_priv.access(elem, type, jQuery.makeArray(data));
                        } else {
                            queue.push(data);
                        }
                    }
                    return queue || [];
                }
            },
            dequeue: function(elem, type) {
                type = type || "fx";
                var queue = jQuery.queue(elem, type),
                    startLength = queue.length,
                    fn = queue.shift(),
                    hooks = jQuery._queueHooks(elem, type),
                    next = function() {
                        jQuery.dequeue(elem, type);
                    };
// If the fx queue is dequeued, always remove the progress sentinel
                if (fn === "inprogress") {
                    fn = queue.shift();
                    startLength--;
                }
                if (fn) {
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
                    if (type === "fx") {
                        queue.unshift("inprogress");
                    }
// clear up the last queue stop function
                    delete hooks.stop;
                    fn.call(elem, next, hooks);
                }
                if (!startLength && hooks) {
                    hooks.empty.fire();
                }
            },
// not intended for public consumption - generates a queueHooks object, or returns the current one
            _queueHooks: function(elem, type) {
                var key = type + "queueHooks";
                return data_priv.get(elem, key) ||
                    data_priv.access(elem,
                        key,
                        {
                            empty: jQuery.Callbacks("once memory").add(function() {
                                data_priv.remove(elem, [type + "queue", key]);
                            })
                        });
            }
        });
        jQuery.fn.extend({
            queue: function(type, data) {
                var setter = 2;
                if (typeof type !== "string") {
                    data = type;
                    type = "fx";
                    setter--;
                }
                if (arguments.length < setter) {
                    return jQuery.queue(this[0], type);
                }
                return data === undefined
                    ? this
                    : this.each(function() {
                        var queue = jQuery.queue(this, type, data);
// ensure a hooks for this queue
                        jQuery._queueHooks(this, type);
                        if (type === "fx" && queue[0] !== "inprogress") {
                            jQuery.dequeue(this, type);
                        }
                    });
            },
            dequeue: function(type) {
                return this.each(function() {
                    jQuery.dequeue(this, type);
                });
            },
            clearQueue: function(type) {
                return this.queue(type || "fx", []);
            },
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
            promise: function(type, obj) {
                var tmp,
                    count = 1,
                    defer = jQuery.Deferred(),
                    elements = this,
                    i = this.length,
                    resolve = function() {
                        if (!(--count)) {
                            defer.resolveWith(elements, [elements]);
                        }
                    };
                if (typeof type !== "string") {
                    obj = type;
                    type = undefined;
                }
                type = type || "fx";
                while (i--) {
                    tmp = data_priv.get(elements[i], type + "queueHooks");
                    if (tmp && tmp.empty) {
                        count++;
                        tmp.empty.add(resolve);
                    }
                }
                resolve();
                return defer.promise(obj);
            }
        });
        var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var isHidden = function(elem, el) {
// isHidden might be called from jQuery#filter function;
// in that case, element will be second argument
            elem = el || elem;
            return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
        };
        var rcheckableType = (/^(?:checkbox|radio)$/i);
        (function() {
            var fragment = document.createDocumentFragment(),
                div = fragment.appendChild(document.createElement("div")),
                input = document.createElement("input");
// #11217 - WebKit loses check when the name is after the checked attribute
// Support: Windows Web Apps (WWA)
// `name` and `type` need .setAttribute for WWA
            input.setAttribute("type", "radio");
            input.setAttribute("checked", "checked");
            input.setAttribute("name", "t");
            div.appendChild(input);
// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
// old WebKit doesn't clone checked state correctly in fragments
            support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
// Make sure textarea (and checkbox) defaultValue is properly cloned
// Support: IE9-IE11+
            div.innerHTML = "<textarea>x</textarea>";
            support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        })();
        var strundefined = typeof undefined;
        support.focusinBubbles = "onfocusin" in window;
        var
            rkeyEvent = /^key/,
            rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
            rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
            rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

        function returnTrue() {
            return true;
        }

        function returnFalse() {
            return false;
        }

        function safeActiveElement() {
            try {
                return document.activeElement;
            } catch (err) {
            }
        }

/*
* Helper functions for managing events -- not part of the public interface.
* Props to Dean Edwards' addEvent library for many of the ideas.
*/
        jQuery.event = {
            global: {},
            add: function(elem, types, handler, data, selector) {
                var handleObjIn,
                    eventHandle,
                    tmp,
                    events,
                    t,
                    handleObj,
                    special,
                    handlers,
                    type,
                    namespaces,
                    origType,
                    elemData = data_priv.get(elem);
// Don't attach events to noData or text/comment nodes (but allow plain objects)
                if (!elemData) {
                    return;
                }
// Caller can pass in an object of custom data in lieu of the handler
                if (handler.handler) {
                    handleObjIn = handler;
                    handler = handleObjIn.handler;
                    selector = handleObjIn.selector;
                }
// Make sure that the handler has a unique ID, used to find/remove it later
                if (!handler.guid) {
                    handler.guid = jQuery.guid++;
                }
// Init the element's event structure and main handler, if this is the first
                if (!(events = elemData.events)) {
                    events = elemData.events = {};
                }
                if (!(eventHandle = elemData.handle)) {
                    eventHandle = elemData.handle = function(e) {
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
                        return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type
                            ? jQuery.event.dispatch.apply(elem, arguments)
                            : undefined;
                    };
                }
// Handle multiple events separated by a space
                types = (types || "").match(rnotwhite) || [""];
                t = types.length;
                while (t--) {
                    tmp = rtypenamespace.exec(types[t]) || [];
                    type = origType = tmp[1];
                    namespaces = (tmp[2] || "").split(".").sort();
// There *must* be a type, no attaching namespace-only handlers
                    if (!type) {
                        continue;
                    }
// If event changes its type, use the special event handlers for the changed type
                    special = jQuery.event.special[type] || {};
// If selector defined, determine special event api type, otherwise given type
                    type = (selector ? special.delegateType : special.bindType) || type;
// Update special based on newly reset type
                    special = jQuery.event.special[type] || {};
// handleObj is passed to all event handlers
                    handleObj = jQuery.extend({
                            type: type,
                            origType: origType,
                            data: data,
                            handler: handler,
                            guid: handler.guid,
                            selector: selector,
                            needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                            namespace: namespaces.join(".")
                        },
                        handleObjIn);
// Init the event handler queue if we're the first
                    if (!(handlers = events[type])) {
                        handlers = events[type] = [];
                        handlers.delegateCount = 0;
// Only use addEventListener if the special events handler returns false
                        if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                            if (elem.addEventListener) {
                                elem.addEventListener(type, eventHandle, false);
                            }
                        }
                    }
                    if (special.add) {
                        special.add.call(elem, handleObj);
                        if (!handleObj.handler.guid) {
                            handleObj.handler.guid = handler.guid;
                        }
                    }
// Add to the element's handler list, delegates in front
                    if (selector) {
                        handlers.splice(handlers.delegateCount++, 0, handleObj);
                    } else {
                        handlers.push(handleObj);
                    }
// Keep track of which events have ever been used, for event optimization
                    jQuery.event.global[type] = true;
                }
            },
// Detach an event or set of events from an element
            remove: function(elem, types, handler, selector, mappedTypes) {
                var j,
                    origCount,
                    tmp,
                    events,
                    t,
                    handleObj,
                    special,
                    handlers,
                    type,
                    namespaces,
                    origType,
                    elemData = data_priv.hasData(elem) && data_priv.get(elem);
                if (!elemData || !(events = elemData.events)) {
                    return;
                }
// Once for each type.namespace in types; type may be omitted
                types = (types || "").match(rnotwhite) || [""];
                t = types.length;
                while (t--) {
                    tmp = rtypenamespace.exec(types[t]) || [];
                    type = origType = tmp[1];
                    namespaces = (tmp[2] || "").split(".").sort();
// Unbind all events (on this namespace, if provided) for the element
                    if (!type) {
                        for (type in events) {
                            jQuery.event.remove(elem, type + types[t], handler, selector, true);
                        }
                        continue;
                    }
                    special = jQuery.event.special[type] || {};
                    type = (selector ? special.delegateType : special.bindType) || type;
                    handlers = events[type] || [];
                    tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
// Remove matching events
                    origCount = j = handlers.length;
                    while (j--) {
                        handleObj = handlers[j];
                        if ((mappedTypes || origType === handleObj.origType) &&
                            (!handler || handler.guid === handleObj.guid) &&
                            (!tmp || tmp.test(handleObj.namespace)) &&
                            (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                            handlers.splice(j, 1);
                            if (handleObj.selector) {
                                handlers.delegateCount--;
                            }
                            if (special.remove) {
                                special.remove.call(elem, handleObj);
                            }
                        }
                    }
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
                    if (origCount && !handlers.length) {
                        if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                            jQuery.removeEvent(elem, type, elemData.handle);
                        }
                        delete events[type];
                    }
                }
// Remove the expando if it's no longer used
                if (jQuery.isEmptyObject(events)) {
                    delete elemData.handle;
                    data_priv.remove(elem, "events");
                }
            },
            trigger: function(event, data, elem, onlyHandlers) {
                var i,
                    cur,
                    tmp,
                    bubbleType,
                    ontype,
                    handle,
                    special,
                    eventPath = [elem || document],
                    type = hasOwn.call(event, "type") ? event.type : event,
                    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                cur = tmp = elem = elem || document;
// Don't do events on text and comment nodes
                if (elem.nodeType === 3 || elem.nodeType === 8) {
                    return;
                }
// focus/blur morphs to focusin/out; ensure we're not firing them right now
                if (rfocusMorph.test(type + jQuery.event.triggered)) {
                    return;
                }
                if (type.indexOf(".") >= 0) {
// Namespaced trigger; create a regexp to match event type in handle()
                    namespaces = type.split(".");
                    type = namespaces.shift();
                    namespaces.sort();
                }
                ontype = type.indexOf(":") < 0 && "on" + type;
// Caller can pass in a jQuery.Event object, Object, or just an event type string
                event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
                event.isTrigger = onlyHandlers ? 2 : 3;
                event.namespace = namespaces.join(".");
                event.namespace_re = event.namespace
                    ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)")
                    : null;
// Clean up the event in case it is being reused
                event.result = undefined;
                if (!event.target) {
                    event.target = elem;
                }
// Clone any incoming data and prepend the event, creating the handler arg list
                data = data == null ? [event] : jQuery.makeArray(data, [event]);
// Allow special events to draw outside the lines
                special = jQuery.event.special[type] || {};
                if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                    return;
                }
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
                if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                    bubbleType = special.delegateType || type;
                    if (!rfocusMorph.test(bubbleType + type)) {
                        cur = cur.parentNode;
                    }
                    for (; cur; cur = cur.parentNode) {
                        eventPath.push(cur);
                        tmp = cur;
                    }
// Only add window if we got to document (e.g., not plain obj or detached DOM)
                    if (tmp === (elem.ownerDocument || document)) {
                        eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                    }
                }
// Fire handlers on the event path
                i = 0;
                while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                    event.type = i > 1 ? bubbleType : special.bindType || type;
// jQuery handler
                    handle = (data_priv.get(cur, "events") || {})[event.type] && data_priv.get(cur, "handle");
                    if (handle) {
                        handle.apply(cur, data);
                    }
// Native handler
                    handle = ontype && cur[ontype];
                    if (handle && handle.apply && jQuery.acceptData(cur)) {
                        event.result = handle.apply(cur, data);
                        if (event.result === false) {
                            event.preventDefault();
                        }
                    }
                }
                event.type = type;
// If nobody prevented the default action, do it now
                if (!onlyHandlers && !event.isDefaultPrevented()) {
                    if ((!special._default || special._default.apply(eventPath.pop(), data) === false) &&
                        jQuery.acceptData(elem)) {
// Call a native DOM method on the target with the same name name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
                        if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
// Don't re-trigger an onFOO event when we call its FOO() method
                            tmp = elem[ontype];
                            if (tmp) {
                                elem[ontype] = null;
                            }
// Prevent re-triggering of the same event, since we already bubbled it above
                            jQuery.event.triggered = type;
                            elem[type]();
                            jQuery.event.triggered = undefined;
                            if (tmp) {
                                elem[ontype] = tmp;
                            }
                        }
                    }
                }
                return event.result;
            },
            dispatch: function(event) {
// Make a writable jQuery.Event from the native event object
                event = jQuery.event.fix(event);
                var i,
                    j,
                    ret,
                    matched,
                    handleObj,
                    handlerQueue = [],
                    args = slice.call(arguments),
                    handlers = (data_priv.get(this, "events") || {})[event.type] || [],
                    special = jQuery.event.special[event.type] || {};
// Use the fix-ed jQuery.Event rather than the (read-only) native event
                args[0] = event;
                event.delegateTarget = this;
// Call the preDispatch hook for the mapped type, and let it bail if desired
                if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                    return;
                }
// Determine handlers
                handlerQueue = jQuery.event.handlers.call(this, event, handlers);
// Run delegates first; they may want to stop propagation beneath us
                i = 0;
                while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                    event.currentTarget = matched.elem;
                    j = 0;
                    while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
// Triggered event must either 1) have no namespace, or
// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
                        if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
                            event.handleObj = handleObj;
                            event.data = handleObj.data;
                            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler)
                                .apply(matched.elem, args);
                            if (ret !== undefined) {
                                if ((event.result = ret) === false) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }
                            }
                        }
                    }
                }
// Call the postDispatch hook for the mapped type
                if (special.postDispatch) {
                    special.postDispatch.call(this, event);
                }
                return event.result;
            },
            handlers: function(event, handlers) {
                var i,
                    matches,
                    sel,
                    handleObj,
                    handlerQueue = [],
                    delegateCount = handlers.delegateCount,
                    cur = event.target;
// Find delegate handlers
// Black-hole SVG <use> instance trees (#13180)
// Avoid non-left-click bubbling in Firefox (#3861)
                if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
                    for (; cur !== this; cur = cur.parentNode || this) {
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                        if (cur.disabled !== true || event.type !== "click") {
                            matches = [];
                            for (i = 0; i < delegateCount; i++) {
                                handleObj = handlers[i];
// Don't conflict with Object.prototype properties (#13203)
                                sel = handleObj.selector + " ";
                                if (matches[sel] === undefined) {
                                    matches[sel] = handleObj.needsContext
                                        ? jQuery(sel, this).index(cur) >= 0
                                        : jQuery.find(sel, this, null, [cur]).length;
                                }
                                if (matches[sel]) {
                                    matches.push(handleObj);
                                }
                            }
                            if (matches.length) {
                                handlerQueue.push({ elem: cur, handlers: matches });
                            }
                        }
                    }
                }
// Add the remaining (directly-bound) handlers
                if (delegateCount < handlers.length) {
                    handlerQueue.push({ elem: this, handlers: handlers.slice(delegateCount) });
                }
                return handlerQueue;
            },
// Includes some event props shared by KeyEvent and MouseEvent
            props:
                "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(event, original) {
// Add which for key events
                    if (event.which == null) {
                        event.which = original.charCode != null ? original.charCode : original.keyCode;
                    }
                    return event;
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement"
                    .split(" "),
                filter: function(event, original) {
                    var eventDoc,
                        doc,
                        body,
                        button = original.button;
// Calculate pageX/Y if missing and clientX/Y available
                    if (event.pageX == null && original.clientX != null) {
                        eventDoc = event.target.ownerDocument || document;
                        doc = eventDoc.documentElement;
                        body = eventDoc.body;
                        event.pageX = original.clientX +
                            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                            (doc && doc.clientLeft || body && body.clientLeft || 0);
                        event.pageY = original.clientY +
                            (doc && doc.scrollTop || body && body.scrollTop || 0) -
                            (doc && doc.clientTop || body && body.clientTop || 0);
                    }
// Add which for click: 1 === left; 2 === middle; 3 === right
// Note: button is not normalized, so don't use it
                    if (!event.which && button !== undefined) {
                        event.which = (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
                    }
                    return event;
                }
            },
            fix: function(event) {
                if (event[jQuery.expando]) {
                    return event;
                }
// Create a writable copy of the event object and normalize some properties
                var i,
                    prop,
                    copy,
                    type = event.type,
                    originalEvent = event,
                    fixHook = this.fixHooks[type];
                if (!fixHook) {
                    this.fixHooks[type] = fixHook =
                        rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
                }
                copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
                event = new jQuery.Event(originalEvent);
                i = copy.length;
                while (i--) {
                    prop = copy[i];
                    event[prop] = originalEvent[prop];
                }
// Support: Cordova 2.5 (WebKit) (#13255)
// All events should have a target; Cordova deviceready doesn't
                if (!event.target) {
                    event.target = document;
                }
// Support: Safari 6.0+, Chrome < 28
// Target should not be a text node (#504, #13143)
                if (event.target.nodeType === 3) {
                    event.target = event.target.parentNode;
                }
                return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
            },
            special: {
                load: {
// Prevent triggered image.load events from bubbling to window.load
                    noBubble: true
                },
                focus: {
// Fire native event if possible so blur/focus sequence is correct
                    trigger: function() {
                        if (this !== safeActiveElement() && this.focus) {
                            this.focus();
                            return false;
                        }
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === safeActiveElement() && this.blur) {
                            this.blur();
                            return false;
                        }
                    },
                    delegateType: "focusout"
                },
                click: {
// For checkbox, fire native event so checked state will be right
                    trigger: function() {
                        if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
                            this.click();
                            return false;
                        }
                    },
// For cross-browser consistency, don't fire native .click() on links
                    _default: function(event) {
                        return jQuery.nodeName(event.target, "a");
                    }
                },
                beforeunload: {
                    postDispatch: function(event) {
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
                        if (event.result !== undefined && event.originalEvent) {
                            event.originalEvent.returnValue = event.result;
                        }
                    }
                }
            },
            simulate: function(type, elem, event, bubble) {
// Piggyback on a donor event to simulate a different one.
// Fake originalEvent to avoid donor's stopPropagation, but if the
// simulated event prevents default then we do the same on the donor.
                var e = jQuery.extend(
                    new jQuery.Event(),
                    event,
                    {
                        type: type,
                        isSimulated: true,
                        originalEvent: {}
                    }
                );
                if (bubble) {
                    jQuery.event.trigger(e, null, elem);
                } else {
                    jQuery.event.dispatch.call(elem, e);
                }
                if (e.isDefaultPrevented()) {
                    event.preventDefault();
                }
            }
        };
        jQuery.removeEvent = function(elem, type, handle) {
            if (elem.removeEventListener) {
                elem.removeEventListener(type, handle, false);
            }
        };
        jQuery.Event = function(src, props) {
// Allow instantiation without the 'new' keyword
            if (!(this instanceof jQuery.Event)) {
                return new jQuery.Event(src, props);
            }
// Event object
            if (src && src.type) {
                this.originalEvent = src;
                this.type = src.type;
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
                this.isDefaultPrevented = src.defaultPrevented ||
                    src.defaultPrevented === undefined &&
// Support: Android < 4.0
                    src.returnValue === false
                    ? returnTrue
                    : returnFalse;
// Event type
            } else {
                this.type = src;
            }
// Put explicitly provided properties onto the event object
            if (props) {
                jQuery.extend(this, props);
            }
// Create a timestamp if incoming event doesn't have one
            this.timeStamp = src && src.timeStamp || jQuery.now();
// Mark it as fixed
            this[jQuery.expando] = true;
        };
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
        jQuery.Event.prototype = {
            isDefaultPrevented: returnFalse,
            isPropagationStopped: returnFalse,
            isImmediatePropagationStopped: returnFalse,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = returnTrue;
                if (e && e.preventDefault) {
                    e.preventDefault();
                }
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = returnTrue;
                if (e && e.stopPropagation) {
                    e.stopPropagation();
                }
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = returnTrue;
                if (e && e.stopImmediatePropagation) {
                    e.stopImmediatePropagation();
                }
                this.stopPropagation();
            }
        };
// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
        jQuery.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            },
            function(orig, fix) {
                jQuery.event.special[orig] = {
                    delegateType: fix,
                    bindType: fix,
                    handle: function(event) {
                        var ret,
                            target = this,
                            related = event.relatedTarget,
                            handleObj = event.handleObj;
// For mousenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
                        if (!related || (related !== target && !jQuery.contains(target, related))) {
                            event.type = handleObj.origType;
                            ret = handleObj.handler.apply(this, arguments);
                            event.type = fix;
                        }
                        return ret;
                    }
                };
            });
// Create "bubbling" focus and blur events
// Support: Firefox, Chrome, Safari
        if (!support.focusinBubbles) {
            jQuery.each({ focus: "focusin", blur: "focusout" },
                function(orig, fix) {
// Attach a single capturing handler on the document while someone wants focusin/focusout
                    var handler = function(event) {
                        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
                    };
                    jQuery.event.special[fix] = {
                        setup: function() {
                            var doc = this.ownerDocument || this,
                                attaches = data_priv.access(doc, fix);
                            if (!attaches) {
                                doc.addEventListener(orig, handler, true);
                            }
                            data_priv.access(doc, fix, (attaches || 0) + 1);
                        },
                        teardown: function() {
                            var doc = this.ownerDocument || this,
                                attaches = data_priv.access(doc, fix) - 1;
                            if (!attaches) {
                                doc.removeEventListener(orig, handler, true);
                                data_priv.remove(doc, fix);
                            } else {
                                data_priv.access(doc, fix, attaches);
                            }
                        }
                    };
                });
        }
        jQuery.fn.extend({
            on: function(types, selector, data, fn, /*INTERNAL*/ one) {
                var origFn, type;
// Types can be a map of types/handlers
                if (typeof types === "object") {
// ( types-Object, selector, data )
                    if (typeof selector !== "string") {
// ( types-Object, data )
                        data = data || selector;
                        selector = undefined;
                    }
                    for (type in types) {
                        this.on(type, selector, data, types[type], one);
                    }
                    return this;
                }
                if (data == null && fn == null) {
// ( types, fn )
                    fn = selector;
                    data = selector = undefined;
                } else if (fn == null) {
                    if (typeof selector === "string") {
// ( types, selector, fn )
                        fn = data;
                        data = undefined;
                    } else {
// ( types, data, fn )
                        fn = data;
                        data = selector;
                        selector = undefined;
                    }
                }
                if (fn === false) {
                    fn = returnFalse;
                } else if (!fn) {
                    return this;
                }
                if (one === 1) {
                    origFn = fn;
                    fn = function(event) {
// Can use an empty set, since event contains the info
                        jQuery().off(event);
                        return origFn.apply(this, arguments);
                    };
// Use same guid so caller can remove using origFn
                    fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
                }
                return this.each(function() {
                    jQuery.event.add(this, types, fn, data, selector);
                });
            },
            one: function(types, selector, data, fn) {
                return this.on(types, selector, data, fn, 1);
            },
            off: function(types, selector, fn) {
                var handleObj, type;
                if (types && types.preventDefault && types.handleObj) {
// ( event )  dispatched jQuery.Event
                    handleObj = types.handleObj;
                    jQuery(types.delegateTarget).off(
                        handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
                        handleObj.selector,
                        handleObj.handler
                    );
                    return this;
                }
                if (typeof types === "object") {
// ( types-object [, selector] )
                    for (type in types) {
                        this.off(type, selector, types[type]);
                    }
                    return this;
                }
                if (selector === false || typeof selector === "function") {
// ( types [, fn] )
                    fn = selector;
                    selector = undefined;
                }
                if (fn === false) {
                    fn = returnFalse;
                }
                return this.each(function() {
                    jQuery.event.remove(this, types, fn, selector);
                });
            },
            trigger: function(type, data) {
                return this.each(function() {
                    jQuery.event.trigger(type, data, this);
                });
            },
            triggerHandler: function(type, data) {
                var elem = this[0];
                if (elem) {
                    return jQuery.event.trigger(type, data, elem, true);
                }
            }
        });
        var
            rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            rtagName = /<([\w:]+)/,
            rhtml = /<|&#?\w+;/,
            rnoInnerhtml = /<(?:script|style|link)/i,
// checked="checked" or checked
            rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
            rscriptType = /^$|\/(?:java|ecma)script/i,
            rscriptTypeMasked = /^true\/(.*)/,
            rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
// We have to close these tags to support XHTML (#13200)
            wrapMap = {
// Support: IE 9
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
// Support: IE 9
        wrapMap.optgroup = wrapMap.option;
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;

// Support: 1.x compatibility
// Manipulating tables requires a tbody
        function manipulationTarget(elem, content) {
            return jQuery.nodeName(elem, "table") &&
                jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")
                ? elem.getElementsByTagName("tbody")[0] ||
                elem.appendChild(elem.ownerDocument.createElement("tbody"))
                : elem;
        }

// Replace/restore the type attribute of script elements for safe DOM manipulation
        function disableScript(elem) {
            elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
            return elem;
        }

        function restoreScript(elem) {
            var match = rscriptTypeMasked.exec(elem.type);
            if (match) {
                elem.type = match[1];
            } else {
                elem.removeAttribute("type");
            }
            return elem;
        }

// Mark scripts as having already been evaluated
        function setGlobalEval(elems, refElements) {
            var i = 0,
                l = elems.length;
            for (; i < l; i++) {
                data_priv.set(
                    elems[i],
                    "globalEval",
                    !refElements || data_priv.get(refElements[i], "globalEval")
                );
            }
        }

        function cloneCopyEvent(src, dest) {
            var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
            if (dest.nodeType !== 1) {
                return;
            }
// 1. Copy private data: events, handlers, etc.
            if (data_priv.hasData(src)) {
                pdataOld = data_priv.access(src);
                pdataCur = data_priv.set(dest, pdataOld);
                events = pdataOld.events;
                if (events) {
                    delete pdataCur.handle;
                    pdataCur.events = {};
                    for (type in events) {
                        for (i = 0, l = events[type].length; i < l; i++) {
                            jQuery.event.add(dest, type, events[type][i]);
                        }
                    }
                }
            }
// 2. Copy user data
            if (data_user.hasData(src)) {
                udataOld = data_user.access(src);
                udataCur = jQuery.extend({}, udataOld);
                data_user.set(dest, udataCur);
            }
        }

        function getAll(context, tag) {
            var ret = context.getElementsByTagName
                ? context.getElementsByTagName(tag || "*")
                : context.querySelectorAll ? context.querySelectorAll(tag || "*") : [];
            return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret;
        }

// Support: IE >= 9
        function fixInput(src, dest) {
            var nodeName = dest.nodeName.toLowerCase();
// Fails to persist the checked state of a cloned checkbox or radio button.
            if (nodeName === "input" && rcheckableType.test(src.type)) {
                dest.checked = src.checked;
// Fails to return the selected option to the default selected state when cloning options
            } else if (nodeName === "input" || nodeName === "textarea") {
                dest.defaultValue = src.defaultValue;
            }
        }

        jQuery.extend({
            clone: function(elem, dataAndEvents, deepDataAndEvents) {
                var i,
                    l,
                    srcElements,
                    destElements,
                    clone = elem.cloneNode(true),
                    inPage = jQuery.contains(elem.ownerDocument, elem);
// Support: IE >= 9
// Fix Cloning issues
                if (!support.noCloneChecked &&
                    (elem.nodeType === 1 || elem.nodeType === 11) &&
                    !jQuery.isXMLDoc(elem)) {
// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
                    destElements = getAll(clone);
                    srcElements = getAll(elem);
                    for (i = 0, l = srcElements.length; i < l; i++) {
                        fixInput(srcElements[i], destElements[i]);
                    }
                }
// Copy the events from the original to the clone
                if (dataAndEvents) {
                    if (deepDataAndEvents) {
                        srcElements = srcElements || getAll(elem);
                        destElements = destElements || getAll(clone);
                        for (i = 0, l = srcElements.length; i < l; i++) {
                            cloneCopyEvent(srcElements[i], destElements[i]);
                        }
                    } else {
                        cloneCopyEvent(elem, clone);
                    }
                }
// Preserve script evaluation history
                destElements = getAll(clone, "script");
                if (destElements.length > 0) {
                    setGlobalEval(destElements, !inPage && getAll(elem, "script"));
                }
// Return the cloned set
                return clone;
            },
            buildFragment: function(elems, context, scripts, selection) {
                var elem,
                    tmp,
                    tag,
                    wrap,
                    contains,
                    j,
                    fragment = context.createDocumentFragment(),
                    nodes = [],
                    i = 0,
                    l = elems.length;
                for (; i < l; i++) {
                    elem = elems[i];
                    if (elem || elem === 0) {
// Add nodes directly
                        if (jQuery.type(elem) === "object") {
// Support: QtWebKit
// jQuery.merge because push.apply(_, arraylike) throws
                            jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
// Convert non-html into a text node
                        } else if (!rhtml.test(elem)) {
                            nodes.push(context.createTextNode(elem));
// Convert html into DOM nodes
                        } else {
                            tmp = tmp || fragment.appendChild(context.createElement("div"));
// Deserialize a standard representation
                            tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                            wrap = wrapMap[tag] || wrapMap._default;
                            tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
// Descend through wrappers to the right content
                            j = wrap[0];
                            while (j--) {
                                tmp = tmp.lastChild;
                            }
// Support: QtWebKit
// jQuery.merge because push.apply(_, arraylike) throws
                            jQuery.merge(nodes, tmp.childNodes);
// Remember the top-level container
                            tmp = fragment.firstChild;
// Fixes #12346
// Support: Webkit, IE
                            tmp.textContent = "";
                        }
                    }
                }
// Remove wrapper from fragment
                fragment.textContent = "";
                i = 0;
                while ((elem = nodes[i++])) {
// #4087 - If origin and destination elements are the same, and this is
// that element, do not do anything
                    if (selection && jQuery.inArray(elem, selection) !== -1) {
                        continue;
                    }
                    contains = jQuery.contains(elem.ownerDocument, elem);
// Append to fragment
                    tmp = getAll(fragment.appendChild(elem), "script");
// Preserve script evaluation history
                    if (contains) {
                        setGlobalEval(tmp);
                    }
// Capture executables
                    if (scripts) {
                        j = 0;
                        while ((elem = tmp[j++])) {
                            if (rscriptType.test(elem.type || "")) {
                                scripts.push(elem);
                            }
                        }
                    }
                }
                return fragment;
            },
            cleanData: function(elems) {
                var data,
                    elem,
                    type,
                    key,
                    special = jQuery.event.special,
                    i = 0;
                for (; (elem = elems[i]) !== undefined; i++) {
                    if (jQuery.acceptData(elem)) {
                        key = elem[data_priv.expando];
                        if (key && (data = data_priv.cache[key])) {
                            if (data.events) {
                                for (type in data.events) {
                                    if (special[type]) {
                                        jQuery.event.remove(elem, type);
// This is a shortcut to avoid jQuery.event.remove's overhead
                                    } else {
                                        jQuery.removeEvent(elem, type, data.handle);
                                    }
                                }
                            }
                            if (data_priv.cache[key]) {
// Discard any remaining `private` data
                                delete data_priv.cache[key];
                            }
                        }
                    }
// Discard any remaining `user` data
                    delete data_user.cache[elem[data_user.expando]];
                }
            }
        });
        jQuery.fn.extend({
            text: function(value) {
                return access(this,
                    function(value) {
                        return value === undefined
                            ? jQuery.text(this)
                            : this.empty().each(function() {
                                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                                    this.textContent = value;
                                }
                            });
                    },
                    null,
                    value,
                    arguments.length);
            },
            append: function() {
                return this.domManip(arguments,
                    function(elem) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var target = manipulationTarget(this, elem);
                            target.appendChild(elem);
                        }
                    });
            },
            prepend: function() {
                return this.domManip(arguments,
                    function(elem) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var target = manipulationTarget(this, elem);
                            target.insertBefore(elem, target.firstChild);
                        }
                    });
            },
            before: function() {
                return this.domManip(arguments,
                    function(elem) {
                        if (this.parentNode) {
                            this.parentNode.insertBefore(elem, this);
                        }
                    });
            },
            after: function() {
                return this.domManip(arguments,
                    function(elem) {
                        if (this.parentNode) {
                            this.parentNode.insertBefore(elem, this.nextSibling);
                        }
                    });
            },
            remove: function(selector, keepData /* Internal Use Only */) {
                var elem,
                    elems = selector ? jQuery.filter(selector, this) : this,
                    i = 0;
                for (; (elem = elems[i]) != null; i++) {
                    if (!keepData && elem.nodeType === 1) {
                        jQuery.cleanData(getAll(elem));
                    }
                    if (elem.parentNode) {
                        if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
                            setGlobalEval(getAll(elem, "script"));
                        }
                        elem.parentNode.removeChild(elem);
                    }
                }
                return this;
            },
            empty: function() {
                var elem,
                    i = 0;
                for (; (elem = this[i]) != null; i++) {
                    if (elem.nodeType === 1) {
// Prevent memory leaks
                        jQuery.cleanData(getAll(elem, false));
// Remove any remaining nodes
                        elem.textContent = "";
                    }
                }
                return this;
            },
            clone: function(dataAndEvents, deepDataAndEvents) {
                dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
                deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
                return this.map(function() {
                    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
                });
            },
            html: function(value) {
                return access(this,
                    function(value) {
                        var elem = this[0] || {},
                            i = 0,
                            l = this.length;
                        if (value === undefined && elem.nodeType === 1) {
                            return elem.innerHTML;
                        }
// See if we can take a shortcut and just use innerHTML
                        if (typeof value === "string" &&
                            !rnoInnerhtml.test(value) &&
                            !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
                            value = value.replace(rxhtmlTag, "<$1></$2>");
                            try {
                                for (; i < l; i++) {
                                    elem = this[i] || {};
// Remove element nodes and prevent memory leaks
                                    if (elem.nodeType === 1) {
                                        jQuery.cleanData(getAll(elem, false));
                                        elem.innerHTML = value;
                                    }
                                }
                                elem = 0;
// If using innerHTML throws an exception, use the fallback method
                            } catch (e) {
                            }
                        }
                        if (elem) {
                            this.empty().append(value);
                        }
                    },
                    null,
                    value,
                    arguments.length);
            },
            replaceWith: function() {
                var arg = arguments[0];
// Make the changes, replacing each context element with the new content
                this.domManip(arguments,
                    function(elem) {
                        arg = this.parentNode;
                        jQuery.cleanData(getAll(this));
                        if (arg) {
                            arg.replaceChild(elem, this);
                        }
                    });
// Force removal if there was no new content (e.g., from empty arguments)
                return arg && (arg.length || arg.nodeType) ? this : this.remove();
            },
            detach: function(selector) {
                return this.remove(selector, true);
            },
            domManip: function(args, callback) {
// Flatten any nested arrays
                args = concat.apply([], args);
                var fragment,
                    first,
                    scripts,
                    hasScripts,
                    node,
                    doc,
                    i = 0,
                    l = this.length,
                    set = this,
                    iNoClone = l - 1,
                    value = args[0],
                    isFunction = jQuery.isFunction(value);
// We can't cloneNode fragments that contain checked, in WebKit
                if (isFunction ||
                (l > 1 &&
                    typeof value === "string" &&
                    !support.checkClone &&
                    rchecked.test(value))) {
                    return this.each(function(index) {
                        var self = set.eq(index);
                        if (isFunction) {
                            args[0] = value.call(this, index, self.html());
                        }
                        self.domManip(args, callback);
                    });
                }
                if (l) {
                    fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
                    first = fragment.firstChild;
                    if (fragment.childNodes.length === 1) {
                        fragment = first;
                    }
                    if (first) {
                        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                        hasScripts = scripts.length;
// Use the original fragment for the last item instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
                        for (; i < l; i++) {
                            node = fragment;
                            if (i !== iNoClone) {
                                node = jQuery.clone(node, true, true);
// Keep references to cloned scripts for later restoration
                                if (hasScripts) {
// Support: QtWebKit
// jQuery.merge because push.apply(_, arraylike) throws
                                    jQuery.merge(scripts, getAll(node, "script"));
                                }
                            }
                            callback.call(this[i], node, i);
                        }
                        if (hasScripts) {
                            doc = scripts[scripts.length - 1].ownerDocument;
// Reenable scripts
                            jQuery.map(scripts, restoreScript);
// Evaluate executable scripts on first document insertion
                            for (i = 0; i < hasScripts; i++) {
                                node = scripts[i];
                                if (rscriptType.test(node.type || "") &&
                                    !data_priv.access(node, "globalEval") &&
                                    jQuery.contains(doc, node)) {
                                    if (node.src) {
// Optional AJAX dependency, but won't run scripts if not present
                                        if (jQuery._evalUrl) {
                                            jQuery._evalUrl(node.src);
                                        }
                                    } else {
                                        jQuery.globalEval(node.textContent.replace(rcleanScript, ""));
                                    }
                                }
                            }
                        }
                    }
                }
                return this;
            }
        });
        jQuery.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            },
            function(name, original) {
                jQuery.fn[name] = function(selector) {
                    var elems,
                        ret = [],
                        insert = jQuery(selector),
                        last = insert.length - 1,
                        i = 0;
                    for (; i <= last; i++) {
                        elems = i === last ? this : this.clone(true);
                        jQuery(insert[i])[original](elems);
// Support: QtWebKit
// .get() because push.apply(_, arraylike) throws
                        push.apply(ret, elems.get());
                    }
                    return this.pushStack(ret);
                };
            });
        var iframe,
            elemdisplay = {};

/**
* Retrieve the actual display of a element
* @param {String} name nodeName of the element
* @param {Object} doc Document object
*/
// Called only from within defaultDisplay
        function actualDisplay(name, doc) {
            var style,
                elem = jQuery(doc.createElement(name)).appendTo(doc.body),
// getDefaultComputedStyle might be reliably used only on attached element
                display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0]))
                    ?
// Use of this method is a temporary fix (more like optmization) until something better comes along,
// since it was removed from specification and supported only in FF
                    style.display
                    : jQuery.css(elem[0], "display");
// We don't have any data stored on the element,
// so use "detach" method as fast way to get rid of the element
            elem.detach();
            return display;
        }

/**
* Try to determine the default display value of an element
* @param {String} nodeName
*/
        function defaultDisplay(nodeName) {
            var doc = document,
                display = elemdisplay[nodeName];
            if (!display) {
                display = actualDisplay(nodeName, doc);
// If the simple way fails, read from inside an iframe
                if (display === "none" || !display) {
// Use the already-created iframe if possible
                    iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>"))
                        .appendTo(doc.documentElement);
// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
                    doc = iframe[0].contentDocument;
// Support: IE
                    doc.write();
                    doc.close();
                    display = actualDisplay(nodeName, doc);
                    iframe.detach();
                }
// Store the correct default display
                elemdisplay[nodeName] = display;
            }
            return display;
        }

        var rmargin = (/^margin/);
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var getStyles = function(elem) {
            return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
        };

        function curCSS(elem, name, computed) {
            var width,
                minWidth,
                maxWidth,
                ret,
                style = elem.style;
            computed = computed || getStyles(elem);
// Support: IE9
// getPropertyValue is only needed for .css('filter') in IE9, see #12537
            if (computed) {
                ret = computed.getPropertyValue(name) || computed[name];
            }
            if (computed) {
                if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
                    ret = jQuery.style(elem, name);
                }
// Support: iOS < 6
// A tribute to the "awesome hack by Dean Edwards"
// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
                if (rnumnonpx.test(ret) && rmargin.test(name)) {
// Remember the original values
                    width = style.width;
                    minWidth = style.minWidth;
                    maxWidth = style.maxWidth;
// Put in the new values to get a computed value out
                    style.minWidth = style.maxWidth = style.width = ret;
                    ret = computed.width;
// Revert the changed values
                    style.width = width;
                    style.minWidth = minWidth;
                    style.maxWidth = maxWidth;
                }
            }
            return ret !== undefined
                ?
// Support: IE
// IE returns zIndex value as an integer.
                ret + ""
                : ret;
        }

        function addGetHookIf(conditionFn, hookFn) {
// Define the hook, we'll check on the first run if it's really needed.
            return {
                get: function() {
                    if (conditionFn()) {
// Hook not needed (or it's not possible to use it due to missing dependency),
// remove it.
// Since there are no other hooks for marginRight, remove the whole object.
                        delete this.get;
                        return;
                    }
// Hook needed; redefine it so that the support test is not executed again.
                    return (this.get = hookFn).apply(this, arguments);
                }
            };
        }

        (function() {
            var pixelPositionVal,
                boxSizingReliableVal,
                docElem = document.documentElement,
                container = document.createElement("div"),
                div = document.createElement("div");
            if (!div.style) {
                return;
            }
            div.style.backgroundClip = "content-box";
            div.cloneNode(true).style.backgroundClip = "";
            support.clearCloneStyle = div.style.backgroundClip === "content-box";
            container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
                "position:absolute";
            container.appendChild(div);

// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
            function computePixelPositionAndBoxSizingReliable() {
                div.style.cssText =
// Support: Firefox<29, Android 2.3
// Vendor-prefix box-sizing
                    "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
                    "box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
                    "border:1px;padding:1px;width:4px;position:absolute";
                div.innerHTML = "";
                docElem.appendChild(container);
                var divStyle = window.getComputedStyle(div, null);
                pixelPositionVal = divStyle.top !== "1%";
                boxSizingReliableVal = divStyle.width === "4px";
                docElem.removeChild(container);
            }

// Support: node.js jsdom
// Don't assume that getComputedStyle is a property of the global object
            if (window.getComputedStyle) {
                jQuery.extend(support,
                {
                    pixelPosition: function() {
// This test is executed only once but we still do memoizing
// since we can use the boxSizingReliable pre-computing.
// No need to check if the test was already performed, though.
                        computePixelPositionAndBoxSizingReliable();
                        return pixelPositionVal;
                    },
                    boxSizingReliable: function() {
                        if (boxSizingReliableVal == null) {
                            computePixelPositionAndBoxSizingReliable();
                        }
                        return boxSizingReliableVal;
                    },
                    reliableMarginRight: function() {
// Support: Android 2.3
// Check if div with explicit width and no margin-right incorrectly
// gets computed margin-right based on width of container. (#3333)
// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
// This support function is only executed once so no memoizing is needed.
                        var ret,
                            marginDiv = div.appendChild(document.createElement("div"));
// Reset CSS: box-sizing; display; margin; border; padding
                        marginDiv.style.cssText = div.style.cssText =
// Support: Firefox<29, Android 2.3
// Vendor-prefix box-sizing
                            "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
                            "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                        marginDiv.style.marginRight = marginDiv.style.width = "0";
                        div.style.width = "1px";
                        docElem.appendChild(container);
                        ret = !parseFloat(window.getComputedStyle(marginDiv, null).marginRight);
                        docElem.removeChild(container);
                        return ret;
                    }
                });
            }
        })();
// A method for quickly swapping in/out CSS properties to get correct calculations.
        jQuery.swap = function(elem, options, callback, args) {
            var ret,
                name,
                old = {};
// Remember the old values, and insert the new ones
            for (name in options) {
                old[name] = elem.style[name];
                elem.style[name] = options[name];
            }
            ret = callback.apply(elem, args || []);
// Revert the old values
            for (name in options) {
                elem.style[name] = old[name];
            }
            return ret;
        };
        var
// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
            rdisplayswap = /^(none|table(?!-c[ea]).+)/,
            rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
            rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),
            cssShow = { position: "absolute", visibility: "hidden", display: "block" },
            cssNormalTransform = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            cssPrefixes = ["Webkit", "O", "Moz", "ms"];

// return a css property mapped to a potentially vendor prefixed property
        function vendorPropName(style, name) {
// shortcut for names that are not vendor prefixed
            if (name in style) {
                return name;
            }
// check for vendor prefixed names
            var capName = name[0].toUpperCase() + name.slice(1),
                origName = name,
                i = cssPrefixes.length;
            while (i--) {
                name = cssPrefixes[i] + capName;
                if (name in style) {
                    return name;
                }
            }
            return origName;
        }

        function setPositiveNumber(elem, value, subtract) {
            var matches = rnumsplit.exec(value);
            return matches
                ?
// Guard against undefined "subtract", e.g., when used as in cssHooks
                Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px")
                : value;
        }

        function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
            var i = extra === (isBorderBox ? "border" : "content")
                    ?
// If we already have the right measurement, avoid augmentation
                    4
                    :
// Otherwise initialize for horizontal or vertical properties
                    name === "width" ? 1 : 0,
                val = 0;
            for (; i < 4; i += 2) {
// both box models exclude margin, so add it if we want it
                if (extra === "margin") {
                    val += jQuery.css(elem, extra + cssExpand[i], true, styles);
                }
                if (isBorderBox) {
// border-box includes padding, so remove it if we want content
                    if (extra === "content") {
                        val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                    }
// at this point, extra isn't border nor margin, so remove border
                    if (extra !== "margin") {
                        val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                    }
                } else {
// at this point, extra isn't content, so add padding
                    val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
// at this point, extra isn't content nor padding, so add border
                    if (extra !== "padding") {
                        val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                    }
                }
            }
            return val;
        }

        function getWidthOrHeight(elem, name, extra) {
// Start with offset property, which is equivalent to the border-box value
            var valueIsBorderBox = true,
                val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
                styles = getStyles(elem),
                isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
// some non-html elements return undefined for offsetWidth, so check for null/undefined
// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
            if (val <= 0 || val == null) {
// Fall back to computed then uncomputed css if necessary
                val = curCSS(elem, name, styles);
                if (val < 0 || val == null) {
                    val = elem.style[name];
                }
// Computed unit is not pixels. Stop here and return.
                if (rnumnonpx.test(val)) {
                    return val;
                }
// we need the check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
                valueIsBorderBox = isBorderBox &&
                    (support.boxSizingReliable() || val === elem.style[name]);
// Normalize "", auto, and prepare for extra
                val = parseFloat(val) || 0;
            }
// use the active box-sizing model to add/subtract irrelevant styles
            return (val +
                    augmentWidthOrHeight(
                        elem,
                        name,
                        extra || (isBorderBox ? "border" : "content"),
                        valueIsBorderBox,
                        styles
                    )
                ) +
                "px";
        }

        function showHide(elements, show) {
            var display,
                elem,
                hidden,
                values = [],
                index = 0,
                length = elements.length;
            for (; index < length; index++) {
                elem = elements[index];
                if (!elem.style) {
                    continue;
                }
                values[index] = data_priv.get(elem, "olddisplay");
                display = elem.style.display;
                if (show) {
// Reset the inline display of this element to learn if it is
// being hidden by cascaded rules or not
                    if (!values[index] && display === "none") {
                        elem.style.display = "";
                    }
// Set elements which have been overridden with display: none
// in a stylesheet to whatever the default browser style is
// for such an element
                    if (elem.style.display === "" && isHidden(elem)) {
                        values[index] = data_priv.access(elem, "olddisplay", defaultDisplay(elem.nodeName));
                    }
                } else {
                    hidden = isHidden(elem);
                    if (display !== "none" || !hidden) {
                        data_priv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
                    }
                }
            }
// Set the display of most of the elements in a second loop
// to avoid the constant reflow
            for (index = 0; index < length; index++) {
                elem = elements[index];
                if (!elem.style) {
                    continue;
                }
                if (!show || elem.style.display === "none" || elem.style.display === "") {
                    elem.style.display = show ? values[index] || "" : "none";
                }
            }
            return elements;
        }

        jQuery.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
            cssHooks: {
                opacity: {
                    get: function(elem, computed) {
                        if (computed) {
// We should always get a number back from opacity
                            var ret = curCSS(elem, "opacity");
                            return ret === "" ? "1" : ret;
                        }
                    }
                }
            },
// Don't automatically add "px" to these possibly-unitless properties
            cssNumber: {
                "columnCount": true,
                "fillOpacity": true,
                "flexGrow": true,
                "flexShrink": true,
                "fontWeight": true,
                "lineHeight": true,
                "opacity": true,
                "order": true,
                "orphans": true,
                "widows": true,
                "zIndex": true,
                "zoom": true
            },
// Add in properties whose names you wish to fix before
// setting or getting the value
            cssProps: {
// normalize float css property
                "float": "cssFloat"
            },
// Get and set the style property on a DOM Node
            style: function(elem, name, value, extra) {
// Don't set styles on text and comment nodes
                if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                    return;
                }
// Make sure that we're working with the right name
                var ret,
                    type,
                    hooks,
                    origName = jQuery.camelCase(name),
                    style = elem.style;
                name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
// gets hook for the prefixed version
// followed by the unprefixed version
                hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
// Check if we're setting a value
                if (value !== undefined) {
                    type = typeof value;
// convert relative number strings (+= or -=) to relative numbers. #7345
                    if (type === "string" && (ret = rrelNum.exec(value))) {
                        value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
// Fixes bug #9237
                        type = "number";
                    }
// Make sure that null and NaN values aren't set. See: #7116
                    if (value == null || value !== value) {
                        return;
                    }
// If a number was passed in, add 'px' to the (except for certain CSS properties)
                    if (type === "number" && !jQuery.cssNumber[origName]) {
                        value += "px";
                    }
// Fixes #8908, it can be done more correctly by specifying setters in cssHooks,
// but it would mean to define eight (for every problematic property) identical functions
                    if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                        style[name] = "inherit";
                    }
// If a hook was provided, use that value, otherwise just set the specified value
                    if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                        style[name] = value;
                    }
                } else {
// If a hook was provided get the non-computed value from there
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                        return ret;
                    }
// Otherwise just get the value from the style object
                    return style[name];
                }
            },
            css: function(elem, name, extra, styles) {
                var val,
                    num,
                    hooks,
                    origName = jQuery.camelCase(name);
// Make sure that we're working with the right name
                name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
// gets hook for the prefixed version
// followed by the unprefixed version
                hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
// If a hook was provided get the computed value from there
                if (hooks && "get" in hooks) {
                    val = hooks.get(elem, true, extra);
                }
// Otherwise, if a way to get the computed value exists, use that
                if (val === undefined) {
                    val = curCSS(elem, name, styles);
                }
//convert "normal" to computed value
                if (val === "normal" && name in cssNormalTransform) {
                    val = cssNormalTransform[name];
                }
// Return, converting to number if forced or a qualifier was provided and val looks numeric
                if (extra === "" || extra) {
                    num = parseFloat(val);
                    return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
                }
                return val;
            }
        });
        jQuery.each(["height", "width"],
            function(i, name) {
                jQuery.cssHooks[name] = {
                    get: function(elem, computed, extra) {
                        if (computed) {
// certain elements can have dimension info if we invisibly show them
// however, it must have a current display style that would benefit from this
                            return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0
                                ? jQuery.swap(elem,
                                    cssShow,
                                    function() {
                                        return getWidthOrHeight(elem, name, extra);
                                    })
                                : getWidthOrHeight(elem, name, extra);
                        }
                    },
                    set: function(elem, value, extra) {
                        var styles = extra && getStyles(elem);
                        return setPositiveNumber(elem,
                            value,
                            extra
                            ? augmentWidthOrHeight(
                                elem,
                                name,
                                extra,
                                jQuery.css(elem, "boxSizing", false, styles) === "border-box",
                                styles
                            )
                            : 0
                        );
                    }
                };
            });
// Support: Android 2.3
        jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight,
            function(elem, computed) {
                if (computed) {
// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
// Work around by temporarily setting element display to inline-block
                    return jQuery.swap(elem,
                        { "display": "inline-block" },
                        curCSS,
                        [elem, "marginRight"]);
                }
            }
        );
// These hooks are used by animate to expand properties
        jQuery.each({
                margin: "",
                padding: "",
                border: "Width"
            },
            function(prefix, suffix) {
                jQuery.cssHooks[prefix + suffix] = {
                    expand: function(value) {
                        var i = 0,
                            expanded = {},
// assumes a single number if not a string
                            parts = typeof value === "string" ? value.split(" ") : [value];
                        for (; i < 4; i++) {
                            expanded[prefix + cssExpand[i] + suffix] =
                                parts[i] || parts[i - 2] || parts[0];
                        }
                        return expanded;
                    }
                };
                if (!rmargin.test(prefix)) {
                    jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
                }
            });
        jQuery.fn.extend({
            css: function(name, value) {
                return access(this,
                    function(elem, name, value) {
                        var styles,
                            len,
                            map = {},
                            i = 0;
                        if (jQuery.isArray(name)) {
                            styles = getStyles(elem);
                            len = name.length;
                            for (; i < len; i++) {
                                map[name[i]] = jQuery.css(elem, name[i], false, styles);
                            }
                            return map;
                        }
                        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
                    },
                    name,
                    value,
                    arguments.length > 1);
            },
            show: function() {
                return showHide(this, true);
            },
            hide: function() {
                return showHide(this);
            },
            toggle: function(state) {
                if (typeof state === "boolean") {
                    return state ? this.show() : this.hide();
                }
                return this.each(function() {
                    if (isHidden(this)) {
                        jQuery(this).show();
                    } else {
                        jQuery(this).hide();
                    }
                });
            }
        });

        function Tween(elem, options, prop, end, easing) {
            return new Tween.prototype.init(elem, options, prop, end, easing);
        }

        jQuery.Tween = Tween;
        Tween.prototype = {
            constructor: Tween,
            init: function(elem, options, prop, end, easing, unit) {
                this.elem = elem;
                this.prop = prop;
                this.easing = easing || "swing";
                this.options = options;
                this.start = this.now = this.cur();
                this.end = end;
                this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
            },
            cur: function() {
                var hooks = Tween.propHooks[this.prop];
                return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
            },
            run: function(percent) {
                var eased,
                    hooks = Tween.propHooks[this.prop];
                if (this.options.duration) {
                    this.pos = eased = jQuery.easing[this.easing](
                        percent,
                        this.options.duration * percent,
                        0,
                        1,
                        this.options.duration
                    );
                } else {
                    this.pos = eased = percent;
                }
                this.now = (this.end - this.start) * eased + this.start;
                if (this.options.step) {
                    this.options.step.call(this.elem, this.now, this);
                }
                if (hooks && hooks.set) {
                    hooks.set(this);
                } else {
                    Tween.propHooks._default.set(this);
                }
                return this;
            }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
            _default: {
                get: function(tween) {
                    var result;
                    if (tween.elem[tween.prop] != null &&
                        (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
                        return tween.elem[tween.prop];
                    }
// passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails
// so, simple values such as "10px" are parsed to Float.
// complex values such as "rotate(1rad)" are returned as is.
                    result = jQuery.css(tween.elem, tween.prop, "");
// Empty strings, null, undefined and "auto" are converted to 0.
                    return !result || result === "auto" ? 0 : result;
                },
                set: function(tween) {
// use step hook for back compat - use cssHook if its there - use .style if its
// available and use plain properties where available
                    if (jQuery.fx.step[tween.prop]) {
                        jQuery.fx.step[tween.prop](tween);
                    } else if (tween.elem.style &&
                        (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                        jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                    } else {
                        tween.elem[tween.prop] = tween.now;
                    }
                }
            }
        };
// Support: IE9
// Panic based approach to setting things on disconnected nodes
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
            set: function(tween) {
                if (tween.elem.nodeType && tween.elem.parentNode) {
                    tween.elem[tween.prop] = tween.now;
                }
            }
        };
        jQuery.easing = {
            linear: function(p) {
                return p;
            },
            swing: function(p) {
                return 0.5 - Math.cos(p * Math.PI) / 2;
            }
        };
        jQuery.fx = Tween.prototype.init;
// Back Compat <1.8 extension point
        jQuery.fx.step = {};
        var
            fxNow,
            timerId,
            rfxtypes = /^(?:toggle|show|hide)$/,
            rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
            rrun = /queueHooks$/,
            animationPrefilters = [defaultPrefilter],
            tweeners = {
                "*": [
                    function(prop, value) {
                        var tween = this.createTween(prop, value),
                            target = tween.cur(),
                            parts = rfxnum.exec(value),
                            unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
// Starting value computation is required for potential unit mismatches
                            start = (jQuery.cssNumber[prop] || unit !== "px" && +target) &&
                                rfxnum.exec(jQuery.css(tween.elem, prop)),
                            scale = 1,
                            maxIterations = 20;
                        if (start && start[3] !== unit) {
// Trust units reported by jQuery.css
                            unit = unit || start[3];
// Make sure we update the tween properties later on
                            parts = parts || [];
// Iteratively approximate from a nonzero starting point
                            start = +target || 1;
                            do {
// If previous iteration zeroed out, double until we get *something*
// Use a string for doubling factor so we don't accidentally see scale as unchanged below
                                scale = scale || ".5";
// Adjust and apply
                                start = start / scale;
                                jQuery.style(tween.elem, prop, start + unit);
// Update scale, tolerating zero or NaN from tween.cur()
// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
                            } while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
                        }
// Update tween properties
                        if (parts) {
                            start = tween.start = +start || +target || 0;
                            tween.unit = unit;
// If a +=/-= token was provided, we're doing a relative animation
                            tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2];
                        }
                        return tween;
                    }
                ]
            };

// Animations created synchronously will run synchronously
        function createFxNow() {
            setTimeout(function() {
                fxNow = undefined;
            });
            return (fxNow = jQuery.now());
        }

// Generate parameters to create a standard animation
        function genFx(type, includeWidth) {
            var which,
                i = 0,
                attrs = { height: type };
// if we include width, step value is 1 to do all cssExpand values,
// if we don't include width, step value is 2 to skip over Left and Right
            includeWidth = includeWidth ? 1 : 0;
            for (; i < 4; i += 2 - includeWidth) {
                which = cssExpand[i];
                attrs["margin" + which] = attrs["padding" + which] = type;
            }
            if (includeWidth) {
                attrs.opacity = attrs.width = type;
            }
            return attrs;
        }

        function createTween(value, prop, animation) {
            var tween,
                collection = (tweeners[prop] || []).concat(tweeners["*"]),
                index = 0,
                length = collection.length;
            for (; index < length; index++) {
                if ((tween = collection[index].call(animation, prop, value))) {
// we're done with this property
                    return tween;
                }
            }
        }

        function defaultPrefilter(elem, props, opts) {
/* jshint validthis: true */
            var prop,
                value,
                toggle,
                tween,
                hooks,
                oldfire,
                display,
                checkDisplay,
                anim = this,
                orig = {},
                style = elem.style,
                hidden = elem.nodeType && isHidden(elem),
                dataShow = data_priv.get(elem, "fxshow");
// handle queue: false promises
            if (!opts.queue) {
                hooks = jQuery._queueHooks(elem, "fx");
                if (hooks.unqueued == null) {
                    hooks.unqueued = 0;
                    oldfire = hooks.empty.fire;
                    hooks.empty.fire = function() {
                        if (!hooks.unqueued) {
                            oldfire();
                        }
                    };
                }
                hooks.unqueued++;
                anim.always(function() {
// doing this makes sure that the complete handler will be called
// before this completes
                    anim.always(function() {
                        hooks.unqueued--;
                        if (!jQuery.queue(elem, "fx").length) {
                            hooks.empty.fire();
                        }
                    });
                });
            }
// height/width overflow pass
            if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
// Make sure that nothing sneaks out
// Record all 3 overflow attributes because IE9-10 do not
// change the overflow attribute when overflowX and
// overflowY are set to the same value
                opts.overflow = [style.overflow, style.overflowX, style.overflowY];
// Set display property to inline-block for height/width
// animations on inline elements that are having width/height animated
                display = jQuery.css(elem, "display");
// Test default display if display is currently "none"
                checkDisplay = display === "none"
                    ? data_priv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName)
                    : display;
                if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
                    style.display = "inline-block";
                }
            }
            if (opts.overflow) {
                style.overflow = "hidden";
                anim.always(function() {
                    style.overflow = opts.overflow[0];
                    style.overflowX = opts.overflow[1];
                    style.overflowY = opts.overflow[2];
                });
            }
// show/hide pass
            for (prop in props) {
                value = props[prop];
                if (rfxtypes.exec(value)) {
                    delete props[prop];
                    toggle = toggle || value === "toggle";
                    if (value === (hidden ? "hide" : "show")) {
// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
                        if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                            hidden = true;
                        } else {
                            continue;
                        }
                    }
                    orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
// Any non-fx value stops us from restoring the original display value
                } else {
                    display = undefined;
                }
            }
            if (!jQuery.isEmptyObject(orig)) {
                if (dataShow) {
                    if ("hidden" in dataShow) {
                        hidden = dataShow.hidden;
                    }
                } else {
                    dataShow = data_priv.access(elem, "fxshow", {});
                }
// store state if its toggle - enables .stop().toggle() to "reverse"
                if (toggle) {
                    dataShow.hidden = !hidden;
                }
                if (hidden) {
                    jQuery(elem).show();
                } else {
                    anim.done(function() {
                        jQuery(elem).hide();
                    });
                }
                anim.done(function() {
                    var prop;
                    data_priv.remove(elem, "fxshow");
                    for (prop in orig) {
                        jQuery.style(elem, prop, orig[prop]);
                    }
                });
                for (prop in orig) {
                    tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                    if (!(prop in dataShow)) {
                        dataShow[prop] = tween.start;
                        if (hidden) {
                            tween.end = tween.start;
                            tween.start = prop === "width" || prop === "height" ? 1 : 0;
                        }
                    }
                }
// If this is a noop like .hide().hide(), restore an overwritten display value
            } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
                style.display = display;
            }
        }

        function propFilter(props, specialEasing) {
            var index, name, easing, value, hooks;
// camelCase, specialEasing and expand cssHook pass
            for (index in props) {
                name = jQuery.camelCase(index);
                easing = specialEasing[name];
                value = props[index];
                if (jQuery.isArray(value)) {
                    easing = value[1];
                    value = props[index] = value[0];
                }
                if (index !== name) {
                    props[name] = value;
                    delete props[index];
                }
                hooks = jQuery.cssHooks[name];
                if (hooks && "expand" in hooks) {
                    value = hooks.expand(value);
                    delete props[name];
// not quite $.extend, this wont overwrite keys already present.
// also - reusing 'index' from above because we have the correct "name"
                    for (index in value) {
                        if (!(index in props)) {
                            props[index] = value[index];
                            specialEasing[index] = easing;
                        }
                    }
                } else {
                    specialEasing[name] = easing;
                }
            }
        }

        function Animation(elem, properties, options) {
            var result,
                stopped,
                index = 0,
                length = animationPrefilters.length,
                deferred = jQuery.Deferred().always(function() {
// don't match elem in the :animated selector
                    delete tick.elem;
                }),
                tick = function() {
                    if (stopped) {
                        return false;
                    }
                    var currentTime = fxNow || createFxNow(),
                        remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
                        temp = remaining / animation.duration || 0,
                        percent = 1 - temp,
                        index = 0,
                        length = animation.tweens.length;
                    for (; index < length; index++) {
                        animation.tweens[index].run(percent);
                    }
                    deferred.notifyWith(elem, [animation, percent, remaining]);
                    if (percent < 1 && length) {
                        return remaining;
                    } else {
                        deferred.resolveWith(elem, [animation]);
                        return false;
                    }
                },
                animation = deferred.promise({
                    elem: elem,
                    props: jQuery.extend({}, properties),
                    opts: jQuery.extend(true, { specialEasing: {} }, options),
                    originalProperties: properties,
                    originalOptions: options,
                    startTime: fxNow || createFxNow(),
                    duration: options.duration,
                    tweens: [],
                    createTween: function(prop, end) {
                        var tween = jQuery.Tween(elem,
                            animation.opts,
                            prop,
                            end,
                            animation.opts.specialEasing[prop] || animation.opts.easing);
                        animation.tweens.push(tween);
                        return tween;
                    },
                    stop: function(gotoEnd) {
                        var index = 0,
// if we are going to the end, we want to run all the tweens
// otherwise we skip this part
                            length = gotoEnd ? animation.tweens.length : 0;
                        if (stopped) {
                            return this;
                        }
                        stopped = true;
                        for (; index < length; index++) {
                            animation.tweens[index].run(1);
                        }
// resolve when we played the last frame
// otherwise, reject
                        if (gotoEnd) {
                            deferred.resolveWith(elem, [animation, gotoEnd]);
                        } else {
                            deferred.rejectWith(elem, [animation, gotoEnd]);
                        }
                        return this;
                    }
                }),
                props = animation.props;
            propFilter(props, animation.opts.specialEasing);
            for (; index < length; index++) {
                result = animationPrefilters[index].call(animation, elem, props, animation.opts);
                if (result) {
                    return result;
                }
            }
            jQuery.map(props, createTween, animation);
            if (jQuery.isFunction(animation.opts.start)) {
                animation.opts.start.call(elem, animation);
            }
            jQuery.fx.timer(
                jQuery.extend(tick,
                {
                    elem: elem,
                    anim: animation,
                    queue: animation.opts.queue
                })
            );
// attach callbacks from options
            return animation.progress(animation.opts.progress)
                .done(animation.opts.done, animation.opts.complete)
                .fail(animation.opts.fail)
                .always(animation.opts.always);
        }

        jQuery.Animation = jQuery.extend(Animation,
        {
            tweener: function(props, callback) {
                if (jQuery.isFunction(props)) {
                    callback = props;
                    props = ["*"];
                } else {
                    props = props.split(" ");
                }
                var prop,
                    index = 0,
                    length = props.length;
                for (; index < length; index++) {
                    prop = props[index];
                    tweeners[prop] = tweeners[prop] || [];
                    tweeners[prop].unshift(callback);
                }
            },
            prefilter: function(callback, prepend) {
                if (prepend) {
                    animationPrefilters.unshift(callback);
                } else {
                    animationPrefilters.push(callback);
                }
            }
        });
        jQuery.speed = function(speed, easing, fn) {
            var opt = speed && typeof speed === "object"
                ? jQuery.extend({}, speed)
                : {
                    complete: fn ||
                        !fn && easing ||
                        jQuery.isFunction(speed) && speed,
                    duration: speed,
                    easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
                };
            opt.duration = jQuery.fx.off
                ? 0
                : typeof opt.duration === "number"
                ? opt.duration
                : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
// normalize opt.queue - true/undefined/null -> "fx"
            if (opt.queue == null || opt.queue === true) {
                opt.queue = "fx";
            }
// Queueing
            opt.old = opt.complete;
            opt.complete = function() {
                if (jQuery.isFunction(opt.old)) {
                    opt.old.call(this);
                }
                if (opt.queue) {
                    jQuery.dequeue(this, opt.queue);
                }
            };
            return opt;
        };
        jQuery.fn.extend({
            fadeTo: function(speed, to, easing, callback) {
// show any hidden elements after setting opacity to 0
                return this.filter(isHidden).css("opacity", 0).show()
// animate to the value specified
                    .end().animate({ opacity: to }, speed, easing, callback);
            },
            animate: function(prop, speed, easing, callback) {
                var empty = jQuery.isEmptyObject(prop),
                    optall = jQuery.speed(speed, easing, callback),
                    doAnimation = function() {
// Operate on a copy of prop so per-property easing won't be lost
                        var anim = Animation(this, jQuery.extend({}, prop), optall);
// Empty animations, or finishing resolves immediately
                        if (empty || data_priv.get(this, "finish")) {
                            anim.stop(true);
                        }
                    };
                doAnimation.finish = doAnimation;
                return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
            },
            stop: function(type, clearQueue, gotoEnd) {
                var stopQueue = function(hooks) {
                    var stop = hooks.stop;
                    delete hooks.stop;
                    stop(gotoEnd);
                };
                if (typeof type !== "string") {
                    gotoEnd = clearQueue;
                    clearQueue = type;
                    type = undefined;
                }
                if (clearQueue && type !== false) {
                    this.queue(type || "fx", []);
                }
                return this.each(function() {
                    var dequeue = true,
                        index = type != null && type + "queueHooks",
                        timers = jQuery.timers,
                        data = data_priv.get(this);
                    if (index) {
                        if (data[index] && data[index].stop) {
                            stopQueue(data[index]);
                        }
                    } else {
                        for (index in data) {
                            if (data[index] && data[index].stop && rrun.test(index)) {
                                stopQueue(data[index]);
                            }
                        }
                    }
                    for (index = timers.length; index--;) {
                        if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                            timers[index].anim.stop(gotoEnd);
                            dequeue = false;
                            timers.splice(index, 1);
                        }
                    }
// start the next in the queue if the last step wasn't forced
// timers currently will call their complete callbacks, which will dequeue
// but only if they were gotoEnd
                    if (dequeue || !gotoEnd) {
                        jQuery.dequeue(this, type);
                    }
                });
            },
            finish: function(type) {
                if (type !== false) {
                    type = type || "fx";
                }
                return this.each(function() {
                    var index,
                        data = data_priv.get(this),
                        queue = data[type + "queue"],
                        hooks = data[type + "queueHooks"],
                        timers = jQuery.timers,
                        length = queue ? queue.length : 0;
// enable finishing flag on private data
                    data.finish = true;
// empty the queue first
                    jQuery.queue(this, type, []);
                    if (hooks && hooks.stop) {
                        hooks.stop.call(this, true);
                    }
// look for any active animations, and finish them
                    for (index = timers.length; index--;) {
                        if (timers[index].elem === this && timers[index].queue === type) {
                            timers[index].anim.stop(true);
                            timers.splice(index, 1);
                        }
                    }
// look for any animations in the old queue and finish them
                    for (index = 0; index < length; index++) {
                        if (queue[index] && queue[index].finish) {
                            queue[index].finish.call(this);
                        }
                    }
// turn off finishing flag
                    delete data.finish;
                });
            }
        });
        jQuery.each(["toggle", "show", "hide"],
            function(i, name) {
                var cssFn = jQuery.fn[name];
                jQuery.fn[name] = function(speed, easing, callback) {
                    return speed == null || typeof speed === "boolean"
                        ? cssFn.apply(this, arguments)
                        : this.animate(genFx(name, true), speed, easing, callback);
                };
            });
// Generate shortcuts for custom animations
        jQuery.each({
                slideDown: genFx("show"),
                slideUp: genFx("hide"),
                slideToggle: genFx("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" }
            },
            function(name, props) {
                jQuery.fn[name] = function(speed, easing, callback) {
                    return this.animate(props, speed, easing, callback);
                };
            });
        jQuery.timers = [];
        jQuery.fx.tick = function() {
            var timer,
                i = 0,
                timers = jQuery.timers;
            fxNow = jQuery.now();
            for (; i < timers.length; i++) {
                timer = timers[i];
// Checks the timer has not already been removed
                if (!timer() && timers[i] === timer) {
                    timers.splice(i--, 1);
                }
            }
            if (!timers.length) {
                jQuery.fx.stop();
            }
            fxNow = undefined;
        };
        jQuery.fx.timer = function(timer) {
            jQuery.timers.push(timer);
            if (timer()) {
                jQuery.fx.start();
            } else {
                jQuery.timers.pop();
            }
        };
        jQuery.fx.interval = 13;
        jQuery.fx.start = function() {
            if (!timerId) {
                timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
            }
        };
        jQuery.fx.stop = function() {
            clearInterval(timerId);
            timerId = null;
        };
        jQuery.fx.speeds = {
            slow: 600,
            fast: 200,
// Default speed
            _default: 400
        };
// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
        jQuery.fn.delay = function(time, type) {
            time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
            type = type || "fx";
            return this.queue(type,
                function(next, hooks) {
                    var timeout = setTimeout(next, time);
                    hooks.stop = function() {
                        clearTimeout(timeout);
                    };
                });
        };
        (function() {
            var input = document.createElement("input"),
                select = document.createElement("select"),
                opt = select.appendChild(document.createElement("option"));
            input.type = "checkbox";
// Support: iOS 5.1, Android 4.x, Android 2.3
// Check the default checkbox/radio value ("" on old WebKit; "on" elsewhere)
            support.checkOn = input.value !== "";
// Must access the parent to make an option select properly
// Support: IE9, IE10
            support.optSelected = opt.selected;
// Make sure that the options inside disabled selects aren't marked as disabled
// (WebKit marks them as disabled)
            select.disabled = true;
            support.optDisabled = !opt.disabled;
// Check if an input maintains its value after becoming a radio
// Support: IE9, IE10
            input = document.createElement("input");
            input.value = "t";
            input.type = "radio";
            support.radioValue = input.value === "t";
        })();
        var nodeHook,
            boolHook,
            attrHandle = jQuery.expr.attrHandle;
        jQuery.fn.extend({
            attr: function(name, value) {
                return access(this, jQuery.attr, name, value, arguments.length > 1);
            },
            removeAttr: function(name) {
                return this.each(function() {
                    jQuery.removeAttr(this, name);
                });
            }
        });
        jQuery.extend({
            attr: function(elem, name, value) {
                var hooks,
                    ret,
                    nType = elem.nodeType;
// don't get/set attributes on text, comment and attribute nodes
                if (!elem || nType === 3 || nType === 8 || nType === 2) {
                    return;
                }
// Fallback to prop when attributes are not supported
                if (typeof elem.getAttribute === strundefined) {
                    return jQuery.prop(elem, name, value);
                }
// All attributes are lowercase
// Grab necessary hook if one is defined
                if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                    name = name.toLowerCase();
                    hooks = jQuery.attrHooks[name] ||
                        (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
                }
                if (value !== undefined) {
                    if (value === null) {
                        jQuery.removeAttr(elem, name);
                    } else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                        return ret;
                    } else {
                        elem.setAttribute(name, value + "");
                        return value;
                    }
                } else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                    return ret;
                } else {
                    ret = jQuery.find.attr(elem, name);
// Non-existent attributes return null, we normalize to undefined
                    return ret == null ? undefined : ret;
                }
            },
            removeAttr: function(elem, value) {
                var name,
                    propName,
                    i = 0,
                    attrNames = value && value.match(rnotwhite);
                if (attrNames && elem.nodeType === 1) {
                    while ((name = attrNames[i++])) {
                        propName = jQuery.propFix[name] || name;
// Boolean attributes get special treatment (#10870)
                        if (jQuery.expr.match.bool.test(name)) {
// Set corresponding property to false
                            elem[propName] = false;
                        }
                        elem.removeAttribute(name);
                    }
                }
            },
            attrHooks: {
                type: {
                    set: function(elem, value) {
                        if (!support.radioValue &&
                            value === "radio" &&
                            jQuery.nodeName(elem, "input")) {
// Setting the type on a radio button after the value resets the value in IE6-9
// Reset value to default in case type is set after value during creation
                            var val = elem.value;
                            elem.setAttribute("type", value);
                            if (val) {
                                elem.value = val;
                            }
                            return value;
                        }
                    }
                }
            }
        });
// Hooks for boolean attributes
        boolHook = {
            set: function(elem, value, name) {
                if (value === false) {
// Remove boolean attributes when set to false
                    jQuery.removeAttr(elem, name);
                } else {
                    elem.setAttribute(name, name);
                }
                return name;
            }
        };
        jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),
            function(i, name) {
                var getter = attrHandle[name] || jQuery.find.attr;
                attrHandle[name] = function(elem, name, isXML) {
                    var ret, handle;
                    if (!isXML) {
// Avoid an infinite loop by temporarily removing this function from the getter
                        handle = attrHandle[name];
                        attrHandle[name] = ret;
                        ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
                        attrHandle[name] = handle;
                    }
                    return ret;
                };
            });
        var rfocusable = /^(?:input|select|textarea|button)$/i;
        jQuery.fn.extend({
            prop: function(name, value) {
                return access(this, jQuery.prop, name, value, arguments.length > 1);
            },
            removeProp: function(name) {
                return this.each(function() {
                    delete this[jQuery.propFix[name] || name];
                });
            }
        });
        jQuery.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(elem, name, value) {
                var ret,
                    hooks,
                    notxml,
                    nType = elem.nodeType;
// don't get/set properties on text, comment and attribute nodes
                if (!elem || nType === 3 || nType === 8 || nType === 2) {
                    return;
                }
                notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
                if (notxml) {
// Fix name and attach hooks
                    name = jQuery.propFix[name] || name;
                    hooks = jQuery.propHooks[name];
                }
                if (value !== undefined) {
                    return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined
                        ? ret
                        : (elem[name] = value);
                } else {
                    return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
                }
            },
            propHooks: {
                tabIndex: {
                    get: function(elem) {
                        return elem.hasAttribute("tabindex") || rfocusable.test(elem.nodeName) || elem.href
                            ? elem.tabIndex
                            : -1;
                    }
                }
            }
        });
// Support: IE9+
// Selectedness for an option in an optgroup can be inaccurate
        if (!support.optSelected) {
            jQuery.propHooks.selected = {
                get: function(elem) {
                    var parent = elem.parentNode;
                    if (parent && parent.parentNode) {
                        parent.parentNode.selectedIndex;
                    }
                    return null;
                }
            };
        }
        jQuery.each([
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable"
            ],
            function() {
                jQuery.propFix[this.toLowerCase()] = this;
            });
        var rclass = /[\t\r\n\f]/g;
        jQuery.fn.extend({
            addClass: function(value) {
                var classes,
                    elem,
                    cur,
                    clazz,
                    j,
                    finalValue,
                    proceed = typeof value === "string" && value,
                    i = 0,
                    len = this.length;
                if (jQuery.isFunction(value)) {
                    return this.each(function(j) {
                        jQuery(this).addClass(value.call(this, j, this.className));
                    });
                }
                if (proceed) {
// The disjunction here is for better compressibility (see removeClass)
                    classes = (value || "").match(rnotwhite) || [];
                    for (; i < len; i++) {
                        elem = this[i];
                        cur = elem.nodeType === 1 &&
                        (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " "
                        );
                        if (cur) {
                            j = 0;
                            while ((clazz = classes[j++])) {
                                if (cur.indexOf(" " + clazz + " ") < 0) {
                                    cur += clazz + " ";
                                }
                            }
// only assign if different to avoid unneeded rendering.
                            finalValue = jQuery.trim(cur);
                            if (elem.className !== finalValue) {
                                elem.className = finalValue;
                            }
                        }
                    }
                }
                return this;
            },
            removeClass: function(value) {
                var classes,
                    elem,
                    cur,
                    clazz,
                    j,
                    finalValue,
                    proceed = arguments.length === 0 || typeof value === "string" && value,
                    i = 0,
                    len = this.length;
                if (jQuery.isFunction(value)) {
                    return this.each(function(j) {
                        jQuery(this).removeClass(value.call(this, j, this.className));
                    });
                }
                if (proceed) {
                    classes = (value || "").match(rnotwhite) || [];
                    for (; i < len; i++) {
                        elem = this[i];
// This expression is here for better compressibility (see addClass)
                        cur = elem.nodeType === 1 &&
                        (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : ""
                        );
                        if (cur) {
                            j = 0;
                            while ((clazz = classes[j++])) {
// Remove *all* instances
                                while (cur.indexOf(" " + clazz + " ") >= 0) {
                                    cur = cur.replace(" " + clazz + " ", " ");
                                }
                            }
// only assign if different to avoid unneeded rendering.
                            finalValue = value ? jQuery.trim(cur) : "";
                            if (elem.className !== finalValue) {
                                elem.className = finalValue;
                            }
                        }
                    }
                }
                return this;
            },
            toggleClass: function(value, stateVal) {
                var type = typeof value;
                if (typeof stateVal === "boolean" && type === "string") {
                    return stateVal ? this.addClass(value) : this.removeClass(value);
                }
                if (jQuery.isFunction(value)) {
                    return this.each(function(i) {
                        jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
                    });
                }
                return this.each(function() {
                    if (type === "string") {
// toggle individual class names
                        var className,
                            i = 0,
                            self = jQuery(this),
                            classNames = value.match(rnotwhite) || [];
                        while ((className = classNames[i++])) {
// check each className given, space separated list
                            if (self.hasClass(className)) {
                                self.removeClass(className);
                            } else {
                                self.addClass(className);
                            }
                        }
// Toggle whole class name
                    } else if (type === strundefined || type === "boolean") {
                        if (this.className) {
// store className if set
                            data_priv.set(this, "__className__", this.className);
                        }
// If the element has a class name or if we're passed "false",
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
                        this.className = this.className || value === false
                            ? ""
                            : data_priv.get(this, "__className__") || "";
                    }
                });
            },
            hasClass: function(selector) {
                var className = " " + selector + " ",
                    i = 0,
                    l = this.length;
                for (; i < l; i++) {
                    if (this[i].nodeType === 1 &&
                        (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
                        return true;
                    }
                }
                return false;
            }
        });
        var rreturn = /\r/g;
        jQuery.fn.extend({
            val: function(value) {
                var hooks,
                    ret,
                    isFunction,
                    elem = this[0];
                if (!arguments.length) {
                    if (elem) {
                        hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                        if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                            return ret;
                        }
                        ret = elem.value;
                        return typeof ret === "string"
                            ?
// handle most common string cases
                            ret.replace(rreturn, "")
                            :
// handle cases where value is null/undef or number
                            ret == null ? "" : ret;
                    }
                    return;
                }
                isFunction = jQuery.isFunction(value);
                return this.each(function(i) {
                    var val;
                    if (this.nodeType !== 1) {
                        return;
                    }
                    if (isFunction) {
                        val = value.call(this, i, jQuery(this).val());
                    } else {
                        val = value;
                    }
// Treat null/undefined as ""; convert numbers to string
                    if (val == null) {
                        val = "";
                    } else if (typeof val === "number") {
                        val += "";
                    } else if (jQuery.isArray(val)) {
                        val = jQuery.map(val,
                            function(value) {
                                return value == null ? "" : value + "";
                            });
                    }
                    hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
// If set returns undefined, fall back to normal setting
                    if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                        this.value = val;
                    }
                });
            }
        });
        jQuery.extend({
            valHooks: {
                option: {
                    get: function(elem) {
                        var val = jQuery.find.attr(elem, "value");
                        return val != null
                            ? val
                            :
// Support: IE10-11+
// option.text throws exceptions (#14686, #14858)
                            jQuery.trim(jQuery.text(elem));
                    }
                },
                select: {
                    get: function(elem) {
                        var value,
                            option,
                            options = elem.options,
                            index = elem.selectedIndex,
                            one = elem.type === "select-one" || index < 0,
                            values = one ? null : [],
                            max = one ? index + 1 : options.length,
                            i = index < 0 ? max : one ? index : 0;
// Loop through all the selected options
                        for (; i < max; i++) {
                            option = options[i];
// IE6-9 doesn't update selected after form reset (#2551)
                            if ((option.selected || i === index) &&
// Don't return options that are disabled or in a disabled optgroup
                                (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) &&
                                (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
// Get the specific value for the option
                                value = jQuery(option).val();
// We don't need an array for one selects
                                if (one) {
                                    return value;
                                }
// Multi-Selects return an array
                                values.push(value);
                            }
                        }
                        return values;
                    },
                    set: function(elem, value) {
                        var optionSet,
                            option,
                            options = elem.options,
                            values = jQuery.makeArray(value),
                            i = options.length;
                        while (i--) {
                            option = options[i];
                            if ((option.selected = jQuery.inArray(option.value, values) >= 0)) {
                                optionSet = true;
                            }
                        }
// force browsers to behave consistently when non-matching value is set
                        if (!optionSet) {
                            elem.selectedIndex = -1;
                        }
                        return values;
                    }
                }
            }
        });
// Radios and checkboxes getter/setter
        jQuery.each(["radio", "checkbox"],
            function() {
                jQuery.valHooks[this] = {
                    set: function(elem, value) {
                        if (jQuery.isArray(value)) {
                            return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0);
                        }
                    }
                };
                if (!support.checkOn) {
                    jQuery.valHooks[this].get = function(elem) {
// Support: Webkit
// "" is returned instead of "on" if a value isn't specified
                        return elem.getAttribute("value") === null ? "on" : elem.value;
                    };
                }
            });
// Return jQuery for attributes-only inclusion
        jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " +
                "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
                "change select submit keydown keypress keyup error contextmenu").split(" "),
            function(i, name) {
// Handle event binding
                jQuery.fn[name] = function(data, fn) {
                    return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
                };
            });
        jQuery.fn.extend({
            hover: function(fnOver, fnOut) {
                return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
            },
            bind: function(types, data, fn) {
                return this.on(types, null, data, fn);
            },
            unbind: function(types, fn) {
                return this.off(types, null, fn);
            },
            delegate: function(selector, types, data, fn) {
                return this.on(types, selector, data, fn);
            },
            undelegate: function(selector, types, fn) {
// ( namespace ) or ( selector, types [, fn] )
                return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
            }
        });
        var nonce = jQuery.now();
        var rquery = (/\?/);
// Support: Android 2.3
// Workaround failure to string-cast null input
        jQuery.parseJSON = function(data) {
            return JSON.parse(data + "");
        };
// Cross-browser xml parsing
        jQuery.parseXML = function(data) {
            var xml, tmp;
            if (!data || typeof data !== "string") {
                return null;
            }
// Support: IE9
            try {
                tmp = new DOMParser();
                xml = tmp.parseFromString(data, "text/xml");
            } catch (e) {
                xml = undefined;
            }
            if (!xml || xml.getElementsByTagName("parsererror").length) {
                jQuery.error("Invalid XML: " + data);
            }
            return xml;
        };
        var
// Document location
            ajaxLocParts,
            ajaxLocation,
            rhash = /#.*$/,
            rts = /([?&])_=[^&]*/,
            rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
// #7653, #8125, #8152: local protocol detection
            rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            rnoContent = /^(?:GET|HEAD)$/,
            rprotocol = /^\/\//,
            rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
/* Prefilters
* 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
* 2) These are called:
*    - BEFORE asking for a transport
*    - AFTER param serialization (s.data is a string if s.processData is true)
* 3) key is the dataType
* 4) the catchall symbol "*" can be used
* 5) execution will start with transport dataType and THEN continue down to "*" if needed
*/
            prefilters = {},
/* Transports bindings
* 1) key is the dataType
* 2) the catchall symbol "*" can be used
* 3) selection will start with transport dataType and THEN go to "*" if needed
*/
            transports = {},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
            allTypes = "*/".concat("*");
// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
        try {
            ajaxLocation = location.href;
        } catch (e) {
// Use the href attribute of an A element
// since IE will modify it given document.location
            ajaxLocation = document.createElement("a");
            ajaxLocation.href = "";
            ajaxLocation = ajaxLocation.href;
        }
// Segment location into parts
        ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
        function addToPrefiltersOrTransports(structure) {
// dataTypeExpression is optional and defaults to "*"
            return function(dataTypeExpression, func) {
                if (typeof dataTypeExpression !== "string") {
                    func = dataTypeExpression;
                    dataTypeExpression = "*";
                }
                var dataType,
                    i = 0,
                    dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
                if (jQuery.isFunction(func)) {
// For each dataType in the dataTypeExpression
                    while ((dataType = dataTypes[i++])) {
// Prepend if requested
                        if (dataType[0] === "+") {
                            dataType = dataType.slice(1) || "*";
                            (structure[dataType] = structure[dataType] || []).unshift(func);
// Otherwise append
                        } else {
                            (structure[dataType] = structure[dataType] || []).push(func);
                        }
                    }
                }
            };
        }

// Base inspection function for prefilters and transports
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
            var inspected = {},
                seekingTransport = (structure === transports);

            function inspect(dataType) {
                var selected;
                inspected[dataType] = true;
                jQuery.each(structure[dataType] || [],
                    function(_, prefilterOrFactory) {
                        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                        if (typeof dataTypeOrTransport === "string" &&
                            !seekingTransport &&
                            !inspected[dataTypeOrTransport]
                        ) {
                            options.dataTypes.unshift(dataTypeOrTransport);
                            inspect(dataTypeOrTransport);
                            return false;
                        } else if (seekingTransport) {
                            return !(selected = dataTypeOrTransport);
                        }
                    });
                return selected;
            }

            return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
        function ajaxExtend(target, src) {
            var key,
                deep,
                flatOptions = jQuery.ajaxSettings.flatOptions || {};
            for (key in src) {
                if (src[key] !== undefined) {
                    (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
                }
            }
            if (deep) {
                jQuery.extend(true, target, deep);
            }
            return target;
        }

/* Handles responses to an ajax request:
* - finds the right dataType (mediates between content-type and expected dataType)
* - returns the corresponding response
*/
        function ajaxHandleResponses(s, jqXHR, responses) {
            var ct,
                type,
                finalDataType,
                firstDataType,
                contents = s.contents,
                dataTypes = s.dataTypes;
// Remove auto dataType and get content-type in the process
            while (dataTypes[0] === "*") {
                dataTypes.shift();
                if (ct === undefined) {
                    ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
                }
            }
// Check if we're dealing with a known content-type
            if (ct) {
                for (type in contents) {
                    if (contents[type] && contents[type].test(ct)) {
                        dataTypes.unshift(type);
                        break;
                    }
                }
            }
// Check to see if we have a response for the expected dataType
            if (dataTypes[0] in responses) {
                finalDataType = dataTypes[0];
            } else {
// Try convertible dataTypes
                for (type in responses) {
                    if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                        finalDataType = type;
                        break;
                    }
                    if (!firstDataType) {
                        firstDataType = type;
                    }
                }
// Or just use first one
                finalDataType = finalDataType || firstDataType;
            }
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
            if (finalDataType) {
                if (finalDataType !== dataTypes[0]) {
                    dataTypes.unshift(finalDataType);
                }
                return responses[finalDataType];
            }
        }

/* Chain conversions given the request and the original response
* Also sets the responseXXX fields on the jqXHR instance
*/
        function ajaxConvert(s, response, jqXHR, isSuccess) {
            var conv2,
                current,
                conv,
                tmp,
                prev,
                converters = {},
// Work with a copy of dataTypes in case we need to modify it for conversion
                dataTypes = s.dataTypes.slice();
// Create converters map with lowercased keys
            if (dataTypes[1]) {
                for (conv in s.converters) {
                    converters[conv.toLowerCase()] = s.converters[conv];
                }
            }
            current = dataTypes.shift();
// Convert to each sequential dataType
            while (current) {
                if (s.responseFields[current]) {
                    jqXHR[s.responseFields[current]] = response;
                }
// Apply the dataFilter if provided
                if (!prev && isSuccess && s.dataFilter) {
                    response = s.dataFilter(response, s.dataType);
                }
                prev = current;
                current = dataTypes.shift();
                if (current) {
// There's only work to do if current dataType is non-auto
                    if (current === "*") {
                        current = prev;
// Convert response if prev dataType is non-auto and differs from current
                    } else if (prev !== "*" && prev !== current) {
// Seek a direct converter
                        conv = converters[prev + " " + current] || converters["* " + current];
// If none found, seek a pair
                        if (!conv) {
                            for (conv2 in converters) {
// If conv2 outputs current
                                tmp = conv2.split(" ");
                                if (tmp[1] === current) {
// If prev can be converted to accepted input
                                    conv = converters[prev + " " + tmp[0]] ||
                                        converters["* " + tmp[0]];
                                    if (conv) {
// Condense equivalence converters
                                        if (conv === true) {
                                            conv = converters[conv2];
// Otherwise, insert the intermediate dataType
                                        } else if (converters[conv2] !== true) {
                                            current = tmp[0];
                                            dataTypes.unshift(tmp[1]);
                                        }
                                        break;
                                    }
                                }
                            }
                        }
// Apply converter (if not an equivalence)
                        if (conv !== true) {
// Unless errors are allowed to bubble, catch and return them
                            if (conv && s["throws"]) {
                                response = conv(response);
                            } else {
                                try {
                                    response = conv(response);
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: conv ? e : "No conversion from " + prev + " to " + current
                                    };
                                }
                            }
                        }
                    }
                }
            }
            return { state: "success", data: response };
        }

        jQuery.extend({
// Counter for holding the number of active queries
            active: 0,
// Last-Modified header cache for next request
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ajaxLocation,
                type: "GET",
                isLocal: rlocalProtocol.test(ajaxLocParts[1]),
                global: true,
                processData: true,
                async: true,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
/*
timeout: 0,
data: null,
dataType: null,
username: null,
password: null,
cache: null,
throws: false,
traditional: false,
headers: {},
*/
                accepts: {
                    "*": allTypes,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
                converters: {
// Convert anything to text
                    "* text": String,
// Text to html (true = no transformation)
                    "text html": true,
// Evaluate text as a json expression
                    "text json": jQuery.parseJSON,
// Parse text as xml
                    "text xml": jQuery.parseXML
                },
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
                flatOptions: {
                    url: true,
                    context: true
                }
            },
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
            ajaxSetup: function(target, settings) {
                return settings
                    ?
// Building a settings object
                    ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings)
                    :
// Extending ajaxSettings
                    ajaxExtend(jQuery.ajaxSettings, target);
            },
            ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
            ajaxTransport: addToPrefiltersOrTransports(transports),
// Main method
            ajax: function(url, options) {
// If url is an object, simulate pre-1.5 signature
                if (typeof url === "object") {
                    options = url;
                    url = undefined;
                }
// Force options to be an object
                options = options || {};
                var transport,
// URL without anti-cache param
                    cacheURL,
// Response headers
                    responseHeadersString,
                    responseHeaders,
// timeout handle
                    timeoutTimer,
// Cross-domain detection vars
                    parts,
// To know if global events are to be dispatched
                    fireGlobals,
// Loop variable
                    i,
// Create the final options object
                    s = jQuery.ajaxSetup({}, options),
// Callbacks context
                    callbackContext = s.context || s,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
                    globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery)
                        ? jQuery(callbackContext)
                        : jQuery.event,
// Deferreds
                    deferred = jQuery.Deferred(),
                    completeDeferred = jQuery.Callbacks("once memory"),
// Status-dependent callbacks
                    statusCode = s.statusCode || {},
// Headers (they are sent all at once)
                    requestHeaders = {},
                    requestHeadersNames = {},
// The jqXHR state
                    state = 0,
// Default abort message
                    strAbort = "canceled",
// Fake xhr
                    jqXHR = {
                        readyState: 0,
// Builds headers hashtable if needed
                        getResponseHeader: function(key) {
                            var match;
                            if (state === 2) {
                                if (!responseHeaders) {
                                    responseHeaders = {};
                                    while ((match = rheaders.exec(responseHeadersString))) {
                                        responseHeaders[match[1].toLowerCase()] = match[2];
                                    }
                                }
                                match = responseHeaders[key.toLowerCase()];
                            }
                            return match == null ? null : match;
                        },
// Raw string
                        getAllResponseHeaders: function() {
                            return state === 2 ? responseHeadersString : null;
                        },
// Caches the header
                        setRequestHeader: function(name, value) {
                            var lname = name.toLowerCase();
                            if (!state) {
                                name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                                requestHeaders[name] = value;
                            }
                            return this;
                        },
// Overrides response content-type header
                        overrideMimeType: function(type) {
                            if (!state) {
                                s.mimeType = type;
                            }
                            return this;
                        },
// Status-dependent callbacks
                        statusCode: function(map) {
                            var code;
                            if (map) {
                                if (state < 2) {
                                    for (code in map) {
// Lazy-add the new callback in a way that preserves old ones
                                        statusCode[code] = [statusCode[code], map[code]];
                                    }
                                } else {
// Execute the appropriate callbacks
                                    jqXHR.always(map[jqXHR.status]);
                                }
                            }
                            return this;
                        },
// Cancel the request
                        abort: function(statusText) {
                            var finalText = statusText || strAbort;
                            if (transport) {
                                transport.abort(finalText);
                            }
                            done(0, finalText);
                            return this;
                        }
                    };
// Attach deferreds
                deferred.promise(jqXHR).complete = completeDeferred.add;
                jqXHR.success = jqXHR.done;
                jqXHR.error = jqXHR.fail;
// Remove hash character (#7531: and string promotion)
// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
                s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "")
                    .replace(rprotocol, ajaxLocParts[1] + "//");
// Alias method option to type as per ticket #12004
                s.type = options.method || options.type || s.method || s.type;
// Extract dataTypes list
                s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];
// A cross-domain request is in order when we have a protocol:host:port mismatch
                if (s.crossDomain == null) {
                    parts = rurl.exec(s.url.toLowerCase());
                    s.crossDomain = !!(parts &&
                        (parts[1] !== ajaxLocParts[1] ||
                            parts[2] !== ajaxLocParts[2] ||
                            (parts[3] || (parts[1] === "http:" ? "80" : "443")) !==
                            (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443")))
                    );
                }
// Convert data if not already a string
                if (s.data && s.processData && typeof s.data !== "string") {
                    s.data = jQuery.param(s.data, s.traditional);
                }
// Apply prefilters
                inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
// If request was aborted inside a prefilter, stop there
                if (state === 2) {
                    return jqXHR;
                }
// We can fire global events as of now if asked to
                fireGlobals = s.global;
// Watch for a new set of requests
                if (fireGlobals && jQuery.active++ === 0) {
                    jQuery.event.trigger("ajaxStart");
                }
// Uppercase the type
                s.type = s.type.toUpperCase();
// Determine if request has content
                s.hasContent = !rnoContent.test(s.type);
// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
                cacheURL = s.url;
// More options handling for requests with no content
                if (!s.hasContent) {
// If data is available, append data to url
                    if (s.data) {
                        cacheURL = (s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data);
// #9682: remove data so that it's not used in an eventual retry
                        delete s.data;
                    }
// Add anti-cache in url if needed
                    if (s.cache === false) {
                        s.url = rts.test(cacheURL)
                            ?
// If there is already a '_' parameter, set its value
                            cacheURL.replace(rts, "$1_=" + nonce++)
                            :
// Otherwise add one to the end
                            cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
                    }
                }
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                if (s.ifModified) {
                    if (jQuery.lastModified[cacheURL]) {
                        jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                    }
                    if (jQuery.etag[cacheURL]) {
                        jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                    }
                }
// Set the correct header, if data is being sent
                if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                    jqXHR.setRequestHeader("Content-Type", s.contentType);
                }
// Set the Accepts header for the server, depending on the dataType
                jqXHR.setRequestHeader(
                    "Accept",
                    s.dataTypes[0] && s.accepts[s.dataTypes[0]]
                    ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "")
                    : s.accepts["*"]
                );
// Check for headers option
                for (i in s.headers) {
                    jqXHR.setRequestHeader(i, s.headers[i]);
                }
// Allow custom headers/mimetypes and early abort
                if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
// Abort if not done already and return
                    return jqXHR.abort();
                }
// aborting is no longer a cancellation
                strAbort = "abort";
// Install callbacks on deferreds
                for (i in { success: 1, error: 1, complete: 1 }) {
                    jqXHR[i](s[i]);
                }
// Get transport
                transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
// If no transport, we auto-abort
                if (!transport) {
                    done(-1, "No Transport");
                } else {
                    jqXHR.readyState = 1;
// Send global event
                    if (fireGlobals) {
                        globalEventContext.trigger("ajaxSend", [jqXHR, s]);
                    }
// Timeout
                    if (s.async && s.timeout > 0) {
                        timeoutTimer = setTimeout(function() {
                                jqXHR.abort("timeout");
                            },
                            s.timeout);
                    }
                    try {
                        state = 1;
                        transport.send(requestHeaders, done);
                    } catch (e) {
// Propagate exception as error if not done
                        if (state < 2) {
                            done(-1, e);
// Simply rethrow otherwise
                        } else {
                            throw e;
                        }
                    }
                }

// Callback for when everything is done
                function done(status, nativeStatusText, responses, headers) {
                    var isSuccess,
                        success,
                        error,
                        response,
                        modified,
                        statusText = nativeStatusText;
// Called once
                    if (state === 2) {
                        return;
                    }
// State is "done" now
                    state = 2;
// Clear timeout if it exists
                    if (timeoutTimer) {
                        clearTimeout(timeoutTimer);
                    }
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
                    transport = undefined;
// Cache response headers
                    responseHeadersString = headers || "";
// Set readyState
                    jqXHR.readyState = status > 0 ? 4 : 0;
// Determine if successful
                    isSuccess = status >= 200 && status < 300 || status === 304;
// Get response data
                    if (responses) {
                        response = ajaxHandleResponses(s, jqXHR, responses);
                    }
// Convert no matter what (that way responseXXX fields are always set)
                    response = ajaxConvert(s, response, jqXHR, isSuccess);
// If successful, handle type chaining
                    if (isSuccess) {
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                        if (s.ifModified) {
                            modified = jqXHR.getResponseHeader("Last-Modified");
                            if (modified) {
                                jQuery.lastModified[cacheURL] = modified;
                            }
                            modified = jqXHR.getResponseHeader("etag");
                            if (modified) {
                                jQuery.etag[cacheURL] = modified;
                            }
                        }
// if no content
                        if (status === 204 || s.type === "HEAD") {
                            statusText = "nocontent";
// if not modified
                        } else if (status === 304) {
                            statusText = "notmodified";
// If we have data, let's convert it
                        } else {
                            statusText = response.state;
                            success = response.data;
                            error = response.error;
                            isSuccess = !error;
                        }
                    } else {
// We extract error from statusText
// then normalize statusText and status for non-aborts
                        error = statusText;
                        if (status || !statusText) {
                            statusText = "error";
                            if (status < 0) {
                                status = 0;
                            }
                        }
                    }
// Set data for the fake xhr object
                    jqXHR.status = status;
                    jqXHR.statusText = (nativeStatusText || statusText) + "";
// Success/Error
                    if (isSuccess) {
                        deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
                    } else {
                        deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
                    }
// Status-dependent callbacks
                    jqXHR.statusCode(statusCode);
                    statusCode = undefined;
                    if (fireGlobals) {
                        globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError",
                            [jqXHR, s, isSuccess ? success : error]);
                    }
// Complete
                    completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
                    if (fireGlobals) {
                        globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
// Handle the global AJAX counter
                        if (!(--jQuery.active)) {
                            jQuery.event.trigger("ajaxStop");
                        }
                    }
                }

                return jqXHR;
            },
            getJSON: function(url, data, callback) {
                return jQuery.get(url, data, callback, "json");
            },
            getScript: function(url, callback) {
                return jQuery.get(url, undefined, callback, "script");
            }
        });
        jQuery.each(["get", "post"],
            function(i, method) {
                jQuery[method] = function(url, data, callback, type) {
// shift arguments if data argument was omitted
                    if (jQuery.isFunction(data)) {
                        type = type || callback;
                        callback = data;
                        data = undefined;
                    }
                    return jQuery.ajax({
                        url: url,
                        type: method,
                        dataType: type,
                        data: data,
                        success: callback
                    });
                };
            });
// Attach a bunch of functions for handling common AJAX events
        jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
            function(i, type) {
                jQuery.fn[type] = function(fn) {
                    return this.on(type, fn);
                };
            });
        jQuery._evalUrl = function(url) {
            return jQuery.ajax({
                url: url,
                type: "GET",
                dataType: "script",
                async: false,
                global: false,
                "throws": true
            });
        };
        jQuery.fn.extend({
            wrapAll: function(html) {
                var wrap;
                if (jQuery.isFunction(html)) {
                    return this.each(function(i) {
                        jQuery(this).wrapAll(html.call(this, i));
                    });
                }
                if (this[0]) {
// The elements to wrap the target around
                    wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                    if (this[0].parentNode) {
                        wrap.insertBefore(this[0]);
                    }
                    wrap.map(function() {
                        var elem = this;
                        while (elem.firstElementChild) {
                            elem = elem.firstElementChild;
                        }
                        return elem;
                    }).append(this);
                }
                return this;
            },
            wrapInner: function(html) {
                if (jQuery.isFunction(html)) {
                    return this.each(function(i) {
                        jQuery(this).wrapInner(html.call(this, i));
                    });
                }
                return this.each(function() {
                    var self = jQuery(this),
                        contents = self.contents();
                    if (contents.length) {
                        contents.wrapAll(html);
                    } else {
                        self.append(html);
                    }
                });
            },
            wrap: function(html) {
                var isFunction = jQuery.isFunction(html);
                return this.each(function(i) {
                    jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
                });
            },
            unwrap: function() {
                return this.parent().each(function() {
                    if (!jQuery.nodeName(this, "body")) {
                        jQuery(this).replaceWith(this.childNodes);
                    }
                }).end();
            }
        });
        jQuery.expr.filters.hidden = function(elem) {
// Support: Opera <= 12.12
// Opera reports offsetWidths and offsetHeights less than zero on some elements
            return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
        };
        jQuery.expr.filters.visible = function(elem) {
            return !jQuery.expr.filters.hidden(elem);
        };
        var r20 = /%20/g,
            rbracket = /\[\]$/,
            rCRLF = /\r?\n/g,
            rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
            rsubmittable = /^(?:input|select|textarea|keygen)/i;

        function buildParams(prefix, obj, traditional, add) {
            var name;
            if (jQuery.isArray(obj)) {
// Serialize array item.
                jQuery.each(obj,
                    function(i, v) {
                        if (traditional || rbracket.test(prefix)) {
// Treat each array item as a scalar.
                            add(prefix, v);
                        } else {
// Item is non-scalar (array or object), encode its numeric index.
                            buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
                        }
                    });
            } else if (!traditional && jQuery.type(obj) === "object") {
// Serialize object item.
                for (name in obj) {
                    buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
                }
            } else {
// Serialize scalar item.
                add(prefix, obj);
            }
        }

// Serialize an array of form elements or a set of
// key/values into a query string
        jQuery.param = function(a, traditional) {
            var prefix,
                s = [],
                add = function(key, value) {
// If value is a function, invoke it and return its value
                    value = jQuery.isFunction(value) ? value() : (value == null ? "" : value);
                    s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
                };
// Set traditional to true for jQuery <= 1.3.2 behavior.
            if (traditional === undefined) {
                traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
            }
// If an array was passed in, assume that it is an array of form elements.
            if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
// Serialize the form elements
                jQuery.each(a,
                    function() {
                        add(this.name, this.value);
                    });
            } else {
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
                for (prefix in a) {
                    buildParams(prefix, a[prefix], traditional, add);
                }
            }
// Return the resulting serialization
            return s.join("&").replace(r20, "+");
        };
        jQuery.fn.extend({
            serialize: function() {
                return jQuery.param(this.serializeArray());
            },
            serializeArray: function() {
                return this.map(function() {
// Can add propHook for "elements" to filter or add form elements
                        var elements = jQuery.prop(this, "elements");
                        return elements ? jQuery.makeArray(elements) : this;
                    })
                    .filter(function() {
                        var type = this.type;
// Use .is( ":disabled" ) so that fieldset[disabled] works
                        return this.name &&
                            !jQuery(this).is(":disabled") &&
                            rsubmittable.test(this.nodeName) &&
                            !rsubmitterTypes.test(type) &&
                            (this.checked || !rcheckableType.test(type));
                    })
                    .map(function(i, elem) {
                        var val = jQuery(this).val();
                        return val == null
                            ? null
                            : jQuery.isArray(val)
                            ? jQuery.map(val,
                                function(val) {
                                    return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
                                })
                            : { name: elem.name, value: val.replace(rCRLF, "\r\n") };
                    }).get();
            }
        });
        jQuery.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest();
            } catch (e) {
            }
        };
        var xhrId = 0,
            xhrCallbacks = {},
            xhrSuccessStatus = {
// file protocol always yields status code 0, assume 200
                0: 200,
// Support: IE9
// #1450: sometimes IE returns 1223 when it should be 204
                1223: 204
            },
            xhrSupported = jQuery.ajaxSettings.xhr();
// Support: IE9
// Open requests must be manually aborted on unload (#5280)
        if (window.ActiveXObject) {
            jQuery(window).on("unload",
                function() {
                    for (var key in xhrCallbacks) {
                        xhrCallbacks[key]();
                    }
                });
        }
        support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery.ajaxTransport(function(options) {
            var callback;
// Cross domain only allowed if supported through XMLHttpRequest
            if (support.cors || xhrSupported && !options.crossDomain) {
                return {
                    send: function(headers, complete) {
                        var i,
                            xhr = options.xhr(),
                            id = ++xhrId;
                        xhr.open(options.type, options.url, options.async, options.username, options.password);
// Apply custom fields if provided
                        if (options.xhrFields) {
                            for (i in options.xhrFields) {
                                xhr[i] = options.xhrFields[i];
                            }
                        }
// Override mime type if needed
                        if (options.mimeType && xhr.overrideMimeType) {
                            xhr.overrideMimeType(options.mimeType);
                        }
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
                        if (!options.crossDomain && !headers["X-Requested-With"]) {
                            headers["X-Requested-With"] = "XMLHttpRequest";
                        }
// Set headers
                        for (i in headers) {
                            xhr.setRequestHeader(i, headers[i]);
                        }
// Callback
                        callback = function(type) {
                            return function() {
                                if (callback) {
                                    delete xhrCallbacks[id];
                                    callback = xhr.onload = xhr.onerror = null;
                                    if (type === "abort") {
                                        xhr.abort();
                                    } else if (type === "error") {
                                        complete(
// file: protocol always yields status 0; see #8605, #14207
                                            xhr.status,
                                            xhr.statusText
                                        );
                                    } else {
                                        complete(
                                            xhrSuccessStatus[xhr.status] || xhr.status,
                                            xhr.statusText,
// Support: IE9
// Accessing binary-data responseText throws an exception
// (#11426)
                                            typeof xhr.responseText === "string"
                                            ? {
                                                text: xhr.responseText
                                            }
                                            : undefined,
                                            xhr.getAllResponseHeaders()
                                        );
                                    }
                                }
                            };
                        };
// Listen to events
                        xhr.onload = callback();
                        xhr.onerror = callback("error");
// Create the abort callback
                        callback = xhrCallbacks[id] = callback("abort");
                        try {
// Do send the request (this may raise an exception)
                            xhr.send(options.hasContent && options.data || null);
                        } catch (e) {
// #14683: Only rethrow if this hasn't been notified as an error yet
                            if (callback) {
                                throw e;
                            }
                        }
                    },
                    abort: function() {
                        if (callback) {
                            callback();
                        }
                    }
                };
            }
        });
// Install script dataType
        jQuery.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(text) {
                    jQuery.globalEval(text);
                    return text;
                }
            }
        });
// Handle cache's special case and crossDomain
        jQuery.ajaxPrefilter("script",
            function(s) {
                if (s.cache === undefined) {
                    s.cache = false;
                }
                if (s.crossDomain) {
                    s.type = "GET";
                }
            });
// Bind script tag hack transport
        jQuery.ajaxTransport("script",
            function(s) {
// This transport only deals with cross domain requests
                if (s.crossDomain) {
                    var script, callback;
                    return {
                        send: function(_, complete) {
                            script = jQuery("<script>").prop({
                                async: true,
                                charset: s.scriptCharset,
                                src: s.url
                            }).on(
                                "load error",
                                callback = function(evt) {
                                    script.remove();
                                    callback = null;
                                    if (evt) {
                                        complete(evt.type === "error" ? 404 : 200, evt.type);
                                    }
                                }
                            );
                            document.head.appendChild(script[0]);
                        },
                        abort: function() {
                            if (callback) {
                                callback();
                            }
                        }
                    };
                }
            });
        var oldCallbacks = [],
            rjsonp = /(=)\?(?=&|$)|\?\?/;
// Default jsonp settings
        jQuery.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
                this[callback] = true;
                return callback;
            }
        });
// Detect, normalize options and install callbacks for jsonp requests
        jQuery.ajaxPrefilter("json jsonp",
            function(s, originalSettings, jqXHR) {
                var callbackName,
                    overwritten,
                    responseContainer,
                    jsonProp = s.jsonp !== false &&
                    (rjsonp.test(s.url)
                        ? "url"
                        : typeof s.data === "string" &&
                        !(s.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                        rjsonp.test(s.data) &&
                        "data"
                    );
// Handle iff the expected data type is "jsonp" or we have a parameter to set
                if (jsonProp || s.dataTypes[0] === "jsonp") {
// Get callback name, remembering preexisting value associated with it
                    callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback)
                        ? s.jsonpCallback()
                        : s.jsonpCallback;
// Insert callback into url or form data
                    if (jsonProp) {
                        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
                    } else if (s.jsonp !== false) {
                        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
                    }
// Use data converter to retrieve json after script execution
                    s.converters["script json"] = function() {
                        if (!responseContainer) {
                            jQuery.error(callbackName + " was not called");
                        }
                        return responseContainer[0];
                    };
// force json dataType
                    s.dataTypes[0] = "json";
// Install callback
                    overwritten = window[callbackName];
                    window[callbackName] = function() {
                        responseContainer = arguments;
                    };
// Clean-up function (fires after converters)
                    jqXHR.always(function() {
// Restore preexisting value
                        window[callbackName] = overwritten;
// Save back as free
                        if (s[callbackName]) {
// make sure that re-using the options doesn't screw things around
                            s.jsonpCallback = originalSettings.jsonpCallback;
// save the callback name for future use
                            oldCallbacks.push(callbackName);
                        }
// Call if it was a function and we have a response
                        if (responseContainer && jQuery.isFunction(overwritten)) {
                            overwritten(responseContainer[0]);
                        }
                        responseContainer = overwritten = undefined;
                    });
// Delegate to script
                    return "script";
                }
            });
// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
        jQuery.parseHTML = function(data, context, keepScripts) {
            if (!data || typeof data !== "string") {
                return null;
            }
            if (typeof context === "boolean") {
                keepScripts = context;
                context = false;
            }
            context = context || document;
            var parsed = rsingleTag.exec(data),
                scripts = !keepScripts && [];
// Single tag
            if (parsed) {
                return [context.createElement(parsed[1])];
            }
            parsed = jQuery.buildFragment([data], context, scripts);
            if (scripts && scripts.length) {
                jQuery(scripts).remove();
            }
            return jQuery.merge([], parsed.childNodes);
        };
// Keep a copy of the old load method
        var _load = jQuery.fn.load;
/**
* Load a url into a page
*/
        jQuery.fn.load = function(url, params, callback) {
            if (typeof url !== "string" && _load) {
                return _load.apply(this, arguments);
            }
            var selector,
                type,
                response,
                self = this,
                off = url.indexOf(" ");
            if (off >= 0) {
                selector = jQuery.trim(url.slice(off));
                url = url.slice(0, off);
            }
// If it's a function
            if (jQuery.isFunction(params)) {
// We assume that it's the callback
                callback = params;
                params = undefined;
// Otherwise, build a param string
            } else if (params && typeof params === "object") {
                type = "POST";
            }
// If we have elements to modify, make the request
            if (self.length > 0) {
                jQuery.ajax({
                    url: url,
// if "type" variable is undefined, then "GET" method will be used
                    type: type,
                    dataType: "html",
                    data: params
                }).done(function(responseText) {
// Save response for use in complete callback
                    response = arguments;
                    self.html(selector
                        ?
// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
                        jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector)
                        :
// Otherwise use the full result
                        responseText);
                }).complete(callback &&
                    function(jqXHR, status) {
                        self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
                    });
            }
            return this;
        };
        jQuery.expr.filters.animated = function(elem) {
            return jQuery.grep(jQuery.timers,
                function(fn) {
                    return elem === fn.elem;
                }).length;
        };
        var docElem = window.document.documentElement;

/**
* Gets a window from an element
*/
        function getWindow(elem) {
            return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
        }

        jQuery.offset = {
            setOffset: function(elem, options, i) {
                var curPosition,
                    curLeft,
                    curCSSTop,
                    curTop,
                    curOffset,
                    curCSSLeft,
                    calculatePosition,
                    position = jQuery.css(elem, "position"),
                    curElem = jQuery(elem),
                    props = {};
// Set position first, in-case top/left are set even on static elem
                if (position === "static") {
                    elem.style.position = "relative";
                }
                curOffset = curElem.offset();
                curCSSTop = jQuery.css(elem, "top");
                curCSSLeft = jQuery.css(elem, "left");
                calculatePosition = (position === "absolute" || position === "fixed") &&
                    (curCSSTop + curCSSLeft).indexOf("auto") > -1;
// Need to be able to calculate position if either top or left is auto and position is either absolute or fixed
                if (calculatePosition) {
                    curPosition = curElem.position();
                    curTop = curPosition.top;
                    curLeft = curPosition.left;
                } else {
                    curTop = parseFloat(curCSSTop) || 0;
                    curLeft = parseFloat(curCSSLeft) || 0;
                }
                if (jQuery.isFunction(options)) {
                    options = options.call(elem, i, curOffset);
                }
                if (options.top != null) {
                    props.top = (options.top - curOffset.top) + curTop;
                }
                if (options.left != null) {
                    props.left = (options.left - curOffset.left) + curLeft;
                }
                if ("using" in options) {
                    options.using.call(elem, props);
                } else {
                    curElem.css(props);
                }
            }
        };
        jQuery.fn.extend({
            offset: function(options) {
                if (arguments.length) {
                    return options === undefined
                        ? this
                        : this.each(function(i) {
                            jQuery.offset.setOffset(this, options, i);
                        });
                }
                var docElem,
                    win,
                    elem = this[0],
                    box = { top: 0, left: 0 },
                    doc = elem && elem.ownerDocument;
                if (!doc) {
                    return;
                }
                docElem = doc.documentElement;
// Make sure it's not a disconnected DOM node
                if (!jQuery.contains(docElem, elem)) {
                    return box;
                }
// If we don't have gBCR, just use 0,0 rather than error
// BlackBerry 5, iOS 3 (original iPhone)
                if (typeof elem.getBoundingClientRect !== strundefined) {
                    box = elem.getBoundingClientRect();
                }
                win = getWindow(doc);
                return {
                    top: box.top + win.pageYOffset - docElem.clientTop,
                    left: box.left + win.pageXOffset - docElem.clientLeft
                };
            },
            position: function() {
                if (!this[0]) {
                    return;
                }
                var offsetParent,
                    offset,
                    elem = this[0],
                    parentOffset = { top: 0, left: 0 };
// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
                if (jQuery.css(elem, "position") === "fixed") {
// We assume that getBoundingClientRect is available when computed position is fixed
                    offset = elem.getBoundingClientRect();
                } else {
// Get *real* offsetParent
                    offsetParent = this.offsetParent();
// Get correct offsets
                    offset = this.offset();
                    if (!jQuery.nodeName(offsetParent[0], "html")) {
                        parentOffset = offsetParent.offset();
                    }
// Add offsetParent borders
                    parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
                    parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
                }
// Subtract parent offsets and element margins
                return {
                    top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                    left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
                };
            },
            offsetParent: function() {
                return this.map(function() {
                    var offsetParent = this.offsetParent || docElem;
                    while (offsetParent &&
                        (!jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static")) {
                        offsetParent = offsetParent.offsetParent;
                    }
                    return offsetParent || docElem;
                });
            }
        });
// Create scrollLeft and scrollTop methods
        jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function(method, prop) {
                var top = "pageYOffset" === prop;
                jQuery.fn[method] = function(val) {
                    return access(this,
                        function(elem, method, val) {
                            var win = getWindow(elem);
                            if (val === undefined) {
                                return win ? win[prop] : elem[method];
                            }
                            if (win) {
                                win.scrollTo(
                                    !top ? val : window.pageXOffset,
                                    top ? val : window.pageYOffset
                                );
                            } else {
                                elem[method] = val;
                            }
                        },
                        method,
                        val,
                        arguments.length,
                        null);
                };
            });
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
        jQuery.each(["top", "left"],
            function(i, prop) {
                jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition,
                    function(elem, computed) {
                        if (computed) {
                            computed = curCSS(elem, prop);
// if curCSS returns percentage, fallback to offset
                            return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
                        }
                    }
                );
            });
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
        jQuery.each({ Height: "height", Width: "width" },
            function(name, type) {
                jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name },
                    function(defaultExtra, funcName) {
// margin is only for outerHeight, outerWidth
                        jQuery.fn[funcName] = function(margin, value) {
                            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
                                extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                            return access(this,
                                function(elem, type, value) {
                                    var doc;
                                    if (jQuery.isWindow(elem)) {
// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
// isn't a whole lot we can do. See pull request at this URL for discussion:
// https://github.com/jquery/jquery/pull/764
                                        return elem.document.documentElement["client" + name];
                                    }
// Get document width or height
                                    if (elem.nodeType === 9) {
                                        doc = elem.documentElement;
// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
// whichever is greatest
                                        return Math.max(
                                            elem.body["scroll" + name],
                                            doc["scroll" + name],
                                            elem.body["offset" + name],
                                            doc["offset" + name],
                                            doc["client" + name]
                                        );
                                    }
                                    return value === undefined
                                        ?
// Get width or height on the element, requesting but not forcing parseFloat
                                        jQuery.css(elem, type, extra)
                                        :
// Set width or height on the element
                                        jQuery.style(elem, type, value, extra);
                                },
                                type,
                                chainable ? margin : undefined,
                                chainable,
                                null);
                        };
                    });
            });
// The number of elements contained in the matched element set
        jQuery.fn.size = function() {
            return this.length;
        };
        jQuery.fn.andSelf = jQuery.fn.addBack;
// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
        if (typeof define === "function" && define.amd) {
            define("jquery",
                [],
                function() {
                    return jQuery;
                });
        }
        var
// Map over jQuery in case of overwrite
            _jQuery = window.jQuery,
// Map over the $ in case of overwrite
            _$ = window.$;
        jQuery.noConflict = function(deep) {
            if (window.$ === jQuery) {
                window.$ = _$;
            }
            if (deep && window.jQuery === jQuery) {
                window.jQuery = _jQuery;
            }
            return jQuery;
        };
// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
        if (typeof noGlobal === strundefined) {
            window.jQuery = window.$ = jQuery;
        }
        return jQuery;
    }));
/*
This file is based on or incorporates material from the projects listed below (Third Party IP). The original copyright notice and the license under which Microsoft received such Third Party IP, are set forth below. Such licenses and notices are provided for informational purposes only. Microsoft licenses the Third Party IP to you under the licensing terms for the Microsoft product. Microsoft reserves all other rights not expressly granted under this agreement, whether by implication, estoppel or otherwise.
PEP v0.3.0 | https://github.com/jquery/PEP
Copyright jQuery Foundation and other contributors | http://jquery.org/license
Provided for Informational Purposes Only
MIT License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the Software), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
/*!
* PEP v0.3.0 | https://github.com/jquery/PEP
* Copyright jQuery Foundation and other contributors | http://jquery.org/license
*/
!function(a, b) {
    "object" == typeof exports && "undefined" != typeof module
        ? module.exports = b()
        : "function" == typeof define && define.amd ? define(b) : a.PointerEventsPolyfill = b()
}(this,
    function() {
        "use strict";

        function a() {
            if (k) {
                var a = new Map;
                return a.pointers = l, a
            }
            this.keys = [], this.values = []
        }

        function b(a, b, c, d) {
            this.addCallback = a.bind(d), this.removeCallback = b.bind(d), this.changedCallback = c
                .bind(d), x && (this.observer = new x(this.mutationWatcher.bind(this)))
        }

        function c(a, b) {
            b = b || Object.create(null);
            var c = document.createEvent("Event");
            c.initEvent(a, b.bubbles || !1, b.cancelable || !1);
            for (var d, e = 2; e < B.length; e++) d = B[e], c[d] = b[d] || C[e];
            c.buttons = b.buttons || 0;
            var f = 0;
            return f = b.pressure ? b.pressure : c.buttons ? .5 : 0, c.x = c.clientX, c.y = c.clientY, c
                .pointerId = b.pointerId || 0, c.width = b.width || 0, c.height = b.height || 0, c.pressure = f, c
                .tiltX = b.tiltX || 0, c.tiltY = b.tiltY || 0, c.pointerType = b.pointerType || "", c
                .hwTimestamp = b.hwTimestamp || 0, c.isPrimary = b.isPrimary || !1, c
        }

        function d(a) { return"body /shadow-deep/ " + e(a) }

        function e(a) { return'[touch-action="' + a + '"]' }

        function f(a) { return"{ -ms-touch-action: " + a + "; touch-action: " + a + "; touch-action-delay: none; }" }

        function g() {
            if (G) {
                E.forEach(function(a) {
                    String(a) === a
                        ? (F += e(a) + f(a) + "\n", H && (F += d(a) + f(a) + "\n"))
                        : (F += a.selectors
                            .map(e) +
                            f(a.rule) +
                            "\n", H && (F += a.selectors.map(d) + f(a.rule) + "\n"))
                });
                var a = document.createElement("style");
                a.textContent = F, document.head.appendChild(a)
            }
        }

        function h() {
            if (!window.PointerEvent) {
                if (window.PointerEvent = D, window.navigator.msPointerEnabled) {
                    var a = window.navigator.msMaxTouchPoints;
                    Object.defineProperty(window.navigator, "maxTouchPoints", { value: a, enumerable: !0 }), r
                        .registerSource("ms", da)
                } else r.registerSource("mouse", P), void 0 !== window.ontouchstart && r.registerSource("touch", _);
                r.register(document)
            }
        }

        function i(a) { if (!r.pointermap.has(a)) throw new Error("InvalidPointerId") }

        function j() {
            window.Element &&
                !Element.prototype.setPointerCapture &&
                Object.defineProperties(Element.prototype,
                    { setPointerCapture: { value: Z }, releasePointerCapture: { value: $ } })
        }

        var k = window.Map && window.Map.prototype.forEach, l = function() { return this.size };
        a.prototype = {
            set: function(a, b) {
                var c = this.keys.indexOf(a);
                c > -1 ? this.values[c] = b : (this.keys.push(a), this.values.push(b))
            },
            has: function(a) { return this.keys.indexOf(a) > -1 },
            "delete": function(a) {
                var b = this.keys.indexOf(a);
                b > -1 && (this.keys.splice(b, 1), this.values.splice(b, 1))
            },
            get: function(a) {
                var b = this.keys.indexOf(a);
                return this.values[b]
            },
            clear: function() { this.keys.length = 0, this.values.length = 0 },
            forEach: function(a, b) { this.values.forEach(function(c, d) { a.call(b, c, this.keys[d], this) }, this) },
            pointers: function() { return this.keys.length }
        };
        var m = a,
            n = [
                "bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey",
                "altKey",
                "shiftKey", "metaKey", "button", "relatedTarget", "buttons", "pointerId", "width", "height", "pressure",
                "tiltX", "tiltY", "pointerType", "hwTimestamp", "isPrimary", "type", "target", "currentTarget", "which",
                "pageX", "pageY", "timeStamp"
            ],
            o = [
                !1, !1, null, null, 0, 0, 0, 0, !1, !1, !1, !1, 0, null, 0, 0, 0, 0, 0, 0, 0, "", 0, !1, "", null, null,
                0,
                0, 0, 0
            ],
            p = "undefined" != typeof SVGElementInstance,
            q = {
                pointermap: new m,
                eventMap: Object.create(null),
                captureInfo: Object.create(null),
                eventSources: Object.create(null),
                eventSourceList: [],
                registerSource: function(a, b) {
                    var c = b, d = c.events;
                    d &&
                    (d.forEach(function(a) { c[a] && (this.eventMap[a] = c[a].bind(c)) }, this), this
                        .eventSources[a] = c, this.eventSourceList.push(c))
                },
                register: function(a) {
                    for (var b, c = this.eventSourceList.length, d = 0;
                        c > d && (b = this.eventSourceList[d]);
                        d++
                    ) b.register.call(b, a)
                },
                unregister: function(a) {
                    for (var b, c = this.eventSourceList.length, d = 0;
                        c > d && (b = this.eventSourceList[d]);
                        d++
                    ) b.unregister.call(b, a)
                },
                contains: function(a, b) {
                    if (a.contains) {
                        return a.contains(b);
                    }
                    return null;
                },
                down: function(a) { a.bubbles = !0, this.fireEvent("pointerdown", a) },
                move: function(a) { a.bubbles = !0, this.fireEvent("pointermove", a) },
                up: function(a) { a.bubbles = !0, this.fireEvent("pointerup", a) },
                enter: function(a) { a.bubbles = !1, this.fireEvent("pointerenter", a) },
                leave: function(a) { a.bubbles = !1, this.fireEvent("pointerleave", a) },
                over: function(a) { a.bubbles = !0, this.fireEvent("pointerover", a) },
                out: function(a) { a.bubbles = !0, this.fireEvent("pointerout", a) },
                cancel: function(a) { a.bubbles = !0, this.fireEvent("pointercancel", a) },
                leaveOut: function(a) { this.out(a), this.contains(a.target, a.relatedTarget) || this.leave(a) },
                enterOver: function(a) { this.over(a), this.contains(a.target, a.relatedTarget) || this.enter(a) },
                eventHandler: function(a) {
                    if (!a._handledByPE) {
                        var b = a.type, c = this.eventMap && this.eventMap[b];
                        c && c(a), a._handledByPE = !0
                    }
                },
                listen: function(a, b) { b.forEach(function(b) { this.addEvent(a, b) }, this) },
                unlisten: function(a, b) { b.forEach(function(b) { this.removeEvent(a, b) }, this) },
                addEvent: function(a, b) { a.addEventListener(b, this.boundHandler) },
                removeEvent: function(a, b) { a.removeEventListener(b, this.boundHandler) },
                makeEvent: function(a, b) {
                    this.captureInfo[b.pointerId] && (b.relatedTarget = null);
                    var c = new PointerEvent(a, b);
                    return b.preventDefault && (c.preventDefault = b.preventDefault), c
                        ._target = c._target || b.target, c
                },
                fireEvent: function(a, b) {
                    var c = this.makeEvent(a, b);
                    return this.dispatchEvent(c)
                },
                cloneEvent: function(a) {
                    for (var b, c = Object.create(null), d = 0;
                        d < n.length;
                        d++
                    )
                        b = n[d], c[b] = a[b] || o[d], !p ||
                            "target" !== b && "relatedTarget" !== b ||
                            c[b] instanceof SVGElementInstance && (c[b] = c[b].correspondingUseElement);
                    return a.preventDefault && (c.preventDefault = function() { a.preventDefault() }), c
                },
                getTarget: function(a) { return this.captureInfo[a.pointerId] || a._target },
                setCapture: function(a, b) {
                    this.captureInfo[a] && this.releaseCapture(a), this.captureInfo[a] = b;
                    var c = document.createEvent("Event");
                    c.initEvent("gotpointercapture", !0, !1), c.pointerId = a, this.implicitRelease = this
                        .releaseCapture
                        .bind(this, a), document.addEventListener("pointerup", this.implicitRelease), document
                        .addEventListener("pointercancel", this.implicitRelease), c._target = b, this
                        .asyncDispatchEvent(c)
                },
                releaseCapture: function(a) {
                    var b = this.captureInfo[a];
                    if (b) {
                        var c = document.createEvent("Event");
                        c.initEvent("lostpointercapture", !0, !1), c.pointerId = a, this
                            .captureInfo[a] = void 0, document
                            .removeEventListener("pointerup", this.implicitRelease), document
                            .removeEventListener("pointercancel", this.implicitRelease), c._target = b, this
                            .asyncDispatchEvent(c)
                    }
                },
                dispatchEvent: function(a) {
                    var b = this.getTarget(a);
                    return b ? b.dispatchEvent(a) : void 0
                },
                asyncDispatchEvent: function(a) { requestAnimationFrame(this.dispatchEvent.bind(this, a)) }
            };
        q.boundHandler = q.eventHandler.bind(q);
        var r = q,
            s = {
                shadow: function(a) { return a ? a.shadowRoot || a.webkitShadowRoot : void 0 },
                canTarget: function(a) { return a && Boolean(a.elementFromPoint) },
                targetingShadow: function(a) {
                    var b = this.shadow(a);
                    return this.canTarget(b) ? b : void 0
                },
                olderShadow: function(a) {
                    var b = a.olderShadowRoot;
                    if (!b) {
                        var c = a.querySelector("shadow");
                        c && (b = c.olderShadowRoot)
                    }
                    return b
                },
                allShadows: function(a) {
                    for (var b = [], c = this.shadow(a); c;) b.push(c), c = this.olderShadow(c);
                    return b
                },
                searchRoot: function(a, b, c) {
                    if (a) {
                        var d, e, f = a.elementFromPoint(b, c);
                        for (e = this.targetingShadow(f); e;) {
                            if (d = e.elementFromPoint(b, c)) {
                                var g = this.targetingShadow(d);
                                return this.searchRoot(g, b, c) || d
                            }
                            e = this.olderShadow(e)
                        }
                        return f
                    }
                },
                owner: function(a) {
                    for (var b = a; b.parentNode;) b = b.parentNode;
                    return b
                        .nodeType !=
                        Node.DOCUMENT_NODE &&
                        b.nodeType != Node.DOCUMENT_FRAGMENT_NODE &&
                        (b = document), b
                },
                findTarget: function(a) {
                    var b = a.clientX, c = a.clientY, d = this.owner(a.target);
                    return d.elementFromPoint(b, c) || (d = document), this.searchRoot(d, b, c)
                }
            },
            t = Array.prototype.forEach.call.bind(Array.prototype.forEach),
            u = Array.prototype.map.call.bind(Array.prototype.map),
            v = Array.prototype.slice.call.bind(Array.prototype.slice),
            w = Array.prototype.filter.call.bind(Array.prototype.filter),
            x = window.MutationObserver || window.WebKitMutationObserver,
            y = "[touch-action]",
            z = {
                subtree: !0,
                childList: !0,
                attributes: !0,
                attributeOldValue: !0,
                attributeFilter:
                    ["touch-action"]
            };
        b.prototype = {
            watchSubtree: function(a) { s.canTarget(a) && this.observer.observe(a, z) },
            enableOnSubtree: function(a) {
                this.watchSubtree(a), a === document && "complete" !== document.readyState
                    ? this.installOnLoad()
                    : this.installNewSubtree(a)
            },
            installNewSubtree: function(a) { t(this.findElements(a), this.addElement, this) },
            findElements: function(a) { return a.querySelectorAll ? a.querySelectorAll(y) : [] },
            removeElement: function(a) { this.removeCallback(a) },
            addElement: function(a) { this.addCallback(a) },
            elementChanged: function(a, b) { this.changedCallback(a, b) },
            concatLists: function(a, b) { return a.concat(v(b)) },
            installOnLoad: function() {
                document.addEventListener("readystatechange",
                    function() { "complete" === document.readyState && this.installNewSubtree(document) }.bind(this))
            },
            isElement: function(a) { return a.nodeType === Node.ELEMENT_NODE },
            flattenMutationTree: function(a) {
                var b = u(a, this.findElements, this);
                return b.push(w(a, this.isElement)), b.reduce(this.concatLists, [])
            },
            mutationWatcher: function(a) { a.forEach(this.mutationHandler, this) },
            mutationHandler: function(a) {
                if ("childList" === a.type) {
                    var b = this.flattenMutationTree(a.addedNodes);
                    b.forEach(this.addElement, this);
                    var c = this.flattenMutationTree(a.removedNodes);
                    c.forEach(this.removeElement, this)
                } else "attributes" === a.type && this.elementChanged(a.target, a.oldValue)
            }
        }, x ||
        (b.prototype.watchSubtree = function() {
            console
                .warn("PointerEventsPolyfill: MutationObservers not found, touch-action will not be dynamically detected")
        });
        var A = b,
            B = [
                "bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey",
                "altKey", "shiftKey", "metaKey", "button", "relatedTarget", "pageX", "pageY"
            ],
            C = [!1, !1, null, null, 0, 0, 0, 0, !1, !1, !1, !1, 0, null, 0, 0],
            D = c,
            E = ["none", "auto", "pan-x", "pan-y", { rule: "pan-x pan-y", selectors: ["pan-x pan-y", "pan-y pan-x"] }],
            F = "",
            G = (document.head, window.PointerEvent || window.MSPointerEvent),
            H = !window.ShadowDOMPolyfill && document.head.createShadowRoot,
            I = r.pointermap,
            J = 25,
            K = [0, 1, 4, 2],
            L = !1;
        try {
            L = 1 === new MouseEvent("test", { buttons: 1 }).buttons
        } catch (M) {
        }
        var N,
            O = {
                POINTER_ID: 1,
                POINTER_TYPE: "mouse",
                events: ["mousedown", "mousemove", "mouseup", "mouseover", "mouseout"],
                register: function(a) { r.listen(a, this.events) },
                unregister: function(a) { r.unlisten(a, this.events) },
                lastTouches: [],
                isEventSimulatedFromTouch: function(a) {
                    for (var b, c = this.lastTouches, d = a.clientX, e = a.clientY, f = 0, g = c.length;
                        g > f && (b = c[f]);
                        f++) {
                        var h = Math.abs(d - b.x), i = Math.abs(e - b.y);
                        if (J >= h && J >= i) return!0
                    }
                },
                prepareEvent: function(a) {
                    var b = r.cloneEvent(a), c = b.preventDefault;
                    return b.preventDefault = function() { a.preventDefault(), c() }, b.pointerId = this.POINTER_ID, b
                        .isPrimary = !0, b.pointerType = this.POINTER_TYPE, L || (b.buttons = K[b.which] || 0), b
                },
                mousedown: function(a) {
                    if (!this.isEventSimulatedFromTouch(a)) {
                        var b = I.has(this.POINTER_ID);
                        b && this.cancel(a);
                        var c = this.prepareEvent(a);
                        I.set(this.POINTER_ID, a), r.down(c)
                    }
                },
                mousemove: function(a) {
                    if (!this.isEventSimulatedFromTouch(a)) {
                        var b = this.prepareEvent(a);
                        r.move(b)
                    }
                },
                mouseup: function(a) {
                    if (!this.isEventSimulatedFromTouch(a)) {
                        var b = I.get(this.POINTER_ID);
                        if (b && b.button === a.button) {
                            var c = this.prepareEvent(a);
                            r.up(c), this.cleanupMouse()
                        }
                    }
                },
                mouseover: function(a) {
                    if (!this.isEventSimulatedFromTouch(a)) {
                        var b = this.prepareEvent(a);
                        r.enterOver(b)
                    }
                },
                mouseout: function(a) {
                    if (!this.isEventSimulatedFromTouch(a)) {
                        var b = this.prepareEvent(a);
                        r.leaveOut(b)
                    }
                },
                cancel: function(a) {
                    var b = this.prepareEvent(a);
                    r.cancel(b), this.cleanupMouse()
                },
                cleanupMouse: function() { I["delete"](this.POINTER_ID) }
            },
            P = O,
            Q = r.captureInfo,
            R = s.findTarget.bind(s),
            S = s.allShadows.bind(s),
            T = r.pointermap,
            U = (Array.prototype.map.call.bind(Array.prototype.map), 2500),
            V = 200,
            W = "touch-action",
            X = !1,
            Y = {
                events: ["touchstart", "touchmove", "touchend", "touchcancel"],
                register: function(a) { X ? r.listen(a, this.events) : N.enableOnSubtree(a) },
                unregister: function(a) { X && r.unlisten(a, this.events) },
                elementAdded: function(a) {
                    var b = a.getAttribute(W), c = this.touchActionToScrollType(b);
                    c &&
                    (a._scrollType = c, r.listen(a, this.events), S(a)
                        .forEach(function(a) { a._scrollType = c, r.listen(a, this.events) }, this))
                },
                elementRemoved: function(a) {
                    a._scrollType = void 0, r.unlisten(a, this.events), S(a)
                        .forEach(function(a) { a._scrollType = void 0, r.unlisten(a, this.events) }, this)
                },
                elementChanged: function(a, b) {
                    var c = a.getAttribute(W), d = this.touchActionToScrollType(c), e = this.touchActionToScrollType(b);
                    d && e
                        ? (a._scrollType = d, S(a).forEach(function(a) { a._scrollType = d }, this))
                        : e ? this.elementRemoved(a) : d && this.elementAdded(a)
                },
                scrollTypes: {
                    EMITTER: "none",
                    XSCROLLER: "pan-x",
                    YSCROLLER: "pan-y",
                    SCROLLER: /^(?:pan-x pan-y)|(?:pan-y pan-x)|auto$/
                },
                touchActionToScrollType: function(a) {
                    var b = a, c = this.scrollTypes;
                    return"none" === b
                        ? "none"
                        : b === c.XSCROLLER ? "X" : b === c.YSCROLLER ? "Y" : c.SCROLLER.exec(b) ? "XY" : void 0
                },
                POINTER_TYPE: "touch",
                firstTouch: null,
                isPrimaryTouch: function(a) { return this.firstTouch === a.identifier },
                setPrimaryTouch: function(a) {
                    (0 === T.pointers() || 1 === T.pointers() && T.has(1)) &&
                    (this.firstTouch = a.identifier, this.firstXY = { X: a.clientX, Y: a.clientY }, this
                        .scrolling = !1, this.cancelResetClickCount())
                },
                removePrimaryPointer: function(a) {
                    a.isPrimary && (this.firstTouch = null, this.firstXY = null, this.resetClickCount())
                },
                clickCount: 0,
                resetId: null,
                resetClickCount: function() {
                    var a = function() { this.clickCount = 0, this.resetId = null }.bind(this);
                    this.resetId = setTimeout(a, V)
                },
                cancelResetClickCount: function() { this.resetId && clearTimeout(this.resetId) },
                typeToButtons: function(a) {
                    var b = 0;
                    return("touchstart" === a || "touchmove" === a) && (b = 1), b
                },
                touchToPointer: function(a) {
                    var b = this.currentTouchEvent, c = r.cloneEvent(a), d = c.pointerId = a.identifier + 2;
                    c.target = Q[d] || R(c), c.bubbles = !0, c.cancelable = !0, c.detail = this.clickCount, c
                        .button = 0, c
                        .buttons = this.typeToButtons(b.type), c.width = a.webkitRadiusX || a.radiusX || 0, c
                        .height = a.webkitRadiusY || a.radiusY || 0, c.pressure = a.webkitForce || a.force || .5, c
                        .isPrimary = this.isPrimaryTouch(a), c.pointerType = this.POINTER_TYPE;
                    var e = this;
                    return c.preventDefault = function() { e.scrolling = !1, e.firstXY = null, b.preventDefault() }, c
                },
                processTouches: function(a, b) {
                    var c = a.changedTouches;
                    this.currentTouchEvent = a;
                    for (var d, e = 0; e < c.length; e++) d = c[e], b.call(this, this.touchToPointer(d))
                },
                shouldScroll: function(a) {
                    if (this.firstXY) {
                        var b, c = a.currentTarget._scrollType;
                        if ("none" === c) b = !1;
                        else if ("XY" === c) b = !0;
                        else {
                            var d = a.changedTouches[0],
                                e = c,
                                f = "Y" === c ? "X" : "Y",
                                g = Math.abs(d["client" + e] - this.firstXY[e]),
                                h = Math.abs(d["client" + f] - this.firstXY[f]);
                            b = g >= h
                        }
                        return this.firstXY = null, b
                    }
                },
                findTouch: function(a, b) {
                    for (var c, d = 0, e = a.length; e > d && (c = a[d]); d++) if (c.identifier === b) return!0
                },
                vacuumTouches: function(a) {
                    var b = a.touches;
                    if (T.pointers() >= b.length) {
                        var c = [];
                        T.forEach(function(a, d) {
                                if (1 !== d && !this.findTouch(b, d - 2)) {
                                    var e = a.out;
                                    c.push(e)
                                }
                            },
                            this), c.forEach(this.cancelOut, this)
                    }
                },
                touchstart: function(a) {
                    this.vacuumTouches(a), this.setPrimaryTouch(a.changedTouches[0]), this
                        .dedupSynthMouse(a), this.scrolling ||
                        (this.clickCount++, this.processTouches(a, this.overDown))
                },
                overDown: function(a) {
                    T.set(a.pointerId, { target: a.target, out: a, outTarget: a.target });
                    r.over(a), r.enter(a), r.down(a)
                },
                touchmove: function(a) {
                    this.scrolling ||
                    (this.shouldScroll(a)
                        ? (this.scrolling = !0, this.touchcancel(a))
                        : (a.preventDefault(), this.processTouches(a, this.moveOverOut)))
                },
                moveOverOut: function(a) {
                    var b = a, c = T.get(b.pointerId);
                    if (c) {
                        var d = c.out, e = c.outTarget;
                        r.move(b), d &&
                            e !== b.target &&
                            (d.relatedTarget = b.target, b.relatedTarget = e, d
                                .target = e, b.target
                                ? (r.leaveOut(d), r.enterOver(b))
                                : (b.target = e, b.relatedTarget = null, this.cancelOut(b))), c.out = b, c.outTarget = b
                            .target
                    }
                },
                touchend: function(a) { this.dedupSynthMouse(a), this.processTouches(a, this.upOut) },
                upOut: function(a) { this.scrolling || (r.up(a), r.out(a), r.leave(a)), this.cleanUpPointer(a) },
                touchcancel: function(a) { this.processTouches(a, this.cancelOut) },
                cancelOut: function(a) { r.cancel(a), r.out(a), r.leave(a), this.cleanUpPointer(a) },
                cleanUpPointer: function(a) { T["delete"](a.pointerId), this.removePrimaryPointer(a) },
                dedupSynthMouse: function(a) {
                    var b = P.lastTouches, c = a.changedTouches[0];
                    if (this.isPrimaryTouch(c)) {
                        var d = { x: c.clientX, y: c.clientY };
                        b.push(d);
                        var e = function(a, b) {
                            var c = a.indexOf(b);
                            c > -1 && a.splice(c, 1)
                        }.bind(null, b, d);
                        setTimeout(e, U)
                    }
                }
            };
        X || (N = new A(Y.elementAdded, Y.elementRemoved, Y.elementChanged, Y));
        var Z,
            $,
            _ = Y,
            aa = r.pointermap,
            ba = window.MSPointerEvent && "number" == typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE,
            ca = {
                events: [
                    "MSPointerDown", "MSPointerMove", "MSPointerUp", "MSPointerOut", "MSPointerOver", "MSPointerCancel",
                    "MSGotPointerCapture", "MSLostPointerCapture"
                ],
                register: function(a) { r.listen(a, this.events) },
                unregister: function(a) { r.unlisten(a, this.events) },
                POINTER_TYPES: ["", "unavailable", "touch", "pen", "mouse"],
                prepareEvent: function(a) {
                    var b = a;
                    return ba && (b = r.cloneEvent(a), b.pointerType = this.POINTER_TYPES[a.pointerType]), b
                },
                cleanup: function(a) { aa["delete"](a) },
                MSPointerDown: function(a) {
                    aa.set(a.pointerId, a);
                    var b = this.prepareEvent(a);
                    r.down(b)
                },
                MSPointerMove: function(a) {
                    var b = this.prepareEvent(a);
                    r.move(b)
                },
                MSPointerUp: function(a) {
                    var b = this.prepareEvent(a);
                    r.up(b), this.cleanup(a.pointerId)
                },
                MSPointerOut: function(a) {
                    var b = this.prepareEvent(a);
                    r.leaveOut(b)
                },
                MSPointerOver: function(a) {
                    var b = this.prepareEvent(a);
                    r.enterOver(b)
                },
                MSPointerCancel: function(a) {
                    var b = this.prepareEvent(a);
                    r.cancel(b), this.cleanup(a.pointerId)
                },
                MSLostPointerCapture: function(a) {
                    var b = r.makeEvent("lostpointercapture", a);
                    r.dispatchEvent(b)
                },
                MSGotPointerCapture: function(a) {
                    var b = r.makeEvent("gotpointercapture", a);
                    r.dispatchEvent(b)
                }
            },
            da = ca,
            ea = window.navigator;
        ea.msPointerEnabled
                ? (Z = function(a) { i(a), this.msSetPointerCapture(a) }, $ =
                    function(a) { i(a), this.msReleasePointerCapture(a) })
                : (Z = function(a) { i(a), r.setCapture(a, this) }, $ = function(a) { i(a), r.releaseCapture(a, this) }
                ),
            g(), h(), j();
        var fa = { dispatcher: r, Installer: A, PointerEvent: D, PointerMap: m, targetFinding: s };
        return fa
    });
/*!
* Microsoft grants you the right to use these script files for the sole purpose of either:
* (i) interacting through your browser with the Microsoft website, subject to the website�s
* terms of use; or (ii) using the files as included with a Microsoft product subject to that
* product�s license terms. Microsoft reserves all other rights to the files not expressly
* granted by Microsoft, whether by implication, estoppel or otherwise. The notices and
* licenses below are for informational purposes only. */
/*jslint browser: true */ /*global jQuery: true */
/*!
* jQuery Cookie plugin
*
* Copyright (c) 2010 Klaus Hartl (stilbuero.de)
*------------------------------------------------------------------------------------
* MIT License
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*------------------------------------------------------------------------------------
*/
// TODO JsDoc
/**
* Create a cookie with the given key and value and other optional parameters.
*
* @example $.cookie('the_cookie', 'the_value');
* @desc Set the value of a cookie.
* @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
* @desc Create a cookie with all available options.
* @example $.cookie('the_cookie', 'the_value');
* @desc Create a session cookie.
* @example $.cookie('the_cookie', null);
* @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
*       used when the cookie was set.
*
* @param String key The key of the cookie.
* @param String value The value of the cookie.
* @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
* @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
*                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
*                             If set to null or omitted, the cookie will be a session cookie and will not be retained
*                             when the the browser exits.
* @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
* @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
* @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
*                        require a secure protocol (like HTTPS).
* @type undefined
*
* @name $.cookie
* @cat Plugins/Cookie
* @author Klaus Hartl/klaus.hartl@stilbuero.de
*/
/**
* Get the value of a cookie with the given key.
*
* @example $.cookie('the_cookie');
* @desc Get the value of a cookie.
*
* @param String key The key of the cookie.
* @return The value of the cookie.
* @type String
*
* @name $.cookie
* @cat Plugins/Cookie
* @author Klaus Hartl/klaus.hartl@stilbuero.de
*/
jQuery.cookie = function(key, value, options) {
// key and at least value given, set cookie...
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = jQuery.extend({}, options);
        if (value === null || value === undefined) {
            options.expires = -1;
        }
        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }
        value = String(value);
        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options
            .expires
            ? '; expires=' + options.expires.toUTCString()
            : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }
// key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function(s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie))
        ? decode(result[1])
        : null;
};
/*!
* jQuery Templates Plugin 1.0.0pre
*
* Microsoft grants you the right to use these script files for the sole purpose of either:
* (i) interacting through your browser with the Microsoft website, subject to the website�s
* terms of use; or (ii) using the files as included with a Microsoft product subject to that
* product�s license terms. Microsoft reserves all other rights to the files not expressly
* granted by Microsoft, whether by implication, estoppel or otherwise. The notices and
* licenses below are for informational purposes only.
--------------------Copyright Attributions---------------------------
* jQuery Templates Plugin 1.0.0pre
* http://github.com/jquery/jquery-tmpl
* Requires jQuery 1.4.2
*
* Copyright Software Freedom Conservancy, Inc.
--------------------MIT License-----------------------------------------
* Provided for Informational Purposes Only
* MIT License
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function(a) {
    var r = a.fn.domManip,
        d = "_tmplitem",
        q = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
        b = {},
        f = {},
        e,
        p = { key: 0, data: {} },
        i = 0,
        c = 0,
        l = [];

    function g(g, d, h, e) {
        var c = {
            data: e || (e === 0 || e === false) ? e : d ? d.data : {},
            _wrap: d ? d._wrap : null,
            tmpl: null,
            parent: d || null,
            nodes: [],
            calls: u,
            nest: w,
            wrap: x,
            html: v,
            update: t
        };
        g && a.extend(c, g, { nodes: [], parent: d });
        if (h) {
            c.tmpl = h;
            c._ctnt = c._ctnt || c.tmpl(a, c);
            c.key = ++i;
            (l.length ? f : b)[i] = c
        }
        return c
    }

    a.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        },
        function(f, d) {
            a.fn[f] = function(n) {
                var g = [], i = a(n), k, h, m, l, j = this.length === 1 && this[0].parentNode;
                e = b || {};
                if (j && j.nodeType === 11 && j.childNodes.length === 1 && i.length === 1) {
                    i[d](this[0]);
                    g = this
                } else {
                    for (h = 0, m = i.length; h < m; h++) {
                        c = h;
                        k = (h > 0 ? this.clone(true) : this).get();
                        a(i[h])[d](k);
                        g = g.concat(k)
                    }
                    c = 0;
                    g = this.pushStack(g, f, i.selector)
                }
                l = e;
                e = null;
                a.tmpl.complete(l);
                return g
            }
        });
    a.fn.extend({
        tmpl: function(d, c, b) { return a.tmpl(this[0], d, c, b) },
        tmplItem: function() { return a.tmplItem(this[0]) },
        template: function(b) { return a.template(b, this[0]) },
        domManip: function(d, m, k) {
            if (d[0] && a.isArray(d[0])) {
                var g = a.makeArray(arguments), h = d[0], j = h.length, i = 0, f;
                while (i < j && !(f = a.data(h[i++], "tmplItem")));
                if (f && c) g[2] = function(b) { a.tmpl.afterManip(this, b, k) };
                r.apply(this, g)
            } else r.apply(this, arguments);
            c = 0;
            !e && a.tmpl.complete(b);
            return this
        }
    });
    a.extend({
        tmpl: function(d, h, e, c) {
            var i, k = !c;
            if (k) {
                c = p;
                d = a.template[d] || a.template(null, d);
                f = {}
            } else if (!d) {
                d = c.tmpl;
                b[c.key] = c;
                c.nodes = [];
                c.wrapped && n(c, c.wrapped);
                return a(j(c, null, c.tmpl(a, c)))
            }
            if (!d) return[];
            if (typeof h === "function") h = h.call(c || {});
            e && e.wrapped && n(e, e.wrapped);
            i = a.isArray(h) ? a.map(h, function(a) { return a ? g(e, c, d, a) : null }) : [g(e, c, d, h)];
            return k ? a(j(c, null, i)) : i
        },
        tmplItem: function(b) {
            var c;
            if (b instanceof a) b = b[0];
            while (b && b.nodeType === 1 && !(c = a.data(b, "tmplItem")) && (b = b.parentNode));
            return c || p
        },
        template: function(c, b) {
            if (b) {
                if (typeof b === "string") b = o(b);
                else if (b instanceof a) b = b[0] || {};
                if (b.nodeType) b = a.data(b, "tmpl") || a.data(b, "tmpl", o(b.innerHTML));
                return typeof c === "string" ? (a.template[c] = b) : b
            }
            return c
                ? typeof c !== "string" ? a.template(null, c) : a.template[c] || a.template(null, q.test(c) ? c : a(c))
                : null
        },
        encode: function(a) {
            return("" + a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'")
                .join("&#39;")
        }
    });
    a.extend(a.tmpl,
    {
        tag: {
            tmpl: { _default: { $2: "null" }, open: "if($notnull_1){__=__.concat($item.nest($1,$2));}" },
            wrap: {
                _default: { $2: "null" },
                open: "$item.calls(__,$1,$2);__=[];",
                close: "call=$item.calls();__=call._.concat($item.wrap(call,__));"
            },
            each: {
                _default: { $2: "$index, $value" },
                open: "if($notnull_1){$.each($1a,function($2){with(this){",
                close: "}});}"
            },
            "if": { open: "if(($notnull_1) && $1a){", close: "}" },
            "else": { _default: { $1: "true" }, open: "}else if(($notnull_1) && $1a){" },
            html: { open: "if($notnull_1){__.push($1a);}" },
            "=": { _default: { $1: "$data" }, open: "if($notnull_1){__.push($.encode($1a));}" },
            "!": { open: "" }
        },
        complete: function() { b = {} },
        afterManip: function(f, b, d) {
            var e = b.nodeType === 11 ? a.makeArray(b.childNodes) : b.nodeType === 1 ? [b] : [];
            d.call(f, b);
            m(e);
            c++
        }
    });

    function j(e, g, f) {
        var b,
            c = f
                ? a.map(f,
                    function(a) {
                        return typeof a === "string"
                            ? e.key
                            ? a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + d + '="' + e.key + '" $2')
                            : a
                            : j(a, e, a._ctnt)
                    })
                : e;
        if (g) return c;
        c = c.join("");
        c.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,
            function(f, c, e, d) {
                b = a(e).get();
                m(b);
                if (c) b = k(c).concat(b);
                if (d) b = b.concat(k(d))
            });
        return b ? b : k(c)
    }

    function k(c) {
        var b = document.createElement("div");
        b.innerHTML = c;
        return a.makeArray(b.childNodes)
    }

    function o(b) {
        return new Function("jQuery",
            "$item",
            "var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('" +
            a.trim(b).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}")
            .replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
                function(m, l, k, g, b, c, d) {
                    var j = a.tmpl.tag[k], i, e, f;
                    if (!j) throw"Unknown template tag: " + k;
                    i = j._default || [];
                    if (c && !/\w$/.test(b)) {
                        b += c;
                        c = ""
                    }
                    if (b) {
                        b = h(b);
                        d = d ? "," + h(d) + ")" : c ? ")" : "";
                        e = c ? b.indexOf(".") > -1 ? b + h(c) : "(" + b + ").call($item" + d : b;
                        f = c ? e : "(typeof(" + b + ")==='function'?(" + b + ").call($item):(" + b + "))"
                    } else f = e = i.$1 || "null";
                    g = h(g);
                    return"');" +
                        j[l ? "close" : "open"].split("$notnull_1")
                        .join(b ? "typeof(" + b + ")!=='undefined' && (" + b + ")!=null" : "true").split("$1a").join(f)
                        .split("$1").join(e).split("$2").join(g || i.$2 || "") +
                        "__.push('"
                }) +
            "');}return __;")
    }

    function n(c, b) { c._wrap = j(c, true, a.isArray(b) ? b : [q.test(b) ? b : a(b).html()]).join("") }

    function h(a) { return a ? a.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null }

    function s(b) {
        var a = document.createElement("div");
        a.appendChild(b.cloneNode(true));
        return a.innerHTML
    }

    function m(o) {
        var n = "_" + c, k, j, l = {}, e, p, h;
        for (e = 0, p = o.length; e < p; e++) {
            if ((k = o[e]).nodeType !== 1) continue;
            j = k.getElementsByTagName("*");
            for (h = j.length - 1; h >= 0; h--) m(j[h]);
            m(k)
        }

        function m(j) {
            var p, h = j, k, e, m;
            if (m = j.getAttribute(d)) {
                while (h.parentNode && (h = h.parentNode).nodeType === 1 && !(p = h.getAttribute(d)));
                if (p !== m) {
                    h = h.parentNode ? h.nodeType === 11 ? 0 : h.getAttribute(d) || 0 : 0;
                    if (!(e = b[m])) {
                        e = f[m];
                        e = g(e, b[h] || f[h]);
                        e.key = ++i;
                        b[i] = e
                    }
                    c && o(m)
                }
                j.removeAttribute(d)
            } else if (c && (e = a.data(j, "tmplItem"))) {
                o(e.key);
                b[e.key] = e;
                h = a.data(j.parentNode, "tmplItem");
                h = h ? h.key : 0
            }
            if (e) {
                k = e;
                while (k && k.key != h) {
                    k.nodes.push(j);
                    k = k.parent
                }
                delete e._ctnt;
                delete e._wrap;
                a.data(j, "tmplItem", e)
            }

            function o(a) {
                a = a + n;
                e = l[a] = l[a] || g(e, b[e.parent.key + n] || e.parent)
            }
        }
    }

    function u(a, d, c, b) {
        if (!a) return l.pop();
        l.push({ _: a, tmpl: d, item: this, data: c, options: b })
    }

    function w(d, c, b) { return a.tmpl(a.template(d), c, b, this) }

    function x(b, d) {
        var c = b.options || {};
        c.wrapped = d;
        return a.tmpl(a.template(b.tmpl), b.data, c, b.item)
    }

    function v(d, c) {
        var b = this._wrap;
        return a.map(a(a.isArray(b) ? b.join("") : b).filter(d || "*"),
            function(a) { return c ? a.innerText || a.textContent : a.outerHTML || s(a) })
    }

    function t() {
        var b = this.nodes;
        a.tmpl(null, null, null, this).insertBefore(b[0]);
        a(b).remove()
    }
})(jQuery);
/**
jQuery UI 1.10.4
Microsoft grants you the right to use these JavaScript files for the sole purpose of either: (i) interacting through your browser with the Microsoft website, subject to the website's terms of use; or (ii) using the files as included with a Microsoft product subject to that product's license terms. Microsoft reserves all other rights to the files not expressly granted by Microsoft, whether by implication, estoppel or otherwise. The notices and licenses below are for informational purposes only.
Copyright 2014 The jQuery Foundation
Provided for Informational Purposes Only
MIT License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the ""Software""), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.sortable.js, jquery.ui.autocomplete.js, jquery.ui.menu.js, jquery.ui.slider.js
*/
(function(e, t) {
    function i(t, i) {
        var s, a, o, r = t.nodeName.toLowerCase();
        return"area" === r
            ? (s = t.parentNode, a = s.name, t.href && a && "map" === s.nodeName.toLowerCase()
                ? (o = e("img[usemap=#" + a + "]")[0], !!o && n(o))
                : !1)
            : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || i : i) && n(t)
    }

    function n(t) {
        return e.expr.filters.visible(t) &&
            !e(t).parents().addBack().filter(function() { return"hidden" === e.css(this, "visibility") }).length
    }

    var s = 0, a = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui,
        {
            version: "1.10.4",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), e.fn.extend({
            focus: function(t) {
                return function(i, n) {
                    return"number" == typeof i
                        ? this.each(function() {
                            var t = this;
                            setTimeout(function() { e(t).focus(), n && n.call(t) }, i)
                        })
                        : t.apply(this, arguments)
                }
            }(e.fn.focus),
            scrollParent: function() {
                var t;
                return t = e.ui.ie && /(static|relative)/.test(this.css("position")) ||
                    /absolute/.test(this.css("position"))
                    ? this.parents().filter(function() {
                        return/(relative|absolute|fixed)/.test(e.css(this, "position")) &&
                            /(auto|scroll)/.test(e.css(this, "overflow") +
                                e.css(this, "overflow-y") +
                                e.css(this, "overflow-x"))
                    }).eq(0)
                    : this.parents().filter(function() {
                        return/(auto|scroll)/.test(e.css(this, "overflow") +
                            e.css(this, "overflow-y") +
                            e.css(this, "overflow-x"))
                    }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
            },
            zIndex: function(i) {
                if (i !== t) return this.css("zIndex", i);
                if (this.length)
                    for (var n, s, a = e(this[0]); a.length && a[0] !== document;) {
                        if (n = a.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) &&
                            (s = parseInt(a.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                        a = a.parent()
                    }
                return 0
            },
            uniqueId: function() { return this.each(function() { this.id || (this.id = "ui-id-" + ++s) }) },
            removeUniqueId: function() { return this.each(function() { a.test(this.id) && e(this).removeAttr("id") }) }
        }), e.extend(e.expr[":"],
        {
            data: e.expr.createPseudo
                ? e.expr.createPseudo(function(t) { return function(i) { return!!e.data(i, t) } })
                : function(t, i, n) { return!!e.data(t, n[3]) },
            focusable: function(t) { return i(t, !isNaN(e.attr(t, "tabindex"))) },
            tabbable: function(t) {
                var n = e.attr(t, "tabindex"), s = isNaN(n);
                return(s || n >= 0) && i(t, !s)
            }
        }), e("<a>").outerWidth(1).jquery ||
            e.each(["Width", "Height"],
                function(i, n) {
                    function s(t, i, n, s) {
                        return e.each(a,
                            function() {
                                i -= parseFloat(e
                                            .css(t, "padding" + this)) ||
                                        0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0),
                                    s && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
                            }), i
                    }

                    var a = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
                        o = n.toLowerCase(),
                        r = {
                            innerWidth: e.fn.innerWidth,
                            innerHeight: e.fn.innerHeight,
                            outerWidth: e.fn.outerWidth,
                            outerHeight: e.fn.outerHeight
                        };
                    e.fn["inner" + n] = function(i) {
                        return i === t
                            ? r["inner" + n].call(this)
                            : this.each(function() { e(this).css(o, s(this, i) + "px") })
                    }, e.fn["outer" + n] = function(t, i) {
                        return"number" != typeof t
                            ? r["outer" + n].call(this, t)
                            : this.each(function() { e(this).css(o, s(this, t, !0, i) + "px") })
                    }
                }), e.fn.addBack ||
        (e.fn
            .addBack = function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }),
        e("<a>").data("a-b", "a").removeData("a-b").data("a-b") &&
        (e.fn.removeData = function(t) {
            return function(i) { return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this) }
        }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support
            .selectstart = "onselectstart" in document.createElement("div"), e.fn
            .extend({
                disableSelection: function() {
                    return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection",
                        function(e) { e.preventDefault() })
                },
                enableSelection: function() { return this.unbind(".ui-disableSelection") }
            }), e.extend(e.ui,
        {
            plugin: {
                add: function(t, i, n) {
                    var s, a = e.ui[t].prototype;
                    for (s in n) a.plugins[s] = a.plugins[s] || [], a.plugins[s].push([i, n[s]])
                },
                call: function(e, t, i) {
                    var n, s = e.plugins[t];
                    if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType
                    ) for (n = 0; s.length > n; n++) e.options[s[n][0]] && s[n][1].apply(e.element, i)
                }
            },
            hasScroll: function(t, i) {
                if ("hidden" === e(t).css("overflow")) return!1;
                var n = i && "left" === i ? "scrollLeft" : "scrollTop", s = !1;
                return t[n] > 0 ? !0 : (t[n] = 1, s = t[n] > 0, t[n] = 0, s)
            }
        })
})(jQuery);
(function(t, e) {
    var i = 0, s = Array.prototype.slice, n = t.cleanData;
    t.cleanData = function(e) {
        for (var i, s = 0; null != (i = e[s]); s++)
            try {
                t(i).triggerHandler("remove")
            } catch (o) {
            }
        n(e)
    }, t.widget = function(i, s, n) {
        var o, a, r, h, l = {}, c = i.split(".")[0];
        i = i.split(".")[1], o = c + "-" + i, n || (n = s, s = t.Widget), t.expr[":"][o
            .toLowerCase()] = function(e) { return!!t.data(e, o) }, t[c] = t[c] || {}, a = t[c][i], r = t[c][i] =
            function(t, i) {
                return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new r(t, i)
            }, t.extend(r, a, { version: n.version, _proto: t.extend({}, n), _childConstructors: [] }), h = new s, h
            .options = t.widget.extend({}, h.options), t.each(n,
            function(i, n) {
                return t.isFunction(n)
                    ? (l[i] = function() {
                        var t = function() { return s.prototype[i].apply(this, arguments) },
                            e = function(t) { return s.prototype[i].apply(this, t) };
                        return function() {
                            var i, s = this._super, o = this._superApply;
                            return this._super = t, this._superApply = e, i = n.apply(this, arguments), this
                                ._super = s, this._superApply = o, i
                        }
                    }(), e)
                    : (l[i] = n, e)
            }), r.prototype = t.widget.extend(h,
            { widgetEventPrefix: a ? h.widgetEventPrefix || i : i },
            l,
            { constructor: r, namespace: c, widgetName: i, widgetFullName: o }), a
            ? (t.each(a._childConstructors,
                function(e, i) {
                    var s = i.prototype;
                    t.widget(s.namespace + "." + s.widgetName, r, i._proto)
                }), delete a._childConstructors)
            : s._childConstructors.push(r), t.widget.bridge(i, r)
    }, t.widget.extend = function(i) {
        for (var n, o, a = s.call(arguments, 1), r = 0, h = a.length;
            h > r;
            r++
        )
            for (n in a[r])
                o = a[r][n], a[r].hasOwnProperty(n) &&
                    o !== e &&
                    (i[n] = t.isPlainObject(o)
                        ? t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], o) : t.widget.extend({}, o)
                        : o);
        return i
    }, t.widget.bridge = function(i, n) {
        var o = n.prototype.widgetFullName || i;
        t.fn[i] = function(a) {
            var r = "string" == typeof a, h = s.call(arguments, 1), l = this;
            return a = !r && h.length ? t.widget.extend.apply(null, [a].concat(h)) : a, r
                ? this.each(function() {
                    var s, n = t.data(this, o);
                    return n
                        ? t.isFunction(n[a]) && "_" !== a.charAt(0)
                        ? (s = n[a].apply(n, h), s !== n && s !== e
                            ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1)
                            : e)
                        : t.error("no such method '" + a + "' for " + i + " widget instance")
                        : t.error("cannot call methods on " +
                            i +
                            " prior to initialization; " +
                            "attempted to call method '" +
                            a +
                            "'")
                })
                : this.each(function() {
                    var e = t.data(this, o);
                    e ? e.option(a || {})._init() : t.data(this, o, new n(a, this))
                }), l
        }
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: { disabled: !1, create: null },
        _createWidget: function(e, s) {
            s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this
                .eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget
                .extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this
                .focusable = t(), s !== this &&
            (t.data(s, this.widgetFullName, this), this
                ._on(!0, this.element, { remove: function(t) { t.target === s && this.destroy() } }), this
                .document = t(s.style ? s.ownerDocument : s.document || s), this
                .window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this
                ._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName)
                .removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget()
                .unbind(this.eventNamespace).removeAttr("aria-disabled")
                .removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings
                .unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable
                .removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function() { return this.element },
        option: function(i, s) {
            var n, o, a, r = i;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (r = {}, n = i.split("."), i = n.shift(), n.length) {
                    for (o = r[i] = t.widget
                            .extend({}, this.options[i]), a = 0;
                        n.length - 1 > a;
                        a++) o[n[a]] = o[n[a]] || {}, o = o[n[a]];
                    if (i = n.pop(), 1 === arguments.length) return o[i] === e ? null : o[i];
                    o[i] = s
                } else {
                    if (1 === arguments.length) return this.options[i] === e ? null : this.options[i];
                    r[i] = s
                }
            return this._setOptions(r), this
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t &&
            (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e)
                .attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable
                .removeClass("ui-state-focus")), this
        },
        enable: function() { return this._setOption("disabled", !1) },
        disable: function() { return this._setOption("disabled", !0) },
        _on: function(i, s, n) {
            var o, a = this;
            "boolean" != typeof i && (n = s, s = i, i = !1),
                n ? (s = o = t(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, o = this.widget()),
                t.each(n,
                    function(n, r) {
                        function h() {
                            return i || a.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled")
                                ? ("string" == typeof r ? a[r] : r).apply(a, arguments)
                                : e
                        }

                        "string" != typeof r && (h.guid = r.guid = r.guid || h.guid || t.guid++);
                        var l = n.match(/^(\w+)\s*(.*)$/), c = l[1] + a.eventNamespace, u = l[2];
                        u ? o.delegate(u, c, h) : s.bind(c, h)
                    })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
        },
        _delay: function(t, e) {
            function i() { return("string" == typeof t ? s[t] : t).apply(s, arguments) }

            var s = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this
                ._on(e,
                {
                    mouseenter: function(e) { t(e.currentTarget).addClass("ui-state-hover") },
                    mouseleave: function(e) { t(e.currentTarget).removeClass("ui-state-hover") }
                })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this
                ._on(e,
                {
                    focusin: function(e) { t(e.currentTarget).addClass("ui-state-focus") },
                    focusout: function(e) { t(e.currentTarget).removeClass("ui-state-focus") }
                })
        },
        _trigger: function(e, i, s) {
            var n, o, a = this.options[e];
            if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e)
                .toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (n in o) n in i || (i[n] = o[n]);
            return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 ||
                i.isDefaultPrevented())
        }
    }, t.each({ show: "fadeIn", hide: "fadeOut" },
        function(e, i) {
            t.Widget.prototype["_" + e] = function(s, n, o) {
                "string" == typeof n && (n = { effect: n });
                var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
                n = n || {}, "number" == typeof n && (n = { duration: n }), a = !t.isEmptyObject(n), n
                    .complete = o, n
                    .delay &&
                    s.delay(n.delay), a && t.effects && t.effects.effect[r]
                    ? s[e](n)
                    : r !== e && s[r]
                    ? s[r](n.duration, n.easing, o)
                    : s.queue(function(i) { t(this)[e](), o && o.call(s[0]), i() })
            }
        })
})(jQuery);
(function(t) {
    var e = !1;
    t(document).mouseup(function() { e = !1 }), t.widget("ui.mouse",
    {
        version: "1.10.4",
        options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) { return e._mouseDown(t) })
                .bind("click." + this.widgetName,
                    function(i) {
                        return!0 === t.data(i.target, e.widgetName + ".preventClickEvent")
                            ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i
                                .stopImmediatePropagation(), !1)
                            : undefined
                    }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate &&
                t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                .unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(i) {
            if (!e) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var s = this,
                    n = 1 === i.which,
                    a = "string" == typeof this.options.cancel && i.target.nodeName
                        ? t(i.target).closest(this.options.cancel).length
                        : !1;
                return n && !a && this._mouseCapture(i)
                    ? (this.mouseDelayMet = !this.options
                            .delay, this.mouseDelayMet ||
                        (this
                            ._mouseDelayTimer = setTimeout(function() { s.mouseDelayMet = !0 }, this.options.delay)),
                        this._mouseDistanceMet(i) &&
                            this._mouseDelayMet(i) &&
                            (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted)
                            ? (i.preventDefault(), !0)
                            : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") &&
                                t.removeData(i.target, this.widgetName + ".preventClickEvent"), this
                                ._mouseMoveDelegate = function(t) { return s._mouseMove(t) }, this
                                ._mouseUpDelegate = function(t) { return s._mouseUp(t) }, t(document)
                                .bind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                                .bind("mouseup." + this.widgetName, this._mouseUpDelegate), i
                                .preventDefault(), e = !0, !0))
                    : !0
            }
        },
        _mouseMove: function(e) {
            return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button
                ? this._mouseUp(e)
                : this._mouseStarted
                ? (this._mouseDrag(e), e.preventDefault())
                : (this._mouseDistanceMet(e) &&
                    this._mouseDelayMet(e) &&
                    (this._mouseStarted = this._mouseStart(this
                            ._mouseDownEvent,
                            e) !==
                        !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                    .unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
                this._mouseStarted &&
                (this._mouseStarted = !1, e.target === this._mouseDownEvent.target &&
                    t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX),
                    Math.abs(this._mouseDownEvent.pageY - t.pageY)) >=
                this.options.distance
        },
        _mouseDelayMet: function() { return this.mouseDelayMet },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() { return!0 }
    })
})(jQuery);
(function(t, e) {
    function i(t, e, i) {
        return[parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
    }

    function s(e, i) { return parseInt(t.css(e, i), 10) || 0 }

    function n(e) {
        var i = e[0];
        return 9 === i.nodeType
            ? { width: e.width(), height: e.height(), offset: { top: 0, left: 0 } }
            : t.isWindow(i)
            ? { width: e.width(), height: e.height(), offset: { top: e.scrollTop(), left: e.scrollLeft() } }
            : i.preventDefault
            ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } }
            : { width: e.outerWidth(), height: e.outerHeight(), offset: e.offset() }
    }

    t.ui = t.ui || {};
    var a,
        o = Math.max,
        r = Math.abs,
        l = Math.round,
        h = /left|center|right/,
        c = /top|center|bottom/,
        u = /[\+\-]\d+(\.[\d]+)?%?/,
        d = /^\w+/,
        p = /%$/,
        f = t.fn.position;
    t.position = {
        scrollbarWidth: function() {
            if (a !== e) return a;
            var i,
                s,
                n =
                    t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                o = n.children()[0];
            return t("body").append(n), i = o.offsetWidth, n.css("overflow", "scroll"), s = o
                .offsetWidth, i === s && (s = n[0].clientWidth), n.remove(), a = i - s
        },
        getScrollInfo: function(e) {
            var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                a = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
            return{ width: a ? t.position.scrollbarWidth() : 0, height: n ? t.position.scrollbarWidth() : 0 }
        },
        getWithinInfo: function(e) {
            var i = t(e || window), s = t.isWindow(i[0]), n = !!i[0] && 9 === i[0].nodeType;
            return{
                element: i,
                isWindow: s,
                isDocument: n,
                offset: i.offset() || { left: 0, top: 0 },
                scrollLeft: i.scrollLeft(),
                scrollTop: i.scrollTop(),
                width: s ? i.width() : i.outerWidth(),
                height: s ? i.height() : i.outerHeight()
            }
        }
    }, t.fn.position = function(e) {
        if (!e || !e.of) return f.apply(this, arguments);
        e = t.extend({}, e);
        var a,
            p,
            g,
            m,
            v,
            _,
            b = t(e.of),
            y = t.position.getWithinInfo(e.within),
            k = t.position.getScrollInfo(y),
            w = (e.collision || "flip").split(" "),
            D = {};
        return _ = n(b), b[0].preventDefault && (e.at = "left top"), p = _.width, g = _.height, m = _.offset, v = t
            .extend({}, m), t.each(["my", "at"],
            function() {
                var t, i, s = (e[this] || "").split(" ");
                1 === s.length &&
                (s = h
                    .test(s[0])
                    ? s.concat(["center"])
                    : c
                    .test(s[0])
                    ? ["center"].concat(s)
                    : ["center", "center"]), s[0] = h
                    .test(s[0])
                    ? s[0]
                    : "center", s[1] = c.test(s[1]) ? s[1] : "center", t = u.exec(s[0]), i = u
                    .exec(s[1]), D[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]
            }), 1 === w.length && (w[1] = w[0]), "right" === e.at[0]
            ? v.left += p
            : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1]
            ? v.top += g
            : "center" === e.at[1] && (v.top += g / 2), a = i(D.at, p, g), v.left += a[0], v.top += a[1], this
            .each(function() {
                var n,
                    h,
                    c = t(this),
                    u = c.outerWidth(),
                    d = c.outerHeight(),
                    f = s(this, "marginLeft"),
                    _ = s(this, "marginTop"),
                    x = u + f + s(this, "marginRight") + k.width,
                    C = d + _ + s(this, "marginBottom") + k.height,
                    M = t.extend({}, v),
                    T = i(D.my, c.outerWidth(), c.outerHeight());
                "right" === e.my[0] ? M.left -= u : "center" === e.my[0] && (M.left -= u / 2),
                    "bottom" === e.my[1] ? M.top -= d : "center" === e.my[1] && (M.top -= d / 2), M.left += T[0], M
                        .top += T[1], t.support
                        .offsetFractions ||
                        (M.left = l(M.left), M.top = l(M.top)), n = { marginLeft: f, marginTop: _ }, t
                        .each(["left", "top"],
                            function(i, s) {
                                t.ui.position[w[i]] &&
                                    t.ui.position[w[i]][s](M,
                                    {
                                        targetWidth: p,
                                        targetHeight: g,
                                        elemWidth: u,
                                        elemHeight: d,
                                        collisionPosition: n,
                                        collisionWidth: x,
                                        collisionHeight: C,
                                        offset: [a[0] + T[0], a[1] + T[1]],
                                        my: e.my,
                                        at: e.at,
                                        within: y,
                                        elem: c
                                    })
                            }), e.using &&
                    (h = function(t) {
                        var i = m.left - M.left,
                            s = i + p - u,
                            n = m.top - M.top,
                            a = n + g - d,
                            l = {
                                target: { element: b, left: m.left, top: m.top, width: p, height: g },
                                element: { element: c, left: M.left, top: M.top, width: u, height: d },
                                horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",
                                vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle"
                            };
                        u > p && p > r(i + s) && (l.horizontal = "center"),
                            d > g && g > r(n + a) && (l.vertical = "middle"), l
                                .important = o(r(i), r(s)) > o(r(n), r(a)) ? "horizontal" : "vertical", e.using
                                .call(this, t, l)
                    }), c.offset(t.extend(M, { using: h }))
            })
    }, t.ui.position = {
        fit: {
            left: function(t, e) {
                var i,
                    s = e.within,
                    n = s.isWindow ? s.scrollLeft : s.offset.left,
                    a = s.width,
                    r = t.left - e.collisionPosition.marginLeft,
                    l = n - r,
                    h = r + e.collisionWidth - a - n;
                e.collisionWidth > a
                    ? l > 0 && 0 >= h
                    ? (i = t.left + l + e.collisionWidth - a - n, t.left += l - i)
                    : t.left = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionWidth : n
                    : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - r, t.left)
            },
            top: function(t, e) {
                var i,
                    s = e.within,
                    n = s.isWindow ? s.scrollTop : s.offset.top,
                    a = e.within.height,
                    r = t.top - e.collisionPosition.marginTop,
                    l = n - r,
                    h = r + e.collisionHeight - a - n;
                e.collisionHeight > a
                    ? l > 0 && 0 >= h
                    ? (i = t.top + l + e.collisionHeight - a - n, t.top += l - i)
                    : t.top = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionHeight : n
                    : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - r, t.top)
            }
        },
        flip: {
            left: function(t, e) {
                var i,
                    s,
                    n = e.within,
                    a = n.offset.left + n.scrollLeft,
                    o = n.width,
                    l = n.isWindow ? n.scrollLeft : n.offset.left,
                    h = t.left - e.collisionPosition.marginLeft,
                    c = h - l,
                    u = h + e.collisionWidth - o - l,
                    d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                    p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                    f = -2 * e.offset[0];
                0 > c
                    ? (i = t.left + d + p + f + e.collisionWidth - o - a, (0 > i || r(c) > i) && (t.left += d + p + f))
                    : u > 0 &&
                    (s = t
                        .left -
                        e.collisionPosition.marginLeft +
                        d +
                        p +
                        f -
                        l, (s > 0 || u > r(s)) && (t.left += d + p + f))
            },
            top: function(t, e) {
                var i,
                    s,
                    n = e.within,
                    a = n.offset.top + n.scrollTop,
                    o = n.height,
                    l = n.isWindow ? n.scrollTop : n.offset.top,
                    h = t.top - e.collisionPosition.marginTop,
                    c = h - l,
                    u = h + e.collisionHeight - o - l,
                    d = "top" === e.my[1],
                    p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                    f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                    g = -2 * e.offset[1];
                0 > c
                    ? (s = t
                        .top +
                        p +
                        f +
                        g +
                        e.collisionHeight -
                        o -
                        a, t.top + p + f + g > c && (0 > s || r(c) > s) && (t.top += p + f + g))
                    : u > 0 &&
                    (i = t
                        .top -
                        e.collisionPosition.marginTop +
                        p +
                        f +
                        g -
                        l, t.top + p + f + g > u && (i > 0 || u > r(i)) && (t.top += p + f + g))
            }
        },
        flipfit: {
            left: function() {
                t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
            },
            top: function() {
                t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
            }
        }
    }, function() {
        var e, i, s, n, a, o = document.getElementsByTagName("body")[0], r = document.createElement("div");
        e = document
            .createElement(o ? "div" : "body"), s = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, o && t.extend(s, { position: "absolute", left: "-1000px", top: "-1000px" });
        for (a in s) e.style[a] = s[a];
        e.appendChild(r), i = o || document.documentElement, i.insertBefore(e, i.firstChild), r.style
            .cssText = "position: absolute; left: 10.7432222px;", n = t(r).offset().left, t.support
            .offsetFractions = n > 10 && 11 > n, e.innerHTML = "", i.removeChild(e)
    }()
})(jQuery);
(function(t) {
    t.widget("ui.draggable",
        t.ui.mouse,
        {
            version: "1.10.4",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                "original" !== this.options.helper ||
                    /^(?:r|a|f)/.test(this.element.css("position")) ||
                    (this.element[0].style
                        .position = "relative"), this.options
                    .addClasses &&
                    this.element.addClass("ui-draggable"), this.options.disabled &&
                    this.element.addClass("ui-draggable-disabled"), this._mouseInit()
            },
            _destroy: function() {
                this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this
                    ._mouseDestroy()
            },
            _mouseCapture: function(e) {
                var i = this.options;
                return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0
                    ? !1
                    : (this.handle = this._getHandle(e), this.handle
                        ? (t(i.iframeFix === !0 ? "iframe" : i.iframeFix)
                            .each(function() {
                                t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>")
                                    .css({
                                        width: this.offsetWidth + "px",
                                        height: this.offsetHeight + "px",
                                        position: "absolute",
                                        opacity: "0.001",
                                        zIndex: 1e3
                                    }).css(t(this).offset()).appendTo("body")
                            }), !0)
                        : !1)
            },
            _mouseStart: function(e) {
                var i = this.options;
                return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this
                        ._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this
                        ._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this
                        .helper
                        .scrollParent(), this.offsetParent = this.helper.offsetParent(), this
                        .offsetParentCssPosition = this
                        .offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this
                        .offset = {
                            top: this.offset.top - this.margins.top,
                            left: this.offset.left - this.margins.left
                        },
                    this.offset.scroll = !1, t.extend(this.offset,
                    {
                        click: { left: e.pageX - this.offset.left, top: e.pageY - this.offset.top },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e
                        .pageX, this.originalPageY = e
                        .pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this
                        ._setContainment(), this._trigger("start", e) === !1
                        ? (this._clear(), !1)
                        : (this._cacheHelperProportions(), t.ui.ddmanager &&
                            !i.dropBehaviour &&
                            t.ui.ddmanager.prepareOffsets(this, e), this
                            ._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
            },
            _mouseDrag: function(e, i) {
                if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this
                    .position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                    var s = this._uiHash();
                    if (this._trigger("drag", e, s) === !1) return this._mouseUp({}), !1;
                    this.position = s.position
                }
                return this.options.axis && "y" === this.options.axis ||
                (this.helper[0].style.left = this.position
                    .left +
                    "px"), this.options.axis && "x" === this.options.axis ||
                (this.helper[0].style.top = this.position
                    .top +
                    "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
            },
            _mouseStop: function(e) {
                var i = this, s = !1;
                return t.ui
                    .ddmanager &&
                    !this.options.dropBehaviour &&
                    (s = t.ui.ddmanager.drop(this, e)), this
                    .dropped &&
                    (s = this.dropped, this.dropped = !1), "original" !== this.options.helper ||
                    t.contains(this.element[0].ownerDocument, this.element[0])
                    ? ("invalid" === this.options.revert && !s ||
                        "valid" === this.options.revert && s ||
                        this.options.revert === !0 ||
                        t.isFunction(this.options.revert) && this.options.revert.call(this.element, s)
                        ? t(this.helper).animate(this.originalPosition,
                            parseInt(this.options.revertDuration, 10),
                            function() { i._trigger("stop", e) !== !1 && i._clear() })
                        : this._trigger("stop", e) !== !1 && this._clear(), !1)
                    : !1
            },
            _mouseUp: function(e) {
                return t("div.ui-draggable-iframeFix")
                        .each(function() { this.parentNode.removeChild(this) }),
                    t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function(e) {
                return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
            },
            _createHelper: function(e) {
                var i = this.options,
                    s = t.isFunction(i.helper)
                        ? t(i.helper.apply(this.element[0], [e]))
                        : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
                return s.parents("body").length ||
                        s
                        .appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo),
                    s[0] === this.element[0] ||
                        /(fixed|absolute)/.test(s.css("position")) ||
                        s.css("position", "absolute"),
                    s
            },
            _adjustOffsetFromHelper: function(e) {
                "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
                    "left" in e && (this.offset.click.left = e.left + this.margins.left),
                    "right" in e &&
                    (this.offset.click.left = this.helperProportions
                        .width -
                        e.right +
                        this.margins
                        .left), "top" in e && (this.offset.click.top = e.top + this.margins.top),
                    "bottom" in e &&
                        (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                var e = this.offsetParent.offset();
                return"absolute" === this.cssPosition &&
                    this.scrollParent[0] !== document &&
                    t.contains(this.scrollParent[0], this.offsetParent[0]) &&
                    (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent
                        .scrollTop()), (this.offsetParent[0] === document.body ||
                        this.offsetParent[0]
                        .tagName &&
                        "html" === this.offsetParent[0].tagName.toLowerCase() &&
                        t.ui.ie) &&
                    (e = { top: 0, left: 0 }), {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var t = this.element.position();
                    return{
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return{ top: 0, left: 0 }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() }
            },
            _setContainment: function() {
                var e, i, s, n = this.options;
                return n.containment
                    ? "window" === n.containment
                    ? (this.containment = [
                        t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
                        t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
                        t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left,
                        t(window).scrollTop() +
                        (t(window).height() || document.body.parentNode.scrollHeight) -
                        this.helperProportions.height -
                        this.margins.top
                    ], undefined)
                    : "document" === n.containment
                    ? (this.containment = [
                        0, 0, t(document).width() - this.helperProportions.width - this.margins.left,
                        (t(document).height() || document.body.parentNode.scrollHeight) -
                        this.helperProportions.height -
                        this.margins.top
                    ], undefined)
                    : n.containment.constructor === Array
                    ? (this.containment = n.containment, undefined)
                    : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment),
                        s = i[0], s &&
                        (e = "hidden" !== i.css("overflow"), this
                            .containment = [
                                (parseInt(i.css("borderLeftWidth"), 10) || 0) +
                                (parseInt(i.css("paddingLeft"), 10) || 0),
                                (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0),
                                (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) -
                                (parseInt(i.css("borderRightWidth"), 10) || 0) -
                                (parseInt(i.css("paddingRight"), 10) || 0) -
                                this.helperProportions.width -
                                this.margins.left -
                                this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) -
                                (parseInt(i.css("borderBottomWidth"), 10) || 0) -
                                (parseInt(i.css("paddingBottom"), 10) || 0) -
                                this.helperProportions.height -
                                this.margins.top -
                                this.margins.bottom
                            ], this.relative_container = i), undefined)
                    : (this.containment = null, undefined)
            },
            _convertPositionTo: function(e, i) {
                i || (i = this.position);
                var s = "absolute" === e ? 1 : -1,
                    n = "absolute" !== this.cssPosition ||
                        this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0])
                        ? this.scrollParent
                        : this.offsetParent;
                return this.offset
                        .scroll ||
                        (this.offset
                            .scroll = { top: n.scrollTop(), left: n.scrollLeft() }),
                    {
                        top: i.top +
                            this.offset.relative.top * s +
                            this.offset.parent.top * s -
                            ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top
                            ) *
                            s,
                        left: i.left +
                            this.offset.relative.left * s +
                            this.offset.parent.left * s -
                            ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) *
                            s
                    }
            },
            _generatePosition: function(e) {
                var i,
                    s,
                    n,
                    a,
                    o = this.options,
                    r = "absolute" !== this.cssPosition ||
                        this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0])
                        ? this.scrollParent
                        : this.offsetParent,
                    l = e.pageX,
                    h = e.pageY;
                return this.offset
                        .scroll ||
                        (this.offset
                            .scroll = { top: r.scrollTop(), left: r.scrollLeft() }),
                    this.originalPosition &&
                    (this.containment &&
                    (this.relative_container
                        ? (s = this.relative_container
                            .offset(), i = [
                            this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left,
                            this.containment[3] + s.top
                        ])
                        : i = this.containment, e.pageX - this.offset.click.left < i[0] &&
                        (l = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] &&
                        (h = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] &&
                        (l = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] &&
                        (h = i[3] + this.offset.click.top)), o.grid &&
                    (n = o.grid[1]
                        ? this.originalPageY + Math.round((h - this.originalPageY) / o.grid[1]) * o.grid[1]
                        : this.originalPageY, h = i
                        ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3]
                        ? n
                        : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1]
                        : n, a = o.grid[0]
                        ? this.originalPageX + Math.round((l - this.originalPageX) / o.grid[0]) * o.grid[0]
                        : this.originalPageX, l = i
                        ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2]
                        ? a
                        : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0]
                        : a)), {
                        top: h -
                            this.offset.click.top -
                            this.offset.relative.top -
                            this.offset.parent.top +
                            ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                        left: l -
                            this.offset.click.left -
                            this.offset.relative.left -
                            this.offset.parent.left +
                            ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
                    }
            },
            _clear: function() {
                this.helper
                    .removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] ||
                    this.cancelHelperRemoval ||
                    this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
            },
            _trigger: function(e, i, s) {
                return s = s || this._uiHash(), t.ui.plugin
                    .call(this, e, [i, s]), "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")), t
                    .Widget.prototype._trigger.call(this, e, i, s)
            },
            plugins: {},
            _uiHash: function() {
                return{
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), t.ui.plugin.add("draggable",
        "connectToSortable",
        {
            start: function(e, i) {
                var s = t(this).data("ui-draggable"), n = s.options, a = t.extend({}, i, { item: s.element });
                s.sortables = [], t(n.connectToSortable).each(function() {
                    var i = t.data(this, "ui-sortable");
                    i &&
                        !i.options.disabled &&
                        (s.sortables.push({ instance: i, shouldRevert: i.options.revert }), i.refreshPositions(), i
                            ._trigger("activate", e, a))
                })
            },
            stop: function(e, i) {
                var s = t(this).data("ui-draggable"), n = t.extend({}, i, { item: s.element });
                t.each(s.sortables,
                    function() {
                        this.instance.isOver
                            ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance
                                .cancelHelperRemoval = !1, this.shouldRevert &&
                                (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this
                                .instance.options.helper = this.instance.options
                                ._helper, "original" === s.options.helper &&
                                this.instance.currentItem.css({ top: "auto", left: "auto" }))
                            : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, n))
                    })
            },
            drag: function(e, i) {
                var s = t(this).data("ui-draggable"), n = this;
                t.each(s.sortables,
                    function() {
                        var a = !1, o = this;
                        this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s
                            .helperProportions, this.instance.offset.click = s.offset
                            .click, this.instance._intersectsWith(this.instance.containerCache) &&
                        (a = !0, t.each(s.sortables,
                            function() {
                                return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s
                                    .helperProportions, this.instance.offset.click = s.offset
                                    .click, this !== o &&
                                    this.instance._intersectsWith(this.instance.containerCache) &&
                                    t.contains(o.instance.element[0], this.instance.element[0]) &&
                                    (a = !1), a
                            })), a
                            ? (this.instance.isOver ||
                            (this.instance.isOver = 1, this.instance.currentItem = t(n).clone().removeAttr("id")
                                .appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options
                                ._helper = this.instance.options.helper, this.instance.options
                                .helper = function() { return i.helper[0] }, e.target = this.instance
                                .currentItem[0], this.instance._mouseCapture(e, !0), this.instance
                                ._mouseStart(e, !0, !0), this.instance.offset.click.top = s.offset.click.top, this
                                .instance.offset.click.left = s.offset.click.left, this.instance.offset.parent
                                .left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset
                                .parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s
                                ._trigger("toSortable", e), s.dropped = this.instance.element, s.currentItem = s
                                .element, this.instance
                                .fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(e))
                            : this.instance.isOver &&
                            (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options
                                .revert = !1, this.instance
                                ._trigger("out", e, this.instance._uiHash(this.instance)), this.instance
                                ._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this
                                .instance.currentItem
                                .remove(), this.instance.placeholder && this.instance.placeholder.remove(), s
                                ._trigger("fromSortable", e), s.dropped = !1)
                    })
            }
        }), t.ui.plugin.add("draggable",
        "cursor",
        {
            start: function() {
                var e = t("body"), i = t(this).data("ui-draggable").options;
                e.css("cursor") && (i._cursor = e.css("cursor")), e.css("cursor", i.cursor)
            },
            stop: function() {
                var e = t(this).data("ui-draggable").options;
                e._cursor && t("body").css("cursor", e._cursor)
            }
        }), t.ui.plugin.add("draggable",
        "opacity",
        {
            start: function(e, i) {
                var s = t(i.helper), n = t(this).data("ui-draggable").options;
                s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity)
            },
            stop: function(e, i) {
                var s = t(this).data("ui-draggable").options;
                s._opacity && t(i.helper).css("opacity", s._opacity)
            }
        }), t.ui.plugin.add("draggable",
        "scroll",
        {
            start: function() {
                var e = t(this).data("ui-draggable");
                e.scrollParent[0] !== document &&
                    "HTML" !== e.scrollParent[0].tagName &&
                    (e.overflowOffset = e.scrollParent.offset())
            },
            drag: function(e) {
                var i = t(this).data("ui-draggable"), s = i.options, n = !1;
                i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName
                    ? (s.axis && "x" === s.axis ||
                    (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity
                        ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed
                        : e.pageY - i.overflowOffset.top < s.scrollSensitivity &&
                        (i.scrollParent[0].scrollTop = n = i.scrollParent[0]
                            .scrollTop -
                            s.scrollSpeed)), s.axis && "y" === s.axis ||
                    (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity
                        ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed
                        : e.pageX - i.overflowOffset.left < s.scrollSensitivity &&
                        (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed)))
                    : (s.axis && "x" === s.axis ||
                    (e.pageY - t(document).scrollTop() < s.scrollSensitivity
                        ? n = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed)
                        : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity &&
                        (n = t(document).scrollTop(t(document)
                            .scrollTop() +
                            s.scrollSpeed))), s.axis && "y" === s.axis ||
                    (e.pageX - t(document).scrollLeft() < s.scrollSensitivity
                        ? n = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed)
                        : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity &&
                        (n = t(document).scrollLeft(t(document)
                            .scrollLeft() +
                            s.scrollSpeed)))), n !== !1 &&
                    t.ui.ddmanager &&
                    !s.dropBehaviour &&
                    t.ui.ddmanager.prepareOffsets(i, e)
            }
        }), t.ui.plugin.add("draggable",
        "snap",
        {
            start: function() {
                var e = t(this).data("ui-draggable"), i = e.options;
                e.snapElements = [], t(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap)
                    .each(function() {
                        var i = t(this), s = i.offset();
                        this !== e.element[0] &&
                            e.snapElements.push({
                                item: this,
                                width: i.outerWidth(),
                                height: i.outerHeight(),
                                top: s.top,
                                left: s.left
                            })
                    })
            },
            drag: function(e, i) {
                var s,
                    n,
                    a,
                    o,
                    r,
                    l,
                    h,
                    c,
                    u,
                    d,
                    p = t(this).data("ui-draggable"),
                    g = p.options,
                    f = g.snapTolerance,
                    m = i.offset.left,
                    _ = m + p.helperProportions.width,
                    v = i.offset.top,
                    b = v + p.helperProportions.height;
                for (u = p.snapElements
                        .length -
                        1;
                    u >= 0;
                    u--)
                    r = p.snapElements[u].left, l = r + p.snapElements[u].width, h = p.snapElements[u]
                            .top, c = h + p.snapElements[u].height,
                        r - f > _ ||
                            m > l + f ||
                            h - f > b ||
                            v > c + f ||
                            !t.contains(p.snapElements[u].item.ownerDocument, p.snapElements[u].item)
                            ? (p.snapElements[u].snapping &&
                                p.options.snap.release &&
                                p.options.snap.release.call(p.element,
                                    e,
                                    t.extend(p._uiHash(), { snapItem: p.snapElements[u].item })), p.snapElements[u]
                                .snapping = !1)
                            : ("inner" !== g.snapMode &&
                            (s = f >= Math.abs(h - b), n = f >= Math.abs(c - v), a = f >= Math.abs(r - _), o =
                                f >= Math.abs(l - m), s &&
                            (i.position.top = p
                                ._convertPositionTo("relative", { top: h - p.helperProportions.height, left: 0 }).top -
                                p.margins.top), n &&
                            (i.position.top = p._convertPositionTo("relative", { top: c, left: 0 })
                                .top -
                                p.margins.top), a &&
                            (i.position.left = p
                                ._convertPositionTo("relative", { top: 0, left: r - p.helperProportions.width }).left -
                                p.margins.left), o &&
                            (i.position.left = p._convertPositionTo("relative", { top: 0, left: l }).left -
                                p.margins
                                .left)), d = s || n || a || o, "outer" !== g.snapMode &&
                            (s = f >= Math.abs(h - v), n = f >= Math.abs(c - b), a = f >= Math.abs(r - m), o =
                                f >= Math.abs(l - _), s &&
                            (i.position.top = p._convertPositionTo("relative", { top: h, left: 0 })
                                .top -
                                p.margins.top), n &&
                            (i.position.top = p
                                ._convertPositionTo("relative", { top: c - p.helperProportions.height, left: 0 }).top -
                                p.margins.top), a &&
                            (i.position.left = p._convertPositionTo("relative", { top: 0, left: r }).left -
                                p.margins.left), o &&
                            (i.position.left = p
                                ._convertPositionTo("relative", { top: 0, left: l - p.helperProportions.width }).left -
                                p.margins.left)), !p.snapElements[u].snapping &&
                                (s || n || a || o || d) &&
                                p.options.snap.snap &&
                                p.options.snap.snap.call(p.element,
                                    e,
                                    t.extend(p._uiHash(), { snapItem: p.snapElements[u].item })), p.snapElements[u]
                                .snapping = s || n || a || o || d)
            }
        }), t.ui.plugin.add("draggable",
        "stack",
        {
            start: function() {
                var e,
                    i = this.data("ui-draggable").options,
                    s = t.makeArray(t(i.stack)).sort(function(e, i) {
                        return(parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                    });
                s.length &&
                (e = parseInt(t(s[0]).css("zIndex"), 10) || 0, t(s)
                    .each(function(i) { t(this).css("zIndex", e + i) }), this.css("zIndex", e + s.length))
            }
        }), t.ui.plugin.add("draggable",
        "zIndex",
        {
            start: function(e, i) {
                var s = t(i.helper), n = t(this).data("ui-draggable").options;
                s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex)
            },
            stop: function(e, i) {
                var s = t(this).data("ui-draggable").options;
                s._zIndex && t(i.helper).css("zIndex", s._zIndex)
            }
        })
})(jQuery);
(function(t) {
    function e(t, e, i) { return t > e && e + i > t }

    function i(t) { return/left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display")) }

    t.widget("ui.sortable",
        t.ui.mouse,
        {
            version: "1.10.4",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _create: function() {
                var t = this.options;
                this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this
                    .floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1, this.offset = this
                    .element.offset(), this._mouseInit(), this.ready = !0
            },
            _destroy: function() {
                this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
                for (var t = this.items
                        .length -
                        1;
                    t >= 0;
                    t--) this.items[t].item.removeData(this.widgetName + "-item");
                return this
            },
            _setOption: function(e, i) {
                "disabled" === e
                    ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i))
                    : t.Widget.prototype._setOption.apply(this, arguments)
            },
            _mouseCapture: function(e, i) {
                var s = null, n = !1, o = this;
                return this.reverting
                    ? !1
                    : this.options.disabled || "static" === this.options.type
                    ? !1
                    : (this._refreshItems(e), t(e.target).parents()
                        .each(function() {
                            return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : undefined
                        }), t.data(e
                            .target,
                            o.widgetName + "-item") ===
                        o &&
                        (s = t(e.target)), s
                        ? !this.options.handle ||
                        i ||
                        (t(this.options.handle, s).find("*").addBack()
                            .each(function() { this === e.target && (n = !0) }), n)
                        ? (this.currentItem = s, this._removeCurrentsFromItems(), !0)
                        : !1
                        : !1)
            },
            _mouseStart: function(e, i, s) {
                var n, o, a = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this
                        ._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper
                        .scrollParent(), this.offset = this.currentItem.offset(), this
                        .offset = {
                            top: this.offset.top - this.margins.top,
                            left: this.offset.left - this.margins.left
                        }, t
                        .extend(this.offset,
                        {
                            click: { left: e.pageX - this.offset.left, top: e.pageY - this.offset.top },
                            parent: this._getParentOffset(),
                            relative: this._getRelativeOffset()
                        }), this.helper.css("position", "absolute"), this.cssPosition = this.helper
                        .css("position"), this
                        .originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this
                        .originalPageY = e
                        .pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this
                        .domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] },
                    this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this
                        ._createPlaceholder(), a
                        .containment &&
                        this._setContainment(), a.cursor &&
                        "auto" !== a.cursor &&
                        (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o
                            .css("cursor", a.cursor), this
                            .storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>")
                            .appendTo(o)), a.opacity &&
                    (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper
                        .css("opacity", a.opacity)), a.zIndex &&
                    (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper
                        .css("zIndex", a.zIndex)), this.scrollParent[0] !== document &&
                        "HTML" !== this.scrollParent[0].tagName &&
                        (this.overflowOffset = this.scrollParent.offset()), this
                        ._trigger("start", e, this._uiHash()), this._preserveHelperProportions ||
                        this._cacheHelperProportions(), !s)
                    for (n = this.containers
                            .length -
                            1;
                        n >= 0;
                        n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
                return t.ui
                    .ddmanager &&
                    (t.ui.ddmanager.current = this), t.ui.ddmanager &&
                    !a.dropBehaviour &&
                    t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper
                    .addClass("ui-sortable-helper"), this._mouseDrag(e), !0
            },
            _mouseDrag: function(e) {
                var i, s, n, o, a = this.options, r = !1;
                for (this.position = this._generatePosition(e), this.positionAbs = this
                        ._convertPositionTo("absolute"), this
                        .lastPositionAbs ||
                        (this.lastPositionAbs = this
                            .positionAbs), this.options.scroll &&
                    (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName
                        ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity
                            ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed
                            : e.pageY - this.overflowOffset.top < a.scrollSensitivity &&
                            (this.scrollParent[0]
                                .scrollTop = r = this.scrollParent[0]
                                .scrollTop -
                                a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX <
                            a.scrollSensitivity
                            ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed
                            : e.pageX - this.overflowOffset.left < a.scrollSensitivity &&
                            (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed))
                        : (e.pageY - t(document).scrollTop() < a.scrollSensitivity
                            ? r = t(document).scrollTop(t(document).scrollTop() - a.scrollSpeed)
                            : t(window).height() - (e.pageY - t(document).scrollTop()) < a.scrollSensitivity &&
                            (r = t(document).scrollTop(t(document)
                                .scrollTop() +
                                a.scrollSpeed)), e.pageX - t(document).scrollLeft() < a.scrollSensitivity
                            ? r = t(document).scrollLeft(t(document).scrollLeft() - a.scrollSpeed)
                            : t(window).width() - (e.pageX - t(document).scrollLeft()) < a.scrollSensitivity &&
                            (r = t(document).scrollLeft(t(document)
                                .scrollLeft() +
                                a.scrollSpeed))), r !== !1 &&
                        t.ui.ddmanager &&
                        !a.dropBehaviour &&
                        t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this
                        ._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis ||
                    (this.helper[0].style.left = this.position
                        .left +
                        "px"), this.options.axis && "x" === this.options.axis ||
                        (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1;
                    i >= 0;
                    i--)
                    if (s = this.items[i], n = s.item[0], o = this
                        ._intersectsWithPointer(s), o &&
                        s.instance === this.currentContainer &&
                        n !== this.currentItem[0] &&
                        this.placeholder[1 === o ? "next" : "prev"]()[0] !== n &&
                        !t.contains(this.placeholder[0], n) &&
                        ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
                        if (this
                                .direction = 1 === o ? "down" : "up",
                            "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                        this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                        break
                    }
                return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this
                    ._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function(e, i) {
                if (e) {
                    if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options
                        .revert) {
                        var s = this, n = this.placeholder.offset(), o = this.options.axis, a = {};
                        o && "x" !== o ||
                        (a.left = n.left -
                            this.offset.parent.left -
                            this.margins.left +
                            (this
                                .offsetParent[0] ===
                                document.body
                                ? 0
                                : this.offsetParent[0]
                                .scrollLeft)), o && "y" !== o ||
                        (a.top = n.top -
                            this.offset.parent.top -
                            this.margins.top +
                            (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this
                            .reverting = !0, t(this.helper)
                            .animate(a, parseInt(this.options.revert, 10) || 500, function() { s._clear(e) })
                    } else this._clear(e, i);
                    return!1
                }
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp({ target: null }), "original" === this.options.helper
                        ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                        : this.currentItem.show();
                    for (var e = this.containers
                            .length -
                            1;
                        e >= 0;
                        e--)
                        this.containers[e]
                                ._trigger("deactivate", null, this._uiHash(this)),
                            this.containers[e].containerCache.over &&
                            (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e]
                                .containerCache.over = 0)
                }
                return this.placeholder &&
                (this.placeholder[0]
                        .parentNode &&
                        this.placeholder[0].parentNode
                        .removeChild(this.placeholder[0]), "original" !== this.options.helper &&
                        this.helper &&
                        this.helper[0].parentNode &&
                        this.helper.remove(), t.extend(this,
                        { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }),
                    this.domPosition.prev
                        ? t(this.domPosition.prev).after(this.currentItem)
                        : t(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function(e) {
                var i = this._getItemsAsjQuery(e && e.connected), s = [];
                return e = e || {}, t(i).each(function() {
                    var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                    i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
                }), !s.length && e.key && s.push(e.key + "="), s.join("&")
            },
            toArray: function(e) {
                var i = this._getItemsAsjQuery(e && e.connected), s = [];
                return e = e || {}, i.each(function() { s.push(t(e.item || this).attr(e.attribute || "id") || "") }), s
            },
            _intersectsWith: function(t) {
                var e = this.positionAbs.left,
                    i = e + this.helperProportions.width,
                    s = this.positionAbs.top,
                    n = s + this.helperProportions.height,
                    o = t.left,
                    a = o + t.width,
                    r = t.top,
                    h = r + t.height,
                    l = this.offset.click.top,
                    c = this.offset.click.left,
                    u = "x" === this.options.axis || s + l > r && h > s + l,
                    d = "y" === this.options.axis || e + c > o && a > e + c,
                    p = u && d;
                return"pointer" === this.options.tolerance ||
                    this.options.forcePointerForContainers ||
                    "pointer" !== this.options.tolerance &&
                    this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"]
                    ? p
                    : e + this.helperProportions.width / 2 > o &&
                    a > i - this.helperProportions.width / 2 &&
                    s + this.helperProportions.height / 2 > r &&
                    h > n - this.helperProportions.height / 2
            },
            _intersectsWithPointer: function(t) {
                var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                    s = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                    n = i && s,
                    o = this._getDragVerticalDirection(),
                    a = this._getDragHorizontalDirection();
                return n ? this.floating ? a && "right" === a || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1) : !1
            },
            _intersectsWithSides: function(t) {
                var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                    s = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                    n = this._getDragVerticalDirection(),
                    o = this._getDragHorizontalDirection();
                return this.floating && o
                    ? "right" === o && s || "left" === o && !s
                    : n && ("down" === n && i || "up" === n && !i)
            },
            _getDragVerticalDirection: function() {
                var t = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== t && (t > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function() {
                var t = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== t && (t > 0 ? "right" : "left")
            },
            refresh: function(t) { return this._refreshItems(t), this.refreshPositions(), this },
            _connectWith: function() {
                var t = this.options;
                return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
            },
            _getItemsAsjQuery: function(e) {
                function i() { r.push(this) }

                var s, n, o, a, r = [], h = [], l = this._connectWith();
                if (l && e)
                    for (s = l.length - 1; s >= 0; s--)
                        for (o = t(l[s]), n = o
                                .length -
                                1;
                            n >= 0;
                            n--)
                            a = t
                                    .data(o[n], this.widgetFullName),
                                a &&
                                    a !== this &&
                                    !a.options.disabled &&
                                    h.push([
                                        t.isFunction(a.options.items)
                                        ? a.options.items.call(a.element)
                                        : t(a.options.items, a.element).not(".ui-sortable-helper")
                                        .not(".ui-sortable-placeholder"), a
                                    ]);
                for (h.push([
                        t.isFunction(this.options.items)
                        ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem })
                        : t(this.options.items, this.element).not(".ui-sortable-helper")
                        .not(".ui-sortable-placeholder"),
                        this
                    ]), s = h.length - 1;
                    s >= 0;
                    s--) h[s][0].each(i);
                return t(r)
            },
            _removeCurrentsFromItems: function() {
                var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = t.grep(this.items,
                    function(t) {
                        for (var i = 0; e.length > i; i++) if (e[i] === t.item[0]) return!1;
                        return!0
                    })
            },
            _refreshItems: function(e) {
                this.items = [], this.containers = [this];
                var i,
                    s,
                    n,
                    o,
                    a,
                    r,
                    h,
                    l,
                    c = this.items,
                    u = [
                        [
                            t.isFunction(this.options.items)
                            ? this.options.items.call(this.element[0], e, { item: this.currentItem })
                            : t(this.options.items, this.element), this
                        ]
                    ],
                    d = this._connectWith();
                if (d && this.ready)
                    for (i = d.length - 1; i >= 0; i--)
                        for (n = t(d[i]), s = n
                                .length -
                                1;
                            s >= 0;
                            s--)
                            o = t
                                    .data(n[s], this.widgetFullName),
                                o &&
                                    o !== this &&
                                    !o.options.disabled &&
                                    (u.push([
                                        t.isFunction(o.options.items)
                                        ? o.options.items.call(o.element[0], e, { item: this.currentItem })
                                        : t(o.options.items, o.element), o
                                    ]), this.containers.push(o));
                for (i = u.length - 1; i >= 0; i--)
                    for (a = u[i][1], r = u[i][0], s = 0, l = r
                            .length;
                        l > s;
                        s++)
                        h = t(r[s]), h.data(this.widgetName + "-item", a), c
                            .push({ item: h, instance: a, width: 0, height: 0, left: 0, top: 0 })
            },
            refreshPositions: function(e) {
                this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                var i, s, n, o;
                for (i = this.items
                        .length -
                        1;
                    i >= 0;
                    i--)
                    s = this.items[i], s.instance !== this.currentContainer &&
                        this.currentContainer &&
                        s.item[0] !== this.currentItem[0] ||
                        (n = this.options
                            .toleranceElement
                            ? t(this.options.toleranceElement, s.item)
                            : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s
                            .left = o.left, s.top = o.top);
                if (this.options
                    .custom &&
                    this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (i = this.containers
                            .length -
                            1;
                        i >= 0;
                        i--)
                        o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this
                            .containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this
                            .containers[i].element.outerWidth(), this.containers[i].containerCache.height = this
                            .containers[i].element.outerHeight();
                return this
            },
            _createPlaceholder: function(e) {
                e = e || this;
                var i, s = e.options;
                s.placeholder && s.placeholder.constructor !== String ||
                (i = s.placeholder, s.placeholder = {
                    element: function() {
                        var s = e.currentItem[0].nodeName.toLowerCase(),
                            n = t("<" + s + ">", e.document[0])
                                .addClass(i || e.currentItem[0].className + " ui-sortable-placeholder")
                                .removeClass("ui-sortable-helper");
                        return"tr" === s
                                ? e.currentItem.children()
                                .each(function() {
                                    t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1)
                                        .appendTo(n)
                                })
                                : "img" === s && n.attr("src", e.currentItem.attr("src")),
                            i || n.css("visibility", "hidden"), n
                    },
                    update: function(t, n) {
                        (!i || s.forcePlaceholderSize) &&
                        (n.height() ||
                            n.height(e.currentItem.innerHeight() -
                                parseInt(e.currentItem.css("paddingTop") || 0, 10) -
                                parseInt(e.currentItem
                                    .css("paddingBottom") ||
                                    0,
                                    10)), n.width() ||
                            n.width(e.currentItem.innerWidth() -
                                parseInt(e.currentItem.css("paddingLeft") || 0, 10) -
                                parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem
                    .after(e.placeholder), s.placeholder.update(e, e.placeholder)
            },
            _contactContainers: function(s) {
                var n, o, a, r, h, l, c, u, d, p, f = null, g = null;
                for (n = this.containers.length - 1; n >= 0; n--)
                    if (!t.contains(this.currentItem[0], this.containers[n].element[0]))
                        if (this._intersectsWith(this.containers[n].containerCache)) {
                            if (f && t.contains(this.containers[n].element[0], f.element[0])) continue;
                            f = this.containers[n], g = n
                        } else
                            this.containers[n].containerCache.over &&
                            (this.containers[n]._trigger("out", s, this._uiHash(this)), this.containers[n]
                                .containerCache.over = 0);
                if (f)
                    if (1 === this.containers.length)
                        this.containers[g].containerCache.over ||
                        (this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g]
                            .containerCache.over = 1);
                    else {
                        for (a = 1e4, r = null, p = f
                                .floating ||
                                i(this
                                    .currentItem), h = p ? "left" : "top", l = p ? "width" : "height", c =
                                this.positionAbs[h] + this.offset.click[h], o = this.items.length - 1;
                            o >= 0;
                            o--)
                            t.contains(this.containers[g].element[0], this.items[o].item[0]) &&
                                this.items[o].item[0] !== this.currentItem[0] &&
                                (!p ||
                                    e(this.positionAbs.top + this.offset.click.top,
                                        this.items[o].top,
                                        this.items[o].height)) &&
                                (u = this.items[o].item
                                    .offset()[h], d = !1, Math.abs(u - c) > Math.abs(u + this.items[o][l] - c) &&
                                (d = !0, u += this
                                    .items[o][l]), a > Math.abs(u - c) &&
                                    (a = Math.abs(u - c), r = this.items[o], this.direction = d ? "up" : "down"));
                        if (!r && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[g]) return;
                        r ? this._rearrange(s, r, null, !0) : this._rearrange(s, null, this.containers[g].element, !0),
                            this._trigger("change", s, this._uiHash()), this.containers[g]
                                ._trigger("change", s, this._uiHash(this)), this.currentContainer = this
                                .containers[g], this.options.placeholder
                                .update(this.currentContainer, this.placeholder), this.containers[g]
                                ._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1
                    }
            },
            _createHelper: function(e) {
                var i = this.options,
                    s = t.isFunction(i.helper)
                        ? t(i.helper.apply(this.element[0], [e, this.currentItem]))
                        : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
                return s.parents("body").length ||
                    t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0]
                    .appendChild(s[0]), s[0] === this.currentItem[0] &&
                (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), (!s[0].style
                        .width ||
                        i.forceHelperSize) &&
                    s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) &&
                    s.height(this.currentItem.height()), s
            },
            _adjustOffsetFromHelper: function(e) {
                "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
                    "left" in e && (this.offset.click.left = e.left + this.margins.left),
                    "right" in e &&
                    (this.offset.click.left = this.helperProportions
                        .width -
                        e.right +
                        this.margins
                        .left), "top" in e && (this.offset.click.top = e.top + this.margins.top),
                    "bottom" in e &&
                        (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var e = this.offsetParent.offset();
                return"absolute" === this.cssPosition &&
                    this.scrollParent[0] !== document &&
                    t.contains(this.scrollParent[0], this.offsetParent[0]) &&
                    (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent
                        .scrollTop()), (this.offsetParent[0] === document.body ||
                        this.offsetParent[0]
                        .tagName &&
                        "html" === this.offsetParent[0].tagName.toLowerCase() &&
                        t.ui.ie) &&
                    (e = { top: 0, left: 0 }), {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var t = this.currentItem.position();
                    return{
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return{ top: 0, left: 0 }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() }
            },
            _setContainment: function() {
                var e, i, s, n = this.options;
                "parent" === n.containment && (n.containment = this.helper[0].parentNode),
                    ("document" === n.containment || "window" === n.containment) &&
                    (this.containment = [
                        0 - this.offset.relative.left - this.offset.parent.left,
                        0 - this.offset.relative.top - this.offset.parent.top,
                        t("document" === n.containment ? document : window).width() -
                        this.helperProportions.width -
                        this.margins.left, (t("document" === n.containment ? document : window).height() ||
                            document.body.parentNode.scrollHeight) -
                        this.helperProportions.height -
                        this.margins.top
                    ]), /^(document|window|parent)$/.test(n.containment) ||
                    (e = t(n.containment)[0], i = t(n.containment)
                        .offset(), s = "hidden" !== t(e).css("overflow"), this
                        .containment = [
                            i.left +
                            (parseInt(t(e).css("borderLeftWidth"), 10) || 0) +
                            (parseInt(t(e).css("paddingLeft"), 10) || 0) -
                            this.margins.left, i.top +
                            (parseInt(t(e).css("borderTopWidth"), 10) || 0) +
                            (parseInt(t(e).css("paddingTop"), 10) || 0) -
                            this.margins.top, i.left +
                            (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) -
                            (parseInt(t(e).css("borderLeftWidth"), 10) || 0) -
                            (parseInt(t(e).css("paddingRight"), 10) || 0) -
                            this.helperProportions.width -
                            this.margins.left, i.top +
                            (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) -
                            (parseInt(t(e).css("borderTopWidth"), 10) || 0) -
                            (parseInt(t(e).css("paddingBottom"), 10) || 0) -
                            this.helperProportions.height -
                            this.margins.top
                        ])
            },
            _convertPositionTo: function(e, i) {
                i || (i = this.position);
                var s = "absolute" === e ? 1 : -1,
                    n = "absolute" !== this.cssPosition ||
                        this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0])
                        ? this.scrollParent
                        : this.offsetParent,
                    o = /(html|body)/i.test(n[0].tagName);
                return{
                    top: i.top +
                        this.offset.relative.top * s +
                        this.offset.parent.top * s -
                        ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
                    left: i.left +
                        this.offset.relative.left * s +
                        this.offset.parent.left * s -
                        ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
                }
            },
            _generatePosition: function(e) {
                var i,
                    s,
                    n = this.options,
                    o = e.pageX,
                    a = e.pageY,
                    r = "absolute" !== this.cssPosition ||
                        this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0])
                        ? this.scrollParent
                        : this.offsetParent,
                    h = /(html|body)/i.test(r[0].tagName);
                return"relative" !== this.cssPosition ||
                    this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] ||
                    (this.offset.relative = this
                        ._getRelativeOffset()), this.originalPosition &&
                (this.containment &&
                (e.pageX - this.offset.click.left < this.containment[0] &&
                (o = this
                    .containment[0] +
                    this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] &&
                (a = this
                    .containment[1] +
                    this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] &&
                (o = this
                    .containment[2] +
                    this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] &&
                (a = this
                    .containment[3] +
                    this.offset.click.top)), n.grid &&
                (i = this
                    .originalPageY +
                    Math
                    .round((a - this.originalPageY) / n.grid[1]) *
                    n.grid[1], a = this.containment
                    ? i - this.offset.click.top >= this.containment[1] &&
                    i - this.offset.click.top <= this.containment[3]
                    ? i
                    : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1]
                    : i, s = this
                    .originalPageX +
                    Math
                    .round((o - this.originalPageX) / n.grid[0]) *
                    n.grid[0], o = this.containment
                    ? s - this.offset.click.left >= this.containment[0] &&
                    s - this.offset.click.left <= this.containment[2]
                    ? s
                    : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0]
                    : s)), {
                    top: a -
                        this.offset.click.top -
                        this.offset.relative.top -
                        this.offset.parent.top +
                        ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
                    left: o -
                        this.offset.click.left -
                        this.offset.relative.left -
                        this.offset.parent.left +
                        ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
                }
            },
            _rearrange: function(t, e, i, s) {
                i
                    ? i[0].appendChild(this.placeholder[0])
                    : e.item[0].parentNode.insertBefore(this.placeholder[0],
                        "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this
                    .counter = this.counter ? ++this.counter : 1;
                var n = this.counter;
                this._delay(function() { n === this.counter && this.refreshPositions(!s) })
            },
            _clear: function(t, e) {
                function i(t, e, i) { return function(s) { i._trigger(t, s, e._uiHash(e)) } }

                this.reverting = !1;
                var s, n = [];
                if (!this
                    ._noFinalSort &&
                    this.currentItem.parent().length &&
                    this.placeholder.before(this.currentItem), this
                    ._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (s in this._storedCSS)
                        ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside &&
                        !e &&
                        n
                        .push(function(t) { this._trigger("receive", t, this._uiHash(this.fromOutside)) }),
                    !this.fromOutside &&
                        this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] &&
                        this.domPosition.parent === this.currentItem.parent()[0] ||
                        e ||
                        n
                        .push(function(t) { this._trigger("update", t, this._uiHash()) }),
                    this !== this.currentContainer &&
                    (e ||
                    (n.push(function(t) { this._trigger("remove", t, this._uiHash()) }), n
                        .push(function(t) { return function(e) { t._trigger("receive", e, this._uiHash(this)) } }
                            .call(this, this.currentContainer)), n
                        .push(function(t) { return function(e) { t._trigger("update", e, this._uiHash(this)) } }
                            .call(this, this.currentContainer)))), s = this.containers.length - 1;
                    s >= 0;
                    s--)
                    e || n.push(i("deactivate", this, this.containers[s])),
                        this.containers[s].containerCache.over &&
                            (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
                if (this.storedCursor &&
                (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet
                    .remove()), this
                    ._storedOpacity &&
                    this.helper
                    .css("opacity", this._storedOpacity), this._storedZIndex &&
                    this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this
                    .dragging = !1, this.cancelHelperRemoval) {
                    if (!e) {
                        for (this
                                ._trigger("beforeStop", t, this._uiHash()), s = 0;
                            n.length > s;
                            s++) n[s].call(this, t);
                        this._trigger("stop", t, this._uiHash())
                    }
                    return this.fromOutside = !1, !1
                }
                if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode
                    .removeChild(this.placeholder[0]), this
                    .helper[0] !==
                    this.currentItem[0] &&
                    this.helper.remove(), this.helper = null, !e) {
                    for (s = 0; n.length > s; s++) n[s].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !0
            },
            _trigger: function() { t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel() },
            _uiHash: function(e) {
                var i = e || this;
                return{
                    helper: i.helper,
                    placeholder: i.placeholder || t([]),
                    position: i.position,
                    originalPosition: i.originalPosition,
                    offset: i.positionAbs,
                    item: i.currentItem,
                    sender: e ? e.element : null
                }
            }
        })
})(jQuery);
(function(e) {
    e.widget("ui.autocomplete",
    {
        version: "1.10.4",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: { my: "left top", at: "left bottom", collision: "none" },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var t, i, s, n = this.element[0].nodeName.toLowerCase(), a = "textarea" === n, o = "input" === n;
            this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this
                .element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input")
                .attr("autocomplete", "off"), this._on(this.element,
            {
                keydown: function(n) {
                    if (this.element.prop("readOnly")) return t = !0, s = !0, i = !0, undefined;
                    t = !1, s = !1, i = !1;
                    var a = e.ui.keyCode;
                    switch (n.keyCode) {
                    case a.PAGE_UP:
                        t = !0, this._move("previousPage", n);
                        break;
                    case a.PAGE_DOWN:
                        t = !0, this._move("nextPage", n);
                        break;
                    case a.UP:
                        t = !0, this._keyEvent("previous", n);
                        break;
                    case a.DOWN:
                        t = !0, this._keyEvent("next", n);
                        break;
                    case a.ENTER:
                    case a.NUMPAD_ENTER:
                        this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
                        break;
                    case a.TAB:
                        this.menu.active && this.menu.select(n);
                        break;
                    case a.ESCAPE:
                        this.menu.element.is(":visible") && (this._value(this.term), this.close(n), n.preventDefault());
                        break;
                    default:
                        i = !0, this._searchTimeout(n)
                    }
                },
                keypress: function(s) {
                    if (t)
                        return t = !1, (!this
                                .isMultiLine ||
                                this.menu.element.is(":visible")) &&
                            s.preventDefault(), undefined;
                    if (!i) {
                        var n = e.ui.keyCode;
                        switch (s.keyCode) {
                        case n.PAGE_UP:
                            this._move("previousPage", s);
                            break;
                        case n.PAGE_DOWN:
                            this._move("nextPage", s);
                            break;
                        case n.UP:
                            this._keyEvent("previous", s);
                            break;
                        case n.DOWN:
                            this._keyEvent("next", s)
                        }
                    }
                },
                input: function(e) {
                    return s ? (s = !1, e.preventDefault(), undefined) : (this._searchTimeout(e), undefined)
                },
                focus: function() { this.selectedItem = null, this.previous = this._value() },
                blur: function(e) {
                    return this.cancelBlur
                        ? (delete this.cancelBlur, undefined)
                        : (clearTimeout(this.searching), this.close(e), this._change(e), undefined)
                }
            }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front")
                .appendTo(this._appendTo()).menu({ role: null }).hide().data("ui-menu"), this._on(this.menu.element,
            {
                mousedown: function(t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function() { delete this.cancelBlur });
                    var i = this.menu.element[0];
                    e(t.target).closest(".ui-menu-item").length ||
                        this._delay(function() {
                            var t = this;
                            this.document.one("mousedown",
                                function(s) {
                                    s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close()
                                })
                        })
                },
                menufocus: function(t, i) {
                    if (this
                        .isNewMenu &&
                        (this.isNewMenu = !1, t
                            .originalEvent &&
                            /^mouse/.test(t.originalEvent
                                .type)))
                        return this.menu.blur(), this.document
                            .one("mousemove", function() { e(t.target).trigger(t.originalEvent) }), undefined;
                    var s = i.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", t, { item: s })
                        ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value)
                        : this.liveRegion.text(s.value)
                },
                menuselect: function(e, t) {
                    var i = t.item.data("ui-autocomplete-item"), s = this.previous;
                    this.element[0] !== this.document[0].activeElement &&
                        (this.element.focus(), this.previous = s, this
                            ._delay(function() { this.previous = s, this.selectedItem = i })),
                        !1 !== this._trigger("select", e, { item: i }) && this._value(i.value), this.term = this
                            ._value(), this.close(e), this.selectedItem = i
                }
            }), this.liveRegion = e("<span>", { role: "status", "aria-live": "polite" })
                .addClass("ui-helper-hidden-accessible").insertBefore(this.element), this
                ._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } })
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input")
                .removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(e, t) {
            this
                    ._super(e, t), "source" === e && this._initSource(),
                "appendTo" === e && this.menu.element.appendTo(this._appendTo()),
                "disabled" === e && t && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)),
                t || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
        },
        _initSource: function() {
            var t, i, s = this;
            e.isArray(this.options.source)
                ? (t = this.options.source, this.source = function(i, s) { s(e.ui.autocomplete.filter(t, i.term)) })
                : "string" == typeof this.options.source
                ? (i = this.options.source, this.source = function(t, n) {
                    s.xhr && s.xhr.abort(), s.xhr = e.ajax({
                        url: i,
                        data: t,
                        dataType: "json",
                        success: function(e) { n(e) },
                        error: function() { n([]) }
                    })
                })
                : this.source = this.options.source
        },
        _searchTimeout: function(e) {
            clearTimeout(this.searching), this.searching = this
                ._delay(function() { this.term !== this._value() && (this.selectedItem = null, this.search(null, e)) },
                    this.options.delay)
        },
        search: function(e, t) {
            return e = null != e ? e : this._value(), this.term = this
                ._value(), e.length < this.options.minLength
                ? this.close(t)
                : this._trigger("search", t) !== !1 ? this._search(e) : undefined
        },
        _search: function(e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this
                .source({ term: e }, this._response())
        },
        _response: function() {
            var t = ++this.requestIndex;
            return e.proxy(function(e) {
                    t === this.requestIndex && this.__response(e), this
                        .pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
                },
                this)
        },
        __response: function(e) {
            e && (e = this._normalize(e)), this
                    ._trigger("response", null, { content: e }),
                !this.options.disabled && e && e.length && !this.cancelSearch
                    ? (this._suggest(e), this._trigger("open"))
                    : this._close()
        },
        close: function(e) { this.cancelSearch = !0, this._close(e) },
        _close: function(e) {
            this.menu.element.is(":visible") &&
                (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
        },
        _change: function(e) {
            this.previous !== this._value() && this._trigger("change", e, { item: this.selectedItem })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value
                ? t
                : e.map(t,
                    function(t) {
                        return"string" == typeof t
                            ? { label: t, value: t }
                            : e.extend({ label: t.label || t.value, value: t.value || t.label }, t)
                    })
        },
        _suggest: function(t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i
                .position(e
                    .extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, i) {
            var s = this;
            e.each(i, function(e, i) { s._renderItemData(t, i) })
        },
        _renderItemData: function(e, t) { return this._renderItem(e, t).data("ui-autocomplete-item", t) },
        _renderItem: function(t, i) { return e("<li>").append(e("<a>").text(i.label)).appendTo(t) },
        _move: function(e, t) {
            return this.menu.element.is(":visible")
                ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e)
                ? (this._value(this.term), this.menu.blur(), undefined)
                : (this.menu[e](t), undefined)
                : (this.search(null, t), undefined)
        },
        widget: function() { return this.menu.element },
        _value: function() { return this.valueMethod.apply(this.element, arguments) },
        _keyEvent: function(e, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
        }
    }), e.extend(e.ui.autocomplete,
    {
        escapeRegex: function(e) { return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") },
        filter: function(t, i) {
            var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
            return e.grep(t, function(e) { return s.test(e.label || e.value || e) })
        }
    }), e.widget("ui.autocomplete",
        e.ui.autocomplete,
        {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(e) {
                        return e +
                            (e > 1 ? " results are" : " result is") +
                            " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(e) {
                var t;
                this._superApply(arguments), this.options.disabled ||
                    this.cancelSearch ||
                    (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this
                        .liveRegion.text(t))
            }
        })
})(jQuery);
(function(t) {
    t.widget("ui.menu",
    {
        version: "1.10.4",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: { submenu: "ui-icon-carat-1-e" },
            menus: "ul",
            position: { my: "left top", at: "right top" },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId()
                    .addClass("ui-menu ui-widget ui-widget-content ui-corner-all")
                    .toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length)
                    .attr({ role: this.options.role, tabIndex: 0 })
                    .bind("click" + this.eventNamespace,
                        t
                        .proxy(function(t) { this.options.disabled && t.preventDefault() }, this)),
                this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this
                    ._on({
                        "mousedown .ui-menu-item > a": function(t) { t.preventDefault() },
                        "click .ui-state-disabled > a": function(t) { t.preventDefault() },
                        "click .ui-menu-item:has(a)": function(e) {
                            var i = t(e.target).closest(".ui-menu-item");
                            !this.mouseHandled &&
                                i.not(".ui-state-disabled").length &&
                                (this.select(e), e
                                    .isPropagationStopped() ||
                                    (this.mouseHandled = !0), i.has(".ui-menu").length
                                    ? this.expand(e)
                                    : !this.element.is(":focus") &&
                                    t(this.document[0].activeElement).closest(".ui-menu").length &&
                                    (this.element
                                            .trigger("focus", [!0]),
                                        this
                                            .active &&
                                            1 === this.active.parents(".ui-menu").length &&
                                            clearTimeout(this.timer)))
                        },
                        "mouseenter .ui-menu-item": function(e) {
                            var i = t(e.currentTarget);
                            i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
                        },
                        mouseleave: "collapseAll",
                        "mouseleave .ui-menu": "collapseAll",
                        focus: function(t, e) {
                            var i = this.active || this.element.children(".ui-menu-item").eq(0);
                            e || this.focus(t, i)
                        },
                        blur: function(e) {
                            this._delay(function() {
                                t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                            })
                        },
                        keydown: "_keydown"
                    }), this.refresh(), this._on(this.document,
                {
                    click: function(e) {
                        t(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1
                    }
                })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack()
                .removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role")
                .removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded")
                .removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element
                .find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled")
                .children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex")
                .removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                    var e = t(this);
                    e.data("ui-menu-submenu-carat") && e.remove()
                }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(e) {
            function i(t) { return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") }

            var s, n, a, o, r, l = !0;
            switch (e.keyCode) {
            case t.ui.keyCode.PAGE_UP:
                this.previousPage(e);
                break;
            case t.ui.keyCode.PAGE_DOWN:
                this.nextPage(e);
                break;
            case t.ui.keyCode.HOME:
                this._move("first", "first", e);
                break;
            case t.ui.keyCode.END:
                this._move("last", "last", e);
                break;
            case t.ui.keyCode.UP:
                this.previous(e);
                break;
            case t.ui.keyCode.DOWN:
                this.next(e);
                break;
            case t.ui.keyCode.LEFT:
                this.collapse(e);
                break;
            case t.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                break;
            case t.ui.keyCode.ENTER:
            case t.ui.keyCode.SPACE:
                this._activate(e);
                break;
            case t.ui.keyCode.ESCAPE:
                this.collapse(e);
                break;
            default:
                l = !1, n = this.previousFilter || "", a = String
                        .fromCharCode(e
                            .keyCode), o = !1, clearTimeout(this
                        .filterTimer), a === n ? o = !0 : a = n + a, r = RegExp("^" + i(a), "i"), s = this.activeMenu
                        .children(".ui-menu-item")
                        .filter(function() { return r.test(t(this).children("a").text()) }), s =
                        o && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s,
                    s.length ||
                    (a = String.fromCharCode(e.keyCode), r = RegExp("^" + i(a), "i"), s = this.activeMenu
                        .children(".ui-menu-item")
                        .filter(function() { return r.test(t(this).children("a").text()) })),
                    s.length
                        ? (this.focus(e, s), s.length > 1
                            ? (this.previousFilter = a, this.filterTimer = this
                                ._delay(function() { delete this.previousFilter }, 1e3))
                            : delete this.previousFilter)
                        : delete this.previousFilter
            }
            l && e.preventDefault()
        },
        _activate: function(t) {
            this.active.is(".ui-state-disabled") ||
                (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function() {
            var e, i = this.options.icons.submenu, s = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), s
                .filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide()
                .attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function() {
                    var e = t(this),
                        s = e.prev("a"),
                        n = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                    s.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", s.attr("id"))
                }), e = s.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item")
                .attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all")
                .attr({ tabIndex: -1, role: this._itemRole() }), e.children(":not(.ui-menu-item)").each(function() {
                var e = t(this);
                /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
            }), e.children(".ui-state-disabled")
                .attr("aria-disabled", "true"), this.active &&
                !t.contains(this.element[0], this.active[0]) &&
                this.blur()
        },
        _itemRole: function() { return{ menu: "menuitem", listbox: "option" }[this.options.role] },
        _setOption: function(t, e) {
            "icons" === t &&
                this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), this
                ._super(t, e)
        },
        focus: function(t, e) {
            var i, s;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active
                .children("a").addClass("ui-state-focus"), this.options.role &&
                this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item")
                .children("a:first")
                .addClass("ui-state-active"), t && "keydown" === t.type
                ? this._close()
                : this.timer = this._delay(function() { this._close() }, this.delay), i = e
                .children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this
                .activeMenu = e.parent(), this._trigger("focus", t, { item: e })
        },
        _scrollIntoView: function(e) {
            var i, s, n, a, o, r;
            this._hasScroll() &&
            (i = parseFloat(t.css(this
                    .activeMenu[0],
                    "borderTopWidth")) ||
                0, s = parseFloat(t.css(this
                    .activeMenu[0],
                    "paddingTop")) ||
                0, n = e.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this
                .activeMenu.height(), r = e.height(), 0 > n
                ? this.activeMenu.scrollTop(a + n)
                : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
        },
        blur: function(t, e) {
            e || clearTimeout(this.timer), this.active &&
            (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this
                ._trigger("blur", t, { item: this.active }))
        },
        _startOpening: function(t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") &&
                (this.timer = this._delay(function() { this._close(), this._open(t) }, this.delay))
        },
        _open: function(e) {
            var i = t.extend({ of: this.active }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide()
                .attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true")
                .position(i)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                    var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                    s.length || (s = this.element), this._close(s), this.blur(e), this.activeMenu = s
                },
                this.delay)
        },
        _close: function(t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide()
                .attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active")
                .removeClass("ui-state-active")
        },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            e && e.length && (this._open(e.parent()), this._delay(function() { this.focus(t, e) }))
        },
        next: function(t) { this._move("next", "first", t) },
        previous: function(t) { this._move("prev", "last", t) },
        isFirstItem: function() { return this.active && !this.active.prevAll(".ui-menu-item").length },
        isLastItem: function() { return this.active && !this.active.nextAll(".ui-menu-item").length },
        _move: function(t, e, i) {
            var s;
            this.active &&
            (s = "first" === t || "last" === t
                ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1)
                : this.active[t + "All"](".ui-menu-item")
                .eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[e]()), this
                .focus(i, s)
        },
        nextPage: function(e) {
            var i, s, n;
            return this.active
                ? (this.isLastItem() ||
                (this._hasScroll()
                    ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item")
                        .each(function() { return i = t(this), 0 > i.offset().top - s - n }), this.focus(e, i))
                    : this
                    .focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), undefined)
                : (this.next(e), undefined)
        },
        previousPage: function(e) {
            var i, s, n;
            return this.active
                ? (this.isFirstItem() ||
                (this._hasScroll()
                    ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item")
                        .each(function() { return i = t(this), i.offset().top - s + n > 0 }), this.focus(e, i))
                    : this.focus(e, this.activeMenu.children(".ui-menu-item").first())), undefined)
                : (this.next(e), undefined)
        },
        _hasScroll: function() { return this.element.outerHeight() < this.element.prop("scrollHeight") },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = { item: this.active };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        }
    })
})(jQuery);
(function(t) {
    var e = 5;
    t.widget("ui.slider",
        t.ui.mouse,
        {
            version: "1.10.4",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this
                    ._detectOrientation(), this._mouseInit(), this.element
                    .addClass("ui-slider ui-slider-" +
                        this.orientation +
                        " ui-widget" +
                        " ui-widget-content" +
                        " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this
                    ._animateOff = !1
            },
            _refresh: function() {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
            },
            _createHandles: function() {
                var e,
                    i,
                    s = this.options,
                    n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    a = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                    o = [];
                for (i = s.values && s.values.length || 1, n
                        .length >
                        i &&
                        (n.slice(i).remove(), n = n.slice(0, i)), e = n.length;
                    i > e;
                    e++) o.push(a);
                this.handles = n.add(t(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this
                    .handles.each(function(e) { t(this).data("ui-slider-handle-index", e) })
            },
            _createRange: function() {
                var e = this.options, i = "";
                e.range
                    ? (e.range === !0 &&
                        (e.values
                            ? e.values.length && 2 !== e.values.length
                            ? e.values = [e.values[0], e.values[0]]
                            : t.isArray(e.values) && (e.values = e.values.slice(0))
                            : e
                            .values = [this._valueMin(), this._valueMin()]),
                        this.range && this.range.length
                            ? this.range.removeClass("ui-slider-range-min ui-slider-range-max")
                            .css({ left: "", bottom: "" })
                            : (this.range = t("<div></div>")
                                .appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this
                            .range
                            .addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))
                    )
                    : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function() {
                var t = this.handles.add(this.range).filter("a");
                this._off(t), this._on(t, this._handleEvents), this._hoverable(t), this._focusable(t)
            },
            _destroy: function() {
                this.handles.remove(), this.range && this.range.remove(), this.element
                    .removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
            },
            _mouseCapture: function(e) {
                var i, s, n, a, o, r, l, h, u = this, c = this.options;
                return c.disabled
                    ? !1
                    : (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this
                        .elementOffset = this.element.offset(), i = { x: e.pageX, y: e.pageY }, s = this
                        ._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles
                        .each(function(e) {
                            var i = Math.abs(s - u.values(e));
                            (n > i || n === i && (e === u._lastChangedValue || u.values(e) === c.min)) &&
                                (n = i, a = t(this), o = e)
                        }), r = this._start(e, o), r === !1
                        ? !1
                        : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), l = a
                            .offset(), h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this
                            ._clickOffset = h
                            ? { left: 0, top: 0 }
                            : {
                                left: e.pageX - l.left - a.width() / 2,
                                top: e.pageY -
                                    l.top -
                                    a.height() / 2 -
                                    (parseInt(a.css("borderTopWidth"), 10) || 0) -
                                    (parseInt(a.css("borderBottomWidth"), 10) || 0) +
                                    (parseInt(a.css("marginTop"), 10) || 0)
                            }, this.handles.hasClass("ui-state-hover") || this._slide(e, o, s), this
                            ._animateOff = !0, !0))
            },
            _mouseStart: function() { return!0 },
            _mouseDrag: function(t) {
                var e = { x: t.pageX, y: t.pageY }, i = this._normValueFromMouse(e);
                return this._slide(t, this._handleIndex, i), !1
            },
            _mouseStop: function(t) {
                return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this
                    ._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this
                    ._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(t) {
                var e, i, s, n, a;
                return"horizontal" === this.orientation
                        ? (e = this.elementSize.width, i = t.x -
                            this.elementOffset.left -
                            (this._clickOffset ? this._clickOffset.left : 0))
                        : (e = this.elementSize.height, i = t.y -
                            this.elementOffset.top -
                            (this
                                ._clickOffset
                                ? this._clickOffset.top
                                : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0),
                    "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a =
                        this._valueMin() + s * n, this._trimAlignValue(a)
            },
            _start: function(t, e) {
                var i = { handle: this.handles[e], value: this.value() };
                return this.options.values &&
                    this.options.values.length &&
                    (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
            },
            _slide: function(t, e, i) {
                var s, n, a;
                this.options.values && this.options.values.length
                    ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length &&
                        this.options.range === !0 &&
                        (0 === e && i > s || 1 === e && s > i) &&
                        (i = s), i !== this.values(e) &&
                    (n = this.values(), n[e] = i, a = this
                        ._trigger("slide", t, { handle: this.handles[e], value: i, values: n }), s = this
                        .values(e ? 0 : 1), a !== !1 && this.values(e, i)))
                    : i !== this.value() &&
                    (a = this._trigger("slide", t, { handle: this.handles[e], value: i }), a !== !1 && this.value(i))
            },
            _stop: function(t, e) {
                var i = { handle: this.handles[e], value: this.value() };
                this.options.values &&
                    this.options.values.length &&
                    (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
            },
            _change: function(t, e) {
                if (!this._keySliding && !this._mouseSliding) {
                    var i = { handle: this.handles[e], value: this.value() };
                    this.options.values &&
                        this.options.values.length &&
                        (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this
                        ._trigger("change", t, i)
                }
            },
            value: function(t) {
                return arguments.length
                    ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this
                        ._change(null, 0), undefined)
                    : this._value()
            },
            values: function(e, i) {
                var s, n, a;
                if (arguments.length > 1)
                    return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this
                        ._change(null, e), undefined;
                if (!arguments.length) return this._values();
                if (!t.isArray(arguments[0]))
                    return this.options.values && this.options.values.length ? this._values(e) : this.value();
                for (s = this.options
                        .values, n = arguments[0], a = 0;
                    s.length > a;
                    a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
                this._refreshValue()
            },
            _setOption: function(e, i) {
                var s, n = 0;
                switch ("range" === e &&
                    this.options.range === !0 &&
                    ("min" === i
                        ? (this.options.value = this._values(0), this.options.values = null)
                        : "max" === i &&
                        (this.options.value = this._values(this.options.values.length - 1), this.options
                            .values = null)), t.isArray(this.options.values) && (n = this.options.values.length), t
                    .Widget.prototype._setOption.apply(this, arguments), e) {
                case"orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical")
                        .addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case"value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case"values":
                    for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
                    this._animateOff = !1;
                    break;
                case"min":
                case"max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                    break;
                case"range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
                }
            },
            _value: function() {
                var t = this.options.value;
                return t = this._trimAlignValue(t)
            },
            _values: function(t) {
                var e, i, s;
                if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
                if (this.options.values && this.options.values.length) {
                    for (i = this.options.values
                            .slice(), s = 0;
                        i.length > s;
                        s += 1) i[s] = this._trimAlignValue(i[s]);
                    return i
                }
                return[]
            },
            _trimAlignValue: function(t) {
                if (this._valueMin() >= t) return this._valueMin();
                if (t >= this._valueMax()) return this._valueMax();
                var e = this.options.step > 0 ? this.options.step : 1, i = (t - this._valueMin()) % e, s = t - i;
                return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
            },
            _valueMin: function() { return this.options.min },
            _valueMax: function() { return this.options.max },
            _refreshValue: function() {
                var e,
                    i,
                    s,
                    n,
                    a,
                    o = this.options.range,
                    r = this.options,
                    l = this,
                    h = this._animateOff ? !1 : r.animate,
                    u = {};
                this.options.values && this.options.values.length
                    ? this.handles.each(function(s) {
                        i = 100 * ((l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin())), u[
                                "horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this)
                                .stop(1, 1)[h ? "animate" : "css"](u, r.animate),
                            l.options.range === !0 &&
                            ("horizontal" === l.orientation
                                ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({ left: i + "%" }, r.animate),
                                    1 === s &&
                                        l
                                        .range[h ? "animate" : "css"
                                        ]({ width: i - e + "%" }, { queue: !1, duration: r.animate }))
                                : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({ bottom: i + "%" }, r.animate),
                                    1 === s &&
                                        l
                                        .range[h ? "animate" : "css"
                                        ]({ height: i - e + "%" }, { queue: !1, duration: r.animate }))), e = i
                    })
                    : (s = this.value(), n = this._valueMin(), a = this
                            ._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u[
                            "horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle
                            .stop(1, 1)[h ? "animate" : "css"](u, r.animate),
                        "min" === o &&
                            "horizontal" === this.orientation &&
                            this.range
                            .stop(1, 1)[h ? "animate" : "css"]({ width: i + "%" }, r.animate),
                        "max" === o &&
                            "horizontal" === this.orientation &&
                            this
                            .range[h ? "animate" : "css"]({ width: 100 - i + "%" }, { queue: !1, duration: r.animate }),
                        "min" === o &&
                            "vertical" === this.orientation &&
                            this.range
                            .stop(1, 1)[h ? "animate" : "css"]({ height: i + "%" }, r.animate),
                        "max" === o &&
                            "vertical" === this.orientation &&
                            this
                            .range[h ? "animate" : "css"]({ height: 100 - i + "%" }, { queue: !1, duration: r.animate })
                    )
            },
            _handleEvents: {
                keydown: function(i) {
                    var s, n, a, o, r = t(i.target).data("ui-slider-handle-index");
                    switch (i.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (i.preventDefault(), !this._keySliding &&
                        (this._keySliding = !0, t(i.target).addClass("ui-state-active"), s = this
                            ._start(i, r), s === !1)) return
                    }
                    switch (o = this.options.step, n = a = this.options.values && this.options.values.length
                        ? this.values(r)
                        : this.value(), i.keyCode) {
                    case t.ui.keyCode.HOME:
                        a = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        a = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        a = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / e);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        a = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / e);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (n === this._valueMax()) return;
                        a = this._trimAlignValue(n + o);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (n === this._valueMin()) return;
                        a = this._trimAlignValue(n - o)
                    }
                    this._slide(i, r, a)
                },
                click: function(t) { t.preventDefault() },
                keyup: function(e) {
                    var i = t(e.target).data("ui-slider-handle-index");
                    this._keySliding &&
                    (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target)
                        .removeClass("ui-state-active"))
                }
            }
        })
})(jQuery);

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Following is the CRM Encoding Decoding functions
// We have this Wrapper so that we can change the encoding decoding in one single place if needed
// ////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////
// CHANGE HISTORY:
// CRM SE 4330 : V4: Web Client hangs on high cpu usage when saving/sending an email with a large body
// Chandraa 02/22/2008
// ////////////////////////////////////////////////////////////////////////////////////////////////
// Decode URLs
function _crmUrlDecode(s) {
    if (IsNull(s)) {
        return s;
    } else {
        if (typeof(s) != "string") {
            s = s.toString();
        }
    }
//Have to compensate for %uNNNN style encoding produced by AntiXss.UrlEncode
// decode numeric encoded sequences
// decimal encoded
    s = s.replace(/%u[a-fA-F0-9]{4}/g,
        function($1) { return String.fromCharCode(parseInt($1.substr(2, $1.length - 2), 16)); });
//use decodeURIComponent to decode the string
    return decodeURIComponent(s.replace(/\+/g, " "));
}

function _crmUrlEncode(s) {
    if (IsNull(s)) {
        return s;
    } else {
        if (typeof(s) != "string") {
            s = s.toString();
        }
    }
    s = _UrlEncode(s);
// This is a workaround for a known issue where extended characters are encoded as
// %uNNNN instead of %NN%NN.  We search for the incorrect encoding and replace it
// with the correct encoding.
// First we search for supplemental characters, which have to be encoded simultaneously.
// The range for supplemental characters is:
// First char:  0xD800 - 0xDBFF
// Second char: 0xDC00 - 0xDFFF
    s = s.replace(/%u[dD][89aAbB][a-fA-F0-9]{2}%u[dD][cCdDeEfF][a-fA-F0-9]{2}/g,
        function($1) {
            return encodeURIComponent(String.fromCharCode(parseInt($1.substring(2, 6), 16)) +
                String.fromCharCode(parseInt($1.substring(8), 16)));
        });
// Now we search for any remaining %uNNNN encodings.
    s = s.replace(/%u[a-fA-F0-9]{4}/g,
        function($1) { return encodeURIComponent(String.fromCharCode(parseInt($1.substr(2, $1.length - 2), 16))); });
    return s;
}

// Encodes strings for name=value&name=value pair usage.
function _crmNameValueEncode(s) {
    if (IsNull(s)) {
        return s;
    } else {
        if (typeof(s) != "string") {
            s = s.toString();
        }
    }
// We are encoding the name and value for safe usage in name=value&name=value...
// UrlEncode already does this so we reuse it.
    return CrmEncodeDecode.CrmUrlEncode(s);
}

// Decodes strings used as name, value in name=value&name=value... pairs.
function _crmNameValueDecode(s) {
    if (IsNull(s)) {
        return s;
    } else {
        if (typeof(s) != "string") {
            s = s.toString();
        }
    }
// The name=value&name=value... are encoded using UrlEncode so decode it with UrlDecode
    return CrmEncodeDecode.CrmUrlDecode(s);
}

// Decodes a complete string or only the specified character
// Params: s - string to decode
//          charToDecode - character that needs to be decoded, if null or not present all chars are decoded.
function _crmXmlDecode(s, charToDecode) {
    if (IsNull(s)) {
        return s;
    } else {
        if (typeof(s) != "string") {
            s = s.toString();
        }
    }
    if (typeof(charToDecode) != "undefined" && charToDecode != null) {
//only one char needs to be decoded
        if (charToDecode.length > 1) charToDecode = charToDecode.charAt(0);
        var sEncodedChar = _XmlEncode(charToDecode);
        var rex = new RegExp(sEncodedChar, "g");
        s = s.replace(rex, charToDecode);
//additionaly decode the forms &lt;&gt;&amp;&quot;&apos;
        switch (charToDecode) {
        case "<":
            s = s.replace(/&lt;/g, "<");
            break;
        case ">":
            s = s.replace(/&gt;/g, ">");
            break;
        case "&":
            s = s.replace(/&amp;/g, "&");
            break;
        case "\"":
            s = s.replace(/&quot;/g, "\"");
            break;
        case "'":
            s = s.replace(/&apos;/g, "'");
            break;
        }
        return s;
    }
// Decode all encoded chars
    s = s.replace(/&[^;]+;/g,
        function($1) {
// Decode special encoding sequences
            switch ($1) {
            case "&lt;":
                return "<";
            case "&gt;":
                return ">";
            case "&amp;":
                return "&";
            case "&quot;":
                return "\"";
            case "&apos;":
                return "'";
            }
// decode numeric encoded sequences
// decimal encoded
            if ($1.match(/&#[0-9]+;/g)) {
                return _crmCharCodeToChar($1.substr(2, $1.length - 3));
            }
// hex encoded
            if ($1.match(/&#x[a-fA-F0-9]+;/g)) {
                return _crmCharCodeToChar(parseInt($1.substr(3, $1.length - 4), 16));
            }
            return $1;
        });
    return s;
}

// Converts char code into char.
function _crmCharCodeToChar(charCode) {
    if (charCode > 0xFFFF && charCode < 0x110000) {
        charCode -= 0x10000;
        return String.fromCharCode(0xD800 + (charCode >> 10), 0xDC00 + (charCode & 0x3FF));
    } else {
        return String.fromCharCode(charCode);
    }
}

// Encodes a single or all characters in a string for usage in Xml elements
// Param charToEncode is optional. If null or not passed in then all characters are encoded
function _crmXmlEncode(s, charToEncode) {
    if (IsNull(s)) {
        return s;
    } else {
        if (typeof(s) != "string") {
            s = s.toString();
        }
    }
    if (typeof(charToEncode) != "undefined" && charToEncode != null) {
//only one char needs to be encoded
        if (charToEncode.length > 1) charToEncode = charToEncode.charAt(0);
        var sEncodedChar = _XmlEncode(charToEncode);
        var rex = new RegExp(charToEncode, "g");
        return s.replace(rex, sEncodedChar);
    }
    return _surrogateAmpersandWorkaround(s, _XmlEncode);
}

function _crmHtmlEncode(s) {
    if (IsNull(s)) {
        return s;
    } else {
        if (typeof(s) != "string") {
            s = s.toString();
        }
    }
    return _surrogateAmpersandWorkaround(s, _HtmlEncode);
}

function _crmHtmlEncodeForFormatString(s) {
    if (IsNull(s)) {
        return s;
    } else {
        if (typeof(s) != "string") {
            s = s.toString();
        }
    }
    s = _surrogateAmpersandWorkaround(s, _HtmlEncode);
    return s.replace(/&#123;/g, "{").replace(/&#125;/g, "}");
}

/// <summary>
/// Encodes into HTML which is Specific for encoding the plugin trace.
/// </summary>
/// <param name="trace">Plugin trace to be encoded</param>
/// <returns>HTML Encoded string</returns>
function _crmPluginTraceHtmlEncode(s) {
    if (IsNull(s)) {
        return s;
    } else {
        if (typeof(s) != "string") {
            s = s.toString();
        }
    }
    s = _crmHtmlEncode(s); // Safely encode
    s = s.replace(/ /g, "&nbsp;"); // preserve spaces for correct indentation.
    s = s.replace(/&#9;/g, "&nbsp;&nbsp;&nbsp;&nbsp;"); // Allow \t for indentations. Safe for HTML and JS
    s = s.replace(/&#10;/g, "<br/>"); // Allow line breaks. Safe for HTML and JS
    s = s
        .replace(/&#20;/g, "&nbsp;");
// This will force any line of HTML to be displayed in a single line until hitting <br/> or </p>
    return s;
}

function _crmHtmlAttributeEncode(s) {
    if (IsNull(s)) {
        return s;
    } else {
        if (typeof(s) != "string") {
            s = s.toString();
        }
    }
    return _surrogateAmpersandWorkaround(s, _HtmlAttributeEncode);
}

function _crmXmlAttributeEncode(s) {
    if (IsNull(s)) {
        return s;
    } else {
        if (typeof(s) != "string") {
            s = s.toString();
        }
    }
    return _surrogateAmpersandWorkaround(s, _XmlAttributeEncode);
}

function _crmJavaScriptEncode(s) {
    if (IsNull(s)) {
        return s;
    } else {
        if (typeof(s) != "string") {
            s = s.toString();
        }
    }
    return _JavaScriptEncode(s);
}

function _crmVisualBasicScriptEncode(s) {
    if (IsNull(s)) {
        return s;
    } else {
        if (typeof(s) != "string") {
            s = s.toString();
        }
    }
    return _VisualBasicScriptEncode(s);
}

// When encoding surrogate characters, AntiXSS incorrectly encodes them in the format
// "&#55360;&#56579;" instead of the correct format "&#x20103;".  This function is a
// workaround for all encodings of this form.
//
// s is the string to encode.
// encodingFunction is the function used to encode the rest of the string.
function _surrogateAmpersandWorkaround(s, encodingFunction) {
// Encode surrogate pairs in Unicode scalar value
    s = s.replace(new RegExp("([\\uD800-\\uDBFF][\\uDC00-\\uDFFF])", "g"),
        function($1) {
            return "CRMEntityReferenceOpen" +
                ((($1.charCodeAt(0) - 0xD800) * 0x400) + ($1.charCodeAt(1) & 0x03FF) + 0x10000).toString(16) +
                "CRMEntityReferenceClose";
        });
// Fix issue 12224: sometimes the user just puts invalid surrogate pairs (The correct surrogate pair: Low Surrogate followed by High Surrogate).
// We need to replace the character with Replacement character #UFFFD. This character is used to replace incoming character whose value is unknown
    s = s.replace(new RegExp("[\\uD800-\\uDFFF]", "g"), '\uFFFD');
//encode whole string
    s = encodingFunction(s);
    s = s.replace(/CRMEntityReferenceOpen/g, "&#x");
    s = s.replace(/CRMEntityReferenceClose/g, ";");
    return s;
}

function CrmEncodeDecodeLibrary() {
//encoding methods
    this.CrmHtmlEncode = _crmHtmlEncode;
    this.CrmHtmlAttributeEncode = _crmHtmlAttributeEncode;
    this.CrmXmlEncode = _crmXmlEncode;
    this.CrmXmlAttributeEncode = _crmXmlAttributeEncode;
    this.CrmJavaScriptEncode = _crmJavaScriptEncode;
    this.CrmVisualBasicScriptEncode = _crmVisualBasicScriptEncode;
    this.CrmUrlEncode = _crmUrlEncode;
    this.CrmNameValueEncode = _crmNameValueEncode;
    this.CrmHtmlEncodeForFormatString = _crmHtmlEncodeForFormatString;
    this.CrmPluginTraceHtmlEncode = _crmPluginTraceHtmlEncode;
//decoding methods
    this.CrmXmlDecode = _crmXmlDecode;
//for htmldecode we reuse xmldecode since the encoding is the same
    this.CrmHtmlDecode = _crmXmlDecode;
    this.CrmUrlDecode = _crmUrlDecode;
    this.CrmNameValueDecode = _crmNameValueDecode;
}

//Use the following object for performing all encoding/decoding in CRM client side code
var CrmEncodeDecode = new CrmEncodeDecodeLibrary();

// End of CrmEncodeDecode Library functions
// ///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
// Do not change any code below this, the code below is from the AntiXss Library team
// CRM uses a wrapper for this make any adjustments to encoding decoding in the wrapper not
// in the functions below. The code below can/will be updated with latest code from the
// AntiXss Team. (The only change made to this library func is CRM SE 4330 changes to buffer the
// input strings into chunks of 500 for performance reasons without which encoding 50 K
// input takes about 13 minutes or so and with chunking it takes about 10 seconds instead.)
// CRM SE 4330 Changes can be reverted once AntiXSS team updates their tool box solution
// with our 4330 fix.
// ***********************************************************
// *
// * AntiXSS Library
// *
// ***********************************************************
//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// Changes
//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// 02-26-08: chandraa:  Fixed a performance problem of string
//                      concatenation (CRM SE 4330)
// 06-09-06: hassank:   Corrected URL REGEX
// 04-07-04: talhahm:   Added checks for null inputs
// 07-24-03: eddington: Quick port to ASP Javascript
// 03-26-03: v-michae:  Initial revision based on ASP classic
// 03-28-03: v-michae:  Initial testing of functions done.
// 06-01-03: erach:     AsUrl temporarily stubbed out for
//                      0.9 release
// 10-29-03: erach:     AsUrl implemented introduced
//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
function _HtmlEncode(strInput) {
    var c;
    var HtmlEncode = '';
    var buffer = '';
    var bufferLength = 500;
    var count = 0;
    if (strInput == null) {
        return null;
    }
    if (strInput == '') {
        return '';
    }
// 4330 - buffer the concatenated string in chunks of 500 and then add it to the larger string.
    for (var cnt = 0; cnt < strInput.length; cnt++) {
        c = strInput.charCodeAt(cnt);
        if (((c > 96) && (c < 123)) ||
            ((c > 64) && (c < 91)) ||
            (c == 32) ||
            ((c > 47) && (c < 58)) ||
            (c == 46) ||
            (c == 44) ||
            (c == 45) ||
            (c == 95)) {
            buffer += String.fromCharCode(c);
        } else {
            buffer += '&#' + c + ';';
        }
        if (++count == bufferLength) {
            HtmlEncode += buffer;
            buffer = '';
            count = 0;
        }
    }
    if (buffer.length) {
        HtmlEncode += buffer;
    }
    return HtmlEncode;
}

function _HtmlAttributeEncode(strInput) {
    var c;
    var HtmlAttributeEncode = '';
    if (strInput == null) {
        return null;
    }
    if (strInput == '') {
        return '';
    }
    for (var cnt = 0; cnt < strInput.length; cnt++) {
        c = strInput.charCodeAt(cnt);
        if (((c > 96) && (c < 123)) ||
            ((c > 64) && (c < 91)) ||
            ((c > 47) && (c < 58)) ||
            (c == 46) ||
            (c == 44) ||
            (c == 45) ||
            (c == 95)) {
            HtmlAttributeEncode = HtmlAttributeEncode + String.fromCharCode(c);
        } else {
            HtmlAttributeEncode = HtmlAttributeEncode + '&#' + c + ';';
        }
    }
    return HtmlAttributeEncode;
}

function _XmlEncode(strInput) {
// HtmlEncode will handle null string
    return _HtmlEncode(strInput);
}

function _XmlAttributeEncode(strInput) {
// EncodeHtmlAttribute will handle null string
    return _HtmlAttributeEncode(strInput);
}

function _JavaScriptEncode(strInput) {
    var c;
    var EncodeJs = '';
    if (strInput == null) {
        return null;
    }
    if (strInput == '') {
        return '';
    }
    for (var cnt = 0; cnt < strInput.length; cnt++) {
        c = strInput.charCodeAt(cnt);
        if (((c > 96) && (c < 123)) ||
            ((c > 64) && (c < 91)) ||
            (c == 32) ||
            ((c > 47) && (c < 58)) ||
            (c == 46) ||
            (c == 44) ||
            (c == 45) ||
            (c == 95)) {
            EncodeJs = EncodeJs + String.fromCharCode(c);
        } else if (c > 127) {
            EncodeJs = EncodeJs + '\\u' + OutputEncoder_TwoByteHex(c);
        } else {
            EncodeJs = EncodeJs + '\\x' + OutputEncoder_SingleByteHex(c);
        }
    }
    return '\'' + EncodeJs + '\'';
}

function _VisualBasicScriptEncode(strInput) {
    var c;
    var EncodeVbs = '';
    var bInQuotes = false;
    if (strInput == null) {
        return null;
    }
    if (strInput == '') {
        return '';
    }
    for (var cnt = 0; cnt < strInput.length; cnt++) {
        c = strInput.charCodeAt(cnt);
        if (((c > 96) && (c < 123)) ||
            ((c > 64) && (c < 91)) ||
            (c == 32) ||
            ((c > 47) && (c < 58)) ||
            (c == 46) ||
            (c == 44) ||
            (c == 45) ||
            (c == 95)) {
// do the "unencoded" ones
            if (!bInQuotes) {
                EncodeVbs = EncodeVbs + '&\"';
                bInQuotes = true;
            }
            EncodeVbs = EncodeVbs + String.fromCharCode(c);
        } else {
// do the "encoded" ones
            if (bInQuotes) {
                EncodeVbs = EncodeVbs + '\"';
                bInQuotes = false;
            }
            EncodeVbs = EncodeVbs + '&chrw(' + c + ')';
        }
    }
    if (EncodeVbs.charAt(0) == '&') {
// Remove starting '&'
        EncodeVbs = EncodeVbs.substring(1);
    }
    if (EncodeVbs.length == 0) {
// if null, add quotes
        EncodeVbs = '\"\"';
    }
    if (bInQuotes) {
//  but if we're in quotes, then close them
        EncodeVbs = EncodeVbs + '\"';
    }
    return EncodeVbs;
}

function _UrlEncode(strInput) {
    var c;
    var EncodeUrl = '';
    if (strInput == null) {
        return null;
    }
    if (strInput == '') {
        return '';
    }
    for (var cnt = 0; cnt < strInput.length; cnt++) {
        c = strInput.charCodeAt(cnt);
        if (((c > 96) && (c < 123)) ||
            ((c > 64) && (c < 91)) ||
            ((c > 47) && (c < 58)) ||
            (c == 46) ||
            (c == 45) ||
            (c == 95)) {
            EncodeUrl = EncodeUrl + String.fromCharCode(c);
        } else if (c > 127) {
            EncodeUrl = EncodeUrl + '%u' + OutputEncoder_TwoByteHex(c);
        } else {
            EncodeUrl = EncodeUrl + '%' + OutputEncoder_SingleByteHex(c);
        }
    }
    return EncodeUrl;
}

function OutputEncoder_SingleByteHex(charC) {
    if (charC == null) {
        return '';
    }
    var SingleByteHex = charC.toString(16);
    for (var cnt = SingleByteHex.length; cnt < 2; cnt++) {
        SingleByteHex = "0" + SingleByteHex;
    }
    return SingleByteHex;
}

function OutputEncoder_TwoByteHex(charC) {
    if (charC == null) {
        return '';
    }
    var TwoByteHex = charC.toString(16);
    for (var cnt = TwoByteHex.length; cnt < 4; cnt++) {
        TwoByteHex = "0" + TwoByteHex;
    }
    return TwoByteHex;
}

//NOTE: do not use this directly use the CrmEncodeDecode wrapper
function AntiXss() {
    this.HtmlEncode = _HtmlEncode;
    this.HtmlAttributeEncode = _HtmlAttributeEncode;
    this.XmlEncode = _XmlEncode;
    this.XmlAttributeEncode = _XmlAttributeEncode;
    this.JavaScriptEncode = _JavaScriptEncode;
    this.VisualBasicScriptEncode = _VisualBasicScriptEncode;
    this.UrlEncode = _UrlEncode;
}

var AntiXssLibrary = new AntiXss();
// Upto this point is code from the AntiXss library team, do not change any code above this
//////////////////////////////////////////////////////////////////////////////////////////////////
/*!
This file is based on or incorporates material from the projects listed below (Third Party IP). The original copyright notice and the license under which Microsoft received such Third Party IP, are set forth below. Such licenses and notices are provided for informational purposes only. Microsoft licenses the Third Party IP to you under the licensing terms for the Microsoft product. Microsoft reserves all other rights not expressly granted under this agreement, whether by implication, estoppel or otherwise.
moment.js 2.9.0
Tim Wood, Iskren Chernev, Moment.js contributors
Provided for Informational Purposes Only
Apache 2.0 License
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions and limitations under the License.
Adding the following copyright attribution in the header of moment.js 2.8.3 file or near a section of code prefaced by the citation:
from�http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere:
*/
(function(undefined) {
/************************************
Constants
************************************/
    var moment,
        VERSION = '2.9.0',
// the global-scope this is NOT the global object in Node.js
        globalScope = (typeof global !== 'undefined' && (typeof window === 'undefined' || window === global.window))
            ? global
            : this,
        oldGlobalMoment,
        round = Math.round,
        hasOwnProperty = Object.prototype.hasOwnProperty,
        i,
        YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,
// internal storage for locale config files
        locales = {},
// extra moment internal properties (plugins register props here)
        momentProperties = [],
// check for nodeJS
        hasModule = (typeof module !== 'undefined' && module && module.exports),
// ASP.NET json date format regex
        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
        aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        isoDurationRegex =
            /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,
// format tokens
        formattingTokens =
            /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
// parsing token regexes
        parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
        parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
        parseTokenOneToFourDigits = /\d{1,4}/, // 0 - 9999
        parseTokenOneToSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
        parseTokenDigits = /\d+/, // nonzero number of digits
        parseTokenWord =
            /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        parseTokenT = /T/i, // T (ISO separator)
        parseTokenOffsetMs = /[\+\-]?\d+/, // 1234567890123
        parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
//strict parsing regexes
        parseTokenOneDigit = /\d/, // 0 - 9
        parseTokenTwoDigits = /\d\d/, // 00 - 99
        parseTokenThreeDigits = /\d{3}/, // 000 - 999
        parseTokenFourDigits = /\d{4}/, // 0000 - 9999
        parseTokenSixDigits = /[+-]?\d{6}/, // -999,999 - 999,999
        parseTokenSignedNumber = /[+-]?\d+/, // -inf - inf
// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
        isoRegex =
            /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',
        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
            ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
            ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d{2}/],
            ['YYYY-DDD', /\d{4}-\d{3}/]
        ],
// iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
            ['HH:mm', /(T| )\d\d:\d\d/],
            ['HH', /(T| )\d\d/]
        ],
// timezone chunker '+10:00' > ['10', '00'] or '-1530' > ['-', '15', '30']
        parseTimezoneChunker = /([\+\-]|\d\d)/gi,
// getter and setter names
        proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
        unitMillisecondFactors = {
            'Milliseconds': 1,
            'Seconds': 1e3,
            'Minutes': 6e4,
            'Hours': 36e5,
            'Days': 864e5,
            'Months': 2592e6,
            'Years': 31536e6
        },
        unitAliases = {
            ms: 'millisecond',
            s: 'second',
            m: 'minute',
            h: 'hour',
            d: 'day',
            D: 'date',
            w: 'week',
            W: 'isoWeek',
            M: 'month',
            Q: 'quarter',
            y: 'year',
            DDD: 'dayOfYear',
            e: 'weekday',
            E: 'isoWeekday',
            gg: 'weekYear',
            GG: 'isoWeekYear'
        },
        camelFunctions = {
            dayofyear: 'dayOfYear',
            isoweekday: 'isoWeekday',
            isoweek: 'isoWeek',
            weekyear: 'weekYear',
            isoweekyear: 'isoWeekYear'
        },
// format function strings
        formatFunctions = {},
// default relative time thresholds
        relativeTimeThresholds = {
            s: 45, // seconds to minute
            m: 45, // minutes to hour
            h: 22, // hours to day
            d: 26, // days to month
            M: 11 // months to year
        },
// tokens to ordinalize and pad
        ordinalizeTokens = 'DDD w W M D d'.split(' '),
        paddedTokens = 'M D H h m s w W'.split(' '),
        formatTokenFunctions = {
            M: function() {
                return this.month() + 1;
            },
            MMM: function(format) {
                return this.localeData().monthsShort(this, format);
            },
            MMMM: function(format) {
                return this.localeData().months(this, format);
            },
            D: function() {
                return this.date();
            },
            DDD: function() {
                return this.dayOfYear();
            },
            d: function() {
                return this.day();
            },
            dd: function(format) {
                return this.localeData().weekdaysMin(this, format);
            },
            ddd: function(format) {
                return this.localeData().weekdaysShort(this, format);
            },
            dddd: function(format) {
                return this.localeData().weekdays(this, format);
            },
            w: function() {
                return this.week();
            },
            W: function() {
                return this.isoWeek();
            },
            YY: function() {
                return leftZeroFill(this.year() % 100, 2);
            },
            YYYY: function() {
                return leftZeroFill(this.year(), 4);
            },
            YYYYY: function() {
                return leftZeroFill(this.year(), 5);
            },
            YYYYYY: function() {
                var y = this.year(), sign = y >= 0 ? '+' : '-';
                return sign + leftZeroFill(Math.abs(y), 6);
            },
            gg: function() {
                return leftZeroFill(this.weekYear() % 100, 2);
            },
            gggg: function() {
                return leftZeroFill(this.weekYear(), 4);
            },
            ggggg: function() {
                return leftZeroFill(this.weekYear(), 5);
            },
            GG: function() {
                return leftZeroFill(this.isoWeekYear() % 100, 2);
            },
            GGGG: function() {
                return leftZeroFill(this.isoWeekYear(), 4);
            },
            GGGGG: function() {
                return leftZeroFill(this.isoWeekYear(), 5);
            },
            e: function() {
                return this.weekday();
            },
            E: function() {
                return this.isoWeekday();
            },
            a: function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), true);
            },
            A: function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), false);
            },
            H: function() {
                return this.hours();
            },
            h: function() {
                return this.hours() % 12 || 12;
            },
            m: function() {
                return this.minutes();
            },
            s: function() {
                return this.seconds();
            },
            S: function() {
                return toInt(this.milliseconds() / 100);
            },
            SS: function() {
                return leftZeroFill(toInt(this.milliseconds() / 10), 2);
            },
            SSS: function() {
                return leftZeroFill(this.milliseconds(), 3);
            },
            SSSS: function() {
                return leftZeroFill(this.milliseconds(), 3);
            },
            Z: function() {
                var a = this.utcOffset(),
                    b = '+';
                if (a < 0) {
                    a = -a;
                    b = '-';
                }
                return b + leftZeroFill(toInt(a / 60), 2) + ':' + leftZeroFill(toInt(a) % 60, 2);
            },
            ZZ: function() {
                var a = this.utcOffset(),
                    b = '+';
                if (a < 0) {
                    a = -a;
                    b = '-';
                }
                return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
            },
            z: function() {
                return this.zoneAbbr();
            },
            zz: function() {
                return this.zoneName();
            },
            x: function() {
                return this.valueOf();
            },
            X: function() {
                return this.unix();
            },
            Q: function() {
                return this.quarter();
            }
        },
        deprecations = {},
        lists = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'],
        updateInProgress = false;

// Pick the first defined of two or three arguments. dfl comes from
// default.
    function dfl(a, b, c) {
        switch (arguments.length) {
        case 2:
            return a != null ? a : b;
        case 3:
            return a != null ? a : b != null ? b : c;
        default:
            throw new Error('Implement me');
        }
    }

    function hasOwnProp(a, b) {
        return hasOwnProperty.call(a, b);
    }

    function defaultParsingFlags() {
// We need to deep clone this object, and es5 standard is not very
// helpful.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false
        };
    }

    function printMsg(msg) {
        if (moment.suppressDeprecationWarnings === false &&
            typeof console !== 'undefined' &&
            console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function() {
                if (firstTime) {
                    printMsg(msg);
                    firstTime = false;
                }
                return fn.apply(this, arguments);
            },
            fn);
    }

    function deprecateSimple(name, msg) {
        if (!deprecations[name]) {
            printMsg(msg);
            deprecations[name] = true;
        }
    }

    function padToken(func, count) {
        return function(a) {
            return leftZeroFill(func.call(this, a), count);
        };
    }

    function ordinalizeToken(func, period) {
        return function(a) {
            return this.localeData().ordinal(func.call(this, a), period);
        };
    }

    function monthDiff(a, b) {
// difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
// b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2,
            adjust;
        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
// linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
// linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }
        return -(wholeMonthDiff + adjust);
    }

    while (ordinalizeTokens.length) {
        i = ordinalizeTokens.pop();
        formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
    }
    while (paddedTokens.length) {
        i = paddedTokens.pop();
        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
    }
    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);

    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;
        if (meridiem == null) {
// nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
// Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
// thie is not supposed to happen
            return hour;
        }
    }

/************************************
Constructors
************************************/
    function Locale() {
    }

// Moment prototype object
    function Moment(config, skipOverflow) {
        if (skipOverflow !== false) {
            checkOverflow(config);
        }
        copyConfig(this, config);
        this._d = new Date(+config._d);
// Prevent infinite loop in case updateOffset creates new moment
// objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            moment.updateOffset(this);
            updateInProgress = false;
        }
    }

// Duration Constructor
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;
// representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
// Because of dateAddRemove treats 24 hours as different from a
// day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
// It is impossible translate months into days without knowing
// which months you are are talking about, so we have to store
// it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;
        this._data = {};
        this._locale = moment.localeData();
        this._bubble();
    }

/************************************
Helpers
************************************/
    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }
        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }
        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }
        return a;
    }

    function copyConfig(to, from) {
        var i, prop, val;
        if (typeof from._isAMomentObject !== 'undefined') {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (typeof from._i !== 'undefined') {
            to._i = from._i;
        }
        if (typeof from._f !== 'undefined') {
            to._f = from._f;
        }
        if (typeof from._l !== 'undefined') {
            to._l = from._l;
        }
        if (typeof from._strict !== 'undefined') {
            to._strict = from._strict;
        }
        if (typeof from._tzm !== 'undefined') {
            to._tzm = from._tzm;
        }
        if (typeof from._isUTC !== 'undefined') {
            to._isUTC = from._isUTC;
        }
        if (typeof from._offset !== 'undefined') {
            to._offset = from._offset;
        }
        if (typeof from._pf !== 'undefined') {
            to._pf = from._pf;
        }
        if (typeof from._locale !== 'undefined') {
            to._locale = from._locale;
        }
        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (typeof val !== 'undefined') {
                    to[prop] = val;
                }
            }
        }
        return to;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

// left zero fill a number
// see http://jsperf.com/left-zero-filling for performance comparison
    function leftZeroFill(number, targetLength, forceSign) {
        var output = '' + Math.abs(number),
            sign = number >= 0;
        while (output.length < targetLength) {
            output = '0' + output;
        }
        return (sign ? (forceSign ? '+' : '') : '-') + output;
    }

    function positiveMomentsDifference(base, other) {
        var res = { milliseconds: 0, months: 0 };
        res.months = other.month() -
            base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }
        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));
        return res;
    }

    function momentsDifference(base, other) {
        var res;
        other = makeAs(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }
        return res;
    }

// TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function(val, period) {
            var dur, tmp;
//invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name,
                    'moment().' +
                    name +
                    '(period, number) is deprecated. Please use moment().' +
                    name +
                    '(number, period).');
                tmp = val;
                val = period;
                period = tmp;
            }
            val = typeof val === 'string' ? +val : val;
            dur = moment.duration(val, period);
            addOrSubtractDurationFromMoment(this, dur, direction);
            return this;
        };
    }

    function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;
        updateOffset = updateOffset == null ? true : updateOffset;
        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            rawSetter(mom, 'Date', rawGetter(mom, 'Date') + days * isAdding);
        }
        if (months) {
            rawMonthSetter(mom, rawGetter(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            moment.updateOffset(mom, days || months);
        }
    }

// check if is an array
    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return Object.prototype.toString.call(input) === '[object Date]' ||
            input instanceof Date;
    }

// compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function normalizeUnits(units) {
        if (units) {
            var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
            units = unitAliases[units] || camelFunctions[lowered] || lowered;
        }
        return units;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;
        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }
        return normalizedInput;
    }

    function makeList(field) {
        var count, setter;
        if (field.indexOf('week') === 0) {
            count = 7;
            setter = 'day';
        } else if (field.indexOf('month') === 0) {
            count = 12;
            setter = 'month';
        } else {
            return;
        }
        moment[field] = function(format, index) {
            var i,
                getter,
                method = moment._locale[field],
                results = [];
            if (typeof format === 'number') {
                index = format;
                format = undefined;
            }
            getter = function(i) {
                var m = moment().utc().set(setter, i);
                return method.call(moment._locale, m, format || '');
            };
            if (index != null) {
                return getter(index);
            } else {
                for (i = 0; i < count; i++) {
                    results.push(getter(i));
                }
                return results;
            }
        };
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;
        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            if (coercedNumber >= 0) {
                value = Math.floor(coercedNumber);
            } else {
                value = Math.ceil(coercedNumber);
            }
        }
        return value;
    }

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    function weeksInYear(year, dow, doy) {
        return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week;
    }

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function checkOverflow(m) {
        var overflow;
        if (m._a && m._pf.overflow === -2) {
            overflow =
                m._a[MONTH] < 0 || m._a[MONTH] > 11
                ? MONTH
                : m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH])
                ? DATE
                : m._a[HOUR] < 0 ||
                m._a[HOUR] > 24 ||
                (m._a[HOUR] === 24 &&
                (m._a[MINUTE] !== 0 ||
                    m._a[SECOND] !== 0 ||
                    m._a[MILLISECOND] !== 0))
                ? HOUR
                : m._a[MINUTE] < 0 || m._a[MINUTE] > 59
                ? MINUTE
                : m._a[SECOND] < 0 || m._a[SECOND] > 59
                ? SECOND
                : m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND : -1;
            if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            m._pf.overflow = overflow;
        }
    }

    function isValid(m) {
        if (m._isValid == null) {
            m._isValid = !isNaN(m._d.getTime()) &&
                m._pf.overflow < 0 &&
                !m._pf.empty &&
                !m._pf.invalidMonth &&
                !m._pf.nullInput &&
                !m._pf.invalidFormat &&
                !m._pf.userInvalidated;
            if (m._strict) {
                m._isValid = m._isValid &&
                    m._pf.charsLeftOver === 0 &&
                    m._pf.unusedTokens.length === 0 &&
                    m._pf.bigHour === undefined;
            }
        }
        return m._isValid;
    }

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;
        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
//the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        if (!locales[name] && hasModule) {
            try {
                oldLocale = moment.locale();
                require('./locale/' + name);
// because defineLocale currently also sets the global locale, we want to undo that for lazy loaded locales
                moment.locale(oldLocale);
            } catch (e) {
            }
        }
        return locales[name];
    }

// Return a moment from input, that is local/utc/utcOffset equivalent to
// model.
    function makeAs(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (moment.isMoment(input) || isDate(input) ? +input : +moment(input)) - (+res);
// Use low-level api, because this fn is low-level api.
            res._d.setTime(+res._d + diff);
            moment.updateOffset(res, false);
            return res;
        } else {
            return moment(input).local();
        }
    }

/************************************
Locale
************************************/
    extend(Locale.prototype,
    {
        set: function(config) {
            var prop, i;
            for (i in config) {
                prop = config[i];
                if (typeof prop === 'function') {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
// Lenient ordinal parsing accepts just a number in addition to
// number + (possibly) stuff coming from _ordinalParseLenient.
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + /\d{1,2}/.source);
        },
        _months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        months: function(m) {
            return this._months[m.month()];
        },
        _monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        monthsShort: function(m) {
            return this._monthsShort[m.month()];
        },
        monthsParse: function(monthName, format, strict) {
            var i, mom, regex;
            if (!this._monthsParse) {
                this._monthsParse = [];
                this._longMonthsParse = [];
                this._shortMonthsParse = [];
            }
            for (i = 0; i < 12; i++) {
// make the regex if we don't have it already
                mom = moment.utc([2000, i]);
                if (strict && !this._longMonthsParse[i]) {
                    this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                    this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
                }
                if (!strict && !this._monthsParse[i]) {
                    regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                    this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
// test the regex
                if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                    return i;
                } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                    return i;
                } else if (!strict && this._monthsParse[i].test(monthName)) {
                    return i;
                }
            }
        },
        _weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdays: function(m) {
            return this._weekdays[m.day()];
        },
        _weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysShort: function(m) {
            return this._weekdaysShort[m.day()];
        },
        _weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        weekdaysMin: function(m) {
            return this._weekdaysMin[m.day()];
        },
        weekdaysParse: function(weekdayName) {
            var i, mom, regex;
            if (!this._weekdaysParse) {
                this._weekdaysParse = [];
            }
            for (i = 0; i < 7; i++) {
// make the regex if we don't have it already
                if (!this._weekdaysParse[i]) {
                    mom = moment([2000, 1]).day(i);
                    regex = '^' +
                        this.weekdays(mom, '') +
                        '|^' +
                        this.weekdaysShort(mom, '') +
                        '|^' +
                        this.weekdaysMin(mom, '');
                    this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
// test the regex
                if (this._weekdaysParse[i].test(weekdayName)) {
                    return i;
                }
            }
        },
        _longDateFormat: {
            LTS: 'h:mm:ss A',
            LT: 'h:mm A',
            L: 'MM/DD/YYYY',
            LL: 'MMMM D, YYYY',
            LLL: 'MMMM D, YYYY LT',
            LLLL: 'dddd, MMMM D, YYYY LT'
        },
        longDateFormat: function(key) {
            var output = this._longDateFormat[key];
            if (!output && this._longDateFormat[key.toUpperCase()]) {
                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,
                    function(val) {
                        return val.slice(1);
                    });
                this._longDateFormat[key] = output;
            }
            return output;
        },
        isPM: function(input) {
// IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
// Using charAt should be more compatible.
            return ((input + '').toLowerCase().charAt(0) === 'p');
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'pm' : 'PM';
            } else {
                return isLower ? 'am' : 'AM';
            }
        },
        _calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L'
        },
        calendar: function(key, mom, now) {
            var output = this._calendar[key];
            return typeof output === 'function' ? output.apply(mom, [now]) : output;
        },
        _relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years'
        },
        relativeTime: function(number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return (typeof output === 'function')
                ? output(number, withoutSuffix, string, isFuture)
                : output.replace(/%d/i, number);
        },
        pastFuture: function(diff, output) {
            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
            return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
        },
        ordinal: function(number) {
            return this._ordinal.replace('%d', number);
        },
        _ordinal: '%d',
        _ordinalParse: /\d{1,2}/,
        preparse: function(string) {
            return string;
        },
        postformat: function(string) {
            return string;
        },
        week: function(mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week;
        },
        _week: {
            dow: 0, // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 1st is the first week of the year.
        },
        firstDayOfWeek: function() {
            return this._week.dow;
        },
        firstDayOfYear: function() {
            return this._week.doy;
        },
        _invalidDate: 'Invalid date',
        invalidDate: function() {
            return this._invalidDate;
        }
    });

/************************************
Formatting
************************************/
    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;
        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }
        return function(mom) {
            var output = '';
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

// format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }
        format = expandFormat(format, m.localeData());
        if (!formatFunctions[format]) {
            formatFunctions[format] = makeFormatFunction(format);
        }
        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }
        return format;
    }

/************************************
Parsing
************************************/
// get the regex to find the next token
    function getParseRegexForToken(token, config) {
        var a, strict = config._strict;
        switch (token) {
        case 'Q':
            return parseTokenOneDigit;
        case 'DDDD':
            return parseTokenThreeDigits;
        case 'YYYY':
        case 'GGGG':
        case 'gggg':
            return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
        case 'Y':
        case 'G':
        case 'g':
            return parseTokenSignedNumber;
        case 'YYYYYY':
        case 'YYYYY':
        case 'GGGGG':
        case 'ggggg':
            return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
        case 'S':
            if (strict) {
                return parseTokenOneDigit;
            }
/* falls through */
        case 'SS':
            if (strict) {
                return parseTokenTwoDigits;
            }
/* falls through */
        case 'SSS':
            if (strict) {
                return parseTokenThreeDigits;
            }
/* falls through */
        case 'DDD':
            return parseTokenOneToThreeDigits;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
            return parseTokenWord;
        case 'a':
        case 'A':
            return config._locale._meridiemParse;
        case 'x':
            return parseTokenOffsetMs;
        case 'X':
            return parseTokenTimestampMs;
        case 'Z':
        case 'ZZ':
            return parseTokenTimezone;
        case 'T':
            return parseTokenT;
        case 'SSSS':
            return parseTokenDigits;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'GG':
        case 'gg':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'ww':
        case 'WW':
            return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
        case 'w':
        case 'W':
        case 'e':
        case 'E':
            return parseTokenOneOrTwoDigits;
        case 'Do':
            return strict ? config._locale._ordinalParse : config._locale._ordinalParseLenient;
        default:
            a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), 'i'));
            return a;
        }
    }

    function utcOffsetFromString(string) {
        string = string || '';
        var possibleTzMatches = (string.match(parseTokenTimezone) || []),
            tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
            parts = (tzChunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
            minutes = +(parts[1] * 60) + toInt(parts[2]);
        return parts[0] === '+' ? minutes : -minutes;
    }

// function to convert string input to date
    function addTimeToArrayFromToken(token, input, config) {
        var a, datePartArray = config._a;
        switch (token) {
// QUARTER
        case 'Q':
            if (input != null) {
                datePartArray[MONTH] = (toInt(input) - 1) * 3;
            }
            break;
// MONTH
        case 'M': // fall through to MM
        case 'MM':
            if (input != null) {
                datePartArray[MONTH] = toInt(input) - 1;
            }
            break;
        case 'MMM': // fall through to MMMM
        case 'MMMM':
            a = config._locale.monthsParse(input, token, config._strict);
// if we didn't find a month name, mark the date as invalid.
            if (a != null) {
                datePartArray[MONTH] = a;
            } else {
                config._pf.invalidMonth = input;
            }
            break;
// DAY OF MONTH
        case 'D': // fall through to DD
        case 'DD':
            if (input != null) {
                datePartArray[DATE] = toInt(input);
            }
            break;
        case 'Do':
            if (input != null) {
                datePartArray[DATE] = toInt(parseInt(
                    input.match(/\d{1,2}/)[0],
                    10));
            }
            break;
// DAY OF YEAR
        case 'DDD': // fall through to DDDD
        case 'DDDD':
            if (input != null) {
                config._dayOfYear = toInt(input);
            }
            break;
// YEAR
        case 'YY':
            datePartArray[YEAR] = moment.parseTwoDigitYear(input);
            break;
        case 'YYYY':
        case 'YYYYY':
        case 'YYYYYY':
            datePartArray[YEAR] = toInt(input);
            break;
// AM / PM
        case 'a': // fall through to A
        case 'A':
            config._meridiem = input;
// config._isPm = config._locale.isPM(input);
            break;
// HOUR
        case 'h': // fall through to hh
        case 'hh':
            config._pf.bigHour = true;
/* falls through */
        case 'H': // fall through to HH
        case 'HH':
            datePartArray[HOUR] = toInt(input);
            break;
// MINUTE
        case 'm': // fall through to mm
        case 'mm':
            datePartArray[MINUTE] = toInt(input);
            break;
// SECOND
        case 's': // fall through to ss
        case 'ss':
            datePartArray[SECOND] = toInt(input);
            break;
// MILLISECOND
        case 'S':
        case 'SS':
        case 'SSS':
        case 'SSSS':
            datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
            break;
// UNIX OFFSET (MILLISECONDS)
        case 'x':
            config._d = new Date(toInt(input));
            break;
// UNIX TIMESTAMP WITH MS
        case 'X':
            config._d = new Date(parseFloat(input) * 1000);
            break;
// TIMEZONE
        case 'Z': // fall through to ZZ
        case 'ZZ':
            config._useUTC = true;
            config._tzm = utcOffsetFromString(input);
            break;
// WEEKDAY - human
        case 'dd':
        case 'ddd':
        case 'dddd':
            a = config._locale.weekdaysParse(input);
// if we didn't get a weekday name, mark the date as invalid
            if (a != null) {
                config._w = config._w || {};
                config._w['d'] = a;
            } else {
                config._pf.invalidWeekday = input;
            }
            break;
// WEEK, WEEK DAY - numeric
        case 'w':
        case 'ww':
        case 'W':
        case 'WW':
        case 'd':
        case 'e':
        case 'E':
            token = token.substr(0, 1);
/* falls through */
        case 'gggg':
        case 'GGGG':
        case 'GGGGG':
            token = token.substr(0, 2);
            if (input) {
                config._w = config._w || {};
                config._w[token] = toInt(input);
            }
            break;
        case 'gg':
        case 'GG':
            config._w = config._w || {};
            config._w[token] = moment.parseTwoDigitYear(input);
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp;
        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;
// TODO: We need to take the current isoWeekYear, but that depends on
// how we interpret now (local, utc, fixed offset). So create
// a now version of current config (take local/utc/offset flags, and
// create now).
            weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
            week = dfl(w.W, 1);
            weekday = dfl(w.E, 1);
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;
            weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
            week = dfl(w.w, 1);
            if (w.d != null) {
// weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < dow) {
                    ++week;
                }
            } else if (w.e != null) {
// local weekday -- counting starts from begining of week
                weekday = w.e + dow;
            } else {
// default to begining of week
                weekday = dow;
            }
        }
        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
    function dateFromConfig(config) {
        var i, date, input = [], currentDate, yearToUse;
        if (config._d) {
            return;
        }
        currentDate = currentDateArray(config);
//compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }
//if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);
            if (config._dayOfYear > daysInYear(yearToUse)) {
                config._pf._overflowDayOfYear = true;
            }
            date = makeUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }
// Default to current date.
// * if no year, month, day of month are given, default to today
// * if day of month is given, default month and year
// * if month is given, default only year
// * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }
// Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }
// Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }
        config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
// Apply timezone offset from input. The actual utcOffset can be changed
// with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }
        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
    }

    function dateFromObject(config) {
        var normalizedInput;
        if (config._d) {
            return;
        }
        normalizedInput = normalizeObjectUnits(config._i);
        config._a = [
            normalizedInput.year,
            normalizedInput.month,
            normalizedInput.day || normalizedInput.date,
            normalizedInput.hour,
            normalizedInput.minute,
            normalizedInput.second,
            normalizedInput.millisecond
        ];
        dateFromConfig(config);
    }

    function currentDateArray(config) {
        var now = new Date();
        if (config._useUTC) {
            return [
                now.getUTCFullYear(),
                now.getUTCMonth(),
                now.getUTCDate()
            ];
        } else {
            return [now.getFullYear(), now.getMonth(), now.getDate()];
        }
    }

// date from string and format string
    function makeDateFromStringAndFormat(config) {
        if (config._f === moment.ISO_8601) {
            parseISO(config);
            return;
        }
        config._a = [];
        config._pf.empty = true;
// This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i,
            parsedInput,
            tokens,
            token,
            skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;
        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    config._pf.unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
// don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    config._pf.empty = false;
                } else {
                    config._pf.unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) {
                config._pf.unusedTokens.push(token);
            }
        }
// add remaining unparsed input length to the string
        config._pf.charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            config._pf.unusedInput.push(string);
        }
// clear _12h flag if hour is <= 12
        if (config._pf.bigHour === true && config._a[HOUR] <= 12) {
            config._pf.bigHour = undefined;
        }
// handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale,
            config._a[HOUR],
            config._meridiem);
        dateFromConfig(config);
        checkOverflow(config);
    }

    function unescapeFormat(s) {
        return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
            function(matched, p1, p2, p3, p4) {
                return p1 || p2 || p3 || p4;
            });
    }

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function regexpEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

// date from string and array of format strings
    function makeDateFromStringAndArray(config) {
        var tempConfig,
            bestMoment,
            scoreToBeat,
            i,
            currentScore;
        if (config._f.length === 0) {
            config._pf.invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }
        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._pf = defaultParsingFlags();
            tempConfig._f = config._f[i];
            makeDateFromStringAndFormat(tempConfig);
            if (!isValid(tempConfig)) {
                continue;
            }
// if there is any input that was not parsed add a penalty for that format
            currentScore += tempConfig._pf.charsLeftOver;
//or tokens
            currentScore += tempConfig._pf.unusedTokens.length * 10;
            tempConfig._pf.score = currentScore;
            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }
        extend(config, bestMoment || tempConfig);
    }

// date from iso format
    function parseISO(config) {
        var i,
            l,
            string = config._i,
            match = isoRegex.exec(string);
        if (match) {
            config._pf.iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(string)) {
// match[5] should be 'T' or undefined
                    config._f = isoDates[i][0] + (match[6] || ' ');
                    break;
                }
            }
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(string)) {
                    config._f += isoTimes[i][0];
                    break;
                }
            }
            if (string.match(parseTokenTimezone)) {
                config._f += 'Z';
            }
            makeDateFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

// date from iso format or fallback
    function makeDateFromString(config) {
        parseISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            moment.createFromInputFallback(config);
        }
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function makeDateFromInput(config) {
        var input = config._i, matched;
        if (input === undefined) {
            config._d = new Date();
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if ((matched = aspNetJsonRegex.exec(input)) !== null) {
            config._d = new Date(+matched[1]);
        } else if (typeof input === 'string') {
            makeDateFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0),
                function(obj) {
                    return parseInt(obj, 10);
                });
            dateFromConfig(config);
        } else if (typeof (input) === 'object') {
            dateFromObject(config);
        } else if (typeof (input) === 'number') {
// from milliseconds
            config._d = new Date(input);
        } else {
            moment.createFromInputFallback(config);
        }
    }

    function makeDate(y, m, d, h, M, s, ms) {
//can't just apply() to create a date:
//http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);
//the date constructor doesn't accept years < 1970
        if (y < 1970) {
            date.setFullYear(y);
        }
        return date;
    }

    function makeUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 1970) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    function parseWeekday(input, locale) {
        if (typeof input === 'string') {
            if (!isNaN(input)) {
                input = parseInt(input, 10);
            } else {
                input = locale.weekdaysParse(input);
                if (typeof input !== 'number') {
                    return null;
                }
            }
        }
        return input;
    }

/************************************
Relative Time
************************************/
// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime(posNegDuration, withoutSuffix, locale) {
        var duration = moment.duration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            years = round(duration.as('y')),
            args = seconds < relativeTimeThresholds.s && ['s', seconds] ||
                minutes === 1 && ['m'] ||
                minutes < relativeTimeThresholds.m && ['mm', minutes] ||
                hours === 1 && ['h'] ||
                hours < relativeTimeThresholds.h && ['hh', hours] ||
                days === 1 && ['d'] ||
                days < relativeTimeThresholds.d && ['dd', days] ||
                months === 1 && ['M'] ||
                months < relativeTimeThresholds.M && ['MM', months] ||
                years === 1 && ['y'] ||
                ['yy', years];
        args[2] = withoutSuffix;
        args[3] = +posNegDuration > 0;
        args[4] = locale;
        return substituteTimeAgo.apply({}, args);
    }

/************************************
Week of Year
************************************/
// firstDayOfWeek       0 = sun, 6 = sat
//                      the day of the week that starts the week
//                      (usually sunday or monday)
// firstDayOfWeekOfYear 0 = sun, 6 = sat
//                      the first week is the week that contains the first
//                      of this day of the week
//                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;
        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }
        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }
        adjustedMoment = moment(mom).add(daysToDayOfWeek, 'd');
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }

//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var d = makeUTCDate(year, 0, 1).getUTCDay(), daysToAdd, dayOfYear;
        d = d === 0 ? 7 : d;
        weekday = weekday != null ? weekday : firstDayOfWeek;
        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;
        return {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ? dayOfYear : daysInYear(year - 1) + dayOfYear
        };
    }

/************************************
Top Level Functions
************************************/
    function makeMoment(config) {
        var input = config._i,
            format = config._f,
            res;
        config._locale = config._locale || moment.localeData(config._l);
        if (input === null || (format === undefined && input === '')) {
            return moment.invalid({ nullInput: true });
        }
        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }
        if (moment.isMoment(input)) {
            return new Moment(input, true);
        } else if (format) {
            if (isArray(format)) {
                makeDateFromStringAndArray(config);
            } else {
                makeDateFromStringAndFormat(config);
            }
        } else {
            makeDateFromInput(config);
        }
        res = new Moment(config);
        if (res._nextDay) {
// Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }
        return res;
    }

    moment = function(input, format, locale, strict) {
        var c;
        if (typeof (locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
// object construction must be done this way.
// https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._i = input;
        c._f = format;
        c._l = locale;
        c._strict = strict;
        c._isUTC = false;
        c._pf = defaultParsingFlags();
        return makeMoment(c);
    };
    moment.suppressDeprecationWarnings = false;
    moment.createFromInputFallback = deprecate(
        'moment construction falls back to js Date. This is ' +
        'discouraged and will be removed in upcoming major ' +
        'release. Please refer to ' +
        'https://github.com/moment/moment/issues/1407 for more info.',
        function(config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return moment();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    moment.min = function() {
        var args = [].slice.call(arguments, 0);
        return pickBy('isBefore', args);
    };
    moment.max = function() {
        var args = [].slice.call(arguments, 0);
        return pickBy('isAfter', args);
    };
// creating with utc
    moment.utc = function(input, format, locale, strict) {
        var c;
        if (typeof (locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
// object construction must be done this way.
// https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._useUTC = true;
        c._isUTC = true;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        c._pf = defaultParsingFlags();
        return makeMoment(c).utc();
    };
// creating with unix timestamp (in seconds)
    moment.unix = function(input) {
        return moment(input * 1000);
    };
// duration
    moment.duration = function(input, key) {
        var duration = input,
// matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            parseIso,
            diffRes;
        if (moment.isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = isoDurationRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            parseIso = function(inp) {
// We'd normally use ~~inp for this, but unfortunately it also
// converts floats to ints.
// inp may be undefined, so careful calling replace on it.
                var res = inp && parseFloat(inp.replace(',', '.'));
// apply sign while we're at it
                return (isNaN(res) ? 0 : res) * sign;
            };
            duration = {
                y: parseIso(match[2]),
                M: parseIso(match[3]),
                d: parseIso(match[4]),
                h: parseIso(match[5]),
                m: parseIso(match[6]),
                s: parseIso(match[7]),
                w: parseIso(match[8])
            };
        } else if (duration == null) { // checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' &&
            ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(moment(duration.from), moment(duration.to));
            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }
        ret = new Duration(duration);
        if (moment.isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }
        return ret;
    };
// version number
    moment.version = VERSION;
// default format
    moment.defaultFormat = isoFormat;
// constant that refers to the ISO standard
    moment.ISO_8601 = function() {};
// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
    moment.momentProperties = momentProperties;
// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
    moment.updateOffset = function() {};
// This function allows you to set a threshold for relative time strings
    moment.relativeTimeThreshold = function(threshold, limit) {
        if (relativeTimeThresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return relativeTimeThresholds[threshold];
        }
        relativeTimeThresholds[threshold] = limit;
        return true;
    };
    moment.lang = deprecate(
        'moment.lang is deprecated. Use moment.locale instead.',
        function(key, value) {
            return moment.locale(key, value);
        }
    );
// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
    moment.locale = function(key, values) {
        var data;
        if (key) {
            if (typeof (values) !== 'undefined') {
                data = moment.defineLocale(key, values);
            } else {
                data = moment.localeData(key);
            }
            if (data) {
                moment.duration._locale = moment._locale = data;
            }
        }
        return moment._locale._abbr;
    };
    moment.defineLocale = function(name, values) {
        if (values !== null) {
            values.abbr = name;
            if (!locales[name]) {
                locales[name] = new Locale();
            }
            locales[name].set(values);
// backwards compat for now: also set the locale
            moment.locale(name);
            return locales[name];
        } else {
// useful for testing
            delete locales[name];
            return null;
        }
    };
    moment.langData = deprecate(
        'moment.langData is deprecated. Use moment.localeData instead.',
        function(key) {
            return moment.localeData(key);
        }
    );
// returns locale data
    moment.localeData = function(key) {
        var locale;
        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }
        if (!key) {
            return moment._locale;
        }
        if (!isArray(key)) {
//short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }
        return chooseLocale(key);
    };
// compare moment object
    moment.isMoment = function(obj) {
        return obj instanceof Moment ||
            (obj != null && hasOwnProp(obj, '_isAMomentObject'));
    };
// for typechecking Duration objects
    moment.isDuration = function(obj) {
        return obj instanceof Duration;
    };
    for (i = lists.length - 1; i >= 0; --i) {
        makeList(lists[i]);
    }
    moment.normalizeUnits = function(units) {
        return normalizeUnits(units);
    };
    moment.invalid = function(flags) {
        var m = moment.utc(NaN);
        if (flags != null) {
            extend(m._pf, flags);
        } else {
            m._pf.userInvalidated = true;
        }
        return m;
    };
    moment.parseZone = function() {
        return moment.apply(null, arguments).parseZone();
    };
    moment.parseTwoDigitYear = function(input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };
    moment.isDate = isDate;
/************************************
Moment Prototype
************************************/
    extend(moment.fn = Moment.prototype,
    {
        clone: function() {
            return moment(this);
        },
        valueOf: function() {
            return +this._d - ((this._offset || 0) * 60000);
        },
        unix: function() {
            return Math.floor(+this / 1000);
        },
        toString: function() {
            return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
        },
        toDate: function() {
            return this._offset ? new Date(+this) : this._d;
        },
        toISOString: function() {
            var m = moment(this).utc();
            if (0 < m.year() && m.year() <= 9999) {
                if ('function' === typeof Date.prototype.toISOString) {
// native implementation is ~50x faster, use it when we can
                    return this.toDate().toISOString();
                } else {
                    return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
                }
            } else {
                return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        },
        toArray: function() {
            var m = this;
            return [
                m.year(),
                m.month(),
                m.date(),
                m.hours(),
                m.minutes(),
                m.seconds(),
                m.milliseconds()
            ];
        },
        isValid: function() {
            return isValid(this);
        },
        isDSTShifted: function() {
            if (this._a) {
                return this.isValid() &&
                    compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
            }
            return false;
        },
        parsingFlags: function() {
            return extend({}, this._pf);
        },
        invalidAt: function() {
            return this._pf.overflow;
        },
        utc: function(keepLocalTime) {
            return this.utcOffset(0, keepLocalTime);
        },
        local: function(keepLocalTime) {
            if (this._isUTC) {
                this.utcOffset(0, keepLocalTime);
                this._isUTC = false;
                if (keepLocalTime) {
                    this.subtract(this._dateUtcOffset(), 'm');
                }
            }
            return this;
        },
        format: function(inputString) {
            var output = formatMoment(this, inputString || moment.defaultFormat);
            return this.localeData().postformat(output);
        },
        add: createAdder(1, 'add'),
        subtract: createAdder(-1, 'subtract'),
        diff: function(input, units, asFloat) {
            var that = makeAs(input, this),
                zoneDiff = (that.utcOffset() - this.utcOffset()) * 6e4,
                anchor,
                diff,
                output,
                daysAdjust;
            units = normalizeUnits(units);
            if (units === 'year' || units === 'month' || units === 'quarter') {
                output = monthDiff(this, that);
                if (units === 'quarter') {
                    output = output / 3;
                } else if (units === 'year') {
                    output = output / 12;
                }
            } else {
                diff = this - that;
                output = units === 'second'
                    ? diff / 1e3
                    : // 1000
                    units === 'minute'
                    ? diff / 6e4
                    : // 1000 * 60
                    units === 'hour'
                    ? diff / 36e5
                    : // 1000 * 60 * 60
                    units === 'day'
                    ? (diff - zoneDiff) / 864e5
                    : // 1000 * 60 * 60 * 24, negate dst
                    units === 'week'
                    ? (diff - zoneDiff) / 6048e5
                    : // 1000 * 60 * 60 * 24 * 7, negate dst
                    diff;
            }
            return asFloat ? output : absRound(output);
        },
        from: function(time, withoutSuffix) {
            return moment.duration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
        },
        fromNow: function(withoutSuffix) {
            return this.from(moment(), withoutSuffix);
        },
        calendar: function(time) {
// We want to compare the start of today, vs this.
// Getting start-of-today depends on whether we're locat/utc/offset
// or not.
            var now = time || moment(),
                sod = makeAs(now, this).startOf('day'),
                diff = this.diff(sod, 'days', true),
                format = diff < -6
                    ? 'sameElse'
                    : diff < -1
                    ? 'lastWeek'
                    : diff < 0
                    ? 'lastDay'
                    : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
            return this.format(this.localeData().calendar(format, this, moment(now)));
        },
        isLeapYear: function() {
            return isLeapYear(this.year());
        },
        isDST: function() {
            return (this.utcOffset() > this.clone().month(0).utcOffset() ||
                this.utcOffset() > this.clone().month(5).utcOffset());
        },
        day: function(input) {
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (input != null) {
                input = parseWeekday(input, this.localeData());
                return this.add(input - day, 'd');
            } else {
                return day;
            }
        },
        month: makeAccessor('Month', true),
        startOf: function(units) {
            units = normalizeUnits(units);
// the following switch intentionally omits break keywords
// to utilize falling through the cases.
            switch (units) {
            case 'year':
                this.month(0);
/* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
/* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
                this.hours(0);
/* falls through */
            case 'hour':
                this.minutes(0);
/* falls through */
            case 'minute':
                this.seconds(0);
/* falls through */
            case 'second':
                this.milliseconds(0);
/* falls through */
            }
// weeks are a special case
            if (units === 'week') {
                this.weekday(0);
            } else if (units === 'isoWeek') {
                this.isoWeekday(1);
            }
// quarters are also special
            if (units === 'quarter') {
                this.month(Math.floor(this.month() / 3) * 3);
            }
            return this;
        },
        endOf: function(units) {
            units = normalizeUnits(units);
            if (units === undefined || units === 'millisecond') {
                return this;
            }
            return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
        },
        isAfter: function(input, units) {
            var inputMs;
            units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this > +input;
            } else {
                inputMs = moment.isMoment(input) ? +input : +moment(input);
                return inputMs < +this.clone().startOf(units);
            }
        },
        isBefore: function(input, units) {
            var inputMs;
            units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this < +input;
            } else {
                inputMs = moment.isMoment(input) ? +input : +moment(input);
                return +this.clone().endOf(units) < inputMs;
            }
        },
        isBetween: function(from, to, units) {
            return this.isAfter(from, units) && this.isBefore(to, units);
        },
        isSame: function(input, units) {
            var inputMs;
            units = normalizeUnits(units || 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this === +input;
            } else {
                inputMs = +moment(input);
                return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
            }
        },
        min: deprecate(
            'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
            function(other) {
                other = moment.apply(null, arguments);
                return other < this ? this : other;
            }
        ),
        max: deprecate(
            'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
            function(other) {
                other = moment.apply(null, arguments);
                return other > this ? this : other;
            }
        ),
        zone: deprecate(
            'moment().zone is deprecated, use moment().utcOffset instead. ' +
            'https://github.com/moment/moment/issues/1779',
            function(input, keepLocalTime) {
                if (input != null) {
                    if (typeof input !== 'string') {
                        input = -input;
                    }
                    this.utcOffset(input, keepLocalTime);
                    return this;
                } else {
                    return -this.utcOffset();
                }
            }
        ),
// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
        utcOffset: function(input, keepLocalTime) {
            var offset = this._offset || 0,
                localAdjust;
            if (input != null) {
                if (typeof input === 'string') {
                    input = utcOffsetFromString(input);
                }
                if (Math.abs(input) < 16) {
                    input = input * 60;
                }
                if (!this._isUTC && keepLocalTime) {
                    localAdjust = this._dateUtcOffset();
                }
                this._offset = input;
                this._isUTC = true;
                if (localAdjust != null) {
                    this.add(localAdjust, 'm');
                }
                if (offset !== input) {
                    if (!keepLocalTime || this._changeInProgress) {
                        addOrSubtractDurationFromMoment(this,
                            moment.duration(input - offset, 'm'),
                            1,
                            false);
                    } else if (!this._changeInProgress) {
                        this._changeInProgress = true;
                        moment.updateOffset(this, true);
                        this._changeInProgress = null;
                    }
                }
                return this;
            } else {
                return this._isUTC ? offset : this._dateUtcOffset();
            }
        },
        isLocal: function() {
            return !this._isUTC;
        },
        isUtcOffset: function() {
            return this._isUTC;
        },
        isUtc: function() {
            return this._isUTC && this._offset === 0;
        },
        zoneAbbr: function() {
            return this._isUTC ? 'UTC' : '';
        },
        zoneName: function() {
            return this._isUTC ? 'Coordinated Universal Time' : '';
        },
        parseZone: function() {
            if (this._tzm) {
                this.utcOffset(this._tzm);
            } else if (typeof this._i === 'string') {
                this.utcOffset(utcOffsetFromString(this._i));
            }
            return this;
        },
        hasAlignedHourOffset: function(input) {
            if (!input) {
                input = 0;
            } else {
                input = moment(input).utcOffset();
            }
            return (this.utcOffset() - input) % 60 === 0;
        },
        daysInMonth: function() {
            return daysInMonth(this.year(), this.month());
        },
        dayOfYear: function(input) {
            var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
            return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
        },
        quarter: function(input) {
            return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        },
        weekYear: function(input) {
            var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return input == null ? year : this.add((input - year), 'y');
        },
        isoWeekYear: function(input) {
            var year = weekOfYear(this, 1, 4).year;
            return input == null ? year : this.add((input - year), 'y');
        },
        week: function(input) {
            var week = this.localeData().week(this);
            return input == null ? week : this.add((input - week) * 7, 'd');
        },
        isoWeek: function(input) {
            var week = weekOfYear(this, 1, 4).week;
            return input == null ? week : this.add((input - week) * 7, 'd');
        },
        weekday: function(input) {
            var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return input == null ? weekday : this.add(input - weekday, 'd');
        },
        isoWeekday: function(input) {
// behaves the same as moment#day except
// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
// as a setter, sunday should belong to the previous week.
            return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
        },
        isoWeeksInYear: function() {
            return weeksInYear(this.year(), 1, 4);
        },
        weeksInYear: function() {
            var weekInfo = this.localeData()._week;
            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        },
        get: function(units) {
            units = normalizeUnits(units);
            return this[units]();
        },
        set: function(units, value) {
            var unit;
            if (typeof units === 'object') {
                for (unit in units) {
                    this.set(unit, units[unit]);
                }
            } else {
                units = normalizeUnits(units);
                if (typeof this[units] === 'function') {
                    this[units](value);
                }
            }
            return this;
        },
// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
        locale: function(key) {
            var newLocaleData;
            if (key === undefined) {
                return this._locale._abbr;
            } else {
                newLocaleData = moment.localeData(key);
                if (newLocaleData != null) {
                    this._locale = newLocaleData;
                }
                return this;
            }
        },
        lang: deprecate(
            'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
            function(key) {
                if (key === undefined) {
                    return this.localeData();
                } else {
                    return this.locale(key);
                }
            }
        ),
        localeData: function() {
            return this._locale;
        },
        _dateUtcOffset: function() {
// On Firefox.24 Date#getTimezoneOffset returns a floating point.
// https://github.com/moment/moment/pull/1871
            return -Math.round(this._d.getTimezoneOffset() / 15) * 15;
        }
    });

    function rawMonthSetter(mom, value) {
        var dayOfMonth;
// TODO: Move this out of here!
        if (typeof value === 'string') {
            value = mom.localeData().monthsParse(value);
// TODO: Another silent failure?
            if (typeof value !== 'number') {
                return mom;
            }
        }
        dayOfMonth = Math.min(mom.date(),
            daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function rawGetter(mom, unit) {
        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
    }

    function rawSetter(mom, unit, value) {
        if (unit === 'Month') {
            return rawMonthSetter(mom, value);
        } else {
            return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }

    function makeAccessor(unit, keepTime) {
        return function(value) {
            if (value != null) {
                rawSetter(this, unit, value);
                moment.updateOffset(this, keepTime);
                return this;
            } else {
                return rawGetter(this, unit);
            }
        };
    }

    moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds', false);
    moment.fn.second = moment.fn.seconds = makeAccessor('Seconds', false);
    moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes', false);
// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
    moment.fn.hour = moment.fn.hours = makeAccessor('Hours', true);
// moment.fn.month is defined separately
    moment.fn.date = makeAccessor('Date', true);
    moment.fn.dates = deprecate('dates accessor is deprecated. Use date instead.', makeAccessor('Date', true));
    moment.fn.year = makeAccessor('FullYear', true);
    moment.fn.years = deprecate('years accessor is deprecated. Use year instead.', makeAccessor('FullYear', true));
// add plural methods
    moment.fn.days = moment.fn.day;
    moment.fn.months = moment.fn.month;
    moment.fn.weeks = moment.fn.week;
    moment.fn.isoWeeks = moment.fn.isoWeek;
    moment.fn.quarters = moment.fn.quarter;
// add aliased format methods
    moment.fn.toJSON = moment.fn.toISOString;
// alias isUtc for dev-friendliness
    moment.fn.isUTC = moment.fn.isUtc;

/************************************
Duration Prototype
************************************/
    function daysToYears(days) {
// 400 years have 146097 days (taking into account leap year rules)
        return days * 400 / 146097;
    }

    function yearsToDays(years) {
// years * 365 + absRound(years / 4) -
//     absRound(years / 100) + absRound(years / 400);
        return years * 146097 / 400;
    }

    extend(moment.duration.fn = Duration.prototype,
    {
        _bubble: function() {
            var milliseconds = this._milliseconds,
                days = this._days,
                months = this._months,
                data = this._data,
                seconds,
                minutes,
                hours,
                years = 0;
// The following code bubbles up values, see the tests for
// examples of what that means.
            data.milliseconds = milliseconds % 1000;
            seconds = absRound(milliseconds / 1000);
            data.seconds = seconds % 60;
            minutes = absRound(seconds / 60);
            data.minutes = minutes % 60;
            hours = absRound(minutes / 60);
            data.hours = hours % 24;
            days += absRound(hours / 24);
// Accurately convert days to years, assume start from year 0.
            years = absRound(daysToYears(days));
            days -= absRound(yearsToDays(years));
// 30 days to a month
// TODO (iskren): Use anchor date (like 1st Jan) to compute this.
            months += absRound(days / 30);
            days %= 30;
// 12 months -> 1 year
            years += absRound(months / 12);
            months %= 12;
            data.days = days;
            data.months = months;
            data.years = years;
        },
        abs: function() {
            this._milliseconds = Math.abs(this._milliseconds);
            this._days = Math.abs(this._days);
            this._months = Math.abs(this._months);
            this._data.milliseconds = Math.abs(this._data.milliseconds);
            this._data.seconds = Math.abs(this._data.seconds);
            this._data.minutes = Math.abs(this._data.minutes);
            this._data.hours = Math.abs(this._data.hours);
            this._data.months = Math.abs(this._data.months);
            this._data.years = Math.abs(this._data.years);
            return this;
        },
        weeks: function() {
            return absRound(this.days() / 7);
        },
        valueOf: function() {
            return this._milliseconds +
                this._days * 864e5 +
                (this._months % 12) * 2592e6 +
                toInt(this._months / 12) * 31536e6;
        },
        humanize: function(withSuffix) {
            var output = relativeTime(this, !withSuffix, this.localeData());
            if (withSuffix) {
                output = this.localeData().pastFuture(+this, output);
            }
            return this.localeData().postformat(output);
        },
        add: function(input, val) {
// supports only 2.0-style add(1, 's') or add(moment)
            var dur = moment.duration(input, val);
            this._milliseconds += dur._milliseconds;
            this._days += dur._days;
            this._months += dur._months;
            this._bubble();
            return this;
        },
        subtract: function(input, val) {
            var dur = moment.duration(input, val);
            this._milliseconds -= dur._milliseconds;
            this._days -= dur._days;
            this._months -= dur._months;
            this._bubble();
            return this;
        },
        get: function(units) {
            units = normalizeUnits(units);
            return this[units.toLowerCase() + 's']();
        },
        as: function(units) {
            var days, months;
            units = normalizeUnits(units);
            if (units === 'month' || units === 'year') {
                days = this._days + this._milliseconds / 864e5;
                months = this._months + daysToYears(days) * 12;
                return units === 'month' ? months : months / 12;
            } else {
// handle milliseconds separately because of floating point math errors (issue #1867)
                days = this._days + Math.round(yearsToDays(this._months / 12));
                switch (units) {
                case 'week':
                    return days / 7 + this._milliseconds / 6048e5;
                case 'day':
                    return days + this._milliseconds / 864e5;
                case 'hour':
                    return days * 24 + this._milliseconds / 36e5;
                case 'minute':
                    return days * 24 * 60 + this._milliseconds / 6e4;
                case 'second':
                    return days * 24 * 60 * 60 + this._milliseconds / 1000;
// Math.floor prevents floating point math errors here
                case 'millisecond':
                    return Math.floor(days * 24 * 60 * 60 * 1000) + this._milliseconds;
                default:
                    throw new Error('Unknown unit ' + units);
                }
            }
        },
        lang: moment.fn.lang,
        locale: moment.fn.locale,
        toIsoString: deprecate(
            'toIsoString() is deprecated. Please use toISOString() instead ' +
            '(notice the capitals)',
            function() {
                return this.toISOString();
            }
        ),
        toISOString: function() {
// inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
            var years = Math.abs(this.years()),
                months = Math.abs(this.months()),
                days = Math.abs(this.days()),
                hours = Math.abs(this.hours()),
                minutes = Math.abs(this.minutes()),
                seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);
            if (!this.asSeconds()) {
// this is the same as C#'s (Noda) and python (isodate)...
// but not other JS (goog.date)
                return 'P0D';
            }
            return (this.asSeconds() < 0 ? '-' : '') +
                'P' +
                (years ? years + 'Y' : '') +
                (months ? months + 'M' : '') +
                (days ? days + 'D' : '') +
                ((hours || minutes || seconds) ? 'T' : '') +
                (hours ? hours + 'H' : '') +
                (minutes ? minutes + 'M' : '') +
                (seconds ? seconds + 'S' : '');
        },
        localeData: function() {
            return this._locale;
        },
        toJSON: function() {
            return this.toISOString();
        }
    });
    moment.duration.fn.toString = moment.duration.fn.toISOString;

    function makeDurationGetter(name) {
        moment.duration.fn[name] = function() {
            return this._data[name];
        };
    }

    for (i in unitMillisecondFactors) {
        if (hasOwnProp(unitMillisecondFactors, i)) {
            makeDurationGetter(i.toLowerCase());
        }
    }
    moment.duration.fn.asMilliseconds = function() {
        return this.as('ms');
    };
    moment.duration.fn.asSeconds = function() {
        return this.as('s');
    };
    moment.duration.fn.asMinutes = function() {
        return this.as('m');
    };
    moment.duration.fn.asHours = function() {
        return this.as('h');
    };
    moment.duration.fn.asDays = function() {
        return this.as('d');
    };
    moment.duration.fn.asWeeks = function() {
        return this.as('weeks');
    };
    moment.duration.fn.asMonths = function() {
        return this.as('M');
    };
    moment.duration.fn.asYears = function() {
        return this.as('y');
    };
/************************************
Default Locale
************************************/
// Set default locale, other locale will inherit from English.
    moment.locale('en',
    {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1)
                    ? 'th'
                    : (b === 1) ? 'st' : (b === 2) ? 'nd' : (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

/* EMBED_LOCALES */
/************************************
Exposing Moment
************************************/
    function makeGlobal(shouldDeprecate) {
/*global ender:false */
        if (typeof ender !== 'undefined') {
            return;
        }
        oldGlobalMoment = globalScope.moment;
        if (shouldDeprecate) {
            globalScope.moment = deprecate(
                'Accessing Moment through the global scope is ' +
                'deprecated, and will be removed in an upcoming ' +
                'release.',
                moment);
        } else {
            globalScope.moment = moment;
        }
    }

// CommonJS module is defined
    if (hasModule) {
        module.exports = moment;
    } else if (typeof define === 'function' && define.amd) {
        define(function(require, exports, module) {
            if (module.config && module.config() && module.config().noGlobal === true) {
// release the global variable
                globalScope.moment = oldGlobalMoment;
            }
            return moment;
        });
        makeGlobal(true);
    } else {
        makeGlobal();
    }
}).call(this);
/*!
This file is based on or incorporates material from the projects listed below (Third Party IP).
The original copyright notice and the license under which Microsoft received such Third Party IP, are set forth below.
Such licenses and notices are provided for informational purposes only. Microsoft licenses the Third Party IP to you under the licensing terms for the Microsoft product.
Microsoft reserves all other rights not expressly granted under this agreement, whether by implication, estoppel or otherwise.
Bootstrap-daterangepicker 1.3.12
Copyright (c) 2012-2014 Dan Grossman. All rights reserved.
Provided for Informational Purposes Only
Apache 2.0 License
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions and limitations under the License.
*/
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment', 'jquery', 'exports'],
            function(momentjs, $, exports) {
                root.daterangepicker = factory(root, exports, momentjs, $);
            });
    } else if (typeof exports !== 'undefined') {
        var momentjs = require('moment');
        var jQuery;
        try {
            jQuery = require('jquery');
        } catch (err) {
            jQuery = window.jQuery;
            if (!jQuery) throw new Error('jQuery dependency not found');
        }
        factory(root, exports, momentjs, jQuery);
// Finally, as a browser global.
    } else {
        root.daterangepicker = factory(root, {}, root.moment, (root.jQuery || root.Zepto || root.ender || root.$));
    }
}(this,
    function(root, daterangepicker, moment, $) {
        var DateRangePicker = function(element, options, cb) {
// by default, the daterangepicker element is placed at the bottom of HTML body
            this.parentEl = 'body';
// element that triggered the date range picker
            this.element = $(element);
// tracks visible state
            this.isShowing = false;
// create the picker HTML object
            var DRPTemplate = '<div class="daterangepicker dropdown-menu">' +
                '<div class="go-back"><div class="leftA">' +
                options.locale.customRangeLabel +
                '</div><div class="rightA"><button class="interactionCentricDateRangeApply"></button>&nbsp;<button class="interactionCentricDateRangeCancel"></button></div></div>' +
                '<div class="daterangecalendarcontainer"><div class="calendar left" data-before=' +
                options.locale.startDateLabel +
                '></div>' +
                '<div class="calendar right" data-before=' +
                options.locale.endDateLabel +
                '></div></div>' +
                '<div class="ranges"></div>' +
                '</div>';
// custom options
            if (typeof options !== 'object' || options === null)
                options = {};
            this.parentEl = (typeof options === 'object' && options.parentEl && $(options.parentEl).length)
                ? $(options.parentEl)
                : $(this.parentEl);
            this.container = $(DRPTemplate).appendTo(this.parentEl);
            this.setOptions(options, cb);
// apply CSS classes and labels to buttons
            var c = this.container;
            $.each(this.buttonClasses,
                function(idx, val) {
                    c.find('button').addClass(val);
                });
            this.container.find('.daterangepicker_start_input label').html(this.locale.fromLabel);
            this.container.find('.daterangepicker_end_input label').html(this.locale.toLabel);
            this.container.find('.interactionCentricDateRangeApply').html(this.locale.applyLabel);
            this.container.find('.interactionCentricDateRangeCancel').html(this.locale.cancelLabel);
// event listeners
            this.container.find('.calendar')
                .on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this))
                .on('click.daterangepicker', '.next', $.proxy(this.clickNext, this))
                .on('click.daterangepicker', 'td.available', $.proxy(this.clickDate, this))
                .on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this))
                .on('mouseleave.daterangepicker', 'td.available', $.proxy(this.updateFormInputs, this))
                .on('change.daterangepicker', 'select.yearselect', $.proxy(this.updateMonthYear, this))
                .on('change.daterangepicker', 'select.monthselect', $.proxy(this.updateMonthYear, this))
                .on('change.daterangepicker',
                    'select.hourselect,select.minuteselect,select.ampmselect',
                    $.proxy(this.updateTime, this));
            this.container.find('.go-back')
                .on('click.daterangepicker', 'button.interactionCentricDateRangeApply', $.proxy(this.clickApply, this))
                .on('click.daterangepicker',
                    'button.interactionCentricDateRangeCancel',
                    $.proxy(this.clickCancel, this))
            this.container.find('.ranges')
                .on('click.daterangepicker', 'li', $.proxy(this.clickRange, this))
                .on('mouseenter.daterangepicker', 'li', $.proxy(this.enterRange, this))
                .on('mouseleave.daterangepicker', 'li', $.proxy(this.updateFormInputs, this));
            if (this.element.is('input')) {
                this.element.on({
                    'click.daterangepicker': $.proxy(this.show, this),
                    'focus.daterangepicker': $.proxy(this.show, this),
                    'keyup.daterangepicker': $.proxy(this.updateFromControl, this)
                });
            } else {
                this.element.on('click.daterangepicker', $.proxy(this.toggle, this));
            }
        };
        DateRangePicker.prototype = {
            constructor: DateRangePicker,
            setOptions: function(options, callback) {
// Following variables update the date variables which are received from the options parameter
// in order for the control to display the currently selected start and end date
                this.startDate = options.startDate;
                this.endDate = options.endDate;
                this.minDate = options.minDate;
                this.maxDate = options.minDate;
                this.dateLimit = false;
                this.startDateString = options.startDateString;
                this.endDateString = options.endDateString;
                this.minDateString = options.minDateString;
                this.maxDateString = options.maxDateString;
                this.showDropdowns = false;
                this.showWeekNumbers = false;
                this.timePicker = false;
                this.timePickerIncrement = 30;
                this.timePicker12Hour = true;
                this.singleDatePicker = false;
                this.ranges = {};
                this.rangeCount = 0;
                this.showNoRange = options.showNoRange;
                this.weekLabelForSunday = options.localizedLabels.WeekLabels.weekLabelForSunday;
                this.weekLabelForMonday = options.localizedLabels.WeekLabels.weekLabelForMonday;
                this.weekLabelForTuesday = options.localizedLabels.WeekLabels.weekLabelForTuesday;
                this.weekLabelForWednesday = options.localizedLabels.WeekLabels.weekLabelForWednesday;
                this.weekLabelForThursday = options.localizedLabels.WeekLabels.weekLabelForThursday;
                this.weekLabelForFriday = options.localizedLabels.WeekLabels.weekLabelForFriday;
                this.weekLabelForSaturday = options.localizedLabels.WeekLabels.weekLabelForSaturday;
                this.monthlabelForJanuary = options.localizedLabels.MonthLabels.monthLabelForJanuary,
                    this.monthlabelForFebruary = options.localizedLabels.MonthLabels.monthLabelForFebruary,
                    this.monthlabelForMarch = options.localizedLabels.MonthLabels.monthLabelForMarch,
                    this.monthlabelForApril = options.localizedLabels.MonthLabels.monthLabelForApril,
                    this.monthlabelForMay = options.localizedLabels.MonthLabels.monthLabelForMay,
                    this.monthlabelForJune = options.localizedLabels.MonthLabels.monthLabelForJune,
                    this.monthlabelForJuly = options.localizedLabels.MonthLabels.monthLabelForJuly,
                    this.monthlabelForAugust = options.localizedLabels.MonthLabels.monthLabelForAugust,
                    this.monthlabelForSeptember = options.localizedLabels.MonthLabels.monthLabelForSeptember,
                    this.monthlabelForOctober = options.localizedLabels.MonthLabels.monthLabelForOctober,
                    this.monthlabelForNovember = options.localizedLabels.MonthLabels.monthLabelForNovember,
                    this.monthlabelForDecember = options.localizedLabels.MonthLabels.monthLabelForDecember
                this.opens = 'right';
                if (this.element.hasClass('pull-right'))
                    this.opens = 'left';
                this.buttonClasses = ['btn', 'btn-small btn-sm'];
                this.applyClass = 'btn-success';
                this.cancelClass = 'btn-default';
                this.separator = ' - ';
                this.locale = {
                    applyLabel: options.locale.applyLabel,
                    cancelLabel: options.locale.cancelLabel,
                    fromLabel: 'From',
                    toLabel: 'To',
                    weekLabel: 'W',
                    customRangeLabel: options.locale.customRangeLabel,
                    noRangeLabel: options.locale.noRangeLabel,
                    daysOfWeek: moment.weekdaysMin(),
                    monthNames: moment.months(),
                    firstDay: moment.localeData()._week.dow
                };
                this.cb = function() {};
                if (typeof options.format === 'string')
                    this.format = options.format;
                if (typeof options.separator === 'string')
                    this.separator = options.separator;
                if (typeof options.startDateString === 'string')
                    this.startDateString = options.startDateString;
                if (typeof options.endDateString === 'string')
                    this.endDateString = options.endDateString;
                if (typeof options.minDate === 'string')
                    this.minDate = moment(options.minDate, this.format);
                if (typeof options.maxDate === 'string')
                    this.maxDate = moment(options.maxDate, this.format);
                if (typeof options.startDate === 'object' && options.startDate != null)
                    this.startDate = moment(options.startDate);
                if (typeof options.endDate === 'object' && options.endDate != null)
                    this.endDate = moment(options.endDate);
                if (typeof options.minDate === 'object')
                    this.minDate = moment(options.minDate);
                if (typeof options.maxDate === 'object')
                    this.maxDate = moment(options.maxDate);
                if (typeof options.applyClass === 'string')
                    this.applyClass = options.applyClass;
                if (typeof options.cancelClass === 'string')
                    this.cancelClass = options.cancelClass;
                if (typeof options.dateLimit === 'object')
                    this.dateLimit = options.dateLimit;
                if (typeof options.locale === 'object') {
                    if (typeof options.locale.daysOfWeek === 'object') {
// Create a copy of daysOfWeek to avoid modification of original
// options object for reusability in multiple daterangepicker instances
                        this.locale.daysOfWeek = options.locale.daysOfWeek.slice();
                    }
                    if (typeof options.locale.monthNames === 'object') {
                        this.locale.monthNames = options.locale.monthNames.slice();
                    }
                    if (typeof options.locale.firstDay === 'number') {
                        this.locale.firstDay = options.locale.firstDay;
                    }
                    if (typeof options.locale.applyLabel === 'string') {
                        this.locale.applyLabel = options.locale.applyLabel;
                    }
                    if (typeof options.locale.cancelLabel === 'string') {
                        this.locale.cancelLabel = options.locale.cancelLabel;
                    }
                    if (typeof options.locale.fromLabel === 'string') {
                        this.locale.fromLabel = options.locale.fromLabel;
                    }
                    if (typeof options.locale.toLabel === 'string') {
                        this.locale.toLabel = options.locale.toLabel;
                    }
                    if (typeof options.locale.weekLabel === 'string') {
                        this.locale.weekLabel = options.locale.weekLabel;
                    }
                    if (typeof options.locale.customRangeLabel === 'string') {
                        this.locale.customRangeLabel = options.locale.customRangeLabel;
                    }
                    if (typeof options.locale.noRangeLabel === 'string') {
                        this.locale.noRangeLabel = options.locale.noRangeLabel;
                    }
                }
                if (typeof options.opens === 'string')
                    this.opens = options.opens;
                if (typeof options.showNoRange === 'boolean') {
                    this.showNoRange = options.showNoRange;
                }
                if (typeof options.showWeekNumbers === 'boolean') {
                    this.showWeekNumbers = options.showWeekNumbers;
                }
                if (typeof options.buttonClasses === 'string') {
                    this.buttonClasses = [options.buttonClasses];
                }
                if (typeof options.buttonClasses === 'object') {
                    this.buttonClasses = options.buttonClasses;
                }
                if (typeof options.showDropdowns === 'boolean') {
                    this.showDropdowns = options.showDropdowns;
                }
                if (typeof options.singleDatePicker === 'boolean') {
                    this.singleDatePicker = options.singleDatePicker;
                }
                if (typeof options.timePicker === 'boolean') {
                    this.timePicker = options.timePicker;
                }
                if (typeof options.timePickerIncrement === 'number') {
                    this.timePickerIncrement = options.timePickerIncrement;
                }
                if (typeof options.timePicker12Hour === 'boolean') {
                    this.timePicker12Hour = options.timePicker12Hour;
                }
// update day names order to firstDay
                if (this.locale.firstDay != 0) {
                    var iterator = this.locale.firstDay;
                    while (iterator > 0) {
                        this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                        iterator--;
                    }
                }
                var start, end, range;
//if no start/end dates set, check if an input element contains initial values
                if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {
                    if ($(this.element).is('input[type=text]')) {
                        var val = $(this.element).val();
                        var split = val.split(this.separator);
                        start = end = null;
                        if (split.length == 2) {
                            start = moment(split[0], this.format);
                            end = moment(split[1], this.format);
                        } else if (this.singleDatePicker) {
                            start = moment(val, this.format);
                            end = moment(val, this.format);
                        }
                        if (start !== null && end !== null) {
                            this.startDate = start;
                            this.endDate = end;
                        }
                    }
                }
                if (typeof options.ranges === 'object') {
// Test hooks for accessing these ranges
                    var dataIds = {};
                    for (range in options.ranges) {
                        start = moment(options.ranges[range].range[0]);
                        end = moment(options.ranges[range].range[1]);
// If we have a min/max date set, bound this range
// to it, but only if it would otherwise fall
// outside of the min/max.
                        if (this.minDate && start.isBefore(this.minDate))
                            start = moment(this.minDate);
                        if (this.maxDate && end.isAfter(this.maxDate))
                            end = moment(this.maxDate);
// If the end of the range is before the minimum (if min is set) OR
// the start of the range is after the max (also if set) don't display this
// range option.
                        if ((this.minDate && end.isBefore(this.minDate)) ||
                            (this.maxDate && start.isAfter(this.maxDate))) {
                            continue;
                        }
                        dataIds[options.ranges[range].Label] = range;
                        this.ranges[options.ranges[range].Label] = [start, end];
                    }
                    var list = '<ul>';
                    if (this.showNoRange) {
                        list += '<li>' + this.locale.noRangeLabel + '</li>';
                        this.rangeCount++;
                    }
                    for (range in this.ranges) {
                        list += '<li ' + 'data-id=\'' + options.dataid + '_' + dataIds[range] + '\'>' + range + '</li>';
                        this.rangeCount++;
                    }
                    list += '<li>' + this.locale.customRangeLabel + '</li>';
                    this.rangeCount++;
                    list += '</ul>';
                    this.container.find('.ranges ul').remove();
                    this.container.find('.ranges').prepend(list);
                }
                if (typeof callback === 'function') {
                    this.cb = callback;
                }
                if (!this.timePicker) {
                    if (this.startDate != null && this.endDate != null) {
                        this.startDate = this.startDate.startOf('day');
                        this.endDate = this.endDate.endOf('day');
                    }
                }
                if (this.singleDatePicker) {
                    this.opens = 'right';
                    this.container.find('.calendar.right').show();
                    this.container.find('.calendar.left').hide();
                    this.container.find('.ranges').hide();
                    if (!this.container.find('.calendar.right').hasClass('single'))
                        this.container.find('.calendar.right').addClass('single');
                } else {
                    this.container.find('.calendar.right').removeClass('single');
                    this.container.find('.ranges').show();
                }
                this.oldStartDate = (this.startDate == null) ? null : this.startDate.clone();
                this.oldEndDate = (this.endDate == null) ? null : this.endDate.clone();
                this.oldChosenLabel = this.chosenLabel;
                if (this.startDate != null) {
                    this.leftCalendar = {
                        month: moment([
                            this.startDate.year(), this.startDate.month(), 1, this.startDate.hour(), this.startDate
                            .minute()
                        ]),
                        calendar: []
                    };
                } else {
                    this.leftCalendar = {
                        month: moment([moment().year(), moment().month(), 1, moment().hour(), moment().minute()]),
                        calendar: []
                    };
                }
                if (this.endDate != null) {
                    this.rightCalendar = {
                        month: moment([
                            this.endDate.year(), this.endDate.month(), 1, this.endDate.hour(), this.endDate.minute()
                        ]),
                        calendar: []
                    };
                } else {
                    this.rightCalendar = {
                        month: moment([moment().year(), moment().month() + 1, 1, moment().hour(), moment().minute()]),
                        calendar: []
                    };
                }
                if (this.opens == 'right') {
// swap calendar positions
                    var left = this.container.find('.calendar.left');
                    var right = this.container.find('.calendar.right');
                    if (right.hasClass('single')) {
                        right.removeClass('single');
                        left.addClass('single');
                    }
                    left.removeClass('left').addClass('right');
                    right.removeClass('right').addClass('left');
                    if (this.singleDatePicker) {
                        left.show();
                        right.hide();
                    }
                }
                if (typeof options.ranges === 'undefined' && !this.singleDatePicker) {
                    this.container.addClass('show-calendar');
                }
                this.container.addClass('opens' + this.opens);
                this.updateView();
                this.updateCalendars();
                this.hideCalendars();
                this.notify();
            },
            setStartDate: function(startDate) {
                if (typeof startDate === 'string')
                    this.startDateString = startDate;
                if (typeof startDate === 'object')
                    this.startDate = moment(startDate);
                if (!this.timePicker)
                    this.startDate = this.startDate.startOf('day');
                this.oldStartDate = (this.startDate == null) ? null : this.startDate.clone();
                this.updateView();
                this.updateCalendars();
                this.updateInputText();
            },
            setEndDate: function(endDate) {
                if (typeof endDate === 'string')
                    this.endDateString = endDate;
                if (typeof endDate === 'object')
                    this.endDate = moment(endDate);
                if (!this.timePicker)
                    this.endDate = this.endDate.endOf('day');
                this.oldEndDate = (this.endDate == null) ? null : this.endDate.clone();
                this.updateView();
                this.updateCalendars();
                this.updateInputText();
            },
            updateView: function() {
                if (this.startDate == null || this.endDate == null)
                    return;
                this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year())
                    .hour(this.startDate.hour()).minute(this.startDate.minute());
                this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()).hour(this.endDate.hour())
                    .minute(this.endDate.minute());
                this.updateFormInputs();
            },
            updateFormInputs: function() {
                this.container.find('input[name=daterangepicker_start]').val(this.startDateString);
                this.container.find('input[name=daterangepicker_end]').val(this.endDateString);
                if (this.startDate == null || this.endDate == null)
                    return;
                if (this.startDate.isSame(this.endDate) || this.startDate.isBefore(this.endDate)) {
                    this.container.find('button.interactionCentricDateRangeApply').removeAttr('disabled');
                } else {
                    this.container.find('button.interactionCentricDateRangeApply').attr('disabled', 'disabled');
                }
            },
            updateFromControl: function() {
                if (!this.element.is('input')) return;
                if (!this.element.val().length) return;
                var dateString = this.element.val().split(this.separator),
                    start = null,
                    end = null;
                if (dateString.length === 2) {
                    start = moment(dateString[0], this.format);
                    end = moment(dateString[1], this.format);
                }
                if (this.singleDatePicker || start === null || end === null) {
                    start = moment(this.element.val(), this.format);
                    end = start;
                }
                if (end.isBefore(start)) return;
                this.oldStartDate = (this.startDate == null) ? null : this.startDate.clone();
                this.oldEndDate = this.endDate.clone();
                this.startDate = start;
                this.endDate = end;
                if (this.hasBoundingDatesChanged())
                    this.notify();
                this.updateCalendars();
            },
            notify: function() {
                this.updateView();
                this.cb(this.startDate, this.endDate, this.chosenLabel);
            },
            move: function() {
                var parentOffset = { top: 0, left: 0 };
                var parentRightEdge = $(window).width();
                var parentBottomEdge = $(window).height();
                if (!this.parentEl.is('body')) {
                    parentOffset = {
                        top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                        left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                    };
                    parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
                }
                if (this.opens == 'left') {
                    if (this.element.offset()
                        .top +
                        this.element.outerHeight() +
                        this.getMaxHeight() <=
                        parentBottomEdge) {
                        this.container.css({
                            top: this.element.offset().top + this.element.outerHeight() - parentOffset.top,
                            right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
                            left: 'auto'
                        });
                    } else {
                        this.container.css({
                            bottom: $(window).height() - this.element.offset().top - this.element.outerHeight(),
                            right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
                            top: 'auto',
                            left: 'auto'
                        });
                    }
                    if (this.container.offset().left < 0) {
                        this.container.css({
                            right: 'auto',
                            left: 9
                        });
                    }
                } else {
                    this.container.css({
                        top: this.element.offset().top + this.element.outerHeight() - parentOffset.top,
                        left: this.element.offset().left - parentOffset.left,
                        right: 'auto'
                    });
                    if (this.container.offset().left + this.container.outerWidth() > $(window).width()) {
                        this.container.css({
                            left: 'auto',
                            right: 0
                        });
                    }
                }
                this.calculateMaxHeight();
            },
            getMaxHeight: function() {
                var maxHeight;
                if (this.container.hasClass("show-calendar")) {
                    maxHeight = 355;
                } else {
                    maxHeight = (this.rangeCount * 30) + 2;
                }
                return maxHeight;
            },
            calculateMaxHeight: function() {
                var maxHeight;
                if (this.container.hasClass("show-calendar")) {
                    maxHeight = 355;
                } else {
                    maxHeight = (this.rangeCount * 30) + 2;
                }
                this.container.css({
                    "max-height": maxHeight + "px"
                });
            },
            toggle: function(e) {
                if (this.element.hasClass('active')) {
                    this.hide();
                } else {
                    this.show();
                }
            },
            show: function(e) {
                if (this.isShowing) return;
                this.element.addClass('active');
                this.container.show();
                this.move();
// Create a click proxy that is private to this instance of datepicker, for unbinding
                this._outsideClickProxy = $.proxy(function(e) { this.outsideClick(e); }, this);
// Bind global datepicker mousedown for hiding and
                $(document)
                    .on('mousedown.daterangepicker', this._outsideClickProxy)
// also explicitly play nice with Bootstrap dropdowns, which stopPropagation when clicking them
                    .on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy)
// and also close when focus changes to outside the picker (eg. tabbing between controls)
                    .on('focusin.daterangepicker', this._outsideClickProxy);
                this.isShowing = true;
                this.element.trigger('show.daterangepicker', this);
            },
            outsideClick: function(e) {
                var target = $(e.target);
// if the page is clicked anywhere except within the daterangerpicker/button
// itself then call this.hide()
                if (
                    target.closest(this.element).length ||
                        target.closest(this.container).length ||
                        target.closest('.calendar-date').length
                ) return;
                this.container.removeClass('show-calendar');
                this.clickCancel(null);
                this.hide();
            },
            hide: function(e) {
                if (!this.isShowing) return;
                $(document)
                    .off('mousedown.daterangepicker')
                    .off('click.daterangepicker', '[data-toggle=dropdown]')
                    .off('focusin.daterangepicker');
                this.element.removeClass('active');
                this.container.hide();
                this.isShowing = false;
                this.element.trigger('hide.daterangepicker', this);
            },
            enterRange: function(e) {
// mouse pointer has entered a range label
                var label = e.target.innerHTML;
                if (label == this.locale.customRangeLabel || label == this.locale.noRangeLabel) {
                    this.updateView();
                } else {
                    var dates = this.ranges[label];
                    this.container.find('input[name=daterangepicker_start]').val(dates[0].format(this.format));
                    this.container.find('input[name=daterangepicker_end]').val(dates[1].format(this.format));
                }
            },
            showCalendars: function() {
                this.container.addClass('show-calendar');
                this.move();
                this.calculateMaxHeight();
                this.element.trigger('showCalendar.daterangepicker', this);
            },
            hideCalendars: function() {
                this.container.removeClass('show-calendar');
                this.element.trigger('hideCalendar.daterangepicker', this);
            },
// when a date is typed into the start to end date textboxes
            inputsChanged: function(e) {
                var el = $(e.target);
                var date = moment(el.val());
                if (!date.isValid()) return;
                var startDate, endDate;
                if (el.attr('name') === 'daterangepicker_start') {
                    startDate = date;
                    endDate = this.endDate;
                } else {
                    startDate = this.startDate;
                    endDate = date;
                }
                this.setCustomDates(startDate, endDate);
            },
            inputsKeydown: function(e) {
                if (e.keyCode === 13) {
                    this.inputsChanged(e);
                    this.notify();
                }
            },
            updateInputText: function() {
                if (this.element.is('input') && !this.singleDatePicker) {
                    this.element.val(this.startDateString + this.separator + this.endDateString);
                } else if (this.element.is('input')) {
                    this.element.val(this.startDateString);
                }
            },
            clickRange: function(e) {
                var label = e.target.innerHTML;
                this.chosenLabel = label;
                if (label == this.locale.customRangeLabel) {
                    this.showCalendars();
                } else if (label == this.locale.noRangeLabel) {
                    this.startDate = null;
                    this.endDate = null;
                    this.updateCalendars();
                    this.hideCalendars();
                    this.hide();
                    if (this.hasBoundingDatesChanged())
                        this.notify();
                    this.oldStartDate = null;
                    this.oldEndDate = null;
                    this.element.trigger('apply.daterangepicker', this);
                } else {
                    var dates = this.ranges[label];
                    this.startDate = dates[0];
                    this.endDate = dates[1];
                    this.startDateString = this.startDate.toISOString();
                    this.endDateString = this.endDate.toISOString();
                    if (!this.timePicker) {
                        this.startDate.startOf('day');
                        this.endDate.endOf('day');
                    }
                    this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year())
                        .hour(this.startDate.hour()).minute(this.startDate.minute());
                    this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year())
                        .hour(this.endDate.hour()).minute(this.endDate.minute());
                    this.updateCalendars();
                    this.updateInputText();
                    this.hideCalendars();
                    this.hide();
                    if (this.hasBoundingDatesChanged())
                        this.notify();
                    this.oldStartDate = (this.startDate == null) ? null : this.startDate.clone();
                    this.oldEndDate = (this.endDate == null) ? null : this.endDate.clone();
                    this.element.trigger('apply.daterangepicker', this);
                }
            },
            clickPrev: function(e) {
                var cal = $(e.target).parents('.calendar');
                if (cal.hasClass('left')) {
                    this.leftCalendar.month.subtract(1, 'month');
                } else {
                    this.rightCalendar.month.subtract(1, 'month');
                }
                this.updateCalendars();
            },
            clickNext: function(e) {
                var cal = $(e.target).parents('.calendar');
                if (cal.hasClass('left')) {
                    this.leftCalendar.month.add(1, 'month');
                } else {
                    this.rightCalendar.month.add(1, 'month');
                }
                this.updateCalendars();
            },
            hoverDate: function(e) {
                var title = $(e.target).attr('data-title');
                var row = title.substr(1, 1);
                var col = title.substr(3, 1);
                var cal = $(e.target).parents('.calendar');
                if (cal.hasClass('left')) {
                    this.container.find('input[name=daterangepicker_start]')
                        .val(this.leftCalendar.calendar[row][col].format(this.format));
                } else {
                    this.container.find('input[name=daterangepicker_end]')
                        .val(this.rightCalendar.calendar[row][col].format(this.format));
                }
            },
            setCustomDates: function(startDate, endDate) {
                this.chosenLabel = this.locale.customRangeLabel;
                if (startDate.isAfter(endDate)) {
                    var difference = this.endDate.diff(this.startDate);
                    endDate = moment(startDate).add(difference, 'ms');
                }
                this.startDate = startDate;
                this.endDate = endDate;
                this.updateView();
                this.updateCalendars();
            },
            clickDate: function(e) {
                var title = $(e.target).attr('data-title');
                var row = title.substr(1, 1);
                var col = title.substr(3, 1);
                var cal = $(e.target).parents('.calendar');
                var startDate, endDate;
                if (cal.hasClass('left')) {
                    startDate = this.leftCalendar.calendar[row][col];
                    endDate = (this.endDate == null) ? startDate.clone().add(1, 'month') : this.endDate;
                    if (typeof this.dateLimit === 'object') {
                        var maxDate = moment(startDate).add(this.dateLimit).startOf('day');
                        if (endDate.isAfter(maxDate)) {
                            endDate = maxDate;
                        }
                    }
                } else {
                    endDate = this.rightCalendar.calendar[row][col];
                    startDate = (this.startDate == null) ? endDate.clone().subtract(1, 'month') : this.startDate;
                    if (typeof this.dateLimit === 'object') {
                        var minDate = moment(endDate).subtract(this.dateLimit).startOf('day');
                        if (startDate.isBefore(minDate)) {
                            startDate = minDate;
                        }
                    }
                }
                if (this.singleDatePicker && cal.hasClass('left')) {
                    endDate = startDate.clone();
                } else if (this.singleDatePicker && cal.hasClass('right')) {
                    startDate = endDate.clone();
                }
                cal.find('td').removeClass('active');
                $(e.target).addClass('active');
                this.setCustomDates(startDate, endDate);
                if (!this.timePicker)
                    endDate.endOf('day');
                if (this.singleDatePicker)
                    this.clickApply();
            },
            hasBoundingDatesChanged: function() {
                if ((this.startDate == null && this.oldStartDate == null) &&
                    (this.endDate == null && this.oldEndDate == null))
                    return false;
                return (this.startDate == null && this.oldStartDate != null) ||
                    (this.startDate != null && this.oldStartDate == null) ||
                    (this.endDate == null && this.oldEndDate != null) ||
                    (this.endDate != null && this.oldEndDate == null) ||
                    !this.startDate.isSame(this.oldStartDate) ||
                    !this.endDate.isSame(this.oldEndDate);
            },
            clickApply: function(e) {
                if (this.hasBoundingDatesChanged())
                    this.notify();
                this.oldStartDate = (this.startDate == null) ? null : this.startDate.clone();
                this.oldEndDate = (this.endDate == null) ? null : this.endDate.clone();
                this.hide();
                this.hideCalendars();
                this.updateCalendars();
                this.element.trigger('apply.daterangepicker', this);
            },
            clickCancel: function(e) {
                this.startDate = this.oldStartDate;
                this.endDate = this.oldEndDate;
                this.chosenLabel = this.oldChosenLabel;
                this.updateView();
                this.updateCalendars();
                this.hideCalendars();
                this.calculateMaxHeight();
                this.element.trigger('cancel.daterangepicker', this);
            },
            updateMonthYear: function(e) {
                var isLeft = $(e.target).closest('.calendar').hasClass('left'),
                    leftOrRight = isLeft ? 'left' : 'right',
                    cal = this.container.find('.calendar.' + leftOrRight);
// Month must be Number for new moment versions
                var month = parseInt(cal.find('.monthselect').val(), 10);
                var year = cal.find('.yearselect').val();
                this[leftOrRight + 'Calendar'].month.month(month).year(year);
                this.updateCalendars();
            },
            updateTime: function(e) {
                var cal = $(e.target).closest('.calendar'),
                    isLeft = cal.hasClass('left');
                var hour = parseInt(cal.find('.hourselect').val(), 10);
                var minute = parseInt(cal.find('.minuteselect').val(), 10);
                if (this.timePicker12Hour) {
                    var ampm = cal.find('.ampmselect').val();
                    if (ampm === 'PM' && hour < 12)
                        hour += 12;
                    if (ampm === 'AM' && hour === 12)
                        hour = 0;
                }
                if (isLeft) {
                    var start = this.startDate.clone();
                    start.hour(hour);
                    start.minute(minute);
                    this.startDate = start;
                    this.leftCalendar.month.hour(hour).minute(minute);
                } else {
                    var end = this.endDate.clone();
                    end.hour(hour);
                    end.minute(minute);
                    this.endDate = end;
                    this.rightCalendar.month.hour(hour).minute(minute);
                }
                this.updateCalendars();
            },
            updateCalendars: function() {
                if ((this.startDate == null) || (this.endDate == null)) {
                    this.container.find('.ranges li').removeClass('active');
                    this.leftCalendar.calendar = this
                        .buildCalendar(this.leftCalendar.month.month(),
                            this.leftCalendar.month.year(),
                            this.leftCalendar.month.hour(),
                            this.leftCalendar.month.minute(),
                            'left');
                    this.rightCalendar.calendar = this
                        .buildCalendar(this.rightCalendar.month.month(),
                            this.rightCalendar.month.year(),
                            this.rightCalendar.month.hour(),
                            this.rightCalendar.month.minute(),
                            'right');
                    this.container.find('.calendar.left').empty()
                        .html(this.renderCalendar(this.leftCalendar.calendar, null, this.minDate, this.maxDate));
                    this.container.find('.calendar.right').empty()
                        .html(this.renderCalendar(this.rightCalendar.calendar, null, minDate, this.maxDate));
                    this.chosenLabel = this.container.find('.ranges li:eq(0)')
                        .addClass('active').html();
                    return;
                }
                this.leftCalendar.calendar = this
                    .buildCalendar(this.leftCalendar.month.month(),
                        this.leftCalendar.month.year(),
                        this.leftCalendar.month.hour(),
                        this.leftCalendar.month.minute(),
                        'left');
                this.rightCalendar.calendar = this
                    .buildCalendar(this.rightCalendar.month.month(),
                        this.rightCalendar.month.year(),
                        this.rightCalendar.month.hour(),
                        this.rightCalendar.month.minute(),
                        'right');
                this.container.find('.calendar.left').empty()
                    .html(this.renderCalendar(this.leftCalendar.calendar, this.startDate, this.minDate, this.maxDate));
                var minDate = this.minDate;
                if (!this.singleDatePicker)
                    minDate = this.startDate;
                this.container.find('.calendar.right').empty()
                    .html(this.renderCalendar(this.rightCalendar.calendar, this.endDate, minDate, this.maxDate));
                this.container.find('.ranges li').removeClass('active');
                var customRange = true;
                var i = 0;
                for (var range in this.ranges) {
                    if (this.timePicker) {
                        if (this.startDate.isSame(this
                                .ranges[range][0]) &&
                            this.endDate.isSame(this.ranges[range][1])) {
                            customRange = false;
                            this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')')
                                .addClass('active').html();
                        }
                    } else {
//ignore times when comparing dates if time picker is not enabled
                        if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') &&
                            this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
                            customRange = false;
                            var labelIndex = this.showNoRange ? (i + 1) : i;
                            this.chosenLabel = this.container.find('.ranges li:eq(' + labelIndex + ')')
                                .addClass('active').html();
                        }
                    }
                    i++;
                }
                if (customRange) {
                    this.chosenLabel = this.container.find('.ranges li:last').addClass('active').html();
                    this.showCalendars();
                }
            },
            buildCalendar: function(month, year, hour, minute, side) {
                var daysInMonth = moment([year, month]).daysInMonth();
                var firstDay = moment([year, month, 1]);
                var lastDay = moment([year, month, daysInMonth]);
                var lastMonth = moment(firstDay).subtract(1, 'month').month();
                var lastYear = moment(firstDay).subtract(1, 'month').year();
                var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
                var dayOfWeek = firstDay.day();
                var i;
//initialize a 6 rows x 7 columns array for the calendar
                var calendar = [];
                calendar.firstDay = firstDay;
                calendar.lastDay = lastDay;
                for (i = 0; i < 6; i++) {
                    calendar[i] = [];
                }
//populate the calendar with date objects
                var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
                if (startDay > daysInLastMonth)
                    startDay -= 7;
                if (dayOfWeek == this.locale.firstDay)
                    startDay = daysInLastMonth - 6;
                var curDate = moment([lastYear, lastMonth, startDay, 12, minute]);
                var col, row;
                for (i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
                    if (i > 0 && col % 7 === 0) {
                        col = 0;
                        row++;
                    }
                    calendar[row][col] = curDate.clone().hour(hour);
                    curDate.hour(12);
                }
                return calendar;
            },
            renderDropdowns: function(selected, minDate, maxDate) {
                var currentMonth = selected.month();
                var monthHtml = '<select class="monthselect">';
                var inMinYear = false;
                var inMaxYear = false;
                var monthNames = [];
                monthNames[0] = this.monthlabelForJanuary;
                monthNames[1] = this.monthlabelForFebruary;
                monthNames[2] = this.monthlabelForMarch;
                monthNames[3] = this.monthlabelForApril;
                monthNames[4] = this.monthlabelForMay;
                monthNames[5] = this.monthlabelForJune;
                monthNames[6] = this.monthlabelForJuly;
                monthNames[7] = this.monthlabelForAugust;
                monthNames[8] = this.monthlabelForSeptember;
                monthNames[9] = this.monthlabelForOctober;
                monthNames[10] = this.monthlabelForNovember;
                monthNames[11] = this.monthlabelForDecember;
                if (minDate != null && maxDate != null) {
                    for (var m = 0; m < 12; m++) {
                        if ((!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month())) {
                            monthHtml += "<option value='" +
                                m +
                                "'" +
                                (m === currentMonth ? " selected='selected'" : "") +
                                ">" +
                                monthNames[m] +
                                "</option>";
                        }
                    }
                } else {
                    for (var m = 0; m < 12; m++) {
                        monthHtml += "<option value='" +
                            m +
                            "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            ">" +
                            monthNames[m] +
                            "</option>";
                    }
                }
                monthHtml += "</select>";
                var currentYear = selected.year();
                var maxYear = (maxDate && maxDate.year()) || (currentYear + 5);
                var minYear = (minDate && minDate.year()) || (currentYear - 50);
                var yearHtml = '<select class="yearselect">';
                for (var y = minYear; y <= maxYear; y++) {
                    yearHtml += '<option value="' +
                        y +
                        '"' +
                        (y === currentYear ? ' selected="selected"' : '') +
                        '>' +
                        y +
                        '</option>';
                }
                yearHtml += '</select>';
                return monthHtml + yearHtml;
            },
            renderCalendar: function(calendar, selected, minDate, maxDate) {
                var html = '<div class="calendar-date">';
                html += '<table class="table-condensed">';
                html += '<thead>';
                html += '<tr>';
// add empty cell for week number
                if (this.showWeekNumbers)
                    html += '<th></th>';
                if (!minDate || minDate.isBefore(calendar.firstDay)) {
                    html += '<th class="prev available"><span class="symbolFont LeftArrowHead-symbol"></span></th>';
                } else {
                    html += '<th></th>';
                }
                var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");
                if (this.showDropdowns) {
                    dateHtml = this.renderDropdowns(calendar[1][1], minDate, maxDate);
                }
                html += '<th colspan="5" class="month">' + dateHtml + '</th>';
                if (!maxDate || maxDate.isAfter(calendar.lastDay)) {
                    html += '<th class="next available"><span class="symbolFont Collapsed-symbol"></i></th>';
                } else {
                    html += '<th></th>';
                }
                html += '</tr>';
                html += '<tr>';
// add week number label
                if (this.showWeekNumbers)
                    html += '<th class="week">' + this.locale.weekLabel + '</th>';
                html += '<th>' + this.weekLabelForSunday + '</th>';
                html += '<th>' + this.weekLabelForMonday + '</th>';
                html += '<th>' + this.weekLabelForTuesday + '</th>';
                html += '<th>' + this.weekLabelForWednesday + '</th>';
                html += '<th>' + this.weekLabelForThursday + '</th>';
                html += '<th>' + this.weekLabelForFriday + '</th>';
                html += '<th>' + this.weekLabelForSaturday + '</th>';
                html += '</tr>';
                html += '</thead>';
                html += '<tbody>';
                for (var row = 0; row < 6; row++) {
                    html += '<tr>';
// add week number
                    if (this.showWeekNumbers)
                        html += '<td class="week">' + calendar[row][0].week() + '</td>';
                    for (var col = 0; col < 7; col++) {
                        var cname = 'available ';
                        cname += (calendar[row][col].month() == calendar[1][1].month()) ? '' : 'off';
                        if ((minDate && calendar[row][col].isBefore(minDate, 'day')) ||
                            (maxDate && calendar[row][col].isAfter(maxDate, 'day'))) {
                            cname = ' off disabled ';
                        } else if (selected != null &&
                            calendar[row][col].format('YYYY-MM-DD') == selected.format('YYYY-MM-DD')) {
                            cname += ' active ';
                            if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD')) {
                                cname += ' start-date ';
                            }
                            if (calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD')) {
                                cname += ' end-date ';
                            }
                        } else if (this.startDate != null && this.endDate != null) {
                            if (calendar[row][col] >= this.startDate && calendar[row][col] <= this.endDate) {
                                cname += ' in-range ';
                                if (calendar[row][col].isSame(this.startDate)) {
                                    cname += ' start-date ';
                                }
                                if (calendar[row][col].isSame(this.endDate)) {
                                    cname += ' end-date ';
                                }
                            }
                        } else if (this.startDate == null || this.endDate == null) {
                            cname += ' in-range ';
                        }
                        var _today = moment().startOf('day');
                        if (calendar[row][col].startOf('day').isSame(_today)) {
                            cname += ' today';
                        }
                        var title = 'r' + row + 'c' + col;
                        html += '<td class="' +
                            cname.replace(/\s+/g, ' ').replace(/^\s?(.*?)\s?$/, '$1') +
                            '" data-title="' +
                            title +
                            '">' +
                            calendar[row][col].date() +
                            '</td>';
                    }
                    html += '</tr>';
                }
                html += '</tbody>';
                html += '</table>';
                html += '</div>';
                var i;
                if (this.timePicker) {
                    html += '<div class="calendar-time">';
                    html += '<select class="hourselect">';
                    var start = 0;
                    var end = 23;
                    var selected_hour = selected.hour();
                    if (this.timePicker12Hour) {
                        start = 1;
                        end = 12;
                        if (selected_hour >= 12)
                            selected_hour -= 12;
                        if (selected_hour === 0)
                            selected_hour = 12;
                    }
                    for (i = start; i <= end; i++) {
                        if (i == selected_hour) {
                            html += '<option value="' + i + '" selected="selected">' + i + '</option>';
                        } else {
                            html += '<option value="' + i + '">' + i + '</option>';
                        }
                    }
                    html += '</select> : ';
                    html += '<select class="minuteselect">';
                    for (i = 0; i < 60; i += this.timePickerIncrement) {
                        var num = i;
                        if (num < 10)
                            num = '0' + num;
                        if (i == selected.minute()) {
                            html += '<option value="' + i + '" selected="selected">' + num + '</option>';
                        } else {
                            html += '<option value="' + i + '">' + num + '</option>';
                        }
                    }
                    html += '</select> ';
                    if (this.timePicker12Hour) {
                        html += '<select class="ampmselect">';
                        if (selected.hour() >= 12) {
                            html += '<option value="AM">AM</option><option value="PM" selected="selected">PM</option>';
                        } else {
                            html += '<option value="AM" selected="selected">AM</option><option value="PM">PM</option>';
                        }
                        html += '</select>';
                    }
                    html += '</div>';
                }
                return html;
            },
            remove: function() {
                this.container.remove();
                this.element.off('.daterangepicker');
                this.element.removeData('daterangepicker');
            }
        };
        $.fn.daterangepicker = function(options, cb) {
            this.each(function() {
                var el = $(this);
                if (el.data('daterangepicker'))
                    el.data('daterangepicker').remove();
                el.data('daterangepicker', new DateRangePicker(el, options, cb));
            });
            return this;
        };
    }));
/*
This file is based on or incorporates material from the projects listed below (Third Party IP). The original copyright notice and the license under which Microsoft received such Third Party IP, are set forth below. Such licenses and notices are provided for informational purposes only. Microsoft licenses the Third Party IP to you under the licensing terms for the Microsoft product. Microsoft reserves all other rights not expressly granted under this agreement, whether by implication, estoppel or otherwise.
Bluebird 2.9.6
Copyright (c) 2014 Petka Antonov
Provided for Informational Purposes Only
MIT License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the Software), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
/**
* bluebird build version 2.9.6
* Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, progress, cancel, using, filter, any, each, timers
*/
!function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        "undefined" != typeof window
            ? e = window
            : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self), e.Promise = t()
    }
}(function() {
    var t, e, r;
    return function n(t, e, r) {
        function i(s, a) {
            if (!e[s]) {
                if (!t[s]) {
                    var u = "function" == typeof _dereq_ && _dereq_;
                    if (!a && u) return u(s, !0);
                    if (o) return o(s, !0);
                    var c = new Error("Cannot find module '" + s + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var l = e[s] = { exports: {} };
                t[s][0].call(l.exports,
                    function(e) {
                        var r = t[s][1][e];
                        return i(r ? r : e)
                    },
                    l,
                    l.exports,
                    n,
                    t,
                    e,
                    r)
            }
            return e[s].exports
        }

        for (var o = "function" == typeof _dereq_ && _dereq_, s = 0; s < r.length; s++) i(r[s]);
        return i
    }({
            1: [
                function(t, e) {
                    "use strict";
                    e.exports = function(t) {
                        function e(t) {
                            var e = new r(t), n = e.promise();
                            return e.setHowMany(1), e.setUnwrap(), e.init(), n
                        }

                        var r = t._SomePromiseArray;
                        t.any = function(t) { return e(t) }, t.prototype.any = function() { return e(this) }
                    }
                }, {}
            ],
            2: [
                function(t, e) {
                    "use strict";

                    function r() {
                        this._isTickUsed = !1, this._lateQueue = new s(16), this._normalQueue = new s(16);
                        var t = this;
                        this.drainQueues = function() { t._drainQueues() }, this
                            ._schedule = o.isStatic ? o(this.drainQueues) : o
                    }

                    var n;
                    try {
                        throw new Error
                    } catch (i) {
                        n = i
                    }
                    var o = t("./schedule.js"),
                        s = t("./queue.js"),
                        a = "undefined" != typeof process ? process : void 0;
                    r.prototype.haveItemsQueued = function() { return this._normalQueue.length() > 0 }, r.prototype
                        ._withDomain = function(t) {
                            return void 0 === a || null == a.domain || t.domain || (t = a.domain.bind(t)), t
                        }, r.prototype.throwLater = function(t, e) {
                        if (1 === arguments.length && (e = t, t = function() { throw e }), t = this
                            ._withDomain(t), "undefined" != typeof setTimeout) setTimeout(function() { t(e) }, 0);
                        else
                            try {
                                this._schedule(function() { t(e) })
                            } catch (r) {
                                throw new Error("No async scheduler available\n\n    See http://goo.gl/m3OTXk\n")
                            }
                    }, r.prototype.invokeLater = function(t, e, r) {
                        t = this._withDomain(t), this._lateQueue.push(t, e, r), this._queueTick()
                    }, r.prototype.invokeFirst = function(t, e, r) {
                        t = this._withDomain(t), this._normalQueue.unshift(t, e, r), this._queueTick()
                    }, r.prototype.invoke = function(t, e, r) {
                        t = this._withDomain(t), this._normalQueue.push(t, e, r), this._queueTick()
                    }, r.prototype.settlePromises = function(t) { this._normalQueue._pushOne(t), this._queueTick() }, r
                        .prototype._drainQueue = function(t) {
                            for (; t.length() > 0;) {
                                var e = t.shift();
                                if ("function" == typeof e) {
                                    var r = t.shift(), n = t.shift();
                                    e.call(r, n)
                                } else e._settlePromises()
                            }
                        }, r.prototype._drainQueues = function() {
                        this._drainQueue(this._normalQueue), this._reset(), this._drainQueue(this._lateQueue)
                    }, r.prototype._queueTick = function() {
                        this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues))
                    }, r.prototype._reset = function() { this._isTickUsed = !1 }, e.exports = new r, e.exports
                        .firstLineError = n
                }, { "./queue.js": 28, "./schedule.js": 31 }
            ],
            3: [
                function(t, e) {
                    "use strict";
                    e.exports = function(t, e, r) {
                        function n() { return this.value }

                        function i() { throw this.reason }

                        function o(t) { return this._then(n, null, null, { value: t }, void 0) }

                        function s(t) { return this._then(i, i, null, { reason: t }, void 0) }

                        function a(t) { this._setBoundTo(t) }

                        t.prototype.bind = function(e) {
                            var n = r(e);
                            if (n instanceof t) {
                                if (!n.isFulfilled()) {
                                    if (n.isRejected()) return t.reject(n.reason());
                                    var i = this.then(), u = i;
                                    return i = i._then(o, s, null, n, void 0), n
                                            ._then(a, i._reject, null, i, null),
                                        i._cancellable() || i._setPendingCancellationParent(u), i
                                }
                                e = n.value()
                            }
                            var i = this.then();
                            return i._setBoundTo(e), i
                        }, t.bind = function(e, r) { return t.resolve(r).bind(e) }, t.prototype
                            ._setPendingCancellationParent = function(t) { this._settledValue = t }, t.prototype
                            ._pendingCancellationParent = function() {
                                if (this.isPending() && void 0 !== this._settledValue) {
                                    var t = this._settledValue;
                                    return t.cancellable(), this._settledValue = void 0, t
                                }
                            }, t.prototype
                            ._setIsMigratingBinding = function() { this._bitField = 8388608 | this._bitField }, t
                            .prototype
                            ._unsetIsMigratingBinding = function() { this._bitField = -8388609 & this._bitField }, t
                            .prototype
                            ._isMigratingBinding = function() { return 8388608 === (8388608 & this._bitField) }, t
                            .prototype._setBoundTo = function(t) { this._boundTo = t }, t.prototype
                            ._isBound = function() { return void 0 !== this._boundTo }
                    }
                }, {}
            ],
            4: [
                function(t, e) {
                    "use strict";

                    function r() {
                        try {
                            Promise === i && (Promise = n)
                        } catch (t) {
                        }
                        return i
                    }

                    var n;
                    "undefined" != typeof Promise && (n = Promise);
                    var i = t("./promise.js")();
                    i.noConflict = r, e.exports = i
                }, { "./promise.js": 23 }
            ],
            5: [
                function(t, e) {
                    "use strict";
                    var r = Object.create;
                    if (r) {
                        var n = r(null), i = r(null);
                        n[" size"] = i[" size"] = 0
                    }
                    e.exports = function(e) {
                        function r(t, r) {
                            var n;
                            if (null != t && (n = t[r]), "function" != typeof n) {
                                var i = "Object " + a.classString(t) + " has no method '" + a.toString(r) + "'";
                                throw new e.TypeError(i)
                            }
                            return n
                        }

                        function n(t) {
                            var e = this.pop(), n = r(t, e);
                            return n.apply(t, this)
                        }

                        function i(t) { return t[this] }

                        function o(t) {
                            var e = +this;
                            return 0 > e && (e = Math.max(0, e + t.length)), t[e]
                        }

                        {
                            var s, a = t("./util.js"), u = a.canEvaluate;
                            a.isIdentifier
                        }
                        e.prototype.call = function(t) {
                            for (var e = arguments
                                         .length,
                            r = new Array(e - 1),
                            i = 1;
                            e > i;
                            ++i) r[i - 1] = arguments[i];
                            return r.push(t), this._then(n, void 0, void 0, r, void 0)
                        }, e.prototype.get = function(t) {
                            var e, r = "number" == typeof t;
                            if (r) e = o;
                            else if (u) {
                                var n = s(t);
                                e = null !== n ? n : i
                            } else e = i;
                            return this._then(e, void 0, void 0, t, void 0)
                        }
                    }
                }, { "./util.js": 38 }
            ],
            6: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e) {
                        var r = t("./errors.js"), n = t("./async.js"), i = r.CancellationError;
                        e.prototype._cancel = function(t) {
                            if (!this.isCancellable()) return this;
                            for (var e, r = this; void 0 !== (e = r._cancellationParent) && e.isCancellable();) r = e;
                            this._unsetCancellable(), r._target()._rejectCallback(t, !1, !0)
                        }, e.prototype.cancel = function(t) {
                            return this.isCancellable()
                                ? (void 0 === t && (t = new i), n.invokeLater(this._cancel, this, t), this)
                                : this
                        }, e.prototype.cancellable = function() {
                            return this._cancellable()
                                ? this
                                : (this._setCancellable(), this._cancellationParent = this
                                    ._pendingCancellationParent(), this)
                        }, e.prototype.uncancellable = function() {
                            var t = this.then();
                            return t._unsetCancellable(), t
                        }, e.prototype.fork = function(t, e, r) {
                            var n = this._then(t, e, r, void 0, void 0);
                            return n._setCancellable(), n._cancellationParent = void 0, n
                        }
                    }
                }, { "./async.js": 2, "./errors.js": 13 }
            ],
            7: [
                function(t, e) {
                    "use strict";
                    e.exports = function() {
                        function e(t) {
                            this._parent = t;
                            var r = this._length = 1 + (void 0 === t ? 0 : t._length);
                            m(this, e), r > 32 && this.uncycle()
                        }

                        function r(t, e) {
                            for (var r = 0;
                                r < e.length - 1;
                                ++r
                            ) e[r].push("From previous event:"), e[r] = e[r].join("\n");
                            return r < e.length && (e[r] = e[r].join("\n")), t + "\n" + e.join("\n")
                        }

                        function n(t) {
                            for (var e = 0; e < t.length; ++e)
                                (0 === t[e].length || e + 1 < t.length && t[e][0] === t[e + 1][0]) &&
                                    (t.splice(e, 1), e--)
                        }

                        function i(t) {
                            for (var e = t[0], r = 1; r < t.length; ++r) {
                                for (var n = t[r], i = e.length - 1, o = e[i], s = -1, a = n.length - 1; a >= 0; --a)
                                    if (n[a] === o) {
                                        s = a;
                                        break
                                    }
                                for (var a = s; a >= 0; --a) {
                                    var u = n[a];
                                    if (e[i] !== u) break;
                                    e.pop(), i--
                                }
                                e = n
                            }
                        }

                        function o(t) {
                            for (var e = [], r = 0; r < t.length; ++r) {
                                var n = t[r], i = f.test(n) || "    (No stack trace)" === n, o = i && v(n);
                                i && !o && (d && " " !== n.charAt(0) && (n = "    " + n), e.push(n))
                            }
                            return e
                        }

                        function s(t) {
                            for (var e = t.stack.replace(/\s+$/g, "").split("\n"), r = 0; r < e.length; ++r) {
                                var n = e[r];
                                if ("    (No stack trace)" === n || f.test(n)) break
                            }
                            return r > 0 && (e = e.slice(r)), e
                        }

                        function a(t) {
                            var e;
                            if ("function" == typeof t) e = "[function " + (t.name || "anonymous") + "]";
                            else {
                                e = t.toString();
                                var r = /\[object [a-zA-Z0-9$_]+\]/;
                                if (r.test(e))
                                    try {
                                        var n = JSON.stringify(t);
                                        e = n
                                    } catch (i) {
                                    }
                                0 === e.length && (e = "(empty array)")
                            }
                            return"(<" + u(e) + ">, no stack trace)"
                        }

                        function u(t) {
                            var e = 41;
                            return t.length < e ? t : t.substr(0, e - 3) + "..."
                        }

                        function c(t) {
                            var e = t.match(y);
                            return e ? { fileName: e[1], line: parseInt(e[2], 10) } : void 0
                        }

                        var l = t("./async.js"),
                            h = t("./util.js"),
                            p = /[\\\/]bluebird[\\\/]js[\\\/](main|debug|zalgo|instrumented)/,
                            f = null,
                            _ = null,
                            d = !1;
                        h.inherits(e, Error), e.prototype.uncycle = function() {
                            var t = this._length;
                            if (!(2 > t)) {
                                for (var e = [], r = {}, n = 0, i = this; void 0 !== i; ++n) e.push(i), i = i._parent;
                                t = this._length = n;
                                for (var n = t - 1; n >= 0; --n) {
                                    var o = e[n].stack;
                                    void 0 === r[o] && (r[o] = n)
                                }
                                for (var n = 0; t > n; ++n) {
                                    var s = e[n].stack, a = r[s];
                                    if (void 0 !== a && a !== n) {
                                        a > 0 && (e[a - 1]._parent = void 0, e[a - 1]._length = 1), e[n]
                                            ._parent = void 0, e[n]._length = 1;
                                        var u = n > 0 ? e[n - 1] : this;
                                        t - 1 > a
                                            ? (u._parent = e[a + 1], u._parent.uncycle(), u
                                                ._length = u._parent._length + 1)
                                            : (u._parent = void 0, u._length = 1);
                                        for (var c = u._length + 1, l = n - 2; l >= 0; --l) e[l]._length = c, c++;
                                        return
                                    }
                                }
                            }
                        }, e.prototype.parent = function() { return this._parent }, e.prototype
                            .hasParent = function() { return void 0 !== this._parent }, e.prototype
                            .attachExtraTrace = function(t) {
                                if (!t.__stackCleaned__) {
                                    this.uncycle();
                                    for (var s = e.parseStackAndMessage(t), a = s.message, u = [s.stack], c = this;
                                        void 0 !== c;
                                    ) u.push(o(c.stack.split("\n"))), c = c._parent;
                                    i(u), n(u), t.stack = r(a, u), t.__stackCleaned__ = !0
                                }
                            }, e.parseStackAndMessage = function(t) {
                            var e = t.stack, r = t.toString();
                            return e = "string" == typeof e && e.length > 0 ? s(t) : ["    (No stack trace)"],
                                { message: r, stack: o(e) }
                        }, e.formatAndLogError = function(t, e) {
                            if ("object" == typeof console) {
                                var r;
                                if ("object" == typeof t || "function" == typeof t) {
                                    var n = t.stack;
                                    r = e + _(n, t)
                                } else r = e + String(t);
                                "function" == typeof console.warn || "object" == typeof console.warn
                                    ? console.warn(r)
                                    : ("function" == typeof console.log || "object" == typeof console.log) &&
                                    console.log(r)
                            }
                        }, e.unhandledRejection = function(t) {
                            e.formatAndLogError(t, "^--- With additional stack trace: ")
                        }, e.isSupported = function() { return"function" == typeof m }, e
                            .fireRejectionEvent = function(t, r, n, i) {
                                var o = !1;
                                try {
                                    "function" == typeof r && (o = !0, "rejectionHandled" === t ? r(i) : r(n, i))
                                } catch (s) {
                                    l.throwLater(s)
                                }
                                var a = !1;
                                try {
                                    a = j(t, n, i)
                                } catch (s) {
                                    a = !0, l.throwLater(s)
                                }
                                var u = !1;
                                if (g)
                                    try {
                                        u = g(t.toLowerCase(), { reason: n, promise: i })
                                    } catch (s) {
                                        u = !0, l.throwLater(s)
                                    }
                                a ||
                                    o ||
                                    u ||
                                    "unhandledRejection" !== t ||
                                    e.formatAndLogError(n, "Possibly unhandled ")
                            };
                        var v = function() { return!1 }, y = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
                        e.setBounds = function(t, r) {
                            if (e.isSupported()) {
                                for (var n, i, o = t.stack.split("\n"), s = r.stack.split("\n"), a = -1, u = -1, l = 0;
                                    l < o.length;
                                    ++l) {
                                    var h = c(o[l]);
                                    if (h) {
                                        n = h.fileName, a = h.line;
                                        break
                                    }
                                }
                                for (var l = 0; l < s.length; ++l) {
                                    var h = c(s[l]);
                                    if (h) {
                                        i = h.fileName, u = h.line;
                                        break
                                    }
                                }
                                0 > a ||
                                    0 > u ||
                                    !n ||
                                    !i ||
                                    n !== i ||
                                    a >= u ||
                                    (v = function(t) {
                                        if (p.test(t)) return!0;
                                        var e = c(t);
                                        return e && e.fileName === n && a <= e.line && e.line <= u ? !0 : !1
                                    })
                            }
                        };
                        var g,
                            m = function() {
                                var t = /^\s*at\s*/,
                                    e = function(t, e) {
                                        return"string" == typeof t
                                            ? t
                                            : void 0 !== e.name && void 0 !== e.message ? e.toString() : a(e)
                                    };
                                if ("number" == typeof Error.stackTraceLimit &&
                                    "function" == typeof Error.captureStackTrace) {
                                    Error.stackTraceLimit = Error.stackTraceLimit + 6, f = t, _ = e;
                                    var r = Error.captureStackTrace;
                                    return v = function(t) { return p.test(t) },
                                        function(t, e) {
                                            Error.stackTraceLimit = Error.stackTraceLimit + 6, r(t, e), Error
                                                .stackTraceLimit = Error.stackTraceLimit - 6
                                        }
                                }
                                var n = new Error;
                                if ("string" == typeof n.stack && n.stack.split("\n")[0].indexOf("stackDetection@") >= 0
                                ) return f = /@/, _ = e, d = !0, function(t) { t.stack = (new Error).stack };
                                var i;
                                try {
                                    throw new Error
                                } catch (o) {
                                    i = "stack" in o
                                }
                                return"stack" in n || !i
                                    ? (_ = function(t, e) {
                                        return"string" == typeof t
                                            ? t
                                            : "object" != typeof e && "function" != typeof e ||
                                            void 0 === e.name ||
                                            void 0 === e.message
                                            ? a(e)
                                            : e.toString()
                                    }, null)
                                    : (f = t, _ = e, function(t) {
                                        Error.stackTraceLimit = Error.stackTraceLimit + 6;
                                        try {
                                            throw new Error
                                        } catch (e) {
                                            t.stack = e.stack
                                        }
                                        Error.stackTraceLimit = Error.stackTraceLimit - 6
                                    })
                            }([]),
                            j = function() {
                                if (h.isNode)
                                    return function(t, e, r) {
                                        return"rejectionHandled" === t ? process.emit(t, r) : process.emit(t, e, r)
                                    };
                                var t = !1, e = !0;
                                try {
                                    var r = new self.CustomEvent("test");
                                    t = r instanceof CustomEvent
                                } catch (n) {
                                }
                                if (!t)
                                    try {
                                        var i = document.createEvent("CustomEvent");
                                        i.initCustomEvent("testingtheevent", !1, !0, {}), self.dispatchEvent(i)
                                    } catch (n) {
                                        e = !1
                                    }
                                e &&
                                (g = function(e, r) {
                                    var n;
                                    return t
                                        ? n = new self.CustomEvent(e, { detail: r, bubbles: !1, cancelable: !0 })
                                        : self.dispatchEvent &&
                                        (n = document.createEvent("CustomEvent"), n
                                            .initCustomEvent(e, !1, !0, r)), n ? !self.dispatchEvent(n) : !1
                                });
                                var o = {};
                                return o.unhandledRejection = "onunhandledRejection".toLowerCase(), o
                                    .rejectionHandled = "onrejectionHandled".toLowerCase(), function(t, e, r) {
                                    var n = o[t], i = self[n];
                                    return i
                                        ? ("rejectionHandled" === t ? i.call(self, r) : i.call(self, e, r), !0)
                                        : !1
                                }
                            }();
                        return e
                    }
                }, { "./async.js": 2, "./util.js": 38 }
            ],
            8: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e) {
                        function r(t, e, r) { this._instances = t, this._callback = e, this._promise = r }

                        function n(t, e) {
                            var r = {}, n = s(t).call(r, e);
                            if (n === a) return n;
                            var i = u(r);
                            return i.length
                                ? (a
                                    .e = new
                                    c("Catch filter must inherit from Error or be a simple predicate function\n\n    See http://goo.gl/o84o68\n"), a)
                                : n
                        }

                        var i = t("./util.js"),
                            o = t("./errors.js"),
                            s = i.tryCatch,
                            a = i.errorObj,
                            u = t("./es5.js").keys,
                            c = o.TypeError;
                        return r.prototype.doFilter = function(t) {
                            for (var r = this._callback,
                                i = this._promise,
                                o = i._boundTo,
                                u = 0,
                                c = this._instances.length;
                                c > u;
                                ++u) {
                                var l = this
                                        ._instances[u],
                                h = l === Error || null != l && l.prototype instanceof Error;
                                if (h && t instanceof l) {
                                    var p = s(r).call(o, t);
                                    return p === a ? (e.e = p.e, e) : p
                                }
                                if ("function" == typeof l && !h) {
                                    var f = n(l, t);
                                    if (f === a) {
                                        t = a.e;
                                        break
                                    }
                                    if (f) {
                                        var p = s(r).call(o, t);
                                        return p === a ? (e.e = p.e, e) : p
                                    }
                                }
                            }
                            return e.e = t, e
                        }, r
                    }
                }, { "./errors.js": 13, "./es5.js": 14, "./util.js": 38 }
            ],
            9: [
                function(t, e) {
                    "use strict";
                    e.exports = function(t, e, r) {
                        function n() { this._trace = new e(o()) }

                        function i() { return r() ? new n : void 0 }

                        function o() {
                            var t = s.length - 1;
                            return t >= 0 ? s[t] : void 0
                        }

                        var s = [];
                        return n.prototype._pushContext = function() {
                            r() && void 0 !== this._trace && s.push(this._trace)
                        }, n.prototype._popContext = function() { r() && void 0 !== this._trace && s.pop() }, t
                            .prototype
                            ._peekContext = o, t.prototype._pushContext = n.prototype._pushContext, t.prototype
                            ._popContext = n.prototype._popContext, i
                    }
                }, {}
            ],
            10: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r) {
                        var n,
                            i,
                            o = t("./async.js"),
                            s = t("./errors.js").Warning,
                            a = t("./util.js"),
                            u = a.canAttachTrace,
                            c = !1 ||
                                a.isNode && (!!process.env.BLUEBIRD_DEBUG || "development" === process.env.NODE_ENV);
                        return e.prototype
                                ._ensurePossibleRejectionHandled = function() {
                                    this._setRejectionIsUnhandled(), o
                                        .invokeLater(this._notifyUnhandledRejection, this, void 0)
                                }, e.prototype
                                ._notifyUnhandledRejectionIsHandled =
                                function() { r.fireRejectionEvent("rejectionHandled", n, void 0, this) }, e.prototype
                                ._notifyUnhandledRejection = function() {
                                    if (this._isRejectionUnhandled()) {
                                        var t = this._getCarriedStackTrace() || this._settledValue;
                                        this._setUnhandledRejectionIsNotified(), r
                                            .fireRejectionEvent("unhandledRejection", i, t, this)
                                    }
                                }, e.prototype
                                ._setUnhandledRejectionIsNotified =
                                function() { this._bitField = 524288 | this._bitField }, e
                                .prototype
                                ._unsetUnhandledRejectionIsNotified =
                                function() { this._bitField = -524289 & this._bitField },
                            e.prototype
                                ._isUnhandledRejectionNotified = function() { return(524288 & this._bitField) > 0 }, e
                                .prototype
                                ._setRejectionIsUnhandled = function() { this._bitField = 2097152 | this._bitField }, e
                                .prototype
                                ._unsetRejectionIsUnhandled = function() {
                                    this
                                            ._bitField = -2097153 & this._bitField,
                                        this._isUnhandledRejectionNotified() &&
                                        (this._unsetUnhandledRejectionIsNotified(), this
                                            ._notifyUnhandledRejectionIsHandled())
                                }, e.prototype
                                ._isRejectionUnhandled = function() { return(2097152 & this._bitField) > 0 }, e
                                .prototype._setCarriedStackTrace = function(t) {
                                    this._bitField = 1048576 | this._bitField, this._fulfillmentHandler0 = t
                                }, e.prototype
                                ._isCarryingStackTrace = function() { return(1048576 & this._bitField) > 0 }, e
                                .prototype._getCarriedStackTrace = function() {
                                    return this._isCarryingStackTrace() ? this._fulfillmentHandler0 : void 0
                                }, e.prototype
                                ._captureStackTrace = function() {
                                    return c && (this._trace = new r(this._peekContext())), this
                                }, e.prototype._attachExtraTrace = function(t, e) {
                                if (c && u(t)) {
                                    var n = this._trace;
                                    if (void 0 !== n && e && (n = n._parent), void 0 !== n) n.attachExtraTrace(t);
                                    else if (!t.__stackCleaned__) {
                                        var i = r.parseStackAndMessage(t);
                                        t.stack = i.stack.join("\n"), t.__stackCleaned__ = !0
                                    }
                                }
                            }, e.prototype._warn = function(t) {
                                var e = new s(t), n = this._peekContext();
                                if (n) n.attachExtraTrace(e);
                                else {
                                    var i = r.parseStackAndMessage(e);
                                    e.stack = i.message + "\n" + i.stack.join("\n")
                                }
                                r.formatAndLogError(e, "")
                            }, e
                                .onPossiblyUnhandledRejection = function(t) { i = "function" == typeof t ? t : void 0 },
                            e
                                .onUnhandledRejectionHandled = function(t) { n = "function" == typeof t ? t : void 0 },
                            e
                                .longStackTraces = function() {
                                    if (o
                                        .haveItemsQueued() &&
                                        c === !1)
                                        throw new
                                            Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/DT1qyG\n");
                                    c = r.isSupported()
                                }, e
                                .hasLongStackTraces = function() { return c && r.isSupported() },
                            r.isSupported() || (e.longStackTraces = function() {}, c = !1), function() { return c }
                    }
                }, { "./async.js": 2, "./errors.js": 13, "./util.js": 38 }
            ],
            11: [
                function(t, e) {
                    "use strict";
                    var r = t("./util.js"), n = r.isPrimitive, i = r.wrapsPrimitiveReceiver;
                    e.exports = function(t) {
                        var e = function() { return this },
                            r = function() { throw this },
                            o = function(t, e) {
                                return 1 === e ? function() { throw t } : 2 === e ? function() { return t } : void 0
                            };
                        t.prototype["return"] = t.prototype
                            .thenReturn = function(t) {
                                return i && n(t)
                                    ? this._then(o(t, 2), void 0, void 0, void 0, void 0)
                                    : this._then(e, void 0, void 0, t, void 0)
                            }, t.prototype["throw"] = t.prototype
                            .thenThrow = function(t) {
                                return i && n(t)
                                    ? this._then(o(t, 1), void 0, void 0, void 0, void 0)
                                    : this._then(r, void 0, void 0, t, void 0)
                            }
                    }
                }, { "./util.js": 38 }
            ],
            12: [
                function(t, e) {
                    "use strict";
                    e.exports = function(t, e) {
                        var r = t.reduce;
                        t.prototype.each = function(t) { return r(this, t, null, e) }, t
                            .each = function(t, n) { return r(t, n, null, e) }
                    }
                }, {}
            ],
            13: [
                function(t, e) {
                    "use strict";

                    function r(t, e) {
                        function r(n) {
                            return this instanceof r
                                ? (c(this, "message", "string" == typeof n ? n : e), c(this, "name", t), void(
                                    Error.captureStackTrace
                                        ? Error.captureStackTrace(this, this.constructor)
                                        : Error.call(this)))
                                : new r(n)
                        }

                        return u(r, Error), r
                    }

                    function n(t) {
                        return this instanceof n
                            ? (c(this, "name", "OperationalError"), c(this, "message", t), this.cause = t, this
                                .isOperational = !0, void(t instanceof Error
                                ? (c(this, "message", t.message), c(this, "stack", t.stack))
                                : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)))
                            : new n(t)
                    }

                    var i,
                        o,
                        s = t("./es5.js").freeze,
                        a = t("./util.js"),
                        u = a.inherits,
                        c = a.notEnumerableProp,
                        l = r("Warning", "warning"),
                        h = r("CancellationError", "cancellation error"),
                        p = r("TimeoutError", "timeout error"),
                        f = r("AggregateError", "aggregate error");
                    try {
                        i = TypeError, o = RangeError
                    } catch (_) {
                        i = r("TypeError", "type error"), o = r("RangeError", "range error")
                    }
                    for (var d =
                                 "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "),
                        v = 0;
                        v < d.length;
                        ++v) "function" == typeof Array.prototype[d[v]] && (f.prototype[d[v]] = Array.prototype[d[v]]);
                    f.prototype.length = 0, f.prototype.isOperational = !0;
                    var y = 0;
                    f.prototype.toString = function() {
                        var t = Array(4 * y + 1).join(" "), e = "\n" + t + "AggregateError of:\n";
                        y++, t = Array(4 * y + 1).join(" ");
                        for (var r = 0; r < this.length; ++r) {
                            for (var n = this[r] === this ? "[Circular AggregateError]" : this[r] + "",
                                i = n.split("\n"),
                                o = 0;
                                o < i.length;
                                ++o) i[o] = t + i[o];
                            n = i.join("\n"), e += n + "\n"
                        }
                        return y--, e
                    }, u(n, Error);
                    var g = Error.__BluebirdErrorTypes__;
                    g ||
                    (g = s({
                        CancellationError: h,
                        TimeoutError: p,
                        OperationalError: n,
                        RejectionError: n,
                        AggregateError: f
                    }), c(Error, "__BluebirdErrorTypes__", g)), e
                        .exports = {
                            Error: Error,
                            TypeError: i,
                            RangeError: o,
                            CancellationError: g.CancellationError,
                            OperationalError: g.OperationalError,
                            TimeoutError: g.TimeoutError,
                            AggregateError: g.AggregateError,
                            Warning: l
                        }
                }, { "./es5.js": 14, "./util.js": 38 }
            ],
            14: [
                function(t, e) {
                    var r = function() {
                        "use strict";
                        return void 0 === this
                    }();
                    if (r)
                        e.exports = {
                            freeze: Object.freeze,
                            defineProperty: Object.defineProperty,
                            keys: Object.keys,
                            getPrototypeOf: Object.getPrototypeOf,
                            isArray: Array.isArray,
                            isES5: r,
                            propertyIsWritable: function(t, e) {
                                var r = Object.getOwnPropertyDescriptor(t, e);
                                return!(r && !r.writable && !r.set)
                            }
                        };
                    else {
                        var n = {}.hasOwnProperty,
                            i = {}.toString,
                            o = {}.constructor.prototype,
                            s = function(t) {
                                var e = [];
                                for (var r in t) n.call(t, r) && e.push(r);
                                return e
                            },
                            a = function(t, e, r) { return t[e] = r.value, t },
                            u = function(t) { return t },
                            c = function(t) {
                                try {
                                    return Object(t).constructor.prototype
                                } catch (e) {
                                    return o
                                }
                            },
                            l = function(t) {
                                try {
                                    return"[object Array]" === i.call(t)
                                } catch (e) {
                                    return!1
                                }
                            };
                        e.exports = {
                            isArray: l,
                            keys: s,
                            defineProperty: a,
                            freeze: u,
                            getPrototypeOf: c,
                            isES5: r,
                            propertyIsWritable: function() { return!0 }
                        }
                    }
                }, {}
            ],
            15: [
                function(t, e) {
                    "use strict";
                    e.exports = function(t, e) {
                        var r = t.map;
                        t.prototype.filter = function(t, n) { return r(this, t, n, e) }, t
                            .filter = function(t, n, i) { return r(t, n, i, e) }
                    }
                }, {}
            ],
            16: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r, n) {
                        function i() { return this }

                        function o() { throw this }

                        function s(t) { return function() { return t } }

                        function a(t) { return function() { throw t } }

                        function u(t, e, r) {
                            var n;
                            return n = p && f(e) ? r ? s(e) : a(e) : r ? i : o, t._then(n, _, void 0, e, void 0)
                        }

                        function c(t) {
                            var i = this.promise, o = this.handler, s = i._isBound() ? o.call(i._boundTo) : o();
                            if (void 0 !== s) {
                                var a = n(s, i);
                                if (a instanceof e) return a = a._target(), u(a, t, i.isFulfilled())
                            }
                            return i.isRejected() ? (r.e = t, r) : t
                        }

                        function l(t) {
                            var r = this.promise, i = this.handler, o = r._isBound() ? i.call(r._boundTo, t) : i(t);
                            if (void 0 !== o) {
                                var s = n(o, r);
                                if (s instanceof e) return s = s._target(), u(s, t, !0)
                            }
                            return t
                        }

                        var h = t("./util.js"), p = h.wrapsPrimitiveReceiver, f = h.isPrimitive, _ = h.thrower;
                        e.prototype._passThroughHandler = function(t, e) {
                            if ("function" != typeof t) return this.then();
                            var r = { promise: this, handler: t };
                            return this._then(e ? c : l, e ? c : void 0, void 0, r, void 0)
                        }, e.prototype.lastly = e
                            .prototype["finally"] = function(t) { return this._passThroughHandler(t, !0) }, e.prototype
                            .tap = function(t) { return this._passThroughHandler(t, !1) }
                    }
                }, { "./util.js": 38 }
            ],
            17: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r, n, i) {
                        function o(t, r, n) {
                            for (var o = 0; o < r.length; ++o) {
                                n._pushContext();
                                var s = h(r[o])(t);
                                if (n._popContext(), s === l) {
                                    n._pushContext();
                                    var a = e.reject(l.e);
                                    return n._popContext(), a
                                }
                                var u = i(s, n);
                                if (u instanceof e) return u
                            }
                            return null
                        }

                        function s(t, r, i, o) {
                            var s = this._promise = new e(n);
                            s._captureStackTrace(), this._stack = o, this._generatorFunction = t, this
                                ._receiver = r, this
                                ._generator = void 0, this._yieldHandlers = "function" == typeof i ? [i].concat(p) : p
                        }

                        var a = t("./errors.js"),
                            u = a.TypeError,
                            c = t("./util.js"),
                            l = c.errorObj,
                            h = c.tryCatch,
                            p = [];
                        s.prototype.promise = function() { return this._promise }, s.prototype
                            ._run = function() {
                                this._generator = this._generatorFunction.call(this._receiver), this._receiver = this
                                    ._generatorFunction = void 0, this._next(void 0)
                            }, s.prototype._continue = function(t) {
                            if (t === l) return this._promise._rejectCallback(t.e, !1, !0);
                            var r = t.value;
                            if (t.done === !0) this._promise._resolveCallback(r);
                            else {
                                var n = i(r, this._promise);
                                if (!(n instanceof e) && (n = o(n, this._yieldHandlers, this._promise), null === n)
                                )
                                    return void this
                                        ._throw(new
                                            u("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/4Y4pDk\n\n".replace("%s", r) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));
                                n._then(this._next, this._throw, void 0, this, null)
                            }
                        }, s.prototype._throw = function(t) {
                            this._promise._attachExtraTrace(t), this._promise._pushContext();
                            var e = h(this._generator["throw"]).call(this._generator, t);
                            this._promise._popContext(), this._continue(e)
                        }, s.prototype._next = function(t) {
                            this._promise._pushContext();
                            var e = h(this._generator.next).call(this._generator, t);
                            this._promise._popContext(), this._continue(e)
                        }, e.coroutine = function(t, e) {
                            if ("function" != typeof t)
                                throw new u("generatorFunction must be a function\n\n    See http://goo.gl/6Vqhm0\n");
                            var r = Object(e).yieldHandler, n = s, i = (new Error).stack;
                            return function() {
                                var e = t.apply(this, arguments), o = new n(void 0, void 0, r, i);
                                return o._generator = e, o._next(void 0), o.promise()
                            }
                        }, e.coroutine.addYieldHandler = function(t) {
                            if ("function" != typeof t)
                                throw new u("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                            p.push(t)
                        }, e.spawn = function(t) {
                            if ("function" != typeof t)
                                return r("generatorFunction must be a function\n\n    See http://goo.gl/6Vqhm0\n");
                            var n = new s(t, this), i = n.promise();
                            return n._run(e.spawn), i
                        }
                    }
                }, { "./errors.js": 13, "./util.js": 38 }
            ],
            18: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r, n, i) {
                        {
                            var o = t("./util.js");
                            o.canEvaluate, o.tryCatch, o.errorObj
                        }
                        e.join = function() {
                            var t, e = arguments.length - 1;
                            if (e > 0 && "function" == typeof arguments[e]) {
                                t = arguments[e];
                                var n
                            }
                            for (var i = arguments.length, o = new Array(i), s = 0; i > s; ++s) o[s] = arguments[s];
                            t && o.pop();
                            var n = new r(o).promise();
                            return void 0 !== t ? n.spread(t) : n
                        }
                    }
                }, { "./util.js": 38 }
            ],
            19: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r, n, i, o) {
                        function s(t, e, r, n) {
                            this.constructor$(t), this._promise._setIsSpreadable(), this._promise
                                ._captureStackTrace(), this
                                ._callback = e, this._preservedValues = n === o ? new Array(this.length()) : null, this
                                ._limit = r, this._inFlight = 0, this._queue = r >= 1 ? [] : p, this._init$(void 0, -2)
                        }

                        function a(t, e, r, n) {
                            var i = "object" == typeof r && null !== r ? r.concurrency : 0;
                            return i = "number" == typeof i && isFinite(i) && i >= 1 ? i : 0, new s(t, e, i, n)
                        }

                        var u = t("./util.js"), c = u.tryCatch, l = u.errorObj, h = {}, p = [];
                        u.inherits(s, r), s.prototype._init = function() {}, s.prototype
                            ._promiseFulfilled = function(t, r) {
                                var n = this._values, o = this.length(), s = this._preservedValues, a = this._limit;
                                if (n[r] === h) {
                                    if (n[r] = t, a >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())
                                    ) return
                                } else {
                                    if (a >= 1 && this._inFlight >= a) return n[r] = t, void this._queue.push(r);
                                    null !== s && (s[r] = t);
                                    var u = this._callback, p = this._promise._boundTo;
                                    this._promise._pushContext();
                                    var f = c(u).call(p, t, r, o);
                                    if (this._promise._popContext(), f === l) return this._reject(f.e);
                                    var _ = i(f, this._promise);
                                    if (_ instanceof e) {
                                        if (_ = _._target(), _
                                            ._isPending())
                                            return a >= 1 && this._inFlight++, n[r] = h, _._proxyPromiseArray(this, r);
                                        if (!_._isFulfilled()) return this._reject(_._reason());
                                        f = _._value()
                                    }
                                    n[r] = f
                                }
                                var d = ++this._totalResolved;
                                d >= o && (null !== s ? this._filter(n, s) : this._resolve(n))
                            }, s.prototype._drainQueue = function() {
                            for (var t = this._queue, e = this._limit, r = this._values;
                                t.length > 0 && this._inFlight < e;
                            ) {
                                if (this._isResolved()) return;
                                var n = t.pop();
                                this._promiseFulfilled(r[n], n)
                            }
                        }, s.prototype._filter = function(t, e) {
                            for (var r = e.length, n = new Array(r), i = 0, o = 0; r > o; ++o) t[o] && (n[i++] = e[o]);
                            n.length = i, this._resolve(n)
                        }, s.prototype.preservedValues = function() { return this._preservedValues }, e.prototype
                            .map = function(t, e) {
                                return"function" != typeof t
                                    ? n("fn must be a function\n\n    See http://goo.gl/916lJJ\n")
                                    : a(this, t, e, null).promise()
                            }, e.map = function(t, e, r, i) {
                            return"function" != typeof e
                                ? n("fn must be a function\n\n    See http://goo.gl/916lJJ\n")
                                : a(t, e, r, i).promise()
                        }
                    }
                }, { "./util.js": 38 }
            ],
            20: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r, n, i) {
                        var o = t("./util.js"), s = o.tryCatch;
                        e.method = function(t) {
                            if ("function" != typeof t)
                                throw new e.TypeError("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                            return function() {
                                var n = new e(r);
                                n._captureStackTrace(), n._pushContext();
                                var i = s(t).apply(this, arguments);
                                return n._popContext(), n._resolveFromSyncValue(i), n
                            }
                        }, e.attempt = e["try"] = function(t, n, a) {
                            if ("function" != typeof t)
                                return i("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                            var u = new e(r);
                            u._captureStackTrace(), u._pushContext();
                            var c = o.isArray(n) ? s(t).apply(a, n) : s(t).call(a, n);
                            return u._popContext(), u._resolveFromSyncValue(c), u
                        }, e.prototype._resolveFromSyncValue = function(t) {
                            t === o.errorObj ? this._rejectCallback(t.e, !1, !0) : this._resolveCallback(t, !0)
                        }
                    }
                }, { "./util.js": 38 }
            ],
            21: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e) {
                        function r(t, e) {
                            var r = this;
                            if (!o.isArray(t)) return n.call(r, t, e);
                            var i = a(e).apply(r._boundTo, [null].concat(t));
                            i === u && s.throwLater(i.e)
                        }

                        function n(t, e) {
                            var r = this, n = r._boundTo, i = void 0 === t ? a(e).call(n, null) : a(e).call(n, null, t);
                            i === u && s.throwLater(i.e)
                        }

                        function i(t, e) {
                            var r = this;
                            if (!t) {
                                var n = r._target(), i = n._getCarriedStackTrace();
                                i.cause = t, t = i
                            }
                            var o = a(e).call(r._boundTo, t);
                            o === u && s.throwLater(o.e)
                        }

                        var o = t("./util.js"), s = t("./async.js"), a = o.tryCatch, u = o.errorObj;
                        e.prototype.nodeify = function(t, e) {
                            if ("function" == typeof t) {
                                var o = n;
                                void 0 !== e && Object(e).spread && (o = r), this._then(o, i, void 0, this, t)
                            }
                            return this
                        }
                    }
                }, { "./async.js": 2, "./util.js": 38 }
            ],
            22: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r) {
                        var n = t("./util.js"), i = t("./async.js"), o = n.tryCatch, s = n.errorObj;
                        e.prototype.progressed = function(t) { return this._then(void 0, void 0, t, void 0, void 0) }, e
                            .prototype._progress = function(t) {
                                this._isFollowingOrFulfilledOrRejected() || this._target()._progressUnchecked(t)
                            }, e.prototype
                            ._progressHandlerAt = function(t) {
                                return 0 === t ? this._progressHandler0 : this[(t << 2) + t - 5 + 2]
                            }, e.prototype._doProgressWith = function(t) {
                            var r = t.value, i = t.handler, a = t.promise, u = t.receiver, c = o(i).call(u, r);
                            if (c === s) {
                                if (null != c.e && "StopProgressPropagation" !== c.e.name) {
                                    var l = n.canAttachTrace(c.e) ? c.e : new Error(n.toString(c.e));
                                    a._attachExtraTrace(l), a._progress(c.e)
                                }
                            } else c instanceof e ? c._then(a._progress, null, null, a, void 0) : a._progress(c)
                        }, e.prototype._progressUnchecked = function(t) {
                            for (var n = this._length(), o = this._progress, s = 0; n > s; s++) {
                                var a = this._progressHandlerAt(s), u = this._promiseAt(s);
                                if (u instanceof e)
                                    "function" == typeof a
                                        ? i.invoke(this._doProgressWith,
                                            this,
                                            { handler: a, promise: u, receiver: this._receiverAt(s), value: t })
                                        : i.invoke(o, u, t);
                                else {
                                    var c = this._receiverAt(s);
                                    "function" == typeof a
                                        ? a.call(c, t, u)
                                        : c instanceof r && !c._isResolved() && c._promiseProgressed(t, u)
                                }
                            }
                        }
                    }
                }, { "./async.js": 2, "./util.js": 38 }
            ],
            23: [
                function(t, e) {
                    "use strict";
                    e.exports = function() {
                        function e(t) {
                            if ("function" != typeof t)
                                throw new
                                    u("the promise constructor requires a resolver function\n\n    See http://goo.gl/EC22Yn\n");
                            if (this.constructor !== e)
                                throw new
                                    u("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/KsIlge\n");
                            this._bitField = 0, this._fulfillmentHandler0 = void 0, this
                                ._rejectionHandler0 = void 0, this
                                ._progressHandler0 = void 0, this._promise0 = void 0, this._receiver0 = void 0, this
                                ._settledValue = void 0, this._boundTo = void 0, t !== c && this._resolveFromResolver(t)
                        }

                        var r = function() {
                                return new u("circular promise resolution chain\n\n    See http://goo.gl/LhFpo0\n")
                            },
                            n = function() { return new e.PromiseInspection(this._target()) },
                            i = function(t) { return e.reject(new u(t)) },
                            o = t("./util.js"),
                            s = t("./async.js"),
                            a = t("./errors.js"),
                            u = e.TypeError = a.TypeError;
                        e.RangeError = a.RangeError, e.CancellationError = a.CancellationError, e.TimeoutError = a
                            .TimeoutError, e.OperationalError = a.OperationalError, e.RejectionError = a
                            .OperationalError, e
                            .AggregateError = a.AggregateError;
                        var c = function() {},
                            l = {},
                            h = { e: null },
                            p = t("./thenables.js")(e, c),
                            f = t("./promise_array.js")(e, c, p, i),
                            _ = t("./captured_trace.js")(),
                            d = t("./debuggability.js")(e, _),
                            v = t("./context.js")(e, _, d),
                            y = t("./catch_filter.js")(h),
                            g = t("./promise_resolver.js"),
                            m = g._nodebackForPromise,
                            j = o.errorObj,
                            b = o.tryCatch;
                        return e.prototype.toString = function() { return"[object Promise]" }, e.prototype.caught = e
                                .prototype["catch"] = function(t) {
                                    var r = arguments.length;
                                    if (r > 1) {
                                        var n, i = new Array(r - 1), o = 0;
                                        for (n = 0; r - 1 > n; ++n) {
                                            var s = arguments[n];
                                            if ("function" != typeof s
                                            )
                                                return e
                                                    .reject(new
                                                        u("Catch filter must inherit from Error or be a simple predicate function\n\n    See http://goo.gl/o84o68\n"));
                                            i[o++] = s
                                        }
                                        i.length = o, t = arguments[n];
                                        var a = new y(i, t, this);
                                        return this._then(void 0, a.doFilter, void 0, a, void 0)
                                    }
                                    return this._then(void 0, t, void 0, void 0, void 0)
                                }, e.prototype.reflect = function() { return this._then(n, n, void 0, this, void 0) }, e
                                .prototype.then = function(t, e, r) {
                                    if (d() && arguments.length > 0 && "function" != typeof t && "function" != typeof e
                                    ) {
                                        var n = ".then() only accepts functions but was passed: " + o.classString(t);
                                        arguments.length > 1 && (n += ", " + o.classString(e)), this._warn(n)
                                    }
                                    return this._then(t, e, r, void 0, void 0)
                                }, e.prototype.done = function(t, e, r) {
                                var n = this._then(t, e, r, void 0, void 0);
                                n._setIsFinal()
                            }, e.prototype.spread = function(t, e) {
                                var r = this._target(),
                                    n = r._isSpreadable() ? r === this ? this : this.then() : this.all();
                                return n._then(t, e, void 0, l, void 0)
                            }, e.prototype.isCancellable = function() {
                                return!this.isResolved() && this._cancellable()
                            }, e
                                .prototype.toJSON = function() {
                                    var t = {
                                        isFulfilled: !1,
                                        isRejected: !1,
                                        fulfillmentValue: void 0,
                                        rejectionReason: void 0
                                    };
                                    return this.isFulfilled()
                                        ? (t.fulfillmentValue = this.value(), t.isFulfilled = !0)
                                        : this.isRejected() && (t.rejectionReason = this.reason(), t.isRejected = !0), t
                                }, e.prototype.all = function() {
                                var t = new f(this).promise();
                                return t._setIsSpreadable(), t
                            }, e.prototype.error = function(t) { return this.caught(o.originatesFromRejection, t) }, e
                                .is = function(t) { return t instanceof e }, e.fromNode = function(t) {
                                var r = new e(c), n = b(t)(m(r));
                                return n === j && r._rejectCallback(n.e, !0, !0), r
                            }, e.all = function(t) {
                                var e = new f(t).promise();
                                return e._setIsSpreadable(), e
                            }, e.defer = e.pending = function() {
                                var t = new e(c);
                                return new g(t)
                            }, e.cast = function(t) {
                                var r = p(t);
                                if (!(r instanceof e)) {
                                    var n = r;
                                    r = new e(c), r._fulfillUnchecked(n)
                                }
                                return r
                            }, e.resolve = e.fulfilled = e.cast, e.reject = e.rejected = function(t) {
                                var r = new e(c);
                                return r._captureStackTrace(), r._rejectCallback(t, !0), r
                            }, e.setScheduler = function(t) {
                                if ("function" != typeof t)
                                    throw new u("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                                var e = s._schedule;
                                return s._schedule = t, e
                            }, e.prototype._then = function(t, r, n, i, o) {
                                var a = void 0 !== o, u = a ? o : new e(c);
                                a || (u._propagateFrom(this, 5), u._captureStackTrace());
                                var l = this._target();
                                l !== this &&
                                    (a || (u._setIsMigrated(), void 0 === i && (u._setIsMigratingBinding(), i = this)));
                                var h = l._addCallbacks(t, r, n, u, i);
                                return l._isResolved() &&
                                    !l._isSettlePromisesQueued() &&
                                    s.invoke(l._settlePromiseAtPostResolution, l, h), u
                            }, e.prototype
                                ._settlePromiseAtPostResolution = function(t) {
                                    this._isRejectionUnhandled() && this._unsetRejectionIsUnhandled(), this
                                        ._settlePromiseAt(t)
                                }, e.prototype._length = function() { return 131071 & this._bitField }, e.prototype
                                ._isFollowingOrFulfilledOrRejected =
                                function() { return(939524096 & this._bitField) > 0 }, e
                                .prototype._isFollowing = function() {
                                    return 536870912 === (536870912 & this._bitField)
                                }, e
                                .prototype
                                ._setLength = function(t) { this._bitField = -131072 & this._bitField | 131071 & t }, e
                                .prototype._setFulfilled = function() { this._bitField = 268435456 | this._bitField }, e
                                .prototype._setRejected = function() { this._bitField = 134217728 | this._bitField }, e
                                .prototype._setFollowing = function() { this._bitField = 536870912 | this._bitField }, e
                                .prototype._setIsFinal = function() { this._bitField = 33554432 | this._bitField }, e
                                .prototype
                                ._isFinal = function() { return(33554432 & this._bitField) > 0 }, e.prototype
                                ._cancellable = function() { return(67108864 & this._bitField) > 0 }, e.prototype
                                ._setCancellable = function() { this._bitField = 67108864 | this._bitField }, e
                                .prototype
                                ._unsetCancellable = function() { this._bitField = -67108865 & this._bitField }, e
                                .prototype
                                ._isSpreadable = function() { return(131072 & this._bitField) > 0 }, e.prototype
                                ._setIsSpreadable = function() { this._bitField = 131072 | this._bitField }, e.prototype
                                ._setIsMigrated = function() { this._bitField = 4194304 | this._bitField }, e.prototype
                                ._unsetIsMigrated = function() { this._bitField = -4194305 & this._bitField }, e
                                .prototype
                                ._isMigrated = function() { return(4194304 & this._bitField) > 0 }, e.prototype
                                ._receiverAt = function(t) {
                                    var e = 0 === t ? this._receiver0 : this[5 * t - 5 + 4];
                                    return this._isBound() && void 0 === e ? this._boundTo : e
                                }, e.prototype._promiseAt = function(t) {
                                return 0 === t ? this._promise0 : this[5 * t - 5 + 3]
                            }, e.prototype._fulfillmentHandlerAt = function(t) {
                                return 0 === t ? this._fulfillmentHandler0 : this[5 * t - 5 + 0]
                            }, e.prototype._rejectionHandlerAt = function(t) {
                                return 0 === t ? this._rejectionHandler0 : this[5 * t - 5 + 1]
                            }, e.prototype._migrateCallbacks = function(t, r) {
                                var n = t._fulfillmentHandlerAt(r),
                                    i = t._rejectionHandlerAt(r),
                                    o = t._progressHandlerAt(r),
                                    s = t._promiseAt(r),
                                    a = t._receiverAt(r);
                                s instanceof e &&
                                        (s._setIsMigrated(), void 0 === a && (a = t, s._setIsMigratingBinding())),
                                    this._addCallbacks(n, i, o, s, a)
                            }, e.prototype._addCallbacks = function(t, e, r, n, i) {
                                var o = this._length();
                                if (o >= 131066 && (o = 0, this._setLength(0)), 0 === o
                                )
                                    this
                                            ._promise0 = n, void 0 !== i && (this._receiver0 = i),
                                        "function" != typeof t ||
                                            this._isCarryingStackTrace() ||
                                            (this._fulfillmentHandler0 = t),
                                        "function" == typeof e && (this._rejectionHandler0 = e),
                                        "function" == typeof r && (this._progressHandler0 = r);
                                else {
                                    var s = 5 * o - 5;
                                    this[s + 3] = n, this[s + 4] = i, "function" == typeof t && (this[s + 0] = t),
                                        "function" == typeof e && (this[s + 1] = e),
                                        "function" == typeof r && (this[s + 2] = r)
                                }
                                return this._setLength(o + 1), o
                            }, e.prototype._setProxyHandlers = function(t, e) {
                                var r = this._length();
                                if (r >= 131066 && (r = 0, this._setLength(0)), 0 === r
                                ) this._promise0 = e, this._receiver0 = t;
                                else {
                                    var n = 5 * r - 5;
                                    this[n + 3] = e, this[n + 4] = t
                                }
                                this._setLength(r + 1)
                            }, e.prototype._proxyPromiseArray = function(t, e) { this._setProxyHandlers(t, e) }, e
                                .prototype
                                ._resolveCallback = function(t, n) {
                                    if (!this._isFollowingOrFulfilledOrRejected()) {
                                        if (t === this) return this._rejectCallback(r(), !1, !0);
                                        var i = p(t, this);
                                        if (!(i instanceof e)) return this._fulfill(t);
                                        var o = 1 | (n ? 4 : 0);
                                        this._propagateFrom(i, o);
                                        var s = i._target();
                                        if (s._isPending()) {
                                            for (var a = this
                                                         ._length(),
                                            u = 0;
                                            a > u;
                                            ++u) s._migrateCallbacks(this, u);
                                            this._setFollowing(), this._setLength(0), this._setFollowee(s)
                                        } else
                                            s._isFulfilled()
                                                ? this._fulfillUnchecked(s._value())
                                                : this._rejectUnchecked(s._reason(), s._getCarriedStackTrace())
                                    }
                                }, e.prototype._rejectCallback = function(t, e, r) {
                                r || o.markAsOriginatingFromRejection(t);
                                var n = o.ensureErrorObject(t),
                                    i = o.canAttachTrace(t) && "string" == typeof n.stack && n.stack.length > 0;
                                this._attachExtraTrace(n, e ? i : !1), this._reject(t, n === t ? void 0 : n)
                            }, e.prototype._resolveFromResolver = function(t) {
                                var e = this;
                                this._captureStackTrace(), this._pushContext();
                                var r = !0,
                                    n = b(t)(function(t) { null !== e && (e._resolveCallback(t), e = null) },
                                        function(t) { null !== e && (e._rejectCallback(t, r), e = null) });
                                r = !1, this._popContext(), void 0 !== n &&
                                    n === j &&
                                    null !== e &&
                                    (e._rejectCallback(n.e, !0, !0), e = null)
                            }, e.prototype._settlePromiseFromHandler = function(t, e, n, i) {
                                if (!i._isRejected()) {
                                    i._pushContext();
                                    var o;
                                    if (o = e !== l || this._isRejected()
                                        ? b(t).call(e, n)
                                        : b(t).apply(this._boundTo, n), i
                                        ._popContext(), o === j || o === i || o === h) {
                                        var s = o === i ? r() : o.e;
                                        i._rejectCallback(s, !1, !0)
                                    } else i._resolveCallback(o)
                                }
                            }, e.prototype._target = function() {
                                for (var t = this; t._isFollowing();) t = t._followee();
                                return t
                            }, e.prototype._followee = function() { return this._rejectionHandler0 }, e.prototype
                                ._setFollowee = function(t) { this._rejectionHandler0 = t }, e.prototype
                                ._cleanValues = function() {
                                    this._cancellable() && (this._cancellationParent = void 0)
                                }, e
                                .prototype._propagateFrom = function(t, e) {
                                    (1 & e) > 0 &&
                                            t._cancellable() &&
                                            (this._setCancellable(), this._cancellationParent = t),
                                        (4 & e) > 0 && this._setBoundTo(t._boundTo)
                                }, e.prototype._fulfill = function(t) {
                                this._isFollowingOrFulfilledOrRejected() || this._fulfillUnchecked(t)
                            }, e.prototype._reject = function(t, e) {
                                this._isFollowingOrFulfilledOrRejected() || this._rejectUnchecked(t, e)
                            }, e.prototype._settlePromiseAt = function(t) {
                                var r = this._promiseAt(t), n = r instanceof e;
                                if (n && r._isMigrated())
                                    return r._unsetIsMigrated(), s.invoke(this._settlePromiseAt, this, t);
                                var i = this._isFulfilled()
                                        ? this._fulfillmentHandlerAt(t)
                                        : this._rejectionHandlerAt(t),
                                    o = this._isCarryingStackTrace() ? this._getCarriedStackTrace() : void 0,
                                    a = this._settledValue,
                                    u = this._receiverAt(t);
                                n && r._isMigratingBinding() && (r._unsetIsMigratingBinding(), u = u._boundTo), this
                                        ._clearCallbackDataAtIndex(t), "function" == typeof i
                                        ? n ? this._settlePromiseFromHandler(i, u, a, r) : i.call(u, a, r)
                                        : u instanceof f
                                        ? u._isResolved() ||
                                        (this._isFulfilled() ? u._promiseFulfilled(a, r) : u._promiseRejected(a, r))
                                        : n && (this._isFulfilled() ? r._fulfill(a) : r._reject(a, o)),
                                    t >= 4 && 4 === (31 & t) && s.invokeLater(this._setLength, this, 0)
                            }, e.prototype._clearCallbackDataAtIndex = function(t) {
                                if (0 === t)
                                    this._isCarryingStackTrace() || (this._fulfillmentHandler0 = void 0), this
                                        ._rejectionHandler0 = this._progressHandler0 = this._receiver0 = this
                                        ._promise0 = void 0;
                                else {
                                    var e = 5 * t - 5;
                                    this[e + 3] = this[e + 4] = this[e + 0] = this[e + 1] = this[e + 2] = void 0
                                }
                            }, e.prototype
                                ._isSettlePromisesQueued = function() {
                                    return-1073741824 === (-1073741824 & this._bitField)
                                },
                            e.prototype
                                ._setSettlePromisesQueued =
                                function() { this._bitField = -1073741824 | this._bitField }, e
                                .prototype
                                ._unsetSettlePromisesQueued =
                                function() { this._bitField = 1073741823 & this._bitField }, e
                                .prototype._queueSettlePromises = function() {
                                    s.settlePromises(this), this._setSettlePromisesQueued()
                                }, e.prototype._fulfillUnchecked = function(t) {
                                if (t === this) {
                                    var e = r();
                                    return this._attachExtraTrace(e), this._rejectUnchecked(e, void 0)
                                }
                                this._setFulfilled(), this._settledValue = t, this
                                    ._cleanValues(), this._length() > 0 && this._queueSettlePromises()
                            }, e.prototype._rejectUncheckedCheckError = function(t) {
                                var e = o.ensureErrorObject(t);
                                this._rejectUnchecked(t, e === t ? void 0 : e)
                            }, e.prototype._rejectUnchecked = function(t, e) {
                                if (t === this) {
                                    var n = r();
                                    return this._attachExtraTrace(n), this._rejectUnchecked(n)
                                }
                                return this._setRejected(), this._settledValue = t, this
                                    ._cleanValues(), this._isFinal()
                                    ? void s.throwLater(function(t) {
                                            throw"stack" in t && s.invokeFirst(_.unhandledRejection, void 0, t), t
                                        },
                                        void 0 === e ? t : e)
                                    : (void 0 !== e && e !== t && this._setCarriedStackTrace(e), void(
                                        this._length() > 0
                                            ? this._queueSettlePromises()
                                            : this._ensurePossibleRejectionHandled()))
                            }, e.prototype._settlePromises = function() {
                                this._unsetSettlePromisesQueued();
                                for (var t = this._length(), e = 0; t > e; e++) this._settlePromiseAt(e)
                            }, e
                                ._makeSelfResolutionError = r, t("./method.js")(e, c, p, i), t("./bind.js")(e, c, p),
                            t("./finally.js")(e, h, p), t("./direct_resolve.js")(e),
                            t("./synchronous_inspection.js")(e),
                            t("./join.js")(e, f, p, c), o.toFastProperties(e), o.toFastProperties(e.prototype), e
                                .Promise = e, _
                                .setBounds(s
                                    .firstLineError,
                                    o
                                    .lastLineError), t("./map.js")(e, f, i, p, c), t("./using.js")(e, i, p, v),
                            t("./generators.js")(e, i, c, p), t("./nodeify.js")(e), t("./cancel.js")(e),
                            t("./promisify.js")(e, c), t("./props.js")(e, f, p, i), t("./race.js")(e, c, p, i),
                            t("./reduce.js")(e, f, i, p, c), t("./settle.js")(e, f), t("./call_get.js")(e),
                            t("./some.js")(e, f, i), t("./progress.js")(e, f), t("./any.js")(e), t("./each.js")(e, c),
                            t("./timers.js")(e, c), t("./filter.js")(e, c), e.prototype = e.prototype, e
                    }
                }, {
                    "./any.js": 1,
                    "./async.js": 2,
                    "./bind.js": 3,
                    "./call_get.js": 5,
                    "./cancel.js": 6,
                    "./captured_trace.js": 7,
                    "./catch_filter.js": 8,
                    "./context.js": 9,
                    "./debuggability.js": 10,
                    "./direct_resolve.js": 11,
                    "./each.js": 12,
                    "./errors.js": 13,
                    "./filter.js": 15,
                    "./finally.js": 16,
                    "./generators.js": 17,
                    "./join.js": 18,
                    "./map.js": 19,
                    "./method.js": 20,
                    "./nodeify.js": 21,
                    "./progress.js": 22,
                    "./promise_array.js": 24,
                    "./promise_resolver.js": 25,
                    "./promisify.js": 26,
                    "./props.js": 27,
                    "./race.js": 29,
                    "./reduce.js": 30,
                    "./settle.js": 32,
                    "./some.js": 33,
                    "./synchronous_inspection.js": 34,
                    "./thenables.js": 35,
                    "./timers.js": 36,
                    "./using.js": 37,
                    "./util.js": 38
                }
            ],
            24: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r, n, i) {
                        function o(t) {
                            switch (t) {
                            case-2:
                                return[];
                            case-3:
                                return{}
                            }
                        }

                        function s(t) {
                            var n, i = this._promise = new e(r);
                            t instanceof e && (n = t, i._propagateFrom(n, 5)), this._values = t, this._length = 0, this
                                ._totalResolved = 0, this._init(void 0, -2)
                        }

                        var a = t("./util.js"), u = a.isArray;
                        return s.prototype.length = function() { return this._length }, s.prototype
                            .promise = function() { return this._promise }, s.prototype._init = function c(t, r) {
                            var s = n(this._values, this._promise);
                            if (s instanceof e) {
                                if (s._setBoundTo(this._promise._boundTo), s = s._target(), this._values = s, !s
                                    ._isFulfilled())
                                    return s._isPending()
                                        ? void s._then(c, this._reject, void 0, this, r)
                                        : void this._reject(s._reason());
                                if (s = s._value(), !u(s)) {
                                    var a = new e
                                        .TypeError("expecting an array, a promise or a thenable\n\n    See http://goo.gl/s8MMhc\n");
                                    return void this.__hardReject__(a)
                                }
                            } else if (!u(s))
                                return void this._promise
                                    ._reject(i("expecting an array, a promise or a thenable\n\n    See http://goo.gl/s8MMhc\n")._reason());
                            if (0 === s.length) return void(-5 === r ? this._resolveEmptyArray() : this._resolve(o(r)));
                            var l = this.getActualLength(s.length);
                            this._length = l, this._values = this.shouldCopyValues() ? new Array(l) : this._values;
                            for (var h = this._promise, p = 0; l > p; ++p) {
                                var f = this._isResolved(), _ = n(s[p], h);
                                _ instanceof e
                                    ? (_ = _._target(), f
                                        ? _._unsetRejectionIsUnhandled()
                                        : _._isPending()
                                        ? _._proxyPromiseArray(this, p)
                                        : _._isFulfilled()
                                        ? this._promiseFulfilled(_._value(), p)
                                        : this._promiseRejected(_._reason(), p))
                                    : f || this._promiseFulfilled(_, p)
                            }
                        }, s.prototype._isResolved = function() { return null === this._values }, s.prototype
                            ._resolve = function(t) { this._values = null, this._promise._fulfill(t) }, s.prototype
                            .__hardReject__ = s.prototype
                            ._reject = function(t) { this._values = null, this._promise._rejectCallback(t, !1, !0) }, s
                            .prototype._promiseProgressed = function(t, e) {
                                this._promise._progress({ index: e, value: t })
                            }, s.prototype._promiseFulfilled = function(t, e) {
                            this._values[e] = t;
                            var r = ++this._totalResolved;
                            r >= this._length && this._resolve(this._values)
                        }, s.prototype._promiseRejected = function(t) { this._totalResolved++, this._reject(t) }, s
                            .prototype.shouldCopyValues = function() { return!0 }, s.prototype
                            .getActualLength = function(t) { return t }, s
                    }
                }, { "./util.js": 38 }
            ],
            25: [
                function(t, e) {
                    "use strict";

                    function r(t) { return t instanceof Error && p.getPrototypeOf(t) === Error.prototype }

                    function n(t) {
                        var e;
                        if (r(t)) {
                            e = new l(t), e.name = t.name, e.message = t.message, e.stack = t.stack;
                            for (var n = p.keys(t), i = 0; i < n.length; ++i) {
                                var o = n[i];
                                f.test(o) || (e[o] = t[o])
                            }
                            return e
                        }
                        return s.markAsOriginatingFromRejection(t), t
                    }

                    function i(t) {
                        return function(e, r) {
                            if (null !== t) {
                                if (e) {
                                    var i = n(a(e));
                                    t._attachExtraTrace(i), t._reject(i)
                                } else if (arguments.length > 2) {
                                    for (var o = arguments
                                                 .length,
                                        s = new Array(o - 1),
                                        u = 1;
                                        o > u;
                                        ++u) s[u - 1] = arguments[u];
                                    t._fulfill(s)
                                } else t._fulfill(r);
                                t = null
                            }
                        }
                    }

                    var o,
                        s = t("./util.js"),
                        a = s.maybeWrapAsError,
                        u = t("./errors.js"),
                        c = u.TimeoutError,
                        l = u.OperationalError,
                        h = s.haveGetters,
                        p = t("./es5.js"),
                        f = /^(?:name|message|stack|cause)$/;
                    if (o = h
                        ? function(t) { this.promise = t }
                        : function(t) { this.promise = t, this.asCallback = i(t), this.callback = this.asCallback }, h
                    ) {
                        var _ = { get: function() { return i(this.promise) } };
                        p.defineProperty(o.prototype, "asCallback", _), p.defineProperty(o.prototype, "callback", _)
                    }
                    o._nodebackForPromise = i, o.prototype.toString = function() { return"[object PromiseResolver]" }, o
                        .prototype.resolve = o.prototype.fulfill = function(t) {
                            if (!(this instanceof o))
                                throw new
                                    TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\n\n    See http://goo.gl/sdkXL9\n");
                            this.promise._resolveCallback(t)
                        }, o.prototype.reject = function(t) {
                        if (!(this instanceof o))
                            throw new
                                TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\n\n    See http://goo.gl/sdkXL9\n");
                        this.promise._rejectCallback(t)
                    }, o.prototype.progress = function(t) {
                        if (!(this instanceof o))
                            throw new
                                TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\n\n    See http://goo.gl/sdkXL9\n");
                        this.promise._progress(t)
                    }, o.prototype.cancel = function(t) { this.promise.cancel(t) }, o.prototype
                        .timeout = function() { this.reject(new c("timeout")) }, o.prototype
                        .isResolved = function() { return this.promise.isResolved() }, o.prototype
                        .toJSON = function() { return this.promise.toJSON() }, e.exports = o
                }, { "./errors.js": 13, "./es5.js": 14, "./util.js": 38 }
            ],
            26: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r) {
                        function n(t) {
                            try {
                                return t.__isPromisified__ === !0
                            } catch (e) {
                                return!1
                            }
                        }

                        function i(t, e, r) {
                            var i = p.getDataPropertyOrDefault(t, e + r, j);
                            return i ? n(i) : !1
                        }

                        function o(t, e, r) {
                            for (var n = 0; n < t.length; n += 2) {
                                var i = t[n];
                                if (r.test(i))
                                    for (var o = i
                                                 .replace(r, ""),
                                        s = 0;
                                        s < t.length;
                                        s += 2)
                                        if (t[s] === o)
                                            throw new
                                                y("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/iWrZbw\n".replace("%s", e))
                            }
                        }

                        function s(t, e, r, s) {
                            for (var a = p.inheritedDataKeys(t), u = [], c = 0; c < a.length; ++c) {
                                var l = a[c], h = t[l], f = s === m ? !0 : m(l, h, t);
                                "function" != typeof h || n(h) || i(t, l, e) || !s(l, h, t, f) || u.push(l, h)
                            }
                            return o(u, e, r), u
                        }

                        function a(t, n) {
                            function i() {
                                var i = n;
                                n === h && (i = this), "string" == typeof t && (t = i[t]);
                                var o = new e(r);
                                o._captureStackTrace(), o._setIsSpreadable();
                                var s = f(o);
                                try {
                                    t.apply(i, _(arguments, s))
                                } catch (a) {
                                    var u = d(a);
                                    o._attachExtraTrace(u), o._reject(u)
                                }
                                return o
                            }

                            return i.__isPromisified__ = !0, i
                        }

                        function u(t, e, r, n) {
                            for (var i = new RegExp(b(e) + "$"), o = s(t, e, i, r), a = 0, u = o.length;
                                u > a;
                                a += 2
                            ) {
                                var c = o[a], l = o[a + 1], f = c + e;
                                t[f] = n === w ? w(c, h, c, l, e) : n(l, function() { return w(c, h, c, l, e) })
                            }
                            return p.toFastProperties(t), t
                        }

                        function c(t, e) { return w(t, e, void 0, t) }

                        var l,
                            h = {},
                            p = t("./util.js"),
                            f = t("./promise_resolver.js")._nodebackForPromise,
                            _ = p.withAppended,
                            d = p.maybeWrapAsError,
                            v = p.canEvaluate,
                            y = t("./errors").TypeError,
                            g = "Async",
                            m = function(t, e) { return p.isIdentifier(t) && "_" !== t.charAt(0) && !p.isClass(e) },
                            j = { __isPromisified__: !0 },
                            b = function(t) { return t.replace(/([$])/, "\\$") },
                            w = v ? l : a;
                        e.promisify = function(t, e) {
                            if ("function" != typeof t)
                                throw new y("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                            return n(t) ? t : c(t, arguments.length < 2 ? h : e)
                        }, e.promisifyAll = function(t, e) {
                            if ("function" != typeof t && "object" != typeof t
                            )
                                throw new
                                    y("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/9ITlV0\n");
                            e = Object(e);
                            var r = e.suffix;
                            "string" != typeof r && (r = g);
                            var n = e.filter;
                            "function" != typeof n && (n = m);
                            var i = e.promisifier;
                            if ("function" != typeof i && (i = w), !p
                                .isIdentifier(r))
                                throw new
                                    RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/8FZo5V\n");
                            for (var o = p.inheritedDataKeys(t, { includeHidden: !0 }), s = 0; s < o.length; ++s) {
                                var a = t[o[s]];
                                "constructor" !== o[s] && p.isClass(a) && (u(a.prototype, r, n, i), u(a, r, n, i))
                            }
                            return u(t, r, n, i)
                        }
                    }
                }, { "./errors": 13, "./promise_resolver.js": 25, "./util.js": 38 }
            ],
            27: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r, n, i) {
                        function o(t) {
                            for (var e = c.keys(t), r = e.length, n = new Array(2 * r), i = 0; r > i; ++i) {
                                var o = e[i];
                                n[i] = t[o], n[i + r] = o
                            }
                            this.constructor$(n)
                        }

                        function s(t) {
                            var r, s = n(t);
                            return u(s)
                                ? (r = s instanceof e
                                    ? s._then(e.props, void 0, void 0, void 0, void 0)
                                    : new o(s).promise(), s instanceof e && r._propagateFrom(s, 4), r)
                                : i("cannot await properties of a non-object\n\n    See http://goo.gl/OsFKC8\n")
                        }

                        var a = t("./util.js"), u = a.isObject, c = t("./es5.js");
                        a.inherits(o, r), o.prototype._init = function() { this._init$(void 0, -3) }, o.prototype
                            ._promiseFulfilled = function(t, e) {
                                this._values[e] = t;
                                var r = ++this._totalResolved;
                                if (r >= this._length) {
                                    for (var n = {}, i = this.length(), o = 0, s = this.length();
                                        s > o;
                                        ++o
                                    ) n[this._values[o + i]] = this._values[o];
                                    this._resolve(n)
                                }
                            }, o.prototype
                            ._promiseProgressed = function(t, e) {
                                this._promise._progress({ key: this._values[e + this.length()], value: t })
                            }, o.prototype.shouldCopyValues = function() { return!1 }, o.prototype
                            .getActualLength = function(t) { return t >> 1 }, e.prototype
                            .props = function() { return s(this) }, e.props = function(t) { return s(t) }
                    }
                }, { "./es5.js": 14, "./util.js": 38 }
            ],
            28: [
                function(t, e) {
                    "use strict";

                    function r(t, e, r, n, i) { for (var o = 0; i > o; ++o) r[o + n] = t[o + e], t[o + e] = void 0 }

                    function n(t) { this._capacity = t, this._length = 0, this._front = 0 }

                    n.prototype._willBeOverCapacity = function(t) { return this._capacity < t }, n.prototype
                        ._pushOne = function(t) {
                            var e = this.length();
                            this._checkCapacity(e + 1);
                            var r = this._front + e & this._capacity - 1;
                            this[r] = t, this._length = e + 1
                        }, n.prototype._unshiftOne = function(t) {
                        var e = this._capacity;
                        this._checkCapacity(this.length() + 1);
                        var r = this._front, n = (r - 1 & e - 1 ^ e) - e;
                        this[n] = t, this._front = n, this._length = this.length() + 1
                    }, n.prototype.unshift = function(t, e, r) {
                        this._unshiftOne(r), this._unshiftOne(e), this._unshiftOne(t)
                    }, n.prototype.push = function(t, e, r) {
                        var n = this.length() + 3;
                        if (this._willBeOverCapacity(n))
                            return this._pushOne(t), this._pushOne(e), void this._pushOne(r);
                        var i = this._front + n - 3;
                        this._checkCapacity(n);
                        var o = this._capacity - 1;
                        this[i + 0 & o] = t, this[i + 1 & o] = e, this[i + 2 & o] = r, this._length = n
                    }, n.prototype.shift = function() {
                        var t = this._front, e = this[t];
                        return this[t] = void 0, this._front = t + 1 & this._capacity - 1, this._length--, e
                    }, n.prototype.length = function() { return this._length }, n.prototype
                        ._checkCapacity = function(t) { this._capacity < t && this._resizeTo(this._capacity << 1) }, n
                        .prototype._resizeTo = function(t) {
                            var e = this._capacity;
                            this._capacity = t;
                            var n = this._front, i = this._length, o = n + i & e - 1;
                            r(this, 0, this, e, o)
                        }, e.exports = n
                }, {}
            ],
            29: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r, n, i) {
                        function o(t, o) {
                            var u = n(t);
                            if (u instanceof e) return a(u);
                            if (!s(t))
                                return i("expecting an array, a promise or a thenable\n\n    See http://goo.gl/s8MMhc\n");
                            var c = new e(r);
                            void 0 !== o && c._propagateFrom(o, 5);
                            for (var l = c._fulfill, h = c._reject, p = 0, f = t.length; f > p; ++p) {
                                var _ = t[p];
                                (void 0 !== _ || p in t) && e.cast(_)._then(l, h, void 0, c, null)
                            }
                            return c
                        }

                        var s = t("./util.js").isArray,
                            a = function(t) { return t.then(function(e) { return o(e, t) }) };
                        e.race = function(t) { return o(t, void 0) }, e.prototype
                            .race = function() { return o(this, void 0) }
                    }
                }, { "./util.js": 38 }
            ],
            30: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r, n, i, o) {
                        function s(t, r, n, s) {
                            this.constructor$(t), this._promise._captureStackTrace(), this
                                ._preservedValues = s === o ? [] : null, this._zerothIsAccum = void 0 === n, this
                                ._gotAccum = !1, this._reducingIndex = this._zerothIsAccum ? 1 : 0, this
                                ._valuesPhase = void 0;
                            var a = i(n, this._promise), u = !1, c = a instanceof e;
                            c &&
                            (a = a._target(), a._isPending()
                                ? a._proxyPromiseArray(this, -1)
                                : a._isFulfilled()
                                ? (n = a._value(), this._gotAccum = !0)
                                : (this._reject(a
                                    ._reason()), u = !0)), c || this._zerothIsAccum || (this._gotAccum = !0), this
                                ._callback = r, this._accum = n, u || this._init$(void 0, -5)
                        }

                        function a(t, e, r, i) {
                            if ("function" != typeof e)
                                return n("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                            var o = new s(t, e, r, i);
                            return o.promise()
                        }

                        var u = t("./util.js"), c = u.tryCatch, l = u.errorObj;
                        u.inherits(s, r), s.prototype._init = function() {}, s.prototype
                            ._resolveEmptyArray = function() {
                                (this._gotAccum || this._zerothIsAccum) &&
                                    this._resolve(null !== this._preservedValues ? [] : this._accum)
                            }, s.prototype._promiseFulfilled = function(t, r) {
                            var n = this._values;
                            n[r] = t;
                            var o,
                                s = this.length(),
                                a = this._preservedValues,
                                u = null !== a,
                                h = this._gotAccum,
                                p = this._valuesPhase;
                            if (!p) for (p = this._valuesPhase = new Array(s), o = 0; s > o; ++o) p[o] = 0;
                            if (o = p[r], 0 === r && this._zerothIsAccum
                                ? (this._accum = t, this._gotAccum = h = !0, p[r] = 0 === o ? 1 : 2)
                                : -1 === r
                                ? (this._accum = t, this._gotAccum = h = !0)
                                : 0 === o ? p[r] = 1 : (p[r] = 2, this._accum = t), h) {
                                for (var f, _ = this._callback, d = this._promise._boundTo, v = this._reducingIndex;
                                    s > v;
                                    ++v)
                                    if (o = p[v], 2 !== o) {
                                        if (1 !== o) return;
                                        if (t = n[v], this._promise
                                            ._pushContext(), u
                                            ? (a.push(t), f = c(_).call(d, t, v, s))
                                            : f = c(_).call(d, this._accum, t, v, s), this._promise
                                            ._popContext(), f === l) return this._reject(f.e);
                                        var y = i(f, this._promise);
                                        if (y instanceof e) {
                                            if (y = y._target(), y
                                                ._isPending()) return p[v] = 4, y._proxyPromiseArray(this, v);
                                            if (!y._isFulfilled()) return this._reject(y._reason());
                                            f = y._value()
                                        }
                                        this._reducingIndex = v + 1, this._accum = f
                                    } else this._reducingIndex = v + 1;
                                this._resolve(u ? a : this._accum)
                            }
                        }, e.prototype.reduce = function(t, e) { return a(this, t, e, null) }, e
                            .reduce = function(t, e, r, n) { return a(t, e, r, n) }
                    }
                }, { "./util.js": 38 }
            ],
            31: [
                function(t, e) {
                    "use strict";
                    var r;
                    if (t("./util.js").isNode) {
                        var n = process.version.split(".").map(Number);
                        r = 0 === n[0] && n[1] > 10 || n[0] > 0 ? global.setImmediate : process.nextTick
                    } else
                        "undefined" != typeof MutationObserver
                            ? (r = function(t) {
                                var e = document.createElement("div"), r = new MutationObserver(t);
                                return r.observe(e, { attributes: !0 }), function() { e.classList.toggle("foo") }
                            }, r.isStatic = !0)
                            : r = "undefined" != typeof setTimeout
                            ? function(t) { setTimeout(t, 0) }
                            : function() {
                                throw new Error("No async scheduler available\n\n    See http://goo.gl/m3OTXk\n")
                            };
                    e.exports = r
                }, { "./util.js": 38 }
            ],
            32: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r) {
                        function n(t) { this.constructor$(t), this._promise._setIsSpreadable() }

                        var i = e.PromiseInspection, o = t("./util.js");
                        o.inherits(n, r), n.prototype._promiseResolved = function(t, e) {
                            this._values[t] = e;
                            var r = ++this._totalResolved;
                            r >= this._length && this._resolve(this._values)
                        }, n.prototype._promiseFulfilled = function(t, e) {
                            var r = new i;
                            r._bitField = 268435456, r._settledValue = t, this._promiseResolved(e, r)
                        }, n.prototype._promiseRejected = function(t, e) {
                            var r = new i;
                            r._bitField = 134217728, r._settledValue = t, this._promiseResolved(e, r)
                        }, e.settle = function(t) { return new n(t).promise() }, e.prototype
                            .settle = function() { return new n(this).promise() }
                    }
                }, { "./util.js": 38 }
            ],
            33: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r, n) {
                        function i(t) {
                            this.constructor$(t), this._howMany = 0, this._unwrap = !1, this._initialized = !1
                        }

                        function o(t, e) {
                            if ((0 | e) !== e || 0 > e)
                                return n("expecting a positive integer\n\n    See http://goo.gl/1wAmHx\n");
                            var r = new i(t), o = r.promise();
                            return r.setHowMany(e), r.init(), o
                        }

                        var s = t("./util.js"),
                            a = t("./errors.js").RangeError,
                            u = t("./errors.js").AggregateError,
                            c = s.isArray;
                        s.inherits(i, r), i.prototype._init = function() {
                            if (this._initialized) {
                                if (this._promise
                                    ._setIsSpreadable(), 0 === this._howMany) return void this._resolve([]);
                                this._init$(void 0, -5);
                                var t = c(this._values);
                                !this._isResolved() &&
                                    t &&
                                    this._howMany > this._canPossiblyFulfill() &&
                                    this._reject(this._getRangeError(this.length()))
                            }
                        }, i.prototype.init = function() { this._initialized = !0, this._init() }, i.prototype
                            .setUnwrap = function() { this._unwrap = !0 }, i.prototype
                            .howMany = function() { return this._howMany }, i.prototype
                            .setHowMany = function(t) { this._howMany = t }, i.prototype
                            ._promiseFulfilled = function(t) {
                                this._addFulfilled(t), this._fulfilled() === this.howMany() &&
                                (this._values.length = this.howMany(), this
                                    ._resolve(1 === this.howMany() && this._unwrap ? this._values[0] : this._values))
                            }, i.prototype._promiseRejected = function(t) {
                            if (this._addRejected(t), this.howMany() > this._canPossiblyFulfill()) {
                                for (var e = new u, r = this.length();
                                    r < this._values.length;
                                    ++r
                                ) e.push(this._values[r]);
                                this._reject(e)
                            }
                        }, i.prototype._fulfilled = function() { return this._totalResolved }, i.prototype
                            ._rejected = function() { return this._values.length - this.length() }, i.prototype
                            ._addRejected = function(t) { this._values.push(t) }, i.prototype
                            ._addFulfilled = function(t) { this._values[this._totalResolved++] = t }, i.prototype
                            ._canPossiblyFulfill = function() { return this.length() - this._rejected() }, i.prototype
                            ._getRangeError = function(t) {
                                var e = "Input array must contain at least " +
                                    this._howMany +
                                    " items but contains only " +
                                    t +
                                    " items";
                                return new a(e)
                            }, i.prototype._resolveEmptyArray = function() { this._reject(this._getRangeError(0)) }, e
                            .some = function(t, e) { return o(t, e) }, e.prototype
                            .some = function(t) { return o(this, t) }, e._SomePromiseArray = i
                    }
                }, { "./errors.js": 13, "./util.js": 38 }
            ],
            34: [
                function(t, e) {
                    "use strict";
                    e.exports = function(t) {
                        function e(t) {
                            void 0 !== t
                                ? (t = t._target(), this._bitField = t._bitField, this._settledValue = t._settledValue)
                                : (this._bitField = 0, this._settledValue = void 0)
                        }

                        e.prototype.value = function() {
                            if (!this.isFulfilled())
                                throw new
                                    TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/hc1DLj\n");
                            return this._settledValue
                        }, e.prototype.error = e.prototype.reason = function() {
                            if (!this.isRejected())
                                throw new
                                    TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/hPuiwB\n");
                            return this._settledValue
                        }, e.prototype.isFulfilled = t.prototype
                            ._isFulfilled = function() { return(268435456 & this._bitField) > 0 }, e.prototype
                            .isRejected = t.prototype
                            ._isRejected = function() { return(134217728 & this._bitField) > 0 }, e
                            .prototype.isPending = t.prototype
                            ._isPending = function() { return 0 === (402653184 & this._bitField) }, e.prototype
                            .isResolved = t.prototype
                            ._isResolved = function() { return(402653184 & this._bitField) > 0 }, t
                            .prototype.isPending = function() { return this._target()._isPending() }, t.prototype
                            .isRejected = function() { return this._target()._isRejected() }, t.prototype
                            .isFulfilled = function() { return this._target()._isFulfilled() }, t.prototype
                            .isResolved = function() { return this._target()._isResolved() }, t.prototype
                            ._value = function() { return this._settledValue }, t.prototype
                            ._reason = function() { return this._unsetRejectionIsUnhandled(), this._settledValue }, t
                            .prototype.value = function() {
                                var t = this._target();
                                if (!t.isFulfilled())
                                    throw new
                                        TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/hc1DLj\n");
                                return t._settledValue
                            }, t.prototype.reason = function() {
                            var t = this._target();
                            if (!t.isRejected())
                                throw new
                                    TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/hPuiwB\n");
                            return t._unsetRejectionIsUnhandled(), t._settledValue
                        }, t.PromiseInspection = e
                    }
                }, {}
            ],
            35: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r) {
                        function n(t, n) {
                            if (c(t)) {
                                if (t instanceof e) return t;
                                if (o(t)) {
                                    var l = new e(r);
                                    return t._then(l._fulfillUnchecked,
                                        l._rejectUncheckedCheckError,
                                        l._progressUnchecked,
                                        l,
                                        null), l
                                }
                                var h = a.tryCatch(i)(t);
                                if (h === u) {
                                    n && n._pushContext();
                                    var l = e.reject(h.e);
                                    return n && n._popContext(), l
                                }
                                if ("function" == typeof h) return s(t, h, n)
                            }
                            return t
                        }

                        function i(t) { return t.then }

                        function o(t) { return l.call(t, "_promise0") }

                        function s(t, n, i) {
                            function o(r) {
                                l &&
                                (t === r
                                    ? l._rejectCallback(e._makeSelfResolutionError(), !1, !0)
                                    : l._resolveCallback(r), l = null)
                            }

                            function s(t) { l && (l._rejectCallback(t, p, !0), l = null) }

                            function c(t) { l && "function" == typeof l._progress && l._progress(t) }

                            var l = new e(r), h = l;
                            i && i._pushContext(), l._captureStackTrace(), i && i._popContext();
                            var p = !0, f = a.tryCatch(n).call(t, o, s, c);
                            return p = !1, l && f === u && (l._rejectCallback(f.e, !0, !0), l = null), h
                        }

                        var a = t("./util.js"), u = a.errorObj, c = a.isObject, l = {}.hasOwnProperty;
                        return n
                    }
                }, { "./util.js": 38 }
            ],
            36: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r) {
                        function n(t) {
                            var e = this;
                            return e instanceof Number && (e = +e), clearTimeout(e), t
                        }

                        function i(t) {
                            var e = this;
                            throw e instanceof Number && (e = +e), clearTimeout(e), t
                        }

                        var o = t("./util.js"),
                            s = e.TimeoutError,
                            a = function(t, e) {
                                if (t.isPending()) {
                                    "string" != typeof e && (e = "operation timed out");
                                    var r = new s(e);
                                    o.markAsOriginatingFromRejection(r), t._attachExtraTrace(r), t._cancel(r)
                                }
                            },
                            u = function(t) { return c(+this).thenReturn(t) },
                            c = e.delay = function(t, n) {
                                if (void 0 === n) {
                                    n = t, t = void 0;
                                    var i = new e(r);
                                    return setTimeout(function() { i._fulfill() }, n), i
                                }
                                return n = +n, e.resolve(t)._then(u, null, null, n, void 0)
                            };
                        e.prototype.delay = function(t) { return c(this, t) }, e.prototype.timeout = function(t, e) {
                            t = +t;
                            var r = this.then().cancellable();
                            r._cancellationParent = this;
                            var o = setTimeout(function() { a(r, e) }, t);
                            return r._then(n, i, void 0, o, void 0)
                        }
                    }
                }, { "./util.js": 38 }
            ],
            37: [
                function(t, e) {
                    "use strict";
                    e.exports = function(e, r, n, i) {
                        function o(t) {
                            for (var r = t.length, n = 0; r > n; ++n) {
                                var i = t[n];
                                if (i.isRejected()) return e.reject(i.error());
                                t[n] = i._settledValue
                            }
                            return t
                        }

                        function s(t) { setTimeout(function() { throw t }, 0) }

                        function a(t) {
                            var e = n(t);
                            return e !== t &&
                                "function" == typeof t._isDisposable &&
                                "function" == typeof t._getDisposer &&
                                t._isDisposable() &&
                                e._setDisposable(t._getDisposer()), e
                        }

                        function u(t, r) {
                            function i() {
                                if (o >= u) return c.resolve();
                                var l = a(t[o++]);
                                if (l instanceof e && l._isDisposable()) {
                                    try {
                                        l = n(l._getDisposer().tryDispose(r), t.promise)
                                    } catch (h) {
                                        return s(h)
                                    }
                                    if (l instanceof e) return l._then(i, s, null, null, null)
                                }
                                i()
                            }

                            var o = 0, u = t.length, c = e.defer();
                            return i(), c.promise
                        }

                        function c(t) {
                            var e = new v;
                            return e._settledValue = t, e._bitField = 268435456, u(this, e).thenReturn(t)
                        }

                        function l(t) {
                            var e = new v;
                            return e._settledValue = t, e._bitField = 134217728, u(this, e).thenThrow(t)
                        }

                        function h(t, e, r) { this._data = t, this._promise = e, this._context = r }

                        function p(t, e, r) { this.constructor$(t, e, r) }

                        function f(t) {
                            return h.isDisposer(t) ? (this.resources[this.index]._setDisposable(t), t.promise()) : t
                        }

                        var _ = t("./errors.js").TypeError, d = t("./util.js").inherits, v = e.PromiseInspection;
                        h.prototype.data = function() { return this._data }, h.prototype
                                .promise = function() { return this._promise }, h.prototype
                                .resource = function() {
                                    return this.promise().isFulfilled() ? this.promise().value() : null
                                },
                            h.prototype.tryDispose = function(t) {
                                var e = this.resource(), r = this._context;
                                void 0 !== r && r._pushContext();
                                var n = null !== e ? this.doDispose(e, t) : null;
                                return void 0 !== r && r._popContext(), this._promise._unsetDisposable(), this
                                    ._data = null, n
                            }, h.isDisposer = function(t) {
                                return null != t && "function" == typeof t.resource && "function" == typeof t.tryDispose
                            }, d(p, h), p.prototype.doDispose = function(t, e) {
                                var r = this.data();
                                return r.call(t, t, e)
                            }, e.using = function() {
                                var t = arguments.length;
                                if (2 > t) return r("you must pass at least 2 arguments to Promise.using");
                                var i = arguments[t - 1];
                                if ("function" != typeof i
                                ) return r("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
                                t--;
                                for (var s = new Array(t), a = 0; t > a; ++a) {
                                    var u = arguments[a];
                                    if (h.isDisposer(u)) {
                                        var p = u;
                                        u = u.promise(), u._setDisposable(p)
                                    } else {
                                        var _ = n(u);
                                        _ instanceof e &&
                                            (u = _._then(f, null, null, { resources: s, index: a }, void 0))
                                    }
                                    s[a] = u
                                }
                                var d = e.settle(s).then(o).then(function(t) {
                                    d._pushContext();
                                    var e;
                                    try {
                                        e = i.apply(void 0, t)
                                    } finally {
                                        d._popContext()
                                    }
                                    return e
                                })._then(c, l, void 0, s, void 0);
                                return s.promise = d, d
                            }, e.prototype._setDisposable = function(t) {
                                this._bitField = 262144 | this._bitField, this._disposer = t
                            }, e.prototype._isDisposable = function() { return(262144 & this._bitField) > 0 }, e
                                .prototype
                                ._getDisposer = function() { return this._disposer }, e.prototype
                                ._unsetDisposable = function() {
                                    this._bitField = -262145 & this._bitField, this._disposer = void 0
                                }, e.prototype.disposer = function(t) {
                                if ("function" == typeof t) return new p(t, this, i());
                                throw new _
                            }
                    }
                }, { "./errors.js": 13, "./util.js": 38 }
            ],
            38: [
                function(t, e, r) {
                    "use strict";

                    function n() {
                        try {
                            return C.apply(this, arguments)
                        } catch (t) {
                            return F.e = t, F
                        }
                    }

                    function i(t) { return C = t, n }

                    function o(t) { return"string" == typeof t ? t : "" + t }

                    function s(t) {
                        return null == t || t === !0 || t === !1 || "string" == typeof t || "number" == typeof t
                    }

                    function a(t) { return!s(t) }

                    function u(t) { return s(t) ? new Error(o(t)) : t }

                    function c(t, e) {
                        var r, n = t.length, i = new Array(n + 1);
                        for (r = 0; n > r; ++r) i[r] = t[r];
                        return i[r] = e, i
                    }

                    function l(t, e, r) {
                        if (!w.isES5) return{}.hasOwnProperty.call(t, e) ? t[e] : void 0;
                        var n = Object.getOwnPropertyDescriptor(t, e);
                        return null != n ? null == n.get && null == n.set ? n.value : r : void 0
                    }

                    function h(t, e, r) {
                        if (s(t)) return t;
                        var n = { value: r, configurable: !0, enumerable: !1, writable: !0 };
                        return w.defineProperty(t, e, n), t
                    }

                    function p(t) { throw t }

                    function f(t) {
                        try {
                            if ("function" == typeof t) {
                                var e = w.keys(t.prototype);
                                return e.length > 0 && !(1 === e.length && "constructor" === e[0])
                            }
                            return!1
                        } catch (r) {
                            return!1
                        }
                    }

                    function _(t) {
                        function e() {}

                        return e.prototype = t, e
                    }

                    function d(t) { return S.test(t) }

                    function v(t, e, r) {
                        for (var n = new Array(t), i = 0; t > i; ++i) n[i] = e + i + r;
                        return n
                    }

                    function y(t) {
                        try {
                            return t + ""
                        } catch (e) {
                            return"[no string representation]"
                        }
                    }

                    function g(t) {
                        try {
                            h(t, "isOperational", !0)
                        } catch (e) {
                        }
                    }

                    function m(t) {
                        return null == t
                            ? !1
                            : t instanceof Error.__BluebirdErrorTypes__.OperationalError || t.isOperational === !0
                    }

                    function j(t) {
                        return t instanceof Error && w.propertyIsWritable(t, "stack")
                    }

                    function b(t) { return{}.toString.call(t) }

                    var w = t("./es5.js"),
                        k = "undefined" == typeof navigator,
                        E = function() {
                            try {
                                var t = {};
                                return w.defineProperty(t, "f", { get: function() { return 3 } }), 3 === t.f
                            } catch (e) {
                                return!1
                            }
                        }(),
                        F = { e: {} },
                        C,
                        T = function(t, e) {
                            function r() {
                                this.constructor = t, this.constructor$ = e;
                                for (var r in e.prototype)
                                    n.call(e.prototype, r) &&
                                        "$" !== r.charAt(r.length - 1) &&
                                        (this[r + "$"] = e.prototype[r])
                            }

                            var n = {}.hasOwnProperty;
                            return r.prototype = e.prototype, t.prototype = new r, t.prototype
                        },
                        x = function() { return"string" !== this }.call("string"),
                        P = function() {
                            return w.isES5
                                ? function(t, e) {
                                    for (var r = [],
                                        n = Object.create(null),
                                        i = Object(e).includeHidden ? Object.getOwnPropertyNames : Object.keys;
                                        null != t;
                                    ) {
                                        var o;
                                        try {
                                            o = i(t)
                                        } catch (s) {
                                            return r
                                        }
                                        for (var a = 0; a < o.length; ++a) {
                                            var u = o[a];
                                            if (!n[u]) {
                                                n[u] = !0;
                                                var c = Object.getOwnPropertyDescriptor(t, u);
                                                null != c && null == c.get && null == c.set && r.push(u)
                                            }
                                        }
                                        t = w.getPrototypeOf(t)
                                    }
                                    return r
                                }
                                : function(t) {
                                    var e = [];
                                    for (var r in t) e.push(r);
                                    return e
                                }
                        }(),
                        S = /^[a-z$_][a-z$_0-9]*$/i,
                        R = function() {
                            return"stack" in new Error
                                ? function(t) { return j(t) ? t : new Error(y(t)) }
                                : function(t) {
                                    if (j(t)) return t;
                                    try {
                                        throw new Error(y(t))
                                    } catch (e) {
                                        return e
                                    }
                                }
                        }(),
                        A = {
                            isClass: f,
                            isIdentifier: d,
                            inheritedDataKeys: P,
                            getDataPropertyOrDefault: l,
                            thrower: p,
                            isArray: w.isArray,
                            haveGetters: E,
                            notEnumerableProp: h,
                            isPrimitive: s,
                            isObject: a,
                            canEvaluate: k,
                            errorObj: F,
                            tryCatch: i,
                            inherits: T,
                            withAppended: c,
                            asString: o,
                            maybeWrapAsError: u,
                            wrapsPrimitiveReceiver: x,
                            toFastProperties: _,
                            filledRange: v,
                            toString: y,
                            canAttachTrace: j,
                            ensureErrorObject: R,
                            originatesFromRejection: m,
                            markAsOriginatingFromRejection: g,
                            classString: b,
                            isNode: "undefined" != typeof process && "[object process]" === b(process).toLowerCase()
                        };
                    try {
                        throw new Error
                    } catch (O) {
                        A.lastLineError = O
                    }
                    e.exports = A
                }, { "./es5.js": 14 }
            ]
        },
        {},
        [4])(4)
}), "undefined" != typeof window && null !== window
    ? window.P = window.Promise
    : "undefined" != typeof self && null !== self && (self.P = self.Promise);