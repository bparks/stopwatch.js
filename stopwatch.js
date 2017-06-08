Stopwatch = function () {
    if (!this.constructor || this.constructor != Stopwatch) {
        return new Stopwatch();
    }
    this.laps = [];
}

Stopwatch.prototype.start = function () {
    if (this.begin) {
        this.lap();
    } else {
        this.begin = new Date();
    }
}

Stopwatch.prototype.lap = function (lapName) {
    this.begin = this.begin || new Date();
    var offset = new Date() - this.begin;
    lapName = lapName || "Lap " + (this.laps.length + 1);
    this.laps.push([offset, lapName]);
}

Stopwatch.prototype.toString = function () {
    return this.laps.map(function (item) {
        return item[1] + ": " + item[0] + "ms";
    }).join("\r\n");
}

Stopwatch.prototype.valueOf = function () {
    return this.toString();
}

if (module && module.exports) {
    module.exports = Stopwatch;
}
