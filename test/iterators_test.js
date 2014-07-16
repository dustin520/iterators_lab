
var expect = require('chai').expect,
  Iterators = require('../src/iterators.js');

// Test - Max 
describe('Iterators', function(){
  describe('#max', function(){
    var myArr;
    beforeEach(function(){
      myArr = [66,22,67, 34];
    });
    it('should return the maximum in an array', function(){
      expect(Iterators.max(myArr)).to.equal(67);
    })    
    it('should return -Infinity for empty array', function(){
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    })
  }),

// Test - Min
  describe('#min', function(){
    var myArr;
    beforeEach(function(){
      myArr = [66,22,67, 34];
    });
    it('should return the minimum in an array', function(){
      expect(Iterators.min(myArr)).to.equal(22);
    })    
    it('should return Infinity for empty array', function(){
      myArr = [];
      expect(Iterators.min(myArr)).to.equal(Infinity);
    })
  }),

// Test - Each
  describe('#each', function(){
    var myArr = [1,2,3,4];
    var x = 0; 

    it('should call a function on each item in an array and return original array', function() {
      Iterators.each(myArr, function(currItem, index){
        x += currItem;
      })
      expect(x).to.equal(10);
    })
  }),

// Test - Map 
  describe('#map', function(){
    var myArr = [1,2,3,4];

    it('should create a new array that doubles the value of myArr'), function(){
      var result = Iterators.map(myArr, function(taco){
        taco * 2; 
      });
      expect(result).to.deep.equal([2,4,6,8])
    })
  }),

// Test - Filter
  describe('#filter', function(){
    var myArr = [1,3,7,10];

    it('should filter an array to only elements that meet certain criteria', function() {
      var result = Iterators.filter(myArr, function(taco){
        return taco < 10; 
      });
      expect(newArr).to.deep.equal([1,3]);
    })
  })


// Test - Reduce
    describe('#reduce', function() {

    })

// Test - Reject 




// closing brackets for describe iterators 
});


