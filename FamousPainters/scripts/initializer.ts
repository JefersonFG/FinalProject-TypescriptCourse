import Painter = require('painter');
import PList = require('painterList');
import PLoader = require('painterLoader');
import PSummary = require('painterSummary');
import Render = require('renderer');

//Initializer file, assemble the painterLoader and renderer classes to load and output the painters from the JSON file

export var painterList: PList.painterList<Painter.painter>;
export var renderer: Render.renderer;

export function windowOnLoad() {
    //Getting the html select
    var painterSelect = (<HTMLSelectElement> document.getElementById('PainterSelect'));

    //Making the renderer output the values to the select on the "onchange" event
    painterSelect.onchange = () => loadPainters();

    //Instantiating the loader class passing the JSON file path to the constructor
    var loader: PLoader.painterLoader = new PLoader.painterLoader("/JSON/famousPainters.json");

    //Putting the loader to parse the JSON file
    loader.load();

    //Instantiating the renderer class
    renderer = new Render.renderer();
}

function loadPainters() {
    var painterSelect = (<HTMLSelectElement> document.getElementById('PainterSelect'));
    try {
        var painter = painterList.painters
        //Find selected item by name
            .filter(item => item.name === painterSelect.value)
        //return the item
            .reduce(item => new Painter.painter(painterSelect.value, item.style, item.examplePaintings));
        //Render the item
        renderer.renderPainterInfo(painter);
    }
    catch (ex) { alert(ex.message) }
}