# Iterators Lab
## Functional Programming


### Description

In the iterators lab we will be continuing our exploration of iterators and building a few more useful methods. These methods will belong to an Iterators namespace, which we discussed in class. We also will try to use various testing methods to verify that our code is working. 


### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function` 
Definition:
	1. a function that takes one or more functions of input; or outputs a function
	2. a fn that takes in a fn and does something with it; fn that operates on fns
	3. the below methods, map.. etc. 
Example:
	1. var add = function(adjust) { 
			return function(byThree) {
				return adjust + 3; 
		}
		}add(4); 



Pretending we implemented the following methods, update this README with a description of each of the following and an example you've created:


* `max`
Definition: 
	1. In JS, it is Math.max function that provideds the largest number provided in the arguments. If none provided, it will output -Infinite to be used to compare with future declarations. Or NaN if compared with other types. 
Example: 
	1. var max = Math.max(100, 2.5, 20*10); Outputs: 200

* `min`
Definition: 
	1. In JS, opposite of 'max' and is used as Math.min(x,y); when var x = 4; var y = 5; Outputs: 4; Or Infinite if nothing provided. Provides the smallest of 0 or more numbers 
Example: 
	1. var z = Math.min(4,3) => 3 
	2. var c = function() { 
			return 3; 
		}
		var b = function(event) { 
			return event * 2; 
		}
		var a = 5;
		var outcome = Math.min(a,b,c) 
		outcome (a, 3, c) => Math.min(5, 6, 3) => Ouput => 3 

* `each`
Definition: 
	1. In JS, a higher-order function used to iterate/operate a function over another function, array, or object, etc. 
		- In JS, it is used in the .forEach() format 
Example: 
	1. var a = [3,4,5,6];
		var b = function(multiplier) { 
		return multiplier 
	}

* `map`
Definition: 
	1. A method resulting in a new array by calling a function on each element of an array 
Example: 
	1. var num = [1,2,3];
	var change = function (event){
		return event+1; 
	}
	var add = num.map(change;
	Output: [2,3,4]

* `filter`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
Definition: 
	1. JS function used to filter array by a function of requirements/limits or specs
Example: 
	1. 
	function isBigEnough(element) {
	return element >= 10;
	}
	var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
	// filtered is [12, 130, 44]

* `reduce`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
Definition: 
	1. JS function to reduce the array to for instance a sum, or product of the array 
Example: 
	1. 
	var calculateProduct = function  (a) {
	return a.reduce(function  (i,c) {
		return i*c;
	});
	}

console.log(calculateProduct([1,2,3,4])); <= 24

* `reject`: [note](http://underscorejs.org/#reject)
Definition: 
	1. JS method that returns all elements that iterates and returns as false 
Example: 
	1. 

Use the notes provided to help guide you explanation.




### Phase-2 

* Write a test in the `test` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration. 

* Re-implement the `each` function we did in class, but write the spec for it first. Continue this exercise with `map` and `filter`.


### Phase-3

Implement the remaining iterator methods in the namespace.


### Phase-4

Refactor the following code using `map` to make only one call to the `map` function versus the two below.


```
var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = function(num) {
	return num * num;
};

var sqrRoot = function(num) {
	return Math.sqrt(num);
};


var sqrNumbers = map(myNumbers, square);
var absNumbers = map(sqrNumbers, sqrRoot);
```




