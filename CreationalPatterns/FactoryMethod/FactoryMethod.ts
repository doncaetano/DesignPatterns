/**
 * @summary Classes to be instantiated by the Factory Method
 */
interface Airplane {
  getFlyingSpeed(): number
}

class Jet implements Airplane {
  constructor(private speed:number) {}
  getFlyingSpeed(): number { return this.speed }
}

class Boeing implements Airplane {
  constructor(private speed:number) {}
  getFlyingSpeed(): number { return this.speed }
}

/**
 * @summary Abstract class that uses the factory method (client code)
 */
abstract class Flight {
  constructor(private destination:string) {}
  protected abstract factoryMethod(): Airplane
  start(): void {
    console.log(`Starting flight to ${this.destination}.`)
    console.log('Starting takeoff.')
    const airplane = this.factoryMethod()
    console.log(`Flying speed: ${airplane.getFlyingSpeed()} m/s.`)
    console.log('Starting landing.')
    console.log('Well done! We arrived.')
  }
}

/**
 * @summary Concrete classes that defines the Factory Method
 */
class FastFlight extends Flight {
  factoryMethod(): Airplane {
      return new Jet(100)
  }
}

class SlowFlight extends Flight {
  factoryMethod(): Airplane {
      return new Boeing(42)
  }
}


/**
 * @summary Application class that runs the code
 */
class Application {
  constructor(private flightSpeed: boolean, private destination:string) {}
  run(): void {
    let flight
    if(this.flightSpeed){
      flight = new FastFlight(this.destination)
    } else {
      flight = new SlowFlight(this.destination)
    }
    flight.start()
  }
}
