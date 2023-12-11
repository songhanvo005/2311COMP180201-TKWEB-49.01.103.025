$(document).ready(function() {
    
    var $item = $('div.item'), 
        visible = 3, 
        index = 0, 
        endIndex = ( $item.length / visible ) - 1; 
    
    $('div#arrowR').click(function(){
        if(index < endIndex ){
          index++;
          $item.animate({'left':'-=350px'});
        }
    });
    
    $('div#arrowL').click(function(){
        if(index > 0){
          index--;            
          $item.animate({'left':'+=350px'});
        }
    });   
});
        