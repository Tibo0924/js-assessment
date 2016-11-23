exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return str.search(/\d/) !== -1  ? true : false
  },

  containsRepeatingLetter: function(str) {

  },

  endsWithVowel: function(str) {
    var s = str.match(/[aeiou]$/i);
    if (s){return true}else{return false}
  },

  captureThreeNumbers: function(str) {

  },

  matchesPattern: function(str) {

  },

  isUSD: function(str) {
    
  }
};
