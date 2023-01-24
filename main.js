// The following exercises needs to be done on 2 ways: 1) using classes, 2) using constructor functions.

// 1. 
// a)Create a Car class with properties (brand, model, motion) and methods (check motion, accelerate, break).
// Check motion method should check the speed and returns if the car are in move or not (speed is greater than zero). Accelerate method should increase the speed for some number we provide.
// Break method should decrease the speed for the number we provided (pay attention if the speed is negative number after decreasing).
// b) Add the status method that displays all current data for the car (model, brand, motion state, speed => something like "Ford Mondeo is running at 150km/h, car is moving").
// c) Add a new method to stop the car immediately (set the speed to 0). It doesn't need parameters.
// d) Create a 3 car objects and test it!
console.log("/////////////1.zadak/klase///////////");
class Car{
  constructor(brand, model, motion) {
    this.brand = brand;
    this.model = model;
    this.motion = motion;
  }

  checkMotion() {
    let motion = 'Car is not in motion';
    if(this.motion > 0){
      motion = 'Car is in motion'}
    return motion;
  }

  accelerate(speed) {
    return this.motion += speed;
  }

  break(speed) {
    this.motion -= speed;
    if (this.motion < 0) {
      this.motion = 0;
    }
  }

  status() {
    let status = `${this.brand} ${this.model} is running at ${this.motion}km/h`;
    if(this.motion > 0){
      status += ", car is moving.";
    }else{
      status += ", car is not moving.";
    }
    return status;
  }

  stop() {
    return this.motion = 0;
  }
}

let car1 = new Car('Audi', 'A4', 90);
let car2 = new Car('Land Rover', 'Evoque', 60);
let car3 = new Car('Peugeot', '206', 65);

console.log(car1.status());
console.log(car3.accelerate(78));

console.log("/////////////1.zadak/constructor functions////////////////");

function Car123(brand, model, motion){
  this.brand = brand;
  this.model = model;
  this.motion = motion;
}
Car123.prototype.checkMotion123 = function() {
  let motion = 'Car is not in motion';
    if(this.motion > 0){
      motion = 'Car is in motion'}
    return motion;
};
Car123.prototype.accelerate123 = function (speed) {
  return this.motion += speed;
}
Car123.prototype.break123 = function (speed) {
  this.motion -= speed;
  if (this.motion < 0) {
    this.motion = 0;
  }
}
Car123.prototype.status123 = function () {
  let status = `${this.brand} ${this.model} is running at ${this.motion}km/h`;
    if(this.motion > 0){
      status += ", car is moving.";
    }else{
      status += ", car is not moving.";
    }
    return status;
}
Car123.prototype.stop123 = function () {
  return this.motion = 0;
}
let car1231 = new Car123('Audi', 'A4', 90);
let car1232 = new Car123('Land Rover', 'Evoque', 60);
let car1233 = new Car123('Peugeot', '206', 65);

console.log(car1231.status123());
console.log(car1233.accelerate123(78))

// 2.
// a)Create a TV class with properties like brand, channel and volume. Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// b) Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// c) Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// d) Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
// e) It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".
// f) Create a TV object and test it!

console.log("/////////////2.zadak/klase///////////");
class TV {
  constructor(brand) {
    this.brand = brand;
    this.channel = 1;
    this.volume = 50;
    this.reset =  function (){
      this.channel = 1;
      this.volume = 50;
      return this.channel, this.volume;
    }
  }
  increase_volume() {
    if (this.volume < 100) {
      return this.volume++;
    } else {
      console.log("Volume already at maximum.");
    }
  }
  decrease_volume() {
    if (this.volume > 0) {
      return this.volume--;
    } else {
      console.log("Volume already at minimum.");
    }
  }
  set_channel(channel) {
    if (channel > 0 && channel <= 50) {
      return this.channel = channel;
    } else {
      console.log("Invalid channel. TV only has 50 channels.");
    }
  }

  status() {
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}.`;
  }
}
let tv = new TV("Panasonic");
tv.set_channel(8);
tv.increase_volume();
tv.increase_volume();
tv.increase_volume();
console.log(tv.status());

console.log("/////////////2.zadak/constructor functions////////////////");
function TV123(brand) {
  this.brand = brand;
    this.channel = 1;
    this.volume = 50;
    this.reset =  function reset() {
      this.channel = 1;
      this.volume = 50;
    }
}
TV123.prototype.increase_volume123 = function () {
  if (this.volume < 100) {
    return this.volume++;
  } else {
    console.log("Volume already at maximum.");
  }
}
TV123.prototype.decrease_volume123 = function () {
  if (this.volume > 0) {
    return this.volume--;
  } else {
    console.log("Volume already at minimum.");
  }
}
TV123.prototype.set_channel123 = function (channel) {
  if (channel > 0 && channel <= 50) {
    return this.channel = channel;
  } else {
    console.log("Invalid channel. TV only has 50 channels.");
  }
}
TV123.prototype.status123 = function () {
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}.`;
};

let tv123 = new TV123("Panasonic");
tv123.set_channel123(8);
tv123.increase_volume123();
tv123.increase_volume123();
tv123.increase_volume123();
console.log(tv123.status123());