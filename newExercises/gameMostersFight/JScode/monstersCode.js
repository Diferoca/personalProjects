
function iniciarjuego() {
  let bottonMosterPlayer = document.getElementById('button-selectMosnter');
  bottonMosterPlayer.addEventListener('click', selectMosterPlayer);
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
  function numRandom(min, max) {
    Math.round(Math.random()*(max-min+1))+min;
  }
  let opponentAtack = numRandom (1, 4);
  let spanMonsterOpponent = document.getElementById('monsterOpponent');

  if (opponentAtack == 1){
    spanMonsterOpponent.innerHTML = 'Tsunami';
  }
  else if(opponentAtack == 2){
    spanMonsterOpponent.innerHTML = 'Earthquake';
  }
  else if(opponentAtack == 3){
    spanMonsterOpponent.innerHTML = 'Firewave';
  }
  else{
    spanMonsterOpponent.innerHTML = 'Cloneboth0';
  }
  
}

window.addEventListener('load', iniciarjuego) //This attribute can be used for tell to browser that load first the html document without matter where is the position of our script in into html document. 