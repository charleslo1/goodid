(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.goodid = factory());
}(this, (function () { 'use strict';

// defaults
var defaultAlphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var defaultStartTime = new Date(2018, 0, 1).getTime();

/**
 * generate random string
 * @param  {Number} length   length
 * @param  {String} alphabet alphabet
 * @return {String}          random string
 */
function genRandom(length, alphabet) {
  alphabet = alphabet || defaultAlphabet;
  length = length || 1;
  var id = '';
  while (length-- > 0) {
    id += alphabet[Math.random() * alphabet.length | 0];
  }
  return id;
}

/**
 * generate timestamp string
 * @return {String}          timestamp string
 */
function genTimestamp() {
  var timeArr = Math.round((Date.now() - defaultStartTime) / 1000).toString(36).split('');
  var count = 3;
  var index = 0;
  while (count-- > 0) {
    index = Math.random() * timeArr.length | 0;
    timeArr[index] = timeArr[index].toUpperCase();
  }
  return timeArr.join('');
}

/**
 * generate goodid
 * @param  {Number} length     length
 * @param  {String} [alphabet] alphabet (optional)
 * @return {String}            goodid
 */
function goodid(length, alphabet) {
  length = length || 16;
  var time = genTimestamp();
  if (length < 16 || alphabet) {
    return genRandom(length, alphabet);
  } else {
    return [time, genRandom(length - time.length)].join('');
  }
}

return goodid;

})));
//# sourceMappingURL=goodid.js.map
