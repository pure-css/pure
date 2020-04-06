import {Base} from 'base-build';

import {MqModel} from '../models/mq';
import TabView from './tab';

var COL_INPUT      = '[data-content="cols-input"]',
    PREFIX_INPUT   = '[data-content="prefix-input"]',
    MQ_ADD         = '[data-action="add-mq"]',
    MQ_REMOVE      = '[data-action="remove-mq"]',
    MQ_ADD_DEFAULT = '[data-action="add-default-mq"]',
    MQ_TABLE       = '#media-query-table',
    MQ_LIST        = '#media-query-table tbody',
    MQ_KEY         = '[data-content="mq-key"]',
    MQ_VAL         = '[data-content="mq-value"]',
    MQ_ROW         = '[data-row="media-query"]';

var events = {};

events.form            = {submit: 'preventSubmit'};
events.input           = {focus:  'showTabOnFocus'},
events[COL_INPUT]      = {change: 'setCols'};
events[PREFIX_INPUT]   = {change: 'setPrefix'};
events[MQ_KEY]         = {change: 'updateMediaQueryId'};
events[MQ_VAL]         = {change: 'updateMediaQueryValue'};
events[MQ_ADD]         = {click:  'addMediaQuery'};
events[MQ_REMOVE]      = {click:  'removeMediaQuery'};
events[MQ_ADD_DEFAULT] = {click:  'setDefaultMediaQueries'};

export default Base.create('start-input-view', TabView, [], {
    events: events,

    render: function () {
        // We are just going to manipulate the input values inside render().
        // No need to re-render all the DOM elements.
        var container = this.get('container'),
            model     = this.get('model'),
            mqs       = model.get('mediaQueries'),
            rows      = container.all(MQ_ROW),
            lastIndex = -1;

        if (model.get('cols')) {
            container.one(COL_INPUT).set('value',
                    Y.Escape.html(model.get('cols')));
        }

        if (model.get('prefix')) {
            container.one(PREFIX_INPUT).set('value',
                    Y.Escape.html(model.get('prefix')));
        }

        if (mqs.size()) {
            container.one(MQ_TABLE).removeAttribute('hidden');
        }

        // For each media query, populate the input field within the row, or
        // create a new row.
        mqs.each(function (mq, i) {
            lastIndex = i;
            this.renderMediaQuery(mq, rows.item(i));
        }, this);

        // Advance the index to see if there's any additional rows, and
        // remove them from the UI.
        rows.splice(lastIndex + 1).remove();

        // Fresh query.
        rows = container.all(MQ_ROW);

        if (!rows.size()) {
            container.one(MQ_TABLE).setAttribute('hidden');
        }
    },

    // This will create a new <tr> and populate it with media query values,
    // if they exist.
    renderMediaQuery: function (mq, row) {
        var container = this.get('container'),
            html;

        // If a row exists, populate the input fields within that row.
        // Otherwise create a new row from the template.
        if (row) {
            row.one(MQ_KEY).set('value', Y.Escape.html(mq.get('id')));
            row.one(MQ_VAL).set('value', Y.Escape.html(mq.get('mq')));
        } else {
            html = this.template({
                id: mq.get('id') || '',
                mq: mq.get('mq')  || ''
            });

            container.one(MQ_LIST).append(html);
            container.one(MQ_TABLE).removeAttribute('hidden');
        }
    },

    preventSubmit: function (e) {
        e.preventDefault();
    },

    showTabOnFocus: function (e) {
        e.preventDefault();
        this.showTab('#' + e.target.ancestor('.grid-panel').get('id'));
    },

    addMediaQuery: function () {
        var mqs = this.get('model').get('mediaQueries'),
            num;

        // Add an empty model to the list.
        this.renderMediaQuery(mqs.add({}, {silent: true}));

        if (mqs.size() >= app.start.limits.mediaQueries.max) {
            this.get('container').one(MQ_ADD).setAttribute('disabled');
        }
    },

    removeMediaQuery: function (e) {
        var mqs       = this.get('model').get('mediaQueries'),
            container = this.get('container'),
            table     = container.one(MQ_TABLE),
            rows      = table.all(MQ_ROW),
            row       = e.target.ancestor(MQ_ROW),
            index     = rows.indexOf(row),
            key       = row.one(MQ_KEY).get('value');

        row.remove();
        container.one(MQ_ADD).removeAttribute('disabled');

        // Fresh DOM query.
        rows = table.all(MQ_ROW);

        if (!rows.size()) {
            table.setAttribute('hidden');
        }

        // We only want to fire events if the row had some content.
        mqs.remove(index, {silent: !key});
    },

    updateMediaQueryId: function (e) {
        if (e.target.get('invalid')) { return; }

        var mqs  = this.get('model').get('mediaQueries'),
            rows = this.get('container').all(MQ_ROW),
            row  = e.target.ancestor(MQ_ROW),
            key  = e.target.get('value'),
            val  = row.one(MQ_VAL).get('value'),
            mq   = mqs.item(rows.indexOf(row));

        // Update the key, and only fire the change event if there's a value
        // for the key and media query.
        mq.set('id', key, {silent: !(key && val)});
    },

    updateMediaQueryValue: function (e) {
        var val = e.target.get('value');

        if (!new MqModel({mq: val}).isValidMediaQuery()) {
            e.target.setAttribute('invalid');
        } else {
            e.target.removeAttribute('invalid');
        }

        if (e.target.get('invalid')) { return; }

        var mqs  = this.get('model').get('mediaQueries'),
            rows = this.get('container').all(MQ_ROW),
            row  = e.target.ancestor(MQ_ROW),
            key  = row.one(MQ_KEY).get('value'),
            mq   = mqs.item(rows.indexOf(row));

        // Update the key, and only fire the change event if there's a value
        // for the key and media query.
        mq.set('mq', val, {silent: !(key && val)});
    },

    setDefaultMediaQueries: function (e) {
        this.get('model').set('mediaQueries', this.get('defaultMQs'));
    },

    setCols: function (e) {
        var cols = e.target.get('value');
        this.get('model').set('cols', cols);
    },

    setPrefix: function (e) {
        var prefix = e.target.get('value');
        this.get('model').set('prefix', prefix);
    }
});
