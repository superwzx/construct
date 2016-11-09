var chai = require('chai');
var expect = chai.expect;

var Construct =require('../src/index');

var Animal = Construct.extend({
	name: 'animal'
});

var Dog = Animal.extend({
	name: 'dog',
	legs: 4,
	init: function (name) {
		this.name = name;
	},
	say: function () {
		return 'bow-wow';
	}
});

var Cat = Animal.extend({
	name: 'cat',
	legs: 4,
	init: function (name) {
		this.name = name;
	},
	say: function () {
		return 'miaow';
	}
});

describe('Dog', function() {
	var dog = new Dog('旺财');

	it('The dog\'s name is `旺财`', function () {
		expect(dog).to.have.property('name').and.equal('旺财');
	});

	it('The dog has 4 legs', function () {
		expect(dog).to.have.property('legs').and.equal(4);
	});

	it('The dog say: bow-wow', function () {
		expect(dog.say()).to.equal('bow-wow');
	});
});

describe('Cat', function () {
	var cat = new Cat('招财');

	it('The cat\'s name is `招财`', function () {
		expect(cat).to.have.property('name').and.equal('招财');
	});

	it('The cat\'s has 4 legs', function () {
		expect(cat.legs).to.equal(4);
	});

	it('The cat say: miaow', function () {
		expect(cat.say()).to.equal('miaow');
	});
});

