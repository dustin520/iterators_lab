

// // Max Function 
// var Iterators = (function() {
//   var api = {
//     max: function(numList){
//       var max = -Infinity;
//       for (var i = 0; i < numList.length; i++) {
//         if ( numList[i] > max ) {
//           max = numList[i];
//         }
//       };
//       return max;
//     }
//   };

//   return api;
// })();

// module.exports = Iterators;


// // Min Function 
// var Iterators = (function() {
//   var api = {
//     min: function(numList){
//       var min = Infinity;
//       for (var i = 0; i < numList.length; i++) {
//         if ( numList[i] < min ) {
//           min = numList[i];
//         }
//       };
//       return min;
//     }
//   };

//   return api;
// })();


// module.exports = Iterators;


// // Each Function
// var Iterators = (function() {

// each: function(list, action) {
//   for (var i = 0; i < list.length; i++) {
//     action(list[i], i); 
//   }
//   return list;
// }
// })
//   return api; 
// });

// module.exports = Iterators;


// Map Function
var Iterators = function() {

  map: function(numList, action){
    var newArr = []; 
    for (var i = 0; i < numList.length; i++) {
      var result = action(numList[i]);
      var newArr.push(result)
    };
    return newArr; 
  }
}

module.exports = Iterators;

// Filter Method 

  filter: function()








