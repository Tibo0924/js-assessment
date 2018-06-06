'esversion:6'
exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    return arr.indexOf(item);
  },

  sum: function (arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  },

  remove: function (arr, item) {
    var uj = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        uj.push(arr[i]);
      }
    }
    return uj;
  },

  removeWithoutCopy: function (arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        this.removeWithoutCopy(arr, item)
      }
    }
    return arr
  },

  append: function (arr, item) {
   arr.push(item);
   return arr
  },

  truncate: function (arr) {
     arr.pop()
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
   return  arr1.concat(arr2)
  },

  insert: function (arr, item, index) {
      arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    var occ = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i]===item){
        occ++;
      }
    }
    return occ;

  },

  duplicates: function (arr) {
    var array = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr.indexOf(i) !== arr.lastIndexOf(i)) {
        array.push(arr[i]);
      }
    }
    return array;
  },

  square: function (arr) {
    return arr.map((element) => {
      return element * element;
    });

  },

  findAllOccurrences: function (arr, target) {
    var all = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        all.push(arr[i]);
      }
    }
    return all.length;

  }
};