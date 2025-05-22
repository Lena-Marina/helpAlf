describe('find Spaceship', function() {
	beforeEach(function() {
		shipFinder = new findSpaceShip();
	});

	it('should return [7,2] for "..........\n..........\n.......X..\n..........\n..........\n.........."', function() {
		expect(shipFinder.add('..........\n..........\n.......X..\n..........\n..........\n..........')).toEqual([7,2]);
	});

	it('should return [3,4] for "..........\n..........\n..........\n..........\n...X......\n.........."', function() {
		expect(shipFinder.add('..........\n..........\n..........\n..........\n...X......\n..........')).toEqual([3,4]);
	});
});
