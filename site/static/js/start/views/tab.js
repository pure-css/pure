import {merge} from 'yui';
import {Base} from 'base-build';
import {View} from 'view';

var SELECTED_PANEL = 'grid-panel-selected',
    SELECTED_TAB   = 'grid-tab-link-selected';

export default Base.create('start-tab-view', View, [], {
    tabEvents: {
        '[data-action="tab"]': {click: 'handleTabClick'}
    },

    initializer: function () {
        this.events = merge(this.tabEvents, this.events);
    },

    handleTabClick: function (e) {
        e.preventDefault();
        this.showTab(e.target.getAttribute('href'));
    },

    showTab: function (id) {
        var container = this.get('container'),
            tab       = container.one('[href="' + id + '"]'),
            panel     = container.one(id);

        if (!tab.hasClass(SELECTED_TAB)) {
            container.one('.' + SELECTED_TAB).removeClass(SELECTED_TAB);
            tab.addClass(SELECTED_TAB);
        }

        if (!panel.hasClass(SELECTED_PANEL)) {
            container.one('.' + SELECTED_PANEL).removeClass(SELECTED_PANEL);
            panel.addClass(SELECTED_PANEL);
        }
    }
});
