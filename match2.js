const play = document.getElementById('play');
const guessValue = document.querySelector('#guess-value');
const input = document.querySelector('#guess');
guessValue.textContent = input.value;
input.value = 0;
guessValue.textContent = 0;
let guessNumber = 0;
input.addEventListener('input', click => {
    guessValue.textContent = click.target.value;
    guessNumber = input.value;
});

const box1 = document.getElementById('grid1box1');
const box2 = document.getElementById('grid1box2');
const box3 = document.getElementById('grid1box3');
const box4 = document.getElementById('grid1box4');
const box5 = document.getElementById('grid1box5');
const box6 = document.getElementById('grid2box1');
const box7 = document.getElementById('grid2box2');
const box8 = document.getElementById('grid2box3');
const box9 = document.getElementById('grid2box4');
const box10 = document.getElementById('grid2box5');
const box11 = document.getElementById('grid3box1');
const box12 = document.getElementById('grid3box2');
const box13 = document.getElementById('grid3box3');
const box14 = document.getElementById('grid3box4');
const box15 = document.getElementById('grid3box5');
const box16 = document.getElementById('grid4box1');
const box17 = document.getElementById('grid4box2');
const box18 = document.getElementById('grid4box3');
const box19 = document.getElementById('grid4box4');
const box20 = document.getElementById('grid4box5');
const box21 = document.getElementById('grid5box1');
const box22 = document.getElementById('grid5box2');
const box23 = document.getElementById('grid5box3');
const box24 = document.getElementById('grid5box4');
const box25 = document.getElementById('grid5box5');

const score = document.getElementById('score');
const colorsScore = document.getElementById('colors-score');
const inARowScore = document.getElementById('in-row-score');
const goldRingScore = document.getElementById('gold-ring-score');

const winLose = document.getElementById('win-lose');
winLose.innerHTML = `Total: 0<br/>Rounds: 0`;
let differenceTotal = 0;

const countdown = document.getElementById('countdown');
let countdownVar = 0;
let roundCount = 0;

let previousScore = 0;
let inARowValue;
let goldRingValue;

let white = 'rgb(255,255,255)';
let lgray = 'rgb(211,211,211)';
let dgray = 'rgb(105,105,105)';
let black = 'rgb(0,0,0)';

let shades = [white, lgray, dgray, black];

const pickShade = () => {
    let random = Math.floor(Math.random()*4)
    return shades[random];
};

let color1;
let color2;
let color3;
let color4;
let color5;

let color6;
let color7;
let color8;
let color9;
let color10;

let color11;
let color12;
let color13;
let color14;
let color15;

let color16;
let color17;
let color18;
let color19;
let color20;

let color21;
let color22;
let color23;
let color24;
let color25;



const assignColors = () => {
    let random25;

    color1 = pickShade();
    box1.style.backgroundColor = color1;
    random25 = Math.floor(Math.random()*25);
    box1.style.border = 'solid white 10px';
    if(random25 === 0){
        box1.style.border = "solid gold 10px";
        if(color1 === white){
            goldRingValue = goldRingValue + 10;
        } else if(color1 === lgray){
            goldRingValue = goldRingValue + 20;
        } else if(color1 === dgray){
            goldRingValue = goldRingValue + 30;
        } else if(color1 === black){
            goldRingValue = goldRingValue + 40;
        };
    };

    setTimeout(() => {
        color2 = pickShade();
        box2.style.backgroundColor = color2;
        random25 = Math.floor(Math.random()*25);
        box2.style.border = 'solid white 10px';
        if(random25 === 0){
            box2.style.border = "solid gold 10px";
            if(color2 === white){
                goldRingValue = goldRingValue + 10;
            } else if(color2 === lgray){
                goldRingValue = goldRingValue + 20;
            } else if(color2 === dgray){
                goldRingValue = goldRingValue + 30;
            } else if(color2 === black){
                goldRingValue = goldRingValue + 40;
            };
        };
    }, 40);

    setTimeout(() => {
        color3 = pickShade();
        box3.style.backgroundColor = color3;
        random25 = Math.floor(Math.random()*25);
        box3.style.border = 'solid white 10px';
        if(random25 === 0){
            box3.style.border = "solid gold 10px";
            if(color3 === white){
                goldRingValue = goldRingValue + 10;
            } else if(color3 === lgray){
                goldRingValue = goldRingValue + 20;
            } else if(color3 === dgray){
                goldRingValue = goldRingValue + 30;
            } else if(color3 === black){
                goldRingValue = goldRingValue + 40;
            };
        };
    }, 90);

    setTimeout(() => {
        color4 = pickShade();
        box4.style.backgroundColor = color4;
        random25 = Math.floor(Math.random()*25);
        box4.style.border = 'solid white 10px';
        if(random25 === 0){
            box4.style.border = "solid gold 10px";
            if(color4 === white){
                goldRingValue = goldRingValue + 10;
            } else if(color4 === lgray){
                goldRingValue = goldRingValue + 20;
            } else if(color4 === dgray){
                goldRingValue = goldRingValue + 30;
            } else if(color4 === black){
                goldRingValue = goldRingValue + 40;
            };
        };
    }, 150);

    setTimeout(() => {
        color5 = pickShade();
        box5.style.backgroundColor = color5;
        random25 = Math.floor(Math.random()*25);
        box5.style.border = 'solid white 10px';
        if(random25 === 0){
            box5.style.border = "solid gold 10px";
            if(color5 === white){
                goldRingValue = goldRingValue + 10;
            } else if(color5 === lgray){
                goldRingValue = goldRingValue + 20;
            } else if(color5 === dgray){
                goldRingValue = goldRingValue + 30;
            } else if(color5 === black){
                goldRingValue = goldRingValue + 40;
            };
        }
    }, 220);

    setTimeout(() => {
        color6 = pickShade();
        box6.style.backgroundColor = color6;
        random25 = Math.floor(Math.random()*25);
        box6.style.border = 'solid white 10px';
        if(random25 === 0){
            box6.style.border = "solid gold 10px";
            if(color6 === white){
                goldRingValue = goldRingValue + 10;
            } else if(color6 === lgray){
                goldRingValue = goldRingValue + 20;
            } else if(color6 === dgray){
                goldRingValue = goldRingValue + 30;
            } else if(color6 === black){
                goldRingValue = goldRingValue + 40;
            };
        }
    }, 1650);

    setTimeout(() => {
        color7 = pickShade();
        box7.style.backgroundColor = color7;
        random25 = Math.floor(Math.random()*25);
        box7.style.border = 'solid white 10px';
        if(random25 === 0){
            box7.style.border = "solid gold 10px";
            if(color7 === white){
                goldRingValue = goldRingValue + 10;
            } else if(color7 === lgray){
                goldRingValue = goldRingValue + 20;
            } else if(color7 === dgray){
                goldRingValue = goldRingValue + 30;
            } else if(color7 === black){
                goldRingValue = goldRingValue + 40;
            };
        }
    }, 1840);

    setTimeout(() => {
        color8 = pickShade();
        box8.style.backgroundColor = color8;
        random25 = Math.floor(Math.random()*25);
        box8.style.border = 'solid white 10px';
        if(random25 === 0){
            box8.style.border = "solid gold 10px";
            if(color8 === white){
                goldRingValue = goldRingValue + 10;
            } else if(color8 === lgray){
                goldRingValue = goldRingValue + 20;
            } else if(color8 === dgray){
                goldRingValue = goldRingValue + 30;
            } else if(color8 === black){
                goldRingValue = goldRingValue + 40;
            };
        }
    }, 2040);

    setTimeout(() => {
        color9 = pickShade();
        box9.style.backgroundColor = color9;
        random25 = Math.floor(Math.random()*25);
        box9.style.border = 'solid white 10px';
        if(random25 === 0){
            box9.style.border = "solid gold 10px";
            if(color9 === white){
                goldRingValue = goldRingValue + 10;
            } else if(color9 === lgray){
                goldRingValue = goldRingValue + 20;
            } else if(color9 === dgray){
                goldRingValue = goldRingValue + 30;
            } else if(color9 === black){
                goldRingValue = goldRingValue + 40;
            };
        }
    }, 2250);

    setTimeout(() => {
        color10 = pickShade();
        box10.style.backgroundColor = color10;
        random25 = Math.floor(Math.random()*25);
        box10.style.border = 'solid white 10px';
        if(random25 === 0){
            box10.style.border = "solid gold 10px";
            if(color10 === white){
                goldRingValue = goldRingValue + 10;
            } else if(color10 === lgray){
                goldRingValue = goldRingValue + 20;
            } else if(color10 === dgray){
                goldRingValue = goldRingValue + 30;
            } else if(color10 === black){
                goldRingValue = goldRingValue + 40;
            };
        }
    }, 300);

    setTimeout(() => {
        color11 = pickShade();
        box11.style.backgroundColor = color11;
        random25 = Math.floor(Math.random()*25);
        box11.style.border = 'solid white 10px';
        if(random25 === 0){
            box11.style.border = "solid gold 10px";
            if(color11 === white){
                goldRingValue = goldRingValue + 10;
            } else if(color11 === lgray){
                goldRingValue = goldRingValue + 20;
            } else if(color11 === dgray){
                goldRingValue = goldRingValue + 30;
            } else if(color11 === black){
                goldRingValue = goldRingValue + 40;
            };
        }
    }, 1470);

    setTimeout(() => {
        color12 = pickShade();
        box12.style.backgroundColor = color12;
        random25 = Math.floor(Math.random()*25);
        box12.style.border = 'solid white 10px';
        if(random25 === 0){
            box12.style.border = "solid gold 10px";
            if(color12 === white){
                goldRingValue = goldRingValue + 10;
            } else if(color12 === lgray){
                goldRingValue = goldRingValue + 20;
            } else if(color12 === dgray){
                goldRingValue = goldRingValue + 30;
            } else if(color12 === black){
                goldRingValue = goldRingValue + 40;
            };
        }
    }, 3450);

    setTimeout(() => {
        color13 = pickShade();
        box13.style.backgroundColor = color13;
        random25 = Math.floor(Math.random()*25);
        box13.style.border = 'solid white 10px';
        if(random25 === 0){
            box13.style.border = "solid gold 10px";
            if(color13 === white){
                goldRingValue = goldRingValue + 10;
            } else if(color13 === lgray){
                goldRingValue = goldRingValue + 20;
            } else if(color13 === dgray){
                goldRingValue = goldRingValue + 30;
            } else if(color13 === black){
                goldRingValue = goldRingValue + 40;
            };
        }
    }, 4000);

    setTimeout(() => {
        color14 = pickShade();
        box14.style.backgroundColor = color14;
        random25 = Math.floor(Math.random()*25);
        box14.style.border = 'solid white 10px';
        if(random25 === 0){
            box14.style.border = "solid gold 10px";
            if(color14 === white){
                goldRingValue = goldRingValue + 10;
            } else if(color14 === lgray){
                goldRingValue = goldRingValue + 20;
            } else if(color14 === dgray){
                goldRingValue = goldRingValue + 30;
            } else if(color14 === black){
                goldRingValue = goldRingValue + 40;
            };
        }
    }, 2470);

    setTimeout(() => {
        color15 = pickShade();
        box15.style.backgroundColor = color15;
        random25 = Math.floor(Math.random()*25);
        box15.style.border = 'solid white 10px';
        if(random25 === 0){
            box15.style.border = "solid gold 10px";
            if(color15 === white){
                goldRingValue = goldRingValue + 10;
            } else if(color15 === lgray){
                goldRingValue = goldRingValue + 20;
            } else if(color15 === dgray){
                goldRingValue = goldRingValue + 30;
            } else if(color15 === black){
                goldRingValue = goldRingValue + 40;
            };
        }
    }, 390);

    setTimeout(() => {
        color16 = pickShade();
        box16.style.backgroundColor = color16;
        random25 = Math.floor(Math.random()*25);
        box16.style.border = 'solid white 10px';
        if(random25 === 0){
            box16.style.border = "solid gold 10px";
            if(color16 === white){
                goldRingValue = goldRingValue + 10;
            } else if(color16 === lgray){
                goldRingValue = goldRingValue + 20;
            } else if(color16 === dgray){
                goldRingValue = goldRingValue + 30;
            } else if(color16 === black){
                goldRingValue = goldRingValue + 40;
            };
        }
    }, 1300);

    setTimeout(() => {
        color17 = pickShade();
        box17.style.backgroundColor = color17;
        random25 = Math.floor(Math.random()*25);
        box17.style.border = 'solid white 10px';
        if(random25 === 0){
            box17.style.border = "solid gold 10px";
            if(color17 === white){
                goldRingValue = goldRingValue + 10;
            } else if(color17 === lgray){
                goldRingValue = goldRingValue + 20;
            } else if(color17 === dgray){
                goldRingValue = goldRingValue + 30;
            } else if(color17 === black){
                goldRingValue = goldRingValue + 40;
            };
        }
    }, 3190);

    setTimeout(() => {
        color18 = pickShade();
        box18.style.backgroundColor = color18;
        random25 = Math.floor(Math.random()*25);
        box18.style.border = 'solid white 10px';
        if(random25 === 0){
            box18.style.border = "solid gold 10px";
            if(color18 === white){
                goldRingValue = goldRingValue + 10;
            } else if(color18 === lgray){
                goldRingValue = goldRingValue + 20;
            } else if(color18 === dgray){
                goldRingValue = goldRingValue + 30;
            } else if(color18 === black){
                goldRingValue = goldRingValue + 40;
            };
        }
    }, 2940);

    setTimeout(() => {
        color19 = pickShade();
        box19.style.backgroundColor = color19;
        random25 = Math.floor(Math.random()*25);
        box19.style.border = 'solid white 10px';
        if(random25 === 0){
            box19.style.border = "solid gold 10px";
            if(color19 === white){
                goldRingValue = goldRingValue + 10;
            } else if(color19 === lgray){
                goldRingValue = goldRingValue + 20;
            } else if(color19 === dgray){
                goldRingValue = goldRingValue + 30;
            } else if(color19 === black){
                goldRingValue = goldRingValue + 40;
            };
        }
    }, 2700);

    setTimeout(() => {
        color20 = pickShade();
        box20.style.backgroundColor = color20;
        random25 = Math.floor(Math.random()*25);
        box20.style.border = 'solid white 10px';
        if(random25 === 0){
            box20.style.border = "solid gold 10px";
            if(color20 === white){
                goldRingValue = goldRingValue + 10;
            } else if(color20 === lgray){
                goldRingValue = goldRingValue + 20;
            } else if(color20 === dgray){
                goldRingValue = goldRingValue + 30;
            } else if(color20 === black){
                goldRingValue = goldRingValue + 40;
            };
        }
    }, 490);

    setTimeout(() => {
        color21 = pickShade();
        box21.style.backgroundColor = color21;
        random25 = Math.floor(Math.random()*25);
        box21.style.border = 'solid white 10px';
        if(random25 === 0){
            box21.style.border = "solid gold 10px";
            if(color21 === white){
                goldRingValue = goldRingValue + 10;
            } else if(color21 === lgray){
                goldRingValue = goldRingValue + 20;
            } else if(color21 === dgray){
                goldRingValue = goldRingValue + 30;
            } else if(color21 === black){
                goldRingValue = goldRingValue + 40;
            };
        }
    }, 1140);

    setTimeout(() => {
        color22 = pickShade();
        box22.style.backgroundColor = color22;
        random25 = Math.floor(Math.random()*25);
        box22.style.border = 'solid white 10px';
        if(random25 === 0){
            box22.style.border = "solid gold 10px";
            if(color22 === white){
                goldRingValue = goldRingValue + 10;
            } else if(color22 === lgray){
                goldRingValue = goldRingValue + 20;
            } else if(color22 === dgray){
                goldRingValue = goldRingValue + 30;
            } else if(color22 === black){
                goldRingValue = goldRingValue + 40;
            };
        }
    }, 990);

    setTimeout(() => {
        color23 = pickShade();
        box23.style.backgroundColor = color23;
        random25 = Math.floor(Math.random()*25);
        box23.style.border = 'solid white 10px';
        if(random25 === 0){
            box23.style.border = "solid gold 10px";
            if(color23 === white){
                goldRingValue = goldRingValue + 10;
            } else if(color23 === lgray){
                goldRingValue = goldRingValue + 20;
            } else if(color23 === dgray){
                goldRingValue = goldRingValue + 30;
            } else if(color23 === black){
                goldRingValue = goldRingValue + 40;
            };
        }
    }, 850);

    setTimeout(() => {
        color24 = pickShade();
        box24.style.backgroundColor = color24;
        random25 = Math.floor(Math.random()*25);
        box24.style.border = 'solid white 10px';
        if(random25 === 0){
            box24.style.border = "solid gold 10px";
            if(color24 === white){
                goldRingValue = goldRingValue + 10;
            } else if(color24 === lgray){
                goldRingValue = goldRingValue + 20;
            } else if(color24 === dgray){
                goldRingValue = goldRingValue + 30;
            } else if(color24 === black){
                goldRingValue = goldRingValue + 40;
            };
        }
    }, 720);

    setTimeout(() => {
        color25 = pickShade();
        box25.style.backgroundColor = color25;
        random25 = Math.floor(Math.random()*25);
        box25.style.border = 'solid white 10px';
        if(random25 === 0){
            box25.style.border = "solid gold 10px";
            if(color25 === white){
                goldRingValue = goldRingValue + 10;
            } else if(color25 === lgray){
                goldRingValue = goldRingValue + 20;
            } else if(color25 === dgray){
                goldRingValue = goldRingValue + 30;
            } else if(color25 === black){
                goldRingValue = goldRingValue + 40;
            };
        }
    }, 600);
}

const reset = () => {
    box1.style.border = "solid rgb(66, 66, 66) 10px";
    box2.style.border = "solid rgb(66, 66, 66) 10px";
    box3.style.border = "solid rgb(66, 66, 66) 10px";
    box4.style.border = "solid rgb(66, 66, 66) 10px";
    box5.style.border = "solid rgb(66, 66, 66) 10px";
    box6.style.border = "solid rgb(66, 66, 66) 10px";
    box7.style.border = "solid rgb(66, 66, 66) 10px";
    box8.style.border = "solid rgb(66, 66, 66) 10px";
    box9.style.border = "solid rgb(66, 66, 66) 10px";
    box10.style.border = "solid rgb(66, 66, 66) 10px";
    box11.style.border = "solid rgb(66, 66, 66) 10px";
    box12.style.border = "solid rgb(66, 66, 66) 10px";
    box13.style.border = "solid rgb(66, 66, 66) 10px";
    box14.style.border = "solid rgb(66, 66, 66) 10px";
    box15.style.border = "solid rgb(66, 66, 66) 10px";
    box16.style.border = "solid rgb(66, 66, 66) 10px";
    box17.style.border = "solid rgb(66, 66, 66) 10px";
    box18.style.border = "solid rgb(66, 66, 66) 10px";
    box19.style.border = "solid rgb(66, 66, 66) 10px";
    box20.style.border = "solid rgb(66, 66, 66) 10px";
    box21.style.border = "solid rgb(66, 66, 66) 10px";
    box22.style.border = "solid rgb(66, 66, 66) 10px";
    box23.style.border = "solid rgb(66, 66, 66) 10px";
    box24.style.border = "solid rgb(66, 66, 66) 10px";
    box25.style.border = "solid rgb(66, 66, 66) 10px";

    box1.style.backgroundColor = 'black';
    box2.style.backgroundColor = 'black';
    box3.style.backgroundColor = 'black';
    box4.style.backgroundColor = 'black';
    box5.style.backgroundColor = 'black';
    box6.style.backgroundColor = 'black';
    box7.style.backgroundColor = 'black';
    box8.style.backgroundColor = 'black';
    box9.style.backgroundColor = 'black';
    box10.style.backgroundColor = 'black';
    box11.style.backgroundColor = 'black';
    box12.style.backgroundColor = 'black';
    box13.style.backgroundColor = 'black';
    box14.style.backgroundColor = 'black';
    box15.style.backgroundColor = 'black';
    box16.style.backgroundColor = 'black';
    box17.style.backgroundColor = 'black';
    box18.style.backgroundColor = 'black';
    box19.style.backgroundColor = 'black';
    box20.style.backgroundColor = 'black';
    box21.style.backgroundColor = 'black';
    box22.style.backgroundColor = 'black';
    box23.style.backgroundColor = 'black';
    box24.style.backgroundColor = 'black';
    box25.style.backgroundColor = 'black';

    colorValue = 0;
    colorsScore.innerHTML = `Colors score: ${colorValue}`;
    goldRingValue = 0;
    goldRingScore.innerHTML = `Gold Ring score: ${goldRingValue}`;
    inARowValue = 0;
    inARowScore.innerHTML = `In-a-Row score: ${inARowValue}`;
    difference = 0;
    totalValue = 0;
    score.innerHTML = `Total grid value: ${totalValue}`;
    guessNumber = 0;
    winLose.innerHTML = `Total: ${differenceTotal}<br/>Rounds: ${roundCount}`;
    winLose.style.color = "white";
    input.value = 0;
    guessValue.textContent = 0;
}



const countTotalValue = () => {
    let colorList = [color1, color2, color3, color4, color5, color6, color7, color8, color9, color10, color11, color12, color13, color14, color15, color16, color17, color18,  
    color19, color20, color21, color22, color23, color24, color25];
    let colorCode = [];
    for(let i = 0; i < colorList.length; i++){
        if(colorList[i] === white){
            colorCode.push(1);
        } else if(colorList[i] === lgray){
            colorCode.push(2);
        } else if(colorList[i] === dgray){
            colorCode.push(3);
        } else if(colorList[i] === black){
            colorCode.push(4);
        }
    }
    let colorValue = 0;
    for(let j = 0; j < colorCode.length; j++){
        colorValue = colorValue + colorCode[j];
    }
    let totalValue = colorValue + inARowValue + goldRingValue;
    let valueBonus = Math.round(totalValue/10);
    score.innerHTML = `Total grid value: ${totalValue}`;
    colorsScore.innerHTML = `Colors score: ${colorValue}`;
    inARowScore.innerHTML = `In-a-Row score: ${inARowValue}`;
    goldRingScore.innerHTML = `Gold Ring score: ${goldRingValue}`;
    let difference = 0;
    roundCount++;
    if(totalValue > guessNumber){
        difference = totalValue - guessNumber;
        differenceTotal = (differenceTotal + difference) - valueBonus;
        winLose.innerHTML = `Total: ${differenceTotal}<br/>Rounds: ${roundCount}<br/>Difference: ${difference}<br/>Bonus: -${valueBonus}`;
    } else if(guessNumber > totalValue){
        difference = guessNumber - totalValue;
        differenceTotal = (differenceTotal + difference) - valueBonus;
        winLose.innerHTML = `Total: ${differenceTotal}<br/>Rounds: ${roundCount}<br/>Difference: ${difference}<br/>Bonus: -${valueBonus}`;
    } else if(guessNumber == totalValue){
        differenceTotal = differenceTotal - (valueBonus * 2);
        winLose.innerHTML = `Total: ${differenceTotal}<br/>Rounds: ${roundCount}<br/>PERFECT!<br/>Bonus x2: -${valueBonus * 2}`;
    }
    if(roundCount === 10){
        if(differenceTotal < 1){
            winLose.style.color = "gold";
            winLose.innerHTML = `${differenceTotal} points<br/>GOLD`;
        } else if(differenceTotal >= 1 && differenceTotal <= 50){
            winLose.style.color = "silver";
            winLose.innerHTML = `${differenceTotal} points<br/>SILVER`;
        } else if(differenceTotal > 50 && differenceTotal <= 100){
            winLose.style.color = "rgb(182, 114, 26)";
            winLose.innerHTML = `${differenceTotal} points<br/>BRONZE`;
        } else {
            winLose.innerHTML = `10-round<br/>score is<br/>${differenceTotal}!`
        }
        differenceTotal = 0;
        roundCount = 0;
    }
    document.getElementById('play').disabled = false;
}    

const countInARowValue = () => {
    //code for horizontal rows
    //Code for row 1
    if(color1 === color2 && color2 === color3 && color3 === color4 && color4 === color5){
        let mult = 1;
        if(color1 === white){
            mult = 1;
        } else if(color1 === lgray){
            mult = 2
        } else if(color1 === dgray){
            mult = 3;
        } else if(color1 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (25 * mult);
    } else if(color1 === color2 && color2 === color3 && color3 === color4){
        if(color1 === white){
            mult = 1;
        } else if(color1 === lgray){
            mult = 2
        } else if(color1 === dgray){
            mult = 3;
        } else if(color1 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color2 === color3 && color3 === color4 && color4 === color5){
        if(color2 === white){
            mult = 1;
        } else if(color2 === lgray){
            mult = 2
        } else if(color2 === dgray){
            mult = 3;
        } else if(color2 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color1 === color2 && color2 === color3){
        if(color1 === white){
            mult = 1;
        } else if(color1 === lgray){
            mult = 2
        } else if(color1 === dgray){
            mult = 3;
        } else if(color1 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color2 === color3 && color3 === color4){
        if(color2 === white){
            mult = 1;
        } else if(color2 === lgray){
            mult = 2
        } else if(color2 === dgray){
            mult = 3;
        } else if(color2 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color3 === color4 && color4 === color5){
        if(color3 === white){
            mult = 1;
        } else if(color3 === lgray){
            mult = 2
        } else if(color3 === dgray){
            mult = 3;
        } else if(color3 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    }
    //code for row 2
    if(color6 === color7 && color7 === color8 && color8 === color9 && color9 === color10){
        let mult = 1;
        if(color6 === white){
            mult = 1;
        } else if(color6 === lgray){
            mult = 2
        } else if(color6 === dgray){
            mult = 3;
        } else if(color6 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (25 * mult);
    } else if(color6 === color7 && color7 === color8 && color8 === color9){
        if(color6 === white){
            mult = 1;
        } else if(color6 === lgray){
            mult = 2
        } else if(color6 === dgray){
            mult = 3;
        } else if(color6 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color7 === color8 && color8 === color9 && color9 === color10){
        if(color7 === white){
            mult = 1;
        } else if(color7 === lgray){
            mult = 2
        } else if(color7 === dgray){
            mult = 3;
        } else if(color7 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color6 === color7 && color7 === color8){
        if(color6 === white){
            mult = 1;
        } else if(color6 === lgray){
            mult = 2
        } else if(color6 === dgray){
            mult = 3;
        } else if(color6 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color7 === color8 && color8 === color9){
        if(color7 === white){
            mult = 1;
        } else if(color7 === lgray){
            mult = 2
        } else if(color7 === dgray){
            mult = 3;
        } else if(color7 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color8 === color9 && color9 === color10){
        if(color8 === white){
            mult = 1;
        } else if(color8 === lgray){
            mult = 2
        } else if(color8 === dgray){
            mult = 3;
        } else if(color8 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    }
    //code for row 3
    if(color11 === color12 && color12 === color13 && color13 === color14 && color14 === color15){
        let mult = 1;
        if(color11 === white){
            mult = 1;
        } else if(color11 === lgray){
            mult = 2
        } else if(color11 === dgray){
            mult = 3;
        } else if(color11 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (25 * mult);
    } else if(color11 === color12 && color12 === color13 && color13 === color14){
        if(color11 === white){
            mult = 1;
        } else if(color11 === lgray){
            mult = 2
        } else if(color11 === dgray){
            mult = 3;
        } else if(color11 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color12 === color13 && color13 === color14 && color14 === color15){
        if(color12 === white){
            mult = 1;
        } else if(color12 === lgray){
            mult = 2
        } else if(color12 === dgray){
            mult = 3;
        } else if(color12 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color11 === color12 && color12 === color13){
        if(color11 === white){
            mult = 1;
        } else if(color11 === lgray){
            mult = 2
        } else if(color11 === dgray){
            mult = 3;
        } else if(color11 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color12 === color13 && color13 === color14){
        if(color12 === white){
            mult = 1;
        } else if(color12 === lgray){
            mult = 2
        } else if(color12 === dgray){
            mult = 3;
        } else if(color12 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color13 === color14 && color14 === color15){
        if(color13 === white){
            mult = 1;
        } else if(color13 === lgray){
            mult = 2
        } else if(color13 === dgray){
            mult = 3;
        } else if(color13 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    }
    //code for row 4
    if(color16 === color17 && color17 === color18 && color18 === color19 && color19 === color20){
        let mult = 1;
        if(color16 === white){
            mult = 1;
        } else if(color16 === lgray){
            mult = 2
        } else if(color16 === dgray){
            mult = 3;
        } else if(color16 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (25 * mult);
    } else if(color16 === color17 && color17 === color18 && color18 === color19){
        if(color16 === white){
            mult = 1;
        } else if(color16 === lgray){
            mult = 2
        } else if(color16 === dgray){
            mult = 3;
        } else if(color16 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color17 === color18 && color18 === color19 && color19 === color20){
        if(color17 === white){
            mult = 1;
        } else if(color17 === lgray){
            mult = 2
        } else if(color17 === dgray){
            mult = 3;
        } else if(color17 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color16 === color17 && color17 === color18){
        if(color16 === white){
            mult = 1;
        } else if(color16 === lgray){
            mult = 2
        } else if(color16 === dgray){
            mult = 3;
        } else if(color16 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color17 === color18 && color18 === color19){
        if(color17 === white){
            mult = 1;
        } else if(color17 === lgray){
            mult = 2
        } else if(color17 === dgray){
            mult = 3;
        } else if(color17 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color18 === color19 && color19 === color20){
        if(color18 === white){
            mult = 1;
        } else if(color18 === lgray){
            mult = 2
        } else if(color18 === dgray){
            mult = 3;
        } else if(color18 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    }
    //Code for row 5
    if(color21 === color22 && color22 === color23 && color23 === color24 && color24 === color25){
        let mult = 1;
        if(color21 === white){
            mult = 1;
        } else if(color21 === lgray){
            mult = 2
        } else if(color21 === dgray){
            mult = 3;
        } else if(color21 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (25 * mult);
    } else if(color21 === color22 && color22 === color23 && color23 === color24){
        if(color21 === white){
            mult = 1;
        } else if(color21 === lgray){
            mult = 2
        } else if(color21 === dgray){
            mult = 3;
        } else if(color21 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color22 === color23 && color23 === color24 && color24 === color25){
        if(color22 === white){
            mult = 1;
        } else if(color22 === lgray){
            mult = 2
        } else if(color22 === dgray){
            mult = 3;
        } else if(color22 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color21 === color22 && color22 === color23){
        if(color21 === white){
            mult = 1;
        } else if(color21 === lgray){
            mult = 2
        } else if(color21 === dgray){
            mult = 3;
        } else if(color21 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color22 === color23 && color23 === color24){
        if(color22 === white){
            mult = 1;
        } else if(color22 === lgray){
            mult = 2
        } else if(color22 === dgray){
            mult = 3;
        } else if(color22 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color23 === color24 && color24 === color25){
        if(color23 === white){
            mult = 1;
        } else if(color23 === lgray){
            mult = 2
        } else if(color23 === dgray){
            mult = 3;
        } else if(color23 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    }
    //Code for vertical columns
    //Code for column 1 (1, 6, 11, 16, 21)
    if(color1 === color6 && color6 === color11 && color11 === color16 && color16 === color21){
        let mult = 1;
        if(color1 === white){
            mult = 1;
        } else if(color1 === lgray){
            mult = 2
        } else if(color1 === dgray){
            mult = 3;
        } else if(color1 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (25 * mult);
    } else if(color1 === color6 && color6 === color11 && color11 === color16){
        if(color1 === white){
            mult = 1;
        } else if(color1 === lgray){
            mult = 2
        } else if(color1 === dgray){
            mult = 3;
        } else if(color1 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color6 === color11 && color11 === color16 && color16 === color21){
        if(color6 === white){
            mult = 1;
        } else if(color6 === lgray){
            mult = 2
        } else if(color6 === dgray){
            mult = 3;
        } else if(color6 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color1 === color6 && color6 === color11){
        if(color1 === white){
            mult = 1;
        } else if(color1 === lgray){
            mult = 2
        } else if(color1 === dgray){
            mult = 3;
        } else if(color1 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color6 === color11 && color11 === color16){
        if(color6 === white){
            mult = 1;
        } else if(color6 === lgray){
            mult = 2
        } else if(color6 === dgray){
            mult = 3;
        } else if(color6 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color11 === color16 && color16 === color21){
        if(color11 === white){
            mult = 1;
        } else if(color11 === lgray){
            mult = 2
        } else if(color11 === dgray){
            mult = 3;
        } else if(color11 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    }
    //code for column 2 (2, 7, 12, 17, 22)
    if(color2 === color7 && color7 === color12 && color12 === color17 && color17 === color22){
        let mult = 1;
        if(color2 === white){
            mult = 1;
        } else if(color2 === lgray){
            mult = 2
        } else if(color2 === dgray){
            mult = 3;
        } else if(color2 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (25 * mult);
    } else if(color2 === color7 && color7 === color12 && color12 === color17){
        if(color2 === white){
            mult = 1;
        } else if(color2 === lgray){
            mult = 2
        } else if(color2 === dgray){
            mult = 3;
        } else if(color2 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color7 === color12 && color12 === color17 && color17 === color22){
        if(color7 === white){
            mult = 1;
        } else if(color7 === lgray){
            mult = 2
        } else if(color7 === dgray){
            mult = 3;
        } else if(color7 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color2 === color7 && color7 === color12){
        if(color2 === white){
            mult = 1;
        } else if(color2 === lgray){
            mult = 2
        } else if(color2 === dgray){
            mult = 3;
        } else if(color2 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color7 === color12 && color12 === color17){
        if(color7 === white){
            mult = 1;
        } else if(color7 === lgray){
            mult = 2
        } else if(color7 === dgray){
            mult = 3;
        } else if(color7 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color12 === color17 && color17 === color22){
        if(color12 === white){
            mult = 1;
        } else if(color12 === lgray){
            mult = 2
        } else if(color12 === dgray){
            mult = 3;
        } else if(color12 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    }
    //code for column 3 (3, 8, 13, 18, 23)
    if(color3 === color8 && color8 === color13 && color13 === color18 && color18 === color23){
        let mult = 1;
        if(color3 === white){
            mult = 1;
        } else if(color3 === lgray){
            mult = 2
        } else if(color3 === dgray){
            mult = 3;
        } else if(color3 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (25 * mult);
    } else if(color3 === color8 && color8 === color13 && color13 === color18){
        if(color3 === white){
            mult = 1;
        } else if(color3 === lgray){
            mult = 2
        } else if(color3 === dgray){
            mult = 3;
        } else if(color3 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color8 === color13 && color13 === color18 && color18 === color23){
        if(color8 === white){
            mult = 1;
        } else if(color8 === lgray){
            mult = 2
        } else if(color8 === dgray){
            mult = 3;
        } else if(color8 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color3 === color8 && color8 === color13){
        if(color3 === white){
            mult = 1;
        } else if(color3 === lgray){
            mult = 2
        } else if(color3 === dgray){
            mult = 3;
        } else if(color3 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color8 === color13 && color13 === color18){
        if(color8 === white){
            mult = 1;
        } else if(color8 === lgray){
            mult = 2
        } else if(color8 === dgray){
            mult = 3;
        } else if(color8 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color13 === color18 && color18 === color23){
        if(color13 === white){
            mult = 1;
        } else if(color13 === lgray){
            mult = 2
        } else if(color13 === dgray){
            mult = 3;
        } else if(color13 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    }
    //code for column 4 (4, 9, 14, 19, 24)
    if(color4 === color9 && color9 === color14 && color14 === color19 && color19 === color24){
        let mult = 1;
        if(color4 === white){
            mult = 1;
        } else if(color4 === lgray){
            mult = 2
        } else if(color4 === dgray){
            mult = 3;
        } else if(color4 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (25 * mult);
    } else if(color4 === color9 && color9 === color14 && color14 === color19){
        if(color4 === white){
            mult = 1;
        } else if(color4 === lgray){
            mult = 2
        } else if(color4 === dgray){
            mult = 3;
        } else if(color4 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color9 === color14 && color14 === color19 && color19 === color24){
        if(color9 === white){
            mult = 1;
        } else if(color9 === lgray){
            mult = 2
        } else if(color9 === dgray){
            mult = 3;
        } else if(color9 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color4 === color9 && color9 === color14){
        if(color4 === white){
            mult = 1;
        } else if(color4 === lgray){
            mult = 2
        } else if(color4 === dgray){
            mult = 3;
        } else if(color4 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color9 === color14 && color14 === color19){
        if(color9 === white){
            mult = 1;
        } else if(color9 === lgray){
            mult = 2
        } else if(color9 === dgray){
            mult = 3;
        } else if(color9 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color14 === color19 && color19 === color24){
        if(color14 === white){
            mult = 1;
        } else if(color14 === lgray){
            mult = 2
        } else if(color14 === dgray){
            mult = 3;
        } else if(color14 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    }
    //Code for column 5 (5, 10, 15, 20, 25)
    if(color5 === color10 && color10 === color15 && color15 === color20 && color20 === color25){
        let mult = 1;
        if(color5 === white){
            mult = 1;
        } else if(color5 === lgray){
            mult = 2
        } else if(color5 === dgray){
            mult = 3;
        } else if(color5 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (25 * mult);
    } else if(color5 === color10 && color10 === color15 && color15 === color20){
        if(color5 === white){
            mult = 1;
        } else if(color5 === lgray){
            mult = 2
        } else if(color5 === dgray){
            mult = 3;
        } else if(color5 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color10 === color15 && color15 === color20 && color20 === color25){
        if(color10 === white){
            mult = 1;
        } else if(color10 === lgray){
            mult = 2
        } else if(color10 === dgray){
            mult = 3;
        } else if(color10 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color5 === color10 && color10 === color15){
        if(color5 === white){
            mult = 1;
        } else if(color5 === lgray){
            mult = 2
        } else if(color5 === dgray){
            mult = 3;
        } else if(color5 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color10 === color15 && color15 === color20){
        if(color10 === white){
            mult = 1;
        } else if(color10 === lgray){
            mult = 2
        } else if(color10 === dgray){
            mult = 3;
        } else if(color10 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color15 === color20 && color20 === color25){
        if(color15 === white){
            mult = 1;
        } else if(color15 === lgray){
            mult = 2
        } else if(color15 === dgray){
            mult = 3;
        } else if(color15 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    }
    //code for UR-DL diagonals
    //3 7 11
    if(color3 === color7 && color7 === color11){
        if(color3 === white){
            mult = 1;
        } else if(color3 === lgray){
            mult = 2
        } else if(color3 === dgray){
            mult = 3;
        } else if(color3 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    }
    //4 8 12 16
    if(color4 === color8 && color8 === color12 && color12 === color16){
        if(color4 === white){
            mult = 1;
        } else if(color4 === lgray){
            mult = 2
        } else if(color4 === dgray){
            mult = 3;
        } else if(color4 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color4 === color8 && color8 === color12){
        if(color4 === white){
            mult = 1;
        } else if(color4 === lgray){
            mult = 2
        } else if(color4 === dgray){
            mult = 3;
        } else if(color4 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color8 === color12 && color12 === color16){
        if(color8 === white){
            mult = 1;
        } else if(color8 === lgray){
            mult = 2
        } else if(color8 === dgray){
            mult = 3;
        } else if(color8 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    }
    //5 9 13 17 21
    if(color5 === color9 && color9 === color13 && color13 === color17 && color17 === color21){
        let mult = 1;
        if(color5 === white){
            mult = 1;
        } else if(color5 === lgray){
            mult = 2
        } else if(color5 === dgray){
            mult = 3;
        } else if(color5 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (25 * mult);
    } else if(color5 === color9 && color9 === color13 && color13 === color17){
        if(color5 === white){
            mult = 1;
        } else if(color5 === lgray){
            mult = 2
        } else if(color5 === dgray){
            mult = 3;
        } else if(color5 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color9 === color13 && color13 === color17 && color17 === color21){
        if(color9 === white){
            mult = 1;
        } else if(color9 === lgray){
            mult = 2
        } else if(color9 === dgray){
            mult = 3;
        } else if(color9 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color5 === color9 && color9 === color13){
        if(color5 === white){
            mult = 1;
        } else if(color5 === lgray){
            mult = 2
        } else if(color5 === dgray){
            mult = 3;
        } else if(color5 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color9 === color13 && color13 === color17){
        if(color9 === white){
            mult = 1;
        } else if(color9 === lgray){
            mult = 2
        } else if(color9 === dgray){
            mult = 3;
        } else if(color9 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color13 === color17 && color17 === color21){
        if(color13 === white){
            mult = 1;
        } else if(color13 === lgray){
            mult = 2
        } else if(color13 === dgray){
            mult = 3;
        } else if(color13 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    }
    //10 14 18 22
    if(color10 === color14 && color14 === color18 && color18 === color22){
        if(color10 === white){
            mult = 1;
        } else if(color10 === lgray){
            mult = 2
        } else if(color10 === dgray){
            mult = 3;
        } else if(color10 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color10 === color14 && color14 === color18){
        if(color10 === white){
            mult = 1;
        } else if(color10 === lgray){
            mult = 2
        } else if(color10 === dgray){
            mult = 3;
        } else if(color10 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color14 === color18 && color18 === color22){
        if(color14 === white){
            mult = 1;
        } else if(color14 === lgray){
            mult = 2
        } else if(color14 === dgray){
            mult = 3;
        } else if(color14 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    }
    //15 19 23 
    if(color15 === color19 && color19 === color23){
        if(color15 === white){
            mult = 1;
        } else if(color15 === lgray){
            mult = 2
        } else if(color15 === dgray){
            mult = 3;
        } else if(color15 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    }
    //Code for UL-DR diagonals 
    //3 9 15
    if(color3 === color9 && color9 === color15){
        if(color3 === white){
            mult = 1;
        } else if(color3 === lgray){
            mult = 2
        } else if(color3 === dgray){
            mult = 3;
        } else if(color3 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    }
    //2 8 14 20
    if(color2 === color8 && color8 === color14 && color14 === color20){
        if(color2 === white){
            mult = 1;
        } else if(color2 === lgray){
            mult = 2
        } else if(color2 === dgray){
            mult = 3;
        } else if(color2 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color2 === color8 && color8 === color14){
        if(color2 === white){
            mult = 1;
        } else if(color2 === lgray){
            mult = 2
        } else if(color2 === dgray){
            mult = 3;
        } else if(color2 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color8 === color14 && color14 === color20){
        if(color8 === white){
            mult = 1;
        } else if(color8 === lgray){
            mult = 2
        } else if(color8 === dgray){
            mult = 3;
        } else if(color8 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    }
    //1 7 13 19 25
    if(color1 === color7 && color7 === color13 && color13 === color19 && color19 === color25){
        let mult = 1;
        if(color1 === white){
            mult = 1;
        } else if(color1 === lgray){
            mult = 2
        } else if(color1 === dgray){
            mult = 3;
        } else if(color1 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (25 * mult);
    } else if(color1 === color7 && color7 === color13 && color13 === color19){
        if(color1 === white){
            mult = 1;
        } else if(color1 === lgray){
            mult = 2
        } else if(color1 === dgray){
            mult = 3;
        } else if(color1 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color7 === color13 && color13 === color19 && color19 === color25){
        if(color7 === white){
            mult = 1;
        } else if(color7 === lgray){
            mult = 2
        } else if(color7 === dgray){
            mult = 3;
        } else if(color7 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color1 === color7 && color7 === color13){
        if(color1 === white){
            mult = 1;
        } else if(color1 === lgray){
            mult = 2
        } else if(color1 === dgray){
            mult = 3;
        } else if(color1 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color7 === color13 && color13 === color19){
        if(color7 === white){
            mult = 1;
        } else if(color7 === lgray){
            mult = 2
        } else if(color7 === dgray){
            mult = 3;
        } else if(color7 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color13 === color19 && color19 === color25){
        if(color13 === white){
            mult = 1;
        } else if(color13 === lgray){
            mult = 2
        } else if(color13 === dgray){
            mult = 3;
        } else if(color13 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    }
    //6 12 18 24
    if(color6 === color12 && color12 === color18 && color18 === color24){
        if(color6 === white){
            mult = 1;
        } else if(color6 === lgray){
            mult = 2
        } else if(color6 === dgray){
            mult = 3;
        } else if(color6 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (16 * mult);
    } else if(color6 === color12 && color12 === color18){
        if(color6 === white){
            mult = 1;
        } else if(color6 === lgray){
            mult = 2
        } else if(color6 === dgray){
            mult = 3;
        } else if(color6 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    } else if(color12 === color18 && color18 === color24){
        if(color12 === white){
            mult = 1;
        } else if(color12 === lgray){
            mult = 2
        } else if(color12 === dgray){
            mult = 3;
        } else if(color12 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    }
    //11 17 23
    if(color11 === color17 && color17 === color23){
        if(color11 === white){
            mult = 1;
        } else if(color11 === lgray){
            mult = 2
        } else if(color11 === dgray){
            mult = 3;
        } else if(color11 === black){
            mult = 4;
        }
        inARowValue = inARowValue + (9 * mult);
    }
}

const countdownFunction = () => {
    countdownVar = 10;
    countdown.innerHTML = ' ';
    /*setTimeout(() => {
        countdown.innerHTML = countdownVar;
    }, 1000);
    setTimeout(() => {
        countdownVar--;
        countdown.innerHTML = countdownVar;
    }, 2000);
    setTimeout(() => {
        countdownVar--;
        countdown.innerHTML = countdownVar;
    }, 3000);*/
    setTimeout(() => {
        countdownVar;
        countdown.innerHTML = countdownVar;
    }, 4000);
    setTimeout(() => {
        countdownVar--;
        countdown.innerHTML = countdownVar;
    }, 5000);
    setTimeout(() => {
        countdownVar--;
        countdown.innerHTML = countdownVar;
    }, 6000);
    setTimeout(() => {
        countdownVar--;
        countdown.innerHTML = countdownVar;
    }, 7000);
    setTimeout(() => {
        countdownVar--;
        countdown.innerHTML = countdownVar;
    }, 8000);
    setTimeout(() => {
        countdownVar--;
        countdown.innerHTML = countdownVar;
    }, 9000);
    setTimeout(() => {
        countdownVar--;
        countdown.innerHTML = countdownVar;
    }, 10000);
    setTimeout(() => {
        countdownVar--;
        countdown.innerHTML = countdownVar;
    }, 11000);
    setTimeout(() => {
        countdownVar--;
        countdown.innerHTML = countdownVar;
    }, 12000);
    setTimeout(() => {
        countdownVar--;
        countdown.innerHTML = countdownVar;
    }, 13000);
    setTimeout(() => {
        countdownVar--;
        countdown.innerHTML = countdownVar;
    }, 14000);
}

const runFunctions = () => {
    document.getElementById('play').disabled = true;
    reset();
    assignColors();
    countdownFunction();
    setTimeout(() => {
        countInARowValue();
        countTotalValue();
    }, 14000);
};

play.onclick = runFunctions;