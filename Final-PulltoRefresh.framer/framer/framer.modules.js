require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"LottieLayer":[function(require,module,exports){

/*
LottieLayer
-
Implementation of Hernan Torrisi & AirBnb "Lottie-Web" for Framer.
by @72mena
 */
var insertScript,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

insertScript = function(localScript, webScript, name) {
  var e, head, lib, script;
  if (name == null) {
    name = 'JavaScript Library';
  }
  try {
    lib = Utils.domLoadDataSync(localScript);
    console.log("%c" + name + " Successfully Included Locally", "background: #DDFFE3; color: #007814");
  } catch (error) {
    e = error;
    try {
      lib = Utils.domLoadDataSync(webScript);
      console.log("%c" + name + " Successfully Included from Web", "background: #DDFFE3; color: #007814");
    } catch (error) {
      e = error;
      throw Error("Sorry, I couldn't load " + name);
    }
  }
  script = document.createElement("script");
  script.type = "text/javascript";
  script.innerHTML = lib;
  head = document.getElementsByTagName("head")[0];
  head.appendChild(script);
  return script;
};

insertScript("modules/lottie.min.js", "https://raw.githubusercontent.com/airbnb/lottie-web/master/build/player/lottie.min.js", "lottie-web");

exports.LottieLayer = (function(superClass) {
  extend(LottieLayer, superClass);

  LottieLayer.define("speed", {
    get: function() {
      return this._properties["speed"];
    },
    set: function(value) {
      this._properties["speed"] = value;
      if (this.built) {
        this.setSpeed(value);
      }
      return this.emit("change:speed");
    }
  });

  LottieLayer.define("direction", {
    get: function() {
      return this._properties["direction"];
    },
    set: function(value) {
      this._properties["direction"] = value;
      if (this.built) {
        this.setDirection(value);
      }
      return this.emit("change:direction");
    }
  });

  LottieLayer.define("path", {
    get: function() {
      return this._properties["path"];
    },
    set: function(value) {
      this._properties["path"] = value;
      if (this.built) {
        this.setSettings();
      }
      return this.emit("change:path");
    }
  });

  function LottieLayer(options) {
    var base, base1, base2, base3, base4, base5, base6;
    this.options = options != null ? options : {};
    if ((base = this.options).backgroundColor == null) {
      base.backgroundColor = null;
    }
    if ((base1 = this.options).path == null) {
      base1.path = null;
    }
    if ((base2 = this.options).autoplay == null) {
      base2.autoplay = true;
    }
    if ((base3 = this.options).loop == null) {
      base3.loop = true;
    }
    if ((base4 = this.options).speed == null) {
      base4.speed = 1;
    }
    if ((base5 = this.options).direction == null) {
      base5.direction = 1;
    }
    if ((base6 = this.options).renderer == null) {
      base6.renderer = "svg";
    }
    LottieLayer.__super__.constructor.call(this, this.options);
    if (this.options.path === null) {
      print("From LottieLayer: Setting a path to your json file is required.");
    }
    if (this.name === "") {
      print("From LottieLayer: The 'name' attribute is required.");
    }
    this.autoplay = this.options.autoplay;
    this.loop = this.options.loop;
    this.renderer = this.options.renderer;
    this.built = false;
    this._animationLayer = null;
    this.build();
  }

  LottieLayer.prototype.build = function() {
    this.html = '<div id=' + ("" + this.name) + '></div>';
    this.setSettings();
    return this.built = true;
  };

  LottieLayer.prototype.setSettings = function() {
    var _container, lottieSettings;
    _container = document.getElementById(this.name);
    _container.innerHTML = "";
    lottieSettings = {
      container: _container,
      path: this.path,
      renderer: this.renderer,
      autoplay: this.autoplay,
      loop: this.loop
    };
    this._animationLayer = lottie.loadAnimation(lottieSettings);
    this.setSpeed();
    return this.setDirection();
  };

  LottieLayer.prototype.play = function() {
    return this._animationLayer.play();
  };

  LottieLayer.prototype.stop = function() {
    return this._animationLayer.stop();
  };

  LottieLayer.prototype.pause = function() {
    return this._animationLayer.pause();
  };

  LottieLayer.prototype.goToAndPlay = function(value, isFrame) {
    if (isFrame == null) {
      isFrame = true;
    }
    return this._animationLayer.goToAndPlay(value, isFrame);
  };

  LottieLayer.prototype.goToAndStop = function(value, isFrame) {
    if (isFrame == null) {
      isFrame = true;
    }
    return this._animationLayer.goToAndStop(value, isFrame);
  };

  LottieLayer.prototype.playSegments = function(segments, forceFlag) {
    if (forceFlag == null) {
      forceFlag = true;
    }
    return this._animationLayer.playSegments(segments, forceFlag);
  };

  LottieLayer.prototype.setSpeed = function(speed) {
    if (speed == null) {
      speed = this.speed;
    }
    return this._animationLayer.setSpeed(speed);
  };

  LottieLayer.prototype.setDirection = function(direction) {
    if (direction == null) {
      direction = this.direction;
    }
    return this._animationLayer.setDirection(direction);
  };

  LottieLayer.prototype.onComplete = function(callback) {
    if (this.loop) {
      return this._animationLayer.addEventListener("loopComplete", callback);
    } else {
      return this._animationLayer.addEventListener("complete", callback);
    }
  };

  return LottieLayer;

})(Layer);


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2xlZXN1cmUvRG9jdW1lbnRzL0dpdEh1Yi9NZWlwaWFuL01laXBpYW4vRmluYWwtUHVsbHRvUmVmcmVzaC5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9sZWVzdXJlL0RvY3VtZW50cy9HaXRIdWIvTWVpcGlhbi9NZWlwaWFuL0ZpbmFsLVB1bGx0b1JlZnJlc2guZnJhbWVyL21vZHVsZXMvTG90dGllTGF5ZXIuY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIiwiIyMjXG5Mb3R0aWVMYXllclxuLVxuSW1wbGVtZW50YXRpb24gb2YgSGVybmFuIFRvcnJpc2kgJiBBaXJCbmIgXCJMb3R0aWUtV2ViXCIgZm9yIEZyYW1lci5cbmJ5IEA3Mm1lbmFcbiMjI1xuXG4jIElOQ0xVREUgTElCUkFSWSDigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJRcbmluc2VydFNjcmlwdCA9IChsb2NhbFNjcmlwdCwgd2ViU2NyaXB0LCBuYW1lID0gJ0phdmFTY3JpcHQgTGlicmFyeScpIC0+XG5cdHRyeVxuXHRcdGxpYiA9IFV0aWxzLmRvbUxvYWREYXRhU3luYyBsb2NhbFNjcmlwdFxuXHRcdGNvbnNvbGUubG9nIFwiJWMje25hbWV9IFN1Y2Nlc3NmdWxseSBJbmNsdWRlZCBMb2NhbGx5XCIsIFwiYmFja2dyb3VuZDogI0RERkZFMzsgY29sb3I6ICMwMDc4MTRcIlxuXHRjYXRjaCBlXG5cdFx0dHJ5XG5cdFx0XHRsaWIgPSBVdGlscy5kb21Mb2FkRGF0YVN5bmMgd2ViU2NyaXB0XG5cdFx0XHRjb25zb2xlLmxvZyBcIiVjI3tuYW1lfSBTdWNjZXNzZnVsbHkgSW5jbHVkZWQgZnJvbSBXZWJcIiwgXCJiYWNrZ3JvdW5kOiAjRERGRkUzOyBjb2xvcjogIzAwNzgxNFwiXG5cdFx0Y2F0Y2ggZVxuXHRcdFx0dGhyb3cgRXJyb3IoXCJTb3JyeSwgSSBjb3VsZG4ndCBsb2FkICN7bmFtZX1cIilcblxuXG5cdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgXCJzY3JpcHRcIlxuXHRzY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCJcblx0c2NyaXB0LmlubmVySFRNTCA9IGxpYlxuXG5cdGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF1cblx0aGVhZC5hcHBlbmRDaGlsZCBzY3JpcHRcblxuXHRzY3JpcHRcblxuaW5zZXJ0U2NyaXB0KFwibW9kdWxlcy9sb3R0aWUubWluLmpzXCIsIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FpcmJuYi9sb3R0aWUtd2ViL21hc3Rlci9idWlsZC9wbGF5ZXIvbG90dGllLm1pbi5qc1wiLCBcImxvdHRpZS13ZWJcIilcblxuXG4jIExPVFRJRSBMQVlFUiDigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJRcbmNsYXNzIGV4cG9ydHMuTG90dGllTGF5ZXIgZXh0ZW5kcyBMYXllclxuXG5cdEBkZWZpbmUgXCJzcGVlZFwiLFxuXHRcdGdldDogLT4gQF9wcm9wZXJ0aWVzW1wic3BlZWRcIl1cblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdEBfcHJvcGVydGllc1tcInNwZWVkXCJdID0gdmFsdWVcblx0XHRcdEBzZXRTcGVlZCh2YWx1ZSkgaWYgQGJ1aWx0XG5cdFx0XHRAZW1pdCBcImNoYW5nZTpzcGVlZFwiXG5cblx0QGRlZmluZSBcImRpcmVjdGlvblwiLFxuXHRcdGdldDogLT4gQF9wcm9wZXJ0aWVzW1wiZGlyZWN0aW9uXCJdXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAX3Byb3BlcnRpZXNbXCJkaXJlY3Rpb25cIl0gPSB2YWx1ZVxuXHRcdFx0QHNldERpcmVjdGlvbih2YWx1ZSkgaWYgQGJ1aWx0XG5cdFx0XHRAZW1pdCBcImNoYW5nZTpkaXJlY3Rpb25cIlxuXG5cdEBkZWZpbmUgXCJwYXRoXCIsXG5cdFx0Z2V0OiAtPiBAX3Byb3BlcnRpZXNbXCJwYXRoXCJdXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAX3Byb3BlcnRpZXNbXCJwYXRoXCJdID0gdmFsdWVcblx0XHRcdEBzZXRTZXR0aW5ncygpIGlmIEBidWlsdFxuXHRcdFx0QGVtaXQgXCJjaGFuZ2U6cGF0aFwiXG5cblxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXHRcdCMgRGVmYXVsdHNcblx0XHRAb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPz0gbnVsbFxuXHRcdEBvcHRpb25zLnBhdGggPz0gbnVsbFxuXHRcdEBvcHRpb25zLmF1dG9wbGF5ID89IHRydWVcblx0XHRAb3B0aW9ucy5sb29wID89IHRydWVcblx0XHRAb3B0aW9ucy5zcGVlZCA/PSAxXG5cdFx0QG9wdGlvbnMuZGlyZWN0aW9uID89IDFcblx0XHRAb3B0aW9ucy5yZW5kZXJlciA/PSBcInN2Z1wiXG5cblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cdFx0aWYgQG9wdGlvbnMucGF0aCBpcyBudWxsXG5cdFx0XHRwcmludCBcIkZyb20gTG90dGllTGF5ZXI6IFNldHRpbmcgYSBwYXRoIHRvIHlvdXIganNvbiBmaWxlIGlzIHJlcXVpcmVkLlwiXG5cdFx0aWYgQG5hbWUgaXMgXCJcIlxuXHRcdFx0cHJpbnQgXCJGcm9tIExvdHRpZUxheWVyOiBUaGUgJ25hbWUnIGF0dHJpYnV0ZSBpcyByZXF1aXJlZC5cIlxuXG5cdFx0I1Nob3J0Y3V0c1xuXHRcdEBhdXRvcGxheSA9IEBvcHRpb25zLmF1dG9wbGF5XG5cdFx0QGxvb3AgPSBAb3B0aW9ucy5sb29wXG5cdFx0QHJlbmRlcmVyID0gQG9wdGlvbnMucmVuZGVyZXJcblxuXHRcdCNWYXJzXG5cdFx0QGJ1aWx0ID0gZmFsc2Vcblx0XHRAX2FuaW1hdGlvbkxheWVyID0gbnVsbFxuXG5cdFx0I1J1blxuXHRcdEBidWlsZCgpXG5cblx0YnVpbGQ6ICgpIC0+XG5cdFx0QGh0bWwgPSAnPGRpdiBpZD0nK1wiI3tAbmFtZX1cIisnPjwvZGl2Pidcblx0XHRAc2V0U2V0dGluZ3MoKVxuXHRcdEBidWlsdCA9IHRydWVcblxuXHRzZXRTZXR0aW5nczogKCkgLT5cblx0XHRfY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQG5hbWUpXG5cdFx0X2NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiXG5cblx0XHRsb3R0aWVTZXR0aW5ncyA9XG5cdFx0XHRjb250YWluZXI6IF9jb250YWluZXIsXG5cdFx0XHRwYXRoOiBAcGF0aCxcblx0XHRcdHJlbmRlcmVyOiBAcmVuZGVyZXIsXG5cdFx0XHRhdXRvcGxheTogQGF1dG9wbGF5LFxuXHRcdFx0bG9vcDogQGxvb3BcblxuXHRcdEBfYW5pbWF0aW9uTGF5ZXIgPSBsb3R0aWUubG9hZEFuaW1hdGlvbihsb3R0aWVTZXR0aW5ncyk7XG5cdFx0QHNldFNwZWVkKClcblx0XHRAc2V0RGlyZWN0aW9uKClcblxuXHRwbGF5OiAoKSAtPlxuXHRcdEBfYW5pbWF0aW9uTGF5ZXIucGxheSgpXG5cdHN0b3A6ICgpIC0+XG5cdFx0QF9hbmltYXRpb25MYXllci5zdG9wKClcblx0cGF1c2U6ICgpIC0+XG5cdFx0QF9hbmltYXRpb25MYXllci5wYXVzZSgpXG5cdGdvVG9BbmRQbGF5OiAodmFsdWUsIGlzRnJhbWUpIC0+XG5cdFx0aXNGcmFtZSA/PSB0cnVlXG5cdFx0QF9hbmltYXRpb25MYXllci5nb1RvQW5kUGxheSh2YWx1ZSwgaXNGcmFtZSlcblx0Z29Ub0FuZFN0b3A6ICh2YWx1ZSwgaXNGcmFtZSkgLT5cblx0XHRpc0ZyYW1lID89IHRydWVcblx0XHRAX2FuaW1hdGlvbkxheWVyLmdvVG9BbmRTdG9wKHZhbHVlLCBpc0ZyYW1lKVxuXHRwbGF5U2VnbWVudHM6IChzZWdtZW50cywgZm9yY2VGbGFnKSAtPlxuXHRcdGZvcmNlRmxhZyA/PSB0cnVlXG5cdFx0QF9hbmltYXRpb25MYXllci5wbGF5U2VnbWVudHMoc2VnbWVudHMsIGZvcmNlRmxhZylcblx0c2V0U3BlZWQ6IChzcGVlZCkgLT5cblx0XHRzcGVlZCA/PSBAc3BlZWRcblx0XHRAX2FuaW1hdGlvbkxheWVyLnNldFNwZWVkKHNwZWVkKVxuXHRzZXREaXJlY3Rpb246IChkaXJlY3Rpb24pIC0+XG5cdFx0ZGlyZWN0aW9uID89IEBkaXJlY3Rpb25cblx0XHRAX2FuaW1hdGlvbkxheWVyLnNldERpcmVjdGlvbihkaXJlY3Rpb24pXG5cdG9uQ29tcGxldGU6IChjYWxsYmFjaykgLT5cblx0XHRpZiBAbG9vcFxuXHRcdFx0QF9hbmltYXRpb25MYXllci5hZGRFdmVudExpc3RlbmVyIFwibG9vcENvbXBsZXRlXCIsIGNhbGxiYWNrXG5cdFx0ZWxzZVxuXHRcdFx0QF9hbmltYXRpb25MYXllci5hZGRFdmVudExpc3RlbmVyIFwiY29tcGxldGVcIiwgY2FsbGJhY2tcbiIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBRUFBOztBREFBOzs7Ozs7QUFBQSxJQUFBLFlBQUE7RUFBQTs7O0FBUUEsWUFBQSxHQUFlLFNBQUMsV0FBRCxFQUFjLFNBQWQsRUFBeUIsSUFBekI7QUFDZCxNQUFBOztJQUR1QyxPQUFPOztBQUM5QztJQUNDLEdBQUEsR0FBTSxLQUFLLENBQUMsZUFBTixDQUFzQixXQUF0QjtJQUNOLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBQSxHQUFLLElBQUwsR0FBVSxnQ0FBdEIsRUFBdUQscUNBQXZELEVBRkQ7R0FBQSxhQUFBO0lBR007QUFDTDtNQUNDLEdBQUEsR0FBTSxLQUFLLENBQUMsZUFBTixDQUFzQixTQUF0QjtNQUNOLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBQSxHQUFLLElBQUwsR0FBVSxpQ0FBdEIsRUFBd0QscUNBQXhELEVBRkQ7S0FBQSxhQUFBO01BR007QUFDTCxZQUFNLEtBQUEsQ0FBTSx5QkFBQSxHQUEwQixJQUFoQyxFQUpQO0tBSkQ7O0VBV0EsTUFBQSxHQUFTLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCO0VBQ1QsTUFBTSxDQUFDLElBQVAsR0FBYztFQUNkLE1BQU0sQ0FBQyxTQUFQLEdBQW1CO0VBRW5CLElBQUEs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
