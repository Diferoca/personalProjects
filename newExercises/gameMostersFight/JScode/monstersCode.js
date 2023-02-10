let monsterAttackPlayer;
let opponentAttack;
let playerLives = 3;
let opponentLives = 3;

function startgame() {

  let sectionSelectAtack = document.getElementById ('Select-Attack');
  sectionSelectAtack.style.display = 'none';

  let sectionRestar = document.getElementById('Restart');
  sectionRestar.style.display = 'none';

  let bottonMosterPlayer = document.getElementById('button-selectMosnter');
  bottonMosterPlayer.addEventListener('click',selectMosterPlayer);

  let fireButton = document.getElementById ('buttonFire');
  fireButton.addEventListener ('click', fireAttack);
  let waterButton = document.getElementById ('buttonWater');
  waterButton.addEventListener ('click', waterAttack);
  let earthButton = document.getElementById ('buttonEarth');
  earthButton.addEventListener ('click', earthAttack); 
  let twinButton = document.getElementById ('buttontwin');
  twinButton.addEventListener ('click', twinAttack);
  let resetButton = document.getElementById('buttonRestart');
  resetButton.addEventListener ('click', restartGame)
}

function selectMosterPlayer (){

  let sectionSelectMonster = document.getElementById ('Select-Monster');
  sectionSelectMonster.style.display = 'none';

  let sectionSelectAtack = document.getElementById ('Select-Attack');
  sectionSelectAtack.style.display = 'block';

  let inputTsunami = document.getElementById('Tsunami')
  let inputEarthquake = document.getElementById('Earthquake')
  let inputFirewave = document.getElementById('Firewave')
  let inputCloneboth0 = document.getElementById('Cloneboth0')
  let spanMonsterPlayer = document.getElementById('monsterPlayer')
  
// The property checked is used for ckeck if the id was selected by the user. 

  if (inputTsunami.checked){
    spanMonsterPlayer.innerHTML = 'Tsunami'
  }
  else if (inputEarthquake.checked){
    spanMonsterPlayer.innerHTML = 'Earthquake'
  }
  else if (inputFirewave.checked){
    spanMonsterPlayer.innerHTML = 'Firewave' 
  }
  else if (inputCloneboth0.checked){
    spanMonsterPlayer.innerHTML = 'Cloneboth0'
  }
  else {
    alert('You did not select any monster')
  }
  selectMosterOpponent();
}

function selectMosterOpponent (){
  
  let opponentMonster = Random (1, 4);
  let spanMonsterOpponent = document.getElementById('monsterOpponent');

  if (opponentMonster == 1){
    spanMonsterOpponent.innerHTML = 'Tsunami';
  }
  else if(opponentMonster == 2){
    spanMonsterOpponent.innerHTML = 'Earthquake';
  }
  else if(opponentMonster == 3){
    spanMonsterOpponent.innerHTML = 'Firewave';
  }
  else if (opponentMonster == 4){
    spanMonsterOpponent.innerHTML = 'Cloneboth0'; 
  }

}

function fireAttack(){
  monsterAttackPlayer = 'FIRE';
  opponentRandomAtack ();
}
function waterAttack(){
  monsterAttackPlayer = 'WATER';
  opponentRandomAtack ();
}
function earthAttack(){
  monsterAttackPlayer = 'EARTH';
  opponentRandomAtack ();
}
function twinAttack(){
  monsterAttackPlayer = 'TWIN';
  opponentRandomAtack ();
}
function opponentRandomAtack (){
  let randomAttack = Random (1, 4);

  if (randomAttack == 1){
    opponentAttack = 'FIRE';
  }else if (randomAttack == 2){
    opponentAttack = 'WATER';
  }else if (randomAttack == 3){
    opponentAttack = 'EARTH';
  }else if (randomAttack == 4){
    opponentAttack = 'TWIN';
  }

  fight();

}

function fight(){
  let spanPlayerLives = document.getElementById('monsterPlayerlives');
  let spanOpponetLives = document.getElementById('opponetMonsterLives')

  if (monsterAttackPlayer == opponentAttack){
    theMessage('Draw');
  } else if (monsterAttackPlayer == 'EARTH' && opponentAttack == 'TWIN'){
    theMessage('Draw')
  } else if (monsterAttackPlayer == 'FIRE' && opponentAttack == 'WATER'){
    opponentLives --;
    spanOpponetLives.innerHTML = opponentLives
    theMessage('You Win!! 💪')
  } else if (monsterAttackPlayer == 'WATER' && opponentAttack == 'EARTH'){
    opponentLives --;
    spanOpponetLives.innerHTML = opponentLives
    theMessage('You Win!! 💪')
  } else if (monsterAttackPlayer == 'EARTH' && opponentAttack == 'FIRE'){
    opponentLives --;
    spanOpponetLives.innerHTML = opponentLives
    theMessage('You Win!! 💪')
  } else if (monsterAttackPlayer == 'WATER' && opponentAttack == 'TWIN'){
    opponentLives --;
    spanOpponetLives.innerHTML = opponentLives
    theMessage('You Win!! 💪')
  } else if (monsterAttackPlayer == 'TWIN' && opponentAttack == 'FIRE'){
    opponentLives --;
    spanOpponetLives.innerHTML = opponentLives
    theMessage('You Win!! 💪')
  } else if (monsterAttackPlayer == 'TWIN' && opponentAttack == 'WATER'){
    opponentLives --;
    spanOpponetLives.innerHTML = opponentLives
    theMessage('You Win!! 💪')
  } else {
    theMessage('You lose 😒')
    playerLives --
    spanPlayerLives.innerHTML = playerLives;
  }
  contLives();
}

function contLives() {

    if (playerLives == 0){
      finalMessage('You lose the Battle Opponent Win 😒😒😒');
      returnButtonReset();
    } 
    else if ( opponentLives == 0){
      finalMessage('Opponent lose the Battle You Win 💪🏆🏆');
      returnButtonReset();
    }
  }
  
function theMessage (result){
  let messageSection = document.getElementById('Message');
  let message = document.createElement ('p');
  message.innerHTML = 'Your Monster attacked with ' + monsterAttackPlayer + ' Opponent Monster attacked whit '  + opponentAttack + ' ' + result;
  messageSection.appendChild (message);
}

function finalMessage (finalResult){
  let finalMessageSection = document.getElementById('Message');
  let message = document.createElement ('p');
  message.innerHTML = finalResult;
  finalMessageSection.appendChild (message);

  let fireButton = document.getElementById ('buttonFire');
  fireButton.disabled = true;
  let waterButton = document.getElementById ('buttonWater');
  waterButton.disabled = true;
  let earthButton = document.getElementById ('buttonEarth');
  earthButton.disabled = true; 
  let twinButton = document.getElementById ('buttontwin');
  twinButton.disabled = true;
  // The method disabled is used to disable every buttom that you need so in this case we use it to disable the buttons when the function cont lives get to cero.
}

function restartGame (){
  
  location.reload();
  
}

function Random(min, max) {
    return Math.round(Math.random()*(max-min+1))+min;
}

function returnButtonReset(){
  let sectionRestar = document.getElementById('Restart');
  sectionRestar.style.display = 'block';
}

window.addEventListener('load', startgame) //This attribute can be used for tell to browser that load first the html document without matter where is the position of our script into html document. 


