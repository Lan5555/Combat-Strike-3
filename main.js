let count = 0;
let playerHp = 1000;
let AiHp = 1000;
let playerMaxHealth = 1000;
let AiMaxHealth = 1000;
let left = document.querySelector('.left')
;
let right = document.querySelector('.right');
let player = document.querySelector('.player1');
let enemy = document.querySelector('.enemy1');
const boundaryWidth = 300; // Set the width of the movement area

let move;
let playerDamage = document.querySelector('.playerDamage');
let AiDamage = document.querySelector('.AiDamage');

function updatePosition() {
  player.style.transform = `translateX(${count}px)`;
}


function movement(direction) {
      move = setInterval(() => {
        switch (direction) {
          case 'right':
            if (count + player.clientWidth < boundaryWidth && count + player.clientWidth < 200) {
              count += 10;
            } else {
              clearInterval(move); // Stop movement if the limit is reached
            }
            break;
          case 'left':
            if (count > 0) {
              count -= 10;
            } else {
              clearInterval(move); // Stop movement if the limit is reached
            }
            break;
        }
        updatePosition();
        
      }, 70);
    }



function checkBoundaries() {
  const imgRect = player.getBoundingClientRect();

  // Prevent image from moving out of the boundary
  if (imgRect.right > boundaryWidth) {
    count = boundaryWidth - imgRect.width;
  }
  if (imgRect.left < 0) {
    count = 0;
  }
}

function stop(){
  clearInterval(move);
}



right.addEventListener('touchstart', () => movement('right'));
left.addEventListener('touchstart', () => movement('left'));
right.addEventListener('touchend', stop);
left.addEventListener('touchend', stop);

//Normal Attack
function normalAttack() {
  if(elements == 1){
  player.style.position = "fixed";
  player.style.height = "150px";
  player.style.right = "30%";
  player.src = "assests/characters/characters/Aerith/207001517 Attack.gif";
  player.style.zIndex = "999";
  setTimeout(() => {
    blink()
  }, 500)
  AiHp -= 200;
  
  setTimeout(() => {
  player.src = "assests/characters/characters/Aerith/207001517 Idle.gif"
  player.style.height = "";
  player.style.right = "20%";
  updateHp1();
  
  },2000);
  
  setTimeout(() => {
    AiAttack();
  }, 3500);
  
  } else if(elements == 2){
    player.style.position = "fixed";
    player.style.height = "150px";
    player.style.right = "30%";
    player.src = "assests/characters/characters/Noctis/215000105 Attack.gif";
    player.style.zIndex = "999";
    setTimeout(() => {
      blink()
    }, 1500)
    AiHp -= 200;
    //updateHp1();
    setTimeout(() => {
      player.src = "assests/characters/characters/Noctis/215000105 Idle.gif";
      player.style.height = "";
      player.style.right = "20%";
      updateHp1();
      
    }, 2000);
    
    setTimeout(() => {
      AiAttack();
    }, 3500);
    
  } else if (elements == 3) {
    player.style.position = "fixed";
    player.style.height = "150px";
    player.style.right = "41%";
    player.src = "assests/characters/characters/Dain/100033907 Attack.gif";
    player.style.zIndex = "999";
    setTimeout(() => {
      blink()
    }, 1500)
    AiHp -= 200;
    //updateHp1();
    setTimeout(() => {
      player.src = "assests/characters/characters/Dain/100033907 Idle.gif";
      player.style.height = "";
      player.style.right = "20%";
      updateHp1();
      
    }, 2000);
    
    setTimeout(() => {
      AiAttack();
    }, 3500);
  } else if (elements == 4) {
    player.style.position = "fixed";
    player.style.height = "160px";
    player.style.right = "42%";
    player.src = "assests/characters/characters/Riku/100033917 Attack.gif";
    player.style.zIndex = "999";
    setTimeout(() => {
      blink()
    }, 500)
    AiHp -= 200;
   // updateHp1();
    setTimeout(() => {
      player.src = "assests/characters/characters/Riku/100033917 Idle.gif";
      player.style.height = "";
      player.style.right = "20%";
      updateHp1();
      
    }, 2000);
    
    setTimeout(() => {
      AiAttack();
    }, 3500);
  } else if (elements == 5) {
    player.style.position = "fixed";
    player.style.height = "90px";
    player.style.right = "30%";
    player.src = "assests/characters/characters/Lily/100034005 Attack.gif";
    player.style.zIndex = "999";
    setTimeout(() => {
      blink()
    }, 800)
    AiHp -= 200;
   // updateHp1();
    setTimeout(() => {
      player.src = "assests/characters/characters/Lily/100034005 Idle.gif";
      player.style.height = "";
      player.style.right = "20%";
      updateHp1();
      
    }, 2000);
    
    setTimeout(() => {
      AiAttack();
    }, 3500);
  } else if (elements == 6) {
    player.style.position = "fixed";
    player.style.height = "200px";
    player.style.right = "55%";
    player.src = "assests/img/335000307 Attack.gif";
    player.style.zIndex = "999";
    setTimeout(() => {
      blink()
    }, 1000)
    AiHp -= 200;
    //updateHp1();
    setTimeout(() => {
      player.src = "assests/img/335000305 Standby.gif"
      player.style.height = "";
      player.style.right = "20%";
      updateHp1();
      
    }, 2000);
    
    setTimeout(() => {
      AiAttack();
    }, 3500);
    
  } else if (elements == 7) {
    player.style.position = "fixed";
    player.style.height = "150px";
    player.style.right = "54%";
    player.src = "assests/characters/characters/cloud/207000127 Attack.gif";
    player.style.zIndex = "999";
    setTimeout(() => {
      blink()
    }, 500)
    AiHp -= 200;
    //updateHp1();
    setTimeout(() => {
      player.src = "assests/characters/characters/cloud/207000117 Standby.gif";
      player.style.height = "";
      player.style.right = "20%";
      updateHp1();
      
    }, 2000);
    
    setTimeout(() => {
      AiAttack();
    }, 3500);
    
  } else if (elements == 8) {
    player.style.position = "fixed";
    player.style.height = "60px";
    player.style.right = "30%";
    player.src = "assests/characters/characters/Jean/207001405 Attack.gif";
    player.style.zIndex = "999";
    setTimeout(() => {
      blink()
    }, 500)
    AiHp -= 200;
    //updateHp1();
    setTimeout(() => {
      player.src = "assests/characters/characters/Jean/207001405 Idle.gif";
      player.style.height = "";
      player.style.right = "20%";
      updateHp1();
   
    }, 2000);
    setTimeout(() => {
      AiAttack();
    }, 3500);
    
  } else if (elements == 9) {
    player.style.position = "fixed";
    player.style.height = "170px";
    player.style.right = "54%";
    player.src = "assests/characters/characters/Tifa/207002317 Limit.gif";
    player.style.zIndex = "999";
    setTimeout(() => {
      blink()
    }, 700)
    AiHp -= 200;
   // updateHp1();
    setTimeout(() => {
      player.src = "assests/characters/characters/Tifa/207002317 Idle.gif";
      player.style.height = "";
      player.style.right = "20%";
      updateHp1();
      
    }, 2000);
    setTimeout(() => {
      AiAttack();
    }, 3500);
    
  } else if (elements == 10) {
    player.style.position = "fixed";
    player.style.height = "140px";
    player.style.right = "44%";
    player.src = "assests/characters/characters/TifaA/207002307 Attack.gif";
    setTimeout(() => {
      blink()
    }, 1500)
    player.style.zIndex = "999";
    AiHp -= 200;
   // updateHp1();
    setTimeout(() => {
      player.src = "assests/characters/characters/TifaA/207002307 Idle.gif";
      player.style.height = "";
      player.style.right = "20%";
      updateHp1();
      
    }, 2000);
    
    setTimeout(() => {
      AiAttack();
    }, 3500);
    
  } else if (elements == 11) {
    player.style.position = "fixed";
    player.style.height = "240px";
    player.style.right = "50%";
    player.style.top = "-0.25%";
    player.src = "assests/characters/characters/Reno/207001327 Limit.gif";
    setTimeout(() => {
      blink()
    }, 2800)
    player.style.zIndex = "999";
    AiHp -= 200;
    //updateHp1();
    setTimeout(() => {
      player.src = "assests/characters/characters/Reno/207001327 Idle.gif";
      player.style.height = "";
      player.style.top = "";
      player.style.right = "20%";
      updateHp1();
      
    }, 5000);
    
    setTimeout(() => {
      AiAttack();
    }, 6000);
    
  } else if (elements == 12) {
    player.style.position = "fixed";
    player.style.height = "140px";
    player.style.right = "27%";
    player.src = "assests/characters/characters/Spear/312001007 Attack.gif";
    player.style.zIndex = "999";
    setTimeout(() => {
      blink()
    }, 1200)
    AiHp -= 200;
   // updateHp1();
    setTimeout(() => {
      player.src = "assests/characters/characters/Spear/312001007 Idle.gif";
      player.style.height = "";
      player.style.right = "20%";
      updateHp1();
      
    }, 2000);
    
    setTimeout(() => {
      AiAttack();
    }, 3500);
  } else if (elements == 13) {
    player.style.position = "fixed";
    player.style.height = "150px";
    player.style.right = "45%";
    player.src = "assests/characters/characters/Li/211001517 Limit.gif";
    player.style.zIndex = "999";
    setTimeout(() => {
      blink()
    }, 1500)
    AiHp -= 200;
   // updateHp1();
    setTimeout(() => {
      player.src = "assests/characters/characters/Li/211001517 Idle.gif";
      player.style.height = "";
      player.style.right = "20%";
      updateHp1();
     
    }, 2000);
    
    setTimeout(() => {
      AiAttack();
    }, 3500);
    
  } else if (elements == 14) {
    player.style.position = "fixed";
    player.style.height = "150px";
    player.style.right = "42%";
    player.src = "assests/characters/characters/cleric twin/207001227 Attack.gif";
    player.style.zIndex = "999";
    setTimeout(() => {
      blink()
    }, 1000)
    AiHp -= 200;
   // updateHp1();
    setTimeout(() => {
      player.src = "assests/characters/characters/cleric/207001217 Idle.gif";
      player.style.height = "";
      player.style.right = "20%";
      updateHp1();
     
    }, 2000);
    
    setTimeout(() => {
      AiAttack();
    }, 3500);
    
  } else if (elements == 15) {
    player.style.position = "fixed";
    player.style.height = "150px";
    player.style.right = "40%";
    player.src = "assests/characters/characters/Chubi/211000827 Attack.gif";
    player.style.zIndex = "999";
    setTimeout(() => {
      blink()
    }, 1000)
    AiHp -= 200;
   // updateHp1();
    setTimeout(() => {
      player.src = "assests/characters/characters/Chubi/211000827 Idle.gif";
      player.style.height = "";
      player.style.right = "20%";
      updateHp1();
      
    }, 2000);
    setTimeout(() => {
      AiAttack();
    },3500);
  }
}

//Skills
function playerSkill(){
  
}
//Healing
function playerHeal(){
  
}



//AiDecision
function AiChioce(){
  let randomChioce = Math.floor(Math.random() * (3 - 1) + 1);
  if(randomChioce === 1){
    AiAttack();
  }else if(randomChioce === 2){
    AiSkill();
  }else if(randomChioce === 3){
    AiHeal();
  }
}

//AiAttack
const AiAttack = () => {
  
  if(rand == 0){
  enemy.style.position = "fixed";
  enemy.style.right = "7%";
  enemy.style.top = "4%";
  enemy.src = "assests/characters/Bosses/Aerith/ezgif.com-rotate (1).gif";
  setTimeout(() => {
    blink()
  }, 500)
  playerHp -= 200;
  setTimeout(() => {
    enemy.src = "assests/characters/Bosses/Aerith/ezgif.com-rotate.gif";
    enemy.style.position = "";
    enemy.style.right = "";
    enemy.style.top = "";
     updateHp2();
  },2000);
  }else if (rand == 1) {
    enemy.style.position = "fixed";
    enemy.style.right = "0.5%";
    enemy.style.top = "10%";
    enemy.src = "assests/characters/Bosses/Cain/ezgif.com-rotate (16).gif";
    setTimeout(() => {
      blink()
    }, 1000)
    playerHp -= 200;
    setTimeout(() => {
      enemy.src = "assests/characters/Bosses/Cain/ezgif.com-rotate (14).gif";
      enemy.style.position = "";
      enemy.style.right = "";
      enemy.style.top = "";
      updateHp2();
    }, 2000);
    
  }else if (rand == 2) {
    enemy.style.position = "fixed";
    enemy.style.right = "0.5%";
    enemy.style.top = "0.5%";
    enemy.src = "assests/img/Sephiroth_3.gif";
    setTimeout(() => {
      blink()
    }, 3000)
    playerHp -= 200;
    setTimeout(() => {
      enemy.src = "assests/img/Sephiroth_5.gif";
      enemy.style.position = "";
      enemy.style.right = "";
      enemy.style.top = "";
      updateHp2();
    }, 5000);
    
  }else if (rand == 3) {
    enemy.style.position = "fixed";
    enemy.style.right = "0.5%";
    enemy.style.top = "0.5%";
    enemy.src = "assests/characters/Bosses/Dain/ezgif.com-rotate (7).gif";
    setTimeout(() => {
      blink()
    }, 1500)
    playerHp -= 200;
    setTimeout(() => {
      enemy.src = "assests/characters/Bosses/Dain/ezgif.com-rotate (6).gif";
      enemy.style.position = "";
      enemy.style.right = "";
      enemy.style.top = "";
      updateHp2();
    }, 2000);
  }else if (rand == 4) {
    enemy.style.position = "fixed";
    enemy.style.right = "10%";
    enemy.style.top = "0.5%";
    enemy.src = "assests/characters/Bosses/Hugo/ezgif.com-rotate (9).gif";
    setTimeout(() => {
      blink()
    }, 500)
    playerHp -= 200;
    setTimeout(() => {
      enemy.src = "assests/characters/Bosses/Hugo/ezgif.com-rotate (8).gif";
      enemy.style.position = "";
      enemy.style.right = "";
      enemy.style.top = "";
      updateHp2();
    }, 2000);
  }else if (rand == 5) {
    enemy.style.position = "fixed";
    enemy.style.right = "30%";
    enemy.style.top = "30%";
    enemy.src = "assests/characters/Bosses/Jean/ezgif.com-rotate (24).gif";
    setTimeout(() => {
      blink()
    }, 500)
    playerHp -= 200;
    setTimeout(() => {
      enemy.src = "assests/characters/Bosses/Jean/ezgif.com-rotate (23).gif";
      enemy.style.position = "";
      enemy.style.right = "";
      enemy.style.top = "";
      updateHp2();
    }, 2000);
  }else if (rand == 6) {
    enemy.style.position = "fixed";
    enemy.style.right = "0.5%";
    enemy.style.top = "0.5%";
    enemy.src = "assests/characters/Bosses/Monster/ezgif.com-rotate (4).gif";
    setTimeout(() => {
      blink()
    }, 1000)
    playerHp -= 200;
    setTimeout(() => {
      enemy.src = "assests/characters/Bosses/Monster/ezgif.com-rotate (3).gif";
      enemy.style.position = "";
      enemy.style.right = "";
      enemy.style.top = "";
      updateHp2();
    }, 2000);
  }else if (rand == 7) {
    enemy.style.position = "fixed";
    enemy.style.right = "0.5%";
    enemy.style.top = "-50%";
    enemy.src = "assests/characters/Bosses/Reno/ezgif.com-rotate (18).gif";
    setTimeout(() => {
      blink()
    }, 2800)
    playerHp -= 200;
    setTimeout(() => {
      enemy.src = "assests/characters/Bosses/Reno/ezgif.com-rotate (17).gif";
      enemy.style.position = "";
      enemy.style.right = "";
      enemy.style.top = "";
      updateHp2();
    }, 5000);
  }else if (rand == 8) {
    enemy.style.position = "fixed";
    enemy.style.right = "15%";
    enemy.style.top = "10%";
    enemy.src = "assests/characters/Bosses/TifaA/ezgif.com-rotate (20).gif";
    setTimeout(() => {
      blink()
    }, 2000)
    playerHp -= 200;
    setTimeout(() => {
      enemy.src = "assests/characters/Bosses/TifaA/ezgif.com-rotate (19).gif";
      enemy.style.position = "";
      enemy.style.right = "";
      enemy.style.top = "";
      updateHp2();
    }, 2000);
  }else if (rand == 9) {
    enemy.style.position = "fixed";
    enemy.style.right = "10%";
    enemy.style.top = "0.5%";
    enemy.src = "assests/characters/Bosses/TifaB/ezgif.com-rotate (22).gif";
    setTimeout(() => {
      blink()
    }, 3500)
    playerHp -= 200;
    setTimeout(() => {
      enemy.src = "assests/characters/Bosses/TifaB/ezgif.com-rotate (21).gif";
      enemy.style.position = "";
      enemy.style.right = "";
      enemy.style.top = "";
      updateHp2();
    }, 2000);
  }  
  
}
//AiSkill
const AiSkill = () => {
  
}
// AiHeal
const AiHeal = () => {
  
}
let play1 = document.querySelector('.intro');
let firstIntro = document.querySelector('.firstIntro');
let secondIntro = document.querySelector('.secondIntro');
let selectCharacter = document.querySelector('.selectCharacter');

function play(){
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
      document.documentElement.msRequestFullscreen();
    }
  let button = document.querySelector('.play');
  play1.style.display = "block";
  button.style.display = "none";
  play1.src = "/assests/intro/intro.mp4";
  play1.play();
}
play1.addEventListener('ended',() => {
  firstIntro.style.display = "none";
  secondIntro.style.display = "block";
});

let holder = document.querySelectorAll('.holder');
let imageSelector = document.querySelector('.imageSelector');

const Menu = () => {
  secondIntro.style.display = "none";
  selectCharacter.style.display = "block";
  
  
}
let left1 = document.querySelector('.left1');
let right1 = document.querySelector('.right1');
let elements = 0;
const moveBack = () => {
  elements--;
}

const moveForward = () => {
    elements++;
};
  
let playerName = document.querySelector('.playerName');
let AiName = document.querySelector('.AiName');
window.onload = () => {
  AiCharacter();
  
  setInterval(() => {
    if(elements <= 0) elements = 1;
    if(elements > 15) elements = 0;
    switch (elements) {
      case 1:
        holder[14].style.backgroundColor = "black";
        holder[14].style.color = "white";
        holder[14].style.border = "none";
        //reset
        holder[0].style.backgroundColor = "red";
        holder[0].style.color = "white";
        holder[0].style.border = "1px solid white";
        holder[1].style.backgroundColor = "black";
        holder[1].style.color = "white";
        holder[1].style.border = "none";
        //reset
        displayCharacter.src = "assests/characters/characters/Aerith/207001517 Idle.gif?";
        //updateHp2();
        playerName.innerHTML = "Aerith:" + playerHp;
        break;
      case 2:
        holder[0].style.backgroundColor = "black";
        holder[0].style.color = "white";
        holder[0].style.border = "none";
        //reset
        holder[1].style.backgroundColor = "red";
        holder[1].style.color = "white";
        holder[1].style.border = "1px solid white";
        holder[2].style.backgroundColor = "black";
        holder[2].style.color = "white";
        holder[2].style.border = "none";
        //reset
        displayCharacter.src = "assests/characters/characters/Noctis/215000105 Idle.gif";
        playerName.innerHTML = "Noctis:" + playerHp;
        break;
      case 3:
        holder[1].style.backgroundColor = "black";
        holder[1].style.color = "white";
        holder[1].style.border = "none";
        //reset
        holder[2].style.backgroundColor = "red";
        holder[2].style.color = "white";
        holder[2].style.border = "1px solid white";
        holder[3].style.backgroundColor = "black";
        holder[3].style.color = "white";
        holder[3].style.border = "none";
        //reset
        displayCharacter.src = "assests/characters/characters/Dain/100033907 Idle.gif";
        playerName.innerHTML = "Dain:" + playerHp;
        break;
      case 4:
        holder[2].style.backgroundColor = "black";
        holder[2].style.color = "white";
        holder[2].style.border = "none";
        //reset
        holder[3].style.backgroundColor = "red";
        holder[3].style.color = "white";
        holder[3].style.border = "1px solid white";
        holder[4].style.backgroundColor = "black";
        holder[4].style.color = "white";
        holder[4].style.border = "none";
        //reset
        displayCharacter.src = "assests/characters/characters/Riku/100033917 Idle.gif";
        playerName.innerHTML = "Riku:" + playerHp;
        break;
      case 5:
        holder[3].style.backgroundColor = "black";
        holder[3].style.color = "white";
        holder[3].style.border = "none";
        //reset
        holder[4].style.backgroundColor = "red";
        holder[4].style.color = "white";
        holder[4].style.border = "1px solid white";
        holder[5].style.backgroundColor = "black";
        holder[5].style.color = "white";
        holder[5].style.border = "none";
        //reset
        displayCharacter.src = "assests/characters/characters/Lily/100034005 Idle.gif";
        playerName.innerHTML = "Lily:" + playerHp;
        break;
      case 6:
        holder[4].style.backgroundColor = "black";
        holder[4].style.color = "white";
        holder[4].style.border = "none";
        //reset
        holder[5].style.backgroundColor = "red";
        holder[5].style.color = "white";
        holder[5].style.border = "1px solid white";
        holder[6].style.backgroundColor = "black";
        holder[6].style.color = "white";
        holder[6].style.border = "none";
        //reset
        displayCharacter.src = "assests/img/335000305 Standby.gif";
        playerName.innerHTML = "Sephiroth:" + playerHp;
        break;
      case 7:
        holder[5].style.backgroundColor = "black";
        holder[5].style.color = "white";
        holder[5].style.border = "none";
        //reset
        holder[6].style.backgroundColor = "red";
        holder[6].style.color = "white";
        holder[6].style.border = "1px solid white";
        holder[7].style.backgroundColor = "black";
        holder[7].style.color = "white";
        holder[7].style.border = "none";
        //reset
        displayCharacter.src = "assests/characters/characters/cloud/207000117 Standby.gif";
        playerName.innerHTML = "Cloud:" + playerHp;
        break;
      case 8:
        holder[6].style.backgroundColor = "black";
        holder[6].style.color = "white";
        holder[6].style.border = "none";
        //reset
        holder[7].style.backgroundColor = "red";
        holder[7].style.color = "white";
        holder[7].style.border = "1px solid white";
        holder[8].style.backgroundColor = "black";
        holder[8].style.color = "white";
        holder[8].style.border = "none";
        //reset
        displayCharacter.src = "assests/characters/characters/Jean/207001405 Idle.gif";
        playerName.innerHTML = "Jean:" + playerHp;
        break;
      case 9:
        holder[7].style.backgroundColor = "black";
        holder[7].style.color = "white";
        holder[7].style.border = "none";
        //reset
        holder[8].style.backgroundColor = "red";
        holder[8].style.color = "white";
        holder[8].style.border = "1px solid white";
        holder[9].style.backgroundColor = "black";
        holder[9].style.color = "white";
        holder[9].style.border = "none";
        //reset
        displayCharacter.src = "assests/characters/characters/Tifa/207002317 Idle.gif";
        playerName.innerHTML = "Tifa:" + playerHp;
        break;
      case 10:
        holder[8].style.backgroundColor = "black";
        holder[8].style.color = "white";
        holder[8].style.border = "none";
        //reset
        holder[9].style.backgroundColor = "red";
        holder[9].style.color = "white";
        holder[9].style.border = "1px solid white";
        holder[10].style.backgroundColor = "black";
        holder[10].style.color = "white";
        holder[10].style.border = "none";
        //reset
        displayCharacter.src = "assests/characters/characters/TifaA/207002307 Idle.gif";
        playerName.innerHTML = "TifaA:" + playerHp;
        break;
      case 11:
        holder[9].style.backgroundColor = "black";
        holder[9].style.color = "white";
        holder[9].style.border = "none";
        //reset
        holder[10].style.backgroundColor = "red";
        holder[10].style.color = "white";
        holder[10].style.border = "1px solid white";
        holder[11].style.backgroundColor = "black";
        holder[11].style.color = "white";
        holder[11].style.border = "none";
        //reset
        displayCharacter.src = "assests/characters/characters/Reno/207001327 Idle.gif";
        playerName.innerHTML = "Reno:" + playerHp;
        break;
      case 12:
        holder[10].style.backgroundColor = "black";
        holder[10].style.color = "white";
        holder[10].style.border = "none";
        //reset
        holder[11].style.backgroundColor = "red";
        holder[11].style.color = "white";
        holder[11].style.border = "1px solid white";
        holder[12].style.backgroundColor = "black";
        holder[12].style.color = "white";
        holder[12].style.border = "none";
        //reset
        displayCharacter.src = "assests/characters/characters/Spear/312001007 Idle.gif";
        playerName.innerHTML = "Spear:" + playerHp;
        break;
      case 13:
        holder[11].style.backgroundColor = "black";
        holder[11].style.color = "white";
        holder[11].style.border = "none";
        //reset
        holder[12].style.backgroundColor = "red";
        holder[12].style.color = "white";
        holder[12].style.border = "1px solid white";
        holder[13].style.backgroundColor = "black";
        holder[13].style.color = "white";
        holder[13].style.border = "none";
        //reset
        displayCharacter.src = "assests/characters/characters/Li/211001517 Idle.gif";
        playerName.innerHTML = "Li:" + playerHp;
        break;
      case 14:
        holder[12].style.backgroundColor = "black";
        holder[12].style.color = "white";
        holder[12].style.border = "none";
        //reset
        holder[13].style.backgroundColor = "red";
        holder[13].style.color = "white";
        holder[13].style.border = "1px solid white";
        holder[14].style.backgroundColor = "black";
        holder[14].style.color = "white";
        holder[14].style.border = "none";
        //reset
        displayCharacter.src = "assests/characters/characters/cleric/207001217 Idle.gif";
        playerName.innerHTML = "Cleric:" + playerHp;
        break;
      case 15:
        holder[13].style.backgroundColor = "black";
        holder[13].style.color = "white";
        holder[13].style.border = "none";
        //reset
        holder[14].style.backgroundColor = "red";
        holder[14].style.color = "white";
        holder[14].style.border = "1px solid white";
        holder[0].style.backgroundColor = "black";
        holder[0].style.color = "white";
        holder[0].style.border = "none";
        //reset
        displayCharacter.src = "assests/characters/characters/Chubi/211000827 Idle.gif";
        playerName.innerHTML = "Chubi:" + playerHp;
        
        break;
      
    }
  },350);
  
}

const fetchCharacter = () => {
  if(elements == 1){
    player.src = "assests/characters/characters/Aerith/207001517 Idle.gif";
  } else if (elements == 2) {
    player.src = "assests/characters/characters/Noctis/215000105 Idle.gif";
  } else if (elements == 3) {
    player.src = "assests/characters/characters/Dain/100033907 Idle.gif";
  }else if (elements == 4) {
    player.src = "assests/characters/characters/Riku/100033917 Idle.gif";
  } else if (elements == 5) {
    player.src = "assests/characters/characters/Lily/100034005 Idle.gif";
  } else if (elements == 6) {
    player.src = "assests/img/335000305 Standby.gif";
  } else if (elements == 7) {
    player.src = "assests/characters/characters/cloud/207000117 Standby.gif";
  } else if (elements == 8) {
    player.src = "assests/characters/characters/Jean/207001405 Idle.gif";
  } else if (elements == 9) {
    player.src = "assests/characters/characters/Tifa/207002317 Idle.gif";
  }else if(elements == 10) {
    player.src = "assests/characters/characters/TifaA/207002307 Idle.gif";
  } else if (elements == 11) {
    player.src = "assests/characters/characters/Reno/207001327 Idle.gif";
  } else if (elements == 12) {
    player.src = "assests/characters/characters/Spear/312001007 Idle.gif";
  } else if (elements == 13) {
    player.src = "assests/characters/characters/Li/211001517 Idle.gif";
  } else if (elements == 14) {
    player.src = "assests/characters/characters/cleric/207001217 Idle.gif";
  } else if (elements == 15) {
    player.src = "assests/characters/characters/Chubi/211000827 Idle.gif";
  }else{
    
  }
  setTimeout(() => {
    selectCharacter.style.display = "none";
    game.style.display = "block";
  },2000);
}
  let displayCharacter = document.querySelector('.displayCharacter');
  let game = document.querySelector('.Game');
right1.addEventListener('click', () => moveForward());
left1.addEventListener('click',() => moveBack());

let aiCharacters = ["assests/characters/Bosses/Aerith/ezgif.com-rotate.gif","assests/characters/Bosses/Cain/ezgif.com-rotate (14).gif","assests/img/Sephiroth_5.gif","assests/characters/Bosses/Dain/ezgif.com-rotate (6).gif","assests/characters/Bosses/Hugo/ezgif.com-rotate (8).gif","assests/characters/Bosses/Jean/ezgif.com-rotate (23).gif","assests/characters/Bosses/Monster/ezgif.com-rotate (3).gif","assests/characters/Bosses/Reno/ezgif.com-rotate (17).gif","assests/characters/Bosses/TifaA/ezgif.com-rotate (19).gif","assests/characters/Bosses/TifaB/ezgif.com-rotate (21).gif"];
let aiAttacks = [];
let aiSkills = [];
let rand = Math.floor(Math.random() * aiCharacters.length);

const AiCharacter = () => {
  enemy.src = aiCharacters[rand];
  if(rand == 0){
    AiName.innerHTML = "Aerith:"+AiHp;
  }else if(rand == 1){
    AiName.innerHTML = "Cain:"+AiHp;
  }else if (rand == 2) {
    AiName.innerHTML = "Sephiroth:"+AiHp;
  }else if (rand == 3) {
    AiName.innerHTML = "Dain:"+AiHp;
  }else if (rand == 4) {
    AiName.innerHTML = "Hugo:"+AiHp;
  }else if (rand == 5) {
    AiName.innerHTML = "Jean:"+AiHp;
  }else if (rand == 6) {
    AiName.innerHTML = "Munstrum:"+AiHp;
  }else if (rand == 7) {
    AiName.innerHTML = "Reno:"+AiHp;
  }else if (rand == 8) {
    AiName.innerHTML = "TifaA:"+AiHp;
  }else if (rand == 9) {
    AiName.innerHTML = "Tifa:"+AiHp;
  }
}
let bar1 = document.querySelector('#bar1');
let bar2 = document.querySelector('#bar2');

const updateHp1 = () => {
  const health = (AiHp / playerMaxHealth) * 100;
  AiDamage.style.display = "block";
  AiDamage.innerHTML = 200;
  setTimeout(() => {
    AiDamage.style.display = "none";
  },1000);
  bar1.style.width = `${health}%`;
  if (rand == 0) {
    AiName.innerHTML = "Aerith:" + AiHp;
  } else if (rand == 1) {
    AiName.innerHTML = "Cain:" + AiHp;
  } else if (rand == 2) {
    AiName.innerHTML = "Sephiroth:" + AiHp;
  } else if (rand == 3) {
    AiName.innerHTML = "Dain:" + AiHp;
  } else if (rand == 4) {
    AiName.innerHTML = "Hugo:" + AiHp;
  } else if (rand == 5) {
    AiName.innerHTML = "Jean:" + AiHp;
  } else if (rand == 6) {
    AiName.innerHTML = "Munstrum:" + AiHp;
  } else if (rand == 7) {
    AiName.innerHTML = "Reno:" + AiHp;
  } else if (rand == 8) {
    AiName.innerHTML = "TifaA:" + AiHp;
  } else if (rand == 9) {
    AiName.innerHTML = "Tifa:" + AiHp;
  }
}

const updateHp2 = () => {
  const health = (playerHp / playerMaxHealth) * 100;
  playerDamage.style.display = "block";
  playerDamage.innerHTML = 200;
  setTimeout(() => {
    playerDamage.style.display = "none";
  }, 1000);
  bar2.style.width = `${health}%`;
  if (elements == 1) {
    playerName.innerHTML = "Aerith:" + playerHp;
  } else if (elements == 2) {
    playerName.innerHTML = "Noctis:" + playerHp;
  } else if (elements == 3) {
    playerName.innerHTML = "Dain:" + playerHp;
  } else if (elements == 4) {
    playerName.innerHTML = "Riku:" + playerHp;
  } else if (elements == 5) {
    playerName.innerHTML = "Lily:" + playerHp;
  } else if (elements == 6) {
    playerName.innerHTML = "Dark:" + playerHp;
  } else if (elements == 7) {
    playerName.innerHTML = "Cloud:" + playerHp;
  } else if (elements == 8) {
    playerName.innerHTML = "Jean:" + playerHp;
  } else if (elements == 9) {
    playerName.innerHTML = "Tifa:" + playerHp;
  } else if (elements == 10) {
    playerName.innerHTML = "TifaA:" + playerHp;
  }else if (elements == 11) {
    playerName.innerHTML = "Reno:" + playerHp;
  }else if (elements == 12) {
    playerName.innerHTML = "Spear:" + playerHp;
  }else if (elements == 13) {
    playerName.innerHTML = "Li:" + playerHp;
  }else if (elements == 14) {
    playerName.innerHTML = "Cleric:" + playerHp;
  }else if (elements == 15) {
    playerName.innerHTML = "Chubi:" + playerHp;
  }
}
left.addEventListener('click',() => {
  left.style.backgroundColor = "red";
  setTimeout(() => {
    left.style.backgroundColor = "black";
  },100);
});
left1.addEventListener('click', () => {
  left1.style.backgroundColor = "red";
  setTimeout(() => {
    left1.style.backgroundColor = "black";
  }, 100);
});
right.addEventListener('click', () => {
  right.style.backgroundColor = "red";
  setTimeout(() => {
    right.style.backgroundColor = "black";
  },100);
});
right1.addEventListener('click', () => {
  right1.style.backgroundColor = "red";
  setTimeout(() => {
    right1.style.backgroundColor = "black";
  }, 100);
});
let attack = document.querySelector('.attack');
let enter = document.querySelector('.enter');
attack.addEventListener(('click'), () => {
  attack.style.backgroundColor = "red";
  setTimeout(() => {
    attack.style.backgroundColor = "black";
  }, 100);
});
enter.addEventListener(('click'),() => {
    enter.style.backgroundColor = "red";
    setTimeout(() => {
      enter.style.backgroundColor = "black";
    }, 100);
});
let blinker = document.querySelector('.blink');
  const blink = () => {
  blinker.style.display = "block";
  setTimeout(() => {
    blinker.style.display = "none";
  },100);
}