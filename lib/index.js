(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('core-js/modules/es.symbol.js'), require('core-js/modules/es.symbol.description.js'), require('core-js/modules/es.object.to-string.js'), require('core-js/modules/es.symbol.iterator.js'), require('core-js/modules/es.string.iterator.js'), require('core-js/modules/es.array.iterator.js'), require('core-js/modules/web.dom-collections.iterator.js'), require('core-js/modules/es.symbol.async-iterator.js'), require('core-js/modules/es.symbol.to-string-tag.js'), require('core-js/modules/es.math.to-string-tag.js'), require('core-js/modules/es.json.to-string-tag.js'), require('core-js/modules/es.object.get-prototype-of.js'), require('core-js/modules/es.function.name.js'), require('core-js/modules/es.promise.js'), require('core-js/modules/es.regexp.to-string.js'), require('core-js/modules/web.dom-collections.for-each.js'), require('core-js/modules/es.array.slice.js'), require('core-js/modules/es.object.entries.js'), require('axios'), require('core-js/modules/es.regexp.exec.js'), require('core-js/modules/es.regexp.constructor.js'), require('core-js/modules/es.string.replace.js'), require('core-js/modules/es.array.splice.js'), require('core-js/modules/es.array.map.js'), require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.number.constructor.js'), require('core-js/modules/es.array.join.js')) :
  typeof define === 'function' && define.amd ? define(['exports', 'core-js/modules/es.symbol.js', 'core-js/modules/es.symbol.description.js', 'core-js/modules/es.object.to-string.js', 'core-js/modules/es.symbol.iterator.js', 'core-js/modules/es.string.iterator.js', 'core-js/modules/es.array.iterator.js', 'core-js/modules/web.dom-collections.iterator.js', 'core-js/modules/es.symbol.async-iterator.js', 'core-js/modules/es.symbol.to-string-tag.js', 'core-js/modules/es.math.to-string-tag.js', 'core-js/modules/es.json.to-string-tag.js', 'core-js/modules/es.object.get-prototype-of.js', 'core-js/modules/es.function.name.js', 'core-js/modules/es.promise.js', 'core-js/modules/es.regexp.to-string.js', 'core-js/modules/web.dom-collections.for-each.js', 'core-js/modules/es.array.slice.js', 'core-js/modules/es.object.entries.js', 'axios', 'core-js/modules/es.regexp.exec.js', 'core-js/modules/es.regexp.constructor.js', 'core-js/modules/es.string.replace.js', 'core-js/modules/es.array.splice.js', 'core-js/modules/es.array.map.js', 'core-js/modules/es.array.concat.js', 'core-js/modules/es.number.constructor.js', 'core-js/modules/es.array.join.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.CSREST = {}, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, global.axios));
}(this, (function (exports, es_symbol_js, es_symbol_description_js, es_object_toString_js, es_symbol_iterator_js, es_string_iterator_js, es_array_iterator_js, web_domCollections_iterator_js, es_symbol_asyncIterator_js, es_symbol_toStringTag_js, es_math_toStringTag_js, es_json_toStringTag_js, es_object_getPrototypeOf_js, es_function_name_js, es_promise_js, es_regexp_toString_js, web_domCollections_forEach_js, es_array_slice_js, es_object_entries_js, axios) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getAugmentedNamespace(n) {
  	if (n.__esModule) return n;
  	var a = Object.defineProperty({}, '__esModule', {value: true});
  	Object.keys(n).forEach(function (k) {
  		var d = Object.getOwnPropertyDescriptor(n, k);
  		Object.defineProperty(a, k, d.get ? d : {
  			enumerable: true,
  			get: function () {
  				return n[k];
  			}
  		});
  	});
  	return a;
  }

  function createCommonjsModule(fn) {
    var module = { exports: {} };
  	return fn(module, module.exports), module.exports;
  }

  createCommonjsModule(function (module) {
    var runtime = function (exports) {

      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined$1; // More compressible than void 0.

      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

      function define(obj, key, value) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return obj[key];
      }

      try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
      } catch (err) {
        define = function define(obj, key, value) {
          return obj[key] = value;
        };
      }

      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.

        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
      }

      exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.

      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }

      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.

      var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.

      function Generator() {}

      function GeneratorFunction() {}

      function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.


      var IteratorPrototype = {};

      IteratorPrototype[iteratorSymbol] = function () {
        return this;
      };

      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }

      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
      GeneratorFunctionPrototype.constructor = GeneratorFunction;
      GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.

      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          define(prototype, method, function (arg) {
            return this._invoke(method, arg);
          });
        });
      }

      exports.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };

      exports.mark = function (genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          define(genFun, toStringTagSymbol, "GeneratorFunction");
        }

        genFun.prototype = Object.create(Gp);
        return genFun;
      }; // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.


      exports.awrap = function (arg) {
        return {
          __await: arg
        };
      };

      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);

          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;

            if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
              return PromiseImpl.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              });
            }

            return PromiseImpl.resolve(value).then(function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            }, function (error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke("throw", error, resolve, reject);
            });
          }
        }

        var previousPromise;

        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }

          return previousPromise = // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).


        this._invoke = enqueue;
      }

      defineIteratorMethods(AsyncIterator.prototype);

      AsyncIterator.prototype[asyncIteratorSymbol] = function () {
        return this;
      };

      exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.

      exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function (result) {
          return result.done ? result.value : iter.next();
        });
      };

      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }

          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            } // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


            return doneResult();
          }

          context.method = method;
          context.arg = arg;

          while (true) {
            var delegate = context.delegate;

            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);

              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }

              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }

            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);

            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;

              if (record.arg === ContinueSentinel) {
                continue;
              }

              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted; // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.

              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      } // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.


      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];

        if (method === undefined$1) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;

          if (context.method === "throw") {
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (delegate.iterator["return"]) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined$1;
              maybeInvokeDelegate(delegate, context);

              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }

            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return ContinueSentinel;
        }

        var record = tryCatch(method, delegate.iterator, context.arg);

        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }

        var info = record.arg;

        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

          context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.

          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined$1;
          }
        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        } // The delegate iterator is finished, so forget it and continue with
        // the outer generator.


        context.delegate = null;
        return ContinueSentinel;
      } // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.


      defineIteratorMethods(Gp);
      define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.

      Gp[iteratorSymbol] = function () {
        return this;
      };

      Gp.toString = function () {
        return "[object Generator]";
      };

      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };

        if (1 in locs) {
          entry.catchLoc = locs[1];
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }

        this.tryEntries.push(entry);
      }

      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }

      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{
          tryLoc: "root"
        }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }

      exports.keys = function (object) {
        var keys = [];

        for (var key in object) {
          keys.push(key);
        }

        keys.reverse(); // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.

        return function next() {
          while (keys.length) {
            var key = keys.pop();

            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          } // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.


          next.done = true;
          return next;
        };
      };

      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];

          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }

          if (typeof iterable.next === "function") {
            return iterable;
          }

          if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined$1;
              next.done = true;
              return next;
            };

            return next.next = next;
          }
        } // Return an iterator with no values.


        return {
          next: doneResult
        };
      }

      exports.values = values;

      function doneResult() {
        return {
          value: undefined$1,
          done: true
        };
      }

      Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          this.prev = 0;
          this.next = 0; // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.

          this.sent = this._sent = undefined$1;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined$1;
          this.tryEntries.forEach(resetTryEntry);

          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined$1;
              }
            }
          }
        },
        stop: function stop() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;

          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }

          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done) {
            throw exception;
          }

          var context = this;

          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined$1;
            }

            return !!caught;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;

            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }

          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }

          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;

          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }

          return this.complete(record);
        },
        complete: function complete(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }

          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }

          return ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;

              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }

              return thrown;
            }
          } // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.


          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };

          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined$1;
          }

          return ContinueSentinel;
        }
      }; // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.

      return exports;
    }( // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports );

    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      Function("r", "regeneratorRuntime = r")(runtime);
    }
  });

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

  var freeGlobal = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  /** Detect free variable `self`. */

  var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
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

  var maskSrcKey = function () {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  }();
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

  var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  /** Built-in value references. */

  var _Symbol = root.Symbol,
      splice = arrayProto.splice;
  /* Built-in method references that are verified to be native. */

  var Map$1 = getNative(root, 'Map'),
      nativeCreate = getNative(Object, 'create');
  /** Used to convert symbols to primitives and strings. */

  var symbolProto = _Symbol ? _Symbol.prototype : undefined,
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
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
  } // Add methods to `Hash`.


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
  } // Add methods to `ListCache`.


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
      'hash': new Hash(),
      'map': new (Map$1 || ListCache)(),
      'string': new Hash()
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
  } // Add methods to `MapCache`.


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

    return index && index == length ? object : undefined;
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

    var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
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

    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
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
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
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

    var type = _typeof(value);

    if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
      return true;
    }

    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
  }
  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */


  function isKeyable(value) {
    var type = _typeof(value);

    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
  }
  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */


  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */


  var stringToPath = memoize(function (string) {
    string = toString(string);
    var result = [];

    if (reLeadingDot.test(string)) {
      result.push('');
    }

    string.replace(rePropName, function (match, number, quote, string) {
      result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
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

    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
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
        return func + '';
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
    if (typeof func != 'function' || resolver && typeof resolver != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }

    var memoized = function memoized() {
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

    memoized.cache = new (memoize.Cache || MapCache)();
    return memoized;
  } // Assign cache to `_.memoize`.


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
    return value === other || value !== value && other !== other;
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
    var type = _typeof(value);

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
    return !!value && _typeof(value) == 'object';
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
    return _typeof(value) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
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


  function get$1(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }

  var lodash_get = get$1;

  var formDataFactory = {
    createFormData: function createFormData() {
      {
        return new FormData();
      }
    }
  };

  function getInstance(baseURL) {
    var instance = axios__default['default'].create({
      baseURL: baseURL
    });
    instance.interceptors.response.use(function (response) {
      var otcsticket = lodash_get(response, 'headers.otcsticket');

      if (otcsticket) {
        instance.defaults.headers.common['OTCSTicket'] = otcsticket;
      }

      return response;
    }, function (error) {
      return Promise.reject(error);
    });
    return instance;
  }

  function axiosFactory(options) {
    var instance = getInstance(options.baseURL);
    var username = lodash_get(options, 'username');
    var password = lodash_get(options, 'password');
    var otcsticket = lodash_get(options, 'otcsticket');

    if (otcsticket) {
      instance.defaults.headers.common['OTCSTicket'] = otcsticket;
    } else if (username && password) {
      instance.interceptors.request.use( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request) {
          var formData, response;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!request.headers.common['OTCSTicket']) {
                    _context.next = 4;
                    break;
                  }

                  return _context.abrupt("return", request);

                case 4:
                  formData = formDataFactory.createFormData();
                  formData.append('username', username);
                  formData.append('password', password);

                  {
                    _context.next = 13;
                    break;
                  }

                case 10:
                  _context.t0 = _context.sent;
                  _context.next = 16;
                  break;

                case 13:
                  _context.next = 15;
                  return axios__default['default'].post("".concat(options.baseURL, "/api/v1/auth/"), formData);

                case 15:
                  _context.t0 = _context.sent;

                case 16:
                  response = _context.t0;
                  request.headers.common['OTCSTicket'] = lodash_get(response, 'data.ticket');
                  return _context.abrupt("return", request);

                case 19:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    } else {
      throw 'You must provide an otcsticket or username and password.';
    }

    return instance;
  }

  var axiosFactory_1 = axiosFactory;

  // const FormDataFactory = require('./form-data-factory')
  var auth = function auth(session) {
    return {
      auth: function auth() {
        return session.get('/api/v1/auth/');
      }
    };
  };

  var SubTypes = {
    Folder: 0,
    Generation: 2,
    Document: 144
  };

  var nodes = function nodes(session) {
    return {
      addablenodetypes: function addablenodetypes(dataid) {
        return session.get("api/v1/nodes/".concat(dataid, "/addablenodetypes"));
      },
      addDocument: function addDocument(parent_id, fileHandler) {
        var _arguments = arguments;
        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var fileName, url, formData, path, f, name, _name;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  fileName = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : null;
                  url = 'api/v1/nodes';
                  formData = formDataFactory.createFormData();
                  formData.append('type', SubTypes.Document);
                  formData.append('parent_id', parent_id);

                  {
                    _context.next = 17;
                    break;
                  }

                case 10:
                  f = _context.sent;
                  name = fileName || path.basename(fileHandler);
                  formData.append('file', f, name);
                  formData.append('name', name);
                  return _context.abrupt("return", session.post(url, formData.getBuffer(), {
                    headers: formData.getHeaders(),
                    maxBodyLength: Infinity
                  }));

                case 17:
                  // browser
                  _name = fileName || fileHandler.name;
                  formData.append('file', fileHandler, _name);
                  formData.append('name', _name);
                  return _context.abrupt("return", session.post(url, formData));

                case 21:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      },
      addItem: function addItem(type, parent_id, name) {
        var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        return session.postBody('api/v2/nodes', _objectSpread2({
          type: type,
          parent_id: parent_id,
          name: name
        }, params));
      },
      node: function node(dataid) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return session.getCached("api/v2/nodes/".concat(dataid), {
          params: params
        });
      },
      ancestors: function ancestors(dataid) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return session.get("api/v1/nodes/".concat(dataid, "/ancestors"), {
          params: params
        });
      },
      volumeInfo: function volumeInfo(objType) {
        return session.get("api/v1/volumes/".concat(objType));
      },
      volumes: function volumes() {
        return session.get('api/v2/volumes');
      },
      addFolder: function addFolder(parent_id, name) {
        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return this.addItem(SubTypes.Folder, parent_id, name, params);
      },
      addGeneration: function addGeneration(parent_id, name, original_id, version_number) {
        var params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
        return this.addItem(SubTypes.Generation, parent_id, name, _objectSpread2({
          original_id: original_id,
          version_number: version_number
        }, params));
      },
      nodes: function nodes(dataid) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        // https://developer.opentext.com/webaccess/#url=%2Fawd%2Fresources%2Fapis%2Fcs-rest-api-for-cs-16-s%23!%2Fnodes%2FgetSubnodes_get_15&tab=501
        return session.get("api/v2/nodes/".concat(dataid, "/nodes"), {
          params: params
        });
      },
      children: function children(dataid) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.nodes(dataid, params);
      },
      delete: function _delete(dataid) {
        return session.delete("api/v1/nodes/".concat(dataid));
      },
      download: function download(dataid) {

        // session.nodes.download(1267501, 'v2', '/Users/chris/Downloads/test.pdf')
        {
          return Promise.reject('Not implemented yet');
        }
      }
    };
  };

  // const get = require('lodash.get')
  var workflow = function workflow(session) {
    return {
      start: function start(map_id) {
        var _this = this;

        return this.draftprocesses(map_id).then(function (response) {
          return get(response, 'data.results.draftprocess_id');
        }).then(function (draftprocess_id) {
          return _this.draftprocesses_update(draftprocess_id);
        });
      },
      draftprocesses: function draftprocesses(workflow_id) {
        return session.postForm('api/v2/draftprocesses', {
          workflow_id: workflow_id
        });
      },
      draftprocesses_update: function draftprocesses_update(draftprocess_id) {
        return session.get('api/v1/forms/draftprocesses/update', {
          params: {
            draftprocess_id: draftprocess_id
          }
        });
      },
      draftprocesses_put: function draftprocesses_put(draftprocess_id, body) {
        return session.putForm("api/v2/draftprocesses/".concat(draftprocess_id), {
          body: body
        });
      } // draftprocesses_formUpdate(draftprocess_id, values) {
      // 	const body = {
      // 		action: "formUpdate",
      // 		values
      // 	}
      // 	return this.draftprocesses_put(draftprocess_id, body)
      // }

    };
  };

  var rhcore = function rhcore(session) {
    return {
      scriptNode: function scriptNode(id) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return session.get("api/v1/rhcore/".concat(id), {
          params: params
        });
      }
    };
  };

  var search = function search(session) {
    return {
      // https://knowledge.opentext.com/knowledge/cs.dll/Open/67789539
      search: function search(where) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return session.postBody("api/v2/search", _objectSpread2({
          where: where
        }, params));
      },
      regions: function regions() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return session.get("api/v1/regions", params);
      }
    };
  };

  var members = function members(session) {
    return {
      USER: 0,
      GROUP: 1,
      userQuery: function userQuery(query) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var version = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'v2';

        var params = _objectSpread2({
          limit: 20,
          where_type: JSON.stringify([this.USER, this.GROUP]),
          query: query
        }, options);

        return session.get("api/".concat(version, "/members"), {
          params: params
        });
      },
      member: function member(id) {
        var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'v2';
        return session.getCached("api/".concat(version, "/members/").concat(id));
      }
    };
  };

  var versions = function versions(session) {
    return {
      addVersion: function addVersion(dataid, fileHandler) {
        var _arguments = arguments;
        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var options, url, path, f, params, _params;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  options = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : {};
                  url = "api/v1/nodes/".concat(dataid, "/versions"); // const formData = FormDataFactory.createFormData()

                  {
                    _context.next = 12;
                    break;
                  }

                case 7:
                  f = _context.sent;
                  // let name = fileName || path.basename(fileHandler)
                  params = _objectSpread2({
                    file: {
                      file: f,
                      name: path.basename(fileHandler)
                    }
                  }, options); // console.log(params)

                  return _context.abrupt("return", session.postForm(url, params));

                case 12:
                  // browser
                  // let name = fileName || fileHandler.name
                  _params = _objectSpread2({
                    file: {
                      file: fileHandler,
                      name: fileHandler.name
                    }
                  }, options);
                  return _context.abrupt("return", session.postForm(url, _params));

                case 14:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      },
      list: function list(dataid) {
        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var url;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  url = "api/v1/nodes/".concat(dataid, "/versions");
                  return _context2.abrupt("return", session.get(url));

                case 2:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))();
      },
      version: function version(dataid) {
        var _arguments2 = arguments;
        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var version_number, url;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  version_number = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : 'latest';
                  // latest not supported in v2
                  url = "api/v1/nodes/".concat(dataid, "/versions/").concat(version_number);
                  return _context3.abrupt("return", session.get(url));

                case 3:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }))();
      }
    };
  };

  var webreports = function webreports(session) {
    return {
      run: function run(dataid) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var url = "api/v1/nodes/".concat(dataid, "/output");
        return session.get(url, {
          params: params
        });
      }
    };
  };

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

  var isObject$1 = function isObject(x) {
    return _typeof(x) === 'object' && x !== null;
  };

  var ErrorCodes = {
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
  }; // -32000 to -32099 is reserved!

  var CustomError = /*#__PURE__*/function (_Error) {
    _inherits(CustomError, _Error);

    var _super = _createSuper(CustomError);

    function CustomError() {
      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ErrorCodes.INTERNALERROR.message;
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var code = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ErrorCodes.INTERNALERROR.code;

      _classCallCheck(this, CustomError);

      if (isObject$1(message)) {
        _this = _super.call(this, message.message);
        _this.code = message.code;
        _this.data = message.data;
      } else {
        _this = _super.call(this, message);
        _this.code = code;
        _this.data = data;
      }

      return _possibleConstructorReturn(_this);
    }

    return CustomError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  var errorCodes = {
    CustomError: CustomError,
    ErrorCodes: ErrorCodes
  };

  var CustomError$1 = errorCodes.CustomError;
   // to be tested...

  var sequence = {
    index: 0,

    get next() {
      this.index = this.index + 1;
      return this.index;
    }

  };

  var rpcClient = /*#__PURE__*/function () {
    function RPCClient(session, baseURL) {
      _classCallCheck(this, RPCClient);

      this.session = session;
      this.baseURL = baseURL;
      this.resetQueue();
    }

    _createClass(RPCClient, [{
      key: "requestObject",
      value: function requestObject(method, params, id) {
        return {
          jsonrpc: '2.0',
          method: method,
          id: id,
          params: params
        };
      }
    }, {
      key: "handleResponse",
      value: function handleResponse(data) {
        if (data.hasOwnProperty('result')) {
          return data.result;
        } else if (data.hasOwnProperty('error')) {
          var err = data.error;
          throw new CustomError$1(err.message, err.data, err.code);
        } else {
          throw new Error('The server did not respond correctly.');
        }
      }
    }, {
      key: "request",
      value: function () {
        var _request = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(method) {
          var params,
              id,
              response,
              _args = arguments;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  params = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
                  id = _args.length > 2 && _args[2] !== undefined ? _args[2] : sequence.next;
                  _context.next = 4;
                  return this.session.postBody(this.baseURL, {
                    rpc: this.requestObject(method, params, id)
                  });

                case 4:
                  response = _context.sent;
                  return _context.abrupt("return", this.handleResponse(response.data));

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function request(_x) {
          return _request.apply(this, arguments);
        }

        return request;
      }()
    }, {
      key: "resetQueue",
      value: function resetQueue() {
        this._batchQueue = [];
      }
    }, {
      key: "queue",
      value: function queue(method) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : sequence.next;

        this._batchQueue.push(this.requestObject(method, params, id));

        return this;
      }
    }, {
      key: "batch",
      value: function () {
        var _batch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var _this = this;

          var queue, response;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  queue = this._batchQueue;
                  this.resetQueue();
                  _context2.next = 4;
                  return this.session.postBody(this.baseURL, {
                    rpc: queue
                  });

                case 4:
                  response = _context2.sent;
                  return _context2.abrupt("return", lodash_get(response, 'data.data', []).map(function (item) {
                    return _this.handleResponse(item);
                  }));

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function batch() {
          return _batch.apply(this, arguments);
        }

        return batch;
      }()
    }, {
      key: "rhnode",
      value: function rhnode(dataid, method) {
        var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : sequence.next;
        var params = {
          dataid: dataid,
          args: args
        };
        return this.request(method, params, id);
      }
    }, {
      key: "rhnodeQueue",
      value: function rhnodeQueue(dataid, method) {
        var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : sequence.next;
        var params = {
          dataid: dataid,
          args: args
        };
        return this.queue(method, params, id);
      }
    }]);

    return RPCClient;
  }();

  var crypt = createCommonjsModule(function (module) {
    (function () {
      var base64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          crypt = {
        // Bit-wise rotation left
        rotl: function rotl(n, b) {
          return n << b | n >>> 32 - b;
        },
        // Bit-wise rotation right
        rotr: function rotr(n, b) {
          return n << 32 - b | n >>> b;
        },
        // Swap big-endian to little-endian and vice versa
        endian: function endian(n) {
          // If number given, swap endian
          if (n.constructor == Number) {
            return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
          } // Else, assume array and swap all items


          for (var i = 0; i < n.length; i++) {
            n[i] = crypt.endian(n[i]);
          }

          return n;
        },
        // Generate an array of any length of random bytes
        randomBytes: function randomBytes(n) {
          for (var bytes = []; n > 0; n--) {
            bytes.push(Math.floor(Math.random() * 256));
          }

          return bytes;
        },
        // Convert a byte array to big-endian 32-bit words
        bytesToWords: function bytesToWords(bytes) {
          for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8) {
            words[b >>> 5] |= bytes[i] << 24 - b % 32;
          }

          return words;
        },
        // Convert big-endian 32-bit words to a byte array
        wordsToBytes: function wordsToBytes(words) {
          for (var bytes = [], b = 0; b < words.length * 32; b += 8) {
            bytes.push(words[b >>> 5] >>> 24 - b % 32 & 0xFF);
          }

          return bytes;
        },
        // Convert a byte array to a hex string
        bytesToHex: function bytesToHex(bytes) {
          for (var hex = [], i = 0; i < bytes.length; i++) {
            hex.push((bytes[i] >>> 4).toString(16));
            hex.push((bytes[i] & 0xF).toString(16));
          }

          return hex.join('');
        },
        // Convert a hex string to a byte array
        hexToBytes: function hexToBytes(hex) {
          for (var bytes = [], c = 0; c < hex.length; c += 2) {
            bytes.push(parseInt(hex.substr(c, 2), 16));
          }

          return bytes;
        },
        // Convert a byte array to a base-64 string
        bytesToBase64: function bytesToBase64(bytes) {
          for (var base64 = [], i = 0; i < bytes.length; i += 3) {
            var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];

            for (var j = 0; j < 4; j++) {
              if (i * 8 + j * 6 <= bytes.length * 8) base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 0x3F));else base64.push('=');
            }
          }

          return base64.join('');
        },
        // Convert a base-64 string to a byte array
        base64ToBytes: function base64ToBytes(base64) {
          // Remove non-base-64 characters
          base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

          for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
            if (imod4 == 0) continue;
            bytes.push((base64map.indexOf(base64.charAt(i - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 | base64map.indexOf(base64.charAt(i)) >>> 6 - imod4 * 2);
          }

          return bytes;
        }
      };
      module.exports = crypt;
    })();
  });

  var charenc = {
    // UTF-8 encoding
    utf8: {
      // Convert a string to a byte array
      stringToBytes: function stringToBytes(str) {
        return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
      },
      // Convert a byte array to a string
      bytesToString: function bytesToString(bytes) {
        return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
      }
    },
    // Binary encoding
    bin: {
      // Convert a string to a byte array
      stringToBytes: function stringToBytes(str) {
        for (var bytes = [], i = 0; i < str.length; i++) {
          bytes.push(str.charCodeAt(i) & 0xFF);
        }

        return bytes;
      },
      // Convert a byte array to a string
      bytesToString: function bytesToString(bytes) {
        for (var str = [], i = 0; i < bytes.length; i++) {
          str.push(String.fromCharCode(bytes[i]));
        }

        return str.join('');
      }
    }
  };
  var charenc_1 = charenc;

  var sha1 = createCommonjsModule(function (module) {
    (function () {
      var crypt$1 = crypt,
          utf8 = charenc_1.utf8,
          bin = charenc_1.bin,
          // The core
      sha1 = function sha1(message) {
        // Convert to byte array
        if (message.constructor == String) message = utf8.stringToBytes(message);else if (typeof Buffer !== 'undefined' && typeof Buffer.isBuffer == 'function' && Buffer.isBuffer(message)) message = Array.prototype.slice.call(message, 0);else if (!Array.isArray(message)) message = message.toString(); // otherwise assume byte array

        var m = crypt$1.bytesToWords(message),
            l = message.length * 8,
            w = [],
            H0 = 1732584193,
            H1 = -271733879,
            H2 = -1732584194,
            H3 = 271733878,
            H4 = -1009589776; // Padding

        m[l >> 5] |= 0x80 << 24 - l % 32;
        m[(l + 64 >>> 9 << 4) + 15] = l;

        for (var i = 0; i < m.length; i += 16) {
          var a = H0,
              b = H1,
              c = H2,
              d = H3,
              e = H4;

          for (var j = 0; j < 80; j++) {
            if (j < 16) w[j] = m[i + j];else {
              var n = w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16];
              w[j] = n << 1 | n >>> 31;
            }
            var t = (H0 << 5 | H0 >>> 27) + H4 + (w[j] >>> 0) + (j < 20 ? (H1 & H2 | ~H1 & H3) + 1518500249 : j < 40 ? (H1 ^ H2 ^ H3) + 1859775393 : j < 60 ? (H1 & H2 | H1 & H3 | H2 & H3) - 1894007588 : (H1 ^ H2 ^ H3) - 899497514);
            H4 = H3;
            H3 = H2;
            H2 = H1 << 30 | H1 >>> 2;
            H1 = H0;
            H0 = t;
          }

          H0 += a;
          H1 += b;
          H2 += c;
          H3 += d;
          H4 += e;
        }

        return [H0, H1, H2, H3, H4];
      },
          // Public API
      api = function api(message, options) {
        var digestbytes = crypt$1.wordsToBytes(sha1(message));
        return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt$1.bytesToHex(digestbytes);
      };

      api._blocksize = 16;
      api._digestsize = 20;
      module.exports = api;
    })();
  });

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
  var RecordType = -109;
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
  	RecordType: RecordType,
  	ScriptType: ScriptType,
  	SocketType: SocketType,
  	StringType: StringType,
  	UAPIType: UAPIType,
  	UndefinedType: UndefinedType,
  	VoidType: VoidType,
  	WAPIWorkType: WAPIWorkType
  };

  var SemaphoreItem = /*#__PURE__*/function () {
    function SemaphoreItem(max) {
      _classCallCheck(this, SemaphoreItem);

      this.queue = [];
      this.max = max;
      this.count = 0;
    }

    _createClass(SemaphoreItem, [{
      key: "acquire",
      value: function acquire() {
        var _this = this;

        if (this.count < this.max) {
          this.count++;
          return Promise.resolve();
        } else {
          return new Promise(function (resolve) {
            _this.queue.push(resolve);
          });
        }
      }
    }, {
      key: "release",
      value: function release() {
        var resolveFunc = this.queue.shift();

        if (resolveFunc) {
          // Give the micro task queue a small break instead of calling resoleFunc() directly
          setTimeout(resolveFunc, 0);
        } else {
          this.count--;
        }
      }
    }]);

    return SemaphoreItem;
  }();

  var defaultKey = '_default';

  var Semaphore = /*#__PURE__*/function () {
    function Semaphore() {
      var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      _classCallCheck(this, Semaphore);

      this.semaphoreItems = {};
      this.max = max;
    }

    _createClass(Semaphore, [{
      key: "_getSemaphoreInstance",
      value: function _getSemaphoreInstance() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKey;

        if (!this.semaphoreItems[key]) {
          this.semaphoreItems[key] = new SemaphoreItem(this.max);
        }

        return this.semaphoreItems[key];
      }
    }, {
      key: "_tidy",
      value: function _tidy() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKey;

        if (this._getSemaphoreInstance(key).count == 0) {
          delete this.semaphoreItems[key];
        }
      }
    }, {
      key: "acquire",
      value: function acquire() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKey;
        return this._getSemaphoreInstance(key).acquire();
      }
    }, {
      key: "release",
      value: function release() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKey;

        this._getSemaphoreInstance(key).release();

        this._tidy(key);
      }
    }, {
      key: "count",
      value: function count() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKey;

        if (this.semaphoreItems[key]) {
          return this.semaphoreItems[key].count;
        } else {
          return 0;
        }
      }
    }, {
      key: "hasTasks",
      value: function hasTasks() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKey;
        return this.count(key) > 0;
      }
    }]);

    return Semaphore;
  }();

  var src = Semaphore;

  var index_es = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': src
  });

  var Semaphore$1 = /*@__PURE__*/getAugmentedNamespace(index_es);

  var semaphore = new Semaphore$1();
  var getCache = {};

  var Session_1 = /*#__PURE__*/function () {
    function Session(options) {
      _classCallCheck(this, Session);

      this.axios = axiosFactory_1(options);
    }

    _createClass(Session, [{
      key: "nodes",
      get: function get() {
        // this creates a circular reference.. bad?
        if (this._nodes == null) {
          this._nodes = nodes(this);
        }

        return this._nodes;
      }
    }, {
      key: "auth",
      get: function get() {
        if (this._auth == null) {
          this._auth = auth(this);
        }

        return this._auth;
      }
    }, {
      key: "workflow",
      get: function get() {
        // this creates a circular reference.. bad?
        if (this._workflow == null) {
          this._workflow = workflow(this);
        }

        return this._workflow;
      }
    }, {
      key: "rhcore",
      get: function get() {
        // this creates a circular reference.. bad?
        if (this._rhcore == null) {
          this._rhcore = rhcore(this);
        }

        return this._rhcore;
      }
    }, {
      key: "members",
      get: function get() {
        // this creates a circular reference.. bad?
        if (this._members == null) {
          this._members = members(this);
        }

        return this._members;
      }
    }, {
      key: "search",
      get: function get() {
        // this creates a circular reference.. bad?
        if (this._search == null) {
          this._search = search(this);
        }

        return this._search;
      }
    }, {
      key: "webreports",
      get: function get() {
        // this creates a circular reference.. bad?
        if (this._webreports == null) {
          this._webreports = webreports(this);
        }

        return this._webreports;
      }
    }, {
      key: "versions",
      get: function get() {
        // this creates a circular reference.. bad?
        if (this._versions == null) {
          this._versions = versions(this);
        }

        return this._versions;
      }
    }, {
      key: "dataTypesEnum",
      get: function get() {
        return dataTypesEnum;
      }
    }, {
      key: "rpcClient",
      value: function rpcClient$1() {
        var baseURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/api/v1/rh/rpc/rhnode/';
        return new rpcClient(this, baseURL);
      }
    }, {
      key: "_isObject",
      value: function _isObject(value) {
        return value && _typeof(value) === 'object' && value.constructor === Object;
      }
    }, {
      key: "_objectToForm",
      value: function _objectToForm(obj) {
        var formData = formDataFactory.createFormData();

        for (var _i = 0, _Object$entries = Object.entries(obj); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          if (value && value.name && value.file) {
            formData.append(key, value.file, value.name);
          } else if (Array.isArray(value) || this._isObject(value)) {
            formData.append(key, JSON.stringify(value));
          } else if (!lodash_isnil(value)) {
            // should empty strings be sent?
            formData.append(key, value);
          }
        }

        return formData;
      }
    }, {
      key: "get",
      value: function get() {
        var _this$axios;

        return (_this$axios = this.axios).get.apply(_this$axios, arguments);
      }
    }, {
      key: "getCached",
      value: function () {
        var _getCached = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _len,
              args,
              _key,
              key,
              _args = arguments;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  for (_len = _args.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = _args[_key];
                  }

                  key = sha1(JSON.stringify(args));
                  _context.prev = 2;
                  _context.next = 5;
                  return semaphore.acquire(key);

                case 5:
                  if (!getCache[key]) {
                    getCache[key] = this.get.apply(this, args);
                  }

                case 6:
                  _context.prev = 6;
                  semaphore.release(key);
                  return _context.finish(6);

                case 9:
                  return _context.abrupt("return", getCache[key]);

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[2,, 6, 9]]);
        }));

        function getCached() {
          return _getCached.apply(this, arguments);
        }

        return getCached;
      }()
    }, {
      key: "putForm",
      value: function putForm(url, params) {
        var formData = this._objectToForm(params);

        return this.put(url, formData);
      }
    }, {
      key: "postForm",
      value: function postForm(url, params) {
        var formData = this._objectToForm(params);

        return this.post(url, formData);
      }
    }, {
      key: "patchForm",
      value: function patchForm(url, params) {
        var formData = this._objectToForm(params);

        return this.patch(url, formData);
      }
    }, {
      key: "putBody",
      value: function putBody(url, body) {
        return this.putForm(url, {
          body: body
        });
      }
    }, {
      key: "postBody",
      value: function postBody(url, body) {
        return this.postForm(url, {
          body: body
        });
      }
    }, {
      key: "patchBody",
      value: function patchBody(url, body) {
        return this.patchForm(url, {
          body: body
        });
      }
    }, {
      key: "post",
      value: function post() {
        var _this$axios2;

        return (_this$axios2 = this.axios).post.apply(_this$axios2, arguments);
      }
    }, {
      key: "put",
      value: function put() {
        var _this$axios3;

        return (_this$axios3 = this.axios).put.apply(_this$axios3, arguments);
      }
    }, {
      key: "delete",
      value: function _delete() {
        var _this$axios4;

        return (_this$axios4 = this.axios).delete.apply(_this$axios4, arguments);
      }
    }, {
      key: "options",
      value: function options() {
        var _this$axios5;

        return (_this$axios5 = this.axios).options.apply(_this$axios5, arguments);
      }
    }, {
      key: "patch",
      value: function patch() {
        var _this$axios6;

        return (_this$axios6 = this.axios).patch.apply(_this$axios6, arguments);
      }
    }]);

    return Session;
  }();

  var Session_1$1 = Session_1;
  var src$1 = {
    Session: Session_1$1
  };

  exports.Session = Session_1$1;
  exports.default = src$1;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
