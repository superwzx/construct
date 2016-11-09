/**
 * Created by f2e on 2016/11/7.
 */

var assign = Object.assign || function() {
	if (arguments.length == 0) {
		return {};
	}
	var target = arguments[0];
	[].forEach.call(arguments, function (item) {
		for (var i in item) {
			target[i] = item[i];
		}
	});
	return target;
};


var Construct = function() {};

assign(Construct, {
	/**
	 *
	 * @param prop
	 */
	extend: function(prop) {
		
		// 扩展原型
		var proto = assign(new this(), prop);

		function F() {
			if (this.init) {
				this.init.apply(this, arguments);
			}
		}

		F.prototype = proto;

		F.prototype.constructor = F;

		F.extend = this.extend;

		return F;
	}
});

module.exports = Construct;