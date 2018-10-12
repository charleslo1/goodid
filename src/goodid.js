// defaults
var defaultAlphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
var defaultStartTime = new Date(2018, 9, 1).getTime()
var defaultLength = 16
var defaultPrefix = ''

/**
 * generate random string
 * @param  {Number} length   length
 * @return {String}          random string
 */
function genRandom (length, alphabet) {
  alphabet = alphabet || defaultAlphabet
  length = length || 1
  let id = ''
  while (length-- > 0) {
    id += alphabet[Math.random() * alphabet.length | 0]
  }
  return id
}

/**
 * generate timestamp string
 * @param  {String} alphabet alphabet
 * @return {String}          timestamp string
 */
function genTimestamp () {
  let timeArr = Math.round((Date.now() - defaultStartTime) / 1000).toString(36).split('')
  let count = 3
  let index = 0
  while (count-- > 0) {
    index = Math.random() * timeArr.length | 0
    timeArr[index] = timeArr[index].toUpperCase()
  }
  return timeArr.join('')
}

/**
 * generate goodid
 * @param  {Number} length     length
 * @param  {String} prefix     prefix
 * @param  {String} [alphabet] alphabet (optional)
 * @return {String}            goodid
 */
function goodid (length, prefix, alphabet) {
  length = length || defaultLength
  prefix = prefix || defaultPrefix
  if (length <= prefix.length) throw new Error('The length parameter cannot be less than the length of the prefix.')
  let time = genTimestamp()
  if (length < 16 || alphabet) {
    return [prefix, genRandom(length - prefix.length, alphabet)].join('')
  } else {
    return [prefix, time, genRandom(length - prefix.length - time.length)].join('')
  }
}

/**
 * default config
 */
goodid.defaults = {
  length: defaultLength,
  prefix: defaultPrefix,
  alphabet: defaultAlphabet,
  startTime: defaultStartTime
}

/**
 * config default options
 * @param  {Object} options options
 */
goodid.config = function (options) {
  // get options
  options = options || goodid.defaults
  // set config
  defaultLength = options.length || defaultLength
  defaultPrefix = options.prefix || defaultPrefix
  defaultAlphabet = options.alphabet || defaultAlphabet
  defaultStartTime = options.startTime || defaultStartTime
}

/**
 * goodid alias
 */
goodid.create = function () {
  return goodid.apply(this, arguments)
}

// export
export default goodid
