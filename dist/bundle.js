import Logger from"@felixpy/logger";var _extends=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},install=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.mixin({beforeCreate:function(){var e=this,o=e.$options._componentTag||"anonymous",r=void 0;e.$logger&&(r=e.$logger),e.$logger=Logger.get(_extends({},n,{name:o})),e.$logger.noConflict=function(){return r&&(e.$logger=r),r}}})},index={install:install};export default index;
