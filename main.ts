input.onButtonPressed(Button.A, function () {
    num += 1
    basic.showNumber(num)
})
input.onGesture(Gesture.TiltLeft, function () {
    pic.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.ScreenUp, function () {
    pic.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.ScreenDown, function () {
    pic.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    num += -1
    basic.showNumber(num)
})
input.onGesture(Gesture.TiltRight, function () {
    pic.change(LedSpriteProperty.X, 1)
})
let pic: game.LedSprite = null
let num = 0
basic.showIcon(IconNames.Skull)
num = 1
basic.showNumber(num)
pic = game.createSprite(2, 2)
basic.forever(function () {
	
})
