import 'handlebars-runtime';

import {Object as YObject, config} from 'yui';
import {Base} from 'base-build';
import {Router} from 'router';
import {PjaxBase} from 'pjax-base';
import {View} from 'view';

import GridModel from './models/grid';
import InputView from './views/input';
import OutputView from './views/output';
import DownloadView from './views/download';

var Handlebars = config.global.Handlebars,
    StartRouter = Base.create('start-router', Router, PjaxBase);

var gridModel = new GridModel(app.start.options);

var inputView = new InputView({
    defaultMQs: app.start.defaults.mediaQueries,
    model     : gridModel,
    container : '.grid-input',
    template  : Handlebars.template(app.templates.start.rows)
});

var outputView = new OutputView({
    pure             : app.pure,
    model            : gridModel,
    container        : '.grid-output',
    cssTemplate      : Handlebars.template(app.templates.start.css),
    cssOldIETemplate : Handlebars.template(app.templates.start['css-old-ie']),
    htmlTemplate     : Handlebars.template(app.templates.start.html)
});

var downloadView = new DownloadView({
    urlTemplate  : 'download?{query}',
    trackTemplate: 'return Pure.trackDownload.call(this, \'start\', \'{label}\');',
    container    : '.grid-output-download',
    model        : gridModel
});

var router = new StartRouter({
    root        : '/start/',
    linkSelector: '.grid-input a'
});

gridModel.on('update', function (e) {
    // Avoid caring about changes made to the model in the route handler.
    if (e.originEvent.src !== 'url') {
        router.save('/?' + this.toString());
    }
});

function getGridModelUpdates(query) {
    query = Y.merge(query);

    var attrs = {
        cols        : query.cols,
        prefix      : query.prefix,
        mediaQueries: []
    };

    delete query.cols;
    delete query.prefix;

    YObject.each(query, function (val, key) {
        attrs.mediaQueries.push({
            id: key,
            mq: val
        });
    });

    return attrs;
}

router.route('/', function (req) {
    var query = req.query;

    gridModel.setAttrs(getGridModelUpdates(query), {src: 'url'});

    // Render ASAP since it doesn't depend on output.
    inputView.render();

    // Fetch CSS, then render the output view.
    gridModel.load({silent: true}, function () {
        outputView.render();
        downloadView.set('query', query).render();
    });
});

inputView.attachEvents();
outputView.attachEvents();
router.upgrade();

// Force-dispatch for non-HTML5 browsers because the query params might be in
// the hash-fragment of the URL.
if (!router.get('html5')) {
    router.dispatch();
}
