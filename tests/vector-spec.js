import Vector from '../src/vector.js';

let expect = require('expect');

describe('Vector', () => {
	it('should return a zero vector', () => {
		let v = Vector.zero();
		expect(v.x == 0 && v.y == 0);
	});
});