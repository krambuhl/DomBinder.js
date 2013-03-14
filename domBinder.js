(function(doc, win) {
    var root = this;

    var DomBinder = function DomBinder () {
        this.bindings = {};
        this.templates = {};
    }

    this.dom = new DomBinder(); // register helper to window
                                // remove if you want

    DomBinder.prototype.register = function (name, func) {
        this.bindings[name] = func;
    }

    DomBinder.prototype.set = function () {
        var args = Array.prototype.slice.call(arguments),
            func = args.shift();

        this.bindings[func].apply(this, args)
    }

})(document, window)