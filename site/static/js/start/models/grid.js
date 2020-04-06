import {Object as YObject, config} from 'yui';
import {QueryString} from 'querystring';
import {Base} from 'base-build';
import {Model} from 'model';
import {ModelSync} from 'model-sync-rest';

import {MqModelList} from './mq';

export default Base.create('start-grid-model', Model, [ModelSync.REST], {

    initializer: function (cfg) {
        this._mqs = new MqModelList();
        this._mqs.addTarget(this);

        this.after(['*:change', '*:add', '*:remove'], this._fireUpdate);
    },

    getURL: function () {
        return 'css?' + this.toString();
    },

    toString: function () {
        var obj = this.toJSON(),
            mqs = obj.mediaQueries;

        // Prune model details and mix in `mqs` map.
        delete obj.mediaQueries;
        delete obj.id;
        delete obj.css;
        delete obj.cssOldIE;

        mqs.each(function (mq) {
            obj[mq.get('id')] = mq.getReduced();
        });

        // Prune query string of any falsy values before serialization.
        YObject.each(obj, function (val, key) {
            if (!val) {
                delete obj[key];
            }
        });

        return QueryString.stringify(obj);
    },

    _fireUpdate: function (e) {
        this.fire('update', {originEvent: e});
    },

    _validateCols: function (val) {
        // TODO move these limits out to public/start.js.
        return (!val || (val <= app.start.limits.cols.max &&
                val >= app.start.limits.cols.min));
    },

    _setCols: function (val) {
        return parseInt(val, 10) || undefined;
    },

    _validatePrefix: function (val) {
        // TODO move these limits out to public/start.js.
        var prefixLimits = app.start.limits.prefix;

        return (!val || (val.length <= prefixLimits.max &&
                val.length >= prefixLimits.min));
    },

    _getMediaQueries: function () {
        return this._mqs;
    },

    _setMediaQueries: function (val) {
        return this._mqs.reset(val);
    }

}, {
    ATTRS: {
        cols: {
            setter   : '_setCols',
            validator: '_validateCols'
        },

        css: {
            value: ''
        },

        cssOldIE: {
            value: ''
        },

        prefix: {
            validator: '_validatePrefix'
        },

        mediaQueries: {
            getter: '_getMediaQueries',
            setter: '_setMediaQueries'
        }
    }
});
