basic.forever(function () {
    if (input.soundLevel() < 200) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
