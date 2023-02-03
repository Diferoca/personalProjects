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
  
// TODO: The property checked is used for ckeck if the id was selected by the user. 

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
  monsterAttackPlayer = 'Fire';
  opponentRandomAtack ();
}
function waterAttack(){
  monsterAttackPlayer = 'Water';
  opponentRandomAtack ();
}
function earthAttack(){
  monsterAttackPlayer = 'Earth';
  opponentRandomAtack ();
}
function twinAttack(){
  monsterAttackPlayer = 'Twin';
  opponentRandomAtack ();
}
function opponentRandomAtack (){
  let randomAttack = Random (1, 4);

  if (randomAttack == 1){
    opponentAttack = 'Fire';
  }else if (randomAttack == 2){
    opponentAttack = 'Water';
  }else if (randomAttack == 3){
    opponentAttack = 'Earth';
  }else if (randomAttack == 4){
    opponentAttack = 'Twin';
  }

}
  
function Random(min, max) {
    return Math.round(Math.random()*(max-min+1))+min;
}




window.addEventListener('load', iniciarjuego) //This attribute can be used for tell to browser that load first the html document without matter where is the position of our script in into html document. 


