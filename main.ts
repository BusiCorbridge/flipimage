controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -3
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    flipHorizontal()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += -3
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += 3
})
function flipHorizontal () {
    mySprite.image.flipX()
    pause(200)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += 3
})
let mySprite: Sprite = null
scene.setBackgroundColor(15)
mySprite = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ...........fffffffff............
    .........ff666666666ff..........
    ........f6666666666666f.........
    .......f666666666666666f........
    ......f66666666666666666f.......
    ......f66666666666666666f.......
    .....f6666626666626666666f......
    .....f6666626666626666666f......
    .....f6666626666626666666f......
    .....f6666626666626666666f......
    ....ff6666666666666666666ff.....
    ...f77666644444666666666677f....
    ..f7776664445444666666666777f...
    .f777f6664444544666666666f777f..
    .f777f6664444444666666666f777f..
    f8888ff664fffff466666666ff8888f.
    f8888ff66444444466666666ff8888f.
    f8888f.f664444466666666f.f8888f.
    .f8f8f..f6666666666666f..f8f8f..
    ..f.f....fc666666666cf....f.f...
    .........fcfffffffffcf..........
    .........fcf.......fcf..........
    ........ffcf.......fcff.........
    .......f333f.......f333f........
    .......f333f.......f333f........
    ........fff.........fff.........
    `, SpriteKind.Player)
