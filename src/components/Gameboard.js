const Ship = require("./Ship");
export class Gameboard{
    shipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    constructor(){
        this.ships = [];
        this.hits = [];
        this.createShips();
    };
    grid = [
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
    ];
    createShip(length, position, orientation) {
        const ship = new Ship(length, position, orientation);
        this.ships.add(ship.position);
        if(ship.orientation == "horisontal")
        {
            for(let i = 0; i < ship.length; i++){
                grid[position.x + i, position.y] = "s";
            }
        }
        else{
            grid[position.x, position.y + i] = "s";
        }
    }
    isValidPosition(shipLength, position, orientation){
        for(let i = 0; i < shipLength; i++){
            if(orientation == "horisontal"){
                if(i == 0){
                    neighbors = [
                        [-1,-1],
                        [-1, 0],
                        [1, 0],
                        [0, -1],
                        [1, -1],
                    ]; 
                }
                else if(i == shipLength - 1){
                    neighbors = [
                        [1,1],
                        [-1, 0],
                        [1, 0],
                        [-1, 1],
                        [0, 1],
                    ]; 
                }
                else{
                    neighbors = [
                        [-1,0],
                        [1, 0],
                    ]; 
                }
            }
            else{
                if(i == 0){
                    neighbors = [
                        [-1, 0],
                        [-1, -1],
                        [0, 1],
                        [0, -1],
                        [-1, 1],
                    ]; 
                }
                else if(i == shipLength - 1){
                    neighbors = [
                        [0,1],
                        [0, -1],
                        [1, 0],
                        [1, -1],
                        [1, 1],
                    ]; 
                }
                else{
                    neighbors = [
                        [0,-1],
                        [0, 1],
                    ]; 
                }
            }
            neighbors.forEach(neighbor => {
                    cell = this.grid[position.x + neighbor[0]][position.x + neighbor[1]]
                    if(cell != "") return false;
                });
        }
        return true;
    }
    hit(position){
        cell = grid[position.x, position.y];
        if( cell == "s"){

        }
    }
}