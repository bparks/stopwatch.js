function sleep(time) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
}

var Stopwatch = require('./stopwatch');

var timer1 = Stopwatch();

timer1.start();
sleep(1);
timer1.lap("The lap");
console.log(timer1.toString());

timer1 = new Stopwatch();

timer1.start();
sleep(1);
timer1.start();
sleep(1);
timer1.lap();
sleep(1);
timer1.lap();
console.log(timer1.toString());
