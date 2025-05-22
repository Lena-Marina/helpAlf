describe('find Spaceship', function() {
	beforeEach(function() {
		shipFinder = new StringCalculator();
	});

	it('should return 0 for an empty string', function() {
		expect(shipFinder.add('')).toEqual(0);
	});
});
