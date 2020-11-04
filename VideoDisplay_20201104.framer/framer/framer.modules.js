require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}],"slider":[function(require,module,exports){
var wrapSlider,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Events.SliderValueChange = "sliderValueChange";

exports.Slider = (function(superClass) {
  extend(Slider, superClass);

  function Slider(options) {
    if (options == null) {
      options = {};
    }
    this._updateValue = bind(this._updateValue, this);
    this._knobDidMove = bind(this._knobDidMove, this);
    this._updateFrame = bind(this._updateFrame, this);
    this._updateKnob = bind(this._updateKnob, this);
    this._updateFill = bind(this._updateFill, this);
    this._touchEnd = bind(this._touchEnd, this);
    this._touchStart = bind(this._touchStart, this);
    Slider.__super__.constructor.call(this, options);
  }

  Slider._knob = void 0;

  Slider._fill = void 0;

  Slider._background = void 0;

  Slider.prototype._touchStart = function(event) {
    var scaleX, scaleY, touchX, touchY;
    event.preventDefault();
    if (this._background.width > this._background.height) {
      touchX = Events.touchEvent(event).clientX - Screen.canvasFrame.x;
      scaleX = this.canvasScaleX();
      this.value = this.valueForPoint(touchX / scaleX - this.screenFrame.x);
    } else {
      touchY = Events.touchEvent(event).clientY - Screen.canvasFrame.y;
      scaleY = this.canvasScaleY();
      this.value = this.valueForPoint(touchY / scaleY - this.screenFrame.y);
    }
    this._knob.draggable._touchStart(event);
    return this._updateValue();
  };

  Slider.prototype._touchEnd = function(event) {
    return this._updateValue();
  };

  Slider.prototype._updateFill = function() {
    if (this._background.width > this._background.height) {
      return this._fill.width = this._knob.midX;
    } else {
      return this._fill.height = this._knob.midY;
    }
  };

  Slider.prototype._updateKnob = function() {
    if (this._background.width > this._background.height) {
      this._knob.midX = this._fill.width;
      return this._knob.centerY();
    } else {
      this._knob.midY = this._fill.height;
      return this._knob.centerX();
    }
  };

  Slider.prototype._updateFrame = function() {
    this._knob.draggable.constraints = {
      x: -knob.width / 2,
      y: -knob.height / 2,
      width: this._background.width + this._knob.width,
      height: this._background.height + this._knob.height
    };
    if (this.constrained) {
      this._knob.draggable.constraints = {
        x: 0,
        y: 0,
        width: this._background.width,
        height: this._background.height
      };
    }
    if (this._background.width > this._background.height) {
      this._fill.height = this._background.height;
      this._knob.midX = this.pointForValue(this.value);
      this._knob.centerY();
    } else {
      this._fill.width = this._background.width;
      this._knob.midY = this.pointForValue(this.value);
      this._knob.centerX();
    }
    if (this._background.width > this._background.height) {
      this._knob.draggable.speedY = 0;
      return this._knob.draggable.speedX = 1;
    } else {
      this._knob.draggable.speedX = 0;
      return this._knob.draggable.speedY = 1;
    }
  };

  Slider.prototype.addBackgroundLayer = function(layer) {
    this._background = layer;
    this._background.parent = this;
    this._background.name = "background";
    this._background.x = this._background.y = 0;
    return this._background;
  };

  Slider.prototype.addFillLayer = function(layer) {
    this._fill = layer;
    this._fill.parent = this;
    this._fill.name = "fill";
    this._fill.x = this._fill.y = 0;
    this._fill.width = this.width / 2;
    return this._fill;
  };

  Slider.prototype.addKnobLayer = function(layer) {
    this._knob = layer;
    this._knob.parent = this;
    this._knob.name = "knob";
    this._knob.draggable.enabled = true;
    this._knob.draggable.overdrag = false;
    this._knob.draggable.momentum = true;
    this._knob.draggable.momentumOptions = {
      friction: 5,
      tolerance: 0.25
    };
    this._knob.draggable.bounce = false;
    this._knob.x = Align.center();
    this._knob.y = Align.center();
    return this._knob;
  };

  Slider.define("constrained", Slider.simpleProperty("constrained", false));

  Slider.define("min", {
    get: function() {
      return this._min || 0;
    },
    set: function(value) {
      if (_.isFinite(value)) {
        this._min = value;
      }
      return this.emit("change:min", this._min);
    }
  });

  Slider.define("max", {
    get: function() {
      return this._max || 1;
    },
    set: function(value) {
      if (_.isFinite(value)) {
        this._max = value;
      }
      return this.emit("change:max", this._max);
    }
  });

  Slider.define("value", {
    get: function() {
      return this._value;
    },
    set: function(value) {
      if (!_.isFinite(value)) {
        return;
      }
      this._value = Utils.clamp(value, this.min, this.max);
      if (this._background.width > this._background.height) {
        this._knob.midX = this.pointForValue(value);
      } else {
        this._knob.midY = this.pointForValue(value);
      }
      this._updateFill();
      return this._updateValue();
    }
  });

  Slider.prototype._knobDidMove = function() {
    if (this._background.width > this._background.height) {
      return this.value = this.valueForPoint(this._knob.midX);
    } else {
      return this.value = this.valueForPoint(this._knob.midY);
    }
  };

  Slider.prototype._updateValue = function() {
    if (this._lastUpdatedValue === this.value) {
      return;
    }
    this._lastUpdatedValue = this.value;
    this.emit("change:value", this.value);
    return this.emit(Events.SliderValueChange, this.value);
  };

  Slider.prototype.pointForValue = function(value) {
    if (this._background.width > this._background.height) {
      if (this.constrained) {
        return Utils.modulate(value, [this.min, this.max], [0 + (this._knob.width / 2), this._background.width - (this._knob.width / 2)], true);
      } else {
        return Utils.modulate(value, [this.min, this.max], [0, this._background.width], true);
      }
    } else {
      if (this.constrained) {
        return Utils.modulate(value, [this.min, this.max], [0 + (this._knob.height / 2), this._background.height - (this._knob.height / 2)], true);
      } else {
        return Utils.modulate(value, [this.min, this.max], [0, this._background.height], true);
      }
    }
  };

  Slider.prototype.valueForPoint = function(value) {
    if (this._background.width > this._background.height) {
      if (this.constrained) {
        return Utils.modulate(value, [0 + (this._knob.width / 2), this._background.width - (this._knob.width / 2)], [this.min, this.max], true);
      } else {
        return Utils.modulate(value, [0, this._background.width], [this.min, this.max], true);
      }
    } else {
      if (this.constrained) {
        return Utils.modulate(value, [0 + (this._knob.height / 2), this._background.height - (this._knob.height / 2)], [this.min, this.max], true);
      } else {
        return Utils.modulate(value, [0, this._background.height], [this.min, this.max], true);
      }
    }
  };

  Slider.prototype.animateToValue = function(value, animationOptions) {
    if (animationOptions == null) {
      animationOptions = {
        curve: "spring(300, 25, 0)"
      };
    }
    if (this._background.width > this._background.height) {
      animationOptions.properties = {
        x: this.pointForValue(value) - (this._knob.width / 2)
      };
    } else {
      animationOptions.properties = {
        y: this.pointForValue(value) - (this._knob.height / 2)
      };
    }
    return this._knob.animate(animationOptions);
  };

  Slider.wrap = function(background, fill, knob, options) {
    return wrapSlider(new this(options), background, fill, knob, options);
  };

  Slider.prototype.onValueChange = function(cb) {
    return this.on(Events.SliderValueChange, cb);
  };

  return Slider;

})(Layer);

wrapSlider = function(instance, background, fill, knob) {
  var slider;
  if (!(background instanceof Layer)) {
    throw new Error("AudioLayer expects a background layer.");
  }
  if (!(fill instanceof Layer)) {
    throw new Error("AudioLayer expects a fill layer.");
  }
  if (!(knob instanceof Layer)) {
    throw new Error("AudioLayer expects a knob layer.");
  }
  slider = instance;
  slider.clip = false;
  slider.backgroundColor = "transparent";
  slider.frame = background.frame;
  slider.parent = background.parent;
  slider.index = background.index;
  slider.addBackgroundLayer(background);
  slider.addFillLayer(fill);
  slider.addKnobLayer(knob);
  slider._updateFrame();
  slider._updateKnob();
  slider._updateFill();
  slider._knobDidMove();
  background.onTapStart(function() {
    return slider._touchStart(event);
  });
  slider.on("change:frame", function() {
    return slider._updateFrame();
  });
  knob.on("change:size", function() {
    return slider._updateKnob();
  });
  knob.on("change:frame", function() {
    slider._updateFill();
    return slider._knobDidMove();
  });
  slider.on("change:max", function() {
    slider._updateFrame();
    slider._updateKnob();
    slider._updateFill();
    return slider._knobDidMove();
  });
  return slider;
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2xlZXN1cmUvRG9jdW1lbnRzL0dpdEh1Yi9NZWlwaWFuL01laXBpYW4vVmlkZW9EaXNwbGF5XzIwMjAxMTA0LmZyYW1lci9tb2R1bGVzL3NsaWRlci5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9sZWVzdXJlL0RvY3VtZW50cy9HaXRIdWIvTWVpcGlhbi9NZWlwaWFuL1ZpZGVvRGlzcGxheV8yMDIwMTEwNC5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiMgRnJhbWVyIFNsaWRlciBNb2R1bGVcbiMgQnkgQmVuamFtaW4gZGVuIEJvZXJcbiMgRm9sbG93IG1lIEBiZW5qYW1pbm5hdGhhblxuIyBGb2xsb3cgRnJhbWVyIEBmcmFtZXJcblxuRXZlbnRzLlNsaWRlclZhbHVlQ2hhbmdlICA9IFwic2xpZGVyVmFsdWVDaGFuZ2VcIlxuXG5jbGFzcyBleHBvcnRzLlNsaWRlciBleHRlbmRzIExheWVyXG5cblx0Y29uc3RydWN0b3I6IChvcHRpb25zPXt9KSAtPlxuXHRcdHN1cGVyIG9wdGlvbnNcblxuXHRAX2tub2IgPSB1bmRlZmluZWRcblx0QF9maWxsID0gdW5kZWZpbmVkXG5cdEBfYmFja2dyb3VuZCA9IHVuZGVmaW5lZFxuXG5cdF90b3VjaFN0YXJ0OiAoZXZlbnQpID0+XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG5cdFx0aWYgQF9iYWNrZ3JvdW5kLndpZHRoID4gQF9iYWNrZ3JvdW5kLmhlaWdodFxuXHRcdFx0dG91Y2hYID0gRXZlbnRzLnRvdWNoRXZlbnQoZXZlbnQpLmNsaWVudFggLSBTY3JlZW4uY2FudmFzRnJhbWUueFxuXHRcdFx0c2NhbGVYID0gQGNhbnZhc1NjYWxlWCgpXG5cdFx0XHRAdmFsdWUgPSBAdmFsdWVGb3JQb2ludCh0b3VjaFggLyBzY2FsZVggLSBAc2NyZWVuRnJhbWUueClcblx0XHRlbHNlXG5cdFx0XHR0b3VjaFkgPSBFdmVudHMudG91Y2hFdmVudChldmVudCkuY2xpZW50WSAtIFNjcmVlbi5jYW52YXNGcmFtZS55XG5cdFx0XHRzY2FsZVkgPSBAY2FudmFzU2NhbGVZKClcblx0XHRcdEB2YWx1ZSA9IEB2YWx1ZUZvclBvaW50KHRvdWNoWSAvIHNjYWxlWSAtIEBzY3JlZW5GcmFtZS55KVxuXG5cdFx0QF9rbm9iLmRyYWdnYWJsZS5fdG91Y2hTdGFydChldmVudClcblx0XHRAX3VwZGF0ZVZhbHVlKClcblxuXHRfdG91Y2hFbmQ6IChldmVudCkgPT5cblx0XHRAX3VwZGF0ZVZhbHVlKClcblxuXHRfdXBkYXRlRmlsbDogPT5cblx0XHRpZiBAX2JhY2tncm91bmQud2lkdGggPiBAX2JhY2tncm91bmQuaGVpZ2h0XG5cdFx0XHRAX2ZpbGwud2lkdGggPSBAX2tub2IubWlkWFxuXHRcdGVsc2Vcblx0XHRcdEBfZmlsbC5oZWlnaHQgPSBAX2tub2IubWlkWVxuXG5cdF91cGRhdGVLbm9iOiA9PlxuXHRcdGlmIEBfYmFja2dyb3VuZC53aWR0aCA+IEBfYmFja2dyb3VuZC5oZWlnaHRcblx0XHRcdEBfa25vYi5taWRYID0gQF9maWxsLndpZHRoXG5cdFx0XHRAX2tub2IuY2VudGVyWSgpXG5cdFx0ZWxzZVxuXHRcdFx0QF9rbm9iLm1pZFkgPSBAX2ZpbGwuaGVpZ2h0XG5cdFx0XHRAX2tub2IuY2VudGVyWCgpXG5cblx0X3VwZGF0ZUZyYW1lOiA9PlxuXHRcdEBfa25vYi5kcmFnZ2FibGUuY29uc3RyYWludHMgPVxuXHRcdFx0eDogLWtub2Iud2lkdGggLyAyXG5cdFx0XHR5OiAta25vYi5oZWlnaHQgLyAyXG5cdFx0XHR3aWR0aDogQF9iYWNrZ3JvdW5kLndpZHRoICsgQF9rbm9iLndpZHRoXG5cdFx0XHRoZWlnaHQ6IEBfYmFja2dyb3VuZC5oZWlnaHQgKyBAX2tub2IuaGVpZ2h0XG5cblx0XHRpZiBAY29uc3RyYWluZWRcblx0XHRcdEBfa25vYi5kcmFnZ2FibGUuY29uc3RyYWludHMgPVxuXHRcdFx0XHR4OiAwXG5cdFx0XHRcdHk6IDBcblx0XHRcdFx0d2lkdGg6IEBfYmFja2dyb3VuZC53aWR0aFxuXHRcdFx0XHRoZWlnaHQ6IEBfYmFja2dyb3VuZC5oZWlnaHRcblxuXHRcdGlmIEBfYmFja2dyb3VuZC53aWR0aCA+IEBfYmFja2dyb3VuZC5oZWlnaHRcblx0XHRcdEBfZmlsbC5oZWlnaHQgPSBAX2JhY2tncm91bmQuaGVpZ2h0XG5cdFx0XHRAX2tub2IubWlkWCA9IEBwb2ludEZvclZhbHVlKEB2YWx1ZSlcblx0XHRcdEBfa25vYi5jZW50ZXJZKClcblx0XHRlbHNlXG5cdFx0XHRAX2ZpbGwud2lkdGggPSBAX2JhY2tncm91bmQud2lkdGhcblx0XHRcdEBfa25vYi5taWRZID0gQHBvaW50Rm9yVmFsdWUoQHZhbHVlKVxuXHRcdFx0QF9rbm9iLmNlbnRlclgoKVxuXG5cdFx0aWYgQF9iYWNrZ3JvdW5kLndpZHRoID4gQF9iYWNrZ3JvdW5kLmhlaWdodFxuXHRcdFx0QF9rbm9iLmRyYWdnYWJsZS5zcGVlZFkgPSAwXG5cdFx0XHRAX2tub2IuZHJhZ2dhYmxlLnNwZWVkWCA9IDFcblx0XHRlbHNlXG5cdFx0XHRAX2tub2IuZHJhZ2dhYmxlLnNwZWVkWCA9IDBcblx0XHRcdEBfa25vYi5kcmFnZ2FibGUuc3BlZWRZID0gMVxuXG5cdGFkZEJhY2tncm91bmRMYXllcjogKGxheWVyKSAtPlxuXHRcdEBfYmFja2dyb3VuZCA9IGxheWVyXG5cdFx0QF9iYWNrZ3JvdW5kLnBhcmVudCA9IEBcblx0XHRAX2JhY2tncm91bmQubmFtZSA9IFwiYmFja2dyb3VuZFwiXG5cdFx0QF9iYWNrZ3JvdW5kLnggPSBAX2JhY2tncm91bmQueSA9IDBcblx0XHRyZXR1cm4gQF9iYWNrZ3JvdW5kXG5cblx0YWRkRmlsbExheWVyOiAobGF5ZXIpIC0+XG5cdFx0QF9maWxsID0gbGF5ZXJcblx0XHRAX2ZpbGwucGFyZW50ID0gQFxuXHRcdEBfZmlsbC5uYW1lID0gXCJmaWxsXCJcblx0XHRAX2ZpbGwueCA9IEBfZmlsbC55ID0gMFxuXHRcdEBfZmlsbC53aWR0aCA9IEB3aWR0aCAvIDJcblx0XHRyZXR1cm4gQF9maWxsXG5cblx0YWRkS25vYkxheWVyOiAobGF5ZXIpIC0+XG5cdFx0QF9rbm9iID0gbGF5ZXJcblx0XHRAX2tub2IucGFyZW50ID0gQFxuXHRcdEBfa25vYi5uYW1lID0gXCJrbm9iXCJcblx0XHRAX2tub2IuZHJhZ2dhYmxlLmVuYWJsZWQgPSB0cnVlXG5cdFx0QF9rbm9iLmRyYWdnYWJsZS5vdmVyZHJhZyA9IGZhbHNlXG5cdFx0QF9rbm9iLmRyYWdnYWJsZS5tb21lbnR1bSA9IHRydWVcblx0XHRAX2tub2IuZHJhZ2dhYmxlLm1vbWVudHVtT3B0aW9ucyA9IHtmcmljdGlvbjogNSwgdG9sZXJhbmNlOiAwLjI1fVxuXHRcdEBfa25vYi5kcmFnZ2FibGUuYm91bmNlID0gZmFsc2Vcblx0XHRAX2tub2IueCA9IEFsaWduLmNlbnRlcigpXG5cdFx0QF9rbm9iLnkgPSBBbGlnbi5jZW50ZXIoKVxuXG5cdFx0cmV0dXJuIEBfa25vYlxuXG5cdEBkZWZpbmUgXCJjb25zdHJhaW5lZFwiLCBAc2ltcGxlUHJvcGVydHkoXCJjb25zdHJhaW5lZFwiLCBmYWxzZSlcblxuXHRAZGVmaW5lIFwibWluXCIsXG5cdFx0Z2V0OiAtPiBAX21pbiBvciAwXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAX21pbiA9IHZhbHVlIGlmIF8uaXNGaW5pdGUodmFsdWUpXG5cdFx0XHRAZW1pdChcImNoYW5nZTptaW5cIiwgQF9taW4pXG5cblx0QGRlZmluZSBcIm1heFwiLFxuXHRcdGdldDogLT4gQF9tYXggb3IgMVxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0QF9tYXggPSB2YWx1ZSBpZiBfLmlzRmluaXRlKHZhbHVlKVxuXHRcdFx0QGVtaXQoXCJjaGFuZ2U6bWF4XCIsIEBfbWF4KVxuXG5cdEBkZWZpbmUgXCJ2YWx1ZVwiLFxuXHRcdGdldDogLT4gcmV0dXJuIEBfdmFsdWVcblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdHJldHVybiB1bmxlc3MgXy5pc0Zpbml0ZSh2YWx1ZSlcblxuXHRcdFx0QF92YWx1ZSA9IFV0aWxzLmNsYW1wKHZhbHVlLCBAbWluLCBAbWF4KVxuXG5cdFx0XHRpZiBAX2JhY2tncm91bmQud2lkdGggPiBAX2JhY2tncm91bmQuaGVpZ2h0XG5cdFx0XHRcdEBfa25vYi5taWRYID0gQHBvaW50Rm9yVmFsdWUodmFsdWUpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdEBfa25vYi5taWRZID0gQHBvaW50Rm9yVmFsdWUodmFsdWUpXG5cblx0XHRcdEBfdXBkYXRlRmlsbCgpXG5cdFx0XHRAX3VwZGF0ZVZhbHVlKClcblxuXHRfa25vYkRpZE1vdmU6ID0+XG5cdFx0aWYgQF9iYWNrZ3JvdW5kLndpZHRoID4gQF9iYWNrZ3JvdW5kLmhlaWdodFxuXHRcdFx0QHZhbHVlID0gQHZhbHVlRm9yUG9pbnQoQF9rbm9iLm1pZFgpXG5cdFx0ZWxzZVxuXHRcdFx0QHZhbHVlID0gQHZhbHVlRm9yUG9pbnQoQF9rbm9iLm1pZFkpXG5cblx0X3VwZGF0ZVZhbHVlOiA9PlxuXHRcdHJldHVybiBpZiBAX2xhc3RVcGRhdGVkVmFsdWUgaXMgQHZhbHVlXG5cblx0XHRAX2xhc3RVcGRhdGVkVmFsdWUgPSBAdmFsdWVcblx0XHRAZW1pdChcImNoYW5nZTp2YWx1ZVwiLCBAdmFsdWUpXG5cdFx0QGVtaXQoRXZlbnRzLlNsaWRlclZhbHVlQ2hhbmdlLCBAdmFsdWUpXG5cblx0cG9pbnRGb3JWYWx1ZTogKHZhbHVlKSAtPlxuXHRcdGlmIEBfYmFja2dyb3VuZC53aWR0aCA+IEBfYmFja2dyb3VuZC5oZWlnaHRcblx0XHRcdGlmIEBjb25zdHJhaW5lZFxuXHRcdFx0XHRyZXR1cm4gVXRpbHMubW9kdWxhdGUodmFsdWUsIFtAbWluLCBAbWF4XSwgWzAgKyAoQF9rbm9iLndpZHRoIC8gMiksIEBfYmFja2dyb3VuZC53aWR0aCAtIChAX2tub2Iud2lkdGggLyAyKV0sIHRydWUpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHJldHVybiBVdGlscy5tb2R1bGF0ZSh2YWx1ZSwgW0BtaW4sIEBtYXhdLCBbMCwgQF9iYWNrZ3JvdW5kLndpZHRoXSwgdHJ1ZSlcblx0XHRlbHNlXG5cdFx0XHRpZiBAY29uc3RyYWluZWRcblx0XHRcdFx0cmV0dXJuIFV0aWxzLm1vZHVsYXRlKHZhbHVlLCBbQG1pbiwgQG1heF0sIFswICsgKEBfa25vYi5oZWlnaHQgLyAyKSwgQF9iYWNrZ3JvdW5kLmhlaWdodCAtIChAX2tub2IuaGVpZ2h0IC8gMildLCB0cnVlKVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyZXR1cm4gVXRpbHMubW9kdWxhdGUodmFsdWUsIFtAbWluLCBAbWF4XSwgWzAsIEBfYmFja2dyb3VuZC5oZWlnaHRdLCB0cnVlKVxuXG5cdHZhbHVlRm9yUG9pbnQ6ICh2YWx1ZSkgLT5cblx0XHRpZiBAX2JhY2tncm91bmQud2lkdGggPiBAX2JhY2tncm91bmQuaGVpZ2h0XG5cdFx0XHRpZiBAY29uc3RyYWluZWRcblx0XHRcdFx0cmV0dXJuIFV0aWxzLm1vZHVsYXRlKHZhbHVlLCBbMCArIChAX2tub2Iud2lkdGggLyAyKSwgQF9iYWNrZ3JvdW5kLndpZHRoIC0gKEBfa25vYi53aWR0aCAvIDIpXSwgW0BtaW4sIEBtYXhdLCB0cnVlKVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyZXR1cm4gVXRpbHMubW9kdWxhdGUodmFsdWUsIFswLCBAX2JhY2tncm91bmQud2lkdGhdLCBbQG1pbiwgQG1heF0sIHRydWUpXG5cdFx0ZWxzZVxuXHRcdFx0aWYgQGNvbnN0cmFpbmVkXG5cdFx0XHRcdHJldHVybiBVdGlscy5tb2R1bGF0ZSh2YWx1ZSwgWzAgKyAoQF9rbm9iLmhlaWdodCAvIDIpLCBAX2JhY2tncm91bmQuaGVpZ2h0IC0gKEBfa25vYi5oZWlnaHQgLyAyKV0sIFtAbWluLCBAbWF4XSwgdHJ1ZSlcblx0XHRcdGVsc2Vcblx0XHRcdFx0cmV0dXJuIFV0aWxzLm1vZHVsYXRlKHZhbHVlLCBbMCwgQF9iYWNrZ3JvdW5kLmhlaWdodF0sIFtAbWluLCBAbWF4XSwgdHJ1ZSlcblxuXHRhbmltYXRlVG9WYWx1ZTogKHZhbHVlLCBhbmltYXRpb25PcHRpb25zPXtjdXJ2ZTpcInNwcmluZygzMDAsIDI1LCAwKVwifSkgLT5cblx0XHRpZiBAX2JhY2tncm91bmQud2lkdGggPiBAX2JhY2tncm91bmQuaGVpZ2h0XG5cdFx0XHRhbmltYXRpb25PcHRpb25zLnByb3BlcnRpZXMgPSB7eDogQHBvaW50Rm9yVmFsdWUodmFsdWUpIC0gKEBfa25vYi53aWR0aC8yKX1cblx0XHRlbHNlXG5cdFx0XHRhbmltYXRpb25PcHRpb25zLnByb3BlcnRpZXMgPSB7eTogQHBvaW50Rm9yVmFsdWUodmFsdWUpIC0gKEBfa25vYi5oZWlnaHQvMil9XG5cblx0XHRAX2tub2IuYW5pbWF0ZShhbmltYXRpb25PcHRpb25zKVxuXG5cdCMgTmV3IENvbnN0cnVjdG9yXG5cdEB3cmFwID0gKGJhY2tncm91bmQsIGZpbGwsIGtub2IsIG9wdGlvbnMpIC0+XG5cdFx0cmV0dXJuIHdyYXBTbGlkZXIobmV3IEAob3B0aW9ucyksIGJhY2tncm91bmQsIGZpbGwsIGtub2IsIG9wdGlvbnMpXG5cblx0b25WYWx1ZUNoYW5nZTogKGNiKSAtPiBAb24oRXZlbnRzLlNsaWRlclZhbHVlQ2hhbmdlLCBjYilcblxud3JhcFNsaWRlciA9IChpbnN0YW5jZSwgYmFja2dyb3VuZCwgZmlsbCwga25vYikgLT5cblxuXHRpZiBub3QgKGJhY2tncm91bmQgaW5zdGFuY2VvZiBMYXllcilcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBdWRpb0xheWVyIGV4cGVjdHMgYSBiYWNrZ3JvdW5kIGxheWVyLlwiKVxuXG5cdGlmIG5vdCAoZmlsbCBpbnN0YW5jZW9mIExheWVyKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIkF1ZGlvTGF5ZXIgZXhwZWN0cyBhIGZpbGwgbGF5ZXIuXCIpXG5cblx0aWYgbm90IChrbm9iIGluc3RhbmNlb2YgTGF5ZXIpXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQXVkaW9MYXllciBleHBlY3RzIGEga25vYiBsYXllci5cIilcblxuXHRzbGlkZXIgPSBpbnN0YW5jZVxuXG5cdHNsaWRlci5jbGlwID0gZmFsc2Vcblx0c2xpZGVyLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIlxuXHRzbGlkZXIuZnJhbWUgPSBiYWNrZ3JvdW5kLmZyYW1lXG5cdHNsaWRlci5wYXJlbnQgPSBiYWNrZ3JvdW5kLnBhcmVudFxuXHRzbGlkZXIuaW5kZXggPSBiYWNrZ3JvdW5kLmluZGV4XG5cblx0c2xpZGVyLmFkZEJhY2tncm91bmRMYXllcihiYWNrZ3JvdW5kKVxuXHRzbGlkZXIuYWRkRmlsbExheWVyKGZpbGwpXG5cdHNsaWRlci5hZGRLbm9iTGF5ZXIoa25vYilcblxuXHRzbGlkZXIuX3VwZGF0ZUZyYW1lKClcblx0c2xpZGVyLl91cGRhdGVLbm9iKClcblx0c2xpZGVyLl91cGRhdGVGaWxsKClcblx0c2xpZGVyLl9rbm9iRGlkTW92ZSgpXG5cblx0YmFja2dyb3VuZC5vblRhcFN0YXJ0IC0+XG5cdFx0c2xpZGVyLl90b3VjaFN0YXJ0KGV2ZW50KVxuXG5cdHNsaWRlci5vbiBcImNoYW5nZTpmcmFtZVwiLCAtPlxuXHRcdHNsaWRlci5fdXBkYXRlRnJhbWUoKVxuXG5cdGtub2Iub24gXCJjaGFuZ2U6c2l6ZVwiLCAtPlxuXHRcdHNsaWRlci5fdXBkYXRlS25vYigpXG5cblx0a25vYi5vbiBcImNoYW5nZTpmcmFtZVwiLCAtPlxuXHRcdHNsaWRlci5fdXBkYXRlRmlsbCgpXG5cdFx0c2xpZGVyLl9rbm9iRGlkTW92ZSgpXG5cblx0c2xpZGVyLm9uIFwiY2hhbmdlOm1heFwiLCAtPlxuXHRcdHNsaWRlci5fdXBkYXRlRnJhbWUoKVxuXHRcdHNsaWRlci5fdXBkYXRlS25vYigpXG5cdFx0c2xpZGVyLl91cGRhdGVGaWxsKClcblx0XHRzbGlkZXIuX2tub2JEaWRNb3ZlKClcblxuXHRyZXR1cm4gc2xpZGVyIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBRUFBO0FESUEsT0FBTyxDQUFDLEtBQVIsR0FBZ0I7O0FBRWhCLE9BQU8sQ0FBQyxVQUFSLEdBQXFCLFNBQUE7U0FDcEIsS0FBQSxDQUFNLHVCQUFOO0FBRG9COztBQUdyQixPQUFPLENBQUMsT0FBUixHQUFrQixDQUFDLENBQUQsRUFBSSxD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
