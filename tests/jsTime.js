var should = require('should');

require('../jsTime.js');

describe("jsTime", function(){
	it("should convert numbers to seconds", function(){
		0..seconds().should.equal(0);
		3..seconds().should.equal(3000);
		11..seconds().should.equal(11000);
		15.5.seconds().should.equal(15500);
	});

	it("should convert numbers to minutes", function(){
		0..minutes().should.equal(0);
		3..minutes().should.equal(180000);
		11..minutes().should.equal(660000);
		15.5.minutes().should.equal(930000);
	});

	it("should convert numbers to hours", function(){
		0..hours().should.equal(0);
		3..hours().should.equal(10800000);
		11..hours().should.equal(39600000);
		15.5.hours().should.equal(55800000);
	});

	it("should convert numbers to days", function(){
		0..days().should.equal(0);
		3..days().should.equal(259200000);
		11..days().should.equal(950400000);
		15.5.days().should.equal(1339200000);
	});

	it("should convert numbers to years", function(){
		0..years().should.equal(0);
		3..years().should.equal(94608000000);
		11..years().should.equal(346896000000);
		15.5.years().should.equal(488808000000);
	});
});