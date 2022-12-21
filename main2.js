var playerOne = document.getElementById("red");
var playerTwo = document.getElementById("green");
var playerThree = document.getElementById("blue");
var playerFour = document.getElementById("orange");
var playerFive = document.getElementById("yellow");
var Speed;
var Deceleration = 1;
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
function startGame() {
    // setTimeout(function () {

    // }, 10)
    document.getElementById("red").src = "img/run.gif";
    document.getElementById("green").src = "img/run.gif";
    document.getElementById("blue").src = "img/run.gif";
    document.getElementById("orange").src = "img/run.gif";
    document.getElementById("yellow").src = "img/run.gif";
    var playerOnePos = 0;
    var playerTwoPos = 0;
    var playerThreePos = 0;
    var playerFourPos = 0;
    var playerFivePos = 0;
    var resultstr = "";
    function finish() {

        if (playerOnePos >= document.body.clientWidth - 80) {
            Swal.fire({
                title: '1번 말이 승리했습니다!',
                imageUrl: 'https://images.emojiterra.com/twitter/512px/1f389.png',
                imageWidth: 230,
                imageHeight: 230,
                imageAlt: 'Custom image',
              })
            playerOne.style.paddingLeft = document.body.clientWidth - 80 + 'px';

        } if (playerTwoPos >= document.body.clientWidth - 80) {
            Swal.fire({
                title: '2번 말이 승리했습니다!',
                imageUrl: 'https://images.emojiterra.com/twitter/512px/1f389.png',
                imageWidth: 230,
                imageHeight: 230,
                imageAlt: 'Custom image',
              })
            playerTwo.style.paddingLeft = document.body.clientWidth -180 + 'px';

        } if (playerThreePos >= document.body.clientWidth - 80) {
            Swal.fire({
                title: '3번 말이 승리했습니다!',
                imageUrl: 'https://images.emojiterra.com/twitter/512px/1f389.png',
                imageWidth: 230,
                imageHeight: 230,
                imageAlt: 'Custom image',
              })
            playerThree.style.paddingLeft = document.body.clientWidth - 80 + 'px';

        } if (playerFourPos >= document.body.clientWidth - 80) {
            Swal.fire({
                title: '4번 말이 승리했습니다!',
                imageUrl: 'https://images.emojiterra.com/twitter/512px/1f389.png',
                imageWidth: 230,
                imageHeight: 230,
                imageAlt: 'Custom image',
              })
            playerFour.style.paddingLeft = document.body.clientWidth - 80 + 'px';

        } if (playerFivePos >= document.body.clientWidth - 80) {
            Swal.fire({
                title: '5번 말이 승리했습니다!',
                imageUrl: 'https://images.emojiterra.com/twitter/512px/1f389.png',
                imageWidth: 230,
                imageHeight: 230,
                imageAlt: 'Custom image',
              })
            playerFive.style.paddingLeft = document.body.clientWidth - 80 + 'px';

        }
        console.log(resultstr)
        // return horses to their starting position
        playerOne.style.paddingLeft = 0;
        playerTwo.style.paddingLeft = 0;
        playerThree.style.paddingLeft = 0;
        playerFour.style.paddingLeft = 0;
        playerFive.style.paddingLeft = 0;
    }

    var id = setInterval(frame, 45);
    function frame() {
       let flagtest = 0;

        if (playerOnePos >= document.body.clientWidth - 80
            || playerTwoPos >= document.body.clientWidth - 80
            || playerThreePos >= document.body.clientWidth - 80
            || playerFourPos >= document.body.clientWidth - 80
            || playerFivePos >= document.body.clientWidth - 80) {
            flagtest = 1;
            finish();
            clearInterval(id);
        }
        if (playerOnePos >= document.body.clientWidth - 620
          || playerTwoPos >= document.body.clientWidth - 620
          || playerThreePos >= document.body.clientWidth - 620
          || playerFourPos >= document.body.clientWidth - 620
          || playerFivePos >= document.body.clientWidth - 620) {
            Deceleration = parseInt(document.getElementById('dec').value);
      } if (flagtest == 0) {
            //Speed = ;
            playerOnePos += (rand(parseInt(document.getElementById('minspd').value), parseInt(document.getElementById('maxspd').value)) / (Deceleration == 1 ? 1 : Deceleration * rand(1,5)));    
            playerOne.style.paddingLeft = playerOnePos + 'px';
            

            playerTwoPos += (rand(parseInt(document.getElementById('minspd').value), parseInt(document.getElementById('maxspd').value)) / (Deceleration == 1 ? 1 : Deceleration * rand(1,5)));
            playerTwo.style.paddingLeft = playerTwoPos + 'px';

            playerThreePos += (rand(parseInt(document.getElementById('minspd').value), parseInt(document.getElementById('maxspd').value)) / (Deceleration == 1 ? 1 : Deceleration * rand(1,5)));
            playerThree.style.paddingLeft = playerThreePos + 'px';

            playerFourPos += (rand(parseInt(document.getElementById('minspd').value), parseInt(document.getElementById('maxspd').value)) / (Deceleration == 1 ? 1 : Deceleration * rand(1,5)));
            playerFour.style.paddingLeft = playerFourPos + 'px';

            playerFivePos += (rand(parseInt(document.getElementById('minspd').value), parseInt(document.getElementById('maxspd').value)) / (Deceleration == 1 ? 1 : Deceleration * rand(1,5)));
            playerFive.style.paddingLeft = playerFivePos + 'px';
        }
    }

}

document.getElementById("stop-button").addEventListener("click", function () {
    location.reload();
})

document.getElementById("start-button").addEventListener("click", function () {
    let timerInterval
    console.log(document.getElementById('cool'))
Swal.fire({

  html: '<b></b>초 뒤에 경기가 시작됩니다.',
  timer: parseInt(document.getElementById('cool').value) * 1000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()/1000
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
    startGame();
})

})