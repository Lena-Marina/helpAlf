// findSpaceShip.js
function findSpaceShip() {}


findSpaceShip.prototype.add = function(string_map) {

	if(!string_map.includes("X")){ return "Spaceship lost forever."}

    const rows = string_map.split("\n"); 

    let y = 0;
    let x = 0;

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const xIndex = row.indexOf("X");

        if (xIndex !== -1) {
            x = xIndex;
            y = i;
            break;
        }
    }

	

    return [x, y];
};