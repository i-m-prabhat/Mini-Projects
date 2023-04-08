let character = $("#character");
let block = $("#block");
let score = $("#score");
let gameOver = $("#gameOver");
let hr = $("hr");
let main = $("#game");
let button =$("button")
let p = $("p")
let span = $("span")
let _score = 0;

let scoreInterval = null;
block.style.animation="none"
button.addEventListener("click",()=>{
    block.style.animation="block 2s 1s linear infinite"

    document.addEventListener("keyup", (event) =>
    {
        if (event.keyCode != 38) return;
        if (!character.classList.contains("animate"))
        {
            character.classList.add("animate");
        }
        setTimeout(() =>
        {
            character.classList.remove("animate");
        }, 500)
    })
    let checkGameOver = setInterval(()=>{
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
        if (blockLeft < 300 && blockLeft > 200 && characterTop >= 200) {
            gameOver.classList.add("show");
            hr.style.display="none";
            span.style.display="none";
            p.style.display="block";
            button.style.display="none";
            main.style.border="none"
            clearInterval(scoreInterval);
            character.remove();
            block.remove()
        }
    },10)
    
    setTimeout(()=>{
    scoreInterval=setInterval(()=>{
        _score++;
        score.innerHTML = _score;
    },100)
},1000)

})
function $(element)
{
    return document.querySelector(element);
}