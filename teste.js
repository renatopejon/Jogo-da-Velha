//Button 9
btn9.onmouseover = function() {
    if (!player1.has('q9') && !player2.has('q9')) {
        btn9.style.color = "#00000070";
        btn9.innerHTML = atual;
    }
}
btn9.onmouseout = function() {
    if (!player1.has('q9') && !player2.has('q9')) {
        btn9.innerHTML = ''
    }    
}

btn9.onclick = function() {
    if (btn9.id != 'checked9'){
          if (atual == 'O') {
              if (!player1.has('q9') || !player2.has('q9')) {
                  btn9.style.color = "#000";
                  player1.add("q9")
                  atual == 'O' ? atual = 'X' : atual = 'O'
                  btn9.id = 'checked9'
              } else {
                  atual = atual;
              }
          } else {
              if (!player1.has('q9') || !player2.has('q9')) {
                  btn9.style.color = "#000";
                  player2.add("q9")
                  atual == 'O' ? atual = 'X' : atual = 'O'
                  btn9.id = 'checked9'
              } else {
                  atual = atual;
              }
          }
      }
      checkWinner();  
  }