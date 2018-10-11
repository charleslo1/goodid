global.wx = {
  setStorageSync: () => {},
  getStorageSync: () => {},
  request: () => {}
}
const assert = require('assert')

const goodid = require('../dist/goodid')

// 测试 goodid.js
describe('goodid.js', () => {

  it('goodid()', () => {
    let id = goodid()
    assert.equal(16, id.length)
  })

  it('goodid(8)', () => {
    let id = goodid(8)
    assert.equal(8, id.length)
  })
})
