exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    console.log(str);
    console.log(amount);
    var arr = str.split('');
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
      arr[i]
    }
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    return str.split("").reverse().join("")
  }
};
