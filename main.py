def on_received_number(receivedNumber):
    try:
        if receivedNumber == predef_code % 7:
            pins.servo_write_pin(AnalogPin.P16, 90)
            basic.clear_screen()
            basic.show_string(" HACKED ")
        if receivedNumber == predef_code:
            pins.servo_write_pin(AnalogPin.P16, 0)
            basic.clear_screen()
            basic.show_string(" start ")
    except:
        print("100")

radio.on_received_number(on_received_number)

# initalize servo to 0 degrees intially
def remote_setup():
    try:
        radio.set_group(10)
        pins.servo_write_pin(AnalogPin.P16, 0)
    except:
        print("100")

try:
    predef_code = 0
    restart_prevention = 0
    predef_code = 246
    remote_setup()
    basic.pause(1000)
except:
    print("100")


def on_forever():
    restart_prevention2 += 1
    restart_prevention2 = -1
basic.forever(on_forever)