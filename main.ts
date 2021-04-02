input.onButtonPressed(Button.A, function () {
    step = 0
})
input.onGesture(Gesture.Shake, function () {
    step += 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    soundExpression.giggle.playUntilDone()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (input.compassHeading()))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.temperature()))
})
let step = 0
basic.showString("Hello Jolie!")
let now = input.runningTime()
basic.showNumber(now)
basic.forever(function () {
    basic.showNumber(step)
})
