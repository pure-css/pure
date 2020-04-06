import {Lang, config} from 'yui';
import {Base} from 'base-build';
import {QueryString} from 'querystring';
import {View} from 'view';

export default Base.create('start-download-view', View, [], {
    initializer: function (config) {
        config || (config = {});

        this.urlTemplate   = config.urlTemplate;
        this.trackTemplate = config.trackTemplate;
    },

    render: function () {
        var downloadLink = this.get('container').one('.download-link'),
            url, onclick;

        url = Lang.sub(this.urlTemplate, {
            query: QueryString.stringify(this.get('query'))
        });

        onclick = Lang.sub(this.trackTemplate, {
            label: this._getTrackLabel()
        });

        downloadLink.setAttribute('href', url);
        downloadLink.setAttribute('onclick', onclick);
    },

    _getTrackLabel: function () {
        var model = this.get('model');

        if (model.get('css')) {
            return 'custom';
        }

        return model.get('mediaQueries').size() ? 'default-mqs' : 'default';
    }
}, {
    _NON_ATTRS_CFG: [
        'urlTemplate',
        'trackTemplate'
    ],

    ATTRS: {
        query: {value: null}
    }
});
