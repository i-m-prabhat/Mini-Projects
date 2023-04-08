var h = 0
var m = 0
var s = 0
var stopwatch = () =>
{
    var hh = document.querySelector("#h")
    var mm = document.querySelector("#m")
    var ss = document.querySelector("#s")
    s++
    if (s == 60)
    {
        s = 0
        m++
        if (m == 60)
        {
            m = 0
            h++
        }
    }
    if (h < 10)
    {
        hh.innerText = "0" + h
    }
    else
        hh.innerText = h
    if (m < 10)
    {
        mm.innerText = "0" + m
    }
    else
        mm.innerText = m
    if (s < 10)
    {
        ss.innerText = "0" + s
    }
    else
        ss.innerText = s
}
var demo = (x) =>
{
    if (x.value == "START")
    {
        x.value = "STOP"
        // x.style.background = "RED"
        // x.style.color = "white"
        y = window.setInterval(stopwatch, 1000)
    }
    else
    {
        x.value = "START"
        clearInterval(y)
    }
}