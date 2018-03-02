import { expect } from 'chai'
import Vue from 'vue'
import Logger from '../../../src'

Vue.use(Logger)

describe('Logger Mixin', function () {
  const vm = new Vue({})

  it('should correctly mix in', function () {
    expect(vm.$logger).to.be.a('object')
    expect(vm.$logger.log).to.be.a('function')
  })

  it('should have a right logger name', function () {
    expect(vm.$logger.name).to.be.equal('anonymous')
  })
})
