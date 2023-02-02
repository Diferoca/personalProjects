
function iniciarjuego() {
  let bottonMosterPlayer = document.getElementById('button-selectMosnter');
  bottonMosterPlayer.addEventListener('click', selectMosterPlayer);
}

// TODO: The property checked is used for ckeck if the id was selected by the user. 

function selectMosterPlayer (){
  if (document.getElementById('Tsunami').checked){
    alert('You have selected Tsunami')
  }
  else if (document.getElementById('Earthquake').checked){
    alert('You have selected Earthquake')
  }
  else if (document.getElementById('Firewave').checked){
    alert('You have selected Firewave')
  }
  else if (document.getElementById('Cloneboth').checked){
    alert('You have selected Cloneboth')
  }
  else if (document.getElementById('Cloneboth+').checked){
    alert('You have selected Cloneboth+')
  }
  else if (document.getElementById('Cloneboth++').checked){
    alert('You have selected Cloneboth++')
  }
  else {
    alert('You did not select any mosnter')
  }
}


window.addEventListener('load', iniciarjuego) //This attribute can be used for tell to browser that load first the html document without matter where is the position of our script in into html document. 