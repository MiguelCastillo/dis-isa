// Helper method to test for object types.
var toString = (function() {
  var _toString = Object.prototype.toString;
  return function toStringDelegate(item) {
    return _toString.call(item);
  };
})();

var regexSignature  = toString(/test/);
var dateSignature   = toString(new Date());
var arraySignature  = toString([]);
var objectSignature = toString({});
var errorSignature  = toString(new Error());


/**
 * Check if input is undefined
 *
 * @param {*} item - Item to be tested for undefined
 * @returns {boolean}
 */
function isUndefined(item) {
  return item === (void 0);
}

/**
 * Check if input is null
 *
 * @param {*} item - Item to be tested for null
 * @returns {boolean}
 */
function isNull(item) {
  return item === null;
}

/**
 * Check if input is a regulat expression
 *
 * @param {*} item - Item to check for regular expression
 * @returns {boolean}
 */
function isRegex(item) {
  return !!item && toString(item) === regexSignature;
}

/**
 * Check if input is an array
 *
 * @param {*} item - Item to be tested for Array
 * @returns {boolean}
 */
var isArray = (function() {
  if (Array.isArray) {
    return Array.isArray;
  }

  return function(item) {
    return toString(item) === arraySignature;
  };
})();

/**
 * Check if input is a function
 *
 * @param {*} item - Item to be tested for function
 * @returns {boolean}
 */
function isFunction(item) {
  return typeof item === 'function';
}

/**
 * Check if input is a string
 *
 * @param {*} item - Item to check for string
 * @returns {boolean}
 */
function isString(item) {
  return typeof item === 'string';
}

/**
 * Check if input is an object. Objects are:
 *  - literal object, object instances, arrays, null
 *
 * @param {*} item - Item to check for object
 * @returns {boolean}
 */
function isObject(item) {
  return typeof item === 'object';
}

/**
 * Check if input is a Date
 *
 * @param {*} item - Item to be tested for Date
 * @returns {boolean}
 */
function isDate(item) {
  return toString(item) === dateSignature;
}

/**
 * Check if item is an object literal - plain object.
 *
 * @param {*} item - Item to check for object literal
 * @returns {boolean}
 */
function isPlainObject(item) {
  return toString(item) === objectSignature;
}

/**
 * Check if input is an error
 *
 * @param {*} item - Item to check for error
 * @returns {boolean}
 */
function isError(item) {
  return toString(item) === errorSignature || item instanceof Error;
}

/**
 * Extract the type name. This uses Object.prototype.toString
 * to get the type name.
 *
 * @param {*} item - Item to get the type for
 * @returns {string} type of the object
 */
function typeName(item) {
  if (isNull(item)) {
    return 'null';
  }
  else if (isUndefined(item)) {
    return 'undefined';
  }

  return /\[.+ ([^\]]+)/.exec(toString(item))[1].toLowerCase();
}

module.exports = {
  isNull: isNull,
  isUndefined: isUndefined,
  isRegex: isRegex,
  isArray: isArray,
  isError: isError,
  isString: isString,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isFunction: isFunction,
  isDate: isDate,
  typeName: typeName,
  toString: toString
};
