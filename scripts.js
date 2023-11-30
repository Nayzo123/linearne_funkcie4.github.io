function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var timeLeft = 15;
    var elem = document.getElementById('counter');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        document.body.classList.add('error');
        clearTimeout(timerId);
        setCookie('currentTotalScore', parseInt(getCookie('currentTotalScore')) + 8000, 999)
        setCookie('currentTotalTries', parseInt(getCookie('currentTotalTries')) + 1, 999)
        alert("Vypršal ti čas")
        const numberOfTries = getCookie('currentTotalTries');
        if (parseInt(numberOfTries) == 5) {
          alert(`Skončila sa hra, tvoje skóre je ${getCookie('currentTotalScore')} a mal si 10 pokusov `)
          setCookie('currentTotalTries', "", 999) 
          setCookie('currentTotalScore', "", 999)
        }
      } else {
        elem.innerHTML = timeLeft + ' sekúnd ostáva';
        timeLeft--;
      }
    }
  
const maxNumber = 350;
x = 10





const linearFunctions = [
    {
        definition: '9x + 35 * 20',
        handler: function(x) {
            return 9 * x + (35 * 20);
        }
    },
    {
        definition: '(8x + 11) / 3',
        handler: function(x) {
            return (8 * x  + 11) / 3;
        }
    },
    {
        definition: '6 * (4x + 10)',
        handler: function(x) {
            return 6 * (4 * x + 10);
        }
    },
    {
        definition: '-25 + (20 -9x)',
         handler: function(x) {
          return -25 + (20 -9 * x);
      }
  },     
]

const index = Math.floor(Math.random() * linearFunctions.length);
const pickedFunction = linearFunctions[index];

const functionFormElement = document.getElementById('functionForm');
functionFormElement.textContent = pickedFunction.definition;

const xValue = Math.round(Math.random() * maxNumber);
const xValueElement = document.getElementById('xValue');
xValueElement.textContent = xValue;



function submit() {        
    if (document.getElementById('yValue').value == '') {
        alert('Prosím zadaj číslo');
        return;
    }

    const yValue = pickedFunction.handler(xValue);
    const userYValue = parseInt(document.getElementById('yValue').value);    

    if (userYValue !== yValue) {
        document.getElementById('successOrFail').textContent = `Si vedľa o ${Math.abs(yValue - userYValue)}`
        document.body.classList.add('error');
        
        clearTimeout(timerId);
    } else {
        document.getElementById('successOrFail').textContent = 'Gratulujem uhádol si správne číslo'
        document.body.classList.add('success');
        clearTimeout(timerId);
    }

    let currentScore = Math.abs(yValue - userYValue)
    console.log(userYValue)
    
      const score = getCookie('currentTotalScore');
    if (score === '') {
        setCookie('currentTotalScore', currentScore, 999)
    } else {
      const newScore = parseInt(score) + parseInt(currentScore);
      setCookie('currentTotalScore', newScore, 999)
    }
        
    numberOfTries = getCookie('currentTotalTries');
    if (numberOfTries === '') {
        setCookie('currentTotalTries', 1 , 999)
    } else {
        if (parseInt(numberOfTries) == 9) {
          alert(`Skončila sa hra, tvoje skóre je ${getCookie('currentTotalScore')} a mal si 10 pokusov `)
          setCookie('currentTotalTries', "", 999) 
          setCookie('currentTotalScore', "", 999)
        } else{
          newNumberOfTries = parseInt(numberOfTries) + 1;
          setCookie('currentTotalTries', newNumberOfTries, 999)
        }}

      }


function reset() {
    location.reload();
}

function resetAndRestart() {
  setCookie('currentTotalTries', 0, 999) 
  setCookie('currentTotalScore', 0, 999)
  location.reload();
}