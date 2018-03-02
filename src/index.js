import Logger from '@felixpy/logger'

const install = function (Vue, options = {}) {
  Vue.mixin({
    beforeCreate: function () {
      let vm = this
      let loggerName = vm.$options._componentTag || 'anonymous'
      let previous
      let noConflict = function () {
        if (previous) {
          vm.$logger = previous
        }
        return previous
      }

      if (vm.$logger) {
        previous = vm.$logger
      }

      vm.$logger = Logger.get({
        ...options,
        name: loggerName
      })
      vm.$logger.noConflict = noConflict
    }
  })
}

export default {
  install
}
