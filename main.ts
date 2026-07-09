serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    if (input.rotation(Rotation.Roll) < -30) {
        serial.writeString("a")
    } else if (input.rotation(Rotation.Roll) > 30) {
        serial.writeString("d")
    }
})
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) < -30) {
        serial.writeString("w")
    } else if (input.rotation(Rotation.Pitch) > 30) {
        serial.writeString("s")
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        serial.writeString("r")
    } else if (input.buttonIsPressed(Button.A)) {
        serial.writeString("k")
    } else if (input.buttonIsPressed(Button.B)) {
        serial.writeString("b")
    }
})
