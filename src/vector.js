class Vector {

	static zero() {
		return new Vector(0, 0);
	}

	constructor(x, y) {
		var o = x instanceof Object ? x : {x, y};
		this.x = o.x;
		this.y = o.y;
	}

	add(v) {
		return new Vector(this.x + v.x, this.y + v.y);
	}

	sub(v) {
		return new Vector(this.x - v.x, this.y - v.y);
	}

	neg() {
		return new Vector(-this.x, -this.y);
	}

	mul(n) {
		return new Vector(this.x * n, this.y * n);
	}

	div(n) {
		return new Vector(this.x / n, this.y / n);
	}

	equals(v) {
		return this.x == v.x && this.y == v.y;
	}

	dist(v) {
		return sub(v).mag();
	}

	mag() {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	}

	toString() {
		return `(${this.x}/${this.y})`
	}

}

export default Vector;