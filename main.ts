for (let index = 0; index < 100; index++) {
    led.plot(2, 2)
    led.plot(1, 1)
    led.plot(3, 1)
    led.plot(3, 2)
    led.plot(1, 2)
    led.plot(2, 3)
    led.plot(1, 0)
    led.plot(0, 1)
    led.plot(0, 2)
    led.plot(1, 3)
    led.plot(3, 3)
    led.plot(3, 0)
    led.plot(4, 1)
    led.plot(4, 2)
    led.plot(2, 1)
    led.plot(2, 4)
    basic.pause(500)
    led.unplot(2, 2)
    led.unplot(1, 1)
    led.unplot(3, 1)
    led.unplot(3, 2)
    led.unplot(1, 2)
    led.unplot(2, 3)
    basic.pause(500)
    led.unplot(0, 0)
    led.unplot(0, 0)
    led.unplot(0, 0)
    led.unplot(0, 0)
    led.unplot(0, 0)
    led.unplot(0, 0)
    led.unplot(0, 0)
    led.unplot(0, 0)
    led.unplot(0, 0)
    basic.pause(500)
}
