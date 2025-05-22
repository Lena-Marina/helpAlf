describe('find Spaceship', function() {
	beforeEach(function() {
		shipFinder = new findSpaceShip();
	});

	//normal cases
	it('should return [7,2] for "..........\n..........\n.......X..\n..........\n..........\n.........."', function() {
		expect(shipFinder.add('..........\n..........\n.......X..\n..........\n..........\n..........')).toEqual([7,2]);
	});

	it('should return [3,4] for "..........\n..........\n..........\n..........\n...X......\n.........."', function() {
		expect(shipFinder.add('..........\n..........\n..........\n..........\n...X......\n..........')).toEqual([3,4]);
	});

	//no ship
	it('should return "Spaceship lost forever." for "..........\n..........\n..........\n..........\n..........\n.........."', function() {
		expect(shipFinder.add('..........\n..........\n..........\n..........\n..........\n..........')).toEqual("Spaceship lost forever.");
	});

	it('should return "Spaceship lost forever." for "..........\n..........\n.....A....\n..........\n..........\n.........."', function() {
		expect(shipFinder.add('..........\n..........\n.....A....\n..........\n..........\n..........')).toEqual("Spaceship lost forever.");
	});

	it('should return "Spaceship lost forever." for "..........\n..........\n.....7....\n..........\n..........\n.........."', function() {
		expect(shipFinder.add('..........\n..........\n.....7....\n..........\n..........\n..........')).toEqual("Spaceship lost forever.");
	});

	//to many ships
	it('should return "to many Spaceships - unclear which one is Alfs" for "..........\n..........\n.......X..\n..........\n.....X....\n.........."', function() {
		expect(shipFinder.add('..........\n..........\n.......X..\n..........\n.....X....\n..........')).toEqual("to many Spaceships - unclear which one is Alfs");
	});

	////out of bounds
	it('should return "Spaceship lost forever." for "..........\n..........\n..........\n..........\n..........\n..........\n..X......."', function() {
		expect(shipFinder.add('..........\n..........\n..........\n..........\n..........\n..........\n..X.......')).toEqual("Spaceship lost forever.");
	});

});

