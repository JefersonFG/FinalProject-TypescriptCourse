import Painter = require('painter');
import PSummary = require('painterSummary');

//Renderer class, takes the values on the project's classes and output them to the html page

export class renderer {
    //Methods

    renderPainterSummary(summary: PSummary.painterSummary) {
        try {
            var painterSelect = document.getElementById('PainterSelect');
            summary.pMap.forEach((painterItem) => {
                var opt = document.createElement('option');
                opt.setAttribute('title', painterItem.title);
                opt.innerHTML = painterItem.text;
                painterSelect.appendChild(opt);
            });
        }
        catch (ex) { alert(ex.message) }
    }

    renderPainterInfo(painter: Painter.painter) {
        try {
            //Update the style paragraph
            var style = (<HTMLSelectElement> document.getElementById('Style'));
            style.innerHTML = painter.style;

            //Update the example paintings
            var examples = (<HTMLSelectElement> document.getElementById('Examples'));
            var html = '<ul>';
            for (var i = 0, len = painter.examplePaintings.length; i < len; i++) {
                html += '<li>' + painter.examplePaintings[i] + '</li>';
            }
            examples.innerHTML = html + '</ul>';
        }
        catch (ex) { alert(ex.message) }
    }

    renderError() {
        var examples = (<HTMLSelectElement> document.getElementById('Examples'));
        examples.innerHTML = 'Unable to load data!';
    }
}