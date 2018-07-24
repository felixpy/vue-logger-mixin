# vue-logger-mixin

A logger mixin for vue which can use different patterns and appenders with [@felixpy/logger](https://github.com/felixpy/logger).

## Installation

### Using NPM

```sh
npm i vue-logger-mixin --save
```

## Quick Start

```js
import Vue from 'vue'
import LoggerMixin from 'vue-logger-mixin'

Vue.use(LoggerMixin)

new Vue({
  // ...

  components: {
    'foobar': {
      created () {
        this.$logger.log('created', 'Hello Logger!')
      }
    }
  }
})
// [3/3/2018, 1:19:35 AM] [LOG] [foobar->created] - Hello Logger!
```

## Options

You can specify an options when using mixin:

```js
Vue.use(LoggerMixin, {
  // custom config
  config: {
    separator: '>>>',
    dateFormatter: function (date) {
      return date.toISOString()
    }
  }
})
```

For more details, see: [@felixpy/logger](https://github.com/felixpy/logger).

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018, Felix Yang