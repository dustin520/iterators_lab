

// // Test - Max 
// var expect = require('chai').expect,
//   Iterators = require('../src/iterators.js');

// describe('Iterators', function(){
//   describe('#max', function(){
//     var myArr;
//     beforeEach(function(){
//       myArr = [66,22,67, 34];
//     });
//     it('should return the maximum in an array', function(){
//       expect(Iterators.max(myArr)).to.equal(67);
//     })    
//     it('should return -Infinity for empty array', function(){
//       myArr = [];
//       expect(Iterators.max(myArr)).to.equal(-Infinity);
//     })
//   })
// })

// // Test - Min
// var expect = require('chai').expect,
//   Iterators = require('../src/iterators.js');

// describe('Iterators', function(){
//   describe('#min', function(){
//     var myArr;
//     beforeEach(function(){
//       myArr = [66,22,67, 34];
//     });
//     it('should return the minimum in an array', function(){
//       expect(Iterators.min(myArr)).to.equal(22);
//     })    
//     it('should return Infinity for empty array', function(){
//       myArr = [];
//       expect(Iterators.min(myArr)).to.equal(Infinity);
//     })
//   })
// })

// // Test - Each
// var expect = require('chai').expect,
//   Iterators = require('../src/iterators.js');

// describe('Iterators', function(){
//   describe('#each', function(){
//     var myArr = [1,2,3,4];
//     var x = 0; 

//     it('should call a function on each item in an array and return original array');
//       Iterators.each(myArr, function(currItem, index){
//         x += currItem;
//       })
//       expect(x).to.equal(10);
//   })
// })

// });


// Test - Map 
var expect = require('chai').expect,
  Iterators = require('../src/iterators.js');

describe('Iterators', function(){

  describe('#map', function(){
    var myArr = [1,2,3,4];

    it('should create a new array that doubles the value of myArr');
      var result = Iterators.map(myArr, function(taco){
        taco * 2; 
      });
      expect(result).to.deep.equal([2,4,6,8])
  })
}


// Test - Filter
describe('#filter', function(){
  
}





