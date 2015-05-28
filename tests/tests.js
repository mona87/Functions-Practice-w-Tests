var expect = chai.expect;

describe('max', function(){

	it('should throw an error if not a number', function(){
		expect(function(){max('blue', 'dog')}).to.throw('Invalid Input');
	});
	it('should throw error if a number is null or undefined', function(){
		expect(function(){max(undefined, null)}).to.throw('Invalid Input');
		expect(function(){max(null, undefined)}).to.throw('Invalid Input');			
	});

	it('should return no max if numbers are equal', function(){
		expect(max(66, 66)).to.equal('No max!');
	});

	it('should return the largest number', function(){
		expect(max(5,6)).to.equal(6);
		expect(max(9,3)).to.equal(9);

	});
});

describe('maxOfThree', function(){

		it('should throw an error if not a number', function(){
			expect(function(){maxOfThree('blue', 'dog', 'green')}).to.throw('Invalid Input');
		});
		it('should throw error if a number is null or undefined', function(){
			expect(function(){maxOfThree(undefined, undefined, undefined)}).to.throw('Invalid Input');
			expect(function(){maxOfThree(null, null, null)}).to.throw('Invalid Input');
		});
		it('should return the largest number', function(){
			expect(maxOfThree(3,4,5)).to.equal(5);
			expect(maxOfThree(7,4,5)).to.equal(7);
			expect(maxOfThree(3,8,5)).to.equal(8);
		});
		it('should return no max if numbers are equal', function(){
			expect(maxOfThree(66, 66, 66)).to.equal('No max!');
		});		
});

describe('isVowel', function(){

		it('should throw an error if not a string', function(){
			expect(function() {isVowel(5)}).to.throw('Invalid Input');
		});
		it('should throw an error if not a string length is greater than one', function(){
			expect(function() {isVowel('bb')}).to.throw('Invalid Input');
		});
		it('should return true if a vowel'), function(){
			expect(function() {isVowel('a')}).to.equal(true);
			expect(function() {isVowel('A')}).to.equal(true);
			expect(function() {isVowel('e')}).to.equal(true);
			expect(function() {isVowel('e')}).to.equal(true);
			expect(function() {isVowel('i')}).to.equal(true);
			expect(function() {isVowel('I')}).to.equal(true);
			expect(function() {isVowel('o')}).to.equal(true);
			expect(function() {isVowel('O')}).to.equal(true);
			expect(function() {isVowel('u')}).to.equal(true);
			expect(function() {isVowel('U')}).to.equal(true);
		}
		it('should return false if a consanant'), function(){
			expect(function() {isVowel('d')}).to.equal(false);
			expect(function() {isVowel('Z')}).to.equal(false);
			expect(function() {isVowel('x')}).to.equal(false);
		}
});

describe('rovarspraket', function(){

		it('should throw an error if not a string', function(){
			expect(function() {rovarspraket(0)}).to.throw('Invalid Input');
		});
		it('should return a rovarspraket string', function(){
			expect(sum('this is fun')).to.equal('tothohisos isos fofunon');
			expect(sum('cat')).to.equal('cocaoatot');
		});
});

describe('sum', function(){

		it('should throw an error if not an array', function(){
			expect(function() {sum(3)}).to.throw('Invalid Input');
			expect(function() {sum('cat')}).to.throw('Invalid Input');
		});
		it('should throw an error if not a number', function(){
			expect(function() {sum(['dog','bad','red'])}).to.throw('Invalid Input');
		});
		it('should throw an error if number is null or undefined', function(){
			expect(function() {sum([null, null])}).to.throw('Invalid Input');
			expect(function() {sum([undefined, undefined])}).to.throw('Invalid Input');
		});
		it('should throw an error if array length is less than two', function(){
			expect(function() {sum([2])}).to.throw('Invalid Input');
		});
		it('should return the sum of an array', function(){
			expect(sum([2, 4, 6])).to.equal(12);
			expect(sum([3, 0, 1,1])).to.equal(5);
		});	
});

describe('multiply', function(){
		it('should throw an error if not an array', function(){
			expect(function() {multiply(3)}).to.throw('Invalid Input');
			expect(function() {multiply('cat')}).to.throw('Invalid Input');
		});
		it('should throw an error if not a number', function(){
			expect(function() {multiply(['dog','bad','red'])}).to.throw('Invalid Input');
		});
		it('should throw an error if number is null or undefined', function(){
			expect(function() {multiply([undefined, undefined])}).to.throw('Invalid Input');
			expect(function() {multiply([null, null])}).to.throw('Invalid Input');
		});
		it('should throw an error if array length is less than two', function(){
			expect(function() {multiply([99])}).to.throw('Invalid Input');
		});
		it('should return the product of an array', function(){
			expect(multiply([2, 4, 6])).to.equal(48);
			expect(multiply([3, 0, 1,1])).to.equal(0);
		});	
});

describe('reverse', function(){
		it('should throw an error if not a string', function(){
			expect(function() {reverse(72)}).to.throw('Invalid Input');
		});
		it('should return a reverse string', function(){
			expect(reverse('awesome')).to.equal('emosewa');		
		});	
});

describe('findLongestWord', function(){
		it('should throw an error if not an array', function(){
			expect(function() {findLongestWord(6)}).to.throw('Invalid Input');
			expect(function() {findLongestWord('red')}).to.throw('Invalid Input');
		});
		it('should throw an error if not a string', function(){
			expect(function() {findLongestWord([0,4,5])}).to.throw('Invalid Input');
		});
		it('should throw an error if empty string', function(){
			expect(function() {findLongestWord([''])}).to.throw('Invalid Input');
		});
		it('should return a longest word', function(){
			expect(findLongestWord(['cool','kid','on','the','block'])).to.equal('block');		
		});	
});

describe('filterLongWords', function(){
		it('should throw an error if first argument is not an array of strings', function(){
			expect(function() {filterLongWords(6, 6)}).to.throw('Invalid Input');
			expect(function() {filterLongWords('red', 9)}).to.throw('Invalid Input');
			expect(function() {filterLongWords([0,3,6], 2)}).to.throw('Invalid Input');
		});
		it('should throw an error if second argument is not a number', function(){
			expect(function() {filterLongWords(['cat', 'house'], 'yes')}).to.throw('Invalid Input');
			expect(function() {filterLongWords(['car', 'go'], false)}).to.throw('Invalid Input');
			expect(function() {filterLongWords(['car', 'go'], null)}).to.throw('Invalid Input');
			expect(function() {filterLongWords(['car', 'go'], undefined)}).to.throw('Invalid Input');
		});
		it('should return the longest words greater than i', function(){
			expect(findLongestWord(['texas','arizona','alabama','hawaii','california'], 7)).to.equal('block');	
			expect(findLongestWord(['green','red','blue','orange','yellow'], 4)).to.equal('block');		
		});	

});

describe('charFreq', function(){
		it('should throw an error if not a string', function(){
			expect(function() {charFreq(99)}).to.throw('Invalid Input');
			expect(function() {charFreq(null)}).to.throw('Invalid Input');
			expect(function() {charFreq(undefined)}).to.throw('Invalid Input');
		});
		it('should return a frquency list of characters', function(){
			expect(charFreq('bilbbolob')).to.equal('b: 4,i: 1,o: 2,l: 1');	
			expect(charFreq('abbadoo')).to.equal('a: 2, b: 2,d: 1,o: 2');		
		});	

});




