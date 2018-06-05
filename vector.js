 /**
 * Simple representation of 2D vector.
 */

var Vector = function(x, y) {
	this.x = x;
	this.y = y;
}


Vector.polar = function(r, theta) {
	return new Vector(r * Math.cos(theta), r * Math.sin(theta));
};


Vector.prototype.length = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
};


Vector.prototype.copy = function(){
  return new Vector(this.x, this.y);
};


Vector.prototype.setLength = function(length) {
	var current = this.length();
	if (current) {
		var scale = length / current;
		this.x *= scale;
		this.y *= scale;
	}
	return this;
};


Vector.prototype.setAngle = function(theta) {
  var r = length();
  this.x = r * Math.cos(theta);
  this.y = r * Math.sin(theta);
  return this;
};


Vector.prototype.getAngle = function() {
  return Math.atan2(this.y, this.x);
};


Vector.prototype.d = function(v) {
		var dx = v.x - this.x;
		var dy = v.y - this.y;
		return Math.sqrt(dx * dx + dy * dy);
};/**
 * Identity projection.
 */
var IDProjection = {
	project: function(x, y, opt_v) {
		var v = opt_v || new Vector();
		v.x = x;
		v.y = y;
	  return v;
  },
	invert: function(x, y, opt_v) {
		var v = opt_v || new Vector();
		v.x = x;
		v.y = y;
	  return v;
  }
};