/**
 * @summary Some boilerplate code to make the class inheritance works
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p] }
        return extendStatics(d, b)
    }
    return function (d, b) {
        extendStatics(d, b)
        function __() { this.constructor = d }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __())
    }
})()

/**
 * @summary Classes to be instantiated by the Factory Method
 */
var Jet = (function () {
    function Jet(speed) { this.speed = speed }
    Jet.prototype.getFlyingSpeed = function () { return this.speed }
    return Jet
}())

var Boeing = (function () {
    function Boeing(speed) { this.speed = speed }
    Boeing.prototype.getFlyingSpeed = function () { return this.speed }
    return Boeing
}())

/**
 * @summary Abstract class that uses the factory method (client code)
 */
var Flight = (function () {
    function Flight(destination) { this.destination = destination }
    Flight.prototype.start = function () {
        console.log("Starting flight to " + this.destination + ".")
        console.log('Starting takeoff.')
        var airplane = this.factoryMethod()
        console.log("Flying speed: " + airplane.getFlyingSpeed() + " m/s.")
        console.log('Starting landing.')
        console.log('Well done! We arrived.')
    }
    return Flight
}())

/**
 * @summary Concrete classes that defines the Factory Method
 */
var FastFlight = (function (_super) {
    __extends(FastFlight, _super)
    function FastFlight() { return _super !== null && _super.apply(this, arguments) || this }
    FastFlight.prototype.factoryMethod = function () {
        return new Jet(100) 
    }
    return FastFlight
}(Flight))

var SlowFlight = (function (_super) {
    __extends(SlowFlight, _super)
    function SlowFlight() { return _super !== null && _super.apply(this, arguments) || this }
    SlowFlight.prototype.factoryMethod = function () {
        return new Boeing(42) 
    }
    return SlowFlight
}(Flight))

/**
 * @summary Application class that runs the code
 */
var Application = (function () {
    function Application(flightSpeed, destination) {
        this.flightSpeed = flightSpeed
        this.destination = destination
    }
    Application.prototype.run = function () {
        var flight
        if (this.flightSpeed) { flight = new FastFlight(this.destination) }
        else { flight = new SlowFlight(this.destination) }
        flight.start()
    }
    return Application
}())

