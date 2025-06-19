// findSpaceShip.js
function findSpaceShip() {}


findSpaceShip.prototype.add = function(string_map) {

	const MAX_ROWS = 5;

	if(!string_map.includes("X"))
    { 
        return "Spaceship lost forever."
    }

    const rows = string_map.split("\n"); //rows ist ein Array | an jedem Index ist ein Teil von string_map der hinter einem \n gelegen hat

    let x = 0;
	let y = 0;
    let xCounter = 0;
    
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const xIndex = row.indexOf("X"); //indexOf retourniert -1 falls der Parameter nicht im String gefunden wird

        if (xIndex !== -1) {
			y = i;
			if(y > MAX_ROWS)
            { 
                return "Spaceship lost forever."; 
            }

			if(xCounter === 0) 
            {
                x = xIndex;
                ++xCounter;
            }
			else { return "to many Spaceships - unclear which one is Alfs";} 
        }
    }

    return [x, y];
};