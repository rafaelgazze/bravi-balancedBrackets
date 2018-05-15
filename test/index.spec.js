const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const bracketsValidate = require('../index')

chai.use(sinonChai)
chai.should()
global.expect = chai.expect
global.assert = chai.assert
global.sinon = sinon

describe('Validate balanced bracket', () => {
  it('Returns false to balanced brackets', () => {
    const brackets = '{()()()()[][][][][]]]}'
    assert.equal(bracketsValidate.isValid(brackets), false)
  })
  it('Returns true to valid balanced brackets', () => {
    const brackets = '{()()()()[][][][][]}'
    assert.equal(bracketsValidate.isValid(brackets), true)
  })
  it('Returns false to empty brackets', () => {
    assert.equal(bracketsValidate.isValid(''), false)
  })
})
