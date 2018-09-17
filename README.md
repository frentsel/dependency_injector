# DependencyInjector
Dependency Injector is a library based on javascript

#### Example
```javascript

var service = {
  name: 'Service'
}

var router = {
  name: 'Router'
}

injector.register([service, router], ['service', 'router']);

var doSomething1 = injector.resolve('service', 'router', function(s, r, other) {
  console.log(s.name);
  console.log(r.name);
  console.log(other);

  s.name = 'New Service';
  r.name = 'New Router';

  this.www = 'sdfsdfdsf';
});

var doSomething2 = injector.resolve('router', 'service', function(s, r, other) {
  console.log(s.name);
  console.log(r.name);
  console.log(other);
  console.log(this);
});

doSomething1('Other');
doSomething2('New Other');
```
