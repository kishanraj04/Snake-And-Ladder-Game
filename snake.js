let playerOne = document.querySelector(".one")
let playerTwo = document.querySelector(".two")
let choose = document.querySelector(".choose")
let cdiv2 = document.querySelector(".cdiv2")
let div2 = document.querySelector(".div2")

let red = document.querySelector("#red")
let blue = document.querySelector("#blue")


let img1 = document.querySelector("#valOne")
let img2 = document.querySelector("#valTwo")
let img3 = document.querySelector("#valThree")
let img4 = document.querySelector("#valFour")
let img5 = document.querySelector("#valFive")
let img6 = document.querySelector("#valSix")

let press = document.querySelector("#press")
let twoPlayer = document.querySelector(".two")

let valArray = [img1, img2, img3, img4, img5, img6]


let flag = true;
twoPlayer.addEventListener('click', () => {
    red.style.visibility = 'visible'
    blue.style.visibility = 'visible'
    let choose = document.querySelector(".choose")
    choose.style.display = 'none'

    let cdiv2 = document.querySelector(".cdiv2")
    cdiv2.style.visibility = 'visible'

})


press.addEventListener('click', () => {

    if (flag == true) {
        redFunction()
        flag = false
    }
    else {
        blueFunction()
        flag = true
    }
})


// random number
function getRandomNumber() {
    return Math.floor(Math.random() * 6);
}


let redHold = ''
let blueHold = ''
let blueCount = false;

// red
let redCheck = true
let redUpdateValue = 1;
let randomNumber = 0;
function redFunction() {

    if (blueCount == true) {
        blueHold.style.display = 'none'
    }
    press.innerText = 'red'
    press.style.backgroundColor = 'red'
    randomNumber = getRandomNumber()
    redHold = valArray[randomNumber]
    valArray[randomNumber].style.display = 'block'


    if (randomNumber == 0 && redCheck == true) {
        div2.append(red)
        redCheck = false
    }
    if (redCheck == false) {
        redUpdateValue += (randomNumber + 1)
        redUpdateDie(redUpdateValue, red)
    }

}


// blue
let blueCheck = true
let blueUpdateValue = 1;
function blueFunction() {
    blueCount = true
    redHold.style.display = 'none'
    press.innerText = 'blue'
    press.style.backgroundColor = 'blue'
    let randomNumber = getRandomNumber()
    blueHold = valArray[randomNumber]
    valArray[randomNumber].style.display = 'block'


    if (randomNumber == 0 && blueCheck == true) {
        div2.append(blue)
        blueCheck = false
    }

    if (blueCheck == false) {
        blueUpdateValue += (randomNumber + 1)
        // blueUpdateDie(blueUpdateValue, blue)
    }
}




// update die
let redStart = 2
let blueStart = 3


function redUpdateDie(redUpdateValue , redDie)
{



    console.log("RV",redUpdateValue);
    
    if(redUpdateValue>100)
    {
        redUpdateValue-=randomNumber
        console.log("ruv ",redUpdateValue);
    }
    else
    {
        let id = setInterval(() => {
            
            if((redStart-1)==redUpdateValue)
            {
                clearInterval(id)
                redStart = redUpdateValue
            }
            else
            {
                document.querySelector(`.div${redStart}`).append(red)
                redStart++;
            }
        }, 500);

        
    }






        // let flag = false;
        // console.log("rs ",redStart);
        

        // if(redStart>100)
        // {
        //     redUpdateValue=(redStart-1)
        //     console.log("cant append",redUpdateValue+" ",redStart );
        // }
        // else
        // {
        //     let id  = setInterval(() => {
            
        //         if(redStart==redUpdateValue)
        //         {
        //             redStart = redUpdateValue;
        //             clearInterval(id)
        //         }
               
    
        //         document.querySelector(`.div${redStart}`).append(red)
        //         console.log("rs ",redStart);
        //         redStart++
        //     }, 100);
        // }


        // if(redStart+redUpdateValue==100)
        // {
        //     alert("red is win")
        // }



    
}






















