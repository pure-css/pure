import {Base} from 'base-build';
import {Escape} from 'escape';

import TabView from './tab';

export default Base.create('start-output-view', TabView, [], {
    render: function () {
        var model     = this.get('model'),
            container = this.get('container'),
            hasMQs    = !!model.get('mediaQueries').size(),
            css       = model.get('css'),
            cssOldIE  = model.get('cssOldIE');

        container.one('#html code').removeClass('rainbow').setHTML(
            Escape.html(this.get('htmlTemplate')({
                pure    : this.get('pure'),
                needsCSS: css || hasMQs,
                css     : css,
                cssOldIE: cssOldIE
            }))
        );

        container.one('#css').setHTML(
            this.get('cssTemplate')({css: css})
        );

        container.one('#css-old-ie').setHTML(
            this.get('cssOldIETemplate')({cssOldIE: cssOldIE})
        );

        Rainbow.color();
    }
});
