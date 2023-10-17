input.onButtonPressed(Button.A, function () {
    mode = 1
})
function randomColor () {
    activeB = randint(0, 155)
    ActiveG = randint(0, 255)
    activeR = randint(0, 200)
    randomcolor = neopixel.rgb(activeR, ActiveG, activeB)
}
input.onButtonPressed(Button.B, function () {
    mode = 2
})
let randomcolor = 0
let activeR = 0
let ActiveG = 0
let activeB = 0
let mode = 0
mode = 1
let strip = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB)
let strip2 = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
let strip3 = neopixel.create(DigitalPin.P2, 1, NeoPixelMode.RGB)
basic.forever(function () {
    if (mode == 1) {
        randomColor()
        strip.showColor(randomcolor)
        randomColor()
        strip2.showColor(randomcolor)
        randomColor()
        strip3.showColor(randomcolor)
        basic.pause(1000)
    }
    if (mode == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        strip2.showColor(neopixel.colors(NeoPixelColors.Purple))
        strip3.showColor(neopixel.colors(NeoPixelColors.Indigo))
    }
})
