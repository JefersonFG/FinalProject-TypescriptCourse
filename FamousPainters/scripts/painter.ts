 //Painter class, designed to hold the info of the painters parsed from the famousPainters.json file

export class painter {
    //Fields

    name: string;
    style: string;
    examplePaintings: string[];

    //Constructor

    constructor(name: string, style: string, examplePaintings: string[]) {
        this.name = name;
        this.style = style;
        this.examplePaintings = examplePaintings;
    }
}