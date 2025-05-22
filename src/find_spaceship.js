// findSpaceShip.js
function findSpaceShip() {}


findSpaceShip.prototype.add = function(string_map) {

	if(!string_map.includes("X")){ return "Spaceship lost forever."}


    const rows = string_map.split("\n"); //rows ist ein Array | an jedem Index ist ein Teil von string_map der hinter einem \n gelegen hat

    let x = 0;
	let y = 0;
    
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const xIndex = row.indexOf("X");

        if (xIndex !== -1) {
			y = i;
			if(y > 5){ return "Spaceship lost forever."; }

			if(x === 0) {x = xIndex;}
			else { return "to many Spaceships - unclear which one is Alfs";}
            
        }
    }

	

    return [x, y];
};