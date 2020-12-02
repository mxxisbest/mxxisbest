input.onButtonPressed(Button.A, function () {
    music.setVolume(10)
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.ForeverInBackground)
    for (let index = 0; index < 1; index++) {
        basic.showString("M")
    }
    for (let index = 0; index < 2; index++) {
        basic.showString("x")
    }
    for (let index = 0; index < 1; index++) {
        basic.showString("I")
    }
    for (let index = 0; index < 1; index++) {
        basic.showString("S")
    }
    for (let index = 0; index < 1; index++) {
        basic.showString("B")
    }
    for (let index = 0; index < 1; index++) {
        basic.showString("E")
    }
    for (let index = 0; index < 1; index++) {
        basic.showString("S")
    }
    for (let index = 0; index < 1; index++) {
        basic.showString("T")
    }
    music.stopAllSounds()
})
input.onButtonPressed(Button.AB, function () {
    music.setVolume(10)
    soundExpression.mysterious.play()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
music.playTone(587, music.beat(BeatFraction.Whole))
