exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    return arr.reduce(function(a,b){return a+b})
  },

  remove: function(arr, item) {
    return arr.filter(n => {return n != item})
  },

  removeWithoutCopy: function(arr, item) { //[1,2,3,4,2]
    var index = arr.indexOf(item);
    do {
      arr.splice( index, 1 );
      index = arr.indexOf(item);
    } while (index > -1)
    return arr
  },

  append: function(arr, item) {
    arr.push(item);
    return arr
  },

  truncate: function(arr) {
    arr.pop();
    return arr
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr
  },

  curtail: function(arr) {
    arr.shift();
    return arr
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert: function(arr, item, index) {
      arr.splice(index, 0, item);
    return arr
  },

  count: function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i++){
      if(arr[i] === item){count++}
    }
    return count
  },

  duplicates: function(arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
      var stuff = arr.shift();
      if(arr.includes(stuff) && !arr2.includes(stuff)){
        arr2.push(stuff);
      }
    }
    return arr2
  },

  square: function(arr) {
    return arr.map(n => n*n)
  },

  findAllOccurrences: function(arr, target) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === target){result.push(i)}
    }
  return result
}
};
