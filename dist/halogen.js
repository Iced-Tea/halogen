!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Halogen=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
    PulseLoader: require('./PulseLoader'),
    RotateLoader: require('./RotateLoader'),
    BeatLoader: require('./BeatLoader'),
    RiseLoader: require('./RiseLoader'),
    SyncLoader: require('./SyncLoader'),
    GridLoader: require('./GridLoader'),
    ClipLoader: require('./ClipLoader'),
    SquareLoader: require('./SquareLoader'),
    DotLoader: require('./DotLoader'),
    PacmanLoader: require('./PacmanLoader'),
    MoonLoader: require('./MoonLoader'),
    RingLoader: require('./RingLoader'),
    BounceLoader: require('./BounceLoader'),
    SkewLoader: require('./SkewLoader'),
    FadeLoader: require('./FadeLoader'),
    ScaleLoader: require('./ScaleLoader')
};

},{"./BeatLoader":2,"./BounceLoader":3,"./ClipLoader":4,"./DotLoader":5,"./FadeLoader":6,"./GridLoader":7,"./MoonLoader":8,"./PacmanLoader":9,"./PulseLoader":10,"./RingLoader":11,"./RiseLoader":12,"./RotateLoader":13,"./ScaleLoader":14,"./SkewLoader":15,"./SquareLoader":16,"./SyncLoader":17}],2:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var assign = require('./assign');
var insertKeyframesRule = require('./insertKeyframesRule');

var keyframes = {
    '50%': {
        transform: 'scale(0.75)',
        opacity: 0.2
    },
    '100%': {
        transform: 'scale(1)',
        opacity: 1
    }
};

var animationName = insertKeyframesRule(keyframes);

var Loader = React.createClass({displayName: "Loader",
    propTypes: {
        color: React.PropTypes.string,
        size: React.PropTypes.string,
        margin: React.PropTypes.string
    },
    getDefaultProps: function(){
        return {
            color: '#ffffff',
            size: '15px',
            margin: '2px'
        };
    },
    getBallStyle: function () {
        return {
            backgroundColor: this.props.color,
            width: this.props.size,
            height: this.props.size,
            margin: this.props.margin,
            borderRadius: '100%'
        }
    },
    getAnimationStyle: function (i) {
        var animation = [animationName, '0.7s', i%2? '0s': '0.35s', 'infinite', 'linear'].join(' ');
        var animationFillMode = 'both';
        return {
            animation: animation,
            WebkitAnimation: animation,
            animationFillMode: animationFillMode,
            WebkitAnimationFillMode: animationFillMode
        }
    },
    getStyle: function (i) {

        return assign(
            this.getBallStyle(i),
            this.getAnimationStyle(i),
            {
                display: 'inline-block'
            }
        )
    },
    render: function () {

        return (React.createElement("div", null, 
            React.createElement("div", {style: this.getStyle(1)}), 
            React.createElement("div", {style: this.getStyle(2)}), 
            React.createElement("div", {style: this.getStyle(3)})
        ));
    }
});

module.exports = Loader;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./assign":18,"./insertKeyframesRule":19}],3:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var assign = require('./assign');
var insertKeyframesRule = require('./insertKeyframesRule');

var keyframes = {
    '0%, 100%': {
        transform: 'scale(0)'
    },
    '50%': {
        transform: 'scale(1.0)'
    }
};

var animationName = insertKeyframesRule(keyframes);

var Loader = React.createClass({displayName: "Loader",
    propTypes: {
        color: React.PropTypes.string,
        size: React.PropTypes.string
    },
    getDefaultProps: function(){
        return {
            color: '#ffffff',
            size: '60px'
        };
    },
    getBallStyle: function () {
        return {
            backgroundColor: this.props.color,
            width: this.props.size,
            height: this.props.size,
            borderRadius: '100%',
            opacity: 0.6,
            position: 'absolute',
            top: 0,
            left: 0
        }
    },
    getAnimationStyle: function (i) {

        var animation = [animationName, '2s', i==1? '1s': '0s', 'infinite', 'ease-in-out'].join(' ');
        var animationFillMode = 'both';
        return {
            animation: animation,
            WebkitAnimation: animation,
            animationFillMode: animationFillMode,
            WebkitAnimationFillMode: animationFillMode
        }
    },
    getStyle: function (i) {

        if(i){
            return assign(
                this.getBallStyle(i),
                this.getAnimationStyle(i)
            )
        }

        return assign(
            {
                width: this.props.size,
                height: this.props.size,
                position: 'relative'
            }
        )
    },
    render: function () {

        return (
            React.createElement("div", {style: this.getStyle()}, 
                React.createElement("div", {style: this.getStyle(1)}), 
                React.createElement("div", {style: this.getStyle(2)})
            ));
    }
});

module.exports = Loader;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./assign":18,"./insertKeyframesRule":19}],4:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var assign = require('./assign');
var insertKeyframesRule = require('./insertKeyframesRule');

var keyframes = {
    '0%': {
        transform: 'rotate(0deg) scale(1)'
    },
    '50%': {
        transform: 'rotate(180deg) scale(0.8)'
    },
    '100%': {
        transform: 'rotate(360deg) scale(1)'
    }
};

var animationName = insertKeyframesRule(keyframes);

var Loader = React.createClass({displayName: "Loader",
    propTypes: {
        color: React.PropTypes.string,
        size: React.PropTypes.string
    },
    getDefaultProps: function(){
        return {
            color: '#ffffff',
            size: '35px'
        };
    },
    getBallStyle: function () {
        return {
            width: this.props.size,
            height: this.props.size,
            border: '2px solid',
            borderColor: this.props.color,
            borderBottomColor: 'transparent',
            borderRadius: '100%',
            background: 'transparent !important'
        }
    },
    getAnimationStyle: function (i) {
        var animation = [animationName, '0.75s', '0s', 'infinite', 'linear'].join(' ');
        var animationFillMode = 'both';

        return {
            animation: animation,
            WebkitAnimation: animation,
            animationFillMode: animationFillMode,
            WebkitAnimationFillMode: animationFillMode
        }
    },
    getStyle: function (i) {

        return assign(
            this.getBallStyle(i),
            this.getAnimationStyle(i),
            {
                display: 'inline-block'
            }
        )
    },
    render: function () {
        return React.createElement("div", {style: this.getStyle()})
    }
});

module.exports = Loader;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./assign":18,"./insertKeyframesRule":19}],5:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var assign = require('./assign');
var insertKeyframesRule = require('./insertKeyframesRule');

var rotateKeyframes = {
    '100%': {
        transform: 'rotate(360deg)'
    }
};


var bounceKeyframes = {
    '0%, 100%': {
        transform: 'scale(0)'
    },
    '50%': {
        transform: 'scale(1.0)'
    }
};


var rotateAnimationName = insertKeyframesRule(rotateKeyframes);
var bounceAnimationName = insertKeyframesRule(bounceKeyframes);

var Loader = React.createClass({displayName: "Loader",
    propTypes: {
        color: React.PropTypes.string,
        size: React.PropTypes.string,
        margin: React.PropTypes.string
    },
    getDefaultProps: function(){
        return {
            color: '#ffffff',
            size: '60px'
        };
    },
    getBallStyle: function (size) {
        return {
            backgroundColor: this.props.color,
            width: size,
            height: size,
            borderRadius: '100%'
        }
    },
    getAnimationStyle: function (i) {

        var animation = [i==0? rotateAnimationName: bounceAnimationName, '2s', i==2? '-1s': '0s', 'infinite', 'linear'].join(' ');
        var animationFillMode = 'forwards';
        return {
            animation: animation,
            WebkitAnimation: animation,
            animationFillMode: animationFillMode,
            WebkitAnimationFillMode: animationFillMode
        }
    },
    getStyle: function (i) {
        var size = parseInt(this.props.size);
        var ballSize = size/2;
        if(i) {
            return assign(
                this.getBallStyle(ballSize),
                this.getAnimationStyle(i),
                {
                    position: 'absolute',
                    top: i%2? 0: 'auto',
                    bottom: i%2? 'auto': 0
                }
            )
        }else{
            return assign(
                this.getAnimationStyle(i),
                {
                    width: size,
                    height: size,
                    position: 'relative'
                }
            )
        }

    },
    render: function () {

        return (
            React.createElement("div", {style: this.getStyle(0)}, 
                React.createElement("div", {style: this.getStyle(1)}), 
                React.createElement("div", {style: this.getStyle(2)})
            ));
    }
});

module.exports = Loader;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./assign":18,"./insertKeyframesRule":19}],6:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var assign = require('./assign');
var insertKeyframesRule = require('./insertKeyframesRule');

var keyframes = {
    '50%': {
        opacity: 0.3
    },
    '100%': {
        opacity: 1
    }
};

var animationName = insertKeyframesRule(keyframes);

var Loader = React.createClass({displayName: "Loader",
    propTypes: {
        color: React.PropTypes.string,
        height: React.PropTypes.string,
        width: React.PropTypes.string,
        margin: React.PropTypes.string,
        radius: React.PropTypes.string
    },
    getDefaultProps: function(){
        return {
            color: '#ffffff',
            height: '15px',
            width: '5px',
            margin: '2px',
            radius: '2px'
        };
    },
    getLineStyle: function (i) {
        return {
            backgroundColor: this.props.color,
            height: this.props.height,
            width: this.props.width,
            margin: this.props.margin,
            borderRadius: this.props.radius
        }
    },
    getAnimationStyle: function (i) {

        var animation = [animationName, '1.2s', (i * 0.12) + 's', 'infinite', 'ease-in-out'].join(' ');
        var animationFillMode = 'both';
        return {
            animation: animation,
            WebkitAnimation: animation,
            animationFillMode: animationFillMode,
            WebkitAnimationFillMode: animationFillMode
        }
    },
    getPosStyle: function(i){
        var radius = '20';
        var quarter = (radius / 2) + (radius / 5.5);
        var lines = {
            l1: {
                top: radius,
                left: 0
            },
            l2: {
                top: quarter,
                left: quarter,
                transform: 'rotate(-45deg)'
            },
            l3: {
                top: 0,
                left: radius,
                transform: 'rotate(90deg)'
            },
            l4: {
                top: -quarter,
                left: quarter,
                transform: 'rotate(45deg)'
            },
            l5: {
                top: -radius,
                left: 0
            },
            l6: {
                top: -quarter,
                left: -quarter,
                transform: 'rotate(-45deg)'
            },
            l7: {
                top: 0,
                left: -radius,
                transform: 'rotate(90deg)'
            },
            l8: {
                top: quarter,
                left: -quarter,
                transform: 'rotate(45deg)'
            }
        };

        return lines['l'+i];
    },
    getStyle: function (i) {

        return assign(
            this.getLineStyle(i),
            this.getPosStyle(i),
            this.getAnimationStyle(i),
            {
                position: 'absolute'
            }
        )
    },
    render: function () {

        var style = {
            position: 'relative',
            fontSize: 0
        };

        return (React.createElement("div", {style: style}, 
            React.createElement("div", {style: this.getStyle(1)}), 
            React.createElement("div", {style: this.getStyle(2)}), 
            React.createElement("div", {style: this.getStyle(3)}), 
            React.createElement("div", {style: this.getStyle(4)}), 
            React.createElement("div", {style: this.getStyle(5)}), 
            React.createElement("div", {style: this.getStyle(6)}), 
            React.createElement("div", {style: this.getStyle(7)}), 
            React.createElement("div", {style: this.getStyle(8)})
        ));
    }
});

module.exports = Loader;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./assign":18,"./insertKeyframesRule":19}],7:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var assign = require('./assign');
var insertKeyframesRule = require('./insertKeyframesRule');

var keyframes = {
    '0%': {
        transform: 'scale(1)'
    },
    '50%': {
        transform: 'scale(0.5)',
        opacity: 0.7
    },
    '100%': {
        transform: 'scale(1)',
        opacity: 1
    }
};

var animationName = insertKeyframesRule(keyframes);

function random(top){
    return Math.random() * top
}

var Loader = React.createClass({displayName: "Loader",
    propTypes: {
        color: React.PropTypes.string,
        size: React.PropTypes.string,
        margin: React.PropTypes.string
    },
    getDefaultProps: function(){
        return {
            color: '#ffffff',
            size: '15px',
            margin: '2px'
        };
    },
    getBallStyle: function () {
        return {
            backgroundColor: this.props.color,
            width: this.props.size,
            height: this.props.size,
            margin: this.props.margin,
            borderRadius: '100%'
        }
    },
    getAnimationStyle: function (i) {

        var animationDuration = ((random(100) / 100) + 0.6) + 's';
        var animationDelay = ((random(100) / 100) - 0.2) + 's';

        var animation = [animationName, animationDuration, animationDelay, 'infinite', 'ease'].join(' ');
        var animationFillMode = 'both';
        return {
            animation: animation,
            WebkitAnimation: animation,
            animationFillMode: animationFillMode,
            WebkitAnimationFillMode: animationFillMode
        }
    },
    getStyle: function (i) {

        return assign(
            this.getBallStyle(i),
            this.getAnimationStyle(i),
            {
                display: 'inline-block'
            }
        )
    },
    render: function () {
        var style = {
            width: (parseFloat(this.props.size) * 3) + parseFloat(this.props.margin) * 6,
            fontSize: 0
        };
        return (React.createElement("div", {style: style}, 
            React.createElement("div", {style: this.getStyle(1)}), 
            React.createElement("div", {style: this.getStyle(2)}), 
            React.createElement("div", {style: this.getStyle(3)}), 
            React.createElement("div", {style: this.getStyle(4)}), 
            React.createElement("div", {style: this.getStyle(5)}), 
            React.createElement("div", {style: this.getStyle(6)}), 
            React.createElement("div", {style: this.getStyle(7)}), 
            React.createElement("div", {style: this.getStyle(8)}), 
            React.createElement("div", {style: this.getStyle(9)})
        ));
    }
});

module.exports = Loader;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./assign":18,"./insertKeyframesRule":19}],8:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var assign = require('./assign');
var insertKeyframesRule = require('./insertKeyframesRule');

var keyframes = {
    '100%': {
        transform: 'rotate(360deg)'
    }
};


var animationName = insertKeyframesRule(keyframes);

var Loader = React.createClass({displayName: "Loader",
    propTypes: {
        color: React.PropTypes.string,
        size: React.PropTypes.string,
        margin: React.PropTypes.string
    },
    getDefaultProps: function(){
        return {
            color: '#ffffff',
            size: '60px'
        };
    },
    getBallStyle: function (size) {
        return {
            width: size,
            height: size,
            borderRadius: '100%'
        }
    },
    getAnimationStyle: function (i) {

        var animation = [animationName, '0.6s', '0s', 'infinite', 'linear'].join(' ');
        var animationFillMode = 'forwards';
        return {
            animation: animation,
            WebkitAnimation: animation,
            animationFillMode: animationFillMode,
            WebkitAnimationFillMode: animationFillMode
        }
    },
    getStyle: function (i) {
        var size = parseInt(this.props.size);
        var moonSize = size/7;
        if(i == 1) {
            return assign(
                this.getBallStyle(moonSize),
                this.getAnimationStyle(i),
                {
                    backgroundColor: this.props.color,
                    opacity: '0.8',
                    position: 'absolute',
                    top: size/2 - moonSize/2
                }
            )
        }else if(i == 2){
            return assign(
                this.getBallStyle(size),
                {
                    border: moonSize +'px solid ' + this.props.color,
                    opacity: 0.1
                }
            );
        }else{
            return assign(
                this.getAnimationStyle(i),
                {
                    position: 'relative'
                }
            )
        }

    },
    render: function () {

        return (
            React.createElement("div", {style: this.getStyle(0)}, 
                React.createElement("div", {style: this.getStyle(1)}), 
                React.createElement("div", {style: this.getStyle(2)})
            ));
    }
});

module.exports = Loader;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./assign":18,"./insertKeyframesRule":19}],9:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var assign = require('./assign');
var insertKeyframesRule = require('./insertKeyframesRule');

var animations = {};

var Loader = React.createClass({displayName: "Loader",
    propTypes: {
        color: React.PropTypes.string,
        size: React.PropTypes.number,
        margin: React.PropTypes.number
    },
    getDefaultProps: function(){

        return {
            color: '#ffffff',
            size: 25,
            margin: 2
        };
    },
    getBallStyle: function () {
        return {
            backgroundColor: this.props.color,
            width: this.props.size,
            height: this.props.size,
            margin: this.props.margin,
            borderRadius: '100%'
        }
    },
    getAnimationStyle: function (i) {

        var size = this.props.size;
        var animationName = animations[size];
        if(!animationName){
            var keyframes = {
                '75%': {
                    opacity: 0.7
                },
                '100%': {
                    transform: 'translate(' + (-4 * size) + 'px,' + (-size / 4) + 'px)'
                }
            };
            animationName = animations[size] = insertKeyframesRule(keyframes);
        }

        var animation = [animationName, '1s', i*0.25 + 's', 'infinite', 'linear'].join(' ');
        var animationFillMode = 'both';
        return {
            animation: animation,
            WebkitAnimation: animation,
            animationFillMode: animationFillMode,
            WebkitAnimationFillMode: animationFillMode
        }
    },
    getStyle: function (i) {

        if(i == 1){
            var s1 =  this.props.size + 'px solid transparent';
            var s2 =  this.props.size + 'px solid ' + this.props.color;

            return {
                width: 0,
                height: 0,
                borderRight: s1,
                borderTop: s2,
                borderLeft: s2,
                borderBottom: s2,
                borderRadius: this.props.size
            }

        }else{

            return assign(
                this.getBallStyle(i),
                this.getAnimationStyle(i),
                {
                    width: 10,
                    height: 10,
                    transform: 'translate(0, '+ -this.props.size / 4 + 'px)',
                    position: 'absolute',
                    top: 25,
                    left: 100
                }
            )
        }


    },
    render: function () {

        var style = {
            position: 'relative',
            fontSize: 0
        };
        return (React.createElement("div", {style: style}, 
            React.createElement("div", {style: this.getStyle(1)}), 
            React.createElement("div", {style: this.getStyle(2)}), 
            React.createElement("div", {style: this.getStyle(3)}), 
            React.createElement("div", {style: this.getStyle(4)}), 
            React.createElement("div", {style: this.getStyle(5)})
        ));
    }
});

module.exports = Loader;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./assign":18,"./insertKeyframesRule":19}],10:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var assign = require('./assign');
var insertKeyframesRule = require('./insertKeyframesRule');

var keyframes = {
    '0%': {
        transform: 'scale(1)',
        opacity: 1
    },
    '45%': {
        transform: 'scale(0.1)',
        opacity: 0.7
    },
    '80%': {
        transform: 'scale(1)',
        opacity: 1
    }
};

var animationName = insertKeyframesRule(keyframes);

var Loader = React.createClass({displayName: "Loader",
    propTypes: {
        color: React.PropTypes.string,
        size: React.PropTypes.string,
        margin: React.PropTypes.string
    },
    getDefaultProps: function(){
        return {
            color: '#ffffff',
            size: '15px',
            margin: '2px'
        };
    },
    getBallStyle: function () {
        return {
            backgroundColor: this.props.color,
            width: this.props.size,
            height: this.props.size,
            margin: this.props.margin,
            borderRadius: '100%'
        }
    },
    getAnimationStyle: function (i) {
        var animation = [animationName, '0.75s', (i * 0.12) + 's', 'infinite', 'cubic-bezier(.2,.68,.18,1.08)'].join(' ');
        var animationFillMode = 'both';
        return {
            animation: animation,
            WebkitAnimation: animation,
            animationFillMode: animationFillMode,
            WebkitAnimationFillMode: animationFillMode
        }
    },
    getStyle: function (i) {

        return assign(
            this.getBallStyle(i),
            this.getAnimationStyle(i),
            {
                display: 'inline-block'
            }
        )
    },
    render: function () {

        return (React.createElement("div", null, 
            React.createElement("div", {style: this.getStyle(1)}), 
            React.createElement("div", {style: this.getStyle(2)}), 
            React.createElement("div", {style: this.getStyle(3)})
        ));
    }
});

module.exports = Loader;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./assign":18,"./insertKeyframesRule":19}],11:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var assign = require('./assign');
var insertKeyframesRule = require('./insertKeyframesRule');

var rightRotateKeyframes = {
    '0%': {
        transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)'

    },
    '100%': {
        transform: 'rotateX(180deg) rotateY(360deg) rotateZ(360deg)'
    }
};

var leftRotateKeyframes = {
    '0%': {
        transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
    },
    '100%': {
        transform: 'rotateX(360deg) rotateY(180deg) rotateZ(360deg)'
    }
};


var rightRotateAnimationName = insertKeyframesRule(rightRotateKeyframes);
var leftRotateAnimationName = insertKeyframesRule(leftRotateKeyframes);

var Loader = React.createClass({displayName: "Loader",
    propTypes: {
        color: React.PropTypes.string,
        size: React.PropTypes.string,
        margin: React.PropTypes.string
    },
    getDefaultProps: function(){
        return {
            color: '#ffffff',
            size: '60px'
        };
    },
    getCircleStyle: function (size) {
        return {
            width: size,
            height: size,
            border: size/10 +'px solid ' + this.props.color,
            opacity: 0.4,
            borderRadius: '100%'
        }
    },
    getAnimationStyle: function (i) {

        var animation = [i==1? rightRotateAnimationName: leftRotateAnimationName, '2s', '0s', 'infinite', 'linear'].join(' ');

        var animationFillMode = 'forwards';
        var perspective = '800px';

        return {
            perspective: perspective,
            MozPerspective: perspective,
            WebkitPerspective: perspective,

            animation: animation,
            WebkitAnimation: animation,
            MozAnimation: animation,

            animationFillMode: animationFillMode,
            MozAnimationFillMode: animationFillMode,
            WebkitAnimationFillMode: animationFillMode
        }
    },
    getStyle: function (i) {
        var size = parseInt(this.props.size);
        if(i) {
            return assign(
                this.getCircleStyle(size),
                this.getAnimationStyle(i),
                {
                    position: 'absolute',
                    top: 0,
                    left: 0
                }
            )
        }else{
            return {
                width: size,
                height: size,
                position: 'relative'
            }

        }

    },
    render: function () {

        return (
            React.createElement("div", {style: this.getStyle(0)}, 
                React.createElement("div", {style: this.getStyle(1)}), 
                React.createElement("div", {style: this.getStyle(2)})
            ));
    }
});

module.exports = Loader;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./assign":18,"./insertKeyframesRule":19}],12:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var assign = require('./assign');
var insertKeyframesRule = require('./insertKeyframesRule');

var riseAmount = 30;
var keyframesEven = {
    '0%': {
        transform: 'scale(1.1)'
    },
    '25': {
        transform: 'translateY(-' + riseAmount + 'px)'
    },
    '50%': {
        transform: 'scale(0.4)'
    },
    '75%': {
        transform: 'translateY(' + riseAmount + 'px)'
    },
    '100%': {
        transform: 'translateY(0) scale(1.0)'
    }
};

var keyframesOdd = {
    '0%': {
        transform: 'scale(0.4)'
    },
    '25': {
        transform: 'translateY(' + riseAmount + 'px)'
    },
    '50%': {
        transform: 'scale(1.1)'
    },
    '75%': {
        transform: 'translateY(-' + riseAmount + 'px)'
    },
    '100%': {
        transform: 'translateY(0) scale(0.75)'
    }
};


var animationNameEven = insertKeyframesRule(keyframesEven);
var animationNameOdd = insertKeyframesRule(keyframesOdd);

var Loader = React.createClass({displayName: "Loader",
    propTypes: {
        color: React.PropTypes.string,
        size: React.PropTypes.string,
        margin: React.PropTypes.string
    },
    getDefaultProps: function(){
        return {
            color: '#ffffff',
            size: '15px',
            margin: '2px'
        };
    },
    getBallStyle: function () {
        return {
            backgroundColor: this.props.color,
            width: this.props.size,
            height: this.props.size,
            margin: this.props.margin,
            borderRadius: '100%'
        }
    },
    getAnimationStyle: function (i) {


        var animation = [i%2==0? animationNameEven: animationNameOdd, '1s', '0s', 'infinite', 'cubic-bezier(.15,.46,.9,.6)'].join(' ');
        var animationFillMode = 'both';
        return {
            animation: animation,
            WebkitAnimation: animation,
            animationFillMode: animationFillMode,
            WebkitAnimationFillMode: animationFillMode
        }
    },
    getStyle: function (i) {

        return assign(
            this.getBallStyle(i),
            this.getAnimationStyle(i),
            {
                display: 'inline-block'
            }
        )
    },
    render: function () {

        return (React.createElement("div", null, 
            React.createElement("div", {style: this.getStyle(1)}), 
            React.createElement("div", {style: this.getStyle(2)}), 
            React.createElement("div", {style: this.getStyle(3)}), 
            React.createElement("div", {style: this.getStyle(4)}), 
            React.createElement("div", {style: this.getStyle(5)})
        ));
    }
});

module.exports = Loader;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./assign":18,"./insertKeyframesRule":19}],13:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var assign = require('./assign');
var insertKeyframesRule = require('./insertKeyframesRule');

var keyframes = {
    '0%': {
        transform: 'rotate(0deg)'
    },
    '50%': {
        transform: 'rotate(180deg)'
    },
    '100%': {
        transform: 'rotate(360deg)'
    }
};


var animationName = insertKeyframesRule(keyframes);

var Loader = React.createClass({displayName: "Loader",
    propTypes: {
        color: React.PropTypes.string,
        size: React.PropTypes.string,
        margin: React.PropTypes.string
    },
    getDefaultProps: function(){
        return {
            color: '#ffffff',
            size: '15px',
            margin: '2px'
        };
    },
    getBallStyle: function () {
        return {
            backgroundColor: this.props.color,
            width: this.props.size,
            height: this.props.size,
            margin: this.props.margin,
            borderRadius: '100%'
        }
    },
    getAnimationStyle: function (i) {

        var animation = [animationName, '1s', '0s', 'infinite', 'cubic-bezier(.7,-.13,.22,.86)'].join(' ');
        var animationFillMode = 'both';
        return {
            animation: animation,
            WebkitAnimation: animation,
            animationFillMode: animationFillMode,
            WebkitAnimationFillMode: animationFillMode
        }
    },
    getStyle: function (i) {

        if(i){
            return assign(
                this.getBallStyle(i),
                {
                    opacity: '0.8',
                    position: 'absolute',
                    top: 0,
                    left: i%2? -28: 25
                }
            )
        }

        return assign(
            this.getBallStyle(i),
            this.getAnimationStyle(i),
            {
                display: 'inline-block',
                position: 'relative'
            }
        )
    },
    render: function () {

        return (
            React.createElement("div", {style: this.getStyle()}, 
                React.createElement("div", {style: this.getStyle(1)}), 
                React.createElement("div", {style: this.getStyle(2)})
            ));
    }
});

module.exports = Loader;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./assign":18,"./insertKeyframesRule":19}],14:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var assign = require('./assign');
var insertKeyframesRule = require('./insertKeyframesRule');

var keyframes = {
    '0%': {
        transform: 'scaley(1.0)'
    },
    '50%': {
        transform: 'scaley(0.4)'
    },
    '100%': {
        transform: 'scaley(1.0)'
    }
};

var animationName = insertKeyframesRule(keyframes);

var Loader = React.createClass({displayName: "Loader",
    propTypes: {
        color: React.PropTypes.string,
        height: React.PropTypes.string,
        width: React.PropTypes.string,
        margin: React.PropTypes.string,
        radius: React.PropTypes.string
    },
    getDefaultProps: function(){
        return {
            color: '#ffffff',
            height: '35px',
            width: '4px',
            margin: '2px',
            radius: '2px'
        };
    },
    getLineStyle: function () {
        return {
            backgroundColor: this.props.color,
            height: this.props.height,
            width: this.props.width,
            margin: this.props.margin,
            borderRadius: this.props.radius
        }
    },
    getAnimationStyle: function (i) {

        var animation = [animationName, '1s', (i * 0.1) + 's', 'infinite', 'cubic-bezier(.2,.68,.18,1.08)'].join(' ');
        var animationFillMode = 'both';
        return {
            animation: animation,
            WebkitAnimation: animation,
            animationFillMode: animationFillMode,
            WebkitAnimationFillMode: animationFillMode
        }
    },
    getStyle: function (i) {

        return assign(
            this.getLineStyle(i),
            this.getAnimationStyle(i),
            {
                display: 'inline-block'
            }
        )
    },
    render: function () {

        return (React.createElement("div", null, 
            React.createElement("div", {style: this.getStyle(1)}), 
            React.createElement("div", {style: this.getStyle(2)}), 
            React.createElement("div", {style: this.getStyle(3)}), 
            React.createElement("div", {style: this.getStyle(4)}), 
            React.createElement("div", {style: this.getStyle(5)})
        ));
    }
});

module.exports = Loader;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./assign":18,"./insertKeyframesRule":19}],15:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var assign = require('./assign');
var insertKeyframesRule = require('./insertKeyframesRule');

var keyframes = {
    '25%': {
        transform: 'perspective(100px) rotateX(180deg) rotateY(0)'
    },
    '50%': {
        transform: 'perspective(100px) rotateX(180deg) rotateY(180deg)'
    },
    '75%': {
        transform: 'perspective(100px) rotateX(0) rotateY(180deg)'
    },
    '100%': {
        transform: 'perspective(100px) rotateX(0) rotateY(0)'
    }
};

var animationName = insertKeyframesRule(keyframes);

var Loader = React.createClass({displayName: "Loader",
    propTypes: {
        color: React.PropTypes.string,
        size: React.PropTypes.string
    },
    getDefaultProps: function(){
        return {
            color: '#ffffff',
            size: '20px'
        };
    },
    getSharpStyle: function () {
        return {
            width: 0,
            height: 0,
            borderLeft: this.props.size + ' solid transparent',
            borderRight: this.props.size + ' solid transparent',
            borderBottom: this.props.size + ' solid '+ this.props.color
        }
    },
    getAnimationStyle: function (i) {
        var animation = [animationName, '3s', '0s', 'infinite', 'cubic-bezier(.09,.57,.49,.9)'].join(' ');
        var animationFillMode = 'both';
        return {
            animation: animation,
            WebkitAnimation: animation,
            animationFillMode: animationFillMode,
            WebkitAnimationFillMode: animationFillMode
        }
    },
    getStyle: function (i) {

        return assign(
            this.getSharpStyle(i),
            this.getAnimationStyle(i),
            {
                display: 'inline-block'
            }
        )
    },
    render: function () {

        return (
            React.createElement("div", {style: this.getStyle()})
        );
    }
});

module.exports = Loader;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./assign":18,"./insertKeyframesRule":19}],16:[function(require,module,exports){
(function (global){

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var assign = require('./assign');
var insertKeyframesRule = require('./insertKeyframesRule');

var keyframes = {
    '25%': {
        transform: 'perspective(100px) rotateX(180deg) rotateY(0)'
    },
    '50%': {
        transform: 'perspective(100px) rotateX(180deg) rotateY(180deg)'
    },
    '75%': {
        transform: 'perspective(100px) rotateX(0) rotateY(180deg)'
    },
    '100%': {
        transform: 'perspective(100px) rotateX(0) rotateY(0)'
    }
};


var animationName = insertKeyframesRule(keyframes);

var Loader = React.createClass({displayName: "Loader",
    propTypes: {
        color: React.PropTypes.string,
        size: React.PropTypes.string,
        margin: React.PropTypes.string
    },
    getDefaultProps: function(){
        return {
            color: '#ffffff',
            size: '50px'
        };
    },
    getSquareStyle: function () {
        return {
            backgroundColor: this.props.color,
            width: this.props.size,
            height: this.props.size
        }
    },
    getAnimationStyle: function (i) {
        var animation = [animationName, '3s', '0s', 'infinite', 'cubic-bezier(.09,.57,.49,.9)'].join(' ');
        var animationFillMode = 'both';
        return {
            animation: animation,
            WebkitAnimation: animation,
            animationFillMode: animationFillMode,
            WebkitAnimationFillMode: animationFillMode
        }
    },
    getStyle: function (i) {

        return assign(
            this.getSquareStyle(i),
            this.getAnimationStyle(i),
            {
                display: 'inline-block'
            }
        )
    },
    render: function () {

        return (React.createElement("div", {style: this.getStyle()}));
    }
});

module.exports = Loader;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./assign":18,"./insertKeyframesRule":19}],17:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var assign = require('./assign');
var insertKeyframesRule = require('./insertKeyframesRule');

var keyframes = {
    '33%': {
        transform: 'translateY(10px)'
    },
    '66%': {
        transform: 'translateY(-10px)'
    },
    '100%': {
        transform: 'translateY(0)'
    }
};


var animationName = insertKeyframesRule(keyframes);

var Loader = React.createClass({displayName: "Loader",
    propTypes: {
        color: React.PropTypes.string,
        size: React.PropTypes.string,
        margin: React.PropTypes.string
    },
    getDefaultProps: function(){
        return {
            color: '#ffffff',
            size: '15px',
            margin: '2px'
        };
    },
    getBallStyle: function () {
        return {
            backgroundColor: this.props.color,
            width: this.props.size,
            height: this.props.size,
            margin: this.props.margin,
            borderRadius: '100%'
        }
    },
    getAnimationStyle: function (i) {
        var animation = [animationName, '0.6s', (i * 0.07) + 's', 'infinite', 'ease-in-out'].join(' ');
        var animationFillMode = 'both';
        return {
            animation: animation,
            WebkitAnimation: animation,
            animationFillMode: animationFillMode,
            WebkitAnimationFillMode: animationFillMode
        }
    },
    getStyle: function (i) {

        return assign(
            this.getBallStyle(i),
            this.getAnimationStyle(i),
            {
                display: 'inline-block'
            }
        )
    },
    render: function () {

        return (React.createElement("div", null, 
            React.createElement("div", {style: this.getStyle(1)}), 
            React.createElement("div", {style: this.getStyle(2)}), 
            React.createElement("div", {style: this.getStyle(3)})
        ));
    }
});

module.exports = Loader;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./assign":18,"./insertKeyframesRule":19}],18:[function(require,module,exports){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Object.assign
 */

// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

'use strict';

function assign(target, sources) {
    if (target == null) {
        throw new TypeError('Object.assign target cannot be null or undefined');
    }

    var to = Object(target);
    var hasOwnProperty = Object.prototype.hasOwnProperty;

    for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
        var nextSource = arguments[nextIndex];
        if (nextSource == null) {
            continue;
        }

        var from = Object(nextSource);

        // We don't currently support accessors nor proxies. Therefore this
        // copy cannot throw. If we ever supported this then we must handle
        // exceptions and side-effects. We don't support symbols so they won't
        // be transferred.

        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
    }

    return to;
}

module.exports = assign;
},{}],19:[function(require,module,exports){
var insertRule = require('./insertRule');

var vendorPrefix = (function () {
  var styles = window.getComputedStyle(document.documentElement, ''),
    pre = (Array.prototype.slice
      .call(styles)
      .join('')
      .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
      )[1];
  return '-' + pre + '-';
})();

var index = 0;

function insertKeyframesRule(keyframes) {
    // random name
    var name = 'anim_'+ (++index) + (+new Date);
    var css = "@" + vendorPrefix + "keyframes " + name + " {";

    for (var key in keyframes) {
        css += key + " {";

        for (var property in keyframes[key]) {
            css += property + ":" + keyframes[key][property] + ";";
        }

        css += "}";
    }

    css += "}";

    insertRule(css);

    return name
}

module.exports = insertKeyframesRule;

},{"./insertRule":20}],20:[function(require,module,exports){
'use strict';

var extraSheet;

function insertRule(css) {

    if (!extraSheet) {
        // First time, create an extra stylesheet for adding rules
        extraSheet = document.createElement('style');
        document.getElementsByTagName('head')[0].appendChild(extraSheet);
        // Keep reference to actual StyleSheet object (`styleSheet` for IE < 9)
        extraSheet = extraSheet.sheet || extraSheet.styleSheet;
    }

    var index = (extraSheet.cssRules || extraSheet.rules).length;
    extraSheet.insertRule(css, index);
}

module.exports = insertRule;

},{}]},{},[1])(1)
});