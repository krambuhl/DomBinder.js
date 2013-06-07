(function(doc, win) {
    var root = this;

    var Separator = function () {
        this.bindings = {};
    }

    this.Separator = this.Sep = new Separator(); // register helper to window
                                // remove if you want

    Separator.prototype.register = function (name, func) {
        this.bindings[name] = func;
    }    
    
    Separator.prototype.unregister = function (name) {
        if (this.bindings[name]) delete this.bindings[name];
    }

    Separator.prototype.set = function () {
        var args = Array.prototype.slice.call(arguments),
            func = args.shift();

        this.bindings[func].apply(this, args)
    }

}).call(this, document, window);
