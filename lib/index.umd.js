(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios')) :
	typeof define === 'function' && define.amd ? define(['exports', 'axios'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.CSREST = {}, global.axios));
})(this, (function (exports, axios) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var isObject$1 = function isObject(x) {
		return typeof x === 'object' && x !== null;
	};

	const ErrorCodes = {
	  PARSEERROR: {
	    code: -32700,
	    message: "Parse error"
	  },
	  INVALIDREQUEST: {
	    code: -32600,
	    message: "Invalid Request"
	  },
	  METHODNOTFOUND: {
	    code: -32601,
	    message: "Method not found"
	  },
	  INVALIDPARAMS: {
	    code: -32602,
	    message: "Invalid params"
	  },
	  INTERNALERROR: {
	    code: -32603,
	    message: "Internal error"
	  }
	};
	class RPCError extends Error {
	  code;
	  data;
	  constructor(message = ErrorCodes.INTERNALERROR.message, data = null, code = ErrorCodes.INTERNALERROR.code) {
	    if (isObject$1(message)) {
	      const messageObj = message;
	      super(messageObj.message);
	      this.code = messageObj.code;
	      this.data = messageObj.data;
	    } else {
	      super(message);
	      this.code = code;
	      this.data = data;
	    }
	  }
	}

	var AssocType = -18;
	var BooleanType = 5;
	var ClassType = 9;
	var DapiNodeType = -72;
	var DapiSessionType = -74;
	var DapiStreamType = -68;
	var DapiVersionType = -69;
	var DateType = -7;
	var DynamicType = -127;
	var ErrorType = 1;
	var FileType = -107;
	var FrameType = 10;
	var IntegerType = 2;
	var JavaObjectType = -42;
	var ListType = -2;
	var LongType = -8;
	var ObjectType = -128;
	var ObjRefType = 3;
	var RealType = -4;
	var RecArrayType = -110;
	var RecordType$1 = -109;
	var ScriptType = -3;
	var SocketType = -102;
	var StringType = -1;
	var UAPIType = -196;
	var UndefinedType = 0;
	var VoidType = 8;
	var WAPIWorkType = -75;
	var dataTypesEnum = {
		AssocType: AssocType,
		BooleanType: BooleanType,
		ClassType: ClassType,
		DapiNodeType: DapiNodeType,
		DapiSessionType: DapiSessionType,
		DapiStreamType: DapiStreamType,
		DapiVersionType: DapiVersionType,
		DateType: DateType,
		DynamicType: DynamicType,
		ErrorType: ErrorType,
		FileType: FileType,
		FrameType: FrameType,
		IntegerType: IntegerType,
		JavaObjectType: JavaObjectType,
		ListType: ListType,
		LongType: LongType,
		ObjectType: ObjectType,
		ObjRefType: ObjRefType,
		RealType: RealType,
		RecArrayType: RecArrayType,
		RecordType: RecordType$1,
		ScriptType: ScriptType,
		SocketType: SocketType,
		StringType: StringType,
		UAPIType: UAPIType,
		UndefinedType: UndefinedType,
		VoidType: VoidType,
		WAPIWorkType: WAPIWorkType
	};

	var FormDataFactory = {
	  createFormData() {
	    {
	      return new FormData();
	    }
	  }
	};

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    symbolTag = '[object Symbol]';

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/,
	    reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/** Built-in value references. */
	var Symbol = root.Symbol,
	    splice = arrayProto.splice;

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map'),
	    nativeCreate = getNative(Object, 'create');

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  string = toString(string);

	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	var lodash_get = get;

	function getInstance(options) {
	  const instance = axios.create({
	    baseURL: options.baseUrl
	  });
	  instance.interceptors.response.use(
	    (response) => {
	      const otcsticket = lodash_get(response, "headers.otcsticket");
	      if (otcsticket) {
	        instance.defaults.headers.common.OTCSTicket = otcsticket;
	      }
	      return response;
	    },
	    (error) => {
	      return Promise.reject(error);
	    }
	  );
	  return instance;
	}
	function axiosFactory(options) {
	  const instance = getInstance(options);
	  const username = options.username;
	  const password = options.password;
	  const otcsticket = options.otcsticket;
	  if (otcsticket) {
	    instance.defaults.headers.common.OTCSTicket = otcsticket;
	  } else if (username && password) {
	    instance.interceptors.request.use(async (config) => {
	      if (config.headers.common?.OTCSTicket) {
	        return config;
	      } else {
	        const formData = FormDataFactory.createFormData();
	        formData.append("username", username);
	        formData.append("password", password);
	        const response = await axios.post(`${options.baseUrl}/api/v1/auth/`, formData);
	        config.headers.OTCSTicket = lodash_get(response, "data.ticket");
	        return config;
	      }
	    });
	  } else {
	    throw Error("You must provide an otcsticket or username and password.");
	  }
	  return instance;
	}

	class ServiceAbstract {
	  _session;
	  constructor(session) {
	    this._session = new WeakRef(session);
	  }
	  get session() {
	    return this._session.deref();
	  }
	}

	class Auth extends ServiceAbstract {
	  auth() {
	    return this.session.get("/api/v1/auth/");
	  }
	}

	var Accession = 834;
	var ActiveFolder = 1298;
	var Activeview = 30309;
	var ActivityManager = 907;
	var Alias = 1;
	var Appearance = 480;
	var AppearanceFolder = 483;
	var AppearancesVolume = 481;
	var ArchiveFolder = 31711;
	var BackupManager = 290;
	var BackupProcess = 291;
	var BestBets = 274;
	var Blog = 356;
	var BlogEntry = 357;
	var BoxFolder = 530;
	var Category = 131;
	var CategoryFolder = 132;
	var Channel = 207;
	var ChannelVol = 209;
	var Classification = 199;
	var ClassificationTree = 196;
	var ClassifiedItems = 194;
	var Collection = 298;
	var Column = 902;
	var Comments = 345;
	var CommentsReply = 348;
	var CommentsVol = 346;
	var CommExpertContainer = 3030338;
	var CommExpertGroup = 3030339;
	var CommStore = 3030329;
	var CommTemplate = 3030002;
	var CommTemplateFolder = 3030333;
	var CommTemplateVol = 3030004;
	var CommURLStore = 3030335;
	var CommWorkspace = 3030334;
	var CommXSLVolume = 3030205;
	var CompoundDoc = 136;
	var CompoundEMail = 557;
	var ContentModuleFolder = 3030372;
	var CustomView = 146;
	var CustomViewTemplate = 844;
	var DataFlowManager = 270;
	var DataSourceFolder = 276;
	var DirWalker = 277;
	var Discussion = 215;
	var DispositionGroup = 602;
	var Document = 144;
	var DocumentLLNode = 1297;
	var DocumentServer = 283;
	var Dossier = 32912;
	var DossierCabinet = 32916;
	var DossierCabinetArchive = 31707;
	var DossierTemplate = 32914;
	var DossierTemplateFolder = 31709;
	var DossierTemplatesVolume = 32917;
	var DossierTemplateVolume = 32915;
	var DossierVolume = 32913;
	var DPSBinding = 31602;
	var DPSFolder = 31601;
	var DPSVolume = 31603;
	var DTDLLNode = 335;
	var DynamicView = 900;
	var EMail = 749;
	var EmailConversationItems = 2504;
	var Facet = 904;
	var FacetFolder = 905;
	var FacetTree = 903;
	var FailedFolder = 1299;
	var FixedSystemColumn = 906;
	var Folder = 0;
	var Form = 223;
	var Generation = 2;
	var GENERICCONTENTMODULE = 3030371;
	var GlobalAppearance = 482;
	var HoldContainer = 833;
	var HTMLConversion = 282;
	var HTMLFormView = 226;
	var Importer = 293;
	var Inbox = 731;
	var IndexEngine = 368;
	var IndexTracer = 147;
	var IndexUpdate = 281;
	var InternalOTDS = 924;
	var ItemTemplateVol = 541;
	var ItemTemplateVolFolder = 542;
	var JournalVolume = 361;
	var LibraryExtractor = 259;
	var LibraryObj = 272;
	var LLNodeFAQ = 123475;
	var LLNodeFAQEntry = 123476;
	var LLNodeForum = 123469;
	var LLNodeForumEntry = 123470;
	var LLNodeURQuestion = 430;
	var LLNodeURReply = 432;
	var Locators = 422;
	var Mailbox = 732;
	var MailStore = 3030331;
	var ManagedSpace = 31710;
	var MediaType = 410;
	var MediaTypesContainer = 414;
	var MemcachedFolder = 919;
	var MemcachedProcess = 920;
	var Merge = 273;
	var MicroPost = 1281;
	var MicroPostVolume = 1282;
	var MultiVolClassification = 372;
	var MultiVolClassificationProxy = 374;
	var MultiVolClassificationTree = 373;
	var MyReservedItems = 870;
	var MyWorkbenches = 532;
	var NAVMENUVOL = 3030756;
	var News = 208;
	var OTCIndexObj = 257;
	var Partition = 371;
	var PartitionMap = 370;
	var PersonalComm = 3030203;
	var PersonalCommSystemVolume = 3030003;
	var PersonalCommVol = 3030204;
	var PersonalStagingFolder = 398;
	var PersonalWebpage = 3030343;
	var PhysicalItemBox = 424;
	var PhysicalItemContainer = 412;
	var PhysicalItemCopy = 419;
	var PhysicalItem_non_Container = 411;
	var PhysObjAdmin = 415;
	var PhysObjBatchLabels = 418;
	var PhysObjCirculation = 416;
	var PhysObjReports = 417;
	var Poll = 218;
	var Process = 271;
	var Profile = 195;
	var Project = 202;
	var ProjectTemplate = 543;
	var ProjectVol = 201;
	var Prospector = 384;
	var ProspectorQueries = 380;
	var ProspectorSnapshot = 387;
	var Provenance = 829;
	var PublishingFolder = 31712;
	var PublishingFolderVolume = 31713;
	var QAFolder = 441;
	var QueryFile = 296;
	var QuestionVolume = 431;
	var RecentItems = 327;
	var RecordType = 425;
	var RecordTypesContainer = 428;
	var RedForm = 32918;
	var RedFormVolume = 32919;
	var Release = 138;
	var RemoteLLDataSource = 381;
	var Reply = 134;
	var Report = 299;
	var Revision = 139;
	var RIMSDisposition = 555;
	var RIMSDispositionsContainer = 554;
	var RIMSHoldMaintenance = 552;
	var RIMSRsiContainer = 553;
	var RMAdministration = 556;
	var RMClassification = 551;
	var RMFolder = 426;
	var RMPart = 427;
	var RMReportsContainer = 558;
	var RMThesaurus = 559;
	var ScanConfigurationVolume = 2505;
	var ScheduledHoldCriteria = 835;
	var ScriptNode = 32901;
	var SearchBroker = 258;
	var SearchEngine = 369;
	var SearchManager = 269;
	var SearchReport = 278;
	var SearchResultsTemplate = 383;
	var SearchTemplate = 292;
	var Simplate = 31678;
	var SkyPodLLVolume = 49547;
	var SliceFolder = 275;
	var SocialObject = 1280;
	var SocialObjectVolume = 1283;
	var SPCJOBDESCR = 797;
	var SPCJOBDESCRFOLDER = 796;
	var SPCVOLUME = 795;
	var spdcommittee = 3030202;
	var spdcommitteevol = 3030201;
	var spdcommitteevolume = 3030001;
	var spdemail = 3030130;
	var Spider = 280;
	var StorageManagement = 421;
	var SubmitVersionNode = 231;
	var Task = 206;
	var TaskGroup = 205;
	var TaskList = 204;
	var TaskListVol = 210;
	var TaskMilestone = 212;
	var Template = 230;
	var TemplateFolder = 268;
	var TextDocument = 145;
	var Topic = 130;
	var Transfers = 423;
	var TransportBox = 531;
	var TransportItem = 526;
	var TransportItemPart = 527;
	var UrgentRequests = 3030330;
	var URL = 140;
	var VirtualFolder = 899;
	var VolBlog = 123461;
	var VolCategories = 133;
	var VolClassification = 198;
	var VolComments = 347;
	var VolDAP = 987352;
	var VolDeletedItems = 405;
	var VolDirectory = 375;
	var VolDiscussion = 143;
	var VolDomainWorkspace = 180;
	var VolDTD = 336;
	var VolEditWorkflow = 162;
	var VolFacets = 901;
	var VolLibrary = 141;
	var VolOrphan = 403;
	var VolPersonalStaging = 397;
	var VolPerspectives = 908;
	var VolPhysObj = 413;
	var VolRecMan = 550;
	var VolRelease = 137;
	var VolReports = 211;
	var VolSystem = 148;
	var VolTracer = 149;
	var VolumeFolder = 484;
	var VolumeLLVolume = 1296;
	var VolWarehouse = 525;
	var VolWorkbin = 142;
	var VolWorkflow = 161;
	var WarehouseFolder = 529;
	var WebFormConnectionVolume = 236;
	var WebFormDatabaseConnection = 235;
	var WebFormLookup = 234;
	var WebFormLookupVolume = 233;
	var WebReports$1 = 30303;
	var WFMapLLNode = 128;
	var WFStatusNode = 190;
	var WIKI = 5573;
	var WIKIPAGE = 5574;
	var Workbench = 528;
	var WorkflowAttachments = 154;
	var XMLActivatorCon = 286;
	var XMLActivatorProd = 285;
	var SubTypes = {
		"2WayTee": 294,
		Accession: Accession,
		ActiveFolder: ActiveFolder,
		Activeview: Activeview,
		ActivityManager: ActivityManager,
		Alias: Alias,
		Appearance: Appearance,
		AppearanceFolder: AppearanceFolder,
		AppearancesVolume: AppearancesVolume,
		ArchiveFolder: ArchiveFolder,
		BackupManager: BackupManager,
		BackupProcess: BackupProcess,
		BestBets: BestBets,
		Blog: Blog,
		BlogEntry: BlogEntry,
		BoxFolder: BoxFolder,
		Category: Category,
		CategoryFolder: CategoryFolder,
		Channel: Channel,
		ChannelVol: ChannelVol,
		Classification: Classification,
		"Classification Shortcut": 197,
		ClassificationTree: ClassificationTree,
		ClassifiedItems: ClassifiedItems,
		Collection: Collection,
		Column: Column,
		Comments: Comments,
		CommentsReply: CommentsReply,
		CommentsVol: CommentsVol,
		CommExpertContainer: CommExpertContainer,
		CommExpertGroup: CommExpertGroup,
		CommStore: CommStore,
		CommTemplate: CommTemplate,
		CommTemplateFolder: CommTemplateFolder,
		CommTemplateVol: CommTemplateVol,
		CommURLStore: CommURLStore,
		CommWorkspace: CommWorkspace,
		CommXSLVolume: CommXSLVolume,
		CompoundDoc: CompoundDoc,
		CompoundEMail: CompoundEMail,
		ContentModuleFolder: ContentModuleFolder,
		"csapps CSApplicationManifest": 32658,
		"csapps CSApplicationsVolume": 32657,
		CustomView: CustomView,
		CustomViewTemplate: CustomViewTemplate,
		DataFlowManager: DataFlowManager,
		DataSourceFolder: DataSourceFolder,
		DirWalker: DirWalker,
		Discussion: Discussion,
		DispositionGroup: DispositionGroup,
		Document: Document,
		DocumentLLNode: DocumentLLNode,
		DocumentServer: DocumentServer,
		Dossier: Dossier,
		DossierCabinet: DossierCabinet,
		DossierCabinetArchive: DossierCabinetArchive,
		DossierTemplate: DossierTemplate,
		DossierTemplateFolder: DossierTemplateFolder,
		DossierTemplatesVolume: DossierTemplatesVolume,
		DossierTemplateVolume: DossierTemplateVolume,
		DossierVolume: DossierVolume,
		DPSBinding: DPSBinding,
		DPSFolder: DPSFolder,
		DPSVolume: DPSVolume,
		DTDLLNode: DTDLLNode,
		DynamicView: DynamicView,
		EMail: EMail,
		EmailConversationItems: EmailConversationItems,
		"Enterprise Archive Document": 753,
		Facet: Facet,
		FacetFolder: FacetFolder,
		FacetTree: FacetTree,
		FailedFolder: FailedFolder,
		FixedSystemColumn: FixedSystemColumn,
		Folder: Folder,
		Form: Form,
		Generation: Generation,
		GENERICCONTENTMODULE: GENERICCONTENTMODULE,
		GlobalAppearance: GlobalAppearance,
		HoldContainer: HoldContainer,
		HTMLConversion: HTMLConversion,
		HTMLFormView: HTMLFormView,
		Importer: Importer,
		Inbox: Inbox,
		IndexEngine: IndexEngine,
		IndexTracer: IndexTracer,
		IndexUpdate: IndexUpdate,
		InternalOTDS: InternalOTDS,
		ItemTemplateVol: ItemTemplateVol,
		ItemTemplateVolFolder: ItemTemplateVolFolder,
		JournalVolume: JournalVolume,
		LibraryExtractor: LibraryExtractor,
		LibraryObj: LibraryObj,
		"LLNode Email Folder": 751,
		LLNodeFAQ: LLNodeFAQ,
		LLNodeFAQEntry: LLNodeFAQEntry,
		LLNodeForum: LLNodeForum,
		LLNodeForumEntry: LLNodeForumEntry,
		LLNodeURQuestion: LLNodeURQuestion,
		LLNodeURReply: LLNodeURReply,
		Locators: Locators,
		Mailbox: Mailbox,
		MailStore: MailStore,
		ManagedSpace: ManagedSpace,
		MediaType: MediaType,
		MediaTypesContainer: MediaTypesContainer,
		MemcachedFolder: MemcachedFolder,
		MemcachedProcess: MemcachedProcess,
		Merge: Merge,
		MicroPost: MicroPost,
		MicroPostVolume: MicroPostVolume,
		MultiVolClassification: MultiVolClassification,
		MultiVolClassificationProxy: MultiVolClassificationProxy,
		MultiVolClassificationTree: MultiVolClassificationTree,
		MyReservedItems: MyReservedItems,
		MyWorkbenches: MyWorkbenches,
		NAVMENUVOL: NAVMENUVOL,
		News: News,
		OTCIndexObj: OTCIndexObj,
		Partition: Partition,
		PartitionMap: PartitionMap,
		PersonalComm: PersonalComm,
		PersonalCommSystemVolume: PersonalCommSystemVolume,
		PersonalCommVol: PersonalCommVol,
		PersonalStagingFolder: PersonalStagingFolder,
		PersonalWebpage: PersonalWebpage,
		PhysicalItemBox: PhysicalItemBox,
		PhysicalItemContainer: PhysicalItemContainer,
		PhysicalItemCopy: PhysicalItemCopy,
		PhysicalItem_non_Container: PhysicalItem_non_Container,
		PhysObjAdmin: PhysObjAdmin,
		PhysObjBatchLabels: PhysObjBatchLabels,
		PhysObjCirculation: PhysObjCirculation,
		PhysObjReports: PhysObjReports,
		Poll: Poll,
		Process: Process,
		Profile: Profile,
		Project: Project,
		ProjectTemplate: ProjectTemplate,
		ProjectVol: ProjectVol,
		Prospector: Prospector,
		ProspectorQueries: ProspectorQueries,
		ProspectorSnapshot: ProspectorSnapshot,
		Provenance: Provenance,
		"Proxy": 260,
		PublishingFolder: PublishingFolder,
		PublishingFolderVolume: PublishingFolderVolume,
		QAFolder: QAFolder,
		QueryFile: QueryFile,
		QuestionVolume: QuestionVolume,
		RecentItems: RecentItems,
		RecordType: RecordType,
		RecordTypesContainer: RecordTypesContainer,
		RedForm: RedForm,
		RedFormVolume: RedFormVolume,
		Release: Release,
		RemoteLLDataSource: RemoteLLDataSource,
		Reply: Reply,
		Report: Report,
		Revision: Revision,
		RIMSDisposition: RIMSDisposition,
		RIMSDispositionsContainer: RIMSDispositionsContainer,
		RIMSHoldMaintenance: RIMSHoldMaintenance,
		RIMSRsiContainer: RIMSRsiContainer,
		RMAdministration: RMAdministration,
		RMClassification: RMClassification,
		RMFolder: RMFolder,
		RMPart: RMPart,
		RMReportsContainer: RMReportsContainer,
		RMThesaurus: RMThesaurus,
		ScanConfigurationVolume: ScanConfigurationVolume,
		ScheduledHoldCriteria: ScheduledHoldCriteria,
		ScriptNode: ScriptNode,
		SearchBroker: SearchBroker,
		SearchEngine: SearchEngine,
		SearchManager: SearchManager,
		SearchReport: SearchReport,
		SearchResultsTemplate: SearchResultsTemplate,
		SearchTemplate: SearchTemplate,
		Simplate: Simplate,
		SkyPodLLVolume: SkyPodLLVolume,
		SliceFolder: SliceFolder,
		SocialObject: SocialObject,
		SocialObjectVolume: SocialObjectVolume,
		SPCJOBDESCR: SPCJOBDESCR,
		SPCJOBDESCRFOLDER: SPCJOBDESCRFOLDER,
		SPCVOLUME: SPCVOLUME,
		spdcommittee: spdcommittee,
		spdcommitteevol: spdcommitteevol,
		spdcommitteevolume: spdcommitteevolume,
		spdemail: spdemail,
		Spider: Spider,
		StorageManagement: StorageManagement,
		SubmitVersionNode: SubmitVersionNode,
		Task: Task,
		TaskGroup: TaskGroup,
		TaskList: TaskList,
		TaskListVol: TaskListVol,
		TaskMilestone: TaskMilestone,
		Template: Template,
		TemplateFolder: TemplateFolder,
		TextDocument: TextDocument,
		Topic: Topic,
		Transfers: Transfers,
		TransportBox: TransportBox,
		TransportItem: TransportItem,
		TransportItemPart: TransportItemPart,
		UrgentRequests: UrgentRequests,
		URL: URL,
		VirtualFolder: VirtualFolder,
		VolBlog: VolBlog,
		VolCategories: VolCategories,
		VolClassification: VolClassification,
		VolComments: VolComments,
		VolDAP: VolDAP,
		VolDeletedItems: VolDeletedItems,
		VolDirectory: VolDirectory,
		VolDiscussion: VolDiscussion,
		VolDomainWorkspace: VolDomainWorkspace,
		VolDTD: VolDTD,
		VolEditWorkflow: VolEditWorkflow,
		VolFacets: VolFacets,
		VolLibrary: VolLibrary,
		VolOrphan: VolOrphan,
		VolPersonalStaging: VolPersonalStaging,
		VolPerspectives: VolPerspectives,
		VolPhysObj: VolPhysObj,
		VolRecMan: VolRecMan,
		VolRelease: VolRelease,
		VolReports: VolReports,
		VolSystem: VolSystem,
		VolTracer: VolTracer,
		VolumeFolder: VolumeFolder,
		VolumeLLVolume: VolumeLLVolume,
		VolWarehouse: VolWarehouse,
		VolWorkbin: VolWorkbin,
		VolWorkflow: VolWorkflow,
		WarehouseFolder: WarehouseFolder,
		WebFormConnectionVolume: WebFormConnectionVolume,
		WebFormDatabaseConnection: WebFormDatabaseConnection,
		WebFormLookup: WebFormLookup,
		WebFormLookupVolume: WebFormLookupVolume,
		WebReports: WebReports$1,
		WFMapLLNode: WFMapLLNode,
		WFStatusNode: WFStatusNode,
		WIKI: WIKI,
		WIKIPAGE: WIKIPAGE,
		Workbench: Workbench,
		WorkflowAttachments: WorkflowAttachments,
		XMLActivatorCon: XMLActivatorCon,
		XMLActivatorProd: XMLActivatorProd
	};

	class Nodes extends ServiceAbstract {
	  addablenodetypes(dataid) {
	    return this.session.get(`api/v1/nodes/${dataid}/addablenodetypes`);
	  }
	  async addDocument({
	    parent_id,
	    fileHandler,
	    apiVersion = "v1",
	    // v1 or v2
	    name = null,
	    options = {}
	  }) {
	    console.assert(parent_id != null, "parent_id cannot be null");
	    console.assert(fileHandler != null, "fileHandler cannot be null");
	    console.assert(
	      ["v1", "v2"].includes(apiVersion),
	      "apiVersion must be in ['v1','v2']"
	    );
	    const url = `api/${apiVersion}/nodes`;
	    {
	      const csName = name || fileHandler.name;
	      const params = {
	        ...options,
	        type: SubTypes.Document,
	        name: csName,
	        parent_id,
	        file: {
	          file: fileHandler,
	          name: csName
	        }
	      };
	      return this.session.postForm(url, params);
	    }
	  }
	  async addDocumentMajor({
	    parent_id,
	    fileHandler,
	    name = null,
	    description = null,
	    options = {}
	  }) {
	    const response = await this.addDocument({
	      parent_id,
	      fileHandler,
	      name,
	      options: {
	        ...options,
	        advanced_versioning: true
	      }
	    });
	    const dataid = response.data.id;
	    await this.session.versions.promote({
	      dataid,
	      versionNumber: 1,
	      description
	    });
	    await this.session.versions.deleteVersion({
	      dataid,
	      versionNumber: 1
	    });
	    return response;
	  }
	  addItem(type, parent_id, name, params = {}) {
	    return this.session.postBody("api/v2/nodes", {
	      type,
	      parent_id,
	      name,
	      ...params
	    });
	  }
	  node({ dataid, apiVersion = "v2", params = {} }) {
	    return this.session.get(`api/${apiVersion}/nodes/${dataid}`, {
	      params
	    });
	  }
	  ancestors(dataid, params = {}) {
	    return this.session.get(`api/v1/nodes/${dataid}/ancestors`, {
	      params
	    });
	  }
	  volumeInfo(objType) {
	    return this.session.get(`api/v1/volumes/${objType}`);
	  }
	  volumes() {
	    return this.session.get("api/v2/volumes");
	  }
	  addFolder(parent_id, name, params = {}) {
	    return this.addItem(SubTypes.Folder, parent_id, name, params);
	  }
	  addGeneration(parent_id, name, original_id, version_number, params = {}) {
	    return this.addItem(SubTypes.Generation, parent_id, name, {
	      original_id,
	      version_number,
	      ...params
	    });
	  }
	  nodes(dataid, params = {}) {
	    return this.session.get(`api/v2/nodes/${dataid}/nodes`, {
	      params
	    });
	  }
	  children(dataid, params = {}) {
	    return this.nodes(dataid, params);
	  }
	  delete(dataid) {
	    return this.session.delete(`api/v1/nodes/${dataid}`);
	  }
	  download({ dataid, apiVersion = "v1", filePath }) {
	    {
	      return Promise.reject("Not implemented yet");
	    }
	  }
	  audit({ dataid, apiVersion = "v2", params = {} }) {
	    return this.session.get(`api/${apiVersion}/nodes/${dataid}/audit`, {
	      params
	    });
	  }
	}

	class Workflow extends ServiceAbstract {
	  start(map_id) {
	    return this.draftprocesses(map_id).then((response) => lodash_get(response, "data.results.draftprocess_id")).then((draftprocess_id) => this.draftprocesses_update(draftprocess_id));
	  }
	  draftprocesses(workflow_id) {
	    return this.session.postForm("api/v2/draftprocesses", {
	      workflow_id
	    });
	  }
	  draftprocesses_update(draftprocess_id) {
	    return this.session.get("api/v1/forms/draftprocesses/update", {
	      params: {
	        draftprocess_id
	      }
	    });
	  }
	  draftprocesses_put(draftprocess_id, body) {
	    return this.session.putForm(`api/v2/draftprocesses/${draftprocess_id}`, {
	      body
	    });
	  }
	  // draftprocesses_formUpdate(draftprocess_id, values) {
	  // const body = {
	  // action: "formUpdate",
	  // values
	  // }
	  // return this.draftprocesses_put(draftprocess_id, body)
	  // }
	}

	class RHCore extends ServiceAbstract {
	  scriptNode(id, params = {}) {
	    return this.session.get(`api/v1/rhcore/${id}`, {
	      params
	    });
	  }
	}

	class Search extends ServiceAbstract {
	  search(where, params = {}) {
	    return this.session.postBody("api/v2/search", {
	      where,
	      ...params
	    });
	  }
	  regions(params = {}) {
	    return this.session.get("api/v1/regions", params);
	  }
	}

	class Members extends ServiceAbstract {
	  // public readonly USER: 0
	  // public readonly GROUP: 1
	  USER;
	  GROUP;
	  constructor(session) {
	    super(session);
	    this.USER = 0;
	    this.GROUP = 1;
	  }
	  userQuery(query, options = {}, version = "v2") {
	    const params = {
	      limit: 20,
	      where_type: JSON.stringify([this.USER, this.GROUP]),
	      query,
	      ...options
	    };
	    return this.session.get(`api/${version}/members`, { params });
	  }
	  member(id, version = "v2") {
	    return this.session.get(`api/${version}/members/${id}`);
	  }
	}

	class Versions extends ServiceAbstract {
	  async addVersion({
	    dataid,
	    fileHandler,
	    apiVersion = "v1",
	    fileName = null,
	    options = {}
	  }) {
	    console.assert(dataid != null, "dataid cannot be null");
	    console.assert(fileHandler != null, "fileHandler cannot be null");
	    const url = `api/${apiVersion}/nodes/${dataid}/versions`;
	    {
	      const name = fileName || fileHandler.name;
	      const params = {
	        file: {
	          file: fileHandler,
	          name
	        },
	        ...options
	      };
	      return this.session.postForm(url, params);
	    }
	  }
	  async download({ dataid, version, filePath }) {
	    console.assert(dataid != null, "dataid cannot be null");
	    console.assert(version != null, "version cannot be null");
	    console.assert(filePath != null, "filePath cannot be null");
	    {
	      return Promise.reject("Not implemented yet");
	    }
	  }
	  async list(dataid) {
	    const url = `api/v1/nodes/${dataid}/versions`;
	    return this.session.get(url);
	  }
	  async version(dataid, version_number = "latest") {
	    const url = `api/v1/nodes/${dataid}/versions/${version_number}`;
	    return this.session.get(url);
	  }
	  async promote({ dataid, versionNumber, description = null }) {
	    console.assert(dataid != null, "dataid cannot be null");
	    console.assert(versionNumber != null, "number_to_keep must be an integer");
	    const url = `api/v2/nodes/${dataid}/versions/${versionNumber}/promote`;
	    return this.session.postBody(url, {
	      ...!!description && {
	        description
	      }
	    });
	  }
	  async deleteVersion({ dataid, versionNumber, apiVersion = "v1" }) {
	    console.assert(dataid != null, "dataid cannot be null");
	    console.assert(versionNumber != null, "number_to_keep must be an integer");
	    const url = `api/${apiVersion}/nodes/${dataid}/versions/${versionNumber}`;
	    return this.session.delete(url);
	  }
	  async purge({ dataid, number_to_keep = 1 }) {
	    console.assert(dataid != null, "dataid cannot be null");
	    console.assert(!isNaN(number_to_keep), "number_to_keep must be an integer");
	    const url = `api/v2/nodes/${dataid}/versions`;
	    return this.session.deleteForm(url, {
	      number_to_keep
	    });
	  }
	}

	class WebReports extends ServiceAbstract {
	  run(dataid, params = {}) {
	    const url = `api/v1/nodes/${dataid}/output`;
	    return this.session.get(url, { params });
	  }
	}

	/**
	 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * Checks if `value` is `null` or `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
	 * @example
	 *
	 * _.isNil(null);
	 * // => true
	 *
	 * _.isNil(void 0);
	 * // => true
	 *
	 * _.isNil(NaN);
	 * // => false
	 */
	function isNil(value) {
	  return value == null;
	}

	var lodash_isnil = isNil;

	const sequence = {
	  index: 0,
	  get next() {
	    this.index = this.index + 1;
	    return this.index;
	  }
	};
	class RPCClient {
	  session;
	  relativePath;
	  _batchQueue;
	  constructor(session, relativePath) {
	    this.session = session;
	    this.relativePath = relativePath;
	    this.resetQueue();
	  }
	  requestObject(method, params, id) {
	    return {
	      jsonrpc: "2.0",
	      method,
	      id,
	      params
	    };
	  }
	  handleResponse(data) {
	    if (Object.prototype.hasOwnProperty.call(data, "result")) {
	      return data.result;
	    } else if (Object.prototype.hasOwnProperty.call(data, "error")) {
	      const err = data.error;
	      throw new RPCError(err.message, err.data, err.code);
	    } else {
	      throw Error("The server did not respond correctly.");
	    }
	  }
	  // https://www.jsonrpc.org/specification#request_object
	  // params is allowed to be null!
	  // also on queue function below
	  async request(method, params, id = sequence.next) {
	    const response = await this.session.postBody(this.relativePath, {
	      rpc: this.requestObject(method, params, id)
	    });
	    return this.handleResponse(response.data);
	  }
	  resetQueue() {
	    this._batchQueue = [];
	  }
	  queue(method, params, id = sequence.next) {
	    this._batchQueue.push(this.requestObject(method, params, id));
	    return this;
	  }
	  async batch(throwOnError = false) {
	    const queue = this._batchQueue;
	    this.resetQueue();
	    const response = await this.session.postBody(this.relativePath, {
	      rpc: queue
	    });
	    return lodash_get(response, "data.data", []).map((item) => {
	      if (throwOnError) {
	        return this.handleResponse(item);
	      } else {
	        try {
	          return this.handleResponse(item);
	        } catch (e) {
	          return e;
	        }
	      }
	    });
	  }
	  rhnode(dataid, method, args = [], id = sequence.next) {
	    const params = {
	      dataid,
	      args
	    };
	    return this.request(method, params, id);
	  }
	  rhnodeQueue(dataid, method, args = [], id = sequence.next) {
	    const params = {
	      dataid,
	      args
	    };
	    return this.queue(method, params, id);
	  }
	}

	class Session {
	  axios;
	  _nodes;
	  _auth;
	  _workflow;
	  _rhcore;
	  _members;
	  _search;
	  _webreports;
	  _versions;
	  constructor(options) {
	    this.axios = axiosFactory(options);
	  }
	  get nodes() {
	    if (this._nodes == null) {
	      this._nodes = new Nodes(this);
	    }
	    return this._nodes;
	  }
	  get auth() {
	    if (this._auth == null) {
	      this._auth = new Auth(this);
	    }
	    return this._auth;
	  }
	  get workflow() {
	    if (this._workflow == null) {
	      this._workflow = new Workflow(this);
	    }
	    return this._workflow;
	  }
	  get rhcore() {
	    if (this._rhcore == null) {
	      this._rhcore = new RHCore(this);
	    }
	    return this._rhcore;
	  }
	  get members() {
	    if (this._members == null) {
	      this._members = new Members(this);
	    }
	    return this._members;
	  }
	  get search() {
	    if (this._search == null) {
	      this._search = new Search(this);
	    }
	    return this._search;
	  }
	  get webreports() {
	    if (this._webreports == null) {
	      this._webreports = new WebReports(this);
	    }
	    return this._webreports;
	  }
	  get versions() {
	    if (this._versions == null) {
	      this._versions = new Versions(this);
	    }
	    return this._versions;
	  }
	  get dataTypesEnum() {
	    return dataTypesEnum;
	  }
	  rpcClient(relativePath = "/api/v1/rh/rpc/rhnode/") {
	    return new RPCClient(this, relativePath);
	  }
	  _isObject(value) {
	    return value && typeof value === "object" && value.constructor === Object;
	  }
	  _isString(value) {
	    return typeof value === "string" || value instanceof String;
	  }
	  _isBoolean(value) {
	    return typeof value === "boolean";
	  }
	  objectToForm(obj) {
	    const formData = FormDataFactory.createFormData();
	    for (const [key, value] of Object.entries(obj)) {
	      if (value && value.name && value.file) {
	        formData.append(key, value.file, value.name);
	      } else if (Array.isArray(value) || this._isObject(value) || this._isBoolean(value)) {
	        formData.append(key, JSON.stringify(value));
	      } else if (!lodash_isnil(value)) {
	        formData.append(key, value);
	      }
	    }
	    return formData;
	  }
	  putForm(url, params) {
	    const formData = this.objectToForm(params);
	    return this.put(url, formData);
	  }
	  postForm(url, params) {
	    const formData = this.objectToForm(params);
	    return this.post(url, formData, {
	      maxBodyLength: Infinity
	    });
	  }
	  patchForm(url, params) {
	    const formData = this.objectToForm(params);
	    return this.patch(url, formData);
	  }
	  deleteForm(url, params) {
	    return this.delete(url);
	  }
	  putBody(url, body) {
	    return this.putForm(url, {
	      body
	    });
	  }
	  postBody(url, body) {
	    return this.postForm(url, {
	      body
	    });
	  }
	  patchBody(url, body) {
	    return this.patchForm(url, {
	      body
	    });
	  }
	  deleteBody(url, body) {
	    return this.deleteForm(url, {
	      body
	    });
	  }
	  get(url, config) {
	    return this.axios.get(url, config);
	  }
	  // get(...args) {
	  //   return this.axios.get(...args)
	  // }
	  post(url, data, config) {
	    return this.axios.post(url, data, config);
	  }
	  put(url, data, config) {
	    return this.axios.put(url, data, config);
	  }
	  patch(url, data, config) {
	    return this.axios.patch(url, data, config);
	  }
	  options(url, config) {
	    return this.axios.options(url, config);
	  }
	  delete(url, config) {
	    return this.axios.delete(url, config);
	  }
	  // post(...args) {
	  //   return this.axios.post(...args)
	  // }
	  // put(...args) {
	  //   return this.axios.put(...args)
	  // }
	  // delete(...args) {
	  //   return this.axios.delete(...args)
	  // }
	  // options(...args) {
	  //   return this.axios.options(...args)
	  // }
	  // patch(...args) {
	  //   return this.axios.patch(...args)
	  // }
	}

	exports.RPCError = RPCError;
	exports.Session = Session;

}));
//# sourceMappingURL=index.umd.js.map
