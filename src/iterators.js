
var Iterators = (function() {
  var api = {

// Max  
    max: function(numList){
      var max = -Infinity;
      for (var i = 0; i < numList.length; i++) {
        if ( numList[i] > max ) {
          max = numList[i];
        }
      };
      return max;
    },

// Min  
    min: function(numList){
      var min = Infinity;
      for (var i = 0; i < numList.length; i++) {
        if ( numList[i] < min ) {
          min = numList[i];
        }
      };
      return min;
    },

// Each 
    each: function(list, action) {
      for (var i = 0; i < list.length; i++) {
        action(list[i], i); 
      }
      return list;
    },

// Map 
    map: function(numList, action){
      var newArr = []; 
      for (var i = 0; i < numList.length; i++) {
        var result = action(numList[i], i);
        var newArr.push(result);
      };
      return newArr; 
    },

// Filter  
    filter: function(numList, action){
      var newArr = [];
      for (var i = 0; i < numList.length; i++) {
        if (action(numList[i]) {
        var result = (numList[i]);
        var newArr.push(result);
        }
      };
      return newArr; 
    },

// Reduce  
    reduce: function(numList, action) { 

    }

// Reject 


// closing brackets follow for Iterator
  };

  return api;
})();

module.exports = Iterators;



