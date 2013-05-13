/**
 * jsTime
 * @author Ariel Flesler <aflesler[a]gmail[d]com>
 * @version 1.0.0
 * Homepage: https://github.com/flesler/jsTime
 */
(function(proto){
	
	// TODO: Add a getter version that only works on modern browsers

	proto.seconds = function() {
		return this * 1000;	
	};

	proto.minutes = function() {
		return this.seconds() * 60;	
	};

	proto.hours = function() {
		return this.minutes() * 60;	
	};

	proto.days = function() {
		return this.hours() * 24;
	};

	proto.years = function() {
		return this.days() * 365;
	};

})(Number.prototype);