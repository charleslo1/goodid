// defaults
const defaultAlphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const defaultStartTime = new Date(2018, 0, 1).getTime()

/**
 * generate random string
 * @param  {Number} length   length
 * @param  {String} alphabet alphabet
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
 * @param  {String} [alphabet] alphabet (optional)
 * @return {String}            goodid
 */
function goodid (length, alphabet) {
  length = length || 16
  let time = genTimestamp()
  if (length < 16 || alphabet) {
    return genRandom(length, alphabet)
  } else {
    return [time, genRandom(length - time.length)].join('')
  }
}

// export
export default goodid
