# Dependency Injector
Dependency Injector is a library based on javascript.

This implementation provides you an opportunity to use a common scope as well as a common instance of imported dependencies.

### Example of using

At first define two objects:
```javascript
var service = {
  name: 'Service'
}

var router = {
  name: 'Router'
}
```
Then register these objects:
```javascript
injector.register([service, router], ['service', 'router']);
```

And finally just use it:
```javascript
var doSomething1 = injector.resolve('service', 'router', function(s, r, other) {
  console.log(s.name);  // Service
  console.log(r.name);  // Router
  console.log(other);   // Other

  s.name = 'New Service';
  r.name = 'New Router';

  this.extra = 'Some extra value';
});

doSomething1('Other');
```

And the second example to show the result of using a common scope:
```javascript
var doSomething2 = injector.resolve('router', 'service', function(s, r, other) {
  console.log(s.name);      // New Service
  console.log(r.name);      // New Router
  console.log(other);       // New Other
  console.log(this.extra);  // Some extra value
});

doSomething2('New Other');
```

That's it. Feel free to use it ;)