radio.onReceivedNumber(function (receivedNumber) {
    try {
        if (receivedNumber == predef_code % 7) {
            pins.servoWritePin(AnalogPin.P16, 90)
            basic.clearScreen()
            basic.showString(" HACKED ")
        }
        
        if (receivedNumber == predef_code) {
            pins.servoWritePin(AnalogPin.P16, 0)
            basic.clearScreen()
            basic.showString(" start ")
        }
        
    }
    catch (_) {
        console.log("100")
    }
})
// initalize servo to 0 degrees intially
function remote_setup () {
    try {
        radio.setGroup(10)
        pins.servoWritePin(AnalogPin.P16, 0)
    }
    catch (_2) {
        console.log("100")
    }
}
let predef_code: number;
let restart_prevention: number;
try {
    predef_code = 0
    restart_prevention = 0
    predef_code = 246
    remote_setup()
    basic.pause(1000)
}
catch (_3) {
    console.log("100")
}
basic.forever(function () {
    let restart_prevention2: any;
restart_prevention2 += 1
    restart_prevention2 = -1
})
