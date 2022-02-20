const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function (speed){
    return this.speed += speed
}

Car.prototype.brake = function () {
    return this.speed -= 5
}

let ford = new Car('F150', 15)
console.log(ford)

console.log(ford.accelerate(10));

console.log(ford.brake())

