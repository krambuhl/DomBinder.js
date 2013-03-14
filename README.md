DomBinder is a simple interface to help seperate display logic from data source.

###Registering function to Name
Registers a function to be called later with "set" method

    DomBinder.register(name, function)

###Running Bound Functions
Calls bound functions, passing through arguments (as many as you'd like)

    DomBinder.set(name, arguments...)
