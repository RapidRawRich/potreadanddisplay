input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P4))
    basic.pause(1000)
    led.enable(false)
})
let potValue = 0
led.enable(false)
basic.forever(function () {
    potValue = pins.analogReadPin(AnalogPin.P4)
    pins.servoWritePin(AnalogPin.P3, pins.map(
    potValue,
    0,
    1023,
    0,
    180
    ))
})
