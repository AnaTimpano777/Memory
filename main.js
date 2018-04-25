$(document).ready(function() {
    $('img').on({
    'click': function(){
        $(this).attr('src',$(this).data('card'));
        $(this).addClass('flipped');
        if($('.flipped').length > 1) {
            if($('.flipped').eq(0).data('card') == $('.flipped').eq(1).data('card')) {
                alert('You have matched the cards you lucky duck!');   
                //remove from field
            }
            else {
                alert('You clicked the wrong one.... Click the right one next time!');    
                //flip back over
             }
        }
    }
});
});
    
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

//



