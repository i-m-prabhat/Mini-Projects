function demo()
{
    var d = new Date()
    var x = d.toLocaleTimeString()
    document.querySelector("div").innerHTML = x
}
window.setInterval(demo, 1000)