/**
 * Created by f2e on 2016/11/7.
 */

var assign = Object.assign || function() {
	if (arguments.length == 0) {
		return {};
	}
	var args = Array.prototype.slice.call(arguments);
	var obj = {};
	args.forEach(function(item, index) {
		for (i in item) {
			obj[i] = item[i];
		}
	});
	return obj;
};


var Construct = function() {
	if (arguments.length) {
		Construct.extend.apply(Construct, arguments);
	}
};

assign(Construct, {

	/**
	 *
	 * @param prop
	 */
	extend: function(prop) {
		var prototype = assign(prop, new this());

		function F() {
			if (this.init) {
				this.init.apply(this, arguments);
			}
		}

		F.prototype = prototype;

		F.prototype.constructor = F;

		F.extend = this.extend;

		return F;

	}
});


module.exports = Construct;