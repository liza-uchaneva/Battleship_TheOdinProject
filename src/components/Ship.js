export class Ship{
    static idCount = 0;
    constructor(length, orientation = "horisontal", position){
        this.id = ++this.constructor.idCount;
        this.length = length;
        this.hits = 0;
        this.orientation = orientation;
        this.position = position;
    };
    hit(){
        hit ++;
    }
    isSunk(){
        if(this.hits == this.length)
        {
            return true;
        }
        return false;
    }
}