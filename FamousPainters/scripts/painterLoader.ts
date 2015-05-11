import Init = require('initializer');
import Painter = require('painter');
import PList = require('painterList');
import PMap = require('painterMap');
import PSummary = require('painterSummary');

//Loader class, takes the values of the JSON file and map them to the project's classes

export class painterLoader {
    //Fields

    url: string;

    //Constructor

    constructor(url: string) {
        //Adding the '?' to make the json become a querystring on the $.getJSON method
        this.url = url + '?';
    }

    //Methods

    load() {
        $.getJSON(this.url,(data) => {
            this.mapData(data);
        });
    }

    mapData(data) {
        if (data) {
            var list: any[] = data.famousPainters;

            //Instantiating the list of painters
            Init.painterList = new PList.painterList<Painter.painter>();
            
            //Instantiating a summary of painters
            var summary: PSummary.painterSummary = new PSummary.painterSummary();

            //Searching for the painters
            list.forEach((painter) => {
                var painterItem = new Painter.painter(painter.name, painter.style, this.getExamples(painter));
                Init.painterList.painters.push(painterItem);

                var painterMap = new PMap.painterMap(painter.name, painter.name);
                summary.pMap.push(painterMap);
            });

            //Render the painters to the select
        }
        else {
            //Output a renderer error
        }
    }

    getExamples(painter): string[]{
        return painter.examples.map((value) => {
            return value;
        });
    }
}