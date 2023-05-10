let strip: neopixel.Strip = null
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 10) {
        strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        maqueen.motorStop(maqueen.Motors.All)
    } else if (IR.IR_read() == 19) {
        strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
    } else {
        strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        maqueen.motorStop(maqueen.Motors.All)
    }
})
basic.forever(function () {
    basic.showNumber(IR.IR_read())
})
