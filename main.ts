let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 10) {
        maqueen.motorStop(maqueen.Motors.All)
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else if (IR.IR_read() == 16) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (IR.IR_read() == 27) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (IR.IR_read() == 31) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (IR.IR_read() == 10) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (IR.IR_read() == 8) {
        maqueen.motorStop(maqueen.Motors.All)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (IR.IR_read() == 29) {
        music.playTone(262, music.beat(BeatFraction.Eighth))
    }
})
basic.forever(function () {
    basic.showNumber(IR.IR_read())
})
