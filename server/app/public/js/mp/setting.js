/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/mp/setting/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!****************************************************************************!*\
  !*** delegated ./node_modules/axios/index.js from dll-reference _dll_base ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/axios/index.js");

/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/query-string/index.js from dll-reference _dll_base ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/query-string/index.js");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference _dll_base ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!****************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference _dll_base ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
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
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
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
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
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
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
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
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
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

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

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
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
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
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
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
          context.arg = undefined;
        }

        return !! caught;
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

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
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

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
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

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
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
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/zent/lib/index.js":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/index.js from dll-reference _dll_base ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/zent/lib/index.js");

/***/ }),

/***/ "./src/common/api/api.js":
/*!*******************************!*\
  !*** ./src/common/api/api.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.get = get;
exports.post = post;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function get(url) {
    var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var keylength = Object.keys(query).length;
    if (keylength > 0) {
        url = url + '?' + _queryString2.default.stringify(query);
    }
    return _axios2.default.get(url).then(function (res) {
        var result = res.data;
        if (result.code == 0) {
            return result.data;
        } else {
            throw new Error(result.msg);
        }
    });
}

function post(url) {
    var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


    query['_csrf'] = window.csrf;
    var keylength = Object.keys(query).length;
    if (keylength > 0) {
        url = url + '?' + _queryString2.default.stringify(query);
    }
    return _axios2.default.post(url, data).then(function (res) {
        var result = res.data;
        if (result.code == 0) {
            return result.data;
        } else {
            throw new Error(result.msg);
        }
    });
}

/***/ }),

/***/ "./src/common/api/mp.js":
/*!******************************!*\
  !*** ./src/common/api/mp.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.saveContentDetail = exports.getContentDetail = exports.getMpContentList = exports.saveMpPageDetail = exports.getMpPageDetail = exports.saveMpPageStructure = exports.getMpPageStructure = exports.getMpDynamicPageList = exports.saveMpDynamicSetting = exports.getMpDynamicSetting = exports.getMpStaticPageList = exports.getMpPageList = exports.saveMp = exports.getMpDetail = exports.getMpList = undefined;

var getMpList = exports.getMpList = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return api.get('/mp/get-mp-list', {});

                    case 2:
                        result = _context.sent;
                        return _context.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getMpList() {
        return _ref.apply(this, arguments);
    };
}();

var getMpDetail = exports.getMpDetail = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(mpId) {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return api.get('/mp/get-mp-detail', { mpId: mpId });

                    case 2:
                        result = _context2.sent;
                        return _context2.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function getMpDetail(_x) {
        return _ref2.apply(this, arguments);
    };
}();

var saveMp = exports.saveMp = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(mpId, mp) {
        var result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return api.post('/mp/save-mp-detail', { mpId: mpId }, mp);

                    case 2:
                        result = _context3.sent;
                        return _context3.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function saveMp(_x2, _x3) {
        return _ref3.apply(this, arguments);
    };
}();

var getMpPageList = exports.getMpPageList = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(mpId) {
        var result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return api.get('/mp/get-mp-page-list', { mpId: mpId });

                    case 2:
                        result = _context4.sent;
                        return _context4.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function getMpPageList(_x4) {
        return _ref4.apply(this, arguments);
    };
}();

var getMpStaticPageList = exports.getMpStaticPageList = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(mpId) {
        var result;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.next = 2;
                        return api.get('/mp/get-mp-page-static-list', { mpId: mpId });

                    case 2:
                        result = _context5.sent;
                        return _context5.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this);
    }));

    return function getMpStaticPageList(_x5) {
        return _ref5.apply(this, arguments);
    };
}();

var getMpDynamicSetting = exports.getMpDynamicSetting = function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(mpId) {
        var result;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        _context6.next = 2;
                        return api.get('/mp/get-dynamic-setting', { mpId: mpId });

                    case 2:
                        result = _context6.sent;
                        return _context6.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, this);
    }));

    return function getMpDynamicSetting(_x6) {
        return _ref6.apply(this, arguments);
    };
}();

var saveMpDynamicSetting = exports.saveMpDynamicSetting = function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(mpId, definition) {
        var result;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        _context7.next = 2;
                        return api.post('/mp/save-dynamic-setting', { mpId: mpId }, definition);

                    case 2:
                        result = _context7.sent;
                        return _context7.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context7.stop();
                }
            }
        }, _callee7, this);
    }));

    return function saveMpDynamicSetting(_x7, _x8) {
        return _ref7.apply(this, arguments);
    };
}();

var getMpDynamicPageList = exports.getMpDynamicPageList = function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(mpId) {
        var result;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        _context8.next = 2;
                        return api.get('/mp/get-mp-page-dynamic-list', { mpId: mpId });

                    case 2:
                        result = _context8.sent;
                        return _context8.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context8.stop();
                }
            }
        }, _callee8, this);
    }));

    return function getMpDynamicPageList(_x9) {
        return _ref8.apply(this, arguments);
    };
}();

var getMpPageStructure = exports.getMpPageStructure = function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(pageId) {
        var result;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
                switch (_context9.prev = _context9.next) {
                    case 0:
                        _context9.next = 2;
                        return api.get('/mp/get-mp-page-structure', { pageId: pageId });

                    case 2:
                        result = _context9.sent;
                        return _context9.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context9.stop();
                }
            }
        }, _callee9, this);
    }));

    return function getMpPageStructure(_x10) {
        return _ref9.apply(this, arguments);
    };
}();

var saveMpPageStructure = exports.saveMpPageStructure = function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(pageId, structure) {
        var result;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
                switch (_context10.prev = _context10.next) {
                    case 0:
                        _context10.next = 2;
                        return api.post('/mp/save-mp-page-structure', { pageId: pageId }, structure);

                    case 2:
                        result = _context10.sent;
                        return _context10.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context10.stop();
                }
            }
        }, _callee10, this);
    }));

    return function saveMpPageStructure(_x11, _x12) {
        return _ref10.apply(this, arguments);
    };
}();

var getMpPageDetail = exports.getMpPageDetail = function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(pageId) {
        var result;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
                switch (_context11.prev = _context11.next) {
                    case 0:
                        _context11.next = 2;
                        return api.get('/mp/get-mp-page-detail', { pageId: pageId });

                    case 2:
                        result = _context11.sent;
                        return _context11.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context11.stop();
                }
            }
        }, _callee11, this);
    }));

    return function getMpPageDetail(_x13) {
        return _ref11.apply(this, arguments);
    };
}();

var saveMpPageDetail = exports.saveMpPageDetail = function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(page) {
        var result;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
                switch (_context12.prev = _context12.next) {
                    case 0:
                        _context12.next = 2;
                        return api.post('/mp/save-mp-page-detail', {}, page);

                    case 2:
                        result = _context12.sent;
                        return _context12.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context12.stop();
                }
            }
        }, _callee12, this);
    }));

    return function saveMpPageDetail(_x14) {
        return _ref12.apply(this, arguments);
    };
}();

var getMpContentList = exports.getMpContentList = function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(mpId) {
        var result;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
                switch (_context13.prev = _context13.next) {
                    case 0:
                        _context13.next = 2;
                        return api.get('/mp/get-mp-content-list', { mpId: mpId });

                    case 2:
                        result = _context13.sent;
                        return _context13.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context13.stop();
                }
            }
        }, _callee13, this);
    }));

    return function getMpContentList(_x15) {
        return _ref13.apply(this, arguments);
    };
}();

var getContentDetail = exports.getContentDetail = function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(contentId) {
        var result;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
                switch (_context14.prev = _context14.next) {
                    case 0:
                        _context14.next = 2;
                        return api.get('/mp/get-mp-content-detail', { contentId: contentId });

                    case 2:
                        result = _context14.sent;
                        return _context14.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context14.stop();
                }
            }
        }, _callee14, this);
    }));

    return function getContentDetail(_x16) {
        return _ref14.apply(this, arguments);
    };
}();

var saveContentDetail = exports.saveContentDetail = function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(contentId, content) {
        var result;
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
                switch (_context15.prev = _context15.next) {
                    case 0:
                        _context15.next = 2;
                        return api.post('/mp/save-mp-content-detail', { contentId: contentId }, content);

                    case 2:
                        result = _context15.sent;
                        return _context15.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context15.stop();
                }
            }
        }, _callee15, this);
    }));

    return function saveContentDetail(_x17, _x18) {
        return _ref15.apply(this, arguments);
    };
}();

var _api = __webpack_require__(/*! ./api */ "./src/common/api/api.js");

var api = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/common/api/url.js":
/*!*******************************!*\
  !*** ./src/common/api/url.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQuery = getQuery;
exports.getHash = getHash;
exports.setHash = setHash;
var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

function getQuery() {
  var parsed = queryString.parse(location.search);
  return parsed;
}

function getHash() {
  var parsed = queryString.parse(location.hash);
  return parsed;
}

function setHash(key, value) {
  var parsed = queryString.parse(location.hash);
  parsed[key] = value;
  location.hash = queryString.stringify(parsed);
}

/***/ }),

/***/ "./src/common/layouts/BasicLayout.jsx":
/*!********************************************!*\
  !*** ./src/common/layouts/BasicLayout.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _zent = __webpack_require__(/*! zent */ "./node_modules/zent/lib/index.js");

__webpack_require__(/*! ./BasicLayout.pcss */ "./src/common/layouts/BasicLayout.pcss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItem = _zent.Menu.MenuItem,
    SubMenu = _zent.Menu.SubMenu;


var onClick = function onClick(e, key) {
    console.log(e, key);
};

var BasicLayout = function (_React$PureComponent) {
    _inherits(BasicLayout, _React$PureComponent);

    function BasicLayout() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, BasicLayout);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BasicLayout.__proto__ || Object.getPrototypeOf(BasicLayout)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(BasicLayout, [{
        key: 'render',
        value: function render() {
            var children = this.props.children;

            return _react2.default.createElement(
                'div',
                { className: 'mp-layout mp-layout-basic' },
                _react2.default.createElement(
                    'div',
                    { className: 'mp-layout__slide' },
                    _react2.default.createElement(
                        'div',
                        { className: 'mp-menu-header' },
                        '\u5C0F\u7A0B\u5E8F\u5DE5\u5382'
                    ),
                    this.renderMenu()
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mp-layout__content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'mp-layout__header' },
                        'header'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'mp-layout__body' },
                        children
                    )
                )
            );
        }
    }, {
        key: 'renderMenu',
        value: function renderMenu() {
            return _react2.default.createElement(
                _zent.Menu,
                {
                    mode: 'inline',
                    onClick: this.onClick
                },
                _react2.default.createElement(
                    MenuItem,
                    { key: '1' },
                    '\u5C0F\u7A0B\u5E8F\u5217\u8868'
                ),
                _react2.default.createElement(
                    MenuItem,
                    { key: '2' },
                    '\u6211\u7684Bundle'
                ),
                _react2.default.createElement(
                    MenuItem,
                    { key: '3' },
                    'Bundle\u5E02\u573A'
                )
            );
        }
    }]);

    return BasicLayout;
}(_react2.default.PureComponent);

exports.default = BasicLayout;

/***/ }),

/***/ "./src/common/layouts/BasicLayout.pcss":
/*!*********************************************!*\
  !*** ./src/common/layouts/BasicLayout.pcss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/mp/setting/App.jsx":
/*!**************************************!*\
  !*** ./src/pages/mp/setting/App.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _mp = __webpack_require__(/*! src/common/api/mp */ "./src/common/api/mp.js");

var mpApi = _interopRequireWildcard(_mp);

var _zent = __webpack_require__(/*! zent */ "./node_modules/zent/lib/index.js");

var _url = __webpack_require__(/*! src/common/api/url */ "./src/common/api/url.js");

var _Basic = __webpack_require__(/*! ./views/Basic */ "./src/pages/mp/setting/views/Basic.jsx");

var _Basic2 = _interopRequireDefault(_Basic);

var _TabBarStyle = __webpack_require__(/*! ./views/TabBarStyle */ "./src/pages/mp/setting/views/TabBarStyle.jsx");

var _TabBarStyle2 = _interopRequireDefault(_TabBarStyle);

var _TabBarButton = __webpack_require__(/*! ./views/TabBarButton */ "./src/pages/mp/setting/views/TabBarButton.jsx");

var _TabBarButton2 = _interopRequireDefault(_TabBarButton);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPanel = _zent.Tabs.TabPanel;

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _initialiseProps.call(_this);

        var _getQuery = (0, _url.getQuery)(),
            mpId = _getQuery.mpId;

        _this.state = {
            mpId: mpId,
            activeId: '1',
            mpDetail: {}
        };
        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var mpDetail = this.state.mpDetail;

            return _react2.default.createElement(
                _zent.Tabs,
                {
                    activeId: this.state.activeId,
                    onChange: this.onTabChange
                },
                _react2.default.createElement(
                    TabPanel,
                    {
                        tab: _react2.default.createElement(
                            'span',
                            null,
                            '\u57FA\u7840\u8BBE\u7F6E'
                        ),
                        id: '1'
                    },
                    _react2.default.createElement(_Basic2.default, { mp: mpDetail, saveMp: this.saveMp })
                ),
                _react2.default.createElement(
                    TabPanel,
                    {
                        tab: 'TabBar\u6837\u5F0F',
                        id: '2'
                    },
                    _react2.default.createElement(_TabBarStyle2.default, { mp: mpDetail, saveMp: this.saveMp })
                ),
                _react2.default.createElement(
                    TabPanel,
                    {
                        tab: 'TabBar\u6309\u94AE',
                        id: '3'
                    },
                    _react2.default.createElement(_TabBarButton2.default, { mp: mpDetail, saveMp: this.saveMp })
                )
            );
        }
    }, {
        key: 'loadMpList',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var mpId, mpDetail;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                mpId = this.state.mpId;
                                _context.next = 3;
                                return mpApi.getMpDetail(mpId);

                            case 3:
                                mpDetail = _context.sent;

                                this.setState({ mpDetail: mpDetail });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function loadMpList() {
                return _ref.apply(this, arguments);
            }

            return loadMpList;
        }()
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadMpList();
        }
    }]);

    return App;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.onTabChange = function (id) {
        _this2.setState({
            activeId: id
        });
    };

    this.saveMp = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(mp) {
            var mpId;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            mpId = _this2.state.mpId;
                            _context2.next = 3;
                            return mpApi.saveMp(mpId, mp);

                        case 3:
                            _zent.Notify.success('保存成功');

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        }));

        return function (_x) {
            return _ref2.apply(this, arguments);
        };
    }();
};

exports.default = App;

/***/ }),

/***/ "./src/pages/mp/setting/components/TabBarConfig.jsx":
/*!**********************************************************!*\
  !*** ./src/pages/mp/setting/components/TabBarConfig.jsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _zent = __webpack_require__(/*! zent */ "./node_modules/zent/lib/index.js");

var _mp = __webpack_require__(/*! src/common/api/mp */ "./src/common/api/mp.js");

var mpApi = _interopRequireWildcard(_mp);

var _url = __webpack_require__(/*! src/common/api/url */ "./src/common/api/url.js");

__webpack_require__(/*! ./tab-bar-config.pcss */ "./src/pages/mp/setting/components/tab-bar-config.pcss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Field = _zent.Form.Field,
    FormInputField = _zent.Form.FormInputField,
    FormSelectField = _zent.Form.FormSelectField,
    FormRadioGroupField = _zent.Form.FormRadioGroupField,
    FormCheckboxField = _zent.Form.FormCheckboxField,
    FormCheckboxGroupField = _zent.Form.FormCheckboxGroupField,
    FormColorPickerField = _zent.Form.FormColorPickerField,
    FormDateRangePickerField = _zent.Form.FormDateRangePickerField,
    FormNumberInputField = _zent.Form.FormNumberInputField,
    FormSwitchField = _zent.Form.FormSwitchField,
    FormSection = _zent.Form.FormSection,
    FieldArray = _zent.Form.FieldArray,
    createForm = _zent.Form.createForm;

var Basic = function (_React$Component) {
    _inherits(Basic, _React$Component);

    function Basic(props) {
        _classCallCheck(this, Basic);

        var _this = _possibleConstructorReturn(this, (Basic.__proto__ || Object.getPrototypeOf(Basic)).call(this, props));

        _this.state = {
            checkedList: [],
            staticPageList: [],
            dynamicPageList: [],
            contentList: []
        };

        _this.onPageTypeChange = function (e) {
            _this.forceUpdate();
        };

        return _this;
    }

    _createClass(Basic, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                name = _props.name,
                tabBar = _props.tabBar;
            var _state = this.state,
                staticPageList = _state.staticPageList,
                dynamicPageList = _state.dynamicPageList,
                contentList = _state.contentList;


            return _react2.default.createElement(
                FormSection,
                { name: name },
                _react2.default.createElement(FormInputField, {
                    name: 'text',
                    type: 'text',
                    label: 'Tab\u540D\u5B57:',
                    required: true,
                    spellCheck: false,
                    validations: { required: true },
                    validationErrors: { required: '请填写Tab名字' }
                }),
                _react2.default.createElement(FormInputField, {
                    name: 'iconUrl',
                    type: 'text',
                    label: '\u9ED8\u8BA4\u56FE\u6807:',
                    spellCheck: false,
                    validationErrors: { required: '默认图标' },
                    value: window.navigationBarTitleText
                }),
                _react2.default.createElement(FormInputField, {
                    name: 'selectedIconUrl',
                    type: 'text',
                    label: '\u9009\u4E2D\u56FE\u6807:',
                    spellCheck: false,
                    validationErrors: { required: '选中图标' },
                    value: window.navigationBarTitleText
                }),
                _react2.default.createElement(FormInputField, {
                    name: 'text',
                    type: 'text',
                    label: '\u8BBE\u7F6E\u4E3A\u9996\u9875:checkbox',
                    required: true,
                    spellCheck: false,
                    validations: { required: true },
                    validationErrors: { required: '请填写Tab名字' }
                }),
                _react2.default.createElement(FormSelectField, {
                    name: 'pageType',
                    label: '\u9875\u9762\u7C7B\u578B:',
                    data: [{ value: 'dynamic', text: '动态' }, { value: 'static', text: '静态' }],
                    required: true,
                    onChange: this.onPageTypeChange,
                    validations: { required: true },
                    validationErrors: { required: '页面类型' },
                    value: window.navigationBarTextStyle
                }),
                tabBar.pageType == 'static' && _react2.default.createElement(FormSelectField, {
                    name: 'pageId',
                    label: '\u8DF3\u8F6C\u7684\u9759\u6001\u9875:',
                    data: staticPageList,
                    optionText: 'label',
                    optionValue: 'id',
                    validationErrors: { required: '跳转的静态页' },
                    value: window.navigationBarTextStyle
                })
            );
        }
    }, {
        key: 'componentDidMount',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _getQuery, mpId, staticPageList;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _getQuery = (0, _url.getQuery)(), mpId = _getQuery.mpId;
                                _context.next = 3;
                                return mpApi.getMpStaticPageList(mpId);

                            case 3:
                                staticPageList = _context.sent;

                                this.setState({ staticPageList: staticPageList });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentDidMount() {
                return _ref.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }]);

    return Basic;
}(_react2.default.Component);

exports.default = Basic;

/***/ }),

/***/ "./src/pages/mp/setting/components/TabBarConfigWrapper.jsx":
/*!*****************************************************************!*\
  !*** ./src/pages/mp/setting/components/TabBarConfigWrapper.jsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _zent = __webpack_require__(/*! zent */ "./node_modules/zent/lib/index.js");

var _TabBarConfig = __webpack_require__(/*! ./TabBarConfig */ "./src/pages/mp/setting/components/TabBarConfig.jsx");

var _TabBarConfig2 = _interopRequireDefault(_TabBarConfig);

__webpack_require__(/*! ./tab-bar-config.pcss */ "./src/pages/mp/setting/components/tab-bar-config.pcss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Field = _zent.Form.Field,
    FormInputField = _zent.Form.FormInputField,
    FormSelectField = _zent.Form.FormSelectField,
    FormRadioGroupField = _zent.Form.FormRadioGroupField,
    FormCheckboxField = _zent.Form.FormCheckboxField,
    FormCheckboxGroupField = _zent.Form.FormCheckboxGroupField,
    FormColorPickerField = _zent.Form.FormColorPickerField,
    FormDateRangePickerField = _zent.Form.FormDateRangePickerField,
    FormNumberInputField = _zent.Form.FormNumberInputField,
    FormSwitchField = _zent.Form.FormSwitchField,
    FormSection = _zent.Form.FormSection,
    FieldArray = _zent.Form.FieldArray,
    createForm = _zent.Form.createForm;

var Basic = function (_React$Component) {
    _inherits(Basic, _React$Component);

    function Basic(props) {
        _classCallCheck(this, Basic);

        var _this = _possibleConstructorReturn(this, (Basic.__proto__ || Object.getPrototypeOf(Basic)).call(this, props));

        _this.state = {
            checkedList: []
        };

        _this.addTabBarBtn = function () {
            _this.props.fields.push({
                "pageId": 1,
                "pageName": "",
                "pageType": "static",
                "contentId": "",
                "iconUrl": "",
                "selectedIconUrl": "",
                "text": "新增按钮 " + _this.props.fields.length
            });
        };

        return _this;
    }

    _createClass(Basic, [{
        key: 'render',
        value: function render() {
            var fields = this.props.fields;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _zent.Button,
                        { type: 'primary', outline: true, onClick: this.addTabBarBtn },
                        '\u589E\u52A0\u4E00\u4E2ATabBarButton'
                    )
                ),
                fields.map(function (name, index, key, item, fieldsValue) {
                    return _react2.default.createElement(
                        'div',
                        { className: 'tab-bar-container', key: 'tabBar' + key },
                        _react2.default.createElement(
                            'span',
                            { className: 'tab-bar-title' },
                            ' TabBarButton ',
                            index + 1,
                            ' '
                        ),
                        _react2.default.createElement(
                            _zent.Pop,
                            { centerArrow: true, trigger: 'hover', content: '\u5220\u9664\u8BE5\u6210\u5458' },
                            _react2.default.createElement(_zent.Icon, {
                                className: 'del-btn',
                                type: 'close-circle',
                                onClick: function onClick() {
                                    return fields.remove(index);
                                }
                            })
                        ),
                        _react2.default.createElement(_TabBarConfig2.default, { index: index, name: name, tabBar: item })
                    );
                })
            );
        }
    }]);

    return Basic;
}(_react2.default.Component);

exports.default = Basic;

/***/ }),

/***/ "./src/pages/mp/setting/components/tab-bar-config.pcss":
/*!*************************************************************!*\
  !*** ./src/pages/mp/setting/components/tab-bar-config.pcss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/mp/setting/main.js":
/*!**************************************!*\
  !*** ./src/pages/mp/setting/main.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _BasicLayout = __webpack_require__(/*! ../../../common/layouts/BasicLayout.jsx */ "./src/common/layouts/BasicLayout.jsx");

var _BasicLayout2 = _interopRequireDefault(_BasicLayout);

var _App = __webpack_require__(/*! ./App.jsx */ "./src/pages/mp/setting/App.jsx");

var _App2 = _interopRequireDefault(_App);

__webpack_require__(/*! ./main.pcss */ "./src/pages/mp/setting/main.pcss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
    _BasicLayout2.default,
    null,
    _react2.default.createElement(_App2.default, null)
), document.getElementById('app'), function () {});

/***/ }),

/***/ "./src/pages/mp/setting/main.pcss":
/*!****************************************!*\
  !*** ./src/pages/mp/setting/main.pcss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/mp/setting/views/Basic.jsx":
/*!**********************************************!*\
  !*** ./src/pages/mp/setting/views/Basic.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _zent = __webpack_require__(/*! zent */ "./node_modules/zent/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Field = _zent.Form.Field,
    FormInputField = _zent.Form.FormInputField,
    FormSelectField = _zent.Form.FormSelectField,
    FormRadioGroupField = _zent.Form.FormRadioGroupField,
    FormCheckboxField = _zent.Form.FormCheckboxField,
    FormCheckboxGroupField = _zent.Form.FormCheckboxGroupField,
    FormColorPickerField = _zent.Form.FormColorPickerField,
    FormDateRangePickerField = _zent.Form.FormDateRangePickerField,
    FormNumberInputField = _zent.Form.FormNumberInputField,
    FormSwitchField = _zent.Form.FormSwitchField,
    createForm = _zent.Form.createForm;

var Basic = function (_React$Component) {
    _inherits(Basic, _React$Component);

    function Basic(props) {
        _classCallCheck(this, Basic);

        var _this = _possibleConstructorReturn(this, (Basic.__proto__ || Object.getPrototypeOf(Basic)).call(this, props));

        _this.state = {
            checkedList: []
        };

        _this.submit = function (values, zentForm) {
            _this.props.saveMp({
                window: values
            });
        };

        _this.resetForm = function () {
            _this.props.zentForm.resetFieldsValue();
        };

        return _this;
    }

    _createClass(Basic, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                handleSubmit = _props.handleSubmit,
                mp = _props.mp;
            var _mp$window = mp.window,
                window = _mp$window === undefined ? {} : _mp$window;

            return _react2.default.createElement(
                _zent.Form,
                { horizontal: true, onSubmit: handleSubmit(this.submit) },
                _react2.default.createElement(FormInputField, {
                    name: 'navigationBarTitleText',
                    type: 'text',
                    label: '\u5C0F\u7A0B\u5E8F\u540D\u5B57:',
                    required: true,
                    spellCheck: false,
                    validations: { required: true },
                    validationErrors: { required: '请填写小程序名字' },
                    value: window.navigationBarTitleText
                }),
                _react2.default.createElement(FormSelectField, {
                    name: 'navigationBarTextStyle',
                    label: '\u5BFC\u822A\u680F\u6587\u5B57\u989C\u8272:',
                    data: [{ value: 'black', text: '黑色' }, { value: 'white', text: '白色' }],
                    required: true,
                    validations: { required: true },
                    validationErrors: { required: '导航栏文字颜色' },
                    value: window.navigationBarTextStyle
                }),
                _react2.default.createElement(FormColorPickerField, {
                    name: 'navigationBarBackgroundColor',
                    label: '\u5BFC\u822A\u680F\u80CC\u666F\u8272:',
                    value: window.navigationBarBackgroundColor
                }),
                _react2.default.createElement(FormColorPickerField, {
                    name: 'backgroundColor',
                    label: '\u7A97\u53E3\u80CC\u666F\u989C\u8272:',
                    value: window.backgroundColor
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'zent-form__form-actions' },
                    _react2.default.createElement(
                        _zent.Button,
                        { type: 'primary', htmlType: 'submit' },
                        '\u83B7\u53D6\u8868\u5355\u503C'
                    ),
                    _react2.default.createElement(
                        _zent.Button,
                        { type: 'primary', outline: true, onClick: this.resetForm },
                        '\u91CD\u7F6E\u8868\u5355\u503C'
                    )
                )
            );
        }
    }]);

    return Basic;
}(_react2.default.Component);

exports.default = createForm()(Basic);

/***/ }),

/***/ "./src/pages/mp/setting/views/TabBarButton.jsx":
/*!*****************************************************!*\
  !*** ./src/pages/mp/setting/views/TabBarButton.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _TabBarConfigWrapper = __webpack_require__(/*! ../components/TabBarConfigWrapper */ "./src/pages/mp/setting/components/TabBarConfigWrapper.jsx");

var _TabBarConfigWrapper2 = _interopRequireDefault(_TabBarConfigWrapper);

var _zent = __webpack_require__(/*! zent */ "./node_modules/zent/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Field = _zent.Form.Field,
    FormInputField = _zent.Form.FormInputField,
    FormSelectField = _zent.Form.FormSelectField,
    FormRadioGroupField = _zent.Form.FormRadioGroupField,
    FormCheckboxField = _zent.Form.FormCheckboxField,
    FormCheckboxGroupField = _zent.Form.FormCheckboxGroupField,
    FormColorPickerField = _zent.Form.FormColorPickerField,
    FormDateRangePickerField = _zent.Form.FormDateRangePickerField,
    FormNumberInputField = _zent.Form.FormNumberInputField,
    FormSwitchField = _zent.Form.FormSwitchField,
    FieldArray = _zent.Form.FieldArray,
    createForm = _zent.Form.createForm;

var Basic = function (_React$Component) {
    _inherits(Basic, _React$Component);

    function Basic(props) {
        _classCallCheck(this, Basic);

        var _this = _possibleConstructorReturn(this, (Basic.__proto__ || Object.getPrototypeOf(Basic)).call(this, props));

        _this.state = {
            checkedList: []
        };

        _this.submit = function (values, zentForm) {
            _this.props.saveMp(values);
        };

        _this.resetForm = function () {
            _this.props.zentForm.resetFieldsValue();
        };

        return _this;
    }

    _createClass(Basic, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                handleSubmit = _props.handleSubmit,
                mp = _props.mp;
            var _mp$tabBar = mp.tabBar,
                tabBar = _mp$tabBar === undefined ? {} : _mp$tabBar,
                _mp$tabBarButtons = mp.tabBarButtons,
                tabBarButtons = _mp$tabBarButtons === undefined ? [] : _mp$tabBarButtons;

            return _react2.default.createElement(
                _zent.Form,
                { horizontal: true, onSubmit: handleSubmit(this.submit) },
                _react2.default.createElement(FieldArray, {
                    name: 'tabBarButtons',
                    component: _TabBarConfigWrapper2.default,
                    value: tabBarButtons
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'zent-form__form-actions' },
                    _react2.default.createElement(
                        _zent.Button,
                        { type: 'primary', htmlType: 'submit' },
                        '\u4FDD\u5B58'
                    )
                )
            );
        }
    }]);

    return Basic;
}(_react2.default.Component);

exports.default = createForm()(Basic);

/***/ }),

/***/ "./src/pages/mp/setting/views/TabBarStyle.jsx":
/*!****************************************************!*\
  !*** ./src/pages/mp/setting/views/TabBarStyle.jsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _zent = __webpack_require__(/*! zent */ "./node_modules/zent/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Field = _zent.Form.Field,
    FormInputField = _zent.Form.FormInputField,
    FormSelectField = _zent.Form.FormSelectField,
    FormRadioGroupField = _zent.Form.FormRadioGroupField,
    FormCheckboxField = _zent.Form.FormCheckboxField,
    FormCheckboxGroupField = _zent.Form.FormCheckboxGroupField,
    FormColorPickerField = _zent.Form.FormColorPickerField,
    FormDateRangePickerField = _zent.Form.FormDateRangePickerField,
    FormNumberInputField = _zent.Form.FormNumberInputField,
    FormSwitchField = _zent.Form.FormSwitchField,
    createForm = _zent.Form.createForm;

var Basic = function (_React$Component) {
    _inherits(Basic, _React$Component);

    function Basic(props) {
        _classCallCheck(this, Basic);

        var _this = _possibleConstructorReturn(this, (Basic.__proto__ || Object.getPrototypeOf(Basic)).call(this, props));

        _this.state = {
            checkedList: []
        };

        _this.submit = function (values, zentForm) {
            _this.props.saveMp({
                tabBar: values
            });
        };

        _this.resetForm = function () {
            _this.props.zentForm.resetFieldsValue();
        };

        return _this;
    }

    _createClass(Basic, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                handleSubmit = _props.handleSubmit,
                mp = _props.mp;
            var _mp$tabBar = mp.tabBar,
                tabBar = _mp$tabBar === undefined ? {} : _mp$tabBar,
                _mp$tabBarButtons = mp.tabBarButtons,
                tabBarButtons = _mp$tabBarButtons === undefined ? {} : _mp$tabBarButtons;

            return _react2.default.createElement(
                _zent.Form,
                { horizontal: true, onSubmit: handleSubmit(this.submit) },
                _react2.default.createElement(FormColorPickerField, {
                    name: 'color',
                    label: '\u6587\u5B57\u9ED8\u8BA4\u989C\u8272:',
                    value: tabBar.color
                }),
                _react2.default.createElement(FormColorPickerField, {
                    name: 'selectedColor',
                    label: '\u6587\u5B57\u9009\u4E2D\u989C\u8272:',
                    value: tabBar.selectedColor
                }),
                _react2.default.createElement(FormColorPickerField, {
                    name: 'backgroundColor',
                    label: '\u80CC\u666F\u8272:',
                    value: tabBar.backgroundColor
                }),
                _react2.default.createElement(FormSelectField, {
                    name: 'borderStyle',
                    label: '\u4E0A\u8FB9\u6846\u989C\u8272:',
                    data: [{ value: 'black', text: '黑色' }, { value: 'white', text: '白色' }],
                    required: true,
                    validations: { required: true },
                    validationErrors: { required: '导航栏文字颜色' },
                    value: tabBar.borderStyle
                }),
                _react2.default.createElement(FormSelectField, {
                    name: 'position',
                    label: '\u4F4D\u7F6E:',
                    data: [{ value: 'bottom', text: '底部' }, { value: 'top', text: '顶部' }],
                    required: true,
                    validations: { required: true },
                    validationErrors: { required: '导航栏文字颜色' },
                    value: tabBar.position
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'zent-form__form-actions' },
                    _react2.default.createElement(
                        _zent.Button,
                        { type: 'primary', htmlType: 'submit' },
                        '\u83B7\u53D6\u8868\u5355\u503C'
                    ),
                    _react2.default.createElement(
                        _zent.Button,
                        { type: 'primary', outline: true, onClick: this.resetForm },
                        '\u91CD\u7F6E\u8868\u5355\u503C'
                    )
                )
            );
        }
    }]);

    return Basic;
}(_react2.default.Component);

exports.default = createForm()(Basic);

/***/ }),

/***/ "dll-reference _dll_base":
/*!****************************!*\
  !*** external "_dll_base" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = _dll_base;

/***/ })

/******/ });