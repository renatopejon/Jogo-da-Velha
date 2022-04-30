const btn1 = document.querySelector("#one");
const btn2 = document.querySelector("#two");
const btn3 = document.querySelector("#three");
const btn4 = document.querySelector("#four");
const btn5 = document.querySelector("#five");
const btn6 = document.querySelector("#six");
const btn7 = document.querySelector("#seven");
const btn8 = document.querySelector("#eight");
const btn9 = document.querySelector("#nine");
const res = document.querySelector(".turn")
let atual = 'O';
let player1 = new Set([])
let player2 = new Set([])

function checkWinner() {
    let win = 0
    res.innerHTML = `Jogador "${atual}", é a sua vez`
    if (player1.has('q1') && player1.has('q2') && player1.has('q3')) {
        win = 1
    } else if (player2.has('q1') && player2.has('q2') && player2.has('q3')) {
        win = 2
    }

    if (player1.has('q4') && player1.has('q5') && player1.has('q6')) {
        win = 1
    } else if (player2.has('q4') && player2.has('q5') && player2.has('q6')) {
        win = 2
    }

    if (player1.has('q7') && player1.has('q8') && player1.has('q9')) {
        win = 1
    } else if (player2.has('q7') && player2.has('q8') && player2.has('q9')) {
        win = 2
    }

    if (player1.has('q1') && player1.has('q4') && player1.has('q7')) {
        win = 1
    } else if (player2.has('q1') && player2.has('q4') && player2.has('q7')) {
        win = 2
    }

    if (player1.has('q2') && player1.has('q5') && player1.has('q8')) {
        win = 1
    } else if (player2.has('q2') && player2.has('q5') && player2.has('q8')) {
        win = 2
    }

    if (player1.has('q3') && player1.has('q6') && player1.has('q9')) {
        win = 1
    } else if (player2.has('q3') && player2.has('q6') && player2.has('q9')) {
        win = 2
    }

    if (player1.has('q1') && player1.has('q5') && player1.has('q9')) {
        win = 1
    } else if (player2.has('q1') && player2.has('q5') && player2.has('q9')) {
        win = 2
    }

    if (player1.has('q3') && player1.has('q5') && player1.has('q7')) {
        win = 1
    } else if (player2.has('q3') && player2.has('q5') && player2.has('q7')) {
        win = 2
    }

    if (win == 1) {
        swal({
            title: `Jogador 1 venceu!`,
            icon: "success",
            buttom: "Recomeçar",
          })
          .then((reload) => {
            if (reload) {
                document.location.reload(true);
            } 
          });
    } else if (win == 2) {
        swal({
            title: `Jogador 2 venceu!`,
            icon: "success",
            buttom: "Recomeçar",
          })
          .then((reload) => {
            if (reload) {
                document.location.reload(true);
            } 
          });
    } else if (player1.size + player2.size == 9) {
        swal({
            title: `EMPATOU`,
            icon: "warning",
            buttom: "Recomeçar",
          })
          .then((reload) => {
            if (reload) {
                document.location.reload(true);
            } 
          });
    }
    
}

//Button 1
btn1.onmouseover = function() {
    if (!player1.has('q1') && !player2.has('q1')) {
        btn1.style.color = "#00000070";
        btn1.innerHTML = atual;
    } else {
        btn1.style.cursor = "not-allowed";
    }
}
btn1.onmouseout = function() {
    if (!player1.has('q1') && !player2.has('q1')) {
        btn1.innerHTML = ''
    }    
}

btn1.onclick = function() {
    if (btn1.id != 'checked1'){
          if (atual == 'O') {
              if (!player1.has('q1') || !player2.has('q1')) {
                  btn1.style.color = "#000";
                  player1.add("q1")
                  atual == 'O' ? atual = 'X' : atual = 'O'
                  btn1.id = 'checked1'
              } else {
                  atual = atual;
              }
          } else {
              if (!player1.has('q1') || !player2.has('q1')) {
                  btn1.style.color = "#000";
                  player2.add("q1")
                  atual == 'O' ? atual = 'X' : atual = 'O'
                  btn1.id = 'checked1'
              } else {
                  atual = atual;
              }
          }
      }
      checkWinner();  
  }

//Button 2
btn2.onmouseover = function() {
    if (!player1.has('q2') && !player2.has('q2')) {
        btn2.style.color = "#00000070";
        btn2.innerHTML = atual;
    } else {
        btn2.style.cursor = "not-allowed";
    }
}
btn2.onmouseout = function() {
    if (!player1.has('q2') && !player2.has('q2')) {
        btn2.innerHTML = ''
    }    
}

btn2.onclick = function() {
  if (btn2.id != 'checked2'){
        if (atual == 'O') {
            if (!player1.has('q2') || !player2.has('q2')) {
                btn2.style.color = "#000";
                player1.add("q2")
                atual == 'O' ? atual = 'X' : atual = 'O'
                btn2.id = 'checked2'
            } else {
                atual = atual;
            }
        } else {
            if (!player1.has('q2') || !player2.has('q2')) {
                btn2.style.color = "#000";
                player2.add("q2")
                atual == 'O' ? atual = 'X' : atual = 'O'
                btn2.id = 'checked2'
            } else {
                atual = atual;
            }
        }
    }
    checkWinner();  
}

//Button 3
btn3.onmouseover = function() {
    if (!player1.has('q3') && !player2.has('q3')) {
        btn3.style.color = "#00000070";
        btn3.innerHTML = atual;
    } else {
        btn3.style.cursor = "not-allowed";
    }
}
btn3.onmouseout = function() {
    if (!player1.has('q3') && !player2.has('q3')) {
        btn3.innerHTML = ''
    }    
}

btn3.onclick = function() {
    if (btn3.id != 'checked3'){
          if (atual == 'O') {
              if (!player1.has('q3') || !player2.has('q3')) {
                  btn3.style.color = "#000";
                  player1.add("q3")
                  atual == 'O' ? atual = 'X' : atual = 'O'
                  btn3.id = 'checked3'
              } else {
                  atual = atual;
              }
          } else {
              if (!player1.has('q3') || !player2.has('q3')) {
                  btn3.style.color = "#000";
                  player2.add("q3")
                  atual == 'O' ? atual = 'X' : atual = 'O'
                  btn3.id = 'checked3'
              } else {
                  atual = atual;
              }
          }
      }
      checkWinner();  
  }

  //Button 4
btn4.onmouseover = function() {
    if (!player1.has('q4') && !player2.has('q4')) {
        btn4.style.color = "#00000070";
        btn4.innerHTML = atual;
    } else {
        btn4.style.cursor = "not-allowed";
    }
}
btn4.onmouseout = function() {
    if (!player1.has('q4') && !player2.has('q4')) {
        btn4.innerHTML = ''
    }    
}

btn4.onclick = function() {
    if (btn4.id != 'checked4'){
          if (atual == 'O') {
              if (!player1.has('q4') || !player2.has('q4')) {
                  btn4.style.color = "#000";
                  player1.add("q4")
                  atual == 'O' ? atual = 'X' : atual = 'O'
                  btn4.id = 'checked4'
              } else {
                  atual = atual;
              }
          } else {
              if (!player1.has('q4') || !player2.has('q4')) {
                  btn4.style.color = "#000";
                  player2.add("q4")
                  atual == 'O' ? atual = 'X' : atual = 'O'
                  btn4.id = 'checked4'
              } else {
                  atual = atual;
              }
          }
      }
      checkWinner();  
  }

  //Button 5
btn5.onmouseover = function() {
    if (!player1.has('q5') && !player2.has('q5')) {
        btn5.style.color = "#00000070";
        btn5.innerHTML = atual;
    } else {
        btn5.style.cursor = "not-allowed";
    }
}
btn5.onmouseout = function() {
    if (!player1.has('q5') && !player2.has('q5')) {
        btn5.innerHTML = ''
    }    
}

btn5.onclick = function() {
    if (btn5.id != 'checked5'){
          if (atual == 'O') {
              if (!player1.has('q5') || !player2.has('q5')) {
                  btn5.style.color = "#000";
                  player1.add("q5")
                  atual == 'O' ? atual = 'X' : atual = 'O'
                  btn5.id = 'checked5'
              } else {
                  atual = atual;
              }
          } else {
              if (!player1.has('q5') || !player2.has('q5')) {
                  btn5.style.color = "#000";
                  player2.add("q5")
                  atual == 'O' ? atual = 'X' : atual = 'O'
                  btn5.id = 'checked5'
              } else {
                  atual = atual;
              }
          }
      }
      checkWinner();  
  }

  //Button 6
btn6.onmouseover = function() {
    if (!player1.has('q6') && !player2.has('q6')) {
        btn6.style.color = "#00000070";
        btn6.innerHTML = atual;
    } else {
        btn6.style.cursor = "not-allowed";
    }
}
btn6.onmouseout = function() {
    if (!player1.has('q6') && !player2.has('q6')) {
        btn6.innerHTML = ''
    }    
}

btn6.onclick = function() {
    if (btn6.id != 'checked6'){
          if (atual == 'O') {
              if (!player1.has('q6') || !player2.has('q6')) {
                  btn6.style.color = "#000";
                  player1.add("q6")
                  atual == 'O' ? atual = 'X' : atual = 'O'
                  btn6.id = 'checked6'
              } else {
                  atual = atual;
              }
          } else {
              if (!player1.has('q6') || !player2.has('q6')) {
                  btn6.style.color = "#000";
                  player2.add("q6")
                  atual == 'O' ? atual = 'X' : atual = 'O'
                  btn6.id = 'checked6'
              } else {
                  atual = atual;
              }
          }
      }
      checkWinner();  
  }

  //Button 7
btn7.onmouseover = function() {
    if (!player1.has('q7') && !player2.has('q7')) {
        btn7.style.color = "#00000070";
        btn7.innerHTML = atual;
    } else {
        btn7.style.cursor = "not-allowed";
    }
}
btn7.onmouseout = function() {
    if (!player1.has('q7') && !player2.has('q7')) {
        btn7.innerHTML = ''
    }    
}

btn7.onclick = function() {
    if (btn7.id != 'checked7'){
          if (atual == 'O') {
              if (!player1.has('q7') || !player2.has('q7')) {
                  btn7.style.color = "#000";
                  player1.add("q7")
                  atual == 'O' ? atual = 'X' : atual = 'O'
                  btn7.id = 'checked7'
              } else {
                  atual = atual;
              }
          } else {
              if (!player1.has('q7') || !player2.has('q7')) {
                  btn7.style.color = "#000";
                  player2.add("q7")
                  atual == 'O' ? atual = 'X' : atual = 'O'
                  btn7.id = 'checked7'
              } else {
                  atual = atual;
              }
          }
      }
      checkWinner();  
  }

  //Button 8
btn8.onmouseover = function() {
    if (!player1.has('q8') && !player2.has('q8')) {
        btn8.style.color = "#00000070";
        btn8.innerHTML = atual;
    } else {
        btn8.style.cursor = "not-allowed";
    }
}
btn8.onmouseout = function() {
    if (!player1.has('q8') && !player2.has('q8')) {
        btn8.innerHTML = ''
    }    
}

btn8.onclick = function() {
    if (btn8.id != 'checked8'){
          if (atual == 'O') {
              if (!player1.has('q8') || !player2.has('q8')) {
                  btn8.style.color = "#000";
                  player1.add("q8")
                  atual == 'O' ? atual = 'X' : atual = 'O'
                  btn8.id = 'checked8'
              } else {
                  atual = atual;
              }
          } else {
              if (!player1.has('q8') || !player2.has('q8')) {
                  btn8.style.color = "#000";
                  player2.add("q8")
                  atual == 'O' ? atual = 'X' : atual = 'O'
                  btn8.id = 'checked8'
              } else {
                  atual = atual;
              }
          }
      }
      checkWinner();  
  }

  //Button 9
btn9.onmouseover = function() {
    if (!player1.has('q9') && !player2.has('q9')) {
        btn9.style.color = "#00000070";
        btn9.innerHTML = atual;
    } else {
        btn9.style.cursor = "not-allowed";
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