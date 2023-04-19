joystickbit.initJoystickBit()
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    radio.sendValue("motor 1", joystickbit.getRockerValue(joystickbit.rockerType.Y))
    radio.sendValue("motor 2", joystickbit.getRockerValue(joystickbit.rockerType.Y))
})
