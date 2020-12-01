input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # #
        . . . . #
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # # #
        . . . # .
        . . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # .
        . . # . .
        . # # # #
        . . # . .
        . . . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . . .
        # . . . .
        # # # # .
        # . . . .
        . # . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . .
        . . . . .
        # # # . .
        . . . . .
        # . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
})
basic.forever(function () {
	
})
