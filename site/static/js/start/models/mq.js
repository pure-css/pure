import {parse as parseMQ} from 'css-mediaquery';
import {Attribute} from 'attribute';
import {Base} from 'base-build';
import {Model} from 'model';
import {ModelList} from 'model-list';

export var MqModel = Base.create('start-mq-model', Model, [], {
    isValidMediaQuery: function () {
        try {
            return !!parseMQ(this.get('mq'));
        } catch (e) {
            return false;
        }
    },

    getReduced: function () {
        var query = this.get('mq'),
            parsed, exp;

        if (!this.isValidMediaQuery()) { return query; }

        parsed = parseMQ(query);
        if (parsed.length !== 1) { return query; }

        parsed = parsed[0];
        if (parsed.inverse || parsed.type !== 'screen' ||
                parsed.expressions.length !== 1) { return query; }

        exp = parsed.expressions[0];
        if (exp.feature === 'width' && exp.modifier === 'min') {
            query = exp.value;
        }

        return query;
    },

    _setMq: function (mq, options) {
        mq = mq.trim();
        var expand = options && options.expand;

        if (expand) {
            mq = 'screen and (min-width: ' + mq + ')';
        }

        try {
            parseMQ(mq);
            return mq;
        } catch (e) {
            // When we've already expanded the short-hand MQ syntax, or when
            // the short-hand form doesn't look like a length value, signal
            // that the value is invalid.
            if (expand || !/^(\d|\.)/.test(mq)) {
                return Attribute.INVALID_VALUE;
            }
        }

        // Try again, this time expanding the `mq` assuming it's in the
        // short-hand.
        return this._setMq(mq, {expand: true});
    }
}, {
    ATTRS: {
        mq: {
            setter: '_setMq'
        }
    }
});

export var MqModelList = Base.create('mq-model-list', ModelList, [], {
    model: MqModel,

    toObject: function () {
        var obj = {};

        this.each(function (model) {
            obj[model.get('id')] = model.get('mq');
        });

        return obj;
    }
});
