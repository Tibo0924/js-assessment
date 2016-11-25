exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this,arr)
  },

  speak: function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction: function(str) {
    var a = str;
    return function ab(str){
      return (a+", "+str);
    }
  },

  makeClosures: function(arr, fn) {
    return arr.map(n => {return function(){ return fn(n)} })
  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {
    var s = Array.from(arguments);
    s = s.reduce((a,b) => a+b);
    return s
  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
