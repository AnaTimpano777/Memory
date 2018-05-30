var score = 0;
var cards = new Array();

cards[0] = "images/ace-spades.png";
cards[1] = "images/ace-spades.png";
cards[2] = "images/two-spades.png";
cards[3] = "images/two-spades.png";
cards[4] = "images/three-spades.png";
cards[5] = "images/three-spades.png";
cards[6] = "images/four-spades.png";
cards[7] = "images/four-spades.png";
cards[8] = "images/five-spades.png";
cards[9] = "images/five-spades.png";
cards[10] = "images/six-spades.png";
cards[11] = "images/six-spades.png";

resetField();

$(document).ready(function() {
    if(localStorage.score != undefined) {
        score = localStorage.score;
        $('#score').text(score);
    }
    $('#field img').on({
    'click': function(){
         if($('.flipped').length > 1) {
            return false;   
         }
        $(this).attr('src',$(this).data('card'));
        $(this).addClass('flipped');
        if($('.flipped').length > 1) {
            if($('.flipped').eq(0).data('card') == $('.flipped').eq(1).data('card')) {
                 $('.flipped').addClass('match');
                setTimeout(function() {
                    $('.flipped').attr('src','images/silhouette.png');
                    $('.flipped').removeClass('match');
                    $('.flipped').removeClass('flipped');
                    checkWin();
                },600);
            }
            else {
                  $('.flipped').addClass('fail');
                setTimeout(function() {  
                    $('#field IMG').not('[src="images/silhouette.png"]').attr('src','images/back.png');
                    $('.flipped').removeClass('fail');
                    $('.flipped').removeClass('flipped');
                },600);
             }
            
        }
    }
});
});

function checkWin() {
    if($('#field IMG').not('[src="images/silhouette.png"]').length == 0) {  
        $("#win").show();
        $('BODY').addClass('confetti');
        $('[src="images/silhouette.png"]').hide();
        score++;
        localStorage.score = score;
        $('#score').text(score);
        setTimeout(function() {
            if(confirm('Do you want to play again?')) {
                resetField();   
            }
        },2500);
    }
}

function resetField() {
    $('[src="images/silhouette.png"]').show();
    $("#win").hide();
    $('BODY').removeClass('confetti');
    $("#field IMG").show();
    $('.flipped').removeClass('flipped');
    $("#field IMG").attr('src','images/back.png');
    $("#field IMG").removeClass('match');
    
   cards = shuffle(cards);

$('#field IMG').each(function(counter) {
    $(this).data('card', cards[counter])
    
    $(this).attr('src',$(this).data('card'));
    $("#refresh").hide();
});

  setTimeout(function() {
                    $('#field IMG').attr('src','images/back.png');
                },2000);

    
}
    
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//add border and make it stay, woop woop
//Reset the score (button)
//Once you click a card and it is flipped after a few seconds make it turn back to back.png
//Have a person enter there name and remember their individual score attached to their name
// localStorage.name = prompt('What is thy name?');


