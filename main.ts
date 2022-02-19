input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(1, 10))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.pause(500)
    signo = randint(0, 1)
    if (signo == 0) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
    basic.pause(1000)
    basic.showNumber(randint(1, 10))
})
let signo = 0
basic.showString("A = NATURALES")
basic.pause(500)
basic.showString("B = ENTEROS")
