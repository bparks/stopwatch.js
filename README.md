stopwatch.js
============

stopwatch.js is a very simple javascript object that provides a stopwatch.

Create a stopwatch by calling the constructor:

```js
var stopwatch = new Stopwatch();
```
or
```js
var stopwatch = Stopwatch();
```

Start the stopwatch by calling `start()`:

```js
stopwatch.start();
```

Record the currently-elapsed time by calling `lap()`:

```js
stopwatch.lap();
```
or
```js
stopwatch.lap("A name for the lap");
```

Get the list of laps by calling `toString()` or `valueOf()`:

```js
console.log("Timer values:\r\n" + stopwatch);
```
