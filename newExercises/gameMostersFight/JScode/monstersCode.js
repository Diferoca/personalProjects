let monsterAttackPlayer;
let opponentAttack;

function iniciarjuego() {
  let bottonMosterPlayer = document.getElementById('button-selectMosnter');
  bottonMosterPlayer.addEventListener('click', selectMosterPlayer);

  let fireButton = document.getElementById ('buttonFire');
  fireButton.addEventListener ('click', fireAttack);
  let waterButton = document.getElementById ('buttonWater');
  waterButton.addEventListener ('click', waterAttack);
  let earthButton = document.getElementById ('buttonEarth');
  earthButton.addEventListener ('click', earthAttack); 
  let twinButton = document.getElementById ('buttontwin');
  twinButton.addEventListener ('click', twinAttack);
}

function selectMosterPlayer (){

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
  if (monsterAttackPlayer == opponentAttack){
    theMessage('Draw');
  } else if (monsterAttackPlayer == 'WATER' && opponentAttack == 'FIRE'){
    theMessage('You Win!! 💪')
  } else if (monsterAttackPlayer == 'WATER' && opponentAttack == 'EARTH'){
    theMessage('You Win!! 💪')
  } else if (monsterAttackPlayer == 'EARTH' && opponentAttack == 'FIRE'){
    theMessage('You Win!! 💪')
  } else if (monsterAttackPlayer == 'WATER' && opponentAttack == 'TWIN'){
    theMessage('You Win!! 💪')
  } else {
    theMessage('You lose 😒')
  }
}

function theMessage (result){
  let messageSection = document.getElementById('Message');
  let message = document.createElement ('p');
  message.innerHTML = 'Your Monster attacked with ' + monsterAttackPlayer + ' Opponent Monster attacked whit '  + opponentAttack + ' ' + result;
  messageSection.appendChild (message);
}

function Random(min, max) {
    return Math.round(Math.random()*(max-min+1))+min;
}




window.addEventListener('load', iniciarjuego) //This attribute can be used for tell to browser that load first the html document without matter where is the position of our script into html document. 


