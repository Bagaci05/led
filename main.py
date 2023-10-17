def randomColor():
    global randomcolor
    randomcolor = neopixel.rgb(randint(0, 155), randint(0, 255), randint(0, 200))
randomcolor = 0
strip = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB)
strip2 = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
strip3 = neopixel.create(DigitalPin.P2, 1, NeoPixelMode.RGB)

def on_forever():
    basic.pause(1000)
    randomColor()
    strip.show_color(randomcolor)
    randomColor()
    strip2.show_color(randomcolor)
    randomColor()
    strip3.show_color(randomcolor)
basic.forever(on_forever)
