let btns=document.querySelectorAll("button")
let user0=true
let count=1
let drawCall=true
let winnercall=document.querySelector("#h1win")  
let resetbtn=document.querySelector(".reset")
let winning_match=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

]
btns.forEach((e)=>{
    e.addEventListener("click",()=>{
        if(user0){
            e.textContent="O"
            user0=false
        }
        else{
            e.textContent="X"
            user0=true
        }
        e.disabled=true
        checkWin();
        count++;
    })
})
function disable_btn(){
    btns.forEach((e)=>{
        e.disabled=true
    })
}
// check for the win
function checkWin(){
    for(let pattern of winning_match){
        let pos1=btns[pattern[0]].innerHTML;
        let pos2=btns[pattern[1]].innerHTML;
        let pos3=btns[pattern[2]].innerHTML;
        if(pos1!==""&&pos2!==""&&pos3!==""){
            if(pos1==pos2 && pos2==pos3){
                console.log(`${pos1} wins`)
                winnerIS(pos1)
                disable_btn()
                drawCall=false
            }
        }
    }
    if(count==9){
        drawFn()
    }
}
function drawFn(){
    if(drawCall){
        console.log("it is a draw")
    }
    else{
        console.log("yeah!! you win")
    }
}
function winnerIS(win){
    winnercall.innerHTML=`the winner is ${win}`
    resetbtn.classList.add("hidden")
    
}
resetbtn.addEventListener("click",()=>{
    btns.forEach((e)=>{
        e.disabled=false
        e.innerHTML=""
    })
})


